function sayHello() {
    console.log(" Hello from hello Module");
}

function sayBye() {
    console.log(" Bye from hello Module");
}
// node creates a module.export object so rather than exporting each item ,
// we can place all the itesm inside module.export object directly
module.exports = {
    'hello2': function () {
        console.log(" Hello2 from hello Module");
    }
    , 'hello3': function () {
        console.log(" Hello3 from hello Module");
    }
}
module.exports.helloMet = sayHello;