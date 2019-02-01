var a = "Kashi";
var aaa = " Print this is in another JS file place below the curret js file in HTML head tag ";
var b = function () {
    return "Kashi";
};
// named function and function statement
function addNum(a, b) {
    console.log(a + b);
}
addNum(100, 1100);
// anonymous function expresssion , note it uses "=" operator and function object is created on fly, not during hoisting like function statement .
var c = function () {
    return "Kashi";
}();
var d = function () {
    "Kashi";
};
e = "Kashi";
var f;
// f();
// Anonymous function assigned to f, equal operator puts the function in memory and returns the function to f 
// ex a = 3; 3 is put into memory and 3 is returned to a 
f = function () {
    var t = 1;
    var h = '1';
    if (t == undefined) console.log(" t == undefined ");
    if (t === undefined) console.log(" t === undefined ");
    if (t == h) console.log(" t == h ");
    if (t === h) console.log(" t ===  h ");
}
f();
// Self execting anonymous function , we are using "()" this is operator , so now function is not a statement, its a expression and it creates and executes function on fly and return the value returned by function in this case it s undefined.
(function () {
    if (true) {
        var m;
        let n; // not referenced and also has block sope rather then lexical scoping 
        console.log(m); // undefined
        console.log(n); // not referenced and also has block sope rather then lexical scoping
        m = 10;
        n = 5;
        console.log(m);
        console.log(n);
    }
    console.log(m);
    // console.log(n); // block scoping with let , n un referenced
    console.log("IIFE 1")
})();
(function () {
    console.log("IIFE 2")
}());
// self executing named function named function - IIFE immediatly invoke function expression
/*
Not the proper way
function dis2(a, b) {
    console.log(" IFEE withour expression or () operator  will not work " + a + b);
}(10 + 20);*/
var dis4 = function (a) {
    console.log("Inside IIFE " + a);
}(3);
console.log(dis4); // dis4 is value returned after executing IIFE so its "Inside IFEE a" if we had return, otherwise undefined
var dis4 = function (a) {
    console.log("Inside IIFE " + a);
};
console.log(dis4); // dis4 is function here
// Note but when I try to execute 
// function disHello() { console.log("Hello "); }(); // SyntaxError: expected expression, got ')'
// But this works 
// (function dis4() { console.log("Hello"); })();