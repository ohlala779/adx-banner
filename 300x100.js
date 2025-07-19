// Tạo thẻ <script>
const script = document.createElement('script');
script.async = true;
script.setAttribute('data-cfasync', 'false');
script.setAttribute('data-clbaid', '');
script.src = '//clammyendearedkeg.com/bn.js';

// Tạo thẻ <div>
const div = document.createElement('div');
div.setAttribute('data-cl-spot', '2058133');

// Chèn vào body (hoặc chỗ bạn muốn trong DOM)
document.body.appendChild(script);
document.body.appendChild(div);
