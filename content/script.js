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

// Links
(function() {
    
    function open(dom) {
        dom.className += ' clickAnimation';
        setTimeout(function() {
            dom.className = dom.className.replace(' clickAnimation', '');
            ga('send', 'event', 'link', 'click', dom.name);
        }, 1000);
    }
    
    function init() {
        var links = window.document.getElementsByClassName('socialItem');
        for(var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function() { open(this) } , false);
        }
    }
    init();
    
})()