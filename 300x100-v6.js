jQuery(document).ready(function($) {
    $.get("https://www.cloudflare.com/cdn-cgi/trace", function(data) {
        var lines = data.split('\n');
        var ip = lines.find(line => line.startsWith('ip=')).split('=')[1];
        var country = lines.find(line => line.startsWith('loc=')).split('=')[1];
        if (country.trim() === "VN") {
            var script = document.createElement('script');
            script.async = true;
            script.setAttribute('data-cfasync', 'false');
            script.setAttribute('data-clbaid', '');
            script.src = '//clammyendearedkeg.com/bn.js';

            var adsElements = document.getElementsByClassName('header-float');
            if (adsElements.length > 0) {
                adsElements[0].appendChild(script);

                var adDiv = document.createElement('div');
                adDiv.setAttribute('data-cl-spot', '2058133');
                adsElements[0].appendChild(adDiv);
            }
        }
    });
});
