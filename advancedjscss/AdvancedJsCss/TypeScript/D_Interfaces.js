// Proměnná typu 'bod'
var myPoint;
/*
* Primitivní objekt
*/
myPoint = {
    x: 10,
    y: 20
};
// Pro ukázku odkomentovat
/*myPoint = {
    x: 2
};*/
/*
* Poznámka:
* Nikde jsme nedeklarovali, že objekt implementuje IPoint, ale bez problému
* jsme jej přiřadili do proměnné typu IPoint (v C#, Java, atd.. by neprošlo).
* Vysvětlit!
*/
/*
* Třída implementující interface
*/
var Point2D = /** @class */ (function () {
    function Point2D(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point2D;
}());
myPoint = new Point2D(5.2, 86);
var point3d = {
    x: 5,
    y: 20,
    z: 0.12
};
var point2d = point3d;
// Pro ukázku odkomentovat
//point3d = point2d;
// Kontroluje se i jestli není něco navíc
var point3d2 = {
    x: 5,
    y: 20,
    z: 0.12
};
// Korektní implementace 1
var UserData1 = /** @class */ (function () {
    function UserData1() {
    }
    UserData1.prototype.getName = function () {
        return this.name;
    };
    UserData1.prototype.getAge = function () {
        return this.age;
    };
    return UserData1;
}());
// Korektní implementace 2
var UserData2 = /** @class */ (function () {
    function UserData2() {
    }
    UserData2.prototype.getName = function () {
        return this.name;
    };
    return UserData2;
}());
//# sourceMappingURL=D_Interfaces.js.map