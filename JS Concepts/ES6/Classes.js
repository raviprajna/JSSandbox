"use strict";
class Person {
    constructor(name) {
        this.name = name;
        console.log(this.name);
    }
    get sayBye() {
        console.log(" Bye ", this.name);
    }
    static className() {
        console.log("Person");
    }
}
var ravi = new Person("Ravi");
Person.prototype.sayHello = function () {
    console.log("Hello", this.name);
}
ravi.sayHello();
ravi.sayBye; // with get keyword you can directly invoke function without ()
Person.className();
// ravi.className(); // static function can only be invoked by class ( it works quite similar to java class)
class Employee extends Person {
    constructor(company) {
        super(); // when you extends Person this is not defined, if super() is not invoked
        this.company = company;
    }
    get me() {
        console.log(" Hi my name is ", this.name, "I work for ", this.company);
    }
}
/*var tcsRavi = new Person("TCS");
tcsRavi.me; // surprisingly this does not through error - need to investigate furthur  */
var tcsRavi = new Employee("TCS");
tcsRavi.me;