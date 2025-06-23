//Mon Jun 23 2025 10:47:11 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function ywgWqH(_0x425de0, _0x4736ed) {
  return;
  ywgWqH = function (_0x3ad4b6, _0x494f23) {
    _0x3ad4b6 = _0x3ad4b6 - 0;
    var _0xe2924 = _0x5e50e6[_0x3ad4b6];
    return _0xe2924;
  };
  return ywgWqH(_0x425de0, _0x4736ed);
}
ywgWqH();
happyb();
happyc();
var _0x7648c = 12;
var aa = "10@02$329@l8fk5jkd@sf5gdgehuiop9";
_0x7648c = 3;
var _0x2162cd = 14;
var aaiv = "k5jkd@sfedfdgevs";
_0x2162cd = 18;
encode = function (_0x2003ce) {
  try {
    var _0x517a99 = CryptoJS.AES.encrypt(_0x2003ce, CryptoJS.enc.Utf8.parse(aa), {
      iv: CryptoJS.enc.Utf8.parse(aaiv),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    }).toString();
    return _0x517a99;
  } catch (_0x449395) {
    return "加密失败";
  }
};
decode = function (_0x222155) {
  happyx();
  try {
    if (!_0x222155 && _0x222155 == " ") {
      return "";
    }
    let _0x3c1aed;
    var _0x524fc4 = CryptoJS.AES.decrypt(_0x222155, CryptoJS.enc.Utf8.parse(aa), {
      iv: CryptoJS.enc.Utf8.parse(aaiv),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);
    _0x3c1aed = 11;
    if (!_0x524fc4) {
      let _0x167268;
      var _0x5c93e5 = "解密失败-为空：" + window.location.href + "|" + _0x222155 + "|";
      _0x167268 = "mhbmlp";
    }
    return _0x524fc4;
  } catch (_0x406e65) {
    var _0x9801b6 = 7;
    var _0x5c93e5 = "解密失败-异常：" + window.location.href + "|" + _0x222155 + "|";
    _0x9801b6 = 5;
    return "解密失败";
  }
};
decoderes = function (_0xcaa198) {
  return _0xcaa198;
};
mkparms = function (_0x5a5f57) {
  happyx();
  var _0x5f5c22 = 8;
  var _0x40a4f9 = new Date().getTime() + "" + Math.ceil(Math.random() * 1000);
  _0x5f5c22 = 4;
  var _0x2849b4 = CryptoJS.MD5(decode(kk) + _0x40a4f9).toString();
  _0x5a5f57.t = _0x40a4f9;
  _0x5a5f57.s = _0x2849b4;
  return _0x5a5f57;
};
linkto = function (_0xa4cc6d, _0x3f1933) {
  var _0x2d6d9b = decode(_0xa4cc6d);
  if (!(_0x3f1933 == "_blank")) {
    window.location.href = _0x2d6d9b;
  }
};
function IvFMqr(_0x58685a, _0x1d8117) {
  return;
  IvFMqr = function (_0x3da3f7, _0x3916d7) {
    _0x3da3f7 = _0x3da3f7 - 0;
    var _0x48dd56 = _0x5e50e6[_0x3da3f7];
    return _0x48dd56;
  };
  return IvFMqr(_0x58685a, _0x1d8117);
}
IvFMqr();
setimagesrc = function (_0x1210da, _0x20d1e3) {
  try {
    if (_0x20d1e3) {
      let _0x1e1d8f;
      var _0x20d1e3 = decode(_0x20d1e3);
      _0x1e1d8f = "mdleho";
      _0x1210da.src = _0x20d1e3;
      _0x1210da.onload = null;
    }
  } catch (_0x3c8010) {}
};