// functional programing
/*In this type of programming we write common code in first class function and attach them into our object and re use it every where , this reduces lot of code duplication 
Its possible because we can pass function as parameters to another function */
var arr = [1, 2, 3];
var mapArr = function (arr, fun) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (fun(arr[i])) newArr.push(fun(arr[i]))
    }
    return newArr;
}
var arr2 = mapArr(arr, function (elem) {
    if (elem > 2) return elem;
})
console.log(arr);
console.log(arr2);
// Check out open source code for undersocre.js and loadash.js this has lot of functional programing code and lot of function