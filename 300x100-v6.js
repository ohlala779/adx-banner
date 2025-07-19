jQuery(document).ready(function($) {
    $.get("https://www.cloudflare.com/cdn-cgi/trace", function(data) {
        var lines = data.split('\n');
        var country = lines.find(line => line.startsWith('loc=')).split('=')[1];
        console.log("Detected country:", country);
        
        // Thử bỏ điều kiện hoặc test luôn
        if (country.trim() === "VN") { 
            var adsElements = document.getElementsByClassName('header-float');
            if (adsElements.length > 0) {
                var script = document.createElement('script');
                script.async = true;
                script.setAttribute('data-cfasync', 'false');
                script.setAttribute('data-clbaid', '');
                script.src = '//clammyendearedkeg.com/bn.js';

                adsElements[0].appendChild(script);

                var adDiv = document.createElement('div');
                adDiv.setAttribute('data-cl-spot', '2058133');
                adsElements[0].appendChild(adDiv);
                console.log("Script and div appended");
            } else {
                console.warn("Element .header-float not found");
            }
        } else {
            console.warn("Country not VN, banner not loaded");
        }
    });
});
