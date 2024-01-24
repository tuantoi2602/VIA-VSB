

/**
* Variable definition
*/
function executeExample1() {

    // Basic variable definition
    var studentAge = 21;

    // Output to console
    console.log("Type of variable 'studentAge':", typeof studentAge);

    // Change the value to string
    studentAge = "jednadvacet";

    console.log("Type of variable 'studentAge':", typeof studentAge);

    // Change value to object
    studentAge = {
        years: 21,
        months: 5,
        days: 13
    };

    console.log("Typ proměnné 'studentAge':", typeof studentAge);


    // Comparision of variables
    var a = "10";
    var b = 10;
    console.log("Is true that 'a' == 'b':", a == b);
    console.log("Is true that 'a' === 'b':", a === b);
}





/**
* Funkctions
*/
function executeExample2() {


    // Basic definition of fucntion
    function getTwo()
    {
        return 2;
    }
    console.log("Return value from function 'getTwo'", getTwo());


    // Function with a given number of parameters
    function sum(a, b)
    {
        return a + b;
    }
    console.log("Sum of numbers 8 and 46 is ", sum(8, 46));


    // Function with variable number of parameters
    function sumN()
    {
        var sum = 0;
        console.log("Array: ", arguments);
        for (var i = 0; i < arguments.length; i++)
        {
            sum += arguments[i];
        }
        return sum;
    }
    console.log("Sum of numbers 1, 2, 3, 4, 5 a 6 je ", sumN(1, 2, 3, 4, 5, 6));

}






/**
* Arrays and objects
*/
function executeExample3() {

    // Basic definition of array
    var myArray1 = [1, 2, 3, 4];
    console.log("Array with 4 members:", myArray1);


    // Alternative definition
    var myArray2 = new Array();
    myArray2[0] = 1; // Based on index
    myArray2[1] = 2;
    myArray2.push(3); // Based on 'push' method
    myArray2.push(4);
    console.log("Array with 4 members:", myArray2);


    console.log("Type of array is:", typeof myArray2); // Parray != array in C, much more like List in C#


   
    console.log("\n\n\n");


    // Sum of array members
    var sum = 0;
    for (var i = 0; i < myArray2.length; i++) {
        sum += myArray2[i];
    }
    console.log("Sum:", sum);

    
    console.log("\n\n\n");


    // Concatenation of two arrays
    console.log("Concatenation of two arrays:", [1, 2, 3].concat([4, 5, 6]));

    // Joining of array members
    console.log("Joining of members:", [1, 2, 3].join(' + '));


    // Deleting/adding of member to start/end of array
    var myArray3 = [1, 2, 3, 4];

    myArray3.push(5);
    console.log("Add to the end:", myArray3);

    myArray3.unshift(0);
    console.log("Add to the start:", myArray3);

    myArray3.pop();
    console.log("Delete from the end:", myArray3);

    myArray3.shift();
    console.log("Delete from the start:", myArray3);



    
    console.log("\n\n\n");


    // Basic definition of object
    var myObject1 = {};
    console.log("Empty object:", myObject1);

    // Objekt s atributy
    var myObject2 = {
        firstName: "Pepa",
        lastName: "Novák",
        age: 21
    };
    console.log("Object with properties:", myObject2);
    console.log("Value of property 'firstName':", myObject2.firstName);


    // Alternative definition
    var myObject3 = new Object();
    myObject3['firstName'] = "Pepa";
    myObject3['lastName'] = "Novák";
    myObject3['age'] = "21";
    console.log("Alternative object:", myObject3);

}







/**
* Variables scope
*/
function executeExample4() {

    // Global vs lokal variable
    function setVariables(a, b)
    {
        var variableA = a;
        variableB = b;

        console.log("Values of variables within function -", "variableA:", variableA, ", variableB:", variableB);
    }
    setVariables(12, 20);

    try{
        console.log("Value of variable 'variableA':", variableA);
    } catch (e)
    {
        console.log("Error with 'variableA':", e.message);
    }
    console.log("Value of variable 'variableB':", variableB);



    
    console.log("\n\n\n");

    // Declaration variable within 'window' object
    window['variableC'] = "abcd";
    console.log("Global variable = variable of object 'window':", variableC === window['variableC']);




    
    console.log("\n\n\n");



    function myFunction1() {
        var a = 5;
        var b = 10;
        console.log("'myFunction1' (before call 'myFunction2') -", "a:", a, "b:", b);

        function myFunction2() {
            var a = 20;
            b = 11;
            var c = 8;
            console.log("'myFunction2' - ", "a:", a, "b:", b);
        }
        myFunction2();

        console.log("'myFunction1' (after call 'myFunction2') -", "a:", a, "b:", b, "c: is undefined");
    }
    myFunction1();



    
    console.log("\n\n\n");



    // Example, why the scope is important?
    for (var i = 0; i < 5; i++) {
        setTimeout(function () {
            console.log("Hodnota 'i':", i);
        }, 50);
    }


    // Correct usage of scope
    function delay(j){
        setTimeout(function () {
            console.log("Hodnota 'j':", j);
        }, 100);
    }
    for (var j = 0; j < 5; j++) {
        delay(j);
    }


}





/**
* Encapsulation
*/
function executeExample5() {


    // Anonymous function - encapsulation
    (function () {
        var a = 5;
        var b = 10;
        console.log("Output from anonymous function:", a + b);
    })();

    console.log("\n");


    // Anonymous function with scope 
    for (var i = 0; i < 5; i++) {
        (function (index) {
            setTimeout(function () {
                console.log("Hodnota 'i':", index);
            }, 100);
        })(i);
    }
    


}