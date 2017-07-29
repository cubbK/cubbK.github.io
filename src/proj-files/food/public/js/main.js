document.addEventListener("DOMContentLoaded", function(event) {
    tns({
        container: document.querySelector('.slider'),
        items: 1,
        slideBy: 'page',
        dots: true,
        loop: true,
        controls: true,
        controlsContainer: document.querySelector('.slider-arrows'),
        nav: true,
        //navContainer: document.querySelector('.slider-nav')
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
var isInit = false;
document.addEventListener("scroll", function(event) {
    var a = document.getElementsByClassName('wrapper-progress')[0];
    var b = document.getElementsByTagName('body')[0];


    if (b.scrollTop >= (a.offsetTop - 150) && isInit != true) {
        isInit = true;
        for (var i = 0; i < 4; i++) {
            drawSvg(i);
        }
    }

});

function drawSvg(n) {
    var drawProgress = function(el, percent) {
        if (isNaN(percent)) {
            return;
        }
        percent = parseFloat(percent);
        var α = (percent / 100) * 360,
            π = Math.PI,
            w = 153;
        if (α >= 360) {
            α = 359.999;
        }
        var r = (α * π / 180),
            x = Math.sin(r) * w,
            y = Math.cos(r) * -w,
            mid = (α > 180) ? 1 : 0,
            animBar = 'M 0 0 v -%@ A %@ %@ 1 '.replace(/%@/gi, w) +
            mid + ' 1 ' +
            x + ' ' +
            y + ' z';
        el.setAttribute('d', animBar);
    };

    var el = document.querySelectorAll('.progress-radial-bar');
    var max = el[n].getAttribute('data-max');
    var progress = 0.0;

    var interval = window.setInterval(function() {
        progress = progress + 1;
        if (progress >= max) {
            window.clearInterval(interval);
        }

        drawProgress(el[n], progress);
        // document.getElementsByTagName("text")[n].textContent = parseInt(progress) + "%";

    }, 10);
}