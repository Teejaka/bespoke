"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [637], {
        7637: function(t, i, e) {
            /**
             * lil-gui
             * https://lil-gui.georgealways.com
             * @version 0.17.0
             * @author George Michael Brower
             * @license MIT
             */
            class s {
                constructor(t, i, e, n, l = "div") {
                    this.parent = t, this.object = i, this.property = e, this._disabled = !1, this._hidden = !1, this.initialValue = this.getValue(), this.domElement = document.createElement("div"), this.domElement.classList.add("controller"), this.domElement.classList.add(n), this.$name = document.createElement("div"), this.$name.classList.add("name"), s.nextNameID = s.nextNameID || 0, this.$name.id = `lil-gui-name-${++s.nextNameID}`, this.$widget = document.createElement(l), this.$widget.classList.add("widget"), this.$disable = this.$widget, this.domElement.appendChild(this.$name), this.domElement.appendChild(this.$widget), this.parent.children.push(this), this.parent.controllers.push(this), this.parent.$children.appendChild(this.domElement), this._listenCallback = this._listenCallback.bind(this), this.name(e)
                }
                name(t) {
                    return this._name = t, this.$name.innerHTML = t, this
                }
                onChange(t) {
                    return this._onChange = t, this
                }
                _callOnChange() {
                    this.parent._callOnChange(this), void 0 !== this._onChange && this._onChange.call(this, this.getValue()), this._changed = !0
                }
                onFinishChange(t) {
                    return this._onFinishChange = t, this
                }
                _callOnFinishChange() {
                    this._changed && (this.parent._callOnFinishChange(this), void 0 !== this._onFinishChange && this._onFinishChange.call(this, this.getValue())), this._changed = !1
                }
                reset() {
                    return this.setValue(this.initialValue), this._callOnFinishChange(), this
                }
                enable(t = !0) {
                    return this.disable(!t)
                }
                disable(t = !0) {
                    return t === this._disabled || (this._disabled = t, this.domElement.classList.toggle("disabled", t), this.$disable.toggleAttribute("disabled", t)), this
                }
                show(t = !0) {
                    return this._hidden = !t, this.domElement.style.display = this._hidden ? "none" : "", this
                }
                hide() {
                    return this.show(!1)
                }
                options(t) {
                    let i = this.parent.add(this.object, this.property, t);
                    return i.name(this._name), this.destroy(), i
                }
                min(t) {
                    return this
                }
                max(t) {
                    return this
                }
                step(t) {
                    return this
                }
                decimals(t) {
                    return this
                }
                listen(t = !0) {
                    return this._listening = t, void 0 !== this._listenCallbackID && (cancelAnimationFrame(this._listenCallbackID), this._listenCallbackID = void 0), this._listening && this._listenCallback(), this
                }
                _listenCallback() {
                    this._listenCallbackID = requestAnimationFrame(this._listenCallback);
                    let t = this.save();
                    t !== this._listenPrevValue && this.updateDisplay(), this._listenPrevValue = t
                }
                getValue() {
                    return this.object[this.property]
                }
                setValue(t) {
                    return this.object[this.property] = t, this._callOnChange(), this.updateDisplay(), this
                }
                updateDisplay() {
                    return this
                }
                load(t) {
                    return this.setValue(t), this._callOnFinishChange(), this
                }
                save() {
                    return this.getValue()
                }
                destroy() {
                    this.listen(!1), this.parent.children.splice(this.parent.children.indexOf(this), 1), this.parent.controllers.splice(this.parent.controllers.indexOf(this), 1), this.parent.$children.removeChild(this.domElement)
                }
            }
            class n extends s {
                constructor(t, i, e) {
                    super(t, i, e, "boolean", "label"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "checkbox"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$widget.appendChild(this.$input), this.$input.addEventListener("change", () => {
                        this.setValue(this.$input.checked), this._callOnFinishChange()
                    }), this.$disable = this.$input, this.updateDisplay()
                }
                updateDisplay() {
                    return this.$input.checked = this.getValue(), this
                }
            }

            function l(t) {
                let i, e;
                return (i = t.match(/(#|0x)?([a-f0-9]{6})/i)) ? e = i[2] : (i = t.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/)) ? e = parseInt(i[1]).toString(16).padStart(2, 0) + parseInt(i[2]).toString(16).padStart(2, 0) + parseInt(i[3]).toString(16).padStart(2, 0) : (i = t.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i)) && (e = i[1] + i[1] + i[2] + i[2] + i[3] + i[3]), !!e && "#" + e
            }
            let r = {
                    isPrimitive: !0,
                    match: t => "number" == typeof t,
                    fromHexString: t => parseInt(t.substring(1), 16),
                    toHexString: t => "#" + t.toString(16).padStart(6, 0)
                },
                o = {
                    isPrimitive: !1,
                    match: Array.isArray,
                    fromHexString(t, i, e = 1) {
                        let s = r.fromHexString(t);
                        i[0] = (s >> 16 & 255) / 255 * e, i[1] = (s >> 8 & 255) / 255 * e, i[2] = (255 & s) / 255 * e
                    },
                    toHexString([t, i, e], s = 1) {
                        s = 255 / s;
                        let n = t * s << 16 ^ i * s << 8 ^ e * s << 0;
                        return r.toHexString(n)
                    }
                },
                a = [{
                    isPrimitive: !0,
                    match: t => "string" == typeof t,
                    fromHexString: l,
                    toHexString: l
                }, r, o, {
                    isPrimitive: !1,
                    match: t => Object(t) === t,
                    fromHexString(t, i, e = 1) {
                        let s = r.fromHexString(t);
                        i.r = (s >> 16 & 255) / 255 * e, i.g = (s >> 8 & 255) / 255 * e, i.b = (255 & s) / 255 * e
                    },
                    toHexString({
                        r: t,
                        g: i,
                        b: e
                    }, s = 1) {
                        s = 255 / s;
                        let n = t * s << 16 ^ i * s << 8 ^ e * s << 0;
                        return r.toHexString(n)
                    }
                }];
            class h extends s {
                constructor(t, i, e, s) {
                    var n;
                    super(t, i, e, "color"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "color"), this.$input.setAttribute("tabindex", -1), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$text = document.createElement("input"), this.$text.setAttribute("type", "text"), this.$text.setAttribute("spellcheck", "false"), this.$text.setAttribute("aria-labelledby", this.$name.id), this.$display = document.createElement("div"), this.$display.classList.add("display"), this.$display.appendChild(this.$input), this.$widget.appendChild(this.$display), this.$widget.appendChild(this.$text), this._format = (n = this.initialValue, a.find(t => t.match(n))), this._rgbScale = s, this._initialValueHexString = this.save(), this._textFocused = !1, this.$input.addEventListener("input", () => {
                        this._setValueFromHexString(this.$input.value)
                    }), this.$input.addEventListener("blur", () => {
                        this._callOnFinishChange()
                    }), this.$text.addEventListener("input", () => {
                        let t = l(this.$text.value);
                        t && this._setValueFromHexString(t)
                    }), this.$text.addEventListener("focus", () => {
                        this._textFocused = !0, this.$text.select()
                    }), this.$text.addEventListener("blur", () => {
                        this._textFocused = !1, this.updateDisplay(), this._callOnFinishChange()
                    }), this.$disable = this.$text, this.updateDisplay()
                }
                reset() {
                    return this._setValueFromHexString(this._initialValueHexString), this
                }
                _setValueFromHexString(t) {
                    if (this._format.isPrimitive) {
                        let i = this._format.fromHexString(t);
                        this.setValue(i)
                    } else this._format.fromHexString(t, this.getValue(), this._rgbScale), this._callOnChange(), this.updateDisplay()
                }
                save() {
                    return this._format.toHexString(this.getValue(), this._rgbScale)
                }
                load(t) {
                    return this._setValueFromHexString(t), this._callOnFinishChange(), this
                }
                updateDisplay() {
                    return this.$input.value = this._format.toHexString(this.getValue(), this._rgbScale), this._textFocused || (this.$text.value = this.$input.value.substring(1)), this.$display.style.backgroundColor = this.$input.value, this
                }
            }
            class d extends s {
                constructor(t, i, e) {
                    super(t, i, e, "function"), this.$button = document.createElement("button"), this.$button.appendChild(this.$name), this.$widget.appendChild(this.$button), this.$button.addEventListener("click", t => {
                        t.preventDefault(), this.getValue().call(this.object)
                    }), this.$button.addEventListener("touchstart", () => {}, {
                        passive: !0
                    }), this.$disable = this.$button
                }
            }
            class c extends s {
                constructor(t, i, e, s, n, l) {
                    super(t, i, e, "number"), this._initInput(), this.min(s), this.max(n);
                    let r = void 0 !== l;
                    this.step(r ? l : this._getImplicitStep(), r), this.updateDisplay()
                }
                decimals(t) {
                    return this._decimals = t, this.updateDisplay(), this
                }
                min(t) {
                    return this._min = t, this._onUpdateMinMax(), this
                }
                max(t) {
                    return this._max = t, this._onUpdateMinMax(), this
                }
                step(t, i = !0) {
                    return this._step = t, this._stepExplicit = i, this
                }
                updateDisplay() {
                    let t = this.getValue();
                    if (this._hasSlider) {
                        let i = (t - this._min) / (this._max - this._min);
                        i = Math.max(0, Math.min(i, 1)), this.$fill.style.width = 100 * i + "%"
                    }
                    return this._inputFocused || (this.$input.value = void 0 === this._decimals ? t : t.toFixed(this._decimals)), this
                }
                _initInput() {
                    this.$input = document.createElement("input"), this.$input.setAttribute("type", "number"), this.$input.setAttribute("step", "any"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$widget.appendChild(this.$input), this.$disable = this.$input;
                    let t = () => {
                            let t = parseFloat(this.$input.value);
                            isNaN(t) || (this._stepExplicit && (t = this._snap(t)), this.setValue(this._clamp(t)))
                        },
                        i = t => {
                            let i = parseFloat(this.$input.value);
                            isNaN(i) || (this._snapClampSetValue(i + t), this.$input.value = this.getValue())
                        },
                        e = t => {
                            "Enter" === t.code && this.$input.blur(), "ArrowUp" === t.code && (t.preventDefault(), i(this._step * this._arrowKeyMultiplier(t))), "ArrowDown" === t.code && (t.preventDefault(), i(-(this._step * this._arrowKeyMultiplier(t) * 1)))
                        },
                        s = t => {
                            this._inputFocused && (t.preventDefault(), i(this._step * this._normalizeMouseWheel(t)))
                        },
                        n = !1,
                        l, r, o, a, h, d = t => {
                            l = t.clientX, r = o = t.clientY, n = !0, a = this.getValue(), h = 0, window.addEventListener("mousemove", c), window.addEventListener("mouseup", u)
                        },
                        c = t => {
                            if (n) {
                                let i = t.clientX - l,
                                    e = t.clientY - r;
                                Math.abs(e) > 5 ? (t.preventDefault(), this.$input.blur(), n = !1, this._setDraggingStyle(!0, "vertical")) : Math.abs(i) > 5 && u()
                            }
                            if (!n) {
                                let s = t.clientY - o;
                                a + (h -= s * this._step * this._arrowKeyMultiplier(t)) > this._max ? h = this._max - a : a + h < this._min && (h = this._min - a), this._snapClampSetValue(a + h)
                            }
                            o = t.clientY
                        },
                        u = () => {
                            this._setDraggingStyle(!1, "vertical"), this._callOnFinishChange(), window.removeEventListener("mousemove", c), window.removeEventListener("mouseup", u)
                        },
                        p = () => {
                            this._inputFocused = !0
                        },
                        g = () => {
                            this._inputFocused = !1, this.updateDisplay(), this._callOnFinishChange()
                        };
                    this.$input.addEventListener("input", t), this.$input.addEventListener("keydown", e), this.$input.addEventListener("wheel", s, {
                        passive: !1
                    }), this.$input.addEventListener("mousedown", d), this.$input.addEventListener("focus", p), this.$input.addEventListener("blur", g)
                }
                _initSlider() {
                    let t;
                    this._hasSlider = !0, this.$slider = document.createElement("div"), this.$slider.classList.add("slider"), this.$fill = document.createElement("div"), this.$fill.classList.add("fill"), this.$slider.appendChild(this.$fill), this.$widget.insertBefore(this.$slider, this.$input), this.domElement.classList.add("hasSlider");
                    let i = (t, i, e, s, n) => (t - i) / (e - i) * (n - s) + s,
                        e = t => {
                            let e = this.$slider.getBoundingClientRect(),
                                s = i(t, e.left, e.right, this._min, this._max);
                            this._snapClampSetValue(s)
                        },
                        s = t => {
                            this._setDraggingStyle(!0), e(t.clientX), window.addEventListener("mousemove", n), window.addEventListener("mouseup", l)
                        },
                        n = t => {
                            e(t.clientX)
                        },
                        l = () => {
                            this._callOnFinishChange(), this._setDraggingStyle(!1), window.removeEventListener("mousemove", n), window.removeEventListener("mouseup", l)
                        },
                        r = !1,
                        o, a, h = t => {
                            t.preventDefault(), this._setDraggingStyle(!0), e(t.touches[0].clientX), r = !1
                        },
                        d = t => {
                            t.touches.length > 1 || (this._hasScrollBar ? (o = t.touches[0].clientX, a = t.touches[0].clientY, r = !0) : h(t), window.addEventListener("touchmove", c, {
                                passive: !1
                            }), window.addEventListener("touchend", u))
                        },
                        c = t => {
                            if (r) {
                                let i = t.touches[0].clientX - o,
                                    s = t.touches[0].clientY - a;
                                Math.abs(i) > Math.abs(s) ? h(t) : (window.removeEventListener("touchmove", c), window.removeEventListener("touchend", u))
                            } else t.preventDefault(), e(t.touches[0].clientX)
                        },
                        u = () => {
                            this._callOnFinishChange(), this._setDraggingStyle(!1), window.removeEventListener("touchmove", c), window.removeEventListener("touchend", u)
                        },
                        p = this._callOnFinishChange.bind(this),
                        g = i => {
                            let e = Math.abs(i.deltaX) < Math.abs(i.deltaY);
                            if (e && this._hasScrollBar) return;
                            i.preventDefault();
                            let s = this._normalizeMouseWheel(i) * this._step;
                            this._snapClampSetValue(this.getValue() + s), this.$input.value = this.getValue(), clearTimeout(t), t = setTimeout(p, 400)
                        };
                    this.$slider.addEventListener("mousedown", s), this.$slider.addEventListener("touchstart", d, {
                        passive: !1
                    }), this.$slider.addEventListener("wheel", g, {
                        passive: !1
                    })
                }
                _setDraggingStyle(t, i = "horizontal") {
                    this.$slider && this.$slider.classList.toggle("active", t), document.body.classList.toggle("lil-gui-dragging", t), document.body.classList.toggle(`lil-gui-${i}`, t)
                }
                _getImplicitStep() {
                    return this._hasMin && this._hasMax ? (this._max - this._min) / 1e3 : .1
                }
                _onUpdateMinMax() {
                    !this._hasSlider && this._hasMin && this._hasMax && (this._stepExplicit || this.step(this._getImplicitStep(), !1), this._initSlider(), this.updateDisplay())
                }
                _normalizeMouseWheel(t) {
                    let {
                        deltaX: i,
                        deltaY: e
                    } = t;
                    Math.floor(t.deltaY) !== t.deltaY && t.wheelDelta && (i = 0, e = -t.wheelDelta / 120 * (this._stepExplicit ? 1 : 10));
                    let s = i + -e;
                    return s
                }
                _arrowKeyMultiplier(t) {
                    let i = this._stepExplicit ? 1 : 10;
                    return t.shiftKey ? i *= 10 : t.altKey && (i /= 10), i
                }
                _snap(t) {
                    let i = Math.round(t / this._step) * this._step;
                    return parseFloat(i.toPrecision(15))
                }
                _clamp(t) {
                    return t < this._min && (t = this._min), t > this._max && (t = this._max), t
                }
                _snapClampSetValue(t) {
                    this.setValue(this._clamp(this._snap(t)))
                }
                get _hasScrollBar() {
                    let t = this.parent.root.$children;
                    return t.scrollHeight > t.clientHeight
                }
                get _hasMin() {
                    return void 0 !== this._min
                }
                get _hasMax() {
                    return void 0 !== this._max
                }
            }
            class u extends s {
                constructor(t, i, e, s) {
                    super(t, i, e, "option"), this.$select = document.createElement("select"), this.$select.setAttribute("aria-labelledby", this.$name.id), this.$display = document.createElement("div"), this.$display.classList.add("display"), this._values = Array.isArray(s) ? s : Object.values(s), this._names = Array.isArray(s) ? s : Object.keys(s), this._names.forEach(t => {
                        let i = document.createElement("option");
                        i.innerHTML = t, this.$select.appendChild(i)
                    }), this.$select.addEventListener("change", () => {
                        this.setValue(this._values[this.$select.selectedIndex]), this._callOnFinishChange()
                    }), this.$select.addEventListener("focus", () => {
                        this.$display.classList.add("focus")
                    }), this.$select.addEventListener("blur", () => {
                        this.$display.classList.remove("focus")
                    }), this.$widget.appendChild(this.$select), this.$widget.appendChild(this.$display), this.$disable = this.$select, this.updateDisplay()
                }
                updateDisplay() {
                    let t = this.getValue(),
                        i = this._values.indexOf(t);
                    return this.$select.selectedIndex = i, this.$display.innerHTML = -1 === i ? t : this._names[i], this
                }
            }
            class p extends s {
                constructor(t, i, e) {
                    super(t, i, e, "string"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "text"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$input.addEventListener("input", () => {
                        this.setValue(this.$input.value)
                    }), this.$input.addEventListener("keydown", t => {
                        "Enter" === t.code && this.$input.blur()
                    }), this.$input.addEventListener("blur", () => {
                        this._callOnFinishChange()
                    }), this.$widget.appendChild(this.$input), this.$disable = this.$input, this.updateDisplay()
                }
                updateDisplay() {
                    return this.$input.value = this.getValue(), this
                }
            }
            let g = `.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`,
                m = !1;
            class v {
                constructor({
                    parent: t,
                    autoPlace: i = void 0 === t,
                    container: e,
                    width: s,
                    title: n = "Controls",
                    injectStyles: l = !0,
                    touchStyles: r = !0
                } = {}) {
                    if (this.parent = t, this.root = t ? t.root : this, this.children = [], this.controllers = [], this.folders = [], this._closed = !1, this._hidden = !1, this.domElement = document.createElement("div"), this.domElement.classList.add("lil-gui"), this.$title = document.createElement("div"), this.$title.classList.add("title"), this.$title.setAttribute("role", "button"), this.$title.setAttribute("aria-expanded", !0), this.$title.setAttribute("tabindex", 0), this.$title.addEventListener("click", () => this.openAnimated(this._closed)), this.$title.addEventListener("keydown", t => {
                            ("Enter" === t.code || "Space" === t.code) && (t.preventDefault(), this.$title.click())
                        }), this.$title.addEventListener("touchstart", () => {}, {
                            passive: !0
                        }), this.$children = document.createElement("div"), this.$children.classList.add("children"), this.domElement.appendChild(this.$title), this.domElement.appendChild(this.$children), this.title(n), r && this.domElement.classList.add("allow-touch-styles"), this.parent) {
                        this.parent.children.push(this), this.parent.folders.push(this), this.parent.$children.appendChild(this.domElement);
                        return
                    }
                    this.domElement.classList.add("root"), !m && l && (function(t) {
                        let i = document.createElement("style");
                        i.innerHTML = t;
                        let e = document.querySelector("head link[rel=stylesheet], head style");
                        e ? document.head.insertBefore(i, e) : document.head.appendChild(i)
                    }(g), m = !0), e ? e.appendChild(this.domElement) : i && (this.domElement.classList.add("autoPlace"), document.body.appendChild(this.domElement)), s && this.domElement.style.setProperty("--width", s + "px"), this.domElement.addEventListener("keydown", t => t.stopPropagation()), this.domElement.addEventListener("keyup", t => t.stopPropagation())
                }
                add(t, i, e, s, l) {
                    if (Object(e) === e) return new u(this, t, i, e);
                    let r = t[i];
                    switch (typeof r) {
                        case "number":
                            return new c(this, t, i, e, s, l);
                        case "boolean":
                            return new n(this, t, i);
                        case "string":
                            return new p(this, t, i);
                        case "function":
                            return new d(this, t, i)
                    }
                    console.error(`gui.add failed
	property:`, i, `
	object:`, t, `
	value:`, r)
                }
                addColor(t, i, e = 1) {
                    return new h(this, t, i, e)
                }
                addFolder(t) {
                    return new v({
                        parent: this,
                        title: t
                    })
                }
                load(t, i = !0) {
                    return t.controllers && this.controllers.forEach(i => {
                        !(i instanceof d) && i._name in t.controllers && i.load(t.controllers[i._name])
                    }), i && t.folders && this.folders.forEach(i => {
                        i._title in t.folders && i.load(t.folders[i._title])
                    }), this
                }
                save(t = !0) {
                    let i = {
                        controllers: {},
                        folders: {}
                    };
                    return this.controllers.forEach(t => {
                        if (!(t instanceof d)) {
                            if (t._name in i.controllers) throw Error(`Cannot save GUI with duplicate property "${t._name}"`);
                            i.controllers[t._name] = t.save()
                        }
                    }), t && this.folders.forEach(t => {
                        if (t._title in i.folders) throw Error(`Cannot save GUI with duplicate folder "${t._title}"`);
                        i.folders[t._title] = t.save()
                    }), i
                }
                open(t = !0) {
                    return this._closed = !t, this.$title.setAttribute("aria-expanded", !this._closed), this.domElement.classList.toggle("closed", this._closed), this
                }
                close() {
                    return this.open(!1)
                }
                show(t = !0) {
                    return this._hidden = !t, this.domElement.style.display = this._hidden ? "none" : "", this
                }
                hide() {
                    return this.show(!1)
                }
                openAnimated(t = !0) {
                    return this._closed = !t, this.$title.setAttribute("aria-expanded", !this._closed), requestAnimationFrame(() => {
                        let i = this.$children.clientHeight;
                        this.$children.style.height = i + "px", this.domElement.classList.add("transition");
                        let e = t => {
                            t.target === this.$children && (this.$children.style.height = "", this.domElement.classList.remove("transition"), this.$children.removeEventListener("transitionend", e))
                        };
                        this.$children.addEventListener("transitionend", e);
                        let s = t ? this.$children.scrollHeight : 0;
                        this.domElement.classList.toggle("closed", !t), requestAnimationFrame(() => {
                            this.$children.style.height = s + "px"
                        })
                    }), this
                }
                title(t) {
                    return this._title = t, this.$title.innerHTML = t, this
                }
                reset(t = !0) {
                    let i = t ? this.controllersRecursive() : this.controllers;
                    return i.forEach(t => t.reset()), this
                }
                onChange(t) {
                    return this._onChange = t, this
                }
                _callOnChange(t) {
                    this.parent && this.parent._callOnChange(t), void 0 !== this._onChange && this._onChange.call(this, {
                        object: t.object,
                        property: t.property,
                        value: t.getValue(),
                        controller: t
                    })
                }
                onFinishChange(t) {
                    return this._onFinishChange = t, this
                }
                _callOnFinishChange(t) {
                    this.parent && this.parent._callOnFinishChange(t), void 0 !== this._onFinishChange && this._onFinishChange.call(this, {
                        object: t.object,
                        property: t.property,
                        value: t.getValue(),
                        controller: t
                    })
                }
                destroy() {
                    this.parent && (this.parent.children.splice(this.parent.children.indexOf(this), 1), this.parent.folders.splice(this.parent.folders.indexOf(this), 1)), this.domElement.parentElement && this.domElement.parentElement.removeChild(this.domElement), Array.from(this.children).forEach(t => t.destroy())
                }
                controllersRecursive() {
                    let t = Array.from(this.controllers);
                    return this.folders.forEach(i => {
                        t = t.concat(i.controllersRecursive())
                    }), t
                }
                foldersRecursive() {
                    let t = Array.from(this.folders);
                    return this.folders.forEach(i => {
                        t = t.concat(i.foldersRecursive())
                    }), t
                }
            }
            i.ZP = v
        }
    }
]);