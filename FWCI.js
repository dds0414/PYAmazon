(function (q, t, v) {
    q.guardFatal(function () {
        q.declare("fwcim-data", {
            scriptVersion: "2.3.11-AUI",
            plugins: [],
            xxteaKey: [4169969034],
            scripts: {inlineHashes: [], dynamicUrls: [], elapsed: -1},
            fonts: {hash: -1, count: -1, elapsed: -1},
            capabilities: v,
            crc_table: [],
            errors: [],
            acceptCharset: v,
            acceptLanguage: v,
            screenInfo: v,
            dupedPluginPrint: v,
            pluginPrint: v,
            timeZone: v,
            lsUbid: v,
            flashVersion: v,
            mercuryData: v,
            start: v,
            end: v,
            container: v,
            timeToSubmit: v,
            captchaTelemetry: v,
            numClicks: -1,
            keyPresses: -1,
            keyCopies: -1,
            keyCuts: -1,
            keyPastes: -1
        });
        q.when("A", "fwcim-data", "fwcim-reporter").register("fwcim-collector", function (g, m, l) {
            function h() {
                try {
                    x.each(navigator.plugins, function (a, b) {
                        var c = b.name + " " + b.description.replace(/[^0-9]/g, "");
                        m.plugins.push({name: b.name, version: b.version, str: c});
                        b.name.match(/Shockwave Flash/) && (b.version ? m.flashVersion = b.version : (c = b.description.match(/([0-9.]+)\s+r([0-9.]+)/), m.flashVersion = c && c[1] + "." + c[2]))
                    })
                } catch (a) {
                    l.reportError("cNP", a)
                }
            }

            function e() {
                try {
                    if (m.container) {
                        var a = document.createElement("script");
                        a.type = "text/vbscript";
                        a.text = 'Function dAXP(n, v)\non error resume next\nset o = CreateObject(v)\nIf IsObject(o) Then\nSelect case n\ncase "ShockwaveDirector"\nf = o.ShockwaveVersion("")\ncase "ShockwaveFlash"\nf = o.FlashVersion()\ncase "RealPlayer"\nf = o.GetVersionInfo\ncase Else\nf = ""\nend Select\ndAXP = f\nEnd If\nEnd Function';
                        m.container.append(a)
                    }
                } catch (b) {
                    l.reportError("pPVB", b)
                }
            }

            function k() {
                function a(b, c) {
                    var d = !0;
                    try {
                        dAXP && (d = !0)
                    } catch (e) {
                        d = !1
                    }
                    return d && (d = dAXP(b, c)) ? (d = {
                        name: b, version: d,
                        str: b + " : " + d
                    }, m.plugins.push(d), d) : null
                }

                var b = navigator.userAgent.match(/Windows NT 6.0/);
                e();
                try {
                    a("ShockwaveDirector", "SWCtl.SWCtl");
                    var c = a("ShockwaveFlash", "ShockwaveFlash.ShockwaveFlash");
                    c && (m.flashVersion = (c.version >> 16) + "." + (c.version & 65535));
                    b || (a("RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)"), a("RealPlayer", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)"))
                } catch (d) {
                    l.reportError("dAXP", d)
                }
            }

            function d() {
                var a = {
                    AB: "{7790769C-0471-11D2-AF11-00C04FA35D02}",
                    WDUN: "{89820200-ECBD-11CF-8B85-00AA005B4340}",
                    DA: "{283807B5-2C60-11D0-A31D-00AA00B92C03}",
                    DAJC: "{4F216970-C90C-11D1-B5C7-0000F8051515}",
                    DS: "{44BBA848-CC51-11CF-AAFA-00AA00B6015C}",
                    DHDB: "{9381D8F2-0288-11D0-9501-00AA00B911A5}",
                    DHDBFJ: "{4F216970-C90C-11D1-B5C7-0000F8051515}",
                    ICW: "{5A8D6EE0-3E18-11D0-821E-444553540000}",
                    IE: "{89820200-ECBD-11CF-8B85-00AA005B4383}",
                    IECFJ: "{08B0E5C0-4FCB-11CF-AAA5-00401C608555}",
                    WMP: "{22D6F312-B0F6-11D0-94AB-0080C74C7E95}",
                    NN: "{44BBA842-CC51-11CF-AAFA-00AA00B6015B}",
                    OBP: "{3AF36230-A269-11D1-B5BF-0000F8051515}",
                    OE: "{44BBA840-CC51-11CF-AAFA-00AA00B6015C}",
                    TS: "{CC2A9BA0-3BDD-11D0-821E-444553540000}",
                    MVM: "{08B0E5C0-4FCB-11CF-AAA5-00401C608500}",
                    DDE: "{44BBA855-CC51-11CF-AAFA-00AA00B6015F}",
                    DOTNET: "{6FAB99D0-BAB8-11D1-994A-00C04F98BBC9}",
                    YHOO: "{E5D12C4E-7B4F-11D3-B5C9-0050045C3C96}",
                    SWDNEW: "{166B1BCA-3F9C-11CF-8075-444553540000}",
                    DOTNETFM: "{89B4C1CD-B018-4511-B0A1-5476DBF70820}",
                    MDFH: "{8EFA4753-7169-4CC3-A28B-0A1643B8A39B}",
                    FLH: "{D27CDB6E-AE6D-11CF-96B8-444553540000}",
                    SW: "{2A202491-F00D-11CF-87CC-0020AFEECF20}",
                    SWD: "{233C1507-6A77-46A4-9443-F871F945D258}",
                    RP: "{CFCDAA03-8BE4-11CF-B84B-0020AFBBCCFA}",
                    QT: "{DE4AF3B0-F4D4-11D3-B41A-0050DA2E6C21}"
                }, b = c();
                try {
                    b && x.each(a, function (a, c) {
                        if (b.isComponentInstalled && b.isComponentInstalled(c, "componentid")) {
                            var d = b.getComponentVersion(c, "componentid");
                            m.plugins.push({name: a, version: d, str: "|" + a + " " + d})
                        }
                    })
                } catch (d) {
                    l.reportError("cASC", d)
                }
            }

            function c() {
                try {
                    if (m.container) {
                        var a = document.createElement("span");
                        a.id = "fwcim-caps";
                        a.style.behavior = "url('#default#clientCaps')";
                        m.container.append(a);
                        return a
                    }
                } catch (b) {
                    l.reportError("pBC",
                        b)
                }
                return null
            }

            function b() {
                function a(b) {
                    b = typeof b === v || null === b ? "" : b.toString();
                    for (var d = 0; d < b.length; d++) {
                        c += b.charCodeAt(d);
                        var e = .02519603282416938 * c;
                        c = e >>> 0;
                        e -= c;
                        e *= c;
                        c = e >>> 0;
                        e -= c;
                        c += 4294967296 * e
                    }
                    return 2.3283064365386963E-10 * (c >>> 0)
                }

                function b(a) {
                    var c = 2091639 * d + 2.3283064365386963E-10 * g;
                    d = e;
                    e = f;
                    f = c - (g = c | 0);
                    return ("0000000000" + (4294967296 * f).toString()).slice(-a)
                }

                var c = 4022871197, d = a(" "), e = a(" "), f = a(" "), g = 1, h = [document.body.innerHTML, navigator.userAgent, (new Date).getTime()], k;
                for (k in h)h.hasOwnProperty(k) &&
                (d -= a(h[k]), 0 > d && (d += 1), e -= a(h[k]), 0 > e && (e += 1), f -= a(h[k]), 0 > f && (f += 1));
                h = "X" + b(2) + "-" + b(7) + "-" + b(7);
                k = Math.floor((new Date).getTime() / 1E3);
                return h + ":" + k
            }

            function a(a) {
                return "string" === typeof a && a.match(/^\w{3}\-\d{7}\-\d{7}:\d+$/)
            }

            function f() {
                try {
                    if (typeof t.localStorage !== v && (m.lsUbid = t.localStorage.getItem("amznfbgid"), !a(m.lsUbid))) {
                        var c = b();
                        t.localStorage.removeItem("amznfbgid");
                        t.localStorage.setItem("amznfbgid", c);
                        m.lsUbid = c
                    }
                } catch (d) {
                    l.reportError("cLSU", d)
                }
            }

            function n(b, c) {
                try {
                    typeof t.localStorage !==
                    v && a(c) && (t.localStorage.removeItem("amznfbgid"), t.localStorage.setItem("amznfbgid", c), b.lsUbid = c)
                } catch (d) {
                    l.reportError("sLSU", d)
                }
            }

            function q() {
                var a = document.domain;
                if (a.match(/development\.amazon\.com$/) || a.match(/desktop\.amazon\.com$/))return 0;
                if (!a.match(/\.com$/)) {
                    if (a.match(/\.co\.uk$/) || a.match(/\.de$/) || a.match(/\.fr$/) || a.match(/\.it$/))return 2;
                    if (a.match(/\.co\.jp$/))return 3;
                    if (a.match(/\.cn$/))return 4
                }
                return 1
            }

            function y(a) {
                this.reportMercury = function (b, c) {
                    try {
                        n(m, b), m.mercuryData =
                            c
                    } catch (d) {
                        l.reportError("rM", d)
                    }
                    l.reportMetadata(a)
                }
            }

            var x = g.$;
            return {
                collectPlugins: function () {
                    navigator.plugins && 0 < navigator.plugins.length ? h() : navigator.userAgent.match(/MSIE [0-9.]+/i) && navigator.userAgent.match(/Windows/i) && (k(), d())
                }, collectScreen: function () {
                    try {
                        var a = screen.width + "-" + screen.height + "-" + screen.availHeight + "-" + screen.colorDepth, a = a + ("-" + (screen.deviceXDPI !== v ? screen.deviceXDPI : "*")), a = a + ("-" + (screen.logicalXDPI !== v ? screen.logicalXDPI : "*")), a = a + ("-" + (screen.fontSmoothingEnabled !==
                            v ? screen.fontSmoothingEnabled ? 1 : 0 : "*"));
                        m.screenInfo = a
                    } catch (b) {
                        l.reportError("cS", b)
                    }
                }, collectScripts: function () {
                    for (var a = new Date, b = [], c = [], d = /src="[\s\S]*?"/, e = document.documentElement.innerHTML.match(/<script[\s\S]*?>[\s\S]*?<\/script>/gi), f = 0; f < e.length; f++) {
                        var g = e[f];
                        g.match(d) ? (g = d.exec(g)[0], b.push(g.substring(5, g.length - 1))) : c.push(l.crc32(g))
                    }
                    return {dynamicUrls: b, inlineHashes: c, elapsed: new Date - a}
                }, collectFonts: function () {
                    var a = new Date, b = new function () {
                        var a = ["monospace", "sans-serif",
                            "serif"], b = document.getElementsByTagName("body")[0], c = document.createElement("span");
                        c.style.fontSize = "72px";
                        c.innerHTML = "mmmmmmmmmmlli";
                        for (var d = {}, e = {}, f = 0; f < a.length; f++)c.style.fontFamily = a[f], b.appendChild(c), d[a[f]] = c.offsetWidth, e[a[f]] = c.offsetHeight, b.removeChild(c);
                        this.detect = function (f) {
                            for (var g = !1, h = 0; h < a.length; h++) {
                                c.style.fontFamily = f + "," + a[h];
                                b.appendChild(c);
                                if (c.offsetWidth !== d[a[h]] || c.offsetHeight !== e[a[h]])g = !0;
                                b.removeChild(c)
                            }
                            return g
                        }
                    }, c = [];
                    g.each("Symbol;Arial;Courier New;Times New Roman;Georgia;Trebuchet MS;Verdana;Impact;Comic Sans MS;Webdings;Tahoma;Microsoft Sans Serif;Wingdings;Arial Black;Lucida Console;Marlett;Lucida Sans Unicode;Courier;Franklin Gothic Medium;Palatino Linotype;Sylfaen;Estrangelo Edessa;Tunga;Mangal;Raavi;Latha;Gautami;Shruti;MV Boli;Calibri;Cambria;Constantia;Candara;Corbel;Consolas;Cambria Math;Segoe UI;MS Mincho;Wingdings 2;Wingdings 3;Vrinda;Kartika;Century Gothic;Arial Narrow;Garamond;Book Antiqua;Bookman Old Style;MS Reference Sans Serif;MS Reference Specialty;Bookshelf Symbol 7;Monotype Corsiva;Meiryo;Arial Unicode MS;Century;Gabriola;Plantagenet Cherokee;Segoe Print;Segoe Script;Meiryo UI;MT Extra;SimSun;Batang;Gulim;MS PMincho;MS PGothic;MS Gothic;Mongolian Baiti;Microsoft Yi Baiti;PMingLiU;Microsoft Himalaya;SimHei;MingLiU;Segoe UI Light;Simplified Arabic;Cordia New;Miriam Fixed;EucrosiaUPC;Simplified Arabic Fixed;Rod;Angsana New;Narkisim;FrankRuehl;JasmineUPC;Dotum;DotumChe;IrisUPC;FreesiaUPC;GulimChe;LilyUPC;DilleniaUPC;Miriam;MS UI Gothic;Traditional Arabic;Levenim MT;David;KodchiangUPC;Iskoola Pota;SimSun-ExtB;BrowalliaUPC;Euphemia;CordiaUPC;Browallia New;AngsanaUPC;Nyala;NSimSun;Kalinga;GungsuhChe;MingLiU_HKSCS-ExtB;MingLiU_HKSCS;MingLiU-ExtB;PMingLiU-ExtB;BatangChe;Gungsuh;Aharoni;Andalus;Gisha;Microsoft Uighur;MoolBoran;DokChampa;DaunPenh;Microsoft Tai Le;Leelawadee;Malgun Gothic;Microsoft JhengHei;Microsoft YaHei;Arabic Typesetting;Segoe UI Semibold;Segoe UI Symbol;Ebrima;Khmer UI;Lao UI;FangSong;Microsoft New Tai Lue;KaiTi;Microsoft PhagsPa;Kokila;DFKai-SB;Sakkal Majalla;Utsaah;Shonar Bangla;Vani;Vijaya;Aparajita;Mistral;Haettenschweiler;MS Outlook;Lucida Sans;Lucida Handwriting;Lucida Bright;Freestyle Script;Juice ITC;Tempus Sans ITC;Kristen ITC;Stencil;Jokerman;Bell MT;Vivaldi;Cooper Black;Bauhaus 93;Harrington;Matura MT Script Capitals;Baskerville Old Face;Playbill;Modern No. 20;Colonna MT;Onyx;Britannic Bold;Bernard MT Condensed;Footlight MT Light;Papyrus;Wide Latin;Brush Script MT;Lucida Calligraphy;Lucida Fax;Centaur;Broadway;Californian FB;Berlin Sans FB Demi;Berlin Sans FB;Algerian;Old English Text MT;High Tower Text;Niagara Solid;Magneto;Poor Richard;Kunstler Script;Harlow Solid Italic;Viner Hand ITC;Informal Roman;Snap ITC;Bodoni MT Poster Compressed;Niagara Engraved;Showcard Gothic;Ravie;Parchment;Vladimir Script;Chiller;Century Schoolbook;Bradley Hand ITC;Franklin Gothic Book;French Script MT;Pristina;Copperplate Gothic Bold;Copperplate Gothic Light;Curlz MT;Edwardian Script ITC;Engravers MT;Rockwell;Rockwell Extra Bold;Perpetua;Arial Rounded MT Bold;Franklin Gothic Demi;Franklin Gothic Heavy;Franklin Gothic Demi Cond;Franklin Gothic Medium Cond;Gill Sans MT;Lucida Sans Typewriter;Felix Titling;Maiandra GD;Eras Light ITC;Goudy Old Style;Calisto MT;OCR A Extended;Blackadder ITC;Eras Demi ITC;Gloucester MT Extra Condensed;Imprint MT Shadow;Gill Sans Ultra Bold;Tw Cen MT;Perpetua Titling MT;Gigi;Agency FB;Script MT Bold;Gill Sans MT Condensed;Gill Sans MT Ext Condensed Bold;Elephant;Castellar;Goudy Stout;Eras Medium ITC;Bodoni MT Condensed;Bodoni MT;Bodoni MT Black;Gill Sans Ultra Bold Condensed;Forte;Eras Bold ITC;Rockwell Condensed;Tw Cen MT Condensed;Tw Cen MT Condensed Extra Bold;Rage Italic;Palace Script MT;System;Terminal;Fixedsys;MS Sans Serif;Small Fonts;MS Serif;Modern;Roman;Script;Courier New CE;Times New Roman CE;Times New Roman Greek;Courier New Baltic;Arial CYR;Arial CE;Times New Roman TUR;Courier New Greek;Arial Baltic;Courier New TUR;Times New Roman CYR;Arial Greek;Arial TUR;Times New Roman Baltic;Courier New CYR;Times New Roman Cyr;Courier New Cyr;Arial Cyr;Calibri Light;Myriad Pro;Hobo Std;Trajan Pro;Minion Pro;Giddyup Std;Adobe Caslon Pro;Blackoak Std;Chaparral Pro;OCR A Std;Birch Std;Adobe Garamond Pro;Tekton Pro;Adobe Caslon Pro Bold;Cooper Std Black;Myriad Pro Cond;Adobe Garamond Pro Bold;Kozuka Mincho Pro EL;Myriad Pro Light;Kozuka Mincho Pro B;Kozuka Mincho Pro L;Kozuka Mincho Pro M;Kozuka Gothic Pro B;Kozuka Gothic Pro R;Kozuka Gothic Pro L;Kozuka Gothic Pro M;Kozuka Gothic Pro H;Kozuka Gothic Pro EL;Poplar Std;Kozuka Mincho Pro R;Kozuka Mincho Pro H;Letter Gothic Std;Brush Script Std;Mesquite Std;Stencil Std;Orator Std;Charlemagne Std;Prestige Elite Std;Rosewood Std Regular;Minion Pro Med;Minion Pro SmBd;Lithos Pro Regular;Tekton Pro Ext;Nueva Std Cond;Tekton Pro Cond;Minion Pro Cond;Arabic Transparent;Adobe Ming Std L;Adobe Song Std L;Adobe Fangsong Std R;Adobe Myungjo Std M;Adobe Kaiti Std R;Adobe Heiti Std R;Kozuka Mincho Pr6N H;Kozuka Gothic Pr6N R;Kozuka Gothic Pr6N M;Kozuka Mincho Pr6N EL;Kozuka Mincho Pr6N L;Kozuka Mincho Pr6N R;Kozuka Mincho Pr6N M;Kozuka Gothic Pr6N L;Kozuka Mincho Pr6N B;Kozuka Gothic Pr6N H;Kozuka Gothic Pr6N B;Kozuka Gothic Pr6N EL;Adobe Fan Heiti Std B;Adobe Gothic Std B;Adobe Hebrew;Adobe Arabic;Swis721 BT;Swis721 Lt BT;Swis721 Blk BT;OCR-A BT;OCR-B 10 BT;Eccentric Std;Bell Gothic Std Light;Bell Gothic Std Black;WP CyrillicA;WP CyrillicB;Futura Md BT;Nueva Std;Adobe Devanagari;Myriad Hebrew;Myriad Arabic;Freehand521 BT;Adobe Naskh Medium;Chaparral Pro Light;Swis721 Hv BT;WP Greek Courier;WP Greek Century;DejaVu Sans;WP Greek Helve;WP MultinationalA Roman;WP MultinationalB Courier;WP MultinationalB Roman;DejaVu Sans Mono;WP MultinationalA Helve;WP MultinationalB Helve;WP MultinationalA Courier;DejaVu Serif;OpenSymbol;Swis721 Cn BT;DejaVu Sans Light;Swis721 LtEx BT;Swis721 BlkCn BT;DejaVu Sans Condensed;DejaVu Serif Condensed;WP ArabicScript Sihafa;Arno Pro;WP Arabic Sihafa;WP Hebrew David;Arno Pro Light Display;Arno Pro Display;Arno Pro Smbd Caption;Arno Pro Caption;Arno Pro Subhead;Arno Pro SmText;Arno Pro Smbd Display;Arno Pro Smbd SmText;Arno Pro Smbd;Arno Pro Smbd Subhead;Bickham Script Pro Regular;Bickham Script Pro Semibold;Garamond Premr Pro;Garamond Premr Pro Smbd;Gentium Book Basic;Gentium Basic;GothicI;GothicE;BankGothic Lt BT;BankGothic Md BT;Bickham Script Two;ISOCTEUR;ISOCPEUR;Dutch801 Rm BT;CommercialScript BT;ScriptS;TeamViewer8;Swis721 BlkEx BT;Swis721 BdCnOul BT;Monotxt;GothicG;Swis721 Ex BT;Swis721 LtCn BT;RomanD;Dutch801 XBd BT;Txt;Vineta BT;GreekS;Monospac821 BT;ScriptC;CountryBlueprint;Complex;Swis721 BlkOul BT;GreekC;Simplex;ISOCP2;Technic;ISOCP3;Swis721 BdOul BT;ISOCP;TechnicBold;RomanS;WST_Engl;TechnicLite;RomanT;Romantic;Symeteo;WST_Fren;CityBlueprint;ISOCT2;Symath;ISOCT3;GDT;Syastro;Symap;ISOCT;RomanC;ItalicC;SansSerif;EuroRoman;Symusic;ItalicT;CommercialPi BT;Proxy 1;Proxy 2;WST_Czec;Proxy 6;Proxy 5;Proxy 4;Proxy 3;PanRoman;Italic;Stylus BT;Proxy 9;Proxy 8;WST_Germ;Proxy 7;SuperFrench;UniversalMath1 BT;WST_Ital;WST_Swed;WST_Span;AmdtSymbols;AMGDT;AcadEref;AIGDT;ZWAdobeF;Bickham Script One;Microsoft JhengHei UI;Amadeus;Microsoft YaHei UI;Copyist;Gadugi;Nirmala UI;Segoe UI Semilight;Ariston;Heather Script One;Carolina;Myriad Web Pro;Alexandra Script;Square721 BT;AnastasiaScript;GENISO;Calligraph;Ouverture script;Decor;Helvetica;Annabelle;Clarendon Lt BT;Clarendon Blk BT;Liberation Sans Narrow;Clarendon BT;Ceremonious Two;Eurostile".split(";"),
                        function (a, d) {
                            b.detect(a) && c.push(a)
                        });
                    return {count: c.length, hash: l.crc32(c.join("~")), elapsed: new Date - a}
                }, collectTimeZone: function () {
                    try {
                        var a = new Date((new Date).getFullYear(), 0, 10), b = new Date(a.toGMTString().replace(/ (GMT|UTC)/, ""));
                        m.timeZone = (a - b) / 36E5
                    } catch (c) {
                        l.reportError("cTZ", c)
                    }
                }, collectCapabilities: function () {
                    var a = new Date;
                    m.capabilities = {js: {}, css: {}, elapsed: -1};
                    g.each("audio canvas dragDrop geolocation hires history localStorage orientation svg touch video".split(" "), function (a,
                                                                                                                                            b) {
                        m.capabilities.js[a] = g.capabilities[a]
                    });
                    g.each("textShadow textStroke boxShadow borderRadius borderImage opacity transform transform3d transition".split(" "), function (a, b) {
                        m.capabilities.css[a] = g.capabilities[a]
                    });
                    m.capabilities.elapsed = new Date - a
                }, collectLocalStorageIdentifier: f, saveLocalStorageIdentifier: n, embedMercury: function (a, b) {
                    t.fwcim = new y(a);
                    try {
                        if (m.container && m.flashVersion && !(9 > m.flashVersion.split(".")[0]) && b !== v) {
                            m.lsUbid === v && f();
                            var c = m.lsUbid, d = q(), c = b + "?value1=" + c + "&vip=" + d,
                                e;
                            if (navigator.userAgent.match(/MSIE [0-9.]+/i)) {
                                d = [];
                                d.push('id="mercury"');
                                d.push('classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"');
                                d.push('width="0"');
                                d.push('height="0"');
                                var g = document.createElement("div");
                                g.innerHTML = "<object " + d.join(" ") + '><param name="movie" value="' + c + '"/><param name="bgcolor" value="#ffffff"/><param name="AllowScriptAccess" value="always"/></object>';
                                e = g.firstChild
                            } else e = document.createElement("object"), e.id = "mercury", e.setAttribute("style", "visibility:hidden"),
                                e.setAttribute("type", "application/x-shockwave-flash"), e.setAttribute("data", c), e.innerHTML = '<param name="bgcolor" value="#ffffff"/><param name="AllowScriptAccess" value="always"/><embed src="' + c + '" bgcolor="#ffffff" AllowScriptAccess="always" width="0" height="0"/>', e.setAttribute("width", "0"), e.setAttribute("height", "0");
                            m.container.append(e)
                        }
                    } catch (h) {
                        l.reportError("eM", h), l.reportMetadata(a)
                    }
                }
            }
        });
        q.when("A", "fwcim-data", "fwcim-reporter").register("fwcim-handler", function (g, m, l) {
            function h(d) {
                this.timeStampLastKeyPressed =
                    this.pastes = this.copies = this.cuts = this.keyPresses = this.timeSpent = this.startTimeInCaptcha = 0;
                this.keyPressTimeIntervals = [];
                this.mouseClickPositions = [];
                this.refreshes = this.mouseClicks = 0
            }

            function e(d) {
                0 !== k(d).length && k(d).is("form") && k(d).bind("submit", function () {
                    m.timeToSubmit = new Date - m.start;
                    m.captchaTelemetry && 0 !== m.captchaTelemetry.startTimeInCaptcha && (m.captchaTelemetry.timeSpent += new Date - m.captchaTelemetry.startTimeInCaptcha, m.captchaTelemetry.startTimeInCaptcha = 0);
                    l.reportMetadataInForm(d)
                })
            }

            var k = g.$;
            return {
                initInteractionHandlers: function () {
                    m.numClicks = 0;
                    m.keyPresses = 0;
                    m.keyCopies = 0;
                    m.keyCuts = 0;
                    m.keyPastes = 0;
                    k(document).bind("keydown", function () {
                        m.keyPresses++
                    }).bind("click", function () {
                        m.numClicks++
                    }).bind("cut", function () {
                        m.keyCuts++
                    }).bind("copy", function () {
                        m.keyCopies++
                    }).bind("paste", function () {
                        m.keyPastes++
                    });
                    k(t).bind("beforeunload", function (d) {
                        l.reportMetadataToCSM()
                    });
                    k("#ap_captcha_guess, #auth-captcha-guess, .fwcim-captcha-guess").length && (m.captchaTelemetry = new h, k("#ap_captcha_guess, #auth-captcha-guess, .fwcim-captcha-guess").bind("click",
                        function (d) {
                            m.captchaTelemetry.mouseClicks++;
                            10 >= m.captchaTelemetry.mouseClickPositions.length && m.captchaTelemetry.mouseClickPositions.push(d.clientX + "," + d.clientY)
                        }).bind("keydown", function () {
                        m.captchaTelemetry.keyPresses++;
                        if (10 >= m.captchaTelemetry.keyPressTimeIntervals.length) {
                            var d = new Date;
                            m.captchaTelemetry.keyPressTimeIntervals.push(d - m.captchaTelemetry.timeStampLastKeyPressed);
                            m.captchaTelemetry.timeStampLastKeyPressed = d
                        }
                    }).bind("focus", function () {
                        0 === m.captchaTelemetry.timeStampLastKeyPressed &&
                        (m.captchaTelemetry.timeStampLastKeyPressed = new Date);
                        m.captchaTelemetry.startTimeInCaptcha = new Date
                    }).bind("blur", function () {
                        m.captchaTelemetry.timeSpent += new Date - m.captchaTelemetry.startTimeInCaptcha;
                        m.captchaTelemetry.startTimeInCaptcha = 0
                    }).bind("copy", function () {
                        m.captchaTelemetry.copies++
                    }).bind("cut", function () {
                        m.captchaTelemetry.cuts++
                    }).bind("paste", function () {
                        m.captchaTelemetry.pastes++
                    }), k(".fwcim-captcha-refresh,#ap_captcha_refresh_link,#auth-captcha-refresh-link,#auth-refresh-audio,#auth-switch-captcha-to-audio,#auth-switch-captcha-to-image").bind("click",
                        function () {
                            m.captchaTelemetry.refreshes++
                        }))
                }, initSubmitHandlersForFormSelector: function (d) {
                    k(d).each(function () {
                        e(this)
                    })
                }
            }
        });
        q.when("A", "fwcim-data").register("fwcim-reporter", function (g, m) {
            function l(a, b) {
                m.errors.push("[" + a + "] " + h(b.message && (b.name || "Error") + ": " + b.message || b.toString()))
            }

            function h(a) {
                a = a.replace(/\\/g, "\\\\");
                a = a.replace(/"/g, '\\"');
                a = a.replace(/\f/g, "\\f");
                a = a.replace(/\t/g, "\\t");
                a = a.replace(/[\r\n]/g, "");
                return a = a.replace(/[\u0000-\u001F]/g, "")
            }

            function e(a) {
                for (var b =
                    [], c = 0; c < a.length; c++) {
                    var d = a.charCodeAt(c);
                    128 > d ? b.push(String.fromCharCode(d)) : (128 <= d && 2048 > d ? b.push(String.fromCharCode(d >> 6 | 192)) : (b.push(String.fromCharCode(d >> 12 | 224)), b.push(String.fromCharCode(d >> 6 & 63 | 128))), b.push(String.fromCharCode(d & 63 | 128)))
                }
                return b.join("")
            }

            function k(a) {
                for (var b = [], c, d, e, f, g, h, k = 0; k < a.length;)c = a.charCodeAt(k++), d = a.charCodeAt(k++), e = a.charCodeAt(k++), f = c >> 2, c = (c & 3) << 4 | d >> 4, g = (d & 15) << 2 | e >> 6, h = e & 63, isNaN(d) ? g = h = 64 : isNaN(e) && (h = 64), b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f)),
                    b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c)), b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(g)), b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(h));
                return b.join("")
            }

            function d(a) {
                return ["0123456789ABCDEF".charAt(a >>> 28 & 15), "0123456789ABCDEF".charAt(a >>> 24 & 15), "0123456789ABCDEF".charAt(a >>> 20 & 15), "0123456789ABCDEF".charAt(a >>> 16 & 15), "0123456789ABCDEF".charAt(a >>> 12 & 15), "0123456789ABCDEF".charAt(a >>>
                    8 & 15), "0123456789ABCDEF".charAt(a >>> 4 & 15), "0123456789ABCDEF".charAt(a & 15)].join("")
            }

            function c(a) {
                if (0 === m.crc_table.length)for (var b = 0; 256 > b; b++) {
                    for (var c = b, d = 0; 8 > d; d++)c = c & 1 ? c >>> 1 ^ 3988292384 : c >>> 1;
                    m.crc_table[b] = c
                }
                c = -1;
                for (b = 0; b < a.length; b++)d = (c ^ a.charCodeAt(b)) & 255, c = c >>> 8 ^ m.crc_table[d];
                return c ^ 4294967295
            }

            function b() {
                var a;
                if (!m.pluginPrint) {
                    m.pluginPrint = "";
                    m.dupedPluginPrint = "";
                    if (0 < m.plugins.length) {
                        a = m.plugins;
                        for (var b = 0; b < a.length; b++) {
                            var f = a[b];
                            -1 === m.pluginPrint.indexOf(f.name) &&
                            (m.pluginPrint += f.str);
                            m.dupedPluginPrint += f.str
                        }
                    } else m.pluginPrint = "unknown", m.dupedPluginPrint = "unknown";
                    m.pluginPrint += "||" + m.screenInfo;
                    m.dupedPluginPrint += "||" + m.screenInfo
                }
                a = [];
                a.push('"version":"' + m.scriptVersion + '"');
                a.push('"start":' + m.start.getTime());
                a.push('"elapsed":' + (m.end - m.start));
                a.push('"userAgent":"' + h(navigator.userAgent) + '"');
                a.push('"plugins":"' + h(m.pluginPrint) + '"');
                a.push('"dupedPlugins":"' + h(m.dupedPluginPrint) + '"');
                m.acceptCharset && a.push('"acceptCharset":"' + h(m.acceptCharset) +
                    '"');
                m.acceptLanguage && a.push('"acceptLanguage":"' + h(m.acceptLanguage) + '"');
                m.flashVersion && a.push('"flashVersion":"' + h(m.flashVersion) + '"');
                (m.timeZone || 0 === m.timeZone) && a.push('"timeZone":' + m.timeZone);
                m.lsUbid && a.push('"lsUbid":"' + h(m.lsUbid) + '"');
                m.mercuryData && a.push('"mercury":' + m.mercuryData);
                m.scripts && a.push('"scripts":' + JSON.stringify(m.scripts));
                m.fonts && a.push('"fonts" : { "hash":' + m.fonts.hash + ',"count":' + m.fonts.count + ',"elapsed":' + m.fonts.elapsed + " }");
                m.capabilities && a.push('"capabilities": ' +
                    JSON.stringify(m.capabilities));
                m.timeToSubmit && (a.push('"timeToSubmit":' + m.timeToSubmit), b = [], b.push('"keys":' + m.keyPresses), b.push('"copies":' + m.keyCopies), b.push('"cuts":' + m.keyCuts), b.push('"pastes":' + m.keyPastes), b.push('"clicks":' + m.numClicks), a.push('"interaction":{' + b.join(",") + "}"));
                m.captchaTelemetry && (b = m.captchaTelemetry, f = [], f.push('"time":' + b.timeSpent), f.push('"keys":' + b.keyPresses), f.push('"refreshes":' + b.refreshes), f.push('"cuts":' + b.cuts), f.push('"copies":' + b.copies), f.push('"pastes":' +
                    b.pastes), f.push('"mouseClicks":' + b.mouseClicks), f.push('"keyPressTimeIntervals":[' + b.keyPressTimeIntervals.join(",") + "]"), f.push('"mouseClickPositions":["' + b.mouseClickPositions.join('","') + '"]'), a.push('"captcha":{' + f.join(",") + "}"));
                0 < m.errors.length && a.push('"errors":["' + m.errors.join('","') + '"]');
                a = e("{" + a.join(",") + "}");
                var g = d(c(a)) + "#" + a;
                if (0 === g.length)a = ""; else {
                    f = m.xxteaKey;
                    a = Math.ceil(g.length / 4);
                    for (var b = [], l = 0; l < a; l++)b[l] = (g.charCodeAt(4 * l) & 255) + ((g.charCodeAt(4 * l + 1) & 255) << 8) + ((g.charCodeAt(4 *
                            l + 2) & 255) << 16) + ((g.charCodeAt(4 * l + 3) & 255) << 24);
                    for (var l = Math.floor(6 + 52 / a), g = b[0], q = b[a - 1], t = 0; 0 < l--;)for (var t = t + 2654435769, v = t >>> 2 & 3, C = 0; C < a; C++)g = b[(C + 1) % a], q = b[C] += (q >>> 5 ^ g << 2) + (g >>> 3 ^ q << 4) ^ (t ^ g) + (f[C & 3 ^ v] ^ q);
                    f = [];
                    for (l = 0; l < a; l++)f[l] = String.fromCharCode(b[l] & 255, b[l] >>> 8 & 255, b[l] >>> 16 & 255, b[l] >>> 24 & 255);
                    a = f.join("")
                }
                return k(a)
            }

            function a(a) {
                if (0 !== f(a).length && f(a).is("form")) {
                    var c = b();
                    try {
                        0 === f(a).children('input[type="hidden"][name="metadata1"]').length && f(a).append('<input type="hidden" name="metadata1"/>'),
                            f(a).children('input[type="hidden"][name="metadata1"]').val(c)
                    } catch (d) {
                        l("rMDIF", d)
                    }
                }
            }

            var f = g.$;
            m.xxteaKey.push(4087877101);
            m.xxteaKey.push(1706678977);
            return {
                reportError: l,
                escapeJSON: h,
                encodeUTF8: e,
                encodeBase64: k,
                encodeHex: d,
                crc32: c,
                reportMetadata: function (b) {
                    f(b).each(function () {
                        a(this)
                    })
                },
                reportMetadataInForm: a,
                reportMetadataToCSM: function () {
                    if (t.ue && t.ue.log)try {
                        ue.log({k: "fwcim", value: b()}, "csm")
                    } catch (a) {
                        l("rMTC", a)
                    }
                }
            }
        });
        q.when("A", "fwcim-data", "fwcim-collector", "fwcim-handler",
            "fwcim-reporter").register("fwcim-profiler", function (g, m, l, h, e) {
            var k = g.$;
            m.xxteaKey.push(3681020276);
            return {
                profile: function (d, c) {
                    m.start = new Date;
                    try {
                        k(document.body).append('<div id="fwcim-container"></div>'), m.container = k("#fwcim-container"), m.container || e.reportError("profile", Error("no container")), l.collectPlugins(), l.collectScreen(), l.collectTimeZone(), l.collectCapabilities(), l.collectLocalStorageIdentifier(), m.scripts = l.collectScripts()
                    } catch (b) {
                        e.reportError("profile", b)
                    }
                    m.end = new Date;
                    h.initInteractionHandlers();
                    0 !== k(d).length && (h.initSubmitHandlersForFormSelector(d), e.reportMetadata(d), c !== v && setTimeout(function () {
                        l.embedMercury(d, c)
                    }, 1))
                }
            }
        });
        q.when("A", "fwcim-data", "fwcim-profiler", "ready").execute("fwcim-profiler-ex", function (g, m, l) {
            m = g.$;
            g = g.state("fwcim-profiler-data");
            var h;
            g && (g.mercuryLocation && (h = g.mercuryLocation), g = m('form[name="' + g.formName + '"]'), 0 !== g.length && g.is("form") && !g.hasClass("fwcim-form") && g.addClass("fwcim-form"));
            l.profile(".fwcim-form", h)
        })
    })()
})(function () {
    var q =
        window.AmazonUIPageJS || window.P, t = q._namespace || q.attributeErrors;
    return t ? t("FWCIMAssets") : q
}(), window);