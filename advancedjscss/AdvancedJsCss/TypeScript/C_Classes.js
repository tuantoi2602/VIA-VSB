var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* Nejjednodušší třída
*/
var BaseClass = /** @class */ (function () {
    function BaseClass() {
    }
    return BaseClass;
}());
var baseClassInstance = new BaseClass();
/*
* Třída 1
*/
var Animal = /** @class */ (function () {
    // Konstruktor
    function Animal(isMammal) {
        this.name = null;
        this.isMammal = isMammal;
    }
    Animal.prototype.setName = function (name) {
        this.name = name;
    };
    // Modifikátor public/private není poviný
    Animal.prototype.getName = function () {
        return this.name;
    };
    return Animal;
}());
var animalInstance = new Animal(true);
/*
* Třída 2 (neinicializované proměnné)
*/
var User = /** @class */ (function () {
    function User(age) {
        this.lastName = null;
        this.age = age;
    }
    User.prototype.getFirstName = function () {
        return this.firstName;
    };
    User.prototype.getLastName = function () {
        return this.lastName;
    };
    return User;
}());
var userInstance = new User(20);
userInstance.getFirstName(); // Vrátí undefined
userInstance.getLastName(); // Vrátí null
/*
* Dědičnost
*/
var BillGates = /** @class */ (function (_super) {
    __extends(BillGates, _super);
    function BillGates() {
        var _this = _super.call(this, 57) || this;
        _this.firstName = "Bill";
        _this.lastName = "Gates";
        return _this;
    }
    BillGates.prototype.hasWife = function () {
        return true;
    };
    return BillGates;
}(User));
var billGatesInstance = new BillGates();
billGatesInstance.getFirstName(); // Bill
billGatesInstance.getLastName(); // Gates
billGatesInstance.hasWife(); // true
/*
* Statické metody a atributy
* Pro vytvoření singletonu použijeme "hack", protože neexistuje privátní konstruktor
*/
var SingletonClass = /** @class */ (function () {
    function SingletonClass() {
        if (!SingletonClass.canCreateInstance) {
            throw new Error("'SingletonClass' is singleton! Please use 'GetInstance' method.");
        }
    }
    SingletonClass.GetInstance = function () {
        if (SingletonClass.instance === null) {
            SingletonClass.canCreateInstance = true;
            SingletonClass.instance = new SingletonClass();
            SingletonClass.canCreateInstance = false;
        }
        return SingletonClass.instance;
    };
    SingletonClass.instance = null;
    SingletonClass.canCreateInstance = false;
    return SingletonClass;
}());
var singletonClassInstance1 = SingletonClass.GetInstance();
var singletonClassInstance2 = SingletonClass.GetInstance();
var equals = singletonClassInstance1 === singletonClassInstance2 ? true : false; // true
var singletonClassInstance3 = new SingletonClass(); // Chyba
// Rychlejší definice vlastností v konstruktoru
// Níže uvedené definice tříd jsou ekvivalentní.
var Apple = /** @class */ (function () {
    function Apple(size) {
        this.size = size;
    }
    Apple.prototype.getSize = function () {
        return this.size;
    };
    return Apple;
}());
/*
class Apple {

    private size: number;
    constructor(size: number) {
        this.size = size;
    }

    public getSize() {
        return this.size;
    }
}
*/
/*
* Abstraktní třída (od TS 1.6)
*/
var AbstractClass = /** @class */ (function () {
    function AbstractClass(age) {
        this.age = age;
    }
    return AbstractClass;
}());
//var abstractInstance = new AbstractClass(24); // Chyba
var NonAbstractClass = /** @class */ (function (_super) {
    __extends(NonAbstractClass, _super);
    function NonAbstractClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NonAbstractClass;
}(AbstractClass));
var nonAbstractInstance = new NonAbstractClass(42);
console.log(nonAbstractInstance.age);
/*
* Další
*/
// https://github.com/Microsoft/TypeScript/wiki/Roadmap 
//# sourceMappingURL=C_Classes.js.map