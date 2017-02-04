// Es6 JS
//
// Destructuring new syntax
// array destructuring 
var a = ["a_one", "a_two", "a_three"];
console.log(a);
var [one, two, three] = [1, 2, 3];
console.log(one, two, three);
[one, two] = a;
console.log(one, two, three);
// objects destructuring
var o = {
    name: "Ravi"
    , country: "India"
};
console.log(o);
var o2 = o;
console.log(o2);
// Unlike array in objects you have to use same name , name2 will be undefined
var {
    name, country
} = o;
console.log(name, country);

//
//
// var let and constants 
function hello() {
    fa = "aaaa"; // since you dint define it bounce back till window scope
    // you can use strict mode to avoid this
    var fb = "bbbbbbbbb";
    let lb = "lbbbb";
    if (true) {
        var fc = "cccccc";
        var fb = "inner bbbb";
        let lc = "lbbbb";
        console.log(fa, fb, fc);
        console.log(lb, lc);
    }
    console.log(fa, fb, fc); // it prints fc because var is function scope and if you want block scope you need let 
    // console.log(lb, lc); // lc not defined, let is block scope 
}
hello();
// console.log(fa, fb, fc); // fb , fc not defined var function scope
console.log(fa);
//
// const
const ca = "aa";
// const cb; you cannot just declare with const you will get missing initializer error
const cb = "bb"
    // ca = "aa Changed "; // assignement to const variable error 
console.log(ca, cb);
// constant variable once declared cannot be changed, incase of object you cannot change Object reference but you can still change
// its property value ;
const oa = {
    name: "ravi"
};
var ob = {
    name: "manu"
};
console.log(oa, ob);
// oa = ob; // assignement to const variable error
console.log(oa, ob);
oa.name = "praju";
console.log(oa, ob);
// For complete immutability you need to use your own
//
//
// spread operator 
function hi(name, greet) {
    console.log(name);
}

var greet = ["ravi", " Welcome"];
hi(greet); // here first object of function gets array object
function hi2(name, greet, ...other) {
    // all the overflowing parameters are strutured into other array
    console.log(name);
    console.log(other);
}
var greet2 = ["ravi", " Welcome", "ddd", "222", "333"];
hi2(...greet2); // ... is a spread operator which will destructure array to parameters of function
//
//
//
// fat arrows is replacement for function keyword
// and few more, 1. short hand code, this stilll points to outer function with arrouw we need not use that variable.
var ar = [1, 2, 3, 4];
var ar2 = ar.map(function print(item) {
    console.log(item);
    return item * item;
});
console.log("arr2", ar2);
var ar3 = ar.map((item) => {
    console.log(item);
    return item * item;
});
console.log("arr3", ar3);
var ar4 = ar.map(item => item * item);
console.log("arr4", ar4);

function Person() {
    that = this;
    that.age = 1;
    setTimeout(function growUp() {
        that.age++;
        console.log(" Your age P1" + that.age);
    }, 1000)
}
var p = new Person();

function Person2() {
    this.age = 1;
    // in this scenario using arrow function this is still pointing to its parent this onject 
    // growUp() is throwing error, call growUp or just ()
    setTimeout(growUp => {
        this.age++;
        console.log(" Your age P2" + this.age);
    }, 1000)
}
var p2 = new Person2();
//
//
// templates , usefull for formating and string interpolation 
var abc = "hhsdfkslf";
console.log(`Hello
             world`);
console.log(`This is the value of abc ${abc} ---- `); // interpolation symbol