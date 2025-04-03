var Ko = Object.defineProperty;
var Vo = (e, o, s) => o in e ? Ko(e, o, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : e[o] = s;
var Yt = (e, o, s) => Vo(e, typeof o != "symbol" ? o + "" : o, s);
(function() {
    const o = document.createElement("link").relList;
    if (o && o.supports && o.supports("modulepreload")) return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]')) l(a);
    new MutationObserver(a => {
        for (const r of a)
            if (r.type === "childList")
                for (const u of r.addedNodes) u.tagName === "LINK" && u.rel === "modulepreload" && l(u)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function s(a) {
        const r = {};
        return a.integrity && (r.integrity = a.integrity), a.referrerPolicy && (r.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? r.credentials = "include" : a.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r
    }

    function l(a) {
        if (a.ep) return;
        a.ep = !0;
        const r = s(a);
        fetch(a.href, r)
    }
})();

function ze() {}

function Ro(e) {
    return e()
}

function Ho() {
    return Object.create(null)
}

function ke(e) {
    e.forEach(Ro)
}

function qo(e) {
    return typeof e == "function"
}

function Wo(e, o) {
    return e != e ? o == o : e !== o || e && typeof e == "object" || typeof e == "function"
}
let Tt;

function ce(e, o) {
    return e === o ? !0 : (Tt || (Tt = document.createElement("a")), Tt.href = o, e === Tt.href)
}

function Jo(e) {
    return Object.keys(e).length === 0
}

function To(e) {
    return e ?? ""
}

function i(e, o) {
    e.appendChild(o)
}

function Nt(e, o, s) {
    e.insertBefore(o, s || null)
}

function Je(e) {
    e.parentNode && e.parentNode.removeChild(e)
}

function c(e) {
    return document.createElement(e)
}

function oe(e) {
    return document.createTextNode(e)
}

function P() {
    return oe(" ")
}

function re(e, o, s, l) {
    return e.addEventListener(o, s, l), () => e.removeEventListener(o, s, l)
}

function n(e, o, s) {
    s == null ? e.removeAttribute(o) : e.getAttribute(o) !== s && e.setAttribute(o, s)
}

function Zo(e) {
    return Array.from(e.childNodes)
}

function Qo(e, o) {
    o = "" + o, e.data !== o && (e.data = o)
}

function Ft(e, o, s, l) {
    s == null ? e.style.removeProperty(o) : e.style.setProperty(o, s, "")
}

function en(e, o, {
    bubbles: s = !1,
    cancelable: l = !1
} = {}) {
    return new CustomEvent(e, {
        detail: o,
        bubbles: s,
        cancelable: l
    })
}
let Ve;

function Ge(e) {
    Ve = e
}

function It() {
    if (!Ve) throw new Error("Function called outside component initialization");
    return Ve
}

function xe(e) {
    It().$$.on_mount.push(e)
}

function tn(e) {
    It().$$.after_update.push(e)
}

function on(e) {
    It().$$.on_destroy.push(e)
}

function nn() {
    const e = It();
    return (o, s, {
        cancelable: l = !1
    } = {}) => {
        const a = e.$$.callbacks[o];
        if (a) {
            const r = en(o, s, {
                cancelable: l
            });
            return a.slice().forEach(u => {
                u.call(e, r)
            }), !r.defaultPrevented
        }
        return !0
    }
}
const De = [],
    xt = [];
let Ne = [];
const Ao = [],
    an = Promise.resolve();
let Gt = !1;

function sn() {
    Gt || (Gt = !0, an.then(Yo))
}

function Kt(e) {
    Ne.push(e)
}
const Xt = new Set;
let Ae = 0;

function Yo() {
    if (Ae !== 0) return;
    const e = Ve;
    do {
        try {
            for (; Ae < De.length;) {
                const o = De[Ae];
                Ae++, Ge(o), rn(o.$$)
            }
        } catch (o) {
            throw De.length = 0, Ae = 0, o
        }
        for (Ge(null), De.length = 0, Ae = 0; xt.length;) xt.pop()();
        for (let o = 0; o < Ne.length; o += 1) {
            const s = Ne[o];
            Xt.has(s) || (Xt.add(s), s())
        }
        Ne.length = 0
    } while (De.length);
    for (; Ao.length;) Ao.pop()();
    Gt = !1, Xt.clear(), Ge(e)
}

function rn(e) {
    if (e.fragment !== null) {
        e.update(), ke(e.before_update);
        const o = e.dirty;
        e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, o), e.after_update.forEach(Kt)
    }
}

function ln(e) {
    const o = [],
        s = [];
    Ne.forEach(l => e.indexOf(l) === -1 ? o.push(l) : s.push(l)), s.forEach(l => l()), Ne = o
}
const Dt = new Set;
let $e;

function cn() {
    $e = {
        r: 0,
        c: [],
        p: $e
    }
}

function un() {
    $e.r || ke($e.c), $e = $e.p
}

function Ke(e, o) {
    e && e.i && (Dt.delete(e), e.i(o))
}

function Vt(e, o, s, l) {
    if (e && e.o) {
        if (Dt.has(e)) return;
        Dt.add(e), $e.c.push(() => {
            Dt.delete(e), l && (s && e.d(1), l())
        }), e.o(o)
    } else l && l()
}

function dn(e) {
    e && e.c()
}

function Fo(e, o, s) {
    const {
        fragment: l,
        after_update: a
    } = e.$$;
    l && l.m(o, s), Kt(() => {
        const r = e.$$.on_mount.map(Ro).filter(qo);
        e.$$.on_destroy ? e.$$.on_destroy.push(...r) : ke(r), e.$$.on_mount = []
    }), a.forEach(Kt)
}

function Xo(e, o) {
    const s = e.$$;
    s.fragment !== null && (ln(s.after_update), ke(s.on_destroy), s.fragment && s.fragment.d(o), s.on_destroy = s.fragment = null, s.ctx = [])
}

function fn(e, o) {
    e.$$.dirty[0] === -1 && (De.push(e), sn(), e.$$.dirty.fill(0)), e.$$.dirty[o / 31 | 0] |= 1 << o % 31
}

function Uo(e, o, s, l, a, r, u = null, v = [-1]) {
    const B = Ve;
    Ge(e);
    const f = e.$$ = {
        fragment: null,
        ctx: [],
        props: r,
        update: ze,
        not_equal: a,
        bound: Ho(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(o.context || (B ? B.$$.context : [])),
        callbacks: Ho(),
        dirty: v,
        skip_bound: !1,
        root: o.target || B.$$.root
    };
    u && u(f.root);
    let t = !1;
    if (f.ctx = s ? s(e, o.props || {}, (d, w, ...y) => {
            const k = y.length ? y[0] : w;
            return f.ctx && a(f.ctx[d], f.ctx[d] = k) && (!f.skip_bound && f.bound[d] && f.bound[d](k), t && fn(e, d)), w
        }) : [], f.update(), t = !0, ke(f.before_update), f.fragment = l ? l(f.ctx) : !1, o.target) {
        if (o.hydrate) {
            const d = Zo(o.target);
            f.fragment && f.fragment.l(d), d.forEach(Je)
        } else f.fragment && f.fragment.c();
        o.intro && Ke(e.$$.fragment), Fo(e, o.target, o.anchor), Yo()
    }
    Ge(B)
}
class xo {
    constructor() {
        Yt(this, "$$");
        Yt(this, "$$set")
    }
    $destroy() {
        Xo(this, 1), this.$destroy = ze
    }
    $on(o, s) {
        if (!qo(s)) return ze;
        const l = this.$$.callbacks[o] || (this.$$.callbacks[o] = []);
        return l.push(s), () => {
            const a = l.indexOf(s);
            a !== -1 && l.splice(a, 1)
        }
    }
    $set(o) {
        this.$$set && !Jo(o) && (this.$$.skip_bound = !0, this.$$set(o), this.$$.skip_bound = !1)
    }
}
const mn = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = {
    v: new Set
})).v.add(mn);

function Do(e) {
    let o, s;
    return {
        c() {
            o = c("img"), ce(o.src, s = "/placeholder-3.png") || n(o, "src", s), n(o, "alt", "Placeholder"), n(o, "class", "placeholder-image zoom-in svelte-1gzu27j"), n(o, "style", "opacity: 0; transform: scale(0.9); animation-delay: 0.4s; animation-duration: 0.5s;")
        },
        m(l, a) {
            Nt(l, o, a)
        },
        d(l) {
            l && Je(o)
        }
    }
}

function No(e) {
    let o, s, l, a, r, u;
    return {
        c() {
            o = c("div"), s = c("button"), s.textContent = "−", l = P(), a = c("button"), a.textContent = "+", n(s, "class", "resize-btn svelte-1gzu27j"), n(a, "class", "resize-btn svelte-1gzu27j"), n(o, "class", "resize-buttons svelte-1gzu27j")
        },
        m(v, B) {
            Nt(v, o, B), i(o, s), i(o, l), i(o, a), r || (u = [re(s, "click", e[4]), re(a, "click", e[3])], r = !0)
        },
        p: ze,
        d(v) {
            v && Je(o), r = !1, ke(u)
        }
    }
}

function hn(e) {
    let o, s, l, a, r, u, v, B, f, t, d, w, y, k, C, T = e[1] ? "New" : "Add Your Image",
        X, J, Z, te, q, A, U, E, D, W, b, h, _ = !e[1] && Do(),
        g = e[1] && No(e);
    return {
        c() {
            o = c("div"), s = c("div"), l = c("h2"), l.textContent = "Grab Your Hat", a = P(), r = c("div"), r.textContent = "Thrives on strong community backing with continuous support", u = P(), v = c("div"), B = c("input"), f = P(), _ && _.c(), t = P(), d = c("div"), w = c("canvas"), y = oe("Your browser does not support the HTML5 Canvas."), k = P(), C = c("button"), X = oe(T), Z = P(), g && g.c(), te = P(), q = c("div"), A = c("button"), U = oe("Save Your Image"), D = P(), W = c("button"), W.textContent = "←", n(l, "class", "zoom-in svelte-1gzu27j"), n(l, "style", "opacity: 0; transform: scale(0.9); animation-delay: 0.2s; animation-duration: 0.5s;"), n(r, "class", "maker-desc svelte-1gzu27j"), n(B, "type", "file"), n(B, "accept", "image/*"), Ft(B, "display", "none"), n(w, "class", "pookie-canvas svelte-1gzu27j"), Ft(w, "display", e[1] ? "block" : "none"), n(C, "style", "opacity: 0; transform: scale(0.9); animation-delay: 0.6s; animation-duration: 0.5s;"), n(C, "class", J = To(e[1] ? "new-image zoom-in" : "add-image zoom-in") + " svelte-1gzu27j"), n(d, "class", "canvas-top svelte-1gzu27j"), n(A, "class", "download-button zoom-in svelte-1gzu27j"), n(A, "style", "opacity: 0; transform: scale(0.9); animation-delay: 0.2s; animation-duration: 0.5s;"), A.disabled = E = !e[1], n(W, "class", "close-maker svelte-1gzu27j"), n(q, "class", "buttons svelte-1gzu27j"), n(v, "class", "popup-in svelte-1gzu27j"), n(s, "class", "popup svelte-1gzu27j"), n(o, "class", "overlay svelte-1gzu27j")
        },
        m(O, p) {
            Nt(O, o, p), i(o, s), i(s, l), i(s, a), i(s, r), i(s, u), i(s, v), i(v, B), i(v, f), _ && _.m(v, null), i(v, t), i(v, d), i(d, w), i(w, y), e[7](w), i(d, k), i(d, C), i(C, X), i(d, Z), g && g.m(d, null), i(v, te), i(v, q), i(q, A), i(A, U), i(q, D), i(q, W), b || (h = [re(B, "change", e[2]), re(C, "click", e[8]), re(A, "click", e[6]), re(W, "click", e[5]), re(o, "click", e[9])], b = !0)
        },
        p(O, [p]) {
            O[1] ? _ && (_.d(1), _ = null) : _ || (_ = Do(), _.c(), _.m(v, t)), p & 2 && Ft(w, "display", O[1] ? "block" : "none"), p & 2 && T !== (T = O[1] ? "New" : "Add Your Image") && Qo(X, T), p & 2 && J !== (J = To(O[1] ? "new-image zoom-in" : "add-image zoom-in") + " svelte-1gzu27j") && n(C, "class", J), O[1] ? g ? g.p(O, p) : (g = No(O), g.c(), g.m(d, null)) : g && (g.d(1), g = null), p & 2 && E !== (E = !O[1]) && (A.disabled = E)
        },
        i: ze,
        o: ze,
        d(O) {
            O && Je(o), _ && _.d(), e[7](null), g && g.d(), b = !1, ke(h)
        }
    }
}
const V = 500;

function Ut(e) {
    return new Promise((o, s) => {
        const l = new Image;
        l.onload = () => o(l), l.onerror = a => s(a), l.src = e
    })
}

function pn(e) {
    return ["image/jpeg", "image/png", "image/gif", "image/webp"].includes(e.type)
}

function vn(e, o, s) {
    const l = nn();
    let a, r, u = null,
        v = null,
        B = null;
    const f = window.matchMedia("(max-width: 768px)").matches;
    let t = {
            x: -150,
            y: -150,
            width: 0,
            height: 0,
            isDragging: !1,
            isResizing: !1,
            offsetX: 0,
            offsetY: 0,
            resizeHandleSize: 15,
            resizeHandleSizeMobile: 15,
            touchAreaSize: 15
        },
        d = {
            x: 0,
            y: 0
        };
    async function w(p) {
        const j = p.target.files[0];
        if (j && pn(j)) {
            const $ = new FileReader;
            $.onload = async H => {
                try {
                    s(1, u = await Ut(H.target.result)), y(), T()
                } catch (N) {
                    console.log(`Error loading uploaded image: ${N}`)
                }
            }, $.readAsDataURL(j)
        } else console.log("Invalid file format. Please upload an image."), s(1, u = null), T()
    }

    function y() {
        if (u) {
            s(0, a.width = V, a), s(0, a.height = V, a);
            const p = u.width / u.height;
            u.width > u.height ? (s(1, u.scaledWidth = V, u), s(1, u.scaledHeight = V / p, u)) : (s(1, u.scaledWidth = V * p, u), s(1, u.scaledHeight = V, u)), t.width = u.scaledWidth * .7, t.height = t.width / v.width * v.height, t.x = V / 2, t.y = V / 4
        }
    }

    function k() {
        t.width *= 1.1, t.height = t.width / v.width * v.height, T()
    }

    function C() {
        t.width *= .9, t.height = t.width / v.width * v.height, T()
    }

    function T() {
        r && (r.clearRect(0, 0, V, V), u ? r.drawImage(u, 0, (V - u.scaledHeight) / 2, u.scaledWidth, u.scaledHeight) : s(0, a.style.display = "none", a), v && (r.drawImage(v, t.x - t.width / 2, t.y - t.height / 2, t.width, t.height), X()))
    }

    function X() {
        const p = f ? t.resizeHandleSizeMobile : t.resizeHandleSize,
            j = "#004a99",
            $ = "#3399ff";
        r.strokeStyle = $, r.lineWidth = 1, r.strokeRect(t.x - t.width / 2, t.y - t.height / 2, t.width, t.height), r.strokeStyle = j, r.lineWidth = 1, r.strokeRect(t.x - t.width / 2 - 1, t.y - t.height / 2 - 1, t.width + 2, t.height + 2), r.strokeStyle = "white", r.lineWidth = 2, r.strokeRect(t.x - t.width / 2 - 2, t.y - t.height / 2 - 2, t.width + 4, t.height + 4), r.strokeStyle = j, r.lineWidth = 1, r.strokeRect(t.x - t.width / 2 - 3, t.y - t.height / 2 - 3, t.width + 6, t.height + 6), r.strokeStyle = $, r.lineWidth = 1, r.strokeRect(t.x - t.width / 2 - 4, t.y - t.height / 2 - 4, t.width + 8, t.height + 8), r.fillStyle = "white", [{
            x: t.x - t.width / 2,
            y: t.y - t.height / 2
        }, {
            x: t.x + t.width / 2,
            y: t.y - t.height / 2
        }, {
            x: t.x - t.width / 2,
            y: t.y + t.height / 2
        }, {
            x: t.x + t.width / 2,
            y: t.y + t.height / 2
        }].forEach(N => {
            r.fillRect(N.x - p / 2, N.y - p / 2, p, p), r.strokeStyle = j, r.lineWidth = 1, r.strokeRect(N.x - p / 2, N.y - p / 2, p, p), r.strokeStyle = $, r.lineWidth = 1, r.strokeRect(N.x - p / 2 - 1, N.y - p / 2 - 1, p + 2, p + 2)
        })
    }

    function J(p, j) {
        const $ = f ? t.resizeHandleSizeMobile : t.resizeHandleSize,
            H = [{
                x: t.x - t.width / 2,
                y: t.y - t.height / 2
            }, {
                x: t.x + t.width / 2,
                y: t.y - t.height / 2
            }, {
                x: t.x - t.width / 2,
                y: t.y + t.height / 2
            }, {
                x: t.x + t.width / 2,
                y: t.y + t.height / 2
            }];
        for (const N of H)
            if (p >= N.x - $ / 2 && p <= N.x + $ / 2 && j >= N.y - $ / 2 && j <= N.y + $ / 2) return !0;
        return !1
    }

    function Z(p) {
        q(p.clientX, p.clientY)
    }

    function te(p) {
        const j = p.touches[0];
        q(j.clientX, j.clientY), p.preventDefault()
    }

    function q(p, j) {
        const $ = a.getBoundingClientRect();
        d.x = p - $.left, d.y = j - $.top, d.x >= t.x - t.width / 2 && d.x <= t.x + t.width / 2 && d.y >= t.y - t.height / 2 && d.y <= t.y + t.height / 2 ? (t.isDragging = !0, t.offsetX = d.x - t.x, t.offsetY = d.y - t.y) : J(d.x, d.y) && (t.isResizing = !0)
    }

    function A(p) {
        E(p.clientX, p.clientY)
    }

    function U(p) {
        const j = p.touches[0];
        E(j.clientX, j.clientY), p.preventDefault()
    }

    function E(p, j) {
        if (!r) return;
        const $ = a.getBoundingClientRect();
        if (d.x = p - $.left, d.y = j - $.top, J(d.x, d.y) ? s(0, a.style.cursor = "nwse-resize", a) : d.x >= t.x - (f ? t.touchAreaSize : t.width / 2) && d.x <= t.x + (f ? t.touchAreaSize : t.width / 2) && d.y >= t.y - (f ? t.touchAreaSize : t.height / 2) && d.y <= t.y + (f ? t.touchAreaSize : t.height / 2) ? s(0, a.style.cursor = "move", a) : s(0, a.style.cursor = "default", a), t.isDragging && (t.x = d.x - t.offsetX, t.y = d.y - t.offsetY, T()), t.isResizing) {
            const H = Math.abs(d.x - t.x) * 2;
            H > 50 && H < V * 1.5 && (t.width = H, t.height = t.width / v.width * v.height, T())
        }
    }

    function D() {
        t.isDragging = !1, t.isResizing = !1
    }

    function W() {
        t.isDragging = !1, t.isResizing = !1
    }

    function b() {
        l("close")
    }

    function h() {
        if (!u || !v) {
            console.log("Cannot download composite. Missing images.");
            return
        }
        const p = document.createElement("canvas"),
            j = p.getContext("2d");
        p.width = V, p.height = V, j.drawImage(u, 0, (V - u.scaledHeight) / 2, u.scaledWidth, u.scaledHeight), j.drawImage(v, t.x - t.width / 2, t.y - t.height / 2, t.width, t.height);
        const $ = p.toDataURL("image/png"),
            H = document.createElement("a");
        H.href = $, H.download = "my-pookie.png", H.click()
    }
    xe(async () => {
        r = a.getContext("2d"), s(0, a.width = V, a), s(0, a.height = V, a);
        try {
            v = await Ut("/buckethat-res-real.png"), B = await Ut("/placeholder-3.png")
        } catch (p) {
            console.log(`Error loading images: ${p}`)
        }
        a.addEventListener("mousedown", Z), window.addEventListener("mousemove", A), window.addEventListener("mouseup", D), a.addEventListener("touchstart", te, {
            passive: !1
        }), window.addEventListener("touchmove", U, {
            passive: !1
        }), window.addEventListener("touchend", W), u || T()
    }), on(() => {
        a.removeEventListener("mousedown", Z), window.removeEventListener("mousemove", A), window.removeEventListener("mouseup", D), a.removeEventListener("touchstart", te), window.removeEventListener("touchmove", U), window.removeEventListener("touchend", W)
    });

    function _(p) {
        xt[p ? "unshift" : "push"](() => {
            a = p, s(0, a)
        })
    }
    return [a, u, w, k, C, b, h, _, () => document.querySelector("input[type=file]").click(), p => p.target === p.currentTarget && b()]
}
class gn extends xo {
    constructor(o) {
        super(), Uo(this, o, vn, hn, Wo, {})
    }
}
var bn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function yn(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Go = {
    exports: {}
};
(function(e, o) {
    (function(s, l) {
        e.exports = l()
    })(bn, function() {
        return function(s) {
            function l(r) {
                if (a[r]) return a[r].exports;
                var u = a[r] = {
                    exports: {},
                    id: r,
                    loaded: !1
                };
                return s[r].call(u.exports, u, u.exports, l), u.loaded = !0, u.exports
            }
            var a = {};
            return l.m = s, l.c = a, l.p = "dist/", l(0)
        }([function(s, l, a) {
            function r(g) {
                return g && g.__esModule ? g : {
                    default: g
                }
            }
            var u = Object.assign || function(g) {
                    for (var O = 1; O < arguments.length; O++) {
                        var p = arguments[O];
                        for (var j in p) Object.prototype.hasOwnProperty.call(p, j) && (g[j] = p[j])
                    }
                    return g
                },
                v = a(1),
                B = (r(v), a(6)),
                f = r(B),
                t = a(7),
                d = r(t),
                w = a(8),
                y = r(w),
                k = a(9),
                C = r(k),
                T = a(10),
                X = r(T),
                J = a(11),
                Z = r(J),
                te = a(14),
                q = r(te),
                A = [],
                U = !1,
                E = {
                    offset: 120,
                    delay: 0,
                    easing: "ease",
                    duration: 400,
                    disable: !1,
                    once: !1,
                    startEvent: "DOMContentLoaded",
                    throttleDelay: 99,
                    debounceDelay: 50,
                    disableMutationObserver: !1
                },
                D = function() {
                    var g = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
                    if (g && (U = !0), U) return A = (0, Z.default)(A, E), (0, X.default)(A, E.once), A
                },
                W = function() {
                    A = (0, q.default)(), D()
                },
                b = function() {
                    A.forEach(function(g, O) {
                        g.node.removeAttribute("data-aos"), g.node.removeAttribute("data-aos-easing"), g.node.removeAttribute("data-aos-duration"), g.node.removeAttribute("data-aos-delay")
                    })
                },
                h = function(g) {
                    return g === !0 || g === "mobile" && C.default.mobile() || g === "phone" && C.default.phone() || g === "tablet" && C.default.tablet() || typeof g == "function" && g() === !0
                },
                _ = function(g) {
                    E = u(E, g), A = (0, q.default)();
                    var O = document.all && !window.atob;
                    return h(E.disable) || O ? b() : (E.disableMutationObserver || y.default.isSupported() || (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `), E.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", E.easing), document.querySelector("body").setAttribute("data-aos-duration", E.duration), document.querySelector("body").setAttribute("data-aos-delay", E.delay), E.startEvent === "DOMContentLoaded" && ["complete", "interactive"].indexOf(document.readyState) > -1 ? D(!0) : E.startEvent === "load" ? window.addEventListener(E.startEvent, function() {
                        D(!0)
                    }) : document.addEventListener(E.startEvent, function() {
                        D(!0)
                    }), window.addEventListener("resize", (0, d.default)(D, E.debounceDelay, !0)), window.addEventListener("orientationchange", (0, d.default)(D, E.debounceDelay, !0)), window.addEventListener("scroll", (0, f.default)(function() {
                        (0, X.default)(A, E.once)
                    }, E.throttleDelay)), E.disableMutationObserver || y.default.ready("[data-aos]", W), A)
                };
            s.exports = {
                init: _,
                refresh: D,
                refreshHard: W
            }
        }, function(s, l) {}, , , , , function(s, l) {
            (function(a) {
                function r(h, _, g) {
                    function O(M) {
                        var K = x,
                            ae = Q;
                        return x = Q = void 0, ie = M, R = h.apply(ae, K)
                    }

                    function p(M) {
                        return ie = M, I = setTimeout(H, _), se ? O(M) : R
                    }

                    function j(M) {
                        var K = M - G,
                            ae = M - ie,
                            Ie = _ - K;
                        return ee ? W(Ie, ne - ae) : Ie
                    }

                    function $(M) {
                        var K = M - G,
                            ae = M - ie;
                        return G === void 0 || K >= _ || K < 0 || ee && ae >= ne
                    }

                    function H() {
                        var M = b();
                        return $(M) ? N(M) : void(I = setTimeout(H, j(M)))
                    }

                    function N(M) {
                        return I = void 0, L && x ? O(M) : (x = Q = void 0, R)
                    }

                    function fe() {
                        I !== void 0 && clearTimeout(I), ie = 0, x = G = Q = I = void 0
                    }

                    function me() {
                        return I === void 0 ? R : N(b())
                    }

                    function Y() {
                        var M = b(),
                            K = $(M);
                        if (x = arguments, Q = this, G = M, K) {
                            if (I === void 0) return p(G);
                            if (ee) return I = setTimeout(H, _), O(G)
                        }
                        return I === void 0 && (I = setTimeout(H, _)), R
                    }
                    var x, Q, ne, R, I, G, ie = 0,
                        se = !1,
                        ee = !1,
                        L = !0;
                    if (typeof h != "function") throw new TypeError(w);
                    return _ = t(_) || 0, v(g) && (se = !!g.leading, ee = "maxWait" in g, ne = ee ? D(t(g.maxWait) || 0, _) : ne, L = "trailing" in g ? !!g.trailing : L), Y.cancel = fe, Y.flush = me, Y
                }

                function u(h, _, g) {
                    var O = !0,
                        p = !0;
                    if (typeof h != "function") throw new TypeError(w);
                    return v(g) && (O = "leading" in g ? !!g.leading : O, p = "trailing" in g ? !!g.trailing : p), r(h, _, {
                        leading: O,
                        maxWait: _,
                        trailing: p
                    })
                }

                function v(h) {
                    var _ = typeof h > "u" ? "undefined" : d(h);
                    return !!h && (_ == "object" || _ == "function")
                }

                function B(h) {
                    return !!h && (typeof h > "u" ? "undefined" : d(h)) == "object"
                }

                function f(h) {
                    return (typeof h > "u" ? "undefined" : d(h)) == "symbol" || B(h) && E.call(h) == k
                }

                function t(h) {
                    if (typeof h == "number") return h;
                    if (f(h)) return y;
                    if (v(h)) {
                        var _ = typeof h.valueOf == "function" ? h.valueOf() : h;
                        h = v(_) ? _ + "" : _
                    }
                    if (typeof h != "string") return h === 0 ? h : +h;
                    h = h.replace(C, "");
                    var g = X.test(h);
                    return g || J.test(h) ? Z(h.slice(2), g ? 2 : 8) : T.test(h) ? y : +h
                }
                var d = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(h) {
                        return typeof h
                    } : function(h) {
                        return h && typeof Symbol == "function" && h.constructor === Symbol && h !== Symbol.prototype ? "symbol" : typeof h
                    },
                    w = "Expected a function",
                    y = NaN,
                    k = "[object Symbol]",
                    C = /^\s+|\s+$/g,
                    T = /^[-+]0x[0-9a-f]+$/i,
                    X = /^0b[01]+$/i,
                    J = /^0o[0-7]+$/i,
                    Z = parseInt,
                    te = (typeof a > "u" ? "undefined" : d(a)) == "object" && a && a.Object === Object && a,
                    q = (typeof self > "u" ? "undefined" : d(self)) == "object" && self && self.Object === Object && self,
                    A = te || q || Function("return this")(),
                    U = Object.prototype,
                    E = U.toString,
                    D = Math.max,
                    W = Math.min,
                    b = function() {
                        return A.Date.now()
                    };
                s.exports = u
            }).call(l, function() {
                return this
            }())
        }, function(s, l) {
            (function(a) {
                function r(b, h, _) {
                    function g(L) {
                        var M = Y,
                            K = x;
                        return Y = x = void 0, G = L, ne = b.apply(K, M)
                    }

                    function O(L) {
                        return G = L, R = setTimeout($, h), ie ? g(L) : ne
                    }

                    function p(L) {
                        var M = L - I,
                            K = L - G,
                            ae = h - M;
                        return se ? D(ae, Q - K) : ae
                    }

                    function j(L) {
                        var M = L - I,
                            K = L - G;
                        return I === void 0 || M >= h || M < 0 || se && K >= Q
                    }

                    function $() {
                        var L = W();
                        return j(L) ? H(L) : void(R = setTimeout($, p(L)))
                    }

                    function H(L) {
                        return R = void 0, ee && Y ? g(L) : (Y = x = void 0, ne)
                    }

                    function N() {
                        R !== void 0 && clearTimeout(R), G = 0, Y = I = x = R = void 0
                    }

                    function fe() {
                        return R === void 0 ? ne : H(W())
                    }

                    function me() {
                        var L = W(),
                            M = j(L);
                        if (Y = arguments, x = this, I = L, M) {
                            if (R === void 0) return O(I);
                            if (se) return R = setTimeout($, h), g(I)
                        }
                        return R === void 0 && (R = setTimeout($, h)), ne
                    }
                    var Y, x, Q, ne, R, I, G = 0,
                        ie = !1,
                        se = !1,
                        ee = !0;
                    if (typeof b != "function") throw new TypeError(d);
                    return h = f(h) || 0, u(_) && (ie = !!_.leading, se = "maxWait" in _, Q = se ? E(f(_.maxWait) || 0, h) : Q, ee = "trailing" in _ ? !!_.trailing : ee), me.cancel = N, me.flush = fe, me
                }

                function u(b) {
                    var h = typeof b > "u" ? "undefined" : t(b);
                    return !!b && (h == "object" || h == "function")
                }

                function v(b) {
                    return !!b && (typeof b > "u" ? "undefined" : t(b)) == "object"
                }

                function B(b) {
                    return (typeof b > "u" ? "undefined" : t(b)) == "symbol" || v(b) && U.call(b) == y
                }

                function f(b) {
                    if (typeof b == "number") return b;
                    if (B(b)) return w;
                    if (u(b)) {
                        var h = typeof b.valueOf == "function" ? b.valueOf() : b;
                        b = u(h) ? h + "" : h
                    }
                    if (typeof b != "string") return b === 0 ? b : +b;
                    b = b.replace(k, "");
                    var _ = T.test(b);
                    return _ || X.test(b) ? J(b.slice(2), _ ? 2 : 8) : C.test(b) ? w : +b
                }
                var t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(b) {
                        return typeof b
                    } : function(b) {
                        return b && typeof Symbol == "function" && b.constructor === Symbol && b !== Symbol.prototype ? "symbol" : typeof b
                    },
                    d = "Expected a function",
                    w = NaN,
                    y = "[object Symbol]",
                    k = /^\s+|\s+$/g,
                    C = /^[-+]0x[0-9a-f]+$/i,
                    T = /^0b[01]+$/i,
                    X = /^0o[0-7]+$/i,
                    J = parseInt,
                    Z = (typeof a > "u" ? "undefined" : t(a)) == "object" && a && a.Object === Object && a,
                    te = (typeof self > "u" ? "undefined" : t(self)) == "object" && self && self.Object === Object && self,
                    q = Z || te || Function("return this")(),
                    A = Object.prototype,
                    U = A.toString,
                    E = Math.max,
                    D = Math.min,
                    W = function() {
                        return q.Date.now()
                    };
                s.exports = r
            }).call(l, function() {
                return this
            }())
        }, function(s, l) {
            function a(t) {
                var d = void 0,
                    w = void 0;
                for (d = 0; d < t.length; d += 1)
                    if (w = t[d], w.dataset && w.dataset.aos || w.children && a(w.children)) return !0;
                return !1
            }

            function r() {
                return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
            }

            function u() {
                return !!r()
            }

            function v(t, d) {
                var w = window.document,
                    y = r(),
                    k = new y(B);
                f = d, k.observe(w.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0
                })
            }

            function B(t) {
                t && t.forEach(function(d) {
                    var w = Array.prototype.slice.call(d.addedNodes),
                        y = Array.prototype.slice.call(d.removedNodes),
                        k = w.concat(y);
                    if (a(k)) return f()
                })
            }
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var f = function() {};
            l.default = {
                isSupported: u,
                ready: v
            }
        }, function(s, l) {
            function a(w, y) {
                if (!(w instanceof y)) throw new TypeError("Cannot call a class as a function")
            }

            function r() {
                return navigator.userAgent || navigator.vendor || window.opera || ""
            }
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var u = function() {
                    function w(y, k) {
                        for (var C = 0; C < k.length; C++) {
                            var T = k[C];
                            T.enumerable = T.enumerable || !1, T.configurable = !0, "value" in T && (T.writable = !0), Object.defineProperty(y, T.key, T)
                        }
                    }
                    return function(y, k, C) {
                        return k && w(y.prototype, k), C && w(y, C), y
                    }
                }(),
                v = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                B = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                f = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                t = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                d = function() {
                    function w() {
                        a(this, w)
                    }
                    return u(w, [{
                        key: "phone",
                        value: function() {
                            var y = r();
                            return !(!v.test(y) && !B.test(y.substr(0, 4)))
                        }
                    }, {
                        key: "mobile",
                        value: function() {
                            var y = r();
                            return !(!f.test(y) && !t.test(y.substr(0, 4)))
                        }
                    }, {
                        key: "tablet",
                        value: function() {
                            return this.mobile() && !this.phone()
                        }
                    }]), w
                }();
            l.default = new d
        }, function(s, l) {
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var a = function(u, v, B) {
                    var f = u.node.getAttribute("data-aos-once");
                    v > u.position ? u.node.classList.add("aos-animate") : typeof f < "u" && (f === "false" || !B && f !== "true") && u.node.classList.remove("aos-animate")
                },
                r = function(u, v) {
                    var B = window.pageYOffset,
                        f = window.innerHeight;
                    u.forEach(function(t, d) {
                        a(t, f + B, v)
                    })
                };
            l.default = r
        }, function(s, l, a) {
            function r(f) {
                return f && f.__esModule ? f : {
                    default: f
                }
            }
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var u = a(12),
                v = r(u),
                B = function(f, t) {
                    return f.forEach(function(d, w) {
                        d.node.classList.add("aos-init"), d.position = (0, v.default)(d.node, t.offset)
                    }), f
                };
            l.default = B
        }, function(s, l, a) {
            function r(f) {
                return f && f.__esModule ? f : {
                    default: f
                }
            }
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var u = a(13),
                v = r(u),
                B = function(f, t) {
                    var d = 0,
                        w = 0,
                        y = window.innerHeight,
                        k = {
                            offset: f.getAttribute("data-aos-offset"),
                            anchor: f.getAttribute("data-aos-anchor"),
                            anchorPlacement: f.getAttribute("data-aos-anchor-placement")
                        };
                    switch (k.offset && !isNaN(k.offset) && (w = parseInt(k.offset)), k.anchor && document.querySelectorAll(k.anchor) && (f = document.querySelectorAll(k.anchor)[0]), d = (0, v.default)(f).top, k.anchorPlacement) {
                        case "top-bottom":
                            break;
                        case "center-bottom":
                            d += f.offsetHeight / 2;
                            break;
                        case "bottom-bottom":
                            d += f.offsetHeight;
                            break;
                        case "top-center":
                            d += y / 2;
                            break;
                        case "bottom-center":
                            d += y / 2 + f.offsetHeight;
                            break;
                        case "center-center":
                            d += y / 2 + f.offsetHeight / 2;
                            break;
                        case "top-top":
                            d += y;
                            break;
                        case "bottom-top":
                            d += f.offsetHeight + y;
                            break;
                        case "center-top":
                            d += f.offsetHeight / 2 + y
                    }
                    return k.anchorPlacement || k.offset || isNaN(t) || (w = t), d + w
                };
            l.default = B
        }, function(s, l) {
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var a = function(r) {
                for (var u = 0, v = 0; r && !isNaN(r.offsetLeft) && !isNaN(r.offsetTop);) u += r.offsetLeft - (r.tagName != "BODY" ? r.scrollLeft : 0), v += r.offsetTop - (r.tagName != "BODY" ? r.scrollTop : 0), r = r.offsetParent;
                return {
                    top: v,
                    left: u
                }
            };
            l.default = a
        }, function(s, l) {
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var a = function(r) {
                return r = r || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(r, function(u) {
                    return {
                        node: u
                    }
                })
            };
            l.default = a
        }])
    })
})(Go);
var kn = Go.exports;
const At = yn(kn);

function Io(e) {
    let o, s;
    return o = new gn({}), o.$on("close", e[6]), {
        c() {
            dn(o.$$.fragment)
        },
        m(l, a) {
            Fo(o, l, a), s = !0
        },
        p: ze,
        i(l) {
            s || (Ke(o.$$.fragment, l), s = !0)
        },
        o(l) {
            Vt(o.$$.fragment, l), s = !1
        },
        d(l) {
            Xo(o, l)
        }
    }
}

function wn(e) {
    let o, s, l, a, r, u, v, B, f, t, d, w, y, k, C, T, X, J, Z, te, q, A, U, E, D, W, b, h, _, g, O, p, j, $, H, N, fe, me, Y, x, Q, ne, R, I, G, ie, se, ee, L, M, K, ae, Ie, Se, he, we, Jt, Ze, Qe, Zt, _e, Qt, et, tt, eo, Pe, to, ot, nt, oo, ue, Re, no, io, Rt, it, at, st, ao, qe, rt, je, lt, pe, ct, ut, so, ro, ve, dt, lo, ft, co, de, uo, mt, ht, pt, vt, fo, We, le, gt, mo, bt, ho, Ee, Ye, ge, Oe, po, vo, yt, kt, go, Fe, be, Me, bo, yo, wt, _t, ko, Pt, Xe, ye, Le, wo, _o, Bt, $t, zt, Po, St, Ce, Bo, jt, $o, He, Be, Et, zo, Ot, Mt, So, Te, jo, Lt, Eo, Ct, Oo, qt, Mo, Ht, Lo, z, Wt, Co, F = e[0] && Io(e);
    return {
        c() {
            o = c("main"), s = c("div"), s.innerHTML = '<div class="marquee"><p>#BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub</p> <p>#BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub #BearSupremeClub</p></div>', l = P(), a = c("header"), a.innerHTML = `<div class="container"><div class="logo-top"><img src="/pookie-main-logo.png" alt="Supreme Bear Logo" class="logo"/> <span class="logo-text">POOKIEBERA</span></div> <div class="social-icons disnone"><button class="header-button-2 disnone"><img src="/discord.png" alt="Four.meme"/>

				Community <span class="arrow">↗</span></button> <a class="disnone" href="https://four.meme/token/0x07b20f9237a753b115b50d4195ff5c9f3a344444" target="_blank"><button class="header-button"><img src="/discord.png" alt="Four.meme"/>
						
						Community <span class="arrow">↗</span></button></a></div></div>`, r = P(), u = c("div"), v = c("div"), B = c("div"), B.innerHTML = '<a class="disnone" href="https://four.meme/token/0x07b20f9237a753b115b50d4195ff5c9f3a344444" target="_blank"><button class="social-top-1"><img src="/discord.png" alt="Four.meme" class="social-image-1"/></button></a> <a href="https://t.me/BearSupremeClub" target="_blank"><button class="social-top-3"><img src="/telegram.webp" alt="Telegram" class="social-image-3"/></button></a> <a href="https://x.com/BearSupremeClub" target="_blank"><button class="social-top-4"><img src="/x.webp" alt="X" class="social-image-4"/></button></a>', f = P(), t = c("button"), t.innerHTML = '<img src="/buckethat-real.png" alt="Supreme Bear Logo" class="maker-icon"/> <span class="maker-text">Grab Your Hat</span> <span class="maker-text-2">Get Hat</span>', d = P(), w = c("section"), y = c("div"), k = c("div"), C = c("div"), C.textContent = "$SUPREME", T = P(), X = c("div"), X.innerHTML = '<span class="tit-1"><span class="tit-1-in">Bear</span>Supreme</span> <span class="tit-2">Club</span>', J = P(), Z = c("span"), Z.textContent = "Yeah, that means BSC", te = P(), q = c("div"), q.innerHTML = "", A = P(), U = c("div"), U.innerHTML = '<span class="ca-title">CA:</span> <span class="ca">5mbK36SZ7J19An8jFochhQS4of8g6BwUjbeCSxBSoWdp <img class="ca-copy" src="/copy.png"/></span>', E = P(), D = c("a"), W = oe("Buy $SUPREME "), b = c("span"), b.textContent = "↗", O = P(), p = c("div"), j = P(), $ = c("div"), H = c("img"), me = P(), Y = c("img"), ne = P(), R = c("div"), I = P(), G = c("div"), se = P(), ee = c("section"), L = c("div"), M = c("div"), M.textContent = "Lore of Supreme Bear", K = P(), ae = c("div"), ae.textContent = "The story of BSC's cutest bear", Ie = P(), Se = c("div"), he = c("div"), we = c("div"), Jt = oe("Supreme Bear was born the scruffiest, ugliest little bear! No one took him seriously - they thought he’d just disappear, another forgotten joke."), Zt = P(), _e = c("div"), Qt = oe("But as Supreme Bear grew, things started to change! His rough edges? Gone. Suddenly, this bear was cute. People couldn’t help but notice - Supreme Bear was different now."), eo = P(), Pe = c("div"), to = oe("Now, Supreme Bear’s on the verge of something big! Cute, confident, and ready to prove everyone wrong. His Supreme Bear army is growing, and they’re ready to take over!"), oo = P(), ue = c("div"), Re = c("img"), io = P(), Rt = c("div"), ao = P(), qe = c("section"), rt = c("div"), je = c("div"), lt = c("div"), pe = c("img"), ro = P(), ve = c("div"), dt = c("div"), dt.textContent = "Grab Your Hat", lo = P(), ft = c("div"), ft.textContent = "Join the movement, become a Supreme Bear . Strap on your Hat with our tool", co = P(), de = c("button"), uo = oe("Open Hat Tool "), mt = c("span"), mt.textContent = "↗", fo = P(), We = c("section"), le = c("div"), gt = c("div"), gt.textContent = "Supreme Bear Socials", mo = P(), bt = c("div"), bt.textContent = "Together, we’ll take over BSC", ho = P(), Ee = c("div"), Ye = c("a"), ge = c("button"), Oe = c("img"), vo = oe(`
					Four.meme`), go = P(), Fe = c("a"), be = c("button"), Me = c("img"), yo = oe(`
					Telegram`), ko = P(), Pt = c("div"), Xe = c("a"), ye = c("button"), Le = c("img"), _o = oe(`
					X (Twitter)`), Po = P(), St = c("div"), Ce = c("button"), Bo = oe("←"), $o = P(), He = c("div"), Be = c("div"), Et = c("div"), Et.textContent = "More", zo = P(), Ot = c("span"), Ot.textContent = "→", So = P(), Te = c("button"), jo = oe("→"), Eo = P(), Ct = c("div"), Ct.innerHTML = '<div class="floorer-grad"></div> <div class="floorer-floor"></div>', Oo = P(), qt = c("div"), Mo = P(), Ht = c("div"), Ht.innerHTML = "", Lo = P(), F && F.c(), n(s, "class", "marquee-container"), n(B, "class", "social-icons"), n(t, "class", "maker"), n(v, "class", "maker-top"), n(u, "class", "maker-topper"), n(C, "class", "token-title"), n(X, "class", "tit-top"), n(Z, "class", "subtit-2"), n(U, "class", "ca-top"), n(b, "class", "arrow"), n(D, "target", "_blank"), n(D, "href", "https://four.meme/token/0x07b20f9237a753b115b50d4195ff5c9f3a344444"), n(D, "class", h = "cta-button " + (e[1] === 0 ? "zoom-in" : "") + " svelte-cfhrno"), n(D, "style", _ = `opacity: ${e[1]===0?"0":"1"};
			transform: ${e[1]===0?"scale(0.9)":"scale(1)"};
			animation-delay: ${e[1]===0?"0.2s":"0s"};
			animation-duration: ${e[1]===0?"0.5s":"0s"};`), n(k, "class", g = "hero-content " + (e[1] >= 1 ? "section-2-appear" : "")), n(p, "class", "sun-rays-top"), ce(H.src, N = "/" + (e[1] >= 2 ? "bear-gun-res.png" : "bear-res.png")) || n(H, "src", N), n(H, "alt", "Supreme Bear Bear"), n(H, "class", fe = "hero-image " + (e[1] >= 1 && e[1] < 5 ? "section-2-appear" : "")), ce(Y.src, x = "/" + (e[1] >= 2 ? "bear-gun-res.png" : "bear-res.png")) || n(Y, "src", x), n(Y, "alt", "Supreme Bear Bear"), n(Y, "class", Q = "hero-image-2 " + (e[1] >= 1 && e[1] < 5 ? "section-2-appear" : "")), n(R, "class", "sun-rays"), n(G, "class", "hero-image-shadow"), n($, "class", ie = "hero-i " + (e[1] >= 1 && e[1] < 3 ? "section-2-appear" : e[1] >= 3 ? "section-6-appear" : "")), n(y, "class", "container-2"), n(w, "class", "hero scroll-section  svelte-cfhrno"), n(M, "class", "fou-title"), n(ae, "class", "fou-desc"), n(we, "class", Ze = "fou-1 " + (e[1] === 1 ? "zoom-in" : "") + " svelte-cfhrno"), n(we, "style", Qe = `opacity: ${e[1]===1?"0":"1"};
			transform: ${e[1]===1?"scale(0.9)":"scale(1)"};
			animation-delay: ${e[1]===1?"0.2s":"0s"};
			animation-duration: ${e[1]===1?"0.5s":"0s"};`), n(_e, "class", et = "fou-2 " + (e[1] === 1 ? "zoom-in" : "") + " svelte-cfhrno"), n(_e, "style", tt = `opacity: ${e[1]===1?"0":"1"};
			transform: ${e[1]===1?"scale(0.9)":"scale(1)"};
			animation-delay: ${e[1]===1?"0.4s":"0s"};
			animation-duration: ${e[1]===1?"0.5s":"0s"};`), n(Pe, "class", ot = "fou-3 " + (e[1] === 1 ? "zoom-in" : "") + " svelte-cfhrno"), n(Pe, "style", nt = `opacity: ${e[1]===1?"0":"1"};
			transform: ${e[1]===1?"scale(0.9)":"scale(1)"};
			animation-delay: ${e[1]===1?"0.6s":"0s"};
			animation-duration: ${e[1]===1?"0.5s":"0s"};`), n(he, "class", "fou-box-1"), n(Re, "class", "fou-img"), ce(Re.src, no = "/bear-heart.png") || n(Re, "src", no), n(Rt, "class", "fou-shadow"), n(ue, "class", it = "fou-box-2 " + (e[1] === 1 ? "zoom-in" : "") + " svelte-cfhrno"), n(ue, "style", at = `opacity: ${e[1]===1?"0":"1"};
			transform: ${e[1]===1?"scale(0.9)":"scale(1)"};
			animation-delay: ${e[1]===1?"0.8s":"0s"};
			animation-duration: ${e[1]===1?"0.5s":"0s"};`), n(Se, "class", "fou-boxes"), n(L, "class", "section-4"), n(ee, "class", st = "scroll-section scroll-section-4 " + (e[1] === 1 ? "active" : "") + " svelte-cfhrno"), n(pe, "class", ct = "fiv-img " + (e[1] === 2 ? "zoom-in" : "") + " svelte-cfhrno"), n(pe, "style", ut = `opacity: ${e[1]===2?"0":"1"};
			transform: ${e[1]===2?"scale(0.9)":"scale(1)"};
			animation-delay: ${e[1]===2?"0.2s":"0s"};
			animation-duration: ${e[1]===2?"0.5s":"0s"};`), ce(pe.src, so = "/placeholder-3.png") || n(pe, "src", so), n(lt, "class", "fiv-img-top"), n(dt, "class", "fiv-title"), n(ft, "class", "fiv-desc"), n(mt, "class", "arrow"), n(de, "class", ht = "fiv-button " + (e[1] === 2 ? "zoom-in" : "") + " svelte-cfhrno"), n(de, "style", pt = `opacity: ${e[1]===2?"0":"1"};
			transform: ${e[1]===2?"scale(0.9)":"scale(1)"};
			animation-delay: ${e[1]===2?"0.4s":"0s"};
			animation-duration: ${e[1]===2?"0.5s":"0s"};`), n(ve, "class", "fiv-box-2"), n(je, "class", "fiv-boxes"), n(rt, "class", "section-5"), n(qe, "class", vt = "scroll-section scroll-section-5 " + (e[1] === 2 ? "active" : "") + " svelte-cfhrno"), n(gt, "class", "six-title"), n(bt, "class", "six-desc"), ce(Oe.src, po = "/discord.png") || n(Oe, "src", po), n(Oe, "alt", "Four.meme"), n(Oe, "class", "social-image-1"), n(ge, "class", yt = "six-social-top-1 " + (e[1] === 3 ? "zoom-in" : "") + " svelte-cfhrno"), n(ge, "style", kt = `opacity: ${e[1]===3?"0":"1"};
			transform: ${e[1]===3?"scale(0.9)":"scale(1)"};
			animation-delay: ${e[1]===3?"0.2s":"0s"};
			animation-duration: ${e[1]===3?"0.5s":"0s"};`), n(Ye, "href", "https://four.meme/token/0x07b20f9237a753b115b50d4195ff5c9f3a344444"), n(Ye, "target", "_blank"), ce(Me.src, bo = "/telegram.webp") || n(Me, "src", bo), n(Me, "alt", "Telegram"), n(Me, "class", "social-image-3"), n(be, "class", wt = "six-social-top-3 " + (e[1] === 3 ? "zoom-in" : "") + " svelte-cfhrno"), n(be, "style", _t = `opacity: ${e[1]===3?"0":"1"};
			transform: ${e[1]===3?"scale(0.9)":"scale(1)"};
			animation-delay: ${e[1]===3?"0.4s":"0s"};
			animation-duration: ${e[1]===3?"0.5s":"0s"};`), n(Fe, "href", "https://t.me/BearSupremeClub"), n(Fe, "target", "_blank"), n(Ee, "class", "six-social-icons"), ce(Le.src, wo = "/x.webp") || n(Le, "src", wo), n(Le, "alt", "X"), n(Le, "class", "social-image-4"), n(ye, "class", Bt = "six-social-top-4 " + (e[1] === 3 ? "zoom-in" : "") + " svelte-cfhrno"), n(ye, "style", $t = `opacity: ${e[1]===3?"0":"1"};
			transform: ${e[1]===3?"scale(0.9)":"scale(1)"};
			animation-delay: ${e[1]===3?"0.6s":"0s"};
			animation-duration: ${e[1]===3?"0.5s":"0s"};`), n(Xe, "href", "https://x.com/BearSupremeClub"), n(Xe, "target", "_blank"), n(Pt, "class", "six-social-icons-2"), n(le, "class", "section-6"), n(We, "class", zt = "scroll-section scroll-section-6 " + (e[1] === 3 ? "active" : "") + " svelte-cfhrno"), n(Ce, "class", jt = "nav-btn left " + (e[2] ? "nav-btn-left-hidden" : "") + " svelte-cfhrno"), n(St, "class", "nav-btn-left-top svelte-cfhrno"), n(Et, "class", "svelte-cfhrno"), n(Ot, "class", "svelte-cfhrno"), n(Be, "class", Mt = "press-me " + (e[1] >= 1 ? "hider" : "") + " svelte-cfhrno"), n(Te, "class", Lt = "nav-btn right " + (e[3] ? "nav-btn-right-hidden" : "") + " svelte-cfhrno"), n(He, "class", "nav-btn-right-top svelte-cfhrno"), n(Ct, "class", "floorer"), n(qt, "class", "sun-rays-top-2"), n(Ht, "class", "floor"), n(o, "class", "main-container")
        },
        m(m, S) {
            Nt(m, o, S), i(o, s), i(o, l), i(o, a), i(o, r), i(o, u), i(u, v), i(v, B), i(v, f), i(v, t), i(o, d), i(o, w), i(w, y), i(y, k), i(k, C), i(k, T), i(k, X), i(k, J), i(k, Z), i(k, te), i(k, q), i(k, A), i(k, U), i(k, E), i(k, D), i(D, W), i(D, b), i(y, O), i(y, p), i(y, j), i(y, $), i($, H), i($, me), i($, Y), i($, ne), i($, R), i($, I), i($, G), i(o, se), i(o, ee), i(ee, L), i(L, M), i(L, K), i(L, ae), i(L, Ie), i(L, Se), i(Se, he), i(he, we), i(we, Jt), i(he, Zt), i(he, _e), i(_e, Qt), i(he, eo), i(he, Pe), i(Pe, to), i(Se, oo), i(Se, ue), i(ue, Re), i(ue, io), i(ue, Rt), i(o, ao), i(o, qe), i(qe, rt), i(rt, je), i(je, lt), i(lt, pe), i(je, ro), i(je, ve), i(ve, dt), i(ve, lo), i(ve, ft), i(ve, co), i(ve, de), i(de, uo), i(de, mt), i(o, fo), i(o, We), i(We, le), i(le, gt), i(le, mo), i(le, bt), i(le, ho), i(le, Ee), i(Ee, Ye), i(Ye, ge), i(ge, Oe), i(ge, vo), i(Ee, go), i(Ee, Fe), i(Fe, be), i(be, Me), i(be, yo), i(le, ko), i(le, Pt), i(Pt, Xe), i(Xe, ye), i(ye, Le), i(ye, _o), i(o, Po), i(o, St), i(St, Ce), i(Ce, Bo), i(o, $o), i(o, He), i(He, Be), i(Be, Et), i(Be, zo), i(Be, Ot), i(He, So), i(He, Te), i(Te, jo), i(o, Eo), i(o, Ct), i(o, Oo), i(o, qt), i(o, Mo), i(o, Ht), i(o, Lo), F && F.m(o, null), z = !0, Wt || (Co = [re(t, "click", e[6]), re(de, "click", e[6]), re(Ce, "click", e[5]), re(Te, "click", e[4])], Wt = !0)
        },
        p(m, [S]) {
            (!z || S & 2 && h !== (h = "cta-button " + (m[1] === 0 ? "zoom-in" : "") + " svelte-cfhrno")) && n(D, "class", h), (!z || S & 2 && _ !== (_ = `opacity: ${m[1]===0?"0":"1"};
			transform: ${m[1]===0?"scale(0.9)":"scale(1)"};
			animation-delay: ${m[1]===0?"0.2s":"0s"};
			animation-duration: ${m[1]===0?"0.5s":"0s"};`)) && n(D, "style", _), (!z || S & 2 && g !== (g = "hero-content " + (m[1] >= 1 ? "section-2-appear" : ""))) && n(k, "class", g), (!z || S & 2 && !ce(H.src, N = "/" + (m[1] >= 2 ? "bear-gun-res.png" : "bear-res.png"))) && n(H, "src", N), (!z || S & 2 && fe !== (fe = "hero-image " + (m[1] >= 1 && m[1] < 5 ? "section-2-appear" : ""))) && n(H, "class", fe), (!z || S & 2 && !ce(Y.src, x = "/" + (m[1] >= 2 ? "bear-gun-res.png" : "bear-res.png"))) && n(Y, "src", x), (!z || S & 2 && Q !== (Q = "hero-image-2 " + (m[1] >= 1 && m[1] < 5 ? "section-2-appear" : ""))) && n(Y, "class", Q), (!z || S & 2 && ie !== (ie = "hero-i " + (m[1] >= 1 && m[1] < 3 ? "section-2-appear" : m[1] >= 3 ? "section-6-appear" : ""))) && n($, "class", ie), (!z || S & 2 && Ze !== (Ze = "fou-1 " + (m[1] === 1 ? "zoom-in" : "") + " svelte-cfhrno")) && n(we, "class", Ze), (!z || S & 2 && Qe !== (Qe = `opacity: ${m[1]===1?"0":"1"};
			transform: ${m[1]===1?"scale(0.9)":"scale(1)"};
			animation-delay: ${m[1]===1?"0.2s":"0s"};
			animation-duration: ${m[1]===1?"0.5s":"0s"};`)) && n(we, "style", Qe), (!z || S & 2 && et !== (et = "fou-2 " + (m[1] === 1 ? "zoom-in" : "") + " svelte-cfhrno")) && n(_e, "class", et), (!z || S & 2 && tt !== (tt = `opacity: ${m[1]===1?"0":"1"};
			transform: ${m[1]===1?"scale(0.9)":"scale(1)"};
			animation-delay: ${m[1]===1?"0.4s":"0s"};
			animation-duration: ${m[1]===1?"0.5s":"0s"};`)) && n(_e, "style", tt), (!z || S & 2 && ot !== (ot = "fou-3 " + (m[1] === 1 ? "zoom-in" : "") + " svelte-cfhrno")) && n(Pe, "class", ot), (!z || S & 2 && nt !== (nt = `opacity: ${m[1]===1?"0":"1"};
			transform: ${m[1]===1?"scale(0.9)":"scale(1)"};
			animation-delay: ${m[1]===1?"0.6s":"0s"};
			animation-duration: ${m[1]===1?"0.5s":"0s"};`)) && n(Pe, "style", nt), (!z || S & 2 && it !== (it = "fou-box-2 " + (m[1] === 1 ? "zoom-in" : "") + " svelte-cfhrno")) && n(ue, "class", it), (!z || S & 2 && at !== (at = `opacity: ${m[1]===1?"0":"1"};
			transform: ${m[1]===1?"scale(0.9)":"scale(1)"};
			animation-delay: ${m[1]===1?"0.8s":"0s"};
			animation-duration: ${m[1]===1?"0.5s":"0s"};`)) && n(ue, "style", at), (!z || S & 2 && st !== (st = "scroll-section scroll-section-4 " + (m[1] === 1 ? "active" : "") + " svelte-cfhrno")) && n(ee, "class", st), (!z || S & 2 && ct !== (ct = "fiv-img " + (m[1] === 2 ? "zoom-in" : "") + " svelte-cfhrno")) && n(pe, "class", ct), (!z || S & 2 && ut !== (ut = `opacity: ${m[1]===2?"0":"1"};
			transform: ${m[1]===2?"scale(0.9)":"scale(1)"};
			animation-delay: ${m[1]===2?"0.2s":"0s"};
			animation-duration: ${m[1]===2?"0.5s":"0s"};`)) && n(pe, "style", ut), (!z || S & 2 && ht !== (ht = "fiv-button " + (m[1] === 2 ? "zoom-in" : "") + " svelte-cfhrno")) && n(de, "class", ht), (!z || S & 2 && pt !== (pt = `opacity: ${m[1]===2?"0":"1"};
			transform: ${m[1]===2?"scale(0.9)":"scale(1)"};
			animation-delay: ${m[1]===2?"0.4s":"0s"};
			animation-duration: ${m[1]===2?"0.5s":"0s"};`)) && n(de, "style", pt), (!z || S & 2 && vt !== (vt = "scroll-section scroll-section-5 " + (m[1] === 2 ? "active" : "") + " svelte-cfhrno")) && n(qe, "class", vt), (!z || S & 2 && yt !== (yt = "six-social-top-1 " + (m[1] === 3 ? "zoom-in" : "") + " svelte-cfhrno")) && n(ge, "class", yt), (!z || S & 2 && kt !== (kt = `opacity: ${m[1]===3?"0":"1"};
			transform: ${m[1]===3?"scale(0.9)":"scale(1)"};
			animation-delay: ${m[1]===3?"0.2s":"0s"};
			animation-duration: ${m[1]===3?"0.5s":"0s"};`)) && n(ge, "style", kt), (!z || S & 2 && wt !== (wt = "six-social-top-3 " + (m[1] === 3 ? "zoom-in" : "") + " svelte-cfhrno")) && n(be, "class", wt), (!z || S & 2 && _t !== (_t = `opacity: ${m[1]===3?"0":"1"};
			transform: ${m[1]===3?"scale(0.9)":"scale(1)"};
			animation-delay: ${m[1]===3?"0.4s":"0s"};
			animation-duration: ${m[1]===3?"0.5s":"0s"};`)) && n(be, "style", _t), (!z || S & 2 && Bt !== (Bt = "six-social-top-4 " + (m[1] === 3 ? "zoom-in" : "") + " svelte-cfhrno")) && n(ye, "class", Bt), (!z || S & 2 && $t !== ($t = `opacity: ${m[1]===3?"0":"1"};
			transform: ${m[1]===3?"scale(0.9)":"scale(1)"};
			animation-delay: ${m[1]===3?"0.6s":"0s"};
			animation-duration: ${m[1]===3?"0.5s":"0s"};`)) && n(ye, "style", $t), (!z || S & 2 && zt !== (zt = "scroll-section scroll-section-6 " + (m[1] === 3 ? "active" : "") + " svelte-cfhrno")) && n(We, "class", zt), (!z || S & 4 && jt !== (jt = "nav-btn left " + (m[2] ? "nav-btn-left-hidden" : "") + " svelte-cfhrno")) && n(Ce, "class", jt), (!z || S & 2 && Mt !== (Mt = "press-me " + (m[1] >= 1 ? "hider" : "") + " svelte-cfhrno")) && n(Be, "class", Mt), (!z || S & 8 && Lt !== (Lt = "nav-btn right " + (m[3] ? "nav-btn-right-hidden" : "") + " svelte-cfhrno")) && n(Te, "class", Lt), m[0] ? F ? (F.p(m, S), S & 1 && Ke(F, 1)) : (F = Io(m), F.c(), Ke(F, 1), F.m(o, null)) : F && (cn(), Vt(F, 1, 1, () => {
                F = null
            }), un())
        },
        i(m) {
            z || (Ke(F), z = !0)
        },
        o(m) {
            Vt(F), z = !1
        },
        d(m) {
            m && Je(o), F && F.d(), Wt = !1, ke(Co)
        }
    }
}

function Ue() {
    const e = window.innerHeight * .01;
    document.documentElement.style.setProperty("--vh", `${e}px`)
}

function _n(e, o, s) {
    let l = !1,
        a = 0,
        r = [],
        u = !0,
        v = !1;
    xe(() => (Ue(), window.addEventListener("resize", Ue), window.addEventListener("orientationchange", Ue), () => {
        window.removeEventListener("resize", Ue), window.removeEventListener("orientationchange", Ue)
    })), xe(() => {
        At.init({
            duration: 800,
            once: !1,
            mirror: !1
        }), At.refresh()
    });

    function B(y) {
        y >= 0 && y < r.length && (r.forEach((k, C) => {
            k.style.transform = `translateX(${(C-y)*100}vw)`
        }), s(1, a = y), d(), At.refreshHard())
    }

    function f() {
        a < r.length - 1 && B(a + 1)
    }

    function t() {
        a > 0 && B(a - 1)
    }

    function d() {
        s(2, u = a === 0), s(3, v = a === r.length - 1)
    }
    xe(() => {
        r = document.querySelectorAll(".scroll-section"), r.forEach((y, k) => {
            y.style.transform = `translateX(${k*100}vw)`
        }), B(0), d()
    });

    function w() {
        s(0, l = !l), l ? (window.history.pushState({}, "", "/hat"), document.body.style.overflow = "hidden") : (window.history.pushState({}, "", "/"), document.body.style.overflow = "")
    }
    return xe(() => {
        window.location.pathname === "/hat" && (s(0, l = !0), document.body.style.overflow = "hidden")
    }), tn(() => {
        l && window.location.pathname !== "/hat" ? window.history.pushState({}, "", "/hat") : !l && window.location.pathname === "/hat" && window.history.pushState({}, "", "/"), At.refreshHard()
    }), [l, a, u, v, f, t, w]
}
class Pn extends xo {
    constructor(o) {
        super(), Uo(this, o, _n, wn, Wo, {})
    }
}
new Pn({
    target: document.body
});