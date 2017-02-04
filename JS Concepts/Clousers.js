// closures 
var outer = function (out) {
    return function (inner) {
        console.log("out" + out + "  " + " inner" + inner); // out is still reference through outerEnvironment.
    }
}
var inn = outer(" India ");
/*after this executes, outer is poped off from the execution stack , but the variables inside outer function is still somewhere in the memory ( its not garbage collected by js engine) and it is refrenced by inner function ( inner means physically located insde outer function not just invocation ) through its OuterEnvironment that special property called *** CLOSURE **** */
/*
From console log   
<function scope>
Closure
out
:
" India "
Global
:
Window*/
inn("karnataka");
// For more understanding check out 47_understanding_closure_part_2
// factories using closures 
function greetFac(lang) {
    return function (name) {
        if (lang === "kn") console.log(" Namaskara " + name);
        if (lang === "en") console.log(" Hello " + name);
    }
}
var greetKan = greetFac("kn"); // saperate execution context and using clousre returned function points to that execution context //memory even after execution context for greetFac was poped off the stack
var greetEn = greetFac("en");
greetKan("Ravi");
greetEn("Ravi");
// Here all there function in array have same outer environement.
function test3() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(function () {
            console.log(" I value is " + i)
        });
    }
    return arr;
}
var arr2 = test3();
arr2[0]();
/*
anaoymous function is physically exist inside test3 so outer points to execution context memory of test3, so all 
function points to i variable which is 3
*/
arr2[1]();
arr2[2]();
// call back
function caller(callback) {
    var calName = "ravi";
    callback();
}
caller(function () {
    console.log(" call back 1");
    /*
        calName is not defined here, because callbacnk is not defined inside caller, its just called inside caller
    */
});
caller(function () {
    console.log(" call back 2");
});