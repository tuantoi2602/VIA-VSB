

/**
* getElemetById
*/
function executeExample1() {
    var element = document.getElementById("cr");
    console.log("Element with id 'cr':", element);
}

/**
* getElemetsByTagName
*/
function executeExample2() {
    var elements = document.getElementsByTagName("li");
    console.log("li elements:", elements);
}

/**
* getElementsByClassName
*/
function executeExample3() {
    var elements = document.getElementsByClassName("blue");
    console.log("Blue items:", elements);
}

/**
* querySelector
*/
function executeExample4() {
    var elements = document.querySelector("li:nth-child(4)");
    console.log("Fourth li:", elements);
}

/**
* querySelectorAll
*/
function executeExample5() {
    var elements = document.querySelectorAll(".blue em");
    console.log("em elements inside blue items:", elements);
}

