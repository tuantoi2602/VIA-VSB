

// Help function for array creation
function buildArray(min, max) {
    var array = [];
    for (var i = min; i <= max; i++) {
        array.push(i);
    }
    return array;
}


/**
* forEach
*/
function executeExample0() {
    var myArray = buildArray(10, 15);

    myArray
        .forEach(function (value, index) {
            console.log((index + 1) + "th value:", value);
        });
    
}


/**
* indexOf
*/
function executeExample1() {
    var myArray = buildArray(10, 200);

    console.log("Position of number 150:", myArray.indexOf(150));
    console.log("Position of number 3:", myArray.indexOf(3));

}



/**
* map
*/
function executeExample2() {
    var myArray = buildArray(10, 20);
    var mappedArray = myArray.map(function (value, index) {
        return value / 2;
    });

    console.log("Origin array:", myArray);
    console.log("Mapped array:", mappedArray);

}



/**
* filter
*/
function executeExample3() {
    var myArray = buildArray(10, 20);
    var filteredArray = myArray.filter(function (value, index) {
        return value % 3 == 0;
    });

    console.log("Origin array:", myArray);
    console.log("Numbers from array divided by 3:", filteredArray);

}



/**
* every
*/
function executeExample4() {
    var myArray = buildArray(100, 200);
    var areLarge = myArray.every(function (value, index) {
        return value > 99;
    });

    var arePowerOf2 = [2, 4, 8, 6, 16].every(function (value, index) {
        return (value & (value - 1)) == 0;
    });

    console.log("Origin array:", myArray);
    console.log("Are all numbers big:", areLarge);
    console.log("Are all numbers power of 2:", arePowerOf2);

}




/**
* some
*/
function executeExample5() {
    var myArray = buildArray(100, 200);
    var isAnyDivisible8 = myArray.some(function (value, index) {
        return value % 8 == 0;
    });


    console.log("Is some number divided by:", isAnyDivisible8);

}





/**
* reduce
*/
function executeExample6() {
    var myArray = buildArray(1, 4);
    var sum = myArray
        .reduce(function (prevValue, curValue, index) {
            return prevValue - curValue;
        });

    
    console.log("Difference of numbers 1 to 4:", sum);

}



/**
* reduceRight
*/
function executeExample7() {
    var myArray = buildArray(1, 4);
    var sum = myArray
        .reduceRight(function (prevValue, curValue, index) {
            return prevValue - curValue;
        });


    console.log("Difference of numbers 4 to 1:", sum);

}





/**
* Typed arrays
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays
*/
function executeExample8() {

    // Paměť s 4 * 8 byte (little endian)
    var buffer = new ArrayBuffer(4);

    // Náhled na paměť jako na pole byte-ů
    var byteArray = new Uint8Array(buffer);
    byteArray[0] = 0;
    byteArray[1] = 1;
    byteArray[2] = 0;
    byteArray[3] = 0;
    
    // Náhled paměť, jako a polee int-ů
    var intArray = new Uint32Array(buffer);

    console.log("Data size of buffer:", buffer.byteLength, "byte");
    console.log("Length of array 'byteArray':", byteArray.length);
    console.log("Data size of array 'byteArray':", byteArray.byteLength);
    console.log("Length of array 'intArray':", intArray.length);
    console.log("Data size of array 'intArray':", intArray.byteLength);

    console.log("1st value of array 'intArray':", intArray[0], "(00000000 00000001 00000000 00000000)");

}

