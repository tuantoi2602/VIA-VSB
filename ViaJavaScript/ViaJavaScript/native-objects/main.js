
/**
* Windows size
*/
function executeExample1() {
    console.log("Windows width:", window.innerWidth, ", Windows height:", window.innerHeight);
}


/**
* Display size
*/
function executeExample2() {
    console.log("Display width:", window.outerWidth, ", DIsplay height:", window.outerHeight);
}

/**
* Position of page (scroll)
*/
function executeExample3() {
    console.log("X position:", window.pageXOffset, ", Y position:", window.pageYOffset);
}

/**
* window.location
*/
function executeExample4() {
    console.log("window.location.hash:", window.location.hash);
    console.log("window.location.host:", window.location.host);
    console.log("window.location.hostname:", window.location.hostname);
    console.log("window.location.href:", window.location.href);
    console.log("window.location.pathname:", window.location.pathname);
    console.log("window.location.port:", window.location.port);
    console.log("window.location.protocol:", window.location.protocol);
    console.log("window.location.search:", window.location.search);
}


/**
* window.location.reload();
*/
function executeExample5() {
    window.location.reload();
}


/**
* window.navigator
*/
function executeExample6() {
    console.log(window.navigator);
}


/**
* window.alert()
*/
function executeExample7() {
    alert("This is alert message!");
}


/**
* window.confirm()
*/
function executeExample8() {
    if (confirm("Are you sure to perform this action?")) {
        console.log("Action was performed.");
    }
}

/**
* window.prompt()
*/
function executeExample9() {
    var age = prompt("Your age:");
    if (age != null) {
        console.log("Age:", age);
    }
}

/**
* window.print()
*/
function executeExample10() {
    print();
}


/**
* window.setInterval()
*/
function executeExample11() {

    var elapsedCount = 0;

    var intervalRef = setInterval(function () {

        // Vypíšeme, že došlo k spuštění
        console.log("Interval elapsed - " + elapsedCount);

        // Po 20 spuštěních interval zrušíme
        elapsedCount++;
        if (elapsedCount >= 20) {
            clearInterval(intervalRef);
        }

    }, 1000);

}

/**
* window.setTimeout()
*/
function executeExample12() {
    setTimeout(function () {
        console.log("Timeout elapsed.");
    }, 1000);
}


// Next: http://www.w3schools.com/jsref/obj_window.asp












/**
* Math
*/
function executeExample13() {
    console.log("Math.PI:", Math.PI);
    console.log("Math.abs:", Math.abs(-20));
    console.log("Math.sin(Math.PI / 2):", Math.sin(Math.PI / 2)); // radius is in radians!
    console.log("Math.pow(2, 8):", Math.pow(2, 8));
    console.log("Math.floor(0.7):", Math.floor(0.7));
    console.log("Math.ceil(0.1):", Math.ceil(0.1));
    console.log("Math.round(0.5):", Math.round(0.5));
    console.log("Math.sqrt(64):", Math.sqrt(64));
    
}







/**
* Date
*/
function executeExample14() {
    var date = new Date();
    console.log("Current date:", date);


    var czechDate = date.getDate() + ". " + (date.getMonth() + 1) + ". " + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(); // Pozor na měsíce!
    console.log("Czech date and time:", czechDate);

    console.log("Miliseconds until 1. January 1970:", date.getTime());

    // Age calculation
    var birthday = new Date(1988, 11 - 1, 2);
    var ageMs = new Date().getTime() - birthday.getTime();
    console.log("Age:", Math.floor(ageMs / (1000 * 60 * 60 * 24 * 365.25)));
    
}





/**
* RegExp
*/
function executeExample15() {

    // ID of the student of our university (eg. 3 letters and 2-4 numbers)
    var vsbId1 = new RegExp("^[a-zA-Z]{3}[0-9]{2,4}$");

    console.log("Is JAW254 correct student's ID:", vsbId1.test("JAW254"));
    console.log("Is JA254 correct student's ID:", vsbId1.test("JA254"));





    // Replacement within the text
    var txt = "My ID is JAW254. My friend has ID equals ABC0123."
    var vsbId2 = new RegExp("[a-zA-Z]{3}[0-9]{2,4}", "g");
    txt = txt.replace(vsbId2, function (match) {
        var stars = "";
        for (var i = 0; i < match.length; i++) {
            stars += "*";
        }
        return stars;
    });
    console.log("Text after replacement:", txt);



}

