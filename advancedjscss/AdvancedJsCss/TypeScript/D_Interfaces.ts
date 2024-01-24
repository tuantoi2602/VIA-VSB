
/*
* Basic interface
*/
interface IPoint {
    x: number;
    y: number;
}


// Variable of types 'point'
var myPoint: IPoint;


/*
* Primitive object
*/
myPoint = {
    x: 10,
    y: 20
};

// Uncomment for error

/*myPoint = {
    x: 2
};*/




/* 
* Note:
* There is no declaration that object (value) implements IPoint. But it is possible to assing it into IPoint variable. 
*/




/*
* Class implements interface
*/
class Point2D implements IPoint {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}
myPoint = new Point2D(5.2, 86);




/*
* Inheritance of interfaces
*/
interface IPoint3D extends IPoint {
    z: number;
}

var point3d: IPoint3D = {
    x: 5,
    y: 20,
    z: 0.12
};

var point2d: IPoint = point3d;

// Uncomment for error
//point3d = point2d;




// Check if there is something extra
var point3d2: IPoint3D = {
    x: 5,
    y: 20,
    z: 0.12,
    //c: 2 // Uncomment for error
};




/*
* Optional methods and attributes within interface
*/

interface IUserData{
    name: string;
    age?: number;
    getName: () => string;
    getAge?: () => number;
}



// Correct implementation
class UserData1 implements IUserData{
    public name: string;
    public age: number;
    public getName() {
        return this.name;
    }
    public getAge() {
        return this.age;
    }
}


// Correct implementation
class UserData2 implements IUserData {
    public name: string;
    public getName() {
        return this.name;
    }
}








