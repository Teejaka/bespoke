(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [515], {
        2300: function(e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/projects/motion-carousel", function() {
                return s(1355)
            }])
        },
        1355: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                __N_SSG: function() {
                    return X
                },
                default: function() {
                    return U
                }
            });
            var i, r = s(5893),
                o = s(7294),
                a = s(3130),
                n = s(9477);
            let l = {
                app: null,
                gui: null,
                elementsArray: [{
                    name: "Thor",
                    description: "Asgardian god of thunder, whose enchanted hammer Mjolnir enables him to fly and manipulate weather, among his other superhuman attributes. A founding member of the superhero team the Avengers, Thor has a host of supporting characters and enemies",
                    imgSrc: "/_next/static/media/3.c268897e.png",
                    imgBlurSrc: "/_next/static/media/3.85c9df8c.png",
                    order: 0,
                    assetSizeRatio: 1,
                    backgroundColor: [211.25, 50.67, 47.45]
                }, {
                    name: "Hulk",
                    description: "Gigantic, green, irradiated, mutated humanoid monster with incredible strength and an inability to control his rage. The Hulk is sometimes characterized as hyper-aggressive and brutal, other times as cunning, brilliant, and scheming.",
                    imgSrc: "/_next/static/media/6.26bef12f.png",
                    imgBlurSrc: "/_next/static/media/6.aaa20048.png",
                    order: 1,
                    assetSizeRatio: 1,
                    backgroundColor: [72, 20.36, 39.96]
                }, {
                    name: "Iron Man",
                    description: "Armored Avenger driven by a heart that is part machine, but all hero",
                    imgSrc: "/_next/static/media/2.d201c21f.png",
                    imgBlurSrc: "/_next/static/media/2.c67bc47c.png",
                    order: 2,
                    assetSizeRatio: 1,
                    backgroundColor: [3, 42, 40.06]
                }, {
                    name: "Black Panther",
                    description: "Member of the royal family of the fictional African country of Wakanda. After the death of his father, T'Challa claimed the throne and the role of Black Panther. He was exposed to a mystical herb that enhanced his strength and agility to near-superhuman levels",
                    imgSrc: "/_next/static/media/4.5f287e55.png",
                    imgBlurSrc: "/_next/static/media/4.a7ebfd51.png",
                    order: 3,
                    assetSizeRatio: 1,
                    backgroundColor: [240, 4, 13.43]
                }, {
                    name: "Ghost Rider",
                    description: "Ghost Rider is a human who can transform into a skeletal superhuman wreathed in ethereal flame and given supernatural powers.",
                    imgSrc: "/_next/static/media/5.438eeb32.png",
                    imgBlurSrc: "/_next/static/media/5.321f48d1.png",
                    order: 4,
                    assetSizeRatio: 1,
                    backgroundColor: [33.51, 52.83, 47.06]
                }, {
                    name: "Captain America",
                    description: "Recipient of the Super Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world's mightiest heroes and the leader of the Avengers.",
                    imgSrc: "/_next/static/media/1.1122a8f6.png",
                    imgBlurSrc: "/_next/static/media/1.20293bda.png",
                    order: 5,
                    assetSizeRatio: 1,
                    backgroundColor: [221.54, 48.3, 41.96]
                }, {
                    name: "Spider Man",
                    description: 'Superhuman strength, agility, endurance, ability to stick to and climb walls and other surfaces, uses self-designed web-shooters allowing him to fire and swing from sticky webs, special "Spider-Sense" warns of incoming danger, genius intellect specializing in chemistry and invention.',
                    imgSrc: "/_next/static/media/7.e8fa660b.png",
                    imgBlurSrc: "/_next/static/media/7.2cdb6f16.png",
                    order: 6,
                    assetSizeRatio: 1,
                    backgroundColor: [350.2, 40.16, 47.84]
                }],
                planeGeometry: new n._12(1, 1, 1, 1),
                scrollValuesGrid: {
                    current: {
                        x: 0,
                        y: 0
                    },
                    target: {
                        x: 0,
                        y: 0
                    },
                    last: {
                        x: 0,
                        y: 0
                    },
                    direction: {
                        x: "left",
                        y: "up"
                    }
                },
                scrollValuesFocused: {
                    current: {
                        x: 0,
                        y: 0
                    },
                    target: {
                        x: 0,
                        y: 0
                    },
                    last: {
                        x: 0,
                        y: 0
                    },
                    direction: {
                        x: "left",
                        y: "up"
                    }
                },
                isFocused: 0,
                focusedModProgress: 0,
                canvasWrapperEl: null,
                closeFocusEl: null,
                guiLabelEl: null,
                loadingScreenEl: null,
                loadingTextEl: null,
                loadingTextBarEl: null,
                gridTitleWrapperEl: null,
                defaultBackgroundColor: "#14327b",
                isTouchDevice: !1
            };
            var c = s(1296),
                h = s.n(c),
                d = s(7637),
                u = s(8518),
                m = s(4036),
                _ = s(7957),
                p = s(6194),
                g = s(990),
                v = s(3629);
            let f = () => !0,
                y = () => f() && ("ontouchstart" in window || "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0);
            var x = s(8929),
                E = s(2796),
                w = s.n(E);
            class T extends n.pBf {
                static getInstance() {
                    return T._instance || (T._canCreate = !0, T._instance = new T, T._canCreate = !1), T._instance
                }
                _applyScrollXY(e) {
                    let {
                        x: t,
                        y: s,
                        type: i
                    } = e;
                    switch (i) {
                        case "mousemove":
                            this.dispatchEvent({
                                type: "mouse",
                                x: t,
                                y: s
                            });
                            break;
                        case "touchmove":
                            this.dispatchEvent({
                                type: "touch",
                                x: t,
                                y: s
                            });
                            break;
                        case "wheel":
                            this.dispatchEvent({
                                type: "wheel",
                                x: t,
                                y: s
                            })
                    }
                }
                _addEvents() {
                    window.addEventListener("wheel", this._onWheel, {
                        passive: !0
                    }), window.addEventListener("mousedown", this._onTouchDown), window.addEventListener("mousemove", this._onTouchMove, {
                        passive: !0
                    }), window.addEventListener("mouseup", this._onTouchUp), window.addEventListener("touchstart", this._onTouchDown), window.addEventListener("touchmove", this._onTouchMove, {
                        passive: !0
                    }), window.addEventListener("touchend", this._onTouchUp), window.addEventListener("resize", this._onResize), this._onResize()
                }
                update(e) {
                    if (!this._useMomentum) return;
                    let t = Math.min(Math.max(e.time / (1e3 / e.time), 1), 4);
                    this._touchMomentum.x *= Math.pow(u.W.motion.MOMENTUM_DAMPING, t), this._touchMomentum.y *= Math.pow(u.W.motion.MOMENTUM_DAMPING, t), Math.abs(this._touchMomentum.x) >= .01 && this._applyScrollXY({
                        y: 0,
                        x: this._touchMomentum.x,
                        type: "touchmove"
                    }), Math.abs(this._touchMomentum.y) >= .01 && this._applyScrollXY({
                        y: this._touchMomentum.y,
                        x: 0,
                        type: "touchmove"
                    })
                }
                constructor() {
                    if (super(), this._lastTouch = {
                            x: 0,
                            y: 0
                        }, this._useMomentum = !1, this._touchMomentum = {
                            x: 0,
                            y: 0
                        }, this._isTouching = !1, this._onTouchDown = e => {
                            this._isTouching = !0, this.dispatchEvent({
                                type: "touchdown"
                            }), this._useMomentum = !1, this._lastTouch.x = "touches" in e ? e.touches[0].clientX : e.clientX, this._lastTouch.y = "touches" in e ? e.touches[0].clientY : e.clientY
                        }, this._onTouchMove = e => {
                            if (!this._isTouching) return;
                            let t = "touches" in e ? e.touches[0].clientX : e.clientX,
                                s = "touches" in e ? e.touches[0].clientY : e.clientY,
                                i = t - this._lastTouch.x,
                                r = s - this._lastTouch.y;
                            this._lastTouch.x = t, this._lastTouch.y = s, this._touchMomentum.x *= u.W.motion.MOMENTUM_CARRY, this._touchMomentum.y *= u.W.motion.MOMENTUM_CARRY, this._touchMomentum.y += r, this._touchMomentum.x += i, this._applyScrollXY({
                                x: i,
                                y: r,
                                type: "touches" in e ? "touchmove" : "mousemove"
                            })
                        }, this._onTouchUp = () => {
                            this._isTouching = !1, this.dispatchEvent({
                                type: "touchup"
                            }), this._useMomentum = !0
                        }, this._onWheel = e => {
                            this._useMomentum = !1;
                            let {
                                pixelY: t
                            } = w()(e);
                            this._applyScrollXY({
                                x: 0,
                                y: -t,
                                type: "wheel"
                            })
                        }, this._onResize = () => {
                            this._useMomentum = !1
                        }, T._instance || !T._canCreate) throw Error("Use Scroll.getInstance()");
                    this._addEvents(), T._instance = this
                }
            }
            T._canCreate = !1;
            class S extends(i = n.xsS) {
                _performRaycast(e) {
                    let {
                        x: t,
                        y: s,
                        colliderName: i,
                        fnToCallIfHit: r
                    } = e;
                    this._raycaster.setFromCamera({
                        x: t,
                        y: s
                    }, this._camera);
                    let o = this._raycaster.intersectObjects(this.children, !0),
                        a = [];
                    for (let n = 0; n < o.length; ++n) {
                        let l = o[n].object.parent;
                        if (l.colliderName) {
                            a.push(l), r && l.colliderName === i && l[r]();
                            break
                        }
                    }
                    return a
                }
                _addListeners() {
                    this._mouseMove.addEventListener("mousemove", this._onMouseMove), this._mouseMove.addEventListener("click", this._onClick)
                }
                _removeListeners() {
                    this._mouseMove.removeEventListener("mousemove", this._onMouseMove), this._mouseMove.removeEventListener("click", this._onClick)
                }
                setStageSize(e) {
                    this._stageSize = e
                }
                update(e) {
                    this._mouseMove.update(), this._scroll.update(e), this.mouseStrength.current = (0, v.t)(this.mouseStrength.current, this.mouseStrength.target, S.lerpEase * e.slowDownFactor), this.mouse.current.x = (0, v.t)(this.mouse.current.x, this.mouse.target.x, S.lerpEase * e.slowDownFactor), this.mouse.current.y = (0, v.t)(this.mouse.current.y, this.mouse.target.y, S.lerpEase * e.slowDownFactor)
                }
                setPixelRatio(e) {
                    this._pixelRatio = e
                }
                destroy() {
                    this._removeListeners()
                }
                constructor({
                    camera: e
                }) {
                    super(), this._raycaster = new n.iMs, this._stageSize = {
                        height: 100,
                        width: 100
                    }, this._mouseMove = x.A.getInstance(), this._scroll = T.getInstance(), this._pixelRatio = 1, this._hoveredObject = null, this._canHoverObject = !0, this.mouse = {
                        current: {
                            x: 0,
                            y: 0
                        },
                        target: {
                            x: 0,
                            y: 0
                        }
                    }, this.mouseStrength = {
                        current: 0,
                        target: 0
                    }, this._onMouseMove = e => {
                        this.mouseStrength.target = e.target.strength;
                        let t = e.target.mouse.x,
                            s = e.target.mouse.y;
                        if (this.mouse.target.x = t / this._stageSize.width * 2 - 1, this.mouse.target.y = -(2 * (s / this._stageSize.height)) + 1, S.shouldRaycastOnMouseMove) {
                            let i = this._performRaycast({
                                x: this.mouse.target.x,
                                y: this.mouse.target.y
                            });
                            if (i.length > 0 && this._canHoverObject) {
                                let r = i[0];
                                r === this._hoveredObject || (this._hoveredObject && this._hoveredObject.onMouseLeave(), l.isTouchDevice || (this._hoveredObject = r, this._hoveredObject.onMouseEnter()))
                            } else this._hoveredObject && (this._hoveredObject.onMouseLeave(), this._hoveredObject = null)
                        }
                    }, this._onClick = e => {
                        let t = e.target.mouse.x,
                            s = e.target.mouse.y,
                            i = t / this._stageSize.width * 2 - 1,
                            r = -(2 * (s / this._stageSize.height)) + 1;
                        this._performRaycast({
                            x: i,
                            y: r,
                            colliderName: "sceneItem",
                            fnToCallIfHit: "onClick"
                        })
                    }, this._camera = e
                }
            }
            S.lerpEase = u.W.motion.LERP_EASE, S.shouldRaycastOnMouseMove = !0;
            var M = s(2925);
            class A extends n.Tme {
                setColliderName(e) {
                    this.colliderName = e
                }
                onMouseEnter() {
                    this._isHovered = !0, this.dispatchEvent({
                        type: "mouseenter"
                    })
                }
                onMouseLeave() {
                    this._isHovered = !1, this.dispatchEvent({
                        type: "mouseleave"
                    })
                }
                onClick() {
                    this.dispatchEvent({
                        type: "click"
                    })
                }
                update(e) {}
                destroy() {}
                constructor() {
                    super(), this.colliderName = null, this._isHovered = !1
                }
            }
            let F = e => Math.min(Math.max(e, 0), 1),
                P = (e, t, s) => F((s - e) / (t - e)),
                b = (e, t, s, i, r) => F(P(e, t, r) * (i - s) + s);
            class I extends A {
                _animateScaleGrid(e) {
                    let {
                        destination: t,
                        duration: s = 950,
                        delay: i = 0,
                        easing: r = p.ZP.Easing.Exponential.InOut
                    } = e;
                    this._scaleGridTween && this._scaleGridTween.stop(), this._scaleGridTween = new p.ZP.Tween(this).to({
                        _scaleFactorGrid: t
                    }, s).delay(i).easing(r).start()
                }
                updatePlaneSize() {
                    var e;
                    let t = (null === (e = this.heroItem) || void 0 === e ? void 0 : e.assetSizeRatio) || 1,
                        s = (0, M.C)(this._gridElBounds.height, this._focusedElBounds.height, l.isFocused);
                    this._defaultScale.x = s * t, this._defaultScale.y = s, this._mesh.material.uniforms.uPlaneRes.value = [this._defaultScale.x, this._defaultScale.y]
                }
                resetExtraScrollGrid() {
                    this._extraScrollGrid.x = 0
                }
                setStageSize(e) {
                    this._stageSize = e, this._mesh.material.uniforms.uStageRes.value = [e.width, e.height]
                }
                setAsset(e, t) {
                    this._loadedAsset = e, this._mesh.material.uniforms.tMap.value = e.asset, this._mesh.material.uniforms.tMapBlur.value = t, this._mesh.material.uniforms.uMediaRes.value = [e.naturalWidth, e.naturalHeight]
                }
                onMouseEnter() {
                    super.onMouseEnter(), 1 !== l.isFocused && (document.body.style.cursor = "pointer", this.dispatchEvent({
                        type: "pointerover"
                    })), l.isFocused < .5 && this._animateScaleGrid({
                        destination: 1.25
                    })
                }
                onMouseLeave() {
                    super.onMouseLeave(), document.body.style.cursor = "initial", this.dispatchEvent({
                        type: "pointerleft"
                    }), this._animateScaleGrid({
                        destination: 1
                    })
                }
                _handleInfinityScroll() {
                    if (!this._mesh || !l.scrollValuesGrid || 0 !== l.isFocused) return;
                    let e = this._gridElBounds.width * l.elementsArray.length;
                    "left" === l.scrollValuesGrid.direction.x && this._mesh.position.x < -this._stageSize.width / 2 - e * I.disappearOffset && (this._extraScrollGrid.x -= e), "right" === l.scrollValuesGrid.direction.x && this._mesh.position.x > this._stageSize.width / 2 + e * I.disappearOffset && (this._extraScrollGrid.x += e)
                }
                _updateX(e) {
                    if (this._mesh && this._focusedElBounds && l.scrollValuesGrid && this.heroItem) {
                        var t;
                        let s = this._focusedElBounds.width - this._mesh.scale.x,
                            i = (this.heroItem.order - .5 * l.elementsArray.length) / l.elementsArray.length;
                        this._focusedNormalizedProgress = (l.focusedModProgress + i) % 1, this._focusedNormalizedProgress < 0 && (this._focusedNormalizedProgress = Math.abs(this._focusedNormalizedProgress + 1));
                        let r = -(250 * Math.sin(this._focusedNormalizedProgress * Math.PI * 2));
                        this._mesh.position.z = (0, M.C)(r / 25, r, l.isFocused);
                        let o = b(.45, .48, 1, 0, this._focusedNormalizedProgress),
                            a = b(.55, .5800000000000001, 0, 1, this._focusedNormalizedProgress);
                        this._mesh.material.uniforms.uIsBlurred.value = (0, M.C)(0, o + a, l.isFocused), this._focusedNormalizedProgress >= .45 && this._focusedNormalizedProgress <= .5800000000000001 && this._setFocusedIndex(this.heroItem.order);
                        let n = this._focusedElBounds.width * I.ellipseX,
                            c = n * Math.cos(this._focusedNormalizedProgress * Math.PI * 2 + Math.PI) - n,
                            h = this._focusedElBounds.left + s / 2 + c,
                            d = (this._gridElBounds.width - this._mesh.scale.x) / 2,
                            u = ((null === (t = this.heroItem) || void 0 === t ? void 0 : t.order) || 0) * this._gridElBounds.width,
                            m = this._gridElBounds.left + d + u + l.scrollValuesGrid.current.x - this._extraScrollGrid.x,
                            _ = (0, M.C)(m, h, l.isFocused);
                        this._mesh.position.x = e - this._stageSize.width / 2 + this._mesh.scale.x / 2 + _
                    }
                }
                _updateY(e) {
                    if (this._mesh && this._focusedElBounds) {
                        let t = .35 * this._focusedElBounds.height,
                            s = -Math.sin(this._focusedNormalizedProgress * Math.PI * 2) * t,
                            i = -this._focusedElBounds.top - s,
                            r = -this._gridElBounds.top,
                            o = (0, M.C)(r, i, l.isFocused);
                        this._mesh.position.y = e + this._stageSize.height / 2 - this._mesh.scale.y / 2 + o
                    }
                }
                setFocusedElBounds(e) {
                    this._focusedElBounds = e
                }
                setGridElBounds(e) {
                    this._gridElBounds = e
                }
                update(e) {
                    super.update(e), this._mesh.material.uniforms.uTime.value = .001 * e.time;
                    let t = -Math.sin(this._focusedNormalizedProgress * Math.PI * 2),
                        s = (t + 1) * .5 + .5;
                    s -= .15 * t;
                    let i = (0, M.C)(this._scaleFactorGrid, s, l.isFocused),
                        r = this._defaultScale.x * i,
                        o = this._defaultScale.y * i;
                    this._mesh.scale.x = r, this._mesh.scale.y = o;
                    let a = (o - this._defaultScale.y) / 2;
                    this._updateX(0), this._updateY(a), this._handleInfinityScroll()
                }
                destroy() {
                    super.destroy(), this._material.dispose(), this.remove(this._mesh), this._scaleGridTween && this._scaleGridTween.stop()
                }
                constructor({
                    name: e,
                    setFocusedIndex: t
                }) {
                    super(), this._focusedElBounds = _.f, this._gridElBounds = _.f, this._loadedAsset = null, this._stageSize = {
                        width: 1,
                        height: 1
                    }, this._extraScrollGrid = {
                        x: 0
                    }, this._defaultScale = {
                        x: 1,
                        y: 1
                    }, this._focusedNormalizedProgress = 0, this._scaleFactorGrid = 1, this._scaleGridTween = null, this._setFocusedIndex = t, this.heroItem = l.elementsArray.find(t => t.name === e), this._material = new n.jyz({
                        side: n.Wl3,
                        vertexShader: "#define GLSLIFY 1\nvarying vec2 vUv;\n\nvoid main()\n{\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    vUv = uv;\n}",
                        fragmentShader: "#define GLSLIFY 1\nuniform vec2 uPlaneRes;\nuniform vec2 uMediaRes;\nuniform vec2 uStageRes;\nuniform sampler2D tMap;\nuniform sampler2D tMapBlur;\nuniform float uTime;\nuniform float uIsBlurred;\n\nvarying vec2 vUv;\n\n#define PI 3.14159265359\n\nvoid main() {\n    vec2 ratio = vec2(\n        min((uPlaneRes.x / uPlaneRes.y) / (uMediaRes.x / uMediaRes.y), 1.0),\n        min((uPlaneRes.y / uPlaneRes.x) / (uMediaRes.y / uMediaRes.x), 1.0)\n    );\n\n    vec2 uv = vec2(\n        vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,\n        vUv.y * ratio.y + (1.0 - ratio.y) * 0.5\n    );\n\n   \n\n    //get tMap or tMapBlur based on uIsBlurred\n    vec4 tMapTxt = texture2D(tMap, uv);\n    vec4 tMapBlurTxt = texture2D(tMapBlur, uv);\n\n    vec4 finalTxt = mix(tMapTxt, tMapBlurTxt, uIsBlurred);\n\n    gl_FragColor.rgba = finalTxt.rgba;\n    \n}",
                        transparent: !0,
                        wireframe: !1,
                        uniforms: {
                            uTime: {
                                value: 0
                            },
                            tMap: {
                                value: null
                            },
                            tMapBlur: {
                                value: null
                            },
                            uIsBlurred: {
                                value: 0
                            },
                            uStageRes: {
                                value: [0, 0]
                            },
                            uPlaneRes: {
                                value: [1, 1]
                            },
                            uMediaRes: {
                                value: [1, 1]
                            }
                        }
                    }), this._mesh = new n.Kj0(l.planeGeometry, this._material), this.add(this._mesh)
                }
            }
            I.disappearOffset = .15, I.ellipseX = 1.05;
            let L = (e, t) => Math.random() * (t - e + 1) + e,
                R = {
                    barsCount: 50,
                    particlesPerBar: 50,
                    randomness: 0,
                    randomnessPower: 0,
                    zAspectRatio: 2
                },
                z = e => {
                    let {
                        barsCount: t,
                        particlesPerBar: s,
                        randomness: i,
                        randomnessPower: r,
                        zAspectRatio: o
                    } = e, a = [];
                    for (let n = 0; n < t; n++) {
                        let l = 3 * n * s;
                        for (let c = 0; c < s; c++) {
                            let h = Math.pow(Math.random(), r) * (.5 > Math.random() ? 1 : -1) * i,
                                d = Math.pow(Math.random(), r) * (.5 > Math.random() ? 1 : -1) * i,
                                u = Math.pow(Math.random(), r) * (.5 > Math.random() ? 1 : -1) * i,
                                m = 3 * c;
                            a[l + m + 0] = n / (t - 1) * 2 - 1 + h, a[l + m + 1] = 0 + d, a[l + m + 2] = (c / (s - 1) * 2 - 1 + u) / o
                        }
                    }
                    return new Float32Array(a)
                };
            class C extends A {
                _setGui() {
                    if (!l.gui) return;
                    let e = l.gui.addFolder("Floor");
                    e.add(R, "barsCount", 1, 500, 1).onChange(() => {
                        this._updateGeometryAttributes()
                    }), e.add(R, "particlesPerBar", 1, 1e3, 1).onChange(() => {
                        this._updateGeometryAttributes()
                    }), e.add(R, "randomness", .001, 1, .001).onChange(() => {
                        this._updateGeometryAttributes()
                    }), e.add(R, "randomnessPower", .1, 8, .1).onChange(() => {
                        this._updateGeometryAttributes()
                    }), this._points && (e.add(this._points.rotation, "x", 0, 2 * Math.PI, .001), e.add(this._points.rotation, "y", 0, 2 * Math.PI, .001), e.add(this._points.position, "y", -1e3, 1e3, .001), e.add(this._points.position, "z", -1e3, 1e3, .001))
                }
                _updateGeometryAttributes() {
                    let e = new Float32Array(z(R));
                    this._geometry.setAttribute("position", new n.TlE(e, 3));
                    let t = this._geometry.attributes.position.count,
                        s = new Float32Array(t);
                    for (let i = 0; i < t; i++) s[i] = L(.5, 1);
                    this._geometry.setAttribute("aRandom", new n.TlE(s, 1))
                }
                setAsset(e) {
                    this._points.material.uniforms.tMap.value = e.asset
                }
                setStageSize(e) {
                    this._stageSize = e;
                    let t = .5 * this._stageSize.width;
                    R.barsCount = Math.round(.05 * this._stageSize.width), this._stageSize.width >= 767 ? this._points.position.y = -100 - .2 * this._stageSize.height : (this._points.position.y = -90 - .15 * this._stageSize.height, t = 1.9 * this._stageSize.width, R.barsCount = Math.round(.18 * this._stageSize.width)), this._points.scale.set(t, t, t), R.particlesPerBar = Math.round(R.barsCount / R.zAspectRatio * .5), this._updateGeometryAttributes()
                }
                setFloorOpacity(e) {
                    this._points.material.uniforms.uOpacity.value = e
                }
                setPixelRatio(e) {
                    this._points.material.uniforms.uPixelRatio.value = e
                }
                update(e) {
                    super.update(e), this._points.material.uniforms.uTime.value = .001 * e.time
                }
                destroy() {
                    super.destroy(), this._material.dispose(), this._geometry.dispose(), this.remove(this._points)
                }
                constructor(e) {
                    super(), this._geometry = new n.u9r, this._stageSize = {
                        width: 1,
                        height: 1
                    }, this._updateGeometryAttributes(), this._material = new n.jyz({
                        side: n.Wl3,
                        vertexShader: "#define GLSLIFY 1\nuniform float uTime;\nuniform vec2 uCanvasRes;\nuniform float uPixelRatio;\nuniform float uSize;\nuniform float uZAspectRatio;\n\nattribute float aRandom;\n\nvarying float vDist;\n\n#define PI 3.14159265359\n\nvoid main(){\n    vec3 stablePosition = position;\n\n    float disOffset = (mod((uTime * 0.02 + 300.0)  * aRandom , 1.0)) - 0.5; //[0-1]\n\n    // stablePosition.z = disOffset;\n\n    //distance from center and 2.0 is aspect ratio (defined in generateFloorPosition fn)\n    float dist = 1.0 - length(vec2(stablePosition.x, stablePosition.z * uZAspectRatio)); \n\n    //Scale variety \n    float scaleRandom = (sin(uTime * aRandom * 2.0) + 1.0) * 0.5 + 0.5; \n\n    vec4 modelPosition = modelMatrix * vec4(stablePosition, 1.0);\n    vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectedPosition = projectionMatrix * viewPosition;\n\n    gl_Position = projectedPosition;\n    gl_PointSize =  uPixelRatio  * 5.5 * scaleRandom;\n    gl_PointSize *= (1.0 / - viewPosition.z * 1000.0)  ;\n\n    vDist = dist;\n}",
                        fragmentShader: "#define GLSLIFY 1\nuniform sampler2D tMap;\nuniform float uOpacity;\n\nvarying float vDist;\n\nvoid main()\n{\n  vec4 t1 = texture2D(tMap, gl_PointCoord);\n  gl_FragColor.rgba = vec4(vec3(1.0), t1.a * vDist * 0.3 * uOpacity);\n}",
                        transparent: !0,
                        wireframe: !1,
                        depthTest: !1,
                        depthWrite: !1,
                        uniforms: {
                            uPixelRatio: {
                                value: 1
                            },
                            tMap: {
                                value: null
                            },
                            uTime: {
                                value: 0
                            },
                            uOpacity: {
                                value: 1
                            },
                            uStageRes: {
                                value: [0, 0]
                            },
                            uZAspectRatio: {
                                value: R.zAspectRatio
                            }
                        }
                    }), this._points = new n.woe(this._geometry, this._material), this._points.renderOrder = -1, this.add(this._points), this._setGui()
                }
            }
            C.disappearOffset = .15, C.ellipseX = 1.05;
            var k = s(5829),
                G = s(7658),
                j = s.n(G);
            class B {
                initObserver() {
                    this._observer.unobserve(this._observerElement), this._observer.observe(this._observerElement)
                }
                animateIn() {}
                animateOut() {}
                onResize() {}
                destroy() {
                    this._observer.unobserve(this._observerElement)
                }
                constructor({
                    observerElement: e,
                    element: t
                }) {
                    this._transformPrefix = j()("transform"), this._triggerOnce = !0, this._handleIntersection = (e, t) => {
                        if (!this._shouldObserve) return this.animateIn();
                        e.forEach(e => {
                            e.intersectionRatio > 0 ? (this.animateIn(), this._triggerOnce && t.unobserve(e.target)) : this.animateOut()
                        })
                    }, this._element = t;
                    let s = "none" !== this._element.dataset.observer;
                    e ? this._observerElement = e : this._observerElement = this._element, this._shouldObserve = s, this._observer = new IntersectionObserver(this._handleIntersection)
                }
            }
            class D extends B {
                animateIn() {
                    super.animateIn(), this._text.lines && this._text.lines.forEach((e, t) => {
                        Array.from(e.children).forEach(e => {
                            e.style.transition = "transform calc(1.6 * var(--t-1)) ".concat(.16 * t, "s var(--ease-1)"), e.classList.add("word--active")
                        })
                    })
                }
                animateOut() {
                    super.animateOut(), this._text.lines && this._text.lines.forEach((e, t) => {
                        Array.from(e.children).forEach(e => {
                            e.style.transition = "transform var(--t-1) ".concat(.1 * t, "s var(--ease-1)"), e.classList.remove("word--active")
                        })
                    })
                }
                onResize() {
                    super.onResize(), this._text.revert(), this._text = new k.Z(this._element, {
                        tagName: "span",
                        types: "lines, words"
                    })
                }
                destroy() {
                    super.destroy(), this._text.revert()
                }
                constructor({
                    element: e
                }) {
                    super({
                        element: e
                    }), this._text = new k.Z(this._element, {
                        tagName: "span",
                        types: "lines, words"
                    }), this._element.style.opacity = "1"
                }
            }
            class H extends S {
                _createHeroes(e) {
                    e.forEach(e => {
                        let t = new I({
                            name: e.name,
                            setFocusedIndex: this._setFocusedIndex
                        });
                        t.setAsset(e.loadedAsset, e.blurTexture), t.setColliderName("sceneItem"), this._heroesArray3D.push(t)
                    }), this._heroesArray3D.forEach(e => {
                        this.add(e), e.addEventListener("click", this._handleHeroClick), e.addEventListener("mouseenter", this._handleHeroMouseEnter), e.addEventListener("mouseleave", this._handleHeroMouseLeave)
                    }), this._sizeHeroes()
                }
                _destroyHeroes() {
                    this._heroesArray3D.forEach(e => {
                        e.destroy(), this.remove(e)
                    }), this._heroesArray3D = []
                }
                _sizeHTMLElements() {
                    this._gridHolderEl.el && (this._gridHolderEl.rect = this._gridHolderEl.el.getBoundingClientRect()), this._focusedHolderEl.el && (this._focusedHolderEl.rect = this._focusedHolderEl.el.getBoundingClientRect())
                }
                _getHTMLElements() {
                    this._gridHolderEl.el = document.querySelector('[data-motion-carousel="gridHolder"]'), this._focusedHolderEl.el = document.querySelector('[data-motion-carousel="focusedHolder"]');
                    let e = Array.from(document.querySelectorAll('[data-motion-carousel="heroTitle"]')),
                        t = Array.from(document.querySelectorAll('[data-motion-carousel="heroDescription"]')),
                        s = Array.from(document.querySelectorAll('[data-motion-carousel="heroSeparator"]')),
                        i = Array.from(document.querySelectorAll('[data-motion-carousel="heroSeparatorBottom"]')),
                        r = Array.from(document.querySelectorAll('[data-motion-carousel="heroTextWrapper"]')),
                        o = Array.from(document.querySelectorAll('[data-motion-carousel="heroTag"]'));
                    l.elementsArray.forEach(a => {
                        let n = e.find(e => e.innerHTML === a.name),
                            l = t.find(e => e.innerHTML === a.description),
                            c = s.find(e => e.dataset.heroname === a.name),
                            h = i.find(e => e.dataset.heroname === a.name),
                            d = r.find(e => e.dataset.heroname === a.name),
                            u = o.find(e => e.dataset.heroname === a.name);
                        this._heroTexts.push({
                            heroName: a.name,
                            titleParagraph: new D({
                                element: n
                            }),
                            descriptionParagraph: new D({
                                element: l
                            }),
                            separatorEl: c,
                            textWrapperEl: d,
                            separatorBottomEl: h,
                            heroTag: new D({
                                element: u
                            })
                        })
                    })
                }
                _animateFocusState(e) {
                    let {
                        destination: t,
                        duration: s = 1400,
                        delay: i = 0,
                        easing: r = p.ZP.Easing.Exponential.InOut
                    } = e;
                    this._focusedStateTween && this._focusedStateTween.stop();
                    let o = !1,
                        a = !1,
                        n = !1;
                    this._focusedStateTween = new p.ZP.Tween(l).to({
                        isFocused: t
                    }, s).delay(i).easing(r).onUpdate(() => {
                        this._heroesArray3D.forEach(e => {
                            var s, i;
                            if (e.updatePlaneSize(), this._floor3D.rotation.x = l.isFocused * Math.PI * .5, this._floor3D.setFloorOpacity(1 - l.isFocused), 0 === t && !n && (n = !0, this._animateHerosTextsOut(), l.closeFocusEl && (l.closeFocusEl.style.opacity = "0", l.closeFocusEl.style.transform = " translateY(120%)", l.closeFocusEl.style.pointerEvents = "none")), 1 === t && !n && l.isFocused >= .99) {
                                n = !0;
                                let r = l.elementsArray[this._activeIndexFocused.current].name;
                                this._animateHeroTextsIn(r), l.closeFocusEl && (l.closeFocusEl.style.opacity = "1", l.closeFocusEl.style.transform = " translateY(0)", l.closeFocusEl.style.pointerEvents = "initial")
                            }
                            if (1 === t && !o) {
                                if (o = !0, !this._hero3DClicked || !this._hero3DClicked.heroItem) return;
                                let c = this._hero3DClicked.heroItem.backgroundColor,
                                    h = "hsl(".concat(c[0], ", ").concat(c[1], "%, ").concat(c[2], "%)");
                                l.canvasWrapperEl && (l.canvasWrapperEl.style.backgroundColor = h)
                            }
                            if (0 === t && !a && l.isFocused <= .99) {
                                a = !0, l.gridTitleWrapperEl && (l.gridTitleWrapperEl.style.opacity = "1"), l.gridTitleWrapperEl && (l.gridTitleWrapperEl.style.transform = "scale(1)");
                                let d = null === (s = l.gridTitleWrapperEl) || void 0 === s ? void 0 : s.children[1];
                                d.style.transform = "scaleX(1)"
                            }
                            if (1 === t && !a && l.isFocused >= .01) {
                                l.gridTitleWrapperEl && (l.gridTitleWrapperEl.style.opacity = "0"), l.gridTitleWrapperEl && (l.gridTitleWrapperEl.style.transform = "scale(1.5)");
                                let u = null === (i = l.gridTitleWrapperEl) || void 0 === i ? void 0 : i.children[1];
                                u.style.transform = "scaleX(0)"
                            }
                        })
                    }).onComplete(() => {
                        1 === t && (document.body.style.cursor = "initial")
                    }).start()
                }
                _skipToFocusedPercent(e) {
                    var t;
                    let {
                        destination: s,
                        duration: i = 600,
                        delay: r = 0,
                        easing: o = p.ZP.Easing.Sinusoidal.InOut
                    } = e;
                    this._snapFocusedTimeoutId && clearTimeout(this._snapFocusedTimeoutId), this._skipToFocusedPercentTween && this._skipToFocusedPercentTween.stop();
                    let a = s,
                        n = 0;
                    l.scrollValuesFocused.current.x >= 0 ? n = Math.floor(l.scrollValuesFocused.current.x) : (a = -(1 - a), n = Math.ceil(l.scrollValuesFocused.current.x));
                    let c = null === (t = l.elementsArray.find(e => 0 === e.order)) || void 0 === t ? void 0 : t.name,
                        h = this._heroesArray3D.find(e => {
                            var t;
                            return (null === (t = e.heroItem) || void 0 === t ? void 0 : t.name) === c
                        });
                    if (h._focusedNormalizedProgress > .5 && 0 === this._activeIndexFocused.current) {
                        let d = Math.abs(a);
                        (0 === d || 1 === d) && (n -= 1)
                    }
                    let u = n + a;
                    this._skipToFocusedPercentTween = new p.ZP.Tween(l.scrollValuesFocused.target).to({
                        x: u
                    }, i).delay(r).easing(o).onUpdate(e => {
                        l.scrollValuesFocused.target.x = e.x
                    }), this._skipToFocusedPercentTween.start()
                }
                _addListeners() {
                    var e;
                    super._addListeners(), this._scroll.addEventListener("wheel", this._onScroll), this._scroll.addEventListener("touch", this._onScrollTouch), this._scroll.addEventListener("mouse", this._onScrollTouch), null === (e = l.closeFocusEl) || void 0 === e || e.addEventListener("click", this._handleFocusClose)
                }
                _removeListeners() {
                    var e;
                    super._removeListeners(), this._scroll.removeEventListener("wheel", this._onScroll), this._scroll.removeEventListener("touch", this._onScrollTouch), this._scroll.removeEventListener("mouse", this._onScrollTouch), null === (e = l.closeFocusEl) || void 0 === e || e.removeEventListener("click", this._handleFocusClose), this._heroesArray3D.forEach(e => {
                        e.removeEventListener("click", this._handleHeroClick), e.removeEventListener("mouseenter", this._handleHeroMouseEnter), e.removeEventListener("mouseleave", this._handleHeroMouseLeave)
                    })
                }
                _sizeHeroes() {
                    this._heroesArray3D.forEach(e => {
                        if (e.setStageSize(this._stageSize), e.setFocusedElBounds(this._focusedHolderEl.rect), e.setGridElBounds(this._gridHolderEl.rect), e.updatePlaneSize(), e.resetExtraScrollGrid(), this._heroTexts.forEach(e => {
                                e.descriptionParagraph.onResize(), e.titleParagraph.onResize(), e.heroTag.onResize()
                            }), 1 === l.isFocused) {
                            let t = l.elementsArray[this._activeIndexFocused.current].name;
                            this._animateHeroTextsIn(t)
                        }
                    })
                }
                _resetScrollValues() {
                    l.scrollValuesGrid.current.x = 0, l.scrollValuesGrid.target.x = 0, l.scrollValuesGrid.last.x = 0, l.scrollValuesGrid.direction.x = "left", l.scrollValuesFocused.current.x = 0, l.scrollValuesFocused.target.x = 0, l.scrollValuesFocused.last.x = 0, l.scrollValuesFocused.direction.x = "left"
                }
                setStageSize(e) {
                    super.setStageSize(e), l.isTouchDevice = y(), this._floor3D.setStageSize(e), this._resetScrollValues(), this._sizeHTMLElements(), this._sizeHeroes(), this._snapFocusedTimeoutId && clearTimeout(this._snapFocusedTimeoutId), this._skipToFocusedPercentTween && this._skipToFocusedPercentTween.stop()
                }
                setLoadedAssets(e) {
                    let t = e.particleMask;
                    this._floor3D.setAsset(t);
                    let s = [];
                    Object.entries(e).forEach(t => {
                        let [i, r] = t, o = l.elementsArray.find(e => e.name === i);
                        l.elementsArray.forEach(e => {
                            e.name === i && (e.assetSizeRatio = r.naturalWidth / r.naturalHeight)
                        }), o && s.push({
                            name: o.name,
                            description: o.description,
                            loadedAsset: r,
                            blurTexture: e["".concat(i, "_blur")].asset
                        })
                    }), this._createHeroes(s)
                }
                _handleScrollValues(e) {
                    l.scrollValuesGrid.current.x = (0, v.t)(l.scrollValuesGrid.current.x, l.scrollValuesGrid.target.x, S.lerpEase * e.slowDownFactor), l.scrollValuesGrid.current.x <= l.scrollValuesGrid.last.x ? l.scrollValuesGrid.direction.x = "left" : l.scrollValuesGrid.direction.x = "right", l.scrollValuesGrid.last.x = l.scrollValuesGrid.current.x, l.scrollValuesGrid.last.y = l.scrollValuesGrid.current.y, l.scrollValuesFocused.current.x = (0, v.t)(l.scrollValuesFocused.current.x, l.scrollValuesFocused.target.x, S.lerpEase * e.slowDownFactor), l.scrollValuesFocused.current.x <= l.scrollValuesFocused.last.x ? l.scrollValuesFocused.direction.x = "left" : l.scrollValuesFocused.direction.x = "right", l.scrollValuesFocused.last.x = l.scrollValuesFocused.current.x, l.scrollValuesFocused.last.y = l.scrollValuesFocused.current.y
                }
                _handleFocusedProgress() {
                    l.focusedModProgress = l.scrollValuesFocused.current.x % 1
                }
                _handleFocusedIndexChange() {
                    if (this._activeIndexFocused.current !== this._activeIndexFocused.prev && 1 === l.isFocused) {
                        if (l.canvasWrapperEl) {
                            let e = l.elementsArray[this._activeIndexFocused.current].backgroundColor,
                                t = "hsl(".concat(e[0], ", ").concat(e[1], "%, ").concat(e[2], "%)");
                            1 === l.isFocused && (l.canvasWrapperEl.style.backgroundColor = t)
                        }
                        this._animateHerosTextsOut();
                        let s = l.elementsArray[this._activeIndexFocused.current].name;
                        this._animateHeroTextsIn(s)
                    }
                }
                _animateHeroTextsIn(e) {
                    this._heroTexts.forEach(t => {
                        t.heroName === e && (t.descriptionParagraph.animateIn(), t.titleParagraph.animateIn(), t.heroTag.animateIn(), t.separatorEl.style.transform = "translateY(0%)", t.separatorBottomEl.style.transform = "scaleX(1)", t.separatorBottomEl.style.transformOrigin = "left", t.textWrapperEl.style.opacity = "1", t.textWrapperEl.style.transform = "scale(1)")
                    })
                }
                _animateHerosTextsOut() {
                    this._heroTexts.forEach(e => {
                        e.descriptionParagraph.animateOut(), e.titleParagraph.animateOut(), e.heroTag.animateOut(), e.separatorEl.style.transform = "translateY(110%)", e.separatorBottomEl.style.transform = "scaleX(0)", e.separatorBottomEl.style.transformOrigin = "right", e.textWrapperEl.style.opacity = "0", e.textWrapperEl.style.transform = "scale(1.35)"
                    })
                }
                _handleAutoScrollGrid(e) {
                    !this._scroll._isTouching && l.isFocused < .5 && ("left" === l.scrollValuesGrid.direction.x ? l.scrollValuesGrid.target.x -= H.autoScrollSpeed * e.slowDownFactor * this._shouldAutoScrollGrid : l.scrollValuesGrid.target.x += H.autoScrollSpeed * e.slowDownFactor * this._shouldAutoScrollGrid)
                }
                setPixelRatio(e) {
                    super.setPixelRatio(e), this._floor3D.setPixelRatio(e)
                }
                update(e) {
                    super.update(e), p.ZP.update(e.time), this._floor3D.update(e), this._heroesArray3D.forEach(t => {
                        t.update(e)
                    }), this._handleAutoScrollGrid(e), this._handleScrollValues(e), this._handleFocusedProgress(), this._handleFocusedIndexChange()
                }
                destroy() {
                    super.destroy(), this._removeListeners(), this._destroyHeroes(), this._floor3D.destroy(), this._heroTexts.forEach(e => {
                        e.descriptionParagraph.destroy(), e.titleParagraph.destroy(), e.heroTag.destroy()
                    }), this._snapFocusedTimeoutId && clearTimeout(this._snapFocusedTimeoutId), this._skipToFocusedPercentTween && this._skipToFocusedPercentTween.stop(), this._focusedStateTween && this._focusedStateTween.stop(), this._shouldAutoScrollGridTween && this._shouldAutoScrollGridTween.kill()
                }
                constructor({
                    camera: e
                }) {
                    super({
                        camera: e
                    }), this._heroesArray3D = [], this._gridHolderEl = {
                        el: null,
                        rect: _.f
                    }, this._focusedHolderEl = {
                        el: null,
                        rect: _.f
                    }, this._activeIndexFocused = {
                        current: 0,
                        prev: 0
                    }, this._snapFocusedTimeoutId = null, this._skipToFocusedPercentTween = null, this._focusedStateTween = null, this._shouldAutoScrollGridTween = null, this._hero3DClicked = null, this._shouldAutoScrollGrid = 1, this._heroTexts = [], this._onScroll = e => {
                        0 === l.isFocused && (l.scrollValuesGrid.target.x += e.y), 1 === l.isFocused && (l.scrollValuesFocused.target.x -= 5e-4 * e.y * .9, this._snapFocusedTimeoutId && clearTimeout(this._snapFocusedTimeoutId), this._snapFocusedTimeoutId = setTimeout(this._performFocusedSnap, 600), this._skipToFocusedPercentTween && this._skipToFocusedPercentTween.stop())
                    }, this._onScrollTouch = e => {
                        0 === l.isFocused && (l.scrollValuesGrid.target.x += 2.5 * e.x), 1 === l.isFocused && (l.scrollValuesFocused.target.x -= .00125 * e.x, this._snapFocusedTimeoutId && clearTimeout(this._snapFocusedTimeoutId), this._snapFocusedTimeoutId = setTimeout(this._performFocusedSnap, 600), this._skipToFocusedPercentTween && this._skipToFocusedPercentTween.stop())
                    }, this._handleFocusClose = () => {
                        this._animateFocusState({
                            destination: 0
                        }), l.canvasWrapperEl && (l.canvasWrapperEl.style.backgroundColor = l.defaultBackgroundColor)
                    }, this._handleHeroClick = e => {
                        if (1 === l.isFocused) return;
                        let t = e.target;
                        if (this._hero3DClicked = t, t.heroItem) {
                            let s = l.elementsArray.length - t.heroItem.order;
                            this._skipToFocusedPercent({
                                destination: s / l.elementsArray.length
                            }), this._animateFocusState({
                                destination: 1
                            })
                        }
                    }, this._animateShouldAutoScrollGrid = e => {
                        let {
                            destination: t,
                            duration: s = .5,
                            delay: i = 0,
                            easing: r = p.ZP.Easing.Sinusoidal.InOut
                        } = e;
                        this._shouldAutoScrollGridTween && this._shouldAutoScrollGridTween.kill(), this._shouldAutoScrollGridTween = g.ZP.to(this, {
                            _shouldAutoScrollGrid: t,
                            duration: s,
                            delay: i,
                            ease: r
                        }), this._shouldAutoScrollGridTween.play()
                    }, this._handleHeroMouseEnter = () => {
                        this._animateShouldAutoScrollGrid({
                            destination: 0
                        })
                    }, this._handleHeroMouseLeave = () => {
                        this._animateShouldAutoScrollGrid({
                            destination: 1
                        })
                    }, this._performFocusedSnap = () => {
                        let e = l.elementsArray.length - this._activeIndexFocused.current;
                        this._skipToFocusedPercent({
                            destination: e / l.elementsArray.length
                        })
                    }, this._setFocusedIndex = e => {
                        this._activeIndexFocused.prev = this._activeIndexFocused.current, this._activeIndexFocused.current = e
                    }, this._floor3D = new C({}), this.add(this._floor3D), this._addListeners(), this._getHTMLElements(), this._sizeHTMLElements()
                }
            }
            H.autoScrollSpeed = 1.9;
            var O = {
                src: "/_next/static/media/mask1.adf10feb.webp",
                height: 100,
                width: 100,
                blurDataURL: "data:image/webp;base64,UklGRn4AAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSD8AAAABYBzbVpoHRLB+4rKipVgD2lnWbFMKr42ICEBqLQHoajl6C1l9iXFWekkkT6cPknyd7CP5hwx2Pt/gASjnMgAAVlA4IBgAAAAwAQCdASoIAAgAAkA4JaQAA3AA/vshgAA=",
                blurWidth: 8,
                blurHeight: 8
            };
            class N extends n.pBf {
                _onResize() {
                    let e = this._rendererEl.getBoundingClientRect(),
                        t = e.width / e.height;
                    this._camera.aspect = t, this._camera.position.z = 1e3, this._camera.fov = 2 * Math.atan(e.height / 2 / this._camera.position.z) * (180 / Math.PI), this._renderer.setSize(e.width, e.height), this._pixelRatio = Math.min(window.devicePixelRatio, 2), this._renderer.setPixelRatio(this._pixelRatio), this._camera.updateProjectionMatrix(), this._experienceScene.setPixelRatio(this._pixelRatio), this._experienceScene.setStageSize(e)
                }
                _addListeners() {
                    window.addEventListener("resize", this._onResizeDebounced), window.addEventListener("visibilitychange", this._onVisibilityChange), this._preloader.addEventListener("loaded", this._onAssetsLoaded), this._preloader.addEventListener("progress", this._onPreloaderProgress)
                }
                _removeListeners() {
                    window.removeEventListener("resize", this._onResizeDebounced), window.removeEventListener("visibilitychange", this._onVisibilityChange), this._preloader.removeEventListener("loaded", this._onAssetsLoaded), this._preloader.removeEventListener("progress", this._onPreloaderProgress)
                }
                _resumeAppFrame() {
                    this._isResumed = !0, this._rafId || (this._rafId = window.requestAnimationFrame(this._renderOnFrame))
                }
                _stopAppFrame() {
                    this._rafId && (window.cancelAnimationFrame(this._rafId), this._rafId = null)
                }
                destroy() {
                    var e;
                    this._canvas.parentNode && this._canvas.parentNode.removeChild(this._canvas), this._stopAppFrame(), this._removeListeners(), this._experienceScene.destroy(), this._preloader.destroy(), null === (e = l.gui) || void 0 === e || e.destroy(), l.gui = null, l.planeGeometry.dispose(), l.focusedModProgress = 0, l.isFocused = 0
                }
                constructor({
                    rendererEl: e
                }) {
                    super(), this._rafId = null, this._isResumed = !0, this._lastFrameTime = null, this._preloader = new m.p, this._pixelRatio = 1, this._onResizeDebounced = h()(() => this._onResize(), 300), this._onVisibilityChange = () => {
                        document.hidden ? this._stopAppFrame() : this._resumeAppFrame()
                    }, this._onAssetsLoaded = e => {
                        this._onResize(), this._rendererEl.style.opacity = "1", Object.entries(e.target.loadedAssets).forEach(e => {
                            let t = e[1].asset;
                            t && this._renderer.initTexture(t)
                        }), this._experienceScene.setLoadedAssets(e.target.loadedAssets)
                    }, this._onPreloaderProgress = e => {
                        l.loadingTextBarEl && (l.loadingTextBarEl.style.transform = "scaleX(".concat(e.progress, ")")), 1 === e.progress && (l.loadingTextBarEl && (l.loadingTextBarEl.style.opacity = "0"), l.loadingScreenEl && (l.loadingScreenEl.style.opacity = "0"))
                    }, this._renderOnFrame = e => {
                        if (this._rafId = window.requestAnimationFrame(this._renderOnFrame), this._isResumed || !this._lastFrameTime) {
                            this._lastFrameTime = window.performance.now(), this._isResumed = !1;
                            return
                        }
                        let t = e - this._lastFrameTime,
                            s = t / u.W.motion.DT_FPS;
                        this._lastFrameTime = e, this._experienceScene.update({
                            delta: t,
                            slowDownFactor: s,
                            time: e
                        }), this._renderer.render(this._experienceScene, this._camera)
                    }, this._rendererEl = e, this._canvas = document.createElement("canvas"), this._rendererEl.appendChild(this._canvas), this._camera = new n.cPb, l.gui = new d.ZP, l.gui.title("Scene settings"), l.guiLabelEl = document.getElementsByClassName("title")[0], l.gui.hide(), this._renderer = new n.CP7({
                        canvas: this._canvas,
                        antialias: !0,
                        alpha: !0,
                        powerPreference: "high-performance"
                    }), this._experienceScene = new H({
                        camera: this._camera
                    }), this._onResize(), this._addListeners(), this._resumeAppFrame();
                    let t = l.elementsArray.map(e => ({
                            src: e.imgSrc,
                            type: _.h.IMAGE,
                            targetName: e.name
                        })),
                        s = l.elementsArray.map(e => ({
                            src: e.imgBlurSrc,
                            type: _.h.IMAGE,
                            targetName: e.name + "_blur"
                        }));
                    this._preloader.setAssetsToPreload([...t, ...s, {
                        src: O.src,
                        type: "image",
                        targetName: "particleMask"
                    }])
                }
            }
            var W = s(8207),
                V = s.n(W);

            function U(e) {
                let {
                    head: t
                } = e, s = (0, o.useRef)(null);
                return (0, o.useEffect)(() => {
                    if (s.current) return l.closeFocusEl = document.querySelector('[data-motion-carousel="closeFocus"]'), l.gridTitleWrapperEl = document.querySelector('[data-motion-carousel="gridTitleWrapper"]'), l.loadingScreenEl = document.querySelector('[data-motion-carousel="loadingScreen"]'), l.loadingTextEl = document.querySelector('[data-motion-carousel="loadingText"]'), l.loadingTextBarEl = document.querySelector('[data-motion-carousel="loadingTextBar"]'), l.canvasWrapperEl = s.current, l.app = new N({
                        rendererEl: s.current
                    }), () => {
                        l.app && (l.app.destroy(), l.app = null)
                    }
                }, []), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(a.F, { ...t
                    }), (0, r.jsx)("div", {
                        "data-motion-carousel": "loadingScreen",
                        className: V().loadingWrapper,
                        children: (0, r.jsx)("div", {
                            "data-motion-carousel": "loadingText",
                            children: (0, r.jsx)("div", {
                                "data-motion-carousel": "loadingTextBar"
                            })
                        })
                    }), (0, r.jsx)("div", {
                        className: V().canvasWrapper,
                        ref: s
                    }), (0, r.jsxs)("div", {
                        className: V().sharedVariables,
                        children: [(0, r.jsxs)("div", {
                            "data-motion-carousel": "gridTitleWrapper",
                            className: V().titleWrapper,
                            children: [(0, r.jsx)("p", {
                                className: V().title,
                                children: "Choose Character"
                            }), (0, r.jsx)("span", {}), (0, r.jsx)("p", {
                                className: V().smallTitle,
                                children: "Avengers"
                            })]
                        }), (0, r.jsxs)("div", {
                            className: V().contentWrapper,
                            children: [(0, r.jsx)("div", {
                                className: V().focusedHolder,
                                "data-motion-carousel": "focusedHolder"
                            }), (0, r.jsx)("div", {
                                className: V().infoHolder,
                                children: l.elementsArray.map(e => (0, r.jsxs)("div", {
                                    "data-heroname": e.name,
                                    "data-motion-carousel": "heroTextWrapper",
                                    className: V().textWrapper,
                                    children: [(0, r.jsx)("div", {
                                        style: {
                                            width: "100%",
                                            overflow: "hidden",
                                            height: "3px",
                                            marginBottom: "var(--margin-1)"
                                        },
                                        children: (0, r.jsx)("div", {
                                            "data-heroname": e.name,
                                            "data-motion-carousel": "heroSeparator",
                                            className: V().textSeparator
                                        })
                                    }), (0, r.jsx)("p", {
                                        "data-heroname": e.name,
                                        "data-motion-carousel": "heroTag",
                                        "data-animation": "paragraph",
                                        className: V().smallTitle,
                                        children: "Avengers"
                                    }), (0, r.jsx)("p", {
                                        className: V().heroTitle,
                                        "data-motion-carousel": "heroTitle",
                                        "data-animation": "paragraph",
                                        children: e.name
                                    }, e.name), (0, r.jsx)("div", {
                                        "data-heroname": e.name,
                                        "data-motion-carousel": "heroSeparatorBottom",
                                        className: V().textSeparatorBottom
                                    }), (0, r.jsx)("p", {
                                        className: V().heroDescription,
                                        "data-motion-carousel": "heroDescription",
                                        "data-animation": "paragraph",
                                        children: e.description
                                    }, e.description)]
                                }, e.name))
                            })]
                        }), (0, r.jsx)("div", {
                            className: V().closeFocusWrapper,
                            children: (0, r.jsxs)("div", {
                                className: V().closeFocus,
                                "data-motion-carousel": "closeFocus",
                                children: [(0, r.jsx)("span", {
                                    "data-motion-carousel": "stripe-1"
                                }), (0, r.jsx)("span", {
                                    "data-motion-carousel": "stripe-2"
                                })]
                            })
                        })]
                    }), (0, r.jsx)("div", {
                        className: V().gridHolder,
                        "data-motion-carousel": "gridHolder"
                    })]
                })
            }
            var X = !0
        },
        3130: function(e, t, s) {
            "use strict";
            s.d(t, {
                F: function() {
                    return a
                }
            });
            var i = s(5893),
                r = s(9008),
                o = s.n(r);
            s(7294);
            let a = e => {
                let {
                    ogImage: t = "https://res.cloudinary.com/dpv0ukspz/image/upload/v1672869370/ognew2-100_vnkj1z.jpg",
                    title: s = "Portfolio 2023",
                    description: r = "Michal Zalobny portfolio 2023 - WebGL | GLSL | Canvas"
                } = e;
                return (0, i.jsxs)(o(), {
                    children: [(0, i.jsx)("title", {
                        children: "".concat(s, " - Michal Zalobny")
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
                        content: "Michal Zalobny - ".concat(s)
                    }), (0, i.jsx)("meta", {
                        property: "og:description",
                        content: r
                    }), (0, i.jsx)("meta", {
                        property: "og:image",
                        content: t
                    }), (0, i.jsx)("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }), (0, i.jsx)("meta", {
                        name: "twitter:title",
                        content: "Michal Zalobny - ".concat(s)
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
        3629: function(e, t, s) {
            "use strict";
            s.d(t, {
                t: function() {
                    return i
                }
            });
            let i = (e, t, s) => e + (t - e) * s
        },
        2925: function(e, t, s) {
            "use strict";
            s.d(t, {
                C: function() {
                    return i
                }
            });
            let i = (e, t, s) => e * (1 - s) + s * t
        },
        8929: function(e, t, s) {
            "use strict";
            s.d(t, {
                A: function() {
                    return r
                }
            });
            var i = s(9477);
            class r extends i.pBf {
                static getInstance() {
                    return r._instance || (r._canCreate = !0, r._instance = new r, r._canCreate = !1), r._instance
                }
                _addEvents() {
                    window.addEventListener("mousedown", this._onTouchDown), window.addEventListener("mousemove", this._onTouchMove, {
                        passive: !0
                    }), window.addEventListener("mouseup", this._onTouchUp), window.addEventListener("click", this._onClick), window.addEventListener("touchstart", this._onTouchDown), window.addEventListener("touchmove", this._onTouchMove, {
                        passive: !0
                    }), window.addEventListener("touchend", this._onTouchUp), window.addEventListener("mouseout", this._onMouseLeave)
                }
                update() {
                    this._isInit && this.dispatchEvent({
                        type: "mousemove"
                    });
                    let {
                        mouse: e,
                        _mouseLast: t
                    } = this;
                    t.x = e.x, t.y = e.y
                }
                constructor() {
                    if (super(), this._mouseLast = {
                            x: 0,
                            y: 0
                        }, this._isTouching = !1, this._clickStart = {
                            x: 0,
                            y: 0
                        }, this.mouse = {
                            x: 0,
                            y: 0
                        }, this.strength = 0, this._isInit = !1, this._onTouchDown = e => {
                            this._isInit = !0, this._isTouching = !0, this._mouseLast.x = "touches" in e ? e.touches[0].clientX : e.clientX, this._mouseLast.y = "touches" in e ? e.touches[0].clientY : e.clientY, this.mouse.x = this._mouseLast.x, this.mouse.y = this._mouseLast.y, this._clickStart.x = this.mouse.x, this._clickStart.y = this.mouse.y, this.dispatchEvent({
                                type: "down"
                            })
                        }, this._onTouchMove = e => {
                            this._isInit = !0;
                            let t = "touches" in e ? e.touches[0].clientX : e.clientX,
                                s = "touches" in e ? e.touches[0].clientY : e.clientY,
                                i = t - this._mouseLast.x,
                                r = s - this._mouseLast.y;
                            this.strength = i * i + r * r, this._mouseLast.x = t, this._mouseLast.y = s, this.mouse.x += i, this.mouse.y += r
                        }, this._onTouchUp = () => {
                            this._isTouching = !1, this.dispatchEvent({
                                type: "up"
                            })
                        }, this._onMouseLeave = () => {
                            this.dispatchEvent({
                                type: "left"
                            })
                        }, this._onClick = () => {
                            this._isInit = !0;
                            let e = Math.abs(this._clickStart.x - this.mouse.x),
                                t = Math.abs(this._clickStart.y - this.mouse.y);
                            e <= 10 && t <= 10 && this.dispatchEvent({
                                type: "click"
                            })
                        }, r._instance || !r._canCreate) throw Error("Use MouseMove.getInstance()");
                    this._addEvents(), r._instance = this
                }
            }
            r._canCreate = !1
        },
        4036: function(e, t, s) {
            "use strict";
            s.d(t, {
                p: function() {
                    return l
                }
            });
            var i = s(9477),
                r = s(4976),
                o = s(7607);
            let a = e => {
                e.children && e.children.forEach(e => a(e)), e instanceof i.Kj0 && (e.geometry instanceof i.u9r && e.geometry.dispose(), e.material instanceof i.F5T && e.material.dispose())
            };
            var n = s(7957);
            class l extends i.pBf {
                _assignAsset(e) {
                    let {
                        asset: t,
                        naturalHeight: s,
                        naturalWidth: i,
                        objPropertyName: r,
                        type: o
                    } = e;
                    this.loadedAssets[r] = {
                        type: o,
                        asset: t,
                        naturalWidth: i,
                        naturalHeight: s
                    }, this._onAssetLoaded()
                }
                _preloadTextures() {
                    if (0 === this._assetsToPreload.length) return this._onLoadingComplete();
                    let e = e => {
                            let t = new i.xEZ,
                                s = new window.Image;
                            s.crossOrigin = "anonymous", s.src = e.src;
                            let r = () => {
                                t.image = s, t.needsUpdate = !0, this._assignAsset({
                                    objPropertyName: e.targetName || e.src,
                                    type: n.h.IMAGE,
                                    asset: t,
                                    naturalWidth: s.naturalWidth,
                                    naturalHeight: s.naturalHeight
                                })
                            };
                            if (s.complete) return r();
                            s.onload = () => {
                                r()
                            }, s.onerror = () => {
                                this._assignAsset({
                                    objPropertyName: e.targetName || e.src,
                                    type: n.h.IMAGE,
                                    asset: t,
                                    naturalWidth: 1,
                                    naturalHeight: 1
                                }), console.error("Failed to load image at ".concat(e.src))
                            }
                        },
                        t = e => {
                            let t = document.createElement("video");
                            t.crossOrigin = "anonymous", t.muted = !0, t.loop = !0, t.controls = !0, t.playsInline = !0, t.autoplay = !0, t.src = e.src, t.play(), t.oncanplay = () => {
                                let s = new i.fO1(t);
                                this._assignAsset({
                                    objPropertyName: e.targetName || e.src,
                                    type: n.h.VIDEO,
                                    asset: s,
                                    naturalWidth: t.videoWidth,
                                    naturalHeight: t.videoHeight
                                })
                            }, t.onerror = () => {
                                let s = new i.fO1(t);
                                this._assignAsset({
                                    objPropertyName: e.targetName || e.src,
                                    type: n.h.VIDEO,
                                    asset: s,
                                    naturalWidth: 1,
                                    naturalHeight: 1
                                }), console.error("Failed to load video at ".concat(e.src))
                            }
                        },
                        s = e => {
                            this._gltfLoader.load(e.src, t => {
                                this._assignAsset({
                                    objPropertyName: e.targetName || e.src,
                                    type: n.h.MODEL3D,
                                    asset: t,
                                    naturalWidth: 1,
                                    naturalHeight: 1
                                })
                            }, e => {}, t => {
                                this._assignAsset({
                                    objPropertyName: e.targetName || e.src,
                                    type: n.h.MODEL3D,
                                    asset: null,
                                    naturalWidth: 1,
                                    naturalHeight: 1
                                }), console.error("Failed to load 3D model at ".concat(e.src, " "), t)
                            })
                        },
                        r = e => {
                            let t = t => {
                                    this._assignAsset({
                                        objPropertyName: e.targetName || e.src,
                                        type: n.h.CUBE_TEXTURE,
                                        asset: t,
                                        naturalWidth: 1,
                                        naturalHeight: 1
                                    })
                                },
                                s = e.src.split("-");
                            this._cubeTextureLoader.setPath("cubeMaps/".concat(s[0], "/"));
                            let i = s[1] || "jpg";
                            this._cubeTextureLoader.load(["px.".concat(i), "nx.".concat(i), "py.".concat(i), "ny.".concat(i), "pz.".concat(i), "nz.".concat(i)], t)
                        };
                    this._assetsToPreload.forEach(i => {
                        switch (i.type) {
                            case n.h.IMAGE:
                                e(i);
                                break;
                            case n.h.VIDEO:
                                t(i);
                                break;
                            case n.h.MODEL3D:
                                s(i);
                                break;
                            case n.h.CUBE_TEXTURE:
                                r(i)
                        }
                    })
                }
                _onAssetLoaded() {
                    this._assetsLoadedCounter += 1;
                    let e = this._assetsLoadedCounter / this._assetsToPreload.length;
                    this.dispatchEvent({
                        type: "progress",
                        progress: e
                    }), 1 === e && this._onLoadingComplete()
                }
                _onLoadingComplete() {
                    this.dispatchEvent({
                        type: "loaded"
                    })
                }
                setAssetsToPreload(e) {
                    this._assetsToPreload = e, this._preloadTextures()
                }
                destroy() {
                    Object.entries(this.loadedAssets).forEach(e => {
                        switch (e[1].type) {
                            case n.h.IMAGE:
                            case n.h.VIDEO:
                                e[1].asset.dispose();
                                break;
                            case n.h.MODEL3D:
                                e[1].asset.scenes.forEach(e => {
                                    a(e)
                                });
                                break;
                            case n.h.CUBE_TEXTURE:
                                e[1].asset.dispose()
                        }
                    })
                }
                constructor() {
                    super(), this._assetsLoadedCounter = 0, this._dracoLoader = new r._, this._gltfLoader = new o.E, this._cubeTextureLoader = new i.cBK, this._assetsToPreload = [], this.loadedAssets = {}, this._dracoLoader.setDecoderPath("/draco/"), this._gltfLoader.setDRACOLoader(this._dracoLoader)
                }
            }
        },
        7957: function(e, t, s) {
            "use strict";
            var i, r;
            s.d(t, {
                f: function() {
                    return o
                },
                h: function() {
                    return i
                }
            }), (r = i || (i = {})).MODEL3D = "model3d", r.VIDEO = "video", r.IMAGE = "image", r.CUBE_TEXTURE = "cube_texture";
            let o = {
                bottom: 1,
                height: 1,
                left: 1,
                right: 1,
                top: 1,
                width: 1,
                x: 1,
                y: 1
            }
        },
        8518: function(e, t, s) {
            "use strict";
            s.d(t, {
                W: function() {
                    return i
                }
            });
            let i = {
                motion: {
                    DEFAULT_FPS: 60,
                    DT_FPS: 16.666666666666668,
                    LERP_EASE: .07,
                    MOMENTUM_DAMPING: .8,
                    MOMENTUM_CARRY: .6
                },
                ISR_TIMEOUT: 5
            }
        },
        8207: function(e) {
            e.exports = {
                loadingWrapper: "Project_loadingWrapper__kpw5_",
                canvasWrapper: "Project_canvasWrapper__CSgsq",
                sharedVariables: "Project_sharedVariables__nSTJG",
                titleWrapper: "Project_titleWrapper__DDkOC",
                title: "Project_title__7ug2y",
                smallTitle: "Project_smallTitle__x7425",
                infoHolder: "Project_infoHolder__VQxz8",
                textWrapper: "Project_textWrapper__us5Ni",
                textSeparator: "Project_textSeparator__ifDR8",
                textSeparatorBottom: "Project_textSeparatorBottom__msMbI",
                heroTitle: "Project_heroTitle__Hfhqr",
                heroDescription: "Project_heroDescription__y5i4U",
                contentWrapper: "Project_contentWrapper__1gY1w",
                focusedHolder: "Project_focusedHolder__gpj_P",
                gridHolder: "Project_gridHolder__SYg2U",
                closeFocusWrapper: "Project_closeFocusWrapper__watJn",
                closeFocus: "Project_closeFocus__RFYHQ"
            }
        }
    },
    function(e) {
        e.O(0, [737, 802, 149, 637, 194, 541, 774, 888, 179], function() {
            return e(e.s = 2300)
        }), _N_E = e.O()
    }
]);