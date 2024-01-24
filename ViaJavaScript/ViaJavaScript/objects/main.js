

/**
* Prototyping
*/
function executeExample1() {

    // Simple object "Cat"
    function Cat(){
    }

    Cat.prototype.isMammal = function () {
        return true;
    };
    
    var myCat = new Cat();
    console.log("My cat:", myCat);
    console.log("Is my cat mammal:", myCat.isMammal());
    console.log("Type of object cat:", typeof myCat);
    console.log("Is cat instance of object 'Cat':", myCat instanceof Cat);
    console.log("Is cat instance of object 'Object':", myCat instanceof Object);
    console.log("Is 'Object' instance of object cat:", {} instanceof Cat);





    console.log("\n\n\n");




    // More complex object
    function Animal(isMamal) {
        this._isMamal = isMamal;
    }

    Animal.prototype.name = null;

    Animal.prototype.isMammal = function () {
        return this._isMamal;
    };

    Animal.prototype.getName = function () {
        return this.name;
    };

    Animal.prototype.sayHello = function () {
        return "Hi, I'm " + this.getName();
    };

    var dog = new Animal(true);
    dog.name = "Azor";
    var eagle = new Animal(false);
    eagle.name = "Golden Eagle";

    console.log("Is " + dog.name + " mammal:", dog.isMammal());
    console.log("Is " + eagle.name + " mammal:", eagle.isMammal());
    console.log("Dog:" + dog.sayHello());
    console.log("Eagle: ", eagle.sayHello());

}





/**
* Functions
*/
function executeExample2() {

    // Simple object "Cat"
    function Cat() {
        this.isMammal = function () {
            return true;
        };
    }
    
    var myCat = new Cat();
    console.log("My cat:", myCat);
    console.log("Is my cat mammal:", myCat.isMammal());
    console.log("Type of object cat:", typeof myCat);
    console.log("Is cat instance of object 'Cat':", myCat instanceof Cat);
    console.log("Is cat instance of object 'Object':", myCat instanceof Object);
    console.log("Is 'Object' instance of object cat:", {} instanceof Cat);


    console.log("\n\n\n");




    // More complex object
    function Animal(isMamal) {

        // NOTE: Property isMammal is private

        this.name = null;

        this.isMammal = function () {
            return isMamal;
        };

        this.getName = function () {
            return this.name;
        };

        this.sayHello = function () {
            return "Hi, I'm " + this.getName();
        };
    }


    var dog = new Animal(true);
    dog.name = "Azor";
    var eagle = new Animal(false);
    eagle.name = "Golden Eagle";

    console.log("Is " + dog.name + " mammal:", dog.isMammal());
    console.log("Is " + eagle.name + " mammal:", eagle.isMammal());
    console.log("Dog:" + dog.sayHello());
    console.log("Eagle: ", eagle.sayHello());

}





/**
* Object
*/
function executeExample3() {

    // Simple object "Cat"
    var Cat = function () {
        return {
            isMammal: function () {
                return true;
            }
        };
    }

    var myCat = new Cat();
    console.log("My cat:", myCat);
    console.log("Is my cat mammal:", myCat.isMammal());
    console.log("Type of object cat:", typeof myCat);
    console.log("Is cat instance of object 'Cat':", myCat instanceof Cat);
    console.log("Is cat instance of object 'Object':", myCat instanceof Object);
    console.log("Is 'Object' instance of object cat:", {} instanceof Cat);



    console.log("\n\n\n");



    // More complex object
    var Animal = function (isMammal) {

        // NOTE: Property isMammal is private

        return {
            name: null,
            isMammal: function () {
                return isMammal;
            },
            getName: function () {
                return this.name;
            },
            sayHello: function () {
                return "Hi, I'm " + this.getName();
            }
        };
    };

    var dog = new Animal(true);
    dog.name = "Azor";
    var eagle = new Animal(false);
    eagle.name = "Golden Eagle";

    console.log("Is " + dog.name + " mammal:", dog.isMammal());
    console.log("Is " + eagle.name + " mammal:", eagle.isMammal());
    console.log("Dog:" + dog.sayHello());
    console.log("Eagle: ", eagle.sayHello());

}












/**
* This
*/
function executeExample4()
{

    function Cat() {
        var a = 5;
        this.b = 10;
        this.c = 33;
    };

    Cat.prototype.getA = function () {
        return this.a;
    };

    Cat.prototype.getB = function () {
        return this.b;
    };

    Cat.prototype.getC = function () {
        return this.c;
    };

    Cat.prototype.getThis = function () {
        return this;
    };

    Cat.prototype.nestedFunction1 = function (c) {
        function setC(c) {
            this.c = c;
        }
        setC(c);
    };

    Cat.prototype.nestedFunction2 = function (c) {
        var _this = this;
        function setC(c) {
            _this.c = c;
        }
        setC(c);
    };
    
    Cat.prototype.nestedFunction3 = function (c) {
        function setC() {
            return this;
        }
        return setC();
    };

    Cat.prototype.nestedFunction4 = function (c) {
        var _this = this;
        function setC() {
            return _this;
        }
        return setC();
    };

    var myCat = new Cat();

    console.log("Value of 'a':", myCat.getA());
    console.log("Value of 'b':", myCat.getB());
    console.log("Value of 'c':", myCat.getC());

    console.log("this:", myCat.getThis());
    console.log("this == myCat:", myCat.getThis() == myCat);


    // Set variable 'c' with nested function
    myCat.nestedFunction1(88);
    console.log("Value of 'c' after call 'nestedFunction1':", myCat.getC());

   // Set variable 'c' with nested function
    myCat.nestedFunction2(88);
    console.log("Value of 'c' after po volání 'nestedFunction2':", myCat.getC());

    // this of nested methods
    console.log("this within call 'nestedFunction3':", myCat.nestedFunction3());
    console.log("this within call 'nestedFunction4':", myCat.nestedFunction4());

}








/**
* Inheritance
*/
function executeExample5()
{
    // Helper for inheritance
    function extend(aFn, bFn) {
        aFn.prototype = new bFn();
        aFn.prototype._base = bFn;
    }

    // Animal
    function Animal(isMammal) {
        this._isMammal = isMammal;
    }
    Animal.prototype.isMammal = function () {
        return this._isMammal;
    };


    // Cat
    function Cat() {
        this._base(true);
    }
    // Cat inherits from Animal
    extend(Cat, Animal);

    Cat.prototype.getNumberOfLegs = function () {
        return 4;
    };
   

    var myCat = new Cat();
    console.log("My cat:", myCat);    
    console.log("Type of object cat:", typeof myCat);
    console.log("Is cat instance of object 'Cat':", myCat instanceof Cat);
    console.log("Is cat instance of object 'Object':", myCat instanceof Object);
    console.log("Is 'Object' instance of object cat:", {} instanceof Cat);

    console.log("");

    console.log("Is cat instance of object 'Animal':", myCat instanceof Animal);
    console.log("Is cat a mammal:", myCat.isMammal());
    console.log("Number of legs:", myCat.getNumberOfLegs());

    console.log("");


    var myAnimal = new Animal(false);
    console.log("My animal:", myAnimal);
    console.log("Is my animal instance of type 'Cat':", myAnimal instanceof Cat);


   
}