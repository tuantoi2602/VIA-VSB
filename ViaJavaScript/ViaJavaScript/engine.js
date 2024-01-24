(function () {

    // Spouštění ukázek
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        (function (button) {
            if (typeof button.dataset.fnName !== "undefined") {
                button.addEventListener("click", function () {
                    console.clear();
                    var domWrapper = document.getElementById("dom-wrapper");
                    if (domWrapper != null) {
                        domWrapper.innerHTML = "";
                    }

                    window[button.dataset.fnName]();
                }, true);
            }
        })(buttons[i]);
    }

})();