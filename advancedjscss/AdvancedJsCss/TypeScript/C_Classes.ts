
/*
* BAsic class
*/
class BaseClass {
}
var baseClassInstance: BaseClass = new BaseClass();




/*
* Class
*/
class Animal {

    private name: string = null;
    public isMammal: boolean;

    // Protected funguje až od TS 1.3
    protected age: number;


    // Konstruktor
    constructor(isMammal: boolean) {
        this.isMammal = isMammal;
    }

    public setName(name: string) {
        this.name = name;
    }

    // Modificator is not required
    getName() {
        return this.name;
    }
}

var animalInstance: Animal = new Animal(true);





/*
* Class - non inicialized properties
*/
class User {

    public firstName: string;
    public lastName: string = null;
    public age: number;

    constructor(age: number) {
        this.age = age;
    }

    public getFirstName() {
        return this.firstName;
    }

    public getLastName() {
        return this.lastName;
    }

}

var userInstance = new User(20);
userInstance.getFirstName(); // undefined
userInstance.getLastName(); // null



/*
* Inheritance
*/
class BillGates extends User {

    constructor() {
        super(57);
        this.firstName = "Bill";
        this.lastName = "Gates";
    }

    public hasWife() {
        return true;
    }
}

var billGatesInstance = new BillGates();
billGatesInstance.getFirstName(); // Bill
billGatesInstance.getLastName(); // Gates
billGatesInstance.hasWife(); // true








/*
* Static methods and attributes
* We use "hack" - private constructor doesn't exist
*/
class SingletonClass {

    private static instance: SingletonClass = null;

    private static canCreateInstance: boolean = false;

    public static GetInstance(): SingletonClass {

        if (SingletonClass.instance === null) {

            SingletonClass.canCreateInstance = true;
            SingletonClass.instance = new SingletonClass();
            SingletonClass.canCreateInstance = false;

        }

        return SingletonClass.instance;
    }

    constructor() {
        if (!SingletonClass.canCreateInstance) {
            throw new Error("'SingletonClass' is singleton! Please use 'GetInstance' method.");
        }

    }

}

var singletonClassInstance1 = SingletonClass.GetInstance();
var singletonClassInstance2 = SingletonClass.GetInstance();
var equals = singletonClassInstance1 === singletonClassInstance2 ? true : false; // true
var singletonClassInstance3 = new SingletonClass(); // Exception




// Simplier way to define properties
// Both declaration are equivalent

class Apple {
    
    constructor(private size: number) {
    }

    public getSize() {
        return this.size;
    }
}

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
* Abstract class (since TS 1.6)
*/

abstract class AbstractClass {
    constructor(public age: number) { }

}
//var abstractInstance = new AbstractClass(24); // Error

class NonAbstractClass extends AbstractClass {

}

var nonAbstractInstance = new NonAbstractClass(42);
console.log(nonAbstractInstance.age);








/*
* Next ...
*/
// https://github.com/Microsoft/TypeScript/wiki/Roadmap