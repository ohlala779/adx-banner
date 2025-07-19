<script>
    jQuery(document).ready(function($) {
        // Tạo script quảng cáo
        var adScript = document.createElement('script');
        adScript.async = true;
        adScript.setAttribute('data-cfasync', 'false');
        adScript.setAttribute('data-clbaid', '');
        adScript.src = '//clammyendearedkeg.com/bn.js';

        // Tạo div quảng cáo
        var adDiv = document.createElement('div');
        adDiv.setAttribute('data-cl-spot', '2058133');

        // Gói vào <center>
        var wrapper = document.createElement('center');
        wrapper.appendChild(adScript);
        wrapper.appendChild(adDiv);

        // Chèn vào phần tử có class .header-ads
        var adsElements = document.getElementsByClassName('header-ads');
        if (adsElements.length > 0) {
            adsElements[0].appendChild(wrapper);
        } else {
            document.body.appendChild(wrapper); // fallback nếu không có .header-ads
        }
    });
</script>
