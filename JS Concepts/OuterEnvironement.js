function a() {
    var t = 2;
    b();
    k = 5;
    console.log(" Inside  A  k :" + k);
}

function b() {
    console.log(" Inside b " + t); // Prints 1 because, global is the outer scope for both a and b
}
var t = 1;
var k = 3;
console.log(" Inside global K " + k);
a();
console.log(" Inside global K " + k);
// c(); // TypeError: c is not a function, though var c and function is created at creation phase, var c get function object only at execution phase
d(); // D is already created in creation phase of execution context
var c = function () {
    console.log(" Inside c " + t);
}

function d() {
    console.log(" Inside d " + t); // Prints 1 because, global is the outer scope for both a and b
}

function a2() {
    var t2 = 22;
    b2(); // b2() cannot be invoked from global scope or other outer scope becaue b2() is under a2() lexecal scope 
    // Because during exuection context creation phase only a2() is sitting in the memory , and its only when a2() executing you have b2() in memory and thus it executes, 
    function b2() {
        console.log(" Inside b2 " + t2);
        console.log(" Inside b2 " + t3);
        console.log(" Inside b2 this " + this.t2); // Prints 1 
    }
}
var t2 = 1;
var t3 = 3;
a2();
// b2(); // unrefferenced error