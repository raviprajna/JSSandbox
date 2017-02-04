// Inheritance Examples
//
//
// Prototypes is accessed with special prorety __proto__ this is not auto suggested 
var a = {};
var b = function () {
    console.log("Hello")
};
var c = "";
var d = []; // this will have array prototype 
/*
Console Test :
a
Object {}
b
() {
    console.log("Hello")
}
c
""
d
[]
a.__proto__
Object {}
b.__proto__
() {}
b.__proto__.__proto__
Object {}
c.__proto__
String {length: 0, [[PrimitiveValue]]: ""}
c._proto__.__proto__
VM371:1 Uncaught TypeError: Cannot read property '__proto__' of undefined(…)(anonymous function) @ VM371:1
c.__proto__.__proto__
Object {}
d.__proto__
[]
*/
var person = {
    name: " Person Name"
    , country: "India"
    , welcome: function () {
        console.log(" Welcome to " + this.country + ", " + this.name);
    }
}
var manu = {
    name: "Manu"
};
manu.__proto__ = person; // never directly modify proto just for demo perpose
manu.welcome();
// Reflection, getting all property of object manu using for in loop
for (var p in manu) {
    console.log(p + " : " + manu.p + "  or  " + manu[p]); // manu.p should work, check why it is not working
    // It grabs all the property from proto type chain ex : welcome and country is also pulled.
    // if you want only this object propetty use hasOwnProperty
    if (manu.hasOwnProperty(p)) console.log(p + "  is object own property ");
    else console.log(p + "  is from property from prototype ");
}
// in underscore libraryu have function extend this used reflection to parse all propreties of one object and add it to another //object
// extend is different between extends (in es6)
// so extend and prototye are patterns for inheritance
function Person(name) {
    this.name = name;
}
Person.prototype.printName = function () {
        console.log(this.name);
        return this.name;
    }
    // Note : Person.__proto__ points to top level prototype function () {}
    // Person.__proto__
    // function() {}
    // Person.prototype : "prototype" is one of the property of function which is used to define prototypes which can 
    // be used by the object returned by function
    // Now all the objects returned by Person ( not just Person() function -- this points to Object() proto --
    // but new Person() -- this points to Person() proto -- )
    // will have their __proto__ points to Person Prototype which has printName function
    // Problem with For in with arrays 
var arr = [1, 2, 3];
Array.prototype.oneMoreProp = "This is new prop";
for (var prop in arr) {
    console.log(prop + " " + arr[prop]);
}
console.log(" arr.lenght " + arr.length);
/*oneMoreProp This is new prop
 arr.lenght 3 incase of arrays use normal for loop
 */
// Pure prototypical inheritance 
var raviProto = {
    name: "ravi"
    , country: "India"
};
// Note : you cannot use .prototype because is a property of function not the object.
raviProto.sayHello = function () {
    console.log(" say Hello");
};
var ravi2 = Object.create(raviProto);
raviProto.sayHelloAgain = function () {
    console.log(" say Hello Again");
};
ravi2.sayHello();
ravi2.sayHelloAgain();
// Print apgain, because through proptotye chain it can still reach sayHellogain though it was not present 
// while ravi2 was created