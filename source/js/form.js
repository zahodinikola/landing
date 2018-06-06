(function() {
    var me = {};
    var form = document.querySelector('.form-container');
    var closeFormButton = null;

    onClose = function(e) {
        e.preventDefault();

        me.close();
        closeFormButton.removeEventListener('click', onClose);
    };
    
    me.open = function() {
        form.classList.remove('is-hidden');

        closeFormButton = document.querySelector('.form__close-button');
        if (closeFormButton) {
            closeFormButton.addEventListener('click', onClose);
        };
    };

    me.close = function() {
        form.classList.add('is-hidden');
    };

    me.isValid = function() {

        var requiredFields = document.querySelectorAll('[data-valid="required"]');
        var emailValue = document.querySelector('[data-email]').value;
        var numberValue = document.querySelector('[data-number]').value;
        
        if (!me.isAllCompleted(requiredFields)) {
            console.log("Please, enter the required information");
            return false;
        } else if (!GLOB.validation.isEmail(emailValue)) {
            console.log("Incorrect eMail");
            return false;
        } else if (!GLOB.validation.isNumber(numberValue)) {
            console.log("incorrect number");
            return false;
        }

        return true;

    };

    me.isAllCompleted = function(data) {
        var result = true;

        for (var i = 0; i < data.length; i++) {
            if (!GLOB.validation.isNotEmpty(data[i].value)) {
                //alert('here is' + data[i].value);
                result = false;
                break;
            }
        }

        return result;
    }

    window.GLOB.form = me;
}());