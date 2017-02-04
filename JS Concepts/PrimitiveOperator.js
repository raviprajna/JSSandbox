(function testPrimitiveAndOperator() {
    // for operator precdence check mozilla developer org
    if (null == null) console.log(" null == null "); // true
    if (null === null) console.log(" null === null "); // true
    if (undefined === undefined) console.log("undefined === undefined "); // true
    if (undefined == undefined) console.log(" undefined == undefined "); // true
    if (NaN === NaN) console.log(" NaN == NaN "); // false
    if (NaN == NaN) console.log(" NaN == NaN "); // false
    var int = 1;
    var fInt = 1.0;
    var str1 = '1';
    var str2 = '1.0';
    var str3 = "1";
    if (int == fInt) console.log(" int == fInt "); // true
    if (int === fInt) console.log(" int === fInt "); // true
    if (int == str1) console.log(" int == str1 "); // true
    if (fInt == str1) console.log(" fInt == str1 "); // true
    if (int == str2) console.log(" int == str2 "); // true
    if (fInt == str2) console.log(" fInt == str2 "); // true
    if (str2 == int) console.log(" ! int == str2 "); // true
    if (str2 === fInt) console.log(" str2 === fInt "); // false
    if (str3 == fInt) console.log(" ! fInt == str3 "); // true
    // there are 2 more type boolean ( true or false ) and SYMBOL which is there in ES6
    console.log(" --------- Auto conversion or coersion ---------------- ");
    var s1 = 1 + "2";
    var s2 = '2' + 1;
    var s3 = true + 1;
    var s4 = true + true;
    var s5 = "ravi" + true;
    var s6 = 1 + false;
    console.log(s1 + "  " + s2 + "  " + s3 + "  " + s4 + "  " + s5 + " " + s6);
    // 12  21  2  2  ravitrue 1
    var s7 = 1 + undefined;
    var s8 = 1 + NaN;
    var s9 = "Rai" + undefined;
    var s10 = "Rai" + NaN;
    var s11 = "2" + NaN;
    var s12 = NaN + undefined;
    console.log(s7 + "  " + s8 + " " + s9 + "  " + s10 + " " + s11 + "  " + s12);
    // NaN  NaN Raiundefined  RaiNaN 2NaN NaN
    // Auto Conversion precedence --> string --> NaN --> Undefined --> int --> boolean
    /*    You can test this from browser console
            Number(undefined)
            NaN
            String(1)
            "1"
            Boolean(1)
            true*
            Number(null)
            
            so 
            3 < 2 <1 becomes
            false < 1 then
            0 < 1
            returns true
            
            
            
Number(NaN)
NaN
Number(undefined)
NaN
String(1)
"1"
Boolean(1)
true
Number(null)
0
String(null)
"null"
Boolean(null)
false
Boolean(1)
true
Boolean(10)
true
Boolean(0)
false
Boolean("0")
true

Auto conversion can cause weird issue to debug or returns un expected results so it better to use " === " rather than " == "
// its one of the bad parts of JS, but its most used in if statement to check if int or string is initialized or not 
Boolean(undefined)
false
Boolean(NaN)
false
Boolean("")
false
Boolean(0) // use if( a === 0 || a )
false
Except 0




// Operators ||, && dosent just return true or false , it return value , the value which can be auto converted to true or false 
true || false
true
undefined || "Ravi"
"Ravi"
NaN || "Ravi"
"Ravi"
NaN || undefined
undefined
NaN || 1
1
undefined || 1
1
undefined && 1
undefined
NaN && 1
NaN
true && false
false
"Ravi" && 1
1
"Ravi" || 1
"Ravi"



// But again be carefull with 0
"0" && 1
1
"0" && 0
0
"" && 1
""
"" && ""
""
"" && "0"
""
"" && 0
""
0 && 1
0

*/
    // Note all the below js file are combined as one single file and executed, so its just javascript code in single file in the 
    // same order as they defined 
    console.log(aaa); // To avoid naming collision with global variables 
    // var libName = window.libName || libval
})();