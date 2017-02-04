// Object 
// Objects creation using Object Literal 
var english = {};
// Creating object using built in Object function
var kannada = Object();
// Faking Namespace to avoid "langu" variable collision 
english.langu = "English";
kannada.langu = "Kannada";
// Object creation using new operator 
// Using New operator essentially invokes a function before ecexuting function code
// it create a empty object and assigns this to that object and at the end it return the created objects 
// so dont explictly write return on such function 
function Person2(name) {
    this.name = name;
}
// if u invoke function with new keyword its called functionConstructors 
var manu = new Person2("Manu");
var ravi = new Person2(" Ravi");
var pf1 = function () {
    var person = new Object();
    var prop = "FN";
    person[prop] = "ravi"; // this is only usefull when you want to look up for property dynamically 
    person.LN = "Prajna";
    console.log(person);
}
pf1();
// Creating Object by pointing object to some other object prototype 
var ravi2 = Object.create(ravi);
console.log(" nravi 2" + ravi2);
// Creating Objectes using object literal
var pf2 = function () {
    var person = {
        FN: "Ravi"
        , LN: "Prajna"
        , address: {
            city: "Hunsur"
            , county: "India"
        }
    };
    person.MN = "PRA";
    console.log(person);
    // Note : Some JSON parser need properties to be in quotes ex : "FN" instead of FN.
    // JSON and Object literal are not similar except they look similar. JSON was just a easy way to transport data 
    // So either use "" with Object literal or use below code 
    JSON.stringify(person);
    console.log(person);
}
pf2();
// Function are special type of Object, you can add primitives, object, function to it. 
// it has 2 other special property Name and Code ( this property is invocable with "()")
function firstClassFunction() {
    console.log(" firstClassFunction  ");
}
firstClassFunction.test3 = "Test3"; // Primitive added 
firstClassFunction.test4 = {
    one: "One"
    , two: "two"
}; // Object added 
console.log(firstClassFunction);
var a = 1;
var b = a; // pass by value for all primitives, both a and b points to different memory location which contains same primitive value , meaning changing a=3 will not change b.
var aa = {
    a: "1"
};
var bb = aa; // Pass by reference for all objects.
aa.a = 2; // this will also change bb.a = 2, because both aa and bb points to same object in memory.
aa = {
    a: "2"
    , b: "3"
}; // this creates a brand new object and equals operator will return a new object in a new memory //location, so now a is no more pointing to old object location.
// so changing aa.a = 3 will not reflect in bb.a value;
//.
//.
// This Object variation 
function A() {
    console.log(this); // this = window object
}
var B = function () {
    console.log(this); // this = window object
}
A();
B();
var C = {
    name: "Test"
    , met: function () {
        var that = this; // Copied by reference 
        // rather than using above pattern you can also make use of call apply and bind, for example see at the end of this page
        console.log(name); // Need to check why name is empty or "" here 
        console.log(this.name); // this points to "C" object.
        var innerMet = function () {
            console.log(this); // here this points to global instead of C object even though method is inside C object
            // this is one of the wiered part or a bad decesion , to overcome this issue in the begining of outer function assign this to someother variable.
            console.log(that); // point to C object
        }
        innerMet();
        // this.innerMet();
    }
}
C.met();
(function () {
    console.log(" This inside IIFE" + this);
}());
// Note : this points to the left of the dot ., met() here not left to dot is global Object , C.met() here its C object .
// Array also as objects .
// [] is also operator 
var arr = [1
          , "Ravi"
          , true
          , undefined
    , {
        a: "A"
        , b: "B"
    }







    
    , function () {
        console.log(" WOW !!! I am inside array ")
        console.log(" Lets see what this points to  " + this + this[1]) // this points to array object.
    }
          ]
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]());
// even for add(1,2) the most near function is called , if you change the physical location then this function is called 
function add(a, b) {
    for (var i = 0; i < arguments.length; i++) console.log(arguments[i]);
}
// argument is a special array of parameter available for any function 
// it looks like an array and has most features of array, it it lacks some of the array features.
function add(a, b, c, ...others) {
    if (arguments.length === 0) {
        console.log(" Missing params ")
        return
    } // semicolon is automatically inserted by parser when it required, ex : new line after return, new line after var do not work, becaue it not required there  
    // But this auto insertion can cause problem, when 
    /*return 
    {
        a : "Hello"
    }
    so we always use return {
    a : "Hello"
    }
    to avoid this kind of weired issue 
    */
    for (var i = 0; i < arguments.length; i++) console.log(arguments[i]);
    if (arguments.length > 3) console.log(others); // other is also like argument array it contains extra params 
}
add();
add(1, 2);
add(1, 2, 3, 4, 5, 6); // prints 1,2,3,4,5,6 and other  4,5,6
//
//
//
// To control to which variable this points to use call bind and apply
// call bind and apply are the special properties attached to function object( so u can invoke with functio.bind not function().bind
//
var person = {
    name: "Ravi"
    , met: function () {
        console.log(" Person - this . name " + this.name);
    }
}
person.met();
var logPer = function (one, two) {
    console.log(one + two + " logPer - this . name " + this.name);
}
var logPer2 = logPer.bind(person);
/*using bind you can attach object to this and it returns copy of the function and does not executes it */
logPer2();
logPer.call(person, 1, 2); // call does not copy function and return, it executes same function 
logPer.apply(person, [1, 2]); // same as call but takes array of function arguments
// call and apply is used basically for function borowing, where you can pass any person with name property 
// bind is used for function currying 
var multi = function (a, b) {
    return (a * b);
}
var multiBy2 = multi.bind(this, 2);
// we need not care about this obeject here, bind return copy of the function and the first param will always be 2 in copied function 
var multiBy3 = multi.bind(this, 3);
console.log(" Fun Curry ex : " + multiBy2(4)); // function currying 
console.log(" Fun Curry ex : " + multiBy3(4));