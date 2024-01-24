
/*
* Common function
*/
function standardFunction(a, b) {
    return a + b;
}
standardFunction(1, 2);
standardFunction(1, "twenty");



/*
* Function with types
*/
function typedFunction(a: number, b: number): number {
    return a + b;
}
typedFunction(1, 2);
// Uncomment for error
//typedFunction(1, "twenty");





/*
* Arrow function - lambda function
*/
var arrowFunction1 = (x: number) => x * x;

var arrowFunction2 = (x: number) => {
    return x * x;
};





/*
* Differences between Arrow function and function (scope)
*/
function Cat() {
    this.numberOfLegs = 4;
}

Cat.prototype.testFunction = function () {
    var fn = function () {
        return this.numberOfLegs;
    };
    return fn();
};

Cat.prototype.testArrowFunction = function () {
    var fn = () => {
        return this.numberOfLegs;
    };
    return fn();
};

var cat = new Cat();
cat.testFunction(); // undefined
cat.testArrowFunction(); // 4






/*
* Function as data type
*/
var callback: (a: number, b: number) => string;

// Without types
callback = (a, b) => {
    return (a + b).toString();
};

// With types
callback = (a: number, b: number): string => {
    return (a + b).toString();
};

// Uncomment for error
/*
callback = (a, b) => {
    return a + b;
};
*/






/*
* Default parameters
*/
function customPow(base: number, exponent: number = 2): number {
    return Math.pow(base, exponent)
}

customPow(10);

customPow(12, 5);




/*
* Optional parameters
*/
function customPow2(base: number, exponent?: number): number {
    if (typeof exponent === "undefined") { exponent = 2; }
    return Math.pow(base, exponent);
}

customPow2(10);

customPow2(12, 5);