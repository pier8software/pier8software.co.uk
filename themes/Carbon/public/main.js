(() => {
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };

  // bootstrap.bundle.min.js
  var require_stdin = __commonJS((exports, module) => {
    /*!
      * Bootstrap v5.0.0-alpha2 (https://getbootstrap.com/)
      * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
      * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
      */
    !function(t, e) {
      typeof exports == "object" && typeof module != "undefined" ? module.exports = e() : typeof define == "function" && define.amd ? define(e) : (t = typeof globalThis != "undefined" ? globalThis : t || self).bootstrap = e();
    }(exports, function() {
      "use strict";
      function t(t2, e2) {
        for (var n2 = 0; n2 < e2.length; n2++) {
          var i2 = e2[n2];
          i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(t2, i2.key, i2);
        }
      }
      function e(e2, n2, i2) {
        return n2 && t(e2.prototype, n2), i2 && t(e2, i2), e2;
      }
      function n() {
        return (n = Object.assign || function(t2) {
          for (var e2 = 1; e2 < arguments.length; e2++) {
            var n2 = arguments[e2];
            for (var i2 in n2)
              Object.prototype.hasOwnProperty.call(n2, i2) && (t2[i2] = n2[i2]);
          }
          return t2;
        }).apply(this, arguments);
      }
      var i, o, r, s, a = function(t2) {
        do {
          t2 += Math.floor(1e6 * Math.random());
        } while (document.getElementById(t2));
        return t2;
      }, l = function(t2) {
        var e2 = t2.getAttribute("data-target");
        if (!e2 || e2 === "#") {
          var n2 = t2.getAttribute("href");
          e2 = n2 && n2 !== "#" ? n2.trim() : null;
        }
        return e2;
      }, c = function(t2) {
        var e2 = l(t2);
        return e2 && document.querySelector(e2) ? e2 : null;
      }, u = function(t2) {
        var e2 = l(t2);
        return e2 ? document.querySelector(e2) : null;
      }, f = function(t2) {
        if (!t2)
          return 0;
        var e2 = window.getComputedStyle(t2), n2 = e2.transitionDuration, i2 = e2.transitionDelay, o2 = parseFloat(n2), r2 = parseFloat(i2);
        return o2 || r2 ? (n2 = n2.split(",")[0], i2 = i2.split(",")[0], 1e3 * (parseFloat(n2) + parseFloat(i2))) : 0;
      }, h = function(t2) {
        t2.dispatchEvent(new Event("transitionend"));
      }, d = function(t2) {
        return (t2[0] || t2).nodeType;
      }, p = function(t2, e2) {
        var n2 = false, i2 = e2 + 5;
        t2.addEventListener("transitionend", function e3() {
          n2 = true, t2.removeEventListener("transitionend", e3);
        }), setTimeout(function() {
          n2 || h(t2);
        }, i2);
      }, g = function(t2, e2, n2) {
        Object.keys(n2).forEach(function(i2) {
          var o2, r2 = n2[i2], s2 = e2[i2], a2 = s2 && d(s2) ? "element" : (o2 = s2) == null ? "" + o2 : {}.toString.call(o2).match(/\s([a-z]+)/i)[1].toLowerCase();
          if (!new RegExp(r2).test(a2))
            throw new Error(t2.toUpperCase() + ': Option "' + i2 + '" provided type "' + a2 + '" but expected type "' + r2 + '".');
        });
      }, m = function(t2) {
        if (!t2)
          return false;
        if (t2.style && t2.parentNode && t2.parentNode.style) {
          var e2 = getComputedStyle(t2), n2 = getComputedStyle(t2.parentNode);
          return e2.display !== "none" && n2.display !== "none" && e2.visibility !== "hidden";
        }
        return false;
      }, v = function() {
        return function() {
        };
      }, _ = function(t2) {
        return t2.offsetHeight;
      }, b = function() {
        var t2 = window.jQuery;
        return t2 && !document.body.hasAttribute("data-no-jquery") ? t2 : null;
      }, y = (i = {}, o = 1, {set: function(t2, e2, n2) {
        t2.bsKey === void 0 && (t2.bsKey = {key: e2, id: o}, o++), i[t2.bsKey.id] = n2;
      }, get: function(t2, e2) {
        if (!t2 || t2.bsKey === void 0)
          return null;
        var n2 = t2.bsKey;
        return n2.key === e2 ? i[n2.id] : null;
      }, delete: function(t2, e2) {
        if (t2.bsKey !== void 0) {
          var n2 = t2.bsKey;
          n2.key === e2 && (delete i[n2.id], delete t2.bsKey);
        }
      }}), w = function(t2, e2, n2) {
        y.set(t2, e2, n2);
      }, E = function(t2, e2) {
        return y.get(t2, e2);
      }, T = function(t2, e2) {
        y.delete(t2, e2);
      }, L = Element.prototype.querySelectorAll, k = Element.prototype.querySelector, C = (r = new CustomEvent("Bootstrap", {cancelable: true}), (s = document.createElement("div")).addEventListener("Bootstrap", function() {
        return null;
      }), r.preventDefault(), s.dispatchEvent(r), r.defaultPrevented), A = /:scope\b/;
      (function() {
        var t2 = document.createElement("div");
        try {
          t2.querySelectorAll(":scope *");
        } catch (t3) {
          return false;
        }
        return true;
      })() || (L = function(t2) {
        if (!A.test(t2))
          return this.querySelectorAll(t2);
        var e2 = Boolean(this.id);
        e2 || (this.id = a("scope"));
        var n2 = null;
        try {
          t2 = t2.replace(A, "#" + this.id), n2 = this.querySelectorAll(t2);
        } finally {
          e2 || this.removeAttribute("id");
        }
        return n2;
      }, k = function(t2) {
        if (!A.test(t2))
          return this.querySelector(t2);
        var e2 = L.call(this, t2);
        return e2[0] !== void 0 ? e2[0] : null;
      });
      var O = b(), S = /[^.]*(?=\..*)\.|.*/, D = /\..*/, x = /::\d+$/, N = {}, I = 1, j = {mouseenter: "mouseover", mouseleave: "mouseout"}, P = ["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"];
      function M(t2, e2) {
        return e2 && e2 + "::" + I++ || t2.uidEvent || I++;
      }
      function H(t2) {
        var e2 = M(t2);
        return t2.uidEvent = e2, N[e2] = N[e2] || {}, N[e2];
      }
      function B(t2, e2, n2) {
        n2 === void 0 && (n2 = null);
        for (var i2 = Object.keys(t2), o2 = 0, r2 = i2.length; o2 < r2; o2++) {
          var s2 = t2[i2[o2]];
          if (s2.originalHandler === e2 && s2.delegationSelector === n2)
            return s2;
        }
        return null;
      }
      function R(t2, e2, n2) {
        var i2 = typeof e2 == "string", o2 = i2 ? n2 : e2, r2 = t2.replace(D, ""), s2 = j[r2];
        return s2 && (r2 = s2), P.indexOf(r2) > -1 || (r2 = t2), [i2, o2, r2];
      }
      function F(t2, e2, n2, i2, o2) {
        if (typeof e2 == "string" && t2) {
          n2 || (n2 = i2, i2 = null);
          var r2 = R(e2, n2, i2), s2 = r2[0], a2 = r2[1], l2 = r2[2], c2 = H(t2), u2 = c2[l2] || (c2[l2] = {}), f2 = B(u2, a2, s2 ? n2 : null);
          if (f2)
            f2.oneOff = f2.oneOff && o2;
          else {
            var h2 = M(a2, e2.replace(S, "")), d2 = s2 ? function(t3, e3, n3) {
              return function i3(o3) {
                for (var r3 = t3.querySelectorAll(e3), s3 = o3.target; s3 && s3 !== this; s3 = s3.parentNode)
                  for (var a3 = r3.length; a3--; )
                    if (r3[a3] === s3)
                      return o3.delegateTarget = s3, i3.oneOff && U.off(t3, o3.type, n3), n3.apply(s3, [o3]);
                return null;
              };
            }(t2, n2, i2) : function(t3, e3) {
              return function n3(i3) {
                return i3.delegateTarget = t3, n3.oneOff && U.off(t3, i3.type, e3), e3.apply(t3, [i3]);
              };
            }(t2, n2);
            d2.delegationSelector = s2 ? n2 : null, d2.originalHandler = a2, d2.oneOff = o2, d2.uidEvent = h2, u2[h2] = d2, t2.addEventListener(l2, d2, s2);
          }
        }
      }
      function W(t2, e2, n2, i2, o2) {
        var r2 = B(e2[n2], i2, o2);
        r2 && (t2.removeEventListener(n2, r2, Boolean(o2)), delete e2[n2][r2.uidEvent]);
      }
      var U = {on: function(t2, e2, n2, i2) {
        F(t2, e2, n2, i2, false);
      }, one: function(t2, e2, n2, i2) {
        F(t2, e2, n2, i2, true);
      }, off: function(t2, e2, n2, i2) {
        if (typeof e2 == "string" && t2) {
          var o2 = R(e2, n2, i2), r2 = o2[0], s2 = o2[1], a2 = o2[2], l2 = a2 !== e2, c2 = H(t2), u2 = e2.charAt(0) === ".";
          if (s2 === void 0) {
            u2 && Object.keys(c2).forEach(function(n3) {
              !function(t3, e3, n4, i3) {
                var o3 = e3[n4] || {};
                Object.keys(o3).forEach(function(r3) {
                  if (r3.indexOf(i3) > -1) {
                    var s3 = o3[r3];
                    W(t3, e3, n4, s3.originalHandler, s3.delegationSelector);
                  }
                });
              }(t2, c2, n3, e2.slice(1));
            });
            var f2 = c2[a2] || {};
            Object.keys(f2).forEach(function(n3) {
              var i3 = n3.replace(x, "");
              if (!l2 || e2.indexOf(i3) > -1) {
                var o3 = f2[n3];
                W(t2, c2, a2, o3.originalHandler, o3.delegationSelector);
              }
            });
          } else {
            if (!c2 || !c2[a2])
              return;
            W(t2, c2, a2, s2, r2 ? n2 : null);
          }
        }
      }, trigger: function(t2, e2, n2) {
        if (typeof e2 != "string" || !t2)
          return null;
        var i2, o2 = e2.replace(D, ""), r2 = e2 !== o2, s2 = P.indexOf(o2) > -1, a2 = true, l2 = true, c2 = false, u2 = null;
        return r2 && O && (i2 = O.Event(e2, n2), O(t2).trigger(i2), a2 = !i2.isPropagationStopped(), l2 = !i2.isImmediatePropagationStopped(), c2 = i2.isDefaultPrevented()), s2 ? (u2 = document.createEvent("HTMLEvents")).initEvent(o2, a2, true) : u2 = new CustomEvent(e2, {bubbles: a2, cancelable: true}), n2 !== void 0 && Object.keys(n2).forEach(function(t3) {
          Object.defineProperty(u2, t3, {get: function() {
            return n2[t3];
          }});
        }), c2 && (u2.preventDefault(), C || Object.defineProperty(u2, "defaultPrevented", {get: function() {
          return true;
        }})), l2 && t2.dispatchEvent(u2), u2.defaultPrevented && i2 !== void 0 && i2.preventDefault(), u2;
      }}, Q = "alert", V = function() {
        function t2(t3) {
          this._element = t3, this._element && w(t3, "bs.alert", this);
        }
        var n2 = t2.prototype;
        return n2.close = function(t3) {
          var e2 = t3 ? this._getRootElement(t3) : this._element, n3 = this._triggerCloseEvent(e2);
          n3 === null || n3.defaultPrevented || this._removeElement(e2);
        }, n2.dispose = function() {
          T(this._element, "bs.alert"), this._element = null;
        }, n2._getRootElement = function(t3) {
          return u(t3) || t3.closest(".alert");
        }, n2._triggerCloseEvent = function(t3) {
          return U.trigger(t3, "close.bs.alert");
        }, n2._removeElement = function(t3) {
          var e2 = this;
          if (t3.classList.remove("show"), t3.classList.contains("fade")) {
            var n3 = f(t3);
            U.one(t3, "transitionend", function() {
              return e2._destroyElement(t3);
            }), p(t3, n3);
          } else
            this._destroyElement(t3);
        }, n2._destroyElement = function(t3) {
          t3.parentNode && t3.parentNode.removeChild(t3), U.trigger(t3, "closed.bs.alert");
        }, t2.jQueryInterface = function(e2) {
          return this.each(function() {
            var n3 = E(this, "bs.alert");
            n3 || (n3 = new t2(this)), e2 === "close" && n3[e2](this);
          });
        }, t2.handleDismiss = function(t3) {
          return function(e2) {
            e2 && e2.preventDefault(), t3.close(this);
          };
        }, t2.getInstance = function(t3) {
          return E(t3, "bs.alert");
        }, e(t2, null, [{key: "VERSION", get: function() {
          return "5.0.0-alpha2";
        }}]), t2;
      }();
      U.on(document, "click.bs.alert.data-api", '[data-dismiss="alert"]', V.handleDismiss(new V()));
      var K = b();
      if (K) {
        var Y = K.fn[Q];
        K.fn[Q] = V.jQueryInterface, K.fn[Q].Constructor = V, K.fn[Q].noConflict = function() {
          return K.fn[Q] = Y, V.jQueryInterface;
        };
      }
      var q = function() {
        function t2(t3) {
          this._element = t3, w(t3, "bs.button", this);
        }
        var n2 = t2.prototype;
        return n2.toggle = function() {
          this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
        }, n2.dispose = function() {
          T(this._element, "bs.button"), this._element = null;
        }, t2.jQueryInterface = function(e2) {
          return this.each(function() {
            var n3 = E(this, "bs.button");
            n3 || (n3 = new t2(this)), e2 === "toggle" && n3[e2]();
          });
        }, t2.getInstance = function(t3) {
          return E(t3, "bs.button");
        }, e(t2, null, [{key: "VERSION", get: function() {
          return "5.0.0-alpha2";
        }}]), t2;
      }();
      U.on(document, "click.bs.button.data-api", '[data-toggle="button"]', function(t2) {
        t2.preventDefault();
        var e2 = t2.target.closest('[data-toggle="button"]'), n2 = E(e2, "bs.button");
        n2 || (n2 = new q(e2)), n2.toggle();
      });
      var z = b();
      if (z) {
        var X = z.fn.button;
        z.fn.button = q.jQueryInterface, z.fn.button.Constructor = q, z.fn.button.noConflict = function() {
          return z.fn.button = X, q.jQueryInterface;
        };
      }
      function G(t2) {
        return t2 === "true" || t2 !== "false" && (t2 === Number(t2).toString() ? Number(t2) : t2 === "" || t2 === "null" ? null : t2);
      }
      function $(t2) {
        return t2.replace(/[A-Z]/g, function(t3) {
          return "-" + t3.toLowerCase();
        });
      }
      var Z = {setDataAttribute: function(t2, e2, n2) {
        t2.setAttribute("data-" + $(e2), n2);
      }, removeDataAttribute: function(t2, e2) {
        t2.removeAttribute("data-" + $(e2));
      }, getDataAttributes: function(t2) {
        if (!t2)
          return {};
        var e2 = n({}, t2.dataset);
        return Object.keys(e2).forEach(function(t3) {
          e2[t3] = G(e2[t3]);
        }), e2;
      }, getDataAttribute: function(t2, e2) {
        return G(t2.getAttribute("data-" + $(e2)));
      }, offset: function(t2) {
        var e2 = t2.getBoundingClientRect();
        return {top: e2.top + document.body.scrollTop, left: e2.left + document.body.scrollLeft};
      }, position: function(t2) {
        return {top: t2.offsetTop, left: t2.offsetLeft};
      }, toggleClass: function(t2, e2) {
        t2 && (t2.classList.contains(e2) ? t2.classList.remove(e2) : t2.classList.add(e2));
      }}, J = {matches: function(t2, e2) {
        return t2.matches(e2);
      }, find: function(t2, e2) {
        var n2;
        return e2 === void 0 && (e2 = document.documentElement), (n2 = []).concat.apply(n2, L.call(e2, t2));
      }, findOne: function(t2, e2) {
        return e2 === void 0 && (e2 = document.documentElement), k.call(e2, t2);
      }, children: function(t2, e2) {
        var n2, i2 = (n2 = []).concat.apply(n2, t2.children);
        return i2.filter(function(t3) {
          return t3.matches(e2);
        });
      }, parents: function(t2, e2) {
        for (var n2 = [], i2 = t2.parentNode; i2 && i2.nodeType === Node.ELEMENT_NODE && i2.nodeType !== 3; )
          this.matches(i2, e2) && n2.push(i2), i2 = i2.parentNode;
        return n2;
      }, prev: function(t2, e2) {
        for (var n2 = t2.previousElementSibling; n2; ) {
          if (n2.matches(e2))
            return [n2];
          n2 = n2.previousElementSibling;
        }
        return [];
      }, next: function(t2, e2) {
        for (var n2 = t2.nextElementSibling; n2; ) {
          if (this.matches(n2, e2))
            return [n2];
          n2 = n2.nextElementSibling;
        }
        return [];
      }}, tt = "carousel", et = ".bs.carousel", nt = {interval: 5e3, keyboard: true, slide: false, pause: "hover", wrap: true, touch: true}, it = {interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean"}, ot = {TOUCH: "touch", PEN: "pen"}, rt = function() {
        function t2(t3, e2) {
          this._items = null, this._interval = null, this._activeElement = null, this._isPaused = false, this._isSliding = false, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e2), this._element = t3, this._indicatorsElement = J.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners(), w(t3, "bs.carousel", this);
        }
        var i2 = t2.prototype;
        return i2.next = function() {
          this._isSliding || this._slide("next");
        }, i2.nextWhenVisible = function() {
          !document.hidden && m(this._element) && this.next();
        }, i2.prev = function() {
          this._isSliding || this._slide("prev");
        }, i2.pause = function(t3) {
          t3 || (this._isPaused = true), J.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (h(this._element), this.cycle(true)), clearInterval(this._interval), this._interval = null;
        }, i2.cycle = function(t3) {
          t3 || (this._isPaused = false), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
        }, i2.to = function(t3) {
          var e2 = this;
          this._activeElement = J.findOne(".active.carousel-item", this._element);
          var n2 = this._getItemIndex(this._activeElement);
          if (!(t3 > this._items.length - 1 || t3 < 0))
            if (this._isSliding)
              U.one(this._element, "slid.bs.carousel", function() {
                return e2.to(t3);
              });
            else {
              if (n2 === t3)
                return this.pause(), void this.cycle();
              var i3 = t3 > n2 ? "next" : "prev";
              this._slide(i3, this._items[t3]);
            }
        }, i2.dispose = function() {
          U.off(this._element, et), T(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
        }, i2._getConfig = function(t3) {
          return t3 = n({}, nt, t3), g(tt, t3, it), t3;
        }, i2._handleSwipe = function() {
          var t3 = Math.abs(this.touchDeltaX);
          if (!(t3 <= 40)) {
            var e2 = t3 / this.touchDeltaX;
            this.touchDeltaX = 0, e2 > 0 && this.prev(), e2 < 0 && this.next();
          }
        }, i2._addEventListeners = function() {
          var t3 = this;
          this._config.keyboard && U.on(this._element, "keydown.bs.carousel", function(e2) {
            return t3._keydown(e2);
          }), this._config.pause === "hover" && (U.on(this._element, "mouseenter.bs.carousel", function(e2) {
            return t3.pause(e2);
          }), U.on(this._element, "mouseleave.bs.carousel", function(e2) {
            return t3.cycle(e2);
          })), this._config.touch && this._touchSupported && this._addTouchEventListeners();
        }, i2._addTouchEventListeners = function() {
          var t3 = this, e2 = function(e3) {
            t3._pointerEvent && ot[e3.pointerType.toUpperCase()] ? t3.touchStartX = e3.clientX : t3._pointerEvent || (t3.touchStartX = e3.touches[0].clientX);
          }, n2 = function(e3) {
            t3._pointerEvent && ot[e3.pointerType.toUpperCase()] && (t3.touchDeltaX = e3.clientX - t3.touchStartX), t3._handleSwipe(), t3._config.pause === "hover" && (t3.pause(), t3.touchTimeout && clearTimeout(t3.touchTimeout), t3.touchTimeout = setTimeout(function(e4) {
              return t3.cycle(e4);
            }, 500 + t3._config.interval));
          };
          J.find(".carousel-item img", this._element).forEach(function(t4) {
            U.on(t4, "dragstart.bs.carousel", function(t5) {
              return t5.preventDefault();
            });
          }), this._pointerEvent ? (U.on(this._element, "pointerdown.bs.carousel", function(t4) {
            return e2(t4);
          }), U.on(this._element, "pointerup.bs.carousel", function(t4) {
            return n2(t4);
          }), this._element.classList.add("pointer-event")) : (U.on(this._element, "touchstart.bs.carousel", function(t4) {
            return e2(t4);
          }), U.on(this._element, "touchmove.bs.carousel", function(e3) {
            return function(e4) {
              e4.touches && e4.touches.length > 1 ? t3.touchDeltaX = 0 : t3.touchDeltaX = e4.touches[0].clientX - t3.touchStartX;
            }(e3);
          }), U.on(this._element, "touchend.bs.carousel", function(t4) {
            return n2(t4);
          }));
        }, i2._keydown = function(t3) {
          if (!/input|textarea/i.test(t3.target.tagName))
            switch (t3.key) {
              case "ArrowLeft":
                t3.preventDefault(), this.prev();
                break;
              case "ArrowRight":
                t3.preventDefault(), this.next();
            }
        }, i2._getItemIndex = function(t3) {
          return this._items = t3 && t3.parentNode ? J.find(".carousel-item", t3.parentNode) : [], this._items.indexOf(t3);
        }, i2._getItemByDirection = function(t3, e2) {
          var n2 = t3 === "next", i3 = t3 === "prev", o2 = this._getItemIndex(e2), r2 = this._items.length - 1;
          if ((i3 && o2 === 0 || n2 && o2 === r2) && !this._config.wrap)
            return e2;
          var s2 = (o2 + (t3 === "prev" ? -1 : 1)) % this._items.length;
          return s2 === -1 ? this._items[this._items.length - 1] : this._items[s2];
        }, i2._triggerSlideEvent = function(t3, e2) {
          var n2 = this._getItemIndex(t3), i3 = this._getItemIndex(J.findOne(".active.carousel-item", this._element));
          return U.trigger(this._element, "slide.bs.carousel", {relatedTarget: t3, direction: e2, from: i3, to: n2});
        }, i2._setActiveIndicatorElement = function(t3) {
          if (this._indicatorsElement) {
            for (var e2 = J.find(".active", this._indicatorsElement), n2 = 0; n2 < e2.length; n2++)
              e2[n2].classList.remove("active");
            var i3 = this._indicatorsElement.children[this._getItemIndex(t3)];
            i3 && i3.classList.add("active");
          }
        }, i2._slide = function(t3, e2) {
          var n2, i3, o2, r2 = this, s2 = J.findOne(".active.carousel-item", this._element), a2 = this._getItemIndex(s2), l2 = e2 || s2 && this._getItemByDirection(t3, s2), c2 = this._getItemIndex(l2), u2 = Boolean(this._interval);
          if (t3 === "next" ? (n2 = "carousel-item-left", i3 = "carousel-item-next", o2 = "left") : (n2 = "carousel-item-right", i3 = "carousel-item-prev", o2 = "right"), l2 && l2.classList.contains("active"))
            this._isSliding = false;
          else if (!this._triggerSlideEvent(l2, o2).defaultPrevented && s2 && l2) {
            if (this._isSliding = true, u2 && this.pause(), this._setActiveIndicatorElement(l2), this._element.classList.contains("slide")) {
              l2.classList.add(i3), _(l2), s2.classList.add(n2), l2.classList.add(n2);
              var h2 = parseInt(l2.getAttribute("data-interval"), 10);
              h2 ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = h2) : this._config.interval = this._config.defaultInterval || this._config.interval;
              var d2 = f(s2);
              U.one(s2, "transitionend", function() {
                l2.classList.remove(n2, i3), l2.classList.add("active"), s2.classList.remove("active", i3, n2), r2._isSliding = false, setTimeout(function() {
                  U.trigger(r2._element, "slid.bs.carousel", {relatedTarget: l2, direction: o2, from: a2, to: c2});
                }, 0);
              }), p(s2, d2);
            } else
              s2.classList.remove("active"), l2.classList.add("active"), this._isSliding = false, U.trigger(this._element, "slid.bs.carousel", {relatedTarget: l2, direction: o2, from: a2, to: c2});
            u2 && this.cycle();
          }
        }, t2.carouselInterface = function(e2, i3) {
          var o2 = E(e2, "bs.carousel"), r2 = n({}, nt, Z.getDataAttributes(e2));
          typeof i3 == "object" && (r2 = n({}, r2, i3));
          var s2 = typeof i3 == "string" ? i3 : r2.slide;
          if (o2 || (o2 = new t2(e2, r2)), typeof i3 == "number")
            o2.to(i3);
          else if (typeof s2 == "string") {
            if (o2[s2] === void 0)
              throw new TypeError('No method named "' + s2 + '"');
            o2[s2]();
          } else
            r2.interval && r2.ride && (o2.pause(), o2.cycle());
        }, t2.jQueryInterface = function(e2) {
          return this.each(function() {
            t2.carouselInterface(this, e2);
          });
        }, t2.dataApiClickHandler = function(e2) {
          var i3 = u(this);
          if (i3 && i3.classList.contains("carousel")) {
            var o2 = n({}, Z.getDataAttributes(i3), Z.getDataAttributes(this)), r2 = this.getAttribute("data-slide-to");
            r2 && (o2.interval = false), t2.carouselInterface(i3, o2), r2 && E(i3, "bs.carousel").to(r2), e2.preventDefault();
          }
        }, t2.getInstance = function(t3) {
          return E(t3, "bs.carousel");
        }, e(t2, null, [{key: "VERSION", get: function() {
          return "5.0.0-alpha2";
        }}, {key: "Default", get: function() {
          return nt;
        }}]), t2;
      }();
      U.on(document, "click.bs.carousel.data-api", "[data-slide], [data-slide-to]", rt.dataApiClickHandler), U.on(window, "load.bs.carousel.data-api", function() {
        for (var t2 = J.find('[data-ride="carousel"]'), e2 = 0, n2 = t2.length; e2 < n2; e2++)
          rt.carouselInterface(t2[e2], E(t2[e2], "bs.carousel"));
      });
      var st = b();
      if (st) {
        var at = st.fn[tt];
        st.fn[tt] = rt.jQueryInterface, st.fn[tt].Constructor = rt, st.fn[tt].noConflict = function() {
          return st.fn[tt] = at, rt.jQueryInterface;
        };
      }
      var lt = "collapse", ct = {toggle: true, parent: ""}, ut = {toggle: "boolean", parent: "(string|element)"}, ft = function() {
        function t2(t3, e2) {
          this._isTransitioning = false, this._element = t3, this._config = this._getConfig(e2), this._triggerArray = J.find('[data-toggle="collapse"][href="#' + t3.id + '"],[data-toggle="collapse"][data-target="#' + t3.id + '"]');
          for (var n2 = J.find('[data-toggle="collapse"]'), i3 = 0, o2 = n2.length; i3 < o2; i3++) {
            var r2 = n2[i3], s2 = c(r2), a2 = J.find(s2).filter(function(e3) {
              return e3 === t3;
            });
            s2 !== null && a2.length && (this._selector = s2, this._triggerArray.push(r2));
          }
          this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle(), w(t3, "bs.collapse", this);
        }
        var i2 = t2.prototype;
        return i2.toggle = function() {
          this._element.classList.contains("show") ? this.hide() : this.show();
        }, i2.show = function() {
          var e2 = this;
          if (!this._isTransitioning && !this._element.classList.contains("show")) {
            var n2, i3;
            this._parent && (n2 = J.find(".show, .collapsing", this._parent).filter(function(t3) {
              return typeof e2._config.parent == "string" ? t3.getAttribute("data-parent") === e2._config.parent : t3.classList.contains("collapse");
            })).length === 0 && (n2 = null);
            var o2 = J.findOne(this._selector);
            if (n2) {
              var r2 = n2.filter(function(t3) {
                return o2 !== t3;
              });
              if ((i3 = r2[0] ? E(r2[0], "bs.collapse") : null) && i3._isTransitioning)
                return;
            }
            if (!U.trigger(this._element, "show.bs.collapse").defaultPrevented) {
              n2 && n2.forEach(function(e3) {
                o2 !== e3 && t2.collapseInterface(e3, "hide"), i3 || w(e3, "bs.collapse", null);
              });
              var s2 = this._getDimension();
              this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[s2] = 0, this._triggerArray.length && this._triggerArray.forEach(function(t3) {
                t3.classList.remove("collapsed"), t3.setAttribute("aria-expanded", true);
              }), this.setTransitioning(true);
              var a2 = "scroll" + (s2[0].toUpperCase() + s2.slice(1)), l2 = f(this._element);
              U.one(this._element, "transitionend", function() {
                e2._element.classList.remove("collapsing"), e2._element.classList.add("collapse", "show"), e2._element.style[s2] = "", e2.setTransitioning(false), U.trigger(e2._element, "shown.bs.collapse");
              }), p(this._element, l2), this._element.style[s2] = this._element[a2] + "px";
            }
          }
        }, i2.hide = function() {
          var t3 = this;
          if (!this._isTransitioning && this._element.classList.contains("show") && !U.trigger(this._element, "hide.bs.collapse").defaultPrevented) {
            var e2 = this._getDimension();
            this._element.style[e2] = this._element.getBoundingClientRect()[e2] + "px", _(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
            var n2 = this._triggerArray.length;
            if (n2 > 0)
              for (var i3 = 0; i3 < n2; i3++) {
                var o2 = this._triggerArray[i3], r2 = u(o2);
                r2 && !r2.classList.contains("show") && (o2.classList.add("collapsed"), o2.setAttribute("aria-expanded", false));
              }
            this.setTransitioning(true);
            this._element.style[e2] = "";
            var s2 = f(this._element);
            U.one(this._element, "transitionend", function() {
              t3.setTransitioning(false), t3._element.classList.remove("collapsing"), t3._element.classList.add("collapse"), U.trigger(t3._element, "hidden.bs.collapse");
            }), p(this._element, s2);
          }
        }, i2.setTransitioning = function(t3) {
          this._isTransitioning = t3;
        }, i2.dispose = function() {
          T(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
        }, i2._getConfig = function(t3) {
          return (t3 = n({}, ct, t3)).toggle = Boolean(t3.toggle), g(lt, t3, ut), t3;
        }, i2._getDimension = function() {
          return this._element.classList.contains("width") ? "width" : "height";
        }, i2._getParent = function() {
          var t3 = this, e2 = this._config.parent;
          d(e2) ? e2.jquery === void 0 && e2[0] === void 0 || (e2 = e2[0]) : e2 = J.findOne(e2);
          var n2 = '[data-toggle="collapse"][data-parent="' + e2 + '"]';
          return J.find(n2, e2).forEach(function(e3) {
            var n3 = u(e3);
            t3._addAriaAndCollapsedClass(n3, [e3]);
          }), e2;
        }, i2._addAriaAndCollapsedClass = function(t3, e2) {
          if (t3 && e2.length) {
            var n2 = t3.classList.contains("show");
            e2.forEach(function(t4) {
              n2 ? t4.classList.remove("collapsed") : t4.classList.add("collapsed"), t4.setAttribute("aria-expanded", n2);
            });
          }
        }, t2.collapseInterface = function(e2, i3) {
          var o2 = E(e2, "bs.collapse"), r2 = n({}, ct, Z.getDataAttributes(e2), typeof i3 == "object" && i3 ? i3 : {});
          if (!o2 && r2.toggle && typeof i3 == "string" && /show|hide/.test(i3) && (r2.toggle = false), o2 || (o2 = new t2(e2, r2)), typeof i3 == "string") {
            if (o2[i3] === void 0)
              throw new TypeError('No method named "' + i3 + '"');
            o2[i3]();
          }
        }, t2.jQueryInterface = function(e2) {
          return this.each(function() {
            t2.collapseInterface(this, e2);
          });
        }, t2.getInstance = function(t3) {
          return E(t3, "bs.collapse");
        }, e(t2, null, [{key: "VERSION", get: function() {
          return "5.0.0-alpha2";
        }}, {key: "Default", get: function() {
          return ct;
        }}]), t2;
      }();
      U.on(document, "click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t2) {
        t2.target.tagName === "A" && t2.preventDefault();
        var e2 = Z.getDataAttributes(this), n2 = c(this);
        J.find(n2).forEach(function(t3) {
          var n3, i2 = E(t3, "bs.collapse");
          i2 ? (i2._parent === null && typeof e2.parent == "string" && (i2._config.parent = e2.parent, i2._parent = i2._getParent()), n3 = "toggle") : n3 = e2, ft.collapseInterface(t3, n3);
        });
      });
      var ht = b();
      if (ht) {
        var dt = ht.fn[lt];
        ht.fn[lt] = ft.jQueryInterface, ht.fn[lt].Constructor = ft, ht.fn[lt].noConflict = function() {
          return ht.fn[lt] = dt, ft.jQueryInterface;
        };
      }
      var pt = typeof window != "undefined" && typeof document != "undefined" && typeof navigator != "undefined", gt = function() {
        for (var t2 = ["Edge", "Trident", "Firefox"], e2 = 0; e2 < t2.length; e2 += 1)
          if (pt && navigator.userAgent.indexOf(t2[e2]) >= 0)
            return 1;
        return 0;
      }();
      var mt = pt && window.Promise ? function(t2) {
        var e2 = false;
        return function() {
          e2 || (e2 = true, window.Promise.resolve().then(function() {
            e2 = false, t2();
          }));
        };
      } : function(t2) {
        var e2 = false;
        return function() {
          e2 || (e2 = true, setTimeout(function() {
            e2 = false, t2();
          }, gt));
        };
      };
      function vt(t2) {
        return t2 && {}.toString.call(t2) === "[object Function]";
      }
      function _t(t2, e2) {
        if (t2.nodeType !== 1)
          return [];
        var n2 = t2.ownerDocument.defaultView.getComputedStyle(t2, null);
        return e2 ? n2[e2] : n2;
      }
      function bt(t2) {
        return t2.nodeName === "HTML" ? t2 : t2.parentNode || t2.host;
      }
      function yt(t2) {
        if (!t2)
          return document.body;
        switch (t2.nodeName) {
          case "HTML":
          case "BODY":
            return t2.ownerDocument.body;
          case "#document":
            return t2.body;
        }
        var e2 = _t(t2), n2 = e2.overflow, i2 = e2.overflowX, o2 = e2.overflowY;
        return /(auto|scroll|overlay)/.test(n2 + o2 + i2) ? t2 : yt(bt(t2));
      }
      function wt(t2) {
        return t2 && t2.referenceNode ? t2.referenceNode : t2;
      }
      var Et = pt && !(!window.MSInputMethodContext || !document.documentMode), Tt = pt && /MSIE 10/.test(navigator.userAgent);
      function Lt(t2) {
        return t2 === 11 ? Et : t2 === 10 ? Tt : Et || Tt;
      }
      function kt(t2) {
        if (!t2)
          return document.documentElement;
        for (var e2 = Lt(10) ? document.body : null, n2 = t2.offsetParent || null; n2 === e2 && t2.nextElementSibling; )
          n2 = (t2 = t2.nextElementSibling).offsetParent;
        var i2 = n2 && n2.nodeName;
        return i2 && i2 !== "BODY" && i2 !== "HTML" ? ["TH", "TD", "TABLE"].indexOf(n2.nodeName) !== -1 && _t(n2, "position") === "static" ? kt(n2) : n2 : t2 ? t2.ownerDocument.documentElement : document.documentElement;
      }
      function Ct(t2) {
        return t2.parentNode !== null ? Ct(t2.parentNode) : t2;
      }
      function At(t2, e2) {
        if (!(t2 && t2.nodeType && e2 && e2.nodeType))
          return document.documentElement;
        var n2 = t2.compareDocumentPosition(e2) & Node.DOCUMENT_POSITION_FOLLOWING, i2 = n2 ? t2 : e2, o2 = n2 ? e2 : t2, r2 = document.createRange();
        r2.setStart(i2, 0), r2.setEnd(o2, 0);
        var s2 = r2.commonAncestorContainer;
        if (t2 !== s2 && e2 !== s2 || i2.contains(o2))
          return function(t3) {
            var e3 = t3.nodeName;
            return e3 !== "BODY" && (e3 === "HTML" || kt(t3.firstElementChild) === t3);
          }(s2) ? s2 : kt(s2);
        var a2 = Ct(t2);
        return a2.host ? At(a2.host, e2) : At(t2, Ct(e2).host);
      }
      function Ot(t2) {
        var e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "top", n2 = e2 === "top" ? "scrollTop" : "scrollLeft", i2 = t2.nodeName;
        if (i2 === "BODY" || i2 === "HTML") {
          var o2 = t2.ownerDocument.documentElement, r2 = t2.ownerDocument.scrollingElement || o2;
          return r2[n2];
        }
        return t2[n2];
      }
      function St(t2, e2) {
        var n2 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], i2 = Ot(e2, "top"), o2 = Ot(e2, "left"), r2 = n2 ? -1 : 1;
        return t2.top += i2 * r2, t2.bottom += i2 * r2, t2.left += o2 * r2, t2.right += o2 * r2, t2;
      }
      function Dt(t2, e2) {
        var n2 = e2 === "x" ? "Left" : "Top", i2 = n2 === "Left" ? "Right" : "Bottom";
        return parseFloat(t2["border" + n2 + "Width"]) + parseFloat(t2["border" + i2 + "Width"]);
      }
      function xt(t2, e2, n2, i2) {
        return Math.max(e2["offset" + t2], e2["scroll" + t2], n2["client" + t2], n2["offset" + t2], n2["scroll" + t2], Lt(10) ? parseInt(n2["offset" + t2]) + parseInt(i2["margin" + (t2 === "Height" ? "Top" : "Left")]) + parseInt(i2["margin" + (t2 === "Height" ? "Bottom" : "Right")]) : 0);
      }
      function Nt(t2) {
        var e2 = t2.body, n2 = t2.documentElement, i2 = Lt(10) && getComputedStyle(n2);
        return {height: xt("Height", e2, n2, i2), width: xt("Width", e2, n2, i2)};
      }
      var It = function(t2, e2) {
        if (!(t2 instanceof e2))
          throw new TypeError("Cannot call a class as a function");
      }, jt = function() {
        function t2(t3, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var i2 = e2[n2];
            i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(t3, i2.key, i2);
          }
        }
        return function(e2, n2, i2) {
          return n2 && t2(e2.prototype, n2), i2 && t2(e2, i2), e2;
        };
      }(), Pt = function(t2, e2, n2) {
        return e2 in t2 ? Object.defineProperty(t2, e2, {value: n2, enumerable: true, configurable: true, writable: true}) : t2[e2] = n2, t2;
      }, Mt = Object.assign || function(t2) {
        for (var e2 = 1; e2 < arguments.length; e2++) {
          var n2 = arguments[e2];
          for (var i2 in n2)
            Object.prototype.hasOwnProperty.call(n2, i2) && (t2[i2] = n2[i2]);
        }
        return t2;
      };
      function Ht(t2) {
        return Mt({}, t2, {right: t2.left + t2.width, bottom: t2.top + t2.height});
      }
      function Bt(t2) {
        var e2 = {};
        try {
          if (Lt(10)) {
            e2 = t2.getBoundingClientRect();
            var n2 = Ot(t2, "top"), i2 = Ot(t2, "left");
            e2.top += n2, e2.left += i2, e2.bottom += n2, e2.right += i2;
          } else
            e2 = t2.getBoundingClientRect();
        } catch (t3) {
        }
        var o2 = {left: e2.left, top: e2.top, width: e2.right - e2.left, height: e2.bottom - e2.top}, r2 = t2.nodeName === "HTML" ? Nt(t2.ownerDocument) : {}, s2 = r2.width || t2.clientWidth || o2.width, a2 = r2.height || t2.clientHeight || o2.height, l2 = t2.offsetWidth - s2, c2 = t2.offsetHeight - a2;
        if (l2 || c2) {
          var u2 = _t(t2);
          l2 -= Dt(u2, "x"), c2 -= Dt(u2, "y"), o2.width -= l2, o2.height -= c2;
        }
        return Ht(o2);
      }
      function Rt(t2, e2) {
        var n2 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], i2 = Lt(10), o2 = e2.nodeName === "HTML", r2 = Bt(t2), s2 = Bt(e2), a2 = yt(t2), l2 = _t(e2), c2 = parseFloat(l2.borderTopWidth), u2 = parseFloat(l2.borderLeftWidth);
        n2 && o2 && (s2.top = Math.max(s2.top, 0), s2.left = Math.max(s2.left, 0));
        var f2 = Ht({top: r2.top - s2.top - c2, left: r2.left - s2.left - u2, width: r2.width, height: r2.height});
        if (f2.marginTop = 0, f2.marginLeft = 0, !i2 && o2) {
          var h2 = parseFloat(l2.marginTop), d2 = parseFloat(l2.marginLeft);
          f2.top -= c2 - h2, f2.bottom -= c2 - h2, f2.left -= u2 - d2, f2.right -= u2 - d2, f2.marginTop = h2, f2.marginLeft = d2;
        }
        return (i2 && !n2 ? e2.contains(a2) : e2 === a2 && a2.nodeName !== "BODY") && (f2 = St(f2, e2)), f2;
      }
      function Ft(t2) {
        var e2 = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], n2 = t2.ownerDocument.documentElement, i2 = Rt(t2, n2), o2 = Math.max(n2.clientWidth, window.innerWidth || 0), r2 = Math.max(n2.clientHeight, window.innerHeight || 0), s2 = e2 ? 0 : Ot(n2), a2 = e2 ? 0 : Ot(n2, "left"), l2 = {top: s2 - i2.top + i2.marginTop, left: a2 - i2.left + i2.marginLeft, width: o2, height: r2};
        return Ht(l2);
      }
      function Wt(t2) {
        var e2 = t2.nodeName;
        if (e2 === "BODY" || e2 === "HTML")
          return false;
        if (_t(t2, "position") === "fixed")
          return true;
        var n2 = bt(t2);
        return !!n2 && Wt(n2);
      }
      function Ut(t2) {
        if (!t2 || !t2.parentElement || Lt())
          return document.documentElement;
        for (var e2 = t2.parentElement; e2 && _t(e2, "transform") === "none"; )
          e2 = e2.parentElement;
        return e2 || document.documentElement;
      }
      function Qt(t2, e2, n2, i2) {
        var o2 = arguments.length > 4 && arguments[4] !== void 0 && arguments[4], r2 = {top: 0, left: 0}, s2 = o2 ? Ut(t2) : At(t2, wt(e2));
        if (i2 === "viewport")
          r2 = Ft(s2, o2);
        else {
          var a2 = void 0;
          i2 === "scrollParent" ? (a2 = yt(bt(e2))).nodeName === "BODY" && (a2 = t2.ownerDocument.documentElement) : a2 = i2 === "window" ? t2.ownerDocument.documentElement : i2;
          var l2 = Rt(a2, s2, o2);
          if (a2.nodeName !== "HTML" || Wt(s2))
            r2 = l2;
          else {
            var c2 = Nt(t2.ownerDocument), u2 = c2.height, f2 = c2.width;
            r2.top += l2.top - l2.marginTop, r2.bottom = u2 + l2.top, r2.left += l2.left - l2.marginLeft, r2.right = f2 + l2.left;
          }
        }
        var h2 = typeof (n2 = n2 || 0) == "number";
        return r2.left += h2 ? n2 : n2.left || 0, r2.top += h2 ? n2 : n2.top || 0, r2.right -= h2 ? n2 : n2.right || 0, r2.bottom -= h2 ? n2 : n2.bottom || 0, r2;
      }
      function Vt(t2) {
        return t2.width * t2.height;
      }
      function Kt(t2, e2, n2, i2, o2) {
        var r2 = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
        if (t2.indexOf("auto") === -1)
          return t2;
        var s2 = Qt(n2, i2, r2, o2), a2 = {top: {width: s2.width, height: e2.top - s2.top}, right: {width: s2.right - e2.right, height: s2.height}, bottom: {width: s2.width, height: s2.bottom - e2.bottom}, left: {width: e2.left - s2.left, height: s2.height}}, l2 = Object.keys(a2).map(function(t3) {
          return Mt({key: t3}, a2[t3], {area: Vt(a2[t3])});
        }).sort(function(t3, e3) {
          return e3.area - t3.area;
        }), c2 = l2.filter(function(t3) {
          var e3 = t3.width, i3 = t3.height;
          return e3 >= n2.clientWidth && i3 >= n2.clientHeight;
        }), u2 = c2.length > 0 ? c2[0].key : l2[0].key, f2 = t2.split("-")[1];
        return u2 + (f2 ? "-" + f2 : "");
      }
      function Yt(t2, e2, n2) {
        var i2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, o2 = i2 ? Ut(e2) : At(e2, wt(n2));
        return Rt(n2, o2, i2);
      }
      function qt(t2) {
        var e2 = t2.ownerDocument.defaultView.getComputedStyle(t2), n2 = parseFloat(e2.marginTop || 0) + parseFloat(e2.marginBottom || 0), i2 = parseFloat(e2.marginLeft || 0) + parseFloat(e2.marginRight || 0);
        return {width: t2.offsetWidth + i2, height: t2.offsetHeight + n2};
      }
      function zt(t2) {
        var e2 = {left: "right", right: "left", bottom: "top", top: "bottom"};
        return t2.replace(/left|right|bottom|top/g, function(t3) {
          return e2[t3];
        });
      }
      function Xt(t2, e2, n2) {
        n2 = n2.split("-")[0];
        var i2 = qt(t2), o2 = {width: i2.width, height: i2.height}, r2 = ["right", "left"].indexOf(n2) !== -1, s2 = r2 ? "top" : "left", a2 = r2 ? "left" : "top", l2 = r2 ? "height" : "width", c2 = r2 ? "width" : "height";
        return o2[s2] = e2[s2] + e2[l2] / 2 - i2[l2] / 2, o2[a2] = n2 === a2 ? e2[a2] - i2[c2] : e2[zt(a2)], o2;
      }
      function Gt(t2, e2) {
        return Array.prototype.find ? t2.find(e2) : t2.filter(e2)[0];
      }
      function $t(t2, e2, n2) {
        return (n2 === void 0 ? t2 : t2.slice(0, function(t3, e3, n3) {
          if (Array.prototype.findIndex)
            return t3.findIndex(function(t4) {
              return t4[e3] === n3;
            });
          var i2 = Gt(t3, function(t4) {
            return t4[e3] === n3;
          });
          return t3.indexOf(i2);
        }(t2, "name", n2))).forEach(function(t3) {
          t3.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
          var n3 = t3.function || t3.fn;
          t3.enabled && vt(n3) && (e2.offsets.popper = Ht(e2.offsets.popper), e2.offsets.reference = Ht(e2.offsets.reference), e2 = n3(e2, t3));
        }), e2;
      }
      function Zt() {
        if (!this.state.isDestroyed) {
          var t2 = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: false, offsets: {}};
          t2.offsets.reference = Yt(this.state, this.popper, this.reference, this.options.positionFixed), t2.placement = Kt(this.options.placement, t2.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t2.originalPlacement = t2.placement, t2.positionFixed = this.options.positionFixed, t2.offsets.popper = Xt(this.popper, t2.offsets.reference, t2.placement), t2.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t2 = $t(this.modifiers, t2), this.state.isCreated ? this.options.onUpdate(t2) : (this.state.isCreated = true, this.options.onCreate(t2));
        }
      }
      function Jt(t2, e2) {
        return t2.some(function(t3) {
          var n2 = t3.name;
          return t3.enabled && n2 === e2;
        });
      }
      function te(t2) {
        for (var e2 = [false, "ms", "Webkit", "Moz", "O"], n2 = t2.charAt(0).toUpperCase() + t2.slice(1), i2 = 0; i2 < e2.length; i2++) {
          var o2 = e2[i2], r2 = o2 ? "" + o2 + n2 : t2;
          if (document.body.style[r2] !== void 0)
            return r2;
        }
        return null;
      }
      function ee() {
        return this.state.isDestroyed = true, Jt(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[te("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
      }
      function ne(t2) {
        var e2 = t2.ownerDocument;
        return e2 ? e2.defaultView : window;
      }
      function ie(t2, e2, n2, i2) {
        n2.updateBound = i2, ne(t2).addEventListener("resize", n2.updateBound, {passive: true});
        var o2 = yt(t2);
        return function t3(e3, n3, i3, o3) {
          var r2 = e3.nodeName === "BODY", s2 = r2 ? e3.ownerDocument.defaultView : e3;
          s2.addEventListener(n3, i3, {passive: true}), r2 || t3(yt(s2.parentNode), n3, i3, o3), o3.push(s2);
        }(o2, "scroll", n2.updateBound, n2.scrollParents), n2.scrollElement = o2, n2.eventsEnabled = true, n2;
      }
      function oe() {
        this.state.eventsEnabled || (this.state = ie(this.reference, this.options, this.state, this.scheduleUpdate));
      }
      function re() {
        var t2, e2;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t2 = this.reference, e2 = this.state, ne(t2).removeEventListener("resize", e2.updateBound), e2.scrollParents.forEach(function(t3) {
          t3.removeEventListener("scroll", e2.updateBound);
        }), e2.updateBound = null, e2.scrollParents = [], e2.scrollElement = null, e2.eventsEnabled = false, e2));
      }
      function se(t2) {
        return t2 !== "" && !isNaN(parseFloat(t2)) && isFinite(t2);
      }
      function ae(t2, e2) {
        Object.keys(e2).forEach(function(n2) {
          var i2 = "";
          ["width", "height", "top", "right", "bottom", "left"].indexOf(n2) !== -1 && se(e2[n2]) && (i2 = "px"), t2.style[n2] = e2[n2] + i2;
        });
      }
      var le = pt && /Firefox/i.test(navigator.userAgent);
      function ce(t2, e2, n2) {
        var i2 = Gt(t2, function(t3) {
          return t3.name === e2;
        }), o2 = !!i2 && t2.some(function(t3) {
          return t3.name === n2 && t3.enabled && t3.order < i2.order;
        });
        if (!o2) {
          var r2 = "`" + e2 + "`", s2 = "`" + n2 + "`";
          console.warn(s2 + " modifier is required by " + r2 + " modifier in order to work, be sure to include it before " + r2 + "!");
        }
        return o2;
      }
      var ue = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], fe = ue.slice(3);
      function he(t2) {
        var e2 = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], n2 = fe.indexOf(t2), i2 = fe.slice(n2 + 1).concat(fe.slice(0, n2));
        return e2 ? i2.reverse() : i2;
      }
      var de = "flip", pe = "clockwise", ge = "counterclockwise";
      function me(t2, e2, n2, i2) {
        var o2 = [0, 0], r2 = ["right", "left"].indexOf(i2) !== -1, s2 = t2.split(/(\+|\-)/).map(function(t3) {
          return t3.trim();
        }), a2 = s2.indexOf(Gt(s2, function(t3) {
          return t3.search(/,|\s/) !== -1;
        }));
        s2[a2] && s2[a2].indexOf(",") === -1 && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l2 = /\s*,\s*|\s+/, c2 = a2 !== -1 ? [s2.slice(0, a2).concat([s2[a2].split(l2)[0]]), [s2[a2].split(l2)[1]].concat(s2.slice(a2 + 1))] : [s2];
        return (c2 = c2.map(function(t3, i3) {
          var o3 = (i3 === 1 ? !r2 : r2) ? "height" : "width", s3 = false;
          return t3.reduce(function(t4, e3) {
            return t4[t4.length - 1] === "" && ["+", "-"].indexOf(e3) !== -1 ? (t4[t4.length - 1] = e3, s3 = true, t4) : s3 ? (t4[t4.length - 1] += e3, s3 = false, t4) : t4.concat(e3);
          }, []).map(function(t4) {
            return function(t5, e3, n3, i4) {
              var o4 = t5.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), r3 = +o4[1], s4 = o4[2];
              if (!r3)
                return t5;
              if (s4.indexOf("%") === 0) {
                var a3 = void 0;
                switch (s4) {
                  case "%p":
                    a3 = n3;
                    break;
                  case "%":
                  case "%r":
                  default:
                    a3 = i4;
                }
                return Ht(a3)[e3] / 100 * r3;
              }
              if (s4 === "vh" || s4 === "vw")
                return (s4 === "vh" ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r3;
              return r3;
            }(t4, o3, e2, n2);
          });
        })).forEach(function(t3, e3) {
          t3.forEach(function(n3, i3) {
            se(n3) && (o2[e3] += n3 * (t3[i3 - 1] === "-" ? -1 : 1));
          });
        }), o2;
      }
      var ve = {placement: "bottom", positionFixed: false, eventsEnabled: true, removeOnDestroy: false, onCreate: function() {
      }, onUpdate: function() {
      }, modifiers: {shift: {order: 100, enabled: true, fn: function(t2) {
        var e2 = t2.placement, n2 = e2.split("-")[0], i2 = e2.split("-")[1];
        if (i2) {
          var o2 = t2.offsets, r2 = o2.reference, s2 = o2.popper, a2 = ["bottom", "top"].indexOf(n2) !== -1, l2 = a2 ? "left" : "top", c2 = a2 ? "width" : "height", u2 = {start: Pt({}, l2, r2[l2]), end: Pt({}, l2, r2[l2] + r2[c2] - s2[c2])};
          t2.offsets.popper = Mt({}, s2, u2[i2]);
        }
        return t2;
      }}, offset: {order: 200, enabled: true, fn: function(t2, e2) {
        var n2 = e2.offset, i2 = t2.placement, o2 = t2.offsets, r2 = o2.popper, s2 = o2.reference, a2 = i2.split("-")[0], l2 = void 0;
        return l2 = se(+n2) ? [+n2, 0] : me(n2, r2, s2, a2), a2 === "left" ? (r2.top += l2[0], r2.left -= l2[1]) : a2 === "right" ? (r2.top += l2[0], r2.left += l2[1]) : a2 === "top" ? (r2.left += l2[0], r2.top -= l2[1]) : a2 === "bottom" && (r2.left += l2[0], r2.top += l2[1]), t2.popper = r2, t2;
      }, offset: 0}, preventOverflow: {order: 300, enabled: true, fn: function(t2, e2) {
        var n2 = e2.boundariesElement || kt(t2.instance.popper);
        t2.instance.reference === n2 && (n2 = kt(n2));
        var i2 = te("transform"), o2 = t2.instance.popper.style, r2 = o2.top, s2 = o2.left, a2 = o2[i2];
        o2.top = "", o2.left = "", o2[i2] = "";
        var l2 = Qt(t2.instance.popper, t2.instance.reference, e2.padding, n2, t2.positionFixed);
        o2.top = r2, o2.left = s2, o2[i2] = a2, e2.boundaries = l2;
        var c2 = e2.priority, u2 = t2.offsets.popper, f2 = {primary: function(t3) {
          var n3 = u2[t3];
          return u2[t3] < l2[t3] && !e2.escapeWithReference && (n3 = Math.max(u2[t3], l2[t3])), Pt({}, t3, n3);
        }, secondary: function(t3) {
          var n3 = t3 === "right" ? "left" : "top", i3 = u2[n3];
          return u2[t3] > l2[t3] && !e2.escapeWithReference && (i3 = Math.min(u2[n3], l2[t3] - (t3 === "right" ? u2.width : u2.height))), Pt({}, n3, i3);
        }};
        return c2.forEach(function(t3) {
          var e3 = ["left", "top"].indexOf(t3) !== -1 ? "primary" : "secondary";
          u2 = Mt({}, u2, f2[e3](t3));
        }), t2.offsets.popper = u2, t2;
      }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent"}, keepTogether: {order: 400, enabled: true, fn: function(t2) {
        var e2 = t2.offsets, n2 = e2.popper, i2 = e2.reference, o2 = t2.placement.split("-")[0], r2 = Math.floor, s2 = ["top", "bottom"].indexOf(o2) !== -1, a2 = s2 ? "right" : "bottom", l2 = s2 ? "left" : "top", c2 = s2 ? "width" : "height";
        return n2[a2] < r2(i2[l2]) && (t2.offsets.popper[l2] = r2(i2[l2]) - n2[c2]), n2[l2] > r2(i2[a2]) && (t2.offsets.popper[l2] = r2(i2[a2])), t2;
      }}, arrow: {order: 500, enabled: true, fn: function(t2, e2) {
        var n2;
        if (!ce(t2.instance.modifiers, "arrow", "keepTogether"))
          return t2;
        var i2 = e2.element;
        if (typeof i2 == "string") {
          if (!(i2 = t2.instance.popper.querySelector(i2)))
            return t2;
        } else if (!t2.instance.popper.contains(i2))
          return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t2;
        var o2 = t2.placement.split("-")[0], r2 = t2.offsets, s2 = r2.popper, a2 = r2.reference, l2 = ["left", "right"].indexOf(o2) !== -1, c2 = l2 ? "height" : "width", u2 = l2 ? "Top" : "Left", f2 = u2.toLowerCase(), h2 = l2 ? "left" : "top", d2 = l2 ? "bottom" : "right", p2 = qt(i2)[c2];
        a2[d2] - p2 < s2[f2] && (t2.offsets.popper[f2] -= s2[f2] - (a2[d2] - p2)), a2[f2] + p2 > s2[d2] && (t2.offsets.popper[f2] += a2[f2] + p2 - s2[d2]), t2.offsets.popper = Ht(t2.offsets.popper);
        var g2 = a2[f2] + a2[c2] / 2 - p2 / 2, m2 = _t(t2.instance.popper), v2 = parseFloat(m2["margin" + u2]), _2 = parseFloat(m2["border" + u2 + "Width"]), b2 = g2 - t2.offsets.popper[f2] - v2 - _2;
        return b2 = Math.max(Math.min(s2[c2] - p2, b2), 0), t2.arrowElement = i2, t2.offsets.arrow = (Pt(n2 = {}, f2, Math.round(b2)), Pt(n2, h2, ""), n2), t2;
      }, element: "[x-arrow]"}, flip: {order: 600, enabled: true, fn: function(t2, e2) {
        if (Jt(t2.instance.modifiers, "inner"))
          return t2;
        if (t2.flipped && t2.placement === t2.originalPlacement)
          return t2;
        var n2 = Qt(t2.instance.popper, t2.instance.reference, e2.padding, e2.boundariesElement, t2.positionFixed), i2 = t2.placement.split("-")[0], o2 = zt(i2), r2 = t2.placement.split("-")[1] || "", s2 = [];
        switch (e2.behavior) {
          case de:
            s2 = [i2, o2];
            break;
          case pe:
            s2 = he(i2);
            break;
          case ge:
            s2 = he(i2, true);
            break;
          default:
            s2 = e2.behavior;
        }
        return s2.forEach(function(a2, l2) {
          if (i2 !== a2 || s2.length === l2 + 1)
            return t2;
          i2 = t2.placement.split("-")[0], o2 = zt(i2);
          var c2 = t2.offsets.popper, u2 = t2.offsets.reference, f2 = Math.floor, h2 = i2 === "left" && f2(c2.right) > f2(u2.left) || i2 === "right" && f2(c2.left) < f2(u2.right) || i2 === "top" && f2(c2.bottom) > f2(u2.top) || i2 === "bottom" && f2(c2.top) < f2(u2.bottom), d2 = f2(c2.left) < f2(n2.left), p2 = f2(c2.right) > f2(n2.right), g2 = f2(c2.top) < f2(n2.top), m2 = f2(c2.bottom) > f2(n2.bottom), v2 = i2 === "left" && d2 || i2 === "right" && p2 || i2 === "top" && g2 || i2 === "bottom" && m2, _2 = ["top", "bottom"].indexOf(i2) !== -1, b2 = !!e2.flipVariations && (_2 && r2 === "start" && d2 || _2 && r2 === "end" && p2 || !_2 && r2 === "start" && g2 || !_2 && r2 === "end" && m2), y2 = !!e2.flipVariationsByContent && (_2 && r2 === "start" && p2 || _2 && r2 === "end" && d2 || !_2 && r2 === "start" && m2 || !_2 && r2 === "end" && g2), w2 = b2 || y2;
          (h2 || v2 || w2) && (t2.flipped = true, (h2 || v2) && (i2 = s2[l2 + 1]), w2 && (r2 = function(t3) {
            return t3 === "end" ? "start" : t3 === "start" ? "end" : t3;
          }(r2)), t2.placement = i2 + (r2 ? "-" + r2 : ""), t2.offsets.popper = Mt({}, t2.offsets.popper, Xt(t2.instance.popper, t2.offsets.reference, t2.placement)), t2 = $t(t2.instance.modifiers, t2, "flip"));
        }), t2;
      }, behavior: "flip", padding: 5, boundariesElement: "viewport", flipVariations: false, flipVariationsByContent: false}, inner: {order: 700, enabled: false, fn: function(t2) {
        var e2 = t2.placement, n2 = e2.split("-")[0], i2 = t2.offsets, o2 = i2.popper, r2 = i2.reference, s2 = ["left", "right"].indexOf(n2) !== -1, a2 = ["top", "left"].indexOf(n2) === -1;
        return o2[s2 ? "left" : "top"] = r2[n2] - (a2 ? o2[s2 ? "width" : "height"] : 0), t2.placement = zt(e2), t2.offsets.popper = Ht(o2), t2;
      }}, hide: {order: 800, enabled: true, fn: function(t2) {
        if (!ce(t2.instance.modifiers, "hide", "preventOverflow"))
          return t2;
        var e2 = t2.offsets.reference, n2 = Gt(t2.instance.modifiers, function(t3) {
          return t3.name === "preventOverflow";
        }).boundaries;
        if (e2.bottom < n2.top || e2.left > n2.right || e2.top > n2.bottom || e2.right < n2.left) {
          if (t2.hide === true)
            return t2;
          t2.hide = true, t2.attributes["x-out-of-boundaries"] = "";
        } else {
          if (t2.hide === false)
            return t2;
          t2.hide = false, t2.attributes["x-out-of-boundaries"] = false;
        }
        return t2;
      }}, computeStyle: {order: 850, enabled: true, fn: function(t2, e2) {
        var n2 = e2.x, i2 = e2.y, o2 = t2.offsets.popper, r2 = Gt(t2.instance.modifiers, function(t3) {
          return t3.name === "applyStyle";
        }).gpuAcceleration;
        r2 !== void 0 && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
        var s2 = r2 !== void 0 ? r2 : e2.gpuAcceleration, a2 = kt(t2.instance.popper), l2 = Bt(a2), c2 = {position: o2.position}, u2 = function(t3, e3) {
          var n3 = t3.offsets, i3 = n3.popper, o3 = n3.reference, r3 = Math.round, s3 = Math.floor, a3 = function(t4) {
            return t4;
          }, l3 = r3(o3.width), c3 = r3(i3.width), u3 = ["left", "right"].indexOf(t3.placement) !== -1, f3 = t3.placement.indexOf("-") !== -1, h3 = e3 ? u3 || f3 || l3 % 2 == c3 % 2 ? r3 : s3 : a3, d3 = e3 ? r3 : a3;
          return {left: h3(l3 % 2 == 1 && c3 % 2 == 1 && !f3 && e3 ? i3.left - 1 : i3.left), top: d3(i3.top), bottom: d3(i3.bottom), right: h3(i3.right)};
        }(t2, window.devicePixelRatio < 2 || !le), f2 = n2 === "bottom" ? "top" : "bottom", h2 = i2 === "right" ? "left" : "right", d2 = te("transform"), p2 = void 0, g2 = void 0;
        if (g2 = f2 === "bottom" ? a2.nodeName === "HTML" ? -a2.clientHeight + u2.bottom : -l2.height + u2.bottom : u2.top, p2 = h2 === "right" ? a2.nodeName === "HTML" ? -a2.clientWidth + u2.right : -l2.width + u2.right : u2.left, s2 && d2)
          c2[d2] = "translate3d(" + p2 + "px, " + g2 + "px, 0)", c2[f2] = 0, c2[h2] = 0, c2.willChange = "transform";
        else {
          var m2 = f2 === "bottom" ? -1 : 1, v2 = h2 === "right" ? -1 : 1;
          c2[f2] = g2 * m2, c2[h2] = p2 * v2, c2.willChange = f2 + ", " + h2;
        }
        var _2 = {"x-placement": t2.placement};
        return t2.attributes = Mt({}, _2, t2.attributes), t2.styles = Mt({}, c2, t2.styles), t2.arrowStyles = Mt({}, t2.offsets.arrow, t2.arrowStyles), t2;
      }, gpuAcceleration: true, x: "bottom", y: "right"}, applyStyle: {order: 900, enabled: true, fn: function(t2) {
        return ae(t2.instance.popper, t2.styles), function(t3, e2) {
          Object.keys(e2).forEach(function(n2) {
            e2[n2] !== false ? t3.setAttribute(n2, e2[n2]) : t3.removeAttribute(n2);
          });
        }(t2.instance.popper, t2.attributes), t2.arrowElement && Object.keys(t2.arrowStyles).length && ae(t2.arrowElement, t2.arrowStyles), t2;
      }, onLoad: function(t2, e2, n2, i2, o2) {
        var r2 = Yt(o2, e2, t2, n2.positionFixed), s2 = Kt(n2.placement, r2, e2, t2, n2.modifiers.flip.boundariesElement, n2.modifiers.flip.padding);
        return e2.setAttribute("x-placement", s2), ae(e2, {position: n2.positionFixed ? "fixed" : "absolute"}), n2;
      }, gpuAcceleration: void 0}}}, _e = function() {
        function t2(e2, n2) {
          var i2 = this, o2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          It(this, t2), this.scheduleUpdate = function() {
            return requestAnimationFrame(i2.update);
          }, this.update = mt(this.update.bind(this)), this.options = Mt({}, t2.Defaults, o2), this.state = {isDestroyed: false, isCreated: false, scrollParents: []}, this.reference = e2 && e2.jquery ? e2[0] : e2, this.popper = n2 && n2.jquery ? n2[0] : n2, this.options.modifiers = {}, Object.keys(Mt({}, t2.Defaults.modifiers, o2.modifiers)).forEach(function(e3) {
            i2.options.modifiers[e3] = Mt({}, t2.Defaults.modifiers[e3] || {}, o2.modifiers ? o2.modifiers[e3] : {});
          }), this.modifiers = Object.keys(this.options.modifiers).map(function(t3) {
            return Mt({name: t3}, i2.options.modifiers[t3]);
          }).sort(function(t3, e3) {
            return t3.order - e3.order;
          }), this.modifiers.forEach(function(t3) {
            t3.enabled && vt(t3.onLoad) && t3.onLoad(i2.reference, i2.popper, i2.options, t3, i2.state);
          }), this.update();
          var r2 = this.options.eventsEnabled;
          r2 && this.enableEventListeners(), this.state.eventsEnabled = r2;
        }
        return jt(t2, [{key: "update", value: function() {
          return Zt.call(this);
        }}, {key: "destroy", value: function() {
          return ee.call(this);
        }}, {key: "enableEventListeners", value: function() {
          return oe.call(this);
        }}, {key: "disableEventListeners", value: function() {
          return re.call(this);
        }}]), t2;
      }();
      _e.Utils = (typeof window != "undefined" ? window : global).PopperUtils, _e.placements = ue, _e.Defaults = ve;
      var be = "dropdown", ye = new RegExp("ArrowUp|ArrowDown|Escape"), we = {offset: 0, flip: true, boundary: "scrollParent", reference: "toggle", display: "dynamic", popperConfig: null}, Ee = {offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string", popperConfig: "(null|object)"}, Te = function() {
        function t2(t3, e2) {
          this._element = t3, this._popper = null, this._config = this._getConfig(e2), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners(), w(t3, "bs.dropdown", this);
        }
        var i2 = t2.prototype;
        return i2.toggle = function() {
          if (!this._element.disabled && !this._element.classList.contains("disabled")) {
            var e2 = this._element.classList.contains("show");
            t2.clearMenus(), e2 || this.show();
          }
        }, i2.show = function() {
          if (!(this._element.disabled || this._element.classList.contains("disabled") || this._menu.classList.contains("show"))) {
            var e2 = t2.getParentFromElement(this._element), n2 = {relatedTarget: this._element};
            if (!U.trigger(this._element, "show.bs.dropdown", n2).defaultPrevented) {
              if (!this._inNavbar) {
                if (_e === void 0)
                  throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org)");
                var i3 = this._element;
                this._config.reference === "parent" ? i3 = e2 : d(this._config.reference) && (i3 = this._config.reference, this._config.reference.jquery !== void 0 && (i3 = this._config.reference[0])), this._config.boundary !== "scrollParent" && e2.classList.add("position-static"), this._popper = new _e(i3, this._menu, this._getPopperConfig());
              }
              var o2;
              if ("ontouchstart" in document.documentElement && !e2.closest(".navbar-nav"))
                (o2 = []).concat.apply(o2, document.body.children).forEach(function(t3) {
                  return U.on(t3, "mouseover", null, function() {
                  });
                });
              this._element.focus(), this._element.setAttribute("aria-expanded", true), Z.toggleClass(this._menu, "show"), Z.toggleClass(this._element, "show"), U.trigger(e2, "shown.bs.dropdown", n2);
            }
          }
        }, i2.hide = function() {
          if (!this._element.disabled && !this._element.classList.contains("disabled") && this._menu.classList.contains("show")) {
            var e2 = t2.getParentFromElement(this._element), n2 = {relatedTarget: this._element};
            U.trigger(e2, "hide.bs.dropdown", n2).defaultPrevented || (this._popper && this._popper.destroy(), Z.toggleClass(this._menu, "show"), Z.toggleClass(this._element, "show"), U.trigger(e2, "hidden.bs.dropdown", n2));
          }
        }, i2.dispose = function() {
          T(this._element, "bs.dropdown"), U.off(this._element, ".bs.dropdown"), this._element = null, this._menu = null, this._popper && (this._popper.destroy(), this._popper = null);
        }, i2.update = function() {
          this._inNavbar = this._detectNavbar(), this._popper && this._popper.scheduleUpdate();
        }, i2._addEventListeners = function() {
          var t3 = this;
          U.on(this._element, "click.bs.dropdown", function(e2) {
            e2.preventDefault(), e2.stopPropagation(), t3.toggle();
          });
        }, i2._getConfig = function(t3) {
          return t3 = n({}, this.constructor.Default, Z.getDataAttributes(this._element), t3), g(be, t3, this.constructor.DefaultType), t3;
        }, i2._getMenuElement = function() {
          return J.next(this._element, ".dropdown-menu")[0];
        }, i2._getPlacement = function() {
          var t3 = this._element.parentNode, e2 = "bottom-start";
          return t3.classList.contains("dropup") ? (e2 = "top-start", this._menu.classList.contains("dropdown-menu-right") && (e2 = "top-end")) : t3.classList.contains("dropright") ? e2 = "right-start" : t3.classList.contains("dropleft") ? e2 = "left-start" : this._menu.classList.contains("dropdown-menu-right") && (e2 = "bottom-end"), e2;
        }, i2._detectNavbar = function() {
          return Boolean(this._element.closest(".navbar"));
        }, i2._getOffset = function() {
          var t3 = this, e2 = {};
          return typeof this._config.offset == "function" ? e2.fn = function(e3) {
            return e3.offsets = n({}, e3.offsets, t3._config.offset(e3.offsets, t3._element) || {}), e3;
          } : e2.offset = this._config.offset, e2;
        }, i2._getPopperConfig = function() {
          var t3 = {placement: this._getPlacement(), modifiers: {offset: this._getOffset(), flip: {enabled: this._config.flip}, preventOverflow: {boundariesElement: this._config.boundary}}};
          return this._config.display === "static" && (t3.modifiers.applyStyle = {enabled: false}), n({}, t3, this._config.popperConfig);
        }, t2.dropdownInterface = function(e2, n2) {
          var i3 = E(e2, "bs.dropdown");
          if (i3 || (i3 = new t2(e2, typeof n2 == "object" ? n2 : null)), typeof n2 == "string") {
            if (i3[n2] === void 0)
              throw new TypeError('No method named "' + n2 + '"');
            i3[n2]();
          }
        }, t2.jQueryInterface = function(e2) {
          return this.each(function() {
            t2.dropdownInterface(this, e2);
          });
        }, t2.clearMenus = function(e2) {
          if (!e2 || e2.button !== 2 && (e2.type !== "keyup" || e2.key === "Tab"))
            for (var n2 = J.find('[data-toggle="dropdown"]'), i3 = 0, o2 = n2.length; i3 < o2; i3++) {
              var r2 = t2.getParentFromElement(n2[i3]), s2 = E(n2[i3], "bs.dropdown"), a2 = {relatedTarget: n2[i3]};
              if (e2 && e2.type === "click" && (a2.clickEvent = e2), s2) {
                var l2 = s2._menu;
                if (n2[i3].classList.contains("show")) {
                  if (!(e2 && (e2.type === "click" && /input|textarea/i.test(e2.target.tagName) || e2.type === "keyup" && e2.key === "Tab") && l2.contains(e2.target))) {
                    if (!U.trigger(r2, "hide.bs.dropdown", a2).defaultPrevented) {
                      var c2;
                      if ("ontouchstart" in document.documentElement)
                        (c2 = []).concat.apply(c2, document.body.children).forEach(function(t3) {
                          return U.off(t3, "mouseover", null, function() {
                          });
                        });
                      n2[i3].setAttribute("aria-expanded", "false"), s2._popper && s2._popper.destroy(), l2.classList.remove("show"), n2[i3].classList.remove("show"), U.trigger(r2, "hidden.bs.dropdown", a2);
                    }
                  }
                }
              }
            }
        }, t2.getParentFromElement = function(t3) {
          return u(t3) || t3.parentNode;
        }, t2.dataApiKeydownHandler = function(e2) {
          if (!(/input|textarea/i.test(e2.target.tagName) ? e2.key === "Space" || e2.key !== "Escape" && (e2.key !== "ArrowDown" && e2.key !== "ArrowUp" || e2.target.closest(".dropdown-menu")) : !ye.test(e2.key)) && (e2.preventDefault(), e2.stopPropagation(), !this.disabled && !this.classList.contains("disabled"))) {
            var n2 = t2.getParentFromElement(this), i3 = this.classList.contains("show");
            if (e2.key === "Escape")
              return (this.matches('[data-toggle="dropdown"]') ? this : J.prev(this, '[data-toggle="dropdown"]')[0]).focus(), void t2.clearMenus();
            if (i3 && e2.key !== "Space") {
              var o2 = J.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", n2).filter(m);
              if (o2.length) {
                var r2 = o2.indexOf(e2.target);
                e2.key === "ArrowUp" && r2 > 0 && r2--, e2.key === "ArrowDown" && r2 < o2.length - 1 && r2++, o2[r2 = r2 === -1 ? 0 : r2].focus();
              }
            } else
              t2.clearMenus();
          }
        }, t2.getInstance = function(t3) {
          return E(t3, "bs.dropdown");
        }, e(t2, null, [{key: "VERSION", get: function() {
          return "5.0.0-alpha2";
        }}, {key: "Default", get: function() {
          return we;
        }}, {key: "DefaultType", get: function() {
          return Ee;
        }}]), t2;
      }();
      U.on(document, "keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', Te.dataApiKeydownHandler), U.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", Te.dataApiKeydownHandler), U.on(document, "click.bs.dropdown.data-api", Te.clearMenus), U.on(document, "keyup.bs.dropdown.data-api", Te.clearMenus), U.on(document, "click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function(t2) {
        t2.preventDefault(), t2.stopPropagation(), Te.dropdownInterface(this, "toggle");
      }), U.on(document, "click.bs.dropdown.data-api", ".dropdown form", function(t2) {
        return t2.stopPropagation();
      });
      var Le = b();
      if (Le) {
        var ke = Le.fn[be];
        Le.fn[be] = Te.jQueryInterface, Le.fn[be].Constructor = Te, Le.fn[be].noConflict = function() {
          return Le.fn[be] = ke, Te.jQueryInterface;
        };
      }
      var Ce = {backdrop: true, keyboard: true, focus: true, show: true}, Ae = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean"}, Oe = function() {
        function t2(t3, e2) {
          this._config = this._getConfig(e2), this._element = t3, this._dialog = J.findOne(".modal-dialog", t3), this._backdrop = null, this._isShown = false, this._isBodyOverflowing = false, this._ignoreBackdropClick = false, this._isTransitioning = false, this._scrollbarWidth = 0, w(t3, "bs.modal", this);
        }
        var i2 = t2.prototype;
        return i2.toggle = function(t3) {
          return this._isShown ? this.hide() : this.show(t3);
        }, i2.show = function(t3) {
          var e2 = this;
          if (!this._isShown && !this._isTransitioning) {
            this._element.classList.contains("fade") && (this._isTransitioning = true);
            var n2 = U.trigger(this._element, "show.bs.modal", {relatedTarget: t3});
            this._isShown || n2.defaultPrevented || (this._isShown = true, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), U.on(this._element, "click.dismiss.bs.modal", '[data-dismiss="modal"]', function(t4) {
              return e2.hide(t4);
            }), U.on(this._dialog, "mousedown.dismiss.bs.modal", function() {
              U.one(e2._element, "mouseup.dismiss.bs.modal", function(t4) {
                t4.target === e2._element && (e2._ignoreBackdropClick = true);
              });
            }), this._showBackdrop(function() {
              return e2._showElement(t3);
            }));
          }
        }, i2.hide = function(t3) {
          var e2 = this;
          if ((t3 && t3.preventDefault(), this._isShown && !this._isTransitioning) && !U.trigger(this._element, "hide.bs.modal").defaultPrevented) {
            this._isShown = false;
            var n2 = this._element.classList.contains("fade");
            if (n2 && (this._isTransitioning = true), this._setEscapeEvent(), this._setResizeEvent(), U.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), U.off(this._element, "click.dismiss.bs.modal"), U.off(this._dialog, "mousedown.dismiss.bs.modal"), n2) {
              var i3 = f(this._element);
              U.one(this._element, "transitionend", function(t4) {
                return e2._hideModal(t4);
              }), p(this._element, i3);
            } else
              this._hideModal();
          }
        }, i2.dispose = function() {
          [window, this._element, this._dialog].forEach(function(t3) {
            return U.off(t3, ".bs.modal");
          }), U.off(document, "focusin.bs.modal"), T(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
        }, i2.handleUpdate = function() {
          this._adjustDialog();
        }, i2._getConfig = function(t3) {
          return t3 = n({}, Ce, t3), g("modal", t3, Ae), t3;
        }, i2._showElement = function(t3) {
          var e2 = this, n2 = this._element.classList.contains("fade"), i3 = J.findOne(".modal-body", this._dialog);
          this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i3 && (i3.scrollTop = 0), n2 && _(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus();
          var o2 = function() {
            e2._config.focus && e2._element.focus(), e2._isTransitioning = false, U.trigger(e2._element, "shown.bs.modal", {relatedTarget: t3});
          };
          if (n2) {
            var r2 = f(this._dialog);
            U.one(this._dialog, "transitionend", o2), p(this._dialog, r2);
          } else
            o2();
        }, i2._enforceFocus = function() {
          var t3 = this;
          U.off(document, "focusin.bs.modal"), U.on(document, "focusin.bs.modal", function(e2) {
            document === e2.target || t3._element === e2.target || t3._element.contains(e2.target) || t3._element.focus();
          });
        }, i2._setEscapeEvent = function() {
          var t3 = this;
          this._isShown ? U.on(this._element, "keydown.dismiss.bs.modal", function(e2) {
            t3._config.keyboard && e2.key === "Escape" ? (e2.preventDefault(), t3.hide()) : t3._config.keyboard || e2.key !== "Escape" || t3._triggerBackdropTransition();
          }) : U.off(this._element, "keydown.dismiss.bs.modal");
        }, i2._setResizeEvent = function() {
          var t3 = this;
          this._isShown ? U.on(window, "resize.bs.modal", function() {
            return t3._adjustDialog();
          }) : U.off(window, "resize.bs.modal");
        }, i2._hideModal = function() {
          var t3 = this;
          this._element.style.display = "none", this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = false, this._showBackdrop(function() {
            document.body.classList.remove("modal-open"), t3._resetAdjustments(), t3._resetScrollbar(), U.trigger(t3._element, "hidden.bs.modal");
          });
        }, i2._removeBackdrop = function() {
          this._backdrop.parentNode.removeChild(this._backdrop), this._backdrop = null;
        }, i2._showBackdrop = function(t3) {
          var e2 = this, n2 = this._element.classList.contains("fade") ? "fade" : "";
          if (this._isShown && this._config.backdrop) {
            if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n2 && this._backdrop.classList.add(n2), document.body.appendChild(this._backdrop), U.on(this._element, "click.dismiss.bs.modal", function(t4) {
              e2._ignoreBackdropClick ? e2._ignoreBackdropClick = false : t4.target === t4.currentTarget && e2._triggerBackdropTransition();
            }), n2 && _(this._backdrop), this._backdrop.classList.add("show"), !n2)
              return void t3();
            var i3 = f(this._backdrop);
            U.one(this._backdrop, "transitionend", t3), p(this._backdrop, i3);
          } else if (!this._isShown && this._backdrop) {
            this._backdrop.classList.remove("show");
            var o2 = function() {
              e2._removeBackdrop(), t3();
            };
            if (this._element.classList.contains("fade")) {
              var r2 = f(this._backdrop);
              U.one(this._backdrop, "transitionend", o2), p(this._backdrop, r2);
            } else
              o2();
          } else
            t3();
        }, i2._triggerBackdropTransition = function() {
          var t3 = this;
          if (this._config.backdrop === "static") {
            if (U.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
              return;
            var e2 = this._element.scrollHeight > document.documentElement.clientHeight;
            e2 || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
            var n2 = f(this._dialog);
            U.off(this._element, "transitionend"), U.one(this._element, "transitionend", function() {
              t3._element.classList.remove("modal-static"), e2 || (U.one(t3._element, "transitionend", function() {
                t3._element.style.overflowY = "";
              }), p(t3._element, n2));
            }), p(this._element, n2), this._element.focus();
          } else
            this.hide();
        }, i2._adjustDialog = function() {
          var t3 = this._element.scrollHeight > document.documentElement.clientHeight;
          !this._isBodyOverflowing && t3 && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t3 && (this._element.style.paddingRight = this._scrollbarWidth + "px");
        }, i2._resetAdjustments = function() {
          this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
        }, i2._checkScrollbar = function() {
          var t3 = document.body.getBoundingClientRect();
          this._isBodyOverflowing = Math.round(t3.left + t3.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
        }, i2._setScrollbar = function() {
          var t3 = this;
          if (this._isBodyOverflowing) {
            J.find(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top").forEach(function(e3) {
              var n3 = e3.style.paddingRight, i3 = window.getComputedStyle(e3)["padding-right"];
              Z.setDataAttribute(e3, "padding-right", n3), e3.style.paddingRight = parseFloat(i3) + t3._scrollbarWidth + "px";
            }), J.find(".sticky-top").forEach(function(e3) {
              var n3 = e3.style.marginRight, i3 = window.getComputedStyle(e3)["margin-right"];
              Z.setDataAttribute(e3, "margin-right", n3), e3.style.marginRight = parseFloat(i3) - t3._scrollbarWidth + "px";
            });
            var e2 = document.body.style.paddingRight, n2 = window.getComputedStyle(document.body)["padding-right"];
            Z.setDataAttribute(document.body, "padding-right", e2), document.body.style.paddingRight = parseFloat(n2) + this._scrollbarWidth + "px";
          }
          document.body.classList.add("modal-open");
        }, i2._resetScrollbar = function() {
          J.find(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top").forEach(function(t4) {
            var e2 = Z.getDataAttribute(t4, "padding-right");
            e2 !== void 0 && (Z.removeDataAttribute(t4, "padding-right"), t4.style.paddingRight = e2);
          }), J.find(".sticky-top").forEach(function(t4) {
            var e2 = Z.getDataAttribute(t4, "margin-right");
            e2 !== void 0 && (Z.removeDataAttribute(t4, "margin-right"), t4.style.marginRight = e2);
          });
          var t3 = Z.getDataAttribute(document.body, "padding-right");
          t3 === void 0 ? document.body.style.paddingRight = "" : (Z.removeDataAttribute(document.body, "padding-right"), document.body.style.paddingRight = t3);
        }, i2._getScrollbarWidth = function() {
          var t3 = document.createElement("div");
          t3.className = "modal-scrollbar-measure", document.body.appendChild(t3);
          var e2 = t3.getBoundingClientRect().width - t3.clientWidth;
          return document.body.removeChild(t3), e2;
        }, t2.jQueryInterface = function(e2, i3) {
          return this.each(function() {
            var o2 = E(this, "bs.modal"), r2 = n({}, Ce, Z.getDataAttributes(this), typeof e2 == "object" && e2 ? e2 : {});
            if (o2 || (o2 = new t2(this, r2)), typeof e2 == "string") {
              if (o2[e2] === void 0)
                throw new TypeError('No method named "' + e2 + '"');
              o2[e2](i3);
            } else
              r2.show && o2.show(i3);
          });
        }, t2.getInstance = function(t3) {
          return E(t3, "bs.modal");
        }, e(t2, null, [{key: "VERSION", get: function() {
          return "5.0.0-alpha2";
        }}, {key: "Default", get: function() {
          return Ce;
        }}]), t2;
      }();
      U.on(document, "click.bs.modal.data-api", '[data-toggle="modal"]', function(t2) {
        var e2 = this, i2 = u(this);
        this.tagName !== "A" && this.tagName !== "AREA" || t2.preventDefault(), U.one(i2, "show.bs.modal", function(t3) {
          t3.defaultPrevented || U.one(i2, "hidden.bs.modal", function() {
            m(e2) && e2.focus();
          });
        });
        var o2 = E(i2, "bs.modal");
        if (!o2) {
          var r2 = n({}, Z.getDataAttributes(i2), Z.getDataAttributes(this));
          o2 = new Oe(i2, r2);
        }
        o2.show(this);
      });
      var Se = b();
      if (Se) {
        var De = Se.fn.modal;
        Se.fn.modal = Oe.jQueryInterface, Se.fn.modal.Constructor = Oe, Se.fn.modal.noConflict = function() {
          return Se.fn.modal = De, Oe.jQueryInterface;
        };
      }
      var xe = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"], Ne = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi, Ie = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, je = {"*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: []};
      function Pe(t2, e2, n2) {
        var i2;
        if (!t2.length)
          return t2;
        if (n2 && typeof n2 == "function")
          return n2(t2);
        for (var o2 = new window.DOMParser().parseFromString(t2, "text/html"), r2 = Object.keys(e2), s2 = (i2 = []).concat.apply(i2, o2.body.querySelectorAll("*")), a2 = function(t3, n3) {
          var i3, o3 = s2[t3], a3 = o3.nodeName.toLowerCase();
          if (r2.indexOf(a3) === -1)
            return o3.parentNode.removeChild(o3), "continue";
          var l3 = (i3 = []).concat.apply(i3, o3.attributes), c3 = [].concat(e2["*"] || [], e2[a3] || []);
          l3.forEach(function(t4) {
            (function(t5, e3) {
              var n4 = t5.nodeName.toLowerCase();
              if (e3.indexOf(n4) !== -1)
                return xe.indexOf(n4) === -1 || Boolean(t5.nodeValue.match(Ne) || t5.nodeValue.match(Ie));
              for (var i4 = e3.filter(function(t6) {
                return t6 instanceof RegExp;
              }), o4 = 0, r3 = i4.length; o4 < r3; o4++)
                if (n4.match(i4[o4]))
                  return true;
              return false;
            })(t4, c3) || o3.removeAttribute(t4.nodeName);
          });
        }, l2 = 0, c2 = s2.length; l2 < c2; l2++)
          a2(l2);
        return o2.body.innerHTML;
      }
      var Me = "tooltip", He = new RegExp("(^|\\s)bs-tooltip\\S+", "g"), Be = ["sanitize", "allowList", "sanitizeFn"], Re = {animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string|function)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)", sanitize: "boolean", sanitizeFn: "(null|function)", allowList: "object", popperConfig: "(null|object)"}, Fe = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}, We = {animation: true, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: false, selector: false, placement: "top", offset: 0, container: false, fallbackPlacement: "flip", boundary: "scrollParent", sanitize: true, sanitizeFn: null, allowList: je, popperConfig: null}, Ue = {HIDE: "hide.bs.tooltip", HIDDEN: "hidden.bs.tooltip", SHOW: "show.bs.tooltip", SHOWN: "shown.bs.tooltip", INSERTED: "inserted.bs.tooltip", CLICK: "click.bs.tooltip", FOCUSIN: "focusin.bs.tooltip", FOCUSOUT: "focusout.bs.tooltip", MOUSEENTER: "mouseenter.bs.tooltip", MOUSELEAVE: "mouseleave.bs.tooltip"}, Qe = function() {
        function t2(t3, e2) {
          if (_e === void 0)
            throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org)");
          this._isEnabled = true, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t3, this.config = this._getConfig(e2), this.tip = null, this._setListeners(), w(t3, this.constructor.DATA_KEY, this);
        }
        var i2 = t2.prototype;
        return i2.enable = function() {
          this._isEnabled = true;
        }, i2.disable = function() {
          this._isEnabled = false;
        }, i2.toggleEnabled = function() {
          this._isEnabled = !this._isEnabled;
        }, i2.toggle = function(t3) {
          if (this._isEnabled)
            if (t3) {
              var e2 = this.constructor.DATA_KEY, n2 = E(t3.delegateTarget, e2);
              n2 || (n2 = new this.constructor(t3.delegateTarget, this._getDelegateConfig()), w(t3.delegateTarget, e2, n2)), n2._activeTrigger.click = !n2._activeTrigger.click, n2._isWithActiveTrigger() ? n2._enter(null, n2) : n2._leave(null, n2);
            } else {
              if (this.getTipElement().classList.contains("show"))
                return void this._leave(null, this);
              this._enter(null, this);
            }
        }, i2.dispose = function() {
          clearTimeout(this._timeout), T(this.element, this.constructor.DATA_KEY), U.off(this.element, this.constructor.EVENT_KEY), U.off(this.element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode.removeChild(this.tip), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
        }, i2.show = function() {
          var t3 = this;
          if (this.element.style.display === "none")
            throw new Error("Please use show on visible elements");
          if (this.isWithContent() && this._isEnabled) {
            var e2 = U.trigger(this.element, this.constructor.Event.SHOW), n2 = function t4(e3) {
              if (!document.documentElement.attachShadow)
                return null;
              if (typeof e3.getRootNode == "function") {
                var n3 = e3.getRootNode();
                return n3 instanceof ShadowRoot ? n3 : null;
              }
              return e3 instanceof ShadowRoot ? e3 : e3.parentNode ? t4(e3.parentNode) : null;
            }(this.element), i3 = n2 === null ? this.element.ownerDocument.documentElement.contains(this.element) : n2.contains(this.element);
            if (e2.defaultPrevented || !i3)
              return;
            var o2 = this.getTipElement(), r2 = a(this.constructor.NAME);
            o2.setAttribute("id", r2), this.element.setAttribute("aria-describedby", r2), this.setContent(), this.config.animation && o2.classList.add("fade");
            var s2 = typeof this.config.placement == "function" ? this.config.placement.call(this, o2, this.element) : this.config.placement, l2 = this._getAttachment(s2);
            this._addAttachmentClass(l2);
            var c2, u2 = this._getContainer();
            if (w(o2, this.constructor.DATA_KEY, this), this.element.ownerDocument.documentElement.contains(this.tip) || u2.appendChild(o2), U.trigger(this.element, this.constructor.Event.INSERTED), this._popper = new _e(this.element, o2, this._getPopperConfig(l2)), o2.classList.add("show"), "ontouchstart" in document.documentElement)
              (c2 = []).concat.apply(c2, document.body.children).forEach(function(t4) {
                U.on(t4, "mouseover", function() {
                });
              });
            var h2 = function() {
              t3.config.animation && t3._fixTransition();
              var e3 = t3._hoverState;
              t3._hoverState = null, U.trigger(t3.element, t3.constructor.Event.SHOWN), e3 === "out" && t3._leave(null, t3);
            };
            if (this.tip.classList.contains("fade")) {
              var d2 = f(this.tip);
              U.one(this.tip, "transitionend", h2), p(this.tip, d2);
            } else
              h2();
          }
        }, i2.hide = function() {
          var t3 = this;
          if (this._popper) {
            var e2 = this.getTipElement(), n2 = function() {
              t3._hoverState !== "show" && e2.parentNode && e2.parentNode.removeChild(e2), t3._cleanTipClass(), t3.element.removeAttribute("aria-describedby"), U.trigger(t3.element, t3.constructor.Event.HIDDEN), t3._popper.destroy();
            };
            if (!U.trigger(this.element, this.constructor.Event.HIDE).defaultPrevented) {
              var i3;
              if (e2.classList.remove("show"), "ontouchstart" in document.documentElement)
                (i3 = []).concat.apply(i3, document.body.children).forEach(function(t4) {
                  return U.off(t4, "mouseover", v);
                });
              if (this._activeTrigger.click = false, this._activeTrigger.focus = false, this._activeTrigger.hover = false, this.tip.classList.contains("fade")) {
                var o2 = f(e2);
                U.one(e2, "transitionend", n2), p(e2, o2);
              } else
                n2();
              this._hoverState = "";
            }
          }
        }, i2.update = function() {
          this._popper !== null && this._popper.scheduleUpdate();
        }, i2.isWithContent = function() {
          return Boolean(this.getTitle());
        }, i2.getTipElement = function() {
          if (this.tip)
            return this.tip;
          var t3 = document.createElement("div");
          return t3.innerHTML = this.config.template, this.tip = t3.children[0], this.tip;
        }, i2.setContent = function() {
          var t3 = this.getTipElement();
          this.setElementContent(J.findOne(".tooltip-inner", t3), this.getTitle()), t3.classList.remove("fade", "show");
        }, i2.setElementContent = function(t3, e2) {
          if (t3 !== null)
            return typeof e2 == "object" && d(e2) ? (e2.jquery && (e2 = e2[0]), void (this.config.html ? e2.parentNode !== t3 && (t3.innerHTML = "", t3.appendChild(e2)) : t3.textContent = e2.textContent)) : void (this.config.html ? (this.config.sanitize && (e2 = Pe(e2, this.config.allowList, this.config.sanitizeFn)), t3.innerHTML = e2) : t3.textContent = e2);
        }, i2.getTitle = function() {
          var t3 = this.element.getAttribute("data-original-title");
          return t3 || (t3 = typeof this.config.title == "function" ? this.config.title.call(this.element) : this.config.title), t3;
        }, i2._getPopperConfig = function(t3) {
          var e2 = this;
          return n({}, {placement: t3, modifiers: {offset: this._getOffset(), flip: {behavior: this.config.fallbackPlacement}, arrow: {element: "." + this.constructor.NAME + "-arrow"}, preventOverflow: {boundariesElement: this.config.boundary}}, onCreate: function(t4) {
            t4.originalPlacement !== t4.placement && e2._handlePopperPlacementChange(t4);
          }, onUpdate: function(t4) {
            return e2._handlePopperPlacementChange(t4);
          }}, this.config.popperConfig);
        }, i2._addAttachmentClass = function(t3) {
          this.getTipElement().classList.add("bs-tooltip-" + t3);
        }, i2._getOffset = function() {
          var t3 = this, e2 = {};
          return typeof this.config.offset == "function" ? e2.fn = function(e3) {
            return e3.offsets = n({}, e3.offsets, t3.config.offset(e3.offsets, t3.element) || {}), e3;
          } : e2.offset = this.config.offset, e2;
        }, i2._getContainer = function() {
          return this.config.container === false ? document.body : d(this.config.container) ? this.config.container : J.findOne(this.config.container);
        }, i2._getAttachment = function(t3) {
          return Fe[t3.toUpperCase()];
        }, i2._setListeners = function() {
          var t3 = this;
          this.config.trigger.split(" ").forEach(function(e2) {
            if (e2 === "click")
              U.on(t3.element, t3.constructor.Event.CLICK, t3.config.selector, function(e3) {
                return t3.toggle(e3);
              });
            else if (e2 !== "manual") {
              var n2 = e2 === "hover" ? t3.constructor.Event.MOUSEENTER : t3.constructor.Event.FOCUSIN, i3 = e2 === "hover" ? t3.constructor.Event.MOUSELEAVE : t3.constructor.Event.FOCUSOUT;
              U.on(t3.element, n2, t3.config.selector, function(e3) {
                return t3._enter(e3);
              }), U.on(t3.element, i3, t3.config.selector, function(e3) {
                return t3._leave(e3);
              });
            }
          }), this._hideModalHandler = function() {
            t3.element && t3.hide();
          }, U.on(this.element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = n({}, this.config, {trigger: "manual", selector: ""}) : this._fixTitle();
        }, i2._fixTitle = function() {
          var t3 = typeof this.element.getAttribute("data-original-title");
          (this.element.getAttribute("title") || t3 !== "string") && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
        }, i2._enter = function(t3, e2) {
          var n2 = this.constructor.DATA_KEY;
          (e2 = e2 || E(t3.delegateTarget, n2)) || (e2 = new this.constructor(t3.delegateTarget, this._getDelegateConfig()), w(t3.delegateTarget, n2, e2)), t3 && (e2._activeTrigger[t3.type === "focusin" ? "focus" : "hover"] = true), e2.getTipElement().classList.contains("show") || e2._hoverState === "show" ? e2._hoverState = "show" : (clearTimeout(e2._timeout), e2._hoverState = "show", e2.config.delay && e2.config.delay.show ? e2._timeout = setTimeout(function() {
            e2._hoverState === "show" && e2.show();
          }, e2.config.delay.show) : e2.show());
        }, i2._leave = function(t3, e2) {
          var n2 = this.constructor.DATA_KEY;
          (e2 = e2 || E(t3.delegateTarget, n2)) || (e2 = new this.constructor(t3.delegateTarget, this._getDelegateConfig()), w(t3.delegateTarget, n2, e2)), t3 && (e2._activeTrigger[t3.type === "focusout" ? "focus" : "hover"] = false), e2._isWithActiveTrigger() || (clearTimeout(e2._timeout), e2._hoverState = "out", e2.config.delay && e2.config.delay.hide ? e2._timeout = setTimeout(function() {
            e2._hoverState === "out" && e2.hide();
          }, e2.config.delay.hide) : e2.hide());
        }, i2._isWithActiveTrigger = function() {
          for (var t3 in this._activeTrigger)
            if (this._activeTrigger[t3])
              return true;
          return false;
        }, i2._getConfig = function(t3) {
          var e2 = Z.getDataAttributes(this.element);
          return Object.keys(e2).forEach(function(t4) {
            Be.indexOf(t4) !== -1 && delete e2[t4];
          }), t3 && typeof t3.container == "object" && t3.container.jquery && (t3.container = t3.container[0]), typeof (t3 = n({}, this.constructor.Default, e2, typeof t3 == "object" && t3 ? t3 : {})).delay == "number" && (t3.delay = {show: t3.delay, hide: t3.delay}), typeof t3.title == "number" && (t3.title = t3.title.toString()), typeof t3.content == "number" && (t3.content = t3.content.toString()), g(Me, t3, this.constructor.DefaultType), t3.sanitize && (t3.template = Pe(t3.template, t3.allowList, t3.sanitizeFn)), t3;
        }, i2._getDelegateConfig = function() {
          var t3 = {};
          if (this.config)
            for (var e2 in this.config)
              this.constructor.Default[e2] !== this.config[e2] && (t3[e2] = this.config[e2]);
          return t3;
        }, i2._cleanTipClass = function() {
          var t3 = this.getTipElement(), e2 = t3.getAttribute("class").match(He);
          e2 !== null && e2.length > 0 && e2.map(function(t4) {
            return t4.trim();
          }).forEach(function(e3) {
            return t3.classList.remove(e3);
          });
        }, i2._handlePopperPlacementChange = function(t3) {
          this.tip = t3.instance.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(t3.placement));
        }, i2._fixTransition = function() {
          var t3 = this.getTipElement(), e2 = this.config.animation;
          t3.getAttribute("x-placement") === null && (t3.classList.remove("fade"), this.config.animation = false, this.hide(), this.show(), this.config.animation = e2);
        }, t2.jQueryInterface = function(e2) {
          return this.each(function() {
            var n2 = E(this, "bs.tooltip"), i3 = typeof e2 == "object" && e2;
            if ((n2 || !/dispose|hide/.test(e2)) && (n2 || (n2 = new t2(this, i3)), typeof e2 == "string")) {
              if (n2[e2] === void 0)
                throw new TypeError('No method named "' + e2 + '"');
              n2[e2]();
            }
          });
        }, t2.getInstance = function(t3) {
          return E(t3, "bs.tooltip");
        }, e(t2, null, [{key: "VERSION", get: function() {
          return "5.0.0-alpha2";
        }}, {key: "Default", get: function() {
          return We;
        }}, {key: "NAME", get: function() {
          return Me;
        }}, {key: "DATA_KEY", get: function() {
          return "bs.tooltip";
        }}, {key: "Event", get: function() {
          return Ue;
        }}, {key: "EVENT_KEY", get: function() {
          return ".bs.tooltip";
        }}, {key: "DefaultType", get: function() {
          return Re;
        }}]), t2;
      }(), Ve = b();
      if (Ve) {
        var Ke = Ve.fn[Me];
        Ve.fn[Me] = Qe.jQueryInterface, Ve.fn[Me].Constructor = Qe, Ve.fn[Me].noConflict = function() {
          return Ve.fn[Me] = Ke, Qe.jQueryInterface;
        };
      }
      var Ye = "popover", qe = new RegExp("(^|\\s)bs-popover\\S+", "g"), ze = n({}, Qe.Default, {placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}), Xe = n({}, Qe.DefaultType, {content: "(string|element|function)"}), Ge = {HIDE: "hide.bs.popover", HIDDEN: "hidden.bs.popover", SHOW: "show.bs.popover", SHOWN: "shown.bs.popover", INSERTED: "inserted.bs.popover", CLICK: "click.bs.popover", FOCUSIN: "focusin.bs.popover", FOCUSOUT: "focusout.bs.popover", MOUSEENTER: "mouseenter.bs.popover", MOUSELEAVE: "mouseleave.bs.popover"}, $e = function(t2) {
        var n2, i2;
        function o2() {
          return t2.apply(this, arguments) || this;
        }
        i2 = t2, (n2 = o2).prototype = Object.create(i2.prototype), n2.prototype.constructor = n2, n2.__proto__ = i2;
        var r2 = o2.prototype;
        return r2.isWithContent = function() {
          return this.getTitle() || this._getContent();
        }, r2.setContent = function() {
          var t3 = this.getTipElement();
          this.setElementContent(J.findOne(".popover-header", t3), this.getTitle());
          var e2 = this._getContent();
          typeof e2 == "function" && (e2 = e2.call(this.element)), this.setElementContent(J.findOne(".popover-body", t3), e2), t3.classList.remove("fade", "show");
        }, r2._addAttachmentClass = function(t3) {
          this.getTipElement().classList.add("bs-popover-" + t3);
        }, r2._getContent = function() {
          return this.element.getAttribute("data-content") || this.config.content;
        }, r2._cleanTipClass = function() {
          var t3 = this.getTipElement(), e2 = t3.getAttribute("class").match(qe);
          e2 !== null && e2.length > 0 && e2.map(function(t4) {
            return t4.trim();
          }).forEach(function(e3) {
            return t3.classList.remove(e3);
          });
        }, o2.jQueryInterface = function(t3) {
          return this.each(function() {
            var e2 = E(this, "bs.popover"), n3 = typeof t3 == "object" ? t3 : null;
            if ((e2 || !/dispose|hide/.test(t3)) && (e2 || (e2 = new o2(this, n3), w(this, "bs.popover", e2)), typeof t3 == "string")) {
              if (e2[t3] === void 0)
                throw new TypeError('No method named "' + t3 + '"');
              e2[t3]();
            }
          });
        }, o2.getInstance = function(t3) {
          return E(t3, "bs.popover");
        }, e(o2, null, [{key: "VERSION", get: function() {
          return "5.0.0-alpha2";
        }}, {key: "Default", get: function() {
          return ze;
        }}, {key: "NAME", get: function() {
          return Ye;
        }}, {key: "DATA_KEY", get: function() {
          return "bs.popover";
        }}, {key: "Event", get: function() {
          return Ge;
        }}, {key: "EVENT_KEY", get: function() {
          return ".bs.popover";
        }}, {key: "DefaultType", get: function() {
          return Xe;
        }}]), o2;
      }(Qe), Ze = b();
      if (Ze) {
        var Je = Ze.fn[Ye];
        Ze.fn[Ye] = $e.jQueryInterface, Ze.fn[Ye].Constructor = $e, Ze.fn[Ye].noConflict = function() {
          return Ze.fn[Ye] = Je, $e.jQueryInterface;
        };
      }
      var tn = "scrollspy", en = {offset: 10, method: "auto", target: ""}, nn = {offset: "number", method: "string", target: "(string|element)"}, on = function() {
        function t2(t3, e2) {
          var n2 = this;
          this._element = t3, this._scrollElement = t3.tagName === "BODY" ? window : t3, this._config = this._getConfig(e2), this._selector = this._config.target + " .nav-link, " + this._config.target + " .list-group-item, " + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, U.on(this._scrollElement, "scroll.bs.scrollspy", function(t4) {
            return n2._process(t4);
          }), this.refresh(), this._process(), w(t3, "bs.scrollspy", this);
        }
        var i2 = t2.prototype;
        return i2.refresh = function() {
          var t3 = this, e2 = this._scrollElement === this._scrollElement.window ? "offset" : "position", n2 = this._config.method === "auto" ? e2 : this._config.method, i3 = n2 === "position" ? this._getScrollTop() : 0;
          this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), J.find(this._selector).map(function(t4) {
            var e3 = c(t4), o2 = e3 ? J.findOne(e3) : null;
            if (o2) {
              var r2 = o2.getBoundingClientRect();
              if (r2.width || r2.height)
                return [Z[n2](o2).top + i3, e3];
            }
            return null;
          }).filter(function(t4) {
            return t4;
          }).sort(function(t4, e3) {
            return t4[0] - e3[0];
          }).forEach(function(e3) {
            t3._offsets.push(e3[0]), t3._targets.push(e3[1]);
          });
        }, i2.dispose = function() {
          T(this._element, "bs.scrollspy"), U.off(this._scrollElement, ".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
        }, i2._getConfig = function(t3) {
          if (typeof (t3 = n({}, en, typeof t3 == "object" && t3 ? t3 : {})).target != "string" && d(t3.target)) {
            var e2 = t3.target.id;
            e2 || (e2 = a(tn), t3.target.id = e2), t3.target = "#" + e2;
          }
          return g(tn, t3, nn), t3;
        }, i2._getScrollTop = function() {
          return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
        }, i2._getScrollHeight = function() {
          return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        }, i2._getOffsetHeight = function() {
          return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
        }, i2._process = function() {
          var t3 = this._getScrollTop() + this._config.offset, e2 = this._getScrollHeight(), n2 = this._config.offset + e2 - this._getOffsetHeight();
          if (this._scrollHeight !== e2 && this.refresh(), t3 >= n2) {
            var i3 = this._targets[this._targets.length - 1];
            this._activeTarget !== i3 && this._activate(i3);
          } else {
            if (this._activeTarget && t3 < this._offsets[0] && this._offsets[0] > 0)
              return this._activeTarget = null, void this._clear();
            for (var o2 = this._offsets.length; o2--; ) {
              this._activeTarget !== this._targets[o2] && t3 >= this._offsets[o2] && (this._offsets[o2 + 1] === void 0 || t3 < this._offsets[o2 + 1]) && this._activate(this._targets[o2]);
            }
          }
        }, i2._activate = function(t3) {
          this._activeTarget = t3, this._clear();
          var e2 = this._selector.split(",").map(function(e3) {
            return e3 + '[data-target="' + t3 + '"],' + e3 + '[href="' + t3 + '"]';
          }), n2 = J.findOne(e2.join(","));
          n2.classList.contains("dropdown-item") ? (J.findOne(".dropdown-toggle", n2.closest(".dropdown")).classList.add("active"), n2.classList.add("active")) : (n2.classList.add("active"), J.parents(n2, ".nav, .list-group").forEach(function(t4) {
            J.prev(t4, ".nav-link, .list-group-item").forEach(function(t5) {
              return t5.classList.add("active");
            }), J.prev(t4, ".nav-item").forEach(function(t5) {
              J.children(t5, ".nav-link").forEach(function(t6) {
                return t6.classList.add("active");
              });
            });
          })), U.trigger(this._scrollElement, "activate.bs.scrollspy", {relatedTarget: t3});
        }, i2._clear = function() {
          J.find(this._selector).filter(function(t3) {
            return t3.classList.contains("active");
          }).forEach(function(t3) {
            return t3.classList.remove("active");
          });
        }, t2.jQueryInterface = function(e2) {
          return this.each(function() {
            var n2 = E(this, "bs.scrollspy");
            if (n2 || (n2 = new t2(this, typeof e2 == "object" && e2)), typeof e2 == "string") {
              if (n2[e2] === void 0)
                throw new TypeError('No method named "' + e2 + '"');
              n2[e2]();
            }
          });
        }, t2.getInstance = function(t3) {
          return E(t3, "bs.scrollspy");
        }, e(t2, null, [{key: "VERSION", get: function() {
          return "5.0.0-alpha2";
        }}, {key: "Default", get: function() {
          return en;
        }}]), t2;
      }();
      U.on(window, "load.bs.scrollspy.data-api", function() {
        J.find('[data-spy="scroll"]').forEach(function(t2) {
          return new on(t2, Z.getDataAttributes(t2));
        });
      });
      var rn = b();
      if (rn) {
        var sn = rn.fn[tn];
        rn.fn[tn] = on.jQueryInterface, rn.fn[tn].Constructor = on, rn.fn[tn].noConflict = function() {
          return rn.fn[tn] = sn, on.jQueryInterface;
        };
      }
      var an = function() {
        function t2(t3) {
          this._element = t3, w(this._element, "bs.tab", this);
        }
        var n2 = t2.prototype;
        return n2.show = function() {
          var t3 = this;
          if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active") || this._element.classList.contains("disabled"))) {
            var e2, n3 = u(this._element), i2 = this._element.closest(".nav, .list-group");
            if (i2) {
              var o2 = i2.nodeName === "UL" || i2.nodeName === "OL" ? ":scope > li > .active" : ".active";
              e2 = (e2 = J.find(o2, i2))[e2.length - 1];
            }
            var r2 = null;
            if (e2 && (r2 = U.trigger(e2, "hide.bs.tab", {relatedTarget: this._element})), !(U.trigger(this._element, "show.bs.tab", {relatedTarget: e2}).defaultPrevented || r2 !== null && r2.defaultPrevented)) {
              this._activate(this._element, i2);
              var s2 = function() {
                U.trigger(e2, "hidden.bs.tab", {relatedTarget: t3._element}), U.trigger(t3._element, "shown.bs.tab", {relatedTarget: e2});
              };
              n3 ? this._activate(n3, n3.parentNode, s2) : s2();
            }
          }
        }, n2.dispose = function() {
          T(this._element, "bs.tab"), this._element = null;
        }, n2._activate = function(t3, e2, n3) {
          var i2 = this, o2 = (!e2 || e2.nodeName !== "UL" && e2.nodeName !== "OL" ? J.children(e2, ".active") : J.find(":scope > li > .active", e2))[0], r2 = n3 && o2 && o2.classList.contains("fade"), s2 = function() {
            return i2._transitionComplete(t3, o2, n3);
          };
          if (o2 && r2) {
            var a2 = f(o2);
            o2.classList.remove("show"), U.one(o2, "transitionend", s2), p(o2, a2);
          } else
            s2();
        }, n2._transitionComplete = function(t3, e2, n3) {
          if (e2) {
            e2.classList.remove("active");
            var i2 = J.findOne(":scope > .dropdown-menu .active", e2.parentNode);
            i2 && i2.classList.remove("active"), e2.getAttribute("role") === "tab" && e2.setAttribute("aria-selected", false);
          }
          (t3.classList.add("active"), t3.getAttribute("role") === "tab" && t3.setAttribute("aria-selected", true), _(t3), t3.classList.contains("fade") && t3.classList.add("show"), t3.parentNode && t3.parentNode.classList.contains("dropdown-menu")) && (t3.closest(".dropdown") && J.find(".dropdown-toggle").forEach(function(t4) {
            return t4.classList.add("active");
          }), t3.setAttribute("aria-expanded", true));
          n3 && n3();
        }, t2.jQueryInterface = function(e2) {
          return this.each(function() {
            var n3 = E(this, "bs.tab") || new t2(this);
            if (typeof e2 == "string") {
              if (n3[e2] === void 0)
                throw new TypeError('No method named "' + e2 + '"');
              n3[e2]();
            }
          });
        }, t2.getInstance = function(t3) {
          return E(t3, "bs.tab");
        }, e(t2, null, [{key: "VERSION", get: function() {
          return "5.0.0-alpha2";
        }}]), t2;
      }();
      U.on(document, "click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(t2) {
        t2.preventDefault(), (E(this, "bs.tab") || new an(this)).show();
      });
      var ln = b();
      if (ln) {
        var cn = ln.fn.tab;
        ln.fn.tab = an.jQueryInterface, ln.fn.tab.Constructor = an, ln.fn.tab.noConflict = function() {
          return ln.fn.tab = cn, an.jQueryInterface;
        };
      }
      var un = {animation: "boolean", autohide: "boolean", delay: "number"}, fn = {animation: true, autohide: true, delay: 5e3}, hn = function() {
        function t2(t3, e2) {
          this._element = t3, this._config = this._getConfig(e2), this._timeout = null, this._setListeners(), w(t3, "bs.toast", this);
        }
        var i2 = t2.prototype;
        return i2.show = function() {
          var t3 = this;
          if (!U.trigger(this._element, "show.bs.toast").defaultPrevented) {
            this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
            var e2 = function() {
              t3._element.classList.remove("showing"), t3._element.classList.add("show"), U.trigger(t3._element, "shown.bs.toast"), t3._config.autohide && (t3._timeout = setTimeout(function() {
                t3.hide();
              }, t3._config.delay));
            };
            if (this._element.classList.remove("hide"), _(this._element), this._element.classList.add("showing"), this._config.animation) {
              var n2 = f(this._element);
              U.one(this._element, "transitionend", e2), p(this._element, n2);
            } else
              e2();
          }
        }, i2.hide = function() {
          var t3 = this;
          if (this._element.classList.contains("show") && !U.trigger(this._element, "hide.bs.toast").defaultPrevented) {
            var e2 = function() {
              t3._element.classList.add("hide"), U.trigger(t3._element, "hidden.bs.toast");
            };
            if (this._element.classList.remove("show"), this._config.animation) {
              var n2 = f(this._element);
              U.one(this._element, "transitionend", e2), p(this._element, n2);
            } else
              e2();
          }
        }, i2.dispose = function() {
          this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), U.off(this._element, "click.dismiss.bs.toast"), T(this._element, "bs.toast"), this._element = null, this._config = null;
        }, i2._getConfig = function(t3) {
          return t3 = n({}, fn, Z.getDataAttributes(this._element), typeof t3 == "object" && t3 ? t3 : {}), g("toast", t3, this.constructor.DefaultType), t3;
        }, i2._setListeners = function() {
          var t3 = this;
          U.on(this._element, "click.dismiss.bs.toast", '[data-dismiss="toast"]', function() {
            return t3.hide();
          });
        }, i2._clearTimeout = function() {
          clearTimeout(this._timeout), this._timeout = null;
        }, t2.jQueryInterface = function(e2) {
          return this.each(function() {
            var n2 = E(this, "bs.toast");
            if (n2 || (n2 = new t2(this, typeof e2 == "object" && e2)), typeof e2 == "string") {
              if (n2[e2] === void 0)
                throw new TypeError('No method named "' + e2 + '"');
              n2[e2](this);
            }
          });
        }, t2.getInstance = function(t3) {
          return E(t3, "bs.toast");
        }, e(t2, null, [{key: "VERSION", get: function() {
          return "5.0.0-alpha2";
        }}, {key: "DefaultType", get: function() {
          return un;
        }}, {key: "Default", get: function() {
          return fn;
        }}]), t2;
      }(), dn = b();
      if (dn) {
        var pn = dn.fn.toast;
        dn.fn.toast = hn.jQueryInterface, dn.fn.toast.Constructor = hn, dn.fn.toast.noConflict = function() {
          return dn.fn.toast = pn, hn.jQueryInterface;
        };
      }
      return {Alert: V, Button: q, Carousel: rt, Collapse: ft, Dropdown: Te, Modal: Oe, Popover: $e, ScrollSpy: on, Tab: an, Toast: hn, Tooltip: Qe};
    });
  });
  require_stdin();
})();
