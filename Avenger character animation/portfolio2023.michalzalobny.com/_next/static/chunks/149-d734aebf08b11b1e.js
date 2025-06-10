(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [149], {
        1296: function(e, t, s) {
            var r = 0 / 0,
                n = /^\s+|\s+$/g,
                i = /^[-+]0x[0-9a-f]+$/i,
                a = /^0b[01]+$/i,
                o = /^0o[0-7]+$/i,
                l = parseInt,
                u = "object" == typeof s.g && s.g && s.g.Object === Object && s.g,
                c = "object" == typeof self && self && self.Object === Object && self,
                h = u || c || Function("return this")(),
                d = Object.prototype.toString,
                p = Math.max,
                f = Math.min,
                m = function() {
                    return h.Date.now()
                };

            function g(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function T(e) {
                if ("number" == typeof e) return e;
                if ("symbol" == typeof(t = e) || (s = t) && "object" == typeof s && "[object Symbol]" == d.call(t)) return r;
                if (g(e)) {
                    var t, s, u = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = g(u) ? u + "" : u
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(n, "");
                var c = a.test(e);
                return c || o.test(e) ? l(e.slice(2), c ? 2 : 8) : i.test(e) ? r : +e
            }
            e.exports = function(e, t, s) {
                var r, n, i, a, o, l, u = 0,
                    c = !1,
                    h = !1,
                    d = !0;
                if ("function" != typeof e) throw TypeError("Expected a function");

                function x(t) {
                    var s = r,
                        i = n;
                    return r = n = void 0, u = t, a = e.apply(i, s)
                }

                function R(e) {
                    var s = e - l,
                        r = e - u;
                    return void 0 === l || s >= t || s < 0 || h && r >= i
                }

                function _() {
                    var e, s, r, n = m();
                    if (R(n)) return v(n);
                    o = setTimeout(_, (e = n - l, s = n - u, r = t - e, h ? f(r, i - s) : r))
                }

                function v(e) {
                    return (o = void 0, d && r) ? x(e) : (r = n = void 0, a)
                }

                function y() {
                    var e, s = m(),
                        i = R(s);
                    if (r = arguments, n = this, l = s, i) {
                        if (void 0 === o) return u = e = l, o = setTimeout(_, t), c ? x(e) : a;
                        if (h) return o = setTimeout(_, t), x(l)
                    }
                    return void 0 === o && (o = setTimeout(_, t)), a
                }
                return t = T(t) || 0, g(s) && (c = !!s.leading, i = (h = "maxWait" in s) ? p(T(s.maxWait) || 0, t) : i, d = "trailing" in s ? !!s.trailing : d), y.cancel = function() {
                    void 0 !== o && clearTimeout(o), u = 0, r = l = n = o = void 0
                }, y.flush = function() {
                    return void 0 === o ? a : v(m())
                }, y
            }
        },
        9008: function(e, t, s) {
            e.exports = s(3121)
        },
        4976: function(e, t, s) {
            "use strict";
            s.d(t, {
                _: function() {
                    return i
                }
            });
            var r = s(9477);
            let n = new WeakMap;
            class i extends r.aNw {
                constructor(e) {
                    super(e), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
                        position: "POSITION",
                        normal: "NORMAL",
                        color: "COLOR",
                        uv: "TEX_COORD"
                    }, this.defaultAttributeTypes = {
                        position: "Float32Array",
                        normal: "Float32Array",
                        color: "Float32Array",
                        uv: "Float32Array"
                    }
                }
                setDecoderPath(e) {
                    return this.decoderPath = e, this
                }
                setDecoderConfig(e) {
                    return this.decoderConfig = e, this
                }
                setWorkerLimit(e) {
                    return this.workerLimit = e, this
                }
                load(e, t, s, n) {
                    let i = new r.hH6(this.manager);
                    i.setPath(this.path), i.setResponseType("arraybuffer"), i.setRequestHeader(this.requestHeader), i.setWithCredentials(this.withCredentials), i.load(e, e => {
                        let s = {
                            attributeIDs: this.defaultAttributeIDs,
                            attributeTypes: this.defaultAttributeTypes,
                            useUniqueIDs: !1
                        };
                        this.decodeGeometry(e, s).then(t).catch(n)
                    }, s, n)
                }
                decodeDracoFile(e, t, s, r) {
                    let n = {
                        attributeIDs: s || this.defaultAttributeIDs,
                        attributeTypes: r || this.defaultAttributeTypes,
                        useUniqueIDs: !!s
                    };
                    this.decodeGeometry(e, n).then(t)
                }
                decodeGeometry(e, t) {
                    let s;
                    for (let r in t.attributeTypes) {
                        let i = t.attributeTypes[r];
                        void 0 !== i.BYTES_PER_ELEMENT && (t.attributeTypes[r] = i.name)
                    }
                    let a = JSON.stringify(t);
                    if (n.has(e)) {
                        let o = n.get(e);
                        if (o.key === a) return o.promise;
                        if (0 === e.byteLength) throw Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")
                    }
                    let l = this.workerNextTaskID++,
                        u = e.byteLength,
                        c = this._getWorker(l, u).then(r => (s = r, new Promise((r, n) => {
                            s._callbacks[l] = {
                                resolve: r,
                                reject: n
                            }, s.postMessage({
                                type: "decode",
                                id: l,
                                taskConfig: t,
                                buffer: e
                            }, [e])
                        }))).then(e => this._createGeometry(e.geometry));
                    return c.catch(() => !0).then(() => {
                        s && l && this._releaseTask(s, l)
                    }), n.set(e, {
                        key: a,
                        promise: c
                    }), c
                }
                _createGeometry(e) {
                    let t = new r.u9r;
                    e.index && t.setIndex(new r.TlE(e.index.array, 1));
                    for (let s = 0; s < e.attributes.length; s++) {
                        let n = e.attributes[s],
                            i = n.name,
                            a = n.array,
                            o = n.itemSize;
                        t.setAttribute(i, new r.TlE(a, o))
                    }
                    return t
                }
                _loadLibrary(e, t) {
                    let s = new r.hH6(this.manager);
                    return s.setPath(this.decoderPath), s.setResponseType(t), s.setWithCredentials(this.withCredentials), new Promise((t, r) => {
                        s.load(e, t, void 0, r)
                    })
                }
                preload() {
                    return this._initDecoder(), this
                }
                _initDecoder() {
                    if (this.decoderPending) return this.decoderPending;
                    let e = "object" != typeof WebAssembly || "js" === this.decoderConfig.type,
                        t = [];
                    return e ? t.push(this._loadLibrary("draco_decoder.js", "text")) : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(t).then(t => {
                        let s = t[0];
                        e || (this.decoderConfig.wasmBinary = t[1]);
                        let r = a.toString(),
                            n = ["/* draco decoder */", s, "", "/* worker */", r.substring(r.indexOf("{") + 1, r.lastIndexOf("}"))].join("\n");
                        this.workerSourceURL = URL.createObjectURL(new Blob([n]))
                    }), this.decoderPending
                }
                _getWorker(e, t) {
                    return this._initDecoder().then(() => {
                        if (this.workerPool.length < this.workerLimit) {
                            let s = new Worker(this.workerSourceURL);
                            s._callbacks = {}, s._taskCosts = {}, s._taskLoad = 0, s.postMessage({
                                type: "init",
                                decoderConfig: this.decoderConfig
                            }), s.onmessage = function(e) {
                                let t = e.data;
                                switch (t.type) {
                                    case "decode":
                                        s._callbacks[t.id].resolve(t);
                                        break;
                                    case "error":
                                        s._callbacks[t.id].reject(t);
                                        break;
                                    default:
                                        console.error('THREE.DRACOLoader: Unexpected message, "' + t.type + '"')
                                }
                            }, this.workerPool.push(s)
                        } else this.workerPool.sort(function(e, t) {
                            return e._taskLoad > t._taskLoad ? -1 : 1
                        });
                        let r = this.workerPool[this.workerPool.length - 1];
                        return r._taskCosts[e] = t, r._taskLoad += t, r
                    })
                }
                _releaseTask(e, t) {
                    e._taskLoad -= e._taskCosts[t], delete e._callbacks[t], delete e._taskCosts[t]
                }
                debug() {
                    console.log("Task load: ", this.workerPool.map(e => e._taskLoad))
                }
                dispose() {
                    for (let e = 0; e < this.workerPool.length; ++e) this.workerPool[e].terminate();
                    return this.workerPool.length = 0, this
                }
            }

            function a() {
                let e, t;
                onmessage = function(s) {
                    let r = s.data;
                    switch (r.type) {
                        case "init":
                            e = r.decoderConfig, t = new Promise(function(t) {
                                e.onModuleLoaded = function(e) {
                                    t({
                                        draco: e
                                    })
                                }, DracoDecoderModule(e)
                            });
                            break;
                        case "decode":
                            let n = r.buffer,
                                i = r.taskConfig;
                            t.then(e => {
                                let t = e.draco,
                                    s = new t.Decoder,
                                    a = new t.DecoderBuffer;
                                a.Init(new Int8Array(n), n.byteLength);
                                try {
                                    let o = function(e, t, s, r) {
                                            let n, i;
                                            let a = r.attributeIDs,
                                                o = r.attributeTypes,
                                                l = t.GetEncodedGeometryType(s);
                                            if (l === e.TRIANGULAR_MESH) n = new e.Mesh, i = t.DecodeBufferToMesh(s, n);
                                            else if (l === e.POINT_CLOUD) n = new e.PointCloud, i = t.DecodeBufferToPointCloud(s, n);
                                            else throw Error("THREE.DRACOLoader: Unexpected geometry type.");
                                            if (!i.ok() || 0 === n.ptr) throw Error("THREE.DRACOLoader: Decoding failed: " + i.error_msg());
                                            let u = {
                                                index: null,
                                                attributes: []
                                            };
                                            for (let c in a) {
                                                let h, d;
                                                let p = self[o[c]];
                                                if (r.useUniqueIDs) d = a[c], h = t.GetAttributeByUniqueId(n, d);
                                                else {
                                                    if (-1 === (d = t.GetAttributeId(n, e[a[c]]))) continue;
                                                    h = t.GetAttribute(n, d)
                                                }
                                                u.attributes.push(function(e, t, s, r, n, i) {
                                                    let a = i.num_components(),
                                                        o = s.num_points(),
                                                        l = o * a,
                                                        u = l * n.BYTES_PER_ELEMENT,
                                                        c = function(e, t) {
                                                            switch (t) {
                                                                case Float32Array:
                                                                    return e.DT_FLOAT32;
                                                                case Int8Array:
                                                                    return e.DT_INT8;
                                                                case Int16Array:
                                                                    return e.DT_INT16;
                                                                case Int32Array:
                                                                    return e.DT_INT32;
                                                                case Uint8Array:
                                                                    return e.DT_UINT8;
                                                                case Uint16Array:
                                                                    return e.DT_UINT16;
                                                                case Uint32Array:
                                                                    return e.DT_UINT32
                                                            }
                                                        }(e, n),
                                                        h = e._malloc(u);
                                                    t.GetAttributeDataArrayForAllPoints(s, i, c, u, h);
                                                    let d = new n(e.HEAPF32.buffer, h, l).slice();
                                                    return e._free(h), {
                                                        name: r,
                                                        array: d,
                                                        itemSize: a
                                                    }
                                                }(e, t, n, c, p, h))
                                            }
                                            return l === e.TRIANGULAR_MESH && (u.index = function(e, t, s) {
                                                let r = s.num_faces(),
                                                    n = 3 * r,
                                                    i = 4 * n,
                                                    a = e._malloc(i);
                                                t.GetTrianglesUInt32Array(s, i, a);
                                                let o = new Uint32Array(e.HEAPF32.buffer, a, n).slice();
                                                return e._free(a), {
                                                    array: o,
                                                    itemSize: 1
                                                }
                                            }(e, t, n)), e.destroy(n), u
                                        }(t, s, a, i),
                                        l = o.attributes.map(e => e.array.buffer);
                                    o.index && l.push(o.index.array.buffer), self.postMessage({
                                        type: "decode",
                                        id: r.id,
                                        geometry: o
                                    }, l)
                                } catch (u) {
                                    console.error(u), self.postMessage({
                                        type: "error",
                                        id: r.id,
                                        error: u.message
                                    })
                                } finally {
                                    t.destroy(a), t.destroy(s)
                                }
                            })
                    }
                }
            }
        },
        7607: function(e, t, s) {
            "use strict";
            s.d(t, {
                E: function() {
                    return n
                }
            });
            var r = s(9477);
            class n extends r.aNw {
                constructor(e) {
                    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(e) {
                        return new c(e)
                    }), this.register(function(e) {
                        return new T(e)
                    }), this.register(function(e) {
                        return new x(e)
                    }), this.register(function(e) {
                        return new d(e)
                    }), this.register(function(e) {
                        return new p(e)
                    }), this.register(function(e) {
                        return new f(e)
                    }), this.register(function(e) {
                        return new m(e)
                    }), this.register(function(e) {
                        return new u(e)
                    }), this.register(function(e) {
                        return new g(e)
                    }), this.register(function(e) {
                        return new h(e)
                    }), this.register(function(e) {
                        return new o(e)
                    }), this.register(function(e) {
                        return new R(e)
                    })
                }
                load(e, t, s, n) {
                    let i;
                    let a = this;
                    i = "" !== this.resourcePath ? this.resourcePath : "" !== this.path ? this.path : r.Zp0.extractUrlBase(e), this.manager.itemStart(e);
                    let o = function(t) {
                            n ? n(t) : console.error(t), a.manager.itemError(e), a.manager.itemEnd(e)
                        },
                        l = new r.hH6(this.manager);
                    l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(e, function(s) {
                        try {
                            a.parse(s, i, function(s) {
                                t(s), a.manager.itemEnd(e)
                            }, o)
                        } catch (r) {
                            o(r)
                        }
                    }, s, o)
                }
                setDRACOLoader(e) {
                    return this.dracoLoader = e, this
                }
                setDDSLoader() {
                    throw Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')
                }
                setKTX2Loader(e) {
                    return this.ktx2Loader = e, this
                }
                setMeshoptDecoder(e) {
                    return this.meshoptDecoder = e, this
                }
                register(e) {
                    return -1 === this.pluginCallbacks.indexOf(e) && this.pluginCallbacks.push(e), this
                }
                unregister(e) {
                    return -1 !== this.pluginCallbacks.indexOf(e) && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this
                }
                parse(e, t, s, n) {
                    let i;
                    let o = {},
                        u = {};
                    if ("string" == typeof e) i = e;
                    else {
                        let c = r.Zp0.decodeText(new Uint8Array(e, 0, 4));
                        if (c === _) {
                            try {
                                o[a.KHR_BINARY_GLTF] = new y(e)
                            } catch (h) {
                                n && n(h);
                                return
                            }
                            i = o[a.KHR_BINARY_GLTF].content
                        } else i = r.Zp0.decodeText(new Uint8Array(e))
                    }
                    let d = JSON.parse(i);
                    if (void 0 === d.asset || d.asset.version[0] < 2) {
                        n && n(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
                        return
                    }
                    let p = new V(d, {
                        path: t || this.resourcePath || "",
                        crossOrigin: this.crossOrigin,
                        requestHeader: this.requestHeader,
                        manager: this.manager,
                        ktx2Loader: this.ktx2Loader,
                        meshoptDecoder: this.meshoptDecoder
                    });
                    p.fileLoader.setRequestHeader(this.requestHeader);
                    for (let f = 0; f < this.pluginCallbacks.length; f++) {
                        let m = this.pluginCallbacks[f](p);
                        u[m.name] = m, o[m.name] = !0
                    }
                    if (d.extensionsUsed)
                        for (let g = 0; g < d.extensionsUsed.length; ++g) {
                            let T = d.extensionsUsed[g],
                                x = d.extensionsRequired || [];
                            switch (T) {
                                case a.KHR_MATERIALS_UNLIT:
                                    o[T] = new l;
                                    break;
                                case a.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
                                    o[T] = new S;
                                    break;
                                case a.KHR_DRACO_MESH_COMPRESSION:
                                    o[T] = new A(d, this.dracoLoader);
                                    break;
                                case a.KHR_TEXTURE_TRANSFORM:
                                    o[T] = new E;
                                    break;
                                case a.KHR_MESH_QUANTIZATION:
                                    o[T] = new b;
                                    break;
                                default:
                                    x.indexOf(T) >= 0 && void 0 === u[T] && console.warn('THREE.GLTFLoader: Unknown extension "' + T + '".')
                            }
                        }
                    p.setExtensions(o), p.setPlugins(u), p.parse(s, n)
                }
                parseAsync(e, t) {
                    let s = this;
                    return new Promise(function(r, n) {
                        s.parse(e, t, r, n)
                    })
                }
            }

            function i() {
                let e = {};
                return {
                    get: function(t) {
                        return e[t]
                    },
                    add: function(t, s) {
                        e[t] = s
                    },
                    remove: function(t) {
                        delete e[t]
                    },
                    removeAll: function() {
                        e = {}
                    }
                }
            }
            let a = {
                KHR_BINARY_GLTF: "KHR_binary_glTF",
                KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
                KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
                KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
                KHR_MATERIALS_IOR: "KHR_materials_ior",
                KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness",
                KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
                KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
                KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
                KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
                KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
                KHR_MATERIALS_VOLUME: "KHR_materials_volume",
                KHR_TEXTURE_BASISU: "KHR_texture_basisu",
                KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
                KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
                KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
                EXT_TEXTURE_WEBP: "EXT_texture_webp",
                EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression"
            };
            class o {
                constructor(e) {
                    this.parser = e, this.name = a.KHR_LIGHTS_PUNCTUAL, this.cache = {
                        refs: {},
                        uses: {}
                    }
                }
                _markDefs() {
                    let e = this.parser,
                        t = this.parser.json.nodes || [];
                    for (let s = 0, r = t.length; s < r; s++) {
                        let n = t[s];
                        n.extensions && n.extensions[this.name] && void 0 !== n.extensions[this.name].light && e._addNodeRef(this.cache, n.extensions[this.name].light)
                    }
                }
                _loadLight(e) {
                    let t;
                    let s = this.parser,
                        n = "light:" + e,
                        i = s.cache.get(n);
                    if (i) return i;
                    let a = s.json,
                        o = a.extensions && a.extensions[this.name] || {},
                        l = o.lights || [],
                        u = l[e],
                        c = new r.Ilk(16777215);
                    void 0 !== u.color && c.fromArray(u.color);
                    let h = void 0 !== u.range ? u.range : 0;
                    switch (u.type) {
                        case "directional":
                            (t = new r.Ox3(c)).target.position.set(0, 0, -1), t.add(t.target);
                            break;
                        case "point":
                            (t = new r.cek(c)).distance = h;
                            break;
                        case "spot":
                            (t = new r.PMe(c)).distance = h, u.spot = u.spot || {}, u.spot.innerConeAngle = void 0 !== u.spot.innerConeAngle ? u.spot.innerConeAngle : 0, u.spot.outerConeAngle = void 0 !== u.spot.outerConeAngle ? u.spot.outerConeAngle : Math.PI / 4, t.angle = u.spot.outerConeAngle, t.penumbra = 1 - u.spot.innerConeAngle / u.spot.outerConeAngle, t.target.position.set(0, 0, -1), t.add(t.target);
                            break;
                        default:
                            throw Error("THREE.GLTFLoader: Unexpected light type: " + u.type)
                    }
                    return t.position.set(0, 0, 0), t.decay = 2, void 0 !== u.intensity && (t.intensity = u.intensity), t.name = s.createUniqueName(u.name || "light_" + e), i = Promise.resolve(t), s.cache.add(n, i), i
                }
                createNodeAttachment(e) {
                    let t = this,
                        s = this.parser,
                        r = s.json,
                        n = r.nodes[e],
                        i = n.extensions && n.extensions[this.name] || {},
                        a = i.light;
                    return void 0 === a ? null : this._loadLight(a).then(function(e) {
                        return s._getNodeRef(t.cache, a, e)
                    })
                }
            }
            class l {
                constructor() {
                    this.name = a.KHR_MATERIALS_UNLIT
                }
                getMaterialType() {
                    return r.vBJ
                }
                extendParams(e, t, s) {
                    let n = [];
                    e.color = new r.Ilk(1, 1, 1), e.opacity = 1;
                    let i = t.pbrMetallicRoughness;
                    if (i) {
                        if (Array.isArray(i.baseColorFactor)) {
                            let a = i.baseColorFactor;
                            e.color.fromArray(a), e.opacity = a[3]
                        }
                        void 0 !== i.baseColorTexture && n.push(s.assignTexture(e, "map", i.baseColorTexture, r.knz))
                    }
                    return Promise.all(n)
                }
            }
            class u {
                constructor(e) {
                    this.parser = e, this.name = a.KHR_MATERIALS_EMISSIVE_STRENGTH
                }
                extendMaterialParams(e, t) {
                    let s = this.parser,
                        r = s.json.materials[e];
                    if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
                    let n = r.extensions[this.name].emissiveStrength;
                    return void 0 !== n && (t.emissiveIntensity = n), Promise.resolve()
                }
            }
            class c {
                constructor(e) {
                    this.parser = e, this.name = a.KHR_MATERIALS_CLEARCOAT
                }
                getMaterialType(e) {
                    let t = this.parser,
                        s = t.json.materials[e];
                    return s.extensions && s.extensions[this.name] ? r.EJi : null
                }
                extendMaterialParams(e, t) {
                    let s = this.parser,
                        n = s.json.materials[e];
                    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
                    let i = [],
                        a = n.extensions[this.name];
                    if (void 0 !== a.clearcoatFactor && (t.clearcoat = a.clearcoatFactor), void 0 !== a.clearcoatTexture && i.push(s.assignTexture(t, "clearcoatMap", a.clearcoatTexture)), void 0 !== a.clearcoatRoughnessFactor && (t.clearcoatRoughness = a.clearcoatRoughnessFactor), void 0 !== a.clearcoatRoughnessTexture && i.push(s.assignTexture(t, "clearcoatRoughnessMap", a.clearcoatRoughnessTexture)), void 0 !== a.clearcoatNormalTexture && (i.push(s.assignTexture(t, "clearcoatNormalMap", a.clearcoatNormalTexture)), void 0 !== a.clearcoatNormalTexture.scale)) {
                        let o = a.clearcoatNormalTexture.scale;
                        t.clearcoatNormalScale = new r.FM8(o, o)
                    }
                    return Promise.all(i)
                }
            }
            class h {
                constructor(e) {
                    this.parser = e, this.name = a.KHR_MATERIALS_IRIDESCENCE
                }
                getMaterialType(e) {
                    let t = this.parser,
                        s = t.json.materials[e];
                    return s.extensions && s.extensions[this.name] ? r.EJi : null
                }
                extendMaterialParams(e, t) {
                    let s = this.parser,
                        r = s.json.materials[e];
                    if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
                    let n = [],
                        i = r.extensions[this.name];
                    return void 0 !== i.iridescenceFactor && (t.iridescence = i.iridescenceFactor), void 0 !== i.iridescenceTexture && n.push(s.assignTexture(t, "iridescenceMap", i.iridescenceTexture)), void 0 !== i.iridescenceIor && (t.iridescenceIOR = i.iridescenceIor), void 0 === t.iridescenceThicknessRange && (t.iridescenceThicknessRange = [100, 400]), void 0 !== i.iridescenceThicknessMinimum && (t.iridescenceThicknessRange[0] = i.iridescenceThicknessMinimum), void 0 !== i.iridescenceThicknessMaximum && (t.iridescenceThicknessRange[1] = i.iridescenceThicknessMaximum), void 0 !== i.iridescenceThicknessTexture && n.push(s.assignTexture(t, "iridescenceThicknessMap", i.iridescenceThicknessTexture)), Promise.all(n)
                }
            }
            class d {
                constructor(e) {
                    this.parser = e, this.name = a.KHR_MATERIALS_SHEEN
                }
                getMaterialType(e) {
                    let t = this.parser,
                        s = t.json.materials[e];
                    return s.extensions && s.extensions[this.name] ? r.EJi : null
                }
                extendMaterialParams(e, t) {
                    let s = this.parser,
                        n = s.json.materials[e];
                    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
                    let i = [];
                    t.sheenColor = new r.Ilk(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
                    let a = n.extensions[this.name];
                    return void 0 !== a.sheenColorFactor && t.sheenColor.fromArray(a.sheenColorFactor), void 0 !== a.sheenRoughnessFactor && (t.sheenRoughness = a.sheenRoughnessFactor), void 0 !== a.sheenColorTexture && i.push(s.assignTexture(t, "sheenColorMap", a.sheenColorTexture, r.knz)), void 0 !== a.sheenRoughnessTexture && i.push(s.assignTexture(t, "sheenRoughnessMap", a.sheenRoughnessTexture)), Promise.all(i)
                }
            }
            class p {
                constructor(e) {
                    this.parser = e, this.name = a.KHR_MATERIALS_TRANSMISSION
                }
                getMaterialType(e) {
                    let t = this.parser,
                        s = t.json.materials[e];
                    return s.extensions && s.extensions[this.name] ? r.EJi : null
                }
                extendMaterialParams(e, t) {
                    let s = this.parser,
                        r = s.json.materials[e];
                    if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
                    let n = [],
                        i = r.extensions[this.name];
                    return void 0 !== i.transmissionFactor && (t.transmission = i.transmissionFactor), void 0 !== i.transmissionTexture && n.push(s.assignTexture(t, "transmissionMap", i.transmissionTexture)), Promise.all(n)
                }
            }
            class f {
                constructor(e) {
                    this.parser = e, this.name = a.KHR_MATERIALS_VOLUME
                }
                getMaterialType(e) {
                    let t = this.parser,
                        s = t.json.materials[e];
                    return s.extensions && s.extensions[this.name] ? r.EJi : null
                }
                extendMaterialParams(e, t) {
                    let s = this.parser,
                        n = s.json.materials[e];
                    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
                    let i = [],
                        a = n.extensions[this.name];
                    t.thickness = void 0 !== a.thicknessFactor ? a.thicknessFactor : 0, void 0 !== a.thicknessTexture && i.push(s.assignTexture(t, "thicknessMap", a.thicknessTexture)), t.attenuationDistance = a.attenuationDistance || 1 / 0;
                    let o = a.attenuationColor || [1, 1, 1];
                    return t.attenuationColor = new r.Ilk(o[0], o[1], o[2]), Promise.all(i)
                }
            }
            class m {
                constructor(e) {
                    this.parser = e, this.name = a.KHR_MATERIALS_IOR
                }
                getMaterialType(e) {
                    let t = this.parser,
                        s = t.json.materials[e];
                    return s.extensions && s.extensions[this.name] ? r.EJi : null
                }
                extendMaterialParams(e, t) {
                    let s = this.parser,
                        r = s.json.materials[e];
                    if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
                    let n = r.extensions[this.name];
                    return t.ior = void 0 !== n.ior ? n.ior : 1.5, Promise.resolve()
                }
            }
            class g {
                constructor(e) {
                    this.parser = e, this.name = a.KHR_MATERIALS_SPECULAR
                }
                getMaterialType(e) {
                    let t = this.parser,
                        s = t.json.materials[e];
                    return s.extensions && s.extensions[this.name] ? r.EJi : null
                }
                extendMaterialParams(e, t) {
                    let s = this.parser,
                        n = s.json.materials[e];
                    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
                    let i = [],
                        a = n.extensions[this.name];
                    t.specularIntensity = void 0 !== a.specularFactor ? a.specularFactor : 1, void 0 !== a.specularTexture && i.push(s.assignTexture(t, "specularIntensityMap", a.specularTexture));
                    let o = a.specularColorFactor || [1, 1, 1];
                    return t.specularColor = new r.Ilk(o[0], o[1], o[2]), void 0 !== a.specularColorTexture && i.push(s.assignTexture(t, "specularColorMap", a.specularColorTexture, r.knz)), Promise.all(i)
                }
            }
            class T {
                constructor(e) {
                    this.parser = e, this.name = a.KHR_TEXTURE_BASISU
                }
                loadTexture(e) {
                    let t = this.parser,
                        s = t.json,
                        r = s.textures[e];
                    if (!r.extensions || !r.extensions[this.name]) return null;
                    let n = r.extensions[this.name],
                        i = t.options.ktx2Loader;
                    if (!i) {
                        if (!(s.extensionsRequired && s.extensionsRequired.indexOf(this.name) >= 0)) return null;
                        throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures")
                    }
                    return t.loadTextureImage(e, n.source, i)
                }
            }
            class x {
                constructor(e) {
                    this.parser = e, this.name = a.EXT_TEXTURE_WEBP, this.isSupported = null
                }
                loadTexture(e) {
                    let t = this.name,
                        s = this.parser,
                        r = s.json,
                        n = r.textures[e];
                    if (!n.extensions || !n.extensions[t]) return null;
                    let i = n.extensions[t],
                        a = r.images[i.source],
                        o = s.textureLoader;
                    if (a.uri) {
                        let l = s.options.manager.getHandler(a.uri);
                        null !== l && (o = l)
                    }
                    return this.detectSupport().then(function(n) {
                        if (n) return s.loadTextureImage(e, i.source, o);
                        if (r.extensionsRequired && r.extensionsRequired.indexOf(t) >= 0) throw Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
                        return s.loadTexture(e)
                    })
                }
                detectSupport() {
                    return this.isSupported || (this.isSupported = new Promise(function(e) {
                        let t = new Image;
                        t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
                            e(1 === t.height)
                        }
                    })), this.isSupported
                }
            }
            class R {
                constructor(e) {
                    this.name = a.EXT_MESHOPT_COMPRESSION, this.parser = e
                }
                loadBufferView(e) {
                    let t = this.parser.json,
                        s = t.bufferViews[e];
                    if (!s.extensions || !s.extensions[this.name]) return null; {
                        let r = s.extensions[this.name],
                            n = this.parser.getDependency("buffer", r.buffer),
                            i = this.parser.options.meshoptDecoder;
                        if (!i || !i.supported) {
                            if (!(t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)) return null;
                            throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files")
                        }
                        return n.then(function(e) {
                            let t = r.byteOffset || 0,
                                s = r.byteLength || 0,
                                n = r.count,
                                a = r.byteStride,
                                o = new Uint8Array(e, t, s);
                            return i.decodeGltfBufferAsync ? i.decodeGltfBufferAsync(n, a, o, r.mode, r.filter).then(function(e) {
                                return e.buffer
                            }) : i.ready.then(function() {
                                let e = new ArrayBuffer(n * a);
                                return i.decodeGltfBuffer(new Uint8Array(e), n, a, o, r.mode, r.filter), e
                            })
                        })
                    }
                }
            }
            let _ = "glTF",
                v = {
                    JSON: 1313821514,
                    BIN: 5130562
                };
            class y {
                constructor(e) {
                    this.name = a.KHR_BINARY_GLTF, this.content = null, this.body = null;
                    let t = new DataView(e, 0, 12);
                    if (this.header = {
                            magic: r.Zp0.decodeText(new Uint8Array(e.slice(0, 4))),
                            version: t.getUint32(4, !0),
                            length: t.getUint32(8, !0)
                        }, this.header.magic !== _) throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
                    if (this.header.version < 2) throw Error("THREE.GLTFLoader: Legacy binary file detected.");
                    let s = this.header.length - 12,
                        n = new DataView(e, 12),
                        i = 0;
                    for (; i < s;) {
                        let o = n.getUint32(i, !0);
                        i += 4;
                        let l = n.getUint32(i, !0);
                        if (i += 4, l === v.JSON) {
                            let u = new Uint8Array(e, 12 + i, o);
                            this.content = r.Zp0.decodeText(u)
                        } else if (l === v.BIN) {
                            let c = 12 + i;
                            this.body = e.slice(c, c + o)
                        }
                        i += o
                    }
                    if (null === this.content) throw Error("THREE.GLTFLoader: JSON content not found.")
                }
            }
            class A {
                constructor(e, t) {
                    if (!t) throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
                    this.name = a.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload()
                }
                decodePrimitive(e, t) {
                    let s = this.json,
                        r = this.dracoLoader,
                        n = e.extensions[this.name].bufferView,
                        i = e.extensions[this.name].attributes,
                        a = {},
                        o = {},
                        l = {};
                    for (let u in i) {
                        let c = H[u] || u.toLowerCase();
                        a[c] = i[u]
                    }
                    for (let h in e.attributes) {
                        let d = H[h] || h.toLowerCase();
                        if (void 0 !== i[h]) {
                            let p = s.accessors[e.attributes[h]],
                                f = O[p.componentType];
                            l[d] = f.name, o[d] = !0 === p.normalized
                        }
                    }
                    return t.getDependency("bufferView", n).then(function(e) {
                        return new Promise(function(t) {
                            r.decodeDracoFile(e, function(e) {
                                for (let s in e.attributes) {
                                    let r = e.attributes[s],
                                        n = o[s];
                                    void 0 !== n && (r.normalized = n)
                                }
                                t(e)
                            }, a, l)
                        })
                    })
                }
            }
            class E {
                constructor() {
                    this.name = a.KHR_TEXTURE_TRANSFORM
                }
                extendTexture(e, t) {
                    return void 0 !== t.texCoord && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), void 0 === t.offset && void 0 === t.rotation && void 0 === t.scale || (e = e.clone(), void 0 !== t.offset && e.offset.fromArray(t.offset), void 0 !== t.rotation && (e.rotation = t.rotation), void 0 !== t.scale && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e
                }
            }
            class M extends r.Wid {
                constructor(e) {
                    super(), this.isGLTFSpecularGlossinessMaterial = !0;
                    let t = {
                        specular: {
                            value: new r.Ilk().setHex(16777215)
                        },
                        glossiness: {
                            value: 1
                        },
                        specularMap: {
                            value: null
                        },
                        glossinessMap: {
                            value: null
                        }
                    };
                    this._extraUniforms = t, this.onBeforeCompile = function(e) {
                        for (let s in t) e.uniforms[s] = t[s];
                        e.fragmentShader = e.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;").replace("uniform float metalness;", "uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>", "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif").replace("#include <metalnessmap_pars_fragment>", "#ifdef USE_GLOSSINESSMAP\n	uniform sampler2D glossinessMap;\n#endif").replace("#include <roughnessmap_fragment>", "vec3 specularFactor = specular;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture\n	specularFactor *= texelSpecular.rgb;\n#endif").replace("#include <metalnessmap_fragment>", "float glossinessFactor = glossiness;\n#ifdef USE_GLOSSINESSMAP\n	vec4 texelGlossiness = texture2D( glossinessMap, vUv );\n	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture\n	glossinessFactor *= texelGlossiness.a;\n#endif").replace("#include <lights_physical_fragment>", "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.\nmaterial.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\nmaterial.specularColor = specularFactor;")
                    }, Object.defineProperties(this, {
                        specular: {
                            get: function() {
                                return t.specular.value
                            },
                            set: function(e) {
                                t.specular.value = e
                            }
                        },
                        specularMap: {
                            get: function() {
                                return t.specularMap.value
                            },
                            set: function(e) {
                                t.specularMap.value = e, e ? this.defines.USE_SPECULARMAP = "" : delete this.defines.USE_SPECULARMAP
                            }
                        },
                        glossiness: {
                            get: function() {
                                return t.glossiness.value
                            },
                            set: function(e) {
                                t.glossiness.value = e
                            }
                        },
                        glossinessMap: {
                            get: function() {
                                return t.glossinessMap.value
                            },
                            set: function(e) {
                                t.glossinessMap.value = e, e ? (this.defines.USE_GLOSSINESSMAP = "", this.defines.USE_UV = "") : (delete this.defines.USE_GLOSSINESSMAP, delete this.defines.USE_UV)
                            }
                        }
                    }), delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this.setValues(e)
                }
                copy(e) {
                    return super.copy(e), this.specularMap = e.specularMap, this.specular.copy(e.specular), this.glossinessMap = e.glossinessMap, this.glossiness = e.glossiness, delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this
                }
            }
            class S {
                constructor() {
                    this.name = a.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS, this.specularGlossinessParams = ["color", "map", "lightMap", "lightMapIntensity", "aoMap", "aoMapIntensity", "emissive", "emissiveIntensity", "emissiveMap", "bumpMap", "bumpScale", "normalMap", "normalMapType", "displacementMap", "displacementScale", "displacementBias", "specularMap", "specular", "glossinessMap", "glossiness", "alphaMap", "envMap", "envMapIntensity", "refractionRatio"]
                }
                getMaterialType() {
                    return M
                }
                extendParams(e, t, s) {
                    let n = t.extensions[this.name];
                    e.color = new r.Ilk(1, 1, 1), e.opacity = 1;
                    let i = [];
                    if (Array.isArray(n.diffuseFactor)) {
                        let a = n.diffuseFactor;
                        e.color.fromArray(a), e.opacity = a[3]
                    }
                    if (void 0 !== n.diffuseTexture && i.push(s.assignTexture(e, "map", n.diffuseTexture, r.knz)), e.emissive = new r.Ilk(0, 0, 0), e.glossiness = void 0 !== n.glossinessFactor ? n.glossinessFactor : 1, e.specular = new r.Ilk(1, 1, 1), Array.isArray(n.specularFactor) && e.specular.fromArray(n.specularFactor), void 0 !== n.specularGlossinessTexture) {
                        let o = n.specularGlossinessTexture;
                        i.push(s.assignTexture(e, "glossinessMap", o)), i.push(s.assignTexture(e, "specularMap", o, r.knz))
                    }
                    return Promise.all(i)
                }
                createMaterial(e) {
                    let t = new M(e);
                    return t.fog = !0, t.color = e.color, t.map = void 0 === e.map ? null : e.map, t.lightMap = null, t.lightMapIntensity = 1, t.aoMap = void 0 === e.aoMap ? null : e.aoMap, t.aoMapIntensity = 1, t.emissive = e.emissive, t.emissiveIntensity = void 0 === e.emissiveIntensity ? 1 : e.emissiveIntensity, t.emissiveMap = void 0 === e.emissiveMap ? null : e.emissiveMap, t.bumpMap = void 0 === e.bumpMap ? null : e.bumpMap, t.bumpScale = 1, t.normalMap = void 0 === e.normalMap ? null : e.normalMap, t.normalMapType = r.IOt, e.normalScale && (t.normalScale = e.normalScale), t.displacementMap = null, t.displacementScale = 1, t.displacementBias = 0, t.specularMap = void 0 === e.specularMap ? null : e.specularMap, t.specular = e.specular, t.glossinessMap = void 0 === e.glossinessMap ? null : e.glossinessMap, t.glossiness = e.glossiness, t.alphaMap = null, t.envMap = void 0 === e.envMap ? null : e.envMap, t.envMapIntensity = 1, t.refractionRatio = .98, t
                }
            }
            class b {
                constructor() {
                    this.name = a.KHR_MESH_QUANTIZATION
                }
            }
            class w extends r._C8 {
                constructor(e, t, s, r) {
                    super(e, t, s, r)
                }
                copySampleValue_(e) {
                    let t = this.resultBuffer,
                        s = this.sampleValues,
                        r = this.valueSize,
                        n = e * r * 3 + r;
                    for (let i = 0; i !== r; i++) t[i] = s[n + i];
                    return t
                }
                interpolate_(e, t, s, r) {
                    let n = this.resultBuffer,
                        i = this.sampleValues,
                        a = this.valueSize,
                        o = 2 * a,
                        l = 3 * a,
                        u = r - t,
                        c = (s - t) / u,
                        h = c * c,
                        d = h * c,
                        p = e * l,
                        f = p - l,
                        m = -2 * d + 3 * h,
                        g = d - h,
                        T = 1 - m,
                        x = g - h + c;
                    for (let R = 0; R !== a; R++) {
                        let _ = i[f + R + a],
                            v = i[f + R + o] * u,
                            y = i[p + R + a],
                            A = i[p + R] * u;
                        n[R] = T * _ + x * v + m * y + g * A
                    }
                    return n
                }
            }
            let L = new r._fP;
            class I extends w {
                interpolate_(e, t, s, r) {
                    let n = super.interpolate_(e, t, s, r);
                    return L.fromArray(n).normalize().toArray(n), n
                }
            }
            let P = {
                    FLOAT: 5126,
                    FLOAT_MAT3: 35675,
                    FLOAT_MAT4: 35676,
                    FLOAT_VEC2: 35664,
                    FLOAT_VEC3: 35665,
                    FLOAT_VEC4: 35666,
                    LINEAR: 9729,
                    REPEAT: 10497,
                    SAMPLER_2D: 35678,
                    POINTS: 0,
                    LINES: 1,
                    LINE_LOOP: 2,
                    LINE_STRIP: 3,
                    TRIANGLES: 4,
                    TRIANGLE_STRIP: 5,
                    TRIANGLE_FAN: 6,
                    UNSIGNED_BYTE: 5121,
                    UNSIGNED_SHORT: 5123
                },
                O = {
                    5120: Int8Array,
                    5121: Uint8Array,
                    5122: Int16Array,
                    5123: Uint16Array,
                    5125: Uint32Array,
                    5126: Float32Array
                },
                C = {
                    9728: r.TyD,
                    9729: r.wem,
                    9984: r.YLQ,
                    9985: r.qyh,
                    9986: r.aH4,
                    9987: r.D1R
                },
                N = {
                    33071: r.uWy,
                    33648: r.OoA,
                    10497: r.rpg
                },
                k = {
                    SCALAR: 1,
                    VEC2: 2,
                    VEC3: 3,
                    VEC4: 4,
                    MAT2: 4,
                    MAT3: 9,
                    MAT4: 16
                },
                H = {
                    POSITION: "position",
                    NORMAL: "normal",
                    TANGENT: "tangent",
                    TEXCOORD_0: "uv",
                    TEXCOORD_1: "uv2",
                    COLOR_0: "color",
                    WEIGHTS_0: "skinWeight",
                    JOINTS_0: "skinIndex"
                },
                U = {
                    scale: "scale",
                    translation: "position",
                    rotation: "quaternion",
                    weights: "morphTargetInfluences"
                },
                F = {
                    CUBICSPLINE: void 0,
                    LINEAR: r.NMF,
                    STEP: r.Syv
                },
                D = {
                    OPAQUE: "OPAQUE",
                    MASK: "MASK",
                    BLEND: "BLEND"
                };

            function G(e, t, s) {
                for (let r in s.extensions) void 0 === e[r] && (t.userData.gltfExtensions = t.userData.gltfExtensions || {}, t.userData.gltfExtensions[r] = s.extensions[r])
            }

            function j(e, t) {
                void 0 !== t.extras && ("object" == typeof t.extras ? Object.assign(e.userData, t.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras))
            }

            function B(e) {
                let t = "",
                    s = Object.keys(e).sort();
                for (let r = 0, n = s.length; r < n; r++) t += s[r] + ":" + e[s[r]] + ";";
                return t
            }

            function K(e) {
                switch (e) {
                    case Int8Array:
                        return 1 / 127;
                    case Uint8Array:
                        return 1 / 255;
                    case Int16Array:
                        return 1 / 32767;
                    case Uint16Array:
                        return 1 / 65535;
                    default:
                        throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")
                }
            }
            class V {
                constructor(e = {}, t = {}) {
                    var s, n;
                    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new i, this.associations = new Map, this.primitiveCache = {}, this.meshCache = {
                        refs: {},
                        uses: {}
                    }, this.cameraCache = {
                        refs: {},
                        uses: {}
                    }, this.lightCache = {
                        refs: {},
                        uses: {}
                    }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
                    let a = "undefined" != typeof navigator && !0 === /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                        o = "undefined" != typeof navigator && (null === (s = navigator.userAgent) || void 0 === s ? void 0 : s.indexOf("Firefox")) > -1,
                        l = "undefined" != typeof navigator && o ? null === (n = navigator.userAgent) || void 0 === n ? void 0 : n.match(/Firefox\/([0-9]+)\./)[1] : -1;
                    "undefined" == typeof createImageBitmap || a || o && l < 98 ? this.textureLoader = new r.dpR(this.options.manager) : this.textureLoader = new r.QRU(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new r.hH6(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), "use-credentials" === this.options.crossOrigin && this.fileLoader.setWithCredentials(!0)
                }
                setExtensions(e) {
                    this.extensions = e
                }
                setPlugins(e) {
                    this.plugins = e
                }
                parse(e, t) {
                    let s = this,
                        r = this.json,
                        n = this.extensions;
                    this.cache.removeAll(), this._invokeAll(function(e) {
                        return e._markDefs && e._markDefs()
                    }), Promise.all(this._invokeAll(function(e) {
                        return e.beforeRoot && e.beforeRoot()
                    })).then(function() {
                        return Promise.all([s.getDependencies("scene"), s.getDependencies("animation"), s.getDependencies("camera")])
                    }).then(function(t) {
                        let i = {
                            scene: t[0][r.scene || 0],
                            scenes: t[0],
                            animations: t[1],
                            cameras: t[2],
                            asset: r.asset,
                            parser: s,
                            userData: {}
                        };
                        G(n, i, r), j(i, r), Promise.all(s._invokeAll(function(e) {
                            return e.afterRoot && e.afterRoot(i)
                        })).then(function() {
                            e(i)
                        })
                    }).catch(t)
                }
                _markDefs() {
                    let e = this.json.nodes || [],
                        t = this.json.skins || [],
                        s = this.json.meshes || [];
                    for (let r = 0, n = t.length; r < n; r++) {
                        let i = t[r].joints;
                        for (let a = 0, o = i.length; a < o; a++) e[i[a]].isBone = !0
                    }
                    for (let l = 0, u = e.length; l < u; l++) {
                        let c = e[l];
                        void 0 !== c.mesh && (this._addNodeRef(this.meshCache, c.mesh), void 0 !== c.skin && (s[c.mesh].isSkinnedMesh = !0)), void 0 !== c.camera && this._addNodeRef(this.cameraCache, c.camera)
                    }
                }
                _addNodeRef(e, t) {
                    void 0 !== t && (void 0 === e.refs[t] && (e.refs[t] = e.uses[t] = 0), e.refs[t]++)
                }
                _getNodeRef(e, t, s) {
                    if (e.refs[t] <= 1) return s;
                    let r = s.clone(),
                        n = (e, t) => {
                            let s = this.associations.get(e);
                            for (let [r, i] of (null != s && this.associations.set(t, s), e.children.entries())) n(i, t.children[r])
                        };
                    return n(s, r), r.name += "_instance_" + e.uses[t]++, r
                }
                _invokeOne(e) {
                    let t = Object.values(this.plugins);
                    t.push(this);
                    for (let s = 0; s < t.length; s++) {
                        let r = e(t[s]);
                        if (r) return r
                    }
                    return null
                }
                _invokeAll(e) {
                    let t = Object.values(this.plugins);
                    t.unshift(this);
                    let s = [];
                    for (let r = 0; r < t.length; r++) {
                        let n = e(t[r]);
                        n && s.push(n)
                    }
                    return s
                }
                getDependency(e, t) {
                    let s = e + ":" + t,
                        r = this.cache.get(s);
                    if (!r) {
                        switch (e) {
                            case "scene":
                                r = this.loadScene(t);
                                break;
                            case "node":
                                r = this.loadNode(t);
                                break;
                            case "mesh":
                                r = this._invokeOne(function(e) {
                                    return e.loadMesh && e.loadMesh(t)
                                });
                                break;
                            case "accessor":
                                r = this.loadAccessor(t);
                                break;
                            case "bufferView":
                                r = this._invokeOne(function(e) {
                                    return e.loadBufferView && e.loadBufferView(t)
                                });
                                break;
                            case "buffer":
                                r = this.loadBuffer(t);
                                break;
                            case "material":
                                r = this._invokeOne(function(e) {
                                    return e.loadMaterial && e.loadMaterial(t)
                                });
                                break;
                            case "texture":
                                r = this._invokeOne(function(e) {
                                    return e.loadTexture && e.loadTexture(t)
                                });
                                break;
                            case "skin":
                                r = this.loadSkin(t);
                                break;
                            case "animation":
                                r = this._invokeOne(function(e) {
                                    return e.loadAnimation && e.loadAnimation(t)
                                });
                                break;
                            case "camera":
                                r = this.loadCamera(t);
                                break;
                            default:
                                throw Error("Unknown type: " + e)
                        }
                        this.cache.add(s, r)
                    }
                    return r
                }
                getDependencies(e) {
                    let t = this.cache.get(e);
                    if (!t) {
                        let s = this,
                            r = this.json[e + ("mesh" === e ? "es" : "s")] || [];
                        t = Promise.all(r.map(function(t, r) {
                            return s.getDependency(e, r)
                        })), this.cache.add(e, t)
                    }
                    return t
                }
                loadBuffer(e) {
                    let t = this.json.buffers[e],
                        s = this.fileLoader;
                    if (t.type && "arraybuffer" !== t.type) throw Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
                    if (void 0 === t.uri && 0 === e) return Promise.resolve(this.extensions[a.KHR_BINARY_GLTF].body);
                    let n = this.options;
                    return new Promise(function(e, i) {
                        s.load(r.Zp0.resolveURL(t.uri, n.path), e, void 0, function() {
                            i(Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'))
                        })
                    })
                }
                loadBufferView(e) {
                    let t = this.json.bufferViews[e];
                    return this.getDependency("buffer", t.buffer).then(function(e) {
                        let s = t.byteLength || 0,
                            r = t.byteOffset || 0;
                        return e.slice(r, r + s)
                    })
                }
                loadAccessor(e) {
                    let t = this,
                        s = this.json,
                        n = this.json.accessors[e];
                    if (void 0 === n.bufferView && void 0 === n.sparse) return Promise.resolve(null);
                    let i = [];
                    return void 0 !== n.bufferView ? i.push(this.getDependency("bufferView", n.bufferView)) : i.push(null), void 0 !== n.sparse && (i.push(this.getDependency("bufferView", n.sparse.indices.bufferView)), i.push(this.getDependency("bufferView", n.sparse.values.bufferView))), Promise.all(i).then(function(e) {
                        let i, a;
                        let o = e[0],
                            l = k[n.type],
                            u = O[n.componentType],
                            c = u.BYTES_PER_ELEMENT,
                            h = n.byteOffset || 0,
                            d = void 0 !== n.bufferView ? s.bufferViews[n.bufferView].byteStride : void 0,
                            p = !0 === n.normalized;
                        if (d && d !== c * l) {
                            let f = Math.floor(h / d),
                                m = "InterleavedBuffer:" + n.bufferView + ":" + n.componentType + ":" + f + ":" + n.count,
                                g = t.cache.get(m);
                            g || (i = new u(o, f * d, n.count * d / c), g = new r.vpT(i, d / c), t.cache.add(m, g)), a = new r.kB5(g, l, h % d / c, p)
                        } else i = null === o ? new u(n.count * l) : new u(o, h, n.count * l), a = new r.TlE(i, l, p);
                        if (void 0 !== n.sparse) {
                            let T = k.SCALAR,
                                x = O[n.sparse.indices.componentType],
                                R = n.sparse.indices.byteOffset || 0,
                                _ = n.sparse.values.byteOffset || 0,
                                v = new x(e[1], R, n.sparse.count * T),
                                y = new u(e[2], _, n.sparse.count * l);
                            null !== o && (a = new r.TlE(a.array.slice(), a.itemSize, a.normalized));
                            for (let A = 0, E = v.length; A < E; A++) {
                                let M = v[A];
                                if (a.setX(M, y[A * l]), l >= 2 && a.setY(M, y[A * l + 1]), l >= 3 && a.setZ(M, y[A * l + 2]), l >= 4 && a.setW(M, y[A * l + 3]), l >= 5) throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")
                            }
                        }
                        return a
                    })
                }
                loadTexture(e) {
                    let t = this.json,
                        s = this.options,
                        r = t.textures[e],
                        n = r.source,
                        i = t.images[n],
                        a = this.textureLoader;
                    if (i.uri) {
                        let o = s.manager.getHandler(i.uri);
                        null !== o && (a = o)
                    }
                    return this.loadTextureImage(e, n, a)
                }
                loadTextureImage(e, t, s) {
                    let n = this,
                        i = this.json,
                        a = i.textures[e],
                        o = i.images[t],
                        l = (o.uri || o.bufferView) + ":" + a.sampler;
                    if (this.textureCache[l]) return this.textureCache[l];
                    let u = this.loadImageSource(t, s).then(function(t) {
                        t.flipY = !1, a.name && (t.name = a.name);
                        let s = i.samplers || {},
                            o = s[a.sampler] || {};
                        return t.magFilter = C[o.magFilter] || r.wem, t.minFilter = C[o.minFilter] || r.D1R, t.wrapS = N[o.wrapS] || r.rpg, t.wrapT = N[o.wrapT] || r.rpg, n.associations.set(t, {
                            textures: e
                        }), t
                    }).catch(function() {
                        return null
                    });
                    return this.textureCache[l] = u, u
                }
                loadImageSource(e, t) {
                    let s = this.json,
                        n = this.options;
                    if (void 0 !== this.sourceCache[e]) return this.sourceCache[e].then(e => e.clone());
                    let i = s.images[e],
                        a = self.URL || self.webkitURL,
                        o = i.uri || "",
                        l = !1;
                    if (void 0 !== i.bufferView) o = this.getDependency("bufferView", i.bufferView).then(function(e) {
                        l = !0;
                        let t = new Blob([e], {
                            type: i.mimeType
                        });
                        return o = a.createObjectURL(t)
                    });
                    else if (void 0 === i.uri) throw Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
                    let u = Promise.resolve(o).then(function(e) {
                        return new Promise(function(s, i) {
                            let a = s;
                            !0 === t.isImageBitmapLoader && (a = function(e) {
                                let t = new r.xEZ(e);
                                t.needsUpdate = !0, s(t)
                            }), t.load(r.Zp0.resolveURL(e, n.path), a, void 0, i)
                        })
                    }).then(function(e) {
                        var t;
                        return !0 === l && a.revokeObjectURL(o), e.userData.mimeType = i.mimeType || ((t = i.uri).search(/\.jpe?g($|\?)/i) > 0 || 0 === t.search(/^data\:image\/jpeg/) ? "image/jpeg" : t.search(/\.webp($|\?)/i) > 0 || 0 === t.search(/^data\:image\/webp/) ? "image/webp" : "image/png"), e
                    }).catch(function(e) {
                        throw console.error("THREE.GLTFLoader: Couldn't load texture", o), e
                    });
                    return this.sourceCache[e] = u, u
                }
                assignTexture(e, t, s, r) {
                    let n = this;
                    return this.getDependency("texture", s.index).then(function(i) {
                        if (void 0 === s.texCoord || 0 == s.texCoord || "aoMap" === t && 1 == s.texCoord || console.warn("THREE.GLTFLoader: Custom UV set " + s.texCoord + " for texture " + t + " not yet supported."), n.extensions[a.KHR_TEXTURE_TRANSFORM]) {
                            let o = void 0 !== s.extensions ? s.extensions[a.KHR_TEXTURE_TRANSFORM] : void 0;
                            if (o) {
                                let l = n.associations.get(i);
                                i = n.extensions[a.KHR_TEXTURE_TRANSFORM].extendTexture(i, o), n.associations.set(i, l)
                            }
                        }
                        return void 0 !== r && (i.encoding = r), e[t] = i, i
                    })
                }
                assignFinalMaterial(e) {
                    let t = e.geometry,
                        s = e.material,
                        n = void 0 === t.attributes.tangent,
                        i = void 0 !== t.attributes.color,
                        a = void 0 === t.attributes.normal;
                    if (e.isPoints) {
                        let o = "PointsMaterial:" + s.uuid,
                            l = this.cache.get(o);
                        l || (l = new r.UY4, r.F5T.prototype.copy.call(l, s), l.color.copy(s.color), l.map = s.map, l.sizeAttenuation = !1, this.cache.add(o, l)), s = l
                    } else if (e.isLine) {
                        let u = "LineBasicMaterial:" + s.uuid,
                            c = this.cache.get(u);
                        c || (c = new r.nls, r.F5T.prototype.copy.call(c, s), c.color.copy(s.color), this.cache.add(u, c)), s = c
                    }
                    if (n || i || a) {
                        let h = "ClonedMaterial:" + s.uuid + ":";
                        s.isGLTFSpecularGlossinessMaterial && (h += "specular-glossiness:"), n && (h += "derivative-tangents:"), i && (h += "vertex-colors:"), a && (h += "flat-shading:");
                        let d = this.cache.get(h);
                        d || (d = s.clone(), i && (d.vertexColors = !0), a && (d.flatShading = !0), n && (d.normalScale && (d.normalScale.y *= -1), d.clearcoatNormalScale && (d.clearcoatNormalScale.y *= -1)), this.cache.add(h, d), this.associations.set(d, this.associations.get(s))), s = d
                    }
                    s.aoMap && void 0 === t.attributes.uv2 && void 0 !== t.attributes.uv && t.setAttribute("uv2", t.attributes.uv), e.material = s
                }
                getMaterialType() {
                    return r.Wid
                }
                loadMaterial(e) {
                    let t;
                    let s = this,
                        n = this.json,
                        i = this.extensions,
                        o = n.materials[e],
                        l = {},
                        u = o.extensions || {},
                        c = [];
                    if (u[a.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
                        let h = i[a.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
                        t = h.getMaterialType(), c.push(h.extendParams(l, o, s))
                    } else if (u[a.KHR_MATERIALS_UNLIT]) {
                        let d = i[a.KHR_MATERIALS_UNLIT];
                        t = d.getMaterialType(), c.push(d.extendParams(l, o, s))
                    } else {
                        let p = o.pbrMetallicRoughness || {};
                        if (l.color = new r.Ilk(1, 1, 1), l.opacity = 1, Array.isArray(p.baseColorFactor)) {
                            let f = p.baseColorFactor;
                            l.color.fromArray(f), l.opacity = f[3]
                        }
                        void 0 !== p.baseColorTexture && c.push(s.assignTexture(l, "map", p.baseColorTexture, r.knz)), l.metalness = void 0 !== p.metallicFactor ? p.metallicFactor : 1, l.roughness = void 0 !== p.roughnessFactor ? p.roughnessFactor : 1, void 0 !== p.metallicRoughnessTexture && (c.push(s.assignTexture(l, "metalnessMap", p.metallicRoughnessTexture)), c.push(s.assignTexture(l, "roughnessMap", p.metallicRoughnessTexture))), t = this._invokeOne(function(t) {
                            return t.getMaterialType && t.getMaterialType(e)
                        }), c.push(Promise.all(this._invokeAll(function(t) {
                            return t.extendMaterialParams && t.extendMaterialParams(e, l)
                        })))
                    }!0 === o.doubleSided && (l.side = r.ehD);
                    let m = o.alphaMode || D.OPAQUE;
                    if (m === D.BLEND ? (l.transparent = !0, l.depthWrite = !1) : (l.transparent = !1, m === D.MASK && (l.alphaTest = void 0 !== o.alphaCutoff ? o.alphaCutoff : .5)), void 0 !== o.normalTexture && t !== r.vBJ && (c.push(s.assignTexture(l, "normalMap", o.normalTexture)), l.normalScale = new r.FM8(1, 1), void 0 !== o.normalTexture.scale)) {
                        let g = o.normalTexture.scale;
                        l.normalScale.set(g, g)
                    }
                    return void 0 !== o.occlusionTexture && t !== r.vBJ && (c.push(s.assignTexture(l, "aoMap", o.occlusionTexture)), void 0 !== o.occlusionTexture.strength && (l.aoMapIntensity = o.occlusionTexture.strength)), void 0 !== o.emissiveFactor && t !== r.vBJ && (l.emissive = new r.Ilk().fromArray(o.emissiveFactor)), void 0 !== o.emissiveTexture && t !== r.vBJ && c.push(s.assignTexture(l, "emissiveMap", o.emissiveTexture, r.knz)), Promise.all(c).then(function() {
                        let r;
                        return r = t === M ? i[a.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(l) : new t(l), o.name && (r.name = o.name), j(r, o), s.associations.set(r, {
                            materials: e
                        }), o.extensions && G(i, r, o), r
                    })
                }
                createUniqueName(e) {
                    let t = r.iUV.sanitizeNodeName(e || ""),
                        s = t;
                    for (let n = 1; this.nodeNamesUsed[s]; ++n) s = t + "_" + n;
                    return this.nodeNamesUsed[s] = !0, s
                }
                loadGeometries(e) {
                    let t = this,
                        s = this.extensions,
                        n = this.primitiveCache,
                        i = [];
                    for (let o = 0, l = e.length; o < l; o++) {
                        let u = e[o],
                            c = function(e) {
                                let t = e.extensions && e.extensions[a.KHR_DRACO_MESH_COMPRESSION];
                                return t ? "draco:" + t.bufferView + ":" + t.indices + ":" + B(t.attributes) : e.indices + ":" + B(e.attributes) + ":" + e.mode
                            }(u),
                            h = n[c];
                        if (h) i.push(h.promise);
                        else {
                            let d;
                            d = u.extensions && u.extensions[a.KHR_DRACO_MESH_COMPRESSION] ? function(e) {
                                return s[a.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e, t).then(function(s) {
                                    return z(s, e, t)
                                })
                            }(u) : z(new r.u9r, u, t), n[c] = {
                                primitive: u,
                                promise: d
                            }, i.push(d)
                        }
                    }
                    return Promise.all(i)
                }
                loadMesh(e) {
                    let t = this,
                        s = this.json,
                        n = this.extensions,
                        i = s.meshes[e],
                        a = i.primitives,
                        o = [];
                    for (let l = 0, u = a.length; l < u; l++) {
                        var c;
                        let h = void 0 === a[l].material ? (void 0 === (c = this.cache).DefaultMaterial && (c.DefaultMaterial = new r.Wid({
                            color: 16777215,
                            emissive: 0,
                            metalness: 1,
                            roughness: 1,
                            transparent: !1,
                            depthTest: !0,
                            side: r.Wl3
                        })), c.DefaultMaterial) : this.getDependency("material", a[l].material);
                        o.push(h)
                    }
                    return o.push(t.loadGeometries(a)), Promise.all(o).then(function(s) {
                        let o = s.slice(0, s.length - 1),
                            l = s[s.length - 1],
                            u = [];
                        for (let c = 0, h = l.length; c < h; c++) {
                            let d;
                            let p = l[c],
                                f = a[c],
                                m = o[c];
                            if (f.mode === P.TRIANGLES || f.mode === P.TRIANGLE_STRIP || f.mode === P.TRIANGLE_FAN || void 0 === f.mode) !0 !== (d = !0 === i.isSkinnedMesh ? new r.TUv(p, m) : new r.Kj0(p, m)).isSkinnedMesh || d.geometry.attributes.skinWeight.normalized || d.normalizeSkinWeights(), f.mode === P.TRIANGLE_STRIP ? d.geometry = X(d.geometry, r.UlW) : f.mode === P.TRIANGLE_FAN && (d.geometry = X(d.geometry, r.z$h));
                            else if (f.mode === P.LINES) d = new r.ejS(p, m);
                            else if (f.mode === P.LINE_STRIP) d = new r.x12(p, m);
                            else if (f.mode === P.LINE_LOOP) d = new r.blk(p, m);
                            else if (f.mode === P.POINTS) d = new r.woe(p, m);
                            else throw Error("THREE.GLTFLoader: Primitive mode unsupported: " + f.mode);
                            Object.keys(d.geometry.morphAttributes).length > 0 && function(e, t) {
                                if (e.updateMorphTargets(), void 0 !== t.weights)
                                    for (let s = 0, r = t.weights.length; s < r; s++) e.morphTargetInfluences[s] = t.weights[s];
                                if (t.extras && Array.isArray(t.extras.targetNames)) {
                                    let n = t.extras.targetNames;
                                    if (e.morphTargetInfluences.length === n.length) {
                                        e.morphTargetDictionary = {};
                                        for (let i = 0, a = n.length; i < a; i++) e.morphTargetDictionary[n[i]] = i
                                    } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")
                                }
                            }(d, i), d.name = t.createUniqueName(i.name || "mesh_" + e), j(d, i), f.extensions && G(n, d, f), t.assignFinalMaterial(d), u.push(d)
                        }
                        for (let g = 0, T = u.length; g < T; g++) t.associations.set(u[g], {
                            meshes: e,
                            primitives: g
                        });
                        if (1 === u.length) return u[0];
                        let x = new r.ZAu;
                        t.associations.set(x, {
                            meshes: e
                        });
                        for (let R = 0, _ = u.length; R < _; R++) x.add(u[R]);
                        return x
                    })
                }
                loadCamera(e) {
                    let t;
                    let s = this.json.cameras[e],
                        n = s[s.type];
                    if (!n) {
                        console.warn("THREE.GLTFLoader: Missing camera parameters.");
                        return
                    }
                    return "perspective" === s.type ? t = new r.cPb(r.M8C.radToDeg(n.yfov), n.aspectRatio || 1, n.znear || 1, n.zfar || 2e6) : "orthographic" === s.type && (t = new r.iKG(-n.xmag, n.xmag, n.ymag, -n.ymag, n.znear, n.zfar)), s.name && (t.name = this.createUniqueName(s.name)), j(t, s), Promise.resolve(t)
                }
                loadSkin(e) {
                    let t = this.json.skins[e],
                        s = {
                            joints: t.joints
                        };
                    return void 0 === t.inverseBindMatrices ? Promise.resolve(s) : this.getDependency("accessor", t.inverseBindMatrices).then(function(e) {
                        return s.inverseBindMatrices = e, s
                    })
                }
                loadAnimation(e) {
                    let t = this.json,
                        s = t.animations[e],
                        n = [],
                        i = [],
                        a = [],
                        o = [],
                        l = [];
                    for (let u = 0, c = s.channels.length; u < c; u++) {
                        let h = s.channels[u],
                            d = s.samplers[h.sampler],
                            p = h.target,
                            f = p.node,
                            m = void 0 !== s.parameters ? s.parameters[d.input] : d.input,
                            g = void 0 !== s.parameters ? s.parameters[d.output] : d.output;
                        n.push(this.getDependency("node", f)), i.push(this.getDependency("accessor", m)), a.push(this.getDependency("accessor", g)), o.push(d), l.push(p)
                    }
                    return Promise.all([Promise.all(n), Promise.all(i), Promise.all(a), Promise.all(o), Promise.all(l)]).then(function(t) {
                        let n = t[0],
                            i = t[1],
                            a = t[2],
                            o = t[3],
                            l = t[4],
                            u = [];
                        for (let c = 0, h = n.length; c < h; c++) {
                            let d;
                            let p = n[c],
                                f = i[c],
                                m = a[c],
                                g = o[c],
                                T = l[c];
                            if (void 0 === p) continue;
                            switch (p.updateMatrix(), U[T.path]) {
                                case U.weights:
                                    d = r.dUE;
                                    break;
                                case U.rotation:
                                    d = r.iLg;
                                    break;
                                case U.position:
                                case U.scale:
                                default:
                                    d = r.yC1
                            }
                            let x = p.name ? p.name : p.uuid,
                                R = void 0 !== g.interpolation ? F[g.interpolation] : r.NMF,
                                _ = [];
                            U[T.path] === U.weights ? p.traverse(function(e) {
                                e.morphTargetInfluences && _.push(e.name ? e.name : e.uuid)
                            }) : _.push(x);
                            let v = m.array;
                            if (m.normalized) {
                                let y = K(v.constructor),
                                    A = new Float32Array(v.length);
                                for (let E = 0, M = v.length; E < M; E++) A[E] = v[E] * y;
                                v = A
                            }
                            for (let S = 0, b = _.length; S < b; S++) {
                                let L = new d(_[S] + "." + U[T.path], f.array, v, R);
                                "CUBICSPLINE" === g.interpolation && (L.createInterpolant = function(e) {
                                    let t = this instanceof r.iLg ? I : w;
                                    return new t(this.times, this.values, this.getValueSize() / 3, e)
                                }, L.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), u.push(L)
                            }
                        }
                        let P = s.name ? s.name : "animation_" + e;
                        return new r.m7l(P, void 0, u)
                    })
                }
                createNodeMesh(e) {
                    let t = this.json,
                        s = this,
                        r = t.nodes[e];
                    return void 0 === r.mesh ? null : s.getDependency("mesh", r.mesh).then(function(e) {
                        let t = s._getNodeRef(s.meshCache, r.mesh, e);
                        return void 0 !== r.weights && t.traverse(function(e) {
                            if (e.isMesh)
                                for (let t = 0, s = r.weights.length; t < s; t++) e.morphTargetInfluences[t] = r.weights[t]
                        }), t
                    })
                }
                loadNode(e) {
                    let t = this.json,
                        s = this.extensions,
                        n = this,
                        i = t.nodes[e],
                        a = i.name ? n.createUniqueName(i.name) : "";
                    return (function() {
                        let t = [],
                            s = n._invokeOne(function(t) {
                                return t.createNodeMesh && t.createNodeMesh(e)
                            });
                        return s && t.push(s), void 0 !== i.camera && t.push(n.getDependency("camera", i.camera).then(function(e) {
                            return n._getNodeRef(n.cameraCache, i.camera, e)
                        })), n._invokeAll(function(t) {
                            return t.createNodeAttachment && t.createNodeAttachment(e)
                        }).forEach(function(e) {
                            t.push(e)
                        }), Promise.all(t)
                    })().then(function(t) {
                        let o;
                        if ((o = !0 === i.isBone ? new r.N$j : t.length > 1 ? new r.ZAu : 1 === t.length ? t[0] : new r.Tme) !== t[0])
                            for (let l = 0, u = t.length; l < u; l++) o.add(t[l]);
                        if (i.name && (o.userData.name = i.name, o.name = a), j(o, i), i.extensions && G(s, o, i), void 0 !== i.matrix) {
                            let c = new r.yGw;
                            c.fromArray(i.matrix), o.applyMatrix4(c)
                        } else void 0 !== i.translation && o.position.fromArray(i.translation), void 0 !== i.rotation && o.quaternion.fromArray(i.rotation), void 0 !== i.scale && o.scale.fromArray(i.scale);
                        return n.associations.has(o) || n.associations.set(o, {}), n.associations.get(o).nodes = e, o
                    })
                }
                loadScene(e) {
                    let t = this.json,
                        s = this.extensions,
                        n = this.json.scenes[e],
                        i = this,
                        a = new r.ZAu;
                    n.name && (a.name = i.createUniqueName(n.name)), j(a, n), n.extensions && G(s, a, n);
                    let o = n.nodes || [],
                        l = [];
                    for (let u = 0, c = o.length; u < c; u++) l.push(function e(t, s, n, i) {
                        let a = n.nodes[t];
                        return i.getDependency("node", t).then(function(e) {
                            let t;
                            return void 0 === a.skin ? e : i.getDependency("skin", a.skin).then(function(e) {
                                t = e;
                                let s = [];
                                for (let r = 0, n = t.joints.length; r < n; r++) s.push(i.getDependency("node", t.joints[r]));
                                return Promise.all(s)
                            }).then(function(s) {
                                return e.traverse(function(e) {
                                    if (!e.isMesh) return;
                                    let n = [],
                                        i = [];
                                    for (let a = 0, o = s.length; a < o; a++) {
                                        let l = s[a];
                                        if (l) {
                                            n.push(l);
                                            let u = new r.yGw;
                                            void 0 !== t.inverseBindMatrices && u.fromArray(t.inverseBindMatrices.array, 16 * a), i.push(u)
                                        } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[a])
                                    }
                                    e.bind(new r.OdW(n, i), e.matrixWorld)
                                }), e
                            })
                        }).then(function(t) {
                            s.add(t);
                            let r = [];
                            if (a.children) {
                                let o = a.children;
                                for (let l = 0, u = o.length; l < u; l++) {
                                    let c = o[l];
                                    r.push(e(c, t, n, i))
                                }
                            }
                            return Promise.all(r)
                        })
                    }(o[u], a, t, i));
                    return Promise.all(l).then(function() {
                        return i.associations = (e => {
                            let t = new Map;
                            for (let [s, n] of i.associations)(s instanceof r.F5T || s instanceof r.xEZ) && t.set(s, n);
                            return e.traverse(e => {
                                let s = i.associations.get(e);
                                null != s && t.set(e, s)
                            }), t
                        })(a), a
                    })
                }
            }

            function z(e, t, s) {
                let n = t.attributes,
                    i = [];
                for (let a in n) {
                    let o = H[a] || a.toLowerCase();
                    o in e.attributes || i.push(function(t, r) {
                        return s.getDependency("accessor", t).then(function(t) {
                            e.setAttribute(r, t)
                        })
                    }(n[a], o))
                }
                if (void 0 !== t.indices && !e.index) {
                    let l = s.getDependency("accessor", t.indices).then(function(t) {
                        e.setIndex(t)
                    });
                    i.push(l)
                }
                return j(e, t), ! function(e, t, s) {
                    let n = t.attributes,
                        i = new r.ZzF;
                    if (void 0 === n.POSITION) return; {
                        let a = s.json.accessors[n.POSITION],
                            o = a.min,
                            l = a.max;
                        if (void 0 !== o && void 0 !== l) {
                            if (i.set(new r.Pa4(o[0], o[1], o[2]), new r.Pa4(l[0], l[1], l[2])), a.normalized) {
                                let u = K(O[a.componentType]);
                                i.min.multiplyScalar(u), i.max.multiplyScalar(u)
                            }
                        } else {
                            console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
                            return
                        }
                    }
                    let c = t.targets;
                    if (void 0 !== c) {
                        let h = new r.Pa4,
                            d = new r.Pa4;
                        for (let p = 0, f = c.length; p < f; p++) {
                            let m = c[p];
                            if (void 0 !== m.POSITION) {
                                let g = s.json.accessors[m.POSITION],
                                    T = g.min,
                                    x = g.max;
                                if (void 0 !== T && void 0 !== x) {
                                    if (d.setX(Math.max(Math.abs(T[0]), Math.abs(x[0]))), d.setY(Math.max(Math.abs(T[1]), Math.abs(x[1]))), d.setZ(Math.max(Math.abs(T[2]), Math.abs(x[2]))), g.normalized) {
                                        let R = K(O[g.componentType]);
                                        d.multiplyScalar(R)
                                    }
                                    h.max(d)
                                } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")
                            }
                        }
                        i.expandByVector(h)
                    }
                    e.boundingBox = i;
                    let _ = new r.aLr;
                    i.getCenter(_.center), _.radius = i.min.distanceTo(i.max) / 2, e.boundingSphere = _
                }(e, t, s), Promise.all(i).then(function() {
                    return void 0 !== t.targets ? function(e, t, s) {
                        let r = !1,
                            n = !1,
                            i = !1;
                        for (let a = 0, o = t.length; a < o; a++) {
                            let l = t[a];
                            if (void 0 !== l.POSITION && (r = !0), void 0 !== l.NORMAL && (n = !0), void 0 !== l.COLOR_0 && (i = !0), r && n && i) break
                        }
                        if (!r && !n && !i) return Promise.resolve(e);
                        let u = [],
                            c = [],
                            h = [];
                        for (let d = 0, p = t.length; d < p; d++) {
                            let f = t[d];
                            if (r) {
                                let m = void 0 !== f.POSITION ? s.getDependency("accessor", f.POSITION) : e.attributes.position;
                                u.push(m)
                            }
                            if (n) {
                                let g = void 0 !== f.NORMAL ? s.getDependency("accessor", f.NORMAL) : e.attributes.normal;
                                c.push(g)
                            }
                            if (i) {
                                let T = void 0 !== f.COLOR_0 ? s.getDependency("accessor", f.COLOR_0) : e.attributes.color;
                                h.push(T)
                            }
                        }
                        return Promise.all([Promise.all(u), Promise.all(c), Promise.all(h)]).then(function(t) {
                            let s = t[0],
                                a = t[1],
                                o = t[2];
                            return r && (e.morphAttributes.position = s), n && (e.morphAttributes.normal = a), i && (e.morphAttributes.color = o), e.morphTargetsRelative = !0, e
                        })
                    }(e, t.targets, s) : e
                })
            }

            function X(e, t) {
                let s = e.getIndex();
                if (null === s) {
                    let n = [],
                        i = e.getAttribute("position");
                    if (void 0 === i) return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), e;
                    for (let a = 0; a < i.count; a++) n.push(a);
                    e.setIndex(n), s = e.getIndex()
                }
                let o = s.count - 2,
                    l = [];
                if (t === r.z$h)
                    for (let u = 1; u <= o; u++) l.push(s.getX(0)), l.push(s.getX(u)), l.push(s.getX(u + 1));
                else
                    for (let c = 0; c < o; c++) c % 2 == 0 ? (l.push(s.getX(c)), l.push(s.getX(c + 1)), l.push(s.getX(c + 2))) : (l.push(s.getX(c + 2)), l.push(s.getX(c + 1)), l.push(s.getX(c)));
                l.length / 3 !== o && console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
                let h = e.clone();
                return h.setIndex(l), h
            }
        }
    }
]);