// classes
class Greet {
    constructor(nam) {
        this.name = nam;
    }
    greet() {
        console.log(" hello " + this.name);
    }
}
var ram = new Greet(" ram ");
ram.greet();
class GreeKannada extends Greet {
    /*
    constructor is optional when you extend, use super to call parent class constructor
    constructor(nam) {
        super(nam)
    }*/
    greet() {
        console.log(" Namaskara " + this.name);
    }
}
var ramKan = new GreeKannada(" ram ");
ramKan.greet();
/*****
Note : Class in javascript is also an object, class functionConstructors are just syntatical sugar to help those 
developer from java,c++ programers. Its is always eay to use pure prototypical inheritance, both class and 
    functinalContarotors internally gets converted into object to help prototype inheritance
    *****/
console.log(typeof null); // its a bug in JS it prints : Object
console.log(ram instanceof Greet);
console.log(typeof ram.greet); // function ram.greet() will be undefined because it is not ruturning anything
// "use strict" to tell compiler to be more strict while parsing the code
// if not it will be more liberal and flexible
var ravi;
raiv = "Ravi";
console.log(raiv);
// if you use strict this is will thorw unreferenced error. use strict at the top of the js file or first line of the function