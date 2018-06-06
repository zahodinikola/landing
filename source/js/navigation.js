(function() {

    self = {};

    self.toggleToActiveLink = function(target) {
        var links = document.querySelectorAll('.nav__link');
        var showedSection = target.dataset.link;

        console.log(showedSection);

        for (var i = 0; i < links.length; i++) {
            if (links[i].classList.contains('nav__link--active')) {
                links[i].classList.remove('nav__link--active');
            }
        }

        target.classList.add('nav__link--active');
        scrollToActiveSection(showedSection);
    };

    function scrollToActiveSection(showedSection) {
        var section = document.querySelector('.' + showedSection);
        var coords = section.getBoundingClientRect();
        var scrollingSpeed = 0.005;
       
        var timerId = setInterval(function() {
            if (document.documentElement.scrollTop < coords.top) {
                window.scrollBy(0, 5)
            } else {
                clearInterval(timerId);
            }
        }, scrollingSpeed || 1);

    }

    GLOB.navigation = self;

}());