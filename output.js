//Mon Sep 16 2024 12:58:26 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
!function (_0x3f0b5b, _0x359dab) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = _0x359dab() : "function" == typeof define && define.amd ? define(_0x359dab) : (_0x3f0b5b = "undefined" != typeof globalThis ? globalThis : _0x3f0b5b || self).Snowflakes = _0x359dab();
}(this, function () {
  "use strict";

  var _0x522e0c = "";
  function _0x155a22(_0x155a22, _0x261253) {
    Object.keys(_0x261253).forEach(function (_0x2bc08d) {
      var _0x488a6c = _0x2bc08d;
      _0x522e0c && _0x2bc08d.search("animation") > -1 && (_0x488a6c = _0x522e0c + _0x2bc08d[0].toUpperCase() + _0x2bc08d.substr(1));
      _0x155a22.style[_0x488a6c] = _0x261253[_0x2bc08d];
    });
  }
  function _0x51cd1f(_0x522e0c) {
    _0x522e0c && _0x522e0c.parentNode && _0x522e0c.parentNode.removeChild(_0x522e0c);
  }
  function _0x46aa81(_0x522e0c, _0x155a22) {
    _0x522e0c.classList.add(_0x155a22);
  }
  function _0xd2e362(_0x522e0c, _0x155a22) {
    _0x522e0c.classList.remove(_0x155a22);
  }
  function _0x41af97(_0x522e0c, _0x155a22) {
    return _0x522e0c + Math.floor(Math.random() * (_0x155a22 - _0x522e0c));
  }
  function _0x1864ad(_0x522e0c, _0x155a22, _0x51cd1f, _0x46aa81, _0xd2e362) {
    return _0x46aa81 + (_0xd2e362 - _0x46aa81) * (_0x522e0c - _0x155a22) / (_0x51cd1f - _0x155a22);
  }
  "undefined" != typeof window && (_0x522e0c = Array.prototype.slice.call(window.getComputedStyle(document.documentElement, "")).join(",").search(/,animation/) > -1 ? "" : "webkit");
  function _0x14f32f(_0x522e0c, _0x155a22, _0x51cd1f) {
    return Math.floor(_0x1864ad(_0x522e0c, 0, 20, _0x155a22, _0x51cd1f));
  }
  var _0x4eb8d1 = function () {
    function _0x522e0c(_0x522e0c) {
      var _0x51cd1f = _0x522e0c.minSize === _0x522e0c.maxSize;
      this.innerSize = _0x51cd1f ? 0 : _0x41af97(0, 20);
      this.size = _0x14f32f(this.innerSize, _0x522e0c.minSize, _0x522e0c.maxSize);
      var _0xd2e362 = document.createElement("div"),
        _0x4eb8d1 = document.createElement("div"),
        _0x514a60 = this.getAnimationProps(_0x522e0c),
        _0x466973 = {
          "animationName": "snowflake_gid_" + _0x522e0c.gid + "_y",
          "animationDelay": _0x514a60.animationDelay,
          "animationDuration": _0x514a60.animationDuration,
          "left": 99 * Math.random() + "%",
          "top": -Math.sqrt(2) * this.size + "px",
          "width": this.size + "px",
          "height": this.size + "px"
        };
      _0x51cd1f || (_0x466973.opacity = String(_0x1864ad(this.size, _0x522e0c.minSize, _0x522e0c.maxSize, _0x522e0c.minOpacity, _0x522e0c.maxOpacity)));
      _0x155a22(_0xd2e362, _0x466973);
      _0x155a22(_0x4eb8d1, {
        "animationName": "snowflake_gid_" + _0x522e0c.gid + "_x_" + this.innerSize,
        "animationDelay": 4 * Math.random() + "s"
      });
      _0x46aa81(_0xd2e362, "snowflake");
      _0x46aa81(_0x4eb8d1, "snowflake__inner");
      _0x522e0c.types && _0x46aa81(_0x4eb8d1, "snowflake__inner_type_" + _0x41af97(0, _0x522e0c.types));
      _0x522e0c.wind && _0x46aa81(_0x4eb8d1, "snowflake__inner_wind");
      _0x522e0c.rotation && _0x46aa81(_0x4eb8d1, "snowflake__inner_rotation" + (Math.random() > 0.5 ? "" : "_reverse"));
      _0xd2e362.appendChild(_0x4eb8d1);
      this.elem = _0xd2e362;
    }
    return _0x522e0c.prototype.resize = function (_0x522e0c) {
      var _0x51cd1f = this.getAnimationProps(_0x522e0c);
      this.elem && _0x155a22(this.elem, _0x51cd1f);
    }, _0x522e0c.prototype.appendTo = function (_0x522e0c) {
      this.elem && _0x522e0c.appendChild(this.elem);
    }, _0x522e0c.prototype.destroy = function () {
      delete this.elem;
    }, _0x522e0c.prototype.getAnimationProps = function (_0x522e0c) {
      var _0x155a22 = _0x522e0c.containerHeight / 50 / _0x522e0c.speed,
        _0x51cd1f = _0x155a22 / 3;
      return {
        "animationDelay": Math.random() * _0x155a22 + "s",
        "animationDuration": String(_0x1864ad(this.size, _0x522e0c.minSize, _0x522e0c.maxSize, _0x155a22, _0x51cd1f) + "s")
      };
    }, _0x522e0c;
  }();
  return function () {
    function _0x522e0c(_0x155a22) {
      this.destroyed = !1;
      this.flakes = [];
      this.isBody = !1;
      this.params = this.setParams(_0x155a22);
      this.isBody = this.params.container === document.body;
      _0x522e0c.gid++;
      this.gid = _0x522e0c.gid;
      this.container = this.appendContainer();
      this.params.stop && this.stop();
      this.appendStyles();
      this.appendFlakes();
      this.containerSize = {
        "width": this.width(),
        "height": this.height()
      };
      this.handleResize = this.handleResize.bind(this);
      window.addEventListener("resize", this.handleResize, !1);
    }
    return _0x522e0c.prototype.start = function () {
      _0xd2e362(this.container, "snowflakes_paused");
    }, _0x522e0c.prototype.stop = function () {
      _0x46aa81(this.container, "snowflakes_paused");
    }, _0x522e0c.prototype.show = function () {
      _0xd2e362(this.container, "snowflakes_hidden");
    }, _0x522e0c.prototype.hide = function () {
      _0x46aa81(this.container, "snowflakes_hidden");
    }, _0x522e0c.prototype.destroy = function () {
      this.destroyed || (this.destroyed = !0, _0x522e0c.instanceCounter && _0x522e0c.instanceCounter--, this.removeStyles(), _0x51cd1f(this.container), this.flakes.forEach(function (_0x522e0c) {
        return _0x522e0c.destroy();
      }), this.flakes = [], window.removeEventListener("resize", this.handleResize, !1));
    }, _0x522e0c.prototype.handleResize = function () {
      var _0x522e0c = this.width(),
        _0x51cd1f = this.height();
      if (this.containerSize.width !== _0x522e0c || this.containerSize.height !== _0x51cd1f) {
        this.containerSize.width = _0x522e0c;
        this.containerSize.height = _0x51cd1f;
        var _0x46aa81 = this.getFlakeParams();
        _0x155a22(this.container, {
          "display": "none"
        });
        this.flakes.forEach(function (_0x522e0c) {
          return _0x522e0c.resize(_0x46aa81);
        });
        this.updateAnimationStyle();
        (function (_0x522e0c) {
          _0x155a22(_0x522e0c, {
            "display": "block"
          });
        })(this.container);
      }
    }, _0x522e0c.prototype.appendContainer = function () {
      var _0x522e0c = document.createElement("div");
      return _0x46aa81(_0x522e0c, "snowflakes"), _0x46aa81(_0x522e0c, "snowflakes_gid_" + this.gid), this.isBody && _0x46aa81(_0x522e0c, "snowflakes_body"), _0x155a22(_0x522e0c, {
        "zIndex": String(this.params.zIndex)
      }), this.params.container.appendChild(_0x522e0c), _0x522e0c;
    }, _0x522e0c.prototype.appendStyles = function () {
      _0x522e0c.instanceCounter || (this.mainStyleNode = this.injectStyle(".snowflake{-webkit-animation:snowflake_unknown 10s linear infinite;animation:snowflake_unknown 10s linear infinite;pointer-events:none;position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;will-change:transform}.snowflake__inner,.snowflake__inner:before{bottom:0;left:0;position:absolute;right:0;top:0}.snowflake__inner:before{background-size:100% 100%;content:\"\"}.snowflake__inner_wind{-webkit-animation:snowflake_unknown 2s ease-in-out infinite alternate;animation:snowflake_unknown 2s ease-in-out infinite alternate}.snowflake__inner_rotation:before{-webkit-animation:snowflake_rotation 10s linear infinite;animation:snowflake_rotation 10s linear infinite}.snowflake__inner_rotation_reverse:before{-webkit-animation:snowflake_rotation_reverse 10s linear infinite;animation:snowflake_rotation_reverse 10s linear infinite}@-webkit-keyframes snowflake_rotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes snowflake_rotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes snowflake_rotation_reverse{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(-1turn);transform:rotate(-1turn)}}@keyframes snowflake_rotation_reverse{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(-1turn);transform:rotate(-1turn)}}.snowflakes{pointer-events:none}.snowflakes_paused .snowflake,.snowflakes_paused .snowflake__inner,.snowflakes_paused .snowflake__inner:before{-webkit-animation-play-state:paused;animation-play-state:paused}.snowflakes_hidden{visibility:hidden}.snowflakes_body{height:1px;left:0;position:fixed;top:0;width:100%}"));
      _0x522e0c.instanceCounter++;
      this.imagesStyleNode = this.injectStyle(".snowflakes_gid_value .snowflake__inner_type_0:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36.283' height='36.283'%3E%3Cpath d='M35.531 17.391h-3.09l.845-1.464a.748.748 0 1 0-1.297-.75l-1.276 2.214H28.61l2.515-4.354a.751.751 0 0 0-.272-1.024.75.75 0 0 0-1.024.274l-2.948 5.104h-2.023a6.751 6.751 0 0 0-2.713-4.684l1.019-1.76 5.896-.002a.75.75 0 0 0 0-1.5l-5.029.002 1.051-1.82 2.557.002a.75.75 0 0 0 0-1.5l-1.689-.002 1.545-2.676a.75.75 0 1 0-1.302-.75l-1.547 2.676-.844-1.463a.749.749 0 1 0-1.297.75l1.278 2.213-1.051 1.818-2.514-4.354a.75.75 0 0 0-1.298.75l2.946 5.104-1.016 1.758a6.692 6.692 0 0 0-2.706-.57 6.74 6.74 0 0 0-2.707.568l-1.013-1.754 2.946-5.105a.75.75 0 0 0-1.298-.75L13.56 8.697l-1.05-1.818 1.278-2.217a.749.749 0 0 0-1.298-.75l-.845 1.465-1.551-2.678a.75.75 0 0 0-1.024-.273.748.748 0 0 0-.274 1.023l1.545 2.678H8.652a.75.75 0 0 0 0 1.5h2.556l1.05 1.818H7.231a.75.75 0 0 0 0 1.5h5.894l1.017 1.762a6.755 6.755 0 0 0-2.712 4.684H9.406l-2.95-5.104a.75.75 0 1 0-1.299.75l2.516 4.354H5.569l-1.277-2.213a.75.75 0 0 0-1.298.75l.845 1.463H.75a.75.75 0 0 0 0 1.5h3.09l-.845 1.465a.747.747 0 0 0 .275 1.022.75.75 0 0 0 .374.103.75.75 0 0 0 .65-.375l1.277-2.215h2.103l-2.516 4.354a.75.75 0 0 0 1.299.75l2.949-5.104h2.024a6.761 6.761 0 0 0 2.712 4.685l-1.017 1.762H7.232a.75.75 0 0 0 0 1.5h5.026l-1.05 1.818H8.651a.75.75 0 0 0 0 1.5h1.69l-1.545 2.676a.75.75 0 0 0 1.299.75l1.546-2.676.846 1.465a.755.755 0 0 0 .65.375.737.737 0 0 0 .375-.103.747.747 0 0 0 .274-1.022l-1.279-2.215 1.05-1.82 2.515 4.354a.75.75 0 0 0 1.299-.75l-2.947-5.104 1.013-1.756a6.72 6.72 0 0 0 5.415 0l1.014 1.756-2.947 5.104a.75.75 0 0 0 1.298.75l2.515-4.354 1.053 1.82-1.277 2.213a.75.75 0 0 0 1.298.75l.844-1.463 1.545 2.678c.141.24.393.375.65.375a.75.75 0 0 0 .649-1.125l-1.548-2.678h1.689a.75.75 0 0 0 0-1.5h-2.557l-1.051-1.82 5.029.002a.75.75 0 0 0 0-1.5l-5.896-.002-1.019-1.76a6.75 6.75 0 0 0 2.711-4.685h2.023l2.947 5.104a.753.753 0 0 0 1.025.273.749.749 0 0 0 .272-1.023l-2.515-4.354h2.104l1.279 2.215a.75.75 0 0 0 .649.375c.127 0 .256-.03.375-.103a.748.748 0 0 0 .273-1.022l-.848-1.465h3.092a.75.75 0 0 0 .003-1.5zm-12.136.75c0 .257-.041.502-.076.75a5.223 5.223 0 0 1-1.943 3.358 5.242 5.242 0 0 1-1.291.766 5.224 5.224 0 0 1-1.949.384 5.157 5.157 0 0 1-3.239-1.15 5.22 5.22 0 0 1-1.943-3.358c-.036-.247-.076-.493-.076-.75s.04-.503.076-.75a5.22 5.22 0 0 1 1.944-3.359c.393-.312.82-.576 1.291-.765a5.219 5.219 0 0 1 1.948-.384c.69 0 1.344.142 1.948.384.471.188.898.454 1.291.765a5.222 5.222 0 0 1 1.943 3.359c.035.247.076.493.076.75z' fill=':color:'/%3E%3C/svg%3E\")}.snowflakes_gid_value .snowflake__inner_type_1:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32.813' height='32.813'%3E%3Cpath d='M29.106 24.424a.781.781 0 0 1-.781.781h-3.119v3.119a.782.782 0 0 1-1.562 0v-4.682h4.682c.43.001.78.351.78.782zM4.673 9.352h4.682V4.671a.781.781 0 0 0-1.563 0V7.79H4.673a.781.781 0 0 0 0 1.562zM3.708 24.24c0 .431.35.781.781.781H7.61v3.12a.78.78 0 1 0 1.562 0v-4.683H4.489a.782.782 0 0 0-.781.782zM28.923 8.39a.78.78 0 0 0-.781-.781h-3.121V4.488a.781.781 0 0 0-1.562 0v4.684h4.684a.783.783 0 0 0 .78-.782zm3.889 8.017c0 .431-.35.781-.781.781h-3.426l1.876 1.873a.784.784 0 0 1 0 1.107.791.791 0 0 1-.554.228.773.773 0 0 1-.55-.228l-2.979-2.98h-2.995a6.995 6.995 0 0 1-1.728 3.875h5.609a.781.781 0 0 1 0 1.562h-4.666v4.667a.782.782 0 0 1-1.562 0v-5.61a7 7 0 0 1-3.866 1.719v2.995l2.978 2.98c.306.305.306.8 0 1.104a.78.78 0 0 1-1.104 0l-1.874-1.876v3.427a.781.781 0 0 1-1.562 0v-3.427l-1.875 1.876a.78.78 0 1 1-1.105-1.104l2.979-2.98v-2.995a7.016 7.016 0 0 1-3.865-1.717v5.608a.781.781 0 0 1-1.562 0v-4.667H5.535a.781.781 0 0 1 0-1.562h5.607a7.022 7.022 0 0 1-1.728-3.875H6.417l-2.979 2.979a.784.784 0 0 1-1.104 0 .781.781 0 0 1 0-1.106l1.874-1.873H.782a.78.78 0 1 1-.001-1.563h3.426L2.333 13.75a.783.783 0 0 1 1.105-1.106l2.979 2.979h2.995a6.996 6.996 0 0 1 1.72-3.866H5.533a.781.781 0 0 1 0-1.562h4.666V5.528a.781.781 0 0 1 1.562 0v5.599a6.995 6.995 0 0 1 3.865-1.717V6.415l-2.978-2.979a.782.782 0 0 1 1.105-1.105l1.874 1.875V.781a.78.78 0 1 1 1.562 0v3.426l1.875-1.875a.777.777 0 0 1 1.104 0 .78.78 0 0 1 0 1.105l-2.978 2.98v2.996a7.021 7.021 0 0 1 3.866 1.718V5.532a.78.78 0 1 1 1.562 0v4.666h4.666a.78.78 0 1 1 0 1.562h-5.599a7 7 0 0 1 1.718 3.866h2.995l2.979-2.979a.783.783 0 0 1 1.106 1.106l-1.876 1.874h3.427a.777.777 0 0 1 .778.78zm-11.006-.782a5.457 5.457 0 0 0-4.618-4.617c-.257-.037-.514-.079-.781-.079-.268 0-.524.042-.781.079a5.458 5.458 0 0 0-4.618 4.617c-.038.257-.079.514-.079.781s.041.522.079.781a5.455 5.455 0 0 0 4.618 4.616c.257.036.514.079.781.079s.524-.043.781-.079a5.457 5.457 0 0 0 4.618-4.616c.037-.259.079-.515.079-.781s-.043-.524-.079-.781z' fill=':color:'/%3E%3C/svg%3E\")}.snowflakes_gid_value .snowflake__inner_type_2:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='35.79' height='35.79'%3E%3Cpath d='M7.161 22.223l.026-.047.865.5-.026.047a.503.503 0 0 1-.434.25c-.019 0-.034-.013-.053-.016l-.355-.205a.493.493 0 0 1-.023-.529zM9.969 8.988l2.785.001 1.393-2.414a.502.502 0 0 0-.869-.499l-1.103 1.913-2.208-.001a.5.5 0 1 0 .002 1zm15.854 17.813h-2.785l-1.393 2.411a.499.499 0 0 0 .436.75c.172 0 .34-.09.434-.25l1.104-1.911h2.207c.274 0 .5-.224.5-.5a.505.505 0 0 0-.503-.5zM23.038 8.99h2.785a.5.5 0 0 0 0-1h-2.207l-1.105-1.913a.5.5 0 0 0-.868.5l1.395 2.413zM12.754 26.801H9.967a.5.5 0 0 0 0 1h2.209l1.105 1.912a.496.496 0 0 0 .682.184.5.5 0 0 0 .184-.684l-1.393-2.412zm-7.218-6.309a.502.502 0 0 0 .685-.184l1.391-2.413-1.394-2.413a.5.5 0 0 0-.867.5l1.104 1.913-1.104 1.913a.5.5 0 0 0 .185.684zM30.254 15.3a.505.505 0 0 0-.685.183l-1.392 2.412 1.395 2.414a.501.501 0 0 0 .867-.5l-1.104-1.914 1.104-1.912a.5.5 0 0 0-.185-.683zm3.138 11.542a.501.501 0 0 1-.683.184l-.98-.565-2.137 1.231a.516.516 0 0 1-.5 0l-2.385-1.377a.502.502 0 0 1-.25-.433v-.854h-4.441l-2.225 3.852.736.428c.154.088.25.254.25.432l.001 2.755a.5.5 0 0 1-.25.433l-2.133 1.229v1.136c0 .274-.225.5-.5.5s-.5-.226-.5-.5v-1.136l-2.136-1.23a.5.5 0 0 1-.25-.433l.001-2.755c0-.178.096-.344.25-.432l.738-.427-2.224-3.849H9.332l.002.851a.505.505 0 0 1-.25.435l-2.387 1.377a.5.5 0 0 1-.5 0L4.06 26.46l-.982.567a.5.5 0 0 1-.5-.867l.982-.567.001-2.465c0-.179.097-.344.25-.434l2.388-1.377a.497.497 0 0 1 .5 0l.736.426 2.221-3.848-2.222-3.849-.737.426a.51.51 0 0 1-.5 0l-2.386-1.377a.5.5 0 0 1-.25-.434l.002-2.464-.983-.567a.501.501 0 0 1-.184-.683.502.502 0 0 1 .684-.183l.983.568 2.134-1.233a.5.5 0 0 1 .5 0l2.385 1.379c.156.089.25.255.25.433v.85h4.443l2.223-3.846-.74-.427a.501.501 0 0 1-.25-.434l.002-2.755c0-.178.096-.343.25-.433l2.135-1.233V.5a.5.5 0 0 1 1 0v1.135l2.134 1.231c.154.089.25.254.25.434l-.002 2.755a.503.503 0 0 1-.25.433l-.733.425 2.224 3.849h4.44l-.002-.851c0-.179.096-.344.25-.434l2.388-1.378a.502.502 0 0 1 .5 0l2.136 1.233.982-.568a.5.5 0 1 1 .5.866l-.983.568v2.464a.503.503 0 0 1-.25.433l-2.388 1.378a.5.5 0 0 1-.5 0l-.735-.426-2.222 3.849 2.223 3.849.734-.425a.506.506 0 0 1 .5 0l2.389 1.375c.154.09.25.255.25.435l-.002 2.462.982.568c.24.137.321.444.182.682zm-2.165-1.828l.001-1.597-1.888-1.087-.734.424-.348.201-.301.173-.5.289v2.179l1.885 1.088 1.386-.802.498-.286.001-.582zm-3.736-11.467l-.531-.307-2.283 1.318-2.443 3.337 2.442 3.337 2.283 1.316.531-.306-2.514-4.348 2.515-4.347zm-7.712 16.478l-.762-.438-.339-.194-.283-.166-.5-.289-.5.289-.279.162-.349.2-.757.437-.001 2.177 1.386.797.501.289.499-.287 1.386-.798-.002-2.179zM16.008 5.767l.736.425.371.214.279.16.5.288.5-.289.281-.163.367-.212.732-.424.002-2.178-1.381-.797-.502-.289-.498.287-1.385.8-.002 2.178zm6.52 14.227l-1.535-2.099 1.535-2.098.732-1-1.232.134-2.585.281-1.048-2.379-.5-1.133-.5 1.134-1.049 2.379-2.585-.281-1.232-.134.732 1 1.536 2.097-1.536 2.098-.732 1 1.232-.134 2.585-.281 1.049 2.379.5 1.134.5-1.134 1.048-2.379 2.585.281 1.232.134-.732-.999zm8.2-10.084l-1.386-.8-1.887 1.089v1.279l.002.32v.577l.5.289.28.163.367.213.732.424 1.888-1.089v-2.178l-.496-.287zM18.927 7.413l-.532.307v2.637l1.667 3.784 4.111-.447 2.283-1.317-.002-.613h-5.02l-2.507-4.351zm-9.594 4.348v.614l2.283 1.318 4.111.447 1.668-3.785V7.719l-.531-.306-2.509 4.347-5.022.001zm-2.15 1.279l.37-.213.279-.162.5-.289V10.2L6.446 9.11l-1.384.8-.499.289v.578l-.002 1.599 1.885 1.088.737-.424zm1.119 9.205l.53.306 2.281-1.316 2.443-3.339-2.442-3.337-2.281-1.317-.531.307 2.511 4.348-2.511 4.348zm-1.115-.069l-.026.047a.493.493 0 0 0 .023.529l-.734-.424-1.887 1.089-.001 1.599v.578l.5.288 1.386.8 1.887-1.088v-1.278l-.002-.321v-.577l-.5-.289-.293-.169c.02.002.035.017.055.017a.5.5 0 0 0 .433-.25l.026-.047-.867-.504zm9.679 6.202l.529-.306v-2.637l-1.668-3.785-4.111.447-2.283 1.316.002.611 5.021.002 2.51 4.352zm9.591-4.349v-.612L24.174 22.1l-4.111-.447-1.667 3.783v2.639l.531.307 2.512-4.352h5.018v-.001z' fill=':color:'/%3E%3C/svg%3E\")}.snowflakes_gid_value .snowflake__inner_type_3:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32.815' height='32.815'%3E%3Cpath d='M4.581 23.55h4.681v4.681a.78.78 0 1 1-1.562 0v-3.118H4.581a.781.781 0 0 1 0-1.563zM29.016 8.481a.781.781 0 0 0-.781-.781h-3.119V4.582a.781.781 0 0 0-1.562 0v4.681h4.682c.429 0 .78-.35.78-.782zm-24.252.598l4.683-.001V4.395a.781.781 0 0 0-1.562 0v3.121l-3.121.001a.781.781 0 0 0 0 1.562zm23.655 14.287h-4.685l.002 4.684a.78.78 0 1 0 1.562 0l-.002-3.121h3.122a.781.781 0 0 0 .001-1.563zm4.394-6.96a.78.78 0 0 1-.781.781h-3.426l1.876 1.875a.782.782 0 0 1-1.104 1.105l-2.979-2.979h-1.986L17.19 24.41v1.987l2.977 2.979a.781.781 0 0 1-1.103 1.106l-1.874-1.875v3.426a.78.78 0 1 1-1.562 0v-3.426l-1.875 1.875a.782.782 0 0 1-1.105-1.105l2.978-2.979V24.41l-7.219-7.22H6.418l-2.98 2.98a.777.777 0 0 1-1.103 0 .781.781 0 0 1 0-1.106L4.21 17.19H.783a.78.78 0 1 1 0-1.562h3.426l-1.876-1.875a.782.782 0 1 1 1.106-1.105l2.979 2.979h1.989l7.219-7.218v-1.99L12.648 3.44a.782.782 0 1 1 1.106-1.105l1.874 1.874V.781a.782.782 0 0 1 1.563 0v3.426l1.875-1.875a.783.783 0 0 1 1.106 1.105l-2.979 2.979v1.99l7.216 7.218h1.992l2.979-2.979a.782.782 0 0 1 1.105 1.105l-1.876 1.874h3.427a.781.781 0 0 1 .777.782zm-10.613.782l.778-.78-.781-.782-5.009-5.008-.781-.781-.781.781-5.01 5.008-.781.781.781.781 5.01 5.011.782.781.78-.779 5.012-5.013zm5.863 4.646a.782.782 0 0 0-.781-.781h-6.229v6.228a.78.78 0 1 0 1.562 0v-4.665h4.666a.782.782 0 0 0 .782-.782zm-.001-10.855a.782.782 0 0 0-.781-.781h-4.664V5.532a.782.782 0 0 0-1.562 0v6.228h6.227a.78.78 0 0 0 .78-.781zm-23.318 0c0 .432.35.781.781.781h6.228V5.532a.781.781 0 0 0-1.562 0v4.666H5.525a.781.781 0 0 0-.781.781zm.002 10.855c0 .432.35.781.781.781h4.664v4.665a.78.78 0 1 0 1.562 0v-6.228H5.527a.783.783 0 0 0-.781.782z' fill=':color:'/%3E%3C/svg%3E\")}.snowflakes_gid_value .snowflake__inner_type_4:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='37.794' height='37.794'%3E%3Cpath d='M30.638 17.313l-.914 1.584.915 1.585a.78.78 0 1 1-1.352.78l-1.366-2.366 1.366-2.365a.782.782 0 0 1 1.067-.286c.372.215.5.692.284 1.068zM11.65 11.08l2.733.002 1.367-2.367a.78.78 0 0 0-1.352-.781l-.915 1.585-1.831-.002h-.001a.78.78 0 0 0-.001 1.563zm14.491 15.633h-2.733l-1.365 2.365a.78.78 0 1 0 1.352.78l.914-1.584h1.831a.781.781 0 0 0 .001-1.561zm-4.1-17.998l1.367 2.367h2.733a.78.78 0 1 0 0-1.562h-1.833l-.915-1.585a.78.78 0 0 0-1.352.78zM15.75 29.08l-1.368-2.366h-2.733a.781.781 0 0 0 0 1.562h1.832l.917 1.585c.146.25.409.391.677.391a.779.779 0 0 0 .675-1.172zm-8.313-7.531a.78.78 0 0 0 1.067-.284L9.87 18.9l-1.367-2.368a.781.781 0 0 0-1.351.781l.916 1.587-.914 1.584a.776.776 0 0 0 .283 1.065zm27.827 6.798a.784.784 0 0 1-1.067.285l-.89-.515-2.096 1.209a.793.793 0 0 1-.391.105.762.762 0 0 1-.391-.105l-2.484-1.435a.78.78 0 0 1-.391-.676l-.002-2.417-2.408-1.392a7.714 7.714 0 0 1-5.467 3.168v2.773l2.093 1.208a.78.78 0 0 1 .391.676l.001 2.868c0 .28-.149.537-.392.676l-2.093 1.205v1.032a.781.781 0 0 1-1.562 0V35.98l-2.095-1.207a.78.78 0 0 1-.391-.676l.001-2.868c0-.28.15-.537.391-.676l2.094-1.206v-2.773a7.718 7.718 0 0 1-5.468-3.168l-2.408 1.392.002 2.415c0 .281-.15.539-.391.676l-2.487 1.437a.785.785 0 0 1-.782 0l-2.095-1.209-.893.518a.782.782 0 0 1-.782-1.354l.893-.517.001-2.414a.78.78 0 0 1 .391-.677l2.487-1.434a.774.774 0 0 1 .781 0l2.093 1.208 2.407-1.39a7.655 7.655 0 0 1 0-6.317l-2.406-1.39-2.096 1.209a.772.772 0 0 1-.782 0l-2.485-1.434a.786.786 0 0 1-.391-.676l.002-2.416-.894-.517a.78.78 0 0 1-.285-1.066.788.788 0 0 1 1.07-.283l.893.514 2.093-1.208a.774.774 0 0 1 .781 0L9.851 9.91c.24.14.391.398.391.675L10.24 13l2.408 1.392a7.712 7.712 0 0 1 5.468-3.167V8.45L16.02 7.242a.78.78 0 0 1-.391-.676l.002-2.87c0-.279.15-.538.391-.675l2.094-1.208V.781a.781.781 0 0 1 1.562 0v1.032l2.093 1.206a.785.785 0 0 1 .391.677l-.002 2.87c0 .28-.149.536-.391.674l-2.091 1.208v2.772a7.708 7.708 0 0 1 5.467 3.167l2.409-1.392-.002-2.416c0-.28.149-.539.391-.676l2.487-1.436c.24-.14.539-.14.781 0l2.095 1.208.894-.514a.78.78 0 1 1 .781 1.352l-.894.516v2.417c0 .279-.15.538-.391.675l-2.487 1.436a.785.785 0 0 1-.782 0l-2.092-1.209-2.408 1.39c.436.967.684 2.032.684 3.158a7.65 7.65 0 0 1-.684 3.158l2.408 1.391 2.091-1.206a.782.782 0 0 1 .78 0l2.488 1.432c.24.141.392.398.392.677l-.002 2.414.893.517a.783.783 0 0 1 .287 1.068zm-6.147-16.251l.001.9.78.453.921.531 1.706-.982v-1.965l-.78-.451-.923-.533-1.707.983.002 1.064zm-20.443-.002l.002-1.063-1.706-.985-.922.535-.778.451-.001.902-.001 1.063 1.703.982.924-.533.779-.451v-.901zm0 13.604l-.001-.899-.781-.451-.919-.533-1.706.982-.001 1.064v.901l.781.451.923.533 1.707-.982-.003-1.066zm15.109-3.076c.315-.413.586-.864.789-1.351a6.121 6.121 0 0 0 0-4.748 6.175 6.175 0 0 0-.789-1.35 6.158 6.158 0 0 0-4.106-2.375 6.48 6.48 0 0 0-.781-.056c-.266 0-.525.022-.781.056a6.149 6.149 0 0 0-4.106 2.375 6.128 6.128 0 0 0-.789 1.35 6.104 6.104 0 0 0-.479 2.374 6.1 6.1 0 0 0 1.268 3.725 6.15 6.15 0 0 0 4.106 2.374c.256.031.516.056.781.056s.525-.022.781-.056a6.142 6.142 0 0 0 4.106-2.374zM17.19 6.113l.924.531.781.452.781-.452.919-.531.002-1.968-.921-.531-.784-.452-.779.451-.922.532-.001 1.968zm3.408 25.57l-.921-.532-.781-.452-.781.452-.922.532-.001 1.966.923.531.782.451.78-.449.922-.533-.001-1.966zm11.925-5.819l.001-1.063-1.707-.981-.919.529-.782.451v.901l.001 1.065 1.702.981.924-.533.778-.449.002-.901z' fill=':color:'/%3E%3C/svg%3E\")}.snowflakes_gid_value .snowflake__inner_type_5:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='31.25' height='31.25'%3E%3Cpath d='M20.581 1.176l-3.914 3.915V0h1.041v2.576L19.845.439l.736.737zm-1.615 9.069l.351.217 6.623-6.625-.736-.737-6.048 6.051a7.141 7.141 0 0 0-1.449-.6v-.082l5.082-5.082-.737-.737-5.387 5.388v1.33l.402.093a6.213 6.213 0 0 1 1.899.784zm2.041 2.043c.368.585.63 1.224.786 1.893l.094.403h1.028l5.171-5.173-.736-.737-4.699 4.701a7.523 7.523 0 0 0-.549-1.28l6.048-6.05-.737-.735-6.622 6.625.216.353zm7.368 1.254l1.921-1.923-.736-.735-3.699 3.7h5.39v-1.042h-2.876zm1.185 6.826l.736-.736-1.923-1.923h2.877v-1.042h-5.389l3.699 3.701zm-6.915-2.498l4.705 4.707.736-.736-5.171-5.174h-1.03l-.096.4a6.24 6.24 0 0 1-.795 1.883l-.22.353 6.639 6.641.736-.736-6.061-6.062c.227-.414.414-.84.557-1.276zm-3.7 3.125a6.241 6.241 0 0 1-1.88.794l-.399.096v1.33l5.387 5.387.736-.736-5.082-5.082v-.089a7.322 7.322 0 0 0 1.434-.605l6.061 6.062.736-.736-6.641-6.641-.352.22zM16.667 31.25h1.041v-2.576l2.137 2.137.736-.737-3.914-3.914v5.09zm-5.26-.439l2.134-2.137v2.576h1.042v-5.093l-3.913 3.916.737.738zm.897-9.816l-.352-.222-6.642 6.641.736.736 6.062-6.062c.456.254.937.456 1.433.605v.089l-5.08 5.082.736.736 5.387-5.387v-1.33l-.4-.096a6.175 6.175 0 0 1-1.88-.792zm-2.046-2.047a6.315 6.315 0 0 1-.798-1.883l-.096-.4H8.335l-5.172 5.174.737.736 4.706-4.71c.145.441.329.865.556 1.276L3.1 25.202l.736.736 6.643-6.643-.221-.347zM0 16.667v1.042h2.876L.954 19.632l.736.736 3.698-3.701H0zm1.69-5.783l-.736.735 1.921 1.923H0v1.042h5.39l-3.7-3.7zm6.916 2.498L3.9 8.674l-.736.737 5.172 5.173h1.029l.096-.4a6.15 6.15 0 0 1 .798-1.881l.222-.352L3.837 5.31l-.736.736 6.062 6.06a7.268 7.268 0 0 0-.557 1.276zm-.145-9.996l5.08 5.082v.088c-.497.15-.977.352-1.433.606L6.047 3.101l-.736.737 6.643 6.643.352-.222a6.223 6.223 0 0 1 1.88-.797l.4-.095v-1.33L9.2 2.649l-.739.737zm5.081-.81L11.408.439l-.736.737 3.913 3.917V0h-1.042v2.576zm-1.757 14.831a4.2 4.2 0 0 0 2.06 2.058l.739.338v-3.136h-3.138l.339.74zm0-3.562l-.337.738h3.135v-3.136l-.739.338a4.223 4.223 0 0 0-2.059 2.06zm7.679 3.561l.338-.739h-3.135v3.136l.738-.338a4.204 4.204 0 0 0 2.059-2.059zm0-3.561a4.198 4.198 0 0 0-2.059-2.06l-.738-.34v3.138h3.135l-.338-.738z' fill=':color:'/%3E%3C/svg%3E\")}".replace(/:color:/g, encodeURIComponent(this.params.color)));
      this.animationStyleNode = this.injectStyle(this.getAnimationStyle());
    }, _0x522e0c.prototype.injectStyle = function (_0x522e0c, _0x155a22) {
      return function (_0x522e0c, _0x155a22) {
        return _0x155a22 || (_0x155a22 = document.createElement("style"), document.body.appendChild(_0x155a22)), _0x155a22.textContent = _0x522e0c, _0x155a22;
      }(_0x522e0c.replace(/_gid_value/g, "_gid_" + this.gid), _0x155a22);
    }, _0x522e0c.prototype.getFlakeParams = function () {
      var _0x522e0c = this.height(),
        _0x155a22 = this.params;
      return {
        "containerHeight": _0x522e0c,
        "gid": this.gid,
        "count": _0x155a22.count,
        "speed": _0x155a22.speed,
        "rotation": _0x155a22.rotation,
        "minOpacity": _0x155a22.minOpacity,
        "maxOpacity": _0x155a22.maxOpacity,
        "minSize": _0x155a22.minSize,
        "maxSize": _0x155a22.maxSize,
        "types": _0x155a22.types,
        "wind": _0x155a22.wind
      };
    }, _0x522e0c.prototype.appendFlakes = function () {
      var _0x522e0c = this,
        _0x155a22 = this.getFlakeParams();
      this.flakes = [];
      for (var _0x51cd1f = 0; _0x51cd1f < this.params.count; _0x51cd1f++) this.flakes.push(new _0x4eb8d1(_0x155a22));
      this.flakes.sort(function (_0x522e0c, _0x155a22) {
        return _0x522e0c.size - _0x155a22.size;
      }).forEach(function (_0x155a22) {
        _0x155a22.appendTo(_0x522e0c.container);
      });
    }, _0x522e0c.prototype.setParams = function (_0x522e0c) {
      var _0x155a22 = _0x522e0c || {},
        _0x51cd1f = {},
        _0x46aa81 = {
          "color": "#5ECDEF",
          "container": document.body,
          "count": 50,
          "speed": 1,
          "stop": !1,
          "rotation": !0,
          "minOpacity": 0.6,
          "maxOpacity": 1,
          "minSize": 10,
          "maxSize": 25,
          "types": 6,
          "width": void 0,
          "height": void 0,
          "wind": !0,
          "zIndex": 9999
        };
      return Object.keys(_0x46aa81).forEach(function (_0x522e0c) {
        _0x51cd1f[_0x522e0c] = void 0 === _0x155a22[_0x522e0c] ? _0x46aa81[_0x522e0c] : _0x155a22[_0x522e0c];
      }), _0x51cd1f;
    }, _0x522e0c.prototype.getAnimationStyle = function () {
      for (var _0x522e0c = this.height() + this.params.maxSize * Math.sqrt(2) + "px", _0x155a22 = this.gid, _0x51cd1f = "@-webkit-keyframes snowflake_gid_" + _0x155a22 + "_y{from{-webkit-transform:translateY(0px)}to{-webkit-transform:translateY(" + _0x522e0c + ");}}\n@keyframes snowflake_gid_" + _0x155a22 + "_y{from{transform:translateY(0px)}to{transform:translateY(" + _0x522e0c + ")}}", _0x46aa81 = 0; _0x46aa81 <= 20; _0x46aa81++) {
        var _0xd2e362 = _0x14f32f(_0x46aa81, this.params.minSize, this.params.maxSize) + "px";
        _0x51cd1f += "@-webkit-keyframes snowflake_gid_" + _0x155a22 + "_x_" + _0x46aa81 + "{from{-webkit-transform:translateX(0px)}to{-webkit-transform:translateX(" + _0xd2e362 + ");}}\n@keyframes snowflake_gid_" + _0x155a22 + "_x_" + _0x46aa81 + "{from{transform:translateX(0px)}to{transform:translateX(" + _0xd2e362 + ")}}";
      }
      return _0x51cd1f;
    }, _0x522e0c.prototype.updateAnimationStyle = function () {
      this.injectStyle(this.getAnimationStyle(), this.animationStyleNode);
    }, _0x522e0c.prototype.removeStyles = function () {
      _0x522e0c.instanceCounter || (_0x51cd1f(this.mainStyleNode), delete this.mainStyleNode);
      _0x51cd1f(this.imagesStyleNode);
      delete this.imagesStyleNode;
      _0x51cd1f(this.animationStyleNode);
      delete this.animationStyleNode;
    }, _0x522e0c.prototype.width = function () {
      return this.params.width || (this.isBody ? (_0x155a22 = document.body, _0x51cd1f = document.documentElement, window.innerWidth ? _0x522e0c = window.innerWidth : _0x51cd1f && _0x51cd1f.clientWidth ? _0x522e0c = _0x51cd1f.clientWidth : _0x155a22 && (_0x522e0c = _0x155a22.clientWidth), _0x522e0c || 0) : this.params.container.offsetWidth);
      var _0x522e0c, _0x155a22, _0x51cd1f;
    }, _0x522e0c.prototype.height = function () {
      return this.params.height || (this.isBody ? (_0x155a22 = document.body, _0x51cd1f = document.documentElement, window.innerHeight ? _0x522e0c = window.innerHeight : _0x51cd1f && _0x51cd1f.clientHeight ? _0x522e0c = _0x51cd1f.clientHeight : _0x155a22 && (_0x522e0c = _0x155a22.clientHeight), _0x522e0c || 0) : this.params.container.offsetHeight + this.params.maxSize);
      var _0x522e0c, _0x155a22, _0x51cd1f;
    }, _0x522e0c.instanceCounter = 0, _0x522e0c.gid = 0, _0x522e0c;
  }();
});
_0xodk = "jsjiami.com.v6";
async function sendMsg(a, e) {
  a && ($.isNode() ? await notify.sendNotify($.name, a) : $.msg($.name, $.title || "", a, e));
}
function DoubleLog(o) {
  o && ($.log(`${o}`), $.notifyMsg.push(`${o}`));
}
async function checkEnv() {
  try {
    if (!userCookie?.length) throw new Error("no available accounts found");
    $.log(`\n[INFO] 检测到 ${userCookie?.length ?? 0} 个账号\n`);
    $.userList.push(...userCookie.map(o => new UserInfo(o)).filter(Boolean));
  } catch (o) {
    throw o;
  }
}
function debug(g, e = "debug") {
  "true" === $.is_debug && ($.log(`\n-----------${e}------------\n`), $.log("string" == typeof g ? g : $.toStr(g) || `debug error => t=${g}`), $.log(`\n-----------${e}------------\n`));
}
function ObjectKeys2LowerCase(obj) {
  return !obj ? {} : Object.fromEntries(Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v]));
}
async function Request(t) {
  "string" == typeof t && (t = {
    url: t
  });
  try {
    if (!t?.url) throw new Error("[URL][ERROR] 缺少 url 参数");
    let {
      url: o,
      type: e,
      headers: r = {},
      body: s,
      params: a,
      dataType: n = "form",
      resultType: u = "data"
    } = t;
    const p = e ? e?.toLowerCase() : "body" in t ? "post" : "get",
      c = o.concat("post" === p ? "?" + $.queryStr(a) : ""),
      i = t.timeout ? $.isSurge() ? t.timeout / 1000 : t.timeout : 10000;
    "json" === n && (r["Content-Type"] = "application/json;charset=UTF-8");
    const y = "string" == typeof s ? s : s && "form" == n ? $.queryStr(s) : $.toStr(s),
      l = {
        ...t,
        ...(t?.opts ? t.opts : {}),
        url: c,
        headers: r,
        ...("post" === p && {
          body: y
        }),
        ...("get" === p && a && {
          params: a
        }),
        timeout: i
      },
      m = $.http[p.toLowerCase()](l).then(t => "data" == u ? $.toObj(t.body) || t.body : $.toObj(t) || t).catch(t => $.log(`[${p.toUpperCase()}][ERROR] ${t}\n`));
    return Promise.race([new Promise((t, o) => setTimeout(() => o("当前请求已超时"), i)), m]);
  } catch (t) {
    console.log(`[${p.toUpperCase()}][ERROR] ${t}\n`);
  }
}
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      const i = new Promise((e, i) => {
        s.call(this, t, (t, s, o) => {
          t ? i(t) : e(s);
        });
      });
      return t.timeout ? ((t, e = 1000) => Promise.race([t, new Promise((t, s) => {
        setTimeout(() => {
          s(new Error("请求超时"));
        }, e);
      })]))(i, t.timeout) : i;
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20;
        o = e && e.timeout ? e.timeout : o;
        const [r, a] = i.split("@"),
          n = {
            url: `http://${a}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: o
            },
            headers: {
              "X-Key": r,
              Accept: "*/*"
            },
            policy: "DIRECT",
            timeout: o
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], void 0 === o) return s;
      return o;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s), t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          o = s ? this.getval(s) : "";
        if (o) try {
          const t = JSON.parse(o);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e),
          r = this.getval(i),
          a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, o, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t);
          s = this.setval(JSON.stringify(r), i);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          return this.data = this.loaddata(), this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          return this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.cookie && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
                statusCode: i,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = s.decode(a, this.encoding);
            e(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: i,
              response: o
            } = t;
            e(i, o, o && s.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: o,
            ...r
          } = t;
          this.got[s](o, r).then(t => {
            const {
                statusCode: s,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = i.decode(a, this.encoding);
            e(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: o
            } = t;
            e(s, o, o && i.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
      }
      return e = e.substring(0, e.length - 1), e;
    }
    msg(e = t, s = "", i = "", o = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: i,
          $mediaMime: o
        } = t;
        switch (typeof t) {
          case void 0:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), i) {
                    let t, e, s;
                    if (i.startsWith("http")) t = i;else if (i.startsWith("data:")) {
                      const [t] = i.split(";"),
                        [, o] = i.split(",");
                      e = o;
                      s = t.replace("data:", "");
                    } else {
                      e = i;
                      s = (t => {
                        const e = {
                          JVBERi0: "application/pdf",
                          R0lGODdh: "image/gif",
                          R0lGODlh: "image/gif",
                          iVBORw0KGgo: "image/png",
                          "/9j/": "image/jpg"
                        };
                        for (var s in e) if (0 === t.indexOf(s)) return e[s];
                        return null;
                      })(i);
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": o ?? s
                    });
                  }
                  return Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  }), r;
                }
              case "Loon":
                {
                  const s = {};
                  let o = t.openUrl || t.url || t["open-url"] || e;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = t.mediaUrl || t["media-url"];
                  return i?.startsWith("http") && (r = i), r && Object.assign(s, {
                    mediaUrl: r
                  }), console.log(JSON.stringify(s)), s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  i?.startsWith("http") && (a = i);
                  a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  return n && Object.assign(o, {
                    "update-pasteboard": n
                  }), console.log(JSON.stringify(o)), o;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          $notification.post(e, s, i, r(o));
          break;
        case "Quantumult X":
          $notify(e, s, i, r(o));
          break;
        case "Node.js":
          break;
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, e, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, e, void 0 !== t.message ? t.message : t, t.stack);
          break;
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}