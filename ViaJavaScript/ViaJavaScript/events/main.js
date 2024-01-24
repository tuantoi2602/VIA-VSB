
// Loading of page
window
    .addEventListener("load", function () {
        console.log("Page is loaded!");
    });



// Click on link
document
    .getElementById("link-1")
    .addEventListener("click", function (e) {
        e.preventDefault();

        console.log("The link was clicked. Captured event:", e);
    }, false);



function executeExample1() {

    // Key press
    document
        .addEventListener("keydown", function (e) {
            console.log(e);
        }, false);

}



function executeExample2() {

    document
        .addEventListener("mousemove", function (e) {
            console.log("Position of mouse cursor:", e.pageX, e.pageY);
        }, false);

}


// Another events: http://www.w3schools.com/jsref/dom_obj_event.asp