var day = 1;
day = 200;
// Uncomment for error
//day = "monday";




var isSunday: boolean;
// Uncomment for error
//isSunday = "no";


/*
* Basic data types
*/
var booleanType: boolean;
var stringType: string;
var numericType: number;
var anyType: any;


/*
* Meaning of type 'any'
*/
anyType = 5;
anyType = "monday";
anyType = false;



/*
* Arrays
*/
var numberArray: number[] = [];
var stringArray: string[] = [];
var twoDimensionalNumberArray: number[][] = [];


/*
* Dictionary
*/
var simpleDictionary: { [key: string]: number; } = {};
simpleDictionary["key1"] = 5;
// Uncomment for error
//simpleDictionary["key2"] = "val";



/*
* Constants
*/
const myConst = 5;
// Uncomment for error
//myConst = 6;



/*
* let - different scope - more stricts
*/
// Based on var
for (var i = 0; i < 5; i++) {

}
console.log(i); // variable is visible


// Based on let
for (let j = 0; j < 5; j++) {

}
// Uncomment for error
//console.log(j); // variable is visible






/*
* Tuple types
*/

var myTuple: [number, string] = [1, "hello"];
myTuple[0] = 5; // OK
//myTuple[1] = 5; // Error (has to be string)



/*
* Union types
*/

var myVarWithNumberOrString: string | number;
myVarWithNumberOrString = "abc";
myVarWithNumberOrString = 5;
//myVarWithNumberOrString = new Array(); // Array is not allowed


var myArrayWithNumbersOrStrings: (string | number)[] = [];
myArrayWithNumbersOrStrings.push(1);
myArrayWithNumbersOrStrings.push("abc");
//myArrayWithNumbersOrStrings.push({ property: 5 }); // Object is not allowed

