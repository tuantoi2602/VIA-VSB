/*
* Běžná funkce
*/
function standardFunction(a, b) {
    return a + b;
}
standardFunction(1, 2);
standardFunction(1, "dvacet");
/*
* Funkce s typy funkce
*/
function typedFunction(a, b) {
    return a + b;
}
typedFunction(1, 2);
// Pro ukázku odkomentovat
//typedFunction(1, "dvacet");
/*
* Šipková funkce (Arrow function) - v podstatě lambda funkce
*/
var arrowFunction1 = function (x) { return x * x; };
var arrowFunction2 = function (x) {
    return x * x;
};
/*
* Rozdíl mezi Arrow funkcí a funkcí
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
    var _this = this;
    var fn = function () {
        return _this.numberOfLegs;
    };
    return fn();
};
var cat = new Cat();
cat.testFunction(); // Vrátí undefined
cat.testArrowFunction(); // Vrátí 4
/*
* Funkce jako datový typ
*/
var callback;
// Bez typů
callback = function (a, b) {
    return (a + b).toString();
};
// S typy
callback = function (a, b) {
    return (a + b).toString();
};
// Pro ukázku odkomentovat
/*
callback = (a, b) => {
    return a + b;
};
*/
/*
* Defaultní parametry
*/
function customPow(base, exponent) {
    if (exponent === void 0) { exponent = 2; }
    return Math.pow(base, exponent);
}
customPow(10);
customPow(12, 5);
/*
* Volitelné parametry
*/
function customPow2(base, exponent) {
    if (typeof exponent === "undefined") {
        exponent = 2;
    }
    return Math.pow(base, exponent);
}
customPow2(10);
customPow2(12, 5);
//# sourceMappingURL=B_Functions.js.map