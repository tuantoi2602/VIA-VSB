var myArray = [5, 10, 20, 11.2, 4];
/*
* ES6 for .. of je zkompilován do ES5
*/
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var element = myArray_1[_i];
    console.log(element); // Vypíše hodnoty v poli
}
// je ekvivalentní s
for (var i = 0; i < myArray.length; i++) {
    var element = myArray[i + 1];
    console.log(element); // Vypíše hodnoty v poli
}
/*
* Destructuring
*/
var _a = [10, 20], a = _a[0], b = _a[1];
console.log(a);
console.log(b);
/*
* Computed properties ("vypočtené vlastnosti")
*/
var propertySufix = "_sufix";
var x = (_b = {},
    _b["prefix" + propertySufix] = 0,
    _b);
// Výstupem je:
//var x = {
//    prefix_sufix: 0
//}
/*
* Spread operator
*/
function drawText(x, y) {
    var strings = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        strings[_i - 2] = arguments[_i];
    }
    console.log(strings);
}
drawText(10, 20, "hello");
drawText(10, 20, "hello", "world");
var arrayOfStrings = ["one", "two"];
drawText.apply(void 0, [10, 20].concat(arrayOfStrings));
drawText.apply(void 0, [10, 20, "zero"].concat(arrayOfStrings, ["three"]));
var _b;
//# sourceMappingURL=I_Others.js.map