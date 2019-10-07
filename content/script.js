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
    
    console.log("%cDear visitor,\n\n%cyou can find all sourcefiles of this website in its public github repository. [https://github.com/lucianweber/weber.xyz]\nIf you want to contact me, choose one of the listed platforms and drop me a message.\n\nHave a great day,\nLucian", "font-size: 20px","font-size: 16px");

})(window.document);
