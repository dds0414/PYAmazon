(function (a, d, w) {
    function p(a) {
        for (var b = {}, c, d, f = 0; f < a.length; f++)d = a[f], c = d.r + d.s + d.m, d.c && (b[c] || (b[c] = []), b[c].push(a[f]));
        return b
    }

    function n(a) {
        for (var b = 1; b < arguments.length; b++) {
            var c = arguments[b];
            try {
                if (c.isSupported)return c.send(a)
            } catch (d) {
            }
        }
    }

    function k() {
        for (var a = 0; a < B.length; a++)B[a]();
        E.length && n(p(E.splice(0, E.length)), O, L, I);
        y = M = 0
    }

    function l(c, f, h) {
        h = h || {};
        0 === h.bf && b.isBF || (c = {
            r: h.r || b.rid,
            s: h.s || a.ue_sid,
            m: h.m || a.ue_mid,
            mkt: h.mkt || a.ue_mkt,
            sn: h.sn || a.ue_sn,
            c: f,
            d: c,
            t: h.t || b.d(),
            cs: h.c && a.ue_qsl
        }, h.b ? n(p([c]), O, I) : h.nb ? n(p([c]), O, L, I) : h.img || F[f] ? n(p([c]), I) : h.n ? (E.push(c), 0 === N ? k() : y || (y = d.setTimeout(k, N))) : (E.push(c), M || (M = d.setTimeout(k, H))))
    }

    function u(a, b, c) {
        K++;
        K == x ? l({
            m: "Max number of Forester Logs exceeded",
            f: "forester-client.js",
            logLevel: "ERROR"
        }, d.ue_err_chan || "jserr") : K < x && l(a, b, c)
    }

    function m() {
        if (!C) {
            for (var a = 0; a < f.length; a++)f[a]();
            for (a = 0; a < B.length; a++)B[a]();
            n(p(E.splice(0, E.length)), O, I);
            C = !0
        }
    }

    var h = {};
    (function () {
        function a(b) {
            return 10 > b ? "0" + b : b
        }

        function b(a) {
            d.lastIndex =
                0;
            return d.test(a) ? '"' + a.replace(d, function (a) {
                var b = k[a];
                return "string" === typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + a + '"'
        }

        function c(a, d) {
            var g, h, k, v, m = f, l, D = d[a];
            D && "object" === typeof D && "function" === typeof D.toJSON && (D = D.toJSON(a));
            "function" === typeof q && (D = q.call(d, a, D));
            switch (typeof D) {
                case "string":
                    return b(D);
                case "number":
                    return isFinite(D) ? String(D) : "null";
                case "boolean":
                case "null":
                    return String(D);
                case "object":
                    if (!D)return "null";
                    f += e;
                    l = [];
                    if ("[object Array]" ===
                        Object.prototype.toString.apply(D)) {
                        v = D.length;
                        for (g = 0; g < v; g += 1)l[g] = c(g, D) || "null";
                        k = 0 === l.length ? "[]" : f ? "[\n" + f + l.join(",\n" + f) + "\n" + m + "]" : "[" + l.join(",") + "]";
                        f = m;
                        return k
                    }
                    if (q && "object" === typeof q)for (v = q.length, g = 0; g < v; g += 1)"string" === typeof q[g] && (h = q[g], (k = c(h, D)) && l.push(b(h) + (f ? ": " : ":") + k)); else for (h in D)Object.prototype.hasOwnProperty.call(D, h) && (k = c(h, D)) && l.push(b(h) + (f ? ": " : ":") + k);
                    k = 0 === l.length ? "{}" : f ? "{\n" + f + l.join(",\n" + f) + "\n" + m + "}" : "{" + l.join(",") + "}";
                    f = m;
                    return k
            }
        }

        "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function (b) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + a(this.getUTCMonth() + 1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (a) {
            return this.valueOf()
        });
        var d = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            f, e, k = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"}, q;
        "function" !== typeof h.stringify && (h.stringify = function (a, b, d) {
            var g;
            e = f = "";
            if ("number" === typeof d)for (g = 0; g < d; g += 1)e += " "; else"string" === typeof d && (e = d);
            if ((q = b) && "function" !== typeof b && ("object" !== typeof b || "number" !== typeof b.length))throw Error("JSON.stringify");
            return c("", {"": a})
        })
    })();
    var e = function () {
        function a(b, c) {
            if (null == b)return c.push("!n");
            if ("number" === typeof b)return c.push("!" + b);
            if ("string" === typeof b)return "\\" == b[b.length - 1] ? c.push("'" + b.replace(/'/g, "\\'") + "u005C'") : c.push("'" + b.replace(/'/g, "\\'") + "'");
            if ("boolean" === typeof b)return c.push(b ? "!t" : "!f");
            if (b instanceof Array) {
                c.push("*");
                for (var d = 0; d < b.length; d++)a(b[d], c);
                return c.push(")")
            }
            if ("object" == typeof b) {
                c.push("(");
                for (d in b)b.hasOwnProperty(d) && (c.push(d), a(b[d], c));
                return c.push(")")
            }
            return c.push("!n")
        }

        return {
            stringify: function (b) {
                var c = [];
                a(b, c);
                return c.join("")
            }
        }
    }(), t = a.ue_qsl || 2E3, x = 1E3, z = function () {
    }, c = d.JSON &&
        d.JSON.stringify || h && h.stringify, q = e.stringify, b = a.ue || {}, e = a.uet || z;
    (a.uet || z)("bb", "ue_frst_v2", {wb: 1});
    var G = "//" + a.ue_furl + "/1/batch/1/OE/", E = [], f = [], B = [], C = !1, y, M, N = void 0 === a.ue_hpfi ? 1E3 : a.ue_hpfi, H = void 0 === a.ue_lpfi ? 1E4 : a.ue_lpfi, F = {"scheduled-delivery": 1}, K = 0, L = function () {
            function f() {
                if (d.XDomainRequest) {
                    var a = new XDomainRequest;
                    a.onerror = z;
                    a.ontimeout = z;
                    a.onprogress = z;
                    a.onload = z;
                    a.timeout = 0;
                    return a
                }
                if (d.XMLHttpRequest) {
                    a = new XMLHttpRequest;
                    if (!("withCredentials" in a))throw"";
                    return a
                }
                if (d.ActiveXObject) {
                    for (var b =
                        0; b < e.length && !a; b++)try {
                        a = new ActiveXObject(e[b]), e = [e[b]]
                    } catch (c) {
                    }
                    return a
                }
            }

            function h(c) {
                for (var d = [], f = c[0] || {}, e = 0; e < c.length; e++) {
                    var r = {};
                    r[c[e].c] = c[e].d;
                    d.push(r)
                }
                return {
                    rid: f.r || b.rid,
                    sid: f.s || a.ue_sid,
                    mid: f.m || a.ue_mid,
                    mkt: f.mkt || a.ue_mkt,
                    sn: f.sn || a.ue_sn,
                    reqs: d
                }
            }

            var e = "MSXML2.XMLHTTP.6.0 MSXML2.XMLHTTP.5.0 MSXML2.XMLHTTP.4.0 MSXML2.XMLHTTP.3.0 MSXML2.XMLHTTP Microsoft.XMLHTTP".split(" ");
            return {
                send: function (a) {
                    for (var b in a)if (a.hasOwnProperty(b) && a[b].length) {
                        var d = h(a[b]), e = f();
                        if (!e)throw"";
                        e.open("POST", G, !0);
                        e.setRequestHeader && e.setRequestHeader("Content-type", "text/plain");
                        e.send(c(d))
                    }
                }, buildPOSTBodyLog: h, isSupported: !0
            }
        }(), I = function () {
            return {
                send: function (d) {
                    for (var f in d)if (d.hasOwnProperty(f)) {
                        for (var h = d[f], g = h, e = {}, k = void 0, m = 0; m < g.length; m++)k = g[m].c, e[k] || (e[k] = []), e[k].push(g[m]);
                        var h = h[0] || {}, g = h.sn || a.ue_sn, h = G + (h.m || a.ue_mid) + ":" + (h.s || a.ue_sid) + ":" + (h.r || b.rid) + (g ? ":" + g : ""), g = [], k = h, m = [], l = void 0;
                        for (l in e)if (e.hasOwnProperty(l))for (var n = 0; n < e[l].length; n++) {
                            var p =
                                e[l][n], x = encodeURIComponent((p.cs ? q : c)(p.d));
                            m.push({l: x, t: p.t, p: 1, c: l, d: p.cs ? "c" : "j"})
                        }
                        e = m;
                        m = void 0;
                        l = "$";
                        for (p = 0; p < e.length;) {
                            n = e[p];
                            m != n.c ? (k += l + n.c + "=", l = "&", m = n.c) : k += ",";
                            var x = k, u = n.d + ":", w = n, k = (w.l.match(".{1," + (t - k.length) + "}[^%]{0,2}") || [])[0] || "";
                            w.l = w.l.substr(k.length);
                            k = x + (u + k + ":" + n.t);
                            if (n.l)k += ":" + n.p++ + "_", g.push(k), k = h, l = "$", m = 0; else if (p++, 1 != n.p)for (k += ":" + n.p + "_" + n.p, x = 0; x < n.p - 1; x++)g[g.length - x - 1] += n.p
                        }
                        g.push(k);
                        h = g;
                        for (g = 0; g < h.length; g++)(new Image).src = h[g]
                    }
                }, isSupported: !0
            }
        }(),
        O = function () {
            return {
                send: function (a) {
                    for (var b in a)if (a.hasOwnProperty(b)) {
                        var d = L.buildPOSTBodyLog(a[b]);
                        if (!navigator.sendBeacon(G, c(d)))throw"";
                    }
                }, isSupported: !!navigator.sendBeacon
            }
        }();
    b._fic = I;
    b._fac = L;
    b._fbc = O;
    b._flq = E;
    b.sid = b.sid || a.ue_sid;
    b.mid = b.mid || a.ue_mid;
    b.furl = b.furl || a.ue_furl;
    b.sn = b.sn || a.ue_sn;
    b.isBF = function () {
        var a = d.performance || d.webkitPerformance, c = w.ue_backdetect && w.ue_backdetect.ue_back && document.ue_backdetect.ue_back.value, f = b.bfini;
        return a && a.navigation && 2 === a.navigation.type ||
            1 < f || !f && 1 < c
    }();
    try {
        d.amznJQ && d.amznJQ.declareAvailable && d.amznJQ.declareAvailable("forester-client"), d.P && d.P.register && d.P.register("forester-client", z)
    } catch (P) {
        a.ueLogError(P, {logLevel: "WARN"})
    }
    (function () {
        b.log && b.log.isStub && (b.log.replay(function (a, b, c) {
            var d = a[2] || {};
            d.t = b;
            d.r = c;
            d.n = 1;
            u(a[0], a[1], d)
        }), b.onunload.replay(function (a) {
            f.push(a[0])
        }), b.onflush.replay(function (a) {
            B.push(a[0])
        }))
    })();
    b.log = u;
    b.log.reset = function () {
        K = 0
    };
    b.onunload = function (a) {
        f.push(a)
    };
    b.onflush = function (a) {
        B.push(a)
    };
    b.attach("beforeunload", m);
    b.attach("pagehide", m);
    e("ld", "ue_frst_v2", {wb: 1})
})(ue_csm, window, document);
(function (a, d) {
    function w(a) {
        if (a)return a.replace(/^\s+|\s+$/g, "")
    }

    function p(c, d) {
        if (!c)return {};
        c.m && c.m.message && (c = c.m);
        var b = d.m || d.message || "", b = c.m && c.m.message ? b + c.m.message : c.m && c.m.target && c.m.target.tagName ? b + ("Error handler invoked by " + c.m.target.tagName + " tag") : c.m ? b + c.m : c.message ? b + c.message : b + "Unknown error", b = {
            m: b,
            f: c.f || c.sourceURL || c.fileName || c.filename || c.m && c.m.target && c.m.target.src,
            l: c.l || c.line || c.lineno || c.lineNumber,
            c: c.c ? "" + c.c : c.c,
            s: [],
            t: a.ue.d(),
            name: c.name,
            type: c.type,
            csm: h + " " + (c.fromOnError ? "onerror" : "ueLogError")
        }, k, l, f = 0, p = 0, u;
        k = c.stack || (c.err ? c.err.stack : "");
        b.pageURL = d.pageURL || "" + (window.location ? window.location.href : "") || "missing";
        b.logLevel = d.logLevel || m;
        if (l = d.attribution)b.attribution = "" + l;
        if (k && k.split)for (b.csm += " stack", l = k.split("\n"); f < l.length && b.s.length < e;)(k = l[f++]) && b.s.push(w(k)); else for (b.csm += " callee", l = n(c.args || arguments, "callee"), p = f = 0; l && f < e;)u = t, l.skipTrace || (k = l.toString()) && k.substr && (u = 0 === p ? 4 * t : u, u = 1 == p ? 2 * t : u, b.s.push(k.substr(0,
            u)), p++), l = n(l, "caller"), f++;
        if (!b.f && 0 < b.s.length && (f = b) && f.s) {
            var y;
            k = 0 < f.s.length ? f.s[0] : "";
            l = 1 < f.s.length ? f.s[1] : "";
            k && (y = k.match(z));
            y && 3 == y.length || !l || (y = l.match(x));
            y && 3 == y.length && (f.f = y[1], f.l = y[2])
        }
        return b
    }

    function n(a, d) {
        try {
            return a[d]
        } catch (b) {
        }
    }

    function k(c, h) {
        if (c) {
            var b = p(c, h);
            a.ue.log(b, h.channel || u, {nb: 1});
            try {
                if (!c.fromOnError) {
                    var e = d.console, k = d.JSON, f = "Error logged with the Track&Report JS errors API(http://tiny/1covqr6l8/wamazindeClieUserJava): ";
                    if (e) {
                        if (k && k.stringify)try {
                            f +=
                                k.stringify(b)
                        } catch (l) {
                            f += "no info provided; converting to string failed"
                        } else f += b.m;
                        "function" === typeof e.error ? e.error(f, b) : "function" === typeof e.log && e.log(f, b)
                    }
                }
            } catch (m) {
            }
        }
    }

    function l(c, d) {
        if (c && !(a.ue_err.ec > a.ue_err.mxe)) {
            a.ue_err.ec++;
            a.ue_err.ter.push(c);
            d = d || {};
            var b = c.logLevel || d.logLevel;
            d.logLevel = b;
            d.attribution = c.attribution || d.attribution;
            b && b != m || ue_err.ecf++;
            k(c, d)
        }
    }

    if (!a.ueLogError || a.ueLogError.isStub) {
        var u = a.ue_err_chan || "jserr", m = "FATAL", h = "v5", e = 20, t = 256, x = /\(?([^\s]*):(\d+):\d+\)?/,
            z = /.*@(.*):(\d*)/;
        k.skipTrace = 1;
        p.skipTrace = 1;
        l.skipTrace = 1;
        (function () {
            if (a.ue_err.erl) {
                var c = a.ue_err.erl.length, d, b;
                for (d = 0; d < c; d++)b = a.ue_err.erl[d], k(b.ex, b.info);
                ue_err.erl = []
            }
        })();
        a.ueLogError = l
    }
})(ue_csm, window);
(function (a, d) {
    a.ue_cel || (a.ue_cel = function () {
        function w(a, d) {
            d ? d.r = x : d = {r: x, c: 1};
            d.clog && h.clog ? h.clog(a, d.ns || u, d) : d.glog && h.glog ? h.glog(a, d.ns || u, d) : h.log(a, d.ns || u, d)
        }

        function p() {
            var a = k.length;
            if (0 < a) {
                for (var d = [], b = 0; b < a; b++) {
                    var e = k[b].api;
                    e.ready() ? (e.on({ts: h.d, ns: u}), l.push(k[b]), w({
                        k: "mso",
                        n: k[b].name,
                        t: h.d()
                    })) : d.push(k[b])
                }
                k = d
            }
        }

        function n() {
            if (!n.executed) {
                for (var a = 0; a < l.length; a++)l[a].api.off && l[a].api.off({ts: h.d, ns: u});
                w({k: "eod", t0: h.t0, t: h.d()}, {c: 1});
                n.executed = 1;
                for (a = 0; a < l.length; a++)k.push(l[a]);
                l = [];
                clearTimeout(m)
            }
        }

        var k = [], l = [], u = a.ue_cel_ns || "cel", m, h = a.ue, e = a.uet, t = a.uex, x = h.rid, z = d.requestAnimationFrame || function (a) {
                a()
            };
        if (h.isBF)w({
            k: "bft",
            t: h.d()
        }); else return "function" == typeof e && e("bb", "csmCELLSframework", {wb: 1}), setTimeout(p, 0), h.onunload(n), m = setTimeout(n, 6E5), "function" == typeof t && t("ld", "csmCELLSframework", {wb: 1}), {
            registerModule: function (a, d) {
                k.push({name: a, api: d});
                w({k: "mrg", n: a, t: h.d()});
                p()
            }, reset: function (a) {
                w({k: "rst", t0: h.t0, t: h.d()});
                k = k.concat(l);
                l = [];
                for (var d = k.length,
                         b = 0; b < d; b++)k[b].api.off(), k[b].api.reset();
                x = a || h.rid;
                p();
                clearTimeout(m);
                m = setTimeout(n, 6E5);
                n.executed = 0
            }, timeout: function (a, h) {
                return d.setTimeout(function () {
                    z(a)
                }, h)
            }, log: w
        }
    }())
})(ue_csm, window);
(function (a, d, w) {
    a.ue_pdm || ue.isBF || (a.ue_pdm = function () {
        function p() {
            var b = {
                w: l.width,
                aw: l.availWidth,
                h: l.height,
                ah: l.availHeight,
                cd: l.colorDepth,
                pd: l.pixelDepth
            }, c = {w: w.body.scrollWidth, h: w.body.scrollHeight};
            e && e.w == b.w && e.h == b.h && e.aw == b.aw && e.ah == b.ah && e.pd == b.pd && e.cd == b.cd || (e = b, e.t = m(), e.k = "sci", z(e));
            t && t.w == c.w && t.h == c.h || (t = c, t.t = m(), t.k = "doi", z(t));
            u = a.ue_cel.timeout(p, h)
        }

        function n() {
            z({k: "ebl", t: m()})
        }

        function k() {
            z({k: "efo", t: m()})
        }

        var l, u, m, h, e, t, x = a.ue, z = a.ue_cel.log, c = a.uet, q = a.uex;
        "function" == typeof c && c("bb", "csmCELLSpdm", {wb: 1});
        return {
            on: function (b) {
                h = b.timespan || 500;
                m = b.ts;
                l = d.screen;
                x.attach && (x.attach("blur", n, d), x.attach("focus", k, d));
                b = d.location;
                z({k: "pmd", o: b.origin, p: b.pathname, t: m()});
                a.ue_cel.timeout(p, 0);
                "function" == typeof q && q("ld", "csmCELLSpdm", {wb: 1})
            }, off: function (a) {
                clearTimeout(u);
                x.detach && (x.detach("blur", n, d), x.detach("focus", k, d));
                x.count && (x.count("cel.PDM.TotalExecutions", 0), x.count("cel.PDM.TotalExecutionTime", 0), x.count("cel.PDM.AverageExecutionTime",
                    0 / 0))
            }, ready: function () {
                return w.body && a.ue_cel && a.ue_cel.log
            }, reset: function () {
                e = t = null
            }
        }
    }(), a.ue_cel && a.ue_cel.registerModule("page module", a.ue_pdm))
})(ue_csm, window, document);
(function (a, d) {
    a.ue_vpm || ue.isBF || (a.ue_vpm = function () {
        function w() {
            var a = u(), c = {w: d.innerWidth, h: d.innerHeight, x: d.pageXOffset, y: d.pageYOffset};
            n && n.w == c.w && n.h == c.h && n.x == c.x && n.y == c.y || (c.t = a, c.k = "vpi", n = c, t(n, {clog: 1}));
            k = 0;
            m = u() - a;
            h += 1
        }

        function p() {
            k || (k = a.ue_cel.timeout(w, l))
        }

        var n, k, l, u, m = 0, h = 0, e = a.ue, t = a.ue_cel.log, x = a.uet, z = a.uex, c = e.attach, q = e.detach;
        "function" == typeof x && x("bb", "csmCELLSvpm", {wb: 1});
        return {
            on: function (b) {
                u = b.ts;
                l = b.timespan || 100;
                a.ue_cel.timeout(w, 0);
                c && (c("scroll", p),
                    c("resize", p));
                "function" == typeof z && z("ld", "csmCELLSvpm", {wb: 1})
            }, off: function (a) {
                clearTimeout(k);
                q && (q("scroll", p), q("resize", p));
                e.count && (e.count("cel.VPI.TotalExecutions", h), e.count("cel.VPI.TotalExecutionTime", m), e.count("cel.VPI.AverageExecutionTime", m / h))
            }, ready: function () {
                return a.ue_cel && a.ue_cel.log
            }, reset: function () {
                n = void 0
            }, getVpi: function () {
                return n
            }
        }
    }(), a.ue_cel && a.ue_cel.registerModule("viewport module", a.ue_vpm))
})(ue_csm, window);
(function (a, d, w) {
    var p = a.ue || {};
    !p.isBF && !a.ue_fem && w.querySelector && d.getComputedStyle && [].forEach && (a.ue_fem = a.ue_bwd ? function () {
        function n(a, b) {
            return a > b ? 3 > a - b : 3 > b - a
        }

        function k(a, b, c) {
            var d;
            a:{
                try {
                    if (a) {
                        var g = a.getBoundingClientRect();
                        d = {
                            x: g.left + c.x | 0,
                            y: g.top + c.y | 0,
                            w: g.width | 0,
                            h: g.height | 0,
                            d: (0 === a.offsetWidth && 0 === a.offsetHeight) | 0
                        }
                    } else d = void 0;
                    break a
                } catch (f) {
                }
                d = void 0
            }
            if (d && !a.cel_b)a.cel_b = d, E({
                    n: a.cel_n,
                    w: a.cel_b.w,
                    h: a.cel_b.h,
                    d: a.cel_b.d,
                    x: a.cel_b.x,
                    y: a.cel_b.y,
                    t: b,
                    k: "ewi",
                    cl: a.className
                },
                {clog: 1}); else {
                if (c = d)c = a.cel_b, g = d, c = g.d === c.d && 1 === g.d ? !1 : !(n(c.x, g.x) && n(c.y, g.y) && n(c.w, g.w) && n(c.h, g.h) && c.d === g.d);
                c && (a.cel_b = d, E({
                    n: a.cel_n,
                    w: a.cel_b.w,
                    h: a.cel_b.h,
                    d: a.cel_b.d,
                    x: a.cel_b.x,
                    y: a.cel_b.y,
                    t: b,
                    k: "ewi"
                }, {clog: 1}))
            }
        }

        function l(a, b, c) {
            var d;
            d = a.c ? w.getElementsByClassName(a.c) : a.id ? [w.getElementById(a.id)] : w.querySelectorAll(a.s);
            a.w = [];
            for (widgetIndex = 0; widgetIndex < d.length; widgetIndex++) {
                var g = d[widgetIndex];
                g && (g.cel_n || (g.cel_n = g.getAttribute("cel_widget_id") || (a.id_gen || G)(g, widgetIndex) ||
                    g.id), a.w.push(g), h(r, g, b, c))
            }
        }

        function u(a, b) {
            f.contains(a) || E({n: a.cel_n, t: b, k: "ewd"}, {clog: 1})
        }

        function m(a) {
            I.length && ue_cel.timeout(function () {
                for (var b = U(), d = !1; U() - b < c && !d;) {
                    for (d = P; 0 < d-- && 0 < I.length;) {
                        var f = I.shift();
                        g[f.type](f.elem, f.time, f.pageOffset)
                    }
                    d = 0 === I.length
                }
                O++;
                m(a)
            }, 0)
        }

        function h(a, b, c, d) {
            I.push({type: a, elem: b, time: c, pageOffset: d})
        }

        function e(a, c, d) {
            for (var g = 0; g < b.length; g++)for (var f = b[g].w || [], e = 0; e < f.length; e++)h(a, f[e], c, d)
        }

        function t() {
            L || (L = a.ue_cel.timeout(function () {
                L =
                    null;
                var a = {x: d.pageXOffset, y: d.pageYOffset}, c = q();
                e(v, c);
                for (var g = 0; g < b.length; g++)h(J, b[g], c, a);
                m(c)
            }, z))
        }

        function x() {
            L || K || (K = a.ue_cel.timeout(function () {
                K = null;
                var a = {x: d.pageXOffset, y: d.pageYOffset}, b = q();
                e(r, b, a);
                m(b)
            }, z))
        }

        var z = 50, c = 4.5, q, b = [], G = function () {
        }, E = a.ue_cel.log, f, B, C, y, M = d.MutationObserver || d.WebKitMutationObserver || d.MozMutationObserver, N = !!M, H, F, K, L, I = [], O = 0, P = null, v = "removedWidget", J = "updateWidgets", r = "processWidget", g, R = d.performance || {}, U = R.now && function () {
                return R.now()
            } ||
            function () {
                return Date.now()
            };
        "function" == typeof uet && uet("bb", "csmCELLSfem", {wb: 1});
        return {
            on: function (c) {
                function d() {
                    if (C && y && f && f.contains && f.getBoundingClientRect && q) {
                        g = {removedWidget: u, updateWidgets: l, processWidget: k};
                        if (N) {
                            var a = {attributes: !0, subtree: !0};
                            H = new M(x);
                            F = new M(t);
                            H.observe(f, a);
                            F.observe(f, {childList: !0, subtree: !0});
                            F.observe(B, a)
                        } else C.call(f, "DOMAttrModified", x), C.call(f, "DOMNodeInserted", t), C.call(f, "DOMNodeRemoved", t), C.call(B, "DOMNodeInserted", x), C.call(B, "DOMNodeRemoved",
                            x);
                        t()
                    }
                }

                f = w.body;
                B = w.head;
                C = f.addEventListener;
                y = f.removeEventListener;
                q = c.ts;
                b = a.cel_widgets || [];
                P = c.bs || 5;
                p.deffered ? d() : p.attach && p.attach("load", d);
                "function" == typeof uex && uex("ld", "csmCELLSfem", {wb: 1})
            }, off: function () {
                C && y && f && f.contains && f.getBoundingClientRect && q && (F && (F.disconnect(), F = null), H && (H.disconnect(), H = null), y.call(f, "DOMAttrModified", x), y.call(f, "DOMNodeInserted", t), y.call(f, "DOMNodeRemoved", t), y.call(B, "DOMNodeInserted", x), y.call(B, "DOMNodeRemoved", x));
                p.count && p.count("cel.widgets.batchesProcessed",
                    O)
            }, ready: function () {
                return a.ue_cel && a.ue_cel.log
            }, reset: function () {
                b = a.cel_widgets || []
            }
        }
    }() : function () {
        function n() {
            a.ue_cel.timeout(function () {
                G.splice(0).forEach(function (a) {
                    E(a, {clog: 1})
                })
            }, 0)
        }

        function k(a) {
            for (var b = {x: d.pageXOffset, y: d.pageYOffset}, c = 0; c < q.length; c++) {
                var f = q[c];
                if (f.w && f.w.length)for (var h = 0; h < f.w.length; h++) {
                    var g = f.w[h], e;
                    a:{
                        try {
                            var k = g, l = b;
                            if (k) {
                                var m = k.getBoundingClientRect();
                                e = {
                                    x: m.left + l.x | 0,
                                    y: m.top + l.y | 0,
                                    w: m.width | 0,
                                    h: m.height | 0,
                                    d: (0 === k.offsetWidth && 0 === k.offsetHeight) |
                                    0
                                }
                            } else e = void 0;
                            break a
                        } catch (n) {
                        }
                        e = void 0
                    }
                    if (e && !g.cel_b)g.cel_b = e, G.push({
                        n: g.cel_n,
                        w: g.cel_b.w,
                        h: g.cel_b.h,
                        d: g.cel_b.d,
                        x: g.cel_b.x,
                        y: g.cel_b.y,
                        t: a,
                        k: "ewi",
                        cl: g.className
                    }); else {
                        if (k = e)k = g.cel_b, l = e, k = l.d === k.d && 1 === l.d ? !1 : !(u(k.x, l.x) && u(k.y, l.y) && u(k.w, l.w) && u(k.h, l.h) && k.d === l.d);
                        k && (g.cel_b = e, G.push({
                            n: g.cel_n,
                            w: g.cel_b.w,
                            h: g.cel_b.h,
                            d: g.cel_b.d,
                            x: g.cel_b.x,
                            y: g.cel_b.y,
                            t: a,
                            k: "ewi"
                        }))
                    }
                }
            }
        }

        function l(a) {
            for (var c = 0; c < q.length; c++) {
                var d = q[c], e;
                e = d;
                e = e.c ? w.getElementsByClassName(e.c) : e.id ? [w.getElementById(e.id)] :
                    w.querySelectorAll(e.s);
                var k = d.w || [], g;
                for (g = 0; g < k.length; g++) {
                    var l = k[g];
                    f.contains(l) || G.push({n: l.cel_n, t: a, k: "ewd"})
                }
                d.w = [];
                for (g = 0; g < e.length; g++)if (k = e[g])k.cel_n || (k.cel_n = k.getAttribute("cel_widget_id") || (d.id_gen || b)(k, g) || k.id), d.w.push(k)
            }
            h()
        }

        function u(a, b) {
            return a > b ? 3 > a - b : 3 > b - a
        }

        function m() {
            L || (L = a.ue_cel.timeout(function () {
                L = null;
                e("dwe", l);
                n()
            }, t))
        }

        function h() {
            L || K || (K = a.ue_cel.timeout(function () {
                K = null;
                e("dwpc", k);
                n()
            }, t))
        }

        function e(a, b) {
            var d = c();
            b(d);
            var f = c(), d = f - d;
            d <= x ? f = 0 :
                f - I >= z ? (I = f, f = 0) : (ue_fem.off(), f = 1);
            (G.length || f) && G.push({k: "ewt", e: a, d: d, ex: f, t: c()})
        }

        var t = 50, x = 10, z = 3E3, c, q = [], b = function () {
        }, G = [], E = a.ue_cel.log, f, B, C, y, M = d.MutationObserver || d.WebKitMutationObserver || d.MozMutationObserver, N = !!M, H, F, K, L, I = -z;
        "function" == typeof uet && uet("bb", "csmCELLSfem", {wb: 1});
        return {
            on: function (b) {
                function d() {
                    if (C && y && f && f.contains && f.getBoundingClientRect && c) {
                        if (N) {
                            var a = {attributes: !0, subtree: !0};
                            H = new M(h);
                            F = new M(m);
                            H.observe(f, a);
                            F.observe(f, {childList: !0, subtree: !0});
                            F.observe(B, a)
                        } else C.call(f, "DOMAttrModified", h), C.call(f, "DOMNodeInserted", m), C.call(f, "DOMNodeRemoved", m), C.call(B, "DOMNodeInserted", h), C.call(B, "DOMNodeRemoved", h);
                        m()
                    }
                }

                f = w.body;
                B = w.head;
                C = f.addEventListener;
                y = f.removeEventListener;
                c = b.ts;
                q = a.cel_widgets || [];
                p.deffered ? d() : p.attach && p.attach("load", d);
                "function" == typeof uex && uex("ld", "csmCELLSfem", {wb: 1})
            }, off: function () {
                C && y && f && f.contains && f.getBoundingClientRect && c && (F && (F.disconnect(), F = null), H && (H.disconnect(), H = null), y.call(f, "DOMAttrModified",
                    h), y.call(f, "DOMNodeInserted", m), y.call(f, "DOMNodeRemoved", m), y.call(B, "DOMNodeInserted", h), y.call(B, "DOMNodeRemoved", h))
            }, ready: function () {
                return a.ue_cel && a.ue_cel.log
            }, reset: function () {
                q = a.cel_widgets || []
            }
        }
    }(), a.ue_cel && a.ue_fem && a.ue_cel.registerModule("features module", a.ue_fem))
})(ue_csm, window, document);