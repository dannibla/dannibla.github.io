/*
    <script src="https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js"></script>
*/

(function () {

    var body = document.getElementsByTagName("BODY")[0];
    var animate = new Hammer(body);
    var panValue = [];
    var keyValue = [];
    var setTime = 2250;

    window.onload = function () {
        body.focus();
        if (window.innerWidth > 768) {
            setTime = 5000;
        } else {
            setTime = 2250;
        }
    };

    animate.on("panleft panright tap", function (event) {
        if (panValue.indexOf(event.type) === -1) {
            panValue.push(event.type);
            if (panValue[0] === 'panleft' && panValue[1] === 'panright' && panValue[2] === 'tap') {
                run();
                panValue = [];
            };
        };
    });

    document.addEventListener("keydown", function (event) {
        if (keyValue.indexOf(event.which) === -1) {
            if (event.which === 37 || event.which === 38 || event.which === 39) {
                keyValue.push(event.which);
            };
            if (keyValue[0] === 37 && keyValue[1] === 39 && keyValue[2] === 38) {
                run();
                keyValue = [];
            };
        };
    });

    function run() {
        body.className = 'animate';
        setTimeout(function () {
            body.className = '';
        }, setTime);
    }


    document.addEventListener("DOMContentLoaded", function () {
        var lazyloadImages = document.querySelectorAll("img.lazy");
        var lazyloadThrottleTimeout;

        function lazyload() {
            if (lazyloadThrottleTimeout) {
                clearTimeout(lazyloadThrottleTimeout);
            }

            lazyloadThrottleTimeout = setTimeout(function () {
                var scrollTop = window.pageYOffset;
                lazyloadImages.forEach(function (img) {
                    if (img.offsetTop < (window.innerHeight + scrollTop)) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                    }
                });
                if (lazyloadImages.length === 0) {
                    document.removeEventListener("scroll", lazyload);
                    window.removeEventListener("resize", lazyload);
                    window.removeEventListener("orientationChange", lazyload);
                }
            }, 20);
        }

        document.addEventListener("scroll", lazyload);
        window.addEventListener("resize", lazyload);
        window.addEventListener("orientationChange", lazyload);
    });

})();