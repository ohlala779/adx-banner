jQuery(document).ready(function($) {
    // Tạo mã quảng cáo
    var adContainer = document.createElement('div');
    adContainer.className = 'adsbanner1';

    var script = document.createElement('script');
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.setAttribute("data-clbaid", "");
    script.src = "//clammyendearedkeg.com/bn.js";

    var div = document.createElement('div');
    div.setAttribute("data-cl-spot", "2058133");

    adContainer.appendChild(script);
    adContainer.appendChild(div);

    var headerElements = document.getElementsByClassName('header-float');
    if (headerElements.length > 0) {
        headerElements[0].appendChild(adContainer);
    }
});
