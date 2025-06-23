function bp(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in e)) {
                    const o = Object.getOwnPropertyDescriptor(r, i);
                    o && Object.defineProperty(e, i, o.get ? o : {
                        enumerable: !0,
                        get: () => r[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const o of i)
            if (o.type === "childList")
                for (const l of o.addedNodes)
                    l.tagName === "LINK" && l.rel === "modulepreload" && r(l)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity),
        i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
}
)();
function Kp(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var bc = {
    exports: {}
}
  , Io = {}
  , Kc = {
    exports: {}
}
  , V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var li = Symbol.for("react.element")
  , Vp = Symbol.for("react.portal")
  , Hp = Symbol.for("react.fragment")
  , Jp = Symbol.for("react.strict_mode")
  , Wp = Symbol.for("react.profiler")
  , Yp = Symbol.for("react.provider")
  , Xp = Symbol.for("react.context")
  , Gp = Symbol.for("react.forward_ref")
  , $p = Symbol.for("react.suspense")
  , Zp = Symbol.for("react.memo")
  , qp = Symbol.for("react.lazy")
  , Ws = Symbol.iterator;
function eh(e) {
    return e === null || typeof e != "object" ? null : (e = Ws && e[Ws] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Vc = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Hc = Object.assign
  , Jc = {};
function or(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Jc,
    this.updater = n || Vc
}
or.prototype.isReactComponent = {};
or.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
or.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Wc() {}
Wc.prototype = or.prototype;
function Ta(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Jc,
    this.updater = n || Vc
}
var Fa = Ta.prototype = new Wc;
Fa.constructor = Ta;
Hc(Fa, or.prototype);
Fa.isPureReactComponent = !0;
var Ys = Array.isArray
  , Yc = Object.prototype.hasOwnProperty
  , Ua = {
    current: null
}
  , Xc = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Gc(e, t, n) {
    var r, i = {}, o = null, l = null;
    if (t != null)
        for (r in t.ref !== void 0 && (l = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t)
            Yc.call(t, r) && !Xc.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        i.children = n;
    else if (1 < a) {
        for (var s = Array(a), u = 0; u < a; u++)
            s[u] = arguments[u + 2];
        i.children = s
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: li,
        type: e,
        key: o,
        ref: l,
        props: i,
        _owner: Ua.current
    }
}
function th(e, t) {
    return {
        $$typeof: li,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Ma(e) {
    return typeof e == "object" && e !== null && e.$$typeof === li
}
function nh(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Xs = /\/+/g;
function ol(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? nh("" + e.key) : t.toString(36)
}
function zi(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var l = !1;
    if (e === null)
        l = !0;
    else
        switch (o) {
        case "string":
        case "number":
            l = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case li:
            case Vp:
                l = !0
            }
        }
    if (l)
        return l = e,
        i = i(l),
        e = r === "" ? "." + ol(l, 0) : r,
        Ys(i) ? (n = "",
        e != null && (n = e.replace(Xs, "$&/") + "/"),
        zi(i, t, n, "", function(u) {
            return u
        })) : i != null && (Ma(i) && (i = th(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(Xs, "$&/") + "/") + e)),
        t.push(i)),
        1;
    if (l = 0,
    r = r === "" ? "." : r + ":",
    Ys(e))
        for (var a = 0; a < e.length; a++) {
            o = e[a];
            var s = r + ol(o, a);
            l += zi(o, t, n, s, i)
        }
    else if (s = eh(e),
    typeof s == "function")
        for (e = s.call(e),
        a = 0; !(o = e.next()).done; )
            o = o.value,
            s = r + ol(o, a++),
            l += zi(o, t, n, s, i);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return l
}
function yi(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return zi(e, r, "", "", function(o) {
        return t.call(n, o, i++)
    }),
    r
}
function rh(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Fe = {
    current: null
}
  , Qi = {
    transition: null
}
  , ih = {
    ReactCurrentDispatcher: Fe,
    ReactCurrentBatchConfig: Qi,
    ReactCurrentOwner: Ua
};
V.Children = {
    map: yi,
    forEach: function(e, t, n) {
        yi(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return yi(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return yi(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Ma(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
V.Component = or;
V.Fragment = Hp;
V.Profiler = Wp;
V.PureComponent = Ta;
V.StrictMode = Jp;
V.Suspense = $p;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ih;
V.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Hc({}, e.props)
      , i = e.key
      , o = e.ref
      , l = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
        l = Ua.current),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (s in t)
            Yc.call(t, s) && !Xc.hasOwnProperty(s) && (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s])
    }
    var s = arguments.length - 2;
    if (s === 1)
        r.children = n;
    else if (1 < s) {
        a = Array(s);
        for (var u = 0; u < s; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: li,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: l
    }
}
;
V.createContext = function(e) {
    return e = {
        $$typeof: Xp,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Yp,
        _context: e
    },
    e.Consumer = e
}
;
V.createElement = Gc;
V.createFactory = function(e) {
    var t = Gc.bind(null, e);
    return t.type = e,
    t
}
;
V.createRef = function() {
    return {
        current: null
    }
}
;
V.forwardRef = function(e) {
    return {
        $$typeof: Gp,
        render: e
    }
}
;
V.isValidElement = Ma;
V.lazy = function(e) {
    return {
        $$typeof: qp,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: rh
    }
}
;
V.memo = function(e, t) {
    return {
        $$typeof: Zp,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
V.startTransition = function(e) {
    var t = Qi.transition;
    Qi.transition = {};
    try {
        e()
    } finally {
        Qi.transition = t
    }
}
;
V.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
}
;
V.useCallback = function(e, t) {
    return Fe.current.useCallback(e, t)
}
;
V.useContext = function(e) {
    return Fe.current.useContext(e)
}
;
V.useDebugValue = function() {}
;
V.useDeferredValue = function(e) {
    return Fe.current.useDeferredValue(e)
}
;
V.useEffect = function(e, t) {
    return Fe.current.useEffect(e, t)
}
;
V.useId = function() {
    return Fe.current.useId()
}
;
V.useImperativeHandle = function(e, t, n) {
    return Fe.current.useImperativeHandle(e, t, n)
}
;
V.useInsertionEffect = function(e, t) {
    return Fe.current.useInsertionEffect(e, t)
}
;
V.useLayoutEffect = function(e, t) {
    return Fe.current.useLayoutEffect(e, t)
}
;
V.useMemo = function(e, t) {
    return Fe.current.useMemo(e, t)
}
;
V.useReducer = function(e, t, n) {
    return Fe.current.useReducer(e, t, n)
}
;
V.useRef = function(e) {
    return Fe.current.useRef(e)
}
;
V.useState = function(e) {
    return Fe.current.useState(e)
}
;
V.useSyncExternalStore = function(e, t, n) {
    return Fe.current.useSyncExternalStore(e, t, n)
}
;
V.useTransition = function() {
    return Fe.current.useTransition()
}
;
V.version = "18.2.0";
Kc.exports = V;
var O = Kc.exports;
const Kn = Kp(O)
  , oh = bp({
    __proto__: null,
    default: Kn
}, [O]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lh = O
  , ah = Symbol.for("react.element")
  , sh = Symbol.for("react.fragment")
  , uh = Object.prototype.hasOwnProperty
  , ch = lh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , fh = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function $c(e, t, n) {
    var r, i = {}, o = null, l = null;
    n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
    for (r in t)
        uh.call(t, r) && !fh.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: ah,
        type: e,
        key: o,
        ref: l,
        props: i,
        _owner: ch.current
    }
}
Io.Fragment = sh;
Io.jsx = $c;
Io.jsxs = $c;
bc.exports = Io;
var x = bc.exports
  , Fl = {}
  , Zc = {
    exports: {}
}
  , Xe = {}
  , qc = {
    exports: {}
}
  , ef = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(L, F) {
        var M = L.length;
        L.push(F);
        e: for (; 0 < M; ) {
            var ie = M - 1 >>> 1
              , de = L[ie];
            if (0 < i(de, F))
                L[ie] = F,
                L[M] = de,
                M = ie;
            else
                break e
        }
    }
    function n(L) {
        return L.length === 0 ? null : L[0]
    }
    function r(L) {
        if (L.length === 0)
            return null;
        var F = L[0]
          , M = L.pop();
        if (M !== F) {
            L[0] = M;
            e: for (var ie = 0, de = L.length, En = de >>> 1; ie < En; ) {
                var $ = 2 * (ie + 1) - 1
                  , wt = L[$]
                  , pt = $ + 1
                  , Cn = L[pt];
                if (0 > i(wt, M))
                    pt < de && 0 > i(Cn, wt) ? (L[ie] = Cn,
                    L[pt] = M,
                    ie = pt) : (L[ie] = wt,
                    L[$] = M,
                    ie = $);
                else if (pt < de && 0 > i(Cn, M))
                    L[ie] = Cn,
                    L[pt] = M,
                    ie = pt;
                else
                    break e
            }
        }
        return F
    }
    function i(L, F) {
        var M = L.sortIndex - F.sortIndex;
        return M !== 0 ? M : L.id - F.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var l = Date
          , a = l.now();
        e.unstable_now = function() {
            return l.now() - a
        }
    }
    var s = []
      , u = []
      , f = 1
      , p = null
      , c = 3
      , v = !1
      , A = !1
      , y = !1
      , R = typeof setTimeout == "function" ? setTimeout : null
      , g = typeof clearTimeout == "function" ? clearTimeout : null
      , h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(L) {
        for (var F = n(u); F !== null; ) {
            if (F.callback === null)
                r(u);
            else if (F.startTime <= L)
                r(u),
                F.sortIndex = F.expirationTime,
                t(s, F);
            else
                break;
            F = n(u)
        }
    }
    function d(L) {
        if (y = !1,
        m(L),
        !A)
            if (n(s) !== null)
                A = !0,
                Pe(E);
            else {
                var F = n(u);
                F !== null && te(d, F.startTime - L)
            }
    }
    function E(L, F) {
        A = !1,
        y && (y = !1,
        g(I),
        I = -1),
        v = !0;
        var M = c;
        try {
            for (m(F),
            p = n(s); p !== null && (!(p.expirationTime > F) || L && !ge()); ) {
                var ie = p.callback;
                if (typeof ie == "function") {
                    p.callback = null,
                    c = p.priorityLevel;
                    var de = ie(p.expirationTime <= F);
                    F = e.unstable_now(),
                    typeof de == "function" ? p.callback = de : p === n(s) && r(s),
                    m(F)
                } else
                    r(s);
                p = n(s)
            }
            if (p !== null)
                var En = !0;
            else {
                var $ = n(u);
                $ !== null && te(d, $.startTime - F),
                En = !1
            }
            return En
        } finally {
            p = null,
            c = M,
            v = !1
        }
    }
    var N = !1
      , C = null
      , I = -1
      , b = 5
      , T = -1;
    function ge() {
        return !(e.unstable_now() - T < b)
    }
    function W() {
        if (C !== null) {
            var L = e.unstable_now();
            T = L;
            var F = !0;
            try {
                F = C(!0, L)
            } finally {
                F ? Ne() : (N = !1,
                C = null)
            }
        } else
            N = !1
    }
    var Ne;
    if (typeof h == "function")
        Ne = function() {
            h(W)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var Me = new MessageChannel
          , Ve = Me.port2;
        Me.port1.onmessage = W,
        Ne = function() {
            Ve.postMessage(null)
        }
    } else
        Ne = function() {
            R(W, 0)
        }
        ;
    function Pe(L) {
        C = L,
        N || (N = !0,
        Ne())
    }
    function te(L, F) {
        I = R(function() {
            L(e.unstable_now())
        }, F)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(L) {
        L.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        A || v || (A = !0,
        Pe(E))
    }
    ,
    e.unstable_forceFrameRate = function(L) {
        0 > L || 125 < L ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : b = 0 < L ? Math.floor(1e3 / L) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return c
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(s)
    }
    ,
    e.unstable_next = function(L) {
        switch (c) {
        case 1:
        case 2:
        case 3:
            var F = 3;
            break;
        default:
            F = c
        }
        var M = c;
        c = F;
        try {
            return L()
        } finally {
            c = M
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(L, F) {
        switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            L = 3
        }
        var M = c;
        c = L;
        try {
            return F()
        } finally {
            c = M
        }
    }
    ,
    e.unstable_scheduleCallback = function(L, F, M) {
        var ie = e.unstable_now();
        switch (typeof M == "object" && M !== null ? (M = M.delay,
        M = typeof M == "number" && 0 < M ? ie + M : ie) : M = ie,
        L) {
        case 1:
            var de = -1;
            break;
        case 2:
            de = 250;
            break;
        case 5:
            de = 1073741823;
            break;
        case 4:
            de = 1e4;
            break;
        default:
            de = 5e3
        }
        return de = M + de,
        L = {
            id: f++,
            callback: F,
            priorityLevel: L,
            startTime: M,
            expirationTime: de,
            sortIndex: -1
        },
        M > ie ? (L.sortIndex = M,
        t(u, L),
        n(s) === null && L === n(u) && (y ? (g(I),
        I = -1) : y = !0,
        te(d, M - ie))) : (L.sortIndex = de,
        t(s, L),
        A || v || (A = !0,
        Pe(E))),
        L
    }
    ,
    e.unstable_shouldYield = ge,
    e.unstable_wrapCallback = function(L) {
        var F = c;
        return function() {
            var M = c;
            c = F;
            try {
                return L.apply(this, arguments)
            } finally {
                c = M
            }
        }
    }
}
)(ef);
qc.exports = ef;
var dh = qc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tf = O
  , Ye = dh;
function P(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var nf = new Set
  , Qr = {};
function Sn(e, t) {
    $n(e, t),
    $n(e + "Capture", t)
}
function $n(e, t) {
    for (Qr[e] = t,
    e = 0; e < t.length; e++)
        nf.add(t[e])
}
var Pt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Ul = Object.prototype.hasOwnProperty
  , ph = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Gs = {}
  , $s = {};
function hh(e) {
    return Ul.call($s, e) ? !0 : Ul.call(Gs, e) ? !1 : ph.test(e) ? $s[e] = !0 : (Gs[e] = !0,
    !1)
}
function gh(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function mh(e, t, n, r) {
    if (t === null || typeof t > "u" || gh(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Ue(e, t, n, r, i, o, l) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = l
}
var Re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Re[e] = new Ue(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Re[t] = new Ue(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Re[e] = new Ue(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Re[e] = new Ue(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Re[e] = new Ue(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Re[e] = new Ue(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Re[e] = new Ue(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Re[e] = new Ue(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Re[e] = new Ue(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var za = /[\-:]([a-z])/g;
function Qa(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(za, Qa);
    Re[t] = new Ue(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(za, Qa);
    Re[t] = new Ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(za, Qa);
    Re[t] = new Ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Re[e] = new Ue(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Re.xlinkHref = new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Re[e] = new Ue(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function _a(e, t, n, r) {
    var i = Re.hasOwnProperty(t) ? Re[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (mh(t, n, i, r) && (n = null),
    r || i === null ? hh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var jt = tf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , wi = Symbol.for("react.element")
  , Ln = Symbol.for("react.portal")
  , In = Symbol.for("react.fragment")
  , ba = Symbol.for("react.strict_mode")
  , Ml = Symbol.for("react.profiler")
  , rf = Symbol.for("react.provider")
  , of = Symbol.for("react.context")
  , Ka = Symbol.for("react.forward_ref")
  , zl = Symbol.for("react.suspense")
  , Ql = Symbol.for("react.suspense_list")
  , Va = Symbol.for("react.memo")
  , Mt = Symbol.for("react.lazy")
  , lf = Symbol.for("react.offscreen")
  , Zs = Symbol.iterator;
function fr(e) {
    return e === null || typeof e != "object" ? null : (e = Zs && e[Zs] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var ae = Object.assign, ll;
function Rr(e) {
    if (ll === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            ll = t && t[1] || ""
        }
    return `
` + ll + e
}
var al = !1;
function sl(e, t) {
    if (!e || al)
        return "";
    al = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), o = r.stack.split(`
`), l = i.length - 1, a = o.length - 1; 1 <= l && 0 <= a && i[l] !== o[a]; )
                a--;
            for (; 1 <= l && 0 <= a; l--,
            a--)
                if (i[l] !== o[a]) {
                    if (l !== 1 || a !== 1)
                        do
                            if (l--,
                            a--,
                            0 > a || i[l] !== o[a]) {
                                var s = `
` + i[l].replace(" at new ", " at ");
                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)),
                                s
                            }
                        while (1 <= l && 0 <= a);
                    break
                }
        }
    } finally {
        al = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Rr(e) : ""
}
function Ah(e) {
    switch (e.tag) {
    case 5:
        return Rr(e.type);
    case 16:
        return Rr("Lazy");
    case 13:
        return Rr("Suspense");
    case 19:
        return Rr("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = sl(e.type, !1),
        e;
    case 11:
        return e = sl(e.type.render, !1),
        e;
    case 1:
        return e = sl(e.type, !0),
        e;
    default:
        return ""
    }
}
function _l(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case In:
        return "Fragment";
    case Ln:
        return "Portal";
    case Ml:
        return "Profiler";
    case ba:
        return "StrictMode";
    case zl:
        return "Suspense";
    case Ql:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case of:
            return (e.displayName || "Context") + ".Consumer";
        case rf:
            return (e._context.displayName || "Context") + ".Provider";
        case Ka:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Va:
            return t = e.displayName || null,
            t !== null ? t : _l(e.type) || "Memo";
        case Mt:
            t = e._payload,
            e = e._init;
            try {
                return _l(e(t))
            } catch {}
        }
    return null
}
function vh(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return _l(t);
    case 8:
        return t === ba ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function qt(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function af(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function yh(e) {
    var t = af(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(l) {
                r = "" + l,
                o.call(this, l)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(l) {
                r = "" + l
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Si(e) {
    e._valueTracker || (e._valueTracker = yh(e))
}
function sf(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = af(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function $i(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function bl(e, t) {
    var n = t.checked;
    return ae({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function qs(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = qt(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function uf(e, t) {
    t = t.checked,
    t != null && _a(e, "checked", t, !1)
}
function Kl(e, t) {
    uf(e, t);
    var n = qt(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Vl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Vl(e, t.type, qt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function eu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Vl(e, t, n) {
    (t !== "number" || $i(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Nr = Array.isArray;
function Vn(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + qt(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function Hl(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(P(91));
    return ae({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function tu(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(P(92));
            if (Nr(n)) {
                if (1 < n.length)
                    throw Error(P(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: qt(n)
    }
}
function cf(e, t) {
    var n = qt(t.value)
      , r = qt(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function nu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function ff(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Jl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? ff(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var xi, df = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (xi = xi || document.createElement("div"),
        xi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = xi.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function _r(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Ir = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , wh = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ir).forEach(function(e) {
    wh.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Ir[t] = Ir[e]
    })
});
function pf(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ir.hasOwnProperty(e) && Ir[e] ? ("" + t).trim() : t + "px"
}
function hf(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = pf(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var Sh = ae({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Wl(e, t) {
    if (t) {
        if (Sh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(P(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(P(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(P(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(P(62))
    }
}
function Yl(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Xl = null;
function Ha(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Gl = null
  , Hn = null
  , Jn = null;
function ru(e) {
    if (e = ui(e)) {
        if (typeof Gl != "function")
            throw Error(P(280));
        var t = e.stateNode;
        t && (t = To(t),
        Gl(e.stateNode, e.type, t))
    }
}
function gf(e) {
    Hn ? Jn ? Jn.push(e) : Jn = [e] : Hn = e
}
function mf() {
    if (Hn) {
        var e = Hn
          , t = Jn;
        if (Jn = Hn = null,
        ru(e),
        t)
            for (e = 0; e < t.length; e++)
                ru(t[e])
    }
}
function Af(e, t) {
    return e(t)
}
function vf() {}
var ul = !1;
function yf(e, t, n) {
    if (ul)
        return e(t, n);
    ul = !0;
    try {
        return Af(e, t, n)
    } finally {
        ul = !1,
        (Hn !== null || Jn !== null) && (vf(),
        mf())
    }
}
function br(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = To(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(P(231, t, typeof n));
    return n
}
var $l = !1;
if (Pt)
    try {
        var dr = {};
        Object.defineProperty(dr, "passive", {
            get: function() {
                $l = !0
            }
        }),
        window.addEventListener("test", dr, dr),
        window.removeEventListener("test", dr, dr)
    } catch {
        $l = !1
    }
function xh(e, t, n, r, i, o, l, a, s) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (f) {
        this.onError(f)
    }
}
var Or = !1
  , Zi = null
  , qi = !1
  , Zl = null
  , Eh = {
    onError: function(e) {
        Or = !0,
        Zi = e
    }
};
function Ch(e, t, n, r, i, o, l, a, s) {
    Or = !1,
    Zi = null,
    xh.apply(Eh, arguments)
}
function kh(e, t, n, r, i, o, l, a, s) {
    if (Ch.apply(this, arguments),
    Or) {
        if (Or) {
            var u = Zi;
            Or = !1,
            Zi = null
        } else
            throw Error(P(198));
        qi || (qi = !0,
        Zl = u)
    }
}
function xn(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function wf(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function iu(e) {
    if (xn(e) !== e)
        throw Error(P(188))
}
function Rh(e) {
    var t = e.alternate;
    if (!t) {
        if (t = xn(e),
        t === null)
            throw Error(P(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o; ) {
                if (o === n)
                    return iu(i),
                    e;
                if (o === r)
                    return iu(i),
                    t;
                o = o.sibling
            }
            throw Error(P(188))
        }
        if (n.return !== r.return)
            n = i,
            r = o;
        else {
            for (var l = !1, a = i.child; a; ) {
                if (a === n) {
                    l = !0,
                    n = i,
                    r = o;
                    break
                }
                if (a === r) {
                    l = !0,
                    r = i,
                    n = o;
                    break
                }
                a = a.sibling
            }
            if (!l) {
                for (a = o.child; a; ) {
                    if (a === n) {
                        l = !0,
                        n = o,
                        r = i;
                        break
                    }
                    if (a === r) {
                        l = !0,
                        r = o,
                        n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!l)
                    throw Error(P(189))
            }
        }
        if (n.alternate !== r)
            throw Error(P(190))
    }
    if (n.tag !== 3)
        throw Error(P(188));
    return n.stateNode.current === n ? e : t
}
function Sf(e) {
    return e = Rh(e),
    e !== null ? xf(e) : null
}
function xf(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = xf(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Ef = Ye.unstable_scheduleCallback
  , ou = Ye.unstable_cancelCallback
  , Nh = Ye.unstable_shouldYield
  , Ph = Ye.unstable_requestPaint
  , fe = Ye.unstable_now
  , Lh = Ye.unstable_getCurrentPriorityLevel
  , Ja = Ye.unstable_ImmediatePriority
  , Cf = Ye.unstable_UserBlockingPriority
  , eo = Ye.unstable_NormalPriority
  , Ih = Ye.unstable_LowPriority
  , kf = Ye.unstable_IdlePriority
  , Oo = null
  , vt = null;
function Oh(e) {
    if (vt && typeof vt.onCommitFiberRoot == "function")
        try {
            vt.onCommitFiberRoot(Oo, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var ct = Math.clz32 ? Math.clz32 : Bh
  , jh = Math.log
  , Dh = Math.LN2;
function Bh(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (jh(e) / Dh | 0) | 0
}
var Ei = 64
  , Ci = 4194304;
function Pr(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function to(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , o = e.pingedLanes
      , l = n & 268435455;
    if (l !== 0) {
        var a = l & ~i;
        a !== 0 ? r = Pr(a) : (o &= l,
        o !== 0 && (r = Pr(o)))
    } else
        l = n & ~i,
        l !== 0 ? r = Pr(l) : o !== 0 && (r = Pr(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    o = t & -t,
    i >= o || i === 16 && (o & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - ct(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function Th(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function Fh(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var l = 31 - ct(o)
          , a = 1 << l
          , s = i[l];
        s === -1 ? (!(a & n) || a & r) && (i[l] = Th(a, t)) : s <= t && (e.expiredLanes |= a),
        o &= ~a
    }
}
function ql(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Rf() {
    var e = Ei;
    return Ei <<= 1,
    !(Ei & 4194240) && (Ei = 64),
    e
}
function cl(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function ai(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - ct(t),
    e[t] = n
}
function Uh(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - ct(n)
          , o = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~o
    }
}
function Wa(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - ct(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var J = 0;
function Nf(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Pf, Ya, Lf, If, Of, ea = !1, ki = [], Vt = null, Ht = null, Jt = null, Kr = new Map, Vr = new Map, Qt = [], Mh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function lu(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Vt = null;
        break;
    case "dragenter":
    case "dragleave":
        Ht = null;
        break;
    case "mouseover":
    case "mouseout":
        Jt = null;
        break;
    case "pointerover":
    case "pointerout":
        Kr.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Vr.delete(t.pointerId)
    }
}
function pr(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    },
    t !== null && (t = ui(t),
    t !== null && Ya(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function zh(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return Vt = pr(Vt, e, t, n, r, i),
        !0;
    case "dragenter":
        return Ht = pr(Ht, e, t, n, r, i),
        !0;
    case "mouseover":
        return Jt = pr(Jt, e, t, n, r, i),
        !0;
    case "pointerover":
        var o = i.pointerId;
        return Kr.set(o, pr(Kr.get(o) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return o = i.pointerId,
        Vr.set(o, pr(Vr.get(o) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function jf(e) {
    var t = cn(e.target);
    if (t !== null) {
        var n = xn(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = wf(n),
                t !== null) {
                    e.blockedOn = t,
                    Of(e.priority, function() {
                        Lf(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function _i(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = ta(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Xl = r,
            n.target.dispatchEvent(r),
            Xl = null
        } else
            return t = ui(n),
            t !== null && Ya(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function au(e, t, n) {
    _i(e) && n.delete(t)
}
function Qh() {
    ea = !1,
    Vt !== null && _i(Vt) && (Vt = null),
    Ht !== null && _i(Ht) && (Ht = null),
    Jt !== null && _i(Jt) && (Jt = null),
    Kr.forEach(au),
    Vr.forEach(au)
}
function hr(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    ea || (ea = !0,
    Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority, Qh)))
}
function Hr(e) {
    function t(i) {
        return hr(i, e)
    }
    if (0 < ki.length) {
        hr(ki[0], e);
        for (var n = 1; n < ki.length; n++) {
            var r = ki[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Vt !== null && hr(Vt, e),
    Ht !== null && hr(Ht, e),
    Jt !== null && hr(Jt, e),
    Kr.forEach(t),
    Vr.forEach(t),
    n = 0; n < Qt.length; n++)
        r = Qt[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Qt.length && (n = Qt[0],
    n.blockedOn === null); )
        jf(n),
        n.blockedOn === null && Qt.shift()
}
var Wn = jt.ReactCurrentBatchConfig
  , no = !0;
function _h(e, t, n, r) {
    var i = J
      , o = Wn.transition;
    Wn.transition = null;
    try {
        J = 1,
        Xa(e, t, n, r)
    } finally {
        J = i,
        Wn.transition = o
    }
}
function bh(e, t, n, r) {
    var i = J
      , o = Wn.transition;
    Wn.transition = null;
    try {
        J = 4,
        Xa(e, t, n, r)
    } finally {
        J = i,
        Wn.transition = o
    }
}
function Xa(e, t, n, r) {
    if (no) {
        var i = ta(e, t, n, r);
        if (i === null)
            wl(e, t, r, ro, n),
            lu(e, r);
        else if (zh(i, e, t, n, r))
            r.stopPropagation();
        else if (lu(e, r),
        t & 4 && -1 < Mh.indexOf(e)) {
            for (; i !== null; ) {
                var o = ui(i);
                if (o !== null && Pf(o),
                o = ta(e, t, n, r),
                o === null && wl(e, t, r, ro, n),
                o === i)
                    break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else
            wl(e, t, r, null, n)
    }
}
var ro = null;
function ta(e, t, n, r) {
    if (ro = null,
    e = Ha(r),
    e = cn(e),
    e !== null)
        if (t = xn(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = wf(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return ro = e,
    null
}
function Df(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Lh()) {
        case Ja:
            return 1;
        case Cf:
            return 4;
        case eo:
        case Ih:
            return 16;
        case kf:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var bt = null
  , Ga = null
  , bi = null;
function Bf() {
    if (bi)
        return bi;
    var e, t = Ga, n = t.length, r, i = "value"in bt ? bt.value : bt.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var l = n - e;
    for (r = 1; r <= l && t[n - r] === i[o - r]; r++)
        ;
    return bi = i.slice(e, 1 < r ? 1 - r : void 0)
}
function Ki(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Ri() {
    return !0
}
function su() {
    return !1
}
function Ge(e) {
    function t(n, r, i, o, l) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = o,
        this.target = l,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(o) : o[a]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Ri : su,
        this.isPropagationStopped = su,
        this
    }
    return ae(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Ri)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Ri)
        },
        persist: function() {},
        isPersistent: Ri
    }),
    t
}
var lr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, $a = Ge(lr), si = ae({}, lr, {
    view: 0,
    detail: 0
}), Kh = Ge(si), fl, dl, gr, jo = ae({}, si, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Za,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== gr && (gr && e.type === "mousemove" ? (fl = e.screenX - gr.screenX,
        dl = e.screenY - gr.screenY) : dl = fl = 0,
        gr = e),
        fl)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : dl
    }
}), uu = Ge(jo), Vh = ae({}, jo, {
    dataTransfer: 0
}), Hh = Ge(Vh), Jh = ae({}, si, {
    relatedTarget: 0
}), pl = Ge(Jh), Wh = ae({}, lr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Yh = Ge(Wh), Xh = ae({}, lr, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Gh = Ge(Xh), $h = ae({}, lr, {
    data: 0
}), cu = Ge($h), Zh = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, qh = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, eg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function tg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = eg[e]) ? !!t[e] : !1
}
function Za() {
    return tg
}
var ng = ae({}, si, {
    key: function(e) {
        if (e.key) {
            var t = Zh[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Ki(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? qh[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Za,
    charCode: function(e) {
        return e.type === "keypress" ? Ki(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Ki(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , rg = Ge(ng)
  , ig = ae({}, jo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , fu = Ge(ig)
  , og = ae({}, si, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Za
})
  , lg = Ge(og)
  , ag = ae({}, lr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , sg = Ge(ag)
  , ug = ae({}, jo, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , cg = Ge(ug)
  , fg = [9, 13, 27, 32]
  , qa = Pt && "CompositionEvent"in window
  , jr = null;
Pt && "documentMode"in document && (jr = document.documentMode);
var dg = Pt && "TextEvent"in window && !jr
  , Tf = Pt && (!qa || jr && 8 < jr && 11 >= jr)
  , du = String.fromCharCode(32)
  , pu = !1;
function Ff(e, t) {
    switch (e) {
    case "keyup":
        return fg.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Uf(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var On = !1;
function pg(e, t) {
    switch (e) {
    case "compositionend":
        return Uf(t);
    case "keypress":
        return t.which !== 32 ? null : (pu = !0,
        du);
    case "textInput":
        return e = t.data,
        e === du && pu ? null : e;
    default:
        return null
    }
}
function hg(e, t) {
    if (On)
        return e === "compositionend" || !qa && Ff(e, t) ? (e = Bf(),
        bi = Ga = bt = null,
        On = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Tf && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var gg = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function hu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!gg[e.type] : t === "textarea"
}
function Mf(e, t, n, r) {
    gf(r),
    t = io(t, "onChange"),
    0 < t.length && (n = new $a("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Dr = null
  , Jr = null;
function mg(e) {
    Xf(e, 0)
}
function Do(e) {
    var t = Bn(e);
    if (sf(t))
        return e
}
function Ag(e, t) {
    if (e === "change")
        return t
}
var zf = !1;
if (Pt) {
    var hl;
    if (Pt) {
        var gl = "oninput"in document;
        if (!gl) {
            var gu = document.createElement("div");
            gu.setAttribute("oninput", "return;"),
            gl = typeof gu.oninput == "function"
        }
        hl = gl
    } else
        hl = !1;
    zf = hl && (!document.documentMode || 9 < document.documentMode)
}
function mu() {
    Dr && (Dr.detachEvent("onpropertychange", Qf),
    Jr = Dr = null)
}
function Qf(e) {
    if (e.propertyName === "value" && Do(Jr)) {
        var t = [];
        Mf(t, Jr, e, Ha(e)),
        yf(mg, t)
    }
}
function vg(e, t, n) {
    e === "focusin" ? (mu(),
    Dr = t,
    Jr = n,
    Dr.attachEvent("onpropertychange", Qf)) : e === "focusout" && mu()
}
function yg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Do(Jr)
}
function wg(e, t) {
    if (e === "click")
        return Do(t)
}
function Sg(e, t) {
    if (e === "input" || e === "change")
        return Do(t)
}
function xg(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var dt = typeof Object.is == "function" ? Object.is : xg;
function Wr(e, t) {
    if (dt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Ul.call(t, i) || !dt(e[i], t[i]))
            return !1
    }
    return !0
}
function Au(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function vu(e, t) {
    var n = Au(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Au(n)
    }
}
function _f(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? _f(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function bf() {
    for (var e = window, t = $i(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = $i(e.document)
    }
    return t
}
function es(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function Eg(e) {
    var t = bf()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && _f(n.ownerDocument.documentElement, n)) {
        if (r !== null && es(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i),
                !e.extend && o > r && (i = r,
                r = o,
                o = i),
                i = vu(n, o);
                var l = vu(n, r);
                i && l && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                o > r ? (e.addRange(t),
                e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Cg = Pt && "documentMode"in document && 11 >= document.documentMode
  , jn = null
  , na = null
  , Br = null
  , ra = !1;
function yu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ra || jn == null || jn !== $i(r) || (r = jn,
    "selectionStart"in r && es(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Br && Wr(Br, r) || (Br = r,
    r = io(na, "onSelect"),
    0 < r.length && (t = new $a("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = jn)))
}
function Ni(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Dn = {
    animationend: Ni("Animation", "AnimationEnd"),
    animationiteration: Ni("Animation", "AnimationIteration"),
    animationstart: Ni("Animation", "AnimationStart"),
    transitionend: Ni("Transition", "TransitionEnd")
}
  , ml = {}
  , Kf = {};
Pt && (Kf = document.createElement("div").style,
"AnimationEvent"in window || (delete Dn.animationend.animation,
delete Dn.animationiteration.animation,
delete Dn.animationstart.animation),
"TransitionEvent"in window || delete Dn.transitionend.transition);
function Bo(e) {
    if (ml[e])
        return ml[e];
    if (!Dn[e])
        return e;
    var t = Dn[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Kf)
            return ml[e] = t[n];
    return e
}
var Vf = Bo("animationend")
  , Hf = Bo("animationiteration")
  , Jf = Bo("animationstart")
  , Wf = Bo("transitionend")
  , Yf = new Map
  , wu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function tn(e, t) {
    Yf.set(e, t),
    Sn(t, [e])
}
for (var Al = 0; Al < wu.length; Al++) {
    var vl = wu[Al]
      , kg = vl.toLowerCase()
      , Rg = vl[0].toUpperCase() + vl.slice(1);
    tn(kg, "on" + Rg)
}
tn(Vf, "onAnimationEnd");
tn(Hf, "onAnimationIteration");
tn(Jf, "onAnimationStart");
tn("dblclick", "onDoubleClick");
tn("focusin", "onFocus");
tn("focusout", "onBlur");
tn(Wf, "onTransitionEnd");
$n("onMouseEnter", ["mouseout", "mouseover"]);
$n("onMouseLeave", ["mouseout", "mouseover"]);
$n("onPointerEnter", ["pointerout", "pointerover"]);
$n("onPointerLeave", ["pointerout", "pointerover"]);
Sn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Sn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Sn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Sn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Sn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Sn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Lr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Ng = new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));
function Su(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    kh(r, t, void 0, e),
    e.currentTarget = null
}
function Xf(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                    var a = r[l]
                      , s = a.instance
                      , u = a.currentTarget;
                    if (a = a.listener,
                    s !== o && i.isPropagationStopped())
                        break e;
                    Su(i, a, u),
                    o = s
                }
            else
                for (l = 0; l < r.length; l++) {
                    if (a = r[l],
                    s = a.instance,
                    u = a.currentTarget,
                    a = a.listener,
                    s !== o && i.isPropagationStopped())
                        break e;
                    Su(i, a, u),
                    o = s
                }
        }
    }
    if (qi)
        throw e = Zl,
        qi = !1,
        Zl = null,
        e
}
function q(e, t) {
    var n = t[sa];
    n === void 0 && (n = t[sa] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Gf(t, e, 2, !1),
    n.add(r))
}
function yl(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Gf(n, e, r, t)
}
var Pi = "_reactListening" + Math.random().toString(36).slice(2);
function Yr(e) {
    if (!e[Pi]) {
        e[Pi] = !0,
        nf.forEach(function(n) {
            n !== "selectionchange" && (Ng.has(n) || yl(n, !1, e),
            yl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Pi] || (t[Pi] = !0,
        yl("selectionchange", !1, t))
    }
}
function Gf(e, t, n, r) {
    switch (Df(t)) {
    case 1:
        var i = _h;
        break;
    case 4:
        i = bh;
        break;
    default:
        i = Xa
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !$l || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function wl(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var l = r.tag;
            if (l === 3 || l === 4) {
                var a = r.stateNode.containerInfo;
                if (a === i || a.nodeType === 8 && a.parentNode === i)
                    break;
                if (l === 4)
                    for (l = r.return; l !== null; ) {
                        var s = l.tag;
                        if ((s === 3 || s === 4) && (s = l.stateNode.containerInfo,
                        s === i || s.nodeType === 8 && s.parentNode === i))
                            return;
                        l = l.return
                    }
                for (; a !== null; ) {
                    if (l = cn(a),
                    l === null)
                        return;
                    if (s = l.tag,
                    s === 5 || s === 6) {
                        r = o = l;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    yf(function() {
        var u = o
          , f = Ha(n)
          , p = [];
        e: {
            var c = Yf.get(e);
            if (c !== void 0) {
                var v = $a
                  , A = e;
                switch (e) {
                case "keypress":
                    if (Ki(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    v = rg;
                    break;
                case "focusin":
                    A = "focus",
                    v = pl;
                    break;
                case "focusout":
                    A = "blur",
                    v = pl;
                    break;
                case "beforeblur":
                case "afterblur":
                    v = pl;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    v = uu;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    v = Hh;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    v = lg;
                    break;
                case Vf:
                case Hf:
                case Jf:
                    v = Yh;
                    break;
                case Wf:
                    v = sg;
                    break;
                case "scroll":
                    v = Kh;
                    break;
                case "wheel":
                    v = cg;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    v = Gh;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    v = fu
                }
                var y = (t & 4) !== 0
                  , R = !y && e === "scroll"
                  , g = y ? c !== null ? c + "Capture" : null : c;
                y = [];
                for (var h = u, m; h !== null; ) {
                    m = h;
                    var d = m.stateNode;
                    if (m.tag === 5 && d !== null && (m = d,
                    g !== null && (d = br(h, g),
                    d != null && y.push(Xr(h, d, m)))),
                    R)
                        break;
                    h = h.return
                }
                0 < y.length && (c = new v(c,A,null,n,f),
                p.push({
                    event: c,
                    listeners: y
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (c = e === "mouseover" || e === "pointerover",
                v = e === "mouseout" || e === "pointerout",
                c && n !== Xl && (A = n.relatedTarget || n.fromElement) && (cn(A) || A[Lt]))
                    break e;
                if ((v || c) && (c = f.window === f ? f : (c = f.ownerDocument) ? c.defaultView || c.parentWindow : window,
                v ? (A = n.relatedTarget || n.toElement,
                v = u,
                A = A ? cn(A) : null,
                A !== null && (R = xn(A),
                A !== R || A.tag !== 5 && A.tag !== 6) && (A = null)) : (v = null,
                A = u),
                v !== A)) {
                    if (y = uu,
                    d = "onMouseLeave",
                    g = "onMouseEnter",
                    h = "mouse",
                    (e === "pointerout" || e === "pointerover") && (y = fu,
                    d = "onPointerLeave",
                    g = "onPointerEnter",
                    h = "pointer"),
                    R = v == null ? c : Bn(v),
                    m = A == null ? c : Bn(A),
                    c = new y(d,h + "leave",v,n,f),
                    c.target = R,
                    c.relatedTarget = m,
                    d = null,
                    cn(f) === u && (y = new y(g,h + "enter",A,n,f),
                    y.target = m,
                    y.relatedTarget = R,
                    d = y),
                    R = d,
                    v && A)
                        t: {
                            for (y = v,
                            g = A,
                            h = 0,
                            m = y; m; m = kn(m))
                                h++;
                            for (m = 0,
                            d = g; d; d = kn(d))
                                m++;
                            for (; 0 < h - m; )
                                y = kn(y),
                                h--;
                            for (; 0 < m - h; )
                                g = kn(g),
                                m--;
                            for (; h--; ) {
                                if (y === g || g !== null && y === g.alternate)
                                    break t;
                                y = kn(y),
                                g = kn(g)
                            }
                            y = null
                        }
                    else
                        y = null;
                    v !== null && xu(p, c, v, y, !1),
                    A !== null && R !== null && xu(p, R, A, y, !0)
                }
            }
            e: {
                if (c = u ? Bn(u) : window,
                v = c.nodeName && c.nodeName.toLowerCase(),
                v === "select" || v === "input" && c.type === "file")
                    var E = Ag;
                else if (hu(c))
                    if (zf)
                        E = Sg;
                    else {
                        E = yg;
                        var N = vg
                    }
                else
                    (v = c.nodeName) && v.toLowerCase() === "input" && (c.type === "checkbox" || c.type === "radio") && (E = wg);
                if (E && (E = E(e, u))) {
                    Mf(p, E, n, f);
                    break e
                }
                N && N(e, c, u),
                e === "focusout" && (N = c._wrapperState) && N.controlled && c.type === "number" && Vl(c, "number", c.value)
            }
            switch (N = u ? Bn(u) : window,
            e) {
            case "focusin":
                (hu(N) || N.contentEditable === "true") && (jn = N,
                na = u,
                Br = null);
                break;
            case "focusout":
                Br = na = jn = null;
                break;
            case "mousedown":
                ra = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                ra = !1,
                yu(p, n, f);
                break;
            case "selectionchange":
                if (Cg)
                    break;
            case "keydown":
            case "keyup":
                yu(p, n, f)
            }
            var C;
            if (qa)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var I = "onCompositionStart";
                        break e;
                    case "compositionend":
                        I = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        I = "onCompositionUpdate";
                        break e
                    }
                    I = void 0
                }
            else
                On ? Ff(e, n) && (I = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (I = "onCompositionStart");
            I && (Tf && n.locale !== "ko" && (On || I !== "onCompositionStart" ? I === "onCompositionEnd" && On && (C = Bf()) : (bt = f,
            Ga = "value"in bt ? bt.value : bt.textContent,
            On = !0)),
            N = io(u, I),
            0 < N.length && (I = new cu(I,e,null,n,f),
            p.push({
                event: I,
                listeners: N
            }),
            C ? I.data = C : (C = Uf(n),
            C !== null && (I.data = C)))),
            (C = dg ? pg(e, n) : hg(e, n)) && (u = io(u, "onBeforeInput"),
            0 < u.length && (f = new cu("onBeforeInput","beforeinput",null,n,f),
            p.push({
                event: f,
                listeners: u
            }),
            f.data = C))
        }
        Xf(p, t)
    })
}
function Xr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function io(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , o = i.stateNode;
        i.tag === 5 && o !== null && (i = o,
        o = br(e, n),
        o != null && r.unshift(Xr(e, o, i)),
        o = br(e, t),
        o != null && r.push(Xr(e, o, i))),
        e = e.return
    }
    return r
}
function kn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function xu(e, t, n, r, i) {
    for (var o = t._reactName, l = []; n !== null && n !== r; ) {
        var a = n
          , s = a.alternate
          , u = a.stateNode;
        if (s !== null && s === r)
            break;
        a.tag === 5 && u !== null && (a = u,
        i ? (s = br(n, o),
        s != null && l.unshift(Xr(n, s, a))) : i || (s = br(n, o),
        s != null && l.push(Xr(n, s, a)))),
        n = n.return
    }
    l.length !== 0 && e.push({
        event: t,
        listeners: l
    })
}
var Pg = /\r\n?/g
  , Lg = /\u0000|\uFFFD/g;
function Eu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Pg, `
`).replace(Lg, "")
}
function Li(e, t, n) {
    if (t = Eu(t),
    Eu(e) !== t && n)
        throw Error(P(425))
}
function oo() {}
var ia = null
  , oa = null;
function la(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var aa = typeof setTimeout == "function" ? setTimeout : void 0
  , Ig = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Cu = typeof Promise == "function" ? Promise : void 0
  , Og = typeof queueMicrotask == "function" ? queueMicrotask : typeof Cu < "u" ? function(e) {
    return Cu.resolve(null).then(e).catch(jg)
}
: aa;
function jg(e) {
    setTimeout(function() {
        throw e
    })
}
function Sl(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    Hr(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    Hr(t)
}
function Wt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function ku(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var ar = Math.random().toString(36).slice(2)
  , mt = "__reactFiber$" + ar
  , Gr = "__reactProps$" + ar
  , Lt = "__reactContainer$" + ar
  , sa = "__reactEvents$" + ar
  , Dg = "__reactListeners$" + ar
  , Bg = "__reactHandles$" + ar;
function cn(e) {
    var t = e[mt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Lt] || n[mt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = ku(e); e !== null; ) {
                    if (n = e[mt])
                        return n;
                    e = ku(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function ui(e) {
    return e = e[mt] || e[Lt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Bn(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(P(33))
}
function To(e) {
    return e[Gr] || null
}
var ua = []
  , Tn = -1;
function nn(e) {
    return {
        current: e
    }
}
function ee(e) {
    0 > Tn || (e.current = ua[Tn],
    ua[Tn] = null,
    Tn--)
}
function Z(e, t) {
    Tn++,
    ua[Tn] = e.current,
    e.current = t
}
var en = {}
  , je = nn(en)
  , _e = nn(!1)
  , mn = en;
function Zn(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return en;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, o;
    for (o in n)
        i[o] = t[o];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function be(e) {
    return e = e.childContextTypes,
    e != null
}
function lo() {
    ee(_e),
    ee(je)
}
function Ru(e, t, n) {
    if (je.current !== en)
        throw Error(P(168));
    Z(je, t),
    Z(_e, n)
}
function $f(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(P(108, vh(e) || "Unknown", i));
    return ae({}, n, r)
}
function ao(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || en,
    mn = je.current,
    Z(je, e),
    Z(_e, _e.current),
    !0
}
function Nu(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(P(169));
    n ? (e = $f(e, t, mn),
    r.__reactInternalMemoizedMergedChildContext = e,
    ee(_e),
    ee(je),
    Z(je, e)) : ee(_e),
    Z(_e, n)
}
var Ct = null
  , Fo = !1
  , xl = !1;
function Zf(e) {
    Ct === null ? Ct = [e] : Ct.push(e)
}
function Tg(e) {
    Fo = !0,
    Zf(e)
}
function rn() {
    if (!xl && Ct !== null) {
        xl = !0;
        var e = 0
          , t = J;
        try {
            var n = Ct;
            for (J = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Ct = null,
            Fo = !1
        } catch (i) {
            throw Ct !== null && (Ct = Ct.slice(e + 1)),
            Ef(Ja, rn),
            i
        } finally {
            J = t,
            xl = !1
        }
    }
    return null
}
var Fn = []
  , Un = 0
  , so = null
  , uo = 0
  , Ze = []
  , qe = 0
  , An = null
  , kt = 1
  , Rt = "";
function sn(e, t) {
    Fn[Un++] = uo,
    Fn[Un++] = so,
    so = e,
    uo = t
}
function qf(e, t, n) {
    Ze[qe++] = kt,
    Ze[qe++] = Rt,
    Ze[qe++] = An,
    An = e;
    var r = kt;
    e = Rt;
    var i = 32 - ct(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var o = 32 - ct(t) + i;
    if (30 < o) {
        var l = i - i % 5;
        o = (r & (1 << l) - 1).toString(32),
        r >>= l,
        i -= l,
        kt = 1 << 32 - ct(t) + i | n << i | r,
        Rt = o + e
    } else
        kt = 1 << o | n << i | r,
        Rt = e
}
function ts(e) {
    e.return !== null && (sn(e, 1),
    qf(e, 1, 0))
}
function ns(e) {
    for (; e === so; )
        so = Fn[--Un],
        Fn[Un] = null,
        uo = Fn[--Un],
        Fn[Un] = null;
    for (; e === An; )
        An = Ze[--qe],
        Ze[qe] = null,
        Rt = Ze[--qe],
        Ze[qe] = null,
        kt = Ze[--qe],
        Ze[qe] = null
}
var We = null
  , Je = null
  , re = !1
  , ut = null;
function ed(e, t) {
    var n = et(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Pu(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        We = e,
        Je = Wt(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        We = e,
        Je = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = An !== null ? {
            id: kt,
            overflow: Rt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = et(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        We = e,
        Je = null,
        !0) : !1;
    default:
        return !1
    }
}
function ca(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function fa(e) {
    if (re) {
        var t = Je;
        if (t) {
            var n = t;
            if (!Pu(e, t)) {
                if (ca(e))
                    throw Error(P(418));
                t = Wt(n.nextSibling);
                var r = We;
                t && Pu(e, t) ? ed(r, n) : (e.flags = e.flags & -4097 | 2,
                re = !1,
                We = e)
            }
        } else {
            if (ca(e))
                throw Error(P(418));
            e.flags = e.flags & -4097 | 2,
            re = !1,
            We = e
        }
    }
}
function Lu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    We = e
}
function Ii(e) {
    if (e !== We)
        return !1;
    if (!re)
        return Lu(e),
        re = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !la(e.type, e.memoizedProps)),
    t && (t = Je)) {
        if (ca(e))
            throw td(),
            Error(P(418));
        for (; t; )
            ed(e, t),
            t = Wt(t.nextSibling)
    }
    if (Lu(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(P(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Je = Wt(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Je = null
        }
    } else
        Je = We ? Wt(e.stateNode.nextSibling) : null;
    return !0
}
function td() {
    for (var e = Je; e; )
        e = Wt(e.nextSibling)
}
function qn() {
    Je = We = null,
    re = !1
}
function rs(e) {
    ut === null ? ut = [e] : ut.push(e)
}
var Fg = jt.ReactCurrentBatchConfig;
function lt(e, t) {
    if (e && e.defaultProps) {
        t = ae({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var co = nn(null)
  , fo = null
  , Mn = null
  , is = null;
function os() {
    is = Mn = fo = null
}
function ls(e) {
    var t = co.current;
    ee(co),
    e._currentValue = t
}
function da(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Yn(e, t) {
    fo = e,
    is = Mn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Qe = !0),
    e.firstContext = null)
}
function nt(e) {
    var t = e._currentValue;
    if (is !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Mn === null) {
            if (fo === null)
                throw Error(P(308));
            Mn = e,
            fo.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Mn = Mn.next = e;
    return t
}
var fn = null;
function as(e) {
    fn === null ? fn = [e] : fn.push(e)
}
function nd(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    as(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    It(e, r)
}
function It(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var zt = !1;
function ss(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function rd(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Nt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Yt(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    H & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        It(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    as(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    It(e, n)
}
function Vi(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Wa(e, n)
    }
}
function Iu(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var l = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = l : o = o.next = l,
                n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else
            i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function po(e, t, n, r) {
    var i = e.updateQueue;
    zt = !1;
    var o = i.firstBaseUpdate
      , l = i.lastBaseUpdate
      , a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var s = a
          , u = s.next;
        s.next = null,
        l === null ? o = u : l.next = u,
        l = s;
        var f = e.alternate;
        f !== null && (f = f.updateQueue,
        a = f.lastBaseUpdate,
        a !== l && (a === null ? f.firstBaseUpdate = u : a.next = u,
        f.lastBaseUpdate = s))
    }
    if (o !== null) {
        var p = i.baseState;
        l = 0,
        f = u = s = null,
        a = o;
        do {
            var c = a.lane
              , v = a.eventTime;
            if ((r & c) === c) {
                f !== null && (f = f.next = {
                    eventTime: v,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var A = e
                      , y = a;
                    switch (c = t,
                    v = n,
                    y.tag) {
                    case 1:
                        if (A = y.payload,
                        typeof A == "function") {
                            p = A.call(v, p, c);
                            break e
                        }
                        p = A;
                        break e;
                    case 3:
                        A.flags = A.flags & -65537 | 128;
                    case 0:
                        if (A = y.payload,
                        c = typeof A == "function" ? A.call(v, p, c) : A,
                        c == null)
                            break e;
                        p = ae({}, p, c);
                        break e;
                    case 2:
                        zt = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                c = i.effects,
                c === null ? i.effects = [a] : c.push(a))
            } else
                v = {
                    eventTime: v,
                    lane: c,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                f === null ? (u = f = v,
                s = p) : f = f.next = v,
                l |= c;
            if (a = a.next,
            a === null) {
                if (a = i.shared.pending,
                a === null)
                    break;
                c = a,
                a = c.next,
                c.next = null,
                i.lastBaseUpdate = c,
                i.shared.pending = null
            }
        } while (1);
        if (f === null && (s = p),
        i.baseState = s,
        i.firstBaseUpdate = u,
        i.lastBaseUpdate = f,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                l |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            o === null && (i.shared.lanes = 0);
        yn |= l,
        e.lanes = l,
        e.memoizedState = p
    }
}
function Ou(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(P(191, i));
                i.call(r)
            }
        }
}
var id = new tf.Component().refs;
function pa(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : ae({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Uo = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? xn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Te()
          , i = Gt(e)
          , o = Nt(r, i);
        o.payload = t,
        n != null && (o.callback = n),
        t = Yt(e, o, i),
        t !== null && (ft(t, e, i, r),
        Vi(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Te()
          , i = Gt(e)
          , o = Nt(r, i);
        o.tag = 1,
        o.payload = t,
        n != null && (o.callback = n),
        t = Yt(e, o, i),
        t !== null && (ft(t, e, i, r),
        Vi(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Te()
          , r = Gt(e)
          , i = Nt(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = Yt(e, i, r),
        t !== null && (ft(t, e, r, n),
        Vi(t, e, r))
    }
};
function ju(e, t, n, r, i, o, l) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, l) : t.prototype && t.prototype.isPureReactComponent ? !Wr(n, r) || !Wr(i, o) : !0
}
function od(e, t, n) {
    var r = !1
      , i = en
      , o = t.contextType;
    return typeof o == "object" && o !== null ? o = nt(o) : (i = be(t) ? mn : je.current,
    r = t.contextTypes,
    o = (r = r != null) ? Zn(e, i) : en),
    t = new t(n,o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Uo,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function Du(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Uo.enqueueReplaceState(t, t.state, null)
}
function ha(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = id,
    ss(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = nt(o) : (o = be(t) ? mn : je.current,
    i.context = Zn(e, o)),
    i.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && (pa(e, t, o, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && Uo.enqueueReplaceState(i, i.state, null),
    po(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function mr(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(P(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(P(147, e));
            var i = r
              , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(l) {
                var a = i.refs;
                a === id && (a = i.refs = {}),
                l === null ? delete a[o] : a[o] = l
            }
            ,
            t._stringRef = o,
            t)
        }
        if (typeof e != "string")
            throw Error(P(284));
        if (!n._owner)
            throw Error(P(290, e))
    }
    return e
}
function Oi(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(P(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Bu(e) {
    var t = e._init;
    return t(e._payload)
}
function ld(e) {
    function t(g, h) {
        if (e) {
            var m = g.deletions;
            m === null ? (g.deletions = [h],
            g.flags |= 16) : m.push(h)
        }
    }
    function n(g, h) {
        if (!e)
            return null;
        for (; h !== null; )
            t(g, h),
            h = h.sibling;
        return null
    }
    function r(g, h) {
        for (g = new Map; h !== null; )
            h.key !== null ? g.set(h.key, h) : g.set(h.index, h),
            h = h.sibling;
        return g
    }
    function i(g, h) {
        return g = $t(g, h),
        g.index = 0,
        g.sibling = null,
        g
    }
    function o(g, h, m) {
        return g.index = m,
        e ? (m = g.alternate,
        m !== null ? (m = m.index,
        m < h ? (g.flags |= 2,
        h) : m) : (g.flags |= 2,
        h)) : (g.flags |= 1048576,
        h)
    }
    function l(g) {
        return e && g.alternate === null && (g.flags |= 2),
        g
    }
    function a(g, h, m, d) {
        return h === null || h.tag !== 6 ? (h = Ll(m, g.mode, d),
        h.return = g,
        h) : (h = i(h, m),
        h.return = g,
        h)
    }
    function s(g, h, m, d) {
        var E = m.type;
        return E === In ? f(g, h, m.props.children, d, m.key) : h !== null && (h.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Mt && Bu(E) === h.type) ? (d = i(h, m.props),
        d.ref = mr(g, h, m),
        d.return = g,
        d) : (d = Gi(m.type, m.key, m.props, null, g.mode, d),
        d.ref = mr(g, h, m),
        d.return = g,
        d)
    }
    function u(g, h, m, d) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== m.containerInfo || h.stateNode.implementation !== m.implementation ? (h = Il(m, g.mode, d),
        h.return = g,
        h) : (h = i(h, m.children || []),
        h.return = g,
        h)
    }
    function f(g, h, m, d, E) {
        return h === null || h.tag !== 7 ? (h = gn(m, g.mode, d, E),
        h.return = g,
        h) : (h = i(h, m),
        h.return = g,
        h)
    }
    function p(g, h, m) {
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return h = Ll("" + h, g.mode, m),
            h.return = g,
            h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case wi:
                return m = Gi(h.type, h.key, h.props, null, g.mode, m),
                m.ref = mr(g, null, h),
                m.return = g,
                m;
            case Ln:
                return h = Il(h, g.mode, m),
                h.return = g,
                h;
            case Mt:
                var d = h._init;
                return p(g, d(h._payload), m)
            }
            if (Nr(h) || fr(h))
                return h = gn(h, g.mode, m, null),
                h.return = g,
                h;
            Oi(g, h)
        }
        return null
    }
    function c(g, h, m, d) {
        var E = h !== null ? h.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return E !== null ? null : a(g, h, "" + m, d);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case wi:
                return m.key === E ? s(g, h, m, d) : null;
            case Ln:
                return m.key === E ? u(g, h, m, d) : null;
            case Mt:
                return E = m._init,
                c(g, h, E(m._payload), d)
            }
            if (Nr(m) || fr(m))
                return E !== null ? null : f(g, h, m, d, null);
            Oi(g, m)
        }
        return null
    }
    function v(g, h, m, d, E) {
        if (typeof d == "string" && d !== "" || typeof d == "number")
            return g = g.get(m) || null,
            a(h, g, "" + d, E);
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
            case wi:
                return g = g.get(d.key === null ? m : d.key) || null,
                s(h, g, d, E);
            case Ln:
                return g = g.get(d.key === null ? m : d.key) || null,
                u(h, g, d, E);
            case Mt:
                var N = d._init;
                return v(g, h, m, N(d._payload), E)
            }
            if (Nr(d) || fr(d))
                return g = g.get(m) || null,
                f(h, g, d, E, null);
            Oi(h, d)
        }
        return null
    }
    function A(g, h, m, d) {
        for (var E = null, N = null, C = h, I = h = 0, b = null; C !== null && I < m.length; I++) {
            C.index > I ? (b = C,
            C = null) : b = C.sibling;
            var T = c(g, C, m[I], d);
            if (T === null) {
                C === null && (C = b);
                break
            }
            e && C && T.alternate === null && t(g, C),
            h = o(T, h, I),
            N === null ? E = T : N.sibling = T,
            N = T,
            C = b
        }
        if (I === m.length)
            return n(g, C),
            re && sn(g, I),
            E;
        if (C === null) {
            for (; I < m.length; I++)
                C = p(g, m[I], d),
                C !== null && (h = o(C, h, I),
                N === null ? E = C : N.sibling = C,
                N = C);
            return re && sn(g, I),
            E
        }
        for (C = r(g, C); I < m.length; I++)
            b = v(C, g, I, m[I], d),
            b !== null && (e && b.alternate !== null && C.delete(b.key === null ? I : b.key),
            h = o(b, h, I),
            N === null ? E = b : N.sibling = b,
            N = b);
        return e && C.forEach(function(ge) {
            return t(g, ge)
        }),
        re && sn(g, I),
        E
    }
    function y(g, h, m, d) {
        var E = fr(m);
        if (typeof E != "function")
            throw Error(P(150));
        if (m = E.call(m),
        m == null)
            throw Error(P(151));
        for (var N = E = null, C = h, I = h = 0, b = null, T = m.next(); C !== null && !T.done; I++,
        T = m.next()) {
            C.index > I ? (b = C,
            C = null) : b = C.sibling;
            var ge = c(g, C, T.value, d);
            if (ge === null) {
                C === null && (C = b);
                break
            }
            e && C && ge.alternate === null && t(g, C),
            h = o(ge, h, I),
            N === null ? E = ge : N.sibling = ge,
            N = ge,
            C = b
        }
        if (T.done)
            return n(g, C),
            re && sn(g, I),
            E;
        if (C === null) {
            for (; !T.done; I++,
            T = m.next())
                T = p(g, T.value, d),
                T !== null && (h = o(T, h, I),
                N === null ? E = T : N.sibling = T,
                N = T);
            return re && sn(g, I),
            E
        }
        for (C = r(g, C); !T.done; I++,
        T = m.next())
            T = v(C, g, I, T.value, d),
            T !== null && (e && T.alternate !== null && C.delete(T.key === null ? I : T.key),
            h = o(T, h, I),
            N === null ? E = T : N.sibling = T,
            N = T);
        return e && C.forEach(function(W) {
            return t(g, W)
        }),
        re && sn(g, I),
        E
    }
    function R(g, h, m, d) {
        if (typeof m == "object" && m !== null && m.type === In && m.key === null && (m = m.props.children),
        typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case wi:
                e: {
                    for (var E = m.key, N = h; N !== null; ) {
                        if (N.key === E) {
                            if (E = m.type,
                            E === In) {
                                if (N.tag === 7) {
                                    n(g, N.sibling),
                                    h = i(N, m.props.children),
                                    h.return = g,
                                    g = h;
                                    break e
                                }
                            } else if (N.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Mt && Bu(E) === N.type) {
                                n(g, N.sibling),
                                h = i(N, m.props),
                                h.ref = mr(g, N, m),
                                h.return = g,
                                g = h;
                                break e
                            }
                            n(g, N);
                            break
                        } else
                            t(g, N);
                        N = N.sibling
                    }
                    m.type === In ? (h = gn(m.props.children, g.mode, d, m.key),
                    h.return = g,
                    g = h) : (d = Gi(m.type, m.key, m.props, null, g.mode, d),
                    d.ref = mr(g, h, m),
                    d.return = g,
                    g = d)
                }
                return l(g);
            case Ln:
                e: {
                    for (N = m.key; h !== null; ) {
                        if (h.key === N)
                            if (h.tag === 4 && h.stateNode.containerInfo === m.containerInfo && h.stateNode.implementation === m.implementation) {
                                n(g, h.sibling),
                                h = i(h, m.children || []),
                                h.return = g,
                                g = h;
                                break e
                            } else {
                                n(g, h);
                                break
                            }
                        else
                            t(g, h);
                        h = h.sibling
                    }
                    h = Il(m, g.mode, d),
                    h.return = g,
                    g = h
                }
                return l(g);
            case Mt:
                return N = m._init,
                R(g, h, N(m._payload), d)
            }
            if (Nr(m))
                return A(g, h, m, d);
            if (fr(m))
                return y(g, h, m, d);
            Oi(g, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m,
        h !== null && h.tag === 6 ? (n(g, h.sibling),
        h = i(h, m),
        h.return = g,
        g = h) : (n(g, h),
        h = Ll(m, g.mode, d),
        h.return = g,
        g = h),
        l(g)) : n(g, h)
    }
    return R
}
var er = ld(!0)
  , ad = ld(!1)
  , ci = {}
  , yt = nn(ci)
  , $r = nn(ci)
  , Zr = nn(ci);
function dn(e) {
    if (e === ci)
        throw Error(P(174));
    return e
}
function us(e, t) {
    switch (Z(Zr, t),
    Z($r, e),
    Z(yt, ci),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Jl(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Jl(t, e)
    }
    ee(yt),
    Z(yt, t)
}
function tr() {
    ee(yt),
    ee($r),
    ee(Zr)
}
function sd(e) {
    dn(Zr.current);
    var t = dn(yt.current)
      , n = Jl(t, e.type);
    t !== n && (Z($r, e),
    Z(yt, n))
}
function cs(e) {
    $r.current === e && (ee(yt),
    ee($r))
}
var oe = nn(0);
function ho(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var El = [];
function fs() {
    for (var e = 0; e < El.length; e++)
        El[e]._workInProgressVersionPrimary = null;
    El.length = 0
}
var Hi = jt.ReactCurrentDispatcher
  , Cl = jt.ReactCurrentBatchConfig
  , vn = 0
  , le = null
  , Ae = null
  , we = null
  , go = !1
  , Tr = !1
  , qr = 0
  , Ug = 0;
function Le() {
    throw Error(P(321))
}
function ds(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!dt(e[n], t[n]))
            return !1;
    return !0
}
function ps(e, t, n, r, i, o) {
    if (vn = o,
    le = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Hi.current = e === null || e.memoizedState === null ? _g : bg,
    e = n(r, i),
    Tr) {
        o = 0;
        do {
            if (Tr = !1,
            qr = 0,
            25 <= o)
                throw Error(P(301));
            o += 1,
            we = Ae = null,
            t.updateQueue = null,
            Hi.current = Kg,
            e = n(r, i)
        } while (Tr)
    }
    if (Hi.current = mo,
    t = Ae !== null && Ae.next !== null,
    vn = 0,
    we = Ae = le = null,
    go = !1,
    t)
        throw Error(P(300));
    return e
}
function hs() {
    var e = qr !== 0;
    return qr = 0,
    e
}
function gt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return we === null ? le.memoizedState = we = e : we = we.next = e,
    we
}
function rt() {
    if (Ae === null) {
        var e = le.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Ae.next;
    var t = we === null ? le.memoizedState : we.next;
    if (t !== null)
        we = t,
        Ae = e;
    else {
        if (e === null)
            throw Error(P(310));
        Ae = e,
        e = {
            memoizedState: Ae.memoizedState,
            baseState: Ae.baseState,
            baseQueue: Ae.baseQueue,
            queue: Ae.queue,
            next: null
        },
        we === null ? le.memoizedState = we = e : we = we.next = e
    }
    return we
}
function ei(e, t) {
    return typeof t == "function" ? t(e) : t
}
function kl(e) {
    var t = rt()
      , n = t.queue;
    if (n === null)
        throw Error(P(311));
    n.lastRenderedReducer = e;
    var r = Ae
      , i = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var l = i.next;
            i.next = o.next,
            o.next = l
        }
        r.baseQueue = i = o,
        n.pending = null
    }
    if (i !== null) {
        o = i.next,
        r = r.baseState;
        var a = l = null
          , s = null
          , u = o;
        do {
            var f = u.lane;
            if ((vn & f) === f)
                s !== null && (s = s.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var p = {
                    lane: f,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                s === null ? (a = s = p,
                l = r) : s = s.next = p,
                le.lanes |= f,
                yn |= f
            }
            u = u.next
        } while (u !== null && u !== o);
        s === null ? l = r : s.next = a,
        dt(r, t.memoizedState) || (Qe = !0),
        t.memoizedState = r,
        t.baseState = l,
        t.baseQueue = s,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            o = i.lane,
            le.lanes |= o,
            yn |= o,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Rl(e) {
    var t = rt()
      , n = t.queue;
    if (n === null)
        throw Error(P(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var l = i = i.next;
        do
            o = e(o, l.action),
            l = l.next;
        while (l !== i);
        dt(o, t.memoizedState) || (Qe = !0),
        t.memoizedState = o,
        t.baseQueue === null && (t.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function ud() {}
function cd(e, t) {
    var n = le
      , r = rt()
      , i = t()
      , o = !dt(r.memoizedState, i);
    if (o && (r.memoizedState = i,
    Qe = !0),
    r = r.queue,
    gs(pd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || we !== null && we.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        ti(9, dd.bind(null, n, r, i, t), void 0, null),
        Se === null)
            throw Error(P(349));
        vn & 30 || fd(n, t, i)
    }
    return i
}
function fd(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = le.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    le.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function dd(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    hd(t) && gd(e)
}
function pd(e, t, n) {
    return n(function() {
        hd(t) && gd(e)
    })
}
function hd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !dt(e, n)
    } catch {
        return !0
    }
}
function gd(e) {
    var t = It(e, 1);
    t !== null && ft(t, e, 1, -1)
}
function Tu(e) {
    var t = gt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ei,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = Qg.bind(null, le, e),
    [t.memoizedState, e]
}
function ti(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = le.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    le.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function md() {
    return rt().memoizedState
}
function Ji(e, t, n, r) {
    var i = gt();
    le.flags |= e,
    i.memoizedState = ti(1 | t, n, void 0, r === void 0 ? null : r)
}
function Mo(e, t, n, r) {
    var i = rt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Ae !== null) {
        var l = Ae.memoizedState;
        if (o = l.destroy,
        r !== null && ds(r, l.deps)) {
            i.memoizedState = ti(t, n, o, r);
            return
        }
    }
    le.flags |= e,
    i.memoizedState = ti(1 | t, n, o, r)
}
function Fu(e, t) {
    return Ji(8390656, 8, e, t)
}
function gs(e, t) {
    return Mo(2048, 8, e, t)
}
function Ad(e, t) {
    return Mo(4, 2, e, t)
}
function vd(e, t) {
    return Mo(4, 4, e, t)
}
function yd(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function wd(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Mo(4, 4, yd.bind(null, t, e), n)
}
function ms() {}
function Sd(e, t) {
    var n = rt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ds(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function xd(e, t) {
    var n = rt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ds(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Ed(e, t, n) {
    return vn & 21 ? (dt(n, t) || (n = Rf(),
    le.lanes |= n,
    yn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Qe = !0),
    e.memoizedState = n)
}
function Mg(e, t) {
    var n = J;
    J = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Cl.transition;
    Cl.transition = {};
    try {
        e(!1),
        t()
    } finally {
        J = n,
        Cl.transition = r
    }
}
function Cd() {
    return rt().memoizedState
}
function zg(e, t, n) {
    var r = Gt(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    kd(e))
        Rd(t, n);
    else if (n = nd(e, t, n, r),
    n !== null) {
        var i = Te();
        ft(n, e, r, i),
        Nd(n, t, r)
    }
}
function Qg(e, t, n) {
    var r = Gt(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (kd(e))
        Rd(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
        o !== null))
            try {
                var l = t.lastRenderedState
                  , a = o(l, n);
                if (i.hasEagerState = !0,
                i.eagerState = a,
                dt(a, l)) {
                    var s = t.interleaved;
                    s === null ? (i.next = i,
                    as(t)) : (i.next = s.next,
                    s.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = nd(e, t, i, r),
        n !== null && (i = Te(),
        ft(n, e, r, i),
        Nd(n, t, r))
    }
}
function kd(e) {
    var t = e.alternate;
    return e === le || t !== null && t === le
}
function Rd(e, t) {
    Tr = go = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Nd(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Wa(e, n)
    }
}
var mo = {
    readContext: nt,
    useCallback: Le,
    useContext: Le,
    useEffect: Le,
    useImperativeHandle: Le,
    useInsertionEffect: Le,
    useLayoutEffect: Le,
    useMemo: Le,
    useReducer: Le,
    useRef: Le,
    useState: Le,
    useDebugValue: Le,
    useDeferredValue: Le,
    useTransition: Le,
    useMutableSource: Le,
    useSyncExternalStore: Le,
    useId: Le,
    unstable_isNewReconciler: !1
}
  , _g = {
    readContext: nt,
    useCallback: function(e, t) {
        return gt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: nt,
    useEffect: Fu,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Ji(4194308, 4, yd.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Ji(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Ji(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = gt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = gt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = zg.bind(null, le, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = gt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Tu,
    useDebugValue: ms,
    useDeferredValue: function(e) {
        return gt().memoizedState = e
    },
    useTransition: function() {
        var e = Tu(!1)
          , t = e[0];
        return e = Mg.bind(null, e[1]),
        gt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = le
          , i = gt();
        if (re) {
            if (n === void 0)
                throw Error(P(407));
            n = n()
        } else {
            if (n = t(),
            Se === null)
                throw Error(P(349));
            vn & 30 || fd(r, t, n)
        }
        i.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: t
        };
        return i.queue = o,
        Fu(pd.bind(null, r, o, e), [e]),
        r.flags |= 2048,
        ti(9, dd.bind(null, r, o, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = gt()
          , t = Se.identifierPrefix;
        if (re) {
            var n = Rt
              , r = kt;
            n = (r & ~(1 << 32 - ct(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = qr++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = Ug++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , bg = {
    readContext: nt,
    useCallback: Sd,
    useContext: nt,
    useEffect: gs,
    useImperativeHandle: wd,
    useInsertionEffect: Ad,
    useLayoutEffect: vd,
    useMemo: xd,
    useReducer: kl,
    useRef: md,
    useState: function() {
        return kl(ei)
    },
    useDebugValue: ms,
    useDeferredValue: function(e) {
        var t = rt();
        return Ed(t, Ae.memoizedState, e)
    },
    useTransition: function() {
        var e = kl(ei)[0]
          , t = rt().memoizedState;
        return [e, t]
    },
    useMutableSource: ud,
    useSyncExternalStore: cd,
    useId: Cd,
    unstable_isNewReconciler: !1
}
  , Kg = {
    readContext: nt,
    useCallback: Sd,
    useContext: nt,
    useEffect: gs,
    useImperativeHandle: wd,
    useInsertionEffect: Ad,
    useLayoutEffect: vd,
    useMemo: xd,
    useReducer: Rl,
    useRef: md,
    useState: function() {
        return Rl(ei)
    },
    useDebugValue: ms,
    useDeferredValue: function(e) {
        var t = rt();
        return Ae === null ? t.memoizedState = e : Ed(t, Ae.memoizedState, e)
    },
    useTransition: function() {
        var e = Rl(ei)[0]
          , t = rt().memoizedState;
        return [e, t]
    },
    useMutableSource: ud,
    useSyncExternalStore: cd,
    useId: Cd,
    unstable_isNewReconciler: !1
};
function nr(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += Ah(r),
            r = r.return;
        while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function Nl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function ga(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Vg = typeof WeakMap == "function" ? WeakMap : Map;
function Pd(e, t, n) {
    n = Nt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        vo || (vo = !0,
        ka = r),
        ga(e, t)
    }
    ,
    n
}
function Ld(e, t, n) {
    n = Nt(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            ga(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        ga(e, t),
        typeof r != "function" && (Xt === null ? Xt = new Set([this]) : Xt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: l !== null ? l : ""
        })
    }
    ),
    n
}
function Uu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Vg;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = im.bind(null, e, t, n),
    t.then(e, e))
}
function Mu(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function zu(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Nt(-1, 1),
    t.tag = 2,
    Yt(n, t, 1))),
    n.lanes |= 1),
    e)
}
var Hg = jt.ReactCurrentOwner
  , Qe = !1;
function Be(e, t, n, r) {
    t.child = e === null ? ad(t, null, n, r) : er(t, e.child, n, r)
}
function Qu(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return Yn(t, i),
    r = ps(e, t, n, r, o, i),
    n = hs(),
    e !== null && !Qe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    Ot(e, t, i)) : (re && n && ts(t),
    t.flags |= 1,
    Be(e, t, r, i),
    t.child)
}
function _u(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !Cs(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = o,
        Id(e, t, o, r, i)) : (e = Gi(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (o = e.child,
    !(e.lanes & i)) {
        var l = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Wr,
        n(l, r) && e.ref === t.ref)
            return Ot(e, t, i)
    }
    return t.flags |= 1,
    e = $t(o, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Id(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Wr(o, r) && e.ref === t.ref)
            if (Qe = !1,
            t.pendingProps = r = o,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (Qe = !0);
            else
                return t.lanes = e.lanes,
                Ot(e, t, i)
    }
    return ma(e, t, n, r, i)
}
function Od(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            Z(Qn, He),
            He |= n;
        else {
            if (!(n & 1073741824))
                return e = o !== null ? o.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                Z(Qn, He),
                He |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            Z(Qn, He),
            He |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        t.memoizedState = null) : r = n,
        Z(Qn, He),
        He |= r;
    return Be(e, t, i, n),
    t.child
}
function jd(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function ma(e, t, n, r, i) {
    var o = be(n) ? mn : je.current;
    return o = Zn(t, o),
    Yn(t, i),
    n = ps(e, t, n, r, o, i),
    r = hs(),
    e !== null && !Qe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    Ot(e, t, i)) : (re && r && ts(t),
    t.flags |= 1,
    Be(e, t, n, i),
    t.child)
}
function bu(e, t, n, r, i) {
    if (be(n)) {
        var o = !0;
        ao(t)
    } else
        o = !1;
    if (Yn(t, i),
    t.stateNode === null)
        Wi(e, t),
        od(t, n, r),
        ha(t, n, r, i),
        r = !0;
    else if (e === null) {
        var l = t.stateNode
          , a = t.memoizedProps;
        l.props = a;
        var s = l.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = nt(u) : (u = be(n) ? mn : je.current,
        u = Zn(t, u));
        var f = n.getDerivedStateFromProps
          , p = typeof f == "function" || typeof l.getSnapshotBeforeUpdate == "function";
        p || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (a !== r || s !== u) && Du(t, l, r, u),
        zt = !1;
        var c = t.memoizedState;
        l.state = c,
        po(t, r, l, i),
        s = t.memoizedState,
        a !== r || c !== s || _e.current || zt ? (typeof f == "function" && (pa(t, n, f, r),
        s = t.memoizedState),
        (a = zt || ju(t, n, a, r, c, s, u)) ? (p || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()),
        typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = s),
        l.props = r,
        l.state = s,
        l.context = u,
        r = a) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        l = t.stateNode,
        rd(e, t),
        a = t.memoizedProps,
        u = t.type === t.elementType ? a : lt(t.type, a),
        l.props = u,
        p = t.pendingProps,
        c = l.context,
        s = n.contextType,
        typeof s == "object" && s !== null ? s = nt(s) : (s = be(n) ? mn : je.current,
        s = Zn(t, s));
        var v = n.getDerivedStateFromProps;
        (f = typeof v == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (a !== p || c !== s) && Du(t, l, r, s),
        zt = !1,
        c = t.memoizedState,
        l.state = c,
        po(t, r, l, i);
        var A = t.memoizedState;
        a !== p || c !== A || _e.current || zt ? (typeof v == "function" && (pa(t, n, v, r),
        A = t.memoizedState),
        (u = zt || ju(t, n, u, r, c, A, s) || !1) ? (f || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, A, s),
        typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, A, s)),
        typeof l.componentDidUpdate == "function" && (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || a === e.memoizedProps && c === e.memoizedState || (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && c === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = A),
        l.props = r,
        l.state = A,
        l.context = s,
        r = u) : (typeof l.componentDidUpdate != "function" || a === e.memoizedProps && c === e.memoizedState || (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && c === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Aa(e, t, n, r, o, i)
}
function Aa(e, t, n, r, i, o) {
    jd(e, t);
    var l = (t.flags & 128) !== 0;
    if (!r && !l)
        return i && Nu(t, n, !1),
        Ot(e, t, o);
    r = t.stateNode,
    Hg.current = t;
    var a = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && l ? (t.child = er(t, e.child, null, o),
    t.child = er(t, null, a, o)) : Be(e, t, a, o),
    t.memoizedState = r.state,
    i && Nu(t, n, !0),
    t.child
}
function Dd(e) {
    var t = e.stateNode;
    t.pendingContext ? Ru(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ru(e, t.context, !1),
    us(e, t.containerInfo)
}
function Ku(e, t, n, r, i) {
    return qn(),
    rs(i),
    t.flags |= 256,
    Be(e, t, n, r),
    t.child
}
var va = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function ya(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Bd(e, t, n) {
    var r = t.pendingProps, i = oe.current, o = !1, l = (t.flags & 128) !== 0, a;
    if ((a = l) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a ? (o = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    Z(oe, i & 1),
    e === null)
        return fa(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (l = r.children,
        e = r.fallback,
        o ? (r = t.mode,
        o = t.child,
        l = {
            mode: "hidden",
            children: l
        },
        !(r & 1) && o !== null ? (o.childLanes = 0,
        o.pendingProps = l) : o = _o(l, r, 0, null),
        e = gn(e, r, n, null),
        o.return = t,
        e.return = t,
        o.sibling = e,
        t.child = o,
        t.child.memoizedState = ya(n),
        t.memoizedState = va,
        e) : As(t, l));
    if (i = e.memoizedState,
    i !== null && (a = i.dehydrated,
    a !== null))
        return Jg(e, t, l, r, a, i, n);
    if (o) {
        o = r.fallback,
        l = t.mode,
        i = e.child,
        a = i.sibling;
        var s = {
            mode: "hidden",
            children: r.children
        };
        return !(l & 1) && t.child !== i ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = s,
        t.deletions = null) : (r = $t(i, s),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        a !== null ? o = $t(a, o) : (o = gn(o, l, n, null),
        o.flags |= 2),
        o.return = t,
        r.return = t,
        r.sibling = o,
        t.child = r,
        r = o,
        o = t.child,
        l = e.child.memoizedState,
        l = l === null ? ya(n) : {
            baseLanes: l.baseLanes | n,
            cachePool: null,
            transitions: l.transitions
        },
        o.memoizedState = l,
        o.childLanes = e.childLanes & ~n,
        t.memoizedState = va,
        r
    }
    return o = e.child,
    e = o.sibling,
    r = $t(o, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function As(e, t) {
    return t = _o({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function ji(e, t, n, r) {
    return r !== null && rs(r),
    er(t, e.child, null, n),
    e = As(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Jg(e, t, n, r, i, o, l) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Nl(Error(P(422))),
        ji(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = r.fallback,
        i = t.mode,
        r = _o({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        o = gn(o, i, l, null),
        o.flags |= 2,
        r.return = t,
        o.return = t,
        r.sibling = o,
        t.child = r,
        t.mode & 1 && er(t, e.child, null, l),
        t.child.memoizedState = ya(l),
        t.memoizedState = va,
        o);
    if (!(t.mode & 1))
        return ji(e, t, l, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        o = Error(P(419)),
        r = Nl(o, r, void 0),
        ji(e, t, l, r)
    }
    if (a = (l & e.childLanes) !== 0,
    Qe || a) {
        if (r = Se,
        r !== null) {
            switch (l & -l) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | l) ? 0 : i,
            i !== 0 && i !== o.retryLane && (o.retryLane = i,
            It(e, i),
            ft(r, e, i, -1))
        }
        return Es(),
        r = Nl(Error(P(421))),
        ji(e, t, l, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = om.bind(null, e),
    i._reactRetry = t,
    null) : (e = o.treeContext,
    Je = Wt(i.nextSibling),
    We = t,
    re = !0,
    ut = null,
    e !== null && (Ze[qe++] = kt,
    Ze[qe++] = Rt,
    Ze[qe++] = An,
    kt = e.id,
    Rt = e.overflow,
    An = t),
    t = As(t, r.children),
    t.flags |= 4096,
    t)
}
function Vu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    da(e.return, t, n)
}
function Pl(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = i)
}
function Td(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , o = r.tail;
    if (Be(e, t, r.children, n),
    r = oe.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Vu(e, n, t);
                else if (e.tag === 19)
                    Vu(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (Z(oe, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && ho(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            Pl(t, !1, i, n, o);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && ho(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            Pl(t, !0, n, null, o);
            break;
        case "together":
            Pl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Wi(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Ot(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    yn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(P(153));
    if (t.child !== null) {
        for (e = t.child,
        n = $t(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = $t(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Wg(e, t, n) {
    switch (t.tag) {
    case 3:
        Dd(t),
        qn();
        break;
    case 5:
        sd(t);
        break;
    case 1:
        be(t.type) && ao(t);
        break;
    case 4:
        us(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        Z(co, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (Z(oe, oe.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Bd(e, t, n) : (Z(oe, oe.current & 1),
            e = Ot(e, t, n),
            e !== null ? e.sibling : null);
        Z(oe, oe.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return Td(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        Z(oe, oe.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Od(e, t, n)
    }
    return Ot(e, t, n)
}
var Fd, wa, Ud, Md;
Fd = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
wa = function() {}
;
Ud = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        dn(yt.current);
        var o = null;
        switch (n) {
        case "input":
            i = bl(e, i),
            r = bl(e, r),
            o = [];
            break;
        case "select":
            i = ae({}, i, {
                value: void 0
            }),
            r = ae({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            i = Hl(e, i),
            r = Hl(e, r),
            o = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = oo)
        }
        Wl(n, r);
        var l;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var a = i[u];
                    for (l in a)
                        a.hasOwnProperty(l) && (n || (n = {}),
                        n[l] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Qr.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var s = r[u];
            if (a = i != null ? i[u] : void 0,
            r.hasOwnProperty(u) && s !== a && (s != null || a != null))
                if (u === "style")
                    if (a) {
                        for (l in a)
                            !a.hasOwnProperty(l) || s && s.hasOwnProperty(l) || (n || (n = {}),
                            n[l] = "");
                        for (l in s)
                            s.hasOwnProperty(l) && a[l] !== s[l] && (n || (n = {}),
                            n[l] = s[l])
                    } else
                        n || (o || (o = []),
                        o.push(u, n)),
                        n = s;
                else
                    u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                    a = a ? a.__html : void 0,
                    s != null && a !== s && (o = o || []).push(u, s)) : u === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(u, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Qr.hasOwnProperty(u) ? (s != null && u === "onScroll" && q("scroll", e),
                    o || a === s || (o = [])) : (o = o || []).push(u, s))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
Md = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Ar(e, t) {
    if (!re)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Ie(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Yg(e, t, n) {
    var r = t.pendingProps;
    switch (ns(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return Ie(t),
        null;
    case 1:
        return be(t.type) && lo(),
        Ie(t),
        null;
    case 3:
        return r = t.stateNode,
        tr(),
        ee(_e),
        ee(je),
        fs(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Ii(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        ut !== null && (Pa(ut),
        ut = null))),
        wa(e, t),
        Ie(t),
        null;
    case 5:
        cs(t);
        var i = dn(Zr.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Ud(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(P(166));
                return Ie(t),
                null
            }
            if (e = dn(yt.current),
            Ii(t)) {
                r = t.stateNode,
                n = t.type;
                var o = t.memoizedProps;
                switch (r[mt] = t,
                r[Gr] = o,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    q("cancel", r),
                    q("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    q("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < Lr.length; i++)
                        q(Lr[i], r);
                    break;
                case "source":
                    q("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    q("error", r),
                    q("load", r);
                    break;
                case "details":
                    q("toggle", r);
                    break;
                case "input":
                    qs(r, o),
                    q("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    q("invalid", r);
                    break;
                case "textarea":
                    tu(r, o),
                    q("invalid", r)
                }
                Wl(n, o),
                i = null;
                for (var l in o)
                    if (o.hasOwnProperty(l)) {
                        var a = o[l];
                        l === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && Li(r.textContent, a, e),
                        i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && Li(r.textContent, a, e),
                        i = ["children", "" + a]) : Qr.hasOwnProperty(l) && a != null && l === "onScroll" && q("scroll", r)
                    }
                switch (n) {
                case "input":
                    Si(r),
                    eu(r, o, !0);
                    break;
                case "textarea":
                    Si(r),
                    nu(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = oo)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                l = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = ff(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, {
                    is: r.is
                }) : (e = l.createElement(n),
                n === "select" && (l = e,
                r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n),
                e[mt] = t,
                e[Gr] = r,
                Fd(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (l = Yl(n, r),
                    n) {
                    case "dialog":
                        q("cancel", e),
                        q("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        q("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < Lr.length; i++)
                            q(Lr[i], e);
                        i = r;
                        break;
                    case "source":
                        q("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        q("error", e),
                        q("load", e),
                        i = r;
                        break;
                    case "details":
                        q("toggle", e),
                        i = r;
                        break;
                    case "input":
                        qs(e, r),
                        i = bl(e, r),
                        q("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = ae({}, r, {
                            value: void 0
                        }),
                        q("invalid", e);
                        break;
                    case "textarea":
                        tu(e, r),
                        i = Hl(e, r),
                        q("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    Wl(n, i),
                    a = i;
                    for (o in a)
                        if (a.hasOwnProperty(o)) {
                            var s = a[o];
                            o === "style" ? hf(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                            s != null && df(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && _r(e, s) : typeof s == "number" && _r(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Qr.hasOwnProperty(o) ? s != null && o === "onScroll" && q("scroll", e) : s != null && _a(e, o, s, l))
                        }
                    switch (n) {
                    case "input":
                        Si(e),
                        eu(e, r, !1);
                        break;
                    case "textarea":
                        Si(e),
                        nu(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + qt(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? Vn(e, !!r.multiple, o, !1) : r.defaultValue != null && Vn(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = oo)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Ie(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Md(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(P(166));
            if (n = dn(Zr.current),
            dn(yt.current),
            Ii(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[mt] = t,
                (o = r.nodeValue !== n) && (e = We,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Li(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Li(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                o && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[mt] = t,
                t.stateNode = r
        }
        return Ie(t),
        null;
    case 13:
        if (ee(oe),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (re && Je !== null && t.mode & 1 && !(t.flags & 128))
                td(),
                qn(),
                t.flags |= 98560,
                o = !1;
            else if (o = Ii(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(P(318));
                    if (o = t.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(P(317));
                    o[mt] = t
                } else
                    qn(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Ie(t),
                o = !1
            } else
                ut !== null && (Pa(ut),
                ut = null),
                o = !0;
            if (!o)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || oe.current & 1 ? ve === 0 && (ve = 3) : Es())),
        t.updateQueue !== null && (t.flags |= 4),
        Ie(t),
        null);
    case 4:
        return tr(),
        wa(e, t),
        e === null && Yr(t.stateNode.containerInfo),
        Ie(t),
        null;
    case 10:
        return ls(t.type._context),
        Ie(t),
        null;
    case 17:
        return be(t.type) && lo(),
        Ie(t),
        null;
    case 19:
        if (ee(oe),
        o = t.memoizedState,
        o === null)
            return Ie(t),
            null;
        if (r = (t.flags & 128) !== 0,
        l = o.rendering,
        l === null)
            if (r)
                Ar(o, !1);
            else {
                if (ve !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (l = ho(e),
                        l !== null) {
                            for (t.flags |= 128,
                            Ar(o, !1),
                            r = l.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                o = n,
                                e = r,
                                o.flags &= 14680066,
                                l = o.alternate,
                                l === null ? (o.childLanes = 0,
                                o.lanes = e,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = l.childLanes,
                                o.lanes = l.lanes,
                                o.child = l.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = l.memoizedProps,
                                o.memoizedState = l.memoizedState,
                                o.updateQueue = l.updateQueue,
                                o.type = l.type,
                                e = l.dependencies,
                                o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return Z(oe, oe.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                o.tail !== null && fe() > rr && (t.flags |= 128,
                r = !0,
                Ar(o, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = ho(l),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Ar(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !l.alternate && !re)
                        return Ie(t),
                        null
                } else
                    2 * fe() - o.renderingStartTime > rr && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Ar(o, !1),
                    t.lanes = 4194304);
            o.isBackwards ? (l.sibling = t.child,
            t.child = l) : (n = o.last,
            n !== null ? n.sibling = l : t.child = l,
            o.last = l)
        }
        return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = fe(),
        t.sibling = null,
        n = oe.current,
        Z(oe, r ? n & 1 | 2 : n & 1),
        t) : (Ie(t),
        null);
    case 22:
    case 23:
        return xs(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? He & 1073741824 && (Ie(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Ie(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(P(156, t.tag))
}
function Xg(e, t) {
    switch (ns(t),
    t.tag) {
    case 1:
        return be(t.type) && lo(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return tr(),
        ee(_e),
        ee(je),
        fs(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return cs(t),
        null;
    case 13:
        if (ee(oe),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(P(340));
            qn()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return ee(oe),
        null;
    case 4:
        return tr(),
        null;
    case 10:
        return ls(t.type._context),
        null;
    case 22:
    case 23:
        return xs(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Di = !1
  , Oe = !1
  , Gg = typeof WeakSet == "function" ? WeakSet : Set
  , j = null;
function zn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                se(e, t, r)
            }
        else
            n.current = null
}
function Sa(e, t, n) {
    try {
        n()
    } catch (r) {
        se(e, t, r)
    }
}
var Hu = !1;
function $g(e, t) {
    if (ia = no,
    e = bf(),
    es(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var l = 0
                      , a = -1
                      , s = -1
                      , u = 0
                      , f = 0
                      , p = e
                      , c = null;
                    t: for (; ; ) {
                        for (var v; p !== n || i !== 0 && p.nodeType !== 3 || (a = l + i),
                        p !== o || r !== 0 && p.nodeType !== 3 || (s = l + r),
                        p.nodeType === 3 && (l += p.nodeValue.length),
                        (v = p.firstChild) !== null; )
                            c = p,
                            p = v;
                        for (; ; ) {
                            if (p === e)
                                break t;
                            if (c === n && ++u === i && (a = l),
                            c === o && ++f === r && (s = l),
                            (v = p.nextSibling) !== null)
                                break;
                            p = c,
                            c = p.parentNode
                        }
                        p = v
                    }
                    n = a === -1 || s === -1 ? null : {
                        start: a,
                        end: s
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (oa = {
        focusedElem: e,
        selectionRange: n
    },
    no = !1,
    j = t; j !== null; )
        if (t = j,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            j = e;
        else
            for (; j !== null; ) {
                t = j;
                try {
                    var A = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (A !== null) {
                                var y = A.memoizedProps
                                  , R = A.memoizedState
                                  , g = t.stateNode
                                  , h = g.getSnapshotBeforeUpdate(t.elementType === t.type ? y : lt(t.type, y), R);
                                g.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var m = t.stateNode.containerInfo;
                            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(P(163))
                        }
                } catch (d) {
                    se(t, t.return, d)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    j = e;
                    break
                }
                j = t.return
            }
    return A = Hu,
    Hu = !1,
    A
}
function Fr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0,
                o !== void 0 && Sa(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}
function zo(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function xa(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function zd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    zd(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[mt],
    delete t[Gr],
    delete t[sa],
    delete t[Dg],
    delete t[Bg])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Qd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Ju(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Qd(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Ea(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = oo));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Ea(e, t, n),
        e = e.sibling; e !== null; )
            Ea(e, t, n),
            e = e.sibling
}
function Ca(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Ca(e, t, n),
        e = e.sibling; e !== null; )
            Ca(e, t, n),
            e = e.sibling
}
var Ee = null
  , at = !1;
function Ut(e, t, n) {
    for (n = n.child; n !== null; )
        _d(e, t, n),
        n = n.sibling
}
function _d(e, t, n) {
    if (vt && typeof vt.onCommitFiberUnmount == "function")
        try {
            vt.onCommitFiberUnmount(Oo, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Oe || zn(n, t);
    case 6:
        var r = Ee
          , i = at;
        Ee = null,
        Ut(e, t, n),
        Ee = r,
        at = i,
        Ee !== null && (at ? (e = Ee,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ee.removeChild(n.stateNode));
        break;
    case 18:
        Ee !== null && (at ? (e = Ee,
        n = n.stateNode,
        e.nodeType === 8 ? Sl(e.parentNode, n) : e.nodeType === 1 && Sl(e, n),
        Hr(e)) : Sl(Ee, n.stateNode));
        break;
    case 4:
        r = Ee,
        i = at,
        Ee = n.stateNode.containerInfo,
        at = !0,
        Ut(e, t, n),
        Ee = r,
        at = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Oe && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var o = i
                  , l = o.destroy;
                o = o.tag,
                l !== void 0 && (o & 2 || o & 4) && Sa(n, t, l),
                i = i.next
            } while (i !== r)
        }
        Ut(e, t, n);
        break;
    case 1:
        if (!Oe && (zn(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                se(n, t, a)
            }
        Ut(e, t, n);
        break;
    case 21:
        Ut(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Oe = (r = Oe) || n.memoizedState !== null,
        Ut(e, t, n),
        Oe = r) : Ut(e, t, n);
        break;
    default:
        Ut(e, t, n)
    }
}
function Wu(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Gg),
        t.forEach(function(r) {
            var i = lm.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function ot(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e
                  , l = t
                  , a = l;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        Ee = a.stateNode,
                        at = !1;
                        break e;
                    case 3:
                        Ee = a.stateNode.containerInfo,
                        at = !0;
                        break e;
                    case 4:
                        Ee = a.stateNode.containerInfo,
                        at = !0;
                        break e
                    }
                    a = a.return
                }
                if (Ee === null)
                    throw Error(P(160));
                _d(o, l, i),
                Ee = null,
                at = !1;
                var s = i.alternate;
                s !== null && (s.return = null),
                i.return = null
            } catch (u) {
                se(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            bd(t, e),
            t = t.sibling
}
function bd(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (ot(t, e),
        ht(e),
        r & 4) {
            try {
                Fr(3, e, e.return),
                zo(3, e)
            } catch (y) {
                se(e, e.return, y)
            }
            try {
                Fr(5, e, e.return)
            } catch (y) {
                se(e, e.return, y)
            }
        }
        break;
    case 1:
        ot(t, e),
        ht(e),
        r & 512 && n !== null && zn(n, n.return);
        break;
    case 5:
        if (ot(t, e),
        ht(e),
        r & 512 && n !== null && zn(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                _r(i, "")
            } catch (y) {
                se(e, e.return, y)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var o = e.memoizedProps
              , l = n !== null ? n.memoizedProps : o
              , a = e.type
              , s = e.updateQueue;
            if (e.updateQueue = null,
            s !== null)
                try {
                    a === "input" && o.type === "radio" && o.name != null && uf(i, o),
                    Yl(a, l);
                    var u = Yl(a, o);
                    for (l = 0; l < s.length; l += 2) {
                        var f = s[l]
                          , p = s[l + 1];
                        f === "style" ? hf(i, p) : f === "dangerouslySetInnerHTML" ? df(i, p) : f === "children" ? _r(i, p) : _a(i, f, p, u)
                    }
                    switch (a) {
                    case "input":
                        Kl(i, o);
                        break;
                    case "textarea":
                        cf(i, o);
                        break;
                    case "select":
                        var c = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!o.multiple;
                        var v = o.value;
                        v != null ? Vn(i, !!o.multiple, v, !1) : c !== !!o.multiple && (o.defaultValue != null ? Vn(i, !!o.multiple, o.defaultValue, !0) : Vn(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[Gr] = o
                } catch (y) {
                    se(e, e.return, y)
                }
        }
        break;
    case 6:
        if (ot(t, e),
        ht(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(P(162));
            i = e.stateNode,
            o = e.memoizedProps;
            try {
                i.nodeValue = o
            } catch (y) {
                se(e, e.return, y)
            }
        }
        break;
    case 3:
        if (ot(t, e),
        ht(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Hr(t.containerInfo)
            } catch (y) {
                se(e, e.return, y)
            }
        break;
    case 4:
        ot(t, e),
        ht(e);
        break;
    case 13:
        ot(t, e),
        ht(e),
        i = e.child,
        i.flags & 8192 && (o = i.memoizedState !== null,
        i.stateNode.isHidden = o,
        !o || i.alternate !== null && i.alternate.memoizedState !== null || (ws = fe())),
        r & 4 && Wu(e);
        break;
    case 22:
        if (f = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Oe = (u = Oe) || f,
        ot(t, e),
        Oe = u) : ot(t, e),
        ht(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !f && e.mode & 1)
                for (j = e,
                f = e.child; f !== null; ) {
                    for (p = j = f; j !== null; ) {
                        switch (c = j,
                        v = c.child,
                        c.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Fr(4, c, c.return);
                            break;
                        case 1:
                            zn(c, c.return);
                            var A = c.stateNode;
                            if (typeof A.componentWillUnmount == "function") {
                                r = c,
                                n = c.return;
                                try {
                                    t = r,
                                    A.props = t.memoizedProps,
                                    A.state = t.memoizedState,
                                    A.componentWillUnmount()
                                } catch (y) {
                                    se(r, n, y)
                                }
                            }
                            break;
                        case 5:
                            zn(c, c.return);
                            break;
                        case 22:
                            if (c.memoizedState !== null) {
                                Xu(p);
                                continue
                            }
                        }
                        v !== null ? (v.return = c,
                        j = v) : Xu(p)
                    }
                    f = f.sibling
                }
            e: for (f = null,
            p = e; ; ) {
                if (p.tag === 5) {
                    if (f === null) {
                        f = p;
                        try {
                            i = p.stateNode,
                            u ? (o = i.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = p.stateNode,
                            s = p.memoizedProps.style,
                            l = s != null && s.hasOwnProperty("display") ? s.display : null,
                            a.style.display = pf("display", l))
                        } catch (y) {
                            se(e, e.return, y)
                        }
                    }
                } else if (p.tag === 6) {
                    if (f === null)
                        try {
                            p.stateNode.nodeValue = u ? "" : p.memoizedProps
                        } catch (y) {
                            se(e, e.return, y)
                        }
                } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
                    p.child.return = p,
                    p = p.child;
                    continue
                }
                if (p === e)
                    break e;
                for (; p.sibling === null; ) {
                    if (p.return === null || p.return === e)
                        break e;
                    f === p && (f = null),
                    p = p.return
                }
                f === p && (f = null),
                p.sibling.return = p.return,
                p = p.sibling
            }
        }
        break;
    case 19:
        ot(t, e),
        ht(e),
        r & 4 && Wu(e);
        break;
    case 21:
        break;
    default:
        ot(t, e),
        ht(e)
    }
}
function ht(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Qd(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(P(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (_r(i, ""),
                r.flags &= -33);
                var o = Ju(e);
                Ca(e, o, i);
                break;
            case 3:
            case 4:
                var l = r.stateNode.containerInfo
                  , a = Ju(e);
                Ea(e, a, l);
                break;
            default:
                throw Error(P(161))
            }
        } catch (s) {
            se(e, e.return, s)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Zg(e, t, n) {
    j = e,
    Kd(e)
}
function Kd(e, t, n) {
    for (var r = (e.mode & 1) !== 0; j !== null; ) {
        var i = j
          , o = i.child;
        if (i.tag === 22 && r) {
            var l = i.memoizedState !== null || Di;
            if (!l) {
                var a = i.alternate
                  , s = a !== null && a.memoizedState !== null || Oe;
                a = Di;
                var u = Oe;
                if (Di = l,
                (Oe = s) && !u)
                    for (j = i; j !== null; )
                        l = j,
                        s = l.child,
                        l.tag === 22 && l.memoizedState !== null ? Gu(i) : s !== null ? (s.return = l,
                        j = s) : Gu(i);
                for (; o !== null; )
                    j = o,
                    Kd(o),
                    o = o.sibling;
                j = i,
                Di = a,
                Oe = u
            }
            Yu(e)
        } else
            i.subtreeFlags & 8772 && o !== null ? (o.return = i,
            j = o) : Yu(e)
    }
}
function Yu(e) {
    for (; j !== null; ) {
        var t = j;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Oe || zo(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Oe)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : lt(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && Ou(t, o, r);
                        break;
                    case 3:
                        var l = t.updateQueue;
                        if (l !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Ou(t, l, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var s = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                s.autoFocus && n.focus();
                                break;
                            case "img":
                                s.src && (n.src = s.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var f = u.memoizedState;
                                if (f !== null) {
                                    var p = f.dehydrated;
                                    p !== null && Hr(p)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(P(163))
                    }
                Oe || t.flags & 512 && xa(t)
            } catch (c) {
                se(t, t.return, c)
            }
        }
        if (t === e) {
            j = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            j = n;
            break
        }
        j = t.return
    }
}
function Xu(e) {
    for (; j !== null; ) {
        var t = j;
        if (t === e) {
            j = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            j = n;
            break
        }
        j = t.return
    }
}
function Gu(e) {
    for (; j !== null; ) {
        var t = j;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    zo(4, t)
                } catch (s) {
                    se(t, n, s)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (s) {
                        se(t, i, s)
                    }
                }
                var o = t.return;
                try {
                    xa(t)
                } catch (s) {
                    se(t, o, s)
                }
                break;
            case 5:
                var l = t.return;
                try {
                    xa(t)
                } catch (s) {
                    se(t, l, s)
                }
            }
        } catch (s) {
            se(t, t.return, s)
        }
        if (t === e) {
            j = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            j = a;
            break
        }
        j = t.return
    }
}
var qg = Math.ceil
  , Ao = jt.ReactCurrentDispatcher
  , vs = jt.ReactCurrentOwner
  , tt = jt.ReactCurrentBatchConfig
  , H = 0
  , Se = null
  , he = null
  , ke = 0
  , He = 0
  , Qn = nn(0)
  , ve = 0
  , ni = null
  , yn = 0
  , Qo = 0
  , ys = 0
  , Ur = null
  , ze = null
  , ws = 0
  , rr = 1 / 0
  , Et = null
  , vo = !1
  , ka = null
  , Xt = null
  , Bi = !1
  , Kt = null
  , yo = 0
  , Mr = 0
  , Ra = null
  , Yi = -1
  , Xi = 0;
function Te() {
    return H & 6 ? fe() : Yi !== -1 ? Yi : Yi = fe()
}
function Gt(e) {
    return e.mode & 1 ? H & 2 && ke !== 0 ? ke & -ke : Fg.transition !== null ? (Xi === 0 && (Xi = Rf()),
    Xi) : (e = J,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Df(e.type)),
    e) : 1
}
function ft(e, t, n, r) {
    if (50 < Mr)
        throw Mr = 0,
        Ra = null,
        Error(P(185));
    ai(e, n, r),
    (!(H & 2) || e !== Se) && (e === Se && (!(H & 2) && (Qo |= n),
    ve === 4 && _t(e, ke)),
    Ke(e, r),
    n === 1 && H === 0 && !(t.mode & 1) && (rr = fe() + 500,
    Fo && rn()))
}
function Ke(e, t) {
    var n = e.callbackNode;
    Fh(e, t);
    var r = to(e, e === Se ? ke : 0);
    if (r === 0)
        n !== null && ou(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && ou(n),
        t === 1)
            e.tag === 0 ? Tg($u.bind(null, e)) : Zf($u.bind(null, e)),
            Og(function() {
                !(H & 6) && rn()
            }),
            n = null;
        else {
            switch (Nf(r)) {
            case 1:
                n = Ja;
                break;
            case 4:
                n = Cf;
                break;
            case 16:
                n = eo;
                break;
            case 536870912:
                n = kf;
                break;
            default:
                n = eo
            }
            n = $d(n, Vd.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Vd(e, t) {
    if (Yi = -1,
    Xi = 0,
    H & 6)
        throw Error(P(327));
    var n = e.callbackNode;
    if (Xn() && e.callbackNode !== n)
        return null;
    var r = to(e, e === Se ? ke : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = wo(e, r);
    else {
        t = r;
        var i = H;
        H |= 2;
        var o = Jd();
        (Se !== e || ke !== t) && (Et = null,
        rr = fe() + 500,
        hn(e, t));
        do
            try {
                nm();
                break
            } catch (a) {
                Hd(e, a)
            }
        while (1);
        os(),
        Ao.current = o,
        H = i,
        he !== null ? t = 0 : (Se = null,
        ke = 0,
        t = ve)
    }
    if (t !== 0) {
        if (t === 2 && (i = ql(e),
        i !== 0 && (r = i,
        t = Na(e, i))),
        t === 1)
            throw n = ni,
            hn(e, 0),
            _t(e, r),
            Ke(e, fe()),
            n;
        if (t === 6)
            _t(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !em(i) && (t = wo(e, r),
            t === 2 && (o = ql(e),
            o !== 0 && (r = o,
            t = Na(e, o))),
            t === 1))
                throw n = ni,
                hn(e, 0),
                _t(e, r),
                Ke(e, fe()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(P(345));
            case 2:
                un(e, ze, Et);
                break;
            case 3:
                if (_t(e, r),
                (r & 130023424) === r && (t = ws + 500 - fe(),
                10 < t)) {
                    if (to(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        Te(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = aa(un.bind(null, e, ze, Et), t);
                    break
                }
                un(e, ze, Et);
                break;
            case 4:
                if (_t(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var l = 31 - ct(r);
                    o = 1 << l,
                    l = t[l],
                    l > i && (i = l),
                    r &= ~o
                }
                if (r = i,
                r = fe() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * qg(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = aa(un.bind(null, e, ze, Et), r);
                    break
                }
                un(e, ze, Et);
                break;
            case 5:
                un(e, ze, Et);
                break;
            default:
                throw Error(P(329))
            }
        }
    }
    return Ke(e, fe()),
    e.callbackNode === n ? Vd.bind(null, e) : null
}
function Na(e, t) {
    var n = Ur;
    return e.current.memoizedState.isDehydrated && (hn(e, t).flags |= 256),
    e = wo(e, t),
    e !== 2 && (t = ze,
    ze = n,
    t !== null && Pa(t)),
    e
}
function Pa(e) {
    ze === null ? ze = e : ze.push.apply(ze, e)
}
function em(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!dt(o(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function _t(e, t) {
    for (t &= ~ys,
    t &= ~Qo,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - ct(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function $u(e) {
    if (H & 6)
        throw Error(P(327));
    Xn();
    var t = to(e, 0);
    if (!(t & 1))
        return Ke(e, fe()),
        null;
    var n = wo(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = ql(e);
        r !== 0 && (t = r,
        n = Na(e, r))
    }
    if (n === 1)
        throw n = ni,
        hn(e, 0),
        _t(e, t),
        Ke(e, fe()),
        n;
    if (n === 6)
        throw Error(P(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    un(e, ze, Et),
    Ke(e, fe()),
    null
}
function Ss(e, t) {
    var n = H;
    H |= 1;
    try {
        return e(t)
    } finally {
        H = n,
        H === 0 && (rr = fe() + 500,
        Fo && rn())
    }
}
function wn(e) {
    Kt !== null && Kt.tag === 0 && !(H & 6) && Xn();
    var t = H;
    H |= 1;
    var n = tt.transition
      , r = J;
    try {
        if (tt.transition = null,
        J = 1,
        e)
            return e()
    } finally {
        J = r,
        tt.transition = n,
        H = t,
        !(H & 6) && rn()
    }
}
function xs() {
    He = Qn.current,
    ee(Qn)
}
function hn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    Ig(n)),
    he !== null)
        for (n = he.return; n !== null; ) {
            var r = n;
            switch (ns(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && lo();
                break;
            case 3:
                tr(),
                ee(_e),
                ee(je),
                fs();
                break;
            case 5:
                cs(r);
                break;
            case 4:
                tr();
                break;
            case 13:
                ee(oe);
                break;
            case 19:
                ee(oe);
                break;
            case 10:
                ls(r.type._context);
                break;
            case 22:
            case 23:
                xs()
            }
            n = n.return
        }
    if (Se = e,
    he = e = $t(e.current, null),
    ke = He = t,
    ve = 0,
    ni = null,
    ys = Qo = yn = 0,
    ze = Ur = null,
    fn !== null) {
        for (t = 0; t < fn.length; t++)
            if (n = fn[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , o = n.pending;
                if (o !== null) {
                    var l = o.next;
                    o.next = i,
                    r.next = l
                }
                n.pending = r
            }
        fn = null
    }
    return e
}
function Hd(e, t) {
    do {
        var n = he;
        try {
            if (os(),
            Hi.current = mo,
            go) {
                for (var r = le.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                go = !1
            }
            if (vn = 0,
            we = Ae = le = null,
            Tr = !1,
            qr = 0,
            vs.current = null,
            n === null || n.return === null) {
                ve = 1,
                ni = t,
                he = null;
                break
            }
            e: {
                var o = e
                  , l = n.return
                  , a = n
                  , s = t;
                if (t = ke,
                a.flags |= 32768,
                s !== null && typeof s == "object" && typeof s.then == "function") {
                    var u = s
                      , f = a
                      , p = f.tag;
                    if (!(f.mode & 1) && (p === 0 || p === 11 || p === 15)) {
                        var c = f.alternate;
                        c ? (f.updateQueue = c.updateQueue,
                        f.memoizedState = c.memoizedState,
                        f.lanes = c.lanes) : (f.updateQueue = null,
                        f.memoizedState = null)
                    }
                    var v = Mu(l);
                    if (v !== null) {
                        v.flags &= -257,
                        zu(v, l, a, o, t),
                        v.mode & 1 && Uu(o, u, t),
                        t = v,
                        s = u;
                        var A = t.updateQueue;
                        if (A === null) {
                            var y = new Set;
                            y.add(s),
                            t.updateQueue = y
                        } else
                            A.add(s);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Uu(o, u, t),
                            Es();
                            break e
                        }
                        s = Error(P(426))
                    }
                } else if (re && a.mode & 1) {
                    var R = Mu(l);
                    if (R !== null) {
                        !(R.flags & 65536) && (R.flags |= 256),
                        zu(R, l, a, o, t),
                        rs(nr(s, a));
                        break e
                    }
                }
                o = s = nr(s, a),
                ve !== 4 && (ve = 2),
                Ur === null ? Ur = [o] : Ur.push(o),
                o = l;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        t &= -t,
                        o.lanes |= t;
                        var g = Pd(o, s, t);
                        Iu(o, g);
                        break e;
                    case 1:
                        a = s;
                        var h = o.type
                          , m = o.stateNode;
                        if (!(o.flags & 128) && (typeof h.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Xt === null || !Xt.has(m)))) {
                            o.flags |= 65536,
                            t &= -t,
                            o.lanes |= t;
                            var d = Ld(o, a, t);
                            Iu(o, d);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            Yd(n)
        } catch (E) {
            t = E,
            he === n && n !== null && (he = n = n.return);
            continue
        }
        break
    } while (1)
}
function Jd() {
    var e = Ao.current;
    return Ao.current = mo,
    e === null ? mo : e
}
function Es() {
    (ve === 0 || ve === 3 || ve === 2) && (ve = 4),
    Se === null || !(yn & 268435455) && !(Qo & 268435455) || _t(Se, ke)
}
function wo(e, t) {
    var n = H;
    H |= 2;
    var r = Jd();
    (Se !== e || ke !== t) && (Et = null,
    hn(e, t));
    do
        try {
            tm();
            break
        } catch (i) {
            Hd(e, i)
        }
    while (1);
    if (os(),
    H = n,
    Ao.current = r,
    he !== null)
        throw Error(P(261));
    return Se = null,
    ke = 0,
    ve
}
function tm() {
    for (; he !== null; )
        Wd(he)
}
function nm() {
    for (; he !== null && !Nh(); )
        Wd(he)
}
function Wd(e) {
    var t = Gd(e.alternate, e, He);
    e.memoizedProps = e.pendingProps,
    t === null ? Yd(e) : he = t,
    vs.current = null
}
function Yd(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Xg(n, t),
            n !== null) {
                n.flags &= 32767,
                he = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                ve = 6,
                he = null;
                return
            }
        } else if (n = Yg(n, t, He),
        n !== null) {
            he = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            he = t;
            return
        }
        he = t = e
    } while (t !== null);
    ve === 0 && (ve = 5)
}
function un(e, t, n) {
    var r = J
      , i = tt.transition;
    try {
        tt.transition = null,
        J = 1,
        rm(e, t, n, r)
    } finally {
        tt.transition = i,
        J = r
    }
    return null
}
function rm(e, t, n, r) {
    do
        Xn();
    while (Kt !== null);
    if (H & 6)
        throw Error(P(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(P(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (Uh(e, o),
    e === Se && (he = Se = null,
    ke = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Bi || (Bi = !0,
    $d(eo, function() {
        return Xn(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
        o = tt.transition,
        tt.transition = null;
        var l = J;
        J = 1;
        var a = H;
        H |= 4,
        vs.current = null,
        $g(e, n),
        bd(n, e),
        Eg(oa),
        no = !!ia,
        oa = ia = null,
        e.current = n,
        Zg(n),
        Ph(),
        H = a,
        J = l,
        tt.transition = o
    } else
        e.current = n;
    if (Bi && (Bi = !1,
    Kt = e,
    yo = i),
    o = e.pendingLanes,
    o === 0 && (Xt = null),
    Oh(n.stateNode),
    Ke(e, fe()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (vo)
        throw vo = !1,
        e = ka,
        ka = null,
        e;
    return yo & 1 && e.tag !== 0 && Xn(),
    o = e.pendingLanes,
    o & 1 ? e === Ra ? Mr++ : (Mr = 0,
    Ra = e) : Mr = 0,
    rn(),
    null
}
function Xn() {
    if (Kt !== null) {
        var e = Nf(yo)
          , t = tt.transition
          , n = J;
        try {
            if (tt.transition = null,
            J = 16 > e ? 16 : e,
            Kt === null)
                var r = !1;
            else {
                if (e = Kt,
                Kt = null,
                yo = 0,
                H & 6)
                    throw Error(P(331));
                var i = H;
                for (H |= 4,
                j = e.current; j !== null; ) {
                    var o = j
                      , l = o.child;
                    if (j.flags & 16) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var s = 0; s < a.length; s++) {
                                var u = a[s];
                                for (j = u; j !== null; ) {
                                    var f = j;
                                    switch (f.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Fr(8, f, o)
                                    }
                                    var p = f.child;
                                    if (p !== null)
                                        p.return = f,
                                        j = p;
                                    else
                                        for (; j !== null; ) {
                                            f = j;
                                            var c = f.sibling
                                              , v = f.return;
                                            if (zd(f),
                                            f === u) {
                                                j = null;
                                                break
                                            }
                                            if (c !== null) {
                                                c.return = v,
                                                j = c;
                                                break
                                            }
                                            j = v
                                        }
                                }
                            }
                            var A = o.alternate;
                            if (A !== null) {
                                var y = A.child;
                                if (y !== null) {
                                    A.child = null;
                                    do {
                                        var R = y.sibling;
                                        y.sibling = null,
                                        y = R
                                    } while (y !== null)
                                }
                            }
                            j = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && l !== null)
                        l.return = o,
                        j = l;
                    else
                        e: for (; j !== null; ) {
                            if (o = j,
                            o.flags & 2048)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Fr(9, o, o.return)
                                }
                            var g = o.sibling;
                            if (g !== null) {
                                g.return = o.return,
                                j = g;
                                break e
                            }
                            j = o.return
                        }
                }
                var h = e.current;
                for (j = h; j !== null; ) {
                    l = j;
                    var m = l.child;
                    if (l.subtreeFlags & 2064 && m !== null)
                        m.return = l,
                        j = m;
                    else
                        e: for (l = h; j !== null; ) {
                            if (a = j,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        zo(9, a)
                                    }
                                } catch (E) {
                                    se(a, a.return, E)
                                }
                            if (a === l) {
                                j = null;
                                break e
                            }
                            var d = a.sibling;
                            if (d !== null) {
                                d.return = a.return,
                                j = d;
                                break e
                            }
                            j = a.return
                        }
                }
                if (H = i,
                rn(),
                vt && typeof vt.onPostCommitFiberRoot == "function")
                    try {
                        vt.onPostCommitFiberRoot(Oo, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            J = n,
            tt.transition = t
        }
    }
    return !1
}
function Zu(e, t, n) {
    t = nr(n, t),
    t = Pd(e, t, 1),
    e = Yt(e, t, 1),
    t = Te(),
    e !== null && (ai(e, 1, t),
    Ke(e, t))
}
function se(e, t, n) {
    if (e.tag === 3)
        Zu(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Zu(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Xt === null || !Xt.has(r))) {
                    e = nr(n, e),
                    e = Ld(t, e, 1),
                    t = Yt(t, e, 1),
                    e = Te(),
                    t !== null && (ai(t, 1, e),
                    Ke(t, e));
                    break
                }
            }
            t = t.return
        }
}
function im(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Te(),
    e.pingedLanes |= e.suspendedLanes & n,
    Se === e && (ke & n) === n && (ve === 4 || ve === 3 && (ke & 130023424) === ke && 500 > fe() - ws ? hn(e, 0) : ys |= n),
    Ke(e, t)
}
function Xd(e, t) {
    t === 0 && (e.mode & 1 ? (t = Ci,
    Ci <<= 1,
    !(Ci & 130023424) && (Ci = 4194304)) : t = 1);
    var n = Te();
    e = It(e, t),
    e !== null && (ai(e, t, n),
    Ke(e, n))
}
function om(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Xd(e, n)
}
function lm(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(P(314))
    }
    r !== null && r.delete(t),
    Xd(e, n)
}
var Gd;
Gd = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || _e.current)
            Qe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Qe = !1,
                Wg(e, t, n);
            Qe = !!(e.flags & 131072)
        }
    else
        Qe = !1,
        re && t.flags & 1048576 && qf(t, uo, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Wi(e, t),
        e = t.pendingProps;
        var i = Zn(t, je.current);
        Yn(t, n),
        i = ps(null, t, r, e, i, n);
        var o = hs();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        be(r) ? (o = !0,
        ao(t)) : o = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        ss(t),
        i.updater = Uo,
        t.stateNode = i,
        i._reactInternals = t,
        ha(t, r, e, n),
        t = Aa(null, t, r, !0, o, n)) : (t.tag = 0,
        re && o && ts(t),
        Be(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Wi(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = sm(r),
            e = lt(r, e),
            i) {
            case 0:
                t = ma(null, t, r, e, n);
                break e;
            case 1:
                t = bu(null, t, r, e, n);
                break e;
            case 11:
                t = Qu(null, t, r, e, n);
                break e;
            case 14:
                t = _u(null, t, r, lt(r.type, e), n);
                break e
            }
            throw Error(P(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : lt(r, i),
        ma(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : lt(r, i),
        bu(e, t, r, i, n);
    case 3:
        e: {
            if (Dd(t),
            e === null)
                throw Error(P(387));
            r = t.pendingProps,
            o = t.memoizedState,
            i = o.element,
            rd(e, t),
            po(t, r, null, n);
            var l = t.memoizedState;
            if (r = l.element,
            o.isDehydrated)
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: l.cache,
                    pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                    transitions: l.transitions
                },
                t.updateQueue.baseState = o,
                t.memoizedState = o,
                t.flags & 256) {
                    i = nr(Error(P(423)), t),
                    t = Ku(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = nr(Error(P(424)), t),
                    t = Ku(e, t, r, n, i);
                    break e
                } else
                    for (Je = Wt(t.stateNode.containerInfo.firstChild),
                    We = t,
                    re = !0,
                    ut = null,
                    n = ad(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (qn(),
                r === i) {
                    t = Ot(e, t, n);
                    break e
                }
                Be(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return sd(t),
        e === null && fa(t),
        r = t.type,
        i = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        l = i.children,
        la(r, i) ? l = null : o !== null && la(r, o) && (t.flags |= 32),
        jd(e, t),
        Be(e, t, l, n),
        t.child;
    case 6:
        return e === null && fa(t),
        null;
    case 13:
        return Bd(e, t, n);
    case 4:
        return us(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = er(t, null, r, n) : Be(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : lt(r, i),
        Qu(e, t, r, i, n);
    case 7:
        return Be(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Be(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Be(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            o = t.memoizedProps,
            l = i.value,
            Z(co, r._currentValue),
            r._currentValue = l,
            o !== null)
                if (dt(o.value, l)) {
                    if (o.children === i.children && !_e.current) {
                        t = Ot(e, t, n);
                        break e
                    }
                } else
                    for (o = t.child,
                    o !== null && (o.return = t); o !== null; ) {
                        var a = o.dependencies;
                        if (a !== null) {
                            l = o.child;
                            for (var s = a.firstContext; s !== null; ) {
                                if (s.context === r) {
                                    if (o.tag === 1) {
                                        s = Nt(-1, n & -n),
                                        s.tag = 2;
                                        var u = o.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var f = u.pending;
                                            f === null ? s.next = s : (s.next = f.next,
                                            f.next = s),
                                            u.pending = s
                                        }
                                    }
                                    o.lanes |= n,
                                    s = o.alternate,
                                    s !== null && (s.lanes |= n),
                                    da(o.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                s = s.next
                            }
                        } else if (o.tag === 10)
                            l = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (l = o.return,
                            l === null)
                                throw Error(P(341));
                            l.lanes |= n,
                            a = l.alternate,
                            a !== null && (a.lanes |= n),
                            da(l, n, t),
                            l = o.sibling
                        } else
                            l = o.child;
                        if (l !== null)
                            l.return = o;
                        else
                            for (l = o; l !== null; ) {
                                if (l === t) {
                                    l = null;
                                    break
                                }
                                if (o = l.sibling,
                                o !== null) {
                                    o.return = l.return,
                                    l = o;
                                    break
                                }
                                l = l.return
                            }
                        o = l
                    }
            Be(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        Yn(t, n),
        i = nt(i),
        r = r(i),
        t.flags |= 1,
        Be(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = lt(r, t.pendingProps),
        i = lt(r.type, i),
        _u(e, t, r, i, n);
    case 15:
        return Id(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : lt(r, i),
        Wi(e, t),
        t.tag = 1,
        be(r) ? (e = !0,
        ao(t)) : e = !1,
        Yn(t, n),
        od(t, r, i),
        ha(t, r, i, n),
        Aa(null, t, r, !0, e, n);
    case 19:
        return Td(e, t, n);
    case 22:
        return Od(e, t, n)
    }
    throw Error(P(156, t.tag))
}
;
function $d(e, t) {
    return Ef(e, t)
}
function am(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function et(e, t, n, r) {
    return new am(e,t,n,r)
}
function Cs(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function sm(e) {
    if (typeof e == "function")
        return Cs(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Ka)
            return 11;
        if (e === Va)
            return 14
    }
    return 2
}
function $t(e, t) {
    var n = e.alternate;
    return n === null ? (n = et(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Gi(e, t, n, r, i, o) {
    var l = 2;
    if (r = e,
    typeof e == "function")
        Cs(e) && (l = 1);
    else if (typeof e == "string")
        l = 5;
    else
        e: switch (e) {
        case In:
            return gn(n.children, i, o, t);
        case ba:
            l = 8,
            i |= 8;
            break;
        case Ml:
            return e = et(12, n, t, i | 2),
            e.elementType = Ml,
            e.lanes = o,
            e;
        case zl:
            return e = et(13, n, t, i),
            e.elementType = zl,
            e.lanes = o,
            e;
        case Ql:
            return e = et(19, n, t, i),
            e.elementType = Ql,
            e.lanes = o,
            e;
        case lf:
            return _o(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case rf:
                    l = 10;
                    break e;
                case of:
                    l = 9;
                    break e;
                case Ka:
                    l = 11;
                    break e;
                case Va:
                    l = 14;
                    break e;
                case Mt:
                    l = 16,
                    r = null;
                    break e
                }
            throw Error(P(130, e == null ? e : typeof e, ""))
        }
    return t = et(l, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = o,
    t
}
function gn(e, t, n, r) {
    return e = et(7, e, r, t),
    e.lanes = n,
    e
}
function _o(e, t, n, r) {
    return e = et(22, e, r, t),
    e.elementType = lf,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Ll(e, t, n) {
    return e = et(6, e, null, t),
    e.lanes = n,
    e
}
function Il(e, t, n) {
    return t = et(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function um(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = cl(0),
    this.expirationTimes = cl(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = cl(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function ks(e, t, n, r, i, o, l, a, s) {
    return e = new um(e,t,n,a,s),
    t === 1 ? (t = 1,
    o === !0 && (t |= 8)) : t = 0,
    o = et(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    ss(o),
    e
}
function cm(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Ln,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Zd(e) {
    if (!e)
        return en;
    e = e._reactInternals;
    e: {
        if (xn(e) !== e || e.tag !== 1)
            throw Error(P(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (be(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(P(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (be(n))
            return $f(e, n, t)
    }
    return t
}
function qd(e, t, n, r, i, o, l, a, s) {
    return e = ks(n, r, !0, e, i, o, l, a, s),
    e.context = Zd(null),
    n = e.current,
    r = Te(),
    i = Gt(n),
    o = Nt(r, i),
    o.callback = t ?? null,
    Yt(n, o, i),
    e.current.lanes = i,
    ai(e, i, r),
    Ke(e, r),
    e
}
function bo(e, t, n, r) {
    var i = t.current
      , o = Te()
      , l = Gt(i);
    return n = Zd(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Nt(o, l),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Yt(i, t, l),
    e !== null && (ft(e, i, l, o),
    Vi(e, i, l)),
    l
}
function So(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function qu(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Rs(e, t) {
    qu(e, t),
    (e = e.alternate) && qu(e, t)
}
function fm() {
    return null
}
var ep = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Ns(e) {
    this._internalRoot = e
}
Ko.prototype.render = Ns.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(P(409));
    bo(e, t, null, null)
}
;
Ko.prototype.unmount = Ns.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        wn(function() {
            bo(null, e, null, null)
        }),
        t[Lt] = null
    }
}
;
function Ko(e) {
    this._internalRoot = e
}
Ko.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = If();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Qt.length && t !== 0 && t < Qt[n].priority; n++)
            ;
        Qt.splice(n, 0, e),
        n === 0 && jf(e)
    }
}
;
function Ps(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Vo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function ec() {}
function dm(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var u = So(l);
                o.call(u)
            }
        }
        var l = qd(t, r, e, 0, null, !1, !1, "", ec);
        return e._reactRootContainer = l,
        e[Lt] = l.current,
        Yr(e.nodeType === 8 ? e.parentNode : e),
        wn(),
        l
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = So(s);
            a.call(u)
        }
    }
    var s = ks(e, 0, !1, null, null, !1, !1, "", ec);
    return e._reactRootContainer = s,
    e[Lt] = s.current,
    Yr(e.nodeType === 8 ? e.parentNode : e),
    wn(function() {
        bo(t, s, n, r)
    }),
    s
}
function Ho(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var l = o;
        if (typeof i == "function") {
            var a = i;
            i = function() {
                var s = So(l);
                a.call(s)
            }
        }
        bo(t, l, e, i)
    } else
        l = dm(n, t, e, i, r);
    return So(l)
}
Pf = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Pr(t.pendingLanes);
            n !== 0 && (Wa(t, n | 1),
            Ke(t, fe()),
            !(H & 6) && (rr = fe() + 500,
            rn()))
        }
        break;
    case 13:
        wn(function() {
            var r = It(e, 1);
            if (r !== null) {
                var i = Te();
                ft(r, e, 1, i)
            }
        }),
        Rs(e, 1)
    }
}
;
Ya = function(e) {
    if (e.tag === 13) {
        var t = It(e, 134217728);
        if (t !== null) {
            var n = Te();
            ft(t, e, 134217728, n)
        }
        Rs(e, 134217728)
    }
}
;
Lf = function(e) {
    if (e.tag === 13) {
        var t = Gt(e)
          , n = It(e, t);
        if (n !== null) {
            var r = Te();
            ft(n, e, t, r)
        }
        Rs(e, t)
    }
}
;
If = function() {
    return J
}
;
Of = function(e, t) {
    var n = J;
    try {
        return J = e,
        t()
    } finally {
        J = n
    }
}
;
Gl = function(e, t, n) {
    switch (t) {
    case "input":
        if (Kl(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = To(r);
                    if (!i)
                        throw Error(P(90));
                    sf(r),
                    Kl(r, i)
                }
            }
        }
        break;
    case "textarea":
        cf(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Vn(e, !!n.multiple, t, !1)
    }
}
;
Af = Ss;
vf = wn;
var pm = {
    usingClientEntryPoint: !1,
    Events: [ui, Bn, To, gf, mf, Ss]
}
  , vr = {
    findFiberByHostInstance: cn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
}
  , hm = {
    bundleType: vr.bundleType,
    version: vr.version,
    rendererPackageName: vr.rendererPackageName,
    rendererConfig: vr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: jt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Sf(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: vr.findFiberByHostInstance || fm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ti = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ti.isDisabled && Ti.supportsFiber)
        try {
            Oo = Ti.inject(hm),
            vt = Ti
        } catch {}
}
Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pm;
Xe.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ps(t))
        throw Error(P(200));
    return cm(e, t, null, n)
}
;
Xe.createRoot = function(e, t) {
    if (!Ps(e))
        throw Error(P(299));
    var n = !1
      , r = ""
      , i = ep;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = ks(e, 1, !1, null, null, n, !1, r, i),
    e[Lt] = t.current,
    Yr(e.nodeType === 8 ? e.parentNode : e),
    new Ns(t)
}
;
Xe.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(P(188)) : (e = Object.keys(e).join(","),
        Error(P(268, e)));
    return e = Sf(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Xe.flushSync = function(e) {
    return wn(e)
}
;
Xe.hydrate = function(e, t, n) {
    if (!Vo(t))
        throw Error(P(200));
    return Ho(null, e, t, !0, n)
}
;
Xe.hydrateRoot = function(e, t, n) {
    if (!Ps(e))
        throw Error(P(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , o = ""
      , l = ep;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    t = qd(t, null, e, 1, n ?? null, i, !1, o, l),
    e[Lt] = t.current,
    Yr(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Ko(t)
}
;
Xe.render = function(e, t, n) {
    if (!Vo(t))
        throw Error(P(200));
    return Ho(null, e, t, !1, n)
}
;
Xe.unmountComponentAtNode = function(e) {
    if (!Vo(e))
        throw Error(P(40));
    return e._reactRootContainer ? (wn(function() {
        Ho(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Lt] = null
        })
    }),
    !0) : !1
}
;
Xe.unstable_batchedUpdates = Ss;
Xe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Vo(n))
        throw Error(P(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(P(38));
    return Ho(e, t, n, !1, r)
}
;
Xe.version = "18.2.0-next-9e3b772b8-20220608";
function tp() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tp)
        } catch (e) {
            console.error(e)
        }
}
tp(),
Zc.exports = Xe;
var gm = Zc.exports
  , tc = gm;
Fl.createRoot = tc.createRoot,
Fl.hydrateRoot = tc.hydrateRoot;
/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ne() {
    return ne = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    ne.apply(this, arguments)
}
var pe;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(pe || (pe = {}));
const nc = "popstate";
function mm(e) {
    e === void 0 && (e = {});
    function t(r, i) {
        let {pathname: o, search: l, hash: a} = r.location;
        return ri("", {
            pathname: o,
            search: l,
            hash: a
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }
    function n(r, i) {
        return typeof i == "string" ? i : fi(i)
    }
    return vm(t, n, null, e)
}
function K(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function ir(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function Am() {
    return Math.random().toString(36).substr(2, 8)
}
function rc(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function ri(e, t, n, r) {
    return n === void 0 && (n = null),
    ne({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Dt(t) : t, {
        state: n,
        key: t && t.key || r || Am()
    })
}
function fi(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function Dt(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function vm(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: i=document.defaultView, v5Compat: o=!1} = r
      , l = i.history
      , a = pe.Pop
      , s = null
      , u = f();
    u == null && (u = 0,
    l.replaceState(ne({}, l.state, {
        idx: u
    }), ""));
    function f() {
        return (l.state || {
            idx: null
        }).idx
    }
    function p() {
        a = pe.Pop;
        let R = f()
          , g = R == null ? null : R - u;
        u = R,
        s && s({
            action: a,
            location: y.location,
            delta: g
        })
    }
    function c(R, g) {
        a = pe.Push;
        let h = ri(y.location, R, g);
        n && n(h, R),
        u = f() + 1;
        let m = rc(h, u)
          , d = y.createHref(h);
        try {
            l.pushState(m, "", d)
        } catch (E) {
            if (E instanceof DOMException && E.name === "DataCloneError")
                throw E;
            i.location.assign(d)
        }
        o && s && s({
            action: a,
            location: y.location,
            delta: 1
        })
    }
    function v(R, g) {
        a = pe.Replace;
        let h = ri(y.location, R, g);
        n && n(h, R),
        u = f();
        let m = rc(h, u)
          , d = y.createHref(h);
        l.replaceState(m, "", d),
        o && s && s({
            action: a,
            location: y.location,
            delta: 0
        })
    }
    function A(R) {
        let g = i.location.origin !== "null" ? i.location.origin : i.location.href
          , h = typeof R == "string" ? R : fi(R);
        return K(g, "No window.location.(origin|href) available to create URL for href: " + h),
        new URL(h,g)
    }
    let y = {
        get action() {
            return a
        },
        get location() {
            return e(i, l)
        },
        listen(R) {
            if (s)
                throw new Error("A history only accepts one active listener");
            return i.addEventListener(nc, p),
            s = R,
            () => {
                i.removeEventListener(nc, p),
                s = null
            }
        },
        createHref(R) {
            return t(i, R)
        },
        createURL: A,
        encodeLocation(R) {
            let g = A(R);
            return {
                pathname: g.pathname,
                search: g.search,
                hash: g.hash
            }
        },
        push: c,
        replace: v,
        go(R) {
            return l.go(R)
        }
    };
    return y
}
var ce;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(ce || (ce = {}));
const ym = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function wm(e) {
    return e.index === !0
}
function La(e, t, n, r) {
    return n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map( (i, o) => {
        let l = [...n, o]
          , a = typeof i.id == "string" ? i.id : l.join("-");
        if (K(i.index !== !0 || !i.children, "Cannot specify children on an index route"),
        K(!r[a], 'Found a route id collision on id "' + a + `".  Route id's must be globally unique within Data Router usages`),
        wm(i)) {
            let s = ne({}, i, t(i), {
                id: a
            });
            return r[a] = s,
            s
        } else {
            let s = ne({}, i, t(i), {
                id: a,
                children: void 0
            });
            return r[a] = s,
            i.children && (s.children = La(i.children, t, l, r)),
            s
        }
    }
    )
}
function _n(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? Dt(t) : t
      , i = di(r.pathname || "/", n);
    if (i == null)
        return null;
    let o = np(e);
    Sm(o);
    let l = null;
    for (let a = 0; l == null && a < o.length; ++a)
        l = Im(o[a], Dm(i));
    return l
}
function np(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let i = (o, l, a) => {
        let s = {
            relativePath: a === void 0 ? o.path || "" : a,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: l,
            route: o
        };
        s.relativePath.startsWith("/") && (K(s.relativePath.startsWith(r), 'Absolute route path "' + s.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        s.relativePath = s.relativePath.slice(r.length));
        let u = Zt([r, s.relativePath])
          , f = n.concat(s);
        o.children && o.children.length > 0 && (K(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        np(o.children, t, f, u)),
        !(o.path == null && !o.index) && t.push({
            path: u,
            score: Pm(u, o.index),
            routesMeta: f
        })
    }
    ;
    return e.forEach( (o, l) => {
        var a;
        if (o.path === "" || !((a = o.path) != null && a.includes("?")))
            i(o, l);
        else
            for (let s of rp(o.path))
                i(o, l, s)
    }
    ),
    t
}
function rp(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , i = n.endsWith("?")
      , o = n.replace(/\?$/, "");
    if (r.length === 0)
        return i ? [o, ""] : [o];
    let l = rp(r.join("/"))
      , a = [];
    return a.push(...l.map(s => s === "" ? o : [o, s].join("/"))),
    i && a.push(...l),
    a.map(s => e.startsWith("/") && s === "" ? "/" : s)
}
function Sm(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : Lm(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const xm = /^:\w+$/
  , Em = 3
  , Cm = 2
  , km = 1
  , Rm = 10
  , Nm = -2
  , ic = e => e === "*";
function Pm(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(ic) && (r += Nm),
    t && (r += Cm),
    n.filter(i => !ic(i)).reduce( (i, o) => i + (xm.test(o) ? Em : o === "" ? km : Rm), r)
}
function Lm(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function Im(e, t) {
    let {routesMeta: n} = e
      , r = {}
      , i = "/"
      , o = [];
    for (let l = 0; l < n.length; ++l) {
        let a = n[l]
          , s = l === n.length - 1
          , u = i === "/" ? t : t.slice(i.length) || "/"
          , f = Om({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: s
        }, u);
        if (!f)
            return null;
        Object.assign(r, f.params);
        let p = a.route;
        o.push({
            params: r,
            pathname: Zt([i, f.pathname]),
            pathnameBase: Um(Zt([i, f.pathnameBase])),
            route: p
        }),
        f.pathnameBase !== "/" && (i = Zt([i, f.pathnameBase]))
    }
    return o
}
function Om(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = jm(e.path, e.caseSensitive, e.end)
      , i = t.match(n);
    if (!i)
        return null;
    let o = i[0]
      , l = o.replace(/(.)\/+$/, "$1")
      , a = i.slice(1);
    return {
        params: r.reduce( (u, f, p) => {
            if (f === "*") {
                let c = a[p] || "";
                l = o.slice(0, o.length - c.length).replace(/(.)\/+$/, "$1")
            }
            return u[f] = Bm(a[p] || "", f),
            u
        }
        , {}),
        pathname: o,
        pathnameBase: l,
        pattern: e
    }
}
function jm(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ir(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (l, a) => (r.push(a),
    "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push("*"),
    i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i,t ? void 0 : "i"), r]
}
function Dm(e) {
    try {
        return decodeURI(e)
    } catch (t) {
        return ir(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function Bm(e, t) {
    try {
        return decodeURIComponent(e)
    } catch (n) {
        return ir(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")),
        e
    }
}
function di(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function Tm(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: i=""} = typeof e == "string" ? Dt(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : Fm(n, t) : t,
        search: Mm(r),
        hash: zm(i)
    }
}
function Fm(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(i => {
        i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function Ol(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function Jo(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function Ls(e, t, n, r) {
    r === void 0 && (r = !1);
    let i;
    typeof e == "string" ? i = Dt(e) : (i = ne({}, e),
    K(!i.pathname || !i.pathname.includes("?"), Ol("?", "pathname", "search", i)),
    K(!i.pathname || !i.pathname.includes("#"), Ol("#", "pathname", "hash", i)),
    K(!i.search || !i.search.includes("#"), Ol("#", "search", "hash", i)));
    let o = e === "" || i.pathname === "", l = o ? "/" : i.pathname, a;
    if (r || l == null)
        a = n;
    else {
        let p = t.length - 1;
        if (l.startsWith("..")) {
            let c = l.split("/");
            for (; c[0] === ".."; )
                c.shift(),
                p -= 1;
            i.pathname = c.join("/")
        }
        a = p >= 0 ? t[p] : "/"
    }
    let s = Tm(i, a)
      , u = l && l !== "/" && l.endsWith("/")
      , f = (o || l === ".") && n.endsWith("/");
    return !s.pathname.endsWith("/") && (u || f) && (s.pathname += "/"),
    s
}
const Zt = e => e.join("/").replace(/\/\/+/g, "/")
  , Um = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , Mm = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , zm = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
class Is {
    constructor(t, n, r, i) {
        i === void 0 && (i = !1),
        this.status = t,
        this.statusText = n || "",
        this.internal = i,
        r instanceof Error ? (this.data = r.toString(),
        this.error = r) : this.data = r
    }
}
function ip(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const op = ["post", "put", "patch", "delete"]
  , Qm = new Set(op)
  , _m = ["get", ...op]
  , bm = new Set(_m)
  , Km = new Set([301, 302, 303, 307, 308])
  , Vm = new Set([307, 308])
  , jl = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
}
  , Hm = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
}
  , yr = {
    state: "unblocked",
    proceed: void 0,
    reset: void 0,
    location: void 0
}
  , lp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , Jm = e => ({
    hasErrorBoundary: !!e.hasErrorBoundary
});
function Wm(e) {
    const t = e.window ? e.window : typeof window < "u" ? window : void 0
      , n = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u"
      , r = !n;
    K(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    let i;
    if (e.mapRouteProperties)
        i = e.mapRouteProperties;
    else if (e.detectErrorBoundary) {
        let w = e.detectErrorBoundary;
        i = S => ({
            hasErrorBoundary: w(S)
        })
    } else
        i = Jm;
    let o = {}, l = La(e.routes, i, void 0, o), a, s = e.basename || "/", u = ne({
        v7_normalizeFormMethod: !1,
        v7_prependBasename: !1
    }, e.future), f = null, p = new Set, c = null, v = null, A = null, y = e.hydrationData != null, R = _n(l, e.history.location, s), g = null;
    if (R == null) {
        let w = $e(404, {
            pathname: e.history.location.pathname
        })
          , {matches: S, route: k} = dc(l);
        R = S,
        g = {
            [k.id]: w
        }
    }
    let h = !R.some(w => w.route.lazy) && (!R.some(w => w.route.loader) || e.hydrationData != null), m, d = {
        historyAction: e.history.action,
        location: e.history.location,
        matches: R,
        initialized: h,
        navigation: jl,
        restoreScrollPosition: e.hydrationData != null ? !1 : null,
        preventScrollReset: !1,
        revalidation: "idle",
        loaderData: e.hydrationData && e.hydrationData.loaderData || {},
        actionData: e.hydrationData && e.hydrationData.actionData || null,
        errors: e.hydrationData && e.hydrationData.errors || g,
        fetchers: new Map,
        blockers: new Map
    }, E = pe.Pop, N = !1, C, I = !1, b = !1, T = [], ge = [], W = new Map, Ne = 0, Me = -1, Ve = new Map, Pe = new Set, te = new Map, L = new Map, F = new Map, M = !1;
    function ie() {
        return f = e.history.listen(w => {
            let {action: S, location: k, delta: D} = w;
            if (M) {
                M = !1;
                return
            }
            ir(F.size === 0 || D != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
            let _ = Ks({
                currentLocation: d.location,
                nextLocation: k,
                historyAction: S
            });
            if (_ && D != null) {
                M = !0,
                e.history.go(D * -1),
                Ai(_, {
                    state: "blocked",
                    location: k,
                    proceed() {
                        Ai(_, {
                            state: "proceeding",
                            proceed: void 0,
                            reset: void 0,
                            location: k
                        }),
                        e.history.go(D)
                    },
                    reset() {
                        let z = new Map(d.blockers);
                        z.set(_, yr),
                        $({
                            blockers: z
                        })
                    }
                });
                return
            }
            return Bt(S, k)
        }
        ),
        d.initialized || Bt(pe.Pop, d.location),
        m
    }
    function de() {
        f && f(),
        p.clear(),
        C && C.abort(),
        d.fetchers.forEach( (w, S) => Zo(S)),
        d.blockers.forEach( (w, S) => bs(S))
    }
    function En(w) {
        return p.add(w),
        () => p.delete(w)
    }
    function $(w) {
        d = ne({}, d, w),
        p.forEach(S => S(d))
    }
    function wt(w, S) {
        var k, D;
        let _ = d.actionData != null && d.navigation.formMethod != null && st(d.navigation.formMethod) && d.navigation.state === "loading" && ((k = w.state) == null ? void 0 : k._isRedirect) !== !0, z;
        S.actionData ? Object.keys(S.actionData).length > 0 ? z = S.actionData : z = null : _ ? z = d.actionData : z = null;
        let Q = S.loaderData ? fc(d.loaderData, S.loaderData, S.matches || [], S.errors) : d.loaderData
          , U = d.blockers;
        U.size > 0 && (U = new Map(U),
        U.forEach( (G, xe) => U.set(xe, yr)));
        let B = N === !0 || d.navigation.formMethod != null && st(d.navigation.formMethod) && ((D = w.state) == null ? void 0 : D._isRedirect) !== !0;
        a && (l = a,
        a = void 0),
        I || E === pe.Pop || (E === pe.Push ? e.history.push(w, w.state) : E === pe.Replace && e.history.replace(w, w.state)),
        $(ne({}, S, {
            actionData: z,
            loaderData: Q,
            historyAction: E,
            location: w,
            initialized: !0,
            navigation: jl,
            revalidation: "idle",
            restoreScrollPosition: Hs(w, S.matches || d.matches),
            preventScrollReset: B,
            blockers: U
        })),
        E = pe.Pop,
        N = !1,
        I = !1,
        b = !1,
        T = [],
        ge = []
    }
    async function pt(w, S) {
        if (typeof w == "number") {
            e.history.go(w);
            return
        }
        let k = Ia(d.location, d.matches, s, u.v7_prependBasename, w, S == null ? void 0 : S.fromRouteId, S == null ? void 0 : S.relative)
          , {path: D, submission: _, error: z} = oc(u.v7_normalizeFormMethod, !1, k, S)
          , Q = d.location
          , U = ri(d.location, D, S && S.state);
        U = ne({}, U, e.history.encodeLocation(U));
        let B = S && S.replace != null ? S.replace : void 0
          , G = pe.Push;
        B === !0 ? G = pe.Replace : B === !1 || _ != null && st(_.formMethod) && _.formAction === d.location.pathname + d.location.search && (G = pe.Replace);
        let xe = S && "preventScrollReset"in S ? S.preventScrollReset === !0 : void 0
          , Y = Ks({
            currentLocation: Q,
            nextLocation: U,
            historyAction: G
        });
        if (Y) {
            Ai(Y, {
                state: "blocked",
                location: U,
                proceed() {
                    Ai(Y, {
                        state: "proceeding",
                        proceed: void 0,
                        reset: void 0,
                        location: U
                    }),
                    pt(w, S)
                },
                reset() {
                    let ue = new Map(d.blockers);
                    ue.set(Y, yr),
                    $({
                        blockers: ue
                    })
                }
            });
            return
        }
        return await Bt(G, U, {
            submission: _,
            pendingError: z,
            preventScrollReset: xe,
            replace: S && S.replace
        })
    }
    function Cn() {
        if ($o(),
        $({
            revalidation: "loading"
        }),
        d.navigation.state !== "submitting") {
            if (d.navigation.state === "idle") {
                Bt(d.historyAction, d.location, {
                    startUninterruptedRevalidation: !0
                });
                return
            }
            Bt(E || d.historyAction, d.navigation.location, {
                overrideNavigation: d.navigation
            })
        }
    }
    async function Bt(w, S, k) {
        C && C.abort(),
        C = null,
        E = w,
        I = (k && k.startUninterruptedRevalidation) === !0,
        zp(d.location, d.matches),
        N = (k && k.preventScrollReset) === !0;
        let D = a || l
          , _ = k && k.overrideNavigation
          , z = _n(D, S, s);
        if (!z) {
            let ue = $e(404, {
                pathname: S.pathname
            })
              , {matches: ye, route: ln} = dc(D);
            qo(),
            wt(S, {
                matches: ye,
                loaderData: {},
                errors: {
                    [ln.id]: ue
                }
            });
            return
        }
        if (d.initialized && !b && Zm(d.location, S) && !(k && k.submission && st(k.submission.formMethod))) {
            wt(S, {
                matches: z
            });
            return
        }
        C = new AbortController;
        let Q = Sr(e.history, S, C.signal, k && k.submission), U, B;
        if (k && k.pendingError)
            B = {
                [bn(z).route.id]: k.pendingError
            };
        else if (k && k.submission && st(k.submission.formMethod)) {
            let ue = await jp(Q, S, k.submission, z, {
                replace: k.replace
            });
            if (ue.shortCircuited)
                return;
            U = ue.pendingActionData,
            B = ue.pendingActionError,
            _ = Fi(S, k.submission),
            Q = new Request(Q.url,{
                signal: Q.signal
            })
        }
        let {shortCircuited: G, loaderData: xe, errors: Y} = await Dp(Q, S, z, _, k && k.submission, k && k.fetcherSubmission, k && k.replace, U, B);
        G || (C = null,
        wt(S, ne({
            matches: z
        }, U ? {
            actionData: U
        } : {}, {
            loaderData: xe,
            errors: Y
        })))
    }
    async function jp(w, S, k, D, _) {
        _ === void 0 && (_ = {}),
        $o();
        let z = rA(S, k);
        $({
            navigation: z
        });
        let Q, U = ja(D, S);
        if (!U.route.action && !U.route.lazy)
            Q = {
                type: ce.error,
                error: $e(405, {
                    method: w.method,
                    pathname: S.pathname,
                    routeId: U.route.id
                })
            };
        else if (Q = await wr("action", w, U, D, o, i, s),
        w.signal.aborted)
            return {
                shortCircuited: !0
            };
        if (Gn(Q)) {
            let B;
            return _ && _.replace != null ? B = _.replace : B = Q.location === d.location.pathname + d.location.search,
            await sr(d, Q, {
                submission: k,
                replace: B
            }),
            {
                shortCircuited: !0
            }
        }
        if (zr(Q)) {
            let B = bn(D, U.route.id);
            return (_ && _.replace) !== !0 && (E = pe.Push),
            {
                pendingActionData: {},
                pendingActionError: {
                    [B.route.id]: Q.error
                }
            }
        }
        if (pn(Q))
            throw $e(400, {
                type: "defer-action"
            });
        return {
            pendingActionData: {
                [U.route.id]: Q.data
            }
        }
    }
    async function Dp(w, S, k, D, _, z, Q, U, B) {
        let G = D || Fi(S, _)
          , xe = _ || z || gc(G)
          , Y = a || l
          , [ue,ye] = lc(e.history, d, k, xe, S, b, T, ge, te, Pe, Y, s, U, B);
        if (qo(X => !(k && k.some(it => it.route.id === X)) || ue && ue.some(it => it.route.id === X)),
        Me = ++Ne,
        ue.length === 0 && ye.length === 0) {
            let X = Qs();
            return wt(S, ne({
                matches: k,
                loaderData: {},
                errors: B || null
            }, U ? {
                actionData: U
            } : {}, X ? {
                fetchers: new Map(d.fetchers)
            } : {})),
            {
                shortCircuited: !0
            }
        }
        if (!I) {
            ye.forEach(it => {
                let Ft = d.fetchers.get(it.key)
                  , il = xr(void 0, Ft ? Ft.data : void 0);
                d.fetchers.set(it.key, il)
            }
            );
            let X = U || d.actionData;
            $(ne({
                navigation: G
            }, X ? Object.keys(X).length === 0 ? {
                actionData: null
            } : {
                actionData: X
            } : {}, ye.length > 0 ? {
                fetchers: new Map(d.fetchers)
            } : {}))
        }
        ye.forEach(X => {
            W.has(X.key) && Tt(X.key),
            X.controller && W.set(X.key, X.controller)
        }
        );
        let ln = () => ye.forEach(X => Tt(X.key));
        C && C.signal.addEventListener("abort", ln);
        let {results: an, loaderResults: ur, fetcherResults: el} = await Ms(d.matches, k, ue, ye, w);
        if (w.signal.aborted)
            return {
                shortCircuited: !0
            };
        C && C.signal.removeEventListener("abort", ln),
        ye.forEach(X => W.delete(X.key));
        let St = pc(an);
        if (St) {
            if (St.idx >= ue.length) {
                let X = ye[St.idx - ue.length].key;
                Pe.add(X)
            }
            return await sr(d, St.result, {
                replace: Q
            }),
            {
                shortCircuited: !0
            }
        }
        let {loaderData: xt, errors: vi} = cc(d, k, ue, ur, B, ye, el, L);
        L.forEach( (X, it) => {
            X.subscribe(Ft => {
                (Ft || X.done) && L.delete(it)
            }
            )
        }
        );
        let tl = Qs()
          , nl = _s(Me)
          , rl = tl || nl || ye.length > 0;
        return ne({
            loaderData: xt,
            errors: vi
        }, rl ? {
            fetchers: new Map(d.fetchers)
        } : {})
    }
    function Us(w) {
        return d.fetchers.get(w) || Hm
    }
    function Bp(w, S, k, D) {
        if (r)
            throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
        W.has(w) && Tt(w);
        let _ = a || l
          , z = Ia(d.location, d.matches, s, u.v7_prependBasename, k, S, D == null ? void 0 : D.relative)
          , Q = _n(_, z, s);
        if (!Q) {
            mi(w, S, $e(404, {
                pathname: z
            }));
            return
        }
        let {path: U, submission: B, error: G} = oc(u.v7_normalizeFormMethod, !0, z, D);
        if (G) {
            mi(w, S, G);
            return
        }
        let xe = ja(Q, U);
        if (N = (D && D.preventScrollReset) === !0,
        B && st(B.formMethod)) {
            Tp(w, S, U, xe, Q, B);
            return
        }
        te.set(w, {
            routeId: S,
            path: U
        }),
        Fp(w, S, U, xe, Q, B)
    }
    async function Tp(w, S, k, D, _, z) {
        if ($o(),
        te.delete(w),
        !D.route.action && !D.route.lazy) {
            let me = $e(405, {
                method: z.formMethod,
                pathname: k,
                routeId: S
            });
            mi(w, S, me);
            return
        }
        let Q = d.fetchers.get(w)
          , U = iA(z, Q);
        d.fetchers.set(w, U),
        $({
            fetchers: new Map(d.fetchers)
        });
        let B = new AbortController
          , G = Sr(e.history, k, B.signal, z);
        W.set(w, B);
        let xe = Ne
          , Y = await wr("action", G, D, _, o, i, s);
        if (G.signal.aborted) {
            W.get(w) === B && W.delete(w);
            return
        }
        if (Gn(Y))
            if (W.delete(w),
            Me > xe) {
                let me = Pn(void 0);
                d.fetchers.set(w, me),
                $({
                    fetchers: new Map(d.fetchers)
                });
                return
            } else {
                Pe.add(w);
                let me = xr(z);
                return d.fetchers.set(w, me),
                $({
                    fetchers: new Map(d.fetchers)
                }),
                sr(d, Y, {
                    submission: z,
                    isFetchActionRedirect: !0
                })
            }
        if (zr(Y)) {
            mi(w, S, Y.error);
            return
        }
        if (pn(Y))
            throw $e(400, {
                type: "defer-action"
            });
        let ue = d.navigation.location || d.location
          , ye = Sr(e.history, ue, B.signal)
          , ln = a || l
          , an = d.navigation.state !== "idle" ? _n(ln, d.navigation.location, s) : d.matches;
        K(an, "Didn't find any matches after fetcher action");
        let ur = ++Ne;
        Ve.set(w, ur);
        let el = xr(z, Y.data);
        d.fetchers.set(w, el);
        let[St,xt] = lc(e.history, d, an, z, ue, b, T, ge, te, Pe, ln, s, {
            [D.route.id]: Y.data
        }, void 0);
        xt.filter(me => me.key !== w).forEach(me => {
            let cr = me.key
              , Js = d.fetchers.get(cr)
              , _p = xr(void 0, Js ? Js.data : void 0);
            d.fetchers.set(cr, _p),
            W.has(cr) && Tt(cr),
            me.controller && W.set(cr, me.controller)
        }
        ),
        $({
            fetchers: new Map(d.fetchers)
        });
        let vi = () => xt.forEach(me => Tt(me.key));
        B.signal.addEventListener("abort", vi);
        let {results: tl, loaderResults: nl, fetcherResults: rl} = await Ms(d.matches, an, St, xt, ye);
        if (B.signal.aborted)
            return;
        B.signal.removeEventListener("abort", vi),
        Ve.delete(w),
        W.delete(w),
        xt.forEach(me => W.delete(me.key));
        let X = pc(tl);
        if (X) {
            if (X.idx >= St.length) {
                let me = xt[X.idx - St.length].key;
                Pe.add(me)
            }
            return sr(d, X.result)
        }
        let {loaderData: it, errors: Ft} = cc(d, d.matches, St, nl, void 0, xt, rl, L);
        if (d.fetchers.has(w)) {
            let me = Pn(Y.data);
            d.fetchers.set(w, me)
        }
        let il = _s(ur);
        d.navigation.state === "loading" && ur > Me ? (K(E, "Expected pending action"),
        C && C.abort(),
        wt(d.navigation.location, {
            matches: an,
            loaderData: it,
            errors: Ft,
            fetchers: new Map(d.fetchers)
        })) : ($(ne({
            errors: Ft,
            loaderData: fc(d.loaderData, it, an, Ft)
        }, il || xt.length > 0 ? {
            fetchers: new Map(d.fetchers)
        } : {})),
        b = !1)
    }
    async function Fp(w, S, k, D, _, z) {
        let Q = d.fetchers.get(w)
          , U = xr(z, Q ? Q.data : void 0);
        d.fetchers.set(w, U),
        $({
            fetchers: new Map(d.fetchers)
        });
        let B = new AbortController
          , G = Sr(e.history, k, B.signal);
        W.set(w, B);
        let xe = Ne
          , Y = await wr("loader", G, D, _, o, i, s);
        if (pn(Y) && (Y = await up(Y, G.signal, !0) || Y),
        W.get(w) === B && W.delete(w),
        G.signal.aborted)
            return;
        if (Gn(Y))
            if (Me > xe) {
                let ye = Pn(void 0);
                d.fetchers.set(w, ye),
                $({
                    fetchers: new Map(d.fetchers)
                });
                return
            } else {
                Pe.add(w),
                await sr(d, Y);
                return
            }
        if (zr(Y)) {
            let ye = bn(d.matches, S);
            d.fetchers.delete(w),
            $({
                fetchers: new Map(d.fetchers),
                errors: {
                    [ye.route.id]: Y.error
                }
            });
            return
        }
        K(!pn(Y), "Unhandled fetcher deferred data");
        let ue = Pn(Y.data);
        d.fetchers.set(w, ue),
        $({
            fetchers: new Map(d.fetchers)
        })
    }
    async function sr(w, S, k) {
        let {submission: D, replace: _, isFetchActionRedirect: z} = k === void 0 ? {} : k;
        S.revalidate && (b = !0);
        let Q = ri(w.location, S.location, ne({
            _isRedirect: !0
        }, z ? {
            _isFetchActionRedirect: !0
        } : {}));
        if (K(Q, "Expected a location on the redirect navigation"),
        n) {
            let G = !1;
            if (S.reloadDocument)
                G = !0;
            else if (lp.test(S.location)) {
                const xe = e.history.createURL(S.location);
                G = xe.origin !== t.location.origin || di(xe.pathname, s) == null
            }
            if (G) {
                _ ? t.location.replace(S.location) : t.location.assign(S.location);
                return
            }
        }
        C = null;
        let U = _ === !0 ? pe.Replace : pe.Push
          , B = D || gc(w.navigation);
        if (Vm.has(S.status) && B && st(B.formMethod))
            await Bt(U, Q, {
                submission: ne({}, B, {
                    formAction: S.location
                }),
                preventScrollReset: N
            });
        else if (z)
            await Bt(U, Q, {
                overrideNavigation: Fi(Q),
                fetcherSubmission: B,
                preventScrollReset: N
            });
        else {
            let G = Fi(Q, B);
            await Bt(U, Q, {
                overrideNavigation: G,
                preventScrollReset: N
            })
        }
    }
    async function Ms(w, S, k, D, _) {
        let z = await Promise.all([...k.map(B => wr("loader", _, B, S, o, i, s)), ...D.map(B => B.matches && B.match && B.controller ? wr("loader", Sr(e.history, B.path, B.controller.signal), B.match, B.matches, o, i, s) : {
            type: ce.error,
            error: $e(404, {
                pathname: B.path
            })
        })])
          , Q = z.slice(0, k.length)
          , U = z.slice(k.length);
        return await Promise.all([hc(w, k, Q, Q.map( () => _.signal), !1, d.loaderData), hc(w, D.map(B => B.match), U, D.map(B => B.controller ? B.controller.signal : null), !0)]),
        {
            results: z,
            loaderResults: Q,
            fetcherResults: U
        }
    }
    function $o() {
        b = !0,
        T.push(...qo()),
        te.forEach( (w, S) => {
            W.has(S) && (ge.push(S),
            Tt(S))
        }
        )
    }
    function mi(w, S, k) {
        let D = bn(d.matches, S);
        Zo(w),
        $({
            errors: {
                [D.route.id]: k
            },
            fetchers: new Map(d.fetchers)
        })
    }
    function Zo(w) {
        let S = d.fetchers.get(w);
        W.has(w) && !(S && S.state === "loading" && Ve.has(w)) && Tt(w),
        te.delete(w),
        Ve.delete(w),
        Pe.delete(w),
        d.fetchers.delete(w)
    }
    function Tt(w) {
        let S = W.get(w);
        K(S, "Expected fetch controller: " + w),
        S.abort(),
        W.delete(w)
    }
    function zs(w) {
        for (let S of w) {
            let k = Us(S)
              , D = Pn(k.data);
            d.fetchers.set(S, D)
        }
    }
    function Qs() {
        let w = []
          , S = !1;
        for (let k of Pe) {
            let D = d.fetchers.get(k);
            K(D, "Expected fetcher: " + k),
            D.state === "loading" && (Pe.delete(k),
            w.push(k),
            S = !0)
        }
        return zs(w),
        S
    }
    function _s(w) {
        let S = [];
        for (let[k,D] of Ve)
            if (D < w) {
                let _ = d.fetchers.get(k);
                K(_, "Expected fetcher: " + k),
                _.state === "loading" && (Tt(k),
                Ve.delete(k),
                S.push(k))
            }
        return zs(S),
        S.length > 0
    }
    function Up(w, S) {
        let k = d.blockers.get(w) || yr;
        return F.get(w) !== S && F.set(w, S),
        k
    }
    function bs(w) {
        d.blockers.delete(w),
        F.delete(w)
    }
    function Ai(w, S) {
        let k = d.blockers.get(w) || yr;
        K(k.state === "unblocked" && S.state === "blocked" || k.state === "blocked" && S.state === "blocked" || k.state === "blocked" && S.state === "proceeding" || k.state === "blocked" && S.state === "unblocked" || k.state === "proceeding" && S.state === "unblocked", "Invalid blocker state transition: " + k.state + " -> " + S.state);
        let D = new Map(d.blockers);
        D.set(w, S),
        $({
            blockers: D
        })
    }
    function Ks(w) {
        let {currentLocation: S, nextLocation: k, historyAction: D} = w;
        if (F.size === 0)
            return;
        F.size > 1 && ir(!1, "A router only supports one blocker at a time");
        let _ = Array.from(F.entries())
          , [z,Q] = _[_.length - 1]
          , U = d.blockers.get(z);
        if (!(U && U.state === "proceeding") && Q({
            currentLocation: S,
            nextLocation: k,
            historyAction: D
        }))
            return z
    }
    function qo(w) {
        let S = [];
        return L.forEach( (k, D) => {
            (!w || w(D)) && (k.cancel(),
            S.push(D),
            L.delete(D))
        }
        ),
        S
    }
    function Mp(w, S, k) {
        if (c = w,
        A = S,
        v = k || null,
        !y && d.navigation === jl) {
            y = !0;
            let D = Hs(d.location, d.matches);
            D != null && $({
                restoreScrollPosition: D
            })
        }
        return () => {
            c = null,
            A = null,
            v = null
        }
    }
    function Vs(w, S) {
        return v && v(w, S.map(D => nA(D, d.loaderData))) || w.key
    }
    function zp(w, S) {
        if (c && A) {
            let k = Vs(w, S);
            c[k] = A()
        }
    }
    function Hs(w, S) {
        if (c) {
            let k = Vs(w, S)
              , D = c[k];
            if (typeof D == "number")
                return D
        }
        return null
    }
    function Qp(w) {
        o = {},
        a = La(w, i, void 0, o)
    }
    return m = {
        get basename() {
            return s
        },
        get state() {
            return d
        },
        get routes() {
            return l
        },
        initialize: ie,
        subscribe: En,
        enableScrollRestoration: Mp,
        navigate: pt,
        fetch: Bp,
        revalidate: Cn,
        createHref: w => e.history.createHref(w),
        encodeLocation: w => e.history.encodeLocation(w),
        getFetcher: Us,
        deleteFetcher: Zo,
        dispose: de,
        getBlocker: Up,
        deleteBlocker: bs,
        _internalFetchControllers: W,
        _internalActiveDeferreds: L,
        _internalSetRoutes: Qp
    },
    m
}
function Ym(e) {
    return e != null && ("formData"in e && e.formData != null || "body"in e && e.body !== void 0)
}
function Ia(e, t, n, r, i, o, l) {
    let a, s;
    if (o != null && l !== "path") {
        a = [];
        for (let f of t)
            if (a.push(f),
            f.route.id === o) {
                s = f;
                break
            }
    } else
        a = t,
        s = t[t.length - 1];
    let u = Ls(i || ".", Jo(a).map(f => f.pathnameBase), di(e.pathname, n) || e.pathname, l === "path");
    return i == null && (u.search = e.search,
    u.hash = e.hash),
    (i == null || i === "" || i === ".") && s && s.route.index && !Os(u.search) && (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"),
    r && n !== "/" && (u.pathname = u.pathname === "/" ? n : Zt([n, u.pathname])),
    fi(u)
}
function oc(e, t, n, r) {
    if (!r || !Ym(r))
        return {
            path: n
        };
    if (r.formMethod && !tA(r.formMethod))
        return {
            path: n,
            error: $e(405, {
                method: r.formMethod
            })
        };
    let i = () => ({
        path: n,
        error: $e(400, {
            type: "invalid-body"
        })
    })
      , o = r.formMethod || "get"
      , l = e ? o.toUpperCase() : o.toLowerCase()
      , a = sp(n);
    if (r.body !== void 0) {
        if (r.formEncType === "text/plain") {
            if (!st(l))
                return i();
            let c = typeof r.body == "string" ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? Array.from(r.body.entries()).reduce( (v, A) => {
                let[y,R] = A;
                return "" + v + y + "=" + R + `
`
            }
            , "") : String(r.body);
            return {
                path: n,
                submission: {
                    formMethod: l,
                    formAction: a,
                    formEncType: r.formEncType,
                    formData: void 0,
                    json: void 0,
                    text: c
                }
            }
        } else if (r.formEncType === "application/json") {
            if (!st(l))
                return i();
            try {
                let c = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
                return {
                    path: n,
                    submission: {
                        formMethod: l,
                        formAction: a,
                        formEncType: r.formEncType,
                        formData: void 0,
                        json: c,
                        text: void 0
                    }
                }
            } catch {
                return i()
            }
        }
    }
    K(typeof FormData == "function", "FormData is not available in this environment");
    let s, u;
    if (r.formData)
        s = Oa(r.formData),
        u = r.formData;
    else if (r.body instanceof FormData)
        s = Oa(r.body),
        u = r.body;
    else if (r.body instanceof URLSearchParams)
        s = r.body,
        u = uc(s);
    else if (r.body == null)
        s = new URLSearchParams,
        u = new FormData;
    else
        try {
            s = new URLSearchParams(r.body),
            u = uc(s)
        } catch {
            return i()
        }
    let f = {
        formMethod: l,
        formAction: a,
        formEncType: r && r.formEncType || "application/x-www-form-urlencoded",
        formData: u,
        json: void 0,
        text: void 0
    };
    if (st(f.formMethod))
        return {
            path: n,
            submission: f
        };
    let p = Dt(n);
    return t && p.search && Os(p.search) && s.append("index", ""),
    p.search = "?" + s,
    {
        path: fi(p),
        submission: f
    }
}
function Xm(e, t) {
    let n = e;
    if (t) {
        let r = e.findIndex(i => i.route.id === t);
        r >= 0 && (n = e.slice(0, r))
    }
    return n
}
function lc(e, t, n, r, i, o, l, a, s, u, f, p, c, v) {
    let A = v ? Object.values(v)[0] : c ? Object.values(c)[0] : void 0
      , y = e.createURL(t.location)
      , R = e.createURL(i)
      , g = v ? Object.keys(v)[0] : void 0
      , m = Xm(n, g).filter( (E, N) => {
        if (E.route.lazy)
            return !0;
        if (E.route.loader == null)
            return !1;
        if (Gm(t.loaderData, t.matches[N], E) || l.some(b => b === E.route.id))
            return !0;
        let C = t.matches[N]
          , I = E;
        return ac(E, ne({
            currentUrl: y,
            currentParams: C.params,
            nextUrl: R,
            nextParams: I.params
        }, r, {
            actionResult: A,
            defaultShouldRevalidate: o || y.pathname + y.search === R.pathname + R.search || y.search !== R.search || ap(C, I)
        }))
    }
    )
      , d = [];
    return s.forEach( (E, N) => {
        if (!n.some(ge => ge.route.id === E.routeId))
            return;
        let C = _n(f, E.path, p);
        if (!C) {
            d.push({
                key: N,
                routeId: E.routeId,
                path: E.path,
                matches: null,
                match: null,
                controller: null
            });
            return
        }
        let I = t.fetchers.get(N)
          , b = ja(C, E.path)
          , T = !1;
        u.has(N) ? T = !1 : a.includes(N) ? T = !0 : I && I.state !== "idle" && I.data === void 0 ? T = o : T = ac(b, ne({
            currentUrl: y,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: R,
            nextParams: n[n.length - 1].params
        }, r, {
            actionResult: A,
            defaultShouldRevalidate: o
        })),
        T && d.push({
            key: N,
            routeId: E.routeId,
            path: E.path,
            matches: C,
            match: b,
            controller: new AbortController
        })
    }
    ),
    [m, d]
}
function Gm(e, t, n) {
    let r = !t || n.route.id !== t.route.id
      , i = e[n.route.id] === void 0;
    return r || i
}
function ap(e, t) {
    let n = e.route.path;
    return e.pathname !== t.pathname || n != null && n.endsWith("*") && e.params["*"] !== t.params["*"]
}
function ac(e, t) {
    if (e.route.shouldRevalidate) {
        let n = e.route.shouldRevalidate(t);
        if (typeof n == "boolean")
            return n
    }
    return t.defaultShouldRevalidate
}
async function sc(e, t, n) {
    if (!e.lazy)
        return;
    let r = await e.lazy();
    if (!e.lazy)
        return;
    let i = n[e.id];
    K(i, "No route found in manifest");
    let o = {};
    for (let l in r) {
        let s = i[l] !== void 0 && l !== "hasErrorBoundary";
        ir(!s, 'Route "' + i.id + '" has a static property "' + l + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + l + '" will be ignored.')),
        !s && !ym.has(l) && (o[l] = r[l])
    }
    Object.assign(i, o),
    Object.assign(i, ne({}, t(i), {
        lazy: void 0
    }))
}
async function wr(e, t, n, r, i, o, l, a) {
    a === void 0 && (a = {});
    let s, u, f, p = A => {
        let y, R = new Promise( (g, h) => y = h);
        return f = () => y(),
        t.signal.addEventListener("abort", f),
        Promise.race([A({
            request: t,
            params: n.params,
            context: a.requestContext
        }), R])
    }
    ;
    try {
        let A = n.route[e];
        if (n.route.lazy)
            if (A)
                u = (await Promise.all([p(A), sc(n.route, o, i)]))[0];
            else if (await sc(n.route, o, i),
            A = n.route[e],
            A)
                u = await p(A);
            else if (e === "action") {
                let y = new URL(t.url)
                  , R = y.pathname + y.search;
                throw $e(405, {
                    method: t.method,
                    pathname: R,
                    routeId: n.route.id
                })
            } else
                return {
                    type: ce.data,
                    data: void 0
                };
        else if (A)
            u = await p(A);
        else {
            let y = new URL(t.url)
              , R = y.pathname + y.search;
            throw $e(404, {
                pathname: R
            })
        }
        K(u !== void 0, "You defined " + (e === "action" ? "an action" : "a loader") + " for route " + ('"' + n.route.id + "\" but didn't return anything from your `" + e + "` ") + "function. Please return a value or `null`.")
    } catch (A) {
        s = ce.error,
        u = A
    } finally {
        f && t.signal.removeEventListener("abort", f)
    }
    if (eA(u)) {
        let A = u.status;
        if (Km.has(A)) {
            let g = u.headers.get("Location");
            if (K(g, "Redirects returned/thrown from loaders/actions must have a Location header"),
            !lp.test(g))
                g = Ia(new URL(t.url), r.slice(0, r.indexOf(n) + 1), l, !0, g);
            else if (!a.isStaticRequest) {
                let h = new URL(t.url)
                  , m = g.startsWith("//") ? new URL(h.protocol + g) : new URL(g)
                  , d = di(m.pathname, l) != null;
                m.origin === h.origin && d && (g = m.pathname + m.search + m.hash)
            }
            if (a.isStaticRequest)
                throw u.headers.set("Location", g),
                u;
            return {
                type: ce.redirect,
                status: A,
                location: g,
                revalidate: u.headers.get("X-Remix-Revalidate") !== null,
                reloadDocument: u.headers.get("X-Remix-Reload-Document") !== null
            }
        }
        if (a.isRouteRequest)
            throw {
                type: s === ce.error ? ce.error : ce.data,
                response: u
            };
        let y, R = u.headers.get("Content-Type");
        return R && /\bapplication\/json\b/.test(R) ? y = await u.json() : y = await u.text(),
        s === ce.error ? {
            type: s,
            error: new Is(A,u.statusText,y),
            headers: u.headers
        } : {
            type: ce.data,
            data: y,
            statusCode: u.status,
            headers: u.headers
        }
    }
    if (s === ce.error)
        return {
            type: s,
            error: u
        };
    if (qm(u)) {
        var c, v;
        return {
            type: ce.deferred,
            deferredData: u,
            statusCode: (c = u.init) == null ? void 0 : c.status,
            headers: ((v = u.init) == null ? void 0 : v.headers) && new Headers(u.init.headers)
        }
    }
    return {
        type: ce.data,
        data: u
    }
}
function Sr(e, t, n, r) {
    let i = e.createURL(sp(t)).toString()
      , o = {
        signal: n
    };
    if (r && st(r.formMethod)) {
        let {formMethod: l, formEncType: a} = r;
        o.method = l.toUpperCase(),
        a === "application/json" ? (o.headers = new Headers({
            "Content-Type": a
        }),
        o.body = JSON.stringify(r.json)) : a === "text/plain" ? o.body = r.text : a === "application/x-www-form-urlencoded" && r.formData ? o.body = Oa(r.formData) : o.body = r.formData
    }
    return new Request(i,o)
}
function Oa(e) {
    let t = new URLSearchParams;
    for (let[n,r] of e.entries())
        t.append(n, typeof r == "string" ? r : r.name);
    return t
}
function uc(e) {
    let t = new FormData;
    for (let[n,r] of e.entries())
        t.append(n, r);
    return t
}
function $m(e, t, n, r, i) {
    let o = {}, l = null, a, s = !1, u = {};
    return n.forEach( (f, p) => {
        let c = t[p].route.id;
        if (K(!Gn(f), "Cannot handle redirect results in processLoaderData"),
        zr(f)) {
            let v = bn(e, c)
              , A = f.error;
            r && (A = Object.values(r)[0],
            r = void 0),
            l = l || {},
            l[v.route.id] == null && (l[v.route.id] = A),
            o[c] = void 0,
            s || (s = !0,
            a = ip(f.error) ? f.error.status : 500),
            f.headers && (u[c] = f.headers)
        } else
            pn(f) ? (i.set(c, f.deferredData),
            o[c] = f.deferredData.data) : o[c] = f.data,
            f.statusCode != null && f.statusCode !== 200 && !s && (a = f.statusCode),
            f.headers && (u[c] = f.headers)
    }
    ),
    r && (l = r,
    o[Object.keys(r)[0]] = void 0),
    {
        loaderData: o,
        errors: l,
        statusCode: a || 200,
        loaderHeaders: u
    }
}
function cc(e, t, n, r, i, o, l, a) {
    let {loaderData: s, errors: u} = $m(t, n, r, i, a);
    for (let f = 0; f < o.length; f++) {
        let {key: p, match: c, controller: v} = o[f];
        K(l !== void 0 && l[f] !== void 0, "Did not find corresponding fetcher result");
        let A = l[f];
        if (!(v && v.signal.aborted))
            if (zr(A)) {
                let y = bn(e.matches, c == null ? void 0 : c.route.id);
                u && u[y.route.id] || (u = ne({}, u, {
                    [y.route.id]: A.error
                })),
                e.fetchers.delete(p)
            } else if (Gn(A))
                K(!1, "Unhandled fetcher revalidation redirect");
            else if (pn(A))
                K(!1, "Unhandled fetcher deferred data");
            else {
                let y = Pn(A.data);
                e.fetchers.set(p, y)
            }
    }
    return {
        loaderData: s,
        errors: u
    }
}
function fc(e, t, n, r) {
    let i = ne({}, t);
    for (let o of n) {
        let l = o.route.id;
        if (t.hasOwnProperty(l) ? t[l] !== void 0 && (i[l] = t[l]) : e[l] !== void 0 && o.route.loader && (i[l] = e[l]),
        r && r.hasOwnProperty(l))
            break
    }
    return i
}
function bn(e, t) {
    return (t ? e.slice(0, e.findIndex(r => r.route.id === t) + 1) : [...e]).reverse().find(r => r.route.hasErrorBoundary === !0) || e[0]
}
function dc(e) {
    let t = e.find(n => n.index || !n.path || n.path === "/") || {
        id: "__shim-error-route__"
    };
    return {
        matches: [{
            params: {},
            pathname: "",
            pathnameBase: "",
            route: t
        }],
        route: t
    }
}
function $e(e, t) {
    let {pathname: n, routeId: r, method: i, type: o} = t === void 0 ? {} : t
      , l = "Unknown Server Error"
      , a = "Unknown @remix-run/router error";
    return e === 400 ? (l = "Bad Request",
    i && n && r ? a = "You made a " + i + ' request to "' + n + '" but ' + ('did not provide a `loader` for route "' + r + '", ') + "so there is no way to handle the request." : o === "defer-action" ? a = "defer() is not supported in actions" : o === "invalid-body" && (a = "Unable to encode submission body")) : e === 403 ? (l = "Forbidden",
    a = 'Route "' + r + '" does not match URL "' + n + '"') : e === 404 ? (l = "Not Found",
    a = 'No route matches URL "' + n + '"') : e === 405 && (l = "Method Not Allowed",
    i && n && r ? a = "You made a " + i.toUpperCase() + ' request to "' + n + '" but ' + ('did not provide an `action` for route "' + r + '", ') + "so there is no way to handle the request." : i && (a = 'Invalid request method "' + i.toUpperCase() + '"')),
    new Is(e || 500,l,new Error(a),!0)
}
function pc(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (Gn(n))
            return {
                result: n,
                idx: t
            }
    }
}
function sp(e) {
    let t = typeof e == "string" ? Dt(e) : e;
    return fi(ne({}, t, {
        hash: ""
    }))
}
function Zm(e, t) {
    return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== ""
}
function pn(e) {
    return e.type === ce.deferred
}
function zr(e) {
    return e.type === ce.error
}
function Gn(e) {
    return (e && e.type) === ce.redirect
}
function qm(e) {
    let t = e;
    return t && typeof t == "object" && typeof t.data == "object" && typeof t.subscribe == "function" && typeof t.cancel == "function" && typeof t.resolveData == "function"
}
function eA(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u"
}
function tA(e) {
    return bm.has(e.toLowerCase())
}
function st(e) {
    return Qm.has(e.toLowerCase())
}
async function hc(e, t, n, r, i, o) {
    for (let l = 0; l < n.length; l++) {
        let a = n[l]
          , s = t[l];
        if (!s)
            continue;
        let u = e.find(p => p.route.id === s.route.id)
          , f = u != null && !ap(u, s) && (o && o[s.route.id]) !== void 0;
        if (pn(a) && (i || f)) {
            let p = r[l];
            K(p, "Expected an AbortSignal for revalidating fetcher deferred result"),
            await up(a, p, i).then(c => {
                c && (n[l] = c || n[l])
            }
            )
        }
    }
}
async function up(e, t, n) {
    if (n === void 0 && (n = !1),
    !await e.deferredData.resolveData(t)) {
        if (n)
            try {
                return {
                    type: ce.data,
                    data: e.deferredData.unwrappedData
                }
            } catch (i) {
                return {
                    type: ce.error,
                    error: i
                }
            }
        return {
            type: ce.data,
            data: e.deferredData.data
        }
    }
}
function Os(e) {
    return new URLSearchParams(e).getAll("index").some(t => t === "")
}
function nA(e, t) {
    let {route: n, pathname: r, params: i} = e;
    return {
        id: n.id,
        pathname: r,
        params: i,
        data: t[n.id],
        handle: n.handle
    }
}
function ja(e, t) {
    let n = typeof t == "string" ? Dt(t).search : t.search;
    if (e[e.length - 1].route.index && Os(n || ""))
        return e[e.length - 1];
    let r = Jo(e);
    return r[r.length - 1]
}
function gc(e) {
    let {formMethod: t, formAction: n, formEncType: r, text: i, formData: o, json: l} = e;
    if (!(!t || !n || !r)) {
        if (i != null)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: void 0,
                json: void 0,
                text: i
            };
        if (o != null)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: o,
                json: void 0,
                text: void 0
            };
        if (l !== void 0)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: void 0,
                json: l,
                text: void 0
            }
    }
}
function Fi(e, t) {
    return t ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
    } : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    }
}
function rA(e, t) {
    return {
        state: "submitting",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
    }
}
function xr(e, t) {
    return e ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
        " _hasFetcherDoneAnything ": !0
    } : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
        " _hasFetcherDoneAnything ": !0
    }
}
function iA(e, t) {
    return {
        state: "submitting",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t ? t.data : void 0,
        " _hasFetcherDoneAnything ": !0
    }
}
function Pn(e) {
    return {
        state: "idle",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: e,
        " _hasFetcherDoneAnything ": !0
    }
}
/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function xo() {
    return xo = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    xo.apply(this, arguments)
}
const Wo = O.createContext(null)
  , cp = O.createContext(null)
  , Yo = O.createContext(null)
  , Xo = O.createContext(null)
  , on = O.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , fp = O.createContext(null);
function pi() {
    return O.useContext(Xo) != null
}
function js() {
    return pi() || K(!1),
    O.useContext(Xo).location
}
function dp(e) {
    O.useContext(Yo).static || O.useLayoutEffect(e)
}
function oA() {
    let {isDataRoute: e} = O.useContext(on);
    return e ? yA() : lA()
}
function lA() {
    pi() || K(!1);
    let e = O.useContext(Wo)
      , {basename: t, navigator: n} = O.useContext(Yo)
      , {matches: r} = O.useContext(on)
      , {pathname: i} = js()
      , o = JSON.stringify(Jo(r).map(s => s.pathnameBase))
      , l = O.useRef(!1);
    return dp( () => {
        l.current = !0
    }
    ),
    O.useCallback(function(s, u) {
        if (u === void 0 && (u = {}),
        !l.current)
            return;
        if (typeof s == "number") {
            n.go(s);
            return
        }
        let f = Ls(s, JSON.parse(o), i, u.relative === "path");
        e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : Zt([t, f.pathname])),
        (u.replace ? n.replace : n.push)(f, u.state, u)
    }, [t, n, o, i, e])
}
const aA = O.createContext(null);
function sA(e) {
    let t = O.useContext(on).outlet;
    return t && O.createElement(aA.Provider, {
        value: e
    }, t)
}
function uA(e, t, n) {
    pi() || K(!1);
    let {navigator: r} = O.useContext(Yo)
      , {matches: i} = O.useContext(on)
      , o = i[i.length - 1]
      , l = o ? o.params : {};
    o && o.pathname;
    let a = o ? o.pathnameBase : "/";
    o && o.route;
    let s = js(), u;
    if (t) {
        var f;
        let y = typeof t == "string" ? Dt(t) : t;
        a === "/" || (f = y.pathname) != null && f.startsWith(a) || K(!1),
        u = y
    } else
        u = s;
    let p = u.pathname || "/"
      , c = a === "/" ? p : p.slice(a.length) || "/"
      , v = _n(e, {
        pathname: c
    })
      , A = hA(v && v.map(y => Object.assign({}, y, {
        params: Object.assign({}, l, y.params),
        pathname: Zt([a, r.encodeLocation ? r.encodeLocation(y.pathname).pathname : y.pathname]),
        pathnameBase: y.pathnameBase === "/" ? a : Zt([a, r.encodeLocation ? r.encodeLocation(y.pathnameBase).pathname : y.pathnameBase])
    })), i, n);
    return t && A ? O.createElement(Xo.Provider, {
        value: {
            location: xo({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, u),
            navigationType: pe.Pop
        }
    }, A) : A
}
function cA() {
    let e = vA()
      , t = ip(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , i = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    }
      , o = null;
    return O.createElement(O.Fragment, null, O.createElement("h2", null, "Unexpected Application Error!"), O.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? O.createElement("pre", {
        style: i
    }, n) : null, o)
}
const fA = O.createElement(cA, null);
class dA extends O.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error || n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error ? O.createElement(on.Provider, {
            value: this.props.routeContext
        }, O.createElement(fp.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function pA(e) {
    let {routeContext: t, match: n, children: r} = e
      , i = O.useContext(Wo);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    O.createElement(on.Provider, {
        value: t
    }, r)
}
function hA(e, t, n) {
    var r;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    e == null) {
        var i;
        if ((i = n) != null && i.errors)
            e = n.matches;
        else
            return null
    }
    let o = e
      , l = (r = n) == null ? void 0 : r.errors;
    if (l != null) {
        let a = o.findIndex(s => s.route.id && (l == null ? void 0 : l[s.route.id]));
        a >= 0 || K(!1),
        o = o.slice(0, Math.min(o.length, a + 1))
    }
    return o.reduceRight( (a, s, u) => {
        let f = s.route.id ? l == null ? void 0 : l[s.route.id] : null
          , p = null;
        n && (p = s.route.errorElement || fA);
        let c = t.concat(o.slice(0, u + 1))
          , v = () => {
            let A;
            return f ? A = p : s.route.Component ? A = O.createElement(s.route.Component, null) : s.route.element ? A = s.route.element : A = a,
            O.createElement(pA, {
                match: s,
                routeContext: {
                    outlet: a,
                    matches: c,
                    isDataRoute: n != null
                },
                children: A
            })
        }
        ;
        return n && (s.route.ErrorBoundary || s.route.errorElement || u === 0) ? O.createElement(dA, {
            location: n.location,
            revalidation: n.revalidation,
            component: p,
            error: f,
            children: v(),
            routeContext: {
                outlet: null,
                matches: c,
                isDataRoute: !0
            }
        }) : v()
    }
    , null)
}
var pp = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(pp || {})
  , Eo = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(Eo || {});
function gA(e) {
    let t = O.useContext(Wo);
    return t || K(!1),
    t
}
function mA(e) {
    let t = O.useContext(cp);
    return t || K(!1),
    t
}
function AA(e) {
    let t = O.useContext(on);
    return t || K(!1),
    t
}
function hp(e) {
    let t = AA()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || K(!1),
    n.route.id
}
function vA() {
    var e;
    let t = O.useContext(fp)
      , n = mA(Eo.UseRouteError)
      , r = hp(Eo.UseRouteError);
    return t || ((e = n.errors) == null ? void 0 : e[r])
}
function yA() {
    let {router: e} = gA(pp.UseNavigateStable)
      , t = hp(Eo.UseNavigateStable)
      , n = O.useRef(!1);
    return dp( () => {
        n.current = !0
    }
    ),
    O.useCallback(function(i, o) {
        o === void 0 && (o = {}),
        n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, xo({
            fromRouteId: t
        }, o)))
    }, [e, t])
}
const wA = "startTransition"
  , mc = oh[wA];
function SA(e) {
    let {fallbackElement: t, router: n, future: r} = e
      , [i,o] = O.useState(n.state)
      , {v7_startTransition: l} = r || {}
      , a = O.useCallback(p => {
        l && mc ? mc( () => o(p)) : o(p)
    }
    , [o, l]);
    O.useLayoutEffect( () => n.subscribe(a), [n, a]);
    let s = O.useMemo( () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: p => n.navigate(p),
        push: (p, c, v) => n.navigate(p, {
            state: c,
            preventScrollReset: v == null ? void 0 : v.preventScrollReset
        }),
        replace: (p, c, v) => n.navigate(p, {
            replace: !0,
            state: c,
            preventScrollReset: v == null ? void 0 : v.preventScrollReset
        })
    }), [n])
      , u = n.basename || "/"
      , f = O.useMemo( () => ({
        router: n,
        navigator: s,
        static: !1,
        basename: u
    }), [n, s, u]);
    return O.createElement(O.Fragment, null, O.createElement(Wo.Provider, {
        value: f
    }, O.createElement(cp.Provider, {
        value: i
    }, O.createElement(kA, {
        basename: u,
        location: i.location,
        navigationType: i.historyAction,
        navigator: s
    }, i.initialized ? O.createElement(xA, {
        routes: n.routes,
        state: i
    }) : t))), null)
}
function xA(e) {
    let {routes: t, state: n} = e;
    return uA(t, void 0, n)
}
function EA(e) {
    let {to: t, replace: n, state: r, relative: i} = e;
    pi() || K(!1);
    let {matches: o} = O.useContext(on)
      , {pathname: l} = js()
      , a = oA()
      , s = Ls(t, Jo(o).map(f => f.pathnameBase), l, i === "path")
      , u = JSON.stringify(s);
    return O.useEffect( () => a(JSON.parse(u), {
        replace: n,
        state: r,
        relative: i
    }), [a, u, i, n, r]),
    null
}
function CA(e) {
    return sA(e.context)
}
function kA(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: i=pe.Pop, navigator: o, static: l=!1} = e;
    pi() && K(!1);
    let a = t.replace(/^\/*/, "/")
      , s = O.useMemo( () => ({
        basename: a,
        navigator: o,
        static: l
    }), [a, o, l]);
    typeof r == "string" && (r = Dt(r));
    let {pathname: u="/", search: f="", hash: p="", state: c=null, key: v="default"} = r
      , A = O.useMemo( () => {
        let y = di(u, a);
        return y == null ? null : {
            location: {
                pathname: y,
                search: f,
                hash: p,
                state: c,
                key: v
            },
            navigationType: i
        }
    }
    , [a, u, f, p, c, v, i]);
    return A == null ? null : O.createElement(Yo.Provider, {
        value: s
    }, O.createElement(Xo.Provider, {
        children: n,
        value: A
    }))
}
new Promise( () => {}
);
function RA(e) {
    let t = {
        hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null
    };
    return e.Component && Object.assign(t, {
        element: O.createElement(e.Component),
        Component: void 0
    }),
    e.ErrorBoundary && Object.assign(t, {
        errorElement: O.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0
    }),
    t
}
/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Co() {
    return Co = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Co.apply(this, arguments)
}
function NA(e, t) {
    return Wm({
        basename: t == null ? void 0 : t.basename,
        future: Co({}, t == null ? void 0 : t.future, {
            v7_prependBasename: !0
        }),
        history: mm({
            window: t == null ? void 0 : t.window
        }),
        hydrationData: (t == null ? void 0 : t.hydrationData) || PA(),
        routes: e,
        mapRouteProperties: RA
    }).initialize()
}
function PA() {
    var e;
    let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
    return t && t.errors && (t = Co({}, t, {
        errors: LA(t.errors)
    })),
    t
}
function LA(e) {
    if (!e)
        return null;
    let t = Object.entries(e)
      , n = {};
    for (let[r,i] of t)
        if (i && i.__type === "RouteErrorResponse")
            n[r] = new Is(i.status,i.statusText,i.data,i.internal === !0);
        else if (i && i.__type === "Error") {
            if (i.__subType) {
                let o = window[i.__subType];
                if (typeof o == "function")
                    try {
                        let l = new o(i.message);
                        l.stack = "",
                        n[r] = l
                    } catch {}
            }
            if (n[r] == null) {
                let o = new Error(i.message);
                o.stack = "",
                n[r] = o
            }
        } else
            n[r] = i;
    return n
}
var Ac;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher"
}
)(Ac || (Ac = {}));
var vc;
(function(e) {
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(vc || (vc = {}));
const IA = () => x.jsx("div", {
    className: "game-page",
    children: x.jsx("h1", {
        children: "Game page"
    })
})
  , OA = "/assets/ourteam-banner-e29a3fb2.png"
  , jA = () => {
    const e = [{
        number: "5+",
        name: "2D Artist"
    }, {
        number: "10+",
        name: "Game Developer"
    }, {
        number: "5+",
        name: "3D Artist"
    }, {
        number: "10+",
        name: "Blockchain Developer"
    }, {
        number: "2+",
        name: "VFX/Animator"
    }, {
        number: "10+",
        name: "QA"
    }, {
        number: "2+",
        name: "Game Design"
    }];
    return x.jsxs("div", {
        className: "about-us",
        id: "about-us",
        children: [x.jsx("h2", {
            className: "title",
            children: "About Us"
        }), x.jsx("p", {
            className: "description",
            children: "G5 Studio’s vision is to become one of the very top pioneers in the Blockchain and Game/Gamefi Industry. In view of achieving this, we focus intensively on the service quality fueled with talent development and professional skills enhancement."
        }), x.jsxs("div", {
            className: "our-team",
            children: [x.jsxs("div", {
                className: "our-team-content",
                children: [x.jsx("h2", {
                    className: "title",
                    children: "Our Team"
                }), x.jsx("p", {
                    className: "description",
                    children: "We are a team of young talents and professionals with deep-rooted experiences and passions for the Game/Gamefi Industry, which has been our favoured frontline. IBG firmly believes in the fruitful outcomes that active engagement, collaborative sharing and effective teamwork bring about."
                }), x.jsx("div", {
                    className: "teams",
                    children: e.map(t => x.jsxs("div", {
                        className: "team-item",
                        children: [x.jsx("div", {
                            className: "number",
                            children: t.number
                        }), x.jsx("p", {
                            className: "name",
                            children: t.name
                        })]
                    }, t.name))
                })]
            }), x.jsx("div", {
                className: "our-team-image",
                children: x.jsx("img", {
                    src: OA,
                    alt: ""
                })
            })]
        })]
    })
}
;
class hi {
    constructor(t=0, n="Network Error") {
        this.status = t,
        this.text = n
    }
}
const DA = () => {
    if (!(typeof localStorage > "u"))
        return {
            get: e => Promise.resolve(localStorage.getItem(e)),
            set: (e, t) => Promise.resolve(localStorage.setItem(e, t)),
            remove: e => Promise.resolve(localStorage.removeItem(e))
        }
}
  , Ce = {
    origin: "https://api.emailjs.com",
    blockHeadless: !1,
    storageProvider: DA()
}
  , Ds = e => e ? typeof e == "string" ? {
    publicKey: e
} : e.toString() === "[object Object]" ? e : {} : {}
  , BA = (e, t="https://api.emailjs.com") => {
    if (!e)
        return;
    const n = Ds(e);
    Ce.publicKey = n.publicKey,
    Ce.blockHeadless = n.blockHeadless,
    Ce.storageProvider = n.storageProvider,
    Ce.blockList = n.blockList,
    Ce.limitRate = n.limitRate,
    Ce.origin = n.origin || t
}
  , gp = async (e, t, n={}) => {
    const r = await fetch(Ce.origin + e, {
        method: "POST",
        headers: n,
        body: t
    })
      , i = await r.text()
      , o = new hi(r.status,i);
    if (r.ok)
        return o;
    throw o
}
  , mp = (e, t, n) => {
    if (!e || typeof e != "string")
        throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
    if (!t || typeof t != "string")
        throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!n || typeof n != "string")
        throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"
}
  , TA = e => {
    if (e && e.toString() !== "[object Object]")
        throw "The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"
}
  , Ap = e => e.webdriver || !e.languages || e.languages.length === 0
  , vp = () => new hi(451,"Unavailable For Headless Browser")
  , FA = (e, t) => {
    if (!Array.isArray(e))
        throw "The BlockList list has to be an array";
    if (typeof t != "string")
        throw "The BlockList watchVariable has to be a string"
}
  , UA = e => {
    var t;
    return !((t = e.list) != null && t.length) || !e.watchVariable
}
  , MA = (e, t) => e instanceof FormData ? e.get(t) : e[t]
  , yp = (e, t) => {
    if (UA(e))
        return !1;
    FA(e.list, e.watchVariable);
    const n = MA(t, e.watchVariable);
    return typeof n != "string" ? !1 : e.list.includes(n)
}
  , wp = () => new hi(403,"Forbidden")
  , zA = (e, t) => {
    if (typeof e != "number" || e < 0)
        throw "The LimitRate throttle has to be a positive number";
    if (t && typeof t != "string")
        throw "The LimitRate ID has to be a non-empty string"
}
  , QA = async (e, t, n) => {
    const r = Number(await n.get(e) || 0);
    return t - Date.now() + r
}
  , Sp = async (e, t, n) => {
    if (!t.throttle || !n)
        return !1;
    zA(t.throttle, t.id);
    const r = t.id || e;
    return await QA(r, t.throttle, n) > 0 ? !0 : (await n.set(r, Date.now().toString()),
    !1)
}
  , xp = () => new hi(429,"Too Many Requests")
  , _A = async (e, t, n, r) => {
    const i = Ds(r)
      , o = i.publicKey || Ce.publicKey
      , l = i.blockHeadless || Ce.blockHeadless
      , a = i.storageProvider || Ce.storageProvider
      , s = {
        ...Ce.blockList,
        ...i.blockList
    }
      , u = {
        ...Ce.limitRate,
        ...i.limitRate
    };
    return l && Ap(navigator) ? Promise.reject(vp()) : (mp(o, e, t),
    TA(n),
    n && yp(s, n) ? Promise.reject(wp()) : await Sp(location.pathname, u, a) ? Promise.reject(xp()) : gp("/api/v1.0/email/send", JSON.stringify({
        lib_version: "4.4.1",
        user_id: o,
        service_id: e,
        template_id: t,
        template_params: n
    }), {
        "Content-type": "application/json"
    }))
}
  , bA = e => {
    if (!e || e.nodeName !== "FORM")
        throw "The 3rd parameter is expected to be the HTML form element or the style selector of the form"
}
  , KA = e => typeof e == "string" ? document.querySelector(e) : e
  , VA = async (e, t, n, r) => {
    const i = Ds(r)
      , o = i.publicKey || Ce.publicKey
      , l = i.blockHeadless || Ce.blockHeadless
      , a = Ce.storageProvider || i.storageProvider
      , s = {
        ...Ce.blockList,
        ...i.blockList
    }
      , u = {
        ...Ce.limitRate,
        ...i.limitRate
    };
    if (l && Ap(navigator))
        return Promise.reject(vp());
    const f = KA(n);
    mp(o, e, t),
    bA(f);
    const p = new FormData(f);
    return yp(s, p) ? Promise.reject(wp()) : await Sp(location.pathname, u, a) ? Promise.reject(xp()) : (p.append("lib_version", "4.4.1"),
    p.append("service_id", e),
    p.append("template_id", t),
    p.append("user_id", o),
    gp("/api/v1.0/email/send-form", p))
}
  , HA = {
    init: BA,
    send: _A,
    sendForm: VA,
    EmailJSResponseStatus: hi
}
  , yc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYgAAABsCAYAAABw4SUGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALsSURBVHgB7d3LbVNBGIbhGctcHDaUQAlxB9ABKYEFwqyAChAVAKtEYkEJQAd0YFMB6YBsyEURHk6M2KBvQeTY8XGep4lX/8z559QCsCKzyU4rAPAvgei3QQGAYFgA1mjZqWL34LgW1sIEAUAkEABEAgFAJBAARAIBQCQQAEQCAUAkEABEAgEAwHp5i6nfTBAARAIBQCQQAEQCAUAkEABEAgFAJBAARAIBQCQQAEQCAUAkEABEAgFAJBAARAIBQCQQAEQCAUAkEABEAgFAJBAARAIBQCQQAETDAtCZTXZaWcLuwXEtbBUTBACRQAAQCQQAkUAAEAkEAJFAABAJBACRQAAQCQQAkUAAEAkEAJFAABAJBACRQAAQCQQAAOu17D8muF4mCAAigQAgEggAIoEAIBIIACKBACASCACiYQFuBDsJAEQCwWU5YgIgEggAIoEAIBIIACKBACASCAAigQAgEggAIoEAIBIIACKBACASCAAigQAgEggAIoEAIBIIACKBACASCAAigQAgEggAIoEAIBIIACKBACASCAAigQAgEggAouFsstMKAGy6b89GL2aT0ffp89HLAsC1GZYNMX15/349OfvYBvVBa/NH4/3TwwLAtdmIQEwndx/W0y4OdfBlvP9zrwDA4kjp2c6Pi0gUADbGtU0QXRAe1FI/XtyQtzIfjw8cKQHceBfTwmJqcBENsLHWPkF8e37vbWvtcavzve4i+msBYCOtLRCLI6U6+NTm88M2ujMevzs6KgDcbHYbAPqnlhW62G0YnJ2/XhwplfkjF9EA/bGyt5imT2/t1tOz6byV2u7e9pUSQM/U1b7F1L620p6IA0D/rOaSupWjNmhvxvsn7woAvbSCQHRTQ+2mBm8pAfTa1QViMTWULgwnnwsAvXdFgeimhtGdPbsNANtj6UB0x0mv/tw1nBQAtscygThsv873xh/OZwWArXP5PYhWZq3U94vdBnEA2Fr/P0H8/XT1wKerADfBbwPuryhepNNBAAAAAElFTkSuQmCC"
  , JA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABUCAYAAADAkmT2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACUSURBVHgB7dlBDQJBEAXRWY7rhmAKXKwMXJEghjOYmEmxec9BnX7SvY3F3o/9Nia4jJMQUiOkRkiNkBohNUJqhNQIqRFSI6RGCAD8bK/7fowJrs/PMRay7DVCaoTUCKkRUiOkRkiNkBohNUJqhNR4KwD/ZRuLzTqa25EaITVCaoTUCKkRUiOkRkiNkBohNUJqThPyBZWgB8dQbVJFAAAAAElFTkSuQmCC"
  , WA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAACkCAYAAAA0a2i+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADrSURBVHgB7d2xCQJBFEXRUYwsRhCb0i62C21KBIvZ2A68iWOwnFPChR+94O/et+NlTHC6r8+xAfvBVwIFgYJAQaAgUBAoCBQECgIFgYJAQaAgUBAoCBQECgIFgYJAQaAgUBAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOCXdmMjXtfjMibwPisIFAQKAgWBgkBBoCBQECgIFAQKAgWBgkBBoCBQECgIFAQKAgWBgkDh77PPrHlmlsPYiPNjXcYETiwIFAQKAgWBgkBBoCBQECgIFAQKAgWBgkBBoCBQECgIFAQKAgWBgkDhA/KiCk80tDCqAAAAAElFTkSuQmCC"
  , YA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAABJCAYAAADSd69fAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADpSURBVHgB7dzBCYNAEEDRNXiym5Cmki4sI10FUoxni/joQd+r4TOwsDPT772s4wDP77YOLu8xIBAQiYBIBEQiIBIBkQiIREAkAiIREImASAREIiASAZEIiERAJAIiERCJgEjmcXN3+RP+/yyvcQATiERAJAIime1vUZhAJAIiERCJgEgERCIgEgGRCIhEQCQCIhEQiYBIBEQiIBIBkQiIREAkAiIREAAAwJmmwamudszBM55EQCQCIhEQiYBIBEQiIBIBkQiIREAkAiIREImASAREIiASAZEIiERAJAIiERCJgEgERCIgkh0FzhBCZfHr+QAAAABJRU5ErkJggg=="
  , XA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAd8AAABuCAYAAABm4Rk8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPASURBVHgB7d3BcRxFFIDh14sM8nJRBmwGsBlACGSgC1XjE1YEWkUguIkTOANnYBPBLBFoiQBxkVUctpkRZShAgpE0+2ztft9R1QcdVPqr3/T0lLaZLoIds/5hfna1CgDeibJspjXYNau6rt/GpL4UYYB8k2AXzcqknJaYnLfPnj4PAFKJ744rtZx204/v22Z/FgCkEF96h90u+FX71ZPPAoCNE1/empUPnrQ/NdPjAGCjHLjiJqsa6y8cxgLYDDtfbjLrD2P1u+D2+cFBADAq8eVW3UhkUa5+a9vm48MAYDR73T/Yk4Dbdbvg2p+GXnVj6NcBAGxe/y7w8tn0FztggHGUgAH694BLlFfdn8zruv/h0fybi4sA4F4882WQ/uRzvfpoXqP8+sdzYJdyAECaLryHy+bpuXeCAe7H2Jl7+XMMXWNZSz3yTjAAJOk/SblspuddjD8PACBHH15jaIDhjJ0ZxfUYupbTmJRZresvjaEBIMlfY2jvBAPcxs6X0b09jFVqvPz0uzdHAcDflH6nEjC6clCifh3XX0iKFwGMZn52uQgeNZdssCH1or83XHhhXN240sFGAMjkG+zbwc4XAJKJLwAkE18ASCa+AJBMfAEgmfgCQDLxBYBk4gsAycQXAJKJLwAkE18ASCa+AJBMfAEgmfgCQDLxBYBk4gsAycQXAJKJLwAkE18ASCa+AJBMfAEgmfgCQDLxBYBk4gsAycQXAJKVAODRWDbTWiNOItn87HIRjMbOF+AReRfh7XZpxwEA5Ol328Go7HwBIJn4AkAy8QWAZOILAMnEFwCSiS8AJNsLALZG20wX8QAu08ghvgBbZIQLMRbBxhk7A0Ay8QWAZOILAMnEFwCSiS8AJBNfAEgmvgCQTHwBIJn4AkAy8QWAZOILAMnEFwCSiS8AJBNfAEjmk4IAW6RGnAQA8Lgtm2kNRmXsDADJxBcAkokvACQTXwBIJr4AkEx8ASCZ+AJAMvEFgGTiCwDJxBcAkokvACQTXwBIJr4AkEx8ASCZ+AJAMvEFgGTiCwDJxBcAkokvACQTXwBIthcAcEdtM13EA8zPLhexw8QXgDsrEcfxMIvYYcbOAJBMfAEgmfgCQDLxBYBk4gsAycQXAJKJLwAkE18ASOaSDQDurEacBACwGctmWoNR2fkCsLXaZn92h+VD1w5d15n8a21/r7X4AvC//vkhhRLxSQxWZwMXDl3X/wYD19ZVDDdwbRm47no8//NNPxdfAP7TTc93a6x/jOFeDFy3Griu2z2+Gbz2ffQ7YF6+92300osAAAAASUVORK5CYII="
  , GA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfUAAABmCAYAAADSzQhIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOtSURBVHgB7d3PcRNnGMDh95MNyM4hKsGpAG8FsTsIFWAOGcQp7gBTAeQUzeSQ0EFSgdWB7AriVBBdgkUY82VlX5hMbBAgS/vyPAftRTu66Tffv90SALBkk2F/J1i6EgCwRG3QD0rtPY9Sp8FSbQYALFuJ33ZH54+CpRJ1AG5dO3rfW+T7cXExbX5+cxLcSNQBuFXz9fUSveOFbtoo44g3+8GNegEApCDqAJCEqANAEqIOAEmIOgAkIeoAkISoA0ASog4ASXj4DAC3qhnNzsK7R5bCSB0AkhB1AEhC1AEgCVEHgCREHQCSEHUASELUASAJUQeAJEQdAJIQdQBIQtQBIAlRB4AkRB0AkhB1AEhC1AEgCVEHgCREHQCSEHUASELUASCJzQCAa0wOBoPS/+f5IvfUUk+bn85fBLdO1AG4Xn82aCd1Dxa5pdQYtxdRXwHT7wCQhKgDQBKiDgBJiDoAJCHqAJCEqANAEqIOAEmIOgAkIeoAkISoA0ASog4ASYg6ACQh6gCQhLe0AXC9WX9a+7P9he65uJgGKyHqAFyr+XU6D/Q46ATT7wCQhKgDQBKiDgBJiDoAJCHqAJCE3e8AxGTY32vHeXuxBKXW+1HCMbdbIOoAtM3tPZxfa8Sf8ZnVUk7bHzgJlk7UAWjVnRr1WTOajYPOsqYOAEmIOgAkIeoAkISoA0ASog4ASYg6ACQh6gCQhKgDQBKiDgBJiDoAJCHqAJCEqANAEqIOAEmIOgAkIeoAkISoA0ASog4ASYg6ACQh6gCQhKgDQBKiDgBJiDoAJCHqAJDE5vxjMtw+CgC+YHUn6DwjdViCXilfl4inpdb7AR1Qo7xsL2dBp5UAPqvJsL9TohzP/ySb0aujAAC6pw363snj7b8mT7YOAwDoptPHWz9cBr0NewCswGYAn+x0uP20RhzUeNs0o9lZAKyAqMMnmBwOBuX89S816qD27zXNi+k0AFZE1OEjXW6Im70+rqX3ezP6+0HEeQCskiNt8BEm39/ZvdzhXuLHNug2xQFAF50++erhyXDrDxvigHXjnDos4J0Ncfs2xAHrpsynEWNjYzeAG5XofRtXQf9G0IF1tBkbd76bP84ygJvVmNZihA6sLxvl4IPUcRv0+Rn0cQCsKUfa4D3aNfRnzej8KADWnKjD9c7a9fNHRudAV4g6/J8SJ7W+fWD9HOgSa+rwH+10+8t6764NcUDnGKnDO67Wz+fvQH8VAF0j6hBXo/Po3z30QhYAAGDl/gXBELkn9ZzKdAAAAABJRU5ErkJggg=="
  , $A = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABaAAAABaCAYAAABOkfEQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK0SURBVHgB7dhBDcIAFECxv8lADmI4IGgJiJkckAEGOBFeIKGV0eW2b5cBAAAAAIAPWwcAAAAAAAICGgAAAACAhIAGAAAAACAhoAEAAAAASAhoAAAAAAASAhoAAAAAgISABgAAAAAgIaABAAAAAEgIaAAAAAAAEgIaAAAAAICEgAYAAAAAICGgAQAAAABICGgAAAAAABICGgAAAACAhIAGAAAAACAhoAEAAAAASAhoAAAAAAASAhoAAAAAgISABgAAAAAgIaABAAAAAEgIaAAAAAAAEgIaAAAAAICEgAYAAAAAICGgAQAAAABICGgAAAAAABICGgAAAACAhIAGAAAAACAhoAEAAAAASAhoAAAAAAASAhoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAftgyAMDX3fbtNAAAAHzE4Xi+Dj9hHQAAAAAACAhoAAAAAAASAhoAAAAAgISABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgDy0DAMBL9317DAAAAG9bBwAAAAAAAgIaAAAAAICEgAYAAAAAICGgAQAAAABICGgAAAAAABICGgAAAACAhIAGAAAAACAhoAEAAAAASAhoAAAAAAASAhoAAAAAgISABgAAAAAgIaABAAAAAEgIaAAAAAAAEgIaAAAAAICEgAYAAAAAICGgAQAAAABICGgAAAAAABICGgAAAACAhIAGAAAAACAhoAEAAAAASAhoAAAAAAASAhoAAAAAgISABgAAAAAg8QRmKQqDctu1ywAAAABJRU5ErkJggg=="
  , ZA = () => {
    const e = O.useRef()
      , t = r => /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(r)
      , n = r => {
        r.preventDefault();
        const i = e.current.email.value;
        t(i) ? HA.sendForm("service_71sd7b9", "template_1f6c80d", e.current, {
            publicKey: "dbq0Tvg3bIR2gZ3xS"
        }).then( () => {
            console.log("SUCCESS!"),
            alert("Send email success!"),
            window.location.reload()
        }
        , o => {
            console.log("FAILED...", o.text)
        }
        ) : alert("Invalid Email!")
    }
    ;
    return x.jsxs("div", {
        className: "contact",
        id: "contact",
        children: [x.jsxs("div", {
            className: "contact-inner",
            children: [x.jsx("h2", {
                className: "title",
                children: "Let's talk about your project"
            }), x.jsxs("p", {
                className: "description",
                children: [x.jsx("p", {
                    children: "You surely have some cool projects in mind."
                }), x.jsx("p", {
                    children: "Tell us your story, and we’ll make your dreams come true!"
                })]
            }), x.jsxs("form", {
                onSubmit: n,
                ref: e,
                children: [x.jsx("input", {
                    type: "text",
                    name: "from_name",
                    placeholder: "Your Name",
                    required: !0
                }), x.jsx("input", {
                    type: "text",
                    name: "email",
                    placeholder: "Your Mail",
                    required: !0
                }), x.jsx("input", {
                    type: "text",
                    name: "message",
                    placeholder: "Your Message",
                    required: !0
                }), x.jsx("button", {
                    type: "submit",
                    children: "Submit"
                })]
            })]
        }), x.jsx("img", {
            src: XA,
            alt: "",
            className: "frame-bg"
        }), x.jsx("img", {
            src: $A,
            alt: "",
            className: "line"
        })]
    })
}
;
function qA(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), i, o;
    for (o = 0; o < r.length; o++)
        i = r[o],
        !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}
function ev(e, t) {
    if (e == null)
        return {};
    var n = qA(e, t), r, i;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++)
            r = o[i],
            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}
function ii(e) {
    "@babel/helpers - typeof";
    return ii = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    ii(e)
}
function tv(e, t) {
    if (ii(e) != "object" || !e)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (ii(r) != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function Ep(e) {
    var t = tv(e, "string");
    return ii(t) == "symbol" ? t : String(t)
}
function Bs(e, t, n) {
    return t = Ep(t),
    t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function Cp(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function wc(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        Object.defineProperty(e, Ep(r.key), r)
    }
}
function kp(e, t, n) {
    return t && wc(e.prototype, t),
    n && wc(e, n),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function Sc(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function xc(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Sc(Object(n), !0).forEach(function(r) {
            Bs(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sc(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
var Da = {
    bindI18n: "languageChanged",
    bindI18nStore: "",
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: !0,
    transWrapTextNodes: "",
    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
    useSuspense: !0
}, Rp, nv = Kn.createContext();
function rv() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Da = xc(xc({}, Da), e)
}
function iv() {
    return Da
}
var ov = function() {
    function e() {
        Cp(this, e),
        this.usedNamespaces = {}
    }
    return kp(e, [{
        key: "addUsedNamespaces",
        value: function(n) {
            var r = this;
            n.forEach(function(i) {
                r.usedNamespaces[i] || (r.usedNamespaces[i] = !0)
            })
        }
    }, {
        key: "getUsedNamespaces",
        value: function() {
            return Object.keys(this.usedNamespaces)
        }
    }]),
    e
}();
function lv(e) {
    Rp = e
}
function av() {
    return Rp
}
var sv = {
    type: "3rdParty",
    init: function(t) {
        rv(t.options.react),
        lv(t)
    }
};
function uv() {
    if (console && console.warn) {
        for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
        typeof n[0] == "string" && (n[0] = "react-i18next:: ".concat(n[0])),
        (e = console).warn.apply(e, n)
    }
}
var Ec = {};
function Ba() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    typeof t[0] == "string" && Ec[t[0]] || (typeof t[0] == "string" && (Ec[t[0]] = new Date),
    uv.apply(void 0, t))
}
function Cc(e, t, n) {
    e.loadNamespaces(t, function() {
        if (e.isInitialized)
            n();
        else {
            var r = function i() {
                setTimeout(function() {
                    e.off("initialized", i)
                }, 0),
                n()
            };
            e.on("initialized", r)
        }
    })
}
function cv(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!t.languages || !t.languages.length)
        return Ba("i18n.languages were undefined or empty", t.languages),
        !0;
    var r = t.languages[0]
      , i = t.options ? t.options.fallbackLng : !1
      , o = t.languages[t.languages.length - 1];
    if (r.toLowerCase() === "cimode")
        return !0;
    var l = function(s, u) {
        var f = t.services.backendConnector.state["".concat(s, "|").concat(u)];
        return f === -1 || f === 2
    };
    return n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !l(t.isLanguageChangingTo, e) ? !1 : !!(t.hasResourceBundle(r, e) || !t.services.backendConnector.backend || t.options.resources && !t.options.partialBundledLanguages || l(r, e) && (!i || l(o, e)))
}
function fv(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
      , r = t.options.ignoreJSONStructure !== void 0;
    return r ? t.hasLoadedNamespace(e, {
        precheck: function(o, l) {
            if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !l(o.isLanguageChangingTo, e))
                return !1
        }
    }) : cv(e, t, n)
}
function dv(e) {
    return e.displayName || e.name || (typeof e == "string" && e.length > 0 ? e : "Unknown")
}
function pv(e) {
    if (Array.isArray(e))
        return e
}
function hv(e, t) {
    var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (n != null) {
        var r, i, o, l, a = [], s = !0, u = !1;
        try {
            if (o = (n = n.call(e)).next,
            t === 0) {
                if (Object(n) !== n)
                    return;
                s = !1
            } else
                for (; !(s = (r = o.call(n)).done) && (a.push(r.value),
                a.length !== t); s = !0)
                    ;
        } catch (f) {
            u = !0,
            i = f
        } finally {
            try {
                if (!s && n.return != null && (l = n.return(),
                Object(l) !== l))
                    return
            } finally {
                if (u)
                    throw i
            }
        }
        return a
    }
}
function kc(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
    return r
}
function gv(e, t) {
    if (e) {
        if (typeof e == "string")
            return kc(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor && (n = e.constructor.name),
        n === "Map" || n === "Set")
            return Array.from(e);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return kc(e, t)
    }
}
function mv() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function Np(e, t) {
    return pv(e) || hv(e, t) || gv(e, t) || mv()
}
function Rc(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function Dl(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Rc(Object(n), !0).forEach(function(r) {
            Bs(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rc(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function gi(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
      , n = t.i18n
      , r = O.useContext(nv) || {}
      , i = r.i18n
      , o = r.defaultNS
      , l = n || i || av();
    if (l && !l.reportNamespaces && (l.reportNamespaces = new ov),
    !l) {
        Ba("You will need to pass in an i18next instance by using initReactI18next");
        var a = function(C) {
            return Array.isArray(C) ? C[C.length - 1] : C
        }
          , s = [a, {}, !1];
        return s.t = a,
        s.i18n = {},
        s.ready = !1,
        s
    }
    l.options.react && l.options.react.wait !== void 0 && Ba("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
    var u = Dl(Dl(Dl({}, iv()), l.options.react), t)
      , f = u.useSuspense
      , p = u.keyPrefix
      , c = e || o || l.options && l.options.defaultNS;
    c = typeof c == "string" ? [c] : c || ["translation"],
    l.reportNamespaces.addUsedNamespaces && l.reportNamespaces.addUsedNamespaces(c);
    var v = (l.isInitialized || l.initializedStoreOnce) && c.every(function(N) {
        return fv(N, l, u)
    });
    function A() {
        return l.getFixedT(null, u.nsMode === "fallback" ? c : c[0], p)
    }
    var y = O.useState(A)
      , R = Np(y, 2)
      , g = R[0]
      , h = R[1]
      , m = O.useRef(!0);
    O.useEffect(function() {
        var N = u.bindI18n
          , C = u.bindI18nStore;
        m.current = !0,
        !v && !f && Cc(l, c, function() {
            m.current && h(A)
        });
        function I() {
            m.current && h(A)
        }
        return N && l && l.on(N, I),
        C && l && l.store.on(C, I),
        function() {
            m.current = !1,
            N && l && N.split(" ").forEach(function(b) {
                return l.off(b, I)
            }),
            C && l && C.split(" ").forEach(function(b) {
                return l.store.off(b, I)
            })
        }
    }, [l, c.join()]);
    var d = O.useRef(!0);
    O.useEffect(function() {
        m.current && !d.current && h(A),
        d.current = !1
    }, [l]);
    var E = [g, l, v];
    if (E.t = g,
    E.i18n = l,
    E.ready = v,
    v || !v && !f)
        return E;
    throw new Promise(function(N) {
        Cc(l, c, function() {
            N()
        })
    }
    )
}
var Av = ["forwardedRef"];
function Nc(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function Pc(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Nc(Object(n), !0).forEach(function(r) {
            Bs(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nc(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function vv(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function(r) {
        function i(l) {
            var a = l.forwardedRef
              , s = ev(l, Av)
              , u = gi(e, s)
              , f = Np(u, 3)
              , p = f[0]
              , c = f[1]
              , v = f[2]
              , A = Pc(Pc({}, s), {}, {
                t: p,
                i18n: c,
                tReady: v
            });
            return t.withRef && a ? A.ref = a : !t.withRef && a && (A.forwardedRef = a),
            Kn.createElement(r, A)
        }
        i.displayName = "withI18nextTranslation(".concat(dv(r), ")"),
        i.WrappedComponent = r;
        var o = function(a, s) {
            return Kn.createElement(i, Object.assign({}, a, {
                forwardedRef: s
            }))
        };
        return t.withRef ? Kn.forwardRef(o) : i
    }
}
const yv = "/assets/banner-introduction-aa71d3bf.png"
  , wv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMUAAACnCAYAAAChBJihAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFzSURBVHgB7dyxaQMBEAXRPYVXjEG4KbmL68JqyghczMVOrUnNYSS918MkC/uXgQd1u6zbHOA0wB1RQIgCQhQQooAQBYQoIEQBIQoIUUCIAkIUEKKAEAWEKCBEASEKCFFAiAJCFBCigBAFhCgAAAAAOM4y8EdHDR2fr/s2/8BJFkIUEKKAEAWEKCBEASEKCFFAiAJCFBCigBAFhCggRAEhCghRQIgCQhQQooAQBYQoIEQBIQoAAAAAAAAAAAAAAAAA+G35/ljf5wBvn/vXwAPyjgohCghRQIgCQhQQooAQBYQoIEQBIQoIUUCIAkIUEKKAEAWEKCBEASEKCFFAiAJCFBCigBAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPA6luHp3C7rNgc4X/dtXsBpgDuigBAFhCggRAEhCghRQIgCQhQQooAQBYQoIEQBIQoIUUCIAkIUEKKAEAWEKCBEASEKCFFA/AB1ug5+RFxAqgAAAABJRU5ErkJggg=="
  , Sv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA0QAAAAlCAYAAABiWSlMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADgSURBVHgB7dcBDYNAFECxf7iYncmZIORgBxlMBQnktS66zmO/BgAAuNXn+1vD42wDAAAQJUQAAECWEAEAAFlCBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC8zjqP/RoAAICgbQAAAKKECAAAyBIiAAAgS4gAAIAsIQIAALKECAAAyBIiAAAgS4gAAIAsIQIAALKECAAAyBIiAAAgS4gAAIAsIQIAALKECAAAyBIiAAAgS4gAAIAsIQIAALKECAAAyBIiAAAgS4gAAIAsIQIAALKECAAAyBIiAAAg6w+p1QdzzQP+VAAAAABJRU5ErkJggg=="
  , xv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAuCAYAAAC/OZ4cAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAlWSURBVHgB7Zrbb1TXFcbPzHg84/v9gjHGBuNQo0JdImhNXOMYu4VQErVN1eaJhwr+AQQCHrgIIeCJByrEU3lqJVCrVq2qligKUiAJpSZNwZQmDTVBnuArNr6O7fH0942PrYkZ22fODGZMWdLWmTmXfdb+9trfuuzjMGzIvn370jIzM1/1+/25SUlJN48dO9bO6aCxtMRx9OjRDRMTE6uSk5M/n5yc/Bf/J4woxWnYEF5a1N/f/0ZPT8/bw8PD71y4cCHJWGJy5MiRjIGBgV3d3d1vDw4ONjx8+DDTsCG2AERGnE5nH0f36OjoKp/Pt5HZs9vXosvu3bu9GEHT2NhYqf67XC5/RkbGpGFDbA26vb29MyUl5Ybb7e4LBAJpzODrnM6nOYzEF2d5eXkZOm8GxDSv1+tjLH8/e/Zsv2FDbAF4+fLlQFdX1y1e/EkwGExiJsvhw1qs0GUkuKCjF13rAC/P4XBMpqenX79//36rYZPDbS+78+fPP05NTb0GAXdqJkdGRjaxFFYaCWyFJs1UYX3fwmmkofsj9G65ePHiqGFTYuKttra2z5jBD2WF4+Pjy4aGhhq3bt2ayFboxek1QTvZcPgour/f0tLSbsQgMQGomUM+hke+AkQPytUAYLmRgLJnzx43VvdddKzk6MJpfEoI9rerV69GHbqES8zhB6GAr7i4+N3e3t4fs5QzsMK3Tp48+atDhw71WO1DgyspKfHwM5nmjaQXgw3AWRPQxChObDQvL2+cJWnVczoKCgpKAK8O60thwrtpNzjfa8QoceErBlIIkL+AT77BQP25ubm/Js56nwEH57hfAJVitcUMSC2L3xniJVoyv9W+9ixLTmCNcxyi3xGAHFAoxW2dRAM++vTNo18yjmMXOu4Q3chxAOBvSACeGDFKXALg1tbWnrVr136AN67AClNQtP7MmTP3uDQzKADN5FoVg16FJZQwkBx4M0thEKA5NTCACemj/7PfockwJySgW3QExDETzP79+/d30ceXaWlpn3HtfnhWwfUKHEc9/XoBu4vo4T2uxwxeSC8jToJC6QD4s8ePHzdooNnZ2X/Oz8//y5MnTwoBrhqufEXWxj05DMQd9v5gGDgGIMy3LB0S8z6HWng/cgwA1O3xeL7ieBegPmWS/MqW0KMOIEdycnJ+f+3atT/Fyn0zChlxFEDMB8DDKF1EiKCBfAF4+QxgBYNNE0gMctxcnvHOnQWoi+ZWfAeV9KFDG0D2wssbmTwv1tnK+8+fPn3aVtAcSeKaw5IbDzDrPgWpcE4e1parQemarEPHWdQWT5EVT6jx2yF6QI/1vHcM8JJkfbQHgGk75oskcbFA04uuYZnWAJxakWEutwWW5LOWGR04BLDIdoL/f2KVH8zndKJ6gRGjHDhwIIul+j1mdhNeeDXKOlF23Eg8cZjcGyAG/AftBv8/AsgxIwaJKWs4ceLESpbHG5S2tmF1yzgVmmkjQcXUzQG1LEff1fCku7GxsQeHMmTYFFsWqJySl2/q6+v7gSJ78ZzJPUtGzLBpAsdyi4jh3cOHD9sqKERtgZcuXXI9evSoDvB+wrKtlMdLZKubS6Q3BxeWuByHU7Jz505lN767d+9GBWJUAKoURBmrkZjqTfhuudKqubKNJSLy3KqwFwBkeVlZ2SDL+ctoOrAMIOClQro7iPN2aC8E8BLRUdgSWSNcngk3rty+fXs/ID60+qzlagwv2QJ431dsR2y15JbsQqLIASmEmnYdP378m1afs2SB6hBP+yaWVwJ4fuMFFcYWBMQ8jp6mpqZ/Y4kjCz2zIICUptYC3o/gvFVmRWQpc96CYnJiPhSVWltb+5/r16/PGyfOCyC8l0sV4y287Xo6dj7nrGKxJKiSGiAWkiAEt23b9jmWOOe45+VAOnldibgieKvgCejpZiSIhOlkKe5VfKgyG6npaxw3Tp+OdO+cFoj1vUq4shMQs60GyWYaN8ZSH+avPJub3wLyeS175cFBgv5hjUF1Ro4uK/o4prxKlviwubn5E6wwYtQRsRqj4iectwWPq62/gIUKSqgeR1T/BdWYv+KtfUT32mjaSD/1ChEWe/kLOKrOHeS870FDd6gDpqJPJXzezDHXwvNKEILoX0U/qmT/NlLMGwlAzVqdUjSrvKd7VMai/RHybTl37lzoGaz4Af+ToIHXtF+yWCBqJcBfnYD2h9u3b3+ofWxTn/9mZWWNUnZ7h7+e4AKWIavllhTRGM5UFfY7s+95iqcoEJRSkq/FavIsgqe8OECJ6IFmOnyjR5UOQL0JiNObN4uxZxwqYaFPR1FR0cfT4IXpcwtwFShPWtAnVClXqged1WtvZfYNTwFIrFfPA6Vh5fIFBbAVQw1iZZMRRjMalis/cy40S/16z8jevXuf4i3G52dCh6PoT1zu4TFtSWyYff1rAJ46dSoLK1qvB6w6DpMXnPDlitLS0qdmCFCXa9ct0kbRs5CwvZXsgwcP5s2+zmrJQddlWjmGxQlV5qUKO2PZMtuwZv6oRMVAf8r+brP415ja/bKst0r2OJGbLJHL1dXV/SwdY926dSuZkJ9DxK9Ij4U4J15i0sqwNpX4+zuq0J06DwAVrK4fwmkbzP0Ty/ooNjR59ZdgdW/6/EwYQzknD/B2aT/DmOKHaJX2EDdVsDyKOzo6qnjRt3FEjYA37YwWLZSZquIHPfrchDK+MqhSxqWIYCut2rSiqPQxQ0hFZQqLbre1tYUwCgGoDq9cubKezhU0pxr2JKQQIK4QkLRKTYbSv+eUwUifJO3PMJHSZzWA5puFkKgnUxhJMJDJqqqqe8SFgzofApDzXnihHgDXyIEZNsne3N8Nlc2lqMmjzzN3DumDLiGT5Gi7am5atUt5AVbd1dDQ8AAQQ0SqK/kAWGl+UhGztZjV3oQpOphBcVxWAX4iA6uuNKa+4Ql5YZllkco4iZS/JqLICvVlF8ZWRpyZoVMufc/Hnu534IhqYyozeaHLVbGKuYFm4Nnv1NfX9zg7OzsVw61Rzr2YnnIpiz6RU14NBzqdxGramSqOJrD8fxYzUBdmZaS8DmdNTY3ClhSrtbKXMrWMscCCwsJCp76wr5D1mcHlSxAtiPCS0928ebNLABaZHzg+i0/OXkhRtKIqPWlquj776qTo+JEx9X3yS7EgWq36XC49PT3gIPFPporipnZmvBTrQtU9SLHC/z+lvqOIfhv+3wAAAABJRU5ErkJggg=="
  , Ev = "/assets/appstore-9ee9f7a3.png"
  , Cv = "/assets/cocos-44b8ab91.png"
  , kv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBCAYAAACO98lFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAxdSURBVHgB3VtNcBtXHf/vaiVLlhOnTVLbSRwndlraTukUkjRtTRgKTAdKZ4DhwqHTA5y4wMCFExcuDBegwHDgwHBhBmagw5RJO+2BKdCUNB/NhDRxkyi2bMfyh6xvaaXdlXb5/5++dle7760tRTD9JbLk99a77/3f//P3niSw4RsvvvCz6cOHv2+aFgwLjUYDstk8SCEJhoVaTXv3tTffOtv+XbZ3livq9VAoBMPG8EQOIEkSFArFm/Y2hxCqqnY3JA9fCDA8JWBCUGvqdXubQwhFo7QSCYdh6BiiKpAQpAbctrc5zWFlKxsdicDHGQqaey6bTdnbHEJIZLOqLMnwcUZYUWA1l9u0t7lnXG+YjToMG0P0CRaaXrlcztvbepbdMk0VhgxpmOFBZh7IcDa5UCpXtmHIGKYMrIaludsUd0O2WFiJj8ZnQQDTNJ03h91pdcMyAU0Q/74fX2RB0PymWqv1LHKPEDRDT4xJY5+zLP/1MTHLe/7sPFQrZefs25/t73ZIjnEz1Ot1WN3YAFmW+ZLk9O0bG4N/XrwCIUUsiJpWW3O39QihUlYXDjywH3hCMHDgJ585BaFI/zmFXi7Dfy5dhU5+gs+lJ8sYz9kYWu9s/pLUuQbav+PnYydm4Z33L0EIxELQNGPJ3dajg9vp7K2IogAPlHDUqlUYBCysU+hFNQR7oZmRqTUa+G412y36nbXZrsE+s/3ZMAL5lea41YS7vUcIVcNYDocV0d2guJ2FgYAtptX6KLWbwPKZVsfyLNsVbU0RgExuO59f6Gl3NxRrtY2wwlfzkCzBdmYwQUSy/WxPqz25tnDs4vAUjRTMJStYF1Vr+m13e48QdF0vRwSaQFnl1uZghMDznZJHXz95lYyL15C1jZ52d0Mymayh7XBNTEIhpLM5GBTaGmAPLN1nSY6+TrvrDkFA0aNQ0PPuds/grOkG3+vhCAqlMgwKcsccwPHOPttMwmk6rgEFggTpdLrS+3wP1HStAAKoA4oOBNM2Jed02tPuTpy0Rur07sw4GvW6Bh5q42n8hm5QqTkFHKDvgEAPxvAV4nAUkXgcpqcmQMESvpUWoFSsjrNjqQD9s6RO1CATobAqyc1rxh464BtN7EBhey6upxAwjCTH9+w5CRwYGKODgATwq5//hqXGXsmkiflAJpfHiONUSvd1XmveMREUSlgR8yCarnvGdU8hZLO5jx4YH++pDxwDwGWrq1VQRmMgAk2wpmmefZT86LoBcp9Ea5AoWSyU7nm1e/oEyzIXZMFdqb9UKkEQjI2OwnBrxV4wbrFau+HV5ymEUlVdVAS5goSrm00HyxXG94wBpxQJmuv0BRKC3tBuevV5zjSzmbk3OjJC/Dz4gVQ8jUKYAzEmJw5CYmW1x+4JpFEKxm9Z7qeUxgkaeien8LwC+7Rq/a5Xn6cQNovFXFjAOtPj0ukMCIEqcOb5s+zl2Y1+J3UrARGqSLkZUauTecPmZ4oXLFpEIvDjn/4CYrEo+IGqVMwR1rz6PIWAFwspNmYOBWE6IdR1vVyB1NoGKOGQg5bwvBU4o0UnuZKaKTEPMtYNOVXd9Ozz+RuK1MJEoFQZAB0pNZMlxwQlZ5LkBbswVLXGNYXmdRamzAVPT+5riHXDqIAAVY7P2AlkNsQm2LvVVfU2ujlGN3lu5whbmSxbaR5a9VDd+/k+yBaLaRCAGKb7gXZ67N3X1RrGQKFZljGFF5mD0aj7qq2vEKqquiKKXJTtEavTF0z6b3ZW1l4uuylJL5+hhGTaSBbWEWpF9V1UXyE06uZtEIDMsFarQV+QmvxEe2Xbr84DwFlA2UtrQjQyAhVVFTpgo2Gu+fX5CmFrO7sgjN2UNWby0A9o7KbVTc/tmtAto7v0m50ApusoqSOzFCVcmqYn/fp8Z5nJZO6EIwFotm2h6+DDamoC2y2mmbRe3t6+JQxJ6oglOhqnvQTuI+j6XCHvq9m+uTE6m+URZJ1r4B8BaPCJxBLE42OsStwNDE2nqpVtlLZhtX4cnjiAmWC9Q8PbuUepRcUriiysaBm3WHaeSXD0+3U0FGVLtKtDCdNHd5fg5p1F2C3qKLxtCnEhp1JquLo/+dEPYdHj3nazIHOoE2fBGSuNUzfNu379vkLQb96sjHz1KyCCjA/v53CL1JAwpY30lNJ0jgDrbJ98octJ4jY6e/GEQH21ctl3j8DXJ+AOhWbaPdaQwSICixqWI/w5iViJWDDglqhAQpChYpq+QuDWy8jEEJEY971Aag4C+QfPbUjJMRCFDSYoyCmzCYJHdJCllp+wMEeoiKk1vHZ9fd03WeIKATdLiVf3FQLZ4ktf+gIcmpzoKWzsiU0I7fb8P96DhcUlYY7fBh0gazTqndTYak2aeEXLllbnsYgT3RG39LjhgysETEIowTji108TjGIZe2D6MIigKDtzHLQBpGPksG/Isghhyx1IEBXUBJFgUU+5yQxXPzPZ3FLQlRNBZ+l1QIrNajoz2rbvrroHcGhBiidVVbkbp1whlMrlhUEJ4TNnn4XJgwfBQGFoRNe7nZnVpPE1JGTH9+6BZ596EorIYbqjgT1tDrG9RU1YPOF9krx+rjmourZAzozHOgfF/kOT8Mq3X2Yef2N5FS6cvwi3l5eRhcaJ6xrzK2c+9SScfvrTkFnfIsYb3MeL22V2Z/AYVktIyvCKJxIahtDrvLEJfEI5GUa1NIwBlMy2o4GTRw/D145+nbVtrd6DMMo4l8vRcVu4c+OWjTOQHFv3zbZukTWCPGiFdsJ43CL+09TaHeCA7xM2MmuxqHhfYccggbSEMr5vHBKYFRZtpE93i97yPDHTNglWPKF58SyWfEuhVOKmtFwh5HW9oOwgtu8KVpNPsO8xtuG159iOENRCxZMqKJ4oKmVzuRXeNdwZbm5uqiAPxjH6Quq+uRMsy/ZJcvURyFQpZeaBirxKvc4tdUXLbOEicYlEiXEOAUOf3z1aJyztkci9+vb39hVNLoHPbNEts9ksly8V6jo6Ht+DCLSZsnR3ERpai5gm+7V2KJDOQTSpcw6ps59g4xWcZxaa/iKCO1uNOr+MZmQ2Jo28awQntIg+qxJXv9+rj5inq+jN3792HcZicXjqsYfh9DOnYezggZYwLEdU8Bsl2BygJNnSYrtAreYGytT0IdBx4hfevwTn3vkXiA6Z1QxDeJpEKAQiV6Ij0cf9+okHiIaijBe49OFNOP/BNaDdq0eOz8Czz52ByZlpvkDcmuCi1PaO74XJw1OMvHn38lVY/tsbrGiiyVNRJqIAkVbbAgGEQsCs8XZsJPblIIcg6CwTxW5CIrmCZMtdNrnpqUmY/+xzMPvICY+/ab5bLVNSkGGawknjB7h88QN4+/y/YRP3PGkLfwRJVSqgeNttbmCilxJdIxRCLltcOPTQROBDGR3g7CKR5sGJDdyz/OOfXmMHMB968EGYnz8Djz/1BBMaIR6PwczccUil1uH8hcuw+ObbFNsZsULHCUmzwrv8Rk6pzE+ZCUIh4GASzAs3dschMuBqtydRKJfh9XNvwWuvv8G27E9jjfDuxSuw9ee/0oExiIxEmMONRYOvth8oPGZyuRui64RCwIJmWRnwN+RI5elFk/77+QvIBBdYZheLDfY5JEyzUf9QdJ0wREq1Wnokcv++F0UDlaz7k5CR/9DrsCK6TiiEK4uLavh/8Q25AYBo/Fw6LTyEHaQwMGKRyAdTGPv3oQ3LUjvB/T8FhrEIOtO9OFb0vFur29vroj8JoofkN1gtffKTjzw6e/zEtx6bm/vmaDQ6ncXS1+9UWlBQ6KMjfHIfNQo6QGs0FpMaplncSqfPYXj+5UIicbk1bnI0XK/ejzHKX5yff+7Y0UM/mDly5AUkX+Lb2TyjxHZyEosJAf8u8BG+Vj4dxXwkooTquWLhykpq/dVbi8vnsEYoQrcWC4yBeaSj4+MPPPH0yZcenTn23f0HHjxFJGkeY71F9BCHowskBJw4RhOJkiStpm2sptZ+l0pt/nZhaWkZuvPYtY3etzr55BMn5mZnHn7l0bnjL4/tGZvN5YuetT/71jyag+QyB1JxnDQdL6mgir+9ur78qnw98d4V19f5BoH7TBZ0aYLPnzp1+vjczPdmZ2ZexK27felszsJ9C7Jj0gQLNYGpOEYiC/cSrt1LpX69tr30l2Qyn4c+VzrIIIcJNpmJiYn4J45Nzs8cOf6dfeN7X0qtbybTuczvV5L3/pDc2EjCkPFfPE+uoycTCFEAAAAASUVORK5CYII="
  , Rv = "/assets/unity-5b071ea9.png"
  , Ts = "/assets/logo-9254d519.png"
  , Nv = () => {
    const {t: e} = gi()
      , t = [{
        icon: kv,
        name: "HTML5"
    }, {
        icon: Ev,
        name: "Apple"
    }, {
        icon: xv,
        name: "Android"
    }, {
        icon: Rv,
        name: "Unity"
    }, {
        icon: Cv,
        name: "Cocos"
    }];
    return x.jsxs("div", {
        className: "introduction",
        children: [x.jsx("img", {
            src: wv,
            alt: "",
            className: "rectangle-frame"
        }), x.jsxs("div", {
            className: "introduction-inner",
            children: [x.jsxs("div", {
                className: "content",
                children: [x.jsx("h1", {
                    children: e("common.g5studio")
                }), x.jsx("h2", {
                    children: e("common.sologan")
                }), x.jsx("p", {
                    children: e("home.introduction")
                })]
            }), x.jsxs("div", {
                className: "banner",
                children: [x.jsx("img", {
                    src: yv,
                    alt: "",
                    className: "banner-img"
                }), x.jsx("img", {
                    src: Ts,
                    alt: "",
                    className: "logo"
                })]
            })]
        }), x.jsxs("div", {
            className: "tech-stack",
            children: [x.jsx("img", {
                src: Sv,
                alt: "",
                className: "line-frame"
            }), t.map(n => x.jsxs("div", {
                className: "tech-stack-item",
                children: [x.jsx("div", {
                    className: "tech-stack-item_image",
                    children: x.jsx("img", {
                        src: n.icon,
                        alt: n.name
                    })
                }), x.jsx("p", {
                    className: "name",
                    children: n.name
                })]
            }, n.name))]
        })]
    })
}
  , Bl = "/assets/banner-services-dc74406c.png"
  , Pv = () => {
    const {t: e} = gi()
      , t = [{
        title: e("service.gameArt.title"),
        desc: e("service.gameArt.desc")
    }, {
        title: e("service.uiDesign.title"),
        desc: e("service.uiDesign.desc")
    }, {
        title: e("service.gameDevelopment.title"),
        desc: e("service.gameDevelopment.desc")
    }, {
        title: e("service.animation.title"),
        desc: e("service.animation.desc")
    }, {
        title: e("service.gameDesign.title"),
        desc: e("service.gameDesign.desc")
    }, {
        title: e("service.blockchain.title"),
        desc: e("service.blockchain.desc")
    }];
    return x.jsxs("div", {
        className: "our-services",
        id: "service",
        children: [x.jsx("h2", {
            className: "title",
            children: e("service.title")
        }), x.jsx("p", {
            className: "description",
            children: e("service.desc")
        }), x.jsxs("div", {
            className: "services",
            children: [x.jsxs("div", {
                className: "services-content",
                children: [x.jsxs("div", {
                    className: "services-sub-content sub-content-1",
                    children: [t.slice(0, 3).map(n => x.jsxs("div", {
                        className: "service-item",
                        children: [x.jsxs("h4", {
                            className: "title",
                            children: [x.jsx("b", {
                                children: "#"
                            }), x.jsx("span", {
                                children: n.title
                            })]
                        }), x.jsx("p", {
                            children: n.desc
                        })]
                    }, n.title)), x.jsx("div", {
                        className: "sub-content-banner",
                        children: x.jsx("img", {
                            src: Bl,
                            alt: ""
                        })
                    })]
                }), x.jsxs("div", {
                    className: "services-sub-content sub-content-2",
                    children: [t.slice(3).map(n => x.jsxs("div", {
                        className: "service-item",
                        children: [x.jsxs("h4", {
                            className: "title",
                            children: [x.jsx("b", {
                                children: "#"
                            }), x.jsx("span", {
                                children: n.title
                            })]
                        }), x.jsx("p", {
                            children: n.desc
                        })]
                    }, n.title)), x.jsx("div", {
                        className: "sub-content-banner",
                        children: x.jsx("img", {
                            src: Bl,
                            alt: ""
                        })
                    })]
                })]
            }), x.jsx("div", {
                className: "services-banner",
                children: x.jsx("img", {
                    src: Bl,
                    alt: ""
                })
            })]
        }), x.jsx("img", {
            src: yc,
            alt: "",
            className: "frame frame-1"
        }), x.jsx("img", {
            src: yc,
            alt: "",
            className: "frame frame-1-2"
        }), x.jsx("img", {
            src: JA,
            alt: "",
            className: "frame frame-2"
        }), x.jsx("img", {
            src: WA,
            alt: "",
            className: "frame frame-3"
        }), x.jsx("img", {
            src: YA,
            alt: "",
            className: "frame frame-4"
        }), x.jsx("img", {
            src: GA,
            alt: "",
            className: "frame frame-6"
        })]
    })
}
  , Lv = "/assets/ourwork-banner-d8976bef.png"
  , Iv = "/assets/ourwork-banner-mobile-fb50f494.png"
  , Ov = () => {
    const {t: e} = gi();
    return x.jsxs("div", {
        className: "our-work",
        id: "ourwork",
        children: [x.jsx("h2", {
            className: "title",
            children: e("ourWork.title")
        }), x.jsx("p", {
            className: "description",
            children: e("ourWork.desc")
        }), x.jsx("img", {
            src: Lv,
            alt: "",
            className: "banner"
        }), x.jsx("img", {
            src: Iv,
            alt: "",
            className: "banner-mobile"
        })]
    })
}
  , jv = () => x.jsxs("div", {
    className: "home-page",
    children: [x.jsx(Nv, {}), x.jsx(Pv, {}), x.jsx(Ov, {}), x.jsx(jA, {}), x.jsx(ZA, {})]
})
  , Dv = () => {
    const {t: e} = gi();
    return x.jsx("header", {
        className: "header",
        children: x.jsxs("div", {
            className: "header-inner",
            children: [x.jsxs("div", {
                className: "logo-name",
                children: [x.jsx("div", {
                    className: "logo",
                    children: x.jsx("img", {
                        src: Ts,
                        alt: ""
                    })
                }), x.jsx("button", {
                    className: "name",
                    children: e("common.g5studio")
                })]
            }), x.jsxs("div", {
                className: "navbar",
                children: [x.jsx("a", {
                    href: "#service",
                    className: "navbar-item",
                    children: e("common.service")
                }), x.jsx("a", {
                    href: "#ourwork",
                    className: "navbar-item",
                    children: e("common.portfolio")
                }), x.jsx("a", {
                    href: "https://demo.g5.studio/",
                    target: "_blank",
                    className: "navbar-item",
                    children: e("common.gameDemo")
                }), x.jsx("a", {
                    href: "#about-us",
                    className: "navbar-item",
                    children: e("common.aboutUs")
                })]
            }), x.jsx("a", {
                href: "#contact",
                children: x.jsx("button", {
                    children: "Contact us"
                })
            })]
        })
    })
}
  , Bv = () => x.jsxs("div", {
    className: "footer",
    children: [x.jsxs("div", {
        className: "content",
        children: [x.jsx("div", {
            className: "logo",
            children: x.jsx("img", {
                src: Ts,
                alt: ""
            })
        }), x.jsxs("div", {
            className: "company",
            children: [x.jsx("h2", {
                children: "Company"
            }), x.jsx("p", {
                children: "Contact"
            }), x.jsx("p", {
                children: "Portfolio"
            }), x.jsx("p", {
                children: "About us"
            })]
        }), x.jsxs("div", {
            className: "company",
            children: [x.jsx("h2", {
                children: "Quick Links"
            }), x.jsx("p", {
                children: "Game Development"
            }), x.jsx("p", {
                children: "Blockchain Integration"
            }), x.jsx("p", {
                children: "Advisory Service"
            })]
        })]
    }), x.jsx("p", {
        className: `copyright\r
      `,
        children: "©2025 G5 Tech. All rights reserved."
    })]
})
  , Tv = () => x.jsxs("div", {
    className: "public-layout",
    children: [x.jsx(Dv, {}), x.jsx("div", {
        className: "public-layout-body",
        children: x.jsx(CA, {})
    }), x.jsx(Bv, {})]
})
  , Ui = {
    HOME: "/",
    GAMES: "/games",
    RULES: "rules",
    EVENTS: "/events"
}
  , Fv = [{
    path: Ui.HOME,
    element: x.jsx(Tv, {}),
    children: [{
        path: Ui.HOME,
        element: x.jsx(jv, {})
    }, {
        path: Ui.GAMES,
        element: x.jsx(IA, {})
    }]
}, {
    path: "*",
    element: x.jsx(EA, {
        to: Ui.HOME
    })
}]
  , Uv = NA(Fv);
function Mv() {
    return x.jsx(SA, {
        router: Uv
    })
}
const zv = vv()(Mv);
const Qv = {
    type: "logger",
    log(e) {
        this.output("log", e)
    },
    warn(e) {
        this.output("warn", e)
    },
    error(e) {
        this.output("error", e)
    },
    output(e, t) {
        console && console[e] && console[e].apply(console, t)
    }
};
class ko {
    constructor(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.init(t, n)
    }
    init(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.prefix = n.prefix || "i18next:",
        this.logger = t || Qv,
        this.options = n,
        this.debug = n.debug
    }
    log() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
        return this.forward(n, "log", "", !0)
    }
    warn() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
        return this.forward(n, "warn", "", !0)
    }
    error() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
        return this.forward(n, "error", "")
    }
    deprecate() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
        return this.forward(n, "warn", "WARNING DEPRECATED: ", !0)
    }
    forward(t, n, r, i) {
        return i && !this.debug ? null : (typeof t[0] == "string" && (t[0] = `${r}${this.prefix} ${t[0]}`),
        this.logger[n](t))
    }
    create(t) {
        return new ko(this.logger,{
            prefix: `${this.prefix}:${t}:`,
            ...this.options
        })
    }
    clone(t) {
        return t = t || this.options,
        t.prefix = t.prefix || this.prefix,
        new ko(this.logger,t)
    }
}
var At = new ko;
class Go {
    constructor() {
        this.observers = {}
    }
    on(t, n) {
        return t.split(" ").forEach(r => {
            this.observers[r] = this.observers[r] || [],
            this.observers[r].push(n)
        }
        ),
        this
    }
    off(t, n) {
        if (this.observers[t]) {
            if (!n) {
                delete this.observers[t];
                return
            }
            this.observers[t] = this.observers[t].filter(r => r !== n)
        }
    }
    emit(t) {
        for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
            r[i - 1] = arguments[i];
        this.observers[t] && [].concat(this.observers[t]).forEach(l => {
            l(...r)
        }
        ),
        this.observers["*"] && [].concat(this.observers["*"]).forEach(l => {
            l.apply(l, [t, ...r])
        }
        )
    }
}
function Er() {
    let e, t;
    const n = new Promise( (r, i) => {
        e = r,
        t = i
    }
    );
    return n.resolve = e,
    n.reject = t,
    n
}
function Lc(e) {
    return e == null ? "" : "" + e
}
function _v(e, t, n) {
    e.forEach(r => {
        t[r] && (n[r] = t[r])
    }
    )
}
function Fs(e, t, n) {
    function r(l) {
        return l && l.indexOf("###") > -1 ? l.replace(/###/g, ".") : l
    }
    function i() {
        return !e || typeof e == "string"
    }
    const o = typeof t != "string" ? [].concat(t) : t.split(".");
    for (; o.length > 1; ) {
        if (i())
            return {};
        const l = r(o.shift());
        !e[l] && n && (e[l] = new n),
        Object.prototype.hasOwnProperty.call(e, l) ? e = e[l] : e = {}
    }
    return i() ? {} : {
        obj: e,
        k: r(o.shift())
    }
}
function Ic(e, t, n) {
    const {obj: r, k: i} = Fs(e, t, Object);
    r[i] = n
}
function bv(e, t, n, r) {
    const {obj: i, k: o} = Fs(e, t, Object);
    i[o] = i[o] || [],
    r && (i[o] = i[o].concat(n)),
    r || i[o].push(n)
}
function Ro(e, t) {
    const {obj: n, k: r} = Fs(e, t);
    if (n)
        return n[r]
}
function Kv(e, t, n) {
    const r = Ro(e, n);
    return r !== void 0 ? r : Ro(t, n)
}
function Pp(e, t, n) {
    for (const r in t)
        r !== "__proto__" && r !== "constructor" && (r in e ? typeof e[r] == "string" || e[r]instanceof String || typeof t[r] == "string" || t[r]instanceof String ? n && (e[r] = t[r]) : Pp(e[r], t[r], n) : e[r] = t[r]);
    return e
}
function Rn(e) {
    return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
}
var Vv = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;"
};
function Hv(e) {
    return typeof e == "string" ? e.replace(/[&<>"'\/]/g, t => Vv[t]) : e
}
const Jv = [" ", ",", "?", "!", ";"];
function Wv(e, t, n) {
    t = t || "",
    n = n || "";
    const r = Jv.filter(l => t.indexOf(l) < 0 && n.indexOf(l) < 0);
    if (r.length === 0)
        return !0;
    const i = new RegExp(`(${r.map(l => l === "?" ? "\\?" : l).join("|")})`);
    let o = !i.test(e);
    if (!o) {
        const l = e.indexOf(n);
        l > 0 && !i.test(e.substring(0, l)) && (o = !0)
    }
    return o
}
function No(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
    if (!e)
        return;
    if (e[t])
        return e[t];
    const r = t.split(n);
    let i = e;
    for (let o = 0; o < r.length; ++o) {
        if (!i || typeof i[r[o]] == "string" && o + 1 < r.length)
            return;
        if (i[r[o]] === void 0) {
            let l = 2
              , a = r.slice(o, o + l).join(n)
              , s = i[a];
            for (; s === void 0 && r.length > o + l; )
                l++,
                a = r.slice(o, o + l).join(n),
                s = i[a];
            if (s === void 0)
                return;
            if (s === null)
                return null;
            if (t.endsWith(a)) {
                if (typeof s == "string")
                    return s;
                if (a && typeof s[a] == "string")
                    return s[a]
            }
            const u = r.slice(o + l).join(n);
            return u ? No(s, u, n) : void 0
        }
        i = i[r[o]]
    }
    return i
}
function Po(e) {
    return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e
}
class Oc extends Go {
    constructor(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            ns: ["translation"],
            defaultNS: "translation"
        };
        super(),
        this.data = t || {},
        this.options = n,
        this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
        this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0)
    }
    addNamespaces(t) {
        this.options.ns.indexOf(t) < 0 && this.options.ns.push(t)
    }
    removeNamespaces(t) {
        const n = this.options.ns.indexOf(t);
        n > -1 && this.options.ns.splice(n, 1)
    }
    getResource(t, n, r) {
        let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        const o = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator
          , l = i.ignoreJSONStructure !== void 0 ? i.ignoreJSONStructure : this.options.ignoreJSONStructure;
        let a = [t, n];
        r && typeof r != "string" && (a = a.concat(r)),
        r && typeof r == "string" && (a = a.concat(o ? r.split(o) : r)),
        t.indexOf(".") > -1 && (a = t.split("."));
        const s = Ro(this.data, a);
        return s || !l || typeof r != "string" ? s : No(this.data && this.data[t] && this.data[t][n], r, o)
    }
    addResource(t, n, r, i) {
        let o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
            silent: !1
        };
        const l = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
        let a = [t, n];
        r && (a = a.concat(l ? r.split(l) : r)),
        t.indexOf(".") > -1 && (a = t.split("."),
        i = n,
        n = a[1]),
        this.addNamespaces(n),
        Ic(this.data, a, i),
        o.silent || this.emit("added", t, n, r, i)
    }
    addResources(t, n, r) {
        let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
            silent: !1
        };
        for (const o in r)
            (typeof r[o] == "string" || Object.prototype.toString.apply(r[o]) === "[object Array]") && this.addResource(t, n, o, r[o], {
                silent: !0
            });
        i.silent || this.emit("added", t, n, r)
    }
    addResourceBundle(t, n, r, i, o) {
        let l = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
            silent: !1
        }
          , a = [t, n];
        t.indexOf(".") > -1 && (a = t.split("."),
        i = r,
        r = n,
        n = a[1]),
        this.addNamespaces(n);
        let s = Ro(this.data, a) || {};
        i ? Pp(s, r, o) : s = {
            ...s,
            ...r
        },
        Ic(this.data, a, s),
        l.silent || this.emit("added", t, n, r)
    }
    removeResourceBundle(t, n) {
        this.hasResourceBundle(t, n) && delete this.data[t][n],
        this.removeNamespaces(n),
        this.emit("removed", t, n)
    }
    hasResourceBundle(t, n) {
        return this.getResource(t, n) !== void 0
    }
    getResourceBundle(t, n) {
        return n || (n = this.options.defaultNS),
        this.options.compatibilityAPI === "v1" ? {
            ...this.getResource(t, n)
        } : this.getResource(t, n)
    }
    getDataByLanguage(t) {
        return this.data[t]
    }
    hasLanguageSomeTranslations(t) {
        const n = this.getDataByLanguage(t);
        return !!(n && Object.keys(n) || []).find(i => n[i] && Object.keys(n[i]).length > 0)
    }
    toJSON() {
        return this.data
    }
}
var Lp = {
    processors: {},
    addPostProcessor(e) {
        this.processors[e.name] = e
    },
    handle(e, t, n, r, i) {
        return e.forEach(o => {
            this.processors[o] && (t = this.processors[o].process(t, n, r, i))
        }
        ),
        t
    }
};
const jc = {};
class Lo extends Go {
    constructor(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        super(),
        _v(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this),
        this.options = n,
        this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
        this.logger = At.create("translator")
    }
    changeLanguage(t) {
        t && (this.language = t)
    }
    exists(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            interpolation: {}
        };
        if (t == null)
            return !1;
        const r = this.resolve(t, n);
        return r && r.res !== void 0
    }
    extractFromKey(t, n) {
        let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
        r === void 0 && (r = ":");
        const i = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
        let o = n.ns || this.options.defaultNS || [];
        const l = r && t.indexOf(r) > -1
          , a = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !Wv(t, r, i);
        if (l && !a) {
            const s = t.match(this.interpolator.nestingRegexp);
            if (s && s.length > 0)
                return {
                    key: t,
                    namespaces: o
                };
            const u = t.split(r);
            (r !== i || r === i && this.options.ns.indexOf(u[0]) > -1) && (o = u.shift()),
            t = u.join(i)
        }
        return typeof o == "string" && (o = [o]),
        {
            key: t,
            namespaces: o
        }
    }
    translate(t, n, r) {
        if (typeof n != "object" && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)),
        typeof n == "object" && (n = {
            ...n
        }),
        n || (n = {}),
        t == null)
            return "";
        Array.isArray(t) || (t = [String(t)]);
        const i = n.returnDetails !== void 0 ? n.returnDetails : this.options.returnDetails
          , o = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator
          , {key: l, namespaces: a} = this.extractFromKey(t[t.length - 1], n)
          , s = a[a.length - 1]
          , u = n.lng || this.language
          , f = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
        if (u && u.toLowerCase() === "cimode") {
            if (f) {
                const d = n.nsSeparator || this.options.nsSeparator;
                return i ? {
                    res: `${s}${d}${l}`,
                    usedKey: l,
                    exactUsedKey: l,
                    usedLng: u,
                    usedNS: s
                } : `${s}${d}${l}`
            }
            return i ? {
                res: l,
                usedKey: l,
                exactUsedKey: l,
                usedLng: u,
                usedNS: s
            } : l
        }
        const p = this.resolve(t, n);
        let c = p && p.res;
        const v = p && p.usedKey || l
          , A = p && p.exactUsedKey || l
          , y = Object.prototype.toString.apply(c)
          , R = ["[object Number]", "[object Function]", "[object RegExp]"]
          , g = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays
          , h = !this.i18nFormat || this.i18nFormat.handleAsObject;
        if (h && c && (typeof c != "string" && typeof c != "boolean" && typeof c != "number") && R.indexOf(y) < 0 && !(typeof g == "string" && y === "[object Array]")) {
            if (!n.returnObjects && !this.options.returnObjects) {
                this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                const d = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(v, c, {
                    ...n,
                    ns: a
                }) : `key '${l} (${this.language})' returned an object instead of string.`;
                return i ? (p.res = d,
                p) : d
            }
            if (o) {
                const d = y === "[object Array]"
                  , E = d ? [] : {}
                  , N = d ? A : v;
                for (const C in c)
                    if (Object.prototype.hasOwnProperty.call(c, C)) {
                        const I = `${N}${o}${C}`;
                        E[C] = this.translate(I, {
                            ...n,
                            joinArrays: !1,
                            ns: a
                        }),
                        E[C] === I && (E[C] = c[C])
                    }
                c = E
            }
        } else if (h && typeof g == "string" && y === "[object Array]")
            c = c.join(g),
            c && (c = this.extendTranslation(c, t, n, r));
        else {
            let d = !1
              , E = !1;
            const N = n.count !== void 0 && typeof n.count != "string"
              , C = Lo.hasDefaultValue(n)
              , I = N ? this.pluralResolver.getSuffix(u, n.count, n) : ""
              , b = n.ordinal && N ? this.pluralResolver.getSuffix(u, n.count, {
                ordinal: !1
            }) : ""
              , T = n[`defaultValue${I}`] || n[`defaultValue${b}`] || n.defaultValue;
            !this.isValidLookup(c) && C && (d = !0,
            c = T),
            this.isValidLookup(c) || (E = !0,
            c = l);
            const W = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && E ? void 0 : c
              , Ne = C && T !== c && this.options.updateMissing;
            if (E || d || Ne) {
                if (this.logger.log(Ne ? "updateKey" : "missingKey", u, s, l, Ne ? T : c),
                o) {
                    const te = this.resolve(l, {
                        ...n,
                        keySeparator: !1
                    });
                    te && te.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                }
                let Me = [];
                const Ve = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
                if (this.options.saveMissingTo === "fallback" && Ve && Ve[0])
                    for (let te = 0; te < Ve.length; te++)
                        Me.push(Ve[te]);
                else
                    this.options.saveMissingTo === "all" ? Me = this.languageUtils.toResolveHierarchy(n.lng || this.language) : Me.push(n.lng || this.language);
                const Pe = (te, L, F) => {
                    const M = C && F !== c ? F : W;
                    this.options.missingKeyHandler ? this.options.missingKeyHandler(te, s, L, M, Ne, n) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(te, s, L, M, Ne, n),
                    this.emit("missingKey", te, s, L, c)
                }
                ;
                this.options.saveMissing && (this.options.saveMissingPlurals && N ? Me.forEach(te => {
                    this.pluralResolver.getSuffixes(te, n).forEach(L => {
                        Pe([te], l + L, n[`defaultValue${L}`] || T)
                    }
                    )
                }
                ) : Pe(Me, l, T))
            }
            c = this.extendTranslation(c, t, n, p, r),
            E && c === l && this.options.appendNamespaceToMissingKey && (c = `${s}:${l}`),
            (E || d) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? c = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${s}:${l}` : l, d ? c : void 0) : c = this.options.parseMissingKeyHandler(c))
        }
        return i ? (p.res = c,
        p) : c
    }
    extendTranslation(t, n, r, i, o) {
        var l = this;
        if (this.i18nFormat && this.i18nFormat.parse)
            t = this.i18nFormat.parse(t, {
                ...this.options.interpolation.defaultVariables,
                ...r
            }, r.lng || this.language || i.usedLng, i.usedNS, i.usedKey, {
                resolved: i
            });
        else if (!r.skipInterpolation) {
            r.interpolation && this.interpolator.init({
                ...r,
                interpolation: {
                    ...this.options.interpolation,
                    ...r.interpolation
                }
            });
            const u = typeof t == "string" && (r && r.interpolation && r.interpolation.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
            let f;
            if (u) {
                const c = t.match(this.interpolator.nestingRegexp);
                f = c && c.length
            }
            let p = r.replace && typeof r.replace != "string" ? r.replace : r;
            if (this.options.interpolation.defaultVariables && (p = {
                ...this.options.interpolation.defaultVariables,
                ...p
            }),
            t = this.interpolator.interpolate(t, p, r.lng || this.language, r),
            u) {
                const c = t.match(this.interpolator.nestingRegexp)
                  , v = c && c.length;
                f < v && (r.nest = !1)
            }
            !r.lng && this.options.compatibilityAPI !== "v1" && i && i.res && (r.lng = i.usedLng),
            r.nest !== !1 && (t = this.interpolator.nest(t, function() {
                for (var c = arguments.length, v = new Array(c), A = 0; A < c; A++)
                    v[A] = arguments[A];
                return o && o[0] === v[0] && !r.context ? (l.logger.warn(`It seems you are nesting recursively key: ${v[0]} in key: ${n[0]}`),
                null) : l.translate(...v, n)
            }, r)),
            r.interpolation && this.interpolator.reset()
        }
        const a = r.postProcess || this.options.postProcess
          , s = typeof a == "string" ? [a] : a;
        return t != null && s && s.length && r.applyPostProcessor !== !1 && (t = Lp.handle(s, t, n, this.options && this.options.postProcessPassResolved ? {
            i18nResolved: i,
            ...r
        } : r, this)),
        t
    }
    resolve(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, i, o, l, a;
        return typeof t == "string" && (t = [t]),
        t.forEach(s => {
            if (this.isValidLookup(r))
                return;
            const u = this.extractFromKey(s, n)
              , f = u.key;
            i = f;
            let p = u.namespaces;
            this.options.fallbackNS && (p = p.concat(this.options.fallbackNS));
            const c = n.count !== void 0 && typeof n.count != "string"
              , v = c && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi()
              , A = n.context !== void 0 && (typeof n.context == "string" || typeof n.context == "number") && n.context !== ""
              , y = n.lngs ? n.lngs : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng);
            p.forEach(R => {
                this.isValidLookup(r) || (a = R,
                !jc[`${y[0]}-${R}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(a) && (jc[`${y[0]}-${R}`] = !0,
                this.logger.warn(`key "${i}" for languages "${y.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),
                y.forEach(g => {
                    if (this.isValidLookup(r))
                        return;
                    l = g;
                    const h = [f];
                    if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                        this.i18nFormat.addLookupKeys(h, f, g, R, n);
                    else {
                        let d;
                        c && (d = this.pluralResolver.getSuffix(g, n.count, n));
                        const E = `${this.options.pluralSeparator}zero`
                          , N = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                        if (c && (h.push(f + d),
                        n.ordinal && d.indexOf(N) === 0 && h.push(f + d.replace(N, this.options.pluralSeparator)),
                        v && h.push(f + E)),
                        A) {
                            const C = `${f}${this.options.contextSeparator}${n.context}`;
                            h.push(C),
                            c && (h.push(C + d),
                            n.ordinal && d.indexOf(N) === 0 && h.push(C + d.replace(N, this.options.pluralSeparator)),
                            v && h.push(C + E))
                        }
                    }
                    let m;
                    for (; m = h.pop(); )
                        this.isValidLookup(r) || (o = m,
                        r = this.getResource(g, R, m, n))
                }
                ))
            }
            )
        }
        ),
        {
            res: r,
            usedKey: i,
            exactUsedKey: o,
            usedLng: l,
            usedNS: a
        }
    }
    isValidLookup(t) {
        return t !== void 0 && !(!this.options.returnNull && t === null) && !(!this.options.returnEmptyString && t === "")
    }
    getResource(t, n, r) {
        let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(t, n, r, i) : this.resourceStore.getResource(t, n, r, i)
    }
    static hasDefaultValue(t) {
        const n = "defaultValue";
        for (const r in t)
            if (Object.prototype.hasOwnProperty.call(t, r) && n === r.substring(0, n.length) && t[r] !== void 0)
                return !0;
        return !1
    }
}
function Tl(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}
class Dc {
    constructor(t) {
        this.options = t,
        this.supportedLngs = this.options.supportedLngs || !1,
        this.logger = At.create("languageUtils")
    }
    getScriptPartFromCode(t) {
        if (t = Po(t),
        !t || t.indexOf("-") < 0)
            return null;
        const n = t.split("-");
        return n.length === 2 || (n.pop(),
        n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"))
    }
    getLanguagePartFromCode(t) {
        if (t = Po(t),
        !t || t.indexOf("-") < 0)
            return t;
        const n = t.split("-");
        return this.formatLanguageCode(n[0])
    }
    formatLanguageCode(t) {
        if (typeof t == "string" && t.indexOf("-") > -1) {
            const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
            let r = t.split("-");
            return this.options.lowerCaseLng ? r = r.map(i => i.toLowerCase()) : r.length === 2 ? (r[0] = r[0].toLowerCase(),
            r[1] = r[1].toUpperCase(),
            n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = Tl(r[1].toLowerCase()))) : r.length === 3 && (r[0] = r[0].toLowerCase(),
            r[1].length === 2 && (r[1] = r[1].toUpperCase()),
            r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()),
            n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = Tl(r[1].toLowerCase())),
            n.indexOf(r[2].toLowerCase()) > -1 && (r[2] = Tl(r[2].toLowerCase()))),
            r.join("-")
        }
        return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t
    }
    isSupportedCode(t) {
        return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)),
        !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1
    }
    getBestMatchFromCodes(t) {
        if (!t)
            return null;
        let n;
        return t.forEach(r => {
            if (n)
                return;
            const i = this.formatLanguageCode(r);
            (!this.options.supportedLngs || this.isSupportedCode(i)) && (n = i)
        }
        ),
        !n && this.options.supportedLngs && t.forEach(r => {
            if (n)
                return;
            const i = this.getLanguagePartFromCode(r);
            if (this.isSupportedCode(i))
                return n = i;
            n = this.options.supportedLngs.find(o => {
                if (o === i)
                    return o;
                if (!(o.indexOf("-") < 0 && i.indexOf("-") < 0) && o.indexOf(i) === 0)
                    return o
            }
            )
        }
        ),
        n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]),
        n
    }
    getFallbackCodes(t, n) {
        if (!t)
            return [];
        if (typeof t == "function" && (t = t(n)),
        typeof t == "string" && (t = [t]),
        Object.prototype.toString.apply(t) === "[object Array]")
            return t;
        if (!n)
            return t.default || [];
        let r = t[n];
        return r || (r = t[this.getScriptPartFromCode(n)]),
        r || (r = t[this.formatLanguageCode(n)]),
        r || (r = t[this.getLanguagePartFromCode(n)]),
        r || (r = t.default),
        r || []
    }
    toResolveHierarchy(t, n) {
        const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t)
          , i = []
          , o = l => {
            l && (this.isSupportedCode(l) ? i.push(l) : this.logger.warn(`rejecting language code not found in supportedLngs: ${l}`))
        }
        ;
        return typeof t == "string" && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && o(this.formatLanguageCode(t)),
        this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && o(this.getScriptPartFromCode(t)),
        this.options.load !== "currentOnly" && o(this.getLanguagePartFromCode(t))) : typeof t == "string" && o(this.formatLanguageCode(t)),
        r.forEach(l => {
            i.indexOf(l) < 0 && o(this.formatLanguageCode(l))
        }
        ),
        i
    }
}
let Yv = [{
    lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
    nr: [1, 2],
    fc: 1
}, {
    lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
    nr: [1, 2],
    fc: 2
}, {
    lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
    nr: [1],
    fc: 3
}, {
    lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
    nr: [1, 2, 5],
    fc: 4
}, {
    lngs: ["ar"],
    nr: [0, 1, 2, 3, 11, 100],
    fc: 5
}, {
    lngs: ["cs", "sk"],
    nr: [1, 2, 5],
    fc: 6
}, {
    lngs: ["csb", "pl"],
    nr: [1, 2, 5],
    fc: 7
}, {
    lngs: ["cy"],
    nr: [1, 2, 3, 8],
    fc: 8
}, {
    lngs: ["fr"],
    nr: [1, 2],
    fc: 9
}, {
    lngs: ["ga"],
    nr: [1, 2, 3, 7, 11],
    fc: 10
}, {
    lngs: ["gd"],
    nr: [1, 2, 3, 20],
    fc: 11
}, {
    lngs: ["is"],
    nr: [1, 2],
    fc: 12
}, {
    lngs: ["jv"],
    nr: [0, 1],
    fc: 13
}, {
    lngs: ["kw"],
    nr: [1, 2, 3, 4],
    fc: 14
}, {
    lngs: ["lt"],
    nr: [1, 2, 10],
    fc: 15
}, {
    lngs: ["lv"],
    nr: [1, 2, 0],
    fc: 16
}, {
    lngs: ["mk"],
    nr: [1, 2],
    fc: 17
}, {
    lngs: ["mnk"],
    nr: [0, 1, 2],
    fc: 18
}, {
    lngs: ["mt"],
    nr: [1, 2, 11, 20],
    fc: 19
}, {
    lngs: ["or"],
    nr: [2, 1],
    fc: 2
}, {
    lngs: ["ro"],
    nr: [1, 2, 20],
    fc: 20
}, {
    lngs: ["sl"],
    nr: [5, 1, 2, 3],
    fc: 21
}, {
    lngs: ["he", "iw"],
    nr: [1, 2, 20, 21],
    fc: 22
}]
  , Xv = {
    1: function(e) {
        return +(e > 1)
    },
    2: function(e) {
        return +(e != 1)
    },
    3: function(e) {
        return 0
    },
    4: function(e) {
        return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
    },
    5: function(e) {
        return e == 0 ? 0 : e == 1 ? 1 : e == 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
    },
    6: function(e) {
        return e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2
    },
    7: function(e) {
        return e == 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
    },
    8: function(e) {
        return e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3
    },
    9: function(e) {
        return +(e >= 2)
    },
    10: function(e) {
        return e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4
    },
    11: function(e) {
        return e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3
    },
    12: function(e) {
        return +(e % 10 != 1 || e % 100 == 11)
    },
    13: function(e) {
        return +(e !== 0)
    },
    14: function(e) {
        return e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3
    },
    15: function(e) {
        return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
    },
    16: function(e) {
        return e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2
    },
    17: function(e) {
        return e == 1 || e % 10 == 1 && e % 100 != 11 ? 0 : 1
    },
    18: function(e) {
        return e == 0 ? 0 : e == 1 ? 1 : 2
    },
    19: function(e) {
        return e == 1 ? 0 : e == 0 || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3
    },
    20: function(e) {
        return e == 1 ? 0 : e == 0 || e % 100 > 0 && e % 100 < 20 ? 1 : 2
    },
    21: function(e) {
        return e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0
    },
    22: function(e) {
        return e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3
    }
};
const Gv = ["v1", "v2", "v3"]
  , $v = ["v4"]
  , Bc = {
    zero: 0,
    one: 1,
    two: 2,
    few: 3,
    many: 4,
    other: 5
};
function Zv() {
    const e = {};
    return Yv.forEach(t => {
        t.lngs.forEach(n => {
            e[n] = {
                numbers: t.nr,
                plurals: Xv[t.fc]
            }
        }
        )
    }
    ),
    e
}
class qv {
    constructor(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.languageUtils = t,
        this.options = n,
        this.logger = At.create("pluralResolver"),
        (!this.options.compatibilityJSON || $v.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3",
        this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),
        this.rules = Zv()
    }
    addRule(t, n) {
        this.rules[t] = n
    }
    getRule(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (this.shouldUseIntlApi())
            try {
                return new Intl.PluralRules(Po(t),{
                    type: n.ordinal ? "ordinal" : "cardinal"
                })
            } catch {
                return
            }
        return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)]
    }
    needsPlural(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const r = this.getRule(t, n);
        return this.shouldUseIntlApi() ? r && r.resolvedOptions().pluralCategories.length > 1 : r && r.numbers.length > 1
    }
    getPluralFormsOfKey(t, n) {
        let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return this.getSuffixes(t, r).map(i => `${n}${i}`)
    }
    getSuffixes(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const r = this.getRule(t, n);
        return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort( (i, o) => Bc[i] - Bc[o]).map(i => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${i}`) : r.numbers.map(i => this.getSuffix(t, i, n)) : []
    }
    getSuffix(t, n) {
        let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        const i = this.getRule(t, r);
        return i ? this.shouldUseIntlApi() ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${i.select(n)}` : this.getSuffixRetroCompatible(i, n) : (this.logger.warn(`no plural rule found for: ${t}`),
        "")
    }
    getSuffixRetroCompatible(t, n) {
        const r = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n));
        let i = t.numbers[r];
        this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 && (i === 2 ? i = "plural" : i === 1 && (i = ""));
        const o = () => this.options.prepend && i.toString() ? this.options.prepend + i.toString() : i.toString();
        return this.options.compatibilityJSON === "v1" ? i === 1 ? "" : typeof i == "number" ? `_plural_${i.toString()}` : o() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 ? o() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString()
    }
    shouldUseIntlApi() {
        return !Gv.includes(this.options.compatibilityJSON)
    }
}
function Tc(e, t, n) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "."
      , i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0
      , o = Kv(e, t, n);
    return !o && i && typeof n == "string" && (o = No(e, n, r),
    o === void 0 && (o = No(t, n, r))),
    o
}
class ey {
    constructor() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        this.logger = At.create("interpolator"),
        this.options = t,
        this.format = t.interpolation && t.interpolation.format || (n => n),
        this.init(t)
    }
    init() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        t.interpolation || (t.interpolation = {
            escapeValue: !0
        });
        const n = t.interpolation;
        this.escape = n.escape !== void 0 ? n.escape : Hv,
        this.escapeValue = n.escapeValue !== void 0 ? n.escapeValue : !0,
        this.useRawValueToEscape = n.useRawValueToEscape !== void 0 ? n.useRawValueToEscape : !1,
        this.prefix = n.prefix ? Rn(n.prefix) : n.prefixEscaped || "{{",
        this.suffix = n.suffix ? Rn(n.suffix) : n.suffixEscaped || "}}",
        this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ",",
        this.unescapePrefix = n.unescapeSuffix ? "" : n.unescapePrefix || "-",
        this.unescapeSuffix = this.unescapePrefix ? "" : n.unescapeSuffix || "",
        this.nestingPrefix = n.nestingPrefix ? Rn(n.nestingPrefix) : n.nestingPrefixEscaped || Rn("$t("),
        this.nestingSuffix = n.nestingSuffix ? Rn(n.nestingSuffix) : n.nestingSuffixEscaped || Rn(")"),
        this.nestingOptionsSeparator = n.nestingOptionsSeparator ? n.nestingOptionsSeparator : n.nestingOptionsSeparator || ",",
        this.maxReplaces = n.maxReplaces ? n.maxReplaces : 1e3,
        this.alwaysFormat = n.alwaysFormat !== void 0 ? n.alwaysFormat : !1,
        this.resetRegExp()
    }
    reset() {
        this.options && this.init(this.options)
    }
    resetRegExp() {
        const t = `${this.prefix}(.+?)${this.suffix}`;
        this.regexp = new RegExp(t,"g");
        const n = `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;
        this.regexpUnescape = new RegExp(n,"g");
        const r = `${this.nestingPrefix}(.+?)${this.nestingSuffix}`;
        this.nestingRegexp = new RegExp(r,"g")
    }
    interpolate(t, n, r, i) {
        let o, l, a;
        const s = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
        function u(A) {
            return A.replace(/\$/g, "$$$$")
        }
        const f = A => {
            if (A.indexOf(this.formatSeparator) < 0) {
                const h = Tc(n, s, A, this.options.keySeparator, this.options.ignoreJSONStructure);
                return this.alwaysFormat ? this.format(h, void 0, r, {
                    ...i,
                    ...n,
                    interpolationkey: A
                }) : h
            }
            const y = A.split(this.formatSeparator)
              , R = y.shift().trim()
              , g = y.join(this.formatSeparator).trim();
            return this.format(Tc(n, s, R, this.options.keySeparator, this.options.ignoreJSONStructure), g, r, {
                ...i,
                ...n,
                interpolationkey: R
            })
        }
        ;
        this.resetRegExp();
        const p = i && i.missingInterpolationHandler || this.options.missingInterpolationHandler
          , c = i && i.interpolation && i.interpolation.skipOnVariables !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
        return [{
            regex: this.regexpUnescape,
            safeValue: A => u(A)
        }, {
            regex: this.regexp,
            safeValue: A => this.escapeValue ? u(this.escape(A)) : u(A)
        }].forEach(A => {
            for (a = 0; o = A.regex.exec(t); ) {
                const y = o[1].trim();
                if (l = f(y),
                l === void 0)
                    if (typeof p == "function") {
                        const g = p(t, o, i);
                        l = typeof g == "string" ? g : ""
                    } else if (i && Object.prototype.hasOwnProperty.call(i, y))
                        l = "";
                    else if (c) {
                        l = o[0];
                        continue
                    } else
                        this.logger.warn(`missed to pass in variable ${y} for interpolating ${t}`),
                        l = "";
                else
                    typeof l != "string" && !this.useRawValueToEscape && (l = Lc(l));
                const R = A.safeValue(l);
                if (t = t.replace(o[0], R),
                c ? (A.regex.lastIndex += l.length,
                A.regex.lastIndex -= o[0].length) : A.regex.lastIndex = 0,
                a++,
                a >= this.maxReplaces)
                    break
            }
        }
        ),
        t
    }
    nest(t, n) {
        let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i, o, l;
        function a(s, u) {
            const f = this.nestingOptionsSeparator;
            if (s.indexOf(f) < 0)
                return s;
            const p = s.split(new RegExp(`${f}[ ]*{`));
            let c = `{${p[1]}`;
            s = p[0],
            c = this.interpolate(c, l);
            const v = c.match(/'/g)
              , A = c.match(/"/g);
            (v && v.length % 2 === 0 && !A || A.length % 2 !== 0) && (c = c.replace(/'/g, '"'));
            try {
                l = JSON.parse(c),
                u && (l = {
                    ...u,
                    ...l
                })
            } catch (y) {
                return this.logger.warn(`failed parsing options string in nesting for key ${s}`, y),
                `${s}${f}${c}`
            }
            return delete l.defaultValue,
            s
        }
        for (; i = this.nestingRegexp.exec(t); ) {
            let s = [];
            l = {
                ...r
            },
            l = l.replace && typeof l.replace != "string" ? l.replace : l,
            l.applyPostProcessor = !1,
            delete l.defaultValue;
            let u = !1;
            if (i[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(i[1])) {
                const f = i[1].split(this.formatSeparator).map(p => p.trim());
                i[1] = f.shift(),
                s = f,
                u = !0
            }
            if (o = n(a.call(this, i[1].trim(), l), l),
            o && i[0] === t && typeof o != "string")
                return o;
            typeof o != "string" && (o = Lc(o)),
            o || (this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`),
            o = ""),
            u && (o = s.reduce( (f, p) => this.format(f, p, r.lng, {
                ...r,
                interpolationkey: i[1].trim()
            }), o.trim())),
            t = t.replace(i[0], o),
            this.regexp.lastIndex = 0
        }
        return t
    }
}
function ty(e) {
    let t = e.toLowerCase().trim();
    const n = {};
    if (e.indexOf("(") > -1) {
        const r = e.split("(");
        t = r[0].toLowerCase().trim();
        const i = r[1].substring(0, r[1].length - 1);
        t === "currency" && i.indexOf(":") < 0 ? n.currency || (n.currency = i.trim()) : t === "relativetime" && i.indexOf(":") < 0 ? n.range || (n.range = i.trim()) : i.split(";").forEach(l => {
            if (!l)
                return;
            const [a,...s] = l.split(":")
              , u = s.join(":").trim().replace(/^'+|'+$/g, "");
            n[a.trim()] || (n[a.trim()] = u),
            u === "false" && (n[a.trim()] = !1),
            u === "true" && (n[a.trim()] = !0),
            isNaN(u) || (n[a.trim()] = parseInt(u, 10))
        }
        )
    }
    return {
        formatName: t,
        formatOptions: n
    }
}
function Nn(e) {
    const t = {};
    return function(r, i, o) {
        const l = i + JSON.stringify(o);
        let a = t[l];
        return a || (a = e(Po(i), o),
        t[l] = a),
        a(r)
    }
}
class ny {
    constructor() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        this.logger = At.create("formatter"),
        this.options = t,
        this.formats = {
            number: Nn( (n, r) => {
                const i = new Intl.NumberFormat(n,{
                    ...r
                });
                return o => i.format(o)
            }
            ),
            currency: Nn( (n, r) => {
                const i = new Intl.NumberFormat(n,{
                    ...r,
                    style: "currency"
                });
                return o => i.format(o)
            }
            ),
            datetime: Nn( (n, r) => {
                const i = new Intl.DateTimeFormat(n,{
                    ...r
                });
                return o => i.format(o)
            }
            ),
            relativetime: Nn( (n, r) => {
                const i = new Intl.RelativeTimeFormat(n,{
                    ...r
                });
                return o => i.format(o, r.range || "day")
            }
            ),
            list: Nn( (n, r) => {
                const i = new Intl.ListFormat(n,{
                    ...r
                });
                return o => i.format(o)
            }
            )
        },
        this.init(t)
    }
    init(t) {
        const r = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            interpolation: {}
        }).interpolation;
        this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || ","
    }
    add(t, n) {
        this.formats[t.toLowerCase().trim()] = n
    }
    addCached(t, n) {
        this.formats[t.toLowerCase().trim()] = Nn(n)
    }
    format(t, n, r) {
        let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        return n.split(this.formatSeparator).reduce( (a, s) => {
            const {formatName: u, formatOptions: f} = ty(s);
            if (this.formats[u]) {
                let p = a;
                try {
                    const c = i && i.formatParams && i.formatParams[i.interpolationkey] || {}
                      , v = c.locale || c.lng || i.locale || i.lng || r;
                    p = this.formats[u](a, v, {
                        ...f,
                        ...i,
                        ...c
                    })
                } catch (c) {
                    this.logger.warn(c)
                }
                return p
            } else
                this.logger.warn(`there was no format function for ${u}`);
            return a
        }
        , t)
    }
}
function ry(e, t) {
    e.pending[t] !== void 0 && (delete e.pending[t],
    e.pendingCount--)
}
class iy extends Go {
    constructor(t, n, r) {
        let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        super(),
        this.backend = t,
        this.store = n,
        this.services = r,
        this.languageUtils = r.languageUtils,
        this.options = i,
        this.logger = At.create("backendConnector"),
        this.waitingReads = [],
        this.maxParallelReads = i.maxParallelReads || 10,
        this.readingCalls = 0,
        this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5,
        this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350,
        this.state = {},
        this.queue = [],
        this.backend && this.backend.init && this.backend.init(r, i.backend, i)
    }
    queueLoad(t, n, r, i) {
        const o = {}
          , l = {}
          , a = {}
          , s = {};
        return t.forEach(u => {
            let f = !0;
            n.forEach(p => {
                const c = `${u}|${p}`;
                !r.reload && this.store.hasResourceBundle(u, p) ? this.state[c] = 2 : this.state[c] < 0 || (this.state[c] === 1 ? l[c] === void 0 && (l[c] = !0) : (this.state[c] = 1,
                f = !1,
                l[c] === void 0 && (l[c] = !0),
                o[c] === void 0 && (o[c] = !0),
                s[p] === void 0 && (s[p] = !0)))
            }
            ),
            f || (a[u] = !0)
        }
        ),
        (Object.keys(o).length || Object.keys(l).length) && this.queue.push({
            pending: l,
            pendingCount: Object.keys(l).length,
            loaded: {},
            errors: [],
            callback: i
        }),
        {
            toLoad: Object.keys(o),
            pending: Object.keys(l),
            toLoadLanguages: Object.keys(a),
            toLoadNamespaces: Object.keys(s)
        }
    }
    loaded(t, n, r) {
        const i = t.split("|")
          , o = i[0]
          , l = i[1];
        n && this.emit("failedLoading", o, l, n),
        r && this.store.addResourceBundle(o, l, r),
        this.state[t] = n ? -1 : 2;
        const a = {};
        this.queue.forEach(s => {
            bv(s.loaded, [o], l),
            ry(s, t),
            n && s.errors.push(n),
            s.pendingCount === 0 && !s.done && (Object.keys(s.loaded).forEach(u => {
                a[u] || (a[u] = {});
                const f = s.loaded[u];
                f.length && f.forEach(p => {
                    a[u][p] === void 0 && (a[u][p] = !0)
                }
                )
            }
            ),
            s.done = !0,
            s.errors.length ? s.callback(s.errors) : s.callback())
        }
        ),
        this.emit("loaded", a),
        this.queue = this.queue.filter(s => !s.done)
    }
    read(t, n, r) {
        let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0
          , o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout
          , l = arguments.length > 5 ? arguments[5] : void 0;
        if (!t.length)
            return l(null, {});
        if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
                lng: t,
                ns: n,
                fcName: r,
                tried: i,
                wait: o,
                callback: l
            });
            return
        }
        this.readingCalls++;
        const a = (u, f) => {
            if (this.readingCalls--,
            this.waitingReads.length > 0) {
                const p = this.waitingReads.shift();
                this.read(p.lng, p.ns, p.fcName, p.tried, p.wait, p.callback)
            }
            if (u && f && i < this.maxRetries) {
                setTimeout( () => {
                    this.read.call(this, t, n, r, i + 1, o * 2, l)
                }
                , o);
                return
            }
            l(u, f)
        }
          , s = this.backend[r].bind(this.backend);
        if (s.length === 2) {
            try {
                const u = s(t, n);
                u && typeof u.then == "function" ? u.then(f => a(null, f)).catch(a) : a(null, u)
            } catch (u) {
                a(u)
            }
            return
        }
        return s(t, n, a)
    }
    prepareLoading(t, n) {
        let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
          , i = arguments.length > 3 ? arguments[3] : void 0;
        if (!this.backend)
            return this.logger.warn("No backend was added via i18next.use. Will not load resources."),
            i && i();
        typeof t == "string" && (t = this.languageUtils.toResolveHierarchy(t)),
        typeof n == "string" && (n = [n]);
        const o = this.queueLoad(t, n, r, i);
        if (!o.toLoad.length)
            return o.pending.length || i(),
            null;
        o.toLoad.forEach(l => {
            this.loadOne(l)
        }
        )
    }
    load(t, n, r) {
        this.prepareLoading(t, n, {}, r)
    }
    reload(t, n, r) {
        this.prepareLoading(t, n, {
            reload: !0
        }, r)
    }
    loadOne(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        const r = t.split("|")
          , i = r[0]
          , o = r[1];
        this.read(i, o, "read", void 0, void 0, (l, a) => {
            l && this.logger.warn(`${n}loading namespace ${o} for language ${i} failed`, l),
            !l && a && this.logger.log(`${n}loaded namespace ${o} for language ${i}`, a),
            this.loaded(t, l, a)
        }
        )
    }
    saveMissing(t, n, r, i, o) {
        let l = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}
          , a = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {}
        ;
        if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(n)) {
            this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
            return
        }
        if (!(r == null || r === "")) {
            if (this.backend && this.backend.create) {
                const s = {
                    ...l,
                    isUpdate: o
                }
                  , u = this.backend.create.bind(this.backend);
                if (u.length < 6)
                    try {
                        let f;
                        u.length === 5 ? f = u(t, n, r, i, s) : f = u(t, n, r, i),
                        f && typeof f.then == "function" ? f.then(p => a(null, p)).catch(a) : a(null, f)
                    } catch (f) {
                        a(f)
                    }
                else
                    u(t, n, r, i, a, s)
            }
            !t || !t[0] || this.store.addResource(t[0], n, r, i)
        }
    }
}
function Fc() {
    return {
        debug: !1,
        initImmediate: !0,
        ns: ["translation"],
        defaultNS: ["translation"],
        fallbackLng: ["dev"],
        fallbackNS: !1,
        supportedLngs: !1,
        nonExplicitSupportedLngs: !1,
        load: "all",
        preload: !1,
        simplifyPluralSuffix: !0,
        keySeparator: ".",
        nsSeparator: ":",
        pluralSeparator: "_",
        contextSeparator: "_",
        partialBundledLanguages: !1,
        saveMissing: !1,
        updateMissing: !1,
        saveMissingTo: "fallback",
        saveMissingPlurals: !0,
        missingKeyHandler: !1,
        missingInterpolationHandler: !1,
        postProcess: !1,
        postProcessPassResolved: !1,
        returnNull: !1,
        returnEmptyString: !0,
        returnObjects: !1,
        joinArrays: !1,
        returnedObjectHandler: !1,
        parseMissingKeyHandler: !1,
        appendNamespaceToMissingKey: !1,
        appendNamespaceToCIMode: !1,
        overloadTranslationOptionHandler: function(t) {
            let n = {};
            if (typeof t[1] == "object" && (n = t[1]),
            typeof t[1] == "string" && (n.defaultValue = t[1]),
            typeof t[2] == "string" && (n.tDescription = t[2]),
            typeof t[2] == "object" || typeof t[3] == "object") {
                const r = t[3] || t[2];
                Object.keys(r).forEach(i => {
                    n[i] = r[i]
                }
                )
            }
            return n
        },
        interpolation: {
            escapeValue: !0,
            format: (e, t, n, r) => e,
            prefix: "{{",
            suffix: "}}",
            formatSeparator: ",",
            unescapePrefix: "-",
            nestingPrefix: "$t(",
            nestingSuffix: ")",
            nestingOptionsSeparator: ",",
            maxReplaces: 1e3,
            skipOnVariables: !0
        }
    }
}
function Uc(e) {
    return typeof e.ns == "string" && (e.ns = [e.ns]),
    typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]),
    typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]),
    e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
    e
}
function Mi() {}
function oy(e) {
    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(n => {
        typeof e[n] == "function" && (e[n] = e[n].bind(e))
    }
    )
}
class oi extends Go {
    constructor() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
          , n = arguments.length > 1 ? arguments[1] : void 0;
        if (super(),
        this.options = Uc(t),
        this.services = {},
        this.logger = At,
        this.modules = {
            external: []
        },
        oy(this),
        n && !this.isInitialized && !t.isClone) {
            if (!this.options.initImmediate)
                return this.init(t, n),
                this;
            setTimeout( () => {
                this.init(t, n)
            }
            , 0)
        }
    }
    init() {
        var t = this;
        let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
          , r = arguments.length > 1 ? arguments[1] : void 0;
        typeof n == "function" && (r = n,
        n = {}),
        !n.defaultNS && n.defaultNS !== !1 && n.ns && (typeof n.ns == "string" ? n.defaultNS = n.ns : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0]));
        const i = Fc();
        this.options = {
            ...i,
            ...this.options,
            ...Uc(n)
        },
        this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
            ...i.interpolation,
            ...this.options.interpolation
        }),
        n.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = n.keySeparator),
        n.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = n.nsSeparator);
        function o(f) {
            return f ? typeof f == "function" ? new f : f : null
        }
        if (!this.options.isClone) {
            this.modules.logger ? At.init(o(this.modules.logger), this.options) : At.init(null, this.options);
            let f;
            this.modules.formatter ? f = this.modules.formatter : typeof Intl < "u" && (f = ny);
            const p = new Dc(this.options);
            this.store = new Oc(this.options.resources,this.options);
            const c = this.services;
            c.logger = At,
            c.resourceStore = this.store,
            c.languageUtils = p,
            c.pluralResolver = new qv(p,{
                prepend: this.options.pluralSeparator,
                compatibilityJSON: this.options.compatibilityJSON,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix
            }),
            f && (!this.options.interpolation.format || this.options.interpolation.format === i.interpolation.format) && (c.formatter = o(f),
            c.formatter.init(c, this.options),
            this.options.interpolation.format = c.formatter.format.bind(c.formatter)),
            c.interpolator = new ey(this.options),
            c.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
            },
            c.backendConnector = new iy(o(this.modules.backend),c.resourceStore,c,this.options),
            c.backendConnector.on("*", function(v) {
                for (var A = arguments.length, y = new Array(A > 1 ? A - 1 : 0), R = 1; R < A; R++)
                    y[R - 1] = arguments[R];
                t.emit(v, ...y)
            }),
            this.modules.languageDetector && (c.languageDetector = o(this.modules.languageDetector),
            c.languageDetector.init && c.languageDetector.init(c, this.options.detection, this.options)),
            this.modules.i18nFormat && (c.i18nFormat = o(this.modules.i18nFormat),
            c.i18nFormat.init && c.i18nFormat.init(this)),
            this.translator = new Lo(this.services,this.options),
            this.translator.on("*", function(v) {
                for (var A = arguments.length, y = new Array(A > 1 ? A - 1 : 0), R = 1; R < A; R++)
                    y[R - 1] = arguments[R];
                t.emit(v, ...y)
            }),
            this.modules.external.forEach(v => {
                v.init && v.init(this)
            }
            )
        }
        if (this.format = this.options.interpolation.format,
        r || (r = Mi),
        this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
            const f = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            f.length > 0 && f[0] !== "dev" && (this.options.lng = f[0])
        }
        !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"),
        ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(f => {
            this[f] = function() {
                return t.store[f](...arguments)
            }
        }
        ),
        ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(f => {
            this[f] = function() {
                return t.store[f](...arguments),
                t
            }
        }
        );
        const s = Er()
          , u = () => {
            const f = (p, c) => {
                this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"),
                this.isInitialized = !0,
                this.options.isClone || this.logger.log("initialized", this.options),
                this.emit("initialized", this.options),
                s.resolve(c),
                r(p, c)
            }
            ;
            if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized)
                return f(null, this.t.bind(this));
            this.changeLanguage(this.options.lng, f)
        }
        ;
        return this.options.resources || !this.options.initImmediate ? u() : setTimeout(u, 0),
        s
    }
    loadResources(t) {
        let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Mi;
        const i = typeof t == "string" ? t : this.language;
        if (typeof t == "function" && (r = t),
        !this.options.resources || this.options.partialBundledLanguages) {
            if (i && i.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
                return r();
            const o = []
              , l = a => {
                if (!a || a === "cimode")
                    return;
                this.services.languageUtils.toResolveHierarchy(a).forEach(u => {
                    u !== "cimode" && o.indexOf(u) < 0 && o.push(u)
                }
                )
            }
            ;
            i ? l(i) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(s => l(s)),
            this.options.preload && this.options.preload.forEach(a => l(a)),
            this.services.backendConnector.load(o, this.options.ns, a => {
                !a && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language),
                r(a)
            }
            )
        } else
            r(null)
    }
    reloadResources(t, n, r) {
        const i = Er();
        return t || (t = this.languages),
        n || (n = this.options.ns),
        r || (r = Mi),
        this.services.backendConnector.reload(t, n, o => {
            i.resolve(),
            r(o)
        }
        ),
        i
    }
    use(t) {
        if (!t)
            throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
        if (!t.type)
            throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
        return t.type === "backend" && (this.modules.backend = t),
        (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t),
        t.type === "languageDetector" && (this.modules.languageDetector = t),
        t.type === "i18nFormat" && (this.modules.i18nFormat = t),
        t.type === "postProcessor" && Lp.addPostProcessor(t),
        t.type === "formatter" && (this.modules.formatter = t),
        t.type === "3rdParty" && this.modules.external.push(t),
        this
    }
    setResolvedLanguage(t) {
        if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1))
            for (let n = 0; n < this.languages.length; n++) {
                const r = this.languages[n];
                if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
                    this.resolvedLanguage = r;
                    break
                }
            }
    }
    changeLanguage(t, n) {
        var r = this;
        this.isLanguageChangingTo = t;
        const i = Er();
        this.emit("languageChanging", t);
        const o = s => {
            this.language = s,
            this.languages = this.services.languageUtils.toResolveHierarchy(s),
            this.resolvedLanguage = void 0,
            this.setResolvedLanguage(s)
        }
          , l = (s, u) => {
            u ? (o(u),
            this.translator.changeLanguage(u),
            this.isLanguageChangingTo = void 0,
            this.emit("languageChanged", u),
            this.logger.log("languageChanged", u)) : this.isLanguageChangingTo = void 0,
            i.resolve(function() {
                return r.t(...arguments)
            }),
            n && n(s, function() {
                return r.t(...arguments)
            })
        }
          , a = s => {
            !t && !s && this.services.languageDetector && (s = []);
            const u = typeof s == "string" ? s : this.services.languageUtils.getBestMatchFromCodes(s);
            u && (this.language || o(u),
            this.translator.language || this.translator.changeLanguage(u),
            this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(u)),
            this.loadResources(u, f => {
                l(f, u)
            }
            )
        }
        ;
        return !t && this.services.languageDetector && !this.services.languageDetector.async ? a(this.services.languageDetector.detect()) : !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(t),
        i
    }
    getFixedT(t, n, r) {
        var i = this;
        const o = function(l, a) {
            let s;
            if (typeof a != "object") {
                for (var u = arguments.length, f = new Array(u > 2 ? u - 2 : 0), p = 2; p < u; p++)
                    f[p - 2] = arguments[p];
                s = i.options.overloadTranslationOptionHandler([l, a].concat(f))
            } else
                s = {
                    ...a
                };
            s.lng = s.lng || o.lng,
            s.lngs = s.lngs || o.lngs,
            s.ns = s.ns || o.ns,
            s.keyPrefix = s.keyPrefix || r || o.keyPrefix;
            const c = i.options.keySeparator || ".";
            let v;
            return s.keyPrefix && Array.isArray(l) ? v = l.map(A => `${s.keyPrefix}${c}${A}`) : v = s.keyPrefix ? `${s.keyPrefix}${c}${l}` : l,
            i.t(v, s)
        };
        return typeof t == "string" ? o.lng = t : o.lngs = t,
        o.ns = n,
        o.keyPrefix = r,
        o
    }
    t() {
        return this.translator && this.translator.translate(...arguments)
    }
    exists() {
        return this.translator && this.translator.exists(...arguments)
    }
    setDefaultNamespace(t) {
        this.options.defaultNS = t
    }
    hasLoadedNamespace(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!this.isInitialized)
            return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages),
            !1;
        if (!this.languages || !this.languages.length)
            return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages),
            !1;
        const r = n.lng || this.resolvedLanguage || this.languages[0]
          , i = this.options ? this.options.fallbackLng : !1
          , o = this.languages[this.languages.length - 1];
        if (r.toLowerCase() === "cimode")
            return !0;
        const l = (a, s) => {
            const u = this.services.backendConnector.state[`${a}|${s}`];
            return u === -1 || u === 2
        }
        ;
        if (n.precheck) {
            const a = n.precheck(this, l);
            if (a !== void 0)
                return a
        }
        return !!(this.hasResourceBundle(r, t) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || l(r, t) && (!i || l(o, t)))
    }
    loadNamespaces(t, n) {
        const r = Er();
        return this.options.ns ? (typeof t == "string" && (t = [t]),
        t.forEach(i => {
            this.options.ns.indexOf(i) < 0 && this.options.ns.push(i)
        }
        ),
        this.loadResources(i => {
            r.resolve(),
            n && n(i)
        }
        ),
        r) : (n && n(),
        Promise.resolve())
    }
    loadLanguages(t, n) {
        const r = Er();
        typeof t == "string" && (t = [t]);
        const i = this.options.preload || []
          , o = t.filter(l => i.indexOf(l) < 0);
        return o.length ? (this.options.preload = i.concat(o),
        this.loadResources(l => {
            r.resolve(),
            n && n(l)
        }
        ),
        r) : (n && n(),
        Promise.resolve())
    }
    dir(t) {
        if (t || (t = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)),
        !t)
            return "rtl";
        const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"]
          , r = this.services && this.services.languageUtils || new Dc(Fc());
        return n.indexOf(r.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
    }
    static createInstance() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
          , n = arguments.length > 1 ? arguments[1] : void 0;
        return new oi(t,n)
    }
    cloneInstance() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
          , n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Mi;
        const r = t.forkResourceStore;
        r && delete t.forkResourceStore;
        const i = {
            ...this.options,
            ...t,
            isClone: !0
        }
          , o = new oi(i);
        return (t.debug !== void 0 || t.prefix !== void 0) && (o.logger = o.logger.clone(t)),
        ["store", "services", "language"].forEach(a => {
            o[a] = this[a]
        }
        ),
        o.services = {
            ...this.services
        },
        o.services.utils = {
            hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
        },
        r && (o.store = new Oc(this.store.data,i),
        o.services.resourceStore = o.store),
        o.translator = new Lo(o.services,i),
        o.translator.on("*", function(a) {
            for (var s = arguments.length, u = new Array(s > 1 ? s - 1 : 0), f = 1; f < s; f++)
                u[f - 1] = arguments[f];
            o.emit(a, ...u)
        }),
        o.init(i, n),
        o.translator.options = i,
        o.translator.backendConnector.services.utils = {
            hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
        },
        o
    }
    toJSON() {
        return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage
        }
    }
}
const De = oi.createInstance();
De.createInstance = oi.createInstance;
De.createInstance;
De.dir;
De.init;
De.loadResources;
De.reloadResources;
De.use;
De.changeLanguage;
De.getFixedT;
De.t;
De.exists;
De.setDefaultNamespace;
De.hasLoadedNamespace;
De.loadNamespaces;
De.loadLanguages;
var Ip = []
  , ly = Ip.forEach
  , ay = Ip.slice;
function sy(e) {
    return ly.call(ay.call(arguments, 1), function(t) {
        if (t)
            for (var n in t)
                e[n] === void 0 && (e[n] = t[n])
    }),
    e
}
var Mc = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
  , uy = function(t, n, r) {
    var i = r || {};
    i.path = i.path || "/";
    var o = encodeURIComponent(n)
      , l = "".concat(t, "=").concat(o);
    if (i.maxAge > 0) {
        var a = i.maxAge - 0;
        if (Number.isNaN(a))
            throw new Error("maxAge should be a Number");
        l += "; Max-Age=".concat(Math.floor(a))
    }
    if (i.domain) {
        if (!Mc.test(i.domain))
            throw new TypeError("option domain is invalid");
        l += "; Domain=".concat(i.domain)
    }
    if (i.path) {
        if (!Mc.test(i.path))
            throw new TypeError("option path is invalid");
        l += "; Path=".concat(i.path)
    }
    if (i.expires) {
        if (typeof i.expires.toUTCString != "function")
            throw new TypeError("option expires is invalid");
        l += "; Expires=".concat(i.expires.toUTCString())
    }
    if (i.httpOnly && (l += "; HttpOnly"),
    i.secure && (l += "; Secure"),
    i.sameSite) {
        var s = typeof i.sameSite == "string" ? i.sameSite.toLowerCase() : i.sameSite;
        switch (s) {
        case !0:
            l += "; SameSite=Strict";
            break;
        case "lax":
            l += "; SameSite=Lax";
            break;
        case "strict":
            l += "; SameSite=Strict";
            break;
        case "none":
            l += "; SameSite=None";
            break;
        default:
            throw new TypeError("option sameSite is invalid")
        }
    }
    return l
}
  , zc = {
    create: function(t, n, r, i) {
        var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
            path: "/",
            sameSite: "strict"
        };
        r && (o.expires = new Date,
        o.expires.setTime(o.expires.getTime() + r * 60 * 1e3)),
        i && (o.domain = i),
        document.cookie = uy(t, encodeURIComponent(n), o)
    },
    read: function(t) {
        for (var n = "".concat(t, "="), r = document.cookie.split(";"), i = 0; i < r.length; i++) {
            for (var o = r[i]; o.charAt(0) === " "; )
                o = o.substring(1, o.length);
            if (o.indexOf(n) === 0)
                return o.substring(n.length, o.length)
        }
        return null
    },
    remove: function(t) {
        this.create(t, "", -1)
    }
}
  , cy = {
    name: "cookie",
    lookup: function(t) {
        var n;
        if (t.lookupCookie && typeof document < "u") {
            var r = zc.read(t.lookupCookie);
            r && (n = r)
        }
        return n
    },
    cacheUserLanguage: function(t, n) {
        n.lookupCookie && typeof document < "u" && zc.create(n.lookupCookie, t, n.cookieMinutes, n.cookieDomain, n.cookieOptions)
    }
}
  , fy = {
    name: "querystring",
    lookup: function(t) {
        var n;
        if (typeof window < "u") {
            var r = window.location.search;
            !window.location.search && window.location.hash && window.location.hash.indexOf("?") > -1 && (r = window.location.hash.substring(window.location.hash.indexOf("?")));
            for (var i = r.substring(1), o = i.split("&"), l = 0; l < o.length; l++) {
                var a = o[l].indexOf("=");
                if (a > 0) {
                    var s = o[l].substring(0, a);
                    s === t.lookupQuerystring && (n = o[l].substring(a + 1))
                }
            }
        }
        return n
    }
}
  , Cr = null
  , Qc = function() {
    if (Cr !== null)
        return Cr;
    try {
        Cr = window !== "undefined" && window.localStorage !== null;
        var t = "i18next.translate.boo";
        window.localStorage.setItem(t, "foo"),
        window.localStorage.removeItem(t)
    } catch {
        Cr = !1
    }
    return Cr
}
  , dy = {
    name: "localStorage",
    lookup: function(t) {
        var n;
        if (t.lookupLocalStorage && Qc()) {
            var r = window.localStorage.getItem(t.lookupLocalStorage);
            r && (n = r)
        }
        return n
    },
    cacheUserLanguage: function(t, n) {
        n.lookupLocalStorage && Qc() && window.localStorage.setItem(n.lookupLocalStorage, t)
    }
}
  , kr = null
  , _c = function() {
    if (kr !== null)
        return kr;
    try {
        kr = window !== "undefined" && window.sessionStorage !== null;
        var t = "i18next.translate.boo";
        window.sessionStorage.setItem(t, "foo"),
        window.sessionStorage.removeItem(t)
    } catch {
        kr = !1
    }
    return kr
}
  , py = {
    name: "sessionStorage",
    lookup: function(t) {
        var n;
        if (t.lookupSessionStorage && _c()) {
            var r = window.sessionStorage.getItem(t.lookupSessionStorage);
            r && (n = r)
        }
        return n
    },
    cacheUserLanguage: function(t, n) {
        n.lookupSessionStorage && _c() && window.sessionStorage.setItem(n.lookupSessionStorage, t)
    }
}
  , hy = {
    name: "navigator",
    lookup: function(t) {
        var n = [];
        if (typeof navigator < "u") {
            if (navigator.languages)
                for (var r = 0; r < navigator.languages.length; r++)
                    n.push(navigator.languages[r]);
            navigator.userLanguage && n.push(navigator.userLanguage),
            navigator.language && n.push(navigator.language)
        }
        return n.length > 0 ? n : void 0
    }
}
  , gy = {
    name: "htmlTag",
    lookup: function(t) {
        var n, r = t.htmlTag || (typeof document < "u" ? document.documentElement : null);
        return r && typeof r.getAttribute == "function" && (n = r.getAttribute("lang")),
        n
    }
}
  , my = {
    name: "path",
    lookup: function(t) {
        var n;
        if (typeof window < "u") {
            var r = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
            if (r instanceof Array)
                if (typeof t.lookupFromPathIndex == "number") {
                    if (typeof r[t.lookupFromPathIndex] != "string")
                        return;
                    n = r[t.lookupFromPathIndex].replace("/", "")
                } else
                    n = r[0].replace("/", "")
        }
        return n
    }
}
  , Ay = {
    name: "subdomain",
    lookup: function(t) {
        var n = typeof t.lookupFromSubdomainIndex == "number" ? t.lookupFromSubdomainIndex + 1 : 1
          , r = typeof window < "u" && window.location && window.location.hostname && window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
        if (r)
            return r[n]
    }
};
function vy() {
    return {
        order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
        lookupQuerystring: "lng",
        lookupCookie: "i18next",
        lookupLocalStorage: "i18nextLng",
        lookupSessionStorage: "i18nextLng",
        caches: ["localStorage"],
        excludeCacheFor: ["cimode"],
        convertDetectedLanguage: function(t) {
            return t
        }
    }
}
var Op = function() {
    function e(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        Cp(this, e),
        this.type = "languageDetector",
        this.detectors = {},
        this.init(t, n)
    }
    return kp(e, [{
        key: "init",
        value: function(n) {
            var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
              , i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            this.services = n || {
                languageUtils: {}
            },
            this.options = sy(r, this.options || {}, vy()),
            typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = function(o) {
                return o.replace("-", "_")
            }
            ),
            this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
            this.i18nOptions = i,
            this.addDetector(cy),
            this.addDetector(fy),
            this.addDetector(dy),
            this.addDetector(py),
            this.addDetector(hy),
            this.addDetector(gy),
            this.addDetector(my),
            this.addDetector(Ay)
        }
    }, {
        key: "addDetector",
        value: function(n) {
            this.detectors[n.name] = n
        }
    }, {
        key: "detect",
        value: function(n) {
            var r = this;
            n || (n = this.options.order);
            var i = [];
            return n.forEach(function(o) {
                if (r.detectors[o]) {
                    var l = r.detectors[o].lookup(r.options);
                    l && typeof l == "string" && (l = [l]),
                    l && (i = i.concat(l))
                }
            }),
            i = i.map(function(o) {
                return r.options.convertDetectedLanguage(o)
            }),
            this.services.languageUtils.getBestMatchFromCodes ? i : i.length > 0 ? i[0] : null
        }
    }, {
        key: "cacheUserLanguage",
        value: function(n, r) {
            var i = this;
            r || (r = this.options.caches),
            r && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(n) > -1 || r.forEach(function(o) {
                i.detectors[o] && i.detectors[o].cacheUserLanguage(n, i.options)
            }))
        }
    }]),
    e
}();
Op.type = "languageDetector";
const yy = {
    homePage: "Home Page",
    g5studio: "G5 Studio",
    gameDevelopment: "Game Development",
    blockchainIntegration: "Blockchain Integration",
    advisoryService: "Advisory Service",
    gameArt: "Game Art",
    service: "Service",
    portfolio: "Portfolio",
    gameDemo: "Game Demo",
    aboutUs: "About Us",
    sologan: "Creating future"
}
  , wy = {
    introduction: "We are an insightful team of over 50 young talents and professionals, including skilled Game Designers, Artists, Blockchain Developers and Consultants experienced in Game Development and Blockchain technology. Our top outsourcing services offer clients a time and cost efficient experience."
}
  , Sy = {
    title: "Our Services",
    desc: "We provide top-notch full-stack game development services for multiple platforms ranging from mobile, web to desktop and consoles. Our team has successfully aced dozens of projects from casual title games to MOBA games with complex mechanics.",
    gameArt: {
        title: "2D/3D Game Art",
        desc: "State-of-the-art designs carried out by our team with 10+ years of tenure"
    },
    animation: {
        title: "Animation",
        desc: "Diverse animations for multiple game genres created using high-end creative tools."
    },
    uiDesign: {
        title: "UI/UX Design",
        desc: "Perfect delivery of client-centric UI/UX services which delivers great business results."
    },
    gameDesign: {
        title: "Game Design",
        desc: "Ideas and concepts are brought to life in the most logical and time-efficient manner."
    },
    gameDevelopment: {
        title: "Game Development",
        desc: "Full-stack Game Development Services for various game types like Card Games, Casino Games, Battle Royale(FPS), Minigames on major platforms such as mobile, web or PC."
    },
    blockchain: {
        title: "Blockchain Solution",
        desc: "Full blockchain integration and currency solutions for Gamefi Projects."
    }
}
  , xy = {
    title: "Our Works",
    desc: "We make everything with passion and love"
}
  , Ey = {
    common: yy,
    home: wy,
    service: Sy,
    ourWork: xy
}
  , Cy = {
    en: {
        translation: Ey
    }
};
De.use(Op).use(sv).init({
    resources: Cy,
    lng: "en",
    fallbackLng: {
        default: ["en"]
    },
    nsSeparator: !1,
    detection: {
        order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
        lookupQuerystring: "lang",
        lookupCookie: "i18n",
        lookupLocalStorage: "i18App",
        caches: ["localStorage", "cookie"]
    }
});
Fl.createRoot(document.getElementById("root")).render(x.jsx(Kn.StrictMode, {
    children: x.jsx(zv, {})
}));
