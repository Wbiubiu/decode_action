//Tue Oct 08 2024 15:50:22 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
let password = "2234";
if (localStorage.getItem("pan_password") == password) {} else checkPassword("success", "输入密码进入");
function checkPassword(_0x35a670, _0x502211) {
  document.body.classList.add("no-scroll");
  swal({
    "title": "公告",
    "text": "\n关注公众号【iosxiaoluobo】回复【密码】\n或者加入下方QQ群艾特【Q群管家】密码\n仅供本人学习研究及收藏存档\n如有侵犯权益，敬请联系删除\n点击下方添加QQ群：通过链接加入小萝卜交流群",
    "html": "true",
    "closeOnConfirm": false,
    "closeOnClickOutside": false,
    "icon": _0x35a670,
    "buttons": {
      "confirm": {
        "text": "确认访问",
        "value": "confirm",
        "className": "custom-swal-button swal-button--confirm"
      },
      "copy": {
        "text": "复制公众号",
        "value": "copy_mini_program",
        "className": "custom-swal-button swal-button--copy"
      },
      "joinQQ": {
        "text": "添加QQ群",
        "value": "join_qq_group",
        "className": "custom-swal-button swal-button--joinQQ"
      },
      "viewAnnouncement": {
        "text": "获取密码",
        "value": "view_announcement",
        "className": "custom-swal-button swal-button--copy"
      }
    },
    "content": {
      "element": "input",
      "attributes": {
        "placeholder": "请输入访问密码",
        "type": "password"
      }
    }
  }).then(_0x366f92 => {
    document.body.classList.remove("no-scroll");
    if (_0x366f92 === "") checkPassword("warning", "请输入正确的密码");else {
      if (_0x366f92 === password) swal("欢迎访问小萝卜の云盘", {
        "button": false
      }), localStorage.setItem("pan_password", _0x366f92);else _0x366f92 === "view_announcement" ? showAnnouncement() : checkPassword("warning", "密码错误");
    }
    if (_0x366f92 === "copy_mini_program") {
      const _0x743a16 = "iosxiaoluobo",
        _0xfdad17 = document.createElement("textarea");
      _0xfdad17.value = _0x743a16;
      document.body.appendChild(_0xfdad17);
      _0xfdad17.select();
      document.execCommand("copy");
      document.body.removeChild(_0xfdad17);
      swal("复制成功！", "请前微信搜索添加。").then(() => {
        checkPassword("success", "输入密码进入");
      });
    } else _0x366f92 === "join_qq_group" && (window.location.href = "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=4KMN7srC0qgQRkt-zV5F2a1B46bCC1Q4&authKey=vplFw2%2BJ50H8ZOwxlamgmKNkaih8rxtZNQREOdxE8o8UwhWpmDhJdLPJvTR1LbM6&noverify=0&group_code=330314602");
  });
}
function showAnnouncement() {
  swal({
    "title": "小萝卜の云盘",
    "text": "扫码下面二维码或关注公众号【iOS小萝卜】获取最新密码",
    "buttons": {
      "cancel": {
        "text": "关闭",
        "value": false,
        "visible": true
      }
    },
    "icon": "info",
    "content": {
      "element": "img",
      "attributes": {
        "src": "https://imgsrc.baidu.com/forum/pic/item/42166d224f4a20a474e8cbfdd6529822720ed012.jpg"
      }
    }
  }).then(_0x40771a => {
    checkPassword("success", "输入密码进入");
  });
}