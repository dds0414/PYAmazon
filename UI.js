/*
 jQuery JavaScript Library v1.6.4
 http://jquery.com/

 Copyright 2011, John Resig
 Dual licensed under the MIT or GPL Version 2 licenses.
 http://jquery.org/license

 Includes Sizzle.js
 http://sizzlejs.com/
 Copyright 2011, The Dojo Foundation
 Released under the MIT, BSD, and GPL Licenses.

 Amazon elects to use jQuery and Sizzle under the MIT license.

 Date: Mon Sep 12 18:54:48 2011 -0400
 */
(function (n, r, v) {
    n.guardFatal(function () {
        n.register("jQuery", function () {
            function h(a, b, e) {
                if (e === v && 1 === a.nodeType)if (e = "data-" + b.replace(ha, "-$1").toLowerCase(), e = a.getAttribute(e), "string" === typeof e) {
                    try {
                        e = "true" === e ? !0 : "false" === e ? !1 : "null" === e ? null : p.isNaN(e) ? la.test(e) ? p.parseJSON(e) : e : parseFloat(e)
                    } catch (c) {
                    }
                    p.data(a, b, e)
                } else e = v;
                return e
            }

            function m(a) {
                for (var b in a)if ("toJSON" !== b)return !1;
                return !0
            }

            function l(a, b, e) {
                var c = b + "defer", q = b + "queue", d = b + "mark", f = p.data(a, c, v, !0);
                !f || "queue" !==
                e && p.data(a, q, v, !0) || "mark" !== e && p.data(a, d, v, !0) || setTimeout(function () {
                    p.data(a, q, v, !0) || p.data(a, d, v, !0) || (p.removeData(a, c, !0), f.resolve())
                }, 0)
            }

            function k() {
                return !1
            }

            function g() {
                return !0
            }

            function f(a, b, e) {
                var c = p.extend({}, e[0]);
                c.type = a;
                c.originalEvent = {};
                c.liveFired = v;
                p.event.handle.call(b, c);
                c.isDefaultPrevented() && e[0].preventDefault()
            }

            function d(a) {
                var b, e, c, q, d, f, t, g, h, k, x, l = [];
                q = [];
                d = p._data(this, "events");
                if (a.liveFired !== this && d && d.live && !a.target.disabled && (!a.button || "click" !== a.type)) {
                    a.namespace &&
                    (x = new RegExp("(^|\\.)" + a.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)"));
                    a.liveFired = this;
                    var m = d.live.slice(0);
                    for (t = 0; t < m.length; t++)d = m[t], d.origType.replace(Y, "") === a.type ? q.push(d.selector) : m.splice(t--, 1);
                    q = p(a.target).closest(q, a.currentTarget);
                    g = 0;
                    for (h = q.length; g < h; g++)for (k = q[g], t = 0; t < m.length; t++)if (d = m[t], k.selector === d.selector && (!x || x.test(d.namespace)) && !k.elem.disabled) {
                        f = k.elem;
                        c = null;
                        if ("mouseenter" === d.preType || "mouseleave" === d.preType)a.type = d.preType, (c = p(a.relatedTarget).closest(d.selector)[0]) &&
                        p.contains(f, c) && (c = f);
                        c && c === f || l.push({elem: f, handleObj: d, level: k.level})
                    }
                    g = 0;
                    for (h = l.length; g < h; g++) {
                        q = l[g];
                        if (e && q.level > e)break;
                        a.currentTarget = q.elem;
                        a.data = q.handleObj.data;
                        a.handleObj = q.handleObj;
                        x = q.handleObj.origHandler.apply(q.elem, arguments);
                        if (!1 === x || a.isPropagationStopped())if (e = q.level, !1 === x && (b = !1), a.isImmediatePropagationStopped())break
                    }
                    return b
                }
            }

            function c(a, b) {
                return (a && "*" !== a ? a + "." : "") + b.replace(sa, "`").replace(ma, "&")
            }

            function b(a) {
                return !a || !a.parentNode || 11 === a.parentNode.nodeType
            }

            function a(a, b, e) {
                b = b || 0;
                if (p.isFunction(b))return p.grep(a, function (a, c) {
                    return !!b.call(a, c, a) === e
                });
                if (b.nodeType)return p.grep(a, function (a, c) {
                    return a === b === e
                });
                if ("string" === typeof b) {
                    var c = p.grep(a, function (a) {
                        return 1 === a.nodeType
                    });
                    if (ab.test(b))return p.filter(b, c, !e);
                    b = p.filter(b, c)
                }
                return p.grep(a, function (a, c) {
                    return 0 <= p.inArray(a, b) === e
                })
            }

            function e(a, b) {
                return p.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
            }

            function q(a,
                       b) {
                if (1 === b.nodeType && p.hasData(a)) {
                    var e = p.expando, c = p.data(a), q = p.data(b, c);
                    if (c = c[e]) {
                        var d = c.events, q = q[e] = p.extend({}, c);
                        if (d) {
                            delete q.handle;
                            q.events = {};
                            for (var f in d)for (e = 0, c = d[f].length; e < c; e++)p.event.add(b, f + (d[f][e].namespace ? "." : "") + d[f][e].namespace, d[f][e], d[f][e].data)
                        }
                    }
                }
            }

            function t(a, b) {
                var e;
                if (1 === b.nodeType) {
                    b.clearAttributes && b.clearAttributes();
                    b.mergeAttributes && b.mergeAttributes(a);
                    e = b.nodeName.toLowerCase();
                    if ("object" === e)b.outerHTML = a.outerHTML; else if ("input" === e && ("checkbox" ===
                        a.type || "radio" === a.type))a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value); else if ("option" === e)b.selected = a.defaultSelected; else if ("input" === e || "textarea" === e)b.defaultValue = a.defaultValue;
                    b.removeAttribute(p.expando)
                }
            }

            function x(a) {
                return "getElementsByTagName" in a ? a.getElementsByTagName("*") : "querySelectorAll" in a ? a.querySelectorAll("*") : []
            }

            function y(a) {
                if ("checkbox" === a.type || "radio" === a.type)a.defaultChecked = a.checked
            }

            function u(a) {
                p.nodeName(a, "input") ?
                    y(a) : "getElementsByTagName" in a && p.grep(a.getElementsByTagName("input"), y)
            }

            function w(a, b) {
                b.src ? p.ajax({
                    url: b.src,
                    async: !1,
                    dataType: "script"
                }) : p.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bb, "/*$0*/"));
                b.parentNode && b.parentNode.removeChild(b)
            }

            function A(a, b, e) {
                var c = "width" === b ? a.offsetWidth : a.offsetHeight, q = "width" === b ? cb : db;
                if (0 < c)return "border" !== e && p.each(q, function () {
                    e || (c -= parseFloat(p.css(a, "padding" + this)) || 0);
                    c = "margin" === e ? c + (parseFloat(p.css(a, e + this)) || 0) : c - (parseFloat(p.css(a,
                        "border" + this + "Width")) || 0)
                }), c + "px";
                c = ea(a, b, b);
                if (0 > c || null == c)c = a.style[b] || 0;
                c = parseFloat(c) || 0;
                e && p.each(q, function () {
                    c += parseFloat(p.css(a, "padding" + this)) || 0;
                    "padding" !== e && (c += parseFloat(p.css(a, "border" + this + "Width")) || 0);
                    "margin" === e && (c += parseFloat(p.css(a, e + this)) || 0)
                });
                return c + "px"
            }

            function z(a) {
                return function (b, e) {
                    "string" !== typeof b && (e = b, b = "*");
                    if (p.isFunction(e))for (var c = b.toLowerCase().split(Ja), q = 0, d = c.length, f, t; q < d; q++)f = c[q], (t = /^\+/.test(f)) && (f = f.substr(1) || "*"), f = a[f] =
                        a[f] || [], f[t ? "unshift" : "push"](e)
                }
            }

            function C(a, b, e, c, q, d) {
                q = q || b.dataTypes[0];
                d = d || {};
                d[q] = !0;
                q = a[q];
                for (var f = 0, t = q ? q.length : 0, g = a === Ea, h; f < t && (g || !h); f++)h = q[f](b, e, c), "string" === typeof h && (!g || d[h] ? h = v : (b.dataTypes.unshift(h), h = C(a, b, e, c, h, d)));
                !g && h || d["*"] || (h = C(a, b, e, c, "*", d));
                return h
            }

            function E(a, b) {
                var e, c, q = p.ajaxSettings.flatOptions || {};
                for (e in b)b[e] !== v && ((q[e] ? a : c || (c = {}))[e] = b[e]);
                c && p.extend(!0, a, c)
            }

            function D(a, b, e, c) {
                if (p.isArray(b))p.each(b, function (b, q) {
                    e || eb.test(a) ? c(a, q) :
                        D(a + "[" + ("object" === typeof q || p.isArray(q) ? b : "") + "]", q, e, c)
                }); else if (e || null == b || "object" !== typeof b)c(a, b); else for (var q in b)D(a + "[" + q + "]", b[q], e, c)
            }

            function n() {
                try {
                    return new r.XMLHttpRequest
                } catch (a) {
                }
            }

            function F() {
                setTimeout(H, 0);
                return va = p.now()
            }

            function H() {
                va = v
            }

            function I(a, b) {
                var e = {};
                p.each(Ka.concat.apply([], Ka.slice(0, b)), function () {
                    e[this] = a
                });
                return e
            }

            function K(a) {
                if (!Fa[a]) {
                    var b = B.body, e = p("<" + a + ">").appendTo(b), c = e.css("display");
                    e.remove();
                    if ("none" === c || "" === c)R || (R = B.createElement("iframe"),
                        R.frameBorder = R.width = R.height = 0), b.appendChild(R), fa && R.createElement || (fa = (R.contentWindow || R.contentDocument).document, fa.write((p.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), fa.close()), e = fa.createElement(a), fa.body.appendChild(e), c = p.css(e, "display"), b.removeChild(R);
                    Fa[a] = c
                }
                return Fa[a]
            }

            function L(a) {
                return p.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
            }

            var B = r.document, J = r.navigator, M = r.location, p = function () {
                    function a() {
                        if (!b.isReady) {
                            try {
                                B.documentElement.doScroll("left")
                            } catch (e) {
                                setTimeout(a,
                                    1);
                                return
                            }
                            b.ready()
                        }
                    }

                    var b = function (a, e) {
                        return new b.fn.init(a, e, q)
                    }, e = r.jQuery, c = r.$, q, d = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, f = /\S/, t = /^\s+/, g = /\s+$/, h = /\d/, k = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, x = /^[\],:{}\s]*$/, l = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, m = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, z = /(?:^|:|,)(?:\s*\[)+/g, w = /(webkit)[ \/]([\w.]+)/, y = /(opera)(?:.*version)?[ \/]([\w.]+)/, u = /(msie) ([\w.]+)/, A = /(mozilla)(?:.*? rv:([\w.]+))?/, p = /-([a-z]|[0-9])/ig, C = /^-ms-/, D =
                        function (a, b) {
                            return (b + "").toUpperCase()
                        }, E = J.userAgent, n, G, F = Object.prototype.toString, H = Object.prototype.hasOwnProperty, K = Array.prototype.push, L = Array.prototype.slice, I = String.prototype.trim, M = Array.prototype.indexOf, Hb = {};
                    b.fn = b.prototype = {
                        constructor: b, init: function (a, e, c) {
                            var q;
                            if (!a)return this;
                            if (a.nodeType)return this.context = this[0] = a, this.length = 1, this;
                            if ("body" === a && !e && B.body)return this.context = B, this[0] = B.body, this.selector = a, this.length = 1, this;
                            if ("string" === typeof a) {
                                q = "<" === a.charAt(0) &&
                                ">" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : d.exec(a);
                                if (!q || !q[1] && e)return !e || e.jquery ? (e || c).find(a) : this.constructor(e).find(a);
                                if (q[1])return c = (e = e instanceof b ? e[0] : e) ? e.ownerDocument || e : B, (a = k.exec(a)) ? b.isPlainObject(e) ? (a = [B.createElement(a[1])], b.fn.attr.call(a, e, !0)) : a = [c.createElement(a[1])] : (a = b.buildFragment([q[1]], [c]), a = (a.cacheable ? b.clone(a.fragment) : a.fragment).childNodes), b.merge(this, a);
                                if ((e = B.getElementById(q[2])) && e.parentNode) {
                                    if (e.id !== q[2])return c.find(a);
                                    this.length =
                                        1;
                                    this[0] = e
                                }
                                this.context = B;
                                this.selector = a;
                                return this
                            }
                            if (b.isFunction(a))return c.ready(a);
                            a.selector !== v && (this.selector = a.selector, this.context = a.context);
                            return b.makeArray(a, this)
                        }, selector: "", jquery: "1.6.4", length: 0, size: function () {
                            return this.length
                        }, toArray: function () {
                            return L.call(this, 0)
                        }, get: function (a) {
                            return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
                        }, pushStack: function (a, e, c) {
                            var q = this.constructor();
                            b.isArray(a) ? K.apply(q, a) : b.merge(q, a);
                            q.prevObject = this;
                            q.context = this.context;
                            "find" === e ? q.selector = this.selector + (this.selector ? " " : "") + c : e && (q.selector = this.selector + "." + e + "(" + c + ")");
                            return q
                        }, each: function (a, e) {
                            return b.each(this, a, e)
                        }, ready: function (a) {
                            b.bindReady();
                            n.done(a);
                            return this
                        }, eq: function (a) {
                            return -1 === a ? this.slice(a) : this.slice(a, +a + 1)
                        }, first: function () {
                            return this.eq(0)
                        }, last: function () {
                            return this.eq(-1)
                        }, slice: function () {
                            return this.pushStack(L.apply(this, arguments), "slice", L.call(arguments).join(","))
                        }, map: function (a) {
                            return this.pushStack(b.map(this, function (b,
                                                                        e) {
                                return a.call(b, e, b)
                            }))
                        }, end: function () {
                            return this.prevObject || this.constructor(null)
                        }, push: K, sort: [].sort, splice: [].splice
                    };
                    b.fn.init.prototype = b.fn;
                    b.extend = b.fn.extend = function () {
                        var a, e, c, q, d, f = arguments[0] || {}, t = 1, g = arguments.length, h = !1;
                        "boolean" === typeof f && (h = f, f = arguments[1] || {}, t = 2);
                        "object" === typeof f || b.isFunction(f) || (f = {});
                        g === t && (f = this, --t);
                        for (; t < g; t++)if (null != (a = arguments[t]))for (e in a)c = f[e], q = a[e], f !== q && (h && q && (b.isPlainObject(q) || (d = b.isArray(q))) ? (d ? (d = !1, c = c && b.isArray(c) ?
                            c : []) : c = c && b.isPlainObject(c) ? c : {}, f[e] = b.extend(h, c, q)) : q !== v && (f[e] = q));
                        return f
                    };
                    b.extend({
                        noConflict: function (a) {
                            r.$ === b && (r.$ = c);
                            a && r.jQuery === b && (r.jQuery = e);
                            return b
                        }, isReady: !1, readyWait: 1, holdReady: function (a) {
                            a ? b.readyWait++ : b.ready(!0)
                        }, ready: function (a) {
                            if (!0 === a && !--b.readyWait || !0 !== a && !b.isReady) {
                                if (!B.body)return setTimeout(b.ready, 1);
                                b.isReady = !0;
                                !0 !== a && 0 < --b.readyWait || (n.resolveWith(B, [b]), b.fn.trigger && b(B).trigger("ready").unbind("ready"))
                            }
                        }, bindReady: function () {
                            if (!n) {
                                n = b._Deferred();
                                if ("complete" === B.readyState)return setTimeout(b.ready, 1);
                                if (B.addEventListener)B.addEventListener("DOMContentLoaded", G, !1), r.addEventListener("load", b.ready, !1); else if (B.attachEvent) {
                                    B.attachEvent("onreadystatechange", G);
                                    r.attachEvent("onload", b.ready);
                                    var e = !1;
                                    try {
                                        e = null == r.frameElement
                                    } catch (c) {
                                    }
                                    B.documentElement.doScroll && e && a()
                                }
                            }
                        }, isFunction: function (a) {
                            return "function" === b.type(a)
                        }, isArray: Array.isArray || function (a) {
                            return "array" === b.type(a)
                        }, isWindow: function (a) {
                            return a && "object" === typeof a &&
                                "setInterval" in a
                        }, isNaN: function (a) {
                            return null == a || !h.test(a) || isNaN(a)
                        }, type: function (a) {
                            return null == a ? String(a) : Hb[F.call(a)] || "object"
                        }, isPlainObject: function (a) {
                            if (!a || "object" !== b.type(a) || a.nodeType || b.isWindow(a))return !1;
                            try {
                                if (a.constructor && !H.call(a, "constructor") && !H.call(a.constructor.prototype, "isPrototypeOf"))return !1
                            } catch (e) {
                                return !1
                            }
                            for (var c in a);
                            return c === v || H.call(a, c)
                        }, isEmptyObject: function (a) {
                            for (var b in a)return !1;
                            return !0
                        }, error: function (a) {
                            throw a;
                        }, parseJSON: function (a) {
                            if ("string" !== typeof a || !a)return null;
                            a = b.trim(a);
                            if (r.JSON && r.JSON.parse)return r.JSON.parse(a);
                            if (x.test(a.replace(l, "@").replace(m, "]").replace(z, "")))return (new Function("return " + a))();
                            b.error("Invalid JSON: " + a)
                        }, parseXML: function (a) {
                            var e, c;
                            try {
                                r.DOMParser ? (c = new DOMParser, e = c.parseFromString(a, "text/xml")) : (e = new ActiveXObject("Microsoft.XMLDOM"), e.async = "false", e.loadXML(a))
                            } catch (q) {
                                e = v
                            }
                            e && e.documentElement && !e.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + a);
                            return e
                        }, noop: function () {
                        },
                        globalEval: function (a) {
                            a && f.test(a) && (r.execScript || function (a) {
                                r.eval.call(r, a)
                            })(a)
                        }, camelCase: function (a) {
                            return a.replace(C, "ms-").replace(p, D)
                        }, nodeName: function (a, b) {
                            return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                        }, each: function (a, e, c) {
                            var q, d = 0, f = a.length, t = f === v || b.isFunction(a);
                            if (c)if (t)for (q in a) {
                                if (!1 === e.apply(a[q], c))break
                            } else for (; d < f && !1 !== e.apply(a[d++], c);); else if (t)for (q in a) {
                                if (!1 === e.call(a[q], q, a[q]))break
                            } else for (; d < f && !1 !== e.call(a[d], d, a[d++]););
                            return a
                        },
                        trim: I ? function (a) {
                            return null == a ? "" : I.call(a)
                        } : function (a) {
                            return null == a ? "" : a.toString().replace(t, "").replace(g, "")
                        }, makeArray: function (a, e) {
                            var c = e || [];
                            if (null != a) {
                                var q = b.type(a);
                                null == a.length || "string" === q || "function" === q || "regexp" === q || b.isWindow(a) ? K.call(c, a) : b.merge(c, a)
                            }
                            return c
                        }, inArray: function (a, b) {
                            if (!b)return -1;
                            if (M)return M.call(b, a);
                            for (var e = 0, c = b.length; e < c; e++)if (b[e] === a)return e;
                            return -1
                        }, merge: function (a, b) {
                            var e = a.length, c = 0;
                            if ("number" === typeof b.length)for (var q = b.length; c <
                            q; c++)a[e++] = b[c]; else for (; b[c] !== v;)a[e++] = b[c++];
                            a.length = e;
                            return a
                        }, grep: function (a, b, e) {
                            var c = [], q;
                            e = !!e;
                            for (var d = 0, f = a.length; d < f; d++)q = !!b(a[d], d), e !== q && c.push(a[d]);
                            return c
                        }, map: function (a, e, c) {
                            var q, d, f = [], t = 0, g = a.length;
                            if (a instanceof b || g !== v && "number" === typeof g && (0 < g && a[0] && a[g - 1] || 0 === g || b.isArray(a)))for (; t < g; t++)q = e(a[t], t, c), null != q && (f[f.length] = q); else for (d in a)q = e(a[d], d, c), null != q && (f[f.length] = q);
                            return f.concat.apply([], f)
                        }, guid: 1, proxy: function (a, e) {
                            if ("string" === typeof e) {
                                var c =
                                    a[e];
                                e = a;
                                a = c
                            }
                            if (!b.isFunction(a))return v;
                            var q = L.call(arguments, 2), c = function () {
                                return a.apply(e, q.concat(L.call(arguments)))
                            };
                            c.guid = a.guid = a.guid || c.guid || b.guid++;
                            return c
                        }, access: function (a, e, c, q, d, f) {
                            var t = a.length;
                            if ("object" === typeof e) {
                                for (var g in e)b.access(a, g, e[g], q, d, c);
                                return a
                            }
                            if (c !== v) {
                                q = !f && q && b.isFunction(c);
                                for (g = 0; g < t; g++)d(a[g], e, q ? c.call(a[g], g, d(a[g], e)) : c, f);
                                return a
                            }
                            return t ? d(a[0], e) : v
                        }, now: function () {
                            return (new Date).getTime()
                        }, uaMatch: function (a) {
                            a = a.toLowerCase();
                            a = w.exec(a) ||
                                y.exec(a) || u.exec(a) || 0 > a.indexOf("compatible") && A.exec(a) || [];
                            return {browser: a[1] || "", version: a[2] || "0"}
                        }, sub: function () {
                            function a(b, e) {
                                return new a.fn.init(b, e)
                            }

                            b.extend(!0, a, this);
                            a.superclass = this;
                            a.fn = a.prototype = this();
                            a.fn.constructor = a;
                            a.sub = this.sub;
                            a.fn.init = function (c, q) {
                                q && q instanceof b && !(q instanceof a) && (q = a(q));
                                return b.fn.init.call(this, c, q, e)
                            };
                            a.fn.init.prototype = a.fn;
                            var e = a(B);
                            return a
                        }, browser: {}
                    });
                    b.each("Boolean Number String Function Array Date RegExp Object".split(" "),
                        function (a, b) {
                            Hb["[object " + b + "]"] = b.toLowerCase()
                        });
                    E = b.uaMatch(E);
                    E.browser && (b.browser[E.browser] = !0, b.browser.version = E.version);
                    b.browser.webkit && (b.browser.safari = !0);
                    f.test(" ") && (t = /^[\s\xA0]+/, g = /[\s\xA0]+$/);
                    q = b(B);
                    B.addEventListener ? G = function () {
                        B.removeEventListener("DOMContentLoaded", G, !1);
                        b.ready()
                    } : B.attachEvent && (G = function () {
                        "complete" === B.readyState && (B.detachEvent("onreadystatechange", G), b.ready())
                    });
                    return b
                }(), N = "done fail isResolved isRejected promise then always pipe".split(" "),
                U = [].slice;
            p.extend({
                _Deferred: function () {
                    var a = [], b, e, c, q = {
                        done: function () {
                            if (!c) {
                                var e = arguments, d, f, t, g, h;
                                b && (h = b, b = 0);
                                d = 0;
                                for (f = e.length; d < f; d++)t = e[d], g = p.type(t), "array" === g ? q.done.apply(q, t) : "function" === g && a.push(t);
                                h && q.resolveWith(h[0], h[1])
                            }
                            return this
                        }, resolveWith: function (q, d) {
                            if (!c && !b && !e) {
                                d = d || [];
                                e = 1;
                                try {
                                    for (; a[0];)a.shift().apply(q, d)
                                } finally {
                                    b = [q, d], e = 0
                                }
                            }
                            return this
                        }, resolve: function () {
                            q.resolveWith(this, arguments);
                            return this
                        }, isResolved: function () {
                            return !(!e && !b)
                        }, cancel: function () {
                            c =
                                1;
                            a = [];
                            return this
                        }
                    };
                    return q
                }, Deferred: function (a) {
                    var b = p._Deferred(), e = p._Deferred(), c;
                    p.extend(b, {
                        then: function (a, e) {
                            b.done(a).fail(e);
                            return this
                        },
                        always: function () {
                            return b.done.apply(b, arguments).fail.apply(this, arguments)
                        },
                        fail: e.done,
                        rejectWith: e.resolveWith,
                        reject: e.resolve,
                        isRejected: e.isResolved,
                        pipe: function (a, e) {
                            return p.Deferred(function (c) {
                                p.each({done: [a, "resolve"], fail: [e, "reject"]}, function (a, e) {
                                    var q = e[0], d = e[1], f;
                                    if (p.isFunction(q))b[a](function () {
                                        if ((f = q.apply(this, arguments)) &&
                                            p.isFunction(f.promise))f.promise().then(c.resolve, c.reject); else c[d + "With"](this === b ? c : this, [f])
                                    }); else b[a](c[d])
                                })
                            }).promise()
                        },
                        promise: function (a) {
                            if (null == a) {
                                if (c)return c;
                                c = a = {}
                            }
                            for (var e = N.length; e--;)a[N[e]] = b[N[e]];
                            return a
                        }
                    });
                    b.done(e.cancel).fail(b.cancel);
                    delete b.cancel;
                    a && a.call(b, b);
                    return b
                }, when: function (a) {
                    function b(a) {
                        return function (b) {
                            e[a] = 1 < arguments.length ? U.call(arguments, 0) : b;
                            --d || f.resolveWith(f, U.call(e, 0))
                        }
                    }

                    var e = arguments, c = 0, q = e.length, d = q, f = 1 >= q && a && p.isFunction(a.promise) ?
                        a : p.Deferred();
                    if (1 < q) {
                        for (; c < q; c++)e[c] && p.isFunction(e[c].promise) ? e[c].promise().then(b(c), f.reject) : --d;
                        d || f.resolveWith(f, e)
                    } else f !== a && f.resolveWith(f, q ? [a] : []);
                    return f.promise()
                }
            });
            p.support = function () {
                var a = B.createElement("div"), b = B.documentElement, e, c, q, d, f, t;
                a.setAttribute("className", "t");
                a.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
                e = a.getElementsByTagName("*");
                c = a.getElementsByTagName("a")[0];
                if (!e || !e.length || !c)return {};
                q = B.createElement("select");
                d = q.appendChild(B.createElement("option"));
                e = a.getElementsByTagName("input")[0];
                f = {
                    leadingWhitespace: 3 === a.firstChild.nodeType,
                    tbody: !a.getElementsByTagName("tbody").length,
                    htmlSerialize: !!a.getElementsByTagName("link").length,
                    style: /top/.test(c.getAttribute("style")),
                    hrefNormalized: "/a" === c.getAttribute("href"),
                    opacity: /^0.55$/.test(c.style.opacity),
                    cssFloat: !!c.style.cssFloat,
                    checkOn: "on" === e.value,
                    optSelected: d.selected,
                    getSetAttribute: "t" !== a.className,
                    submitBubbles: !0,
                    changeBubbles: !0,
                    focusinBubbles: !1,
                    deleteExpando: !0,
                    noCloneEvent: !0,
                    inlineBlockNeedsLayout: !1,
                    shrinkWrapBlocks: !1,
                    reliableMarginRight: !0
                };
                e.checked = !0;
                f.noCloneChecked = e.cloneNode(!0).checked;
                q.disabled = !0;
                f.optDisabled = !d.disabled;
                try {
                    delete a.test
                } catch (g) {
                    f.deleteExpando = !1
                }
                !a.addEventListener && a.attachEvent && a.fireEvent && (a.attachEvent("onclick", function () {
                    f.noCloneEvent = !1
                }), a.cloneNode(!0).fireEvent("onclick"));
                e = B.createElement("input");
                e.value = "t";
                e.setAttribute("type", "radio");
                f.radioValue = "t" === e.value;
                e.setAttribute("checked", "checked");
                a.appendChild(e);
                c = B.createDocumentFragment();
                c.appendChild(a.firstChild);
                f.checkClone = c.cloneNode(!0).cloneNode(!0).lastChild.checked;
                a.innerHTML = "";
                a.style.width = a.style.paddingLeft = "1px";
                q = B.getElementsByTagName("body")[0];
                c = B.createElement(q ? "div" : "body");
                d = {visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none"};
                q && p.extend(d, {position: "absolute", left: "-1000px", top: "-1000px"});
                for (t in d)c.style[t] = d[t];
                c.appendChild(a);
                b = q || b;
                b.insertBefore(c, b.firstChild);
                f.appendChecked = e.checked;
                p.boxModel = f.boxModel = "CSS1Compat" === B.compatMode;
                "zoom" in a.style && (a.style.display = "inline", a.style.zoom = 1, f.inlineBlockNeedsLayout = 2 === a.offsetWidth, a.style.display = "", a.innerHTML = "<div style='width:4px;'></div>", f.shrinkWrapBlocks = 2 !== a.offsetWidth);
                a.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
                q = a.getElementsByTagName("td");
                e = 0 === q[0].offsetHeight;
                q[0].style.display = "";
                q[1].style.display =
                    "none";
                f.reliableHiddenOffsets = e && 0 === q[0].offsetHeight;
                a.innerHTML = "";
                B.defaultView && B.defaultView.getComputedStyle && (e = B.createElement("div"), e.style.width = "0", e.style.marginRight = "0", a.appendChild(e), f.reliableMarginRight = 0 === (parseInt((B.defaultView.getComputedStyle(e, null) || {marginRight: 0}).marginRight, 10) || 0));
                c.innerHTML = "";
                b.removeChild(c);
                if (a.attachEvent)for (t in{
                    submit: 1,
                    change: 1,
                    focusin: 1
                })b = "on" + t, e = b in a, e || (a.setAttribute(b, "return;"), e = "function" === typeof a[b]), f[t + "Bubbles"] = e;
                c =
                    c = q = d = q = e = a = e = null;
                return f
            }();
            var la = /^(?:\{.*\}|\[.*\])$/, ha = /([A-Z])/g;
            p.extend({
                cache: {},
                uuid: 0,
                expando: "jQuery" + (p.fn.jquery + Math.random()).replace(/\D/g, ""),
                noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0},
                hasData: function (a) {
                    a = a.nodeType ? p.cache[a[p.expando]] : a[p.expando];
                    return !!a && !m(a)
                },
                data: function (a, b, e, c) {
                    if (p.acceptData(a)) {
                        var q = p.expando, d = "string" === typeof b, f = a.nodeType, t = f ? p.cache : a, g = f ? a[p.expando] : a[p.expando] && p.expando;
                        if (!(!g || c && g && t[g] && !t[g][q]) || !d || e !== v) {
                            g || (f ? a[p.expando] = g = ++p.uuid : g = p.expando);
                            t[g] || (t[g] = {}, f || (t[g].toJSON = p.noop));
                            if ("object" === typeof b || "function" === typeof b)c ? t[g][q] = p.extend(t[g][q], b) : t[g] = p.extend(t[g], b);
                            a = t[g];
                            c && (a[q] || (a[q] = {}), a = a[q]);
                            e !== v && (a[p.camelCase(b)] = e);
                            if ("events" === b && !a[b])return a[q] && a[q].events;
                            d ? (e = a[b], null == e && (e = a[p.camelCase(b)])) : e = a;
                            return e
                        }
                    }
                },
                removeData: function (a, b, e) {
                    if (p.acceptData(a)) {
                        var c, q = p.expando, d = a.nodeType, f = d ? p.cache : a, t = d ? a[p.expando] : p.expando;
                        if (f[t]) {
                            if (b && (c = e ?
                                    f[t][q] : f[t]) && (c[b] || (b = p.camelCase(b)), delete c[b], !m(c)) || e && (delete f[t][q], !m(f[t])))return;
                            b = f[t][q];
                            p.support.deleteExpando || !f.setInterval ? delete f[t] : f[t] = null;
                            b ? (f[t] = {}, d || (f[t].toJSON = p.noop), f[t][q] = b) : d && (p.support.deleteExpando ? delete a[p.expando] : a.removeAttribute ? a.removeAttribute(p.expando) : a[p.expando] = null)
                        }
                    }
                },
                _data: function (a, b, e) {
                    return p.data(a, b, e, !0)
                },
                acceptData: function (a) {
                    if (a.nodeName) {
                        var b = p.noData[a.nodeName.toLowerCase()];
                        if (b)return !(!0 === b || a.getAttribute("classid") !==
                        b)
                    }
                    return !0
                }
            });
            p.fn.extend({
                data: function (a, b) {
                    var e = null;
                    if ("undefined" === typeof a) {
                        if (this.length && (e = p.data(this[0]), 1 === this[0].nodeType))for (var c = this[0].attributes, q, d = 0, f = c.length; d < f; d++)q = c[d].name, 0 === q.indexOf("data-") && (q = p.camelCase(q.substring(5)), h(this[0], q, e[q]));
                        return e
                    }
                    if ("object" === typeof a)return this.each(function () {
                        p.data(this, a)
                    });
                    var t = a.split(".");
                    t[1] = t[1] ? "." + t[1] : "";
                    return b === v ? (e = this.triggerHandler("getData" + t[1] + "!", [t[0]]), e === v && this.length && (e = p.data(this[0],
                        a), e = h(this[0], a, e)), e === v && t[1] ? this.data(t[0]) : e) : this.each(function () {
                        var e = p(this), c = [t[0], b];
                        e.triggerHandler("setData" + t[1] + "!", c);
                        p.data(this, a, b);
                        e.triggerHandler("changeData" + t[1] + "!", c)
                    })
                }, removeData: function (a) {
                    return this.each(function () {
                        p.removeData(this, a)
                    })
                }
            });
            p.extend({
                _mark: function (a, b) {
                    a && (b = (b || "fx") + "mark", p.data(a, b, (p.data(a, b, v, !0) || 0) + 1, !0))
                }, _unmark: function (a, b, e) {
                    !0 !== a && (e = b, b = a, a = !1);
                    if (b) {
                        e = e || "fx";
                        var c = e + "mark";
                        (a = a ? 0 : (p.data(b, c, v, !0) || 1) - 1) ? p.data(b, c, a, !0) : (p.removeData(b,
                            c, !0), l(b, e, "mark"))
                    }
                }, queue: function (a, b, e) {
                    if (a) {
                        b = (b || "fx") + "queue";
                        var c = p.data(a, b, v, !0);
                        e && (!c || p.isArray(e) ? c = p.data(a, b, p.makeArray(e), !0) : c.push(e));
                        return c || []
                    }
                }, dequeue: function (a, b) {
                    b = b || "fx";
                    var e = p.queue(a, b), c = e.shift();
                    "inprogress" === c && (c = e.shift());
                    c && ("fx" === b && e.unshift("inprogress"), c.call(a, function () {
                        p.dequeue(a, b)
                    }));
                    e.length || (p.removeData(a, b + "queue", !0), l(a, b, "queue"))
                }
            });
            p.fn.extend({
                queue: function (a, b) {
                    "string" !== typeof a && (b = a, a = "fx");
                    return b === v ? p.queue(this[0], a) :
                        this.each(function () {
                            var e = p.queue(this, a, b);
                            "fx" === a && "inprogress" !== e[0] && p.dequeue(this, a)
                        })
                }, dequeue: function (a) {
                    return this.each(function () {
                        p.dequeue(this, a)
                    })
                }, delay: function (a, b) {
                    a = p.fx ? p.fx.speeds[a] || a : a;
                    b = b || "fx";
                    return this.queue(b, function () {
                        var e = this;
                        setTimeout(function () {
                            p.dequeue(e, b)
                        }, a)
                    })
                }, clearQueue: function (a) {
                    return this.queue(a || "fx", [])
                }, promise: function (a, b) {
                    function e() {
                        --f || c.resolveWith(q, [q])
                    }

                    "string" !== typeof a && (a = v);
                    a = a || "fx";
                    for (var c = p.Deferred(), q = this, d = q.length,
                             f = 1, t = a + "defer", g = a + "queue", h = a + "mark", k; d--;)if (k = p.data(q[d], t, v, !0) || (p.data(q[d], g, v, !0) || p.data(q[d], h, v, !0)) && p.data(q[d], t, p._Deferred(), !0))f++, k.done(e);
                    e();
                    return c.promise()
                }
            });
            var aa = /[\n\t\r]/g, S = /\s+/, Z = /\r/g, na = /^(?:button|input)$/i, ta = /^(?:button|input|object|select|textarea)$/i, ua = /^a(?:rea)?$/i, da = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, P, ba;
            p.fn.extend({
                attr: function (a, b) {
                    return p.access(this,
                        a, b, !0, p.attr)
                }, removeAttr: function (a) {
                    return this.each(function () {
                        p.removeAttr(this, a)
                    })
                }, prop: function (a, b) {
                    return p.access(this, a, b, !0, p.prop)
                }, removeProp: function (a) {
                    a = p.propFix[a] || a;
                    return this.each(function () {
                        try {
                            this[a] = v, delete this[a]
                        } catch (b) {
                        }
                    })
                }, addClass: function (a) {
                    var b, e, c, q, d, f, t;
                    if (p.isFunction(a))return this.each(function (b) {
                        p(this).addClass(a.call(this, b, this.className))
                    });
                    if (a && "string" === typeof a)for (b = a.split(S), e = 0, c = this.length; e < c; e++)if (q = this[e], 1 === q.nodeType)if (q.className ||
                        1 !== b.length) {
                        d = " " + q.className + " ";
                        f = 0;
                        for (t = b.length; f < t; f++)~d.indexOf(" " + b[f] + " ") || (d += b[f] + " ");
                        q.className = p.trim(d)
                    } else q.className = a;
                    return this
                }, removeClass: function (a) {
                    var b, e, c, q, d, f, t;
                    if (p.isFunction(a))return this.each(function (b) {
                        p(this).removeClass(a.call(this, b, this.className))
                    });
                    if (a && "string" === typeof a || a === v)for (b = (a || "").split(S), e = 0, c = this.length; e < c; e++)if (q = this[e], 1 === q.nodeType && q.className)if (a) {
                        d = (" " + q.className + " ").replace(aa, " ");
                        f = 0;
                        for (t = b.length; f < t; f++)d = d.replace(" " +
                            b[f] + " ", " ");
                        q.className = p.trim(d)
                    } else q.className = "";
                    return this
                }, toggleClass: function (a, b) {
                    var e = typeof a, c = "boolean" === typeof b;
                    return p.isFunction(a) ? this.each(function (e) {
                        p(this).toggleClass(a.call(this, e, this.className, b), b)
                    }) : this.each(function () {
                        if ("string" === e)for (var q, d = 0, f = p(this), t = b, g = a.split(S); q = g[d++];)t = c ? t : !f.hasClass(q), f[t ? "addClass" : "removeClass"](q); else if ("undefined" === e || "boolean" === e)this.className && p._data(this, "__className__", this.className), this.className = this.className ||
                        !1 === a ? "" : p._data(this, "__className__") || ""
                    })
                }, hasClass: function (a) {
                    a = " " + a + " ";
                    for (var b = 0, e = this.length; b < e; b++)if (1 === this[b].nodeType && -1 < (" " + this[b].className + " ").replace(aa, " ").indexOf(a))return !0;
                    return !1
                }, val: function (a) {
                    var b, e, c = this[0];
                    if (!arguments.length) {
                        if (c) {
                            if ((b = p.valHooks[c.nodeName.toLowerCase()] || p.valHooks[c.type]) && "get" in b && (e = b.get(c, "value")) !== v)return e;
                            e = c.value;
                            return "string" === typeof e ? e.replace(Z, "") : null == e ? "" : e
                        }
                        return v
                    }
                    var q = p.isFunction(a);
                    return this.each(function (e) {
                        var c =
                            p(this);
                        1 === this.nodeType && (e = q ? a.call(this, e, c.val()) : a, null == e ? e = "" : "number" === typeof e ? e += "" : p.isArray(e) && (e = p.map(e, function (a) {
                            return null == a ? "" : a + ""
                        })), b = p.valHooks[this.nodeName.toLowerCase()] || p.valHooks[this.type], b && "set" in b && b.set(this, e, "value") !== v || (this.value = e))
                    })
                }
            });
            p.extend({
                valHooks: {
                    option: {
                        get: function (a) {
                            var b = a.attributes.value;
                            return !b || b.specified ? a.value : a.text
                        }
                    }, select: {
                        get: function (a) {
                            var b, e = a.selectedIndex, c = [], q = a.options;
                            a = "select-one" === a.type;
                            if (0 > e)return null;
                            for (var d = a ? e : 0, f = a ? e + 1 : q.length; d < f; d++)if (b = q[d], !(!b.selected || (p.support.optDisabled ? b.disabled : null !== b.getAttribute("disabled")) || b.parentNode.disabled && p.nodeName(b.parentNode, "optgroup"))) {
                                b = p(b).val();
                                if (a)return b;
                                c.push(b)
                            }
                            return a && !c.length && q.length ? p(q[e]).val() : c
                        }, set: function (a, b) {
                            var e = p.makeArray(b);
                            p(a).find("option").each(function () {
                                this.selected = 0 <= p.inArray(p(this).val(), e)
                            });
                            e.length || (a.selectedIndex = -1);
                            return e
                        }
                    }
                },
                attrFn: {
                    val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0,
                    offset: !0
                },
                attrFix: {tabindex: "tabIndex"},
                attr: function (a, b, e, c) {
                    var q = a.nodeType;
                    if (!a || 3 === q || 8 === q || 2 === q)return v;
                    if (c && b in p.attrFn)return p(a)[b](e);
                    if (!("getAttribute" in a))return p.prop(a, b, e);
                    var d, f;
                    if (c = 1 !== q || !p.isXMLDoc(a))b = p.attrFix[b] || b, (f = p.attrHooks[b]) || (da.test(b) ? f = ba : P && (f = P));
                    if (e !== v) {
                        if (null === e)return p.removeAttr(a, b), v;
                        if (f && "set" in f && c && (d = f.set(a, e, b)) !== v)return d;
                        a.setAttribute(b, "" + e);
                        return e
                    }
                    if (f && "get" in f && c && null !== (d = f.get(a, b)))return d;
                    d = a.getAttribute(b);
                    return null === d ? v : d
                },
                removeAttr: function (a, b) {
                    var e;
                    1 === a.nodeType && (b = p.attrFix[b] || b, p.attr(a, b, ""), a.removeAttribute(b), da.test(b) && (e = p.propFix[b] || b) in a && (a[e] = !1))
                },
                attrHooks: {
                    type: {
                        set: function (a, b) {
                            if (na.test(a.nodeName) && a.parentNode)p.error("type property can't be changed"); else if (!p.support.radioValue && "radio" === b && p.nodeName(a, "input")) {
                                var e = a.value;
                                a.setAttribute("type", b);
                                e && (a.value = e);
                                return b
                            }
                        }
                    }, value: {
                        get: function (a, b) {
                            return P && p.nodeName(a, "button") ? P.get(a, b) : b in a ? a.value :
                                null
                        }, set: function (a, b, e) {
                            if (P && p.nodeName(a, "button"))return P.set(a, b, e);
                            a.value = b
                        }
                    }
                },
                propFix: {
                    tabindex: "tabIndex",
                    readonly: "readOnly",
                    "for": "htmlFor",
                    "class": "className",
                    maxlength: "maxLength",
                    cellspacing: "cellSpacing",
                    cellpadding: "cellPadding",
                    rowspan: "rowSpan",
                    colspan: "colSpan",
                    usemap: "useMap",
                    frameborder: "frameBorder",
                    contenteditable: "contentEditable"
                },
                prop: function (a, b, e) {
                    var c = a.nodeType;
                    if (!a || 3 === c || 8 === c || 2 === c)return v;
                    var q, d;
                    1 === c && p.isXMLDoc(a) || (b = p.propFix[b] || b, d = p.propHooks[b]);
                    return e !== v ? d && "set" in d && (q = d.set(a, e, b)) !== v ? q : a[b] = e : d && "get" in d && null !== (q = d.get(a, b)) ? q : a[b]
                },
                propHooks: {
                    tabIndex: {
                        get: function (a) {
                            var b = a.getAttributeNode("tabindex");
                            return b && b.specified ? parseInt(b.value, 10) : ta.test(a.nodeName) || ua.test(a.nodeName) && a.href ? 0 : v
                        }
                    }
                }
            });
            p.attrHooks.tabIndex = p.propHooks.tabIndex;
            ba = {
                get: function (a, b) {
                    var e;
                    return !0 === p.prop(a, b) || (e = a.getAttributeNode(b)) && !1 !== e.nodeValue ? b.toLowerCase() : v
                }, set: function (a, b, e) {
                    !1 === b ? p.removeAttr(a, e) : (b = p.propFix[e] || e, b in
                    a && (a[b] = !0), a.setAttribute(e, e.toLowerCase()));
                    return e
                }
            };
            p.support.getSetAttribute || (P = p.valHooks.button = {
                get: function (a, b) {
                    var e;
                    return (e = a.getAttributeNode(b)) && "" !== e.nodeValue ? e.nodeValue : v
                }, set: function (a, b, e) {
                    var c = a.getAttributeNode(e);
                    c || (c = B.createAttribute(e), a.setAttributeNode(c));
                    return c.nodeValue = b + ""
                }
            }, p.each(["width", "height"], function (a, b) {
                p.attrHooks[b] = p.extend(p.attrHooks[b], {
                    set: function (a, e) {
                        if ("" === e)return a.setAttribute(b, "auto"), e
                    }
                })
            }));
            p.support.hrefNormalized || p.each(["href",
                "src", "width", "height"], function (a, b) {
                p.attrHooks[b] = p.extend(p.attrHooks[b], {
                    get: function (a) {
                        a = a.getAttribute(b, 2);
                        return null === a ? v : a
                    }
                })
            });
            p.support.style || (p.attrHooks.style = {
                get: function (a) {
                    return a.style.cssText.toLowerCase() || v
                }, set: function (a, b) {
                    return a.style.cssText = "" + b
                }
            });
            p.support.optSelected || (p.propHooks.selected = p.extend(p.propHooks.selected, {
                get: function (a) {
                    if (a = a.parentNode)a.selectedIndex, a.parentNode && a.parentNode.selectedIndex;
                    return null
                }
            }));
            p.support.checkOn || p.each(["radio",
                "checkbox"], function () {
                p.valHooks[this] = {
                    get: function (a) {
                        return null === a.getAttribute("value") ? "on" : a.value
                    }
                }
            });
            p.each(["radio", "checkbox"], function () {
                p.valHooks[this] = p.extend(p.valHooks[this], {
                    set: function (a, b) {
                        if (p.isArray(b))return a.checked = 0 <= p.inArray(p(a).val(), b)
                    }
                })
            });
            var Y = /\.(.*)$/, ia = /^(?:textarea|input|select)$/i, sa = /\./g, ma = / /g, oa = /[^\w\s.|`]/g, za = function (a) {
                return a.replace(oa, "\\$&")
            };
            p.event = {
                add: function (a, b, e, c) {
                    if (3 !== a.nodeType && 8 !== a.nodeType) {
                        if (!1 === e)e = k; else if (!e)return;
                        var q, d;
                        e.handler && (q = e, e = q.handler);
                        e.guid || (e.guid = p.guid++);
                        if (d = p._data(a)) {
                            var f = d.events, t = d.handle;
                            f || (d.events = f = {});
                            t || (d.handle = t = function (a) {
                                return "undefined" === typeof p || a && p.event.triggered === a.type ? v : p.event.handle.apply(t.elem, arguments)
                            });
                            t.elem = a;
                            b = b.split(" ");
                            for (var g, h = 0, x; g = b[h++];) {
                                d = q ? p.extend({}, q) : {handler: e, data: c};
                                -1 < g.indexOf(".") ? (x = g.split("."), g = x.shift(), d.namespace = x.slice(0).sort().join(".")) : (x = [], d.namespace = "");
                                d.type = g;
                                d.guid || (d.guid = e.guid);
                                var l = f[g], m = p.event.special[g] ||
                                    {};
                                l || (l = f[g] = [], m.setup && !1 !== m.setup.call(a, c, x, t) || (a.addEventListener ? a.addEventListener(g, t, !1) : a.attachEvent && a.attachEvent("on" + g, t)));
                                m.add && (m.add.call(a, d), d.handler.guid || (d.handler.guid = e.guid));
                                l.push(d);
                                p.event.global[g] = !0
                            }
                            a = null
                        }
                    }
                },
                global: {},
                remove: function (a, b, e, c) {
                    if (3 !== a.nodeType && 8 !== a.nodeType) {
                        !1 === e && (e = k);
                        var q, d, f = 0, t, g, h, x, l, m, z = p.hasData(a) && p._data(a), w = z && z.events;
                        if (z && w)if (b && b.type && (e = b.handler, b = b.type), !b || "string" === typeof b && "." === b.charAt(0))for (q in b = b || "",
                            w)p.event.remove(a, q + b); else {
                            for (b = b.split(" "); q = b[f++];)if (x = q, t = 0 > q.indexOf("."), g = [], t || (g = q.split("."), q = g.shift(), h = new RegExp("(^|\\.)" + p.map(g.slice(0).sort(), za).join("\\.(?:.*\\.)?") + "(\\.|$)")), l = w[q])if (e) {
                                x = p.event.special[q] || {};
                                for (d = c || 0; d < l.length; d++)if (m = l[d], e.guid === m.guid) {
                                    if (t || h.test(m.namespace))null == c && l.splice(d--, 1), x.remove && x.remove.call(a, m);
                                    if (null != c)break
                                }
                                if (0 === l.length || null != c && 1 === l.length)x.teardown && !1 !== x.teardown.call(a, g) || p.removeEvent(a, q, z.handle), delete w[q]
                            } else for (d =
                                            0; d < l.length; d++)if (m = l[d], t || h.test(m.namespace))p.event.remove(a, x, m.handler, d), l.splice(d--, 1);
                            if (p.isEmptyObject(w)) {
                                if (b = z.handle)b.elem = null;
                                delete z.events;
                                delete z.handle;
                                p.isEmptyObject(z) && p.removeData(a, v, !0)
                            }
                        }
                    }
                },
                customEvent: {getData: !0, setData: !0, changeData: !0},
                trigger: function (a, b, e, c) {
                    var q = a.type || a, d = [], f;
                    0 <= q.indexOf("!") && (q = q.slice(0, -1), f = !0);
                    0 <= q.indexOf(".") && (d = q.split("."), q = d.shift(), d.sort());
                    if (e && !p.event.customEvent[q] || p.event.global[q]) {
                        a = "object" === typeof a ? a[p.expando] ?
                            a : new p.Event(q, a) : new p.Event(q);
                        a.type = q;
                        a.exclusive = f;
                        a.namespace = d.join(".");
                        a.namespace_re = new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.)?") + "(\\.|$)");
                        if (c || !e)a.preventDefault(), a.stopPropagation();
                        if (!e)p.each(p.cache, function () {
                            var e = this[p.expando];
                            e && e.events && e.events[q] && p.event.trigger(a, b, e.handle.elem)
                        }); else if (3 !== e.nodeType && 8 !== e.nodeType) {
                            a.result = v;
                            a.target = e;
                            b = null != b ? p.makeArray(b) : [];
                            b.unshift(a);
                            d = e;
                            c = 0 > q.indexOf(":") ? "on" + q : "";
                            do f = p._data(d, "handle"), a.currentTarget = d, f && f.apply(d,
                                b), c && p.acceptData(d) && d[c] && !1 === d[c].apply(d, b) && (a.result = !1, a.preventDefault()), d = d.parentNode || d.ownerDocument || d === a.target.ownerDocument && r; while (d && !a.isPropagationStopped());
                            if (!a.isDefaultPrevented()) {
                                var t, d = p.event.special[q] || {};
                                if (!(d._default && !1 !== d._default.call(e.ownerDocument, a) || "click" === q && p.nodeName(e, "a")) && p.acceptData(e)) {
                                    try {
                                        c && e[q] && ((t = e[c]) && (e[c] = null), p.event.triggered = q, e[q]())
                                    } catch (g) {
                                    }
                                    t && (e[c] = t);
                                    p.event.triggered = v
                                }
                            }
                            return a.result
                        }
                    }
                },
                handle: function (a) {
                    a = p.event.fix(a ||
                        r.event);
                    var b = ((p._data(this, "events") || {})[a.type] || []).slice(0), e = !a.exclusive && !a.namespace, c = Array.prototype.slice.call(arguments, 0);
                    c[0] = a;
                    a.currentTarget = this;
                    for (var q = 0, d = b.length; q < d; q++) {
                        var f = b[q];
                        if (e || a.namespace_re.test(f.namespace))if (a.handler = f.handler, a.data = f.data, a.handleObj = f, f = f.handler.apply(this, c), f !== v && (a.result = f, !1 === f && (a.preventDefault(), a.stopPropagation())), a.isImmediatePropagationStopped())break
                    }
                    return a.result
                },
                props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
                fix: function (a) {
                    if (a[p.expando])return a;
                    var b = a;
                    a = p.Event(b);
                    for (var e = this.props.length, c; e;)c = this.props[--e], a[c] = b[c];
                    a.target || (a.target = a.srcElement || B);
                    3 === a.target.nodeType && (a.target = a.target.parentNode);
                    !a.relatedTarget && a.fromElement && (a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement);
                    null == a.pageX && null != a.clientX && (e = a.target.ownerDocument || B, b = e.documentElement, e = e.body, a.pageX = a.clientX + (b && b.scrollLeft || e && e.scrollLeft || 0) - (b && b.clientLeft || e && e.clientLeft || 0), a.pageY =
                        a.clientY + (b && b.scrollTop || e && e.scrollTop || 0) - (b && b.clientTop || e && e.clientTop || 0));
                    null != a.which || null == a.charCode && null == a.keyCode || (a.which = null != a.charCode ? a.charCode : a.keyCode);
                    !a.metaKey && a.ctrlKey && (a.metaKey = a.ctrlKey);
                    a.which || a.button === v || (a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0);
                    return a
                },
                guid: 1E8,
                proxy: p.proxy,
                special: {
                    ready: {setup: p.bindReady, teardown: p.noop}, live: {
                        add: function (a) {
                            p.event.add(this, c(a.origType, a.selector), p.extend({}, a, {
                                handler: d,
                                guid: a.handler.guid
                            }))
                        }, remove: function (a) {
                            p.event.remove(this,
                                c(a.origType, a.selector), a)
                        }
                    }, beforeunload: {
                        amazonOriginal: null, setup: function (a, b, e) {
                            if (p.isWindow(this)) {
                                var c = function () {
                                };
                                "function" === typeof this.onbeforeunload && (c = p.event.special.beforeunload.amazonOriginal = this.onbeforeunload);
                                this.onbeforeunload = function () {
                                    var a = Array.prototype.slice.call(arguments);
                                    c.apply(this, a);
                                    e.apply(this, a)
                                }
                            }
                        }, teardown: function (a, b) {
                            this.onbeforeunload = p.event.special.beforeunload.amazonOriginal
                        }
                    }
                }
            };
            p.removeEvent = B.removeEventListener ? function (a, b, e) {
                a.removeEventListener &&
                a.removeEventListener(b, e, !1)
            } : function (a, b, e) {
                a.detachEvent && a.detachEvent("on" + b, e)
            };
            p.Event = function (a, b) {
                if (!this.preventDefault)return new p.Event(a, b);
                a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || !1 === a.returnValue || a.getPreventDefault && a.getPreventDefault() ? g : k) : this.type = a;
                b && p.extend(this, b);
                this.timeStamp = p.now();
                this[p.expando] = !0
            };
            p.Event.prototype = {
                preventDefault: function () {
                    this.isDefaultPrevented = g;
                    var a = this.originalEvent;
                    a && (a.preventDefault ?
                        a.preventDefault() : a.returnValue = !1)
                }, stopPropagation: function () {
                    this.isPropagationStopped = g;
                    var a = this.originalEvent;
                    a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
                }, stopImmediatePropagation: function () {
                    this.isImmediatePropagationStopped = g;
                    this.stopPropagation()
                }, isDefaultPrevented: k, isPropagationStopped: k, isImmediatePropagationStopped: k
            };
            var ra = function (a) {
                var b = a.relatedTarget, e = !1, c = a.type;
                a.type = a.data;
                b !== this && (b && (e = p.contains(this, b)), e || (p.event.handle.apply(this, arguments),
                    a.type = c))
            }, Aa = function (a) {
                a.type = a.data;
                p.event.handle.apply(this, arguments)
            };
            p.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (a, b) {
                p.event.special[a] = {
                    setup: function (e) {
                        p.event.add(this, b, e && e.selector ? Aa : ra, a)
                    }, teardown: function (a) {
                        p.event.remove(this, b, a && a.selector ? Aa : ra)
                    }
                }
            });
            p.support.submitBubbles || (p.event.special.submit = {
                setup: function (a, b) {
                    if (p.nodeName(this, "form"))return !1;
                    p.event.add(this, "click.specialSubmit", function (a) {
                        var b = a.target, e = p.nodeName(b, "input") || p.nodeName(b,
                            "button") ? b.type : "";
                        "submit" !== e && "image" !== e || !p(b).closest("form").length || f("submit", this, arguments)
                    });
                    p.event.add(this, "keypress.specialSubmit", function (a) {
                        var b = a.target, e = p.nodeName(b, "input") || p.nodeName(b, "button") ? b.type : "";
                        "text" !== e && "password" !== e || !p(b).closest("form").length || 13 !== a.keyCode || f("submit", this, arguments)
                    })
                }, teardown: function (a) {
                    p.event.remove(this, ".specialSubmit")
                }
            });
            if (!p.support.changeBubbles) {
                var X, Da = function (a) {
                    var b = p.nodeName(a, "input") ? a.type : "", e = a.value;
                    "radio" ===
                    b || "checkbox" === b ? e = a.checked : "select-multiple" === b ? e = -1 < a.selectedIndex ? p.map(a.options, function (a) {
                        return a.selected
                    }).join("-") : "" : p.nodeName(a, "select") && (e = a.selectedIndex);
                    return e
                }, ja = function (a, b) {
                    var e = a.target, c, q;
                    ia.test(e.nodeName) && !e.readOnly && (c = p._data(e, "_change_data"), q = Da(e), "focusout" === a.type && "radio" === e.type || p._data(e, "_change_data", q), c === v || q === c || null == c && !q || (a.type = "change", a.liveFired = v, p.event.trigger(a, b, e)))
                };
                p.event.special.change = {
                    filters: {
                        focusout: ja, beforedeactivate: ja,
                        click: function (a) {
                            var b = a.target, e = p.nodeName(b, "input") ? b.type : "";
                            ("radio" === e || "checkbox" === e || p.nodeName(b, "select")) && ja.call(this, a)
                        }, keydown: function (a) {
                            var b = a.target, e = p.nodeName(b, "input") ? b.type : "";
                            (13 === a.keyCode && !p.nodeName(b, "textarea") || 32 === a.keyCode && ("checkbox" === e || "radio" === e) || "select-multiple" === e) && ja.call(this, a)
                        }, beforeactivate: function (a) {
                            a = a.target;
                            p._data(a, "_change_data", Da(a))
                        }
                    }, setup: function (a, b) {
                        if ("file" === this.type)return !1;
                        for (var e in X)p.event.add(this, e + ".specialChange",
                            X[e]);
                        return ia.test(this.nodeName)
                    }, teardown: function (a) {
                        p.event.remove(this, ".specialChange");
                        return ia.test(this.nodeName)
                    }
                };
                X = p.event.special.change.filters;
                X.focus = X.beforeactivate
            }
            p.support.focusinBubbles || p.each({focus: "focusin", blur: "focusout"}, function (a, b) {
                function e(a) {
                    var c = p.event.fix(a);
                    c.type = b;
                    c.originalEvent = {};
                    p.event.trigger(c, null, c.target);
                    c.isDefaultPrevented() && a.preventDefault()
                }

                var c = 0;
                p.event.special[b] = {
                    setup: function () {
                        0 === c++ && B.addEventListener(a, e, !0)
                    }, teardown: function () {
                        0 === --c && B.removeEventListener(a, e, !0)
                    }
                }
            });
            p.each(["bind", "one"], function (a, b) {
                p.fn[b] = function (a, e, c) {
                    var q;
                    if ("object" === typeof a) {
                        for (var d in a)this[b](d, e, a[d], c);
                        return this
                    }
                    if (2 === arguments.length || !1 === e)c = e, e = v;
                    "one" === b ? (q = function (a) {
                        p(this).unbind(a, q);
                        return c.apply(this, arguments)
                    }, q.guid = c.guid || p.guid++) : q = c;
                    if ("unload" === a && "one" !== b)this.one(a, e, c); else {
                        d = 0;
                        for (var f = this.length; d < f; d++)p.event.add(this[d], a, q, e)
                    }
                    return this
                }
            });
            p.fn.extend({
                unbind: function (a, b) {
                    if ("object" !== typeof a ||
                        a.preventDefault)for (var e = 0, c = this.length; e < c; e++)p.event.remove(this[e], a, b); else for (e in a)this.unbind(e, a[e]);
                    return this
                }, delegate: function (a, b, e, c) {
                    return this.live(b, e, c, a)
                }, undelegate: function (a, b, e) {
                    return 0 === arguments.length ? this.unbind("live") : this.die(b, null, e, a)
                }, trigger: function (a, b) {
                    return this.each(function () {
                        p.event.trigger(a, b, this)
                    })
                }, triggerHandler: function (a, b) {
                    if (this[0])return p.event.trigger(a, b, this[0], !0)
                }, toggle: function (a) {
                    var b = arguments, e = a.guid || p.guid++, c = 0, q = function (e) {
                        var q =
                            (p.data(this, "lastToggle" + a.guid) || 0) % c;
                        p.data(this, "lastToggle" + a.guid, q + 1);
                        e.preventDefault();
                        return b[q].apply(this, arguments) || !1
                    };
                    for (q.guid = e; c < b.length;)b[c++].guid = e;
                    return this.click(q)
                }, hover: function (a, b) {
                    return this.mouseenter(a).mouseleave(b || a)
                }
            });
            var pa = {focus: "focusin", blur: "focusout", mouseenter: "mouseover", mouseleave: "mouseout"};
            p.each(["live", "die"], function (a, b) {
                p.fn[b] = function (a, e, q, d) {
                    var f = 0, t, g, h = d || this.selector, x = d ? this : p(this.context);
                    if ("object" === typeof a && !a.preventDefault) {
                        for (t in a)x[b](t,
                            e, a[t], h);
                        return this
                    }
                    if ("die" === b && !a && d && "." === d.charAt(0))return x.unbind(d), this;
                    if (!1 === e || p.isFunction(e))q = e || k, e = v;
                    for (a = (a || "").split(" "); null != (d = a[f++]);)if (t = Y.exec(d), g = "", t && (g = t[0], d = d.replace(Y, "")), "hover" === d)a.push("mouseenter" + g, "mouseleave" + g); else if (t = d, pa[d] ? (a.push(pa[d] + g), d += g) : d = (pa[d] || d) + g, "live" === b) {
                        g = 0;
                        for (var l = x.length; g < l; g++)p.event.add(x[g], "live." + c(d, h), {
                            data: e,
                            selector: h,
                            handler: q,
                            origType: d,
                            origHandler: q,
                            preType: t
                        })
                    } else x.unbind("live." + c(d, h), q);
                    return this
                }
            });
            p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function (a, b) {
                p.fn[b] = function (a, e) {
                    null == e && (e = a, a = null);
                    return 0 < arguments.length ? this.bind(b, a, e) : this.trigger(b)
                };
                p.attrFn && (p.attrFn[b] = !0)
            });
            (function () {
                function a(b, e, c, q, d, f) {
                    d = 0;
                    for (var t = q.length; d < t; d++) {
                        var g = q[d];
                        if (g) {
                            for (var h = !1, g = g[b]; g;) {
                                if (g.sizcache === c) {
                                    h = q[g.sizset];
                                    break
                                }
                                1 !==
                                g.nodeType || f || (g.sizcache = c, g.sizset = d);
                                if (g.nodeName.toLowerCase() === e) {
                                    h = g;
                                    break
                                }
                                g = g[b]
                            }
                            q[d] = h
                        }
                    }
                }

                function b(a, e, c, q, d, f) {
                    d = 0;
                    for (var t = q.length; d < t; d++) {
                        var g = q[d];
                        if (g) {
                            for (var k = !1, g = g[a]; g;) {
                                if (g.sizcache === c) {
                                    k = q[g.sizset];
                                    break
                                }
                                if (1 === g.nodeType)if (f || (g.sizcache = c, g.sizset = d), "string" !== typeof e) {
                                    if (g === e) {
                                        k = !0;
                                        break
                                    }
                                } else if (0 < h.filter(e, [g]).length) {
                                    k = g;
                                    break
                                }
                                g = g[a]
                            }
                            q[d] = k
                        }
                    }
                }

                var e = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                    c = 0, q = Object.prototype.toString, d = !1, f = !0, t = /\\/g, g = /\W/;
                [0, 0].sort(function () {
                    f = !1;
                    return 0
                });
                var h = function (a, b, c, d) {
                    c = c || [];
                    var f = b = b || B;
                    if (1 !== b.nodeType && 9 !== b.nodeType)return [];
                    if (!a || "string" !== typeof a)return c;
                    var t, g, l, Q, m, w = !0, y = h.isXML(b), u = [], ca = a;
                    do if (e.exec(""), t = e.exec(ca))if (ca = t[3], u.push(t[1]), t[2]) {
                        Q = t[3];
                        break
                    } while (t);
                    if (1 < u.length && x.exec(a))if (2 === u.length && k.relative[u[0]])g = A(u[0] + u[1], b); else for (g = k.relative[u[0]] ? [b] : h(u.shift(), b); u.length;)a = u.shift(), k.relative[a] &&
                    (a += u.shift()), g = A(a, g); else if (!d && 1 < u.length && 9 === b.nodeType && !y && k.match.ID.test(u[0]) && !k.match.ID.test(u[u.length - 1]) && (t = h.find(u.shift(), b, y), b = t.expr ? h.filter(t.expr, t.set)[0] : t.set[0]), b)for (t = d ? {
                        expr: u.pop(),
                        set: z(d)
                    } : h.find(u.pop(), 1 !== u.length || "~" !== u[0] && "+" !== u[0] || !b.parentNode ? b : b.parentNode, y), g = t.expr ? h.filter(t.expr, t.set) : t.set, 0 < u.length ? l = z(g) : w = !1; u.length;)t = m = u.pop(), k.relative[m] ? t = u.pop() : m = "", null == t && (t = b), k.relative[m](l, t, y); else l = [];
                    l || (l = g);
                    l || h.error(m || a);
                    if ("[object Array]" ===
                        q.call(l))if (w)if (b && 1 === b.nodeType)for (a = 0; null != l[a]; a++)l[a] && (!0 === l[a] || 1 === l[a].nodeType && h.contains(b, l[a])) && c.push(g[a]); else for (a = 0; null != l[a]; a++)l[a] && 1 === l[a].nodeType && c.push(g[a]); else c.push.apply(c, l); else z(l, c);
                    Q && (h(Q, f, c, d), h.uniqueSort(c));
                    return c
                };
                h.uniqueSort = function (a) {
                    if (y && (d = f, a.sort(y), d))for (var b = 1; b < a.length; b++)a[b] === a[b - 1] && a.splice(b--, 1);
                    return a
                };
                h.matches = function (a, b) {
                    return h(a, null, null, b)
                };
                h.matchesSelector = function (a, b) {
                    return 0 < h(b, null, null, [a]).length
                };
                h.find = function (a, b, e) {
                    var c;
                    if (!a)return [];
                    for (var q = 0, d = k.order.length; q < d; q++) {
                        var f, g = k.order[q];
                        if (f = k.leftMatch[g].exec(a)) {
                            var h = f[1];
                            f.splice(1, 1);
                            if ("\\" !== h.substr(h.length - 1) && (f[1] = (f[1] || "").replace(t, ""), c = k.find[g](f, b, e), null != c)) {
                                a = a.replace(k.match[g], "");
                                break
                            }
                        }
                    }
                    c || (c = "undefined" !== typeof b.getElementsByTagName ? b.getElementsByTagName("*") : []);
                    return {set: c, expr: a}
                };
                h.filter = function (a, b, e, c) {
                    for (var q, d, f = a, t = [], g = b, x = b && b[0] && h.isXML(b[0]); a && b.length;) {
                        for (var l in k.filter)if (null !=
                            (q = k.leftMatch[l].exec(a)) && q[2]) {
                            var Q, m, z = k.filter[l];
                            m = q[1];
                            d = !1;
                            q.splice(1, 1);
                            if ("\\" !== m.substr(m.length - 1)) {
                                g === t && (t = []);
                                if (k.preFilter[l])if (q = k.preFilter[l](q, g, e, t, c, x), !q)d = Q = !0; else if (!0 === q)continue;
                                if (q)for (var w = 0; null != (m = g[w]); w++)if (m) {
                                    Q = z(m, q, w, g);
                                    var y = c ^ !!Q;
                                    e && null != Q ? y ? d = !0 : g[w] = !1 : y && (t.push(m), d = !0)
                                }
                                if (Q !== v) {
                                    e || (g = t);
                                    a = a.replace(k.match[l], "");
                                    if (!d)return [];
                                    break
                                }
                            }
                        }
                        if (a === f)if (null == d)h.error(a); else break;
                        f = a
                    }
                    return g
                };
                h.error = function (a) {
                    throw"Syntax error, unrecognized expression: " +
                    a;
                };
                var k = h.selectors = {
                    order: ["ID", "NAME", "TAG"],
                    match: {
                        ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                        TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                        CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                        PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                    },
                    leftMatch: {},
                    attrMap: {"class": "className", "for": "htmlFor"},
                    attrHandle: {
                        href: function (a) {
                            return a.getAttribute("href")
                        }, type: function (a) {
                            return a.getAttribute("type")
                        }
                    },
                    relative: {
                        "+": function (a, b) {
                            var e = "string" === typeof b, c = e && !g.test(b), e = e && !c;
                            c && (b = b.toLowerCase());
                            for (var c = 0, q = a.length, d; c < q; c++)if (d = a[c]) {
                                for (; (d = d.previousSibling) && 1 !== d.nodeType;);
                                a[c] = e || d && d.nodeName.toLowerCase() === b ? d || !1 : d === b
                            }
                            e && h.filter(b,
                                a, !0)
                        }, ">": function (a, b) {
                            var e, c = "string" === typeof b, q = 0, d = a.length;
                            if (c && !g.test(b))for (b = b.toLowerCase(); q < d; q++) {
                                if (e = a[q])e = e.parentNode, a[q] = e.nodeName.toLowerCase() === b ? e : !1
                            } else {
                                for (; q < d; q++)(e = a[q]) && (a[q] = c ? e.parentNode : e.parentNode === b);
                                c && h.filter(b, a, !0)
                            }
                        }, "": function (e, q, d) {
                            var f, t = c++, h = b;
                            "string" !== typeof q || g.test(q) || (f = q = q.toLowerCase(), h = a);
                            h("parentNode", q, t, e, f, d)
                        }, "~": function (e, q, d) {
                            var f, t = c++, h = b;
                            "string" !== typeof q || g.test(q) || (f = q = q.toLowerCase(), h = a);
                            h("previousSibling",
                                q, t, e, f, d)
                        }
                    },
                    find: {
                        ID: function (a, b, e) {
                            if ("undefined" !== typeof b.getElementById && !e)return (a = b.getElementById(a[1])) && a.parentNode ? [a] : []
                        }, NAME: function (a, b) {
                            if ("undefined" !== typeof b.getElementsByName) {
                                for (var e = [], c = b.getElementsByName(a[1]), q = 0, d = c.length; q < d; q++)c[q].getAttribute("name") === a[1] && e.push(c[q]);
                                return 0 === e.length ? null : e
                            }
                        }, TAG: function (a, b) {
                            if ("undefined" !== typeof b.getElementsByTagName)return b.getElementsByTagName(a[1])
                        }
                    },
                    preFilter: {
                        CLASS: function (a, b, e, c, q, d) {
                            a = " " + a[1].replace(t,
                                    "") + " ";
                            if (d)return a;
                            d = 0;
                            for (var f; null != (f = b[d]); d++)f && (q ^ (f.className && 0 <= (" " + f.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a)) ? e || c.push(f) : e && (b[d] = !1));
                            return !1
                        }, ID: function (a) {
                            return a[1].replace(t, "")
                        }, TAG: function (a, b) {
                            return a[1].replace(t, "").toLowerCase()
                        }, CHILD: function (a) {
                            if ("nth" === a[1]) {
                                a[2] || h.error(a[0]);
                                a[2] = a[2].replace(/^\+|\s*/g, "");
                                var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === a[2] && "2n" || "odd" === a[2] && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                                a[2] = b[1] + (b[2] || 1) -
                                    0;
                                a[3] = b[3] - 0
                            } else a[2] && h.error(a[0]);
                            a[0] = c++;
                            return a
                        }, ATTR: function (a, b, e, c, q, d) {
                            b = a[1] = a[1].replace(t, "");
                            !d && k.attrMap[b] && (a[1] = k.attrMap[b]);
                            a[4] = (a[4] || a[5] || "").replace(t, "");
                            "~=" === a[2] && (a[4] = " " + a[4] + " ");
                            return a
                        }, PSEUDO: function (a, b, c, q, d) {
                            if ("not" === a[1])if (1 < (e.exec(a[3]) || "").length || /^\w/.test(a[3]))a[3] = h(a[3], null, null, b); else return a = h.filter(a[3], b, c, 1 ^ d), c || q.push.apply(q, a), !1; else if (k.match.POS.test(a[0]) || k.match.CHILD.test(a[0]))return !0;
                            return a
                        }, POS: function (a) {
                            a.unshift(!0);
                            return a
                        }
                    },
                    filters: {
                        enabled: function (a) {
                            return !1 === a.disabled && "hidden" !== a.type
                        }, disabled: function (a) {
                            return !0 === a.disabled
                        }, checked: function (a) {
                            return !0 === a.checked
                        }, selected: function (a) {
                            a.parentNode && a.parentNode.selectedIndex;
                            return !0 === a.selected
                        }, parent: function (a) {
                            return !!a.firstChild
                        }, empty: function (a) {
                            return !a.firstChild
                        }, has: function (a, b, e) {
                            return !!h(e[3], a).length
                        }, header: function (a) {
                            return /h\d/i.test(a.nodeName)
                        }, text: function (a) {
                            var b = a.getAttribute("type"), e = a.type;
                            return "input" === a.nodeName.toLowerCase() &&
                                "text" === e && (b === e || null === b)
                        }, radio: function (a) {
                            return "input" === a.nodeName.toLowerCase() && "radio" === a.type
                        }, checkbox: function (a) {
                            return "input" === a.nodeName.toLowerCase() && "checkbox" === a.type
                        }, file: function (a) {
                            return "input" === a.nodeName.toLowerCase() && "file" === a.type
                        }, password: function (a) {
                            return "input" === a.nodeName.toLowerCase() && "password" === a.type
                        }, submit: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return ("input" === b || "button" === b) && "submit" === a.type
                        }, image: function (a) {
                            return "input" === a.nodeName.toLowerCase() &&
                                "image" === a.type
                        }, reset: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return ("input" === b || "button" === b) && "reset" === a.type
                        }, button: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && "button" === a.type || "button" === b
                        }, input: function (a) {
                            return /input|select|textarea|button/i.test(a.nodeName)
                        }, focus: function (a) {
                            return a === a.ownerDocument.activeElement
                        }
                    },
                    setFilters: {
                        first: function (a, b) {
                            return 0 === b
                        }, last: function (a, b, e, c) {
                            return b === c.length - 1
                        }, even: function (a, b) {
                            return 0 === b % 2
                        }, odd: function (a, b) {
                            return 1 ===
                                b % 2
                        }, lt: function (a, b, e) {
                            return b < e[3] - 0
                        }, gt: function (a, b, e) {
                            return b > e[3] - 0
                        }, nth: function (a, b, e) {
                            return e[3] - 0 === b
                        }, eq: function (a, b, e) {
                            return e[3] - 0 === b
                        }
                    },
                    filter: {
                        PSEUDO: function (a, b, e, c) {
                            var q = b[1], d = k.filters[q];
                            if (d)return d(a, e, b, c);
                            if ("contains" === q)return 0 <= (a.textContent || a.innerText || h.getText([a]) || "").indexOf(b[3]);
                            if ("not" === q) {
                                b = b[3];
                                e = 0;
                                for (c = b.length; e < c; e++)if (b[e] === a)return !1;
                                return !0
                            }
                            h.error(q)
                        }, CHILD: function (a, b) {
                            var e = b[1], c = a;
                            switch (e) {
                                case "only":
                                case "first":
                                    for (; c = c.previousSibling;)if (1 ===
                                        c.nodeType)return !1;
                                    if ("first" === e)return !0;
                                    c = a;
                                case "last":
                                    for (; c = c.nextSibling;)if (1 === c.nodeType)return !1;
                                    return !0;
                                case "nth":
                                    var e = b[2], q = b[3];
                                    if (1 === e && 0 === q)return !0;
                                    var d = b[0], f = a.parentNode;
                                    if (f && (f.sizcache !== d || !a.nodeIndex)) {
                                        for (var t = 0, c = f.firstChild; c; c = c.nextSibling)1 === c.nodeType && (c.nodeIndex = ++t);
                                        f.sizcache = d
                                    }
                                    c = a.nodeIndex - q;
                                    return 0 === e ? 0 === c : 0 === c % e && 0 <= c / e
                            }
                        }, ID: function (a, b) {
                            return 1 === a.nodeType && a.getAttribute("id") === b
                        }, TAG: function (a, b) {
                            return "*" === b && 1 === a.nodeType || a.nodeName.toLowerCase() ===
                                b
                        }, CLASS: function (a, b) {
                            return -1 < (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b)
                        }, ATTR: function (a, b) {
                            var e = b[1], e = k.attrHandle[e] ? k.attrHandle[e](a) : null != a[e] ? a[e] : a.getAttribute(e), c = e + "", q = b[2], d = b[4];
                            return null == e ? "!=" === q : "=" === q ? c === d : "*=" === q ? 0 <= c.indexOf(d) : "~=" === q ? 0 <= (" " + c + " ").indexOf(d) : d ? "!=" === q ? c !== d : "^=" === q ? 0 === c.indexOf(d) : "$=" === q ? c.substr(c.length - d.length) === d : "|=" === q ? c === d || c.substr(0, d.length + 1) === d + "-" : !1 : c && !1 !== e
                        }, POS: function (a, b, e, c) {
                            var q = k.setFilters[b[2]];
                            if (q)return q(a, e, b, c)
                        }
                    }
                }, x = k.match.POS, l = function (a, b) {
                    return "\\" + (b - 0 + 1)
                }, m;
                for (m in k.match)k.match[m] = new RegExp(k.match[m].source + /(?![^\[]*\])(?![^\(]*\))/.source), k.leftMatch[m] = new RegExp(/(^(?:.|\r|\n)*?)/.source + k.match[m].source.replace(/\\(\d+)/g, l));
                var z = function (a, b) {
                    a = Array.prototype.slice.call(a, 0);
                    return b ? (b.push.apply(b, a), b) : a
                };
                try {
                    Array.prototype.slice.call(B.documentElement.childNodes, 0)[0].nodeType
                } catch (w) {
                    z = function (a, b) {
                        var e = 0, c = b || [];
                        if ("[object Array]" === q.call(a))Array.prototype.push.apply(c,
                            a); else if ("number" === typeof a.length)for (var d = a.length; e < d; e++)c.push(a[e]); else for (; a[e]; e++)c.push(a[e]);
                        return c
                    }
                }
                var y, u;
                B.documentElement.compareDocumentPosition ? y = function (a, b) {
                    return a === b ? (d = !0, 0) : a.compareDocumentPosition && b.compareDocumentPosition ? a.compareDocumentPosition(b) & 4 ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
                } : (y = function (a, b) {
                    if (a === b)return d = !0, 0;
                    if (a.sourceIndex && b.sourceIndex)return a.sourceIndex - b.sourceIndex;
                    var e, c, q = [], f = [];
                    e = a.parentNode;
                    c = b.parentNode;
                    var t = e;
                    if (e === c)return u(a,
                        b);
                    if (!e)return -1;
                    if (!c)return 1;
                    for (; t;)q.unshift(t), t = t.parentNode;
                    for (t = c; t;)f.unshift(t), t = t.parentNode;
                    e = q.length;
                    c = f.length;
                    for (t = 0; t < e && t < c; t++)if (q[t] !== f[t])return u(q[t], f[t]);
                    return t === e ? u(a, f[t], -1) : u(q[t], b, 1)
                }, u = function (a, b, e) {
                    if (a === b)return e;
                    for (a = a.nextSibling; a;) {
                        if (a === b)return -1;
                        a = a.nextSibling
                    }
                    return 1
                });
                h.getText = function (a) {
                    for (var b = "", e, c = 0; a[c]; c++)e = a[c], 3 === e.nodeType || 4 === e.nodeType ? b += e.nodeValue : 8 !== e.nodeType && (b += h.getText(e.childNodes));
                    return b
                };
                (function () {
                    var a =
                        B.createElement("div"), b = "script" + (new Date).getTime(), e = B.documentElement;
                    a.innerHTML = "<a name='" + b + "'/>";
                    e.insertBefore(a, e.firstChild);
                    B.getElementById(b) && (k.find.ID = function (a, b, e) {
                        if ("undefined" !== typeof b.getElementById && !e)return (b = b.getElementById(a[1])) ? b.id === a[1] || "undefined" !== typeof b.getAttributeNode && b.getAttributeNode("id").nodeValue === a[1] ? [b] : v : []
                    }, k.filter.ID = function (a, b) {
                        var e = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id");
                        return 1 === a.nodeType && e && e.nodeValue ===
                            b
                    });
                    e.removeChild(a);
                    e = a = null
                })();
                (function () {
                    var a = B.createElement("div");
                    a.appendChild(B.createComment(""));
                    0 < a.getElementsByTagName("*").length && (k.find.TAG = function (a, b) {
                        var e = b.getElementsByTagName(a[1]);
                        if ("*" === a[1]) {
                            for (var c = [], q = 0; e[q]; q++)1 === e[q].nodeType && c.push(e[q]);
                            e = c
                        }
                        return e
                    });
                    a.innerHTML = "<a href='#'></a>";
                    a.firstChild && "undefined" !== typeof a.firstChild.getAttribute && "#" !== a.firstChild.getAttribute("href") && (k.attrHandle.href = function (a) {
                        return a.getAttribute("href", 2)
                    });
                    a = null
                })();
                B.querySelectorAll && function () {
                    var a = h, b = B.createElement("div");
                    b.innerHTML = "<p class='TEST'></p>";
                    if (!b.querySelectorAll || 0 !== b.querySelectorAll(".TEST").length) {
                        h = function (b, e, c, q) {
                            e = e || B;
                            if (!q && !h.isXML(e)) {
                                var d = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                                if (d && (1 === e.nodeType || 9 === e.nodeType)) {
                                    if (d[1])return z(e.getElementsByTagName(b), c);
                                    if (d[2] && k.find.CLASS && e.getElementsByClassName)return z(e.getElementsByClassName(d[2]), c)
                                }
                                if (9 === e.nodeType) {
                                    if ("body" === b && e.body)return z([e.body], c);
                                    if (d &&
                                        d[3]) {
                                        var f = e.getElementById(d[3]);
                                        if (f && f.parentNode) {
                                            if (f.id === d[3])return z([f], c)
                                        } else return z([], c)
                                    }
                                    try {
                                        return z(e.querySelectorAll(b), c)
                                    } catch (t) {
                                    }
                                } else if (1 === e.nodeType && "object" !== e.nodeName.toLowerCase()) {
                                    var d = e, g = (f = e.getAttribute("id")) || "__sizzle__", x = e.parentNode, l = /^\s*[+~]/.test(b);
                                    f ? g = g.replace(/'/g, "\\$&") : e.setAttribute("id", g);
                                    l && x && (e = e.parentNode);
                                    try {
                                        if (!l || x)return z(e.querySelectorAll("[id='" + g + "'] " + b), c)
                                    } catch (Q) {
                                    } finally {
                                        f || d.removeAttribute("id")
                                    }
                                }
                            }
                            return a(b, e, c, q)
                        };
                        for (var e in a)h[e] = a[e];
                        b = null
                    }
                }();
                (function () {
                    var a = B.documentElement, b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
                    if (b) {
                        var e = !b.call(B.createElement("div"), "div"), c = !1;
                        try {
                            b.call(B.documentElement, "[test!='']:sizzle")
                        } catch (q) {
                            c = !0
                        }
                        h.matchesSelector = function (a, q) {
                            q = q.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                            if (!h.isXML(a))try {
                                if (c || !k.match.PSEUDO.test(q) && !/!=/.test(q)) {
                                    var d = b.call(a, q);
                                    if (d || !e || a.document && 11 !== a.document.nodeType)return d
                                }
                            } catch (f) {
                            }
                            return 0 <
                                h(q, null, null, [a]).length
                        }
                    }
                })();
                (function () {
                    var a = B.createElement("div");
                    a.innerHTML = "<div class='test e'></div><div class='test'></div>";
                    a.getElementsByClassName && 0 !== a.getElementsByClassName("e").length && (a.lastChild.className = "e", 1 !== a.getElementsByClassName("e").length && (k.order.splice(1, 0, "CLASS"), k.find.CLASS = function (a, b, e) {
                        if ("undefined" !== typeof b.getElementsByClassName && !e)return b.getElementsByClassName(a[1])
                    }, a = null))
                })();
                h.contains = B.documentElement.contains ? function (a, b) {
                    return a !==
                        b && (a.contains ? a.contains(b) : !0)
                } : B.documentElement.compareDocumentPosition ? function (a, b) {
                    return !!(a.compareDocumentPosition(b) & 16)
                } : function () {
                    return !1
                };
                h.isXML = function (a) {
                    return (a = (a ? a.ownerDocument || a : 0).documentElement) ? "HTML" !== a.nodeName : !1
                };
                var A = function (a, b) {
                    for (var e, c = [], q = "", d = b.nodeType ? [b] : b; e = k.match.PSEUDO.exec(a);)q += e[0], a = a.replace(k.match.PSEUDO, "");
                    a = k.relative[a] ? a + "*" : a;
                    e = 0;
                    for (var f = d.length; e < f; e++)h(a, d[e], c);
                    return h.filter(q, c)
                };
                p.find = h;
                p.expr = h.selectors;
                p.expr[":"] =
                    p.expr.filters;
                p.unique = h.uniqueSort;
                p.text = h.getText;
                p.isXMLDoc = h.isXML;
                p.contains = h.contains
            })();
            var Ba = /Until$/, fb = /^(?:parents|prevUntil|prevAll)/, gb = /,/, ab = /^.[^:#\[\.,]*$/, hb = Array.prototype.slice, La = p.expr.match.POS, ib = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            p.fn.extend({
                find: function (a) {
                    var b = this, e, c;
                    if ("string" !== typeof a)return p(a).filter(function () {
                        e = 0;
                        for (c = b.length; e < c; e++)if (p.contains(b[e], this))return !0
                    });
                    var q = this.pushStack("", "find", a), d, f, t;
                    e = 0;
                    for (c = this.length; e < c; e++)if (d =
                            q.length, p.find(a, this[e], q), 0 < e)for (f = d; f < q.length; f++)for (t = 0; t < d; t++)if (q[t] === q[f]) {
                        q.splice(f--, 1);
                        break
                    }
                    return q
                }, has: function (a) {
                    var b = p(a);
                    return this.filter(function () {
                        for (var a = 0, e = b.length; a < e; a++)if (p.contains(this, b[a]))return !0
                    })
                }, not: function (b) {
                    return this.pushStack(a(this, b, !1), "not", b)
                }, filter: function (b) {
                    return this.pushStack(a(this, b, !0), "filter", b)
                }, is: function (a) {
                    return !!a && ("string" === typeof a ? 0 < p.filter(a, this).length : 0 < this.filter(a).length)
                }, closest: function (a, b) {
                    var e = [],
                        c, q, d = this[0];
                    if (p.isArray(a)) {
                        var f, t = {}, g = 1;
                        if (d && a.length) {
                            c = 0;
                            for (q = a.length; c < q; c++)f = a[c], t[f] || (t[f] = La.test(f) ? p(f, b || this.context) : f);
                            for (; d && d.ownerDocument && d !== b;) {
                                for (f in t)c = t[f], (c.jquery ? -1 < c.index(d) : p(d).is(c)) && e.push({
                                    selector: f,
                                    elem: d,
                                    level: g
                                });
                                d = d.parentNode;
                                g++
                            }
                        }
                        return e
                    }
                    f = La.test(a) || "string" !== typeof a ? p(a, b || this.context) : 0;
                    c = 0;
                    for (q = this.length; c < q; c++)for (d = this[c]; d;)if (f ? -1 < f.index(d) : p.find.matchesSelector(d, a)) {
                        e.push(d);
                        break
                    } else if (d = d.parentNode, !d || !d.ownerDocument ||
                        d === b || 11 === d.nodeType)break;
                    e = 1 < e.length ? p.unique(e) : e;
                    return this.pushStack(e, "closest", a)
                }, index: function (a) {
                    return a ? "string" === typeof a ? p.inArray(this[0], p(a)) : p.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
                }, add: function (a, e) {
                    var c = "string" === typeof a ? p(a, e) : p.makeArray(a && a.nodeType ? [a] : a), q = p.merge(this.get(), c);
                    return this.pushStack(b(c[0]) || b(q[0]) ? q : p.unique(q))
                }, andSelf: function () {
                    return this.add(this.prevObject)
                }
            });
            p.each({
                parent: function (a) {
                    return (a =
                        a.parentNode) && 11 !== a.nodeType ? a : null
                }, parents: function (a) {
                    return p.dir(a, "parentNode")
                }, parentsUntil: function (a, b, e) {
                    return p.dir(a, "parentNode", e)
                }, next: function (a) {
                    return p.nth(a, 2, "nextSibling")
                }, prev: function (a) {
                    return p.nth(a, 2, "previousSibling")
                }, nextAll: function (a) {
                    return p.dir(a, "nextSibling")
                }, prevAll: function (a) {
                    return p.dir(a, "previousSibling")
                }, nextUntil: function (a, b, e) {
                    return p.dir(a, "nextSibling", e)
                }, prevUntil: function (a, b, e) {
                    return p.dir(a, "previousSibling", e)
                }, siblings: function (a) {
                    return p.sibling(a.parentNode.firstChild,
                        a)
                }, children: function (a) {
                    return p.sibling(a.firstChild)
                }, contents: function (a) {
                    return p.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : p.makeArray(a.childNodes)
                }
            }, function (a, b) {
                p.fn[a] = function (e, c) {
                    var q = p.map(this, b, e), d = hb.call(arguments);
                    Ba.test(a) || (c = e);
                    c && "string" === typeof c && (q = p.filter(c, q));
                    q = 1 < this.length && !ib[a] ? p.unique(q) : q;
                    (1 < this.length || gb.test(c)) && fb.test(a) && (q = q.reverse());
                    return this.pushStack(q, a, d.join(","))
                }
            });
            p.extend({
                filter: function (a, b, e) {
                    e && (a = ":not(" +
                        a + ")");
                    return 1 === b.length ? p.find.matchesSelector(b[0], a) ? [b[0]] : [] : p.find.matches(a, b)
                }, dir: function (a, b, e) {
                    var c = [];
                    for (a = a[b]; a && 9 !== a.nodeType && (e === v || 1 !== a.nodeType || !p(a).is(e));)1 === a.nodeType && c.push(a), a = a[b];
                    return c
                }, nth: function (a, b, e, c) {
                    b = b || 1;
                    for (c = 0; a && (1 !== a.nodeType || ++c !== b); a = a[e]);
                    return a
                }, sibling: function (a, b) {
                    for (var e = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && e.push(a);
                    return e
                }
            });
            var jb = / jQuery\d+="(?:\d+|null)"/g, Ga = /^\s+/, Ma = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
                Na = /<([\w:]+)/, kb = /<tbody/i, lb = /<|&#?\w+;/, Oa = /<(?:script|object|embed|option|style)/i, Pa = /checked\s*(?:[^=]|=\s*.checked.)/i, mb = /\/(java|ecma)script/i, bb = /^\s*<!(?:\[CDATA\[|\-\-)/, O = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    legend: [1, "<fieldset>", "</fieldset>"],
                    thead: [1, "<table>", "</table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                    area: [1, "<map>", "</map>"],
                    _default: [0,
                        "", ""]
                };
            O.optgroup = O.option;
            O.tbody = O.tfoot = O.colgroup = O.caption = O.thead;
            O.th = O.td;
            p.support.htmlSerialize || (O._default = [1, "div<div>", "</div>"]);
            p.fn.extend({
                text: function (a) {
                    return p.isFunction(a) ? this.each(function (b) {
                        var e = p(this);
                        e.text(a.call(this, b, e.text()))
                    }) : "object" !== typeof a && a !== v ? this.empty().append((this[0] && this[0].ownerDocument || B).createTextNode(a)) : p.text(this)
                }, wrapAll: function (a) {
                    if (p.isFunction(a))return this.each(function (b) {
                        p(this).wrapAll(a.call(this, b))
                    });
                    if (this[0]) {
                        var b =
                            p(a, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && b.insertBefore(this[0]);
                        b.map(function () {
                            for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;)a = a.firstChild;
                            return a
                        }).append(this)
                    }
                    return this
                }, wrapInner: function (a) {
                    return p.isFunction(a) ? this.each(function (b) {
                        p(this).wrapInner(a.call(this, b))
                    }) : this.each(function () {
                        var b = p(this), e = b.contents();
                        e.length ? e.wrapAll(a) : b.append(a)
                    })
                }, wrap: function (a) {
                    return this.each(function () {
                        p(this).wrapAll(a)
                    })
                }, unwrap: function () {
                    return this.parent().each(function () {
                        p.nodeName(this,
                            "body") || p(this).replaceWith(this.childNodes)
                    }).end()
                }, append: function () {
                    return this.domManip(arguments, !0, function (a) {
                        1 === this.nodeType && this.appendChild(a)
                    })
                }, prepend: function () {
                    return this.domManip(arguments, !0, function (a) {
                        1 === this.nodeType && this.insertBefore(a, this.firstChild)
                    })
                }, before: function () {
                    if (this[0] && this[0].parentNode)return this.domManip(arguments, !1, function (a) {
                        this.parentNode.insertBefore(a, this)
                    });
                    if (arguments.length) {
                        var a = p(arguments[0]);
                        a.push.apply(a, this.toArray());
                        return this.pushStack(a,
                            "before", arguments)
                    }
                }, after: function () {
                    if (this[0] && this[0].parentNode)return this.domManip(arguments, !1, function (a) {
                        this.parentNode.insertBefore(a, this.nextSibling)
                    });
                    if (arguments.length) {
                        var a = this.pushStack(this, "after", arguments);
                        a.push.apply(a, p(arguments[0]).toArray());
                        return a
                    }
                }, remove: function (a, b) {
                    for (var e = 0, c; null != (c = this[e]); e++)if (!a || p.filter(a, [c]).length)b || 1 !== c.nodeType || (p.cleanData(c.getElementsByTagName("*")), p.cleanData([c])), c.parentNode && c.parentNode.removeChild(c);
                    return this
                },
                empty: function () {
                    for (var a = 0, b; null != (b = this[a]); a++)for (1 === b.nodeType && p.cleanData(b.getElementsByTagName("*")); b.firstChild;)b.removeChild(b.firstChild);
                    return this
                }, clone: function (a, b) {
                    a = null == a ? !1 : a;
                    b = null == b ? a : b;
                    return this.map(function () {
                        return p.clone(this, a, b)
                    })
                }, html: function (a) {
                    if (a === v)return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(jb, "") : null;
                    if ("string" !== typeof a || Oa.test(a) || !p.support.leadingWhitespace && Ga.test(a) || O[(Na.exec(a) || ["", ""])[1].toLowerCase()])p.isFunction(a) ?
                        this.each(function (b) {
                            var e = p(this);
                            e.html(a.call(this, b, e.html()))
                        }) : this.empty().append(a); else {
                        a = a.replace(Ma, "<$1></$2>");
                        try {
                            for (var b = 0, e = this.length; b < e; b++)1 === this[b].nodeType && (p.cleanData(this[b].getElementsByTagName("*")), this[b].innerHTML = a)
                        } catch (c) {
                            this.empty().append(a)
                        }
                    }
                    return this
                }, replaceWith: function (a) {
                    if (this[0] && this[0].parentNode) {
                        if (p.isFunction(a))return this.each(function (b) {
                            var e = p(this), c = e.html();
                            e.replaceWith(a.call(this, b, c))
                        });
                        "string" !== typeof a && (a = p(a).detach());
                        return this.each(function () {
                            var b = this.nextSibling, e = this.parentNode;
                            p(this).remove();
                            b ? p(b).before(a) : p(e).append(a)
                        })
                    }
                    return this.length ? this.pushStack(p(p.isFunction(a) ? a() : a), "replaceWith", a) : this
                }, detach: function (a) {
                    return this.remove(a, !0)
                }, domManip: function (a, b, c) {
                    var q, d, f, t = a[0], g = [];
                    if (!p.support.checkClone && 3 === arguments.length && "string" === typeof t && Pa.test(t))return this.each(function () {
                        p(this).domManip(a, b, c, !0)
                    });
                    if (p.isFunction(t))return this.each(function (e) {
                        var q = p(this);
                        a[0] = t.call(this,
                            e, b ? q.html() : v);
                        q.domManip(a, b, c)
                    });
                    if (this[0]) {
                        q = t && t.parentNode;
                        q = p.support.parentNode && q && 11 === q.nodeType && q.childNodes.length === this.length ? {fragment: q} : p.buildFragment(a, this, g);
                        f = q.fragment;
                        if (d = 1 === f.childNodes.length ? f = f.firstChild : f.firstChild) {
                            b = b && p.nodeName(d, "tr");
                            for (var h = 0, k = this.length, x = k - 1; h < k; h++)c.call(b ? e(this[h], d) : this[h], q.cacheable || 1 < k && h < x ? p.clone(f, !0, !0) : f)
                        }
                        g.length && p.each(g, w)
                    }
                    return this
                }
            });
            p.buildFragment = function (a, b, e) {
                var c, q, d, f;
                b && b[0] && (f = b[0].ownerDocument ||
                    b[0]);
                f.createDocumentFragment || (f = B);
                1 === a.length && "string" === typeof a[0] && 512 > a[0].length && f === B && "<" === a[0].charAt(0) && !Oa.test(a[0]) && (p.support.checkClone || !Pa.test(a[0])) && (q = !0, (d = p.fragments[a[0]]) && 1 !== d && (c = d));
                c || (c = f.createDocumentFragment(), p.clean(a, f, c, e));
                q && (p.fragments[a[0]] = d ? c : 1);
                return {fragment: c, cacheable: q}
            };
            p.fragments = {};
            p.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (a, b) {
                p.fn[a] = function (e) {
                    var c =
                        [];
                    e = p(e);
                    var q = 1 === this.length && this[0].parentNode;
                    if (q && 11 === q.nodeType && 1 === q.childNodes.length && 1 === e.length)return e[b](this[0]), this;
                    for (var q = 0, d = e.length; q < d; q++) {
                        var f = (0 < q ? this.clone(!0) : this).get();
                        p(e[q])[b](f);
                        c = c.concat(f)
                    }
                    return this.pushStack(c, a, e.selector)
                }
            });
            p.extend({
                clone: function (a, b, e) {
                    var c = a.cloneNode(!0), d, f, g;
                    if (!(p.support.noCloneEvent && p.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || p.isXMLDoc(a)))for (t(a, c), d = x(a), f = x(c), g = 0; d[g]; ++g)f[g] && t(d[g], f[g]);
                    if (b &&
                        (q(a, c), e))for (d = x(a), f = x(c), g = 0; d[g]; ++g)q(d[g], f[g]);
                    return c
                }, clean: function (a, b, e, c) {
                    b = b || B;
                    "undefined" === typeof b.createElement && (b = b.ownerDocument || b[0] && b[0].ownerDocument || B);
                    for (var q = [], d, f = 0, t; null != (t = a[f]); f++)if ("number" === typeof t && (t += ""), t) {
                        if ("string" === typeof t)if (lb.test(t)) {
                            t = t.replace(Ma, "<$1></$2>");
                            d = (Na.exec(t) || ["", ""])[1].toLowerCase();
                            var g = O[d] || O._default, h = g[0], k = b.createElement("div");
                            for (k.innerHTML = g[1] + t + g[2]; h--;)k = k.lastChild;
                            if (!p.support.tbody)for (h = kb.test(t),
                                                          g = "table" !== d || h ? "<table>" !== g[1] || h ? [] : k.childNodes : k.firstChild && k.firstChild.childNodes, d = g.length - 1; 0 <= d; --d)p.nodeName(g[d], "tbody") && !g[d].childNodes.length && g[d].parentNode.removeChild(g[d]);
                            !p.support.leadingWhitespace && Ga.test(t) && k.insertBefore(b.createTextNode(Ga.exec(t)[0]), k.firstChild);
                            t = k.childNodes
                        } else t = b.createTextNode(t);
                        var x;
                        if (!p.support.appendChecked)if (t[0] && "number" === typeof(x = t.length))for (d = 0; d < x; d++)u(t[d]); else u(t);
                        t.nodeType ? q.push(t) : q = p.merge(q, t)
                    }
                    if (e)for (a = function (a) {
                        return !a.type ||
                            mb.test(a.type)
                    }, f = 0; q[f]; f++)!c || !p.nodeName(q[f], "script") || q[f].type && "text/javascript" !== q[f].type.toLowerCase() ? (1 === q[f].nodeType && (b = p.grep(q[f].getElementsByTagName("script"), a), q.splice.apply(q, [f + 1, 0].concat(b))), e.appendChild(q[f])) : c.push(q[f].parentNode ? q[f].parentNode.removeChild(q[f]) : q[f]);
                    return q
                }, cleanData: function (a) {
                    for (var b, e, c = p.cache, q = p.expando, d = p.event.special, f = p.support.deleteExpando, t = 0, g; null != (g = a[t]); t++)if (!g.nodeName || !p.noData[g.nodeName.toLowerCase()])if (e = g[p.expando]) {
                        if ((b =
                                c[e] && c[e][q]) && b.events) {
                            for (var h in b.events)d[h] ? p.event.remove(g, h) : p.removeEvent(g, h, b.handle);
                            b.handle && (b.handle.elem = null)
                        }
                        f ? delete g[p.expando] : g.removeAttribute && g.removeAttribute(p.expando);
                        delete c[e]
                    }
                }
            });
            var Ha = /alpha\([^)]*\)/i, nb = /opacity=([^)]*)/, ob = /([A-Z]|^ms)/g, Qa = /^-?\d+(?:px)?$/i, pb = /^-?\d/, qb = /^([\-+])=([\-+.\de]+)/, rb = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }, cb = ["Left", "Right"], db = ["Top", "Bottom"], ea, Ra, Sa;
            p.fn.css = function (a, b) {
                return 2 === arguments.length &&
                b === v ? this : p.access(this, a, b, !0, function (a, b, e) {
                    return e !== v ? p.style(a, b, e) : p.css(a, b)
                })
            };
            p.extend({
                cssHooks: {
                    opacity: {
                        get: function (a, b) {
                            if (b) {
                                var e = ea(a, "opacity", "opacity");
                                return "" === e ? "1" : e
                            }
                            return a.style.opacity
                        }
                    }
                },
                cssNumber: {
                    fillOpacity: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {"float": p.support.cssFloat ? "cssFloat" : "styleFloat"},
                style: function (a, b, e, c) {
                    if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                        var q, d = p.camelCase(b), f = a.style, t = p.cssHooks[d];
                        b = p.cssProps[d] || d;
                        if (e !== v) {
                            if (c = typeof e, "string" === c && (q = qb.exec(e)) && (e = +(q[1] + 1) * +q[2] + parseFloat(p.css(a, b)), c = "number"), !(null == e || "number" === c && isNaN(e) || ("number" !== c || p.cssNumber[d] || (e += "px"), t && "set" in t && (e = t.set(a, e)) === v)))try {
                                f[b] = e
                            } catch (g) {
                            }
                        } else return t && "get" in t && (q = t.get(a, !1, c)) !== v ? q : f[b]
                    }
                },
                css: function (a, b, e) {
                    var c, q;
                    b = p.camelCase(b);
                    q = p.cssHooks[b];
                    b = p.cssProps[b] || b;
                    "cssFloat" === b && (b = "float");
                    if (q && "get" in q && (c = q.get(a, !0, e)) !== v)return c;
                    if (ea)return ea(a, b)
                },
                swap: function (a,
                                b, e) {
                    var c = {}, q;
                    for (q in b)c[q] = a.style[q], a.style[q] = b[q];
                    e.call(a);
                    for (q in b)a.style[q] = c[q]
                }
            });
            p.curCSS = p.css;
            p.each(["height", "width"], function (a, b) {
                p.cssHooks[b] = {
                    get: function (a, e, c) {
                        var q;
                        if (e) {
                            if (0 !== a.offsetWidth)return A(a, b, c);
                            p.swap(a, rb, function () {
                                q = A(a, b, c)
                            });
                            return q
                        }
                    }, set: function (a, b) {
                        if (Qa.test(b)) {
                            if (b = parseFloat(b), 0 <= b)return b + "px"
                        } else return b
                    }
                }
            });
            p.support.opacity || (p.cssHooks.opacity = {
                get: function (a, b) {
                    return nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) ||
                        "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
                }, set: function (a, b) {
                    var e = a.style, c = a.currentStyle, q = p.isNaN(b) ? "" : "alpha(opacity=" + 100 * b + ")", d = c && c.filter || e.filter || "";
                    e.zoom = 1;
                    if (1 <= b && "" === p.trim(d.replace(Ha, "")) && (e.removeAttribute("filter"), c && !c.filter))return;
                    e.filter = Ha.test(d) ? d.replace(Ha, q) : d + " " + q
                }
            });
            p(function () {
                p.support.reliableMarginRight || (p.cssHooks.marginRight = {
                    get: function (a, b) {
                        var e;
                        p.swap(a, {display: "inline-block"}, function () {
                            e = b ? ea(a, "margin-right", "marginRight") : a.style.marginRight
                        });
                        return e
                    }
                })
            });
            B.defaultView && B.defaultView.getComputedStyle && (Ra = function (a, b) {
                var e, c;
                b = b.replace(ob, "-$1").toLowerCase();
                if (!(c = a.ownerDocument.defaultView))return v;
                if (c = c.getComputedStyle(a, null))e = c.getPropertyValue(b), "" !== e || p.contains(a.ownerDocument.documentElement, a) || (e = p.style(a, b));
                return e
            });
            B.documentElement.currentStyle && (Sa = function (a, b) {
                var e, c = a.currentStyle && a.currentStyle[b], q = a.runtimeStyle && a.runtimeStyle[b], d = a.style;
                !Qa.test(c) && pb.test(c) && (e = d.left, q && (a.runtimeStyle.left =
                    a.currentStyle.left), d.left = "fontSize" === b ? "1em" : c || 0, c = d.pixelLeft + "px", d.left = e, q && (a.runtimeStyle.left = q));
                return "" === c ? "auto" : c
            });
            ea = Ra || Sa;
            p.expr && p.expr.filters && (p.expr.filters.hidden = function (a) {
                var b = a.offsetHeight;
                return 0 === a.offsetWidth && 0 === b || !p.support.reliableHiddenOffsets && "none" === (a.style.display || p.css(a, "display"))
            }, p.expr.filters.visible = function (a) {
                return !p.expr.filters.hidden(a)
            });
            var sb = /%20/g, eb = /\[\]$/, Ta = /\r?\n/g, tb = /#.*$/, ub = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, vb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
                wb = /^(?:GET|HEAD)$/, xb = /^\/\//, Ua = /\?/, yb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, zb = /^(?:select|textarea)/i, Ja = /\s+/, Ab = /([?&])_=[^&]*/, Va = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, Wa = p.fn.load, Ea = {}, Xa = {}, V, W, Ya = ["*/"] + ["*"];
            try {
                V = M.href
            } catch (Gb) {
                V = B.createElement("a"), V.href = "", V = V.href
            }
            W = Va.exec(V.toLowerCase()) || [];
            p.fn.extend({
                load: function (a, b, e) {
                    if ("string" !== typeof a && Wa)return Wa.apply(this, arguments);
                    if (!this.length)return this;
                    var c = a.indexOf(" ");
                    if (0 <= c) {
                        var q =
                            a.slice(c, a.length);
                        a = a.slice(0, c)
                    }
                    c = "GET";
                    b && (p.isFunction(b) ? (e = b, b = v) : "object" === typeof b && (b = p.param(b, p.ajaxSettings.traditional), c = "POST"));
                    var d = this;
                    p.ajax({
                        url: a, type: c, dataType: "html", data: b, complete: function (a, b, c) {
                            c = a.responseText;
                            a.isResolved() && (a.done(function (a) {
                                c = a
                            }), d.html(q ? p("<div>").append(c.replace(yb, "")).find(q) : c));
                            e && d.each(e, [c, b, a])
                        }
                    });
                    return this
                }, serialize: function () {
                    return p.param(this.serializeArray())
                }, serializeArray: function () {
                    return this.map(function () {
                        return this.elements ?
                            p.makeArray(this.elements) : this
                    }).filter(function () {
                        return this.name && !this.disabled && (this.checked || zb.test(this.nodeName) || vb.test(this.type))
                    }).map(function (a, b) {
                        var e = p(this).val();
                        return null == e ? null : p.isArray(e) ? p.map(e, function (a, e) {
                            return {name: b.name, value: a.replace(Ta, "\r\n")}
                        }) : {name: b.name, value: e.replace(Ta, "\r\n")}
                    }).get()
                }
            });
            p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
                p.fn[b] = function (a) {
                    return this.bind(b, a)
                }
            });
            p.each(["get", "post"],
                function (a, b) {
                    p[b] = function (a, e, c, q) {
                        p.isFunction(e) && (q = q || c, c = e, e = v);
                        return p.ajax({type: b, url: a, data: e, success: c, dataType: q})
                    }
                });
            p.extend({
                getScript: function (a, b) {
                    return p.get(a, v, b, "script")
                }, getJSON: function (a, b, e) {
                    return p.get(a, b, e, "json")
                }, ajaxSetup: function (a, b) {
                    b ? E(a, p.ajaxSettings) : (b = a, a = p.ajaxSettings);
                    E(a, b);
                    return a
                }, ajaxSettings: {
                    url: V,
                    isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(W[1]),
                    global: !0,
                    type: "GET",
                    contentType: "application/x-www-form-urlencoded",
                    processData: !0,
                    async: !0,
                    accepts: {
                        xml: "application/xml, text/xml",
                        html: "text/html",
                        text: "text/plain",
                        json: "application/json, text/javascript",
                        "*": Ya
                    },
                    contents: {xml: /xml/, html: /html/, json: /json/},
                    responseFields: {xml: "responseXML", text: "responseText"},
                    converters: {"* text": r.String, "text html": !0, "text json": p.parseJSON, "text xml": p.parseXML},
                    flatOptions: {context: !0, url: !0}
                }, ajaxPrefilter: z(Ea), ajaxTransport: z(Xa), ajax: function (a, b) {
                    function e(a, b, k, x) {
                        if (2 !== u) {
                            u = 2;
                            w && clearTimeout(w);
                            z = v;
                            l = x || "";
                            E.readyState =
                                0 < a ? 4 : 0;
                            var Q, m, y;
                            x = b;
                            if (k) {
                                var ca = c, C = E, D = ca.contents, T = ca.dataTypes, n = ca.responseFields, G, F, r, Ca;
                                for (F in n)F in k && (C[n[F]] = k[F]);
                                for (; "*" === T[0];)T.shift(), G === v && (G = ca.mimeType || C.getResponseHeader("content-type"));
                                if (G)for (F in D)if (D[F] && D[F].test(G)) {
                                    T.unshift(F);
                                    break
                                }
                                if (T[0] in k)r = T[0]; else {
                                    for (F in k) {
                                        if (!T[0] || ca.converters[F + " " + T[0]]) {
                                            r = F;
                                            break
                                        }
                                        Ca || (Ca = F)
                                    }
                                    r = r || Ca
                                }
                                r ? (r !== T[0] && T.unshift(r), k = k[r]) : k = void 0
                            } else k = v;
                            if (200 <= a && 300 > a || 304 === a) {
                                if (c.ifModified) {
                                    if (G = E.getResponseHeader("Last-Modified"))p.lastModified[h] =
                                        G;
                                    if (G = E.getResponseHeader("Etag"))p.etag[h] = G
                                }
                                if (304 === a)x = "notmodified", Q = !0; else try {
                                    G = c;
                                    G.dataFilter && (k = G.dataFilter(k, G.dataType));
                                    var H = G.dataTypes;
                                    F = {};
                                    var K, B, L = H.length, I, ka = H[0], ya, qa, J, M, $a;
                                    for (K = 1; K < L; K++) {
                                        if (1 === K)for (B in G.converters)"string" === typeof B && (F[B.toLowerCase()] = G.converters[B]);
                                        ya = ka;
                                        ka = H[K];
                                        if ("*" === ka)ka = ya; else if ("*" !== ya && ya !== ka) {
                                            qa = ya + " " + ka;
                                            J = F[qa] || F["* " + ka];
                                            if (!J)for (M in $a = v, F)if (I = M.split(" "), I[0] === ya || "*" === I[0])if ($a = F[I[1] + " " + ka]) {
                                                M = F[M];
                                                !0 === M ? J = $a :
                                                !0 === $a && (J = M);
                                                break
                                            }
                                            J || $a || p.error("No conversion from " + qa.replace(" ", " to "));
                                            !0 !== J && (k = J ? J(k) : $a(M(k)))
                                        }
                                    }
                                    m = k;
                                    x = "success";
                                    Q = !0
                                } catch (N) {
                                    x = "parsererror", y = N
                                }
                            } else if (y = x, !x || a)x = "error", 0 > a && (a = 0);
                            E.status = a;
                            E.statusText = "" + (b || x);
                            Q ? f.resolveWith(q, [m, x, E]) : f.rejectWith(q, [E, x, y]);
                            E.statusCode(g);
                            g = v;
                            A && d.trigger("ajax" + (Q ? "Success" : "Error"), [E, c, Q ? m : y]);
                            t.resolveWith(q, [E, x]);
                            A && (d.trigger("ajaxComplete", [E, c]), --p.active || p.event.trigger("ajaxStop"))
                        }
                    }

                    "object" === typeof a && (b = a, a = v);
                    b = b || {};
                    var c = p.ajaxSetup({}, b), q = c.context || c, d = q !== c && (q.nodeType || q instanceof p) ? p(q) : p.event, f = p.Deferred(), t = p._Deferred(), g = c.statusCode || {}, h, k = {}, x = {}, l, m, z, w, y, u = 0, A, D, E = {
                        readyState: 0, setRequestHeader: function (a, b) {
                            if (!u) {
                                var e = a.toLowerCase();
                                a = x[e] = x[e] || a;
                                k[a] = b
                            }
                            return this
                        }, getAllResponseHeaders: function () {
                            return 2 === u ? l : null
                        }, getResponseHeader: function (a) {
                            var b;
                            if (2 === u) {
                                if (!m)for (m = {}; b = ub.exec(l);)m[b[1].toLowerCase()] = b[2];
                                b = m[a.toLowerCase()]
                            }
                            return b === v ? null : b
                        }, overrideMimeType: function (a) {
                            u ||
                            (c.mimeType = a);
                            return this
                        }, abort: function (a) {
                            a = a || "abort";
                            z && z.abort(a);
                            e(0, a);
                            return this
                        }
                    };
                    f.promise(E);
                    E.success = E.done;
                    E.error = E.fail;
                    E.complete = t.done;
                    E.statusCode = function (a) {
                        if (a) {
                            var b;
                            if (2 > u)for (b in a)g[b] = [g[b], a[b]]; else b = a[E.status], E.then(b, b)
                        }
                        return this
                    };
                    c.url = ((a || c.url) + "").replace(tb, "").replace(xb, W[1] + "//");
                    c.dataTypes = p.trim(c.dataType || "*").toLowerCase().split(Ja);
                    null == c.crossDomain && (y = Va.exec(c.url.toLowerCase()), c.crossDomain = !(!y || y[1] == W[1] && y[2] == W[2] && (y[3] || ("http:" ===
                    y[1] ? 80 : 443)) == (W[3] || ("http:" === W[1] ? 80 : 443))));
                    c.data && c.processData && "string" !== typeof c.data && (c.data = p.param(c.data, c.traditional));
                    C(Ea, c, b, E);
                    if (2 === u)return !1;
                    A = c.global;
                    c.type = c.type.toUpperCase();
                    c.hasContent = !wb.test(c.type);
                    A && 0 === p.active++ && p.event.trigger("ajaxStart");
                    if (!c.hasContent && (c.data && (c.url += (Ua.test(c.url) ? "&" : "?") + c.data, delete c.data), h = c.url, !1 === c.cache)) {
                        y = p.now();
                        var n = c.url.replace(Ab, "$1_=" + y);
                        c.url = n + (n === c.url ? (Ua.test(c.url) ? "&" : "?") + "_=" + y : "")
                    }
                    (c.data && c.hasContent &&
                    !1 !== c.contentType || b.contentType) && E.setRequestHeader("Content-Type", c.contentType);
                    c.ifModified && (h = h || c.url, p.lastModified[h] && E.setRequestHeader("If-Modified-Since", p.lastModified[h]), p.etag[h] && E.setRequestHeader("If-None-Match", p.etag[h]));
                    E.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + Ya + "; q=0.01" : "") : c.accepts["*"]);
                    for (D in c.headers)E.setRequestHeader(D, c.headers[D]);
                    if (c.beforeSend && (!1 === c.beforeSend.call(q, E,
                            c) || 2 === u))return E.abort(), !1;
                    for (D in{success: 1, error: 1, complete: 1})E[D](c[D]);
                    if (z = C(Xa, c, b, E)) {
                        E.readyState = 1;
                        A && d.trigger("ajaxSend", [E, c]);
                        c.async && 0 < c.timeout && (w = setTimeout(function () {
                            E.abort("timeout")
                        }, c.timeout));
                        try {
                            u = 1, z.send(k, e)
                        } catch (G) {
                            2 > u ? e(-1, G) : p.error(G)
                        }
                    } else e(-1, "No Transport");
                    return E
                }, param: function (a, b) {
                    var e = [], c = function (a, b) {
                        b = p.isFunction(b) ? b() : b;
                        e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                    };
                    b === v && (b = p.ajaxSettings.traditional);
                    if (p.isArray(a) || a.jquery && !p.isPlainObject(a))p.each(a, function () {
                        c(this.name, this.value)
                    }); else for (var q in a)D(q, a[q], b, c);
                    return e.join("&").replace(sb, "+")
                }
            });
            p.extend({active: 0, lastModified: {}, etag: {}});
            var Bb = p.now(), wa = /(\=)\?(&|$)|\?\?/i;
            p.ajaxSetup({
                jsonp: "callback", jsonpCallback: function () {
                    return p.expando + "_" + Bb++
                }
            });
            p.ajaxPrefilter("json jsonp", function (a, b, e) {
                b = "application/x-www-form-urlencoded" === a.contentType && "string" === typeof a.data;
                if ("jsonp" === a.dataTypes[0] || !1 !== a.jsonp && (wa.test(a.url) || b && wa.test(a.data))) {
                    var c,
                        q = a.jsonpCallback = p.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, d = r[q], f = a.url, t = a.data, g = "$1" + q + "$2";
                    !1 !== a.jsonp && (f = f.replace(wa, g), a.url === f && (b && (t = t.replace(wa, g)), a.data === t && (f += (/\?/.test(f) ? "&" : "?") + a.jsonp + "=" + q)));
                    a.url = f;
                    a.data = t;
                    r[q] = function (a) {
                        c = [a]
                    };
                    e.always(function () {
                        r[q] = d;
                        if (c && p.isFunction(d))r[q](c[0])
                    });
                    a.converters["script json"] = function () {
                        c || p.error(q + " was not called");
                        return c[0]
                    };
                    a.dataTypes[0] = "json";
                    return "script"
                }
            });
            p.ajaxSetup({
                accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
                contents: {script: /javascript|ecmascript/}, converters: {
                    "text script": function (a) {
                        p.globalEval(a);
                        return a
                    }
                }
            });
            p.ajaxPrefilter("script", function (a) {
                a.cache === v && (a.cache = !1);
                a.crossDomain && (a.type = "GET", a.global = !1)
            });
            p.ajaxTransport("script", function (a) {
                if (a.crossDomain) {
                    var b, e = B.head || B.getElementsByTagName("head")[0] || B.documentElement;
                    return {
                        send: function (c, q) {
                            b = B.createElement("script");
                            b.async = "async";
                            a.scriptCharset && (b.charset = a.scriptCharset);
                            b.src = a.url;
                            b.onload = b.onreadystatechange = function (a,
                                                                        c) {
                                if (c || !b.readyState || /loaded|complete/.test(b.readyState))b.onload = b.onreadystatechange = null, e && b.parentNode && e.removeChild(b), b = v, c || q(200, "success")
                            };
                            e.insertBefore(b, e.firstChild)
                        }, abort: function () {
                            if (b)b.onload(0, 1)
                        }
                    }
                }
            });
            var Ia = r.ActiveXObject ? function () {
                for (var a in ga)ga[a](0, 1)
            } : !1, Cb = 0, ga;
            p.ajaxSettings.xhr = r.ActiveXObject ? function () {
                var a;
                if (!(a = !this.isLocal && n()))a:{
                    try {
                        a = new r.ActiveXObject("Microsoft.XMLHTTP");
                        break a
                    } catch (b) {
                    }
                    a = void 0
                }
                return a
            } : n;
            (function (a) {
                p.extend(p.support,
                    {ajax: !!a, cors: !!a && "withCredentials" in a})
            })(p.ajaxSettings.xhr());
            p.support.ajax && p.ajaxTransport(function (a) {
                if (!a.crossDomain || p.support.cors) {
                    var b;
                    return {
                        send: function (e, c) {
                            var q = a.xhr(), d, f;
                            a.username ? q.open(a.type, a.url, a.async, a.username, a.password) : q.open(a.type, a.url, a.async);
                            if (a.xhrFields)for (f in a.xhrFields)q[f] = a.xhrFields[f];
                            a.mimeType && q.overrideMimeType && q.overrideMimeType(a.mimeType);
                            a.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                            try {
                                for (f in e)q.setRequestHeader(f,
                                    e[f])
                            } catch (t) {
                            }
                            q.send(a.hasContent && a.data || null);
                            b = function (e, f) {
                                var t, g, h, k, x;
                                try {
                                    if (b && (f || 4 === q.readyState))if (b = v, d && (q.onreadystatechange = p.noop, Ia && delete ga[d]), f)4 !== q.readyState && q.abort(); else {
                                        t = q.status;
                                        h = q.getAllResponseHeaders();
                                        k = {};
                                        (x = q.responseXML) && x.documentElement && (k.xml = x);
                                        k.text = q.responseText;
                                        try {
                                            g = q.statusText
                                        } catch (l) {
                                            g = ""
                                        }
                                        t || !a.isLocal || a.crossDomain ? 1223 === t && (t = 204) : t = k.text ? 200 : 404
                                    }
                                } catch (m) {
                                    f || c(-1, m)
                                }
                                k && c(t, g, k, h)
                            };
                            a.async && 4 !== q.readyState ? (d = ++Cb, Ia && (ga || (ga = {},
                                p(r).unload(Ia)), ga[d] = b), q.onreadystatechange = b) : b()
                        }, abort: function () {
                            b && b(0, 1)
                        }
                    }
                }
            });
            var Fa = {}, R, fa, Db = /^(?:toggle|show|hide)$/, Eb = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, xa, Ka = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]], va;
            p.fn.extend({
                show: function (a, b, e) {
                    if (a || 0 === a)return this.animate(I("show", 3), a, b, e);
                    e = 0;
                    for (var c = this.length; e < c; e++)a = this[e], a.style && (b = a.style.display, p._data(a, "olddisplay") ||
                    "none" !== b || (b = a.style.display = ""), "" === b && "none" === p.css(a, "display") && p._data(a, "olddisplay", K(a.nodeName)));
                    for (e = 0; e < c; e++)if (a = this[e], a.style && (b = a.style.display, "" === b || "none" === b))a.style.display = p._data(a, "olddisplay") || "";
                    return this
                }, hide: function (a, b, e) {
                    if (a || 0 === a)return this.animate(I("hide", 3), a, b, e);
                    a = 0;
                    for (b = this.length; a < b; a++)this[a].style && (e = p.css(this[a], "display"), "none" === e || p._data(this[a], "olddisplay") || p._data(this[a], "olddisplay", e));
                    for (a = 0; a < b; a++)this[a].style && (this[a].style.display =
                        "none");
                    return this
                }, _toggle: p.fn.toggle, toggle: function (a, b, e) {
                    var c = "boolean" === typeof a;
                    p.isFunction(a) && p.isFunction(b) ? this._toggle.apply(this, arguments) : null == a || c ? this.each(function () {
                        var b = c ? a : p(this).is(":hidden");
                        p(this)[b ? "show" : "hide"]()
                    }) : this.animate(I("toggle", 3), a, b, e);
                    return this
                }, fadeTo: function (a, b, e, c) {
                    return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity: b}, a, e, c)
                }, animate: function (a, b, e, c) {
                    var q = p.speed(b, e, c);
                    if (p.isEmptyObject(a))return this.each(q.complete,
                        [!1]);
                    a = p.extend({}, a);
                    return this[!1 === q.queue ? "each" : "queue"](function () {
                        !1 === q.queue && p._mark(this);
                        var b = p.extend({}, q), e = 1 === this.nodeType, c = e && p(this).is(":hidden"), d, f, t, g, h;
                        b.animatedProperties = {};
                        for (t in a) {
                            d = p.camelCase(t);
                            t !== d && (a[d] = a[t], delete a[t]);
                            f = a[d];
                            p.isArray(f) ? (b.animatedProperties[d] = f[1], f = a[d] = f[0]) : b.animatedProperties[d] = b.specialEasing && b.specialEasing[d] || b.easing || "swing";
                            if ("hide" === f && c || "show" === f && !c)return b.complete.call(this);
                            !e || "height" !== d && "width" !== d || (b.overflow =
                                [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === p.css(this, "display") && "none" === p.css(this, "float") && (p.support.inlineBlockNeedsLayout ? (f = K(this.nodeName), "inline" === f ? this.style.display = "inline-block" : (this.style.display = "inline", this.style.zoom = 1)) : this.style.display = "inline-block"))
                        }
                        null != b.overflow && (this.style.overflow = "hidden");
                        for (t in a)if (e = new p.fx(this, b, t), f = a[t], Db.test(f))e["toggle" === f ? c ? "show" : "hide" : f](); else d = Eb.exec(f), g = e.cur(), d ? (f = parseFloat(d[2]),
                            h = d[3] || (p.cssNumber[t] ? "" : "px"), "px" !== h && (p.style(this, t, (f || 1) + h), g *= (f || 1) / e.cur(), p.style(this, t, g + h)), d[1] && (f = ("-=" === d[1] ? -1 : 1) * f + g), e.custom(g, f, h)) : e.custom(g, f, "");
                        return !0
                    })
                }, stop: function (a, b) {
                    a && this.queue([]);
                    this.each(function () {
                        var a = p.timers, e = a.length;
                        for (b || p._unmark(!0, this); e--;)if (a[e].elem === this) {
                            if (b)a[e](!0);
                            a.splice(e, 1)
                        }
                    });
                    b || this.dequeue();
                    return this
                }
            });
            p.each({
                slideDown: I("show", 1),
                slideUp: I("hide", 1),
                slideToggle: I("toggle", 1),
                fadeIn: {opacity: "show"},
                fadeOut: {opacity: "hide"},
                fadeToggle: {opacity: "toggle"}
            }, function (a, b) {
                p.fn[a] = function (a, e, c) {
                    return this.animate(b, a, e, c)
                }
            });
            p.extend({
                speed: function (a, b, e) {
                    var c = a && "object" === typeof a ? p.extend({}, a) : {
                        complete: e || !e && b || p.isFunction(a) && a,
                        duration: a,
                        easing: e && b || b && !p.isFunction(b) && b
                    };
                    c.duration = p.fx.off ? 0 : "number" === typeof c.duration ? c.duration : c.duration in p.fx.speeds ? p.fx.speeds[c.duration] : p.fx.speeds._default;
                    c.old = c.complete;
                    c.complete = function (a) {
                        p.isFunction(c.old) && c.old.call(this);
                        !1 !== c.queue ? p.dequeue(this) :
                        !1 !== a && p._unmark(this)
                    };
                    return c
                }, easing: {
                    linear: function (a, b, e, c) {
                        return e + c * a
                    }, swing: function (a, b, e, c) {
                        return (-Math.cos(a * Math.PI) / 2 + .5) * c + e
                    }
                }, timers: [], fx: function (a, b, e) {
                    this.options = b;
                    this.elem = a;
                    this.prop = e;
                    b.orig = b.orig || {}
                }
            });
            p.fx.prototype = {
                update: function () {
                    this.options.step && this.options.step.call(this.elem, this.now, this);
                    (p.fx.step[this.prop] || p.fx.step._default)(this)
                }, cur: function () {
                    if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop]))return this.elem[this.prop];
                    var a, b = p.css(this.elem, this.prop);
                    return isNaN(a = parseFloat(b)) ? b && "auto" !== b ? b : 0 : a
                }, custom: function (a, b, e) {
                    function c(a) {
                        return q.step(a)
                    }

                    var q = this, d = p.fx;
                    this.startTime = va || F();
                    this.start = a;
                    this.end = b;
                    this.unit = e || this.unit || (p.cssNumber[this.prop] ? "" : "px");
                    this.now = this.start;
                    this.pos = this.state = 0;
                    c.elem = this.elem;
                    c() && p.timers.push(c) && !xa && (xa = setInterval(d.tick, d.interval))
                }, show: function () {
                    this.options.orig[this.prop] = p.style(this.elem, this.prop);
                    this.options.show = !0;
                    this.custom("width" ===
                    this.prop || "height" === this.prop ? 1 : 0, this.cur());
                    p(this.elem).show()
                }, hide: function () {
                    this.options.orig[this.prop] = p.style(this.elem, this.prop);
                    this.options.hide = !0;
                    this.custom(this.cur(), 0)
                }, step: function (a) {
                    var b = va || F(), e = !0, c = this.elem, q = this.options, d;
                    if (a || b >= q.duration + this.startTime) {
                        this.now = this.end;
                        this.pos = this.state = 1;
                        this.update();
                        q.animatedProperties[this.prop] = !0;
                        for (d in q.animatedProperties)!0 !== q.animatedProperties[d] && (e = !1);
                        if (e) {
                            null == q.overflow || p.support.shrinkWrapBlocks || p.each(["",
                                "X", "Y"], function (a, b) {
                                c.style["overflow" + b] = q.overflow[a]
                            });
                            q.hide && p(c).hide();
                            if (q.hide || q.show)for (var f in q.animatedProperties)p.style(c, f, q.orig[f]);
                            q.complete.call(c)
                        }
                        return !1
                    }
                    Infinity == q.duration ? this.now = b : (a = b - this.startTime, this.state = a / q.duration, this.pos = p.easing[q.animatedProperties[this.prop]](this.state, a, 0, 1, q.duration), this.now = this.start + (this.end - this.start) * this.pos);
                    this.update();
                    return !0
                }
            };
            p.extend(p.fx, {
                tick: function () {
                    for (var a = p.timers, b = 0; b < a.length; ++b)a[b]() || a.splice(b--,
                        1);
                    a.length || p.fx.stop()
                }, interval: 13, stop: function () {
                    clearInterval(xa);
                    xa = null
                }, speeds: {slow: 600, fast: 200, _default: 400}, step: {
                    opacity: function (a) {
                        p.style(a.elem, "opacity", a.now)
                    }, _default: function (a) {
                        a.elem.style && null != a.elem.style[a.prop] ? a.elem.style[a.prop] = ("width" === a.prop || "height" === a.prop ? Math.max(0, a.now) : a.now) + a.unit : a.elem[a.prop] = a.now
                    }
                }
            });
            p.expr && p.expr.filters && (p.expr.filters.animated = function (a) {
                return p.grep(p.timers, function (b) {
                    return a === b.elem
                }).length
            });
            var Fb = /^t(?:able|d|h)$/i,
                Za = /^(?:body|html)$/i;
            p.fn.offset = "getBoundingClientRect" in B.documentElement ? function (a) {
                var b = this[0], e;
                if (a)return this.each(function (b) {
                    p.offset.setOffset(this, a, b)
                });
                if (!b || !b.ownerDocument)return null;
                if (b === b.ownerDocument.body)return p.offset.bodyOffset(b);
                try {
                    e = b.getBoundingClientRect()
                } catch (c) {
                }
                var q = b.ownerDocument, d = q.documentElement;
                if (!e || !p.contains(d, b))return e ? {top: e.top, left: e.left} : {top: 0, left: 0};
                b = q.body;
                q = L(q);
                return {
                    top: e.top + (q.pageYOffset || p.support.boxModel && d.scrollTop ||
                    b.scrollTop) - (d.clientTop || b.clientTop || 0),
                    left: e.left + (q.pageXOffset || p.support.boxModel && d.scrollLeft || b.scrollLeft) - (d.clientLeft || b.clientLeft || 0)
                }
            } : function (a) {
                var b = this[0];
                if (a)return this.each(function (b) {
                    p.offset.setOffset(this, a, b)
                });
                if (!b || !b.ownerDocument)return null;
                if (b === b.ownerDocument.body)return p.offset.bodyOffset(b);
                p.offset.initialize();
                var e, c = b.offsetParent, q = b.ownerDocument, d = q.documentElement, f = q.body;
                e = (q = q.defaultView) ? q.getComputedStyle(b, null) : b.currentStyle;
                for (var t =
                    b.offsetTop, g = b.offsetLeft; (b = b.parentNode) && b !== f && b !== d && (!p.offset.supportsFixedPosition || "fixed" !== e.position);)e = q ? q.getComputedStyle(b, null) : b.currentStyle, t -= b.scrollTop, g -= b.scrollLeft, b === c && (t += b.offsetTop, g += b.offsetLeft, !p.offset.doesNotAddBorder || p.offset.doesAddBorderForTableAndCells && Fb.test(b.nodeName) || (t += parseFloat(e.borderTopWidth) || 0, g += parseFloat(e.borderLeftWidth) || 0), c = b.offsetParent), p.offset.subtractsBorderForOverflowNotVisible && "visible" !== e.overflow && (t += parseFloat(e.borderTopWidth) ||
                    0, g += parseFloat(e.borderLeftWidth) || 0);
                if ("relative" === e.position || "static" === e.position)t += f.offsetTop, g += f.offsetLeft;
                p.offset.supportsFixedPosition && "fixed" === e.position && (t += Math.max(d.scrollTop, f.scrollTop), g += Math.max(d.scrollLeft, f.scrollLeft));
                return {top: t, left: g}
            };
            p.offset = {
                initialize: function () {
                    var a = B.body, b = B.createElement("div"), e, c, q, d = parseFloat(p.css(a, "marginTop")) || 0;
                    p.extend(b.style, {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        margin: 0,
                        border: 0,
                        width: "1px",
                        height: "1px",
                        visibility: "hidden"
                    });
                    b.innerHTML = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
                    a.insertBefore(b, a.firstChild);
                    e = b.firstChild;
                    c = e.firstChild;
                    q = e.nextSibling.firstChild.firstChild;
                    this.doesNotAddBorder = 5 !== c.offsetTop;
                    this.doesAddBorderForTableAndCells = 5 === q.offsetTop;
                    c.style.position =
                        "fixed";
                    c.style.top = "20px";
                    this.supportsFixedPosition = 20 === c.offsetTop || 15 === c.offsetTop;
                    c.style.position = c.style.top = "";
                    e.style.overflow = "hidden";
                    e.style.position = "relative";
                    this.subtractsBorderForOverflowNotVisible = -5 === c.offsetTop;
                    this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== d;
                    a.removeChild(b);
                    p.offset.initialize = p.noop
                }, bodyOffset: function (a) {
                    var b = a.offsetTop, e = a.offsetLeft;
                    p.offset.initialize();
                    p.offset.doesNotIncludeMarginInBodyOffset && (b += parseFloat(p.css(a, "marginTop")) || 0, e += parseFloat(p.css(a,
                            "marginLeft")) || 0);
                    return {top: b, left: e}
                }, setOffset: function (a, b, e) {
                    var c = p.css(a, "position");
                    "static" === c && (a.style.position = "relative");
                    var q = p(a), d = q.offset(), f = p.css(a, "top"), t = p.css(a, "left"), g = {}, h = {};
                    ("absolute" === c || "fixed" === c) && -1 < p.inArray("auto", [f, t]) ? (h = q.position(), c = h.top, t = h.left) : (c = parseFloat(f) || 0, t = parseFloat(t) || 0);
                    p.isFunction(b) && (b = b.call(a, e, d));
                    null != b.top && (g.top = b.top - d.top + c);
                    null != b.left && (g.left = b.left - d.left + t);
                    "using" in b ? b.using.call(a, g) : q.css(g)
                }
            };
            p.fn.extend({
                position: function () {
                    if (!this[0])return null;
                    var a = this[0], b = this.offsetParent(), e = this.offset(), c = Za.test(b[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : b.offset();
                    e.top -= parseFloat(p.css(a, "marginTop")) || 0;
                    e.left -= parseFloat(p.css(a, "marginLeft")) || 0;
                    c.top += parseFloat(p.css(b[0], "borderTopWidth")) || 0;
                    c.left += parseFloat(p.css(b[0], "borderLeftWidth")) || 0;
                    return {top: e.top - c.top, left: e.left - c.left}
                }, offsetParent: function () {
                    return this.map(function () {
                        for (var a = this.offsetParent || B.body; a && !Za.test(a.nodeName) && "static" === p.css(a, "position");)a = a.offsetParent;
                        return a
                    })
                }
            });
            p.each(["Left", "Top"], function (a, b) {
                var e = "scroll" + b;
                p.fn[e] = function (b) {
                    var c, q;
                    return b === v ? (c = this[0], c ? (q = L(c)) ? "pageXOffset" in q ? q[a ? "pageYOffset" : "pageXOffset"] : p.support.boxModel && q.document.documentElement[e] || q.document.body[e] : c[e] : null) : this.each(function () {
                        (q = L(this)) ? q.scrollTo(a ? p(q).scrollLeft() : b, a ? b : p(q).scrollTop()) : this[e] = b
                    })
                }
            });
            p.each(["Height", "Width"], function (a, b) {
                var e = b.toLowerCase();
                p.fn["inner" + b] = function () {
                    var a = this[0];
                    return a && a.style ? parseFloat(p.css(a, e, "padding")) :
                        null
                };
                p.fn["outer" + b] = function (a) {
                    var b = this[0];
                    return b && b.style ? parseFloat(p.css(b, e, a ? "margin" : "border")) : null
                };
                p.fn[e] = function (a) {
                    var c = this[0];
                    if (!c)return null == a ? null : this;
                    if (p.isFunction(a))return this.each(function (b) {
                        var c = p(this);
                        c[e](a.call(this, b, c[e]()))
                    });
                    if (p.isWindow(c)) {
                        var q = c.document.documentElement["client" + b], c = c.document.body;
                        return p.support.boxModel && q || c && c["client" + b] || q
                    }
                    return 9 === c.nodeType ? Math.max(c.documentElement["client" + b], c.body["scroll" + b], c.documentElement["scroll" +
                    b], c.body["offset" + b], c.documentElement["offset" + b]) : a === v ? (q = p.css(c, e), c = parseFloat(q), p.isNaN(c) ? q : c) : this.css(e, "string" === typeof a ? a : a + "px")
                }
            });
            p.fn.offsetNoIPadFix = p.fn.offset;
            p.fn.offsetIPadFix = p.fn.offset;
            /webkit.*mobile/i.test(J.userAgent) && 532.9 > parseFloat(p.browser.version) && "getBoundingClientRect" in B.documentElement && (p.fn.offsetIPadFix = function () {
                var a = this.offsetNoIPadFix();
                a && (a.top -= r.scrollY, a.left -= r.scrollX);
                return a
            }, p.fn.offset = p.fn.offsetIPadFix);
            return p
        })
    })()
})(function () {
    var n =
        window.AmazonUIPageJS || window.P, r = n._namespace || n.attributeErrors;
    return r ? r("AmazonUIjQuery") : n
}(), window);
(function (n, r, v) {
    n.guardFatal(function () {
        n.when("jQuery").register("a-base", function (h) {
            return {
                version: function () {
                    return "3.0"
                }, $: h
            }
        });
        n.when("p-recorder-events", "a-analytics").register("a-timing-analytics", function (h, m) {
            function l(f) {
                k[f] = !0;
                0 !== h.length && r.uet && r.uex && r.uet("bb", f, g)
            }

            var k = {}, g = {wb: 1};
            l("declarative");
            l("A");
            l("dropdown");
            l("carousel");
            return {
                startWidgetLogging: l, stopWidgetLogging: function (f) {
                    0 !== h.length && r.uet && r.uex && f in k && (r.uet("cf", f, g), r.uex("ld", f, g))
                }
            }
        });
        n.when("p-recorder-events", "jQuery", "a-analytics", "a-util", "prv:a-event-context").register("a-event-analytics", function (h, m, l, k, g) {
            function f(a, b, e) {
                if (!k.objectIsEmpty(a)) {
                    e = (e ? "true_" : "") + "udac";
                    try {
                        l.increment("usage:" + e, b || 1);
                        var c = ["aui", e, a.eventType, a.daName];
                        a.isATF && c.push("ATF");
                        var q = [a.xpath, a.daData];
                        n.logError(null, c.join("|"), "ERROR", q.join("|"))
                    } catch (d) {
                    }
                }
            }

            function d(a) {
                return "unknown" !== typeof a.type
            }

            function c(a) {
                return m.event.fix(a)
            }

            function b(a) {
                return -1 !== k.indexOfArray(h,
                        a.type)
            }

            function a(a) {
                return a.target !== document
            }

            function e(a) {
                return {eventType: a.type}
            }

            function q(a) {
                a = m(a.target).closest("[data-action]").get(0);
                return a === v ? null : a
            }

            function t(a) {
                return {daName: a.getAttribute("data-action")}
            }

            function x(a) {
                var b = a.getAttribute("data-action");
                return {daData: a.getAttribute("data-" + b) || ""}
            }

            function y(a) {
                return {isATF: k.isATF(a)}
            }

            function u(a) {
                return {xpath: k.xpath(a)}
            }

            var w = {};
            return {
                handle: function (k) {
                    if (0 !== h.length && (k = (new g(k)).filter(d).transform(c).filter(b).filter(a).collect(e).transform(q).collect(t).collect(x).collect(y).collect(u).dump())) {
                        f(k);
                        var l = k.daName + ":" + k.eventType;
                        l in w || (w[l] = {context: k, count: 0});
                        w[l].count += 1
                    }
                }, notify: function (a, b) {
                    var e;
                    e = a + ":" + b;
                    if (e in w) {
                        var c = w[e];
                        delete w[e];
                        e = c
                    } else e = {context: null, count: 0};
                    f(e.context, e.count, !0)
                }
            }
        });
        n.when("a-util", "a-class").register("prv:a-event-context", function (h, m) {
            return m.createClass({
                init: function (h, k) {
                    this.subject = h;
                    this.collected = k || {}
                }, transform: function (h) {
                    if (null === this.subject)return this;
                    var k;
                    try {
                        k = h(this.subject)
                    } catch (g) {
                        return this.subject = null, this
                    }
                    this.subject =
                        k;
                    return this
                }, filter: function (h) {
                    return this.transform(function (k) {
                        return h(k) ? k : null
                    })
                }, collect: function (l) {
                    var k = this;
                    return this.transform(function (g) {
                        try {
                            var f = l(g);
                            k.collected = h.extend(k.collected, f)
                        } catch (d) {
                        }
                        return g
                    })
                }, dump: function () {
                    return null !== this.subject ? this.collected : null
                }
            })
        });
        n.when("a-base").register("a-util", function (h) {
            function m(a) {
                if ("" !== a.id)return '//*[@id="' + a.id + '"]';
                if (a === document.documentElement)return "/html";
                var b = l(a).parent().find(" > " + a.tagName).index(a);
                if (-1 === b)throw"can not evaluate xpath of element `" + a.tagName + (a.id ? "#" + a.id : "") + "`";
                return m(a.parentNode) + "/" + a.tagName + "[" + (b + 1) + "]"
            }

            var l = h.$, k = Date.now, g = function () {
                function a(a, c, d) {
                    if (null !== a)if (Array.prototype.forEach && a.forEach === Array.prototype.forEach)a.forEach(c, d); else if (a.length === +a.length)for (var f = 0, g = a.length; f < g && !(f in a && c.call(d, a[f], f, a) === b); f++); else for (f in a)if (a.hasOwnProperty(f) && c.call(d, a[f], f, a) === {})break
                }

                var b = {};
                return {
                    each: a, map: function (b, e, c) {
                        var d = [];
                        if (null ===
                            b)return d;
                        if (Array.prototype.map && b.map === Array.prototype.map)return b.map(e, c);
                        a(b, function (a, b, q) {
                            d[d.length] = e.call(c, a, b, q)
                        });
                        b.length === +b.length && (d.length = b.length);
                        return d
                    }, reduce: function (b, e, c, d) {
                        var f = 2 < arguments.length;
                        null === b && (b = []);
                        if (Array.prototype.reduce && b.reduce === Array.prototype.reduce)return f ? b.reduce(e, c) : b.reduce(e);
                        a(b, function (a, b, q) {
                            f ? c = e.call(d, c, a, b, q) : (c = a, f = !0)
                        });
                        f || n.error("Reduce of empty array with no initial value", "A.util", "reduce");
                        return c
                    }, range: function (a,
                                        b, e) {
                        null == b && (b = a || 0, a = 0);
                        e = e || 1;
                        b = Math.max(Math.ceil((b - a) / e), 0);
                        for (var c = Array(b), d = 0; d < b; d++, a += e)c[d] = a;
                        return c
                    }, breaker: b
                }
            }();
            h = function () {
                function a(a, b) {
                    var c = Array.prototype.slice.call(arguments, 2);
                    return setTimeout(function () {
                        return a.apply(null, c)
                    }, b)
                }

                return {
                    throttle: function (a, b, c) {
                        var d, f, g, h = null, l = 0;
                        c || (c = {});
                        var m = function () {
                            l = !1 === c.leading ? 0 : k();
                            h = null;
                            g = a.apply(d, f);
                            d = f = null
                        };
                        return function () {
                            var C = k();
                            l || !1 !== c.leading || (l = C);
                            var E = b - (C - l);
                            d = this;
                            f = arguments;
                            0 >= E ? (clearTimeout(h),
                                h = null, l = C, g = a.apply(d, f), d = f = null) : h || !1 === c.trailing || (h = setTimeout(m, E));
                            return g
                        }
                    }, sequence: function () {
                        var a = [].slice, b = a.call(arguments).reverse(), c = this;
                        return g.reduce(b, function (b, q) {
                            return function () {
                                var d = a.call(arguments);
                                d.push(b);
                                q.apply(c, d)
                            }
                        }, function () {
                        })
                    }, debounce: function (a, b, c) {
                        var d, f, g, h, l, m = function () {
                            var C = k() - h;
                            C < b ? d = setTimeout(m, b - C) : (d = null, c || (l = a.apply(g, f), g = f = null))
                        };
                        return function () {
                            g = this;
                            f = arguments;
                            h = k();
                            var C = c && !d;
                            d || (d = setTimeout(m, b));
                            C && (l = a.apply(g, f), g = f =
                                null);
                            return l
                        }
                    }, delay: a, animationFrameDelay: function (b) {
                        return a(b, 16)
                    }, interval: function (a, b) {
                        return setInterval(a, b)
                    }, once: function (a) {
                        var b = !1, c;
                        return function () {
                            b || (b = !0, c = a.apply(this, arguments));
                            return c
                        }
                    }, rest: function (a, b) {
                        if (a) {
                            var c = Math.max(b === v ? a.length - 1 : b, 0);
                            return function () {
                                for (var b = arguments, q = -1, d = Math.max(b.length - c, 0), f = Array(d); ++q < d;)f[q] = b[q + c];
                                switch (c) {
                                    case 0:
                                        return a.call(this, f);
                                    case 1:
                                        return a.call(this, b[0], f);
                                    case 2:
                                        return a.call(this, b[0], b[1], f)
                                }
                                d = Array(c + 1);
                                for (q = -1; ++q < c;)d[q] = b[q];
                                d[c] = f;
                                return a.apply(this, d)
                            }
                        }
                    }
                }
            }();
            var f = function () {
                var a = /^\s+/, b = /\s+$/;
                return {
                    trim: function (c) {
                        return String.prototype.trim ? String.prototype.trim.call(c) : c.replace(a, "").replace(b, "")
                    }, contains: function (a, b) {
                        return -1 !== ("" + a).indexOf(b)
                    }
                }
            }(), d = function () {
                function a(b, e) {
                    b = b || {};
                    e = e || {};
                    var c = {}, q;
                    for (q in b)b.hasOwnProperty(q) && (c[q] = "object" === typeof b[q] && b[q] ? a(b[q], e[q]) : b[q] !== e[q]);
                    for (q in e)e.hasOwnProperty(q) && !c[q] && (c[q] = "object" === typeof e[q] && e[q] ? a(e[q], b[q]) :
                    e[q] !== b[q]);
                    return c
                }

                function b(a, c) {
                    var q;
                    if (a === c)return !0;
                    if (l.isArray(a)) {
                        if (!l.isArray(c) || a.length !== c.length)return !1;
                        for (q = a.length; q--;)if (!b(a[q], c[q]))return !1;
                        return !0
                    }
                    if (l.isPlainObject(a)) {
                        if (!l.isPlainObject(c) || l.isEmptyObject(a) && !l.isEmptyObject(c))return !1;
                        for (q in a)if (!b(a[q], c[q]))return !1;
                        return !0
                    }
                    return !1
                }

                function c(a) {
                    if (!("function" === typeof a || "object" === typeof a && a))return [];
                    if (Object.keys)return Object.keys(a);
                    var b = [], e;
                    for (e in a)a.hasOwnProperty(e) && b.push(e);
                    return b
                }

                return {
                    keys: c, values: function (a) {
                        for (var b = c(a), e = Array(b.length), d = 0; d < b.length; d++)e[d] = a[b[d]];
                        return e
                    }, extend: function () {
                        Array.prototype.unshift.call(arguments, !0);
                        return l.extend.apply(l, arguments)
                    }, mixin: function (a, b, e) {
                        if (e)for (var c = 0, q = e.length; c < q; c++)a[e[c]] = b[e[c]]; else for (c in b)"function" === typeof b[c] && (a[c] = b[c])
                    }, diff: a, equals: b, copy: function (a) {
                        return l.isArray(a) ? l.extend(!0, [], a) : l.isPlainObject(a) ? l.extend(!0, {}, a) : a
                    }, indexOfArray: function (a, b, e) {
                        if (Array.prototype.indexOf &&
                            a.indexOf === Array.prototype.indexOf)return a.indexOf(b, e);
                        a && a instanceof Array || n.error("Invalid arr passed to A.indexOfArray: " + a, "A.util", "indexOfArray");
                        e = parseInt(e, 10);
                        e = isNaN(e) ? 0 : e;
                        if (!isFinite(e))return -1;
                        for (var c = a.length; e < c; e++)if (a[e] === b)return e;
                        return -1
                    }, isArray: function (a) {
                        return Array.isArray ? Array.isArray(a) : "[object Array]" === Object.prototype.toString.call(a)
                    }, isFiniteNumber: function (a) {
                        return "number" === typeof a && !isNaN(a) && isFinite(a)
                    }, objectIsEmpty: function (a) {
                        for (var b in a)if (a.hasOwnProperty(b))return !1;
                        return !0
                    }
                }
            }(), c = function () {
                function a() {
                    b = {};
                    for (var a = (document.cookie || "").split(";"), c = 0; c < a.length; c++) {
                        var d = a[c].split("="), g = f.trim(d[0]);
                        if (g) {
                            var h = b, d = d.slice(1).join("="), d = f.trim(d);
                            /^"/.test(d) && (d = d.slice(1, -1).replace(/\\(.)/g, "$1"));
                            d = r.decodeURIComponent(d);
                            h[g] = d
                        }
                    }
                }

                var b;
                return {
                    get: function (c) {
                        b || a();
                        return b[c]
                    }, getAll: function () {
                        b || a();
                        return d.extend({}, b)
                    }, refresh: function () {
                        b = null
                    }
                }
            }(), b = function () {
                var a = document.createElement("fakeelement"), b = {
                    transition: "transitionend", OTransition: "oTransitionEnd",
                    MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd"
                }, c = null;
                return {
                    getTransitionEndEvent: function () {
                        if (null === c)for (var d in b)if (a.style[d] !== v) {
                            c = b[d];
                            break
                        }
                        return c
                    }
                }
            }();
            return {
                now: k,
                extend: d.extend,
                mixin: d.mixin,
                copy: d.copy,
                diff: d.diff,
                equals: d.equals,
                objectIsEmpty: d.objectIsEmpty,
                indexOfArray: d.indexOfArray,
                isArray: d.isArray,
                isFiniteNumber: d.isFiniteNumber,
                keys: d.keys,
                values: d.values,
                xpath: m,
                parseJSON: function (a) {
                    return l.parseJSON(a)
                },
                throttle: h.throttle,
                sequence: h.sequence,
                debounce: h.debounce,
                delay: h.delay,
                animationFrameDelay: h.animationFrameDelay,
                interval: h.interval,
                once: h.once,
                rest: h.rest,
                trim: f.trim,
                contains: f.contains,
                map: g.map,
                reduce: g.reduce,
                range: g.range,
                each: g.each,
                breaker: g.breaker,
                onScreen: function (a, b) {
                    b = "number" === typeof b && !isNaN(b) && isFinite(b) ? b : 100;
                    var c = l(a);
                    if (!c.is(":visible"))return !1;
                    var d = l(r), f = d.scrollTop(), d = r.innerHeight ? r.innerHeight : d.height(), g = f + d, f = f - b, g = g + b, h = c.offset().top, c = c.height(), k = h + c;
                    return h >= f && h < g || k > f && k <= g || c > d && h <= f && k >=
                        g
                },
                isATF: function (a, b) {
                    b = "number" === typeof b && !isNaN(b) && isFinite(b) ? b : 100;
                    var c = l(r), c = (r.innerHeight ? r.innerHeight : c.height()) + b, d = l(a).offset().top;
                    return 0 <= d && d < c
                },
                setCssImportant: function (a, b, c) {
                    a = a.jquery ? a[0] : a;
                    "undefined" !== typeof a && (a = a.style, a.cssText = a.cssText.replace(new RegExp(b + "\\s*:\\s*[.^;]*(\\s*;)?", "gmi"), ""), a.cssText += b + ": " + c + " !important;")
                },
                getTransitionEndEvent: b.getTransitionEndEvent,
                cookies: c,
                widescreen: function () {
                    return 0 < l("html.a-ws").length
                }
            }
        });
        n.when("p-detect",
            "a-util").register("a-detect", function (h, m) {
            var l;
            try {
                l = navigator.userAgent
            } catch (k) {
                l = ""
            }
            var g = m.copy(h), f = {};
            m.each({
                isAmazonApp: function () {
                    return /(Windowshop|Amazon|Amazon\.com)\//.test(m.cookies.get("amzn-app-id"))
                }, isGen5App: function () {
                    return /Windowshop.*(?:KFOT|KFTH|KFJWA|KFJWI|KFTT)/.test(l)
                }, androidVersion: function () {
                    var c = /(?:Android\s+|Windowshop.*Android\/)(\d+\.\d+(?:\.\d+)*)/.exec(l);
                    if (c[1])return c[1]
                }, isChrome: function () {
                    return /Chrome/.test(l)
                }, chromeVersion: function () {
                    var c = /Chrome\/(\d+\.\d+(?:\.\d+)*)/.exec(l);
                    if (c[1])return c[1]
                }, isUCBrowser: function () {
                    return /UCBrowser/.test(l)
                }, isSafari: function () {
                    var c = document.documentElement.style;
                    return !("MozAppearance" in c) && "webkitAppearance" in c && 0 === navigator.vendor.indexOf("Apple")
                }, isAndroidStockGuess: function () {
                    var c = !1;
                    g.capabilities.android && !/Chrome|Opera|Firefox|UCBrowser/.test(l) && (c = /AppleWebKit\/(\d+\.\d+)/.exec(l), c = c[1] && "535" > c[1]);
                    return c
                }, isFirefox: function () {
                    return /Firefox/.test(l)
                }, isOldAndroid: function () {
                    return /Android\s[12]/.test(l)
                }, isIE10: function () {
                    return /Trident/.test(l) &&
                        "onmspointerup" in document && !("onpointerup" in document)
                }, isIE10Plus: function () {
                    return /Trident/.test(l) && ("onpointerup" in document || "onmspointerup" in document)
                }, isIE11Plus: function () {
                    return /Trident/.test(l) && "onpointerup" in document
                }, isiOS8: function () {
                    return g.capabilities.ios && /Version\/8\./.test(l)
                }, isIETouchCapable: function () {
                    return g.capabilities.isIE10Plus && /Touch;/.test(l)
                }, isMetroIEGuess: function () {
                    var c = !0;
                    try {
                        c = new ActiveXObject("htmlfile")
                    } catch (b) {
                        c = !1
                    }
                    return g.capabilities.isIE10Plus && !g.capabilities.mobile && !c
                }, pointerPrefix: function () {
                    return "onmspointerup" in document || "onpointerup" in document ? "onpointerup" in document ? "pointer" : "MSPointer" : !1
                }, actionMode: function () {
                    var c = g.capabilities.pointerPrefix;
                    return c ? c : g.capabilities.touch ? "touch" : "mouse"
                }
            }, function (c, b) {
                var a = g.capabilities, e;
                try {
                    e = c()
                } catch (q) {
                    e = !1
                }
                a[b] = e
            });
            m.each({
                start: {mouse: "down", touch: "start", pointer: "down", MSPointer: "Down"},
                end: {mouse: "up", touch: "end", pointer: "up", MSPointer: "Up"},
                move: {
                    mouse: "move", touch: "move",
                    pointer: "move", MSPointer: "Move"
                },
                enter: {mouse: "enter", touch: "enter", pointer: "enter"},
                leave: {mouse: "leave", touch: "leave", pointer: "leave"},
                cancel: {touch: "cancel", pointer: "cancel", MSPointer: "Cancel"},
                over: {mouse: "over", pointer: "over", MSPointer: "Over"},
                out: {mouse: "out", pointer: "out", MSPointer: "Out"}
            }, function (c, b) {
                var a = g.capabilities.actionMode, e = "string" === typeof c ? c : c[a];
                f[b] = e ? a + e : c.mouse === v ? "" : "mouse" + c.mouse
            });
            g.action = f;
            var d = {};
            "pointer" === g.capabilities.pointerPrefix ? (d.touch = "touch", d.pen =
                "pen", d.mouse = "mouse", d.unknown = "") : "MSPointer" === g.capabilities.pointerPrefix && (d.touch = 2, d.pen = 3, d.mouse = 4);
            g.pointerType = d;
            return g
        });
        n.register("a-defer", function () {
            function h(f) {
                var d = 0, c = setTimeout(function () {
                    h(f)
                }, 0);
                if (k || 0 === f.length)clearTimeout(c), l = !1; else {
                    var b = Date.now();
                    try {
                        f.shift().call()
                    } catch (a) {
                        n.error("Deferred execution failed: " + a.message, "A.defer", "partialExecute")
                    }
                    g += Date.now() - b;
                    50 < g && (d = 50, g = 0);
                    setTimeout(function () {
                        h(f)
                    }, d);
                    clearTimeout(c)
                }
            }

            var m = [], l = !1, k =
                !1, g = 0;
            return {
                defer: function (f) {
                    m.push(f);
                    l || k || (l = !0, setTimeout(function () {
                        h(m)
                    }, 0))
                }, pauseDeferred: function () {
                    k = !0
                }, executeDeferred: function () {
                    k = !1;
                    l = !0;
                    setTimeout(function () {
                        h(m)
                    }, 0)
                }
            }
        });
        n.when("a-base", "a-util", "p-detect", "a-event-revised-handling").register("a-events", function (h, m, l, k) {
            function g(a, e) {
                !1 !== e && b.makeTopicTimeSliced(a);
                d[a] = !0;
                b.subscribe(a, function () {
                    n.register(a, function () {
                        var a = r.aPageStart || m.now();
                        return {time: m.now() - a}
                    })
                });
                b.publish(a);
                b.unsubscribe(a)
            }

            function f() {
                d.beforeLoad &&
                d.load || (g("beforeLoad"), g("load"), setTimeout(function () {
                    g("beforeAfterLoad");
                    g("afterLoad")
                }, 1500))
            }

            h = h.$;
            var d = {}, c = h(r), b = function () {
                function a(b) {
                    for (var e, c = [], q = 0, d = g.length; q < d; q++)e = g[q].id, b !== e && c.push(g[q]);
                    g = c
                }

                function b(e) {
                    for (var c = setTimeout(b, 0), d = m.now(), h; (h = g.shift()) !== v;)try {
                        if (!1 === h.fn.apply(r, h.args) && (clearTimeout(c), a(h.id)), !0 === e && 50 <= m.now() - d) {
                            clearTimeout(c);
                            m.delay(b, 15);
                            return
                        }
                    } catch (k) {
                        n.error("Event execution failed for event " + h.topic + ": " + (k && k.message || k), "A.events",
                            "partialPublish")
                    }
                    clearTimeout(c);
                    f = !1
                }

                function e() {
                    for (var b = m.now(), c; (c = g.shift()) !== v;)try {
                        if (!1 === c.fn.apply(r, c.args) && a(c.id), g.length && 50 <= m.now() - b) {
                            m.delay(e, 15);
                            return
                        }
                    } catch (d) {
                        n.logError(d, "Event execution failed for timesliced event " + c.topic, "ERROR")
                    }
                    f = !1
                }

                var c = {}, d = 0, f = !1, g = [];
                return {
                    publish: function (a) {
                        var q = c[a];
                        if (q) {
                            var h = q.isTimeSliced, l = Array.prototype.slice.call(arguments, 1), m = d++, F = [];
                            if (h)for (var H; (H = q.shift()) !== v;)g.push({topic: a, id: m, fn: H, args: l}); else {
                                H = 0;
                                for (var I = q.length; H <
                                I; H++)(k ? F : g).push({topic: a, id: m, fn: q[H], args: l})
                            }
                            if (k)if (h)f || (f = !0, e()); else for (q = F; (h = q.shift()) !== v;)try {
                                if (!1 === h.fn.apply(r, h.args))break
                            } catch (K) {
                                n.logError(K, "Event execution failed for event " + h.topic, "ERROR")
                            } else f || (f = !0, b(h))
                        }
                    }, subscribe: function (a, b) {
                        c[a] || (c[a] = []);
                        if ("function" === typeof b)return c[a].unshift(b), {event: a, callback: b}
                    }, unsubscribe: function (a, b) {
                        for (var e, q = a.split(" "); (e = q.pop()) !== v;)if (c[e])if (b) {
                            e = c[e];
                            for (var d = 0, f = e.length; d < f; d++)e[d] === b && e.splice(d--, 1)
                        } else c[e] =
                            []
                    }, isSubscribed: function (a) {
                        return a in c
                    }, makeTopicTimeSliced: function (a) {
                        c[a] || (c[a] = []);
                        c[a].isTimeSliced = !0
                    }
                }
            }(), a = function () {
                var a = function (a, e, c) {
                    var q = a.split(" "), f = [], g = e;
                    for (!0 === c && (g = function () {
                        e.apply(r, arguments);
                        b.unsubscribe(a, g)
                    }); (c = q.pop()) !== v;)d[c] ? (b.subscribe(c, e), b.publish(c), b.unsubscribe(c)) : f.push(b.subscribe(c, g).event);
                    return {event: f.join(" "), callback: g}
                };
                m.each("ready load unload afterLoad scroll resize orientationchange zoom".split(" "), function (b, e) {
                    a[b] = function () {
                        a.apply(r,
                            [b].concat([].slice.call(arguments, 0)))
                    }
                });
                return a
            }(), e = m.once(function () {
                l.responsiveGridEnabled() && l.toggleResponsiveGrid(!0);
                g("beforeReady");
                g("ready");
                g("afterReady");
                "complete" === document.readyState && f()
            });
            h(document).ready(e);
            n.when("a-bodyBegin").execute(function () {
                g("bodyBegin")
            });
            n.when("a-domready").execute(e);
            c.load(f);
            c.unload(function () {
                g("unload", !1)
            });
            return {
                isListening: b.isSubscribed, on: a, one: function (b, e) {
                    var c = b.split(" ");
                    if (1 < c.length)n.error("A.one only accepts a single event name, but was provided with: " +
                        c.length + ", (" + b + ")", "A.events", "one"); else return a(b, e, !0)
                }, off: function (a, e) {
                    "object" === typeof a && (a = a.event, e = a.callback);
                    return b.unsubscribe(a, e)
                }, trigger: function () {
                    b.publish.apply(r, arguments)
                }, events: {defaults: {input: "change", select: "change", a: "click", button: "click", form: "submit"}}
            }
        });
        n.when("a-util", "a-events").register("a-prefix", function (h, m) {
            function l(c) {
                return c.toLowerCase().replace(/-(.)/g, function (b, a) {
                    return a.toUpperCase()
                })
            }

            var k = {transitionend: null}, g = document.createElement("div").style,
                f = {}, d = ["o", "ms", "moz", "webkit"];
            m.on("beforeReady", function () {
                if (r.addEventListener) {
                    var c = document.createElement("div"), b = function (a) {
                        k.transitionend = a.type;
                        this.removeEventListener("webkitTransitionEnd", b, !1);
                        this.removeEventListener("transitionend", b, !1);
                        this.removeEventListener("otransitionend", b, !1);
                        this.removeEventListener("oTransitionEnd", b, !1)
                    };
                    c.setAttribute("style", "position:absolute;top:0px;z-index:-1;transition:top 1ms ease;-webkit-transition:top 1ms ease;-moz-transition:top 1ms ease;-o-transition:top 1ms ease;");
                    c.addEventListener("transitionend", b, !1);
                    c.addEventListener("webkitTransitionEnd", b, !1);
                    c.addEventListener("otransitionend", b, !1);
                    this.addEventListener("oTransitionEnd", b, !1);
                    document.body.appendChild(c);
                    h.delay(function () {
                        c.style.top = "100px";
                        h.delay(function () {
                            c.parentNode.removeChild(c);
                            c = b = null;
                            h.each(k, function (a) {
                            })
                        }, 100)
                    }, 0)
                }
            });
            return {
                prefixes: {
                    getStyle: function (c) {
                        if (!f[c]) {
                            var b = l(c);
                            if (b in g)f[c] = b; else for (var b = b.charAt(0).toUpperCase() + b.slice(1), a = d.length; a--;) {
                                var e = d[a] + b;
                                e in g &&
                                (f[c] = e)
                            }
                        }
                        return f[c]
                    }, getEvent: function (c) {
                        return c ? k[c.toLowerCase()] : v
                    }
                }
            }
        });
        n.when("a-base", "a-util", "a-events", "a-event-analytics", "a-timing-analytics", "p-recorder-stop").register("a-declarative", function (h, m, l, k, g, f) {
            function d(e) {
                var c = b(e.currentTarget), d = b(e.target);
                if ("submit" === e.type) {
                    var f = d.closest("form");
                    f.length && (d = f)
                }
                if (f = c.data("action"))f = f.split(" "), m.each(f, function (b) {
                    var f = a[b] || {}, g = c.data(b), h = e.type, x = {
                        $target: d, $currentTarget: c, targetTag: d.prop("tagName").toLowerCase(),
                        type: h, action: b, data: g, $event: e, $declarativeParent: c
                    };
                    b = "a:declarative:" + b;
                    h = b + ":" + h;
                    l.trigger(b, x);
                    l.trigger(h, x);
                    l.isListening(h) || k.handle(e);
                    x = !1;
                    g ? x = !!g.allowLinkDefault : f && (x = !!f.allowLinkDefault);
                    "click" !== e.type || x ? f = !1 : (f = d.closest("a"), f = f.length && ("#" === f[0].href || e.currentTarget === f[0] || f.parent(".a-declarative").length));
                    f && e.preventDefault()
                })
            }

            function c() {
                var b, c, d, f;
                switch (arguments.length) {
                    case 2:
                        b = arguments[0];
                        f = arguments[1];
                        break;
                    case 3:
                        b = arguments[0];
                        c = arguments[1];
                        f = arguments[2];
                        break;
                    case 4:
                        b = arguments[0], c = arguments[1], d = arguments[2], f = arguments[3]
                }
                b && ("string" === typeof b && (b = m.trim(b).split(" ")), m.each(b, function (b) {
                    var e = "a:declarative:" + b;
                    a[b] = d || {};
                    if (c)c = "string" === typeof c ? m.trim(c).split(" ") : c, m.each(c, function (a) {
                        l.on(e + ":" + a, f);
                        k.notify(b, a)
                    }); else l.on(e, f)
                }))
            }

            var b = h.$, a = {};
            f();
            b(document).delegate(".a-declarative", "blur click dblclick focus focusin focusout mousedown mouseup mouseenter mouseleave mousemove change submit touchstart touchend touchmove touchcancel keydown keyup keypress MSPointerDown pointerdown MSPointerUp pointerup MSPointerMove pointermove MSPointerCancel pointercancel MSPointerOver pointerenter MSPointerOut pointerleave",
                d).delegate(".a-gesture", "tap swipe swipe-horizontal swipe-vertical pan-horizontal pan-vertical doubleTap", d);
            c.create = function (a, c, d) {
                var f = a.jquery && a.length ? a : b(a);
                if (f.length && c) {
                    var g = f.data("action");
                    f.data("action", g ? g + " " + c : c).data(c, d ? d : {});
                    f.addClass("a-declarative")
                }
                return a
            };
            c.remove = function (a, c) {
                var d = a.jquery && a.length ? a : b(a), f = d.data("action");
                c = c || f;
                if (d.length && f) {
                    for (var f = f.split(" "), g = f.length; g--;)f[g] !== c && "" !== f[g] || f.splice(g, 1);
                    f.length ? d.data("action", f.join("")) : d.data("action",
                        null).removeClass("a-declarative");
                    d.data(c, null)
                }
                return a
            };
            g.stopWidgetLogging("declarative");
            return {declarative: c}
        });
        n.when("a-util", "jQuery", "a-declarative").register("a-draggable", function (h, m, l) {
            var k, g = {
                _maxZIndex: 0, _isInit: !1, _draggables: [], _init: function () {
                    this._isInit || (this._isInit = !0, this._maxZIndex = 975)
                }, create: function (a) {
                    this._init();
                    a._zimIndex || (a._zimIndex = 975, this._maxZIndex += 1, this._draggables.push(a));
                    this.acquireFocus(a)
                }, acquireFocus: function (a) {
                    a.css("zIndex", this._maxZIndex);
                    k.css("zIndex", this._maxZIndex - 1);
                    for (var b = 0; b < this._draggables.length; b++) {
                        var c = this._draggables[b];
                        c[0] !== a[0] && c._zimIndex > a._zimIndex && (c._zimIndex -= c._zimIndex > this._maxZIndex - 1 ? 2 : 1, c.css("zIndex", c._zimIndex))
                    }
                    a._zimIndex = this._maxZIndex
                }
            }, f = function (a) {
                var b = a.$event;
                h.contains("touchstart touchend touchmove", a.type) && (b = b.originalEvent.touches[0]);
                return {x: b.clientX, y: b.clientY}
            }, d = function (a) {
                var b = a.data.$draggable, c = b.data("a-draggables"), d = f(a);
                c.isMouseDown && (b.css({
                    left: d.x - c.clickOffset.x,
                    top: d.y - c.clickOffset.y
                }), a.$event.preventDefault())
            }, c = function (a) {
                var b = a.$event.target || a.$event.srcElement, c = a.data.$draggable, d = c.data("a-draggables");
                g.acquireFocus(c);
                b = m(b).closest(d.$handle, c);
                d.isMouseDown = 0 < b.length;
                d.isMouseDown && (k && k.removeClass("aok-hidden"), b = f(a), d.clickOffset = {
                    x: b.x - parseFloat(c.css("left")),
                    y: b.y - parseFloat(c.css("top"))
                }, c.data("a-draggables", d), k.data("a-draggables", d), a.$event.preventDefault())
            }, b = function (a) {
                a = a.data.$draggable;
                var b = a.data("a-draggables");
                b.isMouseDown = !1;
                a.data("a-draggables", b);
                k && k.addClass("aok-hidden")
            };
            return {
                draggable: function (a, e) {
                    var q = a.jquery ? a : m(a), q = {
                        isMouseDown: !1,
                        $draggable: q,
                        $handle: e && e.handle ? e.handle : q
                    };
                    q.$handle = q.$handle.jquery ? q.$handle : m(q.handle);
                    q.$handle.css("cursor", "move");
                    k || (k = m("<div>", {
                        id: "a-draggables-mousedown-layer",
                        "class": "aok-hidden"
                    }).appendTo("body"), l.declarative.create(k, "a-draggables", q));
                    g.create(q.$draggable);
                    l.declarative.create(q.$draggable, "a-draggables", q);
                    l.declarative("a-draggables",
                        ["mousedown", "touchstart"], c);
                    l.declarative("a-draggables", ["mouseup", "touchend"], b);
                    l.declarative("a-draggables", ["mousemove", "touchmove"], d)
                }
            }
        });
        n.when("a-base", "a-util", "a-events", "a-declarative").register("a-state", function (h, m, l, k) {
            function g(a, e, q, d) {
                if (null === e || c.isArray(e) || c.isPlainObject(e)) {
                    var f = m.copy(b[a]);
                    f && e && !d ? m.extend(b[a], e) : b[a] = m.copy(e);
                    e = m.diff(f, b[a]);
                    d = m.copy(b[a]);
                    q || l.trigger("a:state:update:" + a, d, e, f);
                    return d
                }
                n.error("Invalid value passed to A.state with a namespace of " +
                    a + ".  Value: " + e, "A.state", "updateNamespace")
            }

            function f(a, b, c) {
                if (1 === b.length)return a[b.shift()] = c, a;
                a[b.shift()] = f({}, b, c);
                return a
            }

            function d() {
                for (var a = document.getElementsByTagName("script"), e = 0, q = a.length; e < q; e++)if (!c.data(a[e], "a-eval")) {
                    var d = c(a[e]), f = d.attr("data-a-state");
                    if (f && (f = m.parseJSON(f), f.key)) {
                        var h;
                        try {
                            h = m.parseJSON(d.html())
                        } catch (k) {
                            n.logError(k, "State parsing failed for state " + f.key, "ERROR");
                            continue
                        }
                        c.data(a[e], "a-eval", !0);
                        (d = b[f.key]) && m.extend(h, d);
                        g(f.key, h)
                    }
                }
            }

            var c =
                h.$, b = {};
            k.declarative("a-state", function (a) {
                var b = a.$target, c = a.data.key, d = a.data[a.type];
                d || l.events.defaults[a.targetTag] !== a.type || (d = b.attr("name"));
                d && c && (b.is("select") && (b = b.find(":selected")), typeof b.val() !== v && "string" === typeof d && (a = b.val(), b.is("input[type=checkbox]") && !b.prop("checked") && (a = null), d = f({}, d.split("."), a)), g(c, d))
            });
            h = function (a, e, c) {
                return e === v ? m.copy(b[a]) : g(a, e, !!c)
            };
            h.bind = function (a, b) {
                l.on("a:state:update:" + a, b)
            };
            h.replace = function (a, b, c) {
                return g(a, b, !!c, !0)
            };
            l.on("beforeReady",
                d);
            h.parse = d;
            return {state: h}
        });
        n.when("a-base", "a-util", "a-events", "a-declarative", "a-state").register("a-ajax", function (h, m, l, k, g) {
            function f(a) {
                return a && "string" !== typeof a ? b.param(a) : ""
            }

            function d(a, b) {
                a && 0 !== a.length && ("string" === typeof a && "" === m.trim(a) ? b && b(a) : (a[0] instanceof Array || (a = [a]), m.each(a, function (c) {
                    var q = e[c[0]];
                    q ? q.apply(r, c) : ((q = b) || n.error("There is no handler for the streaming ajax command: " + a[0], "A.ajax", "chunkHandler"), q(c))
                })))
            }

            function c(a, b) {
                b = b || {};
                var e =
                    b.headers || {};
                b.accepts !== v && (e.Accept = b.accepts);
                b.contentType !== v && (e["Content-Type"] = b.contentType);
                return q["a-ajax-update"]({
                    url: a,
                    cache: b.cache,
                    params: f(b.params),
                    method: b.method,
                    chunk: b.chunk,
                    success: b.success,
                    failure: b.failure || b.error,
                    abort: b.abort,
                    indicator: b.indicator,
                    timeout: b.timeout,
                    headers: e,
                    withCredentials: !!b.withCredentials
                })
            }

            var b = h.$, a = function () {
                r.XMLHttpRequest || (r.XMLHttpRequest = function () {
                    return new ActiveXObject("Microsoft.XMLHTTP")
                });
                var a = function () {
                    function a() {
                        0 < b.length ?
                            b.pop().send() : e--
                    }

                    var b = [], e = 0, c = 0, q = 0;
                    return {
                        add: function (a) {
                            4 > e ? (a.send(), e++) : (b.push(a), c++, b.length > q && (q = b.length), (a = r.ue) && a.count && (a.count("aui:ajax:queued", c), a.count("aui:ajax:maxQueued", q)))
                        }, complete: a, abort: function (e) {
                            m.each(b, function (a, c) {
                                if (a === e)return b.splice(c, 1), m.breaker
                            });
                            a()
                        }
                    }
                }(), b = function () {
                }, e = function (b) {
                    var e = b.http, c = !1, q = !1;
                    switch (e.readyState) {
                        case 4:
                            q = !0;
                            break;
                        case 3:
                            c = !0
                    }
                    var d = 200 === e.status || 304 === e.status, f = b.responsePosition;
                    if (c || q && d) {
                        var g = e.responseText;
                        if (f < g.length) {
                            var f = g.substring(f, g.length), g = f.split("&&&"), h = f.lastIndexOf("&&&");
                            if (-1 === h && c)return;
                            h < f.length - 3 && c && g.pop();
                            m.each(g, function (a, e) {
                                var c;
                                if ("" !== m.trim(a))try {
                                    c = m.parseJSON(a)
                                } catch (q) {
                                    n.logError(q, "Invalid streaming ajax JSON response: " + a)
                                } else c = a;
                                b.callbacks.chunk(c)
                            });
                            b.responsePosition += h
                        }
                    }
                    q && (clearInterval(b.pollTimer), clearTimeout(b.timeoutTimer), a.complete(), d ? b.callbacks.success(null, e.statusText, b) : b.callbacks.failure(b, e.statusText, e.statusText), l.trigger("a:pageUpdate"),
                        l.trigger("a:ajax:complete"))
                }, c = function (b) {
                    var e = b.http;
                    if (4 === e.readyState) {
                        clearInterval(b.pollTimer);
                        clearTimeout(b.timeoutTimer);
                        a.complete();
                        var c = e.responseText;
                        try {
                            var q = m.parseJSON(c);
                            q && (c = q)
                        } catch (d) {
                        }
                        200 !== e.status && 304 !== e.status ? b.callbacks.failure(b, e.statusText, e.statusText) : b.callbacks.success(c, e.statusText, b);
                        l.trigger("a:ajax:complete")
                    }
                };
                return function () {
                    function q(b) {
                        if (4 > b.http.readyState) {
                            clearInterval(b.pollTimer);
                            var e = "Request Timeout";
                            try {
                                e = b.http.statusText
                            } catch (c) {
                            }
                            b.callbacks.failure(b,
                                e, e);
                            a.complete()
                        }
                    }

                    function d(a, b, e) {
                        e = e || {};
                        e = m.extend({}, g.all, g[b], e);
                        m.each(e, function (b, e) {
                            (b || "" === b) && a.setRequestHeader(e, b)
                        });
                        return a
                    }

                    function f(b, e, c, q, g, h, k, l, x, m) {
                        var z = b.http;
                        z.open(e, c);
                        d(z, e, x);
                        b.timeout = q;
                        b.callbacks.chunk = g || b.callbacks.chunk;
                        b.callbacks.success = h || b.callbacks.success;
                        b.callbacks.failure = k || b.callbacks.failure;
                        b.callbacks.abort = l || b.callbacks.abort;
                        m && (z.withCredentials = !0);
                        a.add(b);
                        return {
                            abort: function () {
                                b.abort()
                            }
                        }
                    }

                    var g = {
                        all: {"X-Requested-With": "XMLHttpRequest"},
                        get: {Accept: "text/html,*/*"},
                        post: {Accept: "text/html,*/*", "Content-Type": "application/x-www-form-urlencoded"}
                    }, h = function () {
                        var a = new XMLHttpRequest;
                        this.pollTimer = null;
                        this.http = a;
                        this.responsePosition = 0;
                        this.buffer = "";
                        this.callbacks = {success: b, failure: b, chunk: b, abort: b}
                    };
                    h.prototype = {
                        send: function () {
                            var a = this;
                            a.http.send(a.params);
                            a.pollTimer = setInterval(function () {
                                if (2 <= a.http.readyState && "unknown" !== typeof a.http.responseText) {
                                    var b = a.http.getResponseHeader("Content-Type"), b = b ? b.toLowerCase() :
                                        "";
                                    (-1 !== b.indexOf("application/json-amazonui-streaming") || -1 !== b.indexOf("application/amazonui-streaming-json") ? e : c)(a)
                                }
                            }, 25);
                            a.timeout = "undefined" === typeof a.timeout ? 2E4 : a.timeout;
                            a.timeoutTimer = m.delay(q, a.timeout, a)
                        }, get: function (a, b, e, c, q, d, t, g, h) {
                            if (b) {
                                var k = a.indexOf("?"), l = a.charAt(a.length - 1);
                                -1 < k ? "?" !== l && "&" !== l && (a += "&") : a += "?";
                                a += b
                            }
                            return f(this, "get", a, e, c, q, d, t, g, h)
                        }, abort: function () {
                            this.http && this.http.abort();
                            clearInterval(this.pollTimer);
                            clearTimeout(this.timeoutTimer);
                            a.abort(this);
                            this.callbacks.abort(this)
                        }, post: function (a, b, e, c, q, d, t, g, h) {
                            this.params = b;
                            return f(this, "post", a, e, c, q, d, t, g, h)
                        }
                    };
                    return h
                }()
            }(), e = {
                update: function (a, e, c) {
                    b(e).html(c)
                }, append: function (a, e, c) {
                    a = b(e);
                    a.html(a.html() + c)
                }, prepend: function (a, e, c) {
                    a = b(e);
                    a.html(c + a.html())
                }, state: function (a, b, e) {
                    g.state(b, e)
                }, script: function (a, b) {
                    eval(b)
                }, trigger: function (a, b) {
                    var e;
                    e = Array.prototype.slice.call(arguments, 1);
                    l.trigger.apply(void 0, e)
                }
            }, q = {
                "a-ajax-update": function (e) {
                    var c = new a, q = function () {
                        var a = r.ue;
                        a && a.tag && (a.tag("aui"), a.tag("aui:ajax"))
                    }, f = e.abort, g = b(e.indicator);
                    g.show();
                    var h = "string" === typeof e.method && "post" === e.method.toLowerCase() ? "post" : "get";
                    "get" === h && !1 === e.cache && (e.params += ["" === e.params ? "" : "&", "_=", m.now()].join(""));
                    return c[h](e.url, e.params, e.timeout, function (a) {
                        q();
                        d(a, e.chunk)
                    }, function () {
                        g.hide();
                        q();
                        e.success && e.success.apply(r, arguments)
                    }, function () {
                        g.hide();
                        q();
                        e.failure && e.failure.apply(r, arguments)
                    }, f, e.headers, e.withCredentials)
                }
            };
            k.declarative("a-ajax-update",
                function (a) {
                    var b = a.$target, e = a.action, c = a.data;
                    if (c || l.events.defaults[a.targetTag] === a.type)if ("object" !== typeof c || c[a.type]) {
                        var c = c || {}, d = c.url || b.attr("href") || b.attr("action"), g = f(c.params), h = b.attr("method") || c.method, k = c.indicator, c = c.timeout;
                        d || n.error("No ajax url provided.", "A.ajax", "declarativeHandler");
                        "form" === a.targetTag && a.type === l.events.defaults.form && (b = b.serialize(), g += b);
                        a.$event.preventDefault();
                        return q[e]({url: d, params: g, method: h, indicator: k, operation: e, timeout: c})
                    }
                });
            return {
                ajax: c,
                get: function (a, b) {
                    b = b || {};
                    b.method = "get";
                    return c(a, b)
                }, post: function (a, b) {
                    b = b || {};
                    b.method = "post";
                    return c(a, b)
                }
            }
        });
        n.when("a-base", "a-util", "p-detect", "a-prefix").register("a-animate", function (h, m, l, k) {
            function g(a, b, c) {
                a = a.jquery ? a[0] : a;
                b = k.prefixes.getStyle(b);
                a.style[b] = c
            }

            function f(a) {
                var b = "", c = l.capabilities.transform3d;
                a.top !== v && a.left !== v ? (b = "translate", c && (b += "3d"), b += "(" + a.left + ", " + a.top, c && (b += ", 0"), b += ")") : (a.top !== v ? b = "translateY(" + a.top + ")" : a.left !== v && (b = "translateX(" +
                    a.left + ")"), c && (b += " translateZ(0)"));
                a.scale !== v && (b += " scale(" + a.scale + ")");
                return b
            }

            function d(a) {
                var c = {}, d = !1;
                m.each(b, function (b) {
                    b in a && (d = !0, c[b] = a[b], delete a[b])
                });
                return d ? c : null
            }

            function c(a, b, c) {
                l.capabilities.transform ? ("string" === typeof c && (c = parseInt(c, 10)), m.isFiniteNumber(c) || (c = 0), a = parseInt(a.css(b), 10), m.isFiniteNumber(a) || (a = 0), c = c - a + "px") : m.isFiniteNumber(c) && (c += "px");
                return c
            }

            var b = ["top", "left", "scale"];
            h = {
                animate: function (a, b, c, d, f) {
                    a._a || (a._a = 0);
                    a._a++;
                    var g = function () {
                        a._a--;
                        f && f()
                    };
                    a.queue("fx", [function () {
                        a.animate(b, {duration: c, easing: "linear" === d ? d : "swing", complete: g, queue: !1})
                    }])
                }, fadeIn: function (a, b, c, d) {
                    a.fadeIn({duration: b, easing: "linear" === c ? c : "swing", complete: d, queue: !1})
                }, fadeOut: function (a, b, c, d) {
                    var f = a.css("opacity");
                    a.fadeOut({
                        duration: b, easing: "linear" === c ? c : "swing", complete: function () {
                            .95 > +f && a.css("opacity", f);
                            d && d()
                        }, queue: !1
                    })
                }, fadeToggle: function (a, b, c, d) {
                    a.fadeToggle({duration: b, easing: "linear" === c ? c : "swing", complete: d, queue: !1})
                }, slideUp: function (a,
                                      b, c, d) {
                    a.slideUp({duration: b, easing: "linear" === c ? c : "swing", complete: d, queue: !1})
                }, slideDown: function (a, b, c, d) {
                    a.slideDown({duration: b, easing: "linear" === c ? c : "swing", complete: d, queue: !1})
                }, slideToggle: function (a, b, c, d) {
                    a.slideToggle({duration: b, easing: "linear" === c ? c : "swing", complete: d, queue: !1})
                }, isAnimated: function (a) {
                    a = a.jquery ? a[0] : a;
                    return a._a && 0 < a._a
                }
            };
            var a = {
                animate: function (a, b, t, h, k) {
                    var u = a[0];
                    b = m.copy(b);
                    t = t === v ? 250 : t;
                    h = h || "linear";
                    b.top !== v && (b.top = c(a, "top", b.top));
                    b.left !== v && (b.left =
                        c(a, "left", b.left));
                    g(a, "transition", 4 > t ? "all 0ms" : "all " + t + "ms " + h);
                    if (4 < t) {
                        u._a === v && (u._a = 0);
                        u._a++;
                        var w = function () {
                            u._a--;
                            u._a || g(a, "transition", "");
                            k && k()
                        };
                        m.delay(function () {
                            m.delay(w, t)
                        }, 0)
                    }
                    l.capabilities.transform && (h = d(b)) && g(a, "transform", f({
                        top: h.top,
                        left: h.left,
                        scale: h.scale
                    }));
                    m.objectIsEmpty(b) || a.css(b);
                    4 >= t && k && m.delay(k, 0)
                }, fadeIn: function (a, b, c, d) {
                    if ("none" === a.css("display") || .05 > +a.css("opacity")) {
                        var f = a.css("opacity") || 1;
                        if (!f || .05 > +f)f = 1;
                        a.css("opacity", "0").show();
                        var g = this.animate;
                        m.delay(function () {
                            g(a, {opacity: f}, b, c, function () {
                                d && d()
                            })
                        }, 16)
                    } else d && d()
                }, fadeOut: function (a, b, c, d) {
                    var f = a.css("opacity");
                    "none" !== a.css("display") && .05 < +f ? this.animate(a, {opacity: 0}, b, c, function () {
                        a.hide().css("opacity", f);
                        d && d()
                    }) : d && d()
                }, fadeToggle: function (a, b, c, d) {
                    ("none" === a.css("display") || .05 > +a.css("opacity") ? this.fadeIn : this.fadeOut).call(this, a, b, c, d)
                }, slideUp: function (a, b, c, d) {
                    var f = this.animate;
                    a.css({height: a.innerHeight(), overflow: "hidden"});
                    m.delay(function () {
                        f(a, {height: 0}, b,
                            c, function () {
                                a.hide();
                                a.css({height: "", overflow: ""});
                                d && d()
                            })
                    }, 0)
                }, slideDown: function (a, b, c, d) {
                    var f = a.innerHeight(), g = this.animate;
                    a.css({height: 0, overflow: "hidden"});
                    a.show();
                    m.delay(function () {
                        g(a, {height: f}, b, c, function () {
                            d && d();
                            a.css({height: "", overflow: ""})
                        })
                    }, 0)
                }, slideToggle: function (a, b, c, d) {
                    (a.is(":visible") ? this.slideUp : this.slideDown).call(this, a, b, c, d)
                }, isAnimated: function (a) {
                    a = a.jquery ? a[0] : a;
                    return a._a && 0 < a._a
                }
            };
            return l.capabilities.transition ? a : h
        });
        n.when("a-base", "a-util",
            "a-events", "a-defer", "p-detect").register("a-image", function (h, m, l, k, g) {
            function f(a) {
                a = c(a);
                var b = a.data("a-dynamic-image");
                if (b && "object" === typeof b) {
                    var e = a.data("a-dynamic-image-container");
                    "undefined" === typeof e && (e = a.closest(".a-dynamic-image-container"), 0 === e.length && (e = a.parent()), a.data("a-dynamic-image-container", e));
                    var d = g.capabilities.hires && r.devicePixelRatio ? r.devicePixelRatio : 1, f = e.width() * d, t = e.height() * d, h = Number.MAX_VALUE, k = Number.MAX_VALUE, l = a.attr("src") || "", n, F = f / t;
                    m.each(b,
                        function (a, b) {
                            var e = parseInt(a[0], 10), c = parseInt(a[1], 10), e = e - t, c = c - f, c = 1 <= F ? c : e;
                            Math.abs(c) < k && 0 <= c && (k = Math.abs(c), n = b);
                            Math.abs(c) < h && (h = Math.abs(c), l = b)
                        });
                    n && (l = n);
                    q.schedule(l, a);
                    q.fill();
                    return l
                }
            }

            function d() {
                c("img.a-dynamic-image").each(function () {
                    c(this).data("a-manual-replacement") || f(this)
                })
            }

            var c = h.$;
            c(r);
            var b = document.getElementsByTagName("img"), a = {}, e = 0, q = function () {
                var b = [], c = {};
                return {
                    schedule: function (e, d) {
                        c[e] || (b.push(e), c[e] = !0);
                        a[e] = a[e] || [];
                        for (var q = 0; q < a[e].length; q++)if (d.is(a[e][q]))return;
                        a[e].push(d)
                    }, fill: function () {
                        for (var a = 0; a < 2 - e; a++)if (0 < b.length) {
                            var d = b.shift();
                            c[d] = !1;
                            t.load(d)
                        }
                    }
                }
            }(), t = function () {
                function d(b) {
                    var e = a[b];
                    e && (m.each(e, function (a) {
                        a.data("a-image-replaced") !== b && (a.data("a-image-replaced", b), k.defer(function () {
                            a.attr("src", b);
                            l.trigger("a:image:load", {$imageElement: a, url: b});
                            var e = a.data("a-image-name");
                            e && l.trigger("a:image:load:" + e, {$imageElement: a, url: b})
                        }))
                    }), a[b] = [])
                }

                var f = {};
                return {
                    load: function (a) {
                        if (f[a])d(a); else if (!1 !== f[a]) {
                            var b = new Image;
                            b.onload =
                                function () {
                                    e--;
                                    d(a);
                                    f[a] = !0;
                                    q.fill()
                                };
                            b.onerror = function () {
                                e--;
                                f[a] = !1;
                                q.fill()
                            };
                            e++;
                            k.defer(function () {
                                b.src = a
                            })
                        }
                    }, poll: function () {
                        m.each(b, function (a) {
                            a = c(a);
                            a.data("a-hires-loaded") || a.is(":hidden") || !m.onScreen(a) || a.data("a-manual-replacement") || (a.data("a-hires") && q.schedule(a.data("a-hires"), a), a.data("a-hires-loaded", !0))
                        })
                    }
                }
            }();
            g.capabilities.hires && l.on.ready(function () {
                m.interval(function () {
                    t.poll();
                    q.fill()
                }, 2E3)
            });
            l.on.ready(d);
            c(r).resize(d);
            return {
                loadHiResImage: function (a) {
                    var b = [];
                    c(a).each(function () {
                        var a = c(this), e = a.data("a-hires");
                        e && (q.schedule(e, a), q.fill(), b.push(e));
                        a.data("a-hires-loaded", !0)
                    });
                    return b
                }, loadDynamicImage: function (a) {
                    var b = [];
                    c(a).each(function () {
                        b.push(f(this))
                    });
                    return b
                }, loadImageManually: function (a, b) {
                    var e = [];
                    c(a, b).each(function () {
                        var a = c(this);
                        if (!a.data("a-image-already-loaded")) {
                            a.data("a-image-already-loaded", !0);
                            var b = f(a), d = c("<img>").attr("src", b || a.data("a-image-source"));
                            e.push(b);
                            var b = "" + this.className, q = a.data("a-extra-classes");
                            q &&
                            (b += " " + q);
                            d.attr("class", b);
                            d.attr("id", this.id);
                            d.attr("style", a.attr("style"));
                            d.attr("alt", a.attr("alt"));
                            d.attr("usemap", a.attr("usemap"));
                            d.attr("title", a.attr("title"));
                            d.attr("role", a.attr("role"));
                            m.each(this.attributes, function (a) {
                                a && a.name && (0 === a.name.indexOf("data-") || 0 === a.name.indexOf("aria-")) && d.attr(a.name, a.value)
                            });
                            d.data(a.data());
                            a.replaceWith(d)
                        }
                        return e
                    })
                }, loadDescendantImagesManually: function (a, b) {
                    var e = c(a, b).find("div.a-manually-loaded").filter(function () {
                        return !c(this).data("a-image-already-loaded")
                    });
                    return this.loadImageManually(e)
                }
            }
        });
        n.register("a-class", function () {
            function h() {
            }

            var m = /xyz/.test(function () {
                xyz
            }) ? /\b_super\b/ : /.*/;
            h.extend = function (l) {
                var k = this.prototype, g = Object.create ? Object.create(k) : function (c) {
                    function b() {
                    }

                    b.prototype = c;
                    return new b
                }(k), f;
                for (f in l)g[f] = "function" === typeof l[f] && "function" === typeof k[f] && m.test(l[f]) ? function (c, b) {
                    return function () {
                        var a = this._super;
                        this._super = k[c];
                        var e = b.apply(this, arguments);
                        this._super = a;
                        return e
                    }
                }(f, l[f]) : l[f];
                var d;
                n.now("a-weblab").execute(function (c) {
                    d =
                        c && c.is("AUI_58736", "T1") ? "function" === typeof g.init ? g.hasOwnProperty("init") ? g.init : function () {
                            k.init.apply(this, arguments)
                        } : function () {
                        } : "function" === typeof g.init ? g.init : function () {
                        }
                });
                d.prototype = g;
                g.constructor = d;
                d.extend = h.extend;
                return d
            };
            return {
                createClass: function (l) {
                    return h.extend(l)
                }
            }
        });
        n.when("a-timing-analytics").execute("build-A", function (h) {
            n.when("a-util", "a-defer", "a-base", "a-events", "a-declarative", "a-state", "a-ajax", "a-animate", "a-image", "a-constants", "a-detect", "a-browser-events",
                "a-preload", "a-prefix", "a-request-animation-frame", "a-class", "a-draggable").register("A", function () {
                var m = {}, l = arguments[0];
                l.each(arguments, function (h) {
                    l.extend(m, h)
                });
                h.stopWidgetLogging("A");
                return m
            })
        });
        n.register("a-constants", function () {
            return {
                constants: {
                    keycodes: {
                        BACKSPACE: 8,
                        TAB: 9,
                        ENTER: 13,
                        ESCAPE: 27,
                        SPACE: 32,
                        LEFT_ARROW: 37,
                        UP_ARROW: 38,
                        RIGHT_ARROW: 39,
                        DOWN_ARROW: 40,
                        DELETE: 46
                    }, HIDE_CLASS: "aok-hidden", NOOP: function () {
                    }
                }
            }
        });
        n.when("jQuery", "a-detect", "a-events", "a-util",
            "a-defer").register("a-browser-events", function (h, m, l, k, g) {
            function f() {
                return r.innerHeight ? r.innerHeight : document.documentElement.clientHeight
            }

            function d() {
                return r.innerWidth ? r.innerWidth : document.documentElement.clientWidth
            }

            function c() {
                return r.innerWidth ? Math.round(document.documentElement.clientWidth / r.innerWidth * 10) / 10 : 1
            }

            function b(a) {
                switch (a) {
                    case t.ALL:
                        a = "orientation height width zoom scrollLeft scrollTop".split(" ");
                        break;
                    case t.SCROLL:
                        a = ["scrollLeft", "scrollTop"];
                        break;
                    case t.ZOOM:
                        a =
                            ["height", "width", "zoom", "scrollLeft", "scrollTop"];
                        break;
                    default:
                        a = ["orientation", "height", "width", "scrollLeft", "scrollTop"]
                }
                for (var b = {}, e, g; (g = a.pop()) !== v;)e = x[g], "orientation" === g ? x[g] = r.orientation === v ? d() > f() ? 90 : 0 : r.orientation : "height" === g ? x[g] = f() : "width" === g ? x[g] = d() : "scrollTop" === g ? x[g] = r.scrollY ? r.scrollY : q.scrollTop() : "scrollLeft" === g ? x[g] = r.scrollX ? r.scrollX : q.scrollLeft() : "zoom" === g && (x[g] = c()), x[g] !== e && (b[g] = e);
                return b
            }

            function a(a) {
                if (a = A[a])a.pollCounter = a.maxPollCount, a.intervalId ||
                (a.intervalId = setInterval(a.handler, a.pollInterval))
            }

            function e(a) {
                (a = A[a]) && a.intervalId && (clearInterval(a.intervalId), a.intervalId = 0)
            }

            var q = h(r), t = {
                ORIENTATION_CHANGE: "orientationchange",
                SCROLL: "scroll",
                RESIZE: "resize",
                ZOOM: "zoom",
                ALL: "all"
            }, x = {
                scrollLeft: 0,
                scrollTop: 0,
                height: f(),
                width: d(),
                orientation: r.orientation === v ? d() > f() ? 90 : 0 : r.orientation,
                zoom: c()
            };
            l.on("beforeReady", function () {
                b(t.ALL)
            });
            var y = {speed: 0, degree: 0, direction: "", positionX: 0, positionY: 0}, u = [], w;
            q.bind("mousemove", k.throttle(function (a) {
                a =
                {x: a.clientX, y: a.clientY};
                if (w) {
                    var b = w, e = Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)) / 50 * 10, c = Math.atan2(a.y - b.y, a.x - b.x) / (Math.PI / 180), d = b = 0;
                    u.push({speed: e, degree: c});
                    4 < u.length && (u = u.slice(-4));
                    e = u.length;
                    for (c = 0; c < e; c++)b += u[c].speed, d += u[c].degree;
                    b = Number((b / e).toFixed(2));
                    d = Math.round(d / e);
                    y = {
                        speed: b,
                        degree: d,
                        direction: 0 <= d ? 157.5 < d ? "W" : 112.5 < d ? "SW" : 67.5 < d ? "S" : 22.5 < d ? "SE" : "E" : -157.5 > d ? "W" : -112.5 > d ? "NW" : -67.5 > d ? "N" : -22.5 > d ? "NE" : "E",
                        positionX: a.x,
                        positionY: a.y
                    };
                    w = a
                } else a && (w = a)
            }, 50));
            q.bind(t.SCROLL, k.throttle(function () {
                var a = b(t.SCROLL);
                l.trigger(t.SCROLL, x, a)
            }, 100));
            var A = {};
            k.each([t.RESIZE, t.ZOOM], function (a) {
                A[a] = {
                    handler: function () {
                    }, lastViewport: k.copy(x), maxPollCount: 5, pollCounter: 5, pollInterval: 100, intervalId: 0
                }
            });
            A.resize.handler = function () {
                var a = [], c = A.resize;
                b("resize");
                var d = k.diff(x, c.lastViewport);
                d.orientation && a.push(t.ORIENTATION_CHANGE);
                d.width || d.height ? a.push(t.RESIZE) : m.capabilities.isIETouchCapable && d.scrollTop && a.push(t.RESIZE);
                a.length && (c.lastViewport =
                    k.copy(x), k.each(a, function (a) {
                    l.trigger(a, x, d)
                }));
                0 === --c.pollCounter && e(t.RESIZE)
            };
            A.resize.pollInterval = 100;
            A.resize.maxPollCount = 10;
            q.bind(t.RESIZE, function (b) {
                a(t.RESIZE)
            });
            A.zoom.handler = function () {
                b(t.ZOOM);
                var a = A.zoom, c = k.diff(x, a.lastViewport);
                c.zoom && (a.lastViewport = k.copy(x), l.trigger(t.ZOOM, x, c));
                0 === --a.pollCounter && e(t.ZOOM)
            };
            A.zoom.pollInterval = 200;
            m.capabilities.android && q.bind("touchcancel", function (b) {
                2 === b.originalEvent.changedTouches.length && (A.zoom.maxPollCount = 15, a(t.ZOOM))
            });
            m.capabilities.ios && q.bind("touchend", function (b) {
                1 === b.originalEvent.touches.length && (A.zoom.maxPollCount = 1, a(t.ZOOM))
            });
            m.capabilities.ios || m.capabilities.android || q.bind("resize", function (b) {
                A.zoom.maxPollCount = 5;
                a(t.ZOOM)
            });
            return {
                viewport: function (a) {
                    a && b(t.ALL);
                    return k.copy(x)
                }, cursor: function () {
                    return k.copy(y)
                }, scrollBarWidth: function (a) {
                    if (a || (document && document.body && document.body.scrollHeight ? document.body.scrollHeight : 0) > f()) {
                        a = document.createElement("div");
                        a.style.visibility = "hidden";
                        a.style.width = "100%";
                        a.style.overflowX = "scroll";
                        document.body.appendChild(a);
                        var b = a.offsetHeight;
                        document.body.removeChild(a);
                        return b
                    }
                    return 0
                }
            }
        });
        n.register("a-analytics", function () {
            return {
                increment: function (h, m) {
                    var l = r.ue;
                    l && l.count && l.count("aui:" + h, (l.count("aui:" + h) || 0) + (m || 1))
                }, logError: function (h, m, l) {
                    r.ueLogError && r.ueLogError({message: h}, {logLevel: m, attribution: l})
                }
            }
        });
        n.when("a-analytics").register("a-preload", function (h) {
            function m() {
                if (0 < u.length)x = u; else if (x =
                        y, 0 === x.length || !w)return !1;
                if (F >= G)return !1;
                F++;
                return !0
            }

            function l(a, b) {
                var e = function () {
                    if (a) {
                        var b = a.parentElement;
                        b && b.removeChild(a);
                        a = null
                    }
                };
                b && clearTimeout(b);
                F = 1 > F ? 0 : F - 1;
                A ? c(e, 5) : e();
                C ? c(f, 0) : f()
            }

            function k(a) {
                var b, e;
                e = a.indexOf("#");
                var c = a.indexOf("?"), c = 0 < c ? c : 0 < e ? e : a.length;
                (e = a.lastIndexOf(".", c)) && (b = a.substring(e + 1, c).toLowerCase());
                return "gz" === b ? k(a.substring(0, e)) : b
            }

            function g(a, b, e, d) {
                var q;
                if (A || z && !e)q = c(function () {
                    l(a, q)
                }, 2500 + 100 * Math.random());
                a.onerror = function () {
                    l(a, q)
                };
                a.onload = function () {
                    l(a, q)
                }
            }

            function f() {
                if (m()) {
                    var e = x.pop(), d = k(e), q;
                    a:{
                        for (q = v.length; q--;)if (v[q] === d) {
                            q = !0;
                            break a
                        }
                        q = !1
                    }
                    var t;
                    A ? "js" !== d && (t = "OBJECT") : C ? (t = "IMG", q || (10 <= D ? t = "LINK" : 9 === D && (t = "SCRIPT"))) : t = "IMG";
                    d = t;
                    t = 1;
                    var z = "", w;
                    if (d) {
                        w = "IMG" === d ? new Image : b.createElement(d);
                        w.style.display = "none";
                        if ("IFRAME" === d)for (t = 0; e;)A && "js" === k(e) || (z += "<link rel='prefetch' href='" + e + "'/>", t++), e = x.pop(); else"IMG" === d ? (g(w, d, q, e), w.src = e) : "OBJECT" === d ? (w.data = e, g(w, d, q, e)) : "SCRIPT" === d ? (w.type = "text/cache",
                            g(w, d, q, e), w.src = e) : "LINK" === d && (w.rel = "stylesheet", w.media = "speech", g(w, d, q, e), w.href = e);
                        if (!C || "IMG" !== d)try {
                            if (a.appendChild(w), z) {
                                var y = w.contentWindow.document;
                                y.open();
                                y.write(z);
                                y.close();
                                c(l, 0)
                            }
                        } catch (u) {
                            l();
                            return
                        }
                        h.increment("preload_fulfilled", t);
                        F < G && f()
                    } else l()
                }
            }

            function d(a, b) {
                if (E) {
                    if ("string" === typeof a)a = [a]; else if ("object" !== typeof a || null === a)return;
                    var e, c;
                    for (e = 0; e < a.length; e++)(c = a[e]) && "string" !== typeof c ? d(c, b) : c && " " !== c[0] && (b.splice(Math.round(Math.random() * b.length),
                        0, c), h.increment("preload_asks"))
                }
            }

            var c = setTimeout, b = document, a = b.documentElement, e = a.style, q = navigator, t = q.userAgent, x = [], y = [], u = [], w = !1, A = "MozAppearance" in e, z = !A && "webkitAppearance" in e;
            z && q.vendor.indexOf("Apple");
            var C = !A && !z && (0 === q.appName.indexOf("Microsoft") || -1 < t.indexOf("Trident/")), E = z || A || C, e = C ? null !== /Trident\/([\d]+)/.exec(t) ? parseFloat(RegExp.$1) : null : -1, D = C ? e ? e + 4 : 6 : -1, G = "undefined" !== typeof r.plCount ? r.plCount() : C && 8 > D ? 2 : 5, F = 0, H = !1, v = ["gif", "jpeg", "jpg", "png"];
            n.when("a-preload-api-used",
                "afterLoad").execute("a-preload-low-priority", function () {
                w = !0;
                f()
            });
            return {
                preload: function (a, b) {
                    b ? b(a) : (H || (H = !0, n.declare("a-preload-api-used")), d(a, y), f())
                }
            }
        });
        n.when("a-util").register("a-request-animation-frame", function (h) {
            for (var m = 0, l = ["ms", "moz", "webkit", "o"], k = 0; k < l.length && !r.requestAnimationFrame; ++k)r.requestAnimationFrame = r[l[k] + "RequestAnimationFrame"], r.cancelAnimationFrame = r[l[k] + "CancelAnimationFrame"] || r[l[k] + "CancelRequestAnimationFrame"];
            r.requestAnimationFrame ||
            (r.requestAnimationFrame = function (g, f) {
                var d = h.now(), c = Math.max(0, 16 - (d - m)), b = r.setTimeout(function () {
                    g(d + c)
                }, c);
                m = d + c;
                return b
            });
            r.cancelAnimationFrame || (r.cancelAnimationFrame = function (g) {
                clearTimeout(g)
            });
            return {
                requestAnimationFrame: function (g, f) {
                    return r.requestAnimationFrame(g, f)
                }, cancelAnimationFrame: function (g) {
                    r.cancelAnimationFrame(g)
                }
            }
        });
        n.when("A").register("a-form-controls-api", function (h) {
            var m = h.$, l = 0, k = function (f) {
                return f && f.jquery ? f : f && 1 === f.nodeType ? m(f) : null
            }, g = function (f,
                             d, c) {
                var b = k(f);
                if (!b || 1 !== b.length)return !1;
                f = b.find("input").first();
                d !== v && (d = !!d, b.hasClass("a-touch-multi-select") && (b.find("i.a-icon").first().toggleClass("a-icon-touch-multi-select-active", d).toggleClass("a-icon-touch-multi-select", !d), b.attr("aria-checked", d)), f.prop("checked") !== d && f.prop("checked", d).trigger("change"));
                c !== v && (c = !!c, f.prop("disabled") !== c && f.prop("disabled", c))
            };
            return {
                findFormElementContainer: function (f) {
                    if ((f = k(f)) && 1 === f.length) {
                        var d = f.closest("form");
                        0 === d.length &&
                        (d = f.closest("fieldset"), 0 === d.length && (d = m(document)));
                        return d
                    }
                }, toggleCheckboxState: function (f) {
                    f = k(f);
                    var d;
                    f && 1 === f.length && (d = f.find("input").first(), g(f, !d[0].checked))
                }, setCheckboxState: g, setRadioState: g, normalizeElement: function (f) {
                    if ((f = (f = k(f)) ? f : k(this)) && 1 === f.length) {
                        var d = f.find("input").first();
                        d.attr("type");
                        var c = f.hasClass("a-touch-multi-select");
                        f.attr("id") || d.attr("id") || c && (!c || f.parent().attr("id")) || (c = "a-form-controls-autoid-" + l, f.attr("aria-labelledby", c).find(".a-checkbox-label, .a-radio-label, .a-touch-multi-select-item-label").attr("id",
                            c), l++);
                        g(f, d[0].checked, d[0].disabled)
                    }
                }, normalizeFieldsets: function (f) {
                    m(f).closest("fieldset").each(function (d, c) {
                        var b = m(c), a = b.find("legend").first();
                        if (a.length) {
                            var e = a.attr("id");
                            e || (e = "a-form-controls-autoid-" + l, a.attr("id", e), l++);
                            b.attr("aria-describedby", e)
                        }
                    })
                }
            }
        });
        n.when("jQuery", "a-util", "a-state", "a-analytics", "ready").register("a-weblab", function (h, m, l, k) {
            function g(e) {
                return a[e] || b[e] || "C"
            }

            function f(d) {
                var f = a[d] || b[d];
                !f || e[d] || q[d] || (e[d] = f, clearTimeout(t), t = setTimeout(c,
                    5E3));
                return f || "C"
            }

            function d(a) {
                return a !== v && r.encodeURIComponent(a) || ""
            }

            function c() {
                var a = [];
                m.each(e, function (b, e) {
                    a.push(e + ":" + b);
                    q[e] = 1
                });
                if (a.length) {
                    var b = x + d(a.join(",")) + "&t=" + (new Date).getTime() + "&type=", c = r.navigator;
                    c.sendBeacon && c.sendBeacon(b + "b") ? k.increment("wlabBcn") : ((new Image).src = b + "i", k.increment("wlabImg"))
                }
                e = {};
                clearTimeout(t)
            }

            var b = l.state("a-wlab-states") || {}, a = l.state("a-ltree-states") || {}, e = {}, q = {}, t, x = "/gp/aui/record.html?rid=" + d(r.ue_id) + "&sid=" + d(r.ue_sid) + "&wlab=";
            h(r).bind("unload", c);
            return {
                is: function (a, b, e) {
                    return (e ? f(a) : g(a)) === b
                }, isActive: function (e) {
                    return !(!a[e] && !b[e])
                }, noTrigger: g, trigger: f
            }
        });
        n.when("A").register("a-component-mixins", function (h) {
            return {
                show: function () {
                    this._$element.removeClass("a-hidden aok-hidden").show();
                    return this
                }, hide: function () {
                    this._$element.addClass("aok-hidden");
                    return this
                }, size: function () {
                    return this._$element.size()
                }, isEmpty: function () {
                    return 0 === this._$element.size()
                }
            }
        });
        n.when("A", "a-component-mixins",
            "a-analytics").register("a-component", function (h, m, l) {
            var k = h.createClass({
                init: function (g, f) {
                    h.contains(g, ".a-") && n.error("{API} Cannot create components using 'a-' selectors. Apply your own CSS class or ID to select this element.", "API", "component");
                    this._$element = h.$(g, f);
                    this._trackApi()
                }, _trackApi: function () {
                    var g = this;
                    n.when("a-weblab").execute(function (f) {
                        f.is("AUI_57326", "T1") && g._componentName && l.increment("api:" + g._componentName)
                    })
                }
            });
            return {
                create: function (g) {
                    var f = g.mixin;
                    f && delete g.mixin;
                    g = k.extend(g);
                    f && h.mixin(g.prototype, m, f);
                    return g
                }
            }
        });
        n.when("A", "a-component").register("a-alert", function (h, m) {
            var l = h.$, k = ["error", "success", "warning", "info"], g = h.map(k, function (a) {
                return "a-alert-" + a
            }).join(" "), f = h.map(k, function (a) {
                return "a-alert-inline-" + a
            }).join(" "), d = document.createElement("h4");
            d.className = "a-alert-heading";
            var c = l(d), b = m.create({
                _componentName: "alert", init: function (a, b) {
                    this._super(a, b);
                    this._$element = this._$element.filter(".a-alert, .a-alert-inline");
                    this._$heading =
                        this._$element.find(".a-alert-heading");
                    this._$content = this._$element.find(".a-alert-content")
                }, mixin: ["show", "hide", "size", "isEmpty"], heading: function (a) {
                    if ("undefined" === typeof a)return this._$heading.text();
                    this._$heading.length ? this._$heading.text(a) : this._$heading = c.clone().text(a).insertBefore(this._$content);
                    return this
                }, removeHeading: function () {
                    this._$heading.remove();
                    this._$heading = l();
                    return this
                }, text: function (a) {
                    if ("undefined" === typeof a)return this._$content.text();
                    this._$content.text(a);
                    return this
                }, html: function (a) {
                    if ("undefined" === typeof a)return this._$content.html();
                    this._$content.html(a);
                    return this
                }, type: function (a) {
                    -1 === h.indexOfArray(k, a) && n.error("{API} Alert type must be one of [error, success, warning, info].", "API", "alert");
                    this._$element.each(function (b, c) {
                        var d = l(c), h = "a-alert-";
                        d.hasClass("a-alert-inline") ? (h += "inline-", d.removeClass(f)) : d.removeClass(g);
                        d.addClass(h + a)
                    });
                    return this
                }
            });
            return function (a, e) {
                return new b(a, e)
            }
        });
        n.when("A", "a-component").register("a-button",
            function (h, m) {
                function l(g) {
                    g.preventDefault()
                }

                var k = m.create({
                    _componentName: "button", init: function (g, f) {
                        this._super(g, f);
                        this._$element = this._$element.filter(".a-button");
                        this._$coreFormElement = this._$element.children(".a-button-inner").children("button,input");
                        this._$coreLinkElement = this._$element.children(".a-button-inner").children("a");
                        this._$contentElement = this._$element.find(".a-button-text")
                    }, mixin: ["show", "hide", "isEmpty", "size"], toggle: function () {
                        this._$element.toggle();
                        return this
                    }, enable: function () {
                        this._$element.removeClass("a-button-disabled");
                        this._$coreFormElement.prop("disabled", !1);
                        this._$coreLinkElement.unbind("click", l);
                        return this
                    }, disable: function () {
                        this._$element.addClass("a-button-disabled");
                        this._$coreFormElement.prop("disabled", !0);
                        this._$coreLinkElement.click(l);
                        return this
                    }, isEnabled: function () {
                        return !this._$element.hasClass("a-button-disabled")
                    }, text: function (g) {
                        if (!(1 > this._$contentElement.length)) {
                            if ("undefined" === typeof g)return this._$contentElement.text();
                            this._$contentElement.text(g);
                            return this
                        }
                    }
                });
                return function (g,
                                 f) {
                    return new k(g, f)
                }
            });
        n.when("A", "a-component", "a-form-controls-api").register("a-checkbox", function (h, m, l) {
            var k = h.$, g = l.setCheckboxState, f = m.create({
                _componentName: "checkbox", init: function (d, c) {
                    this._super(d, c);
                    this._$element = this._$element.closest(".a-checkbox");
                    this._$input = this._$element.find("[type=checkbox]")
                }, mixin: ["show", "hide", "size", "isEmpty"], check: function (d) {
                    d = void 0 === d ? !0 : d;
                    this._$element.each(function () {
                        g(this, d)
                    });
                    return this
                }, uncheck: function () {
                    return this.check(!1)
                },
                toggleChecked: function () {
                    this._$element.each(function () {
                        l.toggleCheckboxState(this)
                    });
                    return this
                }, isChecked: function () {
                    for (var d = 0, c = this._$input.length; d < c; d++)if (!this._$input[d].checked)return !1;
                    return !0
                }, isUnchecked: function () {
                    for (var d = 0, c = this._$input.length; d < c; d++)if (this._$input[d].checked)return !1;
                    return !0
                }, enable: function (d) {
                    d = void 0 === d ? !0 : d;
                    this._$element.each(function () {
                        g(this, void 0, !d)
                    });
                    return this
                }, disable: function () {
                    return this.enable(!1)
                }, toggleEnabled: function () {
                    for (var d = 0,
                             c = this._$input.length; d < c; d++)g(this._$element[d], void 0, !this._$input[d].disabled);
                    return this
                }, isEnabled: function () {
                    for (var d = 0, c = this._$input.length; d < c; d++)if (this._$input[d].disabled)return !1;
                    return !0
                }, isDisabled: function () {
                    for (var d = 0, c = this._$input.length; d < c; d++)if (!this._$input[d].disabled)return !1;
                    return !0
                }, toggle: function (d) {
                    "undefined" !== typeof d && (d = !!d);
                    this._$element.each(function () {
                        k(this).toggle(d)
                    });
                    return this
                }
            });
            return function (d, c) {
                return new f(d, c)
            }
        });
        n.when("A",
            "a-component").register("a-meter", function (h, m) {
            var l = m.create({
                _componentName: "meter", init: function (h, g) {
                    this._super(h, g);
                    this._$element = this._$element.filter(".a-meter, .a-meter-with-txt");
                    this._$bar = this._$element.find(".a-meter-bar");
                    this._$progressTxt = this._$element.find(".a-meter-progress-txt")
                }, mixin: ["show", "hide", "size", "isEmpty"], get: function () {
                    return {percent: this.percent(), txt: this.text()}
                }, enable: function () {
                    this._$element.removeClass("a-inactive");
                    return this
                }, disable: function () {
                    this._$element.addClass("a-inactive");
                    return this
                }, isEnabled: function () {
                    return !this._$element.hasClass("a-inactive")
                }, percent: function (k) {
                    if ("undefined" === typeof k)return k = this._$bar.get(0).style.width, parseInt(k, 10);
                    h.isFiniteNumber(k) || n.error("{API}  Meter percent should be a number between 0 and 100", "a-meter", "setProgress");
                    k = Math.min(100, Math.max(0, k));
                    k += "%";
                    this._$bar.css({width: k});
                    this._$element.attr("aria-label", k);
                    return this
                }, text: function (h) {
                    if ("undefined" === typeof h)return this._$progressTxt.text();
                    this._$progressTxt.text(h);
                    return this
                }, set: function (h, g) {
                    this.percent(h);
                    g && this.text(g);
                    return this
                }
            });
            return function (h, g) {
                return new l(h, g)
            }
        });
        n.when("a-component").register("a-spinner", function (h) {
            var m = h.create({
                _componentName: "spinner", init: function (h, k) {
                    this._super(h, k);
                    this._$element = this._$element.filter(".a-spinner-wrapper, .a-spinner")
                }, mixin: ["show", "hide", "isEmpty", "size"], remove: function () {
                    this._$element.remove()
                }
            });
            return function (h, k) {
                return new m(h, k)
            }
        });
        n.register("a-ua", function () {
            return {
                compareVersions: function (h,
                                           m, l) {
                    var k = function (c) {
                        n.error("Versions are not comparable. " + c, "A - extras", "compareVersions")
                    };
                    l = l || ".";
                    "string" === typeof h && "string" === typeof m && "string" === typeof l && "" !== h && "" !== m || k("Input values are not valid.");
                    h = h.split(l);
                    m = m.split(l);
                    l = Math.max(h.length, m.length);
                    for (var g = 0; g < l; g++) {
                        var f = g < h.length ? Number(h[g]) : 0, d = g < m.length ? Number(m[g]) : 0;
                        !isNaN(f) && isFinite(f) && !isNaN(d) && isFinite(d) || k("Piece of one version number evaluates to NaN or +/- Infinity.");
                        if (f < d)return -1;
                        if (f > d)return 1
                    }
                    return 0
                }
            }
        });
        n.when("a-base", "a-util", "a-analytics", "afterLoad").execute("a-template-errors", function (h, m, l) {
            var k = h.$, g = {};
            (function () {
                k(".a-template-errors").each(function () {
                    var f = k(this);
                    (f = f.data("template-errors") || f.find("[data-template-errors]").data("template-errors")) && 0 < f.length && m.each(f, function (d) {
                        d = d.split(":").slice(0, 3).join(":");
                        g[d] || (g[d] = 0);
                        g[d] += 1
                    })
                })
            })();
            (function () {
                m.each(g, function (f, d) {
                    var c = d.split(":"), b = Math.pow(10, Math.floor(Math.log(f) / Math.log(10)));
                    l.logError(c[1] +
                        " attribute failed " + c[2] + " in " + c[0] + " template. This error is thrown between " + b + " and " + 10 * b + " number of times on the page.", "ERROR", d)
                })
            })()
        });
        n.when("jQuery", "a-analytics").register("a-unicode-rupee-test", function (h, m) {
            var l = h("<div/>"), k = h("<span/>").html("&#65534;"), g = h("<span/>").html("&#8377;");
            l.append(k, g);
            l.appendTo(document.body);
            g = g.width();
            k = k.width();
            g === k ? m.increment("aui-unsupported-rupee", 1) : m.increment("aui-supported-rupee", 1);
            l.remove()
        })
    })()
})(function () {
    var n = window.AmazonUIPageJS ||
        window.P, r = n._namespace || n.attributeErrors;
    return r ? r("AmazonUIBaseJS") : n
}(), window);
(function (n, r, v) {
    n.guardFatal(function () {
    })()
})(function () {
    var n = window.AmazonUIPageJS || window.P, r = n._namespace || n.attributeErrors;
    return r ? r("AmazonUITouchJS") : n
}(), window);
(function (n, r, v) {
    n.guardFatal(function () {
        n.when("A", "a-popover-base-factory").register("a-popover-base-apis", function (h, m) {
            return {
                show: function (h) {
                    var k = m.get(h.$trigger ? h.$trigger : h);
                    if (k)return k.show.apply(k, arguments)
                }, hide: function (h) {
                    var k = m.get(h);
                    if (k)return k.unlock(1), k.hide.apply(k, arguments)
                }, get: function (h) {
                    return m.get(h)
                }, remove: function (h) {
                    return m.remove(h)
                }
            }
        });
        n.when("A", "a-popover-iframes", "a-popover-util", "a-popover-objectclass", "a-popover-data").register("a-popover-base-factory",
            function (h, m, l, k, g) {
                function f(a) {
                    return t[a] ? t[a] : null
                }

                function d(a, b) {
                    return new k.PopoverClass(a, b)
                }

                function c(b, e) {
                    var c = null;
                    if ("number" === typeof b)c = f(b); else if ("string" === typeof b)(c = q[b] ? q[b] : null) || (c = f(b)); else if ("object" === typeof b)if (b.$popover)c = b; else {
                        var d = a(b), c = d.data("a-popover-id");
                        c || (c = d.find(".a-declarative").eq(0), c = c.length ? c.data("a-popover-id") : null);
                        c = f(c);
                        if (!c) {
                            var t = d.data("action");
                            (t = t ? d.data(t) : null) && t.name && (c = t.name, c = q[c] ? q[c] : null, !c || e && c.type !== e ? c = null : (t =
                                (t = c.attrs("currentDataStrategy")) ? g.getStrategyByName(t) : g.guessStrategyByAttrs(c.attrs())) && t.reusePopover ? c.$trigger[0] !== d[0] && (c.$trigger.data("a-popover-id", null), c.$trigger = d) : c = null)
                        }
                    }
                    return c
                }

                function b() {
                    y || (y = d({id: -1, $popover: x, $trigger: x, immersive: !0}, {
                        isActive: function () {
                            return !0
                        }, hideMethod: function () {
                            this.hideChildren()
                        }, showMethod: h.constants.NOOP
                    }));
                    return y
                }

                var a = h.$, e = 1, q = {}, t = {}, x = a("<div id='a-popover-root' style='z-index:-1;position:absolute;' />").appendTo("body"), y;
                return {
                    getRoot: b,
                    get: function (a, b) {
                        b = b ? b : this ? this.type : null;
                        var e = c(a, b);
                        return e && b && e.type !== b ? null : e
                    }, create: function (g, k) {
                        var l = a(g), x = k.attributes || {}, y = k.typeSpecificFunctions || k.variant || {}, E = k.actionCheck || !1;
                        l.data("a-popover-id");
                        var D = x.type, n = null;
                        !D || l.hasClass("a-declarative") && l.data("action") && -1 !== l.data("action").indexOf(D) || (l = h.declarative.create(l, "a-" + D), g = l[0]);
                        if (E && l.data("action") && -1 === l.data("action").indexOf(D))return null;
                        D && l && (n = c(l));
                        if (n)return n.type !== D ? null : n;
                        E = a(g);
                        D = x.type;
                        l = null;
                        D ? (-1 === a.inArray(D, ["modal", "secondary-view", "popover"]) || x.popoverLabel || r.ueLogError && -1 !== document.getElementsByTagName("body")[0].className.indexOf("a-aui_accessibility_49860-t1") && r.ueLogError({message: "[popoverLabel attribute is required for all AUI popovers, modals and secondary views for accessibility reasons. Please see http://tiny/g8mxo1mk/auiamazdevepopo for more details]"}, {logLevel: "ERROR"}), E && E.length ? (x = h.extend({
                            id: e++,
                            $trigger: E,
                            $triggerWrapper: null,
                            $iframe: m.get()
                        }, x), y =
                            h.copy(y), l = d(x, y), t[l.id] = l, l.name && (q[l.name] = l), E.data("a-popover-id", l.id), y = l.$trigger.closest(".a-popover"), y = !l.attrs("immersive") && y.length ? f(y.data("a-popover-id")) || b() : b(), l.parent = y, y.children.push(l), y = l) : y = null) : y = null;
                        return y
                    }, remove: function (a, b) {
                        var e = this.get(a), c = !1;
                        if (e) {
                            c = e.id;
                            if (e && -1 < c) {
                                var d = h.indexOfArray(e.parent.children, e), f = e.$container, g = e.$trigger;
                                e.parent.children.splice(d, 1);
                                e.unlock().hide();
                                e.update({content: ""});
                                m.release(e.$iframe);
                                f && e.$container.remove();
                                g.data("a-popover-id",
                                    "");
                                e.name && delete q[e.name];
                                delete t[c];
                                c = !0
                            } else c = !1;
                            b && h.declarative.remove(e.$trigger[0], "a-" + b)
                        }
                        return c
                    }
                }
            });
        n.when("A", "a-popover-util", "a-popover-base-factory").register("a-popover-base-handlers", function (h, m, l) {
            function k(f) {
                for (var d; f.length && !(d = f.data("a-popover-id"));)f = f.parent();
                return l.get(d)
            }

            var g = h.$;
            g(document).bind("click " + h.action.start, function (f) {
                var d = g(f.target), c = f.originalEvent;
                if (!(c && c.pointerType && c.pointerType === h.pointerType.touch && "click" === c.type ||
                    d.hasClass("a-modal-scroller") || "a-popover-lgtbox" === d[0].id || "html" === d[0].nodeName.toLowerCase())) {
                    var b = function (a) {
                        return m.eventOccursWithin(f, a)
                    };
                    h.each(l.getRoot().children, function (a) {
                        if (a.isVisible() || a.isContentLoaded()) {
                            var e = m.search(a, b);
                            e ? e.hideChildren() : null !== a.attrs("lightboxOptions") || a.attrs("immersive") || a.unlock(1).hide()
                        }
                    })
                }
            });
            h.declarative("a-popover-close", ["click", h.action.start], function (f) {
                var d = k(f.$target);
                d && (d.unlock().hide(), m.trigger("dismiss", d));
                f.$event.preventDefault()
            });
            h.declarative("a-popover-a11y", "focusout", function (f) {
                var d = k(f.$target);
                d && d.$firstTabbable && d.$lastTabbable && (f = f.$target[0], d.$firstTabbable[0] ? f === d.$lastTabbable[0] ? h.delay(function () {
                    g(document.activeElement).hasClass("a-popover-end") && d.$firstTabbable.focus()
                }, 0) : f === d.$firstTabbable[0] && h.delay(function () {
                    g(document.activeElement).hasClass("a-popover-start") && d.$lastTabbable.focus()
                }, 0) : h.delay(function () {
                    g(document.activeElement).hasClass("a-popover-end") && d.$startAnchor.focus()
                }, 0))
            });
            h.declarative("a-popover-a11y",
                "keydown", function (f) {
                    var d = f.$event;
                    d.keyCode === h.constants.keycodes.ESCAPE && (f = k(f.$target), d.preventDefault(), f && f.hide())
                });
            h.on("resize zoom", function () {
                l.getRoot().updatePosition()
            });
            if (h.capabilities.isSafari && h.capabilities.ios)h.on("a:popover:refresh", function (f) {
                f = f.popover;
                f.$popover && f.$popover.undelegate('input[type="date"]', "blur").delegate('input[type="date"]', "blur", function () {
                    var d = h.$(r);
                    d.scrollTop(d.scrollTop() + 1)
                })
            })
        });
        n.when("A", "a-popover-base-apis", "a-popover-base-handlers").register("a-popover-base",
            function (h, m, l) {
                return m
            });
        n.when("A", "a-popover-util", "a-popover-data", "a-popover-position", "a-popover-iframes", "a-popover-lightbox").register("a-popover-objectclass", function (h, m, l, k, g, f) {
            function d(e, d) {
                var k = -1, l = [1], u = -2;
                this.parent = null;
                this.children = [];
                this.typeSpecificFunctions = {};
                this.attributes = {position: "triggerVertical", alone: !1, immersive: !1};
                var D = function (e, d) {
                    var q = this.isActive(), f = this.getDataStrategy(), g = !this.$popover, t = d || g, k = !1;
                    e = e || t;
                    if (!t)for (var x = l.length; x-- && !t;)t = !a[l[x]];
                    t && (t = y.apply(this), t = b(t), g || (f.unloadContent(this), this.$container.remove(), k = !0), b("body").append(t), this.$container = t, this.$popover = this.$container.hasClass("a-popover") ? this.$container : this.$container.find(".a-popover"), this.$startAnchor = this.$popover.hasClass("a-popover-start") ? this.$popover : this.$popover.find(".a-popover-start"), this.$endAnchor = this.$popover.find(".a-popover-end"), this.$popover.attr("id", "a-popover-" + this.id).data("a-popover-id", this.id));
                    this.attrs("immersive") ||
                    (t = parseInt(this.parent.$popover.css("z-index"), 10), h.isFiniteNumber(t) || (t = this.parent.attrs("immersive") ? 1010 : 0), this.$popover.css("z-index", Math.max(299, 100 + t)));
                    if (f.shouldRefreshContent(this) || e)k || f.unloadContent(this), f.loadContent(this, g);
                    this.typeSpecificFunctions.updateDimensions !== c && this.typeSpecificFunctions.updateDimensions.apply(this);
                    l = [];
                    q && n.call(this, [], !1);
                    q = this.$popover.find(".a-popover-inner").find("a, button, input, select, textarea, [tabindex]:not([tabindex='-1'])");
                    this.$firstTabbable =
                        this.closeButton ? this.$popover.find(".a-button-close") : q.first();
                    this.$lastTabbable = 0 === q.length ? this.$firstTabbable : q.last();
                    return this
                }, n = function (a, b) {
                    function e() {
                        d.updatePosition();
                        var c = d.attrs("navigate");
                        !b && c && d.attrs("navigate", !1);
                        f.apply(d, a);
                        b && m.trigger("show", d);
                        k && k.apply(d, a);
                        b && m.trigger("afterShow", d);
                        d.$popover.attr("aria-hidden", "false");
                        !b && c && d.attrs("navigate", c);
                        u = 2
                    }

                    var d = this;
                    b = !!b;
                    var q = d.typeSpecificFunctions, f = q.showMethod !== c ? q.showMethod : t, g = q.beforeShowMethod !== c ?
                        q.beforeShowMethod : null, k = q.afterShowMethod !== c ? q.afterShowMethod : null;
                    u = 1;
                    d.attrs("originalFocus", document.activeElement);
                    d.$popover.css("visibility", "hidden").addClass("a-popover-hidden").show();
                    g && g.apply(d, a);
                    d.attrs("synchronous") ? e() : h.delay(function () {
                        e()
                    }, 0)
                };
                this.show = function () {
                    var a = this, b = a.attrs("lightboxOptions") || null;
                    if (!a.isActive()) {
                        a.lock(1);
                        b && f.lock(1);
                        a.attrs("alone") && h.each(a.parent.children, function (b) {
                            b.isActive() && b.id !== a.id && !b.attrs("modeless") && b.unlock().hide()
                        });
                        m.trigger("beforeShow",
                            a);
                        if (!a.$container || a.isDirty() || a.getDataStrategy().shouldRefreshContent(a))m.trigger("refresh", a), D.call(a);
                        if (a.draggable) {
                            var e = a.$container;
                            h.draggable(e, {handle: e.find(".a-popover-draggable-handle")})
                        }
                        b && f.show(h.extend({popover: a}, b));
                        n.call(a, arguments, !0);
                        h.delay(function () {
                            a.unlock(1);
                            b && f.unlock(1)
                        }, 0)
                    }
                    return this
                };
                this.hide = function () {
                    var a = this, e = a.typeSpecificFunctions, d = e.hideMethod !== c ? e.hideMethod : x, t = e.beforeHideMethod !== c ? e.beforeHideMethod : null, k = e.afterHideMethod !== c ? e.afterHideMethod :
                        null, l = a.attrs("lightboxOptions") || null;
                    !a.isLocked() && a.isActive() && (u = -1, a.hideChildren(), m.trigger("beforeHide", a), t && t.apply(a, arguments), d.apply(a, arguments), g.release(a.$iframe), m.trigger("hide", a), e = a.attrs("originalFocus"), "tooltip" !== a.type && (!a.$trigger || q && !a.$trigger.is(":visible") ? !e || q && !b(e).is(":visible") || e.focus() : a.$trigger.focus()), h.delay(function () {
                        k && k.apply(a, arguments);
                        a.$popover.attr("aria-hidden", "true");
                        l && (a.parent.attrs("lightboxOptions") ? f.show(h.extend({popover: a.parent},
                            l)) : f.hide(l));
                        m.trigger("afterHide", a);
                        u = -2
                    }, 0));
                    return this
                };
                this.update = function (a) {
                    var b = "string" === typeof a ? {content: a} : h.copy(a), e = this.attrs();
                    a = this.getDataStrategy();
                    h.each(b, function (a, b) {
                        (a && !e[b] || e[b] && e[b] !== a) && l.push(b)
                    });
                    this.isDirty() && (b = h.extend({}, e, b), this.attrs(b), this.getDataStrategy(b), this.$popover && a.unloadContent(this), this.isActive() && D.call(this, !0));
                    return this
                };
                this.refresh = function (a, b) {
                    return D.call(this, a || !0, b || !1)
                };
                this.isActive = function () {
                    return 1 <= u
                };
                this.isVisible =
                    function () {
                        return 2 === u
                    };
                this.isContentLoading = function () {
                    return 3 === u
                };
                this.setContentLoading = function () {
                    u = 3
                };
                this.isContentLoaded = function () {
                    return 4 === u
                };
                this.setContentLoaded = function () {
                    u = 4
                };
                this.isDirty = function () {
                    return 0 < l.length
                };
                this.lock = function (a) {
                    a || (a = 10);
                    k < a && (k = a);
                    return this
                };
                this.unlock = function (a) {
                    a || (a = 10);
                    k <= a && (k = -1);
                    return this
                };
                this.isLocked = function () {
                    return -1 !== k
                };
                this.typeSpecificFunctions = d;
                this.attrs(e);
                h.extend(this, this.attributes)
            }

            var c, b = h.$, a = {
                name: !0, url: !0, content: !0,
                width: !0, height: !0, "max-width": !0, "max-height": !0, "min-width": !0, "min-height": !0
            }, e = h.capabilities.mobile && h.capabilities.isIE10Plus, q = b("html").hasClass("a-lt-ie9"), t = function () {
                this.$popover.css({visibility: "visible"}).removeClass("a-popover-hidden");
                this.attrs("focusWhenShown") && "ajax" !== this.attrs("currentDataStrategy") && this.focus()
            }, x = function () {
                this.$popover.hide().find(".a-lgtbox-vertical-scroll").removeClass("a-lgtbox-vertical-scroll")
            }, y = function () {
                var a = this.typeSpecificFunctions;
                return a.skin !==
                c ? a.skin(this) : ""
            }, u = d.prototype;
            u.getDataStrategy = function (a) {
                var b = this.typeSpecificFunctions;
                a || this.attrs("currentDataStrategy") || (a = this.attrs());
                a && (a = a.dataStrategy ? l.getStrategyByName(a.dataStrategy) : l.guessStrategyByAttrs(a)) && (b.dataStrategy = a, this.attrs("currentDataStrategy", a.name));
                return b.dataStrategy
            };
            u.getContent = function () {
                return this.typeSpecificFunctions.getContent !== c ? this.typeSpecificFunctions.getContent.apply(this, arguments) : null
            };
            u.updateContent = function (a) {
                this.typeSpecificFunctions.updateContent !==
                c && this.typeSpecificFunctions.updateContent.apply(this, arguments);
                return this
            };
            u.setAriaBusy = function (a) {
                this.typeSpecificFunctions.setAriaBusy !== c && this.typeSpecificFunctions.setAriaBusy.apply(this, arguments);
                return this
            };
            u.ajax = function (a) {
                return this.update({url: a})
            };
            u.updateChildrenPosition = function () {
                h.each(this.children, function (a) {
                    a.isActive() && a.updatePosition()
                });
                return this
            };
            u.updatePosition = function () {
                var a = this;
                if (-1 === a.id)h.each(a.children, function (a) {
                    a.isActive() && a.updatePosition()
                });
                else {
                    var e = a.$popover;
                    h.capabilities.isMetroIEGuess && h.capabilities.isIETouchCapable ? e.css("opacity", .01) : e.css("visibility", "hidden");
                    var c = function () {
                        var c = e.find(".a-popover-inner").css({
                            height: "auto",
                            "overflow-y": "auto"
                        }), d = a.attrs("position"), q = {}, q = a.typeSpecificFunctions.positionStrategy ? k.customPosition(a, a.typeSpecificFunctions.positionStrategy) : k[d](a);
                        m.trigger("beforeUpdatePosition", a);
                        d = {top: q.top + "px", left: q.left + "px"};
                        h.capabilities.isMetroIEGuess && h.capabilities.isIETouchCapable ? d.opacity =
                            1 : d.visibility = "visible";
                        e.css(d);
                        a.isContentLoaded() && 0 === b(document.activeElement).closest(a.$popover).length && !0 === a.attrs("focusWhenShown") && a.focus();
                        if (c.length && (!c[0].style.height || "auto" === c[0].style.height)) {
                            var f = e.outerHeight() || 0, g = e.find(".a-popover-header, .a-modal-close-nohead-top").outerHeight(!0) || 0, t = e.find(".a-popover-footer").outerHeight(!0) || 0, d = c.outerHeight() || 0, f = f - g - t;
                            d > f && c.css({height: f + "px", "overflow-y": "scroll"})
                        }
                        a.$iframe.height(e.outerHeight()).width(e.outerWidth()).css("z-index",
                            parseInt(e.css("z-index"), 10) - 2).show().offset({top: q.top, left: q.left});
                        m.trigger("afterUpdatePosition", a);
                        m.trigger("positionUpdated", a);
                        h.each(a.children, function (a) {
                            a.isActive() && a.updatePosition()
                        })
                    };
                    a.attrs("immersive") && (h.capabilities.mobile || h.capabilities.tablet) ? (e.css({
                        top: 0,
                        left: 0
                    }), h.delay(function () {
                        c()
                    }, 0)) : c()
                }
                return a
            };
            u.attrs = function (a, b) {
                var e = this;
                if (b === c && "object" !== typeof a)return a ? "string" === typeof a ? this.attributes[a] !== c ? this.attributes[a] : null : null : this.attributes;
                "object" === typeof a ? h.each(a, function (a, b) {
                    e.attrs(b, a)
                }) : "string" === typeof a && (this.attributes[a] = b, e[a] = b);
                return this
            };
            u.hideChildren = function () {
                h.each(this.children, function (a) {
                    a.unlock(1);
                    a.hide()
                });
                return this
            };
            u.focus = function () {
                var a = this, c = b(r), d = c.scrollTop(), q = a.$popover.offset().top;
                e && d > q && c.scrollTop(q);
                h.delay(function () {
                    a.$startAnchor.focus()
                }, 0);
                return this
            };
            return {PopoverClass: d}
        });
        n.when("jQuery", "ready").register("a-changeover", function (h) {
            h(document).delegate(".a-changeover:not(.a-changeover-manual)",
                "webkitAnimationEnd animationend click touchstart", function (h) {
                    this.style.display = "none"
                })
        });
        n.when("A", "a-popover-util").register("a-popover-ajax-strategy", function (h, m) {
            var l = h.$, k = l("html").hasClass("a-lt-ie8");
            return {
                name: "ajax", reusePopover: !1, loadContent: function (g, f) {
                    g.setContentLoading();
                    var d = g.attrs("url"), c = g.attrs("timeout") || 1E4, b = g.attrs("ajaxFailMsg") || "Sorry, content is not available.", a = !!g.attrs("cache"), e = g.attrs("spinnerTimer"), q = g.attrs("ajaxHandler"), t = g.attrs("content");
                    g.attrs("content", null);
                    t && !f ? (g.updateContent(t), e && clearTimeout(e), q && q.abort && q.abort()) : (e = h.delay(function () {
                        g.attrs("content") || "ajax" !== g.attrs("currentDataStrategy") || (m.showSpinner(g), g.setAriaBusy(!0))
                    }, k ? 0 : 100), q = h.ajax(d, {
                        type: "GET", timeout: c, cache: a, success: function (a) {
                            g.attrs("content") || "ajax" !== g.attrs("currentDataStrategy") || (clearTimeout(e), g.setContentLoaded(), m.trigger("ajaxSuccess", g), g.setAriaBusy(!1), g.updateContent(a), g.isActive() && g.updatePosition(), m.trigger("ajaxContentLoaded",
                                g))
                        }, error: function () {
                            g.attrs("content") || "ajax" !== g.attrs("currentDataStrategy") || (clearTimeout(e), g.setContentLoaded(), m.trigger("ajaxFail", g), g.setAriaBusy(!1), g.updateContent(b), g.isActive() && g.updatePosition())
                        }
                    }), g.attrs({spinnerTimer: e, ajaxHandler: q}));
                    return this
                }, unloadContent: function (g) {
                    m.clearContent(g);
                    return this
                }, shouldRefreshContent: function (g) {
                    return !g.attrs("manualRefresh")
                }, isValidStrategy: function (g) {
                    return !!g.url
                }
            }
        });
        n.when("A", "a-popover-util").register("a-popover-inline-strategy",
            function (h, m) {
                return {
                    name: "inline", reusePopover: !1, loadContent: function (h) {
                        h.setContentLoading();
                        var k = h.attrs("content");
                        k && h.attrs("content", null);
                        if (!k)var k = h.$trigger, g = k.data("action"), k = k.data(g) || {}, k = k.inlineContent ? k.inlineContent : null;
                        k || (k = h.attrs("inlineContent"));
                        h.updateContent(k);
                        h.setContentLoaded();
                        return this
                    }, unloadContent: function (h) {
                        var k = h.getContent(), k = k && 0 < k.length ? k.html() : h.attrs("inlineContent"), g = h.$trigger, f = g.data("action"), d = g.data(f) || {};
                        d.inlineContent = k;
                        g.data(f,
                            d);
                        m.clearContent(h);
                        return this
                    }, shouldRefreshContent: function (h) {
                        return h.isDirty()
                    }, isValidStrategy: function (h) {
                        return !0
                    }
                }
            });
        n.when("A", "a-popover-util").register("a-popover-preload-strategy", function (h, m) {
            var l = h.$;
            return {
                name: "preload", reusePopover: !0, loadContent: function (h) {
                    h.setContentLoading();
                    var g = h.attrs("name"), f = h.attrs("content");
                    h.attrs("content", null);
                    var d;
                    d = l("#a-popover-" + g);
                    d.detach();
                    if (d.length) {
                        d = d[0];
                        for (var c = document.createDocumentFragment(); d.firstChild;)c.appendChild(d.firstChild);
                        d = c
                    } else d = !1;
                    f ? h.updateContent(f) : g && h.updateContent(d);
                    h.setContentLoaded();
                    return this
                }, unloadContent: function (k) {
                    var g = k.attrs("name");
                    if (g) {
                        var f = k.getContent();
                        if (f && f.html()) {
                            var g = "a-popover-" + g, d = l("#" + g);
                            d.length ? d = d[0] : (d = document.createElement("div"), d.id = g, d.className = "a-popover-preload", document.body.appendChild(d));
                            g = d;
                            if (!h.trim(g.innerHTML))if (f = f[0], "string" === typeof f)l(g).html(f); else {
                                for (d = document.createDocumentFragment(); f.firstChild;)d.appendChild(f.firstChild);
                                g.appendChild(d)
                            }
                            m.clearContent(k)
                        }
                    }
                    return this
                },
                shouldRefreshContent: function (h) {
                    h = (h = h.attrs("name")) ? l("#a-popover-" + h) : null;
                    return !(!h || !h.length || "" === h.html())
                }, isValidStrategy: function (h) {
                    return h.name ? "preload" === h.currentDataStrategy ? !0 : !!l("#a-popover-" + h.name).length : !1
                }
            }
        });
        n.when("A").register("a-dropdown-base-positions", function (h) {
            return {
                positionStrategy: function (m) {
                    var l = m.$popover, k = m.$trigger, g = m.measure;
                    m = l.find(".a-popover-inner");
                    m.css({"min-width": "0px", width: "auto", height: "auto"});
                    var f = k.closest(".a-button-dropdown");
                    f.length || (f = k.closest(".a-button-group"));
                    var k = g(l, f), g = k.windowWidth - (k.triggerLeft + k.popoverWidth), f = k.windowWidth - k.triggerLeft - k.triggerWidth, d = k.triggerLeft, c = {}, b = k.triggerTop - k.windowTop, a = k.windowBottom - k.triggerBottom, e = l.find(".a-popover-inner");
                    b > a && a < k.popoverHeight ? (a = b, c.top = b < k.popoverHeight ? k.triggerBottom - b : k.triggerBottom - k.popoverHeight) : c.top = k.triggerTop;
                    e.css("height", a < k.popoverHeight ? a - k.headerHeight + "px" : "auto");
                    k.popoverHeight > a ? e.addClass("a-lgtbox-vertical-scroll") : e.removeClass("a-lgtbox-vertical-scroll");
                    m.hasClass("a-lgtbox-vertical-scroll") && -1 < navigator.appVersion.indexOf("Windows") ? (b = Math.max(k.popoverWidth, k.triggerWidth) + h.scrollBarWidth(!0), m.width(b)) : m.css("min-width", k.triggerWidth + "px");
                    k.popoverWidth = l.width();
                    c.left = 50 > g && d > f ? k.triggerRight - k.popoverWidth : k.triggerLeft;
                    return c
                }
            }
        });
        n.when("A", "a-dropdown-base-positions").register("a-dropdown-base-view-base", function (h, m) {
            return h.extend(m, {
                updateContent: function (h) {
                    "string" === typeof h ? this.$popover.find(".a-popover-inner").html(h) :
                    h && this.$popover.find(".a-popover-inner").html("").append(h)
                }, beforeShowMethod: function () {
                    this.parent.lock(1);
                    this.$trigger.attr("aria-pressed", !0)
                }, afterShowMethod: function () {
                    var l = this.$popover, k = l.find(".a-active");
                    h.delay(function () {
                        k.length ? k.closest("li").focus() : k = l.find("li").first().focus()
                    }, 0)
                }, beforeHideMethod: function () {
                    this.parent.unlock(1)
                }, afterHideMethod: function () {
                    this.$trigger.attr("aria-pressed", !1).focus();
                    this.$popover.css("width", "auto")
                }
            })
        });
        n.when("A", "a-dropdown-base-view-base").register("a-dropdown-base-view",
            function (h, m) {
                return m
            });
        n.when("A", "a-popover-base-factory", "a-dropdown-base-view").register("a-dropdown-base-factory", function (h, m, l) {
            function k(b, a, e) {
                var c = ['<li tabindex="0" role="option"'], f = b.data("aCssClass"), g = b.data("aId"), k = b.data("aHtmlContent"), l = b.data("aImageSource"), m = ['<a tabindex="-1" href="javascript:void(0)" data-value="{&quot;stringVal&quot;:&quot;', b.val().replace(/"/g, "\\&quot;"), '&quot;}"'], A = ["a-dropdown-link"], z = ["a-dropdown-item"];
                a && (A.push("a-active"), c.push(' aria-checked="true"'));
                d && (h.capabilities.mobile || h.capabilities.tablet) && A.push("a-list-link-after-group");
                d = !1;
                f && z.push(f);
                g && c.push(' id="' + g + '"');
                c.push('aria-labelledby="');
                c.push(e);
                c.push('"');
                m.push(' id="');
                m.push(e);
                m.push('"');
                c.push(' class="' + z.join(" ") + '"');
                c.push(">");
                k ? a = k : (a = [], l && (A.push("a-option-has-image"), a.push('<img src="' + l + '" class="a-rich-option-image" />')), a.push(b.html()), a = a.join(""));
                m.push(' class="');
                m.push(A.join(" "));
                m.push('">');
                m.push(a);
                m.push("</a>");
                c.push(m.join(""));
                c.push("</li>");
                return c.join("")
            }

            function g(b) {
                b.jquery || (b = f(b));
                var a = b.children("optgroup,option:not(.a-prompt)"), e = !1, q = b[0], g = b.attr("id") ? b.attr("id") : "dropdown" + c++, h, l;
                -1 < q.selectedIndex && (h = q.options[q.selectedIndex].value);
                l = ['<ul tabindex="-1" class="a-nostyle a-list-link', b.data("a-has-images") ? " a-box-list" : "", '" role="application" aria-multiselectable="false">'];
                var m = 0;
                a.each(function () {
                    var a = f(this);
                    a.is("optgroup") ? (a.children().each(function (a) {
                        l.push(k(f(this), h === this.value, g + "_" + m++))
                    }), l.push('<li tabindex="-1" class="divider"><hr /></li>'),
                        e = d = !0) : (l.push(k(a, h === this.value, g + "_" + m++)), e = !1)
                });
                e && l.pop();
                l.push("</ul>");
                return l.join("")
            }

            var f = h.$, d = !1, c = 1;
            return h.extend({create: m.create, remove: m.remove, get: m.get}, {
                type: "dropdown", create: function (b, a, e) {
                    var c = a.$button, d = a.$sourceSelect, f = d[0], k = c.find(".a-dropdown-label"), u = d.data("aTouchHeader");
                    if (!u || !u.length && k.length)u = k.text();
                    return m.create(b, {
                        attributes: {
                            type: "dropdown",
                            header: u,
                            closeButtonLabel: a.closeButtonLabel ? a.closeButtonLabel : "Close",
                            inlineContent: d,
                            position: a.position,
                            alone: !0,
                            sourceSelect: d,
                            sourceButton: c,
                            name: d[0].name,
                            preventNameReuse: !0,
                            lightboxOptions: h.capabilities.mobile || h.capabilities.tablet ? {
                                showDuration: h.capabilities.ios ? null : 0,
                                hideDuration: 0
                            } : null
                        }, typeSpecificFunctions: h.extend({}, l, e, {
                            skin: function (a) {
                                var b = e.subskin ? e.subskin(f) : g(f);
                                a.attrs("inlineContent", b);
                                return e.skin(a)
                            }
                        }), actionCheck: !1
                    })
                }
            })
        });
        n.when("A", "a-dropdown-base-factory").register("a-dropdown-keyboard-handlers", function (h, m) {
            function l(a) {
                a.removeData("a-user-navigated-text").removeData("a-user-navigated-idx")
            }

            function k(a, b) {
                a.removeAttr("aria-selected");
                "option" === b.attr("role") && b.attr("aria-selected", "true");
                b.focus()
            }

            function g(a) {
                var b = a.parent("ul");
                a = b.find("li");
                var c = b.find(":focus");
                1 > c.length && (c = b.find('[aria-checked="true"]'));
                b = c;
                return {index: 0 < b.length ? b.index() : 0, $options: a}
            }

            function f(a, b, c) {
                a.preventDefault();
                b.find("a").eq(0).trigger("click");
                l(c)
            }

            function d(a) {
                var b = a.data("a-user-navigated-debouncer");
                b || (b = h.debounce(function () {
                    l(a)
                }, 1E3), a.data("a-user-navigated-debouncer", b));
                b()
            }

            var c = h.$, b = h.constants.keycodes;
            return {
                keyDown: function (a) {
                    var e = c(this), d = e.parent();
                    switch (a.which) {
                        case b.UP_ARROW:
                            a.preventDefault();
                            l(d);
                            0 < g(e).index && k(e, e.prev());
                            break;
                        case b.DOWN_ARROW:
                            a.preventDefault();
                            l(d);
                            d = g(e);
                            a = d.index;
                            0 <= a && a + 1 < d.$options.length && k(e, e.next());
                            break;
                        case b.ENTER:
                            f(a, e, d);
                            break;
                        case b.ESCAPE:
                            a.preventDefault();
                            e = m.get(e.closest(".a-popover"));
                            e.sourceButton.find(".a-button-text").focus();
                            e.hide();
                            l(d);
                            break;
                        case b.SPACE:
                            d.data("a-user-navigated-text") || f(a, e, d);
                            break;
                        case b.TAB:
                            l(d);
                            break;
                        case b.BACKSPACE:
                            a.preventDefault()
                    }
                }, keyPress: function (a) {
                    var e = c(this), q = e.parent(), g = m.get(e.closest(".a-popover")), k = a.which;
                    if (g && g.isActive() && k !== b.TAB && 0 !== k) {
                        d(q);
                        var l = q.data("a-user-navigated-idx") || 0;
                        if (!(0 > l)) {
                            g = (q.data("a-user-navigated-text") || "") + String.fromCharCode(k).toLocaleLowerCase();
                            q.data("a-user-navigated-text", g);
                            for (var u = q.children(); l < u.length; l++) {
                                var w = u.eq(l);
                                if (0 === h.trim(w.text().toLocaleLowerCase()).indexOf(g)) {
                                    w.focus();
                                    q.data("a-user-navigated-idx",
                                        l);
                                    return
                                }
                            }
                            q.data("a-user-navigated-idx", -1);
                            k === b.SPACE && f(a, e, q)
                        }
                    }
                }
            }
        });
        n.when("A", "a-dropdown-select-apis", "a-dropdown-base-factory", "a-popover-base").register("a-dropdown-base", function (h, m, l, k) {
            function g(a, e, q) {
                try {
                    a.$event.preventDefault()
                } catch (f) {
                }
                h.delay(function () {
                    var f = e.$button ? e.$button : e.getButtonFromEvent(a), g = e.$select ? e.$select : e.getSelectFromEvent(a);
                    if (!f.hasClass("a-button-disabled")) {
                        c(g, e).isSynced() || d(b.extend({$button: f, $select: g}, e));
                        var t = a.$declarativeParent,
                            g = h.extend({}, e, {$button: f, $sourceSelect: g}), k = l.create(t, g, q);
                        if (k && (k.show(), f.data("a-popover-id", k.id).data("popover", k).data("isPressed", !0), !k.hasOnLoad)) {
                            k.hasOnLoad = !0;
                            var m = [], f = k.$popover.find("img");
                            f.length && (f.each(function (a, e) {
                                if (!e.complete || !e.naturalWidth) {
                                    var c = b.Deferred();
                                    m.push(c);
                                    b(e).bind("load error", function () {
                                        c.resolve()
                                    })
                                }
                            }), m.length ? b.when.apply(b, m).done(function () {
                                k.updatePosition()
                            }) : k.updatePosition())
                        }
                    }
                })
            }

            function f(a) {
                var b = a.$button;
                a = a.$select;
                b || (b = a.nextAll(".a-button-dropdown"));
                return a.length ? ((b = l.get(b)) && b.hide(), !0) : !1
            }

            function d(a) {
                var b = a.$button;
                a = a.$select;
                b || (b = a.nextAll(".a-button-dropdown"));
                return a.length ? ((b = l.get(b)) && l.remove(b.id), a.data("a-info", null), !0) : !1
            }

            function c(a, e) {
                var c, g;
                c = e.$select ? e.$select : "string" === typeof a ? b("select#" + a) : a.jquery ? a : b(a);
                if (!c.length)return null;
                g = e.$button ? e.$button : e.getButtonFromSelect(c);
                c.data("a-select") ? g = c.data("a-select") : (g = h.extend({
                    hidePopover: f,
                    refreshPopover: d,
                    options: h.extend({$select: c, $button: g}, e)
                }, m),
                    c.data("a-select", g));
                return g
            }

            var b = h.$;
            return {
                toggleDropdown: function (a, b) {
                    var c = (b.$button ? b.$button : b.getButtonFromEvent(a)).data("popover");
                    c && c.$popover.is(":visible") ? c.hide() : g(a, b)
                }, showDropdown: g, getSelect: c
            }
        });
        n.when("A", "jQuery").register("a-dropdown-options-apis", function (h, m) {
            return {
                update: function (h) {
                    "object" !== typeof h && n.error("input of options.update() function must be a hash");
                    this.hidePopover(this.options);
                    for (var k = 0, g = this.size(); k < g; k++) {
                        var f = this.options.elements[k],
                            d = f[0];
                        h.value && f.val(h.value);
                        void 0 !== h.selected && (!d.selected && h.selected ? this.options.$select.val(d.value) : d.selected && !h.selected && this.options.$select.val(""));
                        h.html_content && f.data("a-html-content", h.html_content);
                        h.image_source && f.data("a-image-source", h.image_source);
                        h.native_css_class && (d.className = h.native_css_class);
                        h.css_class && f.data("a-css-class", h.css_class);
                        h.native_id && (d.id = h.native_id);
                        h.id && f.data("a-id", h.id);
                        h.text && (f.text(h.text), d.selected && this.setSelectValue(d.value))
                    }
                    this.refreshPopover(this.options);
                    return this
                }, remove: function () {
                    this.hidePopover(this.options);
                    for (var h = 0, k = this.size(); h < k; h++) {
                        var g = this.options.elements[h];
                        g.is(":selected") && this.setSelectValue("");
                        g.remove()
                    }
                    this.refreshPopover(this.options);
                    return !0
                }, info: function () {
                    for (var h = [], k = 0, g = this.size(); k < g; k++) {
                        var f = this.options.elements[k];
                        h.push({
                            value: f[0].value,
                            text: f.text(),
                            selected: f[0].selected,
                            html_content: f.data("a-html-content"),
                            image_source: f.data("a-image-source"),
                            native_css_class: f[0].className,
                            css_class: f.data("a-css-class"),
                            native_id: f[0].id,
                            id: f.data("a-id")
                        })
                    }
                    return h
                }, size: function () {
                    return this.options.elements.length
                }
            }
        });
        n.when("A", "jQuery", "a-dropdown-options-apis").register("a-dropdown-select-apis", function (h, m, l) {
            function k(d) {
                var c = this.options.$select, b = this.options.$button, a = c[0];
                "number" === typeof d && (d = d.toString());
                for (var e = 0, q = a.options.length; e < q && a.options[e].value !== d; e++);
                e === q && "" === d && (e = 0);
                e < q && (b.find(".a-dropdown-prompt").html(a.options[e].innerHTML), b.css("min-width", e / a.options.length +
                    "%"), c.val() !== d && (c.val(d), c.trigger("change", [f, !0])));
                return this
            }

            function g(d) {
                if (d === f)return this.options.$select.val();
                this.setValue = k;
                return this.setValue(d)
            }

            var f;
            return {
                isSynced: function () {
                    var d = this.options.$select, c = d.data("a-info"), b = this.getOptions().info();
                    d.data("a-info", b);
                    return c ? h.equals(c, b) : !0
                }, update: function (d) {
                    "object" !== typeof d && n.error("input of select.update() function must be an object");
                    this.hidePopover(this.options);
                    var c = {
                        none: !0, micro: !0, mini: !0, small: !0, base: !0,
                        medium: !0, large: !0, "extra-large": !0, "double-large": !0, block: !0
                    }, b = this.options.$select, a = b[0], e = this.options.$button, q = e[0], g = b.siblings("label");
                    d.name && (a.name = d.name);
                    if (d.option_prompt) {
                        var h = b.find(".a-prompt");
                        h.length ? (h.text(d.option_prompt), h.prop("selected") && e.find(".a-dropdown-prompt").text(d.option_prompt)) : (b.prepend(m("<option class='a-prompt' />").text(d.option_prompt)), e.find(".a-dropdown-prompt").text(d.option_prompt))
                    }
                    d.has_images !== f && b.data("a-has-images", !!d.has_images);
                    d.button_size !==
                    f && e.length && ("small" === d.button_size ? e.addClass("a-button-small") : e.removeClass("a-button-small"));
                    d.spacing !== f && c.hasOwnProperty(d.spacing) && (c = /\ba-spacing-[a-z]+\b/g, a.className = a.className.replace(c, ""), q.className = q.className.replace(c, ""), b.addClass("a-spacing-" + d.spacing), e.addClass("a-spacing-" + d.spacing));
                    d.grid_units !== f && (c = /\ba-button-span\d{1,2}\b/g, a.className = a.className.replace(c, ""), q.className = q.className.replace(c, ""), isFinite(d.grid_units) && 0 < d.grid_units && 13 > d.grid_units && (b.addClass("a-button-span" +
                        d.grid_units), e.addClass("a-button-span" + d.grid_units)));
                    d.width_name && ("base" === d.width_named ? e.addClass("a-button-width-normal") : e.removeClass("a-button-width-normal"));
                    d.status && ("disabled" === d.status ? (a.disabled = !0, e.addClass("a-button-disabled").attr("aria-disabled", "true")) : (a.disabled = !1, e.removeClass("a-button-disabled").removeAttr("aria-disabled")));
                    d.native_id && (a.id = d.native_id, g.length && (g[0].htmlFor = d.native_id));
                    d.id && (q.id = d.id);
                    d.native_css_class && ((q = b.data("a-native-class")) && b.removeClass(q),
                        b.addClass(d.native_css_class).data("a-native-class", d.native_css_class));
                    d.css_class && ((q = e.data("a-class")) && e.removeClass(q), e.addClass(d.css_class).data("a-class", d.css_class));
                    d.label_text !== f && ("" === d.label_text ? (e.find(".a-dropdown-label").remove(), b.siblings("label").remove()) : (q = e.find(".a-dropdown-label"), q.length ? q.text(d.label_text) : e.find(".a-dropdown-prompt").before(m("<span class='a-dropdown-label' />").text(d.label_text)), g.length ? g.text(d.label_text) : b.before(m("<label for='" + a.id +
                        "' class='a-native-dropdown' />").text(d.label_text))), e.css("min-width", "" === d.label_text ? "0.1%" : "0%"));
                    this.refreshPopover(this.options);
                    return this
                }, setValue: k, val: g, getOptions: function (d) {
                    var c = [], b = this.options.$select, a = [], c = d === f ? b.children("optgroup, option:not(.a-prompt)") : m.isArray(d) ? d : [d];
                    d = 0;
                    for (var e = c.length; d < e; d++) {
                        var q = c[d], t = [];
                        h.isFiniteNumber(q) ? t = b.children("optgroup, option:not(.a-prompt)").eq(q) : "string" === typeof q ? t = b.children("option#" + q) : "object" === typeof q && (t = q.jquery ?
                            q : m(q));
                        t.length && a.push(t)
                    }
                    return h.extend({
                        hidePopover: this.hidePopover,
                        refreshPopover: this.refreshPopover,
                        setSelectValue: g,
                        options: h.extend({elements: a}, this.options)
                    }, l)
                }, getOption: function (d) {
                    return this.getOptions(d)
                }, addOptions: function (d, c) {
                    m.isArray(d) || (d = [d]);
                    for (var b = d.length; b--;)this.addOption(d[b], c);
                    return this
                }, addOption: function (d, c) {
                    var b = this.options.$select;
                    if (!d.native_id || !b.find("option#" + d.native_id).length) {
                        var a = b.children("optgroup, option:not(.a-prompt)"), e = document.createElement("option"),
                            q = c && 0 < c && c <= a.length ? c : 0;
                        d.native_id && (e.id = d.native_id);
                        0 === a.length || q === a.length ? b[0].appendChild(e) : a.eq(q).before(e);
                        this.getOption(e).update(d)
                    }
                    return this
                }, removeOptions: function (d) {
                    this.getOptions(d).remove();
                    return this
                }, removeOption: function (d) {
                    return this.removeOptions(d)
                }, appendOption: function (d) {
                    return this.addOption(d, this.options.$select.children("optgroup, option:not(.a-prompt)").length)
                }, appendOptions: function (d) {
                    if (m.isArray(d))for (var c = 0, b = d.length; c < b; c++)this.addOption(d[c]);
                    return this
                }
            }
        });
        n.when("A", "a-dropdown-options", "a-dropdown-apis", "a-dropdown-keyboard-handlers").register("a-dropdown", function (h, m, l, k) {
            var g = h.$;
            k = g(document);
            k.delegate(".a-native-dropdown", "change", function (f, d, c) {
                var b = m.getButtonFromEvent(f), a = "", e = -1 < this.selectedIndex ? this.options[this.selectedIndex].value : "", q = b.data("popover");
                f = !1;
                var t;
                if (b.length) {
                    for (var b = b.eq(0), k = this.length; k--;)if (t = this.options[k], t.value === e) {
                        a = t.innerHTML;
                        break
                    }
                    q && q.$popover && (q.$popover.find(".a-active").removeClass("a-active").closest("li").attr("aria-checked",
                        !1), void 0 === d && (d = q.$popover.find('a[data-value="' + ('{"stringVal":"' + e + '"}') + '"]')));
                    d && d.length && (f = !0, d.addClass("a-active").closest("li").attr("aria-checked", !0));
                    b.find(".a-dropdown-prompt").html(a);
                    b.css("min-width", this.selectedIndex / this.options.length + "%");
                    q && (q.hide(), (b = l.getSelect(this)) && g(this).data("a-info", b.getOptions().info()));
                    c || (c = this.name, b = this.id, d = {
                        auiItemNode: f ? d[0] : null,
                        nativeItemNode: this.options[this.selectedIndex],
                        selectNode: this,
                        id: b,
                        name: c,
                        value: this.value
                    }, c && "" !==
                    c && (h.trigger("a:dropdown:" + c + ":select", d), h.trigger("a:dropdown:selected:" + c, d)), b && "" !== b && h.trigger("a:dropdown:" + b + ":select", d), h.trigger("a:dropdown:select", d))
                }
            });
            k.delegate(".a-button-dropdown:not(.a-button-disabled)", "focusin", function () {
                g(this).find(".a-button-text").focus()
            });
            return l
        });
        n.when("A", "a-dropdown-base", "a-dropdown-options").register("a-dropdown-apis", function (h, m, l) {
            function k(f) {
                return m.getSelect(f, l)
            }

            var g = h.$;
            h.on("beforeReady", function () {
                g(".a-dropdown-container select").each(function () {
                    var f =
                        k(this);
                    f && f.val(f.val())
                })
            });
            return {
                getSelect: k, updateOption: function (f, d) {
                    var c = g("option#" + f).closest("select");
                    k(c).getOption(f).update(d)
                }, updateSelect: function (f, d) {
                    k(f).update(d)
                }, setValue: function (f, d) {
                    k(f).setValue(d)
                }
            }
        });
        n.when("A", "a-popover-accessibility").register("a-dropdown-view", function (h, m) {
            return {
                skin: function (h) {
                    var k = h.attrs("header") || "";
                    h = {id: h.id, header_str: k, needs_declarative: !0};
                    return ['<div class="a-popover a-dropdown a-dropdown-common">', m.getStartAnchorHtml(h),
                        '<div class="a-popover-wrapper"><div class="a-popover-inner"></div></div>', m.getEndAnchorHtml(h), "</div>"].join("")
                }
            }
        });
        n.when("A", "a-dropdown-base", "a-dropdown-view", "a-dropdown-options", "a-dropdown-apis", "a-dropdown-base-factory", "a-dropdown-keyboard-handlers").register("a-dropdown-handlers", function (h, m, l, k, g, f, d) {
            var c = h.$;
            g = c(document);
            h.declarative("a-dropdown-button", "click", function (b) {
                var a = k.getButtonFromEvent(b);
                m.showDropdown(b, h.extend({$button: a}, k), l)
            });
            h.declarative("a-dropdown-button",
                "keydown", function (b) {
                    var a = k.getButtonFromEvent(b), e = h.constants.keycodes, c = b.$event.which;
                    c !== e.DOWN_ARROW && c !== e.ENTER && c !== e.SPACE || m.showDropdown(b, h.extend({$button: a}, k), l)
                });
            g.delegate(".a-popover.a-dropdown a", "click", function (b) {
                b.preventDefault();
                b = c(this);
                var a = f.get(b.closest(".a-popover"));
                if (b.hasClass("a-active"))a.hide(); else {
                    var e = b.data("value").stringVal;
                    a.sourceSelect.val(e).trigger("change", [b])
                }
            });
            d && (d.keyDown && g.delegate(".a-dropdown li", "keydown", d.keyDown), d.keyPress && g.delegate(".a-dropdown li",
                "keypress", d.keyPress))
        });
        n.when("A").register("a-dropdown-options", function (h) {
            function m(h) {
                return h.popover ? h.popover.$trigger.closest(".a-button-dropdown") : h.$target ? h.$target.closest(".a-button-dropdown") : l(h.target).nextAll(".a-button-dropdown")
            }

            var l = h.$;
            return {
                getButtonFromEvent: m, getButtonFromSelect: function (h) {
                    return h.nextAll(".a-button-dropdown")
                }, getSelectFromEvent: function (h) {
                    h = m(h).prevAll("select").eq(0);
                    h.length || n.error("Cannot locate the <select> of dropdown");
                    return h
                },
                triggerSelector: ".a-button-dropdown"
            }
        });
        n.when("A", "a-popover-accessibility").register("a-dropdown-split-view", function (h, m) {
            return {
                skin: function (h) {
                    var k = h.attrs("header") || "";
                    h = {id: h.id, label_str: k, needs_declarative: !0};
                    return ['<div class="a-popover a-splitdropdown a-dropdown-common">', m.getStartAnchorHtml(h), '<div class="a-popover-wrapper">\n<div class="a-popover-inner"></div>\n</div>', m.getEndAnchorHtml(h), "</div>"].join("\n")
                }
            }
        });
        n.when("A", "a-dropdown-base", "a-dropdown-split-utils",
            "a-dropdown-split-view", "a-dropdown-split-options", "a-dropdown-base-factory", "a-dropdown-keyboard-handlers").register("a-dropdown-split-handlers", function (h, m, l, k, g, f, d) {
            var c = h.$;
            h.declarative("a-splitdropdown-button", "click", function (b) {
                var a = g.getButtonFromEvent(b);
                m.showDropdown(b, h.extend({$button: a}, g), k)
            });
            h.declarative("a-splitdropdown-main", "click", function (b) {
                var a = b.$target.closest(".a-splitdropdown-container").find("select"), e = a.attr("id"), c = a.val();
                l.triggerEvent(e, a, c);
                b.$event.preventDefault()
            });
            h.declarative("a-splitdropdown-button", "keydown", function (b) {
                var a = g.getButtonFromEvent(b), e = h.constants.keycodes, d = b.$event.which;
                d !== e.DOWN_ARROW && d !== e.ENTER && d !== e.SPACE || m.showDropdown(b, c.extend({$button: a}, g), k)
            });
            c(document).delegate(".a-popover.a-splitdropdown a", "click", function (b) {
                var a = c(this), e = a.data("value").stringVal, a = f.get(a.closest(".a-popover")), d = a.sourceSelect, g = d.attr("id");
                a.hide();
                l.triggerEvent(g, d, e);
                b.preventDefault()
            }).delegate(".a-splitdropdown li", "keydown", d.keyDown).delegate(".a-splitdropdown li",
                "keypress", d.keyPress)
        });
        n.when("A").register("a-dropdown-split-options", function (h) {
            function m(h) {
                return h.popover ? h.popover.$trigger.closest(".a-button-splitdropdown") : h.$target ? h.$target.closest(".a-button-splitdropdown") : l(h.target).nextAll(".a-button-splitdropdown")
            }

            var l = h.$;
            return {
                getButtonFromEvent: m, getButtonFromSelect: function (h) {
                    return h.next(".a-button-group-splitdropdown").find(".a-button-splitdropdown")
                }, getSelectFromEvent: function (h) {
                    h = m(h).closest(".a-splitdropdown-container").find("select");
                    h.length || n.error("cannot locate the <select> of the split dropdown");
                    return h
                }
            }
        });
        n.when("A").register("a-dropdown-split-utils", function (h) {
            return {
                triggerEvent: function (m, l, k) {
                    l = {$select: l, value: k, id: m};
                    h.trigger("a:splitdropdown:" + m + ":select", l);
                    h.trigger("a:splitdropdown:select", l)
                }
            }
        });
        n.when("A", "a-dropdown-base", "a-dropdown-split-options", "a-dropdown-split-utils", "a-dropdown-split-handlers").register("a-splitdropdown", function (h, m, l, k, g) {
            var f = h.$;
            f(document).delegate(".a-native-splitdropdown",
                "change", function (d, c, b) {
                    d = f(this);
                    c = d.val();
                    var a = d.attr("id");
                    b || k.triggerEvent(a, d, c)
                }).delegate(".a-button-splitdropdown:not(.a-button-disabled)", "focusin", function () {
                f(this).find(".a-button-text").focus()
            });
            return {
                getSelect: function (d) {
                    return m.getSelect(d, l)
                }
            }
        });
        n.when("A", "a-popover-accessibility-templates").register("a-popover-accessibility", function (h, m) {
            var l = m.startAnchorTemplate, k = m.startAnchorDeclarativeTemplate, g = m.endAnchorTemplate, f = m.descriptionTemplate, d = function (a,
                                                                                                                                                   b) {
                var c = {"{{DESCRIPTION}}": b, "{{DESCRIPTION_ID}}": a};
                return f.replace(/\{\{[\w_]*\}\}/g, function (a) {
                    return c[a]
                })
            }, c = function (a, e) {
                var c = e.id, f = e.label_str, g = e.aria_description, m = "";
                if (!c)return "";
                var u = {
                    "{{ANCHOR_NAME}}": "a-popover-" + a,
                    "{{ARIA_LABEL}}": b(e),
                    "{{LABEL_STR}}": f,
                    "{{ARIA_DESCRIBEDBY}}": ""
                }, f = e.needs_declarative ? k : l;
                "start" === a && g && !h.capabilities.ios && (c = "a-popover-aria-description-" + c, u["{{ARIA_DESCRIBEDBY}}"] = 'aria-describedby="' + c + '"', m = d(c, g));
                f = f.replace(/\{\{[\w_]*\}\}/g, function (a) {
                        return u[a]
                    }) +
                    m;
                return f.replace(/\s\s>|\s>/g, ">")
            }, b = function (a) {
                var b = a.id, c = a.header_str;
                return (a = a.label_str) ? 'aria-label="' + a + '"' : c ? 'aria-labelledby="a-popover-header-' + b + '"' : ""
            };
            return {
                getStartAnchorHtml: function () {
                    [].splice.call(arguments, 0, 0, "start");
                    return c.apply(null, arguments)
                }, getEndAnchorHtml: function () {
                    return g
                }
            }
        });
        n.declare("a-popover-accessibility-templates", {
            startAnchorTemplate: '<span tabindex=0 role="dialog" class="{{ANCHOR_NAME}} aok-offscreen" {{ARIA_LABEL}} {{ARIA_DESCRIBEDBY}}></span>',
            startAnchorDeclarativeTemplate: '<span tabindex=0 role="dialog" data-action="a-popover-a11y" class="{{ANCHOR_NAME}} aok-offscreen a-declarative" {{ARIA_LABEL}} {{ARIA_DESCRIBEDBY}}>{{LABEL_STR}}</span>',
            endAnchorTemplate: '<span tabindex=0 class="a-popover-end aok-offscreen"></span>',
            descriptionTemplate: '<span id="{{DESCRIPTION_ID}}" class="aok-offscreen">{{DESCRIPTION}}</span>'
        });
        n.when("A", "a-popover-util").register("a-popover-ajax", function (h, m) {
            return {
                update: function (h, k, g) {
                    var f = {};
                    f.url = k;
                    g.timeout && (f.timeout = g.timeout);
                    g.ajaxFailMsg && (f.ajaxFailMsg = g.ajaxFailMsg);
                    g.cache && (f.cache = g.cache);
                    h.update(f)
                }, showSpinner: function (h) {
                    return m.showSpinner(h)
                }
            }
        });
        n.when("A", "a-popover-util", "a-popover-inline-strategy", "a-popover-preload-strategy", "a-popover-ajax-strategy").register("a-popover-data", function (h, m, l, k, g) {
            var f = [g, k, l];
            return {
                guessStrategyByAttrs: function (d) {
                    for (var c = 0, b = f.length; c < b; c++) {
                        var a = f[c];
                        if (a.isValidStrategy(d))return a
                    }
                }, getStrategyByName: function (d) {
                    for (var c =
                        0, b = f.length; c < b; c++) {
                        var a = f[c];
                        if (a.name === d)return a
                    }
                    return null
                }, showSpinner: m.showSpinner
            }
        });
        n.when("jQuery").register("a-popover-iframes", function (h) {
            return {
                get: function () {
                    return h()
                }, release: function () {
                }
            }
        });
        n.when("A", "a-popover-lightbox-markup", "a-timing-analytics", "ready").register("a-popover-lightbox", function (h, m, l) {
            function k(a) {
                a.preventDefault();
                a.stopPropagation();
                a.stopImmediatePropagation();
                return !1
            }

            function g() {
                u.unbind("click", k);
                y = !1
            }

            var f = h.$, d = document.documentElement.className,
                c = -1 < d.indexOf("-ie"), b = -1 < d.indexOf("a-lt-ie7"), a = h.capabilities.isIE10Plus && h.capabilities.mobile, e = 0 === (h.capabilities.androidVersion + "").indexOf("4."), q = h.capabilities.isUCBrowser, t = m.id, x = m.div, y = !1, u = f("body"), w = null, A = -1, z = -1, C = -1, E = null;
            f(document).delegate("#" + t, "click " + h.action.start + " " + h.action.move, function (a) {
                a.preventDefault()
            });
            h.declarative("a-popover-floating-close", h.capabilities.touch ? h.action.end : "click", function (a) {
                !y && a.$target.data("action") && -1 < a.$target.data("action").indexOf("a-popover-floating-close") &&
                E && E.isActive() && (E.unlock().hide(), a.$event.preventDefault())
            });
            if (h.capabilities.isiOS8)h.on("a:popover:afterUpdatePosition", function (a) {
                a = a.popover;
                var b = f("#" + t), e = b.length ? b.offset().top : -1, c = f(r), d, q;
                a.isActive() && a.attrs("lightboxOptions") && e && (d = 0, q = setInterval(function () {
                    c.scrollTop(e);
                    5 < ++d && clearInterval(q)
                }, 200))
            });
            l.stopWidgetLogging("dropdown");
            return {
                show: function (d) {
                    var l = f(r);
                    w || (f("body").append(x), w = f("#" + t));
                    d = d || {};
                    u.bind("click", k);
                    y = !0;
                    d.lockScroll && (-1 === z && (z = l.scrollTop(),
                        C = l.scrollLeft()), h.setCssImportant(f("body"), "margin-right", h.scrollBarWidth() + "px"), a || (c ? f("html, body").css("overflow", "hidden") : f("body").css("overflow", "hidden")));
                    var m = (E = d.popover || null) ? E.$popover.css("z-index") - 2 : -1;
                    0 < m && (w.css("z-index", m), e && l.width());
                    "number" !== typeof d.showDuration && (d.showDuration = 200);
                    b && (-1 < z && w.css("top", z + "px"), -1 < C && w.css("left", C + "px"));
                    q && E.$popover.css("overflow", "auto");
                    0 < d.showDuration ? h.fadeIn(w, d.showDuration) : w.css("display", "block");
                    h.delay(g, d.showDuration +
                        300)
                }, hide: function (a) {
                    var b = f(r);
                    -1 < A || !w || (a = a || {}, u.bind("click", k), y = !0, "number" !== typeof a.hideDuration && (a.hideDuration = 250), 0 < a.hideDuration ? h.fadeOut(w, a.duration, "linear", function () {
                        a.lockScroll && (f("html, body").css("overflow", ""), f("body").css("margin-right", ""), h.delay(function () {
                            0 < z && (b.scrollTop(z), z = -1);
                            0 < C && (b.scrollLeft(C), C = -1)
                        }, 100));
                        E = null
                    }) : (w.css("display", "none"), a.lockScroll && (f("html, body").css("overflow", ""), f("body").css("margin-right", ""), 0 < z && (b.scrollTop(z), z = -1)), E =
                        null), w.css({height: "", width: ""}), h.delay(g, a.hideDuration + 350))
                }, lock: function (a) {
                    a || (a = 10);
                    A < a && (A = a)
                }, unlock: function (a) {
                    a || (a = 10);
                    A <= a && (A = -1)
                }, LIGHTBOX_ID: t
            }
        });
        n.declare("a-popover-lightbox-markup", {
            id: "a-popover-lgtbox",
            div: '<div id="a-popover-lgtbox" class="a-declarative" data-action="a-popover-floating-close" />'
        });
        n.when("A", "ready").register("a-popover-navigate", function (h) {
            function m(b) {
                "string" === typeof b && (f = !0, r.location.hash = b);
                return r.location.hash || ""
            }

            var l = h.$, l = l(r),
                k = [], g = [], f = !1, d = {}, c = !1;
            g.push(m());
            l.bind("hashchange", function (b) {
                b.preventDefault();
                c ? c = !1 : g.push(m());
                32 <= g.length && g.shift();
                f ? f = !1 : h.trigger("a:popover:navigate", d[g[g.length - 1]])
            });
            h.on("a:popover:navigate", function (b) {
                b ? b.show({preventNavigate: !0}) : (b = 0 <= k.length - 1 ? k[k.length - 1] : null) && b.unlock().hide({preventNavigate: !0})
            });
            h.on("a:popover:showNavigable a:popover:showNavigableLegacy", function (b) {
                k.push(b.popover)
            });
            h.on("a:popover:hideNavigable a:popover:hideNavigableLegacy", function (b) {
                k.pop()
            });
            return {
                forward: function (b) {
                    var a = b.name + "_" + h.now();
                    d["#" + a] = b;
                    m(a)
                }, back: function () {
                    0 < g.length && g.pop();
                    c = !0;
                    r.history.back()
                }
            }
        });
        n.when("A").register("a-popover-position", function (h) {
            function m(b, a) {
                var e = h.viewport(), q;
                1 === h.viewport().zoom ? q = {
                    top: 0,
                    left: 0
                } : (d || (d = f('<span id="a-popover-offset-tracker"></span>'), f("body").prepend(d)), q = d.offset());
                var g = a.offset(), k = b.offset();
                if (c) {
                    var l = r.pageYOffset - document.documentElement.scrollTop;
                    g.top -= l;
                    k.top -= l
                }
                g.top -= q.top;
                g.left -= q.left;
                k.top -= q.top;
                k.left -= q.left;
                var l = a.outerWidth(), m = a.outerHeight(), w = b.outerWidth(!0), A = b.outerHeight(!0), z = b.find(".a-popover-header"), z = z.length ? z.outerHeight(!0) : 0;
                return {
                    windowWidth: e.width,
                    windowHeight: e.height,
                    windowTop: e.scrollTop,
                    windowLeft: e.scrollLeft,
                    windowRight: e.scrollLeft + e.width,
                    windowBottom: e.scrollTop + e.height,
                    zoomTop: q.top,
                    zoomLeft: q.left,
                    triggerWidth: l + 1,
                    triggerHeight: m,
                    triggerTop: g.top - 1,
                    triggerLeft: g.left - 1,
                    triggerRight: g.left + l + 1,
                    triggerBottom: g.top + m + 1,
                    triggerVerticalCenter: g.top +
                    m / 2,
                    triggerHorizontalCenter: g.left + l / 2,
                    popoverWidth: w,
                    popoverHeight: A,
                    popoverTop: k.top,
                    popoverLeft: k.left,
                    popoverRight: k.left + w,
                    popoverBottom: k.top + A,
                    popoverVerticalCenter: k.top + A / 2,
                    popoverHorizontalCenter: k.left + w / 2,
                    headerHeight: z
                }
            }

            function l(b) {
                return b.removeClass("a-arrow-top a-arrow-bottom a-arrow-left a-arrow-right")
            }

            function k(b) {
                var a = {deltaTop: 0}, e = 0;
                a.top = b.triggerVerticalCenter - b.popoverHeight / 2;
                a.top < b.windowTop + 20 ? (e = Math.min(b.windowTop + 20, b.triggerTop - 20), a.deltaTop = a.top - e, a.top = e) :
                a.top + b.popoverHeight > b.windowBottom - 20 && (e = Math.min(20, b.windowBottom - b.triggerBottom + 20), a.deltaTop = a.top + b.popoverHeight - (b.windowBottom - e), a.top = b.windowBottom - e - b.popoverHeight);
                return a
            }

            function g(b) {
                var a = {deltaLeft: 0}, e = 0;
                a.left = b.triggerHorizontalCenter - b.popoverWidth / 2;
                20 > a.left ? (e = Math.min(20, b.triggerLeft - 20), a.deltaLeft = a.left - e, a.left = e) : a.left + b.popoverWidth > b.windowRight - 20 && (e = Math.min(20, b.windowRight - b.triggerRight + 20), a.deltaLeft = a.left + b.popoverWidth - (b.windowRight - e), a.left =
                    b.windowRight - e - b.popoverWidth);
                return a
            }

            var f = h.$;
            f(r);
            var d = null, c = h.capabilities.mobile && h.capabilities.isIE10Plus;
            return {
                windowCenter: function (b) {
                    b = m(b.$popover, b.$trigger);
                    var a = {};
                    a.top = (b.windowHeight - b.popoverHeight) / 2;
                    a.left = (b.windowWidth - b.popoverWidth) / 2;
                    0 > a.top && (a.top = 0);
                    return a
                }, windowTop: function (b) {
                    b = m(b.$popover, b.$trigger);
                    var a = {top: 0};
                    a.left = b.windowWidth / 2 - b.popoverWidth / 2;
                    return a
                }, windowFullWidth: function (b) {
                    return {top: 0, left: 0}
                }, triggerRight: function (b, a) {
                    var e = b.$popover,
                        c = b.$trigger;
                    a || (a = m(e, c));
                    c = k(a);
                    c.left = a.triggerRight;
                    b.attrs("popoverArrow") && (l(e).addClass("a-arrow-right"), e.find(".a-arrow-border").css("top", a.popoverHeight / 2 + c.deltaTop));
                    return c
                }, triggerLeft: function (b, a) {
                    var e = b.$popover, c = b.$trigger;
                    a || (a = m(e, c));
                    c = k(a);
                    c.left = a.triggerLeft - a.popoverWidth;
                    c.left = 0 < c.left ? c.left : 0;
                    b.attrs("popoverArrow") && (l(e).addClass("a-arrow-left"), e.find(".a-arrow-border").css("top", a.popoverHeight / 2 + c.deltaTop));
                    return c
                }, triggerTop: function (b, a) {
                    var e = b.$popover,
                        c = b.$trigger;
                    a || (a = m(e, c));
                    c = g(a);
                    c.top = a.triggerTop - a.popoverHeight;
                    b.attrs("popoverArrow") && (l(e).addClass("a-arrow-top"), e.find(".a-arrow-border").css("left", a.popoverWidth / 2 + c.deltaLeft));
                    return c
                }, triggerBottom: function (b, a) {
                    var e = b.$popover, c = b.$trigger;
                    a || (a = m(e, c));
                    c = g(a);
                    c.top = a.triggerBottom;
                    b.attrs("popoverArrow") && (l(e).addClass("a-arrow-bottom"), e.find(".a-arrow-border").css("left", a.popoverWidth / 2 + c.deltaLeft));
                    return c
                }, triggerHorizontal: function (b, a) {
                    var e = b.$popover, c = b.$trigger;
                    a || (a = m(e, c));
                    return a.triggerLeft - a.windowLeft > a.windowRight - a.triggerRight ? this.triggerLeft(b, a) : this.triggerRight(b, a)
                }, triggerVertical: function (b, a) {
                    var e = b.$popover, c = b.$trigger, e = a ? a : m(e, c);
                    return e.triggerTop - e.windowTop > e.popoverHeight + 20 ? this.triggerTop(b, e) : this.triggerBottom(b, e)
                }, triggerVerticalAlignLeft: function (b, a) {
                    var e = b.$popover, c = b.$trigger;
                    a || (a = m(e, c));
                    var c = {}, d = 0, f = 0, g = a.windowBottom - a.triggerBottom;
                    c.left = a.triggerLeft;
                    c.top = g > a.popoverHeight ? a.triggerBottom + 3 : a.triggerTop -
                    a.popoverHeight - 3;
                    20 > c.left ? (f = Math.min(20, a.triggerLeft - 20), d = c.left - f, c.left = f) : c.left + a.popoverWidth > a.windowRight - 20 && (f = Math.min(20, a.windowRight - a.triggerRight + 20), d = c.left + a.popoverWidth - (a.windowRight - f), c.left = a.windowRight - f - a.popoverWidth);
                    b.attrs("popoverArrow") && (l(e).addClass(g > a.popoverHeight ? "a-arrow-bottom" : "a-arrow-top"), e.find(".a-arrow-border").css("left", a.triggerWidth / 2 + d));
                    return c
                }, customPosition: function (b, a) {
                    return a.call(this, {
                        popover: b, $popover: b.$popover, $trigger: b.$trigger,
                        measure: m
                    })
                }
            }
        });
        n.when("A").register("a-popover-util", function (h) {
            function m(g, f) {
                for (var d = g.children.length; d--;) {
                    var c = m(g.children[d], f);
                    if (c)return c
                }
                if (f(g))return g
            }

            var l = h.$, k = /^-?\d+(?:\.\d+)?$/;
            return {
                trigger: function (g, f) {
                    h.trigger("a:popover:" + g, {popover: f});
                    f.name && h.trigger("a:popover:" + g + ":" + f.name, {popover: f})
                }, extractDeclarativeParams: function (g, f) {
                    var d = l(g), d = d.hasClass("a-declarative") ? d : d.find(".a-declarative").eq(0), c = "a-" + f, b = d.data("action");
                    return b && h.contains(b,
                        c) ? {attributes: d.data(c) || null, $trigger: d} : null
                }, eventOccursWithin: function (g, f) {
                    var d = l(g.target);
                    return 0 < d.closest(f.$trigger).length || 0 < d.closest(f.$popover).length
                }, search: m, getCSSHash: function (g) {
                    var f = {};
                    h.each("height width max-height max-width min-height min-width".split(" "), function (d) {
                        if (g[d]) {
                            var c = g[d];
                            if (h.isFiniteNumber(c) || k.test(c))c += "px";
                            f[d] = c
                        }
                    });
                    f.height && !f["max-height"] && (f["max-height"] = "none");
                    f.width && !f["max-width"] && (f["max-width"] = "none");
                    return f
                }, clearContent: function (g) {
                    (g =
                        g.getContent()) && g.empty()
                }, showSpinner: function (g) {
                    g.updateContent('<div class="a-popover-loading-wrapper a-text-center"><div class="a-box a-color-base-background a-popover-loading"></div></div>');
                    g.updatePosition();
                    return g
                }, getBool: function (g, f) {
                    return void 0 !== g ? !0 === g || "true" === g : !0 === f
                }
            }
        });
        n.when("A", "a-popover-util").register("a-modal-view-base", function (h, m) {
            var l = h.$, k;
            n.when("a-weblab").execute(function (b) {
                k = b
            });
            var g = function (b, a) {
                return function () {
                    return k && k.is("AUI_UX_56217",
                        "T1", 1) ? b : a
                }
            }, f = l("html").hasClass("a-lt-ie9"), d = g(250, 500), c = g(100, 250);
            return {
                setAriaBusy: function (b) {
                    this.$popover.find(".a-popover-wrapper").attr("aria-busy", b)
                }, updateContent: function (b) {
                    "string" === typeof b ? this.$popover.find(".a-popover-inner").html(b) : b && this.$popover.find(".a-popover-inner").html("").append(b)
                }, updateDimensions: function () {
                    var b = this.$popover, a = m.getCSSHash(this.attrs());
                    !this.draggable || a.width && "auto" !== a.width || (a.width = b.width() + "px");
                    b.css(a);
                    a.height ? b.addClass("a-popover-modal-fixed-height") :
                        b.removeClass("a-popover-modal-fixed-height");
                    this.isActive() && this.updatePosition();
                    return this
                }, getContent: function () {
                    return this.$popover ? this.$popover.find(".a-popover-inner") : null
                }, showMethod: function () {
                    var b = this, a = b.$popover;
                    f || "ajax" === b.attrs("currentDataStrategy") ? h.delay(function () {
                        a.css({visibility: "visible"}).removeClass("a-popover-hidden");
                        b.focus()
                    }, 0) : (a.css({
                        opacity: 0,
                        visibility: "visible"
                    }).removeClass("a-popover-hidden"), h.delay(function () {
                            h.animate(a, {opacity: 1}, d(), "linear");
                            b.focus()
                        },
                        0));
                    b.attrs("legacyNavigable") && m.trigger("showNavigableLegacy", b)
                }, hideMethod: function () {
                    f ? this.$popover.hide().css("visibility", "hidden").find(".a-lgtbox-vertical-scroll").removeClass("a-lgtbox-vertical-scroll") : h.fadeOut(this.$popover, c(), "linear");
                    this.attrs("legacyNavigable") && m.trigger("hideNavigableLegacy", this)
                }
            }
        });
        n.when("A", "a-modal-view-base", "a-modal-positions", "a-popover-accessibility").register("a-modal-view", function (h, m, l, k) {
            var g = h.$, g = g("html").hasClass("a-lt-ie9");
            return h.extend(m, h.capabilities.touch || h.capabilities.mobile || h.capabilities.tablet || g ? l.innerScroll : l.modalScroll, {
                skin: function (f) {
                    var d = f.attrs("id"), c = f.attrs("header") || "", b = f.attrs("hideHeader") || !1, a = f.attrs("footer"), e = f.attrs("modeless") || !1, q = f.attrs("closeButton"), g = f.attrs("closeButtonLabel") ? f.attrs("closeButtonLabel") : "", h = f.attrs("hideHeaderCloseButtonLayout") || "", l = f.attrs("popoverLabel") ? f.attrs("popoverLabel") : "", m = f.attrs("padding");
                    f = f.attrs("ariaDescription");
                    l = {
                        id: d, header_str: c,
                        label_str: l, aria_description: f
                    };
                    q = q ? ['<button data-action="a-popover-close" class="a-button-close a-declarative', b ? "top" === h ? " a-modal-close-nohead-top" : " a-button-top-right" : "", '" aria-label="', g, '"><i class="a-icon a-icon-close"></i></button>'].join("") : "";
                    c = b ? "" : ['<div class="a-popover-header">', q, '<h4 class="a-popover-header-content' + (e ? " a-popover-draggable-handle" : "") + '" id="a-popover-header-', d, '">', c, "</h4></div>"].join("");
                    a = a ? ['<div class="a-popover-footer">', a, "</div>"].join("") : "";
                    m = "none" ===
                    m ? " a-padding-none" : "";
                    return [e ? "" : '<div class="a-modal-scroller a-declarative" data-action="a-popover-floating-close">', '<div class="a-popover a-popover-modal a-declarative' + (e ? " a-modal-modeless" : " ") + '" data-action="a-popover-a11y">', k.getStartAnchorHtml(l), '<div class="a-popover-wrapper">', c, b ? q : "", '<div class="a-popover-inner', m, '" id="a-popover-content-', d, '"></div>', a, "</div>", k.getEndAnchorHtml(l), "</div>", e ? "" : "</div>"].join("")
                }
            })
        });
        n.when("A", "a-popover-lightbox").register("a-modal-positions",
            function (h, m) {
                function l(c) {
                    var b = c.$popover.closest(".a-modal-scroller");
                    b.scrollTop(0).css("visibility", "visible");
                    b.bind("scroll", function () {
                        c.updateChildrenPosition()
                    })
                }

                function k() {
                    var c = h.viewport();
                    2 < c.width / c.height && h.delay(function () {
                        document.activeElement.scrollIntoView();
                        r.scrollTo(r.pageXOffset, 0)
                    }, 0)
                }

                var g = h.$, f = -1 < document.documentElement.className.indexOf("a-lt-ie7"), d = h.capabilities.isIE10Plus && h.capabilities.mobile;
                return {
                    innerScroll: {
                        positionStrategy: function (c) {
                            var b = c.popover,
                                a = c.$popover, e = c.$trigger, q = a.find(".a-popover-inner").css("height", "auto"), t = a.closest(".a-modal-scroller"), l = {}, y = h.viewport(!0), u = .1 * y.height, y = .8 * y.height, w = b.attrs("height"), b = b.attrs("min-height");
                            a.css({height: w ? w : "", "min-height": b ? b : ""});
                            c = c.measure(a, e);
                            l.left = (c.windowWidth - c.popoverWidth) / 2;
                            0 > l.left ? (l.left = u, a.css("padding-right", u)) : a.css("padding-right", "");
                            c.popoverHeight > y ? (e = a.find(".a-popover-header, .a-modal-close-nohead-top").outerHeight(!0) || 0, b = a.find(".a-popover-footer").outerHeight(!0) ||
                                0, q.css({height: y - e - b + "px", "overflow-y": "auto"}), a.css({
                                height: y,
                                "min-height": 0
                            }), l.top = u) : (l.top = (c.windowHeight - c.popoverHeight) / 2, q.css("height", "auto"));
                            l.left += c.zoomLeft;
                            l.top += c.zoomTop;
                            f && t.css("top", document.getElementById(m.LIGHTBOX_ID).style.top);
                            d && (t.css("top", g(r).scrollTop()), a.removeClass("a-popover-pan-y").addClass("a-popover-pan-x"), a = g(document).height(), q = g(document).width(), g("#" + m.LIGHTBOX_ID).css({
                                height: a,
                                width: q > c.popoverWidth ? q : c.popoverWidth + u
                            }));
                            h.capabilities.isMetroIEGuess &&
                            h.capabilities.isIETouchCapable && k();
                            return l
                        }, beforeShowMethod: h.constants.NOOP, beforeHideMethod: h.constants.NOOP
                    }, modalScroll: {
                        positionStrategy: function (c) {
                            var b = c.$popover, a = c.$trigger, e = b.closest(".a-modal-scroller"), d = b.find(".a-popover-inner").css("height", "auto");
                            if (b.hasClass("a-popover-modal-fixed-height")) {
                                var f = b.find(".a-popover-footer");
                                d.css("padding-bottom", f.height() + 15)
                            }
                            var d = {}, g = h.viewport(!0), l = g.height, f = .1 * l, l = .8 * l, g = .8 * g.width, m = b.height(), w = b.width();
                            c = c.measure(b, a);
                            d.left =
                                (c.windowWidth - w) / 2;
                            d.top = (c.windowHeight - m) / 2;
                            w > g ? (d.left = f, b.css("padding-right", f)) : b.css("padding-right", "");
                            m > l ? e.length ? (d.top = 0, b.css({
                                position: "relative",
                                margin: c.zoomTop + f + "px 0 " + f + "px " + (c.zoomLeft + d.left) + "px"
                            }), d.left = 0, e.css("padding-bottom", "1px")) : (w > g && (d.left = f), m > l && (d.top = f)) : e.length && (b.css({
                                position: "absolute",
                                margin: "0px"
                            }), e.css("padding-bottom", "0px"));
                            d.left += c.zoomLeft;
                            d.top += c.zoomTop;
                            h.capabilities.isMetroIEGuess && h.capabilities.isIETouchCapable && k();
                            return d
                        }, beforeShowMethod: function () {
                            l(this)
                        },
                        beforeHideMethod: function () {
                            this.$popover.closest(".a-modal-scroller").css("visibility", "hidden").unbind("scroll")
                        }
                    }, util: {
                        determineMaximumInnerHeight: function (c) {
                            var b = c.$popover;
                            c = .8 * h.viewport().height;
                            var a = b.find(".a-popover-header, .a-modal-close-nohead-top").outerHeight(!0) || 0, b = b.find(".a-popover-footer").outerHeight(!0) || 0;
                            return c - a - b
                        }, determineInnerVerticalPadding: function (c) {
                            c = c.$popover.find(".a-popover-inner");
                            return c.outerHeight() - c.height()
                        }
                    }
                }
            });
        n.when("A", "a-popover-base-factory",
            "a-modal-view", "a-popover-util").register("a-modal-factory", function (h, m, l, k) {
            function g(c, b) {
                var a = !1, e = !1;
                h.capabilities.mobile || h.capabilities.tablet || (a = k.getBool(b.modeless), e = k.getBool(b.draggable));
                b = {
                    modeless: a,
                    draggable: e,
                    type: "modal",
                    alone: !0,
                    immersive: !0,
                    position: "windowCenter",
                    header: b.header,
                    hideHeader: b.hideHeader,
                    footer: b.footer,
                    padding: b.padding,
                    width: b.width,
                    height: b.height,
                    "max-width": b["max-width"],
                    "max-height": b["max-height"],
                    "min-width": b["min-width"],
                    "min-height": b["min-height"],
                    closeButton: k.getBool(b.closeButton, !0),
                    timeout: b.timeout,
                    lightboxOptions: a ? v : {lockScroll: !0, showDuration: f || d ? 0 : null},
                    data: b.data || {},
                    dataStrategy: b.dataStrategy,
                    url: b.url,
                    manualRefresh: !!b.manualRefresh,
                    ajaxFailMsg: b.ajaxFailMsg,
                    cache: k.getBool(b.cache, !0),
                    inlineContent: b.inlineContent ? b.inlineContent : b.content,
                    name: b.name,
                    closeButtonLabel: b.closeButtonLabel ? b.closeButtonLabel : "Close",
                    hideHeaderCloseButtonLayout: b.hideHeaderCloseButtonLayout,
                    popoverLabel: b.popoverLabel,
                    ariaDescription: b.ariaDescription,
                    legacyNavigable: k.getBool(b.legacyNavigable, !0)
                };
                return m.create(c, {attributes: b, typeSpecificFunctions: l, actionCheck: !0})
            }

            var f = -1 < document.documentElement.className.indexOf("a-lt-ie9"), d = h.capabilities.mobile && h.capabilities.isIE10Plus;
            return {
                type: "modal", create: g, get: function (c) {
                    var b = m.get(c, "modal");
                    b || "object" !== typeof c || (c = k.extractDeclarativeParams(c, "modal")) && (b = g(c.$trigger, c.attributes || {}));
                    return b
                }, remove: function (c) {
                    return m.remove(c, "modal")
                }
            }
        });
        n.when("A", "a-popover-base-factory",
            "a-modal-factory", "ready").register("a-modal-handlers", function (h, m, l) {
            var k = h.$;
            h.declarative("a-modal", "click", function (g) {
                l.get(g.$declarativeParent).show();
                g.$event.preventDefault()
            });
            k(document).keydown(function (g) {
                if (g.keyCode === h.constants.keycodes.ESCAPE) {
                    for (var f = m.getRoot(), d = f.children.length, c = !1; d-- && !c;) {
                        var b = f.children[d];
                        "modal" === b.type && b.isActive() && (b.unlock().hide(), c = !0)
                    }
                    c && g.preventDefault()
                }
            });
            k(document).delegate(".a-modal-scroller", "click " + h.action.start + " " + h.action.move,
                function (g) {
                    g.target === this && g.preventDefault()
                })
        });
        n.when("A", "a-modal-factory", "a-popover-base", "a-modal-handlers").register("a-modal", function (h, m) {
            return m
        });
        n.when("A", "a-popover-util").register("a-popover-view-base", function (h, m) {
            return {
                setAriaBusy: function (h) {
                    this.$popover.find(".a-popover-wrapper").attr("aria-busy", h)
                }, updateContent: function (h) {
                    "string" === typeof h ? this.$popover.find(".a-popover-content").html(h) : h && this.$popover.find(".a-popover-content").html("").append(h)
                },
                updateDimensions: function () {
                    this.$popover.css(m.getCSSHash(this.attrs()));
                    this.isActive() && this.updatePosition();
                    return this
                }, getContent: function () {
                    return this.$popover ? this.$popover.find(".a-popover-content") : null
                }, hideMethod: function () {
                    var l = this;
                    h.fadeOut(l.$popover, 250, "linear", function () {
                        l.$popover.css({top: "auto", left: "auto"})
                    })
                }
            }
        });
        n.when("A", "a-popover-view-base", "a-popover-util", "a-popover-accessibility").register("a-popover-view", function (h, m, l, k) {
            return h.extend(m, {
                skin: function (g) {
                    var f =
                        g.attrs("id"), d = g.attrs("header"), c = g.attrs("closeButton"), b = g.attrs("closeButtonLabel") ? g.attrs("closeButtonLabel") : "", a = g.attrs("popoverLabel") ? g.attrs("popoverLabel") : "", e = g.attrs("ariaDescription"), q = g.attrs("padding");
                    g = g.attrs("popoverArrow");
                    a = {id: f, header_str: d, label_str: a, aria_description: e};
                    c = c ? '<button data-action="a-popover-close" class="a-button-close a-declarative" aria-label="' + b + '"><i class="a-icon a-icon-close"></i></button>' : "";
                    d = d && "" !== d ? ['<div class="a-popover-header">', c, '<h4 class="a-popover-header-content" id="a-popover-header-',
                        f, '">', d, "</h4></div>"].join("") : "";
                    q = "none" === q ? " a-padding-none" : "";
                    g = g ? '<div class="a-arrow-border"><div class="a-arrow"></div></div>' : "";
                    return ['<div class="a-popover a-declarative" data-action="a-popover-container a-popover-a11y"><div class="a-popover-wrapper">', k.getStartAnchorHtml(a), d, '<div class="a-popover-inner', q, '">', "" === d ? c : "", '<div class="a-popover-content" id="a-popover-content-', f, '"></div></div>', k.getEndAnchorHtml(a), g, "</div></div>"].join("")
                }
            })
        });
        n.when("A", "a-popover-base-factory",
            "a-popover-view", "a-popover-util").register("a-popover-factory", function (h, m, l, k) {
            function g(f, d) {
                d = {
                    type: "popover",
                    alone: !0,
                    header: d.header,
                    width: d.width,
                    height: d.height,
                    "max-width": d["max-width"],
                    "max-height": d["max-height"],
                    "min-width": d["min-width"],
                    "min-height": d["min-height"],
                    padding: d.padding,
                    closeButton: k.getBool(d.closeButton, !0),
                    position: d.position || "triggerVertical",
                    activate: d.activate || "onmouseover",
                    timeout: d.timeout,
                    data: d.data || {},
                    dataStrategy: d.dataStrategy,
                    url: d.url,
                    manualRefresh: !!d.manualRefresh,
                    ajaxFailMsg: d.ajaxFailMsg,
                    cache: k.getBool(d.cache, !0),
                    inlineContent: d.inlineContent ? d.inlineContent : d.content,
                    name: d.name,
                    closeButtonLabel: d.closeButtonLabel ? d.closeButtonLabel : "Close",
                    popoverLabel: d.popoverLabel,
                    ariaDescription: d.ariaDescription,
                    focusWhenShown: k.getBool(d.focusWhenShown, !0),
                    popoverArrow: k.getBool(d.popoverArrow, !0)
                };
                return m.create(f, {attributes: d, typeSpecificFunctions: l, actionCheck: !0})
            }

            return {
                type: "popover", create: g, get: function (f) {
                    var d = m.get(f, "popover");
                    d || "object" !== typeof f ||
                    (f = k.extractDeclarativeParams(f, "popover")) && (d = g(f.$trigger, f.attributes || {}));
                    return d
                }, remove: function (f) {
                    return m.remove(f, "popover")
                }
            }
        });
        n.when("A", "a-popover-factory").register("a-popover-handlers", function (h, m) {
            function l(c) {
                c && !c.destroyTimer && (c.destroyTimer = h.delay(function () {
                    c.hide()
                }, 250))
            }

            function k(c) {
                c && (clearTimeout(c.destroyTimer), c.destroyTimer = null, clearTimeout(c.parent.destroyTimer), c.parent.destroyTimer = null)
            }

            var g = h.$, f = !(h.capabilities.mobile || h.capabilities.tablet) &&
                h.capabilities.ios;
            h.declarative("a-popover", "click", function (c) {
                var b = m.get(c.$declarativeParent);
                b && ("onclick" === b.attrs("activate") || f) && (b.show(), c.$event.preventDefault())
            });
            h.declarative("a-popover", "keydown", function (c) {
                var b = h.constants.keycodes, a = c.$event.which;
                if (a === b.ENTER || a === b.SPACE)c.$event.preventDefault(), m.get(c.$declarativeParent).show()
            });
            if (!f) {
                var d;
                h.declarative("a-popover", "mouseenter", function (c) {
                    var b = m.get(c.$declarativeParent);
                    b && "onmouseover" === b.attrs("activate") && (k(b),
                        d = h.delay(function () {
                            m.get(c.$declarativeParent).show()
                        }, 200))
                });
                h.declarative("a-popover", "mousemove", function (c) {
                    2 > h.cursor().speed && (c = m.get(c.$declarativeParent)) && "onmouseover" === c.attrs("activate") && c.show()
                });
                h.declarative("a-popover", "mouseleave", function (c) {
                    (c = m.get(c.$declarativeParent)) && "onmouseover" === c.attrs("activate") && (c && l(c), d && clearTimeout(d))
                });
                h.declarative("a-popover-container", "mouseenter", function (c) {
                    (c = m.get(c.$declarativeParent)) && "onmouseover" === c.attrs("activate") && k(c)
                });
                h.declarative("a-popover-container", "mouseleave", function (c) {
                    var b = m.get(c.$declarativeParent), a = !0, e = g(c.$event.relatedTarget);
                    b && "onmouseover" === b.attrs("activate") && b.isActive() && (h.each(b.children, function (b) {
                        if (e.closest(b.$popover).length)return a = !1
                    }), a && (l(b), b.parent.immersive || 0 !== e.closest(b.parent.$popover).length || l(b.parent)))
                })
            }
        });
        n.when("A", "a-popover-factory", "a-popover-base", "a-popover-handlers").register("a-popover", function (h, m) {
            return m
        });
        n.when("A",
            "a-popover-base-factory", "a-secondary-view-view", "p-detect", "a-popover-util").register("a-secondary-view-factory", function (h, m, l, k, g) {
            function f(a, e) {
                e.disableAnimation = e.disableAnimation || c;
                return m.create(a, {
                    attributes: {
                        type: "secondary-view",
                        immersive: !0,
                        disableAnimation: b || e.disableAnimation,
                        synchronous: !!(b || e.synchronous && "false" !== e.synchronous),
                        animationLength: e.disableAnimation ? 0 : 300,
                        alternateBackground: e.alternateBackground || !1,
                        hideHeader: b || e.hideHeader || !1,
                        scrollable: e.scrollable || !0,
                        header: e.header,
                        backButtonText: e.backButtonText,
                        position: "windowFullWidth",
                        timeout: e.timeout,
                        dataStrategy: e.dataStrategy,
                        inlineContent: e.inlineContent ? e.inlineContent : e.content,
                        url: e.url,
                        manualRefresh: !!e.manualRefresh,
                        name: e.name,
                        cache: "false" === e.cache || !1 === e.cache ? !1 : !0,
                        data: e.data || {},
                        popoverLabel: e.popoverLabel,
                        padding: e.padding,
                        ariaDescription: e.ariaDescription
                    }, typeSpecificFunctions: l, actionCheck: !0
                })
            }

            var d = h.$, c = navigator.userAgent.match(/Android\s[12]/), b = !1;
            n.when("mash-will-load").execute(function () {
                b = !0
            });
            return {
                type: "secondary-view", create: f, get: function (a) {
                    var b = m.get(a, "secondary-view");
                    if (!b && "object" === typeof a) {
                        var c = g.extractDeclarativeParams(a, "secondary-view");
                        c && (b = f(c.$trigger, c.attributes || {}))
                    }
                    b && "object" === typeof a && (a = d(a), a = (a = a.hasClass("a-declarative") ? a : a.find(".a-declarative").eq(0)) ? a.data("a-secondary-view") : null, b.data = a.data);
                    return b
                }, remove: function (a) {
                    return m.remove(a, "secondary-view")
                }
            }
        });
        n.when("A", "a-secondary-view-factory", "a-popover-base", "a-secondary-view-handlers").register("a-secondary-view",
            function (h, m) {
                return m
            });
        n.when("A").register("a-tooltip-view-base", function (h) {
            return {
                updateContent: function (h) {
                    this.$popover.find(".a-tooltip-inner").html(h)
                }, getContent: function () {
                    return this.$popover ? this.$popover.find(".a-tooltip-inner") : null
                }, hideMethod: function () {
                    h.fadeOut(this.$popover, 250, "linear")
                }
            }
        });
        n.when("A", "a-tooltip-view-base").register("a-tooltip-view", function (h, m) {
            return h.extend(m, {
                skin: function (h) {
                    return ['<div role="tooltip" class="a-popover a-tooltip a-declarative" data-action="a-popover-close"><div class="a-tooltip-inner"></div>',
                        h.attrs("popoverArrow") ? '<div class="a-arrow-border"><div class="a-arrow"></div></div>' : "", "</div>"].join("")
                }
            })
        });
        n.when("A", "a-popover-base-factory", "a-tooltip-view", "a-popover-util").register("a-tooltip-factory", function (h, m, l, k) {
            function g(f, d) {
                d = {
                    type: "tooltip",
                    name: d.name,
                    inlineContent: d.inlineContent ? d.inlineContent : d.content,
                    position: d.position || "triggerVertical",
                    activate: d.activate || "onmouseover",
                    popoverArrow: k.getBool(d.popoverArrow, !0)
                };
                var c = m.create(f, {
                    attributes: d, typeSpecificFunctions: l,
                    actionCheck: !0
                });
                f.add(f.children()).filter("a, input").attr("aria-describedby", "a-popover-" + f.data("a-popover-id"));
                return c
            }

            return {
                type: "tooltip", create: g, get: function (f) {
                    var d = m.get(f, "tooltip");
                    d || "object" !== typeof f || (f = k.extractDeclarativeParams(f, "tooltip")) && (d = g(f.$trigger, f.attributes || {}));
                    return d
                }, remove: function (f) {
                    return m.remove(f, "tooltip")
                }
            }
        });
        n.when("A", "a-tooltip-factory").register("a-tooltip-handlers", function (h, m) {
            h.declarative("a-tooltip", "click", function (h) {
                var k =
                    m.get(h.$declarativeParent);
                k && "onclick" === k.attrs("activate") && (k.show(), h.$event.preventDefault())
            });
            h.declarative("a-tooltip", "mouseenter", function (h) {
                (h = m.get(h.$declarativeParent)) && "onmouseover" === h.attrs("activate") && (h.show(), h.destroyTimer && (clearTimeout(h.destroyTimer), h.destroyTimer = null))
            });
            h.declarative("a-tooltip", "mouseleave", function (l) {
                var k = m.get(l.$declarativeParent);
                k && "onmouseover" === k.attrs("activate") && (k.destroyTimer = h.delay(function () {
                    k.hide()
                }, 125))
            });
            h.declarative("a-tooltip",
                "focus focusin", function (h) {
                    (h = m.get(h.$declarativeParent)) && h.show()
                });
            h.declarative("a-tooltip", "blur focusout", function (h) {
                (h = m.get(h.$declarativeParent)) && h.hide()
            })
        });
        n.when("A", "a-tooltip-factory", "a-popover-base", "a-tooltip-handlers").register("a-tooltip", function (h, m) {
            return m
        })
    })()
})(function () {
    var n = window.AmazonUIPageJS || window.P, r = n._namespace || n.attributeErrors;
    return r ? r("AmazonUIPopoverJS") : n
}(), window);
(function (n, r, v) {
    n.guardFatal(function () {
    })()
})(function () {
    var n = window.AmazonUIPageJS || window.P, r = n._namespace || n.attributeErrors;
    return r ? r("AmazonUIPopover") : n
}(), window);
(function (n, r, v) {
    n.guardFatal(function () {
        n.when("A").register("a-tabs", function (h) {
            var m = h.$;
            h.declarative("a-tabs", ["click"], function (l) {
                var k = l.$target.closest("li"), g = l.data.name, f = k.data("a-tab-name"), d = k.closest(".a-tab-container").find(".a-box-tab");
                f && (m("li.a-active", k.closest(".a-tabs")).removeClass("a-active"), k.closest("li").addClass("a-active"), d.addClass("a-hidden"), d.filter('[data-a-name="' + f + '"]').removeClass("a-hidden"), k = {
                    $tab: k,
                    tabName: f,
                    tabSetName: g
                }, h.trigger("a:tabs:" + g + ":select",
                    {selectedTab: k}), h.trigger("a:tabs:" + g + ":" + f + ":select", {selectedTab: k}), l.$event.preventDefault())
            })
        });
        n.when("A").register("a-accordion", function (h) {
            var m = "slideDown", l = "slideUp", k = 300;
            if (h.capabilities.mobile || h.capabilities.tablet)m = "show", l = "hide", k = 0;
            h.declarative("a-accordion", ["click"], function (g) {
                var f = g.$target.closest(".a-accordion"), d = g.$target.closest(".a-box"), c = f.find(".a-box").not(d), b = f.data("a-accordion-name"), a = d.data("a-accordion-row-name"), f = f.hasClass("a-accordion-collapse");
                if (a) {
                    var e = d.find(".a-accordion-inner"), q = !0;
                    if (d.hasClass("a-accordion-active"))if (f)e[l]({
                        duration: k, complete: function () {
                            d.removeClass("a-accordion-active").attr("aria-expanded", "false");
                            d.find(".a-icon.a-accordion-radio").removeClass("a-icon-radio-active").addClass("a-icon-radio-inactive")
                        }
                    }); else q = !1; else c.find(".a-accordion-inner").attr("aria-expanded", "false")[l]({
                        duration: k,
                        complete: function () {
                            c.removeClass("a-accordion-active")
                        }
                    }), e.attr("aria-expanded", "true")[m]({
                        duration: k, complete: function () {
                            d.addClass("a-accordion-active");
                            c.find(".a-icon.a-accordion-radio").removeClass("a-icon-radio-active").addClass("a-icon-radio-inactive");
                            d.find(".a-icon.a-accordion-radio").removeClass("a-icon-radio-inactive").addClass("a-icon-radio-active")
                        }
                    });
                    q && (f = {
                        $row: d,
                        rowName: a,
                        accordionName: b
                    }, h.trigger("a:accordion:select", {selectedRow: f}), h.trigger("a:accordion:" + b + ":select", {selectedRow: f}), h.trigger("a:accordion:" + b + ":" + a + ":select", {selectedRow: f}))
                }
                g.$event.preventDefault()
            })
        });
        n.when("A", "jQuery").register("a-expander",
            function (h, m) {
                function l(c, b) {
                    var a = c.closest("." + f.container), e = a.data("a-expander-collapsed-height"), d = "true" === c.attr("aria-expanded");
                    c.toggleClass(f.content + "-expanded");
                    e ? (a.css("height", d ? e : "auto"), c.attr("aria-expanded", d ? "false" : "true"), b()) : c.toggle(0, function () {
                        c.attr("aria-expanded", d ? "false" : "true");
                        b()
                    })
                }

                function k() {
                    m(".a-expander-partial-collapse-container").each(function () {
                        var c = m(this), b = c.children("." + f.content), a = c.data("a-expander-collapsed-height"), e = c.children("." + f.header);
                        b.height() <= a ? e.css({opacity: "0", display: "none"}) : (e.css({
                            opacity: "1",
                            display: "block"
                        }), b.css("padding-bottom", e.height()), "true" !== b.attr("aria-expanded") && c.css({
                            height: a,
                            "max-height": "none"
                        }))
                    })
                }

                var g = {
                    inline: {expand: "a-icon-expand", collapse: "a-icon-collapse"},
                    section: {expand: "a-icon-section-expand", collapse: "a-icon-section-collapse"},
                    extender: {expand: "a-icon-extender-expand", collapse: "a-icon-extender-collapse"}
                }, f = {
                    container: "a-expander-container", content: "a-expander-content", header: "a-expander-header",
                    fadeDiv: "a-expander-content-fade"
                }, d = {};
                h.each(g, function (c, b) {
                    d[b] = {};
                    h.each(c, function (a, e) {
                        d[b][e] = new RegExp("\\b" + a + "\\b", "g")
                    })
                });
                h.declarative("a-expander-toggle", "click", function (c) {
                    var b = c.$target.closest("." + f.container), a = b.find("." + f.container), e = b.data("a-expander-name"), q;
                    q = c.$currentTarget.hasClass(f.header) ? c.$currentTarget : b.find("." + f.header).not(a.find("." + f.header));
                    var t = b.find("." + f.content).not(a.find("." + f.content));
                    l(t, function () {
                        var k = q.find(".a-icon")[0], l = null, m = q.children("." +
                            f.fadeDiv);
                        "false" === t.attr("aria-expanded") ? (k && (k.className = k.className.replace(d.inline.collapse, g.inline.expand).replace(d.section.collapse, g.section.expand).replace(d.extender.collapse, g.extender.expand)), c.data && c.data.expand_prompt && (l = c.data.expand_prompt), m.show(), k = "collapse") : (k && (k.className = k.className.replace(d.inline.expand, g.inline.collapse).replace(d.section.expand, g.section.collapse).replace(d.extender.expand, g.extender.collapse)), c.data && c.data.collapse_prompt && (l = c.data.collapse_prompt),
                            m.hide(), k = "expand");
                        l && "" !== l && q.find(".a-expander-prompt").not(a.find(".a-expander-prompt")).html(l);
                        l = {$expander: b, expanderName: e};
                        h.trigger("a:expander:toggle", {expander: l});
                        h.trigger("a:expander:toggle:" + k, {expander: l});
                        e && (h.trigger("a:expander:" + e + ":toggle", {expander: l}), h.trigger("a:expander:" + e + ":toggle:" + k, {expander: l}))
                    })
                });
                h.on("load ready resize orientationchange a:popover:afterShow a:popover:ajaxContentLoaded", k);
                return {initializeExpanders: k}
            });
        n.when("A", "a-form-controls-api").register("a-form-controls-handlers",
            function (h, m) {
                var l = h.$, k = function () {
                    l(this).removeClass("a-hover-disable")
                }, g = function (f, d) {
                    var c = m.findFormElementContainer(f);
                    h.delay(function () {
                        c.find(d).each(m.normalizeElement)
                    }, 0)
                };
                return {
                    accessibilityKeyPress: function (f) {
                        f.keyCode === h.constants.keycodes.SPACE && (f.preventDefault(), f.stopPropagation())
                    }, formReset: g, handleCheckboxClick: function () {
                        if (!h.capabilities.mobile && !h.capabilities.tablet)l(this).addClass("a-hover-disable").one("mouseleave", k)
                    }, normalizeFormControls: function () {
                        l("form").unbind("reset.a-form-controls-reset").bind("reset.a-form-controls-reset",
                            function (f) {
                                g(f.currentTarget, "li .a-touch-multi-select")
                            })
                    }, touchMultiSelectHandler: function (f) {
                        m.toggleCheckboxState(f.currentTarget)
                    }
                }
            });
        n.when("A", "a-form-controls-handlers", "ready").register("a-form-controls", function (h, m) {
            var l = h.$;
            l("html").hasClass("a-lt-ie8") || (l(document).delegate(".a-checkbox-fancy", "click", m.handleCheckboxClick).delegate(".a-checkbox-fancy, .a-radio-fancy", "keypress", m.accessibilityKeyPress), h.on("a:pageUpdate beforeReady", m.normalizeFormControls))
        });
        n.when("A").register("a-buttons", function (h) {
            var m = h.$, l = 0;
            h.declarative("a-button-group", ["click"], function (k) {
                var g = k.$target.closest(".a-button:not(.a-button-disabled)");
                if (g.length) {
                    var f = k.$declarativeParent.find(".a-button"), d = k.data && k.data.name ? k.data.name : !1;
                    k = k.$target.attr("name");
                    f.removeClass("a-button-selected").attr("aria-checked", "false");
                    g.addClass("a-button-selected").attr("aria-checked", "true");
                    if (k || d)g = {$button: g, buttonName: k, buttonGroupName: d}, d && (h.trigger("a:button-group:" +
                        d + ":toggle", {selectedButton: g}), k && h.trigger("a:button-group:" + d + ":" + k + ":toggle", {selectedButton: g}))
                }
            });
            h.on("a:pageUpdate beforeReady", function () {
                var h = m(".a-button:not([id])"), g = m(".a-button-group,.a-button-toggle-group");
                h.each(function () {
                    var f = m(this), d = f.find(".a-button-text"), c = f.find(".a-button-input"), b = "a-autoid-" + l++;
                    f.attr("id", b);
                    d.length && (b = (f = d.attr("id")) ? f : b + "-announce", c.attr("aria-labelledby", b), d.attr("id", b))
                });
                g.each(function () {
                    var f = m(this).find(".a-button[role='radio']"),
                        d = f.length, c = 1;
                    f.each(function () {
                        m(this).attr({"aria-posinset": c++, "aria-setsize": d})
                    })
                })
            });
            m(document).delegate(".a-button-input, .a-button-text", "focusin", function () {
                var h = m(this).closest(".a-button");
                h.hasClass("a-button-disabled") || h.addClass("a-button-focus")
            }).delegate(".a-button-input, .a-button-text", "focusout " + h.action.cancel, function () {
                m(this).closest(".a-button").removeClass("a-button-focus")
            })
        });
        n.when("A", "ready").register("a-meters", function (h) {
            var m = h.$;
            if (document.getElementsByClassName) {
                var l =
                    function (h) {
                        h.removeClass("a-meter-unfilled").addClass("a-meter-filled")
                    };
                m(".a-meter-bar").not(".a-manual-animation").each(function () {
                    var k = m(this);
                    h.onScreen(k, 0) || k.addClass("a-meter-unfilled")
                });
                m("body").addClass("a-meter-animate");
                h.on("resize orientationchange scroll", function (k) {
                    m(".a-meter-unfilled").each(function () {
                        var g = m(this);
                        h.onScreen(g, 0) && l(g)
                    })
                });
                h.on("a:popover:afterShow", function (h) {
                    "ajax" !== h.popover.currentDataStrategy && (h = h.popover.$popover.find(".a-meter-unfilled"), h.length &&
                    l(h))
                });
                h.on("a:popover:ajaxContentLoaded", function (k) {
                    var g = k.popover.$popover.find(".a-meter-bar").not(".a-manual-animation");
                    g.length && (g.addClass("a-meter-unfilled"), h.delay(function () {
                        l(g)
                    }, 17))
                })
            }
        });
        n.when("a-switch-framework", "jQuery").register("a-switch", function (h, m) {
            var l = h.SWITCH_STATE, k = h.SWITCH_CONTAINER_CLASS, g = h.SWITCH_CLASS;
            return {
                getSwitch: function (f) {
                    function d(a) {
                        var e = b.data(l);
                        if (a === v)return e.isOn;
                        if (!e.isEnabled || c(b))return !1;
                        h.setOnState(b, a);
                        return !0
                    }

                    function c() {
                        return b.data(l).isDragging
                    }

                    f.jquery || (f = m(f));
                    if (0 === f.length)return null;
                    f = f.eq(0);
                    f = f.closest("." + k);
                    if (0 === f.length)return null;
                    var b = f.find("." + g);
                    h.ensureInitialized(b);
                    return {
                        toggle: function () {
                            return d(!b.data(l).isOn)
                        }, isOn: d, enabled: function (a) {
                            var e = b.data(l);
                            if (a === v)return e.isEnabled;
                            if (e.isEnabled === a)return !1;
                            h.setEnabled(b, a);
                            return !0
                        }, isDragging: c, label: function (a) {
                            var e = b.data(l).label, c = e[0].childNodes[0];
                            if (a === v)return e.text();
                            3 === c.nodeType && (c.textContent = a)
                        }
                    }
                }
            }
        });
        n.when("A", "jQuery").register("a-switch-framework",
            function (h, m) {
                function l(a) {
                    a.preventDefault();
                    var b = a.data.$switch.data("a-switch-state"), e = b.control;
                    if (!h.isAnimated(e)) {
                        a = u(a) - b.initialX;
                        b.isOn && (a += b.rightBoundary);
                        var c = b.leftBoundary, d = b.rightBoundary;
                        a = a < c ? c : a > d ? d : a;
                        a !== b.leftOffset && (h.animate(e, {left: a}, 0), b.leftOffset = a, b.isDragging = !0, b.dragCount++)
                    }
                }

                function k(a) {
                    a.preventDefault();
                    if (h.capabilities.touch || 1 === a.which) {
                        a = a.data.$switch;
                        var b = a.data("a-switch-state");
                        d(a, b.isDragging && 1 < b.dragCount ? b.leftOffset > b.midPoint : !b.isOn);
                        b.isDragging = !1;
                        y(a)
                    }
                }

                function g(a, b, e) {
                    e = {switchState: a, previousState: e};
                    h.trigger("a:switch:" + b, e);
                    a.name && h.trigger("a:switch:" + a.name + ":" + b, e)
                }

                function f(a) {
                    if (!a.data("a-switch-state")) {
                        var b = a.closest(".a-switch-row"), e = a.children(".a-switch-control"), c = b.find(".a-switch-label"), d = c.siblings("input"), q = d.attr("name"), f = b.hasClass("a-active"), g = !b.hasClass("a-disabled"), h = a.width() - e.width() - 1;
                        a.data("a-switch-state", {
                            input: d,
                            container: b,
                            control: e,
                            label: c,
                            isDragging: !1,
                            rightBoundary: h,
                            leftBoundary: -1,
                            midPoint: h /
                            2,
                            initialX: null,
                            leftOffset: f ? h : -1,
                            isOn: f,
                            isEnabled: g,
                            name: q,
                            dragCount: 0,
                            clicked: !1
                        })
                    }
                }

                function d(a, b) {
                    f(a);
                    var e = a.data("a-switch-state"), c = e.isOn, d = b !== e.isOn;
                    e.isOn = b;
                    var q = e.isOn ? e.rightBoundary : e.leftBoundary;
                    h.animate(e.control, {left: q}, 300, "ease-out");
                    e.leftOffset = q;
                    q = e.container;
                    e.isOn ? q.addClass("a-active") : q.removeClass("a-active");
                    q = e.input;
                    e.isOn ? q.attr("checked", "checked") : q.removeAttr("checked");
                    d && g(e, "flip", c);
                    b ? g(e, "on", c) : g(e, "off", c)
                }

                var c = function (a) {
                    a.bind("touchmove.a-switch-component",
                        {$switch: a}, l);
                    a.bind("touchend.a-switch-component", {$switch: a}, k);
                    a.bind("touchcancel.a-switch-component", {$switch: a}, k);
                    a.bind("mouseup.a-switch-component", {$switch: a}, k)
                }, b = function (a) {
                    a.unbind("touchmove.a-switch-component");
                    a.unbind("touchend.a-switch-component");
                    a.unbind("touchcancel.a-switch-component");
                    a.unbind("mouseup.a-switch-component")
                }, a = function (a) {
                    return (a.originalEvent.touches[0] || a.originalEvent.changedTouches[0]).pageX
                }, e = function (a) {
                    m("body").bind("mousemove.a-switch-component",
                        {$switch: a}, l);
                    m("body").bind("mouseup.a-switch-component", {$switch: a}, k)
                }, q = function (a) {
                    m("body").unbind("mousemove.a-switch-component", l);
                    m("body").unbind("mouseup.a-switch-component", k)
                }, t = function (a) {
                    return a.pageX
                }, x = null, y = null, u = null;
                h.capabilities.touch ? (x = c, y = b, u = a) : (x = e, y = q, u = t);
                h.declarative("a-switch", h.capabilities.touch ? "touchstart" : "mousedown", function (a) {
                    var b = a.$event;
                    b.preventDefault();
                    if (h.capabilities.touch || 1 === b.which) {
                        a = a.$declarativeParent;
                        f(a);
                        var e = a.data("a-switch-state");
                        e.dragCount = 0;
                        e.clicked = !0;
                        e.isDragging = !1;
                        e.isEnabled && (e.initialX = u(b), x(a))
                    }
                });
                h.declarative("a-switch-input", "change", function (a) {
                    a.$event.preventDefault();
                    a = a.$target.closest(".a-switch-row").find(".a-switch");
                    f(a);
                    var b = a.data("a-switch-state");
                    d(a, !b.isOn)
                });
                h.declarative("a-switch-label", "click", function (a) {
                    a.$event.preventDefault();
                    a = a.$target.closest(".a-switch-row").find(".a-switch");
                    f(a);
                    var b = a.data("a-switch-state");
                    b.clicked ? b.clicked = !1 : b.isEnabled && d(a, !b.isOn)
                });
                n.when("ready").execute("a-switch-normalization",
                    function () {
                        m(".a-switch-input").each(function () {
                            var a = m(this), b = a.next().children(".a-switch");
                            d(b, a.prop("checked"))
                        })
                    });
                return {
                    ensureInitialized: f, setOnState: d, setEnabled: function (a, b) {
                        f(a);
                        var e = a.data("a-switch-state"), c = e.container;
                        b ? c.removeClass("a-disabled") : c.addClass("a-disabled");
                        e.isEnabled = b
                    }, SWITCH_STATE: "a-switch-state", SWITCH_CONTAINER_CLASS: "a-switch-row", SWITCH_CLASS: "a-switch"
                }
            })
    })()
})(function () {
    var n = window.AmazonUIPageJS || window.P, r = n._namespace || n.attributeErrors;
    return r ? r("AmazonUIComponents") :
        n
}(), window);
(function (n, r, v) {
    n.guardFatal(function () {
    })()
})(function () {
    var n = window.AmazonUIPageJS || window.P, r = n._namespace || n.attributeErrors;
    return r ? r("AmazonUICompatJS") : n
}(), window);
(function (n, r, v) {
    n.guardFatal(function () {
        n.declare("a-carousel-constants", {
            ANIMATING: "animating",
            ANIMATION_SPEED: "animation_speed",
            AUTO_ADJUST_HEIGHT: "auto_adjust_height",
            CIRCULAR: "circular",
            CURRENT_PIXEL: "px",
            CURRENTLY_WRAPPING: "currentlyWrapping",
            DELAY_TIME: "delay_time",
            ELEMENT_CSS_CLASS: "elementCssClass",
            FETCHED_ITEMS: "fetchedItems",
            FIRST_VISIBLE_ITEM: "firstVisibleItem",
            HIDE_OFF_SCREEN: "hide_off_screen",
            INIT_EVENTS: "a:pageUpdate beforeReady",
            LOADING: "loading",
            MIN_GUTTER: "minimum_gutter_width",
            NAME: "name",
            NO_TRANSITION: "no_transition",
            PAGE_NUMBER: "pageNumber",
            PAGE_SIZE: "pageSize",
            PEEK_GRADIENT: "peek_gradient",
            PEEK_PERCENTAGE: "peek_percentage",
            PEEK_WIDTH: "peek_width",
            SET_SIZE: "set_size",
            SPRINGINESS: "springiness",
            STATIC_LOADER_CSS_CLASS: "staticLoaderCssClass",
            TOTAL_PAGES: "totalPages",
            TOUCH_EASING: "touch_easing",
            TRANSITION_STRATEGY: "transitionStrategy",
            WRAP_EASING: "wrap_easing"
        });
        n.register("a-carousel-utils", function () {
            function h(g) {
                return "string" === typeof g
            }

            function m(g) {
                return g &&
                    g.nodeType !== v
            }

            function l(g) {
                return "" === g ? "<div></div>" : g ? h(g) || m(g) ? g : l(g.content) : null
            }

            function k(g) {
                g && (h(g) || m(g) ? g = !0 : g.content = k(g.content));
                return g
            }

            return {
                addElementToDom: function (g, f) {
                    f && (h(f) ? g.html(f) : m(f) && g.empty().append(f), !0 !== f && g.removeClass("a-carousel-card-empty"))
                }, clearElementFromItem: k, getElementFromItem: l, isElement: m, isString: h
            }
        });
        n.register("a-carousel-circular-utils", function () {
            function h(h) {
                var k = 0 < h;
                return function (g, f, d) {
                    var c = f.length;
                    d = (d || 1) % c;
                    g = g.get(0);
                    for (var b, a = 0; a < d; a++)k ? (b = f.get(a), g.appendChild(b)) : (b = f.get(c - 1 - a), g.insertBefore(b, g.children[0]))
                }
            }

            function m(h) {
                var k = 0 < h;
                return function (g, f) {
                    f = f ? f % g.length : 1;
                    k ? g = g.concat(g.splice(0, f)) : g.unshift.apply(g, g.splice(g.length - f, f));
                    return g
                }
            }

            return {
                rotateCW: h(1),
                rotateCCW: h(-1),
                rotateArrayCW: m(1),
                rotateArrayCCW: m(-1),
                firstCardIndexAfterRotate: function (h, k, g) {
                    h = (k + h) % g;
                    0 === h ? h = g : 0 > h && (h = g + h);
                    return h
                },
                relativeIndexFromIndex: function (h, k, g) {
                    var f = 1;
                    if (0 < h && h <= g)return h > k ? f = h - k + 1 : h < k && (f = g - k + h +
                        1), f;
                    n.error("idx should be between 1 and " + g, "a-carousel-circular-utils", "relativeIndexFromIndex")
                }
            }
        });
        n.when("A", "jQuery").register("a-carousel-measure", function (h, m) {
            return function (l) {
                function k(f, d, c) {
                    var b, a, e, q;
                    d.jquery || (d = m(d));
                    for (h.each(c, function (b) {
                        if ("top" === b || "left" === b)return a = d.offset(), !1
                    }); void 0 !== (b = c.pop());)e = f[b], "left" === b || "top" === b ? f[b] = a[b] : -1 < b.indexOf("outer") ? f[b] = d[b](!0) : f[b] = d["outer" + b.charAt(0).toUpperCase() + b.substr(1)](), f[b] !== e && (void 0 === q &&
                    (q = {}), q[b] = e);
                    return q
                }

                var g = {
                    carousel: {height: 0, width: 0, outerHeight: 0, outerWidth: 0},
                    viewport: {height: 0, width: 0, outerHeight: 0, outerWidth: 0},
                    items: [],
                    getFirstCardWidth: function () {
                        return void 0 !== this.items[0] && h.isFiniteNumber(this.items[0].width) ? this.items[0].width : 160
                    }
                };
                l.measure = function (f) {
                    var d = this.dom.$carousel, c = this.dom.$viewport, b = {};
                    f && (f = f.split(" "));
                    if (!f || -1 < h.indexOfArray(f, "carousel"))b.carousel = k(g.carousel, d, "top left height width outerHeight outerWidth".split(" "));
                    if (!f || -1 <
                        h.indexOfArray(f, "viewport"))b.viewport = k(g.viewport, c, ["height", "width", "outerHeight", "outerWidth"]);
                    if (!f || -1 < h.indexOfArray(f, "items"))g.items = [], b.items = {}, d.children("li").each(function (a, e) {
                        g.items[a] = {};
                        var c = k(g.items[a], e, "top left height width outerHeight outerWidth".split(" "));
                        void 0 !== c && (b.items[a] = c)
                    });
                    return b
                };
                l.getItemOffset = function (f) {
                    var d = g.items;
                    f--;
                    if (d && d.length) {
                        if (f < d.length) {
                            for (var c = 0, b = d[0].outerWidth, a = 0; a < f; a++)c += d[a] ? d[a].outerWidth : b;
                            0 < f && this.getAttr("first_item_flush_left") &&
                            (c += l.getAttr("currentGutter"));
                            return c
                        }
                    } else return 0
                };
                l.getDimensions = function () {
                    return h.copy(g)
                };
                l.updateDimensionsCache = function (f) {
                    h.extend(g, f)
                };
                l.getViewportWidth = function () {
                    try {
                        return g.viewport.width
                    } catch (f) {
                    }
                }
            }
        });
        n.when("A", "jQuery").register("a-carousel-attributes", function (h, m) {
            return function (l, k) {
                var g = {}, f = {}, d = {};
                h.extend(g, k);
                l.onChange = function (c, b) {
                    for (var a = c.split(" "), e = a.length, d; e--;)d = a[e], f[d] || (f[d] = []), m.isFunction(b) && -1 === h.indexOfArray(f[d], b) && f[d].push(b);
                    return this
                };
                l.unbind = function (c, b) {
                    if (f[c] && b) {
                        var a = h.indexOfArray(f[c], b);
                        -1 < a && f[c].splice(a, 1)
                    }
                    return this
                };
                l.once = function (c, b) {
                    var a = function () {
                        b.apply(null, arguments);
                        l.unbind(c, a)
                    };
                    return l.onChange(c, a)
                };
                l.setAttr = function (c, b, a) {
                    var e = g[c];
                    g[c] = b;
                    if (!(a || d[c] || h.equals(b, e))) {
                        d[c] = !0;
                        b = h.copy(b);
                        e = h.copy(e);
                        if (f[c]) {
                            a = h.copy(f[c]);
                            for (var q = 0, t = a.length; q < t; q++)a[q](b, e, l, c)
                        }
                        b = {newValue: b, oldValue: e, carousel: l};
                        h.trigger("a:carousel:change:" + c, b);
                        g.name && h.trigger("a:carousel:" + g.name +
                            ":change:" + c, b);
                        d[c] = !1
                    }
                    return this
                };
                l.getAttr = function (c) {
                    return h.copy(g[c])
                }
            }
        });
        n.when("A", "jQuery", "a-carousel-measure", "a-carousel-attributes", "a-carousel-strategies", "a-carousel-constants").register("a-carousel-base", function (h, m, l, k, g, f) {
            function d(b) {
                b.onChange("pageSize", function (a, e) {
                    var c = b.getAttr("firstVisibleItem"), d = Math.ceil(c / a);
                    1 === d && 1 < c ? d = 2 : 1 > d && (d = 1);
                    b.setAttr("pageNumber", d);
                    b.setAttr("totalPages", Math.ceil(b.getAttr("set_size") / a));
                    c = b.getAttr("ajax");
                    a > e && (c &&
                    c.prefetch_next_page ? b.strategies.ajax.wantNextPage(b) : b.strategies.ajax.wantCurrentPage(b))
                });
                b.onChange("set_size", function (a, e) {
                    var c = b.getAttr("pageSize"), d = b.getAttr("fetchedItems");
                    b.setAttr("totalPages", Math.ceil(a / c));
                    a < e ? (d.splice(a, Number.MAX_VALUE), b.setAttr("fetchedItems", d)) : b.strategies.ajax.wantCurrentPage && b.strategies.ajax.wantCurrentPage(b)
                });
                b.onChange("firstVisibleItem", function (a) {
                    b.dom.$container.find("input.a-carousel-firstvisibleitem").val(a)
                });
                b.onChange("pageNumber", function (a) {
                    0 <
                    a && a <= b.getAttr("totalPages") && b.setAttr("currentlyWrapping", !1)
                })
            }

            function c(b, a, e) {
                if (0 !== arguments.length) {
                    b.jquery || (b = m(b));
                    this.dom = {
                        $container: b,
                        $viewport: b.hasClass("a-carousel-viewport") ? b : b.find(".a-carousel-viewport"),
                        $carousel: b.find(".a-carousel")
                    };
                    var c = {
                        totalPages: 1E3,
                        pageNumber: 1,
                        pageSize: 0,
                        firstVisibleItem: 1,
                        maintain_state: !0,
                        px: 0,
                        auto_adjust_height: !0,
                        ajax: {}
                    };
                    h.extend(c, e);
                    c.maintain_state = !!c.maintain_state;
                    c.id_list ? c.set_size || (c.set_size = c.id_list.length) : c.id_list = [];
                    if (!c.set_size) {
                        var d =
                            this.dom.$carousel.children("li"), f = parseInt(d.first().attr("aria-setsize"), 10);
                        h.isFiniteNumber(f) && 0 < f ? c.set_size = f : c.set_size = d.length
                    }
                    var g = [];
                    this.dom.$carousel.children("li").each(function (a, b) {
                        g.push(h.trim(b.innerHTML))
                    });
                    c.fetchedItems = g;
                    l(this);
                    k(this, c);
                    this.strategies = a;
                    return this
                }
            }

            h.each(g, function (b, a) {
                c.prototype["set" + a.charAt(0).toUpperCase() + a.slice(1) + "Strategy"] = function (a) {
                    this.strategies[name] = a;
                    "function" === typeof a.init && a.init(this)
                }
            });
            g = c.prototype;
            g.gotoNextPage = function (b) {
                this.getAttr("transitionPaused") ||
                (this.strategies.transition.gotoNextPage(this, b), b && b.accessibleSafe && this.strategies.accessibility.nextPage(this, b.animationDuration, b.animationSpeed))
            };
            g.gotoPrevPage = function (b) {
                this.getAttr("transitionPaused") || (this.strategies.transition.gotoPrevPage(this, b), b && b.accessibleSafe && this.strategies.accessibility.prevPage(this, b.animationDuration, b.animationSpeed))
            };
            g.gotoPage = function (b, a) {
                this.getAttr("transitionPaused") || (this.strategies.transition.gotoPage(this, b, a), a && a.accessibleSafe && this.strategies.accessibility.gotoPage(this,
                    a.animationDuration, a.animationSpeed))
            };
            g.gotoIndex = function (b, a) {
                (!this.getAttr("transitionPaused") || a && a.ignorePause) && this.strategies.transition.gotoIndex(this, b, a)
            };
            g.gotoPixel = function (b, a) {
                this.getAttr("transitionPaused") || this.strategies.transition.gotoPixel(this, b, a)
            };
            g.resize = function () {
                if (this.dom.$container.is(":visible")) {
                    var b = this.measure("carousel viewport");
                    this.strategies.display.resize(this, b)
                }
            };
            g.pause = function () {
                this.setAttr("transitionPaused", !0)
            };
            g.resume = function () {
                this.setAttr("transitionPaused",
                    !1)
            };
            g.triggerEvent = function (b, a) {
                a = a || {};
                a.carousel = this;
                h.trigger("a:carousel:" + b, a);
                var e = this.getAttr("name");
                e && h.trigger("a:carousel:" + e + ":" + b, a)
            };
            g.getStaticLoader = function () {
                return this.getAttr(f.STATIC_LOADER_CSS_CLASS) ? '<div class="' + this.getAttr(f.STATIC_LOADER_CSS_CLASS) + '"></div>' : ""
            };
            g.getEmptyCard = function (b, a) {
                var e = "a-carousel-card a-carousel-card-empty";
                this.getAttr(f.ELEMENT_CSS_CLASS) && (e = e + " " + this.getAttr(f.ELEMENT_CSS_CLASS));
                return ['<li class="', e, '" role="listitem" aria-setsize="',
                    a, '" aria-posinset="', b, '">', this.getStaticLoader(), "</li>"].join("")
            };
            g.initTouchHandling = function () {
                var b = this, a = b.dom.$viewport;
                (h.capabilities.touch || h.capabilities.pointerPrefix) && n.when("a-touch").execute(function (e) {
                    a.addClass("a-gesture a-gesture-horizontal").bind("pan-horizontal swipe-horizontal", function () {
                        return !1
                    });
                    h.on("a:swipe-horizontal:" + a[0].id, function (a) {
                        if (!b.getAttr("transitionPaused") && b.strategies.transition.onSwipe)b.strategies.transition.onSwipe(b, a)
                    });
                    if (!b.getAttr("disable_panning"))h.on("a:pan-horizontal:" +
                        a[0].id, function (a) {
                        if (!b.getAttr("transitionPaused") && b.strategies.transition.onPan)b.strategies.transition.onPan(b, a)
                    })
                });
                if (h.capabilities.isIE10 || h.capabilities.isIE11Plus) {
                    var e = function (a) {
                        a.stopPropagation();
                        a.preventDefault();
                        document.body.removeEventListener("click", e, !0)
                    };
                    a.bind(h.action.start, function (b) {
                        a.bind("swipe-horizontal.a-ssiec pan-horizontal.a-ssiec", function (b) {
                            a.unbind(".a-ssiec");
                            a.bind(h.action.end + ".a-ssiec", function (b) {
                                a.unbind(".a-ssiec");
                                document.body && document.body.addEventListener("click",
                                    e, !0)
                            })
                        })
                    })
                }
            };
            g.init = function () {
                var b = this, a = b.strategies, e = b.dom.$viewport[0];
                e && !e.id && (e.id = "anonCarousel" + b.__id);
                for (var e = b.dom.$carousel[0], c = e.childNodes, f = c.length; f--;)c[f].tagName && "li" === c[f].tagName.toLowerCase() || e.removeChild(c[f]);
                h.each(b.strategies, function (a) {
                    a.initAttrs && h.each(a.initAttrs, function (a, e) {
                        var c = a;
                        "function" === typeof a && (c = a(b.getAttr(e)));
                        b.setAttr(e, c)
                    })
                });
                if (1 > b.getAttr("set_size"))return a.ajax.init(b), !1;
                b.measure();
                h.each(b.strategies, function (a) {
                    a.init(b)
                });
                a = b.getAttr("pageSize");
                e = b.getAttr("set_size");
                a = Math.ceil(e / a);
                b.setAttr("totalPages", a);
                d(b);
                b.setAttr("isInTab", 0 < b.dom.$container.closest(".a-tab-content").length, !0);
                b.triggerEvent("init");
                h.each(b.strategies, function (a) {
                    a.afterInit && a.afterInit(b)
                });
                b.triggerEvent("afterInit");
                a = b.getAttr("firstVisibleItem");
                1 === a && b.getAttr("maintain_state") && (a = parseInt(b.dom.$container.find("input.a-carousel-firstvisibleitem").val(), 10), h.isFiniteNumber(a) && 0 < a && a <= e || (a = 1));
                if (1 < a) {
                    e = 700;
                    c = Math.ceil(a /
                        b.getAttr("pageSize"));
                    for (f = 2; f < c; f++)e += 700 / f;
                    b.gotoIndex(a, {animationDuration: e, easingFunction: "ease"})
                }
                return !0
            };
            return c
        });
        n.when("A", "jQuery", "a-carousel-base", "a-carousel-constants").register("a-carousel-mobile", function (h, m, l, k) {
            function g(c) {
                var b = c.getAttr("loaderHeight");
                b || ((b = c.getAttr("maxHeight")) ? (b = Math.min(.9 * b, 90), b = Math.max(b, 120)) : b = 90, c.setAttr("loaderHeight", b));
                return b
            }

            function f(c, b, a) {
                l.call(this, c, b, a);
                if (0 !== arguments.length)return this.getAttr("circular") ===
                d && this.setAttr("circular", !1), this.getAttr("show_partial_next") === d && this.setAttr("show_partial_next", !0), this.getAttr("hide_off_screen") === d && this.setAttr("hide_off_screen", !1), this.getAttr("springiness") === d && this.setAttr("springiness", .8), this.getAttr("touch_easing") === d && this.setAttr("touch_easing", "cubic-bezier(0.215, 0.610, 0.355, 1.000)"), this.init = function () {
                    return l.prototype.init.call(this) ? (this.getAttr(k.STATIC_LOADER_CSS_CLASS) || this.dom.$carousel.children("li").children(".a-loading-static").css("height",
                        g(this) + "px"), this.getAttr(k.NO_TRANSITION) || this.initTouchHandling(), !0) : !1
                }, this
            }

            var d;
            f.prototype = new l;
            f.prototype.constructor = f;
            f.prototype.getStaticLoader = function () {
                return this.getAttr(k.STATIC_LOADER_CSS_CLASS) ? '<div class="' + this.getAttr(k.STATIC_LOADER_CSS_CLASS) + '"></div>' : '<div class="a-loading-static" style="height:' + g(this) + 'px"><div class="a-loading-static-inner"></div></div>'
            };
            return f
        });
        n.when("A", "jQuery", "a-carousel-base", "a-carousel-constants").register("a-carousel-desktop",
            function (h, m, l, k) {
                function g(c) {
                    var b = c.getAttr("set_size") <= c.getAttr("pageSize"), a = c.getAttr(k.NO_TRANSITION);
                    1 === c.getAttr("totalPages") && 1 < c.getAttr("pageNumber") && c.gotoPage(1, {
                        startover: !0,
                        animationDuration: 0
                    });
                    c.dom.$container.find(".a-carousel-left, .a-carousel-right, .a-carousel-pagination").css("visibility", b || a ? "hidden" : "visible")
                }

                function f(c, b, a) {
                    l.call(this, c, b, a);
                    if (0 !== arguments.length) {
                        var e = this;
                        e.getAttr("circular") === d && this.setAttr("circular", !0);
                        e.getAttr("hide_off_screen") ===
                        d && this.setAttr("hide_off_screen", !0);
                        e.onChange("totalPages", function (a) {
                            e.dom.$container.find(".a-carousel-page-max").html(a);
                            a < e.getAttr("pageNumber") && e.gotoPage(a)
                        });
                        e.onChange("pageNumber", function (a, b) {
                            var c = e.dom.$container, d = c.find(".a-carousel-restart-container");
                            1 < a ? d.show() : d.hide();
                            c.find(".a-carousel-page-current").html(a)
                        });
                        e.init = function () {
                            var a = this;
                            if (l.prototype.init.call(a)) {
                                g(this);
                                a.onChange("pageSize set_size", function () {
                                    g(a)
                                });
                                2 > a.getAttr("pageNumber") && a.dom.$container.find(".a-carousel-restart-container").hide();
                                var b = a.dom.$container.find(".a-carousel-button");
                                if (b.length) {
                                    var e = b.eq(0).position().top + "px";
                                    b.css("top", e)
                                }
                                var c = !1, d = function (b) {
                                    b.preventDefault();
                                    b = {startover: !0, accessibleSafe: "keydown" === b.type ? !0 : !1};
                                    5 < a.getAttr("pageNumber") ? b.animationDuration = 1250 : b.animationSpeed = 5 * a.getDimensions().viewport.width;
                                    a.gotoPage(1, b)
                                };
                                a.dom.$container.delegate(".a-carousel-goto-nextpage", "click dblclick", function (b) {
                                    c || (c = !0, b.preventDefault(), a.gotoNextPage(), h.delay(function () {
                                        c = !1
                                    }, 5))
                                }).delegate(".a-carousel-goto-prevpage",
                                    "click dblclick", function (b) {
                                        c || (c = !0, b.preventDefault(), a.gotoPrevPage(), h.delay(function () {
                                            c = !1
                                        }, 5))
                                    }).delegate(".a-carousel-goto-nextpage", "keydown", function (b) {
                                    if (b.which === h.constants.keycodes.ENTER || b.which === h.constants.keycodes.SPACE)b.preventDefault(), a.gotoNextPage({accessibleSafe: !0})
                                }).delegate(".a-carousel-goto-prevpage", "keydown", function (b) {
                                    if (b.which === h.constants.keycodes.ENTER || b.which === h.constants.keycodes.SPACE)b.preventDefault(), a.gotoPrevPage({accessibleSafe: !0})
                                }).delegate(".a-carousel-restart",
                                    "keydown", function (a) {
                                        a.which !== h.constants.keycodes.ENTER && a.which !== h.constants.keycodes.SPACE || d(a)
                                    }).delegate(".a-carousel-restart", "click", d);
                                a.dom.$container.find(".a-carousel-page-max").html(this.getAttr("totalPages"));
                                a.getAttr(k.NO_TRANSITION) || a.initTouchHandling();
                                return !0
                            }
                            return !1
                        };
                        return e
                    }
                }

                var d;
                f.prototype = new l;
                return f.prototype.constructor = f
            });
        n.when("A", "a-carousel-desktop", "a-carousel-mobile").register("a-carousel-classes", function (h, m, l) {
            return {
                desktop: m, mobile: l,
                "default": h.capabilities.mobile || h.capabilities.tablet ? "mobile" : "desktop"
            }
        });
        n.when("A", "jQuery", "p-detect", "a-carousel-constants").register("a-carousel-stretchygoodness", function (h, m, l, k) {
            function g(a, b, c, d) {
                a.getAttr("show_partial_next") && (b -= c / 10);
                var f = a.getAttr("minimum_gutter_width");
                a.getAttr("set_size");
                a = 0;
                for (var g = !0; 0 < b;)a++, b = d && g ? b - c : b - (c + f), g = !1;
                0 > b && a--;
                return h.isFiniteNumber(a) && 0 < a ? a : 1
            }

            function f(a, b, c, d, f, g, k) {
                "stretch" === a.getAttr("single_page_align") && d > g && (d = g);
                b -= c * d;
                a.getAttr("show_partial_next") ? (a = b - f * (d + 1), k && (a += f), k = a / c, b -= c * (.5 < k ? .5 : k)) : k && (b += f);
                c = Math.ceil(b / (d + 1));
                if (!h.isFiniteNumber(c) || c < f)c = f;
                return c
            }

            function d(a) {
                if (a.getAttr("auto_adjust_height"))if (a.getAttr("animating"))a.once("animating", function () {
                    d(a)
                }); else {
                    var b = a.getAttr("maxHeight"), c = a.getDimensions();
                    b && h.isFiniteNumber(b) || (b = 1);
                    var f = b, g = a.getAttr("pageSize"), k = g * (a.getAttr("pageNumber") - 1), g = k + g - 1, c = c.items, l = c.length, m;
                    for (a.getAttr("show_partial_next") && g++; k <= g && k < l; k++)(m =
                        c[k]) && m.outerHeight > f && (f = c[k].outerHeight || c[k].height);
                    f > b && (a.updateDimensionsCache({
                        viewport: {
                            height: f,
                            outerHeight: f
                        }
                    }), a.setAttr("maxHeight", f), 1 === b ? a.dom.$viewport.height(f) : h.animate(a.dom.$viewport, {height: f}, a.getAttr("height_animation_speed"), "linear"))
                } else a.dom.$viewport.css("height", "")
            }

            function c(a) {
                a.onChange("pageNumber", function () {
                    a.getAttr("hide_off_screen") && a.dom.$carousel.children("li").css("visibility", "")
                });
                a.onChange("pageSize", function (b, c) {
                    b > c && d(a)
                });
                a.onChange("loading",
                    function (b) {
                        b || d(a)
                    });
                a.onChange("firstVisibleItem", function () {
                    d(a)
                });
                a.onChange("animating", function (b) {
                    if (!b && a.getAttr("hide_off_screen")) {
                        var c = a.getAttr("firstVisibleItem") - 1, d = c + a.getAttr("pageSize") - 1;
                        a.getAttr("show_partial_next") && d++;
                        a.dom.$carousel.children("li").each(function (a, b) {
                            var e = a >= c && a <= d;
                            m(b).css("visibility", e ? "" : "hidden")
                        })
                    }
                });
                a.onChange("single_page_align minimum_gutter_width", function () {
                    b(a)
                });
                a.onChange("minimum_gutter_width", function () {
                    b(a)
                })
            }

            function b(a) {
                var b = a.getDimensions(),
                    c = b.viewport.width, b = b.getFirstCardWidth(), d = a.getAttr("minimum_gutter_width"), h = a.getAttr("set_size"), k = a.getAttr("first_item_flush_left"), l = g(a, c, b, k), m = f(a, c, b, l, d, h, k);
                a.setAttr("currentGutter", m);
                a.setAttr("pageSize", l);
                var A = a.dom.$carousel, z = A.children("li"), d = z.length, C = a.getAttr("totalPages"), E = a.getAttr("pageNumber"), D = a.getAttr("firstVisibleItem"), n = (E - 1) * l + 1;
                E > C ? (D = (C - 1) * l + 1, a.setAttr("pageNumber", C), a.setAttr("firstVisibleItem", D)) : D !== n && (C = Math.ceil(D / l), D = (C - 1) * l + 1, a.setAttr("pageNumber",
                    C), a.setAttr("firstVisibleItem", D));
                var F = D - 1, r = F + l - 1;
                a.getAttr("show_partial_next") && r++;
                var v = a.getAttr("hide_off_screen"), K = m + "px", L = b + "px", B;
                z.each(function (a, b) {
                    B = !v || a >= F && a <= r;
                    b.style.marginLeft = k && 0 === a ? 0 : K;
                    b.style.visibility = B ? "" : "hidden";
                    b.style.width = L
                });
                var J;
                a.getAttr("first_item_flush_left") ? (m = z.first().outerWidth(!0), 1 < z.length && (J = z.eq(1).outerWidth(!0)), C = (d - 1) * J + m) : (m = J = z.first().outerWidth(!0), C = d * J);
                l >= h ? (C = c, E = a.getAttr("single_page_align"), A.toggleClass("a-text-right", "right" ===
                    E), A.toggleClass("a-text-center", "center" === E), "center" === E && z.first().css("margin-left", 0)) : A.removeClass("a-text-right a-text-center");
                C = l >= h ? c : C;
                A.css("width", C + "px");
                c = {carousel: {width: C, outerWidth: A.outerWidth()}, items: []};
                for (h = 0; h < d; h++)c.items.push({width: b, outerWidth: 0 === h ? m : J});
                a.updateDimensionsCache(c);
                a.gotoIndex(D, {animationDuration: 0, ignorePause: !0});
                a.triggerEvent("repaint")
            }

            return {
                repaint: b, init: function (a) {
                    var e = a.getAttr("minimum_gutter_width");
                    h.isFiniteNumber(e) || (e = 15, a.setAttr("minimum_gutter_width",
                        e));
                    a.setAttr("currentGutter", e);
                    e = a.getAttr("height_animation_speed");
                    h.isFiniteNumber(e) || a.setAttr("height_animation_speed", 200);
                    a.setAttr("first_item_flush_left", !!a.getAttr("first_item_flush_left"));
                    a.setAttr("show_partial_next", !!a.getAttr("show_partial_next"));
                    b(a);
                    a.getAttr(k.NO_TRANSITION) || d(a);
                    e = a.getDimensions();
                    a.dom.$container.find(".a-carousel-left, .a-carousel-right, .a-carousel-viewport").css("height", Math.max(e.viewport.height, e.items[0] ? e.items[0].height : 0) + "px");
                    e = a.getAttr("firstVisibleItem");
                    1 < e && (a.setAttr("firstVisibleItem", e), e = Math.ceil(e / a.getAttr("pageSize")), a.gotoPage(e));
                    c(a)
                }, resize: function (a, e) {
                    e.viewport && void 0 !== e.viewport.width && b(a)
                }
            }
        });
        n.when("A", "jQuery", "p-detect", "a-carousel-utils").register("a-carousel-display-swap", function (h, m, l, k) {
            function g(b) {
                if (b.getAttr("auto_adjust_height")) {
                    var a = b.getAttr("maxHeight");
                    a && h.isFiniteNumber(a) || (a = 1);
                    var e = a;
                    b.dom.$carousel.children("li").not(".a-carousel-card-empty").each(function (a, b) {
                        var c = m(b).outerHeight();
                        e = Math.max(c, e)
                    });
                    e > a && (b.setAttr("maxHeight", e), l.capabilities.transition ? 1 === a ? b.dom.$viewport.height(e) : h.animate(b.dom.$viewport, {height: e}, b.getAttr("height_animation_speed"), "linear") : b.dom.$viewport.height(e), b.updateDimensionsCache({
                        viewport: {
                            height: e,
                            outerHeight: e
                        }
                    }))
                } else b.dom.$viewport.css("height", "")
            }

            function f(b, a) {
                for (var e = b.dom.$carousel[0], c = b.dom.$carousel.children("li").get(), d; c.length > a;)d = c.pop(), e.removeChild(d)
            }

            function d(b) {
                b.onChange("animating", function (a) {
                    a || g(b)
                });
                b.onChange("loading",
                    function (a) {
                        a || g(b)
                    });
                b.onChange("pageSize", function (a, e) {
                    if (a > e) {
                        0 === e && f(b);
                        var c = b.getAttr("set_size"), d = b.getDimensions().getFirstCardWidth(), h = b.getAttr("currentGutter"), l = b.getAttr("fetchedItems"), u = b.getAttr("firstVisibleItem") - 1, w = b.dom.$carousel.children("li"), A = document.createDocumentFragment(), z;
                        if (m.isArray(l)) {
                            for (var C = w.length; C < a; C++)z = C + u, w = m(['<li class="a-carousel-card a-carousel-card-empty" role="listitem" aria-setsize="', c, '" aria-posinset="', z + 1, '" style="width:', d, "px; margin-left:",
                                h, 'px;">', b.getStaticLoader()].join("")), l[z] && k.addElementToDom(w, k.getElementFromItem(l[z])), z >= c && w.removeClass("a-carousel-card-empty"), A.appendChild(w[0]);
                            b.dom.$carousel.append(A)
                        }
                        g(b)
                    } else a < e && f(b)
                });
                b.onChange("set_size", function (a, e) {
                    var d = b.getAttr("pageNumber"), f = b.getAttr("totalPages"), g = b.dom.$carousel.children("li");
                    d === f && a > e && (g.length && b.dom.$carousel.children("li").each(function (a, e) {
                        h.trim(e.innerHTML) || (e.className += " a-carousel-card-empty", e.innerHTML = b.getStaticLoader())
                    }),
                    0 === e && c(b))
                });
                b.onChange("single_page_align minimum_gutter_width", function () {
                    c(b)
                });
                b.onChange("minimum_gutter_width", function () {
                    c(b)
                })
            }

            function c(b) {
                var a = b.getDimensions(), e = a.viewport.width, c = a.getFirstCardWidth(), d = b.getAttr("minimum_gutter_width"), a = b.getAttr("set_size"), g;
                g = b.getAttr("minimum_gutter_width");
                b.getAttr("set_size");
                g = Math.max(Math.floor(e / (c + g)), 1);
                g = h.isFiniteNumber(g) ? g : 1;
                var k, l = g;
                "stretch" === b.getAttr("single_page_align") && l > a && (l = a);
                l = Math.ceil((e - c * l) / (l + 1));
                h.isFiniteNumber(l) ||
                (l = d);
                k = l;
                b.setAttr("currentGutter", k);
                b.setAttr("pageSize", g);
                var l = b.dom.$carousel, m = l.children("li"), d = m.length, c = c + k, A = d * c;
                f(b, Math.min(g, a));
                m.css("margin-left", k + "px");
                g >= a ? (A = e, e = b.getAttr("single_page_align"), l.toggleClass("a-text-right", "right" === e), l.toggleClass("a-text-center", "center" === e), "center" === e && m.first().css("margin-left", 0)) : l.removeClass("a-text-right a-text-center");
                for (e = {
                    carousel: {width: A, outerWidth: l.outerWidth()},
                    items: []
                }; d--;)e.items.push({outerWidth: c});
                b.updateDimensionsCache(e);
                b.triggerEvent("repaint")
            }

            return {
                repaint: c, init: function (b) {
                    var a = b.getAttr("minimum_gutter_width");
                    a || (a = 15, b.setAttr("minimum_gutter_width", a));
                    b.setAttr("currentGutter", a);
                    a = b.getAttr("height_animation_speed");
                    h.isFiniteNumber(a) || b.setAttr("height_animation_speed", 200);
                    d(b);
                    c(b);
                    a = b.getDimensions();
                    b.dom.$container.find(".a-carousel-left, .a-carousel-right, .a-carousel-viewport").css("height", Math.max(a.viewport.height, a.items[0] ? a.items[0].height : 0) + "px");
                    a = b.getAttr("firstVisibleItem");
                    1 < a &&
                    (b.setAttr("firstVisibleItem", a), a = Math.ceil(a / b.getAttr("pageSize")), b.gotoPage(a))
                }, resize: function (b, a) {
                    a.viewport && void 0 !== a.viewport.width && c(b)
                }
            }
        });
        n.when("A", "jQuery").register("a-carousel-display-single", function (h, m) {
            function l(d) {
                if (d.getAttr("auto_adjust_height"))if (d.getAttr("animating"))d.once("animating", function () {
                    l(d)
                }); else d.dom.$viewport.css("height", "auto"), h.delay(function () {
                    d.dom.$viewport.height(d.dom.$viewport.height())
                }, 0); else d.dom.$viewport.css("height", "")
            }

            function k(d, c) {
                var b = d.dom.$carousel.children("li"), a = d.getAttr("firstVisibleItem") - 1, e = d.getAttr("show_partial_next") ? 2 : 1, a = b.slice(a, a + e);
                b.not(a).css("visibility", "hidden");
                c && a.css("visibility", "")
            }

            function g(d) {
                d.getAttr("fixed_height") || (d.dom.$viewport.delegate("img", "load", function () {
                    l(d)
                }), d.onChange("loading", function (c) {
                    c || l(d)
                }), d.onChange("pageNumber", function () {
                    d.getAttr("hide_off_screen") && d.dom.$carousel.children("li").css("visibility", "")
                }), d.onChange("animating", function (c) {
                    !c &&
                    d.getAttr("hide_off_screen") && k(d)
                }), d.onChange("minimum_gutter_width", function () {
                    f(d)
                }))
            }

            function f(d) {
                var c = d.getDimensions(), b = c.viewport.width, a = d.getAttr("show_partial_next"), e = d.getAttr("minimum_gutter_width"), q = d.getAttr("set_size"), f = d.dom.$carousel.children("li"), b = b - 2 * e;
                a && (b -= e + c.viewport.width / 3);
                f.css({width: b + "px", margin: "0 " + e + "px"});
                c = b + 2 * e;
                a = c * q;
                d.dom.$carousel.width(a);
                for (a = {carousel: {width: a}, items: []}; q--;)a.items[q] = {width: b, outerWidth: c};
                d.updateDimensionsCache(a);
                d.getAttr("hide_off_screen") &&
                k(d, !0);
                d.gotoIndex(d.getAttr("firstVisibleItem"), {animationDuration: 0, ignorePause: !0});
                d.triggerEvent("repaint")
            }

            return {
                repaint: f, init: function (d) {
                    var c = d.getAttr("minimum_gutter_width");
                    d.setAttr("minimum_gutter_width", h.isFiniteNumber(c) ? c : 14);
                    d.setAttr("show_partial_next", !!d.getAttr("show_partial_next"));
                    d.setAttr("pageSize", 1);
                    d.setAttr("pageSize", 1);
                    c = d.getAttr("fixed_height");
                    h.isFiniteNumber(c) ? d.dom.$viewport.height(c) : d.setAttr("fixed_height", !1);
                    d.dom.$carousel.children("li").css("visibility",
                        "visible");
                    g(d);
                    this.repaint(d);
                    l(d)
                }, resize: function (d, c) {
                    c.viewport && void 0 !== c.viewport.width && (this.repaint(d), d.getAttr("fixed_height") || l(d))
                }
            }
        });
        n.when("A", "jQuery", "a-carousel-constants").register("a-carousel-display-peekcircular", function (h, m, l) {
            function k(g) {
                return function (f) {
                    return h.isFiniteNumber(f) ? f : g
                }
            }

            m = {};
            m[l.PAGE_SIZE] = 1;
            m[l.MIN_GUTTER] = k(14);
            m[l.PEEK_PERCENTAGE] = k(10);
            return {
                initAttrs: m, init: function (g) {
                    var f = this;
                    g.onChange(l.PEEK_PERCENTAGE, function (d, c) {
                        f.repaint(g)
                    });
                    g.dom.$carousel.children("li").css("visibility", "visible");
                    f.repaint(g)
                }, repaint: function (g) {
                    var f = g.getAttr(l.MIN_GUTTER), d = g.getAttr(l.SET_SIZE), c = g.getAttr(l.PEEK_PERCENTAGE), b = g.getDimensions().viewport.width, a = g.dom.$carousel, e = a.children("li"), c = c / 100 * b, q = b - 2 * c - f, t = q + 2 * f, b = t * d;
                    a.width(b);
                    e.css({width: q + "px", "margin-left": f + "px", "margin-right": f + "px"});
                    g.updateDimensionsCache({
                        carousel: {width: b}, items: h.map(h.range(d), function () {
                            return {width: q, outerWidth: t}
                        })
                    });
                    g.setAttr(l.PEEK_WIDTH, c, !1);
                    g.triggerEvent("repaint")
                },
                resize: function (g, f) {
                    f.viewport && f.viewport.width !== v && this.repaint(g)
                }
            }
        });
        n.when("A").register("a-carousel-display-variablewidth", function (h) {
            return {init: h.constants.NOOP, resize: h.constants.NOOP, repaint: h.constants.NOOP}
        });
        n.when("a-carousel-stretchygoodness", "a-carousel-display-swap", "a-carousel-display-single", "a-carousel-display-peekcircular", "a-carousel-display-variablewidth").register("a-carousel-strategies-display", function (h, m, l, k, g) {
            return {
                swap: m, single: l, peekCircular: k,
                stretchyGoodness: h, variableWidth: g, "default": "stretchyGoodness"
            }
        });
        n.when("A", "jQuery", "a-carousel-utils").register("a-carousel-transition-swap", function (h, m, l) {
            function k(c, b) {
                var a = c.getAttr("preloadedImages");
                a || (a = []);
                for (var e = [], d = b.length - 1; 0 <= d; d--)if (b[d] && !a[d]) {
                    var f = l.getElementFromItem(b[d]);
                    f && m("img", f).each(function () {
                        e.push(this.src)
                    });
                    a[d] = !0
                }
                h.preload(e);
                c.setAttr("preloadedImages", a)
            }

            function g(c) {
                return "number" === typeof c ? c ? 0 > c ? -1 : 1 : isNaN(c) ? NaN : 0 : NaN
            }

            function f(c,
                       b) {
                c.getAttr("pageNumber");
                c.getAttr("pageSize");
                var a = c.getAttr("firstVisibleItem"), e = c.getAttr("delay_time"), d = c.dom.$carousel.children("li"), f = d.filter(".a-carousel-card-empty");
                f.length && c.setAttr("loading", !0);
                f.each(function (g, k) {
                    var u = m(k), w = d.index(k) + a - 1, A = b[w];
                    A && h.delay(function () {
                        l.addElementToDom(u, l.getElementFromItem(A));
                        g === f.length - 1 && c.setAttr("loading", !1)
                    }, 0 + e)
                })
            }

            function d(c, b, a) {
                a = a || {};
                var e = c.getAttr("pageNumber");
                if (b !== e) {
                    var d = c.getAttr("set_size"), f = c.getAttr("totalPages"),
                        k = c.getAttr("circular"), m = c.getAttr("pageSize"), u = a.delayTime || c.getAttr("delay_time"), w = g(a.direction) || NaN;
                    !k && 1 > b ? b = 1 : !k && b > f ? b = f : k && 1 > b ? b = f : k && b > f && (b = 1);
                    w || (w = e < b ? 1 : -1);
                    a.startover && (w = u = 1);
                    var A = m * (b - 1), z = 1 === w ? 0 : m - 1;
                    c.setAttr("pageNumber", b);
                    c.setAttr("firstVisibleItem", A + 1);
                    c.setAttr("animating", !0);
                    var C = h.interval(function () {
                        var a = A + z;
                        if (C !== c.getAttr("responsiveTimerId"))clearInterval(C); else if (-1 === w && 0 > z || 1 === w && z >= m)c.setAttr("responsiveTimerId", v), c.setAttr("animating", !1); else {
                            var b =
                                c.dom.$carousel.children("li").eq(z), e = c.getAttr("fetchedItems")[a];
                            e ? l.addElementToDom(b, l.getElementFromItem(e)) : a < d ? b.html(c.getStaticLoader()).addClass("a-carousel-card-empty") : b.empty().removeClass("a-carousel-card-empty");
                            z += w
                        }
                    }, u);
                    c.setAttr("responsiveTimerId", C)
                }
            }

            return {
                init: function (c) {
                    var b = c.getAttr("delay_time");
                    h.isFiniteNumber(b) || c.setAttr("delay_time", 30);
                    c.onChange("responsiveTimerId", function (a, b) {
                        b !== a && clearInterval(b)
                    });
                    c.onChange("fetchedItems", function (a, b) {
                        f(c, a);
                        k(c, a)
                    });
                    k(c, c.getAttr("fetchedItems"))
                }, gotoIndex: function (c, b, a) {
                    a = a || {};
                    var e = c.getAttr("pageSize");
                    b = Math.ceil(b / e);
                    d(c, b, a)
                }, gotoNextPage: function (c, b) {
                    b = b || {};
                    var a = c.getAttr("pageNumber");
                    b.direction = -1;
                    d(c, ++a, b)
                }, gotoPrevPage: function (c, b) {
                    b = b || {};
                    var a = c.getAttr("pageNumber");
                    b.direction = 1;
                    d(c, --a, b)
                }, gotoPage: d
            }
        });
        n.when("A", "jQuery", "a-carousel-utils", "a-carousel-constants").register("a-carousel-transition-slide", function (h, m, l, k) {
            function g(c) {
                var b = c.dom.$carousel.children("li").length,
                    a = b + 1, e = c.getAttr(k.SET_SIZE), d = e - b;
                if (0 < d) {
                    for (var d = a + d - 1, f = []; a <= d; a++)f.push(c.getEmptyCard(a, e));
                    c.dom.$carousel.append(f.join(""));
                    c.setAttr(k.LOADING, !0);
                    for (var d = c.getAttr(k.FETCHED_ITEMS), f = c.dom.$carousel.children("li"), g, a = b; a < e; a++)if (g = d[a]) {
                        var h = l.getElementFromItem(g), b = f.eq(a);
                        l.addElementToDom(b, h);
                        d[a] = l.clearElementFromItem(g)
                    }
                    c.strategies.display.repaint && c.strategies.display.repaint(c);
                    c.setAttr(k.FETCHED_ITEMS, d, !0);
                    c.setAttr(k.LOADING, !1)
                }
            }

            function f(c, b, a) {
                if (c.getAttr(k.ANIMATING))c.once(k.ANIMATING,
                    function () {
                        f(c, b, a)
                    }); else {
                    var e = c.getDimensions().items;
                    if (!a || b.length >= a.length) {
                        c.setAttr(k.LOADING, !0);
                        for (var d = c.dom.$carousel.children("li"), g = b.length, x, m; g--;)if ((m = b[g]) && !h.equals(m, a[g]) && !0 !== m && !0 !== m.content) {
                            var u = l.getElementFromItem(m);
                            x = d.eq(g);
                            x.length && (l.addElementToDom(x, u), e[g] = {
                                width: x.outerWidth(),
                                outerWidth: x.outerWidth(!0),
                                height: x.outerHeight(),
                                outerHeight: x.outerHeight(!0)
                            }, b[g] = l.clearElementFromItem(m))
                        }
                    }
                    c.setAttr(k.FETCHED_ITEMS, b);
                    c.updateDimensionsCache({items: e});
                    c.setAttr(k.LOADING, !1)
                }
            }

            var d = h.capabilities.touch ? 2E3 : 3E3;
            return {
                wrapToFirst: function (c) {
                    var b = c.getAttr(k.PAGE_SIZE), a = c.getDimensions().getFirstCardWidth(), e = this;
                    c.gotoPixel(b * a * -1, {
                        animationDuration: 0, callback: function () {
                            c.setAttr(k.CURRENTLY_WRAPPING, !1);
                            e.gotoPage(c, 1)
                        }
                    })
                }, wrapToLast: function (c) {
                    c.getAttr(k.PAGE_SIZE);
                    var b = c.getAttr(k.TOTAL_PAGES), a = this, e = c.getDimensions().carousel.width;
                    c.gotoPixel(e, {
                        animationDuration: 0, callback: function () {
                            c.setAttr(k.CURRENTLY_WRAPPING, !1);
                            a.gotoPage(c,
                                b)
                        }
                    })
                }, gotoPage: function (c, b, a) {
                    a = a || {};
                    (void 0 === a.animationDuration || 0 < a.animationDuration) && !a.silent && c.setAttr(k.ANIMATING, !0);
                    var e = c.getAttr(k.TOTAL_PAGES);
                    0 < b && b <= e && c.setAttr(k.PAGE_NUMBER, b);
                    var d = c.getAttr(k.CIRCULAR);
                    !d && 1 > b ? (b = 1, a.animationDuration = Math.pow(c.getAttr(k.ANIMATION_SPEED) * c.getAttr(k.SPRINGINESS))) : !d && b > e && (b = e, a.animationDuration = Math.pow(c.getAttr(k.ANIMATION_SPEED), c.getAttr(k.SPRINGINESS)));
                    this.gotoIndex(c, c.getAttr(k.PAGE_SIZE) * (b - 1) + 1, a)
                }, gotoIndex: function (c, b,
                                        a) {
                    a = a || {};
                    (void 0 === a.animationDuration || 0 < a.animationDuration) && !a.silent && c.setAttr(k.ANIMATING, !0);
                    var e = c.getAttr(k.CIRCULAR) && !c.getAttr(k.CURRENTLY_WRAPPING), d = a.callback, f = this, g = !1, l = c.getViewportWidth(), m = Math.ceil(b / c.getAttr(k.PAGE_SIZE)), w;
                    m !== c.getAttr(k.PAGE_NUMBER) && 0 < m && m <= c.getAttr(k.TOTAL_PAGES) && c.setAttr(k.PAGE_NUMBER, m);
                    c.setAttr(k.FIRST_VISIBLE_ITEM, b);
                    1 > b ? e && (g = -1 * l, w = function () {
                        d && d();
                        f.wrapToLast(c)
                    }) : b > c.getAttr(k.SET_SIZE) ? e && (g = c.getAttr(k.CURRENT_PIXEL) + l, w = function () {
                        d &&
                        d();
                        f.wrapToFirst(c)
                    }) : g = c.getItemOffset(b);
                    w ? (c.setAttr(k.CURRENTLY_WRAPPING, !0), a.callback = w, a.easingFunction = a.easingFunction || c.getAttr(k.WRAP_EASING), a.animationSpeed = 1.3 * (h.isFiniteNumber(a.animationSpeed) ? a.animationSpeed : c.getAttr(k.ANIMATION_SPEED))) : a.callback = d;
                    !1 !== g && this.gotoPixel(c, g, a)
                }, gotoPixel: function (c, b, a) {
                    var e = c.getAttr(k.CURRENT_PIXEL);
                    if (b !== e) {
                        a = a || {};
                        var d = a.easingFunction || "ease-out", f = a.callback;
                        c.getViewportWidth();
                        var g;
                        void 0 !== a.animationDuration ? g = a.animationDuration :
                            (g = h.isFiniteNumber(a.animationSpeed) ? a.animationSpeed : c.getAttr(k.ANIMATION_SPEED), e = Math.abs(b - e), g = 0 === g ? 0 : Math.floor(e / g * 1E3));
                        0 < g && !a.silent && c.setAttr(k.ANIMATING, !0);
                        h.isFiniteNumber(b) ? (e = 0 < g ? function () {
                            f && f();
                            c.getAttr(k.CURRENTLY_WRAPPING) || c.setAttr(k.ANIMATING, h.isAnimated(c.dom.$carousel), a.silent)
                        } : f, c.setAttr(k.CURRENT_PIXEL, b), h.animate(c.dom.$carousel, {left: -1 * b}, g, d, e)) : n.error("Target pixel is not a finite number", "a-carousel-transition-slide", "gotoPixel")
                    }
                }, gotoNextPage: function (c,
                                           b) {
                    var a = c.getAttr(k.PAGE_NUMBER);
                    this.gotoPage(c, ++a, b)
                }, gotoPrevPage: function (c, b) {
                    var a = c.getAttr(k.PAGE_NUMBER);
                    this.gotoPage(c, --a, b)
                }, onSwipe: function (c, b) {
                    if (!c.getAttr(k.CURRENTLY_WRAPPING)) {
                        var a = c.getAttr(k.FIRST_VISIBLE_ITEM), e = c.getAttr(k.PAGE_SIZE), d = c.getAttr(k.PAGE_NUMBER), f = 0 > b.velocityX, g = a;
                        f && d < c.getAttr(k.TOTAL_PAGES) ? g = a + e : !f && 1 < d && (g = a - e);
                        e = c.getAttr(k.CURRENT_PIXEL);
                        d = c.getItemOffset(g);
                        e = Math.abs(1E3 * (f ? e - d : e + d) / b.velocityX);
                        e = Math.max(e, 300);
                        e = Math.min(e, 1.2 * h.viewport().width);
                        e = {animationDuration: e, easingFunction: c.getAttr(k.TOUCH_EASING)};
                        g !== a || c.getAttr("circular") ? f ? c.gotoNextPage(e) : c.gotoPrevPage(e) : (e.animationSpeed = .95 * h.viewport().width, delete e.animationDuration, c.gotoIndex(g, e))
                    }
                }, onPan: function (c, b) {
                    if (!c.getAttr(k.CURRENTLY_WRAPPING)) {
                        c.setAttr(k.ANIMATING, !0);
                        var a = c.getItemOffset(c.getAttr(k.FIRST_VISIBLE_ITEM)), e = a - b.touchDeltaX, d = c.getAttr(k.CIRCULAR), f = c.getAttr(k.PAGE_NUMBER), g = c.getAttr(k.TOTAL_PAGES);
                        if (b.ended) {
                            var a = {
                                easingFunction: c.getAttr(k.TOUCH_EASING),
                                animationSpeed: .95 * h.viewport().width, silent: !0
                            }, e = b.touchDeltaX, l = Math.abs(e) < .4 * c.getViewportWidth();
                            !d && (0 > e && g === f || 0 < e && 1 === f) || l ? c.gotoPage(f, a) : 0 > e ? c.gotoNextPage(a) : c.gotoPrevPage(a)
                        } else!d && (d = c.getAttr(k.SPRINGINESS), 0 > e && 0 < b.touchDeltaX || f === g && 0 > b.touchDeltaX) && (f = Math.pow(Math.abs(b.touchDeltaX), d), e = 0 >= e ? -1 * f : a + f), c.gotoPixel(e, {
                            easingFunction: c.getAttr(k.TOUCH_EASING),
                            animationDuration: 0,
                            silent: !0
                        })
                    }
                }, init: function (c) {
                    var b = c.getAttr(k.ANIMATION_SPEED);
                    h.isFiniteNumber(b) || c.setAttr(k.ANIMATION_SPEED,
                        d);
                    void 0 === c.getAttr(k.WRAP_EASING) && c.setAttr(k.WRAP_EASING, "linear");
                    g(c);
                    c.onChange(k.FETCHED_ITEMS, function (a, b) {
                        f(c, a, b)
                    });
                    c.onChange(k.SET_SIZE, function (a, b) {
                        a > b && g(c)
                    })
                }
            }
        });
        n.when("A", "a-carousel-utils", "a-carousel-circular-utils", "a-carousel-constants").register("a-carousel-transition-slidecircular", function (h, m, l, k) {
            function g(a) {
                var b = a.dom.$carousel.children("li").length, e = a.getAttr(k.SET_SIZE), d = e - b, q = c(a, b);
                0 < d && (b += 1, d = h.map(h.range(b, b + d), function (b) {
                    return a.getEmptyCard(b,
                        e)
                }), q.after(d.join("")), a.measure("items"))
            }

            function f(e, c) {
                var q = e.getAttr(k.SET_SIZE);
                if (2 < e.getAttr(k.SET_SIZE)) {
                    var f = a(e, e.getAttr(k.FIRST_VISIBLE_ITEM)), g = Math.round(e.getAttr(k.SET_SIZE) / 2), q = d(g, f, q);
                    0 !== q.quantity && (x(e, q.direction, q.quantity), f = q.direction === u.CLOCKWISE ? f - q.quantity : f + q.quantity, c.gotoPixel(e, b(e, f), {animationDuration: 0}))
                }
            }

            function d(a, b, e) {
                var c = {};
                a === b ? a = b = 0 : a > b ? (b = a - b, a = e - b) : (a = b - a, b = e - a);
                c.direction = a <= b ? u.CLOCKWISE : u.COUNTER_CLOCKWISE;
                c.quantity = Math.min(a, b);
                return c
            }

            function c(b, e) {
                return b.dom.$carousel.children("li").eq(a(b, e) - 1)
            }

            function b(a, b) {
                var e = Math.floor(a.getAttr(k.PEEK_WIDTH) || 0);
                return a.getItemOffset(b) - e
            }

            function a(a, b) {
                b = b || 1;
                var e = a.getAttr("transitionSlideCircularFirstCardIndex"), c = a.getAttr(k.SET_SIZE);
                return l.relativeIndexFromIndex(b, e, c)
            }

            function e(b, d, q) {
                if (b.getAttr(k.ANIMATING))b.once(k.ANIMATING, function () {
                    e(b, d, q)
                }); else {
                    var f = b.getDimensions().items, g = Math.min(d.length, b.getAttr(k.SET_SIZE));
                    if (!q || d.length >= q.length)b.setAttr(k.LOADING,
                        !0), h.each(h.range(g), function (e) {
                        var g = e + 1, t = d[e], k = c(b, g), l = t && !(!0 === t || !0 === t.content);
                        t && !h.equals(t, q[e]) && k.length && l && (g = a(b, g), f[g] = {
                            width: k.outerWidth(),
                            outerWidth: k.outerWidth(!0),
                            height: k.outerHeight(),
                            outerHeight: k.outerHeight(!0)
                        }, m.addElementToDom(k, m.getElementFromItem(t)), d[e] = m.clearElementFromItem(t))
                    }), b.setAttr(k.LOADING, !1);
                    b.setAttr(k.FETCHED_ITEMS, d);
                    b.updateDimensionsCache({items: f})
                }
            }

            function q(a) {
                var b = {reached: !1, left: !1, right: !1};
                if (!(2 < a.getAttr(k.SET_SIZE))) {
                    var e = a.getAttr(k.PAGE_NUMBER);
                    a = a.getAttr(k.SET_SIZE);
                    1 === e && (b.reached = !0, b.left = !0);
                    e === a && (b.reached = !0, b.right = !0)
                }
                return b
            }

            function t(a, b, e) {
                var c = q(a), d = a.getAttr(k.PAGE_NUMBER);
                c.reached && c[b] ? a.gotoPage(d) : ("right" === b ? a.gotoNextPage : a.gotoPrevPage).call(a, e)
            }

            function x(a, b, e) {
                var c = a.getAttr("transitionSlideCircularFirstCardIndex") || 1, d = a.getAttr(k.SET_SIZE), q = a.dom.$carousel.children("li"), f = a.dom.$carousel;
                b === u.CLOCKWISE ? (l.rotateCW(f, q, e), c = l.firstCardIndexAfterRotate(e, c, d)) : (l.rotateCCW(a.dom.$carousel, a.dom.$carousel.children("li"),
                    e), c = l.firstCardIndexAfterRotate(-1 * e, c, d));
                a.setAttr("transitionSlideCircularFirstCardIndex", c);
                e = e || 1;
                b = b || u.CLOCKWISE;
                c = a.getDimensions().items;
                c = b === u.CLOCKWISE ? l.rotateArrayCW(c, e) : l.rotateArrayCCW(c, e);
                a.updateDimensionsCache({items: c})
            }

            function y(e, c, d, q, g) {
                var t = g.callback, l = a(e, e.getAttr(k.FIRST_VISIBLE_ITEM)), m = e.getAttr(k.CURRENT_PIXEL) - b(e, l);
                h.sequence(function (a) {
                    x(e, c, q);
                    a()
                }, function (a) {
                    d.gotoPixel(e, b(e, c === u.CLOCKWISE ? l - q : l + q) + m, {animationDuration: 0, callback: a})
                }, function (a) {
                    g.callback =
                        a;
                    d.gotoPixel(e, b(e, l), g)
                }, function (a) {
                    f(e, d);
                    a()
                }, function (a) {
                    t && t();
                    a()
                })()
            }

            var u = {CLOCKWISE: 1, COUNTER_CLOCKWISE: -1}, w = h.capabilities.touch ? 2E3 : 3E3, A = {};
            A[k.HIDE_OFF_SCREEN] = !1;
            A[k.ANIMATION_SPEED] = function (a) {
                return function (b) {
                    return h.isFiniteNumber(b) ? b : a
                }
            }(w);
            A.transitionSlideCircularFirstCardIndex = 1;
            return {
                initAttrs: A, init: function (a) {
                    g(a);
                    a.onChange(k.FETCHED_ITEMS, function (b, c) {
                        e(a, b, c);
                        a.strategies.display.repaint(a)
                    });
                    a.onChange(k.SET_SIZE, function (b, e) {
                        b > e && g(a)
                    });
                    a.onChange(k.PEEK_WIDTH,
                        function (b, e) {
                            if (b !== e) {
                                var c = a.getAttr(k.FIRST_VISIBLE_ITEM);
                                a.gotoIndex(c)
                            }
                        })
                }, afterInit: function (a) {
                    f(a, this);
                    a.strategies.display.repaint(a);
                    a.gotoPage(a.getAttr(k.PAGE_NUMBER))
                }, gotoPage: function (a, b, e) {
                    e = e || {};
                    var c = a.getAttr(k.TOTAL_PAGES);
                    0 < b && b <= c && (a.setAttr(k.PAGE_NUMBER, b), this.gotoIndex(a, a.getAttr(k.PAGE_SIZE) * (b - 1) + 1, e))
                }, gotoIndex: function (e, c, q) {
                    var f = e.getAttr(k.SET_SIZE), g = a(e, e.getAttr(k.FIRST_VISIBLE_ITEM)), h = a(e, c);
                    g === h ? this.gotoPixel(e, b(e, g), q) : (2 < e.getAttr(k.SET_SIZE) ? (f =
                        d(g, h, f), q.startover && (5 < f.quantity ? q.animationDuration = 1250 : (delete q.animationDuration, q.animationSpeed = 5 * e.getDimensions().viewport.width)), y(e, f.direction, this, f.quantity, q)) : this.gotoPixel(e, b(e, c), q), e.setAttr(k.FIRST_VISIBLE_ITEM, c))
                }, gotoPixel: function (a, b, e) {
                    var c = a.getAttr(k.CURRENT_PIXEL);
                    if (b !== c) {
                        h.isFiniteNumber(b) || n.error("Target pixel is not a finite number", "a-carousel-transition-slide-circular", "gotoPixel");
                        e = e || {};
                        var d = e.easingFunction || "ease-out", q = e.callback, f;
                        e.animationDuration !==
                        v ? f = e.animationDuration : (f = h.isFiniteNumber(e.animationSpeed) ? e.animationSpeed : a.getAttr(k.ANIMATION_SPEED), c = Math.abs(b - c), f = 0 === f ? 0 : Math.floor(c / f * 1E3));
                        0 < f && (!e.silent && a.setAttr(k.ANIMATING, !0), q = function () {
                            e.callback && e.callback();
                            a.setAttr(k.ANIMATING, h.isAnimated(a.dom.$carousel), e.silent)
                        });
                        a.setAttr(k.CURRENT_PIXEL, b);
                        h.animate(a.dom.$carousel, {left: -1 * b}, f, d, q)
                    }
                }, gotoNextPage: function (a, b) {
                    var e = a.getAttr(k.PAGE_NUMBER), e = e === a.getAttr(k.TOTAL_PAGES) ? 1 : e + 1;
                    this.gotoPage(a, e, b)
                }, gotoPrevPage: function (a,
                                           b) {
                    var e = a.getAttr(k.PAGE_NUMBER), e = 1 === e ? a.getAttr(k.TOTAL_PAGES) : e - 1;
                    this.gotoPage(a, e, b)
                }, onSwipe: function (e, c) {
                    var d = e.getAttr(k.CURRENT_PIXEL), q = e.getAttr(k.PAGE_SIZE), f = a(e, e.getAttr(k.FIRST_VISIBLE_ITEM)), g = 0 > c.velocityX, q = b(e, g ? f + q : f - q), d = Math.abs(1E3 * (g ? d - q : d + q) / c.velocityX), g = 1.2 * h.viewport().width;
                    t(e, 0 > c.touchDeltaX ? "right" : "left", {
                        animationDuration: Math.min(Math.max(d, 300), g),
                        easingFunction: e.getAttr(k.TOUCH_EASING)
                    })
                }, onPan: function (e, c) {
                    e.setAttr(k.ANIMATING, !0);
                    var d = e.getAttr(k.PAGE_NUMBER),
                        f = a(e, e.getAttr(k.FIRST_VISIBLE_ITEM)), f = b(e, f), f = q(e).reached ? f - .4 * c.touchDeltaX : f - c.touchDeltaX;
                    c.ended ? (f = {
                        easingFunction: e.getAttr(k.TOUCH_EASING),
                        animationSpeed: .95 * h.viewport().width,
                        silent: !0
                    }, Math.abs(c.touchDeltaX) >= .4 * e.getViewportWidth() ? t(e, 0 > c.touchDeltaX ? "right" : "left", f) : e.gotoPage(d, f)) : e.gotoPixel(f, {
                        easingFunction: e.getAttr(k.TOUCH_EASING),
                        animationDuration: 0,
                        silent: !0
                    })
                }
            }
        });
        n.when("A", "a-carousel-utils", "a-carousel-constants").register("a-carousel-transition-freescroll",
            function (h, m, l) {
                function k(b) {
                    a[b.__id] || (a[b.__id] = new e(b));
                    return a[b.__id]
                }

                function g(a) {
                    for (var b = a.countItems(), e = [], c = 0; c < b; c++)e.push(!0);
                    a.setAttr(l.FETCHED_ITEMS, e)
                }

                function f(a) {
                    var b = a.countItems(), e = a.getAttr(l.SET_SIZE), c = [], d;
                    if (e > b) {
                        for (var q = 0; q < e - b; q++)d = b + q + 1, c.push(a.getEmptyCard(d, e));
                        a.appendItems(c)
                    }
                }

                function d(a, b, e) {
                    if (!e || b.length >= e.length)for (var c = a.getItems(), d = b.length, q; d--;)(q = b[d]) && !h.equals(q, e[d]) && !0 !== q && !0 !== q.content && a.hasItem(c, d) && (b[d] = a.insertFetchedItem(q,
                        c, d));
                    a.setAttr(l.FETCHED_ITEMS, b)
                }

                function c(a) {
                    a.hasEmptyCard() && a.attachScrollListener(function () {
                        a.throttle("detect", b)
                    })
                }

                function b(a) {
                    var e = a.getAttr("loading_threshold_pixels"), c = a.measureWidth(), d = a.getFirstEmptyDetails();
                    -1 !== d.index && d.left < c + e ? a.wantNext(d.index, a.getAttr("next_request_size")) : (a.previousCardLeft && a.previousCardLeft !== d.left && a.throttle("detect", b), a.previousCardLeft = d.left)
                }

                var a = {}, e = function (a) {
                    this.carousel = a
                };
                h.extend(e.prototype, {
                    setAttr: function (a, b) {
                        return this.carousel.setAttr(a,
                            b)
                    }, getAttr: function (a) {
                        return this.carousel.getAttr(a)
                    }, onChange: function (a, b) {
                        this.carousel.onChange(a, b)
                    }, getItems: function () {
                        return this.carousel.dom.$carousel.children("li")
                    }, countItems: function () {
                        return this.getItems().length
                    }, showItems: function () {
                        return this.getItems().css("visibility", "").attr("aria-hidden", "false")
                    }, getEmptyCard: function (a, b) {
                        return this.carousel.getEmptyCard(a, b)
                    }, getEmptyCards: function () {
                        return this.carousel.dom.$carousel.children(".a-carousel-card-empty")
                    }, hasEmptyCard: function () {
                        return 0 <
                            this.getEmptyCards().length
                    }, getFirstEmptyDetails: function () {
                        var a = this.getEmptyCards();
                        return 0 < a.length ? (a = a.first(), {index: a.index(), left: a.position().left}) : {
                            index: -1,
                            left: -1
                        }
                    }, appendItems: function (a) {
                        this.carousel.dom.$carousel.append(a.join(""))
                    }, hasItem: function (a, b) {
                        return 0 < a.eq(b).length
                    }, insertFetchedItem: function (a, b, e) {
                        m.addElementToDom(b.eq(e), m.getElementFromItem(a));
                        return m.clearElementFromItem(a)
                    }, attachScrollListener: function (a) {
                        this.carousel.dom.$carousel.bind(h.action.move + ".a-carousel-freeScroll scroll.a-carousel-freeScroll",
                            a)
                    }, detachScrollListener: function (a) {
                        this.carousel.dom.$carousel.unbind(".a-carousel-freeScroll")
                    }, measureWidth: function () {
                        return this.carousel.dom.$carousel.outerWidth()
                    }, wantNext: function (a, b) {
                        this.carousel.strategies.ajax.want(this.carousel, a, b)
                    }, throttle: function (a, b) {
                        var e = this;
                        clearTimeout(e[a]);
                        e[a] = setTimeout(function () {
                            b(e)
                        }, 100)
                    }
                });
                var q = {ajaxLock: !0};
                q[l.NO_TRANSITION] = !0;
                q[l.HIDE_OFF_SCREEN] = !1;
                q[l.AUTO_ADJUST_HEIGHT] = !1;
                q.next_request_size = 10;
                q.loading_threshold_pixels = 400;
                return {
                    gotoIndex: h.constants.NOOP,
                    gotoNextpage: h.constants.NOOP,
                    gotoPrevPage: h.constants.NOOP,
                    gotoPage: h.constants.NOOP,
                    initAttrs: q,
                    init: function (a) {
                        var e = k(a);
                        e.showItems();
                        g(e);
                        f(e);
                        c(e);
                        e.onChange(l.FETCHED_ITEMS, function (a, c) {
                            b(e);
                            d(e, a, c);
                            e.hasEmptyCard() || e.detachScrollListener()
                        });
                        h.on.resize(function () {
                            b(e)
                        })
                    },
                    afterInit: function (a) {
                        var e = k(a);
                        h.delay(function () {
                            e.setAttr("ajaxLock", !1);
                            b(e)
                        })
                    },
                    prepareFetchedItems: g,
                    addEmptyCards: f,
                    handleItemChanges: d,
                    detectEmptyCardsLoadingThreshold: b,
                    ATTR: {
                        NEXT_REQUEST_SIZE: "next_request_size",
                        LOADING_THRESHOLD_PIXELS: "loading_threshold_pixels"
                    }
                }
            });
        n.when("A", "jQuery", "a-carousel-transition-slide", "a-carousel-transition-swap", "a-carousel-transition-freescroll", "a-carousel-transition-slidecircular", "a-carousel-constants").register("a-carousel-strategies-transition", function (h, m, l, k, g, f, d) {
            m = {};
            m[d.NO_TRANSITION] = !0;
            m[d.HIDE_OFF_SCREEN] = !1;
            m[d.AUTO_ADJUST_HEIGHT] = !1;
            return {
                slideHorizontal: l, swap: k, freeScroll: g, slideCircular: f, none: {
                    gotoIndex: h.constants.NOOP, gotoNextPage: h.constants.NOOP,
                    gotoPrevPage: h.constants.NOOP, gotoPage: h.constants.NOOP, initAttrs: m, init: function (c) {
                        c.dom.$carousel.children("li").css("visibility", "").attr("aria-hidden", "false")
                    }
                }, "default": "slideHorizontal"
            }
        });
        n.when("A").register("a-carousel-ajax-standard", function (h) {
            function m(g, f, d) {
                g.triggerEvent("beforeAjax", {url: f, params: d});
                h.get(f, {
                    cache: !1, success: function (c) {
                        c = h.isArray(c) ? c : c !== k && null !== c && !h.objectIsEmpty(c) && c.hasOwnProperty("data") && h.isArray(c.data) ? c.data : null;
                        if (null === c)n.error("Invalid JSON returned to carousel from " +
                            f + " - see http://tiny/c1mr5h0u for details.", "a-carousel-ajax-standard", "sendRequest"); else {
                            d.needSetSize && (c && c.length || n.error("Carousel requires a set_size and none was returned by the fallback AJAX request at: " + f, "a-carousel-ajax-standard", "sendRequest"), g.setAttr("set_size", c[0].setSize ? c[0].setSize : c.length));
                            for (var b = g.getAttr("fetchedItems"), a; (a = c.pop()) !== k;)a && (a.content || "" === a.content ? a.content = h.trim(a.content) : a = h.trim(a)), b[d.offset + c.length] = a;
                            d.needSetSize && g.init();
                            g.setAttr("fetchedItems",
                                b);
                            g.setAttr("ajaxLock", !1);
                            d.needSetSize && g.getAttr("pageSize") >= b.length && g.strategies.ajax.wantCurrentPage(g);
                            g.triggerEvent("ajaxSuccess", {url: f, params: d})
                        }
                    }, params: d
                })
            }

            function l(g) {
                var f = g.getAttr("requestTimer");
                f && (clearTimeout(f), g.setAttr("requestTimer", null))
            }

            var k;
            return {
                getItems: function (g, f, d) {
                    var c = g.getAttr("ajax");
                    g.setAttr("requestTimer", h.delay(m, c.fetch_delay, g, f, d))
                }, wantNextPage: function (g) {
                    l(g);
                    if (g.getAttr("ajax").prefetch_next_page) {
                        var f = g.getAttr("pageSize"), d = 2 * f;
                        g.getAttr("show_partial_next") &&
                        d++;
                        this.want(g, (g.getAttr("pageNumber") - 1) * f, d)
                    } else this.wantCurrentPage(g)
                }, wantPrevPage: function (g) {
                    l(g);
                    if (g.getAttr("ajax").prefetch_next_page) {
                        var f = g.getAttr("pageSize"), d = 2 * f;
                        g.getAttr("show_partial_next") && d++;
                        this.want(g, (g.getAttr("pageNumber") - 2) * f, d)
                    } else this.wantCurrentPage(g)
                }, wantCurrentPage: function (g) {
                    l(g);
                    var f = g.getAttr("pageSize"), d = g.getAttr("show_partial_next") ? f + 1 : f;
                    this.want(g, (g.getAttr("pageNumber") - 1) * f, d)
                }, want: function (g, f, d) {
                    if (!g.getAttr("ajaxLock")) {
                        l(g);
                        var c = g.getAttr("ajax"),
                            b = g.getAttr("set_size");
                        if (c.url) {
                            var a = g.getAttr("fetchedItems"), e = c.id_list;
                            e || (e = []);
                            var q = -1 < f ? f : 0;
                            f = f + d - 1;
                            var h = c.params || {}, k = [], m = [];
                            0 === b && (e.length && (b = e), h.needSetSize = "true", g.setAttr("ajaxLock", !0));
                            for (-1 === d && b && (f = b); q <= f && q < b;)a[q] || ((d = e[q]) && k.push(d), m.push(q), a[q] = !1), q++;
                            g.setAttr("fetchedItems", a, {silent: !0});
                            h.count = m.length;
                            h.offset = m[0] || 0;
                            0 < k.length && (h[c.id_param_name] = k.join(","));
                            (0 < m.length || h.needSetSize) && this.getItems(g, c.url, h)
                        }
                    }
                }, init: function (g) {
                    var f = g.getAttr("ajax");
                    h.isFiniteNumber(f.fetch_delay) || (f.fetch_delay = 500);
                    f.id_param_name = f.id_param_name || "ids";
                    f.prefetch_next_page = f.prefetch_next_page === k ? !0 : !!f.prefetch_next_page;
                    g.setAttr("ajax", f);
                    g.getAttr("set_size") || this.want(g, 0, -1)
                }, afterInit: function (g) {
                    g.strategies.ajax.wantCurrentPage(g);
                    g.onChange("pageNumber", function (f, d) {
                        f > d ? g.strategies.ajax.wantNextPage(g) : g.strategies.ajax.wantPrevPage(g)
                    })
                }
            }
        });
        n.when("A", "a-carousel-ajax-standard").register("a-carousel-strategies-ajax", function (h,
                                                                                                 m) {
            return {
                standard: m,
                none: {
                    wantNextPage: h.constants.NOOP,
                    wantPrevPage: h.constants.NOOP,
                    wantCurrentPage: h.constants.NOOP,
                    want: h.constants.NOOP,
                    init: h.constants.NOOP
                },
                "default": "standard"
            }
        });
        n.when("A", "a-carousel-constants").register("a-carousel-accessibility-standard-desktop", function (h, m) {
            function l(b) {
                var a = b.dom.$carousel, e = a.children("li"), c = b.getAttr(m.PAGE_SIZE), d = b.getAttr(m.FIRST_VISIBLE_ITEM) - 1;
                return b.getAttr(m.NO_TRANSITION) ? e : e.length <= c ? a.children("li:not(:empty), li.a-carousel-card-empty") :
                    e.slice(d, d + c)
            }

            function k(b, a, e, c) {
                var d = function () {
                    var e = l(b);
                    (a ? e.first() : e.last()).find("a, button, input, select, textarea, [tabindex]:not([tabindex='-1'])").not(":disabled").first().focus();
                    h.delay(function () {
                        var a = b.dom.$container;
                        a.find(".a-carousel-accessibility-page-info").html(a.find(".a-carousel-page-count").text())
                    }, b.getAttr(m.PAGE_SIZE) * b.getAttr(m.DELAY_TIME) + 50)
                };
                if (0 === e || 0 === c)h.delay(d, 0); else b.once(m.ANIMATING, function (a) {
                    a || d()
                })
            }

            function g(b) {
                var a = b.dom.$carousel.children("li"),
                    e = b.getAttr(m.TRANSITION_STRATEGY), d = b.getAttr(m.SET_SIZE), f = d ? {"aria-setsize": d} : {};
                if ("swap" === e) {
                    var g = b.getAttr(m.FIRST_VISIBLE_ITEM);
                    a.each(function (a) {
                        var b = c(this);
                        g + a > d ? (b.removeAttr("aria-setsize"), b.removeAttr("aria-posinset")) : (f["aria-posinset"] = g + a, b.attr(f))
                    })
                } else a.each(function (a) {
                    f["aria-posinset"] = a + 1;
                    c(this).attr(f)
                })
            }

            function f(b) {
                b.getAttr(m.TRANSITION_STRATEGY);
                if (!b.getAttr(m.NO_TRANSITION)) {
                    var a = b.dom.$carousel.children("li");
                    b = l(b);
                    a = a.not(b);
                    b.attr("aria-hidden", !1);
                    a.attr("aria-hidden",
                        !0)
                }
            }

            function d(b, a) {
                if (!b.getAttr(m.CIRCULAR)) {
                    var e = b.dom.$container;
                    e.find(".a-carousel-goto-prevpage").attr("aria-disabled", 1 === a ? "true" : "false");
                    e.find(".a-carousel-goto-nextpage").attr("aria-disabled", a === b.getAttr(m.TOTAL_PAGES) ? "true" : "false")
                }
            }

            var c = h.$;
            return {
                init: function (b) {
                    var a = b.getAttr(m.NAME);
                    g(b);
                    f(b);
                    d(b, 1);
                    h.on("a:carousel" + (a ? ":" + name : "") + ":repaint", function () {
                        f(b)
                    });
                    b.onChange(m.SET_SIZE, function (a, c) {
                        g(b)
                    });
                    b.onChange(m.LOADING, function (a) {
                        b.getAttr(m.ANIMATING) || b.dom.$carousel.attr("aria-busy",
                            (!!a).toString())
                    });
                    b.onChange(m.ANIMATING, function (a) {
                        b.getAttr(m.LOADING) || b.dom.$carousel.attr("aria-busy", (!!a).toString());
                        !a && b.getAttr(m.SET_SIZE) > b.getAttr(m.PAGE_SIZE) && (a = b.getAttr(m.TRANSITION_STRATEGY), f(b), "slide" !== a && g(b))
                    });
                    b.onChange(m.PAGE_NUMBER, function (a) {
                        d(b, a)
                    })
                }, gotoPage: function (b, a, e) {
                    b.getAttr(m.NO_TRANSITION) || k(b, !0, a, e)
                }, nextPage: function (b, a, e) {
                    b.getAttr(m.NO_TRANSITION) || k(b, !0, a, e)
                }, prevPage: function (b, a, e) {
                    b.getAttr(m.NO_TRANSITION) || k(b, !1, a, e)
                }
            }
        });
        n.when("A", "a-carousel-constants").register("a-carousel-accessibility-standard-mobile", function (h, m) {
            function l(f) {
                var d = f.dom.$carousel;
                f = d.children(".a-carousel-card-empty");
                var d = d.children("li").not(f), c = d.length, b = c ? {"aria-setsize": c} : {};
                f.attr("aria-hidden", "true").removeAttr("aria-setsize").removeAttr("aria-posinset");
                d.each(function (a) {
                    b["aria-posinset"] = a + 1;
                    b["aria-hidden"] = "false";
                    k(this).attr(b)
                })
            }

            var k = h.$, g = h.constants.NOOP;
            return {
                init: function (f) {
                    l(f);
                    f.onChange(m.SET_SIZE, function () {
                        l(f)
                    });
                    f.onChange(m.LOADING, function (d) {
                        f.dom.$carousel.attr("aria-busy", (!!d).toString());
                        d || l(f)
                    })
                }, gotoPage: g, nextPage: g, prevPage: g
            }
        });
        n.when("A", "a-carousel-accessibility-standard-desktop", "a-carousel-accessibility-standard-mobile").register("a-carousel-strategies-accessibility", function (h, m, l) {
            return {
                standardDesktop: m,
                standardMobile: l,
                none: {
                    init: h.constants.NOOP,
                    gotoPage: h.constants.NOOP,
                    nextPage: h.constants.NOOP,
                    prevPage: h.constants.NOOP
                },
                "default": h.capabilities.mobile || h.capabilities.tablet ?
                    "standardMobile" : "standardDesktop"
            }
        });
        n.when("a-carousel-strategies-display", "a-carousel-strategies-transition", "a-carousel-strategies-ajax", "a-carousel-strategies-accessibility").register("a-carousel-strategies", function (h, m, l, k) {
            return {display: h, transition: m, ajax: l, accessibility: k}
        });
        n.when("A", "jQuery", "a-timing-analytics", "a-carousel-classes", "a-carousel-strategies", "a-carousel-constants").register("a-carousel-framework", function (h, m, l, k, g, f) {
            function d(a, b, e, d) {
                b = new b(a,
                    e, d);
                b.__id = ++D;
                a.data("a-carousel", b);
                a.removeClass("a-carousel-static");
                h.onScreen(a) ? h.delay(c, 10, b) : w.push(b);
                d.name && (z[d.name] = b);
                return b
            }

            function c(a) {
                a.init();
                u.push(a);
                a.__initialized = !0;
                a.dom.$container.addClass("a-carousel-initialized");
                var b = a.getAttr("name");
                b && E[b] && h.each(E[b], function (b) {
                    b(a)
                })
            }

            function b(a, b) {
                var e = b[a + "Strategy"];
                e || (e = g[a]["default"]);
                return g[a][e]
            }

            function a(a) {
                for (var b = a.length, e; b--;)e = a[b], e.dom.$container.length && C.find(e.dom.$container).length || ((e = e.getAttr("name")) && delete z[e], a.splice(b, 1))
            }

            function e() {
                a(w);
                a(u)
            }

            function q(a) {
                var e = a.data("a-carousel-options") || {};
                e.displayStrategy = a.data("a-display-strategy");
                e.transitionStrategy = a.data("a-transition-strategy");
                e.ajaxStrategy = a.data("a-ajax-strategy");
                e.accessibilityStrategy = a.data("a-accessibility-strategy");
                e.carouselClass = a.data("a-class");
                a = b("display", e);
                var c = b("transition", e), d = b("ajax", e), q = b("accessibility", e), f = e.carouselClass;
                f || (f = k["default"]);
                f = k[f];
                if (f !== y && a !== y && c !== y && d !== y && q !== y)return {
                    carouselClass: f,
                    strategies: {display: a, transition: c, ajax: d, accessibility: q}, opts: e
                }
            }

            function t() {
                m(".a-carousel-static").each(function () {
                    var a = m(this), b = q(a);
                    b && d(a, b.carouselClass, b.strategies, b.opts)
                })
            }

            function x() {
                for (var a = w.length; a--;) {
                    var b = w[a];
                    h.onScreen(b.dom.$container) && (w.splice(a, 1), c(b))
                }
            }

            var y, u = [], w = [], A = !1, z = {}, C = m(document), E = {}, D = 0;
            h.on("resize orientationchange", function (a, b) {
                e();
                (b.height || b.width) && h.delay(function () {
                    h.each(u, function (a) {
                        a.resize()
                    })
                }, h.capabilities.mobile || h.capabilities.tablet ?
                    100 : 0)
            });
            h.on("a:popover:afterSlideOut", function () {
                h.each(u, function (a) {
                    a.resize()
                })
            });
            h.on("a:carousel:change:name", function (a) {
                a.newValue && (z[a.newValue] = a.carousel);
                a.oldValue && delete z[a.oldValue]
            });
            h.on(f.INIT_EVENTS, function () {
                t();
                h.once(function () {
                    l.stopWidgetLogging("carousel")
                })()
            });
            h.on("a:pageUpdate", e);
            h.on("scroll", function () {
                t();
                x()
            });
            h.declarative("a-tabs", "click", function (a) {
                h.delay(function () {
                    x();
                    h.each(u, function (a) {
                        a.getAttr("isInTab") && a.resize()
                    })
                }, 50)
            });
            h.on("a:popover:afterShow",
                function () {
                    h.delay(x, 50)
                });
            h.on("a:popover:ajaxContentLoaded", function () {
                h.delay(function () {
                    e();
                    t()
                }, 50)
            });
            h.on.ready(function () {
                A = !0
            });
            f = {
                getCarousel: function (a) {
                    a.jquery || (a = m(a));
                    var b = a.closest(".a-carousel-container").data("a-carousel");
                    if (!b) {
                        var e = q(a);
                        e && (b = d(a, e.carouselClass, e.strategies, e.opts))
                    }
                    return b
                }, getCarouselByName: function (a) {
                    return z[a]
                }, createAll: function () {
                    e();
                    t()
                }, initializeAll: function () {
                    e();
                    x()
                }, kill: function (a) {
                    a.jquery || (a = m(a));
                    if (a.length && (a = a.closest(".a-carousel-container"),
                            a.length)) {
                        var b = a.data("a-carousel");
                        if (b) {
                            var e = h.indexOfArray(u, b);
                            -1 < e ? (u[e].name && delete z[u[e].name], u.splice(e, 1)) : (e = h.indexOfArray(w, b), -1 < e && (w[e].name && delete z[w[e].name], w.splice(e, 1)))
                        }
                        a.remove()
                    }
                }, registerStrategy: function (a, b, e) {
                    g[a] || (g.type = {});
                    g[a][b] && n.error("Attempted to register a " + a + " strategy which already exists: " + b, "a-carousel-framework", "registerStrategy");
                    g[a][b] = e;
                    A && t()
                }, registerCarouselClass: function (a, b) {
                    k[a] && n.error("Attempted to register a carousel class which already exists: " +
                        a, "a-carousel-framework", "registerCarouselClass");
                    m.isFunction(b) || n.error("Attempted to register carousel class " + a + " without a constructor function.", "a-carousel-framework", "registerCarouselClass");
                    k[a] = b;
                    A && t()
                }, getAllCarousels: function () {
                    return u.concat(w)
                }, onInit: function (a, b) {
                    if (a && (E[a] || (E[a] = []), m.isFunction(b))) {
                        E[a].push(b);
                        var e = z[a];
                        e && e.__initialized && b(e)
                    }
                }
            };
            Object.freeze !== y && Object.freeze(f);
            return f
        })
    })()
})(function () {
    var n = window.AmazonUIPageJS || window.P, r = n._namespace || n.attributeErrors;
    return r ? r("AmazonUICarousel") : n
}(), window);
(function (n, r, v) {
    n.guardFatal(function () {
    })()
})(function () {
    var n = window.AmazonUIPageJS || window.P, r = n._namespace || n.attributeErrors;
    return r ? r("AmazonUIBottomSheet") : n
}(), window);