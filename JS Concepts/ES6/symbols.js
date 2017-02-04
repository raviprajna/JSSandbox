// sym
var sy = Symbol("Plus");
console.log(typeof sy);
// symbols are not equal to symbol
console.log(Symbol("Plus") === Symbol("Plus"));
// because symbols always generated unique value they are never equal, usecase : css animations
console.log(String("Plus") === String("Plus"));
//
//
// Generators : all generators should be iterable 
function* inc() {
    var index = 0;
    while (index < 3) {
        yield index++;
    }
}
var gen = inc(); // it iterates 3 time and sets done : true , yeild and function* are keyword for generator
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
// maps
var mp = new Map();
// similarly we have weakMap which maintains weak references
// Investigate furthur and know the differences , in general weakmap has efficient garbage collection and not iterable
// simialrly we have set and weakSet except weakSet can contain only Objects
console.log(mp);
mp.set('name', 'ravi');
mp.set(1, 'one');
mp.set(o1, 'Object 1');
console.log("Hoisting ", mp.get(o1)); // it works because of hositing
console.log(mp);
var o1 = {};
var o2 = {};
var wmp = new WeakMap();
console.log(wmp);
wmp.set(o2, 'Object 2');
console.log(wmp.get(o2));
o2 = {
    "gggg": "gggg"
};
o1 = {
    "gggg": "ggg"
};
console.log(wmp.get(o2));
console.log(mp.get(o1));
console.log(wmp);
console.log(mp);
o1 = null;
o2 = null;
console.log(wmp.get(o2));
console.log(mp.get(o1));
console.log(wmp);
console.log(mp);