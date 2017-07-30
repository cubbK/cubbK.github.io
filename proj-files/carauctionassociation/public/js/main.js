document.addEventListener("DOMContentLoaded", function(event) {
    tns({
        container: document.querySelector('.partners-slide'),
        responsive: {
            450: 2,
            550: 4,
            767: 5,
            1050: 7
        },
        gutter: 10,
        dots: false,
        loop: true,
        slideBy: 'page',
        controls: true,
        controlsContainer: document.querySelector('.custom-controls'),
        nav: true,
        navContainer: false,
        autoHeight: true
    });


    tns({
        container: document.querySelector('.review-slide-content'),
        responsive: {
            320: 1,
            991: 3,
        },
        gutter: 0,
        slideBy: 'page',
        dots: false,
        loop: true,
        controls: true,
        controlsContainer: document.querySelector('.custom-controls-2'),
        nav: true,
        navContainer: false,
    });

    document.getElementById('menu-btn').addEventListener("click", function() {
        document.getElementsByClassName('menu')[0].classList.add('ads-menu');
        document.getElementsByClassName('xs-close')[0].style.display = 'block';
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    });

    document.getElementsByClassName('xs-close')[0].addEventListener("click", function() {
        document.getElementsByClassName('menu')[0].classList.remove('ads-menu');
        document.getElementsByClassName('xs-close')[0].style.display = 'none';
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
    });
});