var domWrapper = document.getElementById("dom-wrapper");


/**
* Text node
*/
function executeExample1() {

    var txtNode = document.createTextNode("Křabou s těčuč. Clidě a něnipu hryp. Užráždlů z lkoup sryvůt pynou blipěstbu saš hli.");
    domWrapper.appendChild(txtNode);

}


/**
* HTML node
*/
function executeExample2() {

    var pNode = document.createElement("p");
    domWrapper.appendChild(pNode);

}



/**
* List of values
*/
function executeExample3() {

    var ulElement = document.createElement("ul");

    for (var i = 0; i < 10; i++) {
        var liElement = document.createElement("li");

        liElement.className = "item";
        liElement.setAttribute("data-id", i);

        var txtElement = document.createTextNode((i + 1) + ". value");
        liElement.appendChild(txtElement);
        ulElement.appendChild(liElement);
    }

    domWrapper.appendChild(ulElement);

}





/**
* Browsing of DOM
*/
function executeExample4() {

    // HTML to browse
    var html = [
        "<table>",
        "<thead>",
        "<tr>",
        "<th>Name</th><th>Age</th><th>City</th>",
        "</tr>",
        "</thead>",
        "<tbody>",
        "<tr>",
        "<td>Adam</td><td>32</td><td>Ostrava</td>",
        "</tr>",
        "<tr>",
        "<td>Tomáš</td><td>18</td><td>Nový Jičín</td>",
        "</tr>",
        "<tr>",
        "<td>Adéla</td><td>27</td><td>Odry</td>",
        "</tr>",
        "</tbody>",
        "</table>"
    ].join("");

    domWrapper.innerHTML = html;


    /*
    * Childs of element 'domWrapper'
    */
    console.log("Childs of element 'domWrapper':", domWrapper.childNodes);

    /*
    * Childs of element 'table'
    */
    console.log("Childs of element 'table':", domWrapper.childNodes[0].childNodes);

    /*
    * Parent element of element 'thead'
    */
    console.log("Parent element of element 'thead':", domWrapper.childNodes[0].childNodes[0].parentNode);




    /*
    * Count of rows within table
    */
    var table = domWrapper.childNodes[0];

    // Find 'tbody' (in this case we know that it is a second child, but this is more common solution)
    var tBody = null;
    for (var i = 0; i < table.childNodes.length; i++) {
        if (table.childNodes[i].nodeName == "TBODY") {
            tBody = table.childNodes[i];
        }
    }
    // We assume that element tbody exists within table (null is not checked)
    console.log("Count of rows within table:", tBody.childNodes.length);



    /*
     * First child
     */
    console.log("First child of 'tbody' is:", tBody.firstChild);


    /*
     * Next sibling
     */
    console.log("Directly next to first row of table is:", tBody.firstChild.nextSibling);

    /*
     * Previous sibling
     */
    console.log("Before the second row of table is:", tBody.childNodes[1].previousSibling);



    // Types of nodes:
    // https://developer.mozilla.org/en-US/docs/Web/API/Node.nodeType
}




/**
* Dynamic generated notices
*/
function executeExample5() {

    // Contejner for messages
    var messageContainer = document.createElement("div");
    messageContainer.id = "message-container";
    document.body.appendChild(messageContainer);


    // Generation of message and adding
    function appendMessage(title, text) {
      
        // Envelope of message
        var message = document.createElement("div");
        message.className = "flash-message";

        // Title
        var titleElement = document.createElement("strong");
        titleElement.innerText = title;
        message.appendChild(titleElement);

        // New line
        message.appendChild(document.createElement("br"));

        // Text of message
        message.appendChild(document.createTextNode(text));

        // Add message to container
        messageContainer.appendChild(message);

        // Remove message from DOM after 5 seconds
        setTimeout(function () {
            messageContainer.removeChild(message);
        }, 5 * 1000);
    }


    // Preparing of message
    function prepareMessage(messageIndex) {
        // Random timeout
        var timeout = Math.random() * (3 * 1000) + 1000;


        setTimeout(function () {

            var date = new Date();
            var dateStr = [date.getDate(), date.getMonth() + 1, date.getFullYear()].join(". ") + " " + [date.getHours(), date.getMinutes(), date.getSeconds()].join(":")

            appendMessage(
                "Message " + messageIndex + "",
                "now is " + dateStr
                );

            prepareMessage(messageIndex + 1);
        }, timeout);

    }

    // Start by first message
    prepareMessage(1);


    console.log("Moment...");
}

