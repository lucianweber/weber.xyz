// Application Cache Checker
(function() {
    window.addEventListener('load', function (e) {
        window.applicationCache.addEventListener('updateready', function (e) {
            if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
                window.applicationCache.swapCache();
                window.location.reload();
            }
        }, false);
    }, false);
})();

// Google Analytics
(function() {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-61547324-1', 'auto');
    ga('send', 'pageview');
})();


(function(document) {

    document
        .querySelector('a[name="email"]')
        .addEventListener('click', function(event) {
            event.preventDefault();
            location.href = 'mailto:' + atob("bHVjaWFuQHdlYmVyLnh5eg==");
        });

    document
        .querySelector('.image > div')
        .addEventListener('click', function(event) {
            event.preventDefault();
            document
                .querySelector('#social')
                .classList
                .toggle('small');
        });
    
    console.log("%cDear visitor,\n\n%cyou can find all sourcefiles of this website in its public github repository. [https://github.com/lucianw/lucianw.github.io]\nIf you want to contact me, choose one of the listed platforms and drop me a message.\n\nHave a great day,\nLucian", "font-size: 20px","font-size: 16px");

})(window.document);