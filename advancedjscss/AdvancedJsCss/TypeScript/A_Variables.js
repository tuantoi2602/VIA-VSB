var day = 1;
day = 200;
// Pro ukázku odkomentovat
//day = "monday";
var isSunday;
// Pro ukázku odkomentovat
//isSunday = "no";
/*
* Základní typy
*/
var booleanType;
var stringType;
var numericType;
var anyType;
/*
* Význam typu 'any'
*/
anyType = 5;
anyType = "monday";
anyType = false;
/*
* Pole
*/
var numberArray = [];
var stringArray = [];
var twoDimensionalNumberArray = [];
/*
* Slovník
*/
var simpleDictionary = {};
simpleDictionary["key1"] = 5;
// Pro ukázku odkomentovat
//simpleDictionary["key2"] = "val";
/*
* Konstanty
*/
var myConst = 5;
// Odkomentovat
//myConst = 6;
/*
* let - jiná viditelnost proměnných (striktnější)
*/
// Přes var
for (var i = 0; i < 5; i++) {
}
console.log(i); // proměnná je viditelná
// Přes let
for (var j = 0; j < 5; j++) {
}
// Odkomentovat
//console.log(j); // proměnná není viditelná
/*
* Tuple typy
*/
var myTuple = [1, "hello"];
myTuple[0] = 5; // OK
//myTuple[1] = 5; // Chyba (musí být string)
/*
* Union typy
*/
var myVarWithNumberOrString;
myVarWithNumberOrString = "abc";
myVarWithNumberOrString = 5;
//myVarWithNumberOrString = new Array(); // Pole není povoleno
var myArrayWithNumbersOrStrings = [];
myArrayWithNumbersOrStrings.push(1);
myArrayWithNumbersOrStrings.push("abc");
//myArrayWithNumbersOrStrings.push({ property: 5 }); // Objekt není povolen
//# sourceMappingURL=A_Variables.js.map