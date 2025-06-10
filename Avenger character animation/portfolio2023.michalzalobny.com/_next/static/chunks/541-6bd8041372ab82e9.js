(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [541], {
        990: function(t, e, n) {
            "use strict";
            n.d(e, {
                ZP: function() {
                    return tC
                }
            });
            var r, i, s, o, a, l, p, c, u, f, h = n(5317),
                d = {},
                g = 180 / Math.PI,
                m = Math.PI / 180,
                y = Math.atan2,
                x = /([A-Z])/g,
                v = /(left|right|width|margin|padding|x)/i,
                w = /[\s,\(]\S/,
                b = {
                    autoAlpha: "opacity,visibility",
                    scale: "scaleX,scaleY",
                    alpha: "opacity"
                },
                O = function(t, e) {
                    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
                },
                C = function(t, e) {
                    return e.set(e.t, e.p, 1 === t ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
                },
                P = function(t, e) {
                    return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e)
                },
                M = function(t, e) {
                    var n = e.s + e.c * t;
                    e.set(e.t, e.p, ~~(n + (n < 0 ? -.5 : .5)) + e.u, e)
                },
                _ = function(t, e) {
                    return e.set(e.t, e.p, t ? e.e : e.b, e)
                },
                F = function(t, e) {
                    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
                },
                S = function(t, e, n) {
                    return t.style[e] = n
                },
                E = function(t, e, n) {
                    return t.style.setProperty(e, n)
                },
                A = function(t, e, n) {
                    return t._gsap[e] = n
                },
                $ = function(t, e, n) {
                    return t._gsap.scaleX = t._gsap.scaleY = n
                },
                N = function(t, e, n, r, i) {
                    var s = t._gsap;
                    s.scaleX = s.scaleY = n, s.renderTransform(i, s)
                },
                T = function(t, e, n, r, i) {
                    var s = t._gsap;
                    s[e] = n, s.renderTransform(i, s)
                },
                W = "transform",
                B = W + "Origin",
                Y = function(t, e) {
                    var n = this,
                        r = this.target,
                        i = r.style;
                    if (t in d) {
                        if (this.tfm = this.tfm || {}, "transform" !== t && (~(t = b[t] || t).indexOf(",") ? t.split(",").forEach(function(t) {
                                return n.tfm[t] = tt(r, t)
                            }) : this.tfm[t] = r._gsap.x ? r._gsap[t] : tt(r, t)), this.props.indexOf(W) >= 0) return;
                        r._gsap.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(B, e, "")), t = W
                    }(i || e) && this.props.push(t, e, i[t])
                },
                k = function(t) {
                    t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
                },
                X = function() {
                    var t, e, n = this.props,
                        r = this.target,
                        i = r.style,
                        s = r._gsap;
                    for (t = 0; t < n.length; t += 3) n[t + 1] ? r[n[t]] = n[t + 2] : n[t + 2] ? i[n[t]] = n[t + 2] : i.removeProperty(n[t].replace(x, "-$1").toLowerCase());
                    if (this.tfm) {
                        for (e in this.tfm) s[e] = this.tfm[e];
                        s.svg && (s.renderTransform(), r.setAttribute("data-svg-origin", this.svgo || "")), (t = u()) && !t.isStart && !i[W] && (k(i), s.uncache = 1)
                    }
                },
                D = function(t, e) {
                    var n = {
                        target: t,
                        props: [],
                        revert: X,
                        save: Y
                    };
                    return e && e.split(",").forEach(function(t) {
                        return n.save(t)
                    }), n
                },
                j = function(t, e) {
                    var n = o.createElementNS ? o.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : o.createElement(t);
                    return n.style ? n : o.createElement(t)
                },
                z = function t(e, n, r) {
                    var i = getComputedStyle(e);
                    return i[n] || i.getPropertyValue(n.replace(x, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && t(e, L(n) || n, 1) || ""
                },
                I = "O,Moz,ms,Ms,Webkit".split(","),
                L = function(t, e, n) {
                    var r = (e || p).style,
                        i = 5;
                    if (t in r && !n) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(I[i] + t in r););
                    return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? I[i] : "") + t
                },
                V = function() {
                    "undefined" != typeof window && window.document && (a = (o = window.document).documentElement, p = j("div") || {
                        style: {}
                    }, j("div"), B = (W = L(W)) + "Origin", p.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", f = !!L("perspective"), u = h.p8.core.reverting, l = 1)
                },
                R = function t(e) {
                    var n, r = j("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                        i = this.parentNode,
                        s = this.nextSibling,
                        o = this.style.cssText;
                    if (a.appendChild(r), r.appendChild(this), this.style.display = "block", e) try {
                        n = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
                    } catch (l) {} else this._gsapBBox && (n = this._gsapBBox());
                    return i && (s ? i.insertBefore(this, s) : i.appendChild(this)), a.removeChild(r), this.style.cssText = o, n
                },
                U = function(t, e) {
                    for (var n = e.length; n--;)
                        if (t.hasAttribute(e[n])) return t.getAttribute(e[n])
                },
                H = function(t) {
                    var e;
                    try {
                        e = t.getBBox()
                    } catch (n) {
                        e = R.call(t, !0)
                    }
                    return e && (e.width || e.height) || t.getBBox === R || (e = R.call(t, !0)), !e || e.width || e.x || e.y ? e : {
                        x: +U(t, ["x", "cx", "x1"]) || 0,
                        y: +U(t, ["y", "cy", "y1"]) || 0,
                        width: 0,
                        height: 0
                    }
                },
                Z = function(t) {
                    return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && H(t))
                },
                q = function(t, e) {
                    if (e) {
                        var n = t.style;
                        e in d && e !== B && (e = W), n.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), n.removeProperty(e.replace(x, "-$1").toLowerCase())) : n.removeAttribute(e)
                    }
                },
                G = function(t, e, n, r, i, s) {
                    var o = new h.Fo(t._pt, e, n, 0, 1, s ? F : _);
                    return t._pt = o, o.b = r, o.e = i, t._props.push(n), o
                },
                K = {
                    deg: 1,
                    rad: 1,
                    turn: 1
                },
                J = {
                    grid: 1,
                    flex: 1
                },
                Q = function t(e, n, r, i) {
                    var s, a, l, c, u = parseFloat(r) || 0,
                        f = (r + "").trim().substr((u + "").length) || "px",
                        g = p.style,
                        m = v.test(n),
                        y = "svg" === e.tagName.toLowerCase(),
                        x = (y ? "client" : "offset") + (m ? "Width" : "Height"),
                        w = "px" === i,
                        b = "%" === i;
                    return i === f || !u || K[i] || K[f] ? u : ("px" === f || w || (u = t(e, n, r, "px")), c = e.getCTM && Z(e), (b || "%" === f) && (d[n] || ~n.indexOf("adius"))) ? (s = c ? e.getBBox()[m ? "width" : "height"] : e[x], (0, h.Pr)(b ? u / s * 100 : u / 100 * s)) : (g[m ? "width" : "height"] = 100 + (w ? f : i), a = ~n.indexOf("adius") || "em" === i && e.appendChild && !y ? e : e.parentNode, c && (a = (e.ownerSVGElement || {}).parentNode), a && a !== o && a.appendChild || (a = o.body), (l = a._gsap) && b && l.width && m && l.time === h.xr.time && !l.uncache) ? (0, h.Pr)(u / l.width * 100) : ((b || "%" === f) && !J[z(a, "display")] && (g.position = z(e, "position")), a === e && (g.position = "static"), a.appendChild(p), s = p[x], a.removeChild(p), g.position = "absolute", m && b && ((l = (0, h.DY)(a)).time = h.xr.time, l.width = a[x]), (0, h.Pr)(w ? s * u / 100 : s && u ? 100 / s * u : 0))
                },
                tt = function(t, e, n, r) {
                    var i;
                    return l || V(), e in b && "transform" !== e && ~(e = b[e]).indexOf(",") && (e = e.split(",")[0]), d[e] && "transform" !== e ? (i = tf(t, r), i = "transformOrigin" !== e ? i[e] : i.svg ? i.origin : th(z(t, B)) + " " + i.zOrigin + "px") : (!(i = t.style[e]) || "auto" === i || r || ~(i + "").indexOf("calc(")) && (i = ts[e] && ts[e](t, e, n) || z(t, e) || (0, h.Ok)(t, e) || ("opacity" === e ? 1 : 0)), n && !~(i + "").trim().indexOf(" ") ? Q(t, e, i, n) + n : i
                },
                te = function(t, e, n, r) {
                    if (!n || "none" === n) {
                        var i = L(e, t, 1),
                            s = i && z(t, i, 1);
                        s && s !== n ? (e = i, n = s) : "borderColor" === e && (n = z(t, "borderTopColor"))
                    }
                    var o, a, l, p, c, u, f, d, g, m, y, x = new h.Fo(this._pt, t.style, e, 0, 1, h.Ks),
                        v = 0,
                        w = 0;
                    if (x.b = n, x.e = r, n += "", "auto" == (r += "") && (t.style[e] = r, r = z(t, e) || r, t.style[e] = n), o = [n, r], (0, h.kr)(o), n = o[0], r = o[1], l = n.match(h.d4) || [], (r.match(h.d4) || []).length) {
                        for (; a = h.d4.exec(r);) f = a[0], g = r.substring(v, a.index), c ? c = (c + 1) % 5 : ("rgba(" === g.substr(-5) || "hsla(" === g.substr(-5)) && (c = 1), f !== (u = l[w++] || "") && (p = parseFloat(u) || 0, y = u.substr((p + "").length), "=" === f.charAt(1) && (f = (0, h.cy)(p, f) + y), d = parseFloat(f), m = f.substr((d + "").length), v = h.d4.lastIndex - m.length, m || (m = m || h.Fc.units[e] || y, v !== r.length || (r += m, x.e += m)), y !== m && (p = Q(t, e, u, m) || 0), x._pt = {
                            _next: x._pt,
                            p: g || 1 === w ? g : ",",
                            s: p,
                            c: d - p,
                            m: c && c < 4 || "zIndex" === e ? Math.round : 0
                        });
                        x.c = v < r.length ? r.substring(v, r.length) : ""
                    } else x.r = "display" === e && "none" === r ? F : _;
                    return h.bQ.test(r) && (x.e = 0), this._pt = x, x
                },
                tn = {
                    top: "0%",
                    bottom: "100%",
                    left: "0%",
                    right: "100%",
                    center: "50%"
                },
                tr = function(t) {
                    var e = t.split(" "),
                        n = e[0],
                        r = e[1] || "50%";
                    return ("top" === n || "bottom" === n || "left" === r || "right" === r) && (t = n, n = r, r = t), e[0] = tn[n] || n, e[1] = tn[r] || r, e.join(" ")
                },
                ti = function(t, e) {
                    if (e.tween && e.tween._time === e.tween._dur) {
                        var n, r, i, s = e.t,
                            o = s.style,
                            a = e.u,
                            l = s._gsap;
                        if ("all" === a || !0 === a) o.cssText = "", r = 1;
                        else
                            for (i = (a = a.split(",")).length; --i > -1;) d[n = a[i]] && (r = 1, n = "transformOrigin" === n ? B : W), q(s, n);
                        r && (q(s, W), l && (l.svg && s.removeAttribute("transform"), tf(s, 1), l.uncache = 1, k(o)))
                    }
                },
                ts = {
                    clearProps: function(t, e, n, r, i) {
                        if ("isFromStart" !== i.data) {
                            var s = t._pt = new h.Fo(t._pt, e, n, 0, 0, ti);
                            return s.u = r, s.pr = -10, s.tween = i, t._props.push(n), 1
                        }
                    }
                },
                to = [1, 0, 0, 1, 0, 0],
                ta = {},
                tl = function(t) {
                    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
                },
                tp = function(t) {
                    var e = z(t, W);
                    return tl(e) ? to : e.substr(7).match(h.SI).map(h.Pr)
                },
                tc = function(t, e) {
                    var n, r, i, s, o = t._gsap || (0, h.DY)(t),
                        l = t.style,
                        p = tp(t);
                    return o.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (p = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? to : p : (p !== to || t.offsetParent || t === a || o.svg || (i = l.display, l.display = "block", (n = t.parentNode) && t.offsetParent || (s = 1, r = t.nextElementSibling, a.appendChild(t)), p = tp(t), i ? l.display = i : q(t, "display"), s && (r ? n.insertBefore(t, r) : n ? n.appendChild(t) : a.removeChild(t))), e && p.length > 6 ? [p[0], p[1], p[4], p[5], p[12], p[13]] : p)
                },
                tu = function(t, e, n, r, i, s) {
                    var o, a, l, p, c = t._gsap,
                        u = i || tc(t, !0),
                        f = c.xOrigin || 0,
                        h = c.yOrigin || 0,
                        d = c.xOffset || 0,
                        g = c.yOffset || 0,
                        m = u[0],
                        y = u[1],
                        x = u[2],
                        v = u[3],
                        w = u[4],
                        b = u[5],
                        O = e.split(" "),
                        C = parseFloat(O[0]) || 0,
                        P = parseFloat(O[1]) || 0;
                    n ? u !== to && (a = m * v - y * x) && (l = C * (v / a) + P * (-x / a) + (x * b - v * w) / a, p = C * (-y / a) + P * (m / a) - (m * b - y * w) / a, C = l, P = p) : (C = (o = H(t)).x + (~O[0].indexOf("%") ? C / 100 * o.width : C), P = o.y + (~(O[1] || O[0]).indexOf("%") ? P / 100 * o.height : P)), r || !1 !== r && c.smooth ? (w = C - f, b = P - h, c.xOffset = d + (w * m + b * x) - w, c.yOffset = g + (w * y + b * v) - b) : c.xOffset = c.yOffset = 0, c.xOrigin = C, c.yOrigin = P, c.smooth = !!r, c.origin = e, c.originIsAbsolute = !!n, t.style[B] = "0px 0px", s && (G(s, c, "xOrigin", f, C), G(s, c, "yOrigin", h, P), G(s, c, "xOffset", d, c.xOffset), G(s, c, "yOffset", g, c.yOffset)), t.setAttribute("data-svg-origin", C + " " + P)
                },
                tf = function(t, e) {
                    var n = t._gsap || new h.l1(t);
                    if ("x" in n && !e && !n.uncache) return n;
                    var r, i, s, o, a, l, p, c, u, d, x, v, w, b, O, C, P, M, _, F, S, E, A, $, N, T, Y, k, X, D, j, I, L = t.style,
                        V = n.scaleX < 0,
                        R = getComputedStyle(t),
                        U = z(t, B) || "0";
                    return r = i = s = l = p = c = u = d = x = 0, o = a = 1, n.svg = !!(t.getCTM && Z(t)), R.translate && (("none" !== R.translate || "none" !== R.scale || "none" !== R.rotate) && (L[W] = ("none" !== R.translate ? "translate3d(" + (R.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== R.rotate ? "rotate(" + R.rotate + ") " : "") + ("none" !== R.scale ? "scale(" + R.scale.split(" ").join(",") + ") " : "") + ("none" !== R[W] ? R[W] : "")), L.scale = L.rotate = L.translate = "none"), b = tc(t, n.svg), n.svg && (n.uncache ? (N = t.getBBox(), U = n.xOrigin - N.x + "px " + (n.yOrigin - N.y) + "px", $ = "") : $ = !e && t.getAttribute("data-svg-origin"), tu(t, $ || U, !!$ || n.originIsAbsolute, !1 !== n.smooth, b)), v = n.xOrigin || 0, w = n.yOrigin || 0, b !== to && (M = b[0], _ = b[1], F = b[2], S = b[3], r = E = b[4], i = A = b[5], 6 === b.length ? (o = Math.sqrt(M * M + _ * _), a = Math.sqrt(S * S + F * F), l = M || _ ? y(_, M) * g : 0, (u = F || S ? y(F, S) * g + l : 0) && (a *= Math.abs(Math.cos(u * m))), n.svg && (r -= v - (v * M + w * F), i -= w - (v * _ + w * S))) : (I = b[6], D = b[7], Y = b[8], k = b[9], X = b[10], j = b[11], r = b[12], i = b[13], s = b[14], p = (O = y(I, X)) * g, O && ($ = E * (C = Math.cos(-O)) + Y * (P = Math.sin(-O)), N = A * C + k * P, T = I * C + X * P, Y = -(E * P) + Y * C, k = -(A * P) + k * C, X = -(I * P) + X * C, j = -(D * P) + j * C, E = $, A = N, I = T), c = (O = y(-F, X)) * g, O && ($ = M * (C = Math.cos(-O)) - Y * (P = Math.sin(-O)), N = _ * C - k * P, T = F * C - X * P, j = S * P + j * C, M = $, _ = N, F = T), l = (O = y(_, M)) * g, O && (C = Math.cos(O), P = Math.sin(O), $ = M * C + _ * P, N = E * C + A * P, _ = _ * C - M * P, A = A * C - E * P, M = $, E = N), p && Math.abs(p) + Math.abs(l) > 359.9 && (p = l = 0, c = 180 - c), o = (0, h.Pr)(Math.sqrt(M * M + _ * _ + F * F)), a = (0, h.Pr)(Math.sqrt(A * A + I * I)), u = Math.abs(O = y(E, A)) > 2e-4 ? O * g : 0, x = j ? 1 / (j < 0 ? -j : j) : 0), n.svg && ($ = t.getAttribute("transform"), n.forceCSS = t.setAttribute("transform", "") || !tl(z(t, W)), $ && t.setAttribute("transform", $))), Math.abs(u) > 90 && 270 > Math.abs(u) && (V ? (o *= -1, u += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (a *= -1, u += u <= 0 ? 180 : -180)), e = e || n.uncache, n.x = r - ((n.xPercent = r && (!e && n.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetWidth * n.xPercent / 100 : 0) + "px", n.y = i - ((n.yPercent = i && (!e && n.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetHeight * n.yPercent / 100 : 0) + "px", n.z = s + "px", n.scaleX = (0, h.Pr)(o), n.scaleY = (0, h.Pr)(a), n.rotation = (0, h.Pr)(l) + "deg", n.rotationX = (0, h.Pr)(p) + "deg", n.rotationY = (0, h.Pr)(c) + "deg", n.skewX = u + "deg", n.skewY = d + "deg", n.transformPerspective = x + "px", (n.zOrigin = parseFloat(U.split(" ")[2]) || 0) && (L[B] = th(U)), n.xOffset = n.yOffset = 0, n.force3D = h.Fc.force3D, n.renderTransform = n.svg ? tx : f ? ty : tg, n.uncache = 0, n
                },
                th = function(t) {
                    return (t = t.split(" "))[0] + " " + t[1]
                },
                td = function(t, e, n) {
                    var r = (0, h.Wy)(e);
                    return (0, h.Pr)(parseFloat(e) + parseFloat(Q(t, "x", n + "px", r))) + r
                },
                tg = function(t, e) {
                    e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, ty(t, e)
                },
                tm = "0deg",
                ty = function(t, e) {
                    var n = e || this,
                        r = n.xPercent,
                        i = n.yPercent,
                        s = n.x,
                        o = n.y,
                        a = n.z,
                        l = n.rotation,
                        p = n.rotationY,
                        c = n.rotationX,
                        u = n.skewX,
                        f = n.skewY,
                        h = n.scaleX,
                        d = n.scaleY,
                        g = n.transformPerspective,
                        y = n.force3D,
                        x = n.target,
                        v = n.zOrigin,
                        w = "",
                        b = "auto" === y && t && 1 !== t || !0 === y;
                    if (v && (c !== tm || p !== tm)) {
                        var O, C = parseFloat(p) * m,
                            P = Math.sin(C),
                            M = Math.cos(C);
                        s = td(x, s, -(P * (O = Math.cos(C = parseFloat(c) * m)) * v)), o = td(x, o, -(-Math.sin(C) * v)), a = td(x, a, -(M * O * v) + v)
                    }
                    "0px" !== g && (w += "perspective(" + g + ") "), (r || i) && (w += "translate(" + r + "%, " + i + "%) "), (b || "0px" !== s || "0px" !== o || "0px" !== a) && (w += "0px" !== a || b ? "translate3d(" + s + ", " + o + ", " + a + ") " : "translate(" + s + ", " + o + ") "), l !== tm && (w += "rotate(" + l + ") "), p !== tm && (w += "rotateY(" + p + ") "), c !== tm && (w += "rotateX(" + c + ") "), (u !== tm || f !== tm) && (w += "skew(" + u + ", " + f + ") "), (1 !== h || 1 !== d) && (w += "scale(" + h + ", " + d + ") "), x.style[W] = w || "translate(0, 0)"
                },
                tx = function(t, e) {
                    var n, r, i, s, o, a = e || this,
                        l = a.xPercent,
                        p = a.yPercent,
                        c = a.x,
                        u = a.y,
                        f = a.rotation,
                        d = a.skewX,
                        g = a.skewY,
                        y = a.scaleX,
                        x = a.scaleY,
                        v = a.target,
                        w = a.xOrigin,
                        b = a.yOrigin,
                        O = a.xOffset,
                        C = a.yOffset,
                        P = a.forceCSS,
                        M = parseFloat(c),
                        _ = parseFloat(u);
                    f = parseFloat(f), d = parseFloat(d), (g = parseFloat(g)) && (d += g = parseFloat(g), f += g), f || d ? (f *= m, d *= m, n = Math.cos(f) * y, r = Math.sin(f) * y, i = -(Math.sin(f - d) * x), s = Math.cos(f - d) * x, d && (g *= m, i *= o = Math.sqrt(1 + (o = Math.tan(d - g)) * o), s *= o, g && (n *= o = Math.sqrt(1 + (o = Math.tan(g)) * o), r *= o)), n = (0, h.Pr)(n), r = (0, h.Pr)(r), i = (0, h.Pr)(i), s = (0, h.Pr)(s)) : (n = y, s = x, r = i = 0), (M && !~(c + "").indexOf("px") || _ && !~(u + "").indexOf("px")) && (M = Q(v, "x", c, "px"), _ = Q(v, "y", u, "px")), (w || b || O || C) && (M = (0, h.Pr)(M + w - (w * n + b * i) + O), _ = (0, h.Pr)(_ + b - (w * r + b * s) + C)), (l || p) && (o = v.getBBox(), M = (0, h.Pr)(M + l / 100 * o.width), _ = (0, h.Pr)(_ + p / 100 * o.height)), o = "matrix(" + n + "," + r + "," + i + "," + s + "," + M + "," + _ + ")", v.setAttribute("transform", o), P && (v.style[W] = o)
                },
                tv = function(t, e, n, r, i) {
                    var s, o, a = (0, h.r9)(i),
                        l = parseFloat(i) * (a && ~i.indexOf("rad") ? g : 1) - r,
                        p = r + l + "deg";
                    return a && ("short" === (s = i.split("_")[1]) && (l %= 360) != l % 180 && (l += l < 0 ? 360 : -360), "cw" === s && l < 0 ? l = (l + 36e9) % 360 - 360 * ~~(l / 360) : "ccw" === s && l > 0 && (l = (l - 36e9) % 360 - 360 * ~~(l / 360))), t._pt = o = new h.Fo(t._pt, e, n, r, l, C), o.e = p, o.u = "deg", t._props.push(n), o
                },
                tw = function(t, e) {
                    for (var n in e) t[n] = e[n];
                    return t
                },
                tb = function(t, e, n) {
                    var r, i, s, o, a, l, p, c = tw({}, n._gsap),
                        u = n.style;
                    for (i in c.svg ? (s = n.getAttribute("transform"), n.setAttribute("transform", ""), u[W] = e, r = tf(n, 1), q(n, W), n.setAttribute("transform", s)) : (s = getComputedStyle(n)[W], u[W] = e, r = tf(n, 1), u[W] = s), d)(s = c[i]) !== (o = r[i]) && 0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) && (a = (0, h.Wy)(s) !== (p = (0, h.Wy)(o)) ? Q(n, i, s, p) : parseFloat(s), l = parseFloat(o), t._pt = new h.Fo(t._pt, r, i, a, l - a, O), t._pt.u = p || 0, t._props.push(i));
                    tw(r, c)
                };
            (0, h.fS)("padding,margin,Width,Radius", function(t, e) {
                var n = "Right",
                    r = "Bottom",
                    i = "Left",
                    s = (e < 3 ? ["Top", n, r, i] : ["Top" + i, "Top" + n, r + n, r + i]).map(function(n) {
                        return e < 2 ? t + n : "border" + n + t
                    });
                ts[e > 1 ? "border" + t : t] = function(t, e, n, r, i) {
                    var o, a;
                    if (arguments.length < 4) return 5 === (a = (o = s.map(function(e) {
                        return tt(t, e, n)
                    })).join(" ")).split(o[0]).length ? o[0] : a;
                    o = (r + "").split(" "), a = {}, s.forEach(function(t, e) {
                        return a[t] = o[e] = o[e] || o[(e - 1) / 2 | 0]
                    }), t.init(e, a, i)
                }
            });
            var tO = {
                name: "css",
                register: V,
                targetTest: function(t) {
                    return t.style && t.nodeType
                },
                init: function(t, e, n, r, i) {
                    var s, o, a, p, c, u, f, g, m, y, x, v, C, _, F, S, E = this._props,
                        A = t.style,
                        $ = n.vars.startAt;
                    for (f in l || V(), this.styles = this.styles || D(t), S = this.styles.props, this.tween = n, e)
                        if ("autoRound" !== f && (o = e[f], !(h.$i[f] && (0, h.if)(f, e, n, r, t, i)))) {
                            if (c = typeof o, u = ts[f], "function" === c && (c = typeof(o = o.call(n, r, t, i))), "string" === c && ~o.indexOf("random(") && (o = (0, h.UI)(o)), u) u(this, t, f, o, n) && (F = 1);
                            else if ("--" === f.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(f) + "").trim(), o += "", h.GN.lastIndex = 0, h.GN.test(s) || (g = (0, h.Wy)(s), m = (0, h.Wy)(o)), m ? g !== m && (s = Q(t, f, s, m) + m) : g && (o += g), this.add(A, "setProperty", s, o, r, i, 0, 0, f), E.push(f), S.push(f, 0, A[f]);
                            else if ("undefined" !== c) {
                                if ($ && f in $ ? (s = "function" == typeof $[f] ? $[f].call(n, r, t, i) : $[f], (0, h.r9)(s) && ~s.indexOf("random(") && (s = (0, h.UI)(s)), (0, h.Wy)(s + "") || (s += h.Fc.units[f] || (0, h.Wy)(tt(t, f)) || ""), "=" === (s + "").charAt(1) && (s = tt(t, f))) : s = tt(t, f), p = parseFloat(s), (y = "string" === c && "=" === o.charAt(1) && o.substr(0, 2)) && (o = o.substr(2)), a = parseFloat(o), f in b && ("autoAlpha" === f && (1 === p && "hidden" === tt(t, "visibility") && a && (p = 0), S.push("visibility", 0, A.visibility), G(this, A, "visibility", p ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== f && "transform" !== f && ~(f = b[f]).indexOf(",") && (f = f.split(",")[0])), x = f in d) {
                                    if (this.styles.save(f), v || ((C = t._gsap).renderTransform && !e.parseTransform || tf(t, e.parseTransform), _ = !1 !== e.smoothOrigin && C.smooth, (v = this._pt = new h.Fo(this._pt, A, W, 0, 1, C.renderTransform, C, 0, -1)).dep = 1), "scale" === f) this._pt = new h.Fo(this._pt, C, "scaleY", C.scaleY, (y ? (0, h.cy)(C.scaleY, y + a) : a) - C.scaleY || 0, O), this._pt.u = 0, E.push("scaleY", f), f += "X";
                                    else if ("transformOrigin" === f) {
                                        S.push(B, 0, A[B]), o = tr(o), C.svg ? tu(t, o, 0, _, 0, this) : ((m = parseFloat(o.split(" ")[2]) || 0) !== C.zOrigin && G(this, C, "zOrigin", C.zOrigin, m), G(this, A, f, th(s), th(o)));
                                        continue
                                    } else if ("svgOrigin" === f) {
                                        tu(t, o, 1, _, 0, this);
                                        continue
                                    } else if (f in ta) {
                                        tv(this, C, f, p, y ? (0, h.cy)(p, y + o) : o);
                                        continue
                                    } else if ("smoothOrigin" === f) {
                                        G(this, C, "smooth", C.smooth, o);
                                        continue
                                    } else if ("force3D" === f) {
                                        C[f] = o;
                                        continue
                                    } else if ("transform" === f) {
                                        tb(this, o, t);
                                        continue
                                    }
                                } else f in A || (f = L(f) || f);
                                if (x || (a || 0 === a) && (p || 0 === p) && !w.test(o) && f in A) g = (s + "").substr((p + "").length), a || (a = 0), m = (0, h.Wy)(o) || (f in h.Fc.units ? h.Fc.units[f] : g), g !== m && (p = Q(t, f, s, m)), this._pt = new h.Fo(this._pt, x ? C : A, f, p, (y ? (0, h.cy)(p, y + a) : a) - p, x || "px" !== m && "zIndex" !== f || !1 === e.autoRound ? O : M), this._pt.u = m || 0, g !== m && "%" !== m && (this._pt.b = s, this._pt.r = P);
                                else if (f in A) te.call(this, t, f, s, y ? y + o : o);
                                else if (f in t) this.add(t, f, s || t[f], y ? y + o : o, r, i);
                                else if ("parseTransform" !== f) {
                                    (0, h.lC)(f, o);
                                    continue
                                }
                                x || (f in A ? S.push(f, 0, A[f]) : S.push(f, 1, s || t[f])), E.push(f)
                            }
                        }
                    F && (0, h.JV)(this)
                },
                render: function(t, e) {
                    if (e.tween._time || !u())
                        for (var n = e._pt; n;) n.r(t, n.d), n = n._next;
                    else e.styles.revert()
                },
                get: tt,
                aliases: b,
                getSetter: function(t, e, n) {
                    var r = b[e];
                    return r && 0 > r.indexOf(",") && (e = r), e in d && e !== B && (t._gsap.x || tt(t, "x")) ? n && c === n ? "scale" === e ? $ : A : (c = n || {}, "scale" === e ? N : T) : t.style && !(0, h.m2)(t.style[e]) ? S : ~e.indexOf("-") ? E : (0, h.S5)(t, e)
                },
                core: {
                    _removeProperty: q,
                    _getMatrix: tc
                }
            };
            h.p8.utils.checkPrefix = L, h.p8.core.getStyleSaver = D, r = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent", i = "rotation,rotationX,rotationY,skewX,skewY", s = (0, h.fS)(r + "," + i + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
                d[t] = 1
            }), (0, h.fS)(i, function(t) {
                h.Fc.units[t] = "deg", ta[t] = 1
            }), b[s[13]] = r + "," + i, (0, h.fS)("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
                var e = t.split(":");
                b[e[1]] = s[e[0]]
            }), (0, h.fS)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
                h.Fc.units[t] = "px"
            }), h.p8.registerPlugin(tO);
            var tC = h.p8.registerPlugin(tO) || h.p8;
            tC.core.Tween
        },
        2796: function(t, e, n) {
            t.exports = n(643)
        },
        3264: function(t) {
            "use strict";
            var e = !!("undefined" != typeof window && window.document && window.document.createElement),
                n = {
                    canUseDOM: e,
                    canUseWorkers: "undefined" != typeof Worker,
                    canUseEventListeners: e && !!(window.addEventListener || window.attachEvent),
                    canUseViewport: e && !!window.screen,
                    isInWorker: !e
                };
            t.exports = n
        },
        4518: function(t) {
            var e, n, r, i, s, o, a, l, p, c, u, f, h, d, g, m = !1;

            function y() {
                if (!m) {
                    m = !0;
                    var t = navigator.userAgent,
                        y = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(t),
                        x = /(Mac OS X)|(Windows)|(Linux)/.exec(t);
                    if (f = /\b(iPhone|iP[ao]d)/.exec(t), h = /\b(iP[ao]d)/.exec(t), c = /Android/i.exec(t), d = /FBAN\/\w+;/i.exec(t), g = /Mobile/i.exec(t), u = !!/Win64/.exec(t), y) {
                        (e = y[1] ? parseFloat(y[1]) : y[5] ? parseFloat(y[5]) : NaN) && document && document.documentMode && (e = document.documentMode);
                        var v = /(?:Trident\/(\d+.\d+))/.exec(t);
                        o = v ? parseFloat(v[1]) + 4 : e, n = y[2] ? parseFloat(y[2]) : NaN, r = y[3] ? parseFloat(y[3]) : NaN, s = (i = y[4] ? parseFloat(y[4]) : NaN) && (y = /(?:Chrome\/(\d+\.\d+))/.exec(t)) && y[1] ? parseFloat(y[1]) : NaN
                    } else e = n = r = s = i = NaN;
                    if (x) {
                        if (x[1]) {
                            var w = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(t);
                            a = !w || parseFloat(w[1].replace("_", "."))
                        } else a = !1;
                        l = !!x[2], p = !!x[3]
                    } else a = l = p = !1
                }
            }
            var x = {
                ie: function() {
                    return y() || e
                },
                ieCompatibilityMode: function() {
                    return y() || o > e
                },
                ie64: function() {
                    return x.ie() && u
                },
                firefox: function() {
                    return y() || n
                },
                opera: function() {
                    return y() || r
                },
                webkit: function() {
                    return y() || i
                },
                safari: function() {
                    return x.webkit()
                },
                chrome: function() {
                    return y() || s
                },
                windows: function() {
                    return y() || l
                },
                osx: function() {
                    return y() || a
                },
                linux: function() {
                    return y() || p
                },
                iphone: function() {
                    return y() || f
                },
                mobile: function() {
                    return y() || f || h || c || g
                },
                nativeApp: function() {
                    return y() || d
                },
                android: function() {
                    return y() || c
                },
                ipad: function() {
                    return y() || h
                }
            };
            t.exports = x
        },
        6534: function(t, e, n) {
            "use strict";
            var r, i = n(3264);
            i.canUseDOM && (r = document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "")), t.exports =
                /**
                 * Checks if an event is supported in the current execution environment.
                 *
                 * NOTE: This will not work correctly for non-generic events such as `change`,
                 * `reset`, `load`, `error`, and `select`.
                 *
                 * Borrows from Modernizr.
                 *
                 * @param {string} eventNameSuffix Event name, e.g. "click".
                 * @param {?boolean} capture Check if the capture phase is supported.
                 * @return {boolean} True if the event is supported.
                 * @internal
                 * @license Modernizr 3.0.0pre (Custom Build) | MIT
                 */
                function(t, e) {
                    if (!i.canUseDOM || e && !("addEventListener" in document)) return !1;
                    var n = "on" + t,
                        s = n in document;
                    if (!s) {
                        var o = document.createElement("div");
                        o.setAttribute(n, "return;"), s = "function" == typeof o[n]
                    }
                    return !s && r && "wheel" === t && (s = document.implementation.hasFeature("Events.wheel", "3.0")), s
                }
        },
        643: function(t, e, n) {
            "use strict";
            var r = n(4518),
                i = n(6534);

            function s(t) {
                var e = 0,
                    n = 0,
                    r = 0,
                    i = 0;
                return "detail" in t && (n = t.detail), "wheelDelta" in t && (n = -t.wheelDelta / 120), "wheelDeltaY" in t && (n = -t.wheelDeltaY / 120), "wheelDeltaX" in t && (e = -t.wheelDeltaX / 120), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (e = n, n = 0), r = 10 * e, i = 10 * n, "deltaY" in t && (i = t.deltaY), "deltaX" in t && (r = t.deltaX), (r || i) && t.deltaMode && (1 == t.deltaMode ? (r *= 40, i *= 40) : (r *= 800, i *= 800)), r && !e && (e = r < 1 ? -1 : 1), i && !n && (n = i < 1 ? -1 : 1), {
                    spinX: e,
                    spinY: n,
                    pixelX: r,
                    pixelY: i
                }
            }
            s.getEventType = function() {
                return r.firefox() ? "DOMMouseScroll" : i("wheel") ? "wheel" : "mousewheel"
            }, t.exports = s
        },
        7658: function(t) {
            var e = "undefined" != typeof document ? document.createElement("p").style : {},
                n = ["O", "ms", "Moz", "Webkit"],
                r = /([A-Z])/g,
                i = {};

            function s(t) {
                if (void 0 !== e[t = t.replace(/-([a-z])/g, function(t, e) {
                        return e.toUpperCase()
                    })]) return t;
                for (var r = t.charAt(0).toUpperCase() + t.slice(1), i = n.length; i--;) {
                    var s = n[i] + r;
                    if (void 0 !== e[s]) return s
                }
                return t
            }
            t.exports = function(t) {
                return t in i ? i[t] : i[t] = s(t)
            }, t.exports.dash = function(t) {
                return t = s(t), r.test(t) && (t = "-" + t.replace(r, "-$1"), r.lastIndex = 0), t.toLowerCase()
            }
        },
        5829: function(t, e, n) {
            "use strict";

            function r(t, e) {
                return Object.getOwnPropertyNames(Object(t)).reduce((n, r) => {
                    let i = Object.getOwnPropertyDescriptor(Object(t), r),
                        s = Object.getOwnPropertyDescriptor(Object(e), r);
                    return Object.defineProperty(n, r, s || i)
                }, {})
            }

            function i(t) {
                return "string" == typeof t
            }

            function s(t) {
                return Array.isArray(t)
            }

            function o(t = {}) {
                let e;
                let n = r(t);
                return void 0 !== n.types ? e = n.types : void 0 !== n.split && (e = n.split), void 0 !== e && (n.types = (i(e) || s(e) ? String(e) : "").split(",").map(t => String(t).trim()).filter(t => /((line)|(word)|(char))/i.test(t))), (n.absolute || n.position) && (n.absolute = n.absolute || /absolute/.test(t.position)), n
            }

            function a(t) {
                let e = i(t) || s(t) ? String(t) : "";
                return {
                    none: !e,
                    lines: /line/i.test(e),
                    words: /word/i.test(e),
                    chars: /char/i.test(e)
                }
            }

            function l(t) {
                return null !== t && "object" == typeof t
            }

            function p(t) {
                return l(t) && /^(1|3|11)$/.test(t.nodeType)
            }

            function c(t) {
                var e;
                return s(t) ? t : null == t ? [] : l(t) && "number" == typeof(e = t.length) && e > -1 && e % 1 == 0 ? Array.prototype.slice.call(t) : [t]
            }

            function u(t) {
                let e = t;
                return i(t) && (e = /^(#[a-z]\w+)$/.test(t.trim()) ? document.getElementById(t.trim().slice(1)) : document.querySelectorAll(t)), c(e).reduce((t, e) => [...t, ...c(e).filter(p)], [])
            }
            n.d(e, {
                Z: function() {
                    return L
                }
            }), (() => {
                function t(...t) {
                    let e = t.length;
                    for (let n = 0; n < e; n++) {
                        let r = t[n];
                        1 === r.nodeType || 11 === r.nodeType ? this.appendChild(r) : this.appendChild(document.createTextNode(String(r)))
                    }
                }

                function e(...t) {
                    for (; this.lastChild;) this.removeChild(this.lastChild);
                    t.length && this.append(...t)
                }

                function n(...t) {
                    let e = this.parentNode,
                        n = t.length;
                    if (e)
                        for (n || e.removeChild(this); n--;) {
                            let r = t[n];
                            "object" != typeof r ? r = this.ownerDocument.createTextNode(r) : r.parentNode && r.parentNode.removeChild(r), n ? e.insertBefore(this.previousSibling, r) : e.replaceChild(r, this)
                        }
                }
                "undefined" == typeof Element || (Element.prototype.append || (Element.prototype.append = t, DocumentFragment.prototype.append = t), Element.prototype.replaceChildren || (Element.prototype.replaceChildren = e, DocumentFragment.prototype.replaceChildren = e), Element.prototype.replaceWith || (Element.prototype.replaceWith = n, DocumentFragment.prototype.replaceWith = n))
            })();
            let {
                entries: f,
                keys: h,
                values: d
            } = Object, g = "_splittype", m = {}, y = 0;

            function x(t, e, n) {
                if (!l(t)) return console.warn("[data.set] owner is not an object"), null;
                let r = t[g] || (t[g] = ++y),
                    i = m[r] || (m[r] = {});
                return void 0 === n ? e && Object.getPrototypeOf(e) === Object.prototype && (m[r] = { ...i,
                    ...e
                }) : void 0 !== e && (i[e] = n), n
            }

            function v(t, e) {
                let n = l(t) ? t[g] : null,
                    r = n && m[n] || {};
                return void 0 === e ? r : r[e]
            }

            function w(t) {
                let e = t && t[g];
                e && (delete t[e], delete m[e])
            }
            let b = "\ud800-\udfff",
                O = "\\u0300-\\u036f\\ufe20-\\ufe23",
                C = "\\u20d0-\\u20f0",
                P = "\\ufe0e\\ufe0f",
                M = `[${b}]`,
                _ = `[${O}${C}]`,
                F = "\ud83c[\udffb-\udfff]",
                S = `(?:${_}|${F})`,
                E = `[^${b}]`,
                A = "(?:\ud83c[\udde6-\uddff]){2}",
                $ = "[\ud800-\udbff][\udc00-\udfff]",
                N = "\\u200d",
                T = `${S}?`,
                W = `[${P}]?`,
                B = "(?:" + N + "(?:" + [E, A, $].join("|") + ")" + W + T + ")*",
                Y = `(?:${[`${E}${_}?`,_,A,$,M].join("|")}
)`,
                k = RegExp(`${F}(?=${F})|${Y}${W+T+B}`, "g"),
                X = RegExp(`[${[N,b,O,C,P].join("")}]`);

            function D(t, e) {
                let n = document.createElement(t);
                return e && Object.keys(e).forEach(t => {
                    let r = e[t],
                        s = i(r) ? r.trim() : r;
                    null !== s && "" !== s && ("children" === t ? n.append(...c(s)) : n.setAttribute(t, s))
                }), n
            }
            var j = {
                splitClass: "",
                lineClass: "line",
                wordClass: "word",
                charClass: "char",
                types: ["lines", "words", "chars"],
                absolute: !1,
                tagName: "div"
            };
            let z = () => document.createDocumentFragment(),
                I = r(j, {});
            class L {
                static get data() {
                    return m
                }
                static get defaults() {
                    return I
                }
                static set defaults(t) {
                    I = r(I, o(t))
                }
                static setDefaults(t) {
                    return I = r(I, o(t)), j
                }
                static revert(t) {
                    u(t).forEach(t => {
                        let {
                            isSplit: e,
                            html: n,
                            cssWidth: r,
                            cssHeight: i
                        } = v(t);
                        e && (t.innerHTML = n, t.style.width = r || "", t.style.height = i || "", w(t))
                    })
                }
                static create(t, e) {
                    return new L(t, e)
                }
                constructor(t, e) {
                    this.isSplit = !1, this.settings = r(I, o(e)), this.elements = u(t), this.split()
                }
                split(t) {
                    this.revert(), this.elements.forEach(t => {
                        x(t, "html", t.innerHTML)
                    }), this.lines = [], this.words = [], this.chars = [];
                    let e = [window.pageXOffset, window.pageYOffset];
                    void 0 !== t && (this.settings = r(this.settings, o(t)));
                    let n = a(this.settings.types);
                    n.none || (this.elements.forEach(t => {
                        x(t, "isRoot", !0);
                        let {
                            words: e,
                            chars: n
                        } = function t(e, n) {
                            let s = e.nodeType,
                                o = {
                                    words: [],
                                    chars: []
                                };
                            if (!/(1|3|11)/.test(s)) return o;
                            if (3 === s && /\S/.test(e.nodeValue)) return function(t, e) {
                                e = r(j, e);
                                let n = a(e.types),
                                    s = e.tagName,
                                    o = t.nodeValue,
                                    l = document.createDocumentFragment(),
                                    p = [],
                                    c = [];
                                return /^\s/.test(o) && l.append(" "), p = (function(t, e = " ") {
                                    let n = t ? String(t) : "";
                                    return n.trim().replace(/\s+/g, " ").split(e)
                                })(o).reduce((t, r, o, a) => {
                                    let p, u;
                                    return n.chars && (u = (function(t, e = "") {
                                        var n, r, s;
                                        return (t = null == (n = t) ? "" : String(n)) && i(t) && !e && (r = t, X.test(r)) ? (s = t, X.test(s) ? s.match(k) || [] : s.split("")) : t.split(e)
                                    })(r).map(t => {
                                        let n = D(s, {
                                            class: `${e.splitClass} ${e.charClass}`,
                                            style: "display: inline-block;",
                                            children: t
                                        });
                                        return x(n, "isChar", !0), c = [...c, n], n
                                    })), n.words || n.lines ? (x(p = D(s, {
                                        class: `${e.wordClass} ${e.splitClass}`,
                                        style: `display: inline-block; ${n.words&&e.absolute?"position: relative;":""}`,
                                        children: n.chars ? u : r
                                    }), {
                                        isWord: !0,
                                        isWordStart: !0,
                                        isWordEnd: !0
                                    }), l.appendChild(p)) : u.forEach(t => {
                                        l.appendChild(t)
                                    }), o < a.length - 1 && l.append(" "), n.words ? t.concat(p) : t
                                }, []), /\s$/.test(o) && l.append(" "), t.replaceWith(l), {
                                    words: p,
                                    chars: c
                                }
                            }(e, n);
                            let l = c(e.childNodes);
                            if (l.length && (x(e, "isSplit", !0), !v(e).isRoot)) {
                                e.style.display = "inline-block", e.style.position = "relative";
                                let p = e.nextSibling,
                                    u = e.previousSibling,
                                    f = e.textContent || "",
                                    h = p ? p.textContent : " ",
                                    d = u ? u.textContent : " ";
                                x(e, {
                                    isWordEnd: /\s$/.test(f) || /^\s/.test(h),
                                    isWordStart: /^\s/.test(f) || /\s$/.test(d)
                                })
                            }
                            return l.reduce((e, r) => {
                                let {
                                    words: i,
                                    chars: s
                                } = t(r, n);
                                return {
                                    words: [...e.words, ...i],
                                    chars: [...e.chars, ...s]
                                }
                            }, o)
                        }(t, this.settings);
                        this.words = [...this.words, ...e], this.chars = [...this.chars, ...n]
                    }), this.elements.forEach(t => {
                        if (n.lines || this.settings.absolute) {
                            let r = function(t, e, n) {
                                let r, i, s;
                                let o = a(e.types),
                                    l = e.tagName,
                                    p = t.getElementsByTagName("*"),
                                    u = [],
                                    f = [],
                                    h = null,
                                    d = [],
                                    g = t.parentElement,
                                    m = t.nextElementSibling,
                                    y = z(),
                                    b = window.getComputedStyle(t),
                                    O = b.textAlign,
                                    C = parseFloat(b.fontSize),
                                    P = .2 * C;
                                return e.absolute && (s = {
                                    left: t.offsetLeft,
                                    top: t.offsetTop,
                                    width: t.offsetWidth
                                }, i = t.offsetWidth, r = t.offsetHeight, x(t, {
                                    cssWidth: t.style.width,
                                    cssHeight: t.style.height
                                })), c(p).forEach(r => {
                                    let i = r.parentElement === t,
                                        {
                                            width: s,
                                            height: a,
                                            top: l,
                                            left: p
                                        } = function(t, e, n, r) {
                                            if (!n.absolute) return {
                                                top: e ? t.offsetTop : null
                                            };
                                            let i = t.offsetParent,
                                                [s, o] = r,
                                                a = 0,
                                                l = 0;
                                            if (i && i !== document.body) {
                                                let p = i.getBoundingClientRect();
                                                a = p.x + s, l = p.y + o
                                            }
                                            let {
                                                width: c,
                                                height: u,
                                                x: f,
                                                y: h
                                            } = t.getBoundingClientRect(), d = h + o - l, g = f + s - a;
                                            return {
                                                width: c,
                                                height: u,
                                                top: d,
                                                left: g
                                            }
                                        }(r, i, e, n);
                                    !/^br$/i.test(r.nodeName) && (o.lines && i && ((null === h || l - h >= P) && (h = l, u.push(f = [])), f.push(r)), e.absolute && x(r, {
                                        top: l,
                                        left: p,
                                        width: s,
                                        height: a
                                    }))
                                }), g && g.removeChild(t), o.lines && (d = u.map(t => {
                                    let n = D(l, {
                                        class: `${e.splitClass} ${e.lineClass}`,
                                        style: `display: block; text-align: ${O}; width: 100%;`
                                    });
                                    x(n, "isLine", !0);
                                    let r = {
                                        height: 0,
                                        top: 1e4
                                    };
                                    return y.appendChild(n), t.forEach((t, e, i) => {
                                        let {
                                            isWordEnd: s,
                                            top: o,
                                            height: a
                                        } = v(t), l = i[e + 1];
                                        r.height = Math.max(r.height, a), r.top = Math.min(r.top, o), n.appendChild(t), s && v(l).isWordStart && n.append(" ")
                                    }), e.absolute && x(n, {
                                        height: r.height,
                                        top: r.top
                                    }), n
                                }), o.words || function t(e) {
                                    v(e).isWord ? (w(e), e.replaceWith(...e.childNodes)) : c(e.children).forEach(e => t(e))
                                }(y), t.replaceChildren(y)), e.absolute && (t.style.width = `${t.style.width||i}px`, t.style.height = `${r}px`, c(p).forEach(t => {
                                    let {
                                        isLine: e,
                                        top: n,
                                        left: r,
                                        width: i,
                                        height: o
                                    } = v(t), a = v(t.parentElement), l = !e && a.isLine;
                                    t.style.top = `${l?n-a.top:n}px`, t.style.left = e ? `${s.left}px` : `${r-(l?s.left:0)}px`, t.style.height = `${o}px`, t.style.width = e ? `${s.width}px` : `${i}px`, t.style.position = "absolute"
                                })), g && (m ? g.insertBefore(t, m) : g.appendChild(t)), d
                            }(t, this.settings, e);
                            this.lines = [...this.lines, ...r]
                        }
                    }), this.isSplit = !0, window.scrollTo(e[0], e[1]), f(m).forEach(([t, {
                        isRoot: e,
                        isSplit: n
                    }]) => {
                        e && n || (m[t] = null, delete m[t])
                    }))
                }
                revert() {
                    this.isSplit && (this.lines = null, this.words = null, this.chars = null, this.isSplit = !1), L.revert(this.elements)
                }
            }
        }
    }
]);