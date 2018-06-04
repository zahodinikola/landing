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

    window.form = me;
}());