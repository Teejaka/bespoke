(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        6840: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return r(7967)
            }])
        },
        227: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getDomainLocale = function(e, t, n, a) {
                {
                    let o = r(2554).normalizeLocalePath,
                        l = r(4643).detectDomainLocale,
                        c = t || o(e, n).detectedLocale,
                        i = l(a, void 0, c);
                    if (i) {
                        let u = "http".concat(i.http ? "" : "s", "://"),
                            s = c === i.defaultLocale ? "" : "/".concat(c);
                        return "".concat(u).concat(i.domain).concat("").concat(s).concat(e)
                    }
                    return !1
                }
            }, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        1551: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = r(2648).Z,
                a = r(7273).Z,
                o = n(r(7294)),
                l = r(1003),
                c = r(7795),
                i = r(4465),
                u = r(2692),
                s = r(8245),
                f = r(9246),
                d = r(227),
                p = r(3468);
            let h = new Set;

            function v(e, t, r, n) {
                if (l.isLocalURL(t)) {
                    if (!n.bypassPrefetchedCheck) {
                        let a = void 0 !== n.locale ? n.locale : "locale" in e ? e.locale : void 0,
                            o = t + "%" + r + "%" + a;
                        if (h.has(o)) return;
                        h.add(o)
                    }
                    Promise.resolve(e.prefetch(t, r, n)).catch(e => {})
                }
            }

            function m(e) {
                return "string" == typeof e ? e : c.formatUrl(e)
            }
            let y = o.default.forwardRef(function(e, t) {
                let r, n;
                let {
                    href: c,
                    as: h,
                    children: y,
                    prefetch: b,
                    passHref: _,
                    replace: g,
                    shallow: j,
                    scroll: x,
                    locale: w,
                    onClick: L,
                    onMouseEnter: O,
                    onTouchStart: E,
                    legacyBehavior: M = !1
                } = e, k = a(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
                r = y, M && ("string" == typeof r || "number" == typeof r) && (r = o.default.createElement("a", null, r));
                let P = !1 !== b,
                    C = o.default.useContext(u.RouterContext),
                    N = o.default.useContext(s.AppRouterContext),
                    F = null != C ? C : N,
                    I = !C,
                    {
                        href: B,
                        as: T
                    } = o.default.useMemo(() => {
                        if (!C) {
                            let e = m(c);
                            return {
                                href: e,
                                as: h ? m(h) : e
                            }
                        }
                        let [t, r] = l.resolveHref(C, c, !0);
                        return {
                            href: t,
                            as: h ? l.resolveHref(C, h) : r || t
                        }
                    }, [C, c, h]),
                    R = o.default.useRef(B),
                    S = o.default.useRef(T);
                M && (n = o.default.Children.only(r));
                let A = M ? n && "object" == typeof n && n.ref : t,
                    [W, Z, z] = f.useIntersection({
                        rootMargin: "200px"
                    }),
                    H = o.default.useCallback(e => {
                        (S.current !== T || R.current !== B) && (z(), S.current = T, R.current = B), W(e), A && ("function" == typeof A ? A(e) : "object" == typeof A && (A.current = e))
                    }, [T, A, B, z, W]);
                o.default.useEffect(() => {
                    F && Z && P && v(F, B, T, {
                        locale: w
                    })
                }, [T, B, Z, w, P, null == C ? void 0 : C.locale, F]);
                let K = {
                    ref: H,
                    onClick(e) {
                        M || "function" != typeof L || L(e), M && n.props && "function" == typeof n.props.onClick && n.props.onClick(e), F && !e.defaultPrevented && function(e, t, r, n, a, c, i, u, s, f) {
                            let {
                                nodeName: d
                            } = e.currentTarget, p = "A" === d.toUpperCase();
                            if (p && (function(e) {
                                    let {
                                        target: t
                                    } = e.currentTarget;
                                    return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                }(e) || !l.isLocalURL(r))) return;
                            e.preventDefault();
                            let h = () => {
                                "beforePopState" in t ? t[a ? "replace" : "push"](r, n, {
                                    shallow: c,
                                    locale: u,
                                    scroll: i
                                }) : t[a ? "replace" : "push"](n || r, {
                                    forceOptimisticNavigation: !f
                                })
                            };
                            s ? o.default.startTransition(h) : h()
                        }(e, F, B, T, g, j, x, w, I, P)
                    },
                    onMouseEnter(e) {
                        M || "function" != typeof O || O(e), M && n.props && "function" == typeof n.props.onMouseEnter && n.props.onMouseEnter(e), F && (P || !I) && v(F, B, T, {
                            locale: w,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        })
                    },
                    onTouchStart(e) {
                        M || "function" != typeof E || E(e), M && n.props && "function" == typeof n.props.onTouchStart && n.props.onTouchStart(e), F && (P || !I) && v(F, B, T, {
                            locale: w,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        })
                    }
                };
                if (!M || _ || "a" === n.type && !("href" in n.props)) {
                    let V = void 0 !== w ? w : null == C ? void 0 : C.locale,
                        D = (null == C ? void 0 : C.isLocaleDomain) && d.getDomainLocale(T, V, null == C ? void 0 : C.locales, null == C ? void 0 : C.domainLocales);
                    K.href = D || p.addBasePath(i.addLocale(T, V, null == C ? void 0 : C.defaultLocale))
                }
                return M ? o.default.cloneElement(n, K) : o.default.createElement("a", Object.assign({}, k, K), r)
            });
            t.default = y, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        2554: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.normalizeLocalePath = void 0;
            let n = (e, t) => r(4769).normalizeLocalePath(e, t);
            t.normalizeLocalePath = n, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        9246: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useIntersection = function(e) {
                let {
                    rootRef: t,
                    rootMargin: r,
                    disabled: i
                } = e, u = i || !o, [s, f] = n.useState(!1), [d, p] = n.useState(null);
                n.useEffect(() => {
                    if (o) {
                        if (!u && !s && d && d.tagName) {
                            let e = function(e, t, r) {
                                let {
                                    id: n,
                                    observer: a,
                                    elements: o
                                } = function(e) {
                                    let t;
                                    let r = {
                                            root: e.root || null,
                                            margin: e.rootMargin || ""
                                        },
                                        n = c.find(e => e.root === r.root && e.margin === r.margin);
                                    if (n && (t = l.get(n))) return t;
                                    let a = new Map,
                                        o = new IntersectionObserver(e => {
                                            e.forEach(e => {
                                                let t = a.get(e.target),
                                                    r = e.isIntersecting || e.intersectionRatio > 0;
                                                t && r && t(r)
                                            })
                                        }, e);
                                    return t = {
                                        id: r,
                                        observer: o,
                                        elements: a
                                    }, c.push(r), l.set(r, t), t
                                }(r);
                                return o.set(e, t), a.observe(e),
                                    function() {
                                        if (o.delete(e), a.unobserve(e), 0 === o.size) {
                                            a.disconnect(), l.delete(n);
                                            let t = c.findIndex(e => e.root === n.root && e.margin === n.margin);
                                            t > -1 && c.splice(t, 1)
                                        }
                                    }
                            }(d, e => e && f(e), {
                                root: null == t ? void 0 : t.current,
                                rootMargin: r
                            });
                            return e
                        }
                    } else if (!s) {
                        let n = a.requestIdleCallback(() => f(!0));
                        return () => a.cancelIdleCallback(n)
                    }
                }, [d, u, r, t, s]);
                let h = n.useCallback(() => {
                    f(!1)
                }, []);
                return [p, s, h]
            };
            var n = r(7294),
                a = r(4686);
            let o = "function" == typeof IntersectionObserver,
                l = new Map,
                c = [];
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        7967: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return L
                }
            });
            var n, a, o, l = r(5893),
                c = r(7294);
            r(8101);
            var i = r(1163),
                u = function() {
                    for (var e, t, r = 0, n = ""; r < arguments.length;)(e = arguments[r++]) && (t = function e(t) {
                        var r, n, a = "";
                        if ("string" == typeof t || "number" == typeof t) a += t;
                        else if ("object" == typeof t) {
                            if (Array.isArray(t))
                                for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (a && (a += " "), a += n);
                            else
                                for (r in t) t[r] && (a && (a += " "), a += r)
                        }
                        return a
                    }(e)) && (n && (n += " "), n += t);
                    return n
                },
                s = r(1664),
                f = r.n(s);

            function d() {
                return (d = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var p = function(e) {
                return c.createElement("svg", d({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 607.14 592.19"
                }, e), n || (n = c.createElement("g", {
                    "data-name": "Layer 2"
                }, c.createElement("path", {
                    d: "M303.55 0C135.92 0 0 135.92 0 303.59 0 437.71 87 551.5 207.62 591.66c15.18 2.77 20-6.23 20-14.27 0-7.22.16-27.37 0-52.71-84.43 18.36-101.93-40-101.93-40C111.86 449.63 92 440.29 92 440.29c-27.59-18.83 2-18.47 2-18.47 30.46 2.15 46.51 31.3 46.51 31.3 27.08 46.36 71 33 88.32 25.22 2.77-19.62 10.63-33 19.3-40.59-67.4-7.67-138.27-33.71-138.27-150 0-33.16 11.82-60.24 31.24-81.46-3.13-7.66-13.57-38.54 3-80.35 0 0 25.49-8.16 83.46 31.14a288 288 0 0 1 152 0c58-39.28 83.42-31.14 83.42-31.14 16.55 41.81 6.13 72.69 3 80.35 19.42 21.22 31.2 48.3 31.2 81.46 0 116.63-71 142.29-138.61 149.79 10.89 9.39 20.78 27.61 20.78 55.93v84c0 8.12 4.89 17.1 20.3 14.16 120.55-40.22 207.43-153.95 207.43-288C607.14 135.92 471.22 0 303.55 0Z",
                    "data-name": "Layer 1"
                }))))
            };

            function h() {
                return (h = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var v = function(e) {
                return c.createElement("svg", h({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 579.18 470.61"
                }, e), a || (a = c.createElement("g", {
                    "data-name": "Layer 2"
                }, c.createElement("path", {
                    d: "M579.18 55.64a237.37 237.37 0 0 1-68.25 18.7 119.3 119.3 0 0 0 52.24-65.73 238.18 238.18 0 0 1-75.45 28.85A119 119 0 0 0 401.07 0c-65.25 0-118.94 53.69-118.94 118.94a119.26 119.26 0 0 0 3.08 26.89A337.49 337.49 0 0 1 40.31 21.68C9 75.67 25.18 145.63 77.1 180.3a117.93 117.93 0 0 1-53.93-14.87v1.51a119.21 119.21 0 0 0 95.33 116.48 118.63 118.63 0 0 1-53.65 2 119.18 119.18 0 0 0 111 82.52A238.53 238.53 0 0 1 28.29 419 243.13 243.13 0 0 1 0 417.24a336.42 336.42 0 0 0 182.14 53.28v.09c218.56 0 338.1-181.07 338.1-338.1 0-5.14 0-10.26-.34-15.36a241.76 241.76 0 0 0 59.28-61.51Z",
                    "data-name": "Layer 1"
                }))))
            };

            function m() {
                return (m = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var y = function(e) {
                    return c.createElement("svg", m({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 592.19 592.19"
                    }, e), o || (o = c.createElement("g", {
                        "data-name": "Layer 2"
                    }, c.createElement("path", {
                        d: "M518.17 0H74A74.06 74.06 0 0 0 0 74v444.17a74.06 74.06 0 0 0 74 74h444.17a74.06 74.06 0 0 0 74-74V74a74.06 74.06 0 0 0-74-74ZM169.81 505H70.62V206.65h99.19Zm-49.6-339.13h-.64c-33.3 0-54.8-22.92-54.8-51.55 0-29.24 22.18-51.56 56.11-51.56s54.81 22.32 55.45 51.56c0 28.68-21.53 51.57-56.12 51.57ZM527.42 505h-99.17V345.38c0-40.1-14.37-67.46-50.24-67.46-27.4 0-43.72 18.45-50.88 36.26-2.63 6.37-3.27 15.29-3.27 24.21V505h-99.17s1.32-270.38 0-298.37h99.17v42.24c13.2-20.32 36.76-49.25 89.38-49.25 65.25 0 114.18 42.63 114.18 134.27Z",
                        "data-name": "Layer 1"
                    }))))
                },
                b = r(666),
                _ = r.n(b);
            let g = () => (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("footer", {
                    className: _().footerName,
                    children: (0, l.jsxs)("h1", {
                        className: _().nameWrapper,
                        children: ["Michal Zalobny ", (0, l.jsx)("br", {}), " Portfolio 2023 - WebGL | GLSL | Canvas"]
                    })
                }), (0, l.jsx)("footer", {
                    className: _().footerIcons,
                    children: (0, l.jsxs)("ul", {
                        className: _().socials,
                        children: [(0, l.jsx)("li", {
                            className: _().iconWrapper,
                            children: (0, l.jsx)("a", {
                                "aria-label": "Twitter",
                                target: "_blank",
                                href: "https://twitter.com/michalzalobny",
                                rel: "noreferrer",
                                children: (0, l.jsx)(v, {})
                            })
                        }), (0, l.jsx)("li", {
                            className: _().iconWrapper,
                            children: (0, l.jsx)("a", {
                                "aria-label": "Github",
                                target: "_blank",
                                href: "https://github.com/michalzalobny",
                                rel: "noreferrer",
                                children: (0, l.jsx)(p, {})
                            })
                        }), (0, l.jsx)("li", {
                            className: _().iconWrapper,
                            children: (0, l.jsx)("a", {
                                "aria-label": "LinkedIn",
                                target: "_blank",
                                href: "https://www.linkedin.com/in/michal-zalobny-1a8257204/",
                                rel: "noreferrer",
                                children: (0, l.jsx)(y, {})
                            })
                        })]
                    })
                })]
            });
            var j = r(9579),
                x = r.n(j);
            let w = e => {
                let {
                    children: t
                } = e, r = (0, i.useRouter)();
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("span", {
                        className: x().appBackground
                    }), "/" !== r.pathname && (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsx)(f(), {
                            className: u(x().backBtn, "underline"),
                            href: "/",
                            children: "Home"
                        })
                    }), (0, l.jsx)(g, {}), t]
                })
            };

            function L(e) {
                let {
                    Component: t,
                    pageProps: r
                } = e, n = (0, i.useRouter)();
                return (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)(w, {
                        children: (0, l.jsx)(t, {
                            router: n,
                            ...r
                        }, "".concat(n.route).concat(void 0 === n.locale ? "" : n.locale))
                    })
                })
            }
        },
        8101: function() {},
        9579: function(e) {
            e.exports = {
                appBackground: "Layout_appBackground___1sRF",
                backBtn: "Layout_backBtn__diEVC"
            }
        },
        666: function(e) {
            e.exports = {
                footerIcons: "Footer_footerIcons__gxIV1",
                footerName: "Footer_footerName__kvAjF",
                nameWrapper: "Footer_nameWrapper__iTFBO",
                socials: "Footer_socials__LwLKF",
                iconWrapper: "Footer_iconWrapper__UKXPN"
            }
        },
        1664: function(e, t, r) {
            e.exports = r(1551)
        },
        1163: function(e, t, r) {
            e.exports = r(880)
        }
    },
    function(e) {
        var t = function(t) {
            return e(e.s = t)
        };
        e.O(0, [774, 179], function() {
            return t(6840), t(880)
        }), _N_E = e.O()
    }
]);