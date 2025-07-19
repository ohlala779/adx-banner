(function() {
  // Tạo thẻ script quảng cáo
  var script = document.createElement("script");
  script.async = true;
  script.setAttribute("data-cfasync", "false");
  script.setAttribute("data-clbaid", "");
  script.src = "//clammyendearedkeg.com/bn.js";

  // Tạo div chứa quảng cáo
  var adDiv = document.createElement("div");
  adDiv.setAttribute("data-cl-spot", "2058133");

  // Gói trong thẻ <center>
  var wrapper = document.createElement("center");
  wrapper.appendChild(script);
  wrapper.appendChild(adDiv);

  // Chèn vào body khi DOM đã tải xong
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function() {
      document.body.appendChild(wrapper);
    });
  } else {
    document.body.appendChild(wrapper);
  }
})();
