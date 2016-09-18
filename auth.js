(function (p, t, y) {
    p.guardFatal(function () {
        p.when("jQuery").register("jQuery-Cookie", function (f) {
            (function (m) {
                "function" === typeof define && define.amd ? define(["jquery"], m) : m(f)
            })(function (f) {
                function l(d) {
                    return k.raw ? d : decodeURIComponent(d.replace(e, " "))
                }

                function h(d) {
                    0 === d.indexOf('"') && (d = d.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
                    d = l(d);
                    try {
                        return k.json ? JSON.parse(d) : d
                    } catch (c) {
                    }
                }

                var e = /\+/g, k = f.cookie = function (d, c, b) {
                    if (c !== y) {
                        b = f.extend({}, k.defaults, b);
                        if ("number" === typeof b.expires) {
                            var a =
                                b.expires, g = b.expires = new Date;
                            g.setDate(g.getDate() + a)
                        }
                        c = k.json ? JSON.stringify(c) : String(c);
                        return document.cookie = [k.raw ? d : encodeURIComponent(d), "=", k.raw ? c : encodeURIComponent(c), b.expires ? "; expires=" + b.expires.toUTCString() : "", b.path ? "; path=" + b.path : "", b.domain ? "; domain=" + b.domain : "", b.secure ? "; secure" : ""].join("")
                    }
                    c = document.cookie.split("; ");
                    b = d ? y : {};
                    a = 0;
                    for (g = c.length; a < g; a++) {
                        var e = c[a].split("="), r = l(e.shift()), e = e.join("=");
                        if (d && d === r) {
                            b = h(e);
                            break
                        }
                        d || (b[r] = h(e))
                    }
                    return b
                };
                k.defaults =
                {};
                f.removeCookie = function (d, c) {
                    return f.cookie(d) !== y ? (f.cookie(d, "", f.extend({}, c, {expires: -1})), !0) : !1
                }
            })
        })
    })()
})(function () {
    var p = window.AmazonUIPageJS || window.P, t = p._namespace || p.attributeErrors;
    return t ? t("JQuery_Cookie_AUIBuild") : p
}(), window);
(function (p, t, y) {
    p.guardFatal(function () {
        p.when("jQuery").register("jQueryUI-widget", function (f) {
            (function (f, l) {
                var h = 0, e = Array.prototype.slice, k = f.cleanData;
                f.cleanData = function (d) {
                    for (var c = 0, b; null != (b = d[c]); c++)try {
                        f(b).triggerHandler("remove")
                    } catch (a) {
                    }
                    k(d)
                };
                f.widget = function (d, c, b) {
                    var a, g, e, k, h = {}, l = d.split(".")[0];
                    d = d.split(".")[1];
                    a = l + "-" + d;
                    b || (b = c, c = f.Widget);
                    f.expr[":"][a.toLowerCase()] = function (b) {
                        return !!f.data(b, a)
                    };
                    f[l] = f[l] || {};
                    g = f[l][d];
                    e = f[l][d] = function (a, b) {
                        if (!this._createWidget)return new e(a,
                            b);
                        arguments.length && this._createWidget(a, b)
                    };
                    f.extend(e, g, {version: b.version, _proto: f.extend({}, b), _childConstructors: []});
                    k = new c;
                    k.options = f.widget.extend({}, k.options);
                    f.each(b, function (a, b) {
                        f.isFunction(b) ? h[a] = function () {
                            var g = function () {
                                return c.prototype[a].apply(this, arguments)
                            }, d = function (b) {
                                return c.prototype[a].apply(this, b)
                            };
                            return function () {
                                var a = this._super, c = this._superApply, e;
                                this._super = g;
                                this._superApply = d;
                                e = b.apply(this, arguments);
                                this._super = a;
                                this._superApply = c;
                                return e
                            }
                        }() :
                            h[a] = b
                    });
                    e.prototype = f.widget.extend(k, {widgetEventPrefix: g ? k.widgetEventPrefix : d}, h, {
                        constructor: e,
                        namespace: l,
                        widgetName: d,
                        widgetFullName: a
                    });
                    g ? (f.each(g._childConstructors, function (a, b) {
                        var g = b.prototype;
                        f.widget(g.namespace + "." + g.widgetName, e, b._proto)
                    }), delete g._childConstructors) : c._childConstructors.push(e);
                    f.widget.bridge(d, e)
                };
                f.widget.extend = function (d) {
                    for (var c = e.call(arguments, 1), b = 0, a = c.length, g, k; b < a; b++)for (g in c[b])k = c[b][g], c[b].hasOwnProperty(g) && k !== l && (f.isPlainObject(k) ? d[g] =
                        f.isPlainObject(d[g]) ? f.widget.extend({}, d[g], k) : f.widget.extend({}, k) : d[g] = k);
                    return d
                };
                f.widget.bridge = function (d, c) {
                    var b = c.prototype.widgetFullName || d;
                    f.fn[d] = function (a) {
                        var g = "string" === typeof a, k = e.call(arguments, 1), h = this;
                        a = !g && k.length ? f.widget.extend.apply(null, [a].concat(k)) : a;
                        g ? this.each(function () {
                            var g, c = f.data(this, b);
                            if (!c)return f.error("cannot call methods on " + d + " prior to initialization; attempted to call method '" + a + "'");
                            if (!f.isFunction(c[a]) || "_" === a.charAt(0))return f.error("no such method '" +
                                a + "' for " + d + " widget instance");
                            g = c[a].apply(c, k);
                            if (g !== c && g !== l)return h = g && g.jquery ? h.pushStack(g.get()) : g, !1
                        }) : this.each(function () {
                            var g = f.data(this, b);
                            g ? g.option(a || {})._init() : f.data(this, b, new c(a, this))
                        });
                        return h
                    }
                };
                f.Widget = function () {
                };
                f.Widget._childConstructors = [];
                f.Widget.prototype = {
                    widgetName: "widget",
                    widgetEventPrefix: "",
                    defaultElement: "<div>",
                    options: {disabled: !1, create: null},
                    _createWidget: function (d, c) {
                        c = f(c || this.defaultElement || this)[0];
                        this.element = f(c);
                        this.uuid = h++;
                        this.eventNamespace =
                            "." + this.widgetName + this.uuid;
                        this.options = f.widget.extend({}, this.options, this._getCreateOptions(), d);
                        this.bindings = f();
                        this.hoverable = f();
                        this.focusable = f();
                        c !== this && (f.data(c, this.widgetFullName, this), this._on(!0, this.element, {
                            remove: function (b) {
                                b.target === c && this.destroy()
                            }
                        }), this.document = f(c.style ? c.ownerDocument : c.document || c), this.window = f(this.document[0].defaultView || this.document[0].parentWindow));
                        this._create();
                        this._trigger("create", null, this._getCreateEventData());
                        this._init()
                    },
                    _getCreateOptions: f.noop,
                    _getCreateEventData: f.noop,
                    _create: f.noop,
                    _init: f.noop,
                    destroy: function () {
                        this._destroy();
                        this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(f.camelCase(this.widgetFullName));
                        this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
                        this.bindings.unbind(this.eventNamespace);
                        this.hoverable.removeClass("ui-state-hover");
                        this.focusable.removeClass("ui-state-focus")
                    },
                    _destroy: f.noop,
                    widget: function () {
                        return this.element
                    },
                    option: function (d, c) {
                        var b = d, a, g, e;
                        if (0 === arguments.length)return f.widget.extend({}, this.options);
                        if ("string" === typeof d)if (b = {}, a = d.split("."), d = a.shift(), a.length) {
                            g = b[d] = f.widget.extend({}, this.options[d]);
                            for (e = 0; e < a.length - 1; e++)g[a[e]] = g[a[e]] || {}, g = g[a[e]];
                            d = a.pop();
                            if (c === l)return g[d] === l ? null : g[d];
                            g[d] = c
                        } else {
                            if (c === l)return this.options[d] === l ? null : this.options[d];
                            b[d] = c
                        }
                        this._setOptions(b);
                        return this
                    },
                    _setOptions: function (d) {
                        for (var c in d)this._setOption(c,
                            d[c]);
                        return this
                    },
                    _setOption: function (d, c) {
                        this.options[d] = c;
                        "disabled" === d && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!c).attr("aria-disabled", c), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"));
                        return this
                    },
                    enable: function () {
                        return this._setOption("disabled", !1)
                    },
                    disable: function () {
                        return this._setOption("disabled", !0)
                    },
                    _on: function (d, c, b) {
                        var a, g = this;
                        "boolean" !== typeof d && (b = c, c = d, d = !1);
                        b ? (c = a = f(c), this.bindings = this.bindings.add(c)) :
                            (b = c, c = this.element, a = this.widget());
                        f.each(b, function (b, e) {
                            function k() {
                                if (d || !0 !== g.options.disabled && !f(this).hasClass("ui-state-disabled"))return ("string" === typeof e ? g[e] : e).apply(g, arguments)
                            }

                            "string" !== typeof e && (k.guid = e.guid = e.guid || k.guid || f.guid++);
                            var h = b.match(/^(\w+)\s*(.*)$/), l = h[1] + g.eventNamespace;
                            (h = h[2]) ? a.delegate(h, l, k) : c.bind(l, k)
                        })
                    },
                    _off: function (d, c) {
                        c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
                        d.unbind(c).undelegate(c)
                    },
                    _delay: function (d, c) {
                        var b =
                            this;
                        return setTimeout(function () {
                            return ("string" === typeof d ? b[d] : d).apply(b, arguments)
                        }, c || 0)
                    },
                    _hoverable: function (d) {
                        this.hoverable = this.hoverable.add(d);
                        this._on(d, {
                            mouseenter: function (c) {
                                f(c.currentTarget).addClass("ui-state-hover")
                            }, mouseleave: function (c) {
                                f(c.currentTarget).removeClass("ui-state-hover")
                            }
                        })
                    },
                    _focusable: function (d) {
                        this.focusable = this.focusable.add(d);
                        this._on(d, {
                            focusin: function (c) {
                                f(c.currentTarget).addClass("ui-state-focus")
                            }, focusout: function (c) {
                                f(c.currentTarget).removeClass("ui-state-focus")
                            }
                        })
                    },
                    _trigger: function (d, c, b) {
                        var a, g = this.options[d];
                        b = b || {};
                        c = f.Event(c);
                        c.type = (d === this.widgetEventPrefix ? d : this.widgetEventPrefix + d).toLowerCase();
                        c.target = this.element[0];
                        if (d = c.originalEvent)for (a in d)a in c || (c[a] = d[a]);
                        this.element.trigger(c, b);
                        return !(f.isFunction(g) && !1 === g.apply(this.element[0], [c].concat(b)) || c.isDefaultPrevented())
                    }
                };
                f.each({show: "fadeIn", hide: "fadeOut"}, function (d, c) {
                    f.Widget.prototype["_" + d] = function (b, a, g) {
                        "string" === typeof a && (a = {effect: a});
                        var e, k = a ? !0 === a || "number" === typeof a ? c : a.effect || c : d;
                        a = a || {};
                        "number" === typeof a && (a = {duration: a});
                        e = !f.isEmptyObject(a);
                        a.complete = g;
                        a.delay && b.delay(a.delay);
                        if (e && f.effects && f.effects.effect[k])b[d](a); else if (k !== d && b[k])b[k](a.duration, a.easing, g); else b.queue(function (a) {
                            f(this)[d]();
                            g && g.call(b[0]);
                            a()
                        })
                    }
                })
            })(f);
            return f
        })
    })()
})(function () {
    var p = window.AmazonUIPageJS || window.P, t = p._namespace || p.attributeErrors;
    return t ? t("JQueryUI_Widget_AUIBuild") : p
}(), window);
(function (p, t, y) {
    p.guardFatal(function () {
        p.when("jQuery").register("jQueryUI-position", function (f) {
            (function (f, l) {
                function h(a, b, g) {
                    return [parseFloat(a[0]) * (x.test(a[0]) ? b / 100 : 1), parseFloat(a[1]) * (x.test(a[1]) ? g / 100 : 1)]
                }

                function e(a) {
                    var b = a[0];
                    return 9 === b.nodeType ? {
                        width: a.width(),
                        height: a.height(),
                        offset: {top: 0, left: 0}
                    } : f.isWindow(b) ? {
                        width: a.width(),
                        height: a.height(),
                        offset: {top: a.scrollTop(), left: a.scrollLeft()}
                    } : b.preventDefault ? {width: 0, height: 0, offset: {top: b.pageY, left: b.pageX}} : {
                        width: a.outerWidth(),
                        height: a.outerHeight(), offset: a.offset()
                    }
                }

                f.ui = f.ui || {};
                var k, d = Math.max, c = Math.abs, b = Math.round, a = /left|center|right/, g = /top|center|bottom/, q = /[\+\-]\d+(\.[\d]+)?%?/, r = /^\w+/, x = /%$/, w = f.fn.position;
                f.position = {
                    scrollbarWidth: function () {
                        if (k !== l)return k;
                        var a, b, g = f("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>");
                        b = g.children()[0];
                        f("body").append(g);
                        a = b.offsetWidth;
                        g.css("overflow", "scroll");
                        b = b.offsetWidth;
                        a === b && (b = g[0].clientWidth);
                        g.remove();
                        return k = a - b
                    }, getScrollInfo: function (a) {
                        var b = a.isWindow ? "" : a.element.css("overflow-x"), g = a.isWindow ? "" : a.element.css("overflow-y"), b = "scroll" === b || "auto" === b && a.width < a.element[0].scrollWidth;
                        return {
                            width: "scroll" === g || "auto" === g && a.height < a.element[0].scrollHeight ? f.position.scrollbarWidth() : 0,
                            height: b ? f.position.scrollbarWidth() : 0
                        }
                    }, getWithinInfo: function (a) {
                        a = f(a || t);
                        var b = f.isWindow(a[0]);
                        return {
                            element: a,
                            isWindow: b,
                            offset: a.offset() || {left: 0, top: 0},
                            scrollLeft: a.scrollLeft(),
                            scrollTop: a.scrollTop(),
                            width: b ? a.width() : a.outerWidth(),
                            height: b ? a.height() : a.outerHeight()
                        }
                    }
                };
                f.fn.position = function (k) {
                    if (!k || !k.of)return w.apply(this, arguments);
                    k = f.extend({}, k);
                    var l, x, z, C, E, D, p = f(k.of), F = f.position.getWithinInfo(k.within), t = f.position.getScrollInfo(F), y = (k.collision || "flip").split(" "), K = {};
                    D = e(p);
                    p[0].preventDefault && (k.at = "left top");
                    x = D.width;
                    z = D.height;
                    C = D.offset;
                    E = f.extend({}, C);
                    f.each(["my", "at"], function () {
                        var b = (k[this] || "").split(" "), c, d;
                        1 === b.length && (b = a.test(b[0]) ? b.concat(["center"]) :
                            g.test(b[0]) ? ["center"].concat(b) : ["center", "center"]);
                        b[0] = a.test(b[0]) ? b[0] : "center";
                        b[1] = g.test(b[1]) ? b[1] : "center";
                        c = q.exec(b[0]);
                        d = q.exec(b[1]);
                        K[this] = [c ? c[0] : 0, d ? d[0] : 0];
                        k[this] = [r.exec(b[0])[0], r.exec(b[1])[0]]
                    });
                    1 === y.length && (y[1] = y[0]);
                    "right" === k.at[0] ? E.left += x : "center" === k.at[0] && (E.left += x / 2);
                    "bottom" === k.at[1] ? E.top += z : "center" === k.at[1] && (E.top += z / 2);
                    l = h(K.at, x, z);
                    E.left += l[0];
                    E.top += l[1];
                    return this.each(function () {
                        var a, g, e = f(this), q = e.outerWidth(), r = e.outerHeight(), w = parseInt(f.css(this,
                                "marginLeft"), 10) || 0, D = parseInt(f.css(this, "marginTop"), 10) || 0, Ra = q + w + (parseInt(f.css(this, "marginRight"), 10) || 0) + t.width, Qa = r + D + (parseInt(f.css(this, "marginBottom"), 10) || 0) + t.height, Q = f.extend({}, E), ea = h(K.my, e.outerWidth(), e.outerHeight());
                        "right" === k.my[0] ? Q.left -= q : "center" === k.my[0] && (Q.left -= q / 2);
                        "bottom" === k.my[1] ? Q.top -= r : "center" === k.my[1] && (Q.top -= r / 2);
                        Q.left += ea[0];
                        Q.top += ea[1];
                        f.support.offsetFractions || (Q.left = b(Q.left), Q.top = b(Q.top));
                        a = {marginLeft: w, marginTop: D};
                        f.each(["left", "top"],
                            function (b, g) {
                                if (f.ui.position[y[b]])f.ui.position[y[b]][g](Q, {
                                    targetWidth: x,
                                    targetHeight: z,
                                    elemWidth: q,
                                    elemHeight: r,
                                    collisionPosition: a,
                                    collisionWidth: Ra,
                                    collisionHeight: Qa,
                                    offset: [l[0] + ea[0], l[1] + ea[1]],
                                    my: k.my,
                                    at: k.at,
                                    within: F,
                                    elem: e
                                })
                            });
                        k.using && (g = function (a) {
                            var b = C.left - Q.left, g = b + x - q, f = C.top - Q.top, h = f + z - r, l = {
                                target: {element: p, left: C.left, top: C.top, width: x, height: z},
                                element: {element: e, left: Q.left, top: Q.top, width: q, height: r},
                                horizontal: 0 > g ? "left" : 0 < b ? "right" : "center",
                                vertical: 0 > h ? "top" : 0 < f ?
                                    "bottom" : "middle"
                            };
                            x < q && c(b + g) < x && (l.horizontal = "center");
                            z < r && c(f + h) < z && (l.vertical = "middle");
                            d(c(b), c(g)) > d(c(f), c(h)) ? l.important = "horizontal" : l.important = "vertical";
                            k.using.call(this, a, l)
                        });
                        e.offset(f.extend(Q, {using: g}))
                    })
                };
                f.ui.position = {
                    fit: {
                        left: function (a, b) {
                            var g = b.within, c = g.isWindow ? g.scrollLeft : g.offset.left, e = g.width, f = a.left - b.collisionPosition.marginLeft, g = c - f, k = f + b.collisionWidth - e - c;
                            b.collisionWidth > e ? 0 < g && 0 >= k ? (c = a.left + g + b.collisionWidth - e - c, a.left += g - c) : a.left = 0 < k && 0 >= g ? c : g > k ?
                            c + e - b.collisionWidth : c : a.left = 0 < g ? a.left + g : 0 < k ? a.left - k : d(a.left - f, a.left)
                        }, top: function (a, b) {
                            var g = b.within, c = g.isWindow ? g.scrollTop : g.offset.top, e = b.within.height, f = a.top - b.collisionPosition.marginTop, g = c - f, k = f + b.collisionHeight - e - c;
                            b.collisionHeight > e ? 0 < g && 0 >= k ? (c = a.top + g + b.collisionHeight - e - c, a.top += g - c) : a.top = 0 < k && 0 >= g ? c : g > k ? c + e - b.collisionHeight : c : a.top = 0 < g ? a.top + g : 0 < k ? a.top - k : d(a.top - f, a.top)
                        }
                    }, flip: {
                        left: function (a, b) {
                            var g = b.within, d = g.offset.left + g.scrollLeft, e = g.width, f = g.isWindow ? g.scrollLeft :
                                g.offset.left, k = a.left - b.collisionPosition.marginLeft, g = k - f, h = k + b.collisionWidth - e - f, k = "left" === b.my[0] ? -b.elemWidth : "right" === b.my[0] ? b.elemWidth : 0, q = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0, l = -2 * b.offset[0];
                            if (0 > g) {
                                if (d = a.left + k + q + l + b.collisionWidth - e - d, 0 > d || d < c(g))a.left += k + q + l
                            } else 0 < h && (d = a.left - b.collisionPosition.marginLeft + k + q + l - f, 0 < d || c(d) < h) && (a.left += k + q + l)
                        }, top: function (a, b) {
                            var g = b.within, d = g.offset.top + g.scrollTop, e = g.height, f = g.isWindow ? g.scrollTop : g.offset.top,
                                k = a.top - b.collisionPosition.marginTop, g = k - f, h = k + b.collisionHeight - e - f, k = "top" === b.my[1] ? -b.elemHeight : "bottom" === b.my[1] ? b.elemHeight : 0, q = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0, l = -2 * b.offset[1];
                            0 > g ? (d = a.top + k + q + l + b.collisionHeight - e - d, a.top + k + q + l > g && (0 > d || d < c(g)) && (a.top += k + q + l)) : 0 < h && (d = a.top - b.collisionPosition.marginTop + k + q + l - f, a.top + k + q + l > h && (0 < d || c(d) < h) && (a.top += k + q + l))
                        }
                    }, flipfit: {
                        left: function () {
                            f.ui.position.flip.left.apply(this, arguments);
                            f.ui.position.fit.left.apply(this,
                                arguments)
                        }, top: function () {
                            f.ui.position.flip.top.apply(this, arguments);
                            f.ui.position.fit.top.apply(this, arguments)
                        }
                    }
                };
                (function () {
                    var a, b, g, c, d = document.getElementsByTagName("body")[0];
                    g = document.createElement("div");
                    a = document.createElement(d ? "div" : "body");
                    b = {visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none"};
                    d && f.extend(b, {position: "absolute", left: "-1000px", top: "-1000px"});
                    for (c in b)a.style[c] = b[c];
                    a.appendChild(g);
                    b = d || document.documentElement;
                    b.insertBefore(a, b.firstChild);
                    g.style.cssText = "position: absolute; left: 10.7432222px;";
                    g = f(g).offset().left;
                    f.support.offsetFractions = 10 < g && 11 > g;
                    a.innerHTML = "";
                    b.removeChild(a)
                })()
            })(f);
            return f
        })
    })()
})(function () {
    var p = window.AmazonUIPageJS || window.P, t = p._namespace || p.attributeErrors;
    return t ? t("JQueryUI_Position_AUIBuild") : p
}(), window);
(function (p, t, y) {
    p.guardFatal(function () {
        p.when("jQuery").register("jQueryUI-core", function (f) {
            (function (f, l) {
                function h(c, b) {
                    var a, g;
                    a = c.nodeName.toLowerCase();
                    if ("area" === a) {
                        a = c.parentNode;
                        g = a.name;
                        if (!c.href || !g || "map" !== a.nodeName.toLowerCase())return !1;
                        a = f("img[usemap=#" + g + "]")[0];
                        return !!a && e(a)
                    }
                    return (/input|select|textarea|button|object/.test(a) ? !c.disabled : "a" === a ? c.href || b : b) && e(c)
                }

                function e(c) {
                    return f.expr.filters.visible(c) && !f(c).parents().addBack().filter(function () {
                            return "hidden" ===
                                f.css(this, "visibility")
                        }).length
                }

                var k = 0, d = /^ui-id-\d+$/;
                f.ui = f.ui || {};
                f.extend(f.ui, {
                    version: "1.10.3",
                    keyCode: {
                        BACKSPACE: 8,
                        COMMA: 188,
                        DELETE: 46,
                        DOWN: 40,
                        END: 35,
                        ENTER: 13,
                        ESCAPE: 27,
                        HOME: 36,
                        LEFT: 37,
                        NUMPAD_ADD: 107,
                        NUMPAD_DECIMAL: 110,
                        NUMPAD_DIVIDE: 111,
                        NUMPAD_ENTER: 108,
                        NUMPAD_MULTIPLY: 106,
                        NUMPAD_SUBTRACT: 109,
                        PAGE_DOWN: 34,
                        PAGE_UP: 33,
                        PERIOD: 190,
                        RIGHT: 39,
                        SPACE: 32,
                        TAB: 9,
                        UP: 38
                    }
                });
                f.fn.extend({
                    focus: function (c) {
                        return function (b, a) {
                            return "number" === typeof b ? this.each(function () {
                                var g = this;
                                setTimeout(function () {
                                    f(g).focus();
                                    a && a.call(g)
                                }, b)
                            }) : c.apply(this, arguments)
                        }
                    }(f.fn.focus), scrollParent: function () {
                        var c;
                        c = f.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                            return /(relative|absolute|fixed)/.test(f.css(this, "position")) && /(auto|scroll)/.test(f.css(this, "overflow") + f.css(this, "overflow-y") + f.css(this, "overflow-x"))
                        }).eq(0) : this.parents().filter(function () {
                            return /(auto|scroll)/.test(f.css(this, "overflow") + f.css(this, "overflow-y") + f.css(this,
                                    "overflow-x"))
                        }).eq(0);
                        return /fixed/.test(this.css("position")) || !c.length ? f(document) : c
                    }, zIndex: function (c) {
                        if (c !== l)return this.css("zIndex", c);
                        if (this.length) {
                            c = f(this[0]);
                            for (var b; c.length && c[0] !== document;) {
                                b = c.css("position");
                                if ("absolute" === b || "relative" === b || "fixed" === b)if (b = parseInt(c.css("zIndex"), 10), !isNaN(b) && 0 !== b)return b;
                                c = c.parent()
                            }
                        }
                        return 0
                    }, uniqueId: function () {
                        return this.each(function () {
                            this.id || (this.id = "ui-id-" + ++k)
                        })
                    }, removeUniqueId: function () {
                        return this.each(function () {
                            d.test(this.id) &&
                            f(this).removeAttr("id")
                        })
                    }
                });
                f.extend(f.expr[":"], {
                    data: f.expr.createPseudo ? f.expr.createPseudo(function (c) {
                        return function (b) {
                            return !!f.data(b, c)
                        }
                    }) : function (c, b, a) {
                        return !!f.data(c, a[3])
                    }, focusable: function (c) {
                        return h(c, !isNaN(f.attr(c, "tabindex")))
                    }, tabbable: function (c) {
                        var b = f.attr(c, "tabindex"), a = isNaN(b);
                        return (a || 0 <= b) && h(c, !a)
                    }
                });
                f("<a>").outerWidth(1).jquery || f.each(["Width", "Height"], function (c, b) {
                    function a(a, b, c, d) {
                        f.each(g, function () {
                            b -= parseFloat(f.css(a, "padding" + this)) || 0;
                            c && (b -=
                                parseFloat(f.css(a, "border" + this + "Width")) || 0);
                            d && (b -= parseFloat(f.css(a, "margin" + this)) || 0)
                        });
                        return b
                    }

                    var g = "Width" === b ? ["Left", "Right"] : ["Top", "Bottom"], d = b.toLowerCase(), e = {
                        innerWidth: f.fn.innerWidth,
                        innerHeight: f.fn.innerHeight,
                        outerWidth: f.fn.outerWidth,
                        outerHeight: f.fn.outerHeight
                    };
                    f.fn["inner" + b] = function (g) {
                        return g === l ? e["inner" + b].call(this) : this.each(function () {
                            f(this).css(d, a(this, g) + "px")
                        })
                    };
                    f.fn["outer" + b] = function (g, c) {
                        return "number" !== typeof g ? e["outer" + b].call(this, g) : this.each(function () {
                            f(this).css(d,
                                a(this, g, !0, c) + "px")
                        })
                    }
                });
                f.fn.addBack || (f.fn.addBack = function (c) {
                    return this.add(null == c ? this.prevObject : this.prevObject.filter(c))
                });
                f("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (f.fn.removeData = function (c) {
                    return function (b) {
                        return arguments.length ? c.call(this, f.camelCase(b)) : c.call(this)
                    }
                }(f.fn.removeData));
                f.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
                f.support.selectstart = "onselectstart" in document.createElement("div");
                f.fn.extend({
                    disableSelection: function () {
                        return this.bind((f.support.selectstart ?
                                "selectstart" : "mousedown") + ".ui-disableSelection", function (c) {
                            c.preventDefault()
                        })
                    }, enableSelection: function () {
                        return this.unbind(".ui-disableSelection")
                    }
                });
                f.extend(f.ui, {
                    plugin: {
                        add: function (c, b, a) {
                            var g;
                            c = f.ui[c].prototype;
                            for (g in a)c.plugins[g] = c.plugins[g] || [], c.plugins[g].push([b, a[g]])
                        }, call: function (c, b, a) {
                            var g = c.plugins[b];
                            if (g && c.element[0].parentNode && 11 !== c.element[0].parentNode.nodeType)for (b = 0; b < g.length; b++)c.options[g[b][0]] && g[b][1].apply(c.element, a)
                        }
                    }, hasScroll: function (c, b) {
                        if ("hidden" ===
                            f(c).css("overflow"))return !1;
                        var a = b && "left" === b ? "scrollLeft" : "scrollTop", g = !1;
                        if (0 < c[a])return !0;
                        c[a] = 1;
                        g = 0 < c[a];
                        c[a] = 0;
                        return g
                    }
                })
            })(f);
            return f
        })
    })()
})(function () {
    var p = window.AmazonUIPageJS || window.P, t = p._namespace || p.attributeErrors;
    return t ? t("JQueryUI_Core_AUIBuild") : p
}(), window);
(function (p, t, y) {
    p.guardFatal(function () {
        p.when("jQueryUI-core", "jQueryUI-position", "jQueryUI-widget").register("jQueryUI-menu", function (f) {
            (function (f, l) {
                f.widget("ui.menu", {
                    version: "1.10.3",
                    defaultElement: "<ul>",
                    delay: 300,
                    options: {
                        icons: {submenu: "ui-icon-carat-1-e"},
                        menus: "ul",
                        position: {my: "left top", at: "right top"},
                        role: "menu",
                        blur: null,
                        focus: null,
                        select: null
                    },
                    _create: function () {
                        this.activeMenu = this.element;
                        this.mouseHandled = !1;
                        this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",
                            !!this.element.find(".ui-icon").length).attr({
                            role: this.options.role,
                            tabIndex: 0
                        }).bind("click" + this.eventNamespace, f.proxy(function (f) {
                            this.options.disabled && f.preventDefault()
                        }, this));
                        this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true");
                        this._on({
                            "mousedown .ui-menu-item > a": function (f) {
                                f.preventDefault()
                            }, "click .ui-state-disabled > a": function (f) {
                                f.preventDefault()
                            }, "click .ui-menu-item:has(a)": function (h) {
                                var e = f(h.target).closest(".ui-menu-item");
                                !this.mouseHandled &&
                                e.not(".ui-state-disabled").length && (this.mouseHandled = !0, this.select(h), e.has(".ui-menu").length ? this.expand(h) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                            }, "mouseenter .ui-menu-item": function (h) {
                                var e = f(h.currentTarget);
                                e.siblings().children(".ui-state-active").removeClass("ui-state-active");
                                this.focus(h, e)
                            }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (f, e) {
                                var k =
                                    this.active || this.element.children(".ui-menu-item").eq(0);
                                e || this.focus(f, k)
                            }, blur: function (h) {
                                this._delay(function () {
                                    f.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(h)
                                })
                            }, keydown: "_keydown"
                        });
                        this.refresh();
                        this._on(this.document, {
                            click: function (h) {
                                f(h.target).closest(".ui-menu").length || this.collapseAll(h);
                                this.mouseHandled = !1
                            }
                        })
                    },
                    _destroy: function () {
                        this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
                        this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
                            var h = f(this);
                            h.data("ui-menu-submenu-carat") && h.remove()
                        });
                        this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
                    },
                    _keydown: function (h) {
                        function e(a) {
                            return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,
                                "\\$&")
                        }

                        var k, d, c, b, a = !0;
                        switch (h.keyCode) {
                            case f.ui.keyCode.PAGE_UP:
                                this.previousPage(h);
                                break;
                            case f.ui.keyCode.PAGE_DOWN:
                                this.nextPage(h);
                                break;
                            case f.ui.keyCode.HOME:
                                this._move("first", "first", h);
                                break;
                            case f.ui.keyCode.END:
                                this._move("last", "last", h);
                                break;
                            case f.ui.keyCode.UP:
                                this.previous(h);
                                break;
                            case f.ui.keyCode.DOWN:
                                this.next(h);
                                break;
                            case f.ui.keyCode.LEFT:
                                this.collapse(h);
                                break;
                            case f.ui.keyCode.RIGHT:
                                this.active && !this.active.is(".ui-state-disabled") && this.expand(h);
                                break;
                            case f.ui.keyCode.ENTER:
                            case f.ui.keyCode.SPACE:
                                this._activate(h);
                                break;
                            case f.ui.keyCode.ESCAPE:
                                this.collapse(h);
                                break;
                            default:
                                a = !1, k = this.previousFilter || "", d = String.fromCharCode(h.keyCode), c = !1, clearTimeout(this.filterTimer), d === k ? c = !0 : d = k + d, b = new RegExp("^" + e(d), "i"), k = this.activeMenu.children(".ui-menu-item").filter(function () {
                                    return b.test(f(this).children("a").text())
                                }), k = c && -1 !== k.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : k, k.length || (d = String.fromCharCode(h.keyCode), b = new RegExp("^" + e(d), "i"), k = this.activeMenu.children(".ui-menu-item").filter(function () {
                                    return b.test(f(this).children("a").text())
                                })),
                                    k.length ? (this.focus(h, k), 1 < k.length ? (this.previousFilter = d, this.filterTimer = this._delay(function () {
                                        delete this.previousFilter
                                    }, 1E3)) : delete this.previousFilter) : delete this.previousFilter
                        }
                        a && h.preventDefault()
                    },
                    _activate: function (f) {
                        this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(f) : this.select(f))
                    },
                    refresh: function () {
                        var h, e = this.options.icons.submenu;
                        h = this.element.find(this.options.menus);
                        h.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                            role: this.options.role,
                            "aria-hidden": "true", "aria-expanded": "false"
                        }).each(function () {
                            var k = f(this), d = k.prev("a"), c = f("<span>").addClass("ui-menu-icon ui-icon " + e).data("ui-menu-submenu-carat", !0);
                            d.attr("aria-haspopup", "true").prepend(c);
                            k.attr("aria-labelledby", d.attr("id"))
                        });
                        h = h.add(this.element);
                        h.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                            tabIndex: -1,
                            role: this._itemRole()
                        });
                        h.children(":not(.ui-menu-item)").each(function () {
                            var e =
                                f(this);
                            /[^\-\u2014\u2013\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider")
                        });
                        h.children(".ui-state-disabled").attr("aria-disabled", "true");
                        this.active && !f.contains(this.element[0], this.active[0]) && this.blur()
                    },
                    _itemRole: function () {
                        return {menu: "menuitem", listbox: "option"}[this.options.role]
                    },
                    _setOption: function (f, e) {
                        "icons" === f && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu);
                        this._super(f, e)
                    },
                    focus: function (f, e) {
                        var k;
                        this.blur(f, f &&
                            "focus" === f.type);
                        this._scrollIntoView(e);
                        this.active = e.first();
                        k = this.active.children("a").addClass("ui-state-focus");
                        this.options.role && this.element.attr("aria-activedescendant", k.attr("id"));
                        this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");
                        f && "keydown" === f.type ? this._close() : this.timer = this._delay(function () {
                            this._close()
                        }, this.delay);
                        k = e.children(".ui-menu");
                        k.length && /^mouse/.test(f.type) && this._startOpening(k);
                        this.activeMenu = e.parent();
                        this._trigger("focus",
                            f, {item: e})
                    },
                    _scrollIntoView: function (h) {
                        var e, k, d;
                        this._hasScroll() && (e = parseFloat(f.css(this.activeMenu[0], "borderTopWidth")) || 0, k = parseFloat(f.css(this.activeMenu[0], "paddingTop")) || 0, e = h.offset().top - this.activeMenu.offset().top - e - k, k = this.activeMenu.scrollTop(), d = this.activeMenu.height(), h = h.height(), 0 > e ? this.activeMenu.scrollTop(k + e) : e + h > d && this.activeMenu.scrollTop(k + e - d + h))
                    },
                    blur: function (f, e) {
                        e || clearTimeout(this.timer);
                        this.active && (this.active.children("a").removeClass("ui-state-focus"),
                            this.active = null, this._trigger("blur", f, {item: this.active}))
                    },
                    _startOpening: function (f) {
                        clearTimeout(this.timer);
                        "true" === f.attr("aria-hidden") && (this.timer = this._delay(function () {
                            this._close();
                            this._open(f)
                        }, this.delay))
                    },
                    _open: function (h) {
                        var e = f.extend({of: this.active}, this.options.position);
                        clearTimeout(this.timer);
                        this.element.find(".ui-menu").not(h.parents(".ui-menu")).hide().attr("aria-hidden", "true");
                        h.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(e)
                    },
                    collapseAll: function (h,
                                           e) {
                        clearTimeout(this.timer);
                        this.timer = this._delay(function () {
                            var k = e ? this.element : f(h && h.target).closest(this.element.find(".ui-menu"));
                            k.length || (k = this.element);
                            this._close(k);
                            this.blur(h);
                            this.activeMenu = k
                        }, this.delay)
                    },
                    _close: function (f) {
                        f || (f = this.active ? this.active.parent() : this.element);
                        f.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
                    },
                    collapse: function (f) {
                        var e = this.active && this.active.parent().closest(".ui-menu-item",
                                this.element);
                        e && e.length && (this._close(), this.focus(f, e))
                    },
                    expand: function (f) {
                        var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
                        e && e.length && (this._open(e.parent()), this._delay(function () {
                            this.focus(f, e)
                        }))
                    },
                    next: function (f) {
                        this._move("next", "first", f)
                    },
                    previous: function (f) {
                        this._move("prev", "last", f)
                    },
                    isFirstItem: function () {
                        return this.active && !this.active.prevAll(".ui-menu-item").length
                    },
                    isLastItem: function () {
                        return this.active && !this.active.nextAll(".ui-menu-item").length
                    },
                    _move: function (f, e, k) {
                        var d;
                        this.active && (d = "first" === f || "last" === f ? this.active["first" === f ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[f + "All"](".ui-menu-item").eq(0));
                        d && d.length && this.active || (d = this.activeMenu.children(".ui-menu-item")[e]());
                        this.focus(k, d)
                    },
                    nextPage: function (h) {
                        var e, k, d;
                        this.active ? this.isLastItem() || (this._hasScroll() ? (k = this.active.offset().top, d = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                            e = f(this);
                            return 0 > e.offset().top - k - d
                        }),
                            this.focus(h, e)) : this.focus(h, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())) : this.next(h)
                    },
                    previousPage: function (h) {
                        var e, k, d;
                        this.active ? this.isFirstItem() || (this._hasScroll() ? (k = this.active.offset().top, d = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                            e = f(this);
                            return 0 < e.offset().top - k + d
                        }), this.focus(h, e)) : this.focus(h, this.activeMenu.children(".ui-menu-item").first())) : this.next(h)
                    },
                    _hasScroll: function () {
                        return this.element.outerHeight() <
                            this.element.prop("scrollHeight")
                    },
                    select: function (h) {
                        this.active = this.active || f(h.target).closest(".ui-menu-item");
                        var e = {item: this.active};
                        this.active.has(".ui-menu").length || this.collapseAll(h, !0);
                        this._trigger("select", h, e)
                    }
                })
            })(f)
        })
    })()
})(function () {
    var p = window.AmazonUIPageJS || window.P, t = p._namespace || p.attributeErrors;
    return t ? t("JQueryUI_Menu_AUIBuild") : p
}(), window);
(function (p, t, y) {
    p.guardFatal(function () {
        p.when("jQueryUI-core", "jQueryUI-position", "jQueryUI-widget", "jQueryUI-menu").register("jQueryUI-autocomplete", function (f) {
            (function (f, l) {
                var h = 0;
                f.widget("ui.autocomplete", {
                    version: "1.10.3",
                    defaultElement: "<input>",
                    options: {
                        appendTo: null,
                        autoFocus: !1,
                        delay: 300,
                        minLength: 1,
                        position: {my: "left top", at: "left bottom", collision: "none"},
                        source: null,
                        change: null,
                        close: null,
                        focus: null,
                        open: null,
                        response: null,
                        search: null,
                        select: null
                    },
                    pending: 0,
                    _create: function () {
                        var e,
                            k, d, c = this.element[0].nodeName.toLowerCase(), b = "textarea" === c, c = "input" === c;
                        this.isMultiLine = b ? !0 : c ? !1 : this.element.prop("isContentEditable");
                        this.valueMethod = this.element[b || c ? "val" : "text"];
                        this.isNewMenu = !0;
                        this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off");
                        this._on(this.element, {
                            keydown: function (a) {
                                if (this.element.prop("readOnly"))k = d = e = !0; else {
                                    k = d = e = !1;
                                    var b = f.ui.keyCode;
                                    switch (a.keyCode) {
                                        case b.PAGE_UP:
                                            e = !0;
                                            this._move("previousPage", a);
                                            break;
                                        case b.PAGE_DOWN:
                                            e = !0;
                                            this._move("nextPage",
                                                a);
                                            break;
                                        case b.UP:
                                            e = !0;
                                            this._keyEvent("previous", a);
                                            break;
                                        case b.DOWN:
                                            e = !0;
                                            this._keyEvent("next", a);
                                            break;
                                        case b.ENTER:
                                        case b.NUMPAD_ENTER:
                                            this.menu.active && (e = !0, a.preventDefault(), this.menu.select(a));
                                            break;
                                        case b.TAB:
                                            this.menu.active && this.menu.select(a);
                                            break;
                                        case b.ESCAPE:
                                            this.menu.element.is(":visible") && (this._value(this.term), this.close(a), a.preventDefault());
                                            break;
                                        default:
                                            k = !0, this._searchTimeout(a)
                                    }
                                }
                            }, keypress: function (a) {
                                if (e)e = !1, this.isMultiLine && !this.menu.element.is(":visible") || a.preventDefault();
                                else if (!k) {
                                    var b = f.ui.keyCode;
                                    switch (a.keyCode) {
                                        case b.PAGE_UP:
                                            this._move("previousPage", a);
                                            break;
                                        case b.PAGE_DOWN:
                                            this._move("nextPage", a);
                                            break;
                                        case b.UP:
                                            this._keyEvent("previous", a);
                                            break;
                                        case b.DOWN:
                                            this._keyEvent("next", a)
                                    }
                                }
                            }, input: function (a) {
                                d ? (d = !1, a.preventDefault()) : this._searchTimeout(a)
                            }, focus: function () {
                                this.selectedItem = null;
                                this.previous = this._value()
                            }, blur: function (a) {
                                this.cancelBlur ? delete this.cancelBlur : (clearTimeout(this.searching), this.close(a), this._change(a))
                            }
                        });
                        this._initSource();
                        this.menu = f("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role: null}).hide().data("ui-menu");
                        this._on(this.menu.element, {
                            mousedown: function (a) {
                                a.preventDefault();
                                this.cancelBlur = !0;
                                this._delay(function () {
                                    delete this.cancelBlur
                                });
                                var b = this.menu.element[0];
                                f(a.target).closest(".ui-menu-item").length || this._delay(function () {
                                    var a = this;
                                    this.document.one("mousedown", function (c) {
                                        c.target === a.element[0] || c.target === b || f.contains(b, c.target) || a.close()
                                    })
                                })
                            }, menufocus: function (a,
                                                    b) {
                                if (this.isNewMenu && (this.isNewMenu = !1, a.originalEvent && /^mouse/.test(a.originalEvent.type))) {
                                    this.menu.blur();
                                    this.document.one("mousemove", function () {
                                        f(a.target).trigger(a.originalEvent)
                                    });
                                    return
                                }
                                var c = b.item.data("ui-autocomplete-item");
                                !1 !== this._trigger("focus", a, {item: c}) ? a.originalEvent && /^key/.test(a.originalEvent.type) && this._value(c.value) : this.liveRegion.text(c.value)
                            }, menuselect: function (a, b) {
                                var c = b.item.data("ui-autocomplete-item"), d = this.previous;
                                this.element[0] !== this.document[0].activeElement &&
                                (this.element.focus(), this.previous = d, this._delay(function () {
                                    this.previous = d;
                                    this.selectedItem = c
                                }));
                                !1 !== this._trigger("select", a, {item: c}) && this._value(c.value);
                                this.term = this._value();
                                this.close(a);
                                this.selectedItem = c
                            }
                        });
                        this.liveRegion = f("<span>", {
                            role: "status",
                            "aria-live": "polite"
                        }).addClass("ui-helper-hidden-accessible").insertBefore(this.element);
                        this._on(this.window, {
                            beforeunload: function () {
                                this.element.removeAttr("autocomplete")
                            }
                        })
                    },
                    _destroy: function () {
                        clearTimeout(this.searching);
                        this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
                        this.menu.element.remove();
                        this.liveRegion.remove()
                    },
                    _setOption: function (e, f) {
                        this._super(e, f);
                        "source" === e && this._initSource();
                        "appendTo" === e && this.menu.element.appendTo(this._appendTo());
                        "disabled" === e && f && this.xhr && this.xhr.abort()
                    },
                    _appendTo: function () {
                        var e = this.options.appendTo;
                        e && (e = e.jquery || e.nodeType ? f(e) : this.document.find(e).eq(0));
                        e || (e = this.element.closest(".ui-front"));
                        e.length || (e = this.document[0].body);
                        return e
                    },
                    _initSource: function () {
                        var e, k, d = this;
                        f.isArray(this.options.source) ?
                            (e = this.options.source, this.source = function (c, b) {
                                b(f.ui.autocomplete.filter(e, c.term))
                            }) : "string" === typeof this.options.source ? (k = this.options.source, this.source = function (c, b) {
                            d.xhr && d.xhr.abort();
                            d.xhr = f.ajax({
                                url: k, data: c, dataType: "json", success: function (a) {
                                    b(a)
                                }, error: function () {
                                    b([])
                                }
                            })
                        }) : this.source = this.options.source
                    },
                    _searchTimeout: function (e) {
                        clearTimeout(this.searching);
                        this.searching = this._delay(function () {
                            this.term !== this._value() && (this.selectedItem = null, this.search(null, e))
                        }, this.options.delay)
                    },
                    search: function (e, f) {
                        e = null != e ? e : this._value();
                        this.term = this._value();
                        if (e.length < this.options.minLength)return this.close(f);
                        if (!1 !== this._trigger("search", f))return this._search(e)
                    },
                    _search: function (e) {
                        this.pending++;
                        this.element.addClass("ui-autocomplete-loading");
                        this.cancelSearch = !1;
                        this.source({term: e}, this._response())
                    },
                    _response: function () {
                        var e = this, f = ++h;
                        return function (d) {
                            f === h && e.__response(d);
                            e.pending--;
                            e.pending || e.element.removeClass("ui-autocomplete-loading")
                        }
                    },
                    __response: function (e) {
                        e &&
                        (e = this._normalize(e));
                        this._trigger("response", null, {content: e});
                        !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
                    },
                    close: function (e) {
                        this.cancelSearch = !0;
                        this._close(e)
                    },
                    _close: function (e) {
                        this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
                    },
                    _change: function (e) {
                        this.previous !== this._value() && this._trigger("change", e, {item: this.selectedItem})
                    },
                    _normalize: function (e) {
                        return e.length &&
                        e[0].label && e[0].value ? e : f.map(e, function (e) {
                            return "string" === typeof e ? {label: e, value: e} : f.extend({
                                label: e.label || e.value,
                                value: e.value || e.label
                            }, e)
                        })
                    },
                    _suggest: function (e) {
                        var k = this.menu.element.empty();
                        this._renderMenu(k, e);
                        this.isNewMenu = !0;
                        this.menu.refresh();
                        k.show();
                        this._resizeMenu();
                        k.position(f.extend({of: this.element}, this.options.position));
                        this.options.autoFocus && this.menu.next()
                    },
                    _resizeMenu: function () {
                        var e = this.menu.element;
                        e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
                    },
                    _renderMenu: function (e, k) {
                        var d = this;
                        f.each(k, function (c, b) {
                            d._renderItemData(e, b)
                        })
                    },
                    _renderItemData: function (e, f) {
                        return this._renderItem(e, f).data("ui-autocomplete-item", f)
                    },
                    _renderItem: function (e, k) {
                        return f("<li>").append(f("<a>").text(k.label)).appendTo(e)
                    },
                    _move: function (e, f) {
                        if (this.menu.element.is(":visible"))if (this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e))this._value(this.term), this.menu.blur(); else this.menu[e](f); else this.search(null, f)
                    },
                    widget: function () {
                        return this.menu.element
                    },
                    _value: function () {
                        return this.valueMethod.apply(this.element, arguments)
                    },
                    _keyEvent: function (e, f) {
                        if (!this.isMultiLine || this.menu.element.is(":visible"))this._move(e, f), f.preventDefault()
                    }
                });
                f.extend(f.ui.autocomplete, {
                    escapeRegex: function (e) {
                        return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                    }, filter: function (e, k) {
                        var d = new RegExp(f.ui.autocomplete.escapeRegex(k), "i");
                        return f.grep(e, function (c) {
                            return d.test(c.label || c.value || c)
                        })
                    }
                });
                f.widget("ui.autocomplete", f.ui.autocomplete, {
                    options: {
                        messages: {
                            noResults: "No search results.",
                            results: function (e) {
                                return e + (1 < e ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                            }
                        }
                    }, __response: function (e) {
                        var f;
                        this._superApply(arguments);
                        this.options.disabled || this.cancelSearch || (f = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.text(f))
                    }
                })
            })(f)
        })
    })()
})(function () {
    var p = window.AmazonUIPageJS || window.P, t = p._namespace || p.attributeErrors;
    return t ? t("JQueryUI_Autocomplete_AUIBuild") : p
}(), window);
(function (p, t, y) {
    p.guardFatal(function () {
        p.register("AmazonHelpPopup", function () {
            return function (f, m, l) {
                t.open(f, m, l).focus();
                return !1
            }
        });
        p.when("A", "ready").execute(function (f) {
            f.$(".auth-autofocus").first().focus()
        });
        p.when("A", "ready").execute(function (f) {
            function m() {
                location.href = h.returnToAddress
            }

            function l() {
                clearTimeout(e);
                e = setTimeout(m, k)
            }

            var h = f.state("timeout-parameters");
            if (h) {
                var e = 0, k = h.timeoutValue;
                document.onmousemove = l;
                document.onkeypress = l;
                document.ontouchstart =
                    l;
                document.ontouchmove = l;
                document.ontouchend = l;
                l()
            }
        });
        p.when("A", "auth-captcha-cf").register("auth-image-captcha", function (f) {
            function m(d) {
                d && d.captchaImageUrl && e.test(d.captchaImageUrl) ? (h("#auth-captcha-image").attr("src", d.captchaImageUrl), h("input[type='hidden'][name='ces']").val(d.cesString)) : (p.log("Failed to load new CAPTCHA due to invalid response from server", "FATAL", "auth-captcha"), t.location.reload(!0))
            }

            function l() {
                h("#auth-captcha-refresh-link").hide();
                h("#auth-captcha-noop-link").show();
                h("#auth-captcha-image").hide();
                h("#auth-captcha-image-container").addClass("a-lazy-loaded");
                var d = h("#auth-captcha-image").attr("data-refresh-url");
                d || p.log("Attempting to instantiate Captcha without a valid refresh url.", "FATAL", "auth-captcha");
                f.ajax(d, k)
            }

            var h = f.$, e = /^(http|https):\/\//, k = {
                cache: !1, timeout: 700, error: function () {
                    p.log("Failed to refresh CAPTCHA due to error response from server", "FATAL", "auth-captcha");
                    t.location.reload(!0)
                }, success: m
            };
            h("#auth-captcha-image").load(function () {
                h("#auth-captcha-noop-link").hide();
                h("#auth-captcha-refresh-link").show();
                h("#auth-captcha-image-container").removeClass("a-lazy-loaded");
                h("#auth-captcha-image").fadeIn()
            });
            h(document).delegate("#auth-captcha-refresh-link", "click", function (d) {
                d.preventDefault();
                l();
                h("#auth-captcha-guess").focus()
            });
            return {handleSuccess: m, refresh: l}
        });
        p.when("A", "auth-image-captcha", "ready").register("auth-audio-captcha-handler", function (f, m) {
            function l() {
                w.val() !== y && "true" === w.val() && 0 !== v.length && (d.play(), d.pause())
            }

            function h(a) {
                a &&
                a.captchaImageUrl && A.test(a.captchaImageUrl) ? (c.val(a.cesString), r.attr("src", a.captchaImageUrl), q.attr("href", a.captchaImageUrl), d.load(), l()) : (p.log("Failed to load new CAPTCHA due to invalid response from server", "FATAL", "auth-audio-captcha-handler"), t.location.reload(!0))
            }

            function e() {
                f.ajax(r.attr("data-refresh-url"), F);
                a.focus()
            }

            var k = f.$, d = k("#audio-captcha")[0], c = k("input[type='hidden'][name='ces']"), b = k("#audio-captcha-section"), a = k("#auth-captcha-guess"), g = k("#image-captcha-section"), q =
                k("#auth-download-captcha-mp3"), r = k("#mp3-file"), x = k("#auth-switch-captcha-to-audio-container"), w = k("#use_audio_captcha"), u = k("#use_image_captcha"), v = k("#auth-error-message-box"), A = /^(http|https):\/\//, z = k(".a-mobile").length, C = k("#audio-captcha-options"), E = k("#image-captcha-options"), D = k("#image-captcha-placeholder"), G = k("#audio-captcha-placeholder"), F = {
                cache: !1, timeout: 700, error: function () {
                    p.log("Failed to refresh CAPTCHA due to error response from server", "FATAL", "auth-audio-captcha-handler");
                    t.location.reload(!0)
                }, success: h
            };
            f.capabilities.audio && x.show();
            l();
            return {
                switchCaptchaToAudio: function () {
                    g.hide();
                    u.val("false");
                    b.show();
                    w.val("true");
                    a.val("");
                    e();
                    z && (E.hide(), C.show(), a.attr("placeholder", G.val()))
                }, switchCaptchaToImage: function () {
                    b.hide();
                    w.val("false");
                    g.show();
                    u.val("true");
                    a.val("");
                    d.pause();
                    m.refresh();
                    a.focus();
                    z && (E.show(), C.hide(), a.attr("placeholder", D.val()))
                }, audioRefresh: e, handleSuccess: h
            }
        });
        p.when("A", "auth-audio-captcha-handler", "ready").register("auth-audio-captcha",
            function (f, m) {
                var l = f.$;
                l("#auth-switch-captcha-to-audio").click(function (f) {
                    f.preventDefault();
                    m.switchCaptchaToAudio()
                });
                l("#auth-switch-captcha-to-image").click(function (f) {
                    f.preventDefault();
                    m.switchCaptchaToImage()
                });
                l("#auth-refresh-audio").click(function (f) {
                    f.preventDefault();
                    m.audioRefresh()
                });
                return {handleSuccess: m.handleSuccess}
            });
        p.when("A", "auth-validate-form-handler", "client-side-counters-util", "ready").register("auth-auto-phone-verification", function (f, m, l) {
            var h = f.$, e =
                h("#ap_register_form"), k = !1;
            h(".auth-support-auto-phone-verification").click(function (d) {
                m.validate(e) && (k ? (l.incrementCounter("ContinueButtonClickedMoreThanOnce"), e.submit()) : (l.incrementCounter("FirstTimeContinueButtonClicked"), d.preventDefault(), k = !0, t.handle_auto_pv = function (c) {
                    e.submit();
                    c && (c = f.parseJSON(c)) && (c = c.result) && ("grant" === c ? l.incrementCounter("CustomerGrantsPermissionToAutoPhoneVerify") : "deny" === c && l.incrementCounter("CustomerDeniesPermissionToAutoPhoneVerify"))
                }, t.embedNotification &&
                t.embedNotification.reqPerm && "function" === typeof t.embedNotification.reqPerm ? (t.embedNotification.reqPerm(JSON.stringify({
                    action: "auto_phone_verification",
                    callback: "handle_auto_pv"
                })), l.incrementCounter("CallMAPForAutoPVSuccess")) : (l.incrementCounter("CallMAPForAutoPVFailure"), e.submit())))
            })
        });
        p.when("A").register("auth-cookie", function (f) {
            function m(e, k, d) {
                if (e) {
                    var c = "";
                    f.isFiniteNumber(d) && (0 > d ? c = "; expires=Thu, 01 Jan 1970 00:00:00 GMT" : (c = new Date, c.setDate(c.getDate() + d), c = "; expires=" +
                        c.toGMTString()));
                    document.cookie = e + "=" + t.encodeURIComponent(k) + c;
                    return !0
                }
                return !1
            }

            function l(e) {
                if (0 < document.cookie.length && e) {
                    var f = document.cookie.indexOf(e + "=");
                    if (-1 < f)return f = f + e.length + 1, e = document.cookie.indexOf(";", f), -1 === e && (e = document.cookie.length), t.decodeURIComponent(document.cookie.substring(f, e))
                }
                return ""
            }

            function h(e) {
                m(e, "", -1)
            }

            return {
                setCookie: m, getCookieValue: l, deleteCookie: h, checkCookieEnabled: function (e) {
                    m("amznTest", "1");
                    var f = l("amznTest");
                    f ? h("amznTest") : e && (e = document.getElementById(e)) &&
                    (e.style.display = "block");
                    return !!f
                }
            }
        });
        p.when("A", "ready").register("auth-pv-resend-utility", function (f) {
            return {
                successHandler: function (f, l) {
                    f.show();
                    l.show()
                }, errorHandler: function (f, l, h, e, k) {
                    403 === f.http.status ? t.location = l.sessionTimeoutUrl : (0 <= (f.http.response || "").search("Throttled") ? h.show() : e.show(), k.show())
                }, hideMessageBox: function (f, l, h, e, k) {
                    f.hide();
                    l.hide();
                    h.hide();
                    e.hide();
                    k.hide()
                }
            }
        });
        p.when("A", "auth-pv-resend-utility", "ready").register("auth-pv-resend", function (f, m) {
            var l =
                f.state("auth-pv-page-state");
            if (l) {
                var h = f.$, e = h("#auth-pv-client-side-success-box"), k = h(".auth-pv-client-side-success-messages li"), d = h("#auth-pv-client-side-error-box"), c = h(".auth-pv-client-side-error-messages li"), b = h(".auth-server-side-message-box"), a = h("#auth-resend-code-succeeded"), g = h("#auth-there-was-an-error-throttled"), q = h("#auth-there-was-an-error"), r = function () {
                    m.successHandler(a, e)
                }, x = function (a) {
                    m.errorHandler(a, l, g, q, d)
                };
                h("#auth-resend-code-link").click(function (a) {
                    m.hideMessageBox(e,
                        k, d, c, b);
                    f.ajax(l.resendUrl, {method: "post", success: r, error: x})
                });
                return {successHandler: r, errorHandler: x}
            }
        });
        p.when("A").register("auto-verification-timeout", function (f) {
            var m = f.$, l = m("#auth-auto-verification-failed");
            l.length && f.delay(function () {
                l[0].click()
            }, 3E4)
        });
        p.when("A", "AmazonHelpPopup", "ready").execute(function (f, m) {
            f.$("#auth-amazon-help-link").click(function () {
                return m(this.href, "AmazonHelp", "width=700,height=800,resizable=1,scrollbars=1,toolbar=1,status=1")
            })
        });
        p.when("A").execute(function (f) {
            f.declarative("auth-popup",
                "click", function (f) {
                    var l = f.data;
                    f = f.$target.closest("a")[0];
                    (l = t.open(f.href, f.target, l.windowOptions)) && l.focus()
                })
        });
        p.when("auth-cookie", "ready").execute(function (f) {
            f.checkCookieEnabled("auth-cookie-warning-message")
        });
        p.when("A", "ready").register("AuthToolkit", function (f) {
            function m(f) {
                "undefined" !== typeof e(f) && e(f).hasClass("a-button-disabled") && (e(f).removeClass("a-button-disabled"), h(f).attr("disabled", !1))
            }

            function l(k, d) {
                var c = h(k), b = c.data("remaining"), a = c.data("unit");
                0 === b ? (m(k), e(k).find(".a-button-text").text(d),
                    f.trigger("AuthToolkit.countDownEnd", k)) : 0 < b && (c.data("remaining", b - 1), e(k).find(".a-button-text").text(a.replace(/%d/, b)), f.delay(function () {
                    l(k, d)
                }, 1E3))
            }

            function h(f) {
                var d = e(f).find("button");
                return 0 < d.length ? d : e(f).find("input")
            }

            var e = f.$;
            return {
                disableButton: function (f) {
                    "undefined" === typeof e(f) || e(f).hasClass("a-button-disabled") || (e(f).addClass("a-button-disabled"), h(f).attr("disabled", "disabled"))
                }, enableButton: m, countingDown: function (f) {
                    if ("undefined" !== typeof e(f)) {
                        var d = e(f).find(".a-button-text").text();
                        0 <= h(f).data("remaining") && l(f, d)
                    }
                }
            }
        });
        p.when("A", "ready").execute(function (f) {
            var m = f.$("#auth-external-javascript").data("external-javascripts");
            m && m.length && f.each(m, function (f) {
                p.load.js(f)
            })
        });
        p.when("A", "a-modal", "auth-validate-form-handler", "ready").register("auth-phone-verification-modal", function (f, m, l) {
            function h() {
                var b = c.val();
                q.text(b);
                var e = d.find("option:selected"), b = e.data("calling-code"), e = e.data("country-code");
                a.text(b);
                g.text(e)
            }

            var e = f.$, k = f.state("auth-phone-verification-modal");
            if (k) {
                var d = e("#auth-country-picker"), c = e("#ap_phone_number"), b = e("#" + k.formIdToBindTo), a = e("#auth-verify-mobile-calling-code"), g = e("#auth-verify-mobile-country-code"), q = e("#auth-verify-mobile-national-number");
                f.on("a:popover:beforeShow:verifyContinueModal", h);
                e(".auth-requires-verify-modal").click(function (a) {
                    a.preventDefault();
                    l.validate(b) && (a = e("#auth-verify-modal-action"), (a = m.get(a)) && c.is(":enabled") ? a.show() : b.submit())
                });
                f.declarative("auth-verify-modal-complete", "click", function () {
                    b.submit()
                });
                return {updateVerificationModalContents: h}
            }
        });
        p.when("A", "a-form-controls-api", "ready").register("auth-signup", function (f, m) {
            var l = f.$;
            l("#ap_use_mobile, #ap_use_email").click(function (f) {
                l(".ap_email_fields,.ap_mobile_number_fields").toggle();
                l("#auth-country-picker, #ap_email, #ap_phone_number").prop("disabled", function (e, f) {
                    return !f
                });
                l("#auth-country-picker-container").toggleClass("a-button-disabled");
                l("#ap_email, #ap_phone_number").toggleClass("a-form-disabled");
                return !1
            })
        });
        p.when("A", "ap-form-validation-weblab", "client-side-counters-util", "page-util", "ready").register("auth-validate-form-common", function (f, m, l, h) {
            function e(a) {
                return a.data("validation-id") || a.parent().data("validation-id") || a[0].name
            }

            function k(a) {
                var b = a.closest(".a-input-text-wrapper");
                0 < b.length ? b.addClass("a-form-error") : a.addClass("a-form-error")
            }

            function d(a) {
                var b = a.closest(".a-input-text-wrapper");
                0 < b.length ? b.removeClass("a-form-error") : a.removeClass("a-form-error")
            }

            var c = f.$, b = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                a = /^ *\+|[a-zA-Z]/, g = /[a-zA-Z]/, q = {
                    "auth-required-field": "-missing-alert",
                    "auth-require-email-validaton": "-invalid-email-alert",
                    "auth-require-phone-validation": "-invalid-phone-alert",
                    "auth-require-claim-validation": "-invalid-claim-alert",
                    "auth-require-password-validation": "-invalid-password-alert",
                    "auth-require-fields-match": "-mismatch-alert"
                };
            return {
                isMatchingFields: function (a) {
                    var b = a.eq(0);
                    a = a.eq(1);
                    b = b.val().trim();
                    a = a.val().trim();
                    return b === a
                }, isValidEmailField: function (a) {
                    a = a.val();
                    return b.test(a.trim())
                },
                isValidPhoneNumberField: function (b) {
                    b = b.val();
                    return !a.test(b.trim())
                }, isValidClaimField: function (a) {
                    a = a.val();
                    return b.test(a.trim()) || !g.test(a.trim())
                }, isValidPasswordField: function (a) {
                    return 6 <= a.val().length
                }, isNonEmptyField: function (a) {
                    return !!a.val()
                }, isNonBlankField: function (a) {
                    return !!a.val().trim()
                }, displayErrorMessage: function (a, b) {
                    var g = e(a), g = c("#auth-" + g + b);
                    k(a);
                    g.show()
                }, hideErrorMessage: function (a, b) {
                    var g = e(a), g = c("#auth-" + g + b);
                    d(a);
                    g.hide()
                }, isErrorVisible: function (a, b) {
                    var g = e(a);
                    return c("#auth-" + g + q[b]).is(":visible")
                }, getValidationId: e, addErrorClass: k, removeErrorClass: d, determineDeviceType: function () {
                    return h.isMobile() ? "OnMobile" : "OnDesktop"
                }, getErrorAlertExtension: function (a) {
                    return q[a]
                }, getSelectorForInputsOfErrorTypeClass: function (a) {
                    if (a)return a += ":visible", "input:enabled." + a + ", ." + a + " input:enabled"
                }
            }
        });
        p.when("A", "ap-form-validation-weblab", "auth-validate-form-common", "client-side-counters-util", "page-util", "ready").register("auth-validate-form-handler",
            function (f, m, l, h, e) {
                function k(a, b, g, c) {
                    var d = l.getValidationId(b);
                    d && (A || (A = {}), A[d] || (A[d] = []), A[d].push({
                        $field: b,
                        type: g,
                        extension: c
                    }), c && h.incrementCounter(e.getFormName(a) + e.toCamelCase(d + c) + l.determineDeviceType()))
                }

                function d(a) {
                    a.find(".auth-require-fields-match-group").each(function () {
                        var b = w(this).find(l.getSelectorForInputsOfErrorTypeClass("auth-require-fields-match"));
                        1 < b.length && r(b.eq(0)) && r(b.eq(1)) && !l.isMatchingFields(b) && (k(a, b.eq(0), "Check Mismatch", "-mismatch-alert"), k(a, b.eq(1),
                            "Check Mismatch"))
                    })
                }

                function c(a) {
                    a.find(l.getSelectorForInputsOfErrorTypeClass("auth-require-email-validaton")).each(function () {
                        var b = w(this);
                        l.isNonBlankField(b) && !l.isValidEmailField(b) && k(a, b, "Invalid Email", "-invalid-email-alert")
                    })
                }

                function b(a) {
                    a.find(l.getSelectorForInputsOfErrorTypeClass("auth-require-claim-validation")).each(function () {
                        var b = w(this);
                        l.isNonBlankField(b) && !l.isValidClaimField(b) && k(a, b, "Invalid Claim", "-invalid-claim-alert")
                    })
                }

                function a(a) {
                    a.find(l.getSelectorForInputsOfErrorTypeClass("auth-require-phone-validation")).each(function () {
                        var b =
                            w(this);
                        l.isNonBlankField(b) && !l.isValidPhoneNumberField(b) && k(a, b, "Invalid Phone", "-invalid-phone-alert")
                    })
                }

                function g(a) {
                    a.find(l.getSelectorForInputsOfErrorTypeClass("auth-require-password-validation")).each(function () {
                        var b = w(this);
                        l.isNonEmptyField(b) && !l.isValidPasswordField(b) && k(a, b, "Invalid Password", "-invalid-password-alert")
                    })
                }

                function q(a) {
                    a.find(l.getSelectorForInputsOfErrorTypeClass("auth-required-field")).each(function () {
                        var b = w(this), g = this.name;
                        r(b) || u.test(g) && A && A[g.split("Check")[0]] ||
                        k(a, b, "Missing Required", "-missing-alert")
                    })
                }

                function r(a) {
                    return "password" === a.attr("type") ? l.isNonEmptyField(a) : l.isNonBlankField(a)
                }

                function x(a) {
                    var b = w("#auth-alert-window");
                    a.find(".a-form-error").removeClass("a-form-error");
                    w(".auth-error-messages li, .auth-inlined-error-message, .auth-server-side-message-box").hide();
                    A ? (f.each(A, function (a, b) {
                        f.each(a, function (a) {
                            var g = a.extension;
                            l.addErrorClass(a.$field);
                            g && (a = "#auth-" + b + g, g = w(a + v), g.length ? g.show() : w(a).show())
                        })
                    }), w("#message-box-slot").hide(),
                        b.show(), a.find(".a-form-error").first().focus()) : b.hide()
                }

                var w = f.$, u = /Check$/g, v = "", A;
                return {
                    validate: function (f) {
                        f = f && f.jquery ? f : w(f);
                        if (f.length && f.is("form")) {
                            v = f.hasClass("ap_ango_phone") ? "-ango-phone" : f.hasClass("ap_ango_email") ? "-ango-email" : "";
                            q(f);
                            m.shouldValidateClaim && b(f);
                            c(f);
                            a(f);
                            m.shouldValidatePassword && g(f);
                            d(f);
                            A && h.incrementCounter(e.getFormName(f) + "PreventedServerRoundTrips" + l.determineDeviceType());
                            x(f);
                            var k = !A;
                            f.data("auth-validation-errors", A);
                            A = void 0;
                            return k
                        }
                    }, getErrors: function (a) {
                        return (a.jquery ?
                            a : w(a)).data("auth-validation-errors")
                    }
                }
            });
        p.when("A", "auth-validate-form-handler", "ready").register("auth-validate-form-moa", function (f, m) {
            var l = f.$;
            l(document.body).delegate(".auth-validate-form-moa", "submit", function (f) {
                m.validate(this) || f.preventDefault()
            })
        });
        p.when("A", "auth-validate-form-handler", "auth-validate-form-common", "client-side-counters-util", "page-util", "ready").register("auth-validate-form", function (f, m, l, h, e) {
            f = f.$;
            f(document.body).delegate(".auth-validate-form", "submit",
                function (f) {
                    h.incrementCounter(e.getFormName(this) + "Submit" + l.determineDeviceType());
                    m.validate(this) || f.preventDefault()
                })
        });
        p.when("A", "auth-validate-form-common", "ready").register("auth-validate-form-real-time", function (f, m) {
            function l(d, c, b) {
                m.isErrorVisible(d, c) && b(d) && m.hideErrorMessage(d, m.getErrorAlertExtension(c))
            }

            function h(d, c) {
                if (d.hasClass("auth-require-fields-match")) {
                    var b = d.closest(".auth-require-fields-match-group");
                    if (b !== k && (b = b.find(m.getSelectorForInputsOfErrorTypeClass("auth-require-fields-match")),
                        2 === b.length)) {
                        var a = b.eq(0), g = b.eq(1);
                        m.isErrorVisible(a, "auth-require-fields-match") && c(b) && (m.hideErrorMessage(a, m.getErrorAlertExtension("auth-require-fields-match")), m.removeErrorClass(g))
                    }
                }
            }

            var e = f.$, k;
            e(".auth-real-time-validation input").bind("keyup.clearValidationErrors", function () {
                var d = e(this);
                l(d, "auth-required-field", m.isNonEmptyField);
                l(d, "auth-require-email-validaton", m.isValidEmailField);
                l(d, "auth-require-phone-validation", m.isValidPhoneNumberField);
                l(d, "auth-require-claim-validation",
                    m.isValidClaimField);
                l(d, "auth-require-password-validation", m.isValidPasswordField);
                h(d, m.isMatchingFields)
            });
            return {clearErrorMessageOnMatchingInputs: h}
        });
        p.when("A", "AuthToolkit", "ready").register("auth-3p-phone-verification", function (f, m) {
            var l = f.$, h = l("#auth-pv-enter-code");
            m.countingDown("#ap-3p-get-pin-code-button");
            f.on("AuthToolkit.countDownEnd", function (e) {
                "#ap-3p-get-pin-code-button" === e && (l("#auth-phone-number").removeClass("a-form-disabled"), l("#auth-phone-number-wrapper").removeClass("a-form-disabled"),
                    l("#auth-phone-number").attr("disabled", !1))
            });
            h.bind("change paste keyup", function () {
                0 < l(this).val().length ? m.enableButton("#ap-3p-pv-create-account") : m.disableButton("#ap-3p-pv-create-account")
            });
            l("#auth-verify-button").click(function () {
                var e = l("#auth-3p-pv-form");
                e.find("#insisted").val("false");
                e.find("#getPinCodeAction").val("true");
                e.submit()
            })
        });
        p.when("A", "a-modal", "ready").register("ap-3p-pv-modal", function (f, m) {
            var l = f.$, h = f.state("ap-3p-pv-modal");
            if (h) {
                var e = h.thirdPartyPhoneConflict;
                if (e && "None" !== e.toString()) {
                    var k = l("#" + h.formIdToBindTo), l = l("#ap-3p-pv-modal-action");
                    (l = m.get(l)) && e && "None" !== e.toString() && l.show();
                    f.declarative("ap-3p-pv-modal-complete", "click", function () {
                        e && "WeChat" === e.toString() && (k.find("#insisted").val("true"), k.submit())
                    })
                }
            }
        });
        p.when("A", "a-modal", "ready").register("ap-3p-account-connected-modal", function (f, m) {
            var l = f.$, h = f.state("ap-3p-account-connected-modal");
            h && h.thirdPartyAccountStatus && "rejectWithLoginIdIfConnected" === h.thirdPartyAccountStatus &&
            (l = l("#ap-3p-account-connected-modal-action"), (l = m.get(l)) && l.show())
        });
        p.when("A").execute(function (f) {
            function m(h) {
                var e = f.state("moa_registration_v2_info");
                e && e.enabled && f.get("/ap/nocontent/ref=" + h + "_" + e.device, {})
            }

            var l = f.$;
            l("#ap_use_email").click(function () {
                m("ap_mmoar_usee");
                l("#ap_email").val(l("#ap_phone_number").val())
            });
            l("#ap_use_mobile").click(function () {
                m("ap_mmoar_usem");
                l("#ap_phone_number").val(l("#ap_email").val())
            });
            l("#auth-country-picker-container").click(function () {
                m("ap_mmoar_ccp")
            });
            l("#continue").click(function () {
                m("ap_mmoar_cont")
            });
            f.on("a:popover:show:verifyContinueModal", function () {
                m("ap_mmoar_vm_o")
            });
            f.on("a:popover:hide:verifyContinueModal", function () {
                m("ap_mmoar_vm_c")
            });
            l("#auth-verification-ok-announce").click(function () {
                m("ap_mmoar_vm_ok")
            });
            l("#auth-already-have-account").click(function () {
                m("ap_mmoar_signin")
            });
            l("#auth-verify-button").click(function () {
                m("ap_mmoar_pv_verify")
            });
            l("#auth-resend-code-link").click(function () {
                m("ap_mmoar_pv_resend")
            })
        });
        p.when("A", "jQuery", "ready").register("wechat-wxlogin-js", function (f, m) {
            if (0 < m("#auth-wechat-login-container").length) {
                var l = m("#auth-wechat-login-container").data("wechatUrl");
                p.load.js(l)
            }
        });
        p.when("A", "jQuery", "client-side-counters-util", "wechat-login-button-counter", "wechat-wxlogin-js", "ready").register("wechat-qrcode-module", function (f, m, l, h) {
            if (0 < m("#auth-wechat-login-container").length) {
                var e = function () {
                    var d = m("div#auth-interactive-dialog-content"), c = m("div#auth-wechat-qrcode-loading-container").clone();
                    c.removeClass("hidden");
                    c.appendTo(d);
                    m("div#auth-interactive-dialog").css("display", "table");
                    var b = m("#auth-wechat-login-container"), d = b.data("appid"), c = b.data("scope"), a = b.data("redirectUrl"), g = b.data("state"), b = b.data("style");
                    new t.WxLogin({
                        id: "auth-wechat-qrcode-container",
                        appid: d,
                        scope: c,
                        redirect_uri: a,
                        state: g,
                        style: b
                    })
                }, k = function () {
                    var d = m("div#auth-interactive-dialog-content");
                    m("div#auth-interactive-dialog").css("display", "none");
                    d.empty()
                };
                m("div#auth-interactive-dialog-content").click(function (d) {
                    d.stopImmediatePropagation()
                });
                m("#auth-wechat-login-container").click(function () {
                    l.incrementCounter(h.weChatButtonClickEventCounterName);
                    e()
                });
                m("div#auth-interactive-dialog-container").click(function () {
                    k()
                });
                return {showWeChatQRCode: e, hideWeChatQRCode: k}
            }
        });
        p.when("A", "client-side-counters-util", "counters-name", "ready").register("wechat-login-button-counter", function (f, m, l) {
            var h = l.getCommonCounterNamePrefix() + ":WeChat";
            l = f.$("#auth-wechat-login-container-noninteractive");
            0 < l.length && l.click(function () {
                m.incrementCounter(h)
            });
            f = f.$("a#signInSubmit.wechat_button");
            0 < f.length && f.click(function () {
                m.incrementCounter(h)
            });
            return {weChatButtonClickEventCounterName: h}
        });
        p.when("A").register("wechat", function (f) {
            function m(e, d) {
                return l.ajax({
                    url: "https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js",
                    dataType: "script",
                    success: e,
                    error: d,
                    cache: !0
                })
            }

            var l = f.$, h = !1, e = null;
            return {
                WxLogin: function (f, d) {
                    d && l.isFunction(d) || (d = function () {
                    });
                    h ? d(new e(f)) : m(function () {
                        h = !0;
                        e = t.WxLogin;
                        d(new e(f))
                    }, function () {
                        d()
                    })
                }
            }
        });
        p.when("A", "wechat", "ready").execute(function (f, m) {
            var l = f.$, l = l("#auth-identity-provider-wechat-qrcode-container");
            0 !== l.length && m.WxLogin({
                id: "auth-identity-provider-wechat-qrcode-container",
                appid: l.data("appid"),
                scope: l.data("scope"),
                redirect_uri: l.data("redirect-uri"),
                state: l.data("state"),
                style: l.data("style")
            })
        });
        p.when("A", "auth-form-field-utils", "cvf", "client-side-counters-util", "ready").register("auth-contact-verification-handler", function (f, m, l, h) {
            function e(c) {
                var b = this;
                c =
                    c || {};
                this.postVerificationSuccessCallback = c.postVerificationSuccessCallback || d.noop;
                this.$verificationForm = d("form.auth-contact-verification-form");
                this.$contactVerificationWidgetTarget = d(".auth-contact-verification-widget-target").first();
                this.$claimToken = this.$verificationForm.find('input[type="hidden"].auth-contact-verification-claim-token');
                this.$verifyContactButton = this.$verificationForm.find(".auth-contact-verification-button");
                this.contactVerificationEndpoint = this.$verificationForm.attr("action");
                this.postVerificationFormAction = this.$verificationForm.data("post-verification-action");
                this.$verificationTarget = this.$verificationForm.find(".auth-contact-verification-target");
                this.$spinnerTarget = this.$verificationForm.find(".auth-contact-verification-spinner");
                this.$successMessage = this.$verificationForm.find(".auth-contact-verification-success-message");
                this.preVerify = "preVerify";
                this.pendingVerify = "pendingVerify";
                this.verifyState = b.preVerify;
                this.formSubmitEvent = "submit.contactVerification";
                this.$reverifyOnChangeTarget =
                    d(".auth-require-reverify-on-change, .auth-require-reverify-on-change :input");
                this.verificationFlowCompleteTime = this.verifyRequestCompleteTime = this.verificationFlowStartTime = 0;
                this.disableTargetLabelCssClass = "a-color-tertiary";
                this.errorCodes = "&errorCodes=";
                this.internalError = "INTERNAL_ERROR";
                this.ajax = function (a, b) {
                    f.ajax(a, b)
                };
                this.startContactVerification = function () {
                    b.verificationFlowStartTime = (new Date).getTime();
                    b.ajax(b.contactVerificationEndpoint, {
                        method: "post", cache: !1, params: k(b.$verificationForm),
                        error: b.startContactVerificationError, success: b.initializeComposableVerificationWidget
                    })
                };
                this.startContactVerificationError = function (a, g, c) {
                    p.log("Error contacting contact verification endpoint: " + c + ". Customers will not be able to verify their contact information.", "INFO");
                    h.incrementCounter("contactVerificationAjaxFailureContactVerificationInit");
                    t.location.href = t.location.href + b.errorCodes + b.internalError
                };
                this.cvfWidgetFactory = l;
                this.initializeComposableVerificationWidget = function (a) {
                    a = a || {};
                    a.location ? t.location.href = a.location : (a = a.requestToken || "", b.verifyRequestCompleteTime = (new Date).getTime(), a = {
                        target: b.$contactVerificationWidgetTarget,
                        requestToken: a,
                        onSuccess: b.completeContactVerification,
                        onError: b.widgetInitializationError,
                        autoStart: !1
                    }, b.$spinnerTarget && (a.spinnerTarget = b.$spinnerTarget), b.cvfWidgetFactory.create(a).start())
                };
                this.widgetInitializationError = function (a, g, c) {
                    p.log("Error initializing verification widget: " + c + ". Customers will not be able to verify their contact information.",
                        "INFO");
                    h.incrementCounter("contactVerificationAjaxFailureWidgetInit");
                    t.location.href = t.location.href + b.errorCodes + b.internalError
                };
                this.setClaimToken = function (a) {
                    b.$claimToken.val(a)
                };
                this.completeContactVerification = function (a, g) {
                    b.verificationFlowCompleteTime = (new Date).getTime();
                    g ? (b.setClaimToken(a), b.setPostVerificationAction(), b.$successMessage.show(), b.$verificationForm.unbind(b.formSubmitEvent), b.$verificationTarget.each(function () {
                        m.enableInput(d(this));
                        var a = d("label[for='" + d(this).attr("id") +
                            "']");
                        a.length && a.removeClass(b.disableTargetLabelCssClass)
                    }), h.insertCounter("contactVerificationCompleteVerificationFlowCompleteTime", b.verificationFlowCompleteTime - b.verificationFlowStartTime), h.insertCounter("contactVerificationVerifyRequestCompleteTime", b.verifyRequestCompleteTime - b.verificationFlowStartTime), d.isFunction(b.postVerificationSuccessCallback) && b.postVerificationSuccessCallback()) : t.location.href = t.location.href + b.errorCodes + b.internalError
                };
                this.setPostVerificationAction = function () {
                    b.$verificationForm.prop("action",
                        b.postVerificationFormAction)
                };
                this.verificationRequestHandler = function (a) {
                    a.preventDefault();
                    b.$spinnerTarget && b.$spinnerTarget.show();
                    b.verifyState = b.pendingVerify;
                    b.$verifyContactButton.hide();
                    b.startContactVerification()
                };
                this.bindVerificationFormEvent = function () {
                    b.$verificationForm.bind(b.formSubmitEvent, b.verificationRequestHandler)
                };
                b.bindVerificationFormEvent();
                this.unbindVerificationFormEvent = function () {
                    b.$verificationForm.unbind(b.formSubmitEvent)
                };
                this.safeBind = function () {
                    b.unbindVerificationFormEvent();
                    b.bindVerificationFormEvent()
                };
                this.resetContactVerificationOnRequestInfoChange = function () {
                    b.$reverifyOnChangeTarget.bind("keyup", function (a) {
                        a.preventDefault();
                        a = 13 === a.keyCode;
                        b.verifyState === b.preVerify || a || (f.trigger("cvf:claim:changed"), b.verifyState = b.preVerify, b.reVerifyEmail());
                        b.$claimToken.val() && b.safeBind()
                    })
                };
                b.resetContactVerificationOnRequestInfoChange();
                this.reVerifyEmail = function () {
                    b.$contactVerificationWidgetTarget.empty();
                    b.$verifyContactButton.show();
                    b.$successMessage.hide();
                    b.disableVerificationTarget();
                    b.$verificationForm.prop("action", b.contactVerificationEndpoint)
                };
                this.disableVerificationTarget = function () {
                    b.$verificationTarget.each(function () {
                        m.disableInput(d(this));
                        var a = d("label[for='" + d(this).attr("id") + "']");
                        a.length && a.addClass(b.disableTargetLabelCssClass)
                    })
                }
            }

            function k(c) {
                c = c.find("input.auth-contact-verification-request-info, input[type=hidden]");
                return m.inputsToJson(c)
            }

            var d = f.$;
            return {
                create: function (c) {
                    h.incrementCounter("contactVerificationCVFCreate");
                    return new e(c)
                }, ContactVerificationHandler: e
            }
        });
        p.when("auth-contact-verification-handler", "ready").register("auth-contact-verification-autostart", function (f) {
            return f.create()
        });
        p.when("A").register("auth-form-field-utils", function (f) {
            function m(d) {
                d.prop("disabled", !1);
                d.removeClass("a-form-disabled");
                d.find("input").prop("disabled", !1)
            }

            function l(d) {
                d.removeClass("a-button-disabled");
                d.find("input").prop("disabled", !1)
            }

            function h(d) {
                d.prop("disabled", !0);
                d.addClass("a-form-disabled");
                d.find("input").prop("disabled",
                    !0)
            }

            function e(d) {
                d.addClass("a-button-disabled");
                d.find("input").prop("disabled", !0)
            }

            var k = f.$;
            return {
                enableTextInput: m, enableButton: l, enableInput: function (d) {
                    0 < d.closest(".a-button").length ? l(d) : (d.hasClass("a-input-text") || d.hasClass("a-input-text-wrapper")) && m(d)
                }, disableTextInput: h, disableButton: e, disableInput: function (d) {
                    0 < d.closest(".a-button").length ? e(d) : (d.hasClass("a-input-text") || d.hasClass("a-input-text-wrapper")) && h(d)
                }, inputsToJson: function (d) {
                    return d.map(function () {
                        var c = k(this);
                        if (c.is("input")) {
                            var b = {};
                            b[c.attr("name")] = c.val();
                            return b
                        }
                    }).toArray().reduce(function (c, b) {
                        return k.extend(c, b)
                    })
                }
            }
        });
        p.register("client-side-counters-util", function () {
            function f(f, l) {
                var h = t.ue;
                h && "function" === typeof h.count && (l || (l = (h.count(f) || 0) + 1), h.count(f, l))
            }

            return {
                incrementCounter: function (m) {
                    f(m)
                }, insertCounter: f
            }
        });
        p.register("ap-form-validation-weblab", function () {
            return {shouldValidateForm: !0, shouldValidatePassword: !0, shouldValidateClaim: !0}
        });
        p.when("A", "AuthToolkit", "auth-pv-resend-utility", "ready").register("auth-cnep-add-password", function (f, m, l) {
            var h = f.$;
            if (!(1 > h("#ap-cnep-add-password-resend-code-button").length)) {
                m.countingDown("#ap-cnep-add-password-resend-code-button");
                var e = f.state("auth-cnep-add-password-resend-state");
                if (e) {
                    var k = h("#auth-cnep-add-password-client-side-success-box"), d = h(".auth-pv-client-side-success-messages li"), c = h("#auth-cnep-add-password-client-side-error-box"), b = h(".auth-pv-client-side-error-messages li"),
                        a = h(".auth-server-side-message-box"), g = h("#auth-resend-code-succeeded"), q = h("#auth-there-was-an-error-throttled"), r = h("#auth-there-was-an-error");
                    e.sessionTimeoutUrl = e.cnepUrl;
                    var x = function () {
                        l.successHandler(g, k)
                    }, w = function (a) {
                        l.errorHandler(a, e, q, r, c)
                    };
                    h("#ap-cnep-add-password-resend-code-button").click(function () {
                        "#ap-cnep-add-password-resend-code-button".isDisabled || (l.hideMessageBox(k, d, c, b, a), f.ajax(e.resendPinCodeUrl, {
                            method: "post",
                            success: x,
                            error: w
                        }), "undefined" === typeof h("#ap-cnep-add-password-resend-code-button") ||
                        h("#ap-cnep-add-password-resend-code-button").hasClass("a-button-disabled") || (h("#ap-cnep-add-password-resend-code-button").addClass("a-button-disabled"), h("#ap-cnep-add-password-resend-code-button").find(".a-button-text").attr("disabled", "disabled")), h("#ap-cnep-add-password-resend-code-button").find(".a-button-text").data("remaining", e.originalRemaining), m.countingDown("#ap-cnep-add-password-resend-code-button"))
                    })
                }
            }
        });
        p.when("A", "ready").register("counters-name", function (f) {
            return {
                getCommonCounterNamePrefix: function () {
                    var m =
                        "unknown", l = t.location.pathname.split("/");
                    0 < l.length && (m = l[l.length - 1]);
                    var l = "", h = f.state("auth-csm-page-state");
                    h && (l = h.assocHandle);
                    return ["AuthenticationPortal", m, l].join(":")
                }
            }
        });
        p.when("A").register("page-util", function (f) {
            function m(e) {
                e.jquery || h(e);
                return l(h("form:visible").attr("name"))
            }

            function l(e) {
                if (e)return e.replace(/(?:-| |\b)(\w)/g, function (e, d) {
                    return d.toUpperCase()
                })
            }

            var h = f.$;
            return {
                getFormName: m, toCamelCase: l, determinePageType: function () {
                    for (var e = {
                        SignIn: "SignInPage",
                        Register: "RegistrationPage"
                    }, f = document.getElementsByTagName("form"), d = 0; d < f.length; d++) {
                        var c = m(f[d]);
                        if (c in e)return e[c]
                    }
                }, isMobile: function () {
                    return h("html").hasClass("a-mobile")
                }
            }
        });
        p.when("A", "auth-validate-form-handler", "a-carousel-framework", "a-button", "ready").register("auth-streamlined", function (f, m, l, h) {
            function e(a) {
                c("#auth-alert-window").show();
                switch (a) {
                    case "email":
                        c("#auth-email-invalid-alert").show();
                        break;
                    case "mobile":
                        c("#auth-mobile-invalid-alert").show();
                        break;
                    case "unknown":
                        c("#auth-claim-invalid-alert").show();
                        break;
                    default:
                        c("#auth-claim-invalid-alert").show()
                }
            }

            function k() {
                c("#auth-alert-window").hide();
                c(".a-form-error").each(function (a, b) {
                    c(this).removeClass("a-form-error")
                })
            }

            function d(a) {
                k();
                c(".auth-contact-verification-widget-target").html("");
                c("body").data("index", 1);
                g.gotoPage(1);
                f.trigger("passwordFieldHidden")
            }

            var c = f.$, b = f.state("auth-spa-page-state"), a = !1;
            b && (a = b.isSinglePageAuth);
            var g = l.getCarouselByName("ap_carousel"), q = c("#ap-collect-claim"),
                r = "undefined" !== typeof history.pushState;
            c(".ap-post-claim-collection-form:visible").hide();
            c(".auth-clear-icon-container").click(function () {
                var a = "#" + c(this).children().data("clear-field-id");
                c(a).val("");
                c(this).attr("style", "display: none !important");
                c(a).focus()
            });
            c(".auth-clearable-field").keyup(function () {
                var a = c("#" + c(this).data("clear-icon-container-id")), b = c(this).val();
                0 < b.length ? a.attr("style", "display: table-cell !important") : 0 === b.length && a.attr("style", "display: none !important")
            });
            q.submit(function (a) {
                k();
                if (m.validate(q))return a = c("#ap-claim").val(), f.ajax("/ap/dae", {
                    method: "get", params: {email: a}, success: function (a) {
                        if (a.claimIsValid) {
                            r && history.pushState(null, "", "#back");
                            c(".claim-desc").text(a.claimDesc);
                            c(".claim-show").text(a.claim);
                            c(".claim").val(a.claim);
                            c(".ap-post-claim-collection-form:visible").hide();
                            var b, d = 1;
                            a.isAccountAvailable ? "mobile" === a.claimType ? ("verified" !== c("body").data("verified") && (c("#start-cvf").click(), c(".pre-cvf").show(), c(".post-cvf").hide()),
                                b = c("#ap-register-mobile-form"), d = 2) : "email" === a.claimType && (b = c("#ap-register-email-form"), d = 3) : (b = c("#ap-password-challenge"), d = 4);
                            b.show();
                            c("body").data("index", d);
                            g.gotoPage(d);
                            f.trigger("passwordFieldShown")
                        } else e(a.claimType)
                    }, error: function () {
                        e()
                    }
                }), !1
            });
            t.onhashchange = function () {
                a && ("" !== location.hash && "#back" !== location.hash || d(c(".ap-post-claim-collection-form:visible")))
            };
            c(".ap-change").click(function (a) {
                d(c(this).closest(".ap-post-claim-collection-form"));
                r && history.go(-1);
                return !1
            });
            f.on("cvf:claim:changed", function () {
                c(".post-cvf").hide();
                c(".pre-cvf").show();
                c("body").data("verified", "")
            });
            f.on("cvf:verification:complete", function (a) {
                a ? (f.trigger("passwordFieldShown"), c(".post-cvf").show(), c(".pre-cvf").hide(), c("body").data("verified", "verified")) : (c("#auth-alert-window").show(), c("#auth-throttled").show())
            });
            f.on("a:carousel:ap_carousel:change:pageNumber", function (a) {
                a.newValue !== c("body").data("index") && (c("body").data("index", a.oldValue), g.gotoPage(a.oldValue))
            });
            f.on("credentialsEntered",
                function () {
                    a && (c("#signInSubmit").click(), h("#ap-collect-claim-continue").disable(), c("#auth-claim-row").remove(), c("#auth-disabled-claim-row").show(), c("#auth-attempting-automatic-signin").show())
                })
        })
    })()
})(function () {
    var p = window.AmazonUIPageJS || window.P, t = p._namespace || p.attributeErrors;
    return t ? t("AuthenticationPortalAssets") : p
}(), window);