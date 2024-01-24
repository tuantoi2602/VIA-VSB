/// <reference path="jQuery.d.ts" />
// Based on this line, definition file is linked

// Now the jQuery is fully supported within TypeScript development


$(() => {
    
    $('body')
        .append(
            $('<h1>').text('It works!')
        );

});