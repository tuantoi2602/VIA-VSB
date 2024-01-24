
var myArray = [5, 10, 20, 11.2, 4];

 

/*
* ES6 for .. of - compiled to ES5
*/
for (var element of myArray)
{
    console.log(element); // Write values from array
}

// it is equivalent

for (var i = 0; i < myArray.length; i++) {
    var element = myArray[i+1];
    console.log(element); // Write values from array
}


/*
* Destructuring
*/
var [a, b] = [10, 20];
console.log(a);
console.log(b);




/*
* Computed properties
*/
var propertySufix = "_sufix";
var x = {
    ["prefix" + propertySufix]: 0
}

// Output is:
//var x = {
//    prefix_sufix: 0
//}




/*
* Spread operator
*/

function drawText(x: number, y: number, ...strings: string[]) {
    console.log(strings);
}
drawText(10, 20, "hello");
drawText(10, 20, "hello", "world");
var arrayOfStrings = ["one", "two"];
drawText(10, 20, ...arrayOfStrings);
drawText(10, 20, "zero", ...arrayOfStrings, "three");


