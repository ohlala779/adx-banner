document.addEventListener('DOMContentLoaded', function() {
    fetch('https://www.cloudflare.com/cdn-cgi/trace')
        .then(response => response.text())
        .then(data => {
            var lines = data.split('\n');
            var countryLine = lines.find(line => line.startsWith('loc='));
            if (!countryLine) {
                console.warn('Could not find country code');
                return;
            }
            var country = countryLine.split('=')[1].trim();
            console.log("Detected country:", country);

            if (country === "VN") {
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
        })
        .catch(err => console.error('Fetch error:', err));
});
