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
(function(document) {
    
    function init() {
        // add link animation events
        var links = document.querySelector('.socialItem');
        for(var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function() { animateLink(this); } , false);
        }
    }
    init();
    
    function animateLink(dom) {
        addClass(dom, 'clickAnimation');
        setTimeout(function() {
            removeClass(dom, 'clickAnimation');
            // sorry but if you dont like google analytics I recomend using uBlock! (https://chrismatic.io/ublock/)
            ga('send', 'event', 'link', 'click', dom.name);
        }, 1000);
    }
    
    //helper functions
    function addClass(dom, className) {
        var name = dom.className;
        name = name.replace(className, '');
        name = name.trim();
        name += ' ' + className;
        dom.className = name;
    }
    
    function removeClass(dom, className) {
        var name = dom.className;
        name = name.replace(className, '');
        name = name.trim();
        dom.className = name;
    }
    
    function getJson(url, successCB) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200) {
                var json = JSON.parse(request.responseText);
                successCB(json);
            }
        }
        request.open("GET", url, true);
        request.send();
    }
    
    // get data from last.fm
    window.lastfm = function lastfm() {
        console.log('you found a secret function! *yay*')
        getJson('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=lucianweber&api_key=6490b570ec3a7c82181a18cba4cff2ae&format=json&limit=1', function(info) {
            var track = null;
            if(info.recenttracks && info.recenttracks.track) {
                if(info.recenttracks.track[0])
                    track = info.recenttracks.track[0];
                else
                    track = info.recenttracks.track;
            }
            
            if(track !== null) {
                var trackName = track.name;
                trackName = trackName.split('-')[0];
                trackName = trackName.replace(/\((.*?)\)/g, '');
                trackName = trackName.trim();
                var artistName = track.artist['#text'];
                if(track['@attr'] && track['@attr'].nowplaying === "true") {
                    console.log('I am currently listening to ' + trackName + ' by ' + artistName + '.');
                } else {
                    console.log('The last song I was listening to was "' + trackName + '" by "' + artistName + '".');
                }
            }
        });
    }
})(window.document);