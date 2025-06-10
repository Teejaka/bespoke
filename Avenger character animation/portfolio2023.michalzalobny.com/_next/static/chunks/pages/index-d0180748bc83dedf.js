(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        8312: function(A, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return t(1590)
            }])
        },
        9749: function(A, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = t(6495).Z,
                r = t(2648).Z,
                s = t(1598).Z,
                a = t(7273).Z,
                o = s(t(7294)),
                n = r(t(3121)),
                l = t(2675),
                c = t(139),
                g = t(8730);
            t(7238);
            var d = r(t(9824));
            let h = {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !1,
                unoptimized: !1
            };

            function u(A) {
                return void 0 !== A.default
            }

            function p(A) {
                return "number" == typeof A || void 0 === A ? A : "string" == typeof A && /^[0-9]+$/.test(A) ? parseInt(A, 10) : NaN
            }

            function f(A, e, t, r, s, a, o) {
                if (!A || A["data-loaded-src"] === e) return;
                A["data-loaded-src"] = e;
                let n = "decode" in A ? A.decode() : Promise.resolve();
                n.catch(() => {}).then(() => {
                    if (A.parentNode) {
                        if ("blur" === t && a(!0), null == r ? void 0 : r.current) {
                            let e = new Event("load");
                            Object.defineProperty(e, "target", {
                                writable: !1,
                                value: A
                            });
                            let o = !1,
                                n = !1;
                            r.current(i({}, e, {
                                nativeEvent: e,
                                currentTarget: A,
                                target: A,
                                isDefaultPrevented: () => o,
                                isPropagationStopped: () => n,
                                persist: () => {},
                                preventDefault: () => {
                                    o = !0, e.preventDefault()
                                },
                                stopPropagation: () => {
                                    n = !0, e.stopPropagation()
                                }
                            }))
                        }(null == s ? void 0 : s.current) && s.current(A)
                    }
                })
            }
            let E = o.forwardRef((A, e) => {
                    var {
                        imgAttributes: t,
                        heightInt: r,
                        widthInt: s,
                        qualityInt: n,
                        className: l,
                        imgStyle: c,
                        blurStyle: g,
                        isLazy: d,
                        fill: h,
                        placeholder: u,
                        loading: p,
                        srcString: E,
                        config: m,
                        unoptimized: z,
                        loader: O,
                        onLoadRef: w,
                        onLoadingCompleteRef: B,
                        setBlurComplete: b,
                        setShowAltText: x,
                        onLoad: j,
                        onError: I
                    } = A, D = a(A, ["imgAttributes", "heightInt", "widthInt", "qualityInt", "className", "imgStyle", "blurStyle", "isLazy", "fill", "placeholder", "loading", "srcString", "config", "unoptimized", "loader", "onLoadRef", "onLoadingCompleteRef", "setBlurComplete", "setShowAltText", "onLoad", "onError"]);
                    return p = d ? "lazy" : p, o.default.createElement(o.default.Fragment, null, o.default.createElement("img", Object.assign({}, D, t, {
                        width: s,
                        height: r,
                        decoding: "async",
                        "data-nimg": h ? "fill" : "1",
                        className: l,
                        loading: p,
                        style: i({}, c, g),
                        ref: o.useCallback(A => {
                            e && ("function" == typeof e ? e(A) : "object" == typeof e && (e.current = A)), A && (I && (A.src = A.src), A.complete && f(A, E, u, w, B, b, z))
                        }, [E, u, w, B, b, I, z, e]),
                        onLoad: A => {
                            let e = A.currentTarget;
                            f(e, E, u, w, B, b, z)
                        },
                        onError: A => {
                            x(!0), "blur" === u && b(!0), I && I(A)
                        }
                    })))
                }),
                m = o.forwardRef((A, e) => {
                    let t, r;
                    var s, {
                            src: f,
                            sizes: m,
                            unoptimized: z = !1,
                            priority: O = !1,
                            loading: w,
                            className: B,
                            quality: b,
                            width: x,
                            height: j,
                            fill: I,
                            style: D,
                            onLoad: C,
                            onLoadingComplete: v,
                            placeholder: Q = "empty",
                            blurDataURL: S,
                            layout: _,
                            objectFit: y,
                            objectPosition: R,
                            lazyBoundary: M,
                            lazyRoot: L
                        } = A,
                        P = a(A, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "fill", "style", "onLoad", "onLoadingComplete", "placeholder", "blurDataURL", "layout", "objectFit", "objectPosition", "lazyBoundary", "lazyRoot"]);
                    let F = o.useContext(g.ImageConfigContext),
                        N = o.useMemo(() => {
                            let A = h || F || c.imageConfigDefault,
                                e = [...A.deviceSizes, ...A.imageSizes].sort((A, e) => A - e),
                                t = A.deviceSizes.sort((A, e) => A - e);
                            return i({}, A, {
                                allSizes: e,
                                deviceSizes: t
                            })
                        }, [F]),
                        H = P,
                        k = H.loader || d.default;
                    delete H.loader;
                    let W = "__next_img_default" in k;
                    if (W) {
                        if ("custom" === N.loader) throw Error('Image with src "'.concat(f, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")
                    } else {
                        let U = k;
                        k = A => {
                            let {
                                config: e
                            } = A, t = a(A, ["config"]);
                            return U(t)
                        }
                    }
                    if (_) {
                        "fill" === _ && (I = !0);
                        let J = {
                            intrinsic: {
                                maxWidth: "100%",
                                height: "auto"
                            },
                            responsive: {
                                width: "100%",
                                height: "auto"
                            }
                        }[_];
                        J && (D = i({}, D, J));
                        let K = {
                            responsive: "100vw",
                            fill: "100vw"
                        }[_];
                        K && !m && (m = K)
                    }
                    let V = "",
                        Z = p(x),
                        T = p(j);
                    if ("object" == typeof(s = f) && (u(s) || void 0 !== s.src)) {
                        let Y = u(f) ? f.default : f;
                        if (!Y.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Y)));
                        if (!Y.height || !Y.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Y)));
                        if (t = Y.blurWidth, r = Y.blurHeight, S = S || Y.blurDataURL, V = Y.src, !I) {
                            if (Z || T) {
                                if (Z && !T) {
                                    let G = Z / Y.width;
                                    T = Math.round(Y.height * G)
                                } else if (!Z && T) {
                                    let X = T / Y.height;
                                    Z = Math.round(Y.width * X)
                                }
                            } else Z = Y.width, T = Y.height
                        }
                    }
                    let q = !O && ("lazy" === w || void 0 === w);
                    ((f = "string" == typeof f ? f : V).startsWith("data:") || f.startsWith("blob:")) && (z = !0, q = !1), N.unoptimized && (z = !0), W && f.endsWith(".svg") && !N.dangerouslyAllowSVG && (z = !0);
                    let [$, AA] = o.useState(!1), [Ae, At] = o.useState(!1), Ai = p(b), Ar = Object.assign(I ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: y,
                        objectPosition: R
                    } : {}, Ae ? {} : {
                        color: "transparent"
                    }, D), As = "blur" === Q && S && !$ ? {
                        backgroundSize: Ar.objectFit || "cover",
                        backgroundPosition: Ar.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: 'url("data:image/svg+xml;charset=utf-8,'.concat(l.getImageBlurSvg({
                            widthInt: Z,
                            heightInt: T,
                            blurWidth: t,
                            blurHeight: r,
                            blurDataURL: S
                        }), '")')
                    } : {}, Aa = function(A) {
                        let {
                            config: e,
                            src: t,
                            unoptimized: i,
                            width: r,
                            quality: s,
                            sizes: a,
                            loader: o
                        } = A;
                        if (i) return {
                            src: t,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: n,
                            kind: l
                        } = function(A, e, t) {
                            let {
                                deviceSizes: i,
                                allSizes: r
                            } = A;
                            if (t) {
                                let s = /(^|\s)(1?\d?\d)vw/g,
                                    a = [];
                                for (let o; o = s.exec(t); o) a.push(parseInt(o[2]));
                                if (a.length) {
                                    let n = .01 * Math.min(...a);
                                    return {
                                        widths: r.filter(A => A >= i[0] * n),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: r,
                                    kind: "w"
                                }
                            }
                            if ("number" != typeof e) return {
                                widths: i,
                                kind: "w"
                            };
                            let l = [...new Set([e, 2 * e].map(A => r.find(e => e >= A) || r[r.length - 1]))];
                            return {
                                widths: l,
                                kind: "x"
                            }
                        }(e, r, a), c = n.length - 1;
                        return {
                            sizes: a || "w" !== l ? a : "100vw",
                            srcSet: n.map((A, i) => "".concat(o({
                                config: e,
                                src: t,
                                quality: s,
                                width: A
                            }), " ").concat("w" === l ? A : i + 1).concat(l)).join(", "),
                            src: o({
                                config: e,
                                src: t,
                                quality: s,
                                width: n[c]
                            })
                        }
                    }({
                        config: N,
                        src: f,
                        unoptimized: z,
                        width: Z,
                        quality: Ai,
                        sizes: m,
                        loader: k
                    }), Ao = f, An = {
                        imageSrcSet: Aa.srcSet,
                        imageSizes: Aa.sizes,
                        crossOrigin: H.crossOrigin
                    }, Al = o.useRef(C);
                    o.useEffect(() => {
                        Al.current = C
                    }, [C]);
                    let Ac = o.useRef(v);
                    o.useEffect(() => {
                        Ac.current = v
                    }, [v]);
                    let Ag = i({
                        isLazy: q,
                        imgAttributes: Aa,
                        heightInt: T,
                        widthInt: Z,
                        qualityInt: Ai,
                        className: B,
                        imgStyle: Ar,
                        blurStyle: As,
                        loading: w,
                        config: N,
                        fill: I,
                        unoptimized: z,
                        placeholder: Q,
                        loader: k,
                        srcString: Ao,
                        onLoadRef: Al,
                        onLoadingCompleteRef: Ac,
                        setBlurComplete: AA,
                        setShowAltText: At
                    }, H);
                    return o.default.createElement(o.default.Fragment, null, o.default.createElement(E, Object.assign({}, Ag, {
                        ref: e
                    })), O ? o.default.createElement(n.default, null, o.default.createElement("link", Object.assign({
                        key: "__nimg-" + Aa.src + Aa.srcSet + Aa.sizes,
                        rel: "preload",
                        as: "image",
                        href: Aa.srcSet ? void 0 : Aa.src
                    }, An))) : null)
                });
            e.default = m, ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), A.exports = e.default)
        },
        2675: function(A, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getImageBlurSvg = function(A) {
                let {
                    widthInt: e,
                    heightInt: t,
                    blurWidth: i,
                    blurHeight: r,
                    blurDataURL: s
                } = A, a = i || e, o = r || t, n = s.startsWith("data:image/jpeg") ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%" : "";
                return a && o ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a, " ").concat(o, "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i && r ? "1" : "20", "'/%3E").concat(n, "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(s, "'/%3E%3C/svg%3E") : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(s, "'/%3E%3C/svg%3E")
            }
        },
        9824: function(A, e) {
            "use strict";

            function t(A) {
                let {
                    config: e,
                    src: t,
                    width: i,
                    quality: r
                } = A;
                return "".concat(e.path, "?url=").concat(encodeURIComponent(t), "&w=").concat(i, "&q=").concat(r || 75)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0, t.__next_img_default = !0, e.default = t
        },
        1590: function(A, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return f
                }
            });
            var i = t(5893),
                r = t(7294),
                s = t(3130),
                a = t(1664),
                o = t.n(a),
                n = t(5675),
                l = t.n(n),
                c = t(9049),
                g = t.n(c);
            let d = A => {
                let {
                    elHref: e,
                    label: t,
                    imgSrc: r,
                    isExternal: s
                } = A;
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)("li", {
                        className: g().projectContainer,
                        children: (0, i.jsxs)(o(), {
                            className: g().projectWrapper,
                            prefetch: !1,
                            href: e,
                            target: s ? "_blank" : "_self",
                            rel: s ? "noreferrer" : void 0,
                            children: [(0, i.jsx)("figure", {
                                className: g().projectContainerImageWrapper,
                                children: (0, i.jsx)(l(), {
                                    src: r,
                                    alt: t,
                                    width: 50,
                                    height: 50
                                })
                            }), (0, i.jsx)("span", {
                                className: g().projectLink,
                                children: t
                            })]
                        })
                    })
                })
            };
            var h = t(7065),
                u = t.n(h);
            let p = [{
                elHref: "https://michalzalobny.com/",
                imgSrc: {
                    src: "/_next/static/media/i10.07ac3b39.png",
                    height: 180,
                    width: 180,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEWkoqKysrO8vL2np66ur6+tram3trbFxcPNzM59fX2TmJjc3NmMj5+JiouXg4VrbIebjrHhAAAACXBIWXMAAAsSAAALEgHS3X78AAAAOElEQVR4nAXBhwGAQBDDMOf6F2D/bZGwboEVx7+ZfZvjd1rb4D2BTIyyyj2xwJ8FiIi1duApsmQ/MXoBP4Fq5AQAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 8
                },
                isExternal: !0,
                label: "Personal website | michalzalobny.com"
            }, {
                elHref: "https://zesty-cocada-b5eb44.netlify.app/",
                imgSrc: {
                    src: "/_next/static/media/i9.d80e6703.png",
                    height: 840,
                    width: 1004,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAKlBMVEX39/ft7u/z8/KsxN7k5eahvuP//fxmY12coaa5vL5GPDIxKiKHg4F9eneRgz2RAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAMUlEQVR4nC2KSQoAIAzEUru5/v+7UhTmEJIBoQah7iryoTXAzF46K0eZ2DM7lcTqygUSxgCof0RqRgAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 7
                },
                isExternal: !0,
                label: "Page transitions from scratch in pure JS"
            }, {
                elHref: "/projects/particle-emitter",
                imgSrc: {
                    src: "/_next/static/media/i8.f0d73e8c.jpg",
                    height: 80,
                    width: 80,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAcEAABBAMBAAAAAAAAAAAAAAABAAIEERMhQbH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABYRAQEBAAAAAAAAAAAAAAAAAAEAIf/aAAwDAQACEQMRAD8AlLBGMWszcgbY0b7rxERWdiF//9k=",
                    blurWidth: 8,
                    blurHeight: 8
                },
                isExternal: !1,
                label: "Particles in flight"
            }, {
                elHref: "/projects/particle-system",
                imgSrc: {
                    src: "/_next/static/media/i7.dcd40b57.jpg",
                    height: 100,
                    width: 100,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAbEAACAwEBAQAAAAAAAAAAAAABAwACBBEhIv/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAaEQEAAgMBAAAAAAAAAAAAAAABABECAxNR/9oADAMBAAIRAxEAPwCjG5mvMtysywuvyV14Tbg9PYiIY25WnkRzKGf/2Q==",
                    blurWidth: 8,
                    blurHeight: 8
                },
                isExternal: !1,
                label: "Particle System FBO"
            }, {
                elHref: "/projects/dynamic-particles",
                imgSrc: {
                    src: "/_next/static/media/i6.b941480b.jpeg",
                    height: 308,
                    width: 320,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAdEAACAQQDAAAAAAAAAAAAAAAAARICERNBBCFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAZEQACAwEAAAAAAAAAAAAAAAAAAQIDETH/2gAMAwEAAhEDEQA/AKIp5Fd8iGZ26p83uIAIzfA1LNP/2Q==",
                    blurWidth: 8,
                    blurHeight: 8
                },
                isExternal: !1,
                label: "FBO Physics Particles"
            }, {
                elHref: "/projects/motion-carousel",
                imgSrc: {
                    src: "/_next/static/media/i5.421998e6.jpg",
                    height: 200,
                    width: 200,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAcEAABBAMBAAAAAAAAAAAAAAABAAIRIQMTMRT/xAAVAQEBAAAAAAAAAAAAAAAAAAABBf/EABoRAAICAwAAAAAAAAAAAAAAAAECAAMRITH/2gAMAwEAAhEDEQA/AJJ+LZYZj85hoLALupjneoiJZBqUaXLA5HDP/9k=",
                    blurWidth: 8,
                    blurHeight: 8
                },
                isExternal: !1,
                label: "Heroes Motion Carousel"
            }, {
                elHref: "/projects/fbo-particles-instanced",
                imgSrc: {
                    src: "/_next/static/media/i4.b8e74405.jpg",
                    height: 200,
                    width: 200,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAbEAABBAMAAAAAAAAAAAAAAAAAAQIRIQQFMf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAWEQADAAAAAAAAAAAAAAAAAAAAARL/2gAMAwEAAhEDEQA/ALPH1bYhUvtgAS2FKP/Z",
                    blurWidth: 8,
                    blurHeight: 8
                },
                isExternal: !1,
                label: "Instanced FBO Particles"
            }, {
                elHref: "/projects/fbo-particles",
                imgSrc: {
                    src: "/_next/static/media/i3.c9034890.jpg",
                    height: 768,
                    width: 769,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAeEAACAgAHAAAAAAAAAAAAAAAAAwECBQYTFUFCgf/EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAFhEBAQEAAAAAAAAAAAAAAAAAAREA/9oADAMBAAIRAxEAPwCYovhbMvMWyjNyq2NO3SF8+gAstC43f//Z",
                    blurWidth: 8,
                    blurHeight: 8
                },
                isExternal: !1,
                label: "FBO Particles"
            }, {
                elHref: "https://portfolio2022.michalzalobny.com/",
                imgSrc: {
                    src: "/_next/static/media/i2.886e6e82.jpg",
                    height: 222,
                    width: 221,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAeEAABBAEFAAAAAAAAAAAAAAACAAEDBAUREhMhUf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAZEQEAAwEBAAAAAAAAAAAAAAABAAIRsdH/2gAMAwEAAhEDEQA/ALk2Lgr3GsBNxWTNhqyRRbRHw306dERJm1F4eRW6WQn/2Q==",
                    blurWidth: 8,
                    blurHeight: 8
                },
                isExternal: !0,
                label: "Portfolio 2022"
            }, {
                elHref: "https://portfolio2021.michalzalobny.com/",
                imgSrc: {
                    src: "/_next/static/media/i1.9c626835.jpg",
                    height: 224,
                    width: 224,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAcEAACAgMBAQAAAAAAAAAAAAABAgADBRExBBP/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAC/9oADAMBAAIRAxEAPwC4svxowtFYbz/RWGwF2/T2IiLMx1v/2Q==",
                    blurWidth: 8,
                    blurHeight: 8
                },
                isExternal: !0,
                label: "Portfolio 2021"
            }];

            function f() {
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(s.F, {}), (0, i.jsx)("div", {
                        className: u().contentWrapper,
                        children: (0, i.jsxs)("main", {
                            className: u().wrapper,
                            children: [(0, i.jsxs)("h2", {
                                className: u().name,
                                children: ["Michal Zalobny ", (0, i.jsx)("br", {}), (0, i.jsx)("span", {
                                    children: "Creative Web Developer"
                                })]
                            }), (0, i.jsxs)("h3", {
                                className: u().title,
                                children: [(0, i.jsx)("strong", {
                                    children: "Featured projects 2023"
                                }), " - WebGL | GLSL | Canvas"]
                            }), (0, i.jsx)("ul", {
                                className: u().projectsWrapper,
                                children: p.map(A => (0, r.createElement)(d, { ...A,
                                    key: A.elHref
                                }))
                            }), (0, i.jsx)("span", {
                                className: u().center
                            })]
                        })
                    })]
                })
            }
        },
        3130: function(A, e, t) {
            "use strict";
            t.d(e, {
                F: function() {
                    return a
                }
            });
            var i = t(5893),
                r = t(9008),
                s = t.n(r);
            t(7294);
            let a = A => {
                let {
                    ogImage: e = "https://res.cloudinary.com/dpv0ukspz/image/upload/v1672869370/ognew2-100_vnkj1z.jpg",
                    title: t = "Portfolio 2023",
                    description: r = "Michal Zalobny portfolio 2023 - WebGL | GLSL | Canvas"
                } = A;
                return (0, i.jsxs)(s(), {
                    children: [(0, i.jsx)("title", {
                        children: "".concat(t, " - Michal Zalobny")
                    }), (0, i.jsx)("meta", {
                        name: "description",
                        content: r
                    }), (0, i.jsx)("link", {
                        rel: "icon",
                        href: "https://res.cloudinary.com/dpv0ukspz/image/upload/v1672869746/icooz_u0bq7i.ico"
                    }), (0, i.jsx)("meta", {
                        property: "og:type",
                        content: "website"
                    }), (0, i.jsx)("meta", {
                        property: "og:title",
                        content: "Michal Zalobny - ".concat(t)
                    }), (0, i.jsx)("meta", {
                        property: "og:description",
                        content: r
                    }), (0, i.jsx)("meta", {
                        property: "og:image",
                        content: e
                    }), (0, i.jsx)("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }), (0, i.jsx)("meta", {
                        name: "twitter:title",
                        content: "Michal Zalobny - ".concat(t)
                    }), (0, i.jsx)("meta", {
                        name: "twitter:description",
                        content: r
                    }), (0, i.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
                    })]
                })
            }
        },
        9049: function(A) {
            A.exports = {
                projectContainer: "FolioItem_projectContainer__yaXF9",
                projectWrapper: "FolioItem_projectWrapper__RBDBS",
                projectContainerImageWrapper: "FolioItem_projectContainerImageWrapper__dFIZx",
                projectLink: "FolioItem_projectLink__bRsfC"
            }
        },
        7065: function(A) {
            A.exports = {
                contentWrapper: "IndexPage_contentWrapper__7X_RB",
                wrapper: "IndexPage_wrapper__r4hMK",
                center: "IndexPage_center__sYyZ2",
                projectsWrapper: "IndexPage_projectsWrapper__9QgWB",
                title: "IndexPage_title___0Rij",
                name: "IndexPage_name__8LOQM"
            }
        },
        9008: function(A, e, t) {
            A.exports = t(3121)
        },
        5675: function(A, e, t) {
            A.exports = t(9749)
        }
    },
    function(A) {
        A.O(0, [774, 888, 179], function() {
            return A(A.s = 8312)
        }), _N_E = A.O()
    }
]);