$(document).ready(function() {
    var tid = setInterval(myCarousel, 5000);

    function myCarousel() {
        var slidesCount = 0;
        var nextSlide = 1;
        $('.carouselSlide').each(function() {
            slidesCount++;
        });
        var actualSlide = parseInt($("#actualSlide").val());
        $("#carouselSlide" + actualSlide).fadeOut(300);
        if (slidesCount > actualSlide) {
            nextSlide = (actualSlide + 1);
        }
        $("#carouselSlide" + nextSlide).delay(500).fadeIn(300);
        $("#actualSlide").val(nextSlide);
    }

    $(".carousel .left-button").click(function() {
        var slidesCount = 0;
        $('.carouselSlide').each(function() {
            slidesCount++;
        });
        var nextSlide = slidesCount;
        var actualSlide = parseInt($("#actualSlide").val());
        $("#carouselSlide" + actualSlide).fadeOut(300);
        if (actualSlide > 1) {
            nextSlide = (actualSlide - 1);
        }
        $("#carouselSlide" + nextSlide).delay(300).fadeIn(300);
        $("#actualSlide").val(nextSlide);
        clearInterval(tid);
        tid = setInterval(myCarousel, 5000);
    });

    $(".carousel .right-button").click(function() {
        myCarousel();
        clearInterval(tid);
        tid = setInterval(myCarousel, 5000);
    });

    myCarousel();

    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    function isTelephoneNumber(number) {
        var regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{3})/;
        return regex.test(number);
    }

    $("button.submit-to-button").prop("type", "button");

    $("#send-contact-form").click(function() {
        var ok = true;
        if ($("#input-name").hasClass("is-invalid")) {
            $("#input-name").removeClass("is-invalid");
            $("#form-name .invalid-feedback").remove();
        }
        if (($("#input-name").val() == '' || $("#input-name").val() == "null")) {
            $("#input-name").addClass("is-invalid");
            $("#form-name").append('<div class="invalid-feedback">Name not entered.</div>');
            ok = false;
        }

        if ($("#input-mail").hasClass("is-invalid")) {
            $("#input-mail").removeClass("is-invalid");
            $("#form-mail .invalid-feedback").remove();
        }
        if ($("#input-mail").val() == '' || $("#input-mail").val() == "null") {
            $("#input-mail").addClass("is-invalid");
            $("#form-mail").append('<div class="invalid-feedback">Mail not specified.</div>');
            ok = false;
        } else if (!isEmail($("#input-mail").val())) {
            $("#input-mail").addClass("is-invalid");
            $("#form-mail").append('<div class="invalid-feedback">The text you entered is not an email address.</div>');
            ok = false;
        }

        if ($("#input-telephone").hasClass("is-invalid")) {
            $("#input-telephone").removeClass("is-invalid");
            $("#form-telephone .invalid-feedback").remove();
        }
        if ($("#input-telephone").val() == '' || $("#input-telephone").val() == "null") {
            $("#input-telephone").addClass("is-invalid");
            $("#form-telephone").append('<div class="invalid-feedback">Phone number not entered.</div>');
            ok = false;
        } else if (!isTelephoneNumber($("#input-telephone").val())) {
            $("#input-telephone").addClass("is-invalid");
            $("#form-telephone").append('<div class="invalid-feedback">The text you entered is not a phone number.</div>');
            ok = false;
        }

        if ($("#input-message").hasClass("is-invalid")) {
            $("#input-message").removeClass("is-invalid");
            $("#form-message .invalid-feedback").remove();
        }
        if ($("#input-message").val() == '' || $("#input-message").val() == "null") {
            $("#input-message").addClass("is-invalid");
            $("#form-message").append('<div class="invalid-feedback">The message is not entered.</div>');
            ok = false;
        }

        if (ok) {
            alert("Sent! We will reply soon!");
        }
    });
});
