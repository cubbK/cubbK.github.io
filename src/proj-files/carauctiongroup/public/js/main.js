document.addEventListener("DOMContentLoaded", function (event) {
    var slider = tns({
        container: document.querySelector('.slider'),
        items: 1,
        controls: false,
        nav: true,
        mouseDrag: true

    });
    //top nav btn
    document.getElementById('menu-btn').addEventListener("click", function () {
        document.getElementsByClassName('menu')[0].classList.add('ads-menu');
        document.getElementsByClassName('xs-close')[0].style.display = 'block';
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    });

    document.getElementsByClassName('xs-close')[0].addEventListener("click", function () {
        document.getElementsByClassName('menu')[0].classList.remove('ads-menu');
        document.getElementsByClassName('xs-close')[0].style.display = 'none';
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
    });

    //top menu on click logic

    var menu = document.getElementsByClassName('menu')[0];

    function hideMenu(event) {
        if (event.target.tagName === 'A') {
            setTimeout(function() {
                document.getElementsByClassName('menu')[0].classList.remove('ads-menu');
                document.getElementsByClassName('xs-close')[0].style.display = 'none';
                document.getElementsByTagName('body')[0].style.overflow = 'auto';
            }, 200);
        }
    }

    menu.addEventListener('mouseenter', hideMenu, true); // without true doesn't work
    menu.addEventListener('touchstart', hideMenu, true);

    //round nav logic
    var nav = document.getElementById('nav-round');
    var navDescs = document.getElementsByClassName("nav-desc");

    function toggleDesc(event) {
        if (window.innerWidth > 991 && event.target.tagName === 'LI') {
            //gets index of child relative to parent
            var index = Array.prototype.indexOf.call(nav.children, event.target);
            var desc = navDescs[index];
            desc.style.opacity == '' ? desc.style.opacity = 1 : desc.style.opacity = '';
        }
    }

    nav.addEventListener('mouseenter', toggleDesc, true); // without true doesn't work
    nav.addEventListener('mouseleave', toggleDesc, true);
    nav.addEventListener('touchstart', toggleDesc, true);
    nav.addEventListener('touchleave', toggleDesc, true);

    //top nav logic

    var topNav = document.getElementById('top-nav');

    document.addEventListener('scroll', makeNavFixed);

    function makeNavFixed() {
        if (document.body.scrollTop >= 100 && !topNav.className.includes("fixed")) {
            topNav.className += " fixed";

        } else if (document.body.scrollTop < 100) {
            topNav.classList.remove("fixed");

        }
    }

});