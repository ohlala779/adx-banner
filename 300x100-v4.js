document.addEventListener("DOMContentLoaded", function () {
  var adScript = document.createElement("script");
  adScript.async = true;
  adScript.setAttribute("data-cfasync", "false");
  adScript.setAttribute("data-clbaid", "");
  adScript.src = "https://clammyendearedkeg.com/bn.js";

  var adDiv = document.createElement("div");
  adDiv.setAttribute("data-cl-spot", "2058133");

  var wrapper = document.createElement("center");
  wrapper.appendChild(adScript);
  wrapper.appendChild(adDiv);

  var adsElements = document.getElementsByClassName("header-ads");
  if (adsElements.length > 0) {
    adsElements[0].appendChild(wrapper);
  } else {
    document.body.appendChild(wrapper);
  }
});
