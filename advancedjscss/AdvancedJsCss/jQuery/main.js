(function ($) {

    var body = $('body');

    var formContainer = $('<div>')
        .addClass('container')
        .appendTo(body);

    $('<h1>')
        .text('Přihlašovací formulář')
        .appendTo(formContainer);


    function createLabel(text, forId){
        return $('<label>')
            .attr('for', forId)
            .text(text);
    }

    function createInput(type, name, value, id){
        return $('<input>')
            .prop('type', type)
            .prop('name', name)
            .attr('id', id)
            .addClass('form-control')
            .val(value);
    }

    function createSubmit(text) {
        return $('<input>')
            .prop('type', 'submit')
            .addClass('btn btn-primary')
            .val(text);
    }

    function createGroup(){
        return $('<div>')
            .addClass('form-group');
    }


    function renderForm(container) {
        var form = $('<form>')
            .prop('action', '#')
            .appendTo(container);

        var emailInput = createInput('email', 'email', null, 'emailInput');
        createGroup()
            .append(createLabel('Email', 'emailInput'))
            .append(emailInput)
            .appendTo(form);

        var passwordInput = createInput('password', 'password', null, 'passwordInput');
        createGroup()
            .append(createLabel('Heslo', 'passwordInput'))
            .append(passwordInput)
            .appendTo(form);

        createSubmit('Odeslat')
            .appendTo(form);
            
        form.on('submit', function (e) {
            e.preventDefault();
            processForm(form, emailInput, passwordInput);
        });

    }


    function processForm(form, emailInput, passwordInput) {
        var isValid = true;

        // Validace poviných polí
        $([emailInput, passwordInput])
            .each(function (index, input) {

                var isFilled = $.trim(input.val()) == "";
                input
                    .closest('.form-group')
                    .toggleClass('has-error', isFilled);

                isValid = isFilled ? isValid : false;
            });


        // Zde by měla být další vaidace


        if (isValid) {
            var email = emailInput.val();
            var password = passwordInput.val();
            submitForm(email, password);
        }
    }


    function submitForm(email, password) {
        // Zde by mal být AJAX, který bude až na příštím cvičení

        alert("Odesláno!");
    }



    // Po načtení stránky
    $(function () {
        
        renderForm(formContainer);
    });

})($);