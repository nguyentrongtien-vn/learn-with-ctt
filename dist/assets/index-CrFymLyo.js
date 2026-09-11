(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function gu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Za = { exports: {} },
  pl = {},
  eo = { exports: {} },
  A = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sr = Symbol.for("react.element"),
  yu = Symbol.for("react.portal"),
  vu = Symbol.for("react.fragment"),
  wu = Symbol.for("react.strict_mode"),
  ju = Symbol.for("react.profiler"),
  Nu = Symbol.for("react.provider"),
  ku = Symbol.for("react.context"),
  bu = Symbol.for("react.forward_ref"),
  Su = Symbol.for("react.suspense"),
  Cu = Symbol.for("react.memo"),
  Tu = Symbol.for("react.lazy"),
  Ui = Symbol.iterator;
function zu(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ui && e[Ui]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var to = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  no = Object.assign,
  ro = {};
function mn(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = ro),
    (this.updater = n || to));
}
mn.prototype.isReactComponent = {};
mn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
mn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function lo() {}
lo.prototype = mn.prototype;
function qs(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = ro),
    (this.updater = n || to));
}
var Xs = (qs.prototype = new lo());
Xs.constructor = qs;
no(Xs, mn.prototype);
Xs.isPureReactComponent = !0;
var Hi = Array.isArray,
  so = Object.prototype.hasOwnProperty,
  Ys = { current: null },
  io = { key: !0, ref: !0, __self: !0, __source: !0 };
function ao(e, t, n) {
  var r,
    l = {},
    i = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      so.call(t, r) && !io.hasOwnProperty(r) && (l[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) l.children = n;
  else if (1 < o) {
    for (var c = Array(o), u = 0; u < o; u++) c[u] = arguments[u + 2];
    l.children = c;
  }
  if (e && e.defaultProps)
    for (r in ((o = e.defaultProps), o)) l[r] === void 0 && (l[r] = o[r]);
  return {
    $$typeof: sr,
    type: e,
    key: i,
    ref: a,
    props: l,
    _owner: Ys.current,
  };
}
function Eu(e, t) {
  return {
    $$typeof: sr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Js(e) {
  return typeof e == "object" && e !== null && e.$$typeof === sr;
}
function _u(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Vi = /\/+/g;
function _l(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? _u("" + e.key)
    : t.toString(36);
}
function Pr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case sr:
          case yu:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (l = l(a)),
      (e = r === "" ? "." + _l(a, 0) : r),
      Hi(l)
        ? ((n = ""),
          e != null && (n = e.replace(Vi, "$&/") + "/"),
          Pr(l, t, n, "", function (u) {
            return u;
          }))
        : l != null &&
          (Js(l) &&
            (l = Eu(
              l,
              n +
                (!l.key || (a && a.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Vi, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), Hi(e)))
    for (var o = 0; o < e.length; o++) {
      i = e[o];
      var c = r + _l(i, o);
      a += Pr(i, t, n, c, l);
    }
  else if (((c = zu(e)), typeof c == "function"))
    for (e = c.call(e), o = 0; !(i = e.next()).done; )
      ((i = i.value), (c = r + _l(i, o++)), (a += Pr(i, t, n, c, l)));
  else if (i === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return a;
}
function mr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Pr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function Pu(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var de = { current: null },
  Lr = { transition: null },
  Lu = {
    ReactCurrentDispatcher: de,
    ReactCurrentBatchConfig: Lr,
    ReactCurrentOwner: Ys,
  };
function oo() {
  throw Error("act(...) is not supported in production builds of React.");
}
A.Children = {
  map: mr,
  forEach: function (e, t, n) {
    mr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      mr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      mr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Js(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
A.Component = mn;
A.Fragment = vu;
A.Profiler = ju;
A.PureComponent = qs;
A.StrictMode = wu;
A.Suspense = Su;
A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lu;
A.act = oo;
A.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = no({}, e.props),
    l = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = Ys.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (c in t)
      so.call(t, c) &&
        !io.hasOwnProperty(c) &&
        (r[c] = t[c] === void 0 && o !== void 0 ? o[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    o = Array(c);
    for (var u = 0; u < c; u++) o[u] = arguments[u + 2];
    r.children = o;
  }
  return { $$typeof: sr, type: e.type, key: l, ref: i, props: r, _owner: a };
};
A.createContext = function (e) {
  return (
    (e = {
      $$typeof: ku,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Nu, _context: e }),
    (e.Consumer = e)
  );
};
A.createElement = ao;
A.createFactory = function (e) {
  var t = ao.bind(null, e);
  return ((t.type = e), t);
};
A.createRef = function () {
  return { current: null };
};
A.forwardRef = function (e) {
  return { $$typeof: bu, render: e };
};
A.isValidElement = Js;
A.lazy = function (e) {
  return { $$typeof: Tu, _payload: { _status: -1, _result: e }, _init: Pu };
};
A.memo = function (e, t) {
  return { $$typeof: Cu, type: e, compare: t === void 0 ? null : t };
};
A.startTransition = function (e) {
  var t = Lr.transition;
  Lr.transition = {};
  try {
    e();
  } finally {
    Lr.transition = t;
  }
};
A.unstable_act = oo;
A.useCallback = function (e, t) {
  return de.current.useCallback(e, t);
};
A.useContext = function (e) {
  return de.current.useContext(e);
};
A.useDebugValue = function () {};
A.useDeferredValue = function (e) {
  return de.current.useDeferredValue(e);
};
A.useEffect = function (e, t) {
  return de.current.useEffect(e, t);
};
A.useId = function () {
  return de.current.useId();
};
A.useImperativeHandle = function (e, t, n) {
  return de.current.useImperativeHandle(e, t, n);
};
A.useInsertionEffect = function (e, t) {
  return de.current.useInsertionEffect(e, t);
};
A.useLayoutEffect = function (e, t) {
  return de.current.useLayoutEffect(e, t);
};
A.useMemo = function (e, t) {
  return de.current.useMemo(e, t);
};
A.useReducer = function (e, t, n) {
  return de.current.useReducer(e, t, n);
};
A.useRef = function (e) {
  return de.current.useRef(e);
};
A.useState = function (e) {
  return de.current.useState(e);
};
A.useSyncExternalStore = function (e, t, n) {
  return de.current.useSyncExternalStore(e, t, n);
};
A.useTransition = function () {
  return de.current.useTransition();
};
A.version = "18.3.1";
eo.exports = A;
var E = eo.exports;
const Au = gu(E);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mu = E,
  Iu = Symbol.for("react.element"),
  Ou = Symbol.for("react.fragment"),
  Du = Object.prototype.hasOwnProperty,
  Ru = Mu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Fu = { key: !0, ref: !0, __self: !0, __source: !0 };
function co(e, t, n) {
  var r,
    l = {},
    i = null,
    a = null;
  (n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref));
  for (r in t) Du.call(t, r) && !Fu.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Iu,
    type: e,
    key: i,
    ref: a,
    props: l,
    _owner: Ru.current,
  };
}
pl.Fragment = Ou;
pl.jsx = co;
pl.jsxs = co;
Za.exports = pl;
var s = Za.exports,
  ns = {},
  uo = { exports: {} },
  ke = {},
  fo = { exports: {} },
  po = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(b, _) {
    var L = b.length;
    b.push(_);
    e: for (; 0 < L; ) {
      var K = (L - 1) >>> 1,
        Y = b[K];
      if (0 < l(Y, _)) ((b[K] = _), (b[L] = Y), (L = K));
      else break e;
    }
  }
  function n(b) {
    return b.length === 0 ? null : b[0];
  }
  function r(b) {
    if (b.length === 0) return null;
    var _ = b[0],
      L = b.pop();
    if (L !== _) {
      b[0] = L;
      e: for (var K = 0, Y = b.length, vn = Y >>> 1; K < vn; ) {
        var rt = 2 * (K + 1) - 1,
          fr = b[rt],
          lt = rt + 1,
          wn = b[lt];
        if (0 > l(fr, L))
          lt < Y && 0 > l(wn, fr)
            ? ((b[K] = wn), (b[lt] = L), (K = lt))
            : ((b[K] = fr), (b[rt] = L), (K = rt));
        else if (lt < Y && 0 > l(wn, L)) ((b[K] = wn), (b[lt] = L), (K = lt));
        else break e;
      }
    }
    return _;
  }
  function l(b, _) {
    var L = b.sortIndex - _.sortIndex;
    return L !== 0 ? L : b.id - _.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      o = a.now();
    e.unstable_now = function () {
      return a.now() - o;
    };
  }
  var c = [],
    u = [],
    h = 1,
    x = null,
    m = 3,
    y = !1,
    j = !1,
    N = !1,
    I = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(b) {
    for (var _ = n(u); _ !== null; ) {
      if (_.callback === null) r(u);
      else if (_.startTime <= b)
        (r(u), (_.sortIndex = _.expirationTime), t(c, _));
      else break;
      _ = n(u);
    }
  }
  function v(b) {
    if (((N = !1), p(b), !j))
      if (n(c) !== null) ((j = !0), gn(k));
      else {
        var _ = n(u);
        _ !== null && yn(v, _.startTime - b);
      }
  }
  function k(b, _) {
    ((j = !1), N && ((N = !1), f(z), (z = -1)), (y = !0));
    var L = m;
    try {
      for (
        p(_), x = n(c);
        x !== null && (!(x.expirationTime > _) || (b && !ye()));
      ) {
        var K = x.callback;
        if (typeof K == "function") {
          ((x.callback = null), (m = x.priorityLevel));
          var Y = K(x.expirationTime <= _);
          ((_ = e.unstable_now()),
            typeof Y == "function" ? (x.callback = Y) : x === n(c) && r(c),
            p(_));
        } else r(c);
        x = n(c);
      }
      if (x !== null) var vn = !0;
      else {
        var rt = n(u);
        (rt !== null && yn(v, rt.startTime - _), (vn = !1));
      }
      return vn;
    } finally {
      ((x = null), (m = L), (y = !1));
    }
  }
  var C = !1,
    T = null,
    z = -1,
    U = 5,
    P = -1;
  function ye() {
    return !(e.unstable_now() - P < U);
  }
  function Pe() {
    if (T !== null) {
      var b = e.unstable_now();
      P = b;
      var _ = !0;
      try {
        _ = T(!0, b);
      } finally {
        _ ? St() : ((C = !1), (T = null));
      }
    } else C = !1;
  }
  var St;
  if (typeof d == "function")
    St = function () {
      d(Pe);
    };
  else if (typeof MessageChannel < "u") {
    var dr = new MessageChannel(),
      El = dr.port2;
    ((dr.port1.onmessage = Pe),
      (St = function () {
        El.postMessage(null);
      }));
  } else
    St = function () {
      I(Pe, 0);
    };
  function gn(b) {
    ((T = b), C || ((C = !0), St()));
  }
  function yn(b, _) {
    z = I(function () {
      b(e.unstable_now());
    }, _);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (b) {
      b.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      j || y || ((j = !0), gn(k));
    }),
    (e.unstable_forceFrameRate = function (b) {
      0 > b || 125 < b
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (U = 0 < b ? Math.floor(1e3 / b) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (b) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = m;
      }
      var L = m;
      m = _;
      try {
        return b();
      } finally {
        m = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (b, _) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var L = m;
      m = b;
      try {
        return _();
      } finally {
        m = L;
      }
    }),
    (e.unstable_scheduleCallback = function (b, _, L) {
      var K = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? K + L : K))
          : (L = K),
        b)
      ) {
        case 1:
          var Y = -1;
          break;
        case 2:
          Y = 250;
          break;
        case 5:
          Y = 1073741823;
          break;
        case 4:
          Y = 1e4;
          break;
        default:
          Y = 5e3;
      }
      return (
        (Y = L + Y),
        (b = {
          id: h++,
          callback: _,
          priorityLevel: b,
          startTime: L,
          expirationTime: Y,
          sortIndex: -1,
        }),
        L > K
          ? ((b.sortIndex = L),
            t(u, b),
            n(c) === null &&
              b === n(u) &&
              (N ? (f(z), (z = -1)) : (N = !0), yn(v, L - K)))
          : ((b.sortIndex = Y), t(c, b), j || y || ((j = !0), gn(k))),
        b
      );
    }),
    (e.unstable_shouldYield = ye),
    (e.unstable_wrapCallback = function (b) {
      var _ = m;
      return function () {
        var L = m;
        m = _;
        try {
          return b.apply(this, arguments);
        } finally {
          m = L;
        }
      };
    }));
})(po);
fo.exports = po;
var Bu = fo.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $u = E,
  Ne = Bu;
function w(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var mo = new Set(),
  Qn = {};
function Ft(e, t) {
  (an(e, t), an(e + "Capture", t));
}
function an(e, t) {
  for (Qn[e] = t, e = 0; e < t.length; e++) mo.add(t[e]);
}
var Ye = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  rs = Object.prototype.hasOwnProperty,
  Qu =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Wi = {},
  Ki = {};
function Uu(e) {
  return rs.call(Ki, e)
    ? !0
    : rs.call(Wi, e)
      ? !1
      : Qu.test(e)
        ? (Ki[e] = !0)
        : ((Wi[e] = !0), !1);
}
function Hu(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Vu(e, t, n, r) {
  if (t === null || typeof t > "u" || Hu(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function fe(e, t, n, r, l, i, a) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a));
}
var le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    le[e] = new fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  le[t] = new fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  le[e] = new fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  le[e] = new fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    le[e] = new fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  le[e] = new fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  le[e] = new fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  le[e] = new fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  le[e] = new fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Zs = /[\-:]([a-z])/g;
function ei(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Zs, ei);
    le[t] = new fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Zs, ei);
    le[t] = new fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Zs, ei);
  le[t] = new fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  le[e] = new fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
le.xlinkHref = new fe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  le[e] = new fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ti(e, t, n, r) {
  var l = le.hasOwnProperty(t) ? le[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Vu(t, n, l, r) && (n = null),
    r || l === null
      ? Uu(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var nt = $u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  hr = Symbol.for("react.element"),
  Qt = Symbol.for("react.portal"),
  Ut = Symbol.for("react.fragment"),
  ni = Symbol.for("react.strict_mode"),
  ls = Symbol.for("react.profiler"),
  ho = Symbol.for("react.provider"),
  xo = Symbol.for("react.context"),
  ri = Symbol.for("react.forward_ref"),
  ss = Symbol.for("react.suspense"),
  is = Symbol.for("react.suspense_list"),
  li = Symbol.for("react.memo"),
  it = Symbol.for("react.lazy"),
  go = Symbol.for("react.offscreen"),
  Gi = Symbol.iterator;
function jn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Gi && e[Gi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var W = Object.assign,
  Pl;
function En(e) {
  if (Pl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Pl = (t && t[1]) || "";
    }
  return (
    `
` +
    Pl +
    e
  );
}
var Ll = !1;
function Al(e, t) {
  if (!e || Ll) return "";
  Ll = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var l = u.stack.split(`
`),
          i = r.stack.split(`
`),
          a = l.length - 1,
          o = i.length - 1;
        1 <= a && 0 <= o && l[a] !== i[o];
      )
        o--;
      for (; 1 <= a && 0 <= o; a--, o--)
        if (l[a] !== i[o]) {
          if (a !== 1 || o !== 1)
            do
              if ((a--, o--, 0 > o || l[a] !== i[o])) {
                var c =
                  `
` + l[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", e.displayName)),
                  c
                );
              }
            while (1 <= a && 0 <= o);
          break;
        }
    }
  } finally {
    ((Ll = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? En(e) : "";
}
function Wu(e) {
  switch (e.tag) {
    case 5:
      return En(e.type);
    case 16:
      return En("Lazy");
    case 13:
      return En("Suspense");
    case 19:
      return En("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Al(e.type, !1)), e);
    case 11:
      return ((e = Al(e.type.render, !1)), e);
    case 1:
      return ((e = Al(e.type, !0)), e);
    default:
      return "";
  }
}
function as(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ut:
      return "Fragment";
    case Qt:
      return "Portal";
    case ls:
      return "Profiler";
    case ni:
      return "StrictMode";
    case ss:
      return "Suspense";
    case is:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case xo:
        return (e.displayName || "Context") + ".Consumer";
      case ho:
        return (e._context.displayName || "Context") + ".Provider";
      case ri:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case li:
        return (
          (t = e.displayName || null),
          t !== null ? t : as(e.type) || "Memo"
        );
      case it:
        ((t = e._payload), (e = e._init));
        try {
          return as(e(t));
        } catch {}
    }
  return null;
}
function Ku(e) {
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
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
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
      return as(t);
    case 8:
      return t === ni ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function wt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function yo(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Gu(e) {
  var t = yo(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (a) {
          ((r = "" + a), i.call(this, a));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function xr(e) {
  e._valueTracker || (e._valueTracker = Gu(e));
}
function vo(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = yo(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ur(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function os(e, t) {
  var n = t.checked;
  return W({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function qi(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = wt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function wo(e, t) {
  ((t = t.checked), t != null && ti(e, "checked", t, !1));
}
function cs(e, t) {
  wo(e, t);
  var n = wt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? us(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && us(e, t.type, wt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Xi(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function us(e, t, n) {
  (t !== "number" || Ur(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var _n = Array.isArray;
function en(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      ((l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + wt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ds(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
  return W({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Yi(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(w(92));
      if (_n(n)) {
        if (1 < n.length) throw Error(w(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: wt(n) };
}
function jo(e, t) {
  var n = wt(t.value),
    r = wt(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function Ji(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function No(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function fs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? No(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var gr,
  ko = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        gr = gr || document.createElement("div"),
          gr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = gr.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Un(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var An = {
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
    strokeWidth: !0,
  },
  qu = ["Webkit", "ms", "Moz", "O"];
Object.keys(An).forEach(function (e) {
  qu.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (An[t] = An[e]));
  });
});
function bo(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (An.hasOwnProperty(e) && An[e])
      ? ("" + t).trim()
      : t + "px";
}
function So(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = bo(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
    }
}
var Xu = W(
  { menuitem: !0 },
  {
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
    wbr: !0,
  },
);
function ps(e, t) {
  if (t) {
    if (Xu[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(w(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(w(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(w(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(w(62));
  }
}
function ms(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
      return !0;
  }
}
var hs = null;
function si(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var xs = null,
  tn = null,
  nn = null;
function Zi(e) {
  if ((e = or(e))) {
    if (typeof xs != "function") throw Error(w(280));
    var t = e.stateNode;
    t && ((t = yl(t)), xs(e.stateNode, e.type, t));
  }
}
function Co(e) {
  tn ? (nn ? nn.push(e) : (nn = [e])) : (tn = e);
}
function To() {
  if (tn) {
    var e = tn,
      t = nn;
    if (((nn = tn = null), Zi(e), t)) for (e = 0; e < t.length; e++) Zi(t[e]);
  }
}
function zo(e, t) {
  return e(t);
}
function Eo() {}
var Ml = !1;
function _o(e, t, n) {
  if (Ml) return e(t, n);
  Ml = !0;
  try {
    return zo(e, t, n);
  } finally {
    ((Ml = !1), (tn !== null || nn !== null) && (Eo(), To()));
  }
}
function Hn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = yl(n);
  if (r === null) return null;
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
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(w(231, t, typeof n));
  return n;
}
var gs = !1;
if (Ye)
  try {
    var Nn = {};
    (Object.defineProperty(Nn, "passive", {
      get: function () {
        gs = !0;
      },
    }),
      window.addEventListener("test", Nn, Nn),
      window.removeEventListener("test", Nn, Nn));
  } catch {
    gs = !1;
  }
function Yu(e, t, n, r, l, i, a, o, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (h) {
    this.onError(h);
  }
}
var Mn = !1,
  Hr = null,
  Vr = !1,
  ys = null,
  Ju = {
    onError: function (e) {
      ((Mn = !0), (Hr = e));
    },
  };
function Zu(e, t, n, r, l, i, a, o, c) {
  ((Mn = !1), (Hr = null), Yu.apply(Ju, arguments));
}
function ed(e, t, n, r, l, i, a, o, c) {
  if ((Zu.apply(this, arguments), Mn)) {
    if (Mn) {
      var u = Hr;
      ((Mn = !1), (Hr = null));
    } else throw Error(w(198));
    Vr || ((Vr = !0), (ys = u));
  }
}
function Bt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Po(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ea(e) {
  if (Bt(e) !== e) throw Error(w(188));
}
function td(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Bt(e)), t === null)) throw Error(w(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return (ea(l), e);
        if (i === r) return (ea(l), t);
        i = i.sibling;
      }
      throw Error(w(188));
    }
    if (n.return !== r.return) ((n = l), (r = i));
    else {
      for (var a = !1, o = l.child; o; ) {
        if (o === n) {
          ((a = !0), (n = l), (r = i));
          break;
        }
        if (o === r) {
          ((a = !0), (r = l), (n = i));
          break;
        }
        o = o.sibling;
      }
      if (!a) {
        for (o = i.child; o; ) {
          if (o === n) {
            ((a = !0), (n = i), (r = l));
            break;
          }
          if (o === r) {
            ((a = !0), (r = i), (n = l));
            break;
          }
          o = o.sibling;
        }
        if (!a) throw Error(w(189));
      }
    }
    if (n.alternate !== r) throw Error(w(190));
  }
  if (n.tag !== 3) throw Error(w(188));
  return n.stateNode.current === n ? e : t;
}
function Lo(e) {
  return ((e = td(e)), e !== null ? Ao(e) : null);
}
function Ao(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ao(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Mo = Ne.unstable_scheduleCallback,
  ta = Ne.unstable_cancelCallback,
  nd = Ne.unstable_shouldYield,
  rd = Ne.unstable_requestPaint,
  q = Ne.unstable_now,
  ld = Ne.unstable_getCurrentPriorityLevel,
  ii = Ne.unstable_ImmediatePriority,
  Io = Ne.unstable_UserBlockingPriority,
  Wr = Ne.unstable_NormalPriority,
  sd = Ne.unstable_LowPriority,
  Oo = Ne.unstable_IdlePriority,
  ml = null,
  Ue = null;
function id(e) {
  if (Ue && typeof Ue.onCommitFiberRoot == "function")
    try {
      Ue.onCommitFiberRoot(ml, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var De = Math.clz32 ? Math.clz32 : cd,
  ad = Math.log,
  od = Math.LN2;
function cd(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((ad(e) / od) | 0)) | 0);
}
var yr = 64,
  vr = 4194304;
function Pn(e) {
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
      return e;
  }
}
function Kr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var o = a & ~l;
    o !== 0 ? (r = Pn(o)) : ((i &= a), i !== 0 && (r = Pn(i)));
  } else ((a = n & ~l), a !== 0 ? (r = Pn(a)) : i !== 0 && (r = Pn(i)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - De(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
  return r;
}
function ud(e, t) {
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
      return -1;
  }
}
function dd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;
  ) {
    var a = 31 - De(i),
      o = 1 << a,
      c = l[a];
    (c === -1
      ? (!(o & n) || o & r) && (l[a] = ud(o, t))
      : c <= t && (e.expiredLanes |= o),
      (i &= ~o));
  }
}
function vs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Do() {
  var e = yr;
  return ((yr <<= 1), !(yr & 4194240) && (yr = 64), e);
}
function Il(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ir(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - De(t)),
    (e[t] = n));
}
function fd(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - De(n),
      i = 1 << l;
    ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i));
  }
}
function ai(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - De(n),
      l = 1 << r;
    ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
  }
}
var O = 0;
function Ro(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Fo,
  oi,
  Bo,
  $o,
  Qo,
  ws = !1,
  wr = [],
  ft = null,
  pt = null,
  mt = null,
  Vn = new Map(),
  Wn = new Map(),
  ot = [],
  pd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function na(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ft = null;
      break;
    case "dragenter":
    case "dragleave":
      pt = null;
      break;
    case "mouseover":
    case "mouseout":
      mt = null;
      break;
    case "pointerover":
    case "pointerout":
      Vn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Wn.delete(t.pointerId);
  }
}
function kn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = or(t)), t !== null && oi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function md(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ((ft = kn(ft, e, t, n, r, l)), !0);
    case "dragenter":
      return ((pt = kn(pt, e, t, n, r, l)), !0);
    case "mouseover":
      return ((mt = kn(mt, e, t, n, r, l)), !0);
    case "pointerover":
      var i = l.pointerId;
      return (Vn.set(i, kn(Vn.get(i) || null, e, t, n, r, l)), !0);
    case "gotpointercapture":
      return (
        (i = l.pointerId),
        Wn.set(i, kn(Wn.get(i) || null, e, t, n, r, l)),
        !0
      );
  }
  return !1;
}
function Uo(e) {
  var t = Et(e.target);
  if (t !== null) {
    var n = Bt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Po(n)), t !== null)) {
          ((e.blockedOn = t),
            Qo(e.priority, function () {
              Bo(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ar(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = js(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((hs = r), n.target.dispatchEvent(r), (hs = null));
    } else return ((t = or(n)), t !== null && oi(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function ra(e, t, n) {
  Ar(e) && n.delete(t);
}
function hd() {
  ((ws = !1),
    ft !== null && Ar(ft) && (ft = null),
    pt !== null && Ar(pt) && (pt = null),
    mt !== null && Ar(mt) && (mt = null),
    Vn.forEach(ra),
    Wn.forEach(ra));
}
function bn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ws ||
      ((ws = !0),
      Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority, hd)));
}
function Kn(e) {
  function t(l) {
    return bn(l, e);
  }
  if (0 < wr.length) {
    bn(wr[0], e);
    for (var n = 1; n < wr.length; n++) {
      var r = wr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ft !== null && bn(ft, e),
      pt !== null && bn(pt, e),
      mt !== null && bn(mt, e),
      Vn.forEach(t),
      Wn.forEach(t),
      n = 0;
    n < ot.length;
    n++
  )
    ((r = ot[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < ot.length && ((n = ot[0]), n.blockedOn === null); )
    (Uo(n), n.blockedOn === null && ot.shift());
}
var rn = nt.ReactCurrentBatchConfig,
  Gr = !0;
function xd(e, t, n, r) {
  var l = O,
    i = rn.transition;
  rn.transition = null;
  try {
    ((O = 1), ci(e, t, n, r));
  } finally {
    ((O = l), (rn.transition = i));
  }
}
function gd(e, t, n, r) {
  var l = O,
    i = rn.transition;
  rn.transition = null;
  try {
    ((O = 4), ci(e, t, n, r));
  } finally {
    ((O = l), (rn.transition = i));
  }
}
function ci(e, t, n, r) {
  if (Gr) {
    var l = js(e, t, n, r);
    if (l === null) (Vl(e, t, r, qr, n), na(e, r));
    else if (md(l, e, t, n, r)) r.stopPropagation();
    else if ((na(e, r), t & 4 && -1 < pd.indexOf(e))) {
      for (; l !== null; ) {
        var i = or(l);
        if (
          (i !== null && Fo(i),
          (i = js(e, t, n, r)),
          i === null && Vl(e, t, r, qr, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Vl(e, t, r, null, n);
  }
}
var qr = null;
function js(e, t, n, r) {
  if (((qr = null), (e = si(r)), (e = Et(e)), e !== null))
    if (((t = Bt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Po(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((qr = e), null);
}
function Ho(e) {
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
      switch (ld()) {
        case ii:
          return 1;
        case Io:
          return 4;
        case Wr:
        case sd:
          return 16;
        case Oo:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ut = null,
  ui = null,
  Mr = null;
function Vo() {
  if (Mr) return Mr;
  var e,
    t = ui,
    n = t.length,
    r,
    l = "value" in ut ? ut.value : ut.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === l[i - r]; r++);
  return (Mr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Ir(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function jr() {
  return !0;
}
function la() {
  return !1;
}
function be(e) {
  function t(n, r, l, i, a) {
    ((this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null));
    for (var o in e)
      e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(i) : i[o]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? jr
        : la),
      (this.isPropagationStopped = la),
      this
    );
  }
  return (
    W(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = jr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = jr));
      },
      persist: function () {},
      isPersistent: jr,
    }),
    t
  );
}
var hn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  di = be(hn),
  ar = W({}, hn, { view: 0, detail: 0 }),
  yd = be(ar),
  Ol,
  Dl,
  Sn,
  hl = W({}, ar, {
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
    getModifierState: fi,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Sn &&
            (Sn && e.type === "mousemove"
              ? ((Ol = e.screenX - Sn.screenX), (Dl = e.screenY - Sn.screenY))
              : (Dl = Ol = 0),
            (Sn = e)),
          Ol);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Dl;
    },
  }),
  sa = be(hl),
  vd = W({}, hl, { dataTransfer: 0 }),
  wd = be(vd),
  jd = W({}, ar, { relatedTarget: 0 }),
  Rl = be(jd),
  Nd = W({}, hn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  kd = be(Nd),
  bd = W({}, hn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Sd = be(bd),
  Cd = W({}, hn, { data: 0 }),
  ia = be(Cd),
  Td = {
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
    MozPrintableKey: "Unidentified",
  },
  zd = {
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
    224: "Meta",
  },
  Ed = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function _d(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ed[e]) ? !!t[e] : !1;
}
function fi() {
  return _d;
}
var Pd = W({}, ar, {
    key: function (e) {
      if (e.key) {
        var t = Td[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ir(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? zd[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: fi,
    charCode: function (e) {
      return e.type === "keypress" ? Ir(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ir(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Ld = be(Pd),
  Ad = W({}, hl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  aa = be(Ad),
  Md = W({}, ar, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: fi,
  }),
  Id = be(Md),
  Od = W({}, hn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Dd = be(Od),
  Rd = W({}, hl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Fd = be(Rd),
  Bd = [9, 13, 27, 32],
  pi = Ye && "CompositionEvent" in window,
  In = null;
Ye && "documentMode" in document && (In = document.documentMode);
var $d = Ye && "TextEvent" in window && !In,
  Wo = Ye && (!pi || (In && 8 < In && 11 >= In)),
  oa = " ",
  ca = !1;
function Ko(e, t) {
  switch (e) {
    case "keyup":
      return Bd.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Go(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var Ht = !1;
function Qd(e, t) {
  switch (e) {
    case "compositionend":
      return Go(t);
    case "keypress":
      return t.which !== 32 ? null : ((ca = !0), oa);
    case "textInput":
      return ((e = t.data), e === oa && ca ? null : e);
    default:
      return null;
  }
}
function Ud(e, t) {
  if (Ht)
    return e === "compositionend" || (!pi && Ko(e, t))
      ? ((e = Vo()), (Mr = ui = ut = null), (Ht = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Wo && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Hd = {
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
  week: !0,
};
function ua(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Hd[e.type] : t === "textarea";
}
function qo(e, t, n, r) {
  (Co(r),
    (t = Xr(t, "onChange")),
    0 < t.length &&
      ((n = new di("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var On = null,
  Gn = null;
function Vd(e) {
  ic(e, 0);
}
function xl(e) {
  var t = Kt(e);
  if (vo(t)) return e;
}
function Wd(e, t) {
  if (e === "change") return t;
}
var Xo = !1;
if (Ye) {
  var Fl;
  if (Ye) {
    var Bl = "oninput" in document;
    if (!Bl) {
      var da = document.createElement("div");
      (da.setAttribute("oninput", "return;"),
        (Bl = typeof da.oninput == "function"));
    }
    Fl = Bl;
  } else Fl = !1;
  Xo = Fl && (!document.documentMode || 9 < document.documentMode);
}
function fa() {
  On && (On.detachEvent("onpropertychange", Yo), (Gn = On = null));
}
function Yo(e) {
  if (e.propertyName === "value" && xl(Gn)) {
    var t = [];
    (qo(t, Gn, e, si(e)), _o(Vd, t));
  }
}
function Kd(e, t, n) {
  e === "focusin"
    ? (fa(), (On = t), (Gn = n), On.attachEvent("onpropertychange", Yo))
    : e === "focusout" && fa();
}
function Gd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return xl(Gn);
}
function qd(e, t) {
  if (e === "click") return xl(t);
}
function Xd(e, t) {
  if (e === "input" || e === "change") return xl(t);
}
function Yd(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Fe = typeof Object.is == "function" ? Object.is : Yd;
function qn(e, t) {
  if (Fe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!rs.call(t, l) || !Fe(e[l], t[l])) return !1;
  }
  return !0;
}
function pa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ma(e, t) {
  var n = pa(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = pa(n);
  }
}
function Jo(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Jo(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Zo() {
  for (var e = window, t = Ur(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ur(e.document);
  }
  return t;
}
function mi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Jd(e) {
  var t = Zo(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Jo(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && mi(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        ((r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = ma(n, i)));
        var a = ma(n, r);
        l &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var Zd = Ye && "documentMode" in document && 11 >= document.documentMode,
  Vt = null,
  Ns = null,
  Dn = null,
  ks = !1;
function ha(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ks ||
    Vt == null ||
    Vt !== Ur(r) ||
    ((r = Vt),
    "selectionStart" in r && mi(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Dn && qn(Dn, r)) ||
      ((Dn = r),
      (r = Xr(Ns, "onSelect")),
      0 < r.length &&
        ((t = new di("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Vt))));
}
function Nr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Wt = {
    animationend: Nr("Animation", "AnimationEnd"),
    animationiteration: Nr("Animation", "AnimationIteration"),
    animationstart: Nr("Animation", "AnimationStart"),
    transitionend: Nr("Transition", "TransitionEnd"),
  },
  $l = {},
  ec = {};
Ye &&
  ((ec = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Wt.animationend.animation,
    delete Wt.animationiteration.animation,
    delete Wt.animationstart.animation),
  "TransitionEvent" in window || delete Wt.transitionend.transition);
function gl(e) {
  if ($l[e]) return $l[e];
  if (!Wt[e]) return e;
  var t = Wt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ec) return ($l[e] = t[n]);
  return e;
}
var tc = gl("animationend"),
  nc = gl("animationiteration"),
  rc = gl("animationstart"),
  lc = gl("transitionend"),
  sc = new Map(),
  xa =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Nt(e, t) {
  (sc.set(e, t), Ft(t, [e]));
}
for (var Ql = 0; Ql < xa.length; Ql++) {
  var Ul = xa[Ql],
    ef = Ul.toLowerCase(),
    tf = Ul[0].toUpperCase() + Ul.slice(1);
  Nt(ef, "on" + tf);
}
Nt(tc, "onAnimationEnd");
Nt(nc, "onAnimationIteration");
Nt(rc, "onAnimationStart");
Nt("dblclick", "onDoubleClick");
Nt("focusin", "onFocus");
Nt("focusout", "onBlur");
Nt(lc, "onTransitionEnd");
an("onMouseEnter", ["mouseout", "mouseover"]);
an("onMouseLeave", ["mouseout", "mouseover"]);
an("onPointerEnter", ["pointerout", "pointerover"]);
an("onPointerLeave", ["pointerout", "pointerover"]);
Ft(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Ft(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Ft("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ft(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Ft(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Ft(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Ln =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  nf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));
function ga(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), ed(r, t, void 0, e), (e.currentTarget = null));
}
function ic(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var o = r[a],
            c = o.instance,
            u = o.currentTarget;
          if (((o = o.listener), c !== i && l.isPropagationStopped())) break e;
          (ga(l, o, u), (i = c));
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((o = r[a]),
            (c = o.instance),
            (u = o.currentTarget),
            (o = o.listener),
            c !== i && l.isPropagationStopped())
          )
            break e;
          (ga(l, o, u), (i = c));
        }
    }
  }
  if (Vr) throw ((e = ys), (Vr = !1), (ys = null), e);
}
function B(e, t) {
  var n = t[zs];
  n === void 0 && (n = t[zs] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ac(t, e, 2, !1), n.add(r));
}
function Hl(e, t, n) {
  var r = 0;
  (t && (r |= 4), ac(n, e, r, t));
}
var kr = "_reactListening" + Math.random().toString(36).slice(2);
function Xn(e) {
  if (!e[kr]) {
    ((e[kr] = !0),
      mo.forEach(function (n) {
        n !== "selectionchange" && (nf.has(n) || Hl(n, !1, e), Hl(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[kr] || ((t[kr] = !0), Hl("selectionchange", !1, t));
  }
}
function ac(e, t, n, r) {
  switch (Ho(t)) {
    case 1:
      var l = xd;
      break;
    case 4:
      l = gd;
      break;
    default:
      l = ci;
  }
  ((n = l.bind(null, t, n, e)),
    (l = void 0),
    !gs ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1));
}
function Vl(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var o = r.stateNode.containerInfo;
        if (o === l || (o.nodeType === 8 && o.parentNode === l)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var c = a.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = a.stateNode.containerInfo),
              c === l || (c.nodeType === 8 && c.parentNode === l))
            )
              return;
            a = a.return;
          }
        for (; o !== null; ) {
          if (((a = Et(o)), a === null)) return;
          if (((c = a.tag), c === 5 || c === 6)) {
            r = i = a;
            continue e;
          }
          o = o.parentNode;
        }
      }
      r = r.return;
    }
  _o(function () {
    var u = i,
      h = si(n),
      x = [];
    e: {
      var m = sc.get(e);
      if (m !== void 0) {
        var y = di,
          j = e;
        switch (e) {
          case "keypress":
            if (Ir(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Ld;
            break;
          case "focusin":
            ((j = "focus"), (y = Rl));
            break;
          case "focusout":
            ((j = "blur"), (y = Rl));
            break;
          case "beforeblur":
          case "afterblur":
            y = Rl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = sa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = wd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Id;
            break;
          case tc:
          case nc:
          case rc:
            y = kd;
            break;
          case lc:
            y = Dd;
            break;
          case "scroll":
            y = yd;
            break;
          case "wheel":
            y = Fd;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Sd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = aa;
        }
        var N = (t & 4) !== 0,
          I = !N && e === "scroll",
          f = N ? (m !== null ? m + "Capture" : null) : m;
        N = [];
        for (var d = u, p; d !== null; ) {
          p = d;
          var v = p.stateNode;
          if (
            (p.tag === 5 &&
              v !== null &&
              ((p = v),
              f !== null && ((v = Hn(d, f)), v != null && N.push(Yn(d, v, p)))),
            I)
          )
            break;
          d = d.return;
        }
        0 < N.length &&
          ((m = new y(m, j, null, n, h)), x.push({ event: m, listeners: N }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          m &&
            n !== hs &&
            (j = n.relatedTarget || n.fromElement) &&
            (Et(j) || j[Je]))
        )
          break e;
        if (
          (y || m) &&
          ((m =
            h.window === h
              ? h
              : (m = h.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
          y
            ? ((j = n.relatedTarget || n.toElement),
              (y = u),
              (j = j ? Et(j) : null),
              j !== null &&
                ((I = Bt(j)), j !== I || (j.tag !== 5 && j.tag !== 6)) &&
                (j = null))
            : ((y = null), (j = u)),
          y !== j)
        ) {
          if (
            ((N = sa),
            (v = "onMouseLeave"),
            (f = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((N = aa),
              (v = "onPointerLeave"),
              (f = "onPointerEnter"),
              (d = "pointer")),
            (I = y == null ? m : Kt(y)),
            (p = j == null ? m : Kt(j)),
            (m = new N(v, d + "leave", y, n, h)),
            (m.target = I),
            (m.relatedTarget = p),
            (v = null),
            Et(h) === u &&
              ((N = new N(f, d + "enter", j, n, h)),
              (N.target = p),
              (N.relatedTarget = I),
              (v = N)),
            (I = v),
            y && j)
          )
            t: {
              for (N = y, f = j, d = 0, p = N; p; p = $t(p)) d++;
              for (p = 0, v = f; v; v = $t(v)) p++;
              for (; 0 < d - p; ) ((N = $t(N)), d--);
              for (; 0 < p - d; ) ((f = $t(f)), p--);
              for (; d--; ) {
                if (N === f || (f !== null && N === f.alternate)) break t;
                ((N = $t(N)), (f = $t(f)));
              }
              N = null;
            }
          else N = null;
          (y !== null && ya(x, m, y, N, !1),
            j !== null && I !== null && ya(x, I, j, N, !0));
        }
      }
      e: {
        if (
          ((m = u ? Kt(u) : window),
          (y = m.nodeName && m.nodeName.toLowerCase()),
          y === "select" || (y === "input" && m.type === "file"))
        )
          var k = Wd;
        else if (ua(m))
          if (Xo) k = Xd;
          else {
            k = Gd;
            var C = Kd;
          }
        else
          (y = m.nodeName) &&
            y.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (k = qd);
        if (k && (k = k(e, u))) {
          qo(x, k, n, h);
          break e;
        }
        (C && C(e, m, u),
          e === "focusout" &&
            (C = m._wrapperState) &&
            C.controlled &&
            m.type === "number" &&
            us(m, "number", m.value));
      }
      switch (((C = u ? Kt(u) : window), e)) {
        case "focusin":
          (ua(C) || C.contentEditable === "true") &&
            ((Vt = C), (Ns = u), (Dn = null));
          break;
        case "focusout":
          Dn = Ns = Vt = null;
          break;
        case "mousedown":
          ks = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((ks = !1), ha(x, n, h));
          break;
        case "selectionchange":
          if (Zd) break;
        case "keydown":
        case "keyup":
          ha(x, n, h);
      }
      var T;
      if (pi)
        e: {
          switch (e) {
            case "compositionstart":
              var z = "onCompositionStart";
              break e;
            case "compositionend":
              z = "onCompositionEnd";
              break e;
            case "compositionupdate":
              z = "onCompositionUpdate";
              break e;
          }
          z = void 0;
        }
      else
        Ht
          ? Ko(e, n) && (z = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");
      (z &&
        (Wo &&
          n.locale !== "ko" &&
          (Ht || z !== "onCompositionStart"
            ? z === "onCompositionEnd" && Ht && (T = Vo())
            : ((ut = h),
              (ui = "value" in ut ? ut.value : ut.textContent),
              (Ht = !0))),
        (C = Xr(u, z)),
        0 < C.length &&
          ((z = new ia(z, e, null, n, h)),
          x.push({ event: z, listeners: C }),
          T ? (z.data = T) : ((T = Go(n)), T !== null && (z.data = T)))),
        (T = $d ? Qd(e, n) : Ud(e, n)) &&
          ((u = Xr(u, "onBeforeInput")),
          0 < u.length &&
            ((h = new ia("onBeforeInput", "beforeinput", null, n, h)),
            x.push({ event: h, listeners: u }),
            (h.data = T))));
    }
    ic(x, t);
  });
}
function Yn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Xr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    (l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Hn(e, n)),
      i != null && r.unshift(Yn(e, i, l)),
      (i = Hn(e, t)),
      i != null && r.push(Yn(e, i, l))),
      (e = e.return));
  }
  return r;
}
function $t(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ya(e, t, n, r, l) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var o = n,
      c = o.alternate,
      u = o.stateNode;
    if (c !== null && c === r) break;
    (o.tag === 5 &&
      u !== null &&
      ((o = u),
      l
        ? ((c = Hn(n, i)), c != null && a.unshift(Yn(n, c, o)))
        : l || ((c = Hn(n, i)), c != null && a.push(Yn(n, c, o)))),
      (n = n.return));
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var rf = /\r\n?/g,
  lf = /\u0000|\uFFFD/g;
function va(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      rf,
      `
`,
    )
    .replace(lf, "");
}
function br(e, t, n) {
  if (((t = va(t)), va(e) !== t && n)) throw Error(w(425));
}
function Yr() {}
var bs = null,
  Ss = null;
function Cs(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ts = typeof setTimeout == "function" ? setTimeout : void 0,
  sf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  wa = typeof Promise == "function" ? Promise : void 0,
  af =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof wa < "u"
        ? function (e) {
            return wa.resolve(null).then(e).catch(of);
          }
        : Ts;
function of(e) {
  setTimeout(function () {
    throw e;
  });
}
function Wl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(l), Kn(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Kn(t);
}
function ht(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ja(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var xn = Math.random().toString(36).slice(2),
  Qe = "__reactFiber$" + xn,
  Jn = "__reactProps$" + xn,
  Je = "__reactContainer$" + xn,
  zs = "__reactEvents$" + xn,
  cf = "__reactListeners$" + xn,
  uf = "__reactHandles$" + xn;
function Et(e) {
  var t = e[Qe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Je] || n[Qe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ja(e); e !== null; ) {
          if ((n = e[Qe])) return n;
          e = ja(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function or(e) {
  return (
    (e = e[Qe] || e[Je]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Kt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(w(33));
}
function yl(e) {
  return e[Jn] || null;
}
var Es = [],
  Gt = -1;
function kt(e) {
  return { current: e };
}
function $(e) {
  0 > Gt || ((e.current = Es[Gt]), (Es[Gt] = null), Gt--);
}
function R(e, t) {
  (Gt++, (Es[Gt] = e.current), (e.current = t));
}
var jt = {},
  oe = kt(jt),
  he = kt(!1),
  Mt = jt;
function on(e, t) {
  var n = e.type.contextTypes;
  if (!n) return jt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function xe(e) {
  return ((e = e.childContextTypes), e != null);
}
function Jr() {
  ($(he), $(oe));
}
function Na(e, t, n) {
  if (oe.current !== jt) throw Error(w(168));
  (R(oe, t), R(he, n));
}
function oc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(w(108, Ku(e) || "Unknown", l));
  return W({}, n, r);
}
function Zr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || jt),
    (Mt = oe.current),
    R(oe, e),
    R(he, he.current),
    !0
  );
}
function ka(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(w(169));
  (n
    ? ((e = oc(e, t, Mt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      $(he),
      $(oe),
      R(oe, e))
    : $(he),
    R(he, n));
}
var Ke = null,
  vl = !1,
  Kl = !1;
function cc(e) {
  Ke === null ? (Ke = [e]) : Ke.push(e);
}
function df(e) {
  ((vl = !0), cc(e));
}
function bt() {
  if (!Kl && Ke !== null) {
    Kl = !0;
    var e = 0,
      t = O;
    try {
      var n = Ke;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((Ke = null), (vl = !1));
    } catch (l) {
      throw (Ke !== null && (Ke = Ke.slice(e + 1)), Mo(ii, bt), l);
    } finally {
      ((O = t), (Kl = !1));
    }
  }
  return null;
}
var qt = [],
  Xt = 0,
  el = null,
  tl = 0,
  Se = [],
  Ce = 0,
  It = null,
  Ge = 1,
  qe = "";
function Tt(e, t) {
  ((qt[Xt++] = tl), (qt[Xt++] = el), (el = e), (tl = t));
}
function uc(e, t, n) {
  ((Se[Ce++] = Ge), (Se[Ce++] = qe), (Se[Ce++] = It), (It = e));
  var r = Ge;
  e = qe;
  var l = 32 - De(r) - 1;
  ((r &= ~(1 << l)), (n += 1));
  var i = 32 - De(t) + l;
  if (30 < i) {
    var a = l - (l % 5);
    ((i = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (l -= a),
      (Ge = (1 << (32 - De(t) + l)) | (n << l) | r),
      (qe = i + e));
  } else ((Ge = (1 << i) | (n << l) | r), (qe = e));
}
function hi(e) {
  e.return !== null && (Tt(e, 1), uc(e, 1, 0));
}
function xi(e) {
  for (; e === el; )
    ((el = qt[--Xt]), (qt[Xt] = null), (tl = qt[--Xt]), (qt[Xt] = null));
  for (; e === It; )
    ((It = Se[--Ce]),
      (Se[Ce] = null),
      (qe = Se[--Ce]),
      (Se[Ce] = null),
      (Ge = Se[--Ce]),
      (Se[Ce] = null));
}
var je = null,
  we = null,
  Q = !1,
  Oe = null;
function dc(e, t) {
  var n = Te(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function ba(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (je = e), (we = ht(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (je = e), (we = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = It !== null ? { id: Ge, overflow: qe } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Te(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (je = e),
            (we = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function _s(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ps(e) {
  if (Q) {
    var t = we;
    if (t) {
      var n = t;
      if (!ba(e, t)) {
        if (_s(e)) throw Error(w(418));
        t = ht(n.nextSibling);
        var r = je;
        t && ba(e, t)
          ? dc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Q = !1), (je = e));
      }
    } else {
      if (_s(e)) throw Error(w(418));
      ((e.flags = (e.flags & -4097) | 2), (Q = !1), (je = e));
    }
  }
}
function Sa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  je = e;
}
function Sr(e) {
  if (e !== je) return !1;
  if (!Q) return (Sa(e), (Q = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Cs(e.type, e.memoizedProps))),
    t && (t = we))
  ) {
    if (_s(e)) throw (fc(), Error(w(418)));
    for (; t; ) (dc(e, t), (t = ht(t.nextSibling)));
  }
  if ((Sa(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(w(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              we = ht(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      we = null;
    }
  } else we = je ? ht(e.stateNode.nextSibling) : null;
  return !0;
}
function fc() {
  for (var e = we; e; ) e = ht(e.nextSibling);
}
function cn() {
  ((we = je = null), (Q = !1));
}
function gi(e) {
  Oe === null ? (Oe = [e]) : Oe.push(e);
}
var ff = nt.ReactCurrentBatchConfig;
function Cn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(w(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(w(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var o = l.refs;
            a === null ? delete o[i] : (o[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(w(284));
    if (!n._owner) throw Error(w(290, e));
  }
  return e;
}
function Cr(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      w(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function Ca(e) {
  var t = e._init;
  return t(e._payload);
}
function pc(e) {
  function t(f, d) {
    if (e) {
      var p = f.deletions;
      p === null ? ((f.deletions = [d]), (f.flags |= 16)) : p.push(d);
    }
  }
  function n(f, d) {
    if (!e) return null;
    for (; d !== null; ) (t(f, d), (d = d.sibling));
    return null;
  }
  function r(f, d) {
    for (f = new Map(); d !== null; )
      (d.key !== null ? f.set(d.key, d) : f.set(d.index, d), (d = d.sibling));
    return f;
  }
  function l(f, d) {
    return ((f = vt(f, d)), (f.index = 0), (f.sibling = null), f);
  }
  function i(f, d, p) {
    return (
      (f.index = p),
      e
        ? ((p = f.alternate),
          p !== null
            ? ((p = p.index), p < d ? ((f.flags |= 2), d) : p)
            : ((f.flags |= 2), d))
        : ((f.flags |= 1048576), d)
    );
  }
  function a(f) {
    return (e && f.alternate === null && (f.flags |= 2), f);
  }
  function o(f, d, p, v) {
    return d === null || d.tag !== 6
      ? ((d = es(p, f.mode, v)), (d.return = f), d)
      : ((d = l(d, p)), (d.return = f), d);
  }
  function c(f, d, p, v) {
    var k = p.type;
    return k === Ut
      ? h(f, d, p.props.children, v, p.key)
      : d !== null &&
          (d.elementType === k ||
            (typeof k == "object" &&
              k !== null &&
              k.$$typeof === it &&
              Ca(k) === d.type))
        ? ((v = l(d, p.props)), (v.ref = Cn(f, d, p)), (v.return = f), v)
        : ((v = Qr(p.type, p.key, p.props, null, f.mode, v)),
          (v.ref = Cn(f, d, p)),
          (v.return = f),
          v);
  }
  function u(f, d, p, v) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== p.containerInfo ||
      d.stateNode.implementation !== p.implementation
      ? ((d = ts(p, f.mode, v)), (d.return = f), d)
      : ((d = l(d, p.children || [])), (d.return = f), d);
  }
  function h(f, d, p, v, k) {
    return d === null || d.tag !== 7
      ? ((d = At(p, f.mode, v, k)), (d.return = f), d)
      : ((d = l(d, p)), (d.return = f), d);
  }
  function x(f, d, p) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return ((d = es("" + d, f.mode, p)), (d.return = f), d);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case hr:
          return (
            (p = Qr(d.type, d.key, d.props, null, f.mode, p)),
            (p.ref = Cn(f, null, d)),
            (p.return = f),
            p
          );
        case Qt:
          return ((d = ts(d, f.mode, p)), (d.return = f), d);
        case it:
          var v = d._init;
          return x(f, v(d._payload), p);
      }
      if (_n(d) || jn(d))
        return ((d = At(d, f.mode, p, null)), (d.return = f), d);
      Cr(f, d);
    }
    return null;
  }
  function m(f, d, p, v) {
    var k = d !== null ? d.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return k !== null ? null : o(f, d, "" + p, v);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case hr:
          return p.key === k ? c(f, d, p, v) : null;
        case Qt:
          return p.key === k ? u(f, d, p, v) : null;
        case it:
          return ((k = p._init), m(f, d, k(p._payload), v));
      }
      if (_n(p) || jn(p)) return k !== null ? null : h(f, d, p, v, null);
      Cr(f, p);
    }
    return null;
  }
  function y(f, d, p, v, k) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return ((f = f.get(p) || null), o(d, f, "" + v, k));
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case hr:
          return (
            (f = f.get(v.key === null ? p : v.key) || null),
            c(d, f, v, k)
          );
        case Qt:
          return (
            (f = f.get(v.key === null ? p : v.key) || null),
            u(d, f, v, k)
          );
        case it:
          var C = v._init;
          return y(f, d, p, C(v._payload), k);
      }
      if (_n(v) || jn(v)) return ((f = f.get(p) || null), h(d, f, v, k, null));
      Cr(d, v);
    }
    return null;
  }
  function j(f, d, p, v) {
    for (
      var k = null, C = null, T = d, z = (d = 0), U = null;
      T !== null && z < p.length;
      z++
    ) {
      T.index > z ? ((U = T), (T = null)) : (U = T.sibling);
      var P = m(f, T, p[z], v);
      if (P === null) {
        T === null && (T = U);
        break;
      }
      (e && T && P.alternate === null && t(f, T),
        (d = i(P, d, z)),
        C === null ? (k = P) : (C.sibling = P),
        (C = P),
        (T = U));
    }
    if (z === p.length) return (n(f, T), Q && Tt(f, z), k);
    if (T === null) {
      for (; z < p.length; z++)
        ((T = x(f, p[z], v)),
          T !== null &&
            ((d = i(T, d, z)),
            C === null ? (k = T) : (C.sibling = T),
            (C = T)));
      return (Q && Tt(f, z), k);
    }
    for (T = r(f, T); z < p.length; z++)
      ((U = y(T, f, z, p[z], v)),
        U !== null &&
          (e && U.alternate !== null && T.delete(U.key === null ? z : U.key),
          (d = i(U, d, z)),
          C === null ? (k = U) : (C.sibling = U),
          (C = U)));
    return (
      e &&
        T.forEach(function (ye) {
          return t(f, ye);
        }),
      Q && Tt(f, z),
      k
    );
  }
  function N(f, d, p, v) {
    var k = jn(p);
    if (typeof k != "function") throw Error(w(150));
    if (((p = k.call(p)), p == null)) throw Error(w(151));
    for (
      var C = (k = null), T = d, z = (d = 0), U = null, P = p.next();
      T !== null && !P.done;
      z++, P = p.next()
    ) {
      T.index > z ? ((U = T), (T = null)) : (U = T.sibling);
      var ye = m(f, T, P.value, v);
      if (ye === null) {
        T === null && (T = U);
        break;
      }
      (e && T && ye.alternate === null && t(f, T),
        (d = i(ye, d, z)),
        C === null ? (k = ye) : (C.sibling = ye),
        (C = ye),
        (T = U));
    }
    if (P.done) return (n(f, T), Q && Tt(f, z), k);
    if (T === null) {
      for (; !P.done; z++, P = p.next())
        ((P = x(f, P.value, v)),
          P !== null &&
            ((d = i(P, d, z)),
            C === null ? (k = P) : (C.sibling = P),
            (C = P)));
      return (Q && Tt(f, z), k);
    }
    for (T = r(f, T); !P.done; z++, P = p.next())
      ((P = y(T, f, z, P.value, v)),
        P !== null &&
          (e && P.alternate !== null && T.delete(P.key === null ? z : P.key),
          (d = i(P, d, z)),
          C === null ? (k = P) : (C.sibling = P),
          (C = P)));
    return (
      e &&
        T.forEach(function (Pe) {
          return t(f, Pe);
        }),
      Q && Tt(f, z),
      k
    );
  }
  function I(f, d, p, v) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Ut &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case hr:
          e: {
            for (var k = p.key, C = d; C !== null; ) {
              if (C.key === k) {
                if (((k = p.type), k === Ut)) {
                  if (C.tag === 7) {
                    (n(f, C.sibling),
                      (d = l(C, p.props.children)),
                      (d.return = f),
                      (f = d));
                    break e;
                  }
                } else if (
                  C.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === it &&
                    Ca(k) === C.type)
                ) {
                  (n(f, C.sibling),
                    (d = l(C, p.props)),
                    (d.ref = Cn(f, C, p)),
                    (d.return = f),
                    (f = d));
                  break e;
                }
                n(f, C);
                break;
              } else t(f, C);
              C = C.sibling;
            }
            p.type === Ut
              ? ((d = At(p.props.children, f.mode, v, p.key)),
                (d.return = f),
                (f = d))
              : ((v = Qr(p.type, p.key, p.props, null, f.mode, v)),
                (v.ref = Cn(f, d, p)),
                (v.return = f),
                (f = v));
          }
          return a(f);
        case Qt:
          e: {
            for (C = p.key; d !== null; ) {
              if (d.key === C)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === p.containerInfo &&
                  d.stateNode.implementation === p.implementation
                ) {
                  (n(f, d.sibling),
                    (d = l(d, p.children || [])),
                    (d.return = f),
                    (f = d));
                  break e;
                } else {
                  n(f, d);
                  break;
                }
              else t(f, d);
              d = d.sibling;
            }
            ((d = ts(p, f.mode, v)), (d.return = f), (f = d));
          }
          return a(f);
        case it:
          return ((C = p._init), I(f, d, C(p._payload), v));
      }
      if (_n(p)) return j(f, d, p, v);
      if (jn(p)) return N(f, d, p, v);
      Cr(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        d !== null && d.tag === 6
          ? (n(f, d.sibling), (d = l(d, p)), (d.return = f), (f = d))
          : (n(f, d), (d = es(p, f.mode, v)), (d.return = f), (f = d)),
        a(f))
      : n(f, d);
  }
  return I;
}
var un = pc(!0),
  mc = pc(!1),
  nl = kt(null),
  rl = null,
  Yt = null,
  yi = null;
function vi() {
  yi = Yt = rl = null;
}
function wi(e) {
  var t = nl.current;
  ($(nl), (e._currentValue = t));
}
function Ls(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ln(e, t) {
  ((rl = e),
    (yi = Yt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (me = !0), (e.firstContext = null)));
}
function Ee(e) {
  var t = e._currentValue;
  if (yi !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Yt === null)) {
      if (rl === null) throw Error(w(308));
      ((Yt = e), (rl.dependencies = { lanes: 0, firstContext: e }));
    } else Yt = Yt.next = e;
  return t;
}
var _t = null;
function ji(e) {
  _t === null ? (_t = [e]) : _t.push(e);
}
function hc(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), ji(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ze(e, r)
  );
}
function Ze(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var at = !1;
function Ni(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function xc(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function Xe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function xt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ze(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), ji(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ze(e, n)
  );
}
function Or(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ai(e, n));
  }
}
function Ta(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (i === null ? (l = i = a) : (i = i.next = a), (n = n.next));
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function ll(e, t, n, r) {
  var l = e.updateQueue;
  at = !1;
  var i = l.firstBaseUpdate,
    a = l.lastBaseUpdate,
    o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var c = o,
      u = c.next;
    ((c.next = null), a === null ? (i = u) : (a.next = u), (a = c));
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (o = h.lastBaseUpdate),
      o !== a &&
        (o === null ? (h.firstBaseUpdate = u) : (o.next = u),
        (h.lastBaseUpdate = c)));
  }
  if (i !== null) {
    var x = l.baseState;
    ((a = 0), (h = u = c = null), (o = i));
    do {
      var m = o.lane,
        y = o.eventTime;
      if ((r & m) === m) {
        h !== null &&
          (h = h.next =
            {
              eventTime: y,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var j = e,
            N = o;
          switch (((m = t), (y = n), N.tag)) {
            case 1:
              if (((j = N.payload), typeof j == "function")) {
                x = j.call(y, x, m);
                break e;
              }
              x = j;
              break e;
            case 3:
              j.flags = (j.flags & -65537) | 128;
            case 0:
              if (
                ((j = N.payload),
                (m = typeof j == "function" ? j.call(y, x, m) : j),
                m == null)
              )
                break e;
              x = W({}, x, m);
              break e;
            case 2:
              at = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [o]) : m.push(o));
      } else
        ((y = {
          eventTime: y,
          lane: m,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          h === null ? ((u = h = y), (c = x)) : (h = h.next = y),
          (a |= m));
      if (((o = o.next), o === null)) {
        if (((o = l.shared.pending), o === null)) break;
        ((m = o),
          (o = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null));
      }
    } while (!0);
    if (
      (h === null && (c = x),
      (l.baseState = c),
      (l.firstBaseUpdate = u),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do ((a |= l.lane), (l = l.next));
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    ((Dt |= a), (e.lanes = a), (e.memoizedState = x));
  }
}
function za(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(w(191, l));
        l.call(r);
      }
    }
}
var cr = {},
  He = kt(cr),
  Zn = kt(cr),
  er = kt(cr);
function Pt(e) {
  if (e === cr) throw Error(w(174));
  return e;
}
function ki(e, t) {
  switch ((R(er, t), R(Zn, e), R(He, cr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : fs(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = fs(t, e)));
  }
  ($(He), R(He, t));
}
function dn() {
  ($(He), $(Zn), $(er));
}
function gc(e) {
  Pt(er.current);
  var t = Pt(He.current),
    n = fs(t, e.type);
  t !== n && (R(Zn, e), R(He, n));
}
function bi(e) {
  Zn.current === e && ($(He), $(Zn));
}
var H = kt(0);
function sl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var Gl = [];
function Si() {
  for (var e = 0; e < Gl.length; e++)
    Gl[e]._workInProgressVersionPrimary = null;
  Gl.length = 0;
}
var Dr = nt.ReactCurrentDispatcher,
  ql = nt.ReactCurrentBatchConfig,
  Ot = 0,
  V = null,
  J = null,
  ee = null,
  il = !1,
  Rn = !1,
  tr = 0,
  pf = 0;
function se() {
  throw Error(w(321));
}
function Ci(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Fe(e[n], t[n])) return !1;
  return !0;
}
function Ti(e, t, n, r, l, i) {
  if (
    ((Ot = i),
    (V = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Dr.current = e === null || e.memoizedState === null ? gf : yf),
    (e = n(r, l)),
    Rn)
  ) {
    i = 0;
    do {
      if (((Rn = !1), (tr = 0), 25 <= i)) throw Error(w(301));
      ((i += 1),
        (ee = J = null),
        (t.updateQueue = null),
        (Dr.current = vf),
        (e = n(r, l)));
    } while (Rn);
  }
  if (
    ((Dr.current = al),
    (t = J !== null && J.next !== null),
    (Ot = 0),
    (ee = J = V = null),
    (il = !1),
    t)
  )
    throw Error(w(300));
  return e;
}
function zi() {
  var e = tr !== 0;
  return ((tr = 0), e);
}
function $e() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (ee === null ? (V.memoizedState = ee = e) : (ee = ee.next = e), ee);
}
function _e() {
  if (J === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = J.next;
  var t = ee === null ? V.memoizedState : ee.next;
  if (t !== null) ((ee = t), (J = e));
  else {
    if (e === null) throw Error(w(310));
    ((J = e),
      (e = {
        memoizedState: J.memoizedState,
        baseState: J.baseState,
        baseQueue: J.baseQueue,
        queue: J.queue,
        next: null,
      }),
      ee === null ? (V.memoizedState = ee = e) : (ee = ee.next = e));
  }
  return ee;
}
function nr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Xl(e) {
  var t = _e(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = J,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var a = l.next;
      ((l.next = i.next), (i.next = a));
    }
    ((r.baseQueue = l = i), (n.pending = null));
  }
  if (l !== null) {
    ((i = l.next), (r = r.baseState));
    var o = (a = null),
      c = null,
      u = i;
    do {
      var h = u.lane;
      if ((Ot & h) === h)
        (c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var x = {
          lane: h,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (c === null ? ((o = c = x), (a = r)) : (c = c.next = x),
          (V.lanes |= h),
          (Dt |= h));
      }
      u = u.next;
    } while (u !== null && u !== i);
    (c === null ? (a = r) : (c.next = o),
      Fe(r, t.memoizedState) || (me = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = c),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do ((i = l.lane), (V.lanes |= i), (Dt |= i), (l = l.next));
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Yl(e) {
  var t = _e(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var a = (l = l.next);
    do ((i = e(i, a.action)), (a = a.next));
    while (a !== l);
    (Fe(i, t.memoizedState) || (me = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i));
  }
  return [i, r];
}
function yc() {}
function vc(e, t) {
  var n = V,
    r = _e(),
    l = t(),
    i = !Fe(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (me = !0)),
    (r = r.queue),
    Ei(Nc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ee !== null && ee.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      rr(9, jc.bind(null, n, r, l, t), void 0, null),
      te === null)
    )
      throw Error(w(349));
    Ot & 30 || wc(n, t, l);
  }
  return l;
}
function wc(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function jc(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), kc(t) && bc(e));
}
function Nc(e, t, n) {
  return n(function () {
    kc(t) && bc(e);
  });
}
function kc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Fe(e, n);
  } catch {
    return !0;
  }
}
function bc(e) {
  var t = Ze(e, 1);
  t !== null && Re(t, e, 1, -1);
}
function Ea(e) {
  var t = $e();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: nr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = xf.bind(null, V, e)),
    [t.memoizedState, e]
  );
}
function rr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Sc() {
  return _e().memoizedState;
}
function Rr(e, t, n, r) {
  var l = $e();
  ((V.flags |= e),
    (l.memoizedState = rr(1 | t, n, void 0, r === void 0 ? null : r)));
}
function wl(e, t, n, r) {
  var l = _e();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (J !== null) {
    var a = J.memoizedState;
    if (((i = a.destroy), r !== null && Ci(r, a.deps))) {
      l.memoizedState = rr(t, n, i, r);
      return;
    }
  }
  ((V.flags |= e), (l.memoizedState = rr(1 | t, n, i, r)));
}
function _a(e, t) {
  return Rr(8390656, 8, e, t);
}
function Ei(e, t) {
  return wl(2048, 8, e, t);
}
function Cc(e, t) {
  return wl(4, 2, e, t);
}
function Tc(e, t) {
  return wl(4, 4, e, t);
}
function zc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ec(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    wl(4, 4, zc.bind(null, t, e), n)
  );
}
function _i() {}
function _c(e, t) {
  var n = _e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ci(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Pc(e, t) {
  var n = _e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ci(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Lc(e, t, n) {
  return Ot & 21
    ? (Fe(n, t) || ((n = Do()), (V.lanes |= n), (Dt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (me = !0)), (e.memoizedState = n));
}
function mf(e, t) {
  var n = O;
  ((O = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = ql.transition;
  ql.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((O = n), (ql.transition = r));
  }
}
function Ac() {
  return _e().memoizedState;
}
function hf(e, t, n) {
  var r = yt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Mc(e))
  )
    Ic(t, n);
  else if (((n = hc(e, t, n, r)), n !== null)) {
    var l = ue();
    (Re(n, e, r, l), Oc(n, t, r));
  }
}
function xf(e, t, n) {
  var r = yt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Mc(e)) Ic(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          o = i(a, n);
        if (((l.hasEagerState = !0), (l.eagerState = o), Fe(o, a))) {
          var c = t.interleaved;
          (c === null
            ? ((l.next = l), ji(t))
            : ((l.next = c.next), (c.next = l)),
            (t.interleaved = l));
          return;
        }
      } catch {
      } finally {
      }
    ((n = hc(e, t, l, r)),
      n !== null && ((l = ue()), Re(n, e, r, l), Oc(n, t, r)));
  }
}
function Mc(e) {
  var t = e.alternate;
  return e === V || (t !== null && t === V);
}
function Ic(e, t) {
  Rn = il = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Oc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ai(e, n));
  }
}
var al = {
    readContext: Ee,
    useCallback: se,
    useContext: se,
    useEffect: se,
    useImperativeHandle: se,
    useInsertionEffect: se,
    useLayoutEffect: se,
    useMemo: se,
    useReducer: se,
    useRef: se,
    useState: se,
    useDebugValue: se,
    useDeferredValue: se,
    useTransition: se,
    useMutableSource: se,
    useSyncExternalStore: se,
    useId: se,
    unstable_isNewReconciler: !1,
  },
  gf = {
    readContext: Ee,
    useCallback: function (e, t) {
      return (($e().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Ee,
    useEffect: _a,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Rr(4194308, 4, zc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Rr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Rr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = $e();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = $e();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = hf.bind(null, V, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = $e();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Ea,
    useDebugValue: _i,
    useDeferredValue: function (e) {
      return ($e().memoizedState = e);
    },
    useTransition: function () {
      var e = Ea(!1),
        t = e[0];
      return ((e = mf.bind(null, e[1])), ($e().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = V,
        l = $e();
      if (Q) {
        if (n === void 0) throw Error(w(407));
        n = n();
      } else {
        if (((n = t()), te === null)) throw Error(w(349));
        Ot & 30 || wc(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        _a(Nc.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        rr(9, jc.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = $e(),
        t = te.identifierPrefix;
      if (Q) {
        var n = qe,
          r = Ge;
        ((n = (r & ~(1 << (32 - De(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = tr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = pf++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  yf = {
    readContext: Ee,
    useCallback: _c,
    useContext: Ee,
    useEffect: Ei,
    useImperativeHandle: Ec,
    useInsertionEffect: Cc,
    useLayoutEffect: Tc,
    useMemo: Pc,
    useReducer: Xl,
    useRef: Sc,
    useState: function () {
      return Xl(nr);
    },
    useDebugValue: _i,
    useDeferredValue: function (e) {
      var t = _e();
      return Lc(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = Xl(nr)[0],
        t = _e().memoizedState;
      return [e, t];
    },
    useMutableSource: yc,
    useSyncExternalStore: vc,
    useId: Ac,
    unstable_isNewReconciler: !1,
  },
  vf = {
    readContext: Ee,
    useCallback: _c,
    useContext: Ee,
    useEffect: Ei,
    useImperativeHandle: Ec,
    useInsertionEffect: Cc,
    useLayoutEffect: Tc,
    useMemo: Pc,
    useReducer: Yl,
    useRef: Sc,
    useState: function () {
      return Yl(nr);
    },
    useDebugValue: _i,
    useDeferredValue: function (e) {
      var t = _e();
      return J === null ? (t.memoizedState = e) : Lc(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = Yl(nr)[0],
        t = _e().memoizedState;
      return [e, t];
    },
    useMutableSource: yc,
    useSyncExternalStore: vc,
    useId: Ac,
    unstable_isNewReconciler: !1,
  };
function Me(e, t) {
  if (e && e.defaultProps) {
    ((t = W({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function As(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : W({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var jl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Bt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = yt(e),
      i = Xe(r, l);
    ((i.payload = t),
      n != null && (i.callback = n),
      (t = xt(e, i, l)),
      t !== null && (Re(t, e, l, r), Or(t, e, l)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = yt(e),
      i = Xe(r, l);
    ((i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = xt(e, i, l)),
      t !== null && (Re(t, e, l, r), Or(t, e, l)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ue(),
      r = yt(e),
      l = Xe(n, r);
    ((l.tag = 2),
      t != null && (l.callback = t),
      (t = xt(e, l, r)),
      t !== null && (Re(t, e, r, n), Or(t, e, r)));
  },
};
function Pa(e, t, n, r, l, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, a)
      : t.prototype && t.prototype.isPureReactComponent
        ? !qn(n, r) || !qn(l, i)
        : !0
  );
}
function Dc(e, t, n) {
  var r = !1,
    l = jt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ee(i))
      : ((l = xe(t) ? Mt : oe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? on(e, l) : jt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = jl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function La(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && jl.enqueueReplaceState(t, t.state, null));
}
function Ms(e, t, n, r) {
  var l = e.stateNode;
  ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ni(e));
  var i = t.contextType;
  (typeof i == "object" && i !== null
    ? (l.context = Ee(i))
    : ((i = xe(t) ? Mt : oe.current), (l.context = on(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (As(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && jl.enqueueReplaceState(l, l.state, null),
      ll(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308));
}
function fn(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += Wu(r)), (r = r.return));
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Jl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Is(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var wf = typeof WeakMap == "function" ? WeakMap : Map;
function Rc(e, t, n) {
  ((n = Xe(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (cl || ((cl = !0), (Vs = r)), Is(e, t));
    }),
    n
  );
}
function Fc(e, t, n) {
  ((n = Xe(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    ((n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Is(e, t);
      }));
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        (Is(e, t),
          typeof r != "function" &&
            (gt === null ? (gt = new Set([this])) : gt.add(this)));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function Aa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new wf();
    var l = new Set();
    r.set(t, l);
  } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
  l.has(n) || (l.add(n), (e = Mf.bind(null, e, t, n)), t.then(e, e));
}
function Ma(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ia(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Xe(-1, 1)), (t.tag = 2), xt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var jf = nt.ReactCurrentOwner,
  me = !1;
function ce(e, t, n, r) {
  t.child = e === null ? mc(t, null, n, r) : un(t, e.child, n, r);
}
function Oa(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    ln(t, l),
    (r = Ti(e, t, n, r, i, l)),
    (n = zi()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        et(e, t, l))
      : (Q && n && hi(t), (t.flags |= 1), ce(e, t, r, l), t.child)
  );
}
function Da(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Ri(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Bc(e, t, i, r, l))
      : ((e = Qr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var a = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : qn), n(a, r) && e.ref === t.ref)
    )
      return et(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = vt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Bc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (qn(i, r) && e.ref === t.ref)
      if (((me = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (me = !0);
      else return ((t.lanes = e.lanes), et(e, t, l));
  }
  return Os(e, t, n, r, l);
}
function $c(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        R(Zt, ve),
        (ve |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          R(Zt, ve),
          (ve |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        R(Zt, ve),
        (ve |= r));
    }
  else
    (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      R(Zt, ve),
      (ve |= r));
  return (ce(e, t, l, n), t.child);
}
function Qc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Os(e, t, n, r, l) {
  var i = xe(n) ? Mt : oe.current;
  return (
    (i = on(t, i)),
    ln(t, l),
    (n = Ti(e, t, n, r, i, l)),
    (r = zi()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        et(e, t, l))
      : (Q && r && hi(t), (t.flags |= 1), ce(e, t, n, l), t.child)
  );
}
function Ra(e, t, n, r, l) {
  if (xe(n)) {
    var i = !0;
    Zr(t);
  } else i = !1;
  if ((ln(t, l), t.stateNode === null))
    (Fr(e, t), Dc(t, n, r), Ms(t, n, r, l), (r = !0));
  else if (e === null) {
    var a = t.stateNode,
      o = t.memoizedProps;
    a.props = o;
    var c = a.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ee(u))
      : ((u = xe(n) ? Mt : oe.current), (u = on(t, u)));
    var h = n.getDerivedStateFromProps,
      x =
        typeof h == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    (x ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((o !== r || c !== u) && La(t, a, r, u)),
      (at = !1));
    var m = t.memoizedState;
    ((a.state = m),
      ll(t, r, a, l),
      (c = t.memoizedState),
      o !== r || m !== c || he.current || at
        ? (typeof h == "function" && (As(t, n, h, r), (c = t.memoizedState)),
          (o = at || Pa(t, n, o, r, m, c, u))
            ? (x ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = c)),
          (a.props = r),
          (a.state = c),
          (a.context = u),
          (r = o))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((a = t.stateNode),
      xc(e, t),
      (o = t.memoizedProps),
      (u = t.type === t.elementType ? o : Me(t.type, o)),
      (a.props = u),
      (x = t.pendingProps),
      (m = a.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = Ee(c))
        : ((c = xe(n) ? Mt : oe.current), (c = on(t, c))));
    var y = n.getDerivedStateFromProps;
    ((h =
      typeof y == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((o !== x || m !== c) && La(t, a, r, c)),
      (at = !1),
      (m = t.memoizedState),
      (a.state = m),
      ll(t, r, a, l));
    var j = t.memoizedState;
    o !== x || m !== j || he.current || at
      ? (typeof y == "function" && (As(t, n, y, r), (j = t.memoizedState)),
        (u = at || Pa(t, n, u, r, m, j, c) || !1)
          ? (h ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, j, c),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, j, c)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (o === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = j)),
        (a.props = r),
        (a.state = j),
        (a.context = c),
        (r = u))
      : (typeof a.componentDidUpdate != "function" ||
          (o === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ds(e, t, n, r, i, l);
}
function Ds(e, t, n, r, l, i) {
  Qc(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return (l && ka(t, n, !1), et(e, t, i));
  ((r = t.stateNode), (jf.current = t));
  var o =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = un(t, e.child, null, i)), (t.child = un(t, null, o, i)))
      : ce(e, t, o, i),
    (t.memoizedState = r.state),
    l && ka(t, n, !0),
    t.child
  );
}
function Uc(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Na(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Na(e, t.context, !1),
    ki(e, t.containerInfo));
}
function Fa(e, t, n, r, l) {
  return (cn(), gi(l), (t.flags |= 256), ce(e, t, n, r), t.child);
}
var Rs = { dehydrated: null, treeContext: null, retryLane: 0 };
function Fs(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Hc(e, t, n) {
  var r = t.pendingProps,
    l = H.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    o;
  if (
    ((o = a) ||
      (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    o
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    R(H, l & 1),
    e === null)
  )
    return (
      Ps(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = bl(a, r, 0, null)),
              (e = At(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Fs(n)),
              (t.memoizedState = Rs),
              e)
            : Pi(t, a))
    );
  if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
    return Nf(e, t, a, r, o, l, n);
  if (i) {
    ((i = r.fallback), (a = t.mode), (l = e.child), (o = l.sibling));
    var c = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = c),
          (t.deletions = null))
        : ((r = vt(l, c)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      o !== null ? (i = vt(o, i)) : ((i = At(i, a, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Fs(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Rs),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = vt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Pi(e, t) {
  return (
    (t = bl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Tr(e, t, n, r) {
  return (
    r !== null && gi(r),
    un(t, e.child, null, n),
    (e = Pi(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Nf(e, t, n, r, l, i, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Jl(Error(w(422)))), Tr(e, t, a, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (l = t.mode),
          (r = bl({ mode: "visible", children: r.children }, l, 0, null)),
          (i = At(i, l, a, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && un(t, e.child, null, a),
          (t.child.memoizedState = Fs(a)),
          (t.memoizedState = Rs),
          i);
  if (!(t.mode & 1)) return Tr(e, t, a, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var o = r.dgst;
    return (
      (r = o),
      (i = Error(w(419))),
      (r = Jl(i, r, void 0)),
      Tr(e, t, a, r)
    );
  }
  if (((o = (a & e.childLanes) !== 0), me || o)) {
    if (((r = te), r !== null)) {
      switch (a & -a) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      ((l = l & (r.suspendedLanes | a) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Ze(e, l), Re(r, e, l, -1)));
    }
    return (Di(), (r = Jl(Error(w(421)))), Tr(e, t, a, r));
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = If.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (we = ht(l.nextSibling)),
      (je = t),
      (Q = !0),
      (Oe = null),
      e !== null &&
        ((Se[Ce++] = Ge),
        (Se[Ce++] = qe),
        (Se[Ce++] = It),
        (Ge = e.id),
        (qe = e.overflow),
        (It = t)),
      (t = Pi(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ba(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Ls(e.return, t, n));
}
function Zl(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Vc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ce(e, t, r.children, n), (r = H.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ba(e, n, t);
        else if (e.tag === 19) Ba(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((R(H, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          ((e = n.alternate),
            e !== null && sl(e) === null && (l = n),
            (n = n.sibling));
        ((n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Zl(t, !1, l, n, i));
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && sl(e) === null)) {
            t.child = l;
            break;
          }
          ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
        }
        Zl(t, !0, n, null, i);
        break;
      case "together":
        Zl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Fr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function et(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Dt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(w(153));
  if (t.child !== null) {
    for (
      e = t.child, n = vt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = vt(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function kf(e, t, n) {
  switch (t.tag) {
    case 3:
      (Uc(t), cn());
      break;
    case 5:
      gc(t);
      break;
    case 1:
      xe(t.type) && Zr(t);
      break;
    case 4:
      ki(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      (R(nl, r._currentValue), (r._currentValue = l));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (R(H, H.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Hc(e, t, n)
            : (R(H, H.current & 1),
              (e = et(e, t, n)),
              e !== null ? e.sibling : null);
      R(H, H.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Vc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        R(H, H.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), $c(e, t, n));
  }
  return et(e, t, n);
}
var Wc, Bs, Kc, Gc;
Wc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
Bs = function () {};
Kc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    ((e = t.stateNode), Pt(He.current));
    var i = null;
    switch (n) {
      case "input":
        ((l = os(e, l)), (r = os(e, r)), (i = []));
        break;
      case "select":
        ((l = W({}, l, { value: void 0 })),
          (r = W({}, r, { value: void 0 })),
          (i = []));
        break;
      case "textarea":
        ((l = ds(e, l)), (r = ds(e, r)), (i = []));
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Yr);
    }
    ps(n, r);
    var a;
    n = null;
    for (u in l)
      if (!r.hasOwnProperty(u) && l.hasOwnProperty(u) && l[u] != null)
        if (u === "style") {
          var o = l[u];
          for (a in o) o.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Qn.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var c = r[u];
      if (
        ((o = l != null ? l[u] : void 0),
        r.hasOwnProperty(u) && c !== o && (c != null || o != null))
      )
        if (u === "style")
          if (o) {
            for (a in o)
              !o.hasOwnProperty(a) ||
                (c && c.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in c)
              c.hasOwnProperty(a) &&
                o[a] !== c[a] &&
                (n || (n = {}), (n[a] = c[a]));
          } else (n || (i || (i = []), i.push(u, n)), (n = c));
        else
          u === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (o = o ? o.__html : void 0),
              c != null && o !== c && (i = i || []).push(u, c))
            : u === "children"
              ? (typeof c != "string" && typeof c != "number") ||
                (i = i || []).push(u, "" + c)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Qn.hasOwnProperty(u)
                  ? (c != null && u === "onScroll" && B("scroll", e),
                    i || o === c || (i = []))
                  : (i = i || []).push(u, c));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Gc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Tn(e, t) {
  if (!Q)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ie(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      ((n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling));
  else
    for (l = e.child; l !== null; )
      ((n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function bf(e, t, n) {
  var r = t.pendingProps;
  switch ((xi(t), t.tag)) {
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
      return (ie(t), null);
    case 1:
      return (xe(t.type) && Jr(), ie(t), null);
    case 3:
      return (
        (r = t.stateNode),
        dn(),
        $(he),
        $(oe),
        Si(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Sr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Oe !== null && (Gs(Oe), (Oe = null)))),
        Bs(e, t),
        ie(t),
        null
      );
    case 5:
      bi(t);
      var l = Pt(er.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Kc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(w(166));
          return (ie(t), null);
        }
        if (((e = Pt(He.current)), Sr(t))) {
          ((r = t.stateNode), (n = t.type));
          var i = t.memoizedProps;
          switch (((r[Qe] = t), (r[Jn] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (B("cancel", r), B("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Ln.length; l++) B(Ln[l], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (B("error", r), B("load", r));
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              (qi(r, i), B("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!i.multiple }),
                B("invalid", r));
              break;
            case "textarea":
              (Yi(r, i), B("invalid", r));
          }
          (ps(n, i), (l = null));
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var o = i[a];
              a === "children"
                ? typeof o == "string"
                  ? r.textContent !== o &&
                    (i.suppressHydrationWarning !== !0 &&
                      br(r.textContent, o, e),
                    (l = ["children", o]))
                  : typeof o == "number" &&
                    r.textContent !== "" + o &&
                    (i.suppressHydrationWarning !== !0 &&
                      br(r.textContent, o, e),
                    (l = ["children", "" + o]))
                : Qn.hasOwnProperty(a) &&
                  o != null &&
                  a === "onScroll" &&
                  B("scroll", r);
            }
          switch (n) {
            case "input":
              (xr(r), Xi(r, i, !0));
              break;
            case "textarea":
              (xr(r), Ji(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Yr);
          }
          ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((a = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = No(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = a.createElement(n, { is: r.is }))
                  : ((e = a.createElement(n)),
                    n === "select" &&
                      ((a = e),
                      r.multiple
                        ? (a.multiple = !0)
                        : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[Qe] = t),
            (e[Jn] = r),
            Wc(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((a = ms(n, r)), n)) {
              case "dialog":
                (B("cancel", e), B("close", e), (l = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (B("load", e), (l = r));
                break;
              case "video":
              case "audio":
                for (l = 0; l < Ln.length; l++) B(Ln[l], e);
                l = r;
                break;
              case "source":
                (B("error", e), (l = r));
                break;
              case "img":
              case "image":
              case "link":
                (B("error", e), B("load", e), (l = r));
                break;
              case "details":
                (B("toggle", e), (l = r));
                break;
              case "input":
                (qi(e, r), (l = os(e, r)), B("invalid", e));
                break;
              case "option":
                l = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = W({}, r, { value: void 0 })),
                  B("invalid", e));
                break;
              case "textarea":
                (Yi(e, r), (l = ds(e, r)), B("invalid", e));
                break;
              default:
                l = r;
            }
            (ps(n, l), (o = l));
            for (i in o)
              if (o.hasOwnProperty(i)) {
                var c = o[i];
                i === "style"
                  ? So(e, c)
                  : i === "dangerouslySetInnerHTML"
                    ? ((c = c ? c.__html : void 0), c != null && ko(e, c))
                    : i === "children"
                      ? typeof c == "string"
                        ? (n !== "textarea" || c !== "") && Un(e, c)
                        : typeof c == "number" && Un(e, "" + c)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (Qn.hasOwnProperty(i)
                          ? c != null && i === "onScroll" && B("scroll", e)
                          : c != null && ti(e, i, c, a));
              }
            switch (n) {
              case "input":
                (xr(e), Xi(e, r, !1));
                break;
              case "textarea":
                (xr(e), Ji(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + wt(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? en(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      en(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Yr);
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
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (ie(t), null);
    case 6:
      if (e && t.stateNode != null) Gc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(w(166));
        if (((n = Pt(er.current)), Pt(He.current), Sr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Qe] = t),
            (i = r.nodeValue !== n) && ((e = je), e !== null))
          )
            switch (e.tag) {
              case 3:
                br(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  br(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Qe] = t),
            (t.stateNode = r));
      }
      return (ie(t), null);
    case 13:
      if (
        ($(H),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Q && we !== null && t.mode & 1 && !(t.flags & 128))
          (fc(), cn(), (t.flags |= 98560), (i = !1));
        else if (((i = Sr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(w(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(w(317));
            i[Qe] = t;
          } else
            (cn(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (ie(t), (i = !1));
        } else (Oe !== null && (Gs(Oe), (Oe = null)), (i = !0));
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || H.current & 1 ? Z === 0 && (Z = 3) : Di())),
          t.updateQueue !== null && (t.flags |= 4),
          ie(t),
          null);
    case 4:
      return (
        dn(),
        Bs(e, t),
        e === null && Xn(t.stateNode.containerInfo),
        ie(t),
        null
      );
    case 10:
      return (wi(t.type._context), ie(t), null);
    case 17:
      return (xe(t.type) && Jr(), ie(t), null);
    case 19:
      if (($(H), (i = t.memoizedState), i === null)) return (ie(t), null);
      if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (r) Tn(i, !1);
        else {
          if (Z !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = sl(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Tn(i, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (R(H, (H.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          i.tail !== null &&
            q() > pn &&
            ((t.flags |= 128), (r = !0), Tn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = sl(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Tn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !Q)
            )
              return (ie(t), null);
          } else
            2 * q() - i.renderingStartTime > pn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Tn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = q()),
          (t.sibling = null),
          (n = H.current),
          R(H, r ? (n & 1) | 2 : n & 1),
          t)
        : (ie(t), null);
    case 22:
    case 23:
      return (
        Oi(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ve & 1073741824 && (ie(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ie(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(w(156, t.tag));
}
function Sf(e, t) {
  switch ((xi(t), t.tag)) {
    case 1:
      return (
        xe(t.type) && Jr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        dn(),
        $(he),
        $(oe),
        Si(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (bi(t), null);
    case 13:
      if (($(H), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(w(340));
        cn();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ($(H), null);
    case 4:
      return (dn(), null);
    case 10:
      return (wi(t.type._context), null);
    case 22:
    case 23:
      return (Oi(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var zr = !1,
  ae = !1,
  Cf = typeof WeakSet == "function" ? WeakSet : Set,
  S = null;
function Jt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        G(e, t, r);
      }
    else n.current = null;
}
function $s(e, t, n) {
  try {
    n();
  } catch (r) {
    G(e, t, r);
  }
}
var $a = !1;
function Tf(e, t) {
  if (((bs = Gr), (e = Zo()), mi(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, i.nodeType);
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            o = -1,
            c = -1,
            u = 0,
            h = 0,
            x = e,
            m = null;
          t: for (;;) {
            for (
              var y;
              x !== n || (l !== 0 && x.nodeType !== 3) || (o = a + l),
                x !== i || (r !== 0 && x.nodeType !== 3) || (c = a + r),
                x.nodeType === 3 && (a += x.nodeValue.length),
                (y = x.firstChild) !== null;
            )
              ((m = x), (x = y));
            for (;;) {
              if (x === e) break t;
              if (
                (m === n && ++u === l && (o = a),
                m === i && ++h === r && (c = a),
                (y = x.nextSibling) !== null)
              )
                break;
              ((x = m), (m = x.parentNode));
            }
            x = y;
          }
          n = o === -1 || c === -1 ? null : { start: o, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ss = { focusedElem: e, selectionRange: n }, Gr = !1, S = t; S !== null; )
    if (((t = S), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (S = e));
    else
      for (; S !== null; ) {
        t = S;
        try {
          var j = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (j !== null) {
                  var N = j.memoizedProps,
                    I = j.memoizedState,
                    f = t.stateNode,
                    d = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? N : Me(t.type, N),
                      I,
                    );
                  f.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(w(163));
            }
        } catch (v) {
          G(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (S = e));
          break;
        }
        S = t.return;
      }
  return ((j = $a), ($a = !1), j);
}
function Fn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        ((l.destroy = void 0), i !== void 0 && $s(t, n, i));
      }
      l = l.next;
    } while (l !== r);
  }
}
function Nl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Qs(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function qc(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), qc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Qe], delete t[Jn], delete t[zs], delete t[cf], delete t[uf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Xc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Qa(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Xc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Us(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Yr)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Us(e, t, n), e = e.sibling; e !== null; )
      (Us(e, t, n), (e = e.sibling));
}
function Hs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Hs(e, t, n), e = e.sibling; e !== null; )
      (Hs(e, t, n), (e = e.sibling));
}
var ne = null,
  Ie = !1;
function st(e, t, n) {
  for (n = n.child; n !== null; ) (Yc(e, t, n), (n = n.sibling));
}
function Yc(e, t, n) {
  if (Ue && typeof Ue.onCommitFiberUnmount == "function")
    try {
      Ue.onCommitFiberUnmount(ml, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ae || Jt(n, t);
    case 6:
      var r = ne,
        l = Ie;
      ((ne = null),
        st(e, t, n),
        (ne = r),
        (Ie = l),
        ne !== null &&
          (Ie
            ? ((e = ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ne.removeChild(n.stateNode)));
      break;
    case 18:
      ne !== null &&
        (Ie
          ? ((e = ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? Wl(e.parentNode, n)
              : e.nodeType === 1 && Wl(e, n),
            Kn(e))
          : Wl(ne, n.stateNode));
      break;
    case 4:
      ((r = ne),
        (l = Ie),
        (ne = n.stateNode.containerInfo),
        (Ie = !0),
        st(e, t, n),
        (ne = r),
        (Ie = l));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ae &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            a = i.destroy;
          ((i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && $s(n, t, a),
            (l = l.next));
        } while (l !== r);
      }
      st(e, t, n);
      break;
    case 1:
      if (
        !ae &&
        (Jt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (o) {
          G(n, t, o);
        }
      st(e, t, n);
      break;
    case 21:
      st(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ae = (r = ae) || n.memoizedState !== null), st(e, t, n), (ae = r))
        : st(e, t, n);
      break;
    default:
      st(e, t, n);
  }
}
function Ua(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new Cf()),
      t.forEach(function (r) {
        var l = Of.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      }));
  }
}
function Ae(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          a = t,
          o = a;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              ((ne = o.stateNode), (Ie = !1));
              break e;
            case 3:
              ((ne = o.stateNode.containerInfo), (Ie = !0));
              break e;
            case 4:
              ((ne = o.stateNode.containerInfo), (Ie = !0));
              break e;
          }
          o = o.return;
        }
        if (ne === null) throw Error(w(160));
        (Yc(i, a, l), (ne = null), (Ie = !1));
        var c = l.alternate;
        (c !== null && (c.return = null), (l.return = null));
      } catch (u) {
        G(l, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (Jc(t, e), (t = t.sibling));
}
function Jc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ae(t, e), Be(e), r & 4)) {
        try {
          (Fn(3, e, e.return), Nl(3, e));
        } catch (N) {
          G(e, e.return, N);
        }
        try {
          Fn(5, e, e.return);
        } catch (N) {
          G(e, e.return, N);
        }
      }
      break;
    case 1:
      (Ae(t, e), Be(e), r & 512 && n !== null && Jt(n, n.return));
      break;
    case 5:
      if (
        (Ae(t, e),
        Be(e),
        r & 512 && n !== null && Jt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Un(l, "");
        } catch (N) {
          G(e, e.return, N);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          o = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            (o === "input" && i.type === "radio" && i.name != null && wo(l, i),
              ms(o, a));
            var u = ms(o, i);
            for (a = 0; a < c.length; a += 2) {
              var h = c[a],
                x = c[a + 1];
              h === "style"
                ? So(l, x)
                : h === "dangerouslySetInnerHTML"
                  ? ko(l, x)
                  : h === "children"
                    ? Un(l, x)
                    : ti(l, h, x, u);
            }
            switch (o) {
              case "input":
                cs(l, i);
                break;
              case "textarea":
                jo(l, i);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var y = i.value;
                y != null
                  ? en(l, !!i.multiple, y, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? en(l, !!i.multiple, i.defaultValue, !0)
                      : en(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Jn] = i;
          } catch (N) {
            G(e, e.return, N);
          }
      }
      break;
    case 6:
      if ((Ae(t, e), Be(e), r & 4)) {
        if (e.stateNode === null) throw Error(w(162));
        ((l = e.stateNode), (i = e.memoizedProps));
        try {
          l.nodeValue = i;
        } catch (N) {
          G(e, e.return, N);
        }
      }
      break;
    case 3:
      if (
        (Ae(t, e), Be(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Kn(t.containerInfo);
        } catch (N) {
          G(e, e.return, N);
        }
      break;
    case 4:
      (Ae(t, e), Be(e));
      break;
    case 13:
      (Ae(t, e),
        Be(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Mi = q())),
        r & 4 && Ua(e));
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ae = (u = ae) || h), Ae(t, e), (ae = u)) : Ae(t, e),
        Be(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !h && e.mode & 1)
        )
          for (S = e, h = e.child; h !== null; ) {
            for (x = S = h; S !== null; ) {
              switch (((m = S), (y = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Fn(4, m, m.return);
                  break;
                case 1:
                  Jt(m, m.return);
                  var j = m.stateNode;
                  if (typeof j.componentWillUnmount == "function") {
                    ((r = m), (n = m.return));
                    try {
                      ((t = r),
                        (j.props = t.memoizedProps),
                        (j.state = t.memoizedState),
                        j.componentWillUnmount());
                    } catch (N) {
                      G(r, n, N);
                    }
                  }
                  break;
                case 5:
                  Jt(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Va(x);
                    continue;
                  }
              }
              y !== null ? ((y.return = m), (S = y)) : Va(x);
            }
            h = h.sibling;
          }
        e: for (h = null, x = e; ; ) {
          if (x.tag === 5) {
            if (h === null) {
              h = x;
              try {
                ((l = x.stateNode),
                  u
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((o = x.stateNode),
                      (c = x.memoizedProps.style),
                      (a =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (o.style.display = bo("display", a))));
              } catch (N) {
                G(e, e.return, N);
              }
            }
          } else if (x.tag === 6) {
            if (h === null)
              try {
                x.stateNode.nodeValue = u ? "" : x.memoizedProps;
              } catch (N) {
                G(e, e.return, N);
              }
          } else if (
            ((x.tag !== 22 && x.tag !== 23) ||
              x.memoizedState === null ||
              x === e) &&
            x.child !== null
          ) {
            ((x.child.return = x), (x = x.child));
            continue;
          }
          if (x === e) break e;
          for (; x.sibling === null; ) {
            if (x.return === null || x.return === e) break e;
            (h === x && (h = null), (x = x.return));
          }
          (h === x && (h = null),
            (x.sibling.return = x.return),
            (x = x.sibling));
        }
      }
      break;
    case 19:
      (Ae(t, e), Be(e), r & 4 && Ua(e));
      break;
    case 21:
      break;
    default:
      (Ae(t, e), Be(e));
  }
}
function Be(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Xc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(w(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Un(l, ""), (r.flags &= -33));
          var i = Qa(e);
          Hs(e, i, l);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            o = Qa(e);
          Us(e, o, a);
          break;
        default:
          throw Error(w(161));
      }
    } catch (c) {
      G(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function zf(e, t, n) {
  ((S = e), Zc(e));
}
function Zc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var l = S,
      i = l.child;
    if (l.tag === 22 && r) {
      var a = l.memoizedState !== null || zr;
      if (!a) {
        var o = l.alternate,
          c = (o !== null && o.memoizedState !== null) || ae;
        o = zr;
        var u = ae;
        if (((zr = a), (ae = c) && !u))
          for (S = l; S !== null; )
            ((a = S),
              (c = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Wa(l)
                : c !== null
                  ? ((c.return = a), (S = c))
                  : Wa(l));
        for (; i !== null; ) ((S = i), Zc(i), (i = i.sibling));
        ((S = l), (zr = o), (ae = u));
      }
      Ha(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (S = i)) : Ha(e);
  }
}
function Ha(e) {
  for (; S !== null; ) {
    var t = S;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ae || Nl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ae)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Me(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && za(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                za(t, a, n);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (n === null && t.flags & 4) {
                n = o;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && n.focus();
                    break;
                  case "img":
                    c.src && (n.src = c.src);
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
                  var h = u.memoizedState;
                  if (h !== null) {
                    var x = h.dehydrated;
                    x !== null && Kn(x);
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
              throw Error(w(163));
          }
        ae || (t.flags & 512 && Qs(t));
      } catch (m) {
        G(t, t.return, m);
      }
    }
    if (t === e) {
      S = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (S = n));
      break;
    }
    S = t.return;
  }
}
function Va(e) {
  for (; S !== null; ) {
    var t = S;
    if (t === e) {
      S = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (S = n));
      break;
    }
    S = t.return;
  }
}
function Wa(e) {
  for (; S !== null; ) {
    var t = S;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Nl(4, t);
          } catch (c) {
            G(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              G(t, l, c);
            }
          }
          var i = t.return;
          try {
            Qs(t);
          } catch (c) {
            G(t, i, c);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Qs(t);
          } catch (c) {
            G(t, a, c);
          }
      }
    } catch (c) {
      G(t, t.return, c);
    }
    if (t === e) {
      S = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      ((o.return = t.return), (S = o));
      break;
    }
    S = t.return;
  }
}
var Ef = Math.ceil,
  ol = nt.ReactCurrentDispatcher,
  Li = nt.ReactCurrentOwner,
  ze = nt.ReactCurrentBatchConfig,
  M = 0,
  te = null,
  X = null,
  re = 0,
  ve = 0,
  Zt = kt(0),
  Z = 0,
  lr = null,
  Dt = 0,
  kl = 0,
  Ai = 0,
  Bn = null,
  pe = null,
  Mi = 0,
  pn = 1 / 0,
  We = null,
  cl = !1,
  Vs = null,
  gt = null,
  Er = !1,
  dt = null,
  ul = 0,
  $n = 0,
  Ws = null,
  Br = -1,
  $r = 0;
function ue() {
  return M & 6 ? q() : Br !== -1 ? Br : (Br = q());
}
function yt(e) {
  return e.mode & 1
    ? M & 2 && re !== 0
      ? re & -re
      : ff.transition !== null
        ? ($r === 0 && ($r = Do()), $r)
        : ((e = O),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ho(e.type))),
          e)
    : 1;
}
function Re(e, t, n, r) {
  if (50 < $n) throw (($n = 0), (Ws = null), Error(w(185)));
  (ir(e, n, r),
    (!(M & 2) || e !== te) &&
      (e === te && (!(M & 2) && (kl |= n), Z === 4 && ct(e, re)),
      ge(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((pn = q() + 500), vl && bt())));
}
function ge(e, t) {
  var n = e.callbackNode;
  dd(e, t);
  var r = Kr(e, e === te ? re : 0);
  if (r === 0)
    (n !== null && ta(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ta(n), t === 1))
      (e.tag === 0 ? df(Ka.bind(null, e)) : cc(Ka.bind(null, e)),
        af(function () {
          !(M & 6) && bt();
        }),
        (n = null));
    else {
      switch (Ro(r)) {
        case 1:
          n = ii;
          break;
        case 4:
          n = Io;
          break;
        case 16:
          n = Wr;
          break;
        case 536870912:
          n = Oo;
          break;
        default:
          n = Wr;
      }
      n = au(n, eu.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function eu(e, t) {
  if (((Br = -1), ($r = 0), M & 6)) throw Error(w(327));
  var n = e.callbackNode;
  if (sn() && e.callbackNode !== n) return null;
  var r = Kr(e, e === te ? re : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = dl(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var i = nu();
    (te !== e || re !== t) && ((We = null), (pn = q() + 500), Lt(e, t));
    do
      try {
        Lf();
        break;
      } catch (o) {
        tu(e, o);
      }
    while (!0);
    (vi(),
      (ol.current = i),
      (M = l),
      X !== null ? (t = 0) : ((te = null), (re = 0), (t = Z)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = vs(e)), l !== 0 && ((r = l), (t = Ks(e, l)))), t === 1)
    )
      throw ((n = lr), Lt(e, 0), ct(e, r), ge(e, q()), n);
    if (t === 6) ct(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !_f(l) &&
          ((t = dl(e, r)),
          t === 2 && ((i = vs(e)), i !== 0 && ((r = i), (t = Ks(e, i)))),
          t === 1))
      )
        throw ((n = lr), Lt(e, 0), ct(e, r), ge(e, q()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(w(345));
        case 2:
          zt(e, pe, We);
          break;
        case 3:
          if (
            (ct(e, r), (r & 130023424) === r && ((t = Mi + 500 - q()), 10 < t))
          ) {
            if (Kr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              (ue(), (e.pingedLanes |= e.suspendedLanes & l));
              break;
            }
            e.timeoutHandle = Ts(zt.bind(null, e, pe, We), t);
            break;
          }
          zt(e, pe, We);
          break;
        case 4:
          if ((ct(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var a = 31 - De(r);
            ((i = 1 << a), (a = t[a]), a > l && (l = a), (r &= ~i));
          }
          if (
            ((r = l),
            (r = q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Ef(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ts(zt.bind(null, e, pe, We), r);
            break;
          }
          zt(e, pe, We);
          break;
        case 5:
          zt(e, pe, We);
          break;
        default:
          throw Error(w(329));
      }
    }
  }
  return (ge(e, q()), e.callbackNode === n ? eu.bind(null, e) : null);
}
function Ks(e, t) {
  var n = Bn;
  return (
    e.current.memoizedState.isDehydrated && (Lt(e, t).flags |= 256),
    (e = dl(e, t)),
    e !== 2 && ((t = pe), (pe = n), t !== null && Gs(t)),
    e
  );
}
function Gs(e) {
  pe === null ? (pe = e) : pe.push.apply(pe, e);
}
function _f(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Fe(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function ct(e, t) {
  for (
    t &= ~Ai,
      t &= ~kl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - De(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Ka(e) {
  if (M & 6) throw Error(w(327));
  sn();
  var t = Kr(e, 0);
  if (!(t & 1)) return (ge(e, q()), null);
  var n = dl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = vs(e);
    r !== 0 && ((t = r), (n = Ks(e, r)));
  }
  if (n === 1) throw ((n = lr), Lt(e, 0), ct(e, t), ge(e, q()), n);
  if (n === 6) throw Error(w(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    zt(e, pe, We),
    ge(e, q()),
    null
  );
}
function Ii(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    ((M = n), M === 0 && ((pn = q() + 500), vl && bt()));
  }
}
function Rt(e) {
  dt !== null && dt.tag === 0 && !(M & 6) && sn();
  var t = M;
  M |= 1;
  var n = ze.transition,
    r = O;
  try {
    if (((ze.transition = null), (O = 1), e)) return e();
  } finally {
    ((O = r), (ze.transition = n), (M = t), !(M & 6) && bt());
  }
}
function Oi() {
  ((ve = Zt.current), $(Zt));
}
function Lt(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), sf(n)), X !== null))
    for (n = X.return; n !== null; ) {
      var r = n;
      switch ((xi(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && Jr());
          break;
        case 3:
          (dn(), $(he), $(oe), Si());
          break;
        case 5:
          bi(r);
          break;
        case 4:
          dn();
          break;
        case 13:
          $(H);
          break;
        case 19:
          $(H);
          break;
        case 10:
          wi(r.type._context);
          break;
        case 22:
        case 23:
          Oi();
      }
      n = n.return;
    }
  if (
    ((te = e),
    (X = e = vt(e.current, null)),
    (re = ve = t),
    (Z = 0),
    (lr = null),
    (Ai = kl = Dt = 0),
    (pe = Bn = null),
    _t !== null)
  ) {
    for (t = 0; t < _t.length; t++)
      if (((n = _t[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          ((i.next = l), (r.next = a));
        }
        n.pending = r;
      }
    _t = null;
  }
  return e;
}
function tu(e, t) {
  do {
    var n = X;
    try {
      if ((vi(), (Dr.current = al), il)) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          (l !== null && (l.pending = null), (r = r.next));
        }
        il = !1;
      }
      if (
        ((Ot = 0),
        (ee = J = V = null),
        (Rn = !1),
        (tr = 0),
        (Li.current = null),
        n === null || n.return === null)
      ) {
        ((Z = 1), (lr = t), (X = null));
        break;
      }
      e: {
        var i = e,
          a = n.return,
          o = n,
          c = t;
        if (
          ((t = re),
          (o.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var u = c,
            h = o,
            x = h.tag;
          if (!(h.mode & 1) && (x === 0 || x === 11 || x === 15)) {
            var m = h.alternate;
            m
              ? ((h.updateQueue = m.updateQueue),
                (h.memoizedState = m.memoizedState),
                (h.lanes = m.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var y = Ma(a);
          if (y !== null) {
            ((y.flags &= -257),
              Ia(y, a, o, i, t),
              y.mode & 1 && Aa(i, u, t),
              (t = y),
              (c = u));
            var j = t.updateQueue;
            if (j === null) {
              var N = new Set();
              (N.add(c), (t.updateQueue = N));
            } else j.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              (Aa(i, u, t), Di());
              break e;
            }
            c = Error(w(426));
          }
        } else if (Q && o.mode & 1) {
          var I = Ma(a);
          if (I !== null) {
            (!(I.flags & 65536) && (I.flags |= 256),
              Ia(I, a, o, i, t),
              gi(fn(c, o)));
            break e;
          }
        }
        ((i = c = fn(c, o)),
          Z !== 4 && (Z = 2),
          Bn === null ? (Bn = [i]) : Bn.push(i),
          (i = a));
        do {
          switch (i.tag) {
            case 3:
              ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
              var f = Rc(i, c, t);
              Ta(i, f);
              break e;
            case 1:
              o = c;
              var d = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (gt === null || !gt.has(p))))
              ) {
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var v = Fc(i, o, t);
                Ta(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      lu(n);
    } catch (k) {
      ((t = k), X === n && n !== null && (X = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function nu() {
  var e = ol.current;
  return ((ol.current = al), e === null ? al : e);
}
function Di() {
  ((Z === 0 || Z === 3 || Z === 2) && (Z = 4),
    te === null || (!(Dt & 268435455) && !(kl & 268435455)) || ct(te, re));
}
function dl(e, t) {
  var n = M;
  M |= 2;
  var r = nu();
  (te !== e || re !== t) && ((We = null), Lt(e, t));
  do
    try {
      Pf();
      break;
    } catch (l) {
      tu(e, l);
    }
  while (!0);
  if ((vi(), (M = n), (ol.current = r), X !== null)) throw Error(w(261));
  return ((te = null), (re = 0), Z);
}
function Pf() {
  for (; X !== null; ) ru(X);
}
function Lf() {
  for (; X !== null && !nd(); ) ru(X);
}
function ru(e) {
  var t = iu(e.alternate, e, ve);
  ((e.memoizedProps = e.pendingProps),
    t === null ? lu(e) : (X = t),
    (Li.current = null));
}
function lu(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Sf(n, t)), n !== null)) {
        ((n.flags &= 32767), (X = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((Z = 6), (X = null));
        return;
      }
    } else if (((n = bf(n, t, ve)), n !== null)) {
      X = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      X = t;
      return;
    }
    X = t = e;
  } while (t !== null);
  Z === 0 && (Z = 5);
}
function zt(e, t, n) {
  var r = O,
    l = ze.transition;
  try {
    ((ze.transition = null), (O = 1), Af(e, t, n, r));
  } finally {
    ((ze.transition = l), (O = r));
  }
  return null;
}
function Af(e, t, n, r) {
  do sn();
  while (dt !== null);
  if (M & 6) throw Error(w(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(w(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var i = n.lanes | n.childLanes;
  if (
    (fd(e, i),
    e === te && ((X = te = null), (re = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Er ||
      ((Er = !0),
      au(Wr, function () {
        return (sn(), null);
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ((i = ze.transition), (ze.transition = null));
    var a = O;
    O = 1;
    var o = M;
    ((M |= 4),
      (Li.current = null),
      Tf(e, n),
      Jc(n, e),
      Jd(Ss),
      (Gr = !!bs),
      (Ss = bs = null),
      (e.current = n),
      zf(n),
      rd(),
      (M = o),
      (O = a),
      (ze.transition = i));
  } else e.current = n;
  if (
    (Er && ((Er = !1), (dt = e), (ul = l)),
    (i = e.pendingLanes),
    i === 0 && (gt = null),
    id(n.stateNode),
    ge(e, q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
  if (cl) throw ((cl = !1), (e = Vs), (Vs = null), e);
  return (
    ul & 1 && e.tag !== 0 && sn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ws ? $n++ : (($n = 0), (Ws = e))) : ($n = 0),
    bt(),
    null
  );
}
function sn() {
  if (dt !== null) {
    var e = Ro(ul),
      t = ze.transition,
      n = O;
    try {
      if (((ze.transition = null), (O = 16 > e ? 16 : e), dt === null))
        var r = !1;
      else {
        if (((e = dt), (dt = null), (ul = 0), M & 6)) throw Error(w(331));
        var l = M;
        for (M |= 4, S = e.current; S !== null; ) {
          var i = S,
            a = i.child;
          if (S.flags & 16) {
            var o = i.deletions;
            if (o !== null) {
              for (var c = 0; c < o.length; c++) {
                var u = o[c];
                for (S = u; S !== null; ) {
                  var h = S;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fn(8, h, i);
                  }
                  var x = h.child;
                  if (x !== null) ((x.return = h), (S = x));
                  else
                    for (; S !== null; ) {
                      h = S;
                      var m = h.sibling,
                        y = h.return;
                      if ((qc(h), h === u)) {
                        S = null;
                        break;
                      }
                      if (m !== null) {
                        ((m.return = y), (S = m));
                        break;
                      }
                      S = y;
                    }
                }
              }
              var j = i.alternate;
              if (j !== null) {
                var N = j.child;
                if (N !== null) {
                  j.child = null;
                  do {
                    var I = N.sibling;
                    ((N.sibling = null), (N = I));
                  } while (N !== null);
                }
              }
              S = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) ((a.return = i), (S = a));
          else
            e: for (; S !== null; ) {
              if (((i = S), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Fn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                ((f.return = i.return), (S = f));
                break e;
              }
              S = i.return;
            }
        }
        var d = e.current;
        for (S = d; S !== null; ) {
          a = S;
          var p = a.child;
          if (a.subtreeFlags & 2064 && p !== null) ((p.return = a), (S = p));
          else
            e: for (a = d; S !== null; ) {
              if (((o = S), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nl(9, o);
                  }
                } catch (k) {
                  G(o, o.return, k);
                }
              if (o === a) {
                S = null;
                break e;
              }
              var v = o.sibling;
              if (v !== null) {
                ((v.return = o.return), (S = v));
                break e;
              }
              S = o.return;
            }
        }
        if (
          ((M = l), bt(), Ue && typeof Ue.onPostCommitFiberRoot == "function")
        )
          try {
            Ue.onPostCommitFiberRoot(ml, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((O = n), (ze.transition = t));
    }
  }
  return !1;
}
function Ga(e, t, n) {
  ((t = fn(n, t)),
    (t = Rc(e, t, 1)),
    (e = xt(e, t, 1)),
    (t = ue()),
    e !== null && (ir(e, 1, t), ge(e, t)));
}
function G(e, t, n) {
  if (e.tag === 3) Ga(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ga(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (gt === null || !gt.has(r)))
        ) {
          ((e = fn(n, e)),
            (e = Fc(t, e, 1)),
            (t = xt(t, e, 1)),
            (e = ue()),
            t !== null && (ir(t, 1, e), ge(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function Mf(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = ue()),
    (e.pingedLanes |= e.suspendedLanes & n),
    te === e &&
      (re & n) === n &&
      (Z === 4 || (Z === 3 && (re & 130023424) === re && 500 > q() - Mi)
        ? Lt(e, 0)
        : (Ai |= n)),
    ge(e, t));
}
function su(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = vr), (vr <<= 1), !(vr & 130023424) && (vr = 4194304))
      : (t = 1));
  var n = ue();
  ((e = Ze(e, t)), e !== null && (ir(e, t, n), ge(e, n)));
}
function If(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), su(e, n));
}
function Of(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(w(314));
  }
  (r !== null && r.delete(t), su(e, n));
}
var iu;
iu = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || he.current) me = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((me = !1), kf(e, t, n));
      me = !!(e.flags & 131072);
    }
  else ((me = !1), Q && t.flags & 1048576 && uc(t, tl, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Fr(e, t), (e = t.pendingProps));
      var l = on(t, oe.current);
      (ln(t, n), (l = Ti(null, t, r, e, l, n)));
      var i = zi();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            xe(r) ? ((i = !0), Zr(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ni(t),
            (l.updater = jl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ms(t, r, e, n),
            (t = Ds(null, t, r, !0, i, n)))
          : ((t.tag = 0), Q && i && hi(t), ce(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Fr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Rf(r)),
          (e = Me(r, e)),
          l)
        ) {
          case 0:
            t = Os(null, t, r, e, n);
            break e;
          case 1:
            t = Ra(null, t, r, e, n);
            break e;
          case 11:
            t = Oa(null, t, r, e, n);
            break e;
          case 14:
            t = Da(null, t, r, Me(r.type, e), n);
            break e;
        }
        throw Error(w(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        Os(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        Ra(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Uc(t), e === null)) throw Error(w(387));
        ((r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          xc(e, t),
          ll(t, r, null, n));
        var a = t.memoizedState;
        if (((r = a.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ((l = fn(Error(w(423)), t)), (t = Fa(e, t, r, n, l)));
            break e;
          } else if (r !== l) {
            ((l = fn(Error(w(424)), t)), (t = Fa(e, t, r, n, l)));
            break e;
          } else
            for (
              we = ht(t.stateNode.containerInfo.firstChild),
                je = t,
                Q = !0,
                Oe = null,
                n = mc(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((cn(), r === l)) {
            t = et(e, t, n);
            break e;
          }
          ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        gc(t),
        e === null && Ps(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = l.children),
        Cs(r, l) ? (a = null) : i !== null && Cs(r, i) && (t.flags |= 32),
        Qc(e, t),
        ce(e, t, a, n),
        t.child
      );
    case 6:
      return (e === null && Ps(t), null);
    case 13:
      return Hc(e, t, n);
    case 4:
      return (
        ki(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = un(t, null, r, n)) : ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        Oa(e, t, r, l, n)
      );
    case 7:
      return (ce(e, t, t.pendingProps, n), t.child);
    case 8:
      return (ce(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (ce(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (a = l.value),
          R(nl, r._currentValue),
          (r._currentValue = a),
          i !== null)
        )
          if (Fe(i.value, a)) {
            if (i.children === l.children && !he.current) {
              t = et(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var o = i.dependencies;
              if (o !== null) {
                a = i.child;
                for (var c = o.firstContext; c !== null; ) {
                  if (c.context === r) {
                    if (i.tag === 1) {
                      ((c = Xe(-1, n & -n)), (c.tag = 2));
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var h = u.pending;
                        (h === null
                          ? (c.next = c)
                          : ((c.next = h.next), (h.next = c)),
                          (u.pending = c));
                      }
                    }
                    ((i.lanes |= n),
                      (c = i.alternate),
                      c !== null && (c.lanes |= n),
                      Ls(i.return, n, t),
                      (o.lanes |= n));
                    break;
                  }
                  c = c.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(w(341));
                ((a.lanes |= n),
                  (o = a.alternate),
                  o !== null && (o.lanes |= n),
                  Ls(a, n, t),
                  (a = i.sibling));
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    ((i.return = a.return), (a = i));
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        (ce(e, t, l.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        ln(t, n),
        (l = Ee(l)),
        (r = r(l)),
        (t.flags |= 1),
        ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Me(r, t.pendingProps)),
        (l = Me(r.type, l)),
        Da(e, t, r, l, n)
      );
    case 15:
      return Bc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        Fr(e, t),
        (t.tag = 1),
        xe(r) ? ((e = !0), Zr(t)) : (e = !1),
        ln(t, n),
        Dc(t, r, l),
        Ms(t, r, l, n),
        Ds(null, t, r, !0, e, n)
      );
    case 19:
      return Vc(e, t, n);
    case 22:
      return $c(e, t, n);
  }
  throw Error(w(156, t.tag));
};
function au(e, t) {
  return Mo(e, t);
}
function Df(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function Te(e, t, n, r) {
  return new Df(e, t, n, r);
}
function Ri(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function Rf(e) {
  if (typeof e == "function") return Ri(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ri)) return 11;
    if (e === li) return 14;
  }
  return 2;
}
function vt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Te(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Qr(e, t, n, r, l, i) {
  var a = 2;
  if (((r = e), typeof e == "function")) Ri(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case Ut:
        return At(n.children, l, i, t);
      case ni:
        ((a = 8), (l |= 8));
        break;
      case ls:
        return (
          (e = Te(12, n, t, l | 2)),
          (e.elementType = ls),
          (e.lanes = i),
          e
        );
      case ss:
        return ((e = Te(13, n, t, l)), (e.elementType = ss), (e.lanes = i), e);
      case is:
        return ((e = Te(19, n, t, l)), (e.elementType = is), (e.lanes = i), e);
      case go:
        return bl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ho:
              a = 10;
              break e;
            case xo:
              a = 9;
              break e;
            case ri:
              a = 11;
              break e;
            case li:
              a = 14;
              break e;
            case it:
              ((a = 16), (r = null));
              break e;
          }
        throw Error(w(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Te(a, n, t, l)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = i),
    t
  );
}
function At(e, t, n, r) {
  return ((e = Te(7, e, r, t)), (e.lanes = n), e);
}
function bl(e, t, n, r) {
  return (
    (e = Te(22, e, r, t)),
    (e.elementType = go),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function es(e, t, n) {
  return ((e = Te(6, e, null, t)), (e.lanes = n), e);
}
function ts(e, t, n) {
  return (
    (t = Te(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Ff(e, t, n, r, l) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Il(0)),
    (this.expirationTimes = Il(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Il(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null));
}
function Fi(e, t, n, r, l, i, a, o, c) {
  return (
    (e = new Ff(e, t, n, o, c)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Te(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ni(i),
    e
  );
}
function Bf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Qt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function ou(e) {
  if (!e) return jt;
  e = e._reactInternals;
  e: {
    if (Bt(e) !== e || e.tag !== 1) throw Error(w(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (xe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(w(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (xe(n)) return oc(e, n, t);
  }
  return t;
}
function cu(e, t, n, r, l, i, a, o, c) {
  return (
    (e = Fi(n, r, !0, e, l, i, a, o, c)),
    (e.context = ou(null)),
    (n = e.current),
    (r = ue()),
    (l = yt(n)),
    (i = Xe(r, l)),
    (i.callback = t ?? null),
    xt(n, i, l),
    (e.current.lanes = l),
    ir(e, l, r),
    ge(e, r),
    e
  );
}
function Sl(e, t, n, r) {
  var l = t.current,
    i = ue(),
    a = yt(l);
  return (
    (n = ou(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Xe(i, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = xt(l, t, a)),
    e !== null && (Re(e, l, a, i), Or(e, l, a)),
    a
  );
}
function fl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function qa(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Bi(e, t) {
  (qa(e, t), (e = e.alternate) && qa(e, t));
}
function $f() {
  return null;
}
var uu =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function $i(e) {
  this._internalRoot = e;
}
Cl.prototype.render = $i.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(w(409));
  Sl(e, t, null, null);
};
Cl.prototype.unmount = $i.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (Rt(function () {
      Sl(null, e, null, null);
    }),
      (t[Je] = null));
  }
};
function Cl(e) {
  this._internalRoot = e;
}
Cl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = $o();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ot.length && t !== 0 && t < ot[n].priority; n++);
    (ot.splice(n, 0, e), n === 0 && Uo(e));
  }
};
function Qi(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Tl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Xa() {}
function Qf(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = fl(a);
        i.call(u);
      };
    }
    var a = cu(t, r, e, 0, null, !1, !1, "", Xa);
    return (
      (e._reactRootContainer = a),
      (e[Je] = a.current),
      Xn(e.nodeType === 8 ? e.parentNode : e),
      Rt(),
      a
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var o = r;
    r = function () {
      var u = fl(c);
      o.call(u);
    };
  }
  var c = Fi(e, 0, !1, null, null, !1, !1, "", Xa);
  return (
    (e._reactRootContainer = c),
    (e[Je] = c.current),
    Xn(e.nodeType === 8 ? e.parentNode : e),
    Rt(function () {
      Sl(t, c, n, r);
    }),
    c
  );
}
function zl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof l == "function") {
      var o = l;
      l = function () {
        var c = fl(a);
        o.call(c);
      };
    }
    Sl(t, a, e, l);
  } else a = Qf(n, t, e, l, r);
  return fl(a);
}
Fo = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Pn(t.pendingLanes);
        n !== 0 &&
          (ai(t, n | 1), ge(t, q()), !(M & 6) && ((pn = q() + 500), bt()));
      }
      break;
    case 13:
      (Rt(function () {
        var r = Ze(e, 1);
        if (r !== null) {
          var l = ue();
          Re(r, e, 1, l);
        }
      }),
        Bi(e, 1));
  }
};
oi = function (e) {
  if (e.tag === 13) {
    var t = Ze(e, 134217728);
    if (t !== null) {
      var n = ue();
      Re(t, e, 134217728, n);
    }
    Bi(e, 134217728);
  }
};
Bo = function (e) {
  if (e.tag === 13) {
    var t = yt(e),
      n = Ze(e, t);
    if (n !== null) {
      var r = ue();
      Re(n, e, t, r);
    }
    Bi(e, t);
  }
};
$o = function () {
  return O;
};
Qo = function (e, t) {
  var n = O;
  try {
    return ((O = e), t());
  } finally {
    O = n;
  }
};
xs = function (e, t, n) {
  switch (t) {
    case "input":
      if ((cs(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = yl(r);
            if (!l) throw Error(w(90));
            (vo(r), cs(r, l));
          }
        }
      }
      break;
    case "textarea":
      jo(e, n);
      break;
    case "select":
      ((t = n.value), t != null && en(e, !!n.multiple, t, !1));
  }
};
zo = Ii;
Eo = Rt;
var Uf = { usingClientEntryPoint: !1, Events: [or, Kt, yl, Co, To, Ii] },
  zn = {
    findFiberByHostInstance: Et,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Hf = {
    bundleType: zn.bundleType,
    version: zn.version,
    rendererPackageName: zn.rendererPackageName,
    rendererConfig: zn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: nt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Lo(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: zn.findFiberByHostInstance || $f,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var _r = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!_r.isDisabled && _r.supportsFiber)
    try {
      ((ml = _r.inject(Hf)), (Ue = _r));
    } catch {}
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uf;
ke.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Qi(t)) throw Error(w(200));
  return Bf(e, t, null, n);
};
ke.createRoot = function (e, t) {
  if (!Qi(e)) throw Error(w(299));
  var n = !1,
    r = "",
    l = uu;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Fi(e, 1, !1, null, null, n, !1, r, l)),
    (e[Je] = t.current),
    Xn(e.nodeType === 8 ? e.parentNode : e),
    new $i(t)
  );
};
ke.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(w(188))
      : ((e = Object.keys(e).join(",")), Error(w(268, e)));
  return ((e = Lo(t)), (e = e === null ? null : e.stateNode), e);
};
ke.flushSync = function (e) {
  return Rt(e);
};
ke.hydrate = function (e, t, n) {
  if (!Tl(t)) throw Error(w(200));
  return zl(null, e, t, !0, n);
};
ke.hydrateRoot = function (e, t, n) {
  if (!Qi(e)) throw Error(w(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    a = uu;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = cu(t, null, e, 1, n ?? null, l, !1, i, a)),
    (e[Je] = t.current),
    Xn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l));
  return new Cl(t);
};
ke.render = function (e, t, n) {
  if (!Tl(t)) throw Error(w(200));
  return zl(null, e, t, !1, n);
};
ke.unmountComponentAtNode = function (e) {
  if (!Tl(e)) throw Error(w(40));
  return e._reactRootContainer
    ? (Rt(function () {
        zl(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Je] = null));
        });
      }),
      !0)
    : !1;
};
ke.unstable_batchedUpdates = Ii;
ke.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Tl(n)) throw Error(w(200));
  if (e == null || e._reactInternals === void 0) throw Error(w(38));
  return zl(e, t, n, !1, r);
};
ke.version = "18.3.1-next-f1338f8080-20240426";
function du() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(du);
    } catch (e) {
      console.error(e);
    }
}
(du(), (uo.exports = ke));
var Vf = uo.exports,
  Ya = Vf;
((ns.createRoot = Ya.createRoot), (ns.hydrateRoot = Ya.hydrateRoot));
const Wf = {
    name: "Nguyễn Trọng Tiến",
    role: "CS K65 EIU",
    school: "Đại học Quốc tế Miền Đông Hà Nội",
    cohort: "K65 CNTT",
    semester: "HK1 2024–2025",
    academicWeek: "Tuần 7/15",
    streakDays: 12,
    rank: "Top 5% EIU K65",
    overallMastery: 68,
    passedObjectives: 28,
    totalObjectives: 40,
    avatar: null,
    logoUrl:
      "https://lh3.googleusercontent.com/aida/AEtjO1UmFkSZfqWzs-75PVohlWXJ9kW-fgFGDi_adF0sCUvOR2I4OTEbTmzbY3u_TNhs9_6iHBT76FxgkI8cCjA9axnJwj1r4CQUN1Wum6C5afdR2sjGv9DyKueIWpN-Y72PKrEkbcTmwhWNYgTj8_MCEBpQWgz5n3wBp9JX5sK1aD_96Hl2ksPZ-ICiobWw7GxOaBvQymODmpiHo5IEHwaq5J5taMjVnzQVqlgdlWmG6xLXHdH_sH7ewDjyLjmP",
  },
  fu = [
    {
      id: "cs201",
      code: "CS201",
      title: "Cấu trúc Dữ liệu & Giải thuật",
      credits: 3,
      lecturer: "PGS. TS. Trần Tuấn Anh",
      progressWeek: "Tuần 11/16",
      mastery: 68,
      targetMastery: 75,
      passedObjectives: 28,
      totalObjectives: 40,
      labCount: 14,
      colorAccent: "primary-container",
      statusBadge: "Đang học",
      weakConcept: {
        topic: "Tree Traversal: Preorder, Inorder & Postorder recursion",
        mastery: 32,
        severity: "critical",
        label: "Điểm yếu cần bù đắp (32% hiểu rõ)",
      },
      nextSession: {
        title: "Tree Traversal: Preorder & Inorder",
        duration: "15p",
      },
    },
    {
      id: "ma110",
      code: "MA110",
      title: "Toán rời rạc ứng dụng CNTT",
      credits: 3,
      lecturer: "TS. Lê Bá Cường",
      progressWeek: "Tuần 11/16",
      mastery: 54,
      targetMastery: 70,
      passedObjectives: 19,
      totalObjectives: 35,
      labCount: 8,
      colorAccent: "tertiary-container",
      statusBadge: "Cần cải thiện",
      weakConcept: {
        topic: "Quan hệ tương đương & Hàm sinh đại số",
        mastery: 45,
        severity: "moderate",
        label: "Cần luyện thêm (45% hiểu rõ)",
      },
      nextSession: { title: "Đồ thị Euler & Hamilton", duration: "20p" },
    },
    {
      id: "cs202",
      code: "CS202",
      title: "Lập trình Hướng đối tượng (Java/C++)",
      credits: 3,
      lecturer: "ThS. Vũ Thị Hương",
      progressWeek: "Tuần 11/16",
      mastery: 82,
      targetMastery: 85,
      passedObjectives: 34,
      totalObjectives: 40,
      labCount: 12,
      colorAccent: "secondary-container",
      statusBadge: "Nắm vững",
      weakConcept: {
        topic: "Design Patterns: Factory & Observer Pattern",
        mastery: 72,
        severity: "low",
        label: "Củng cố nâng cao (72% hiểu rõ)",
      },
      nextSession: { title: "Java Streams & Lambda Refactor", duration: "10p" },
    },
  ],
  Kf = [
    {
      id: "tree-traversal",
      rank: "01",
      name: "Tree Traversal",
      vietnamese: "Duyệt Cây Nhị Phân",
      course: "CS201",
      mastery: 32,
      severity: "critical",
      levelBadge: "🔴 Cấp thiết",
      detail:
        "Làm sai 4/6 câu hỏi gần đây (In-order & Post-order recursion stack).",
    },
    {
      id: "queue-layout",
      rank: "02",
      name: "Queue Layout & Circular Buffer",
      vietnamese: "Bộ đệm hàng đợi vòng",
      course: "CS201",
      mastery: 45,
      severity: "moderate",
      levelBadge: "🟠 Trung bình",
      detail: "Nhầm lẫn điều kiện tràn hàng đợi (front == (rear + 1) % MAX).",
    },
    {
      id: "recursion-depth",
      rank: "03",
      name: "Recursion & Stack Depth",
      vietnamese: "Ngăn xếp đệ quy & Điều kiện dừng",
      course: "MA110",
      mastery: 62,
      severity: "reinforce",
      levelBadge: "🟡 Cần củng cố",
      detail:
        "Cần tối ưu bài toán Tháp Hà Nội & Fibonacci có bộ nhớ đệm (Memoization).",
    },
  ],
  Gf = {
    courseId: "cs201",
    code: "CS201",
    title: "DATA STRUCTURES & ALGORITHMS",
    vietnameseTitle: "Cấu trúc Dữ liệu & Giải thuật",
    credits: 3,
    mastery: 68,
    lecturesCount: 4,
    semester: "Học kỳ II · 2024",
    documents: [
      {
        id: "doc-1",
        filename: "Lecture_01_Arrays_and_Memory.pdf",
        coreConcepts: "12 khái niệm cốt lõi",
        status: "Đã kết nối",
        synced: !0,
        size: "2.4 MB",
      },
      {
        id: "doc-2",
        filename: "Lecture_02_LinkedList_and_Pointers.pdf",
        coreConcepts: "9 khái niệm cốt lõi",
        status: "Đã kết nối",
        synced: !0,
        size: "1.8 MB",
      },
      {
        id: "doc-3",
        filename: "Lecture_03_Stack_Queue_Recursion.pdf",
        coreConcepts: "15 khái niệm cốt lõi",
        status: "Đã kết nối",
        synced: !0,
        size: "3.1 MB",
      },
      {
        id: "doc-4",
        filename: "Lecture_06_Binary_Trees.pdf",
        coreConcepts: "18 khái niệm cốt lõi",
        status: "Mới nạp · Cần đồng bộ",
        synced: !1,
        size: "4.5 MB",
      },
    ],
    knowledgeTree: [
      {
        topic: "Tree Traversal (Preorder, Inorder, Postorder)",
        mastery: 32,
        status: "critical",
        totalQuestions: 18,
        correctQuestions: 6,
        subtopics: [
          "Pre-order (Root-L-R)",
          "In-order (L-Root-R)",
          "Post-order (L-R-Root)",
          "Call Stack Visualization",
        ],
      },
      {
        topic: "Stack & Queue Data Structures",
        mastery: 45,
        status: "moderate",
        totalQuestions: 20,
        correctQuestions: 9,
        subtopics: [
          "LIFO Principle",
          "FIFO Queue",
          "Circular Array Implementation",
        ],
      },
      {
        topic: "Linked Lists & Pointer Arithmetic",
        mastery: 85,
        status: "good",
        totalQuestions: 25,
        correctQuestions: 21,
        subtopics: [
          "Singly Linked List",
          "Doubly Linked List",
          "Cycle Detection (Floyd's)",
        ],
      },
      {
        topic: "Arrays & Contiguous Memory Allocation",
        mastery: 92,
        status: "mastered",
        totalQuestions: 22,
        correctQuestions: 20,
        subtopics: ["Static Array", "Dynamic Vector Growth", "Cache Locality"],
      },
    ],
    aiDiagnostic: {
      summary:
        "Qua phân tích 18 bài đánh giá thích ứng gần nhất, hệ số sai lệch tập trung 66.7% ở nhánh Duyệt cây đệ quy. Bạn thường xác định nhầm nút được duyệt trước khi stack quay lui (backtrack).",
      recommendation:
        "Làm đề trắc nghiệm thích ứng 10 câu với thuật toán chẩn đoán CTT để nhận diện rào cản nhận thức (cognitive bottleneck) và nhận hướng dẫn Socratic tương tác.",
      targetTopic: "Tree Traversal",
      estimatedTime: "12 phút",
    },
  },
  qf = [
    {
      day: "Thứ 2",
      date: "21/10",
      events: [
        {
          time: "07:30 - 11:30",
          code: "CS201",
          title: "Cấu trúc Dữ liệu & Giải thuật",
          room: "D9-401",
          type: "lecture",
        },
        {
          time: "14:00 - 16:30",
          code: "SELF",
          title: "Tự học Thư viện Tạ Quang Bửu",
          room: "Phòng 302",
          type: "study",
        },
      ],
    },
    {
      day: "Thứ 3",
      date: "22/10",
      isToday: !0,
      events: [
        {
          time: "09:30 - 11:30",
          code: "CS202",
          title: "Lập trình OOP Java",
          room: "TC-203",
          type: "lecture",
        },
        {
          time: "18:00 - 18:20",
          code: "AI-REVIEW",
          title: "Tree Traversal Review (Spaced Repetition)",
          room: "CTT AI Companion",
          type: "ai-scheduled",
          highlight: !0,
        },
      ],
    },
    {
      day: "Thứ 4",
      date: "23/10",
      events: [
        {
          time: "07:30 - 11:30",
          code: "CS201",
          title: "Thực hành DSA Lab",
          room: "C9-301",
          type: "lab",
        },
        {
          time: "14:00 - 16:30",
          code: "MA110",
          title: "Toán rời rạc",
          room: "D3-201",
          type: "lecture",
        },
      ],
    },
    {
      day: "Thứ 5",
      date: "24/10",
      events: [
        {
          time: "09:00 - 10:00",
          code: "AI-REVIEW",
          title: "Ôn tập Queue & Buffer Layout",
          room: "CTT App",
          type: "ai-scheduled",
        },
        {
          time: "15:30 - 17:30",
          code: "SPORT",
          title: "Bóng rổ CLB Quốc tế Miền Đông",
          room: "Sân vận động",
          type: "activity",
        },
      ],
    },
    {
      day: "Thứ 6",
      date: "25/10",
      events: [
        {
          time: "09:30 - 11:30",
          code: "MA110",
          title: "Toán rời rạc",
          room: "TC-405",
          type: "lecture",
        },
        {
          time: "18:00 - 18:30",
          code: "AI-REVIEW",
          title: "Pre-Exam Diagnostic Check",
          room: "CTT AI",
          type: "ai-scheduled",
        },
      ],
    },
    {
      day: "Thứ 7",
      date: "26/10",
      events: [
        {
          time: "09:00 - 11:00",
          code: "EXAM",
          title: "MINI-TEST DSA Lab (Chương 1–5)",
          room: "Phòng máy C9-301",
          type: "exam",
        },
      ],
    },
    {
      day: "Chủ Nhật",
      date: "27/10",
      events: [
        {
          time: "19:00 - 20:00",
          code: "RECAP",
          title: "Tổng kết tuần & Kế hoạch tuần 8",
          room: "CTT App",
          type: "study",
        },
      ],
    },
  ],
  Xf = [
    {
      id: 1,
      topic: "BST Search Order",
      difficulty: "Cơ bản",
      questionEn:
        "In a Binary Search Tree (BST), what property holds for the left child of a node with key K?",
      questionVi:
        "Trong Cây tìm kiếm nhị phân (BST), tính chất nào đúng với nút con bên trái của nút có khóa K?",
      options: [
        { key: "A", text: "Key < K", viText: "Khóa luôn nhỏ hơn K" },
        { key: "B", text: "Key > K", viText: "Khóa luôn lớn hơn K" },
        { key: "C", text: "Key == K", viText: "Khóa luôn bằng K" },
        {
          key: "D",
          text: "No relationship",
          viText: "Không có mối quan hệ xác định",
        },
      ],
      correctAnswer: "A",
      selectedAnswer: "A",
      isAnswered: !0,
      isCorrect: !0,
      explanation:
        "Định nghĩa BST chuẩn: Mọi nút thuộc cây con bên trái đều có giá trị nhỏ hơn nút cha (Key < K).",
    },
    {
      id: 2,
      topic: "Inorder Property",
      difficulty: "Cơ bản",
      questionEn:
        "Which tree traversal visited nodes in strictly ascending order when applied to a valid BST?",
      questionVi:
        "Thuật toán duyệt cây nào cho ra dãy các khóa theo thứ tự tăng dần đối với cây BST hợp lệ?",
      options: [
        {
          key: "A",
          text: "Preorder",
          viText: "Tiền thứ tự (Root → Left → Right)",
        },
        {
          key: "B",
          text: "Postorder",
          viText: "Hậu thứ tự (Left → Right → Root)",
        },
        {
          key: "C",
          text: "Inorder",
          viText: "Trung thứ tự (Left → Root → Right)",
        },
        {
          key: "D",
          text: "Level-order",
          viText: "Duyệt theo mức (Breadth-First Search)",
        },
      ],
      correctAnswer: "C",
      selectedAnswer: "A",
      isAnswered: !0,
      isCorrect: !1,
      explanation:
        "Bạn đã chọn Preorder (thăm Root trước). Với BST, phép duyệt Inorder (Left → Root → Right) mới luôn tạo ra dãy khóa tăng dần.",
    },
    {
      id: 3,
      topic: "Preorder Visit Order",
      difficulty: "Cơ bản",
      questionEn: "What does Preorder Traversal visit first?",
      questionVi:
        "Trong thuật toán duyệt cây tiền thứ tự (Preorder), nút nào được thăm đầu tiên?",
      options: [
        { key: "A", text: "Left subtree", viText: "Cây con bên trái" },
        { key: "B", text: "Right subtree", viText: "Cây con bên phải" },
        { key: "C", text: "Root", viText: "Nút gốc" },
        { key: "D", text: "Leaf nodes", viText: "Các nút lá" },
      ],
      correctAnswer: "C",
      selectedAnswer: "A",
      isAnswered: !0,
      isCorrect: !1,
      explanation:
        "Thuật toán Preorder luôn duyệt theo quy tắc: Root → Left Subtree → Right Subtree. Lựa chọn 'Left subtree' tương ứng với Inorder hoặc Postorder.",
    },
    {
      id: 4,
      topic: "Postorder Traversal",
      difficulty: "Trung bình",
      questionEn:
        "In Postorder traversal of a binary tree, when is the Root node processed?",
      questionVi:
        "Trong phép duyệt hậu thứ tự (Postorder), khi nào nút Gốc (Root) mới được xử lý?",
      options: [
        {
          key: "A",
          text: "Before both subtrees",
          viText: "Trước khi duyệt 2 cây con",
        },
        {
          key: "B",
          text: "Between left and right subtrees",
          viText: "Ở giữa cây con trái và phải",
        },
        {
          key: "C",
          text: "After both left and right subtrees",
          viText: "Sau khi cả 2 cây con trái và phải đã duyệt xong",
        },
        {
          key: "D",
          text: "At random time",
          viText: "Tại thời điểm ngẫu nhiên",
        },
      ],
      correctAnswer: "C",
      selectedAnswer: null,
      isAnswered: !1,
      isCorrect: null,
      explanation:
        "Postorder thực hiện: Left → Right → Root. Nút gốc luôn được thăm cuối cùng sau khi cả hai cây con đã hoàn tất.",
    },
    {
      id: 5,
      topic: "Level Order BFS",
      difficulty: "Trung bình",
      questionEn:
        "What data structure is fundamentally used to implement Level-order traversal iteratively?",
      questionVi:
        "Cấu trúc dữ liệu nào được sử dụng chủ yếu để cài đặt thuật toán duyệt theo mức (Level-order)?",
      options: [
        { key: "A", text: "Stack", viText: "Ngăn xếp (LIFO)" },
        { key: "B", text: "Queue", viText: "Hàng đợi (FIFO)" },
        { key: "C", text: "Priority Queue", viText: "Hàng đợi ưu tiên (Heap)" },
        { key: "D", text: "Hash Table", viText: "Bảng băm" },
      ],
      correctAnswer: "B",
      selectedAnswer: null,
      isAnswered: !1,
      isCorrect: null,
      explanation:
        "Duyệt theo mức (BFS) dùng Queue (FIFO) để lần lượt đưa các nút ở mức hiện tại vào và lấy ra theo thứ tự mức tăng dần.",
    },
    {
      id: 6,
      topic: "Recursion Stack Complexity",
      difficulty: "Trung bình",
      questionEn:
        "What is the worst-case space complexity of recursive tree traversal on a skewed binary tree of N nodes?",
      questionVi:
        "Độ phức tạp không gian (call stack) trường hợp xấu nhất của duyệt cây đệ quy trên cây lệch có N nút là gì?",
      options: [
        { key: "A", text: "O(1)", viText: "Bộ nhớ hằng số O(1)" },
        { key: "B", text: "O(log N)", viText: "O(log N)" },
        {
          key: "C",
          text: "O(N)",
          viText: "O(N) do stack sâu bằng số lượng nút",
        },
        { key: "D", text: "O(N^2)", viText: "O(N^2)" },
      ],
      correctAnswer: "C",
      selectedAnswer: null,
      isAnswered: !1,
      isCorrect: null,
      explanation:
        "Khi cây bị suy biến thành danh sách liên kết lệch một bên, độ sâu đệ quy đạt N, call stack chiếm O(N) bộ nhớ.",
    },
    {
      id: 7,
      topic: "Binary Tree Height & Nodes",
      difficulty: "Cơ bản",
      questionEn:
        "What is the maximum number of nodes at level L of a binary tree (root at level 0)?",
      questionVi:
        "Số lượng nút tối đa ở mức L của một cây nhị phân (gốc ở mức 0) là bao nhiêu?",
      options: [
        { key: "A", text: "2^L", viText: "2 mũ L nút" },
        { key: "B", text: "2^(L-1)", viText: "2 mũ (L-1) nút" },
        { key: "C", text: "2*L", viText: "2 nhân L nút" },
        { key: "D", text: "L^2", viText: "L bình phương nút" },
      ],
      correctAnswer: "A",
      selectedAnswer: null,
      isAnswered: !1,
      isCorrect: null,
      explanation:
        "Tại mức 0: 2^0 = 1 nút (gốc). Mức 1: tối đa 2 nút. Mức L: tối đa 2^L nút.",
    },
    {
      id: 8,
      topic: "Expression Tree Evaluation",
      difficulty: "Nâng cao",
      questionEn:
        "Which traversal of an Expression Tree produces the Postfix (Reverse Polish) notation?",
      questionVi:
        "Phép duyệt nào trên Cây biểu thức (Expression Tree) sẽ sinh ra ký pháp Ba Lan ngược (Postfix)?",
      options: [
        { key: "A", text: "Inorder", viText: "Trung thứ tự" },
        { key: "B", text: "Preorder", viText: "Tiền thứ tự" },
        { key: "C", text: "Postorder", viText: "Hậu thứ tự" },
        { key: "D", text: "Level-order", viText: "Duyệt theo tầng" },
      ],
      correctAnswer: "C",
      selectedAnswer: null,
      isAnswered: !1,
      isCorrect: null,
      explanation:
        "Duyệt Postorder hai toán hạng trước rồi tới toán tử, đúng chuẩn định dạng Postfix notation (VD: AB+).",
    },
    {
      id: 9,
      topic: "Complete vs Full Binary Tree",
      difficulty: "Trung bình",
      questionEn: "A Full Binary Tree is a tree where every node has either:",
      questionVi:
        "Một cây nhị phân đầy đủ (Full Binary Tree) là cây mà mỗi nút đều có:",
      options: [
        { key: "A", text: "0 or 1 child", viText: "0 hoặc 1 con" },
        { key: "B", text: "0 or 2 children", viText: "Đúng 0 hoặc đúng 2 con" },
        { key: "C", text: "Exactly 1 child", viText: "Đúng 1 con" },
        {
          key: "D",
          text: "Same number of left and right nodes",
          viText: "Số nút trái và phải bằng nhau",
        },
      ],
      correctAnswer: "B",
      selectedAnswer: null,
      isAnswered: !1,
      isCorrect: null,
      explanation:
        "Định nghĩa: Full Binary Tree là cây nhị phân mà mọi nút hoặc là lá (0 con), hoặc có đủ cả 2 con.",
    },
    {
      id: 10,
      topic: "Traversal Time Complexity",
      difficulty: "Cơ bản",
      questionEn:
        "What is the time complexity of visiting all N nodes in any standard binary tree traversal?",
      questionVi:
        "Độ phức tạp thời gian khi thăm toàn bộ N nút trong bất kỳ phép duyệt cây chuẩn nào là bao nhiêu?",
      options: [
        { key: "A", text: "O(log N)", viText: "O(log N)" },
        {
          key: "B",
          text: "O(N)",
          viText: "O(N) vì mỗi nút được thăm đúng 1 lần",
        },
        { key: "C", text: "O(N log N)", viText: "O(N log N)" },
        { key: "D", text: "O(N^2)", viText: "O(N^2)" },
      ],
      correctAnswer: "B",
      selectedAnswer: null,
      isAnswered: !1,
      isCorrect: null,
      explanation:
        "Mỗi nút và liên kết được duyệt qua một số lần hữu hạn cố định O(1), do đó tổng thời gian là O(N).",
    },
  ],
  Yf = [
    {
      id: "msg-1",
      sender: "user",
      senderName: "Nguyễn Trọng Tiến",
      timestamp: "14:24",
      content: "Tại sao mình cứ làm sai các câu hỏi về Tree Traversal vậy?",
    },
    {
      id: "msg-2",
      sender: "ai",
      senderName: "CTT Diagnostic Engine",
      badge: "Tree-DSP-v2",
      timestamp: "14:25",
      content: `Chào Tiến, mình đã phân tích **6 lần làm quiz gần nhất** của bạn:

* Bạn làm đúng **2/6 câu** về Tree Traversal (tỉ lệ sai **66.7%**).
* Sai sót chủ yếu: bạn nhầm lẫn giữa **Preorder (Root → Left → Right)** và **Inorder (Left → Root → Right)** khi hình dung ngăn xếp đệ quy (Call Stack).

🤔 **Câu hỏi gợi mở Socratic:**
Trong hàm đệ quy của duyệt **Preorder**, bạn thực hiện in/xử lý giá trị của \`root\` **TRƯỚC** hay **SAU** khi thực hiện lời gọi đệ quy \`traverse(root->left)\`?`,
      diagnosticPoints: [
        {
          type: "error",
          text: "Bạn làm đúng 2/6 câu về Tree Traversal (tỉ lệ sai 66.7%).",
        },
        {
          type: "warning",
          text: "Lỗi phổ biến nhất: Xác định sai nút được thăm đầu tiên trong cây con trái/phải.",
        },
      ],
      chips: [
        "Giải thích trực quan Call Stack",
        "Xem ví dụ C++ đệ quy",
        "Làm 1 câu trắc nghiệm nhanh kiểm tra lại",
      ],
    },
  ],
  Jf = {
    course: "CS201 · Cấu trúc Dữ liệu & Giải thuật",
    activeTopic: "Tree Traversal (Duyệt Cây)",
    mastery: "32% Mastery",
    recentMistakes: "4/6 câu trắc nghiệm gần đây chưa chính xác",
    connectedDocuments: [
      {
        name: "Lecture_06_Binary_Trees.pdf",
        page: "Trang 14: Preorder, Inorder, Postorder Definition",
        status: "Verified citation",
      },
      {
        name: "Lecture_06_Binary_Trees.pdf",
        page: "Trang 18: Stack Frames in Recursive Tree Traversal",
        status: "Verified citation",
      },
    ],
  },
  pu = E.createContext();
function Zf({ children: e }) {
  const [t, n] = E.useState("home"),
    [r, l] = E.useState("cs201"),
    [i, a] = E.useState(!1),
    [o, c] = E.useState(!1),
    [u, h] = E.useState(!1),
    [x, m] = E.useState(Wf),
    [y, j] = E.useState(fu),
    [N, I] = E.useState(Xf),
    [f, d] = E.useState(2),
    [p, v] = E.useState(135),
    [k, C] = E.useState(!0),
    [T, z] = E.useState(!1);
  E.useEffect(() => {
    let D;
    return (
      t === "quiz" &&
        k &&
        p > 0 &&
        (D = setInterval(() => {
          v((Ve) => (Ve > 0 ? Ve - 1 : 0));
        }, 1e3)),
      () => clearInterval(D)
    );
  }, [t, k, p]);
  const [U, P] = E.useState(Yf),
    [ye, Pe] = E.useState(!1),
    [St, dr] = E.useState(!1),
    [El, gn] = E.useState(!1),
    [yn, b] = E.useState("week"),
    [_, L] = E.useState(() => {
      const D = typeof window < "u" ? localStorage.getItem("ctt-theme") : null;
      return D
        ? D === "dark"
        : typeof window < "u" &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches;
    });
  E.useEffect(() => {
    _
      ? (document.documentElement.classList.add("dark"),
        localStorage.setItem("ctt-theme", "dark"))
      : (document.documentElement.classList.remove("dark"),
        localStorage.setItem("ctt-theme", "light"));
  }, [_]);
  const hu = {
    activeTab: t,
    setActiveTab: n,
    activeCourseId: r,
    setActiveCourseId: l,
    settingsModalOpen: i,
    setSettingsModalOpen: a,
    syncModalOpen: o,
    setSyncModalOpen: c,
    addCourseModalOpen: u,
    setAddCourseModalOpen: h,
    user: x,
    setUser: m,
    courses: y,
    setCourses: j,
    cs201Detail: Gf,
    calendarSchedule: qf,
    aiKnowledgeContext: Jf,
    quizQuestions: N,
    activeQuestionIndex: f,
    quizTimeLeft: p,
    isQuizTimerRunning: k,
    setIsQuizTimerRunning: C,
    quizCompletedModalOpen: T,
    setQuizCompletedModalOpen: z,
    handleSelectQuizAnswer: (D, Ve) => {
      I((Le) => {
        const Ct = [...Le],
          pr = Ct[D],
          xu = Ve === pr.correctAnswer;
        return (
          (Ct[D] = {
            ...pr,
            selectedAnswer: Ve,
            isAnswered: !0,
            isCorrect: xu,
          }),
          Ct
        );
      });
    },
    handleNextQuestion: () => {
      f < N.length - 1 ? d(f + 1) : z(!0);
    },
    handlePrevQuestion: () => {
      f > 0 && d(f - 1);
    },
    handleJumpToQuestion: (D) => {
      D >= 0 && D < N.length && d(D);
    },
    handleAskCompanionFromQuiz: () => {
      const D = N[f],
        Ve = `Mình đang làm câu ${D.id}: "${D.questionVi}". Tại sao chọn ${D.selectedAnswer || "A"} lại chưa chính xác?`;
      (P((Le) => [
        ...Le,
        {
          id: `msg-${Date.now()}`,
          sender: "user",
          senderName: x.name,
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          content: Ve,
        },
      ]),
        n("ai-companion"),
        Pe(!0),
        setTimeout(() => {
          (P((Le) => [
            ...Le,
            {
              id: `msg-${Date.now() + 1}`,
              sender: "ai",
              senderName: "CTT Companion (Socratic)",
              badge: "Live-Tutor",
              timestamp: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
              content: `Trong câu hỏi này: **"${D.questionVi}"**, thuật toán đang khảo sát là **Preorder (Tiền thứ tự)**.

Nhắc lại quy ước:
- **Pre-order:** Root được thăm trước nhất.
- **In-order:** Left subtree được duyệt trước rồi mới đến Root.
- **Post-order:** Cả hai cây con trái & phải được duyệt xong rồi mới tới Root.

Bạn có nhận thấy điểm khác biệt mấu chốt giữa thời điểm thực hiện thao tác trên nút gốc của 3 phương pháp này không?`,
              chips: [
                "Hiểu rồi, mình nhầm với Inorder",
                "Cho mình xem code minh họa",
                "Quay lại làm tiếp bài trắc nghiệm",
              ],
            },
          ]),
            Pe(!1));
        }, 900));
    },
    chatMessages: U,
    isAiTyping: ye,
    handleSendMessage: (D) => {
      if (!D.trim()) return;
      const Ve = {
        id: `msg-${Date.now()}`,
        sender: "user",
        senderName: x.name,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        content: D,
      };
      (P((Le) => [...Le, Ve]),
        Pe(!0),
        setTimeout(() => {
          let Le =
              "Mình đã ghi nhận câu hỏi của bạn. Cùng xem xét từng bước nhé: theo phương pháp Socratic, hãy thử nhớ lại cấu trúc bộ nhớ của ngăn xếp (Stack Frame). Khi hàm đệ quy được gọi, địa chỉ trở về được lưu ở đâu?",
            Ct = [
              "Lưu trên đỉnh Call Stack",
              "Lưu vào Heap",
              "Luyện tập bài tập liên quan",
            ];
          if (D.includes("Call Stack") || D.includes("ngăn xếp"))
            ((Le =
              "Chính xác! Mỗi lần gọi hàm `traverse(node)`, một frame mới được đẩy lên đỉnh Call Stack. Chỉ khi frame của cây con bên trái return, chương trình mới tiếp tục thực hiện câu lệnh kế tiếp."),
              (Ct = [
                "Vậy Preorder in giá trị khi nào?",
                "Xem sơ đồ cây",
                "Quay lại Quiz",
              ]));
          else if (D.includes("C++") || D.includes("code"))
            ((Le = `Dưới đây là khung hàm C++ chuẩn:
\`\`\`cpp
void preorder(Node* root) {
    if (!root) return;
    cout << root->val << " "; // 1. Xử lý Root trước
    preorder(root->left);     // 2. Đi sang Left
    preorder(root->right);    // 3. Đi sang Right
}
\`\`\`
Bạn thấy dòng \`cout\` nằm ở bước 1 chứ?`),
              (Ct = [
                "Đã rõ ràng!",
                "Thế còn Inorder thì sao?",
                "Quay lại làm bài trắc nghiệm",
              ]));
          else if (D.includes("Quiz") || D.includes("trắc nghiệm")) {
            (n("quiz"), Pe(!1));
            return;
          }
          (P((pr) => [
            ...pr,
            {
              id: `msg-${Date.now() + 1}`,
              sender: "ai",
              senderName: "CTT Companion (Socratic)",
              badge: "Socratic-AI",
              timestamp: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
              content: Le,
              chips: Ct,
            },
          ]),
            Pe(!1));
        }, 1e3));
    },
    calendarOptimized: St,
    setCalendarOptimized: dr,
    calendarLocked: El,
    setCalendarLocked: gn,
    calendarViewMode: yn,
    setCalendarViewMode: b,
    isDarkMode: _,
    toggleDarkMode: () => {
      L((D) => !D);
    },
  };
  return s.jsx(pu.Provider, { value: hu, children: e });
}
function F() {
  const e = E.useContext(pu);
  if (!e) throw new Error("useApp must be used within an AppProvider");
  return e;
}
function g({ name: e, className: t = "", fill: n = !1, size: r = 20 }) {
  return s.jsx("span", {
    className: `material-symbols-outlined ${n ? "fill" : ""} ${t}`,
    style: { fontSize: `${r}px`, lineHeight: 1 },
    "aria-hidden": "true",
    children: e,
  });
}
function ep() {
  const {
      activeTab: e,
      setActiveTab: t,
      setSettingsModalOpen: n,
      user: r,
    } = F(),
    l = [
      { id: "home", label: "Trang chủ", icon: "home", matchTabs: ["home"] },
      {
        id: "courses",
        label: "Khóa học",
        icon: "menu_book",
        count: "3",
        matchTabs: ["courses", "course-detail"],
      },
      {
        id: "study-calendar",
        label: "Thời khóa biểu",
        icon: "calendar_today",
        matchTabs: ["study-calendar"],
      },
      {
        id: "quiz",
        label: "Luyện tập thích ứng",
        icon: "quiz",
        dot: !0,
        matchTabs: ["quiz"],
      },
      {
        id: "ai-companion",
        label: "Trợ lý CTT AI",
        icon: "smart_toy",
        matchTabs: ["ai-companion"],
      },
    ],
    i = (a) => a.matchTabs.includes(e);
  return s.jsxs("aside", {
    className:
      "hidden lg:flex w-64 h-screen flex-shrink-0 bg-surface-container-lowest/80 backdrop-blur-md flex-col justify-between p-3.5 z-30 border-r border-surface-container-high/40 select-none",
    children: [
      s.jsxs("div", {
        className: "flex flex-col gap-6",
        children: [
          s.jsxs("button", {
            onClick: () => t("home"),
            className:
              "flex items-center gap-3 px-2.5 py-1.5 rounded-xl hover:bg-surface-container-low/80 text-left transition-all group",
            children: [
              s.jsx("div", {
                className:
                  "w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0 group-hover:scale-105 transition-transform",
                children: s.jsx("img", {
                  alt: "Học Cùng CTT",
                  className: "h-6 w-auto object-contain",
                  src: r.logoUrl,
                }),
              }),
              s.jsxs("div", {
                className: "flex flex-col min-w-0",
                children: [
                  s.jsx("span", {
                    className:
                      "font-title text-[15px] text-on-surface font-bold tracking-tight truncate",
                    children: "Học Cùng CTT",
                  }),
                  s.jsx("span", {
                    className:
                      "text-[11px] text-on-surface-variant font-medium",
                    children: "EIU",
                  }),
                ],
              }),
            ],
          }),
          s.jsx("nav", {
            className: "flex flex-col gap-1",
            children: l.map((a) => {
              const o = i(a);
              return s.jsxs(
                "button",
                {
                  onClick: () => t(a.id),
                  "aria-current": o ? "page" : void 0,
                  className: `flex items-center justify-between px-3 py-2 rounded-xl text-left transition-all ${o ? "bg-primary-container/15 text-primary font-semibold shadow-2xs" : "text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-medium"}`,
                  children: [
                    s.jsxs("div", {
                      className: "flex items-center gap-2.5 min-w-0",
                      children: [
                        s.jsx(g, {
                          name: a.icon,
                          size: 20,
                          fill: o,
                          className: o
                            ? "text-primary"
                            : "text-on-surface-variant",
                        }),
                        s.jsx("span", {
                          className: "text-[14px] truncate",
                          children: a.label,
                        }),
                      ],
                    }),
                    a.count &&
                      s.jsx("span", {
                        className: `text-[11px] font-semibold px-2 py-0.5 rounded-md ${o ? "bg-primary/10 text-primary" : "bg-surface-container text-on-surface-variant"}`,
                        children: a.count,
                      }),
                    a.dot &&
                      !o &&
                      s.jsx("span", {
                        className: "w-1.5 h-1.5 rounded-full bg-primary/70",
                      }),
                  ],
                },
                a.id,
              );
            }),
          }),
        ],
      }),
      s.jsxs("div", {
        className:
          "pt-3 border-t border-surface-container-high/40 flex items-center justify-between px-1",
        children: [
          s.jsxs("div", {
            className: "flex items-center gap-2.5 min-w-0",
            children: [
              s.jsx("div", {
                className:
                  "relative w-8 h-8 rounded-full overflow-hidden bg-primary-container/20 border border-primary/20 shrink-0",
                children: s.jsx("img", {
                  src: r.avatarUrl,
                  alt: r.name,
                  className: "w-full h-full object-cover",
                }),
              }),
              s.jsxs("div", {
                className: "flex flex-col min-w-0",
                children: [
                  s.jsx("span", {
                    className:
                      "text-[13px] font-semibold text-on-surface truncate",
                    children: r.name,
                  }),
                  s.jsx("span", {
                    className: "text-[10px] text-on-surface-variant truncate",
                    children: r.studentId,
                  }),
                ],
              }),
            ],
          }),
          s.jsx("button", {
            onClick: () => n(!0),
            className:
              "w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors",
            "aria-label": "Cài đặt",
            children: s.jsx(g, { name: "settings", size: 18 }),
          }),
        ],
      }),
    ],
  });
}
function tp({ onToggleMobileMenu: e }) {
  const {
      user: t,
      setSettingsModalOpen: n,
      activeTab: r,
      setActiveTab: l,
      isDarkMode: i,
      toggleDarkMode: a,
      handleJumpToQuestion: o,
    } = F(),
    [c, u] = E.useState(!1),
    [h, x] = E.useState(""),
    [m, y] = E.useState(!1),
    j = () => {
      switch (r) {
        case "home":
          return "Tổng quan học tập";
        case "courses":
          return "Khóa học của bạn";
        case "course-detail":
          return "Chi tiết môn học CS201";
        case "quiz":
          return "Trắc nghiệm thích ứng";
        case "study-calendar":
          return "Thời khóa biểu thông minh";
        case "ai-companion":
          return "CTT Socratic AI Mentor";
        default:
          return "HỌC CÙNG CTT";
      }
    },
    N = (I) => {
      I.preventDefault();
      const f = h.toLowerCase();
      f.includes("tree") || f.includes("cây") || f.includes("traversal")
        ? (o(2), l("quiz"), x(""))
        : f.includes("toán") || f.includes("ma110")
          ? (l("courses"), x(""))
          : f.includes("lịch") || f.includes("tkb")
            ? (l("study-calendar"), x(""))
            : f.includes("ai") || f.includes("mentor") || f.includes("hỏi")
              ? (l("ai-companion"), x(""))
              : (l("courses"), x(""));
    };
  return s.jsxs("header", {
    className:
      "h-14 flex-shrink-0 bg-surface-container-lowest/60 backdrop-blur-md flex items-center justify-between px-4 lg:px-7 border-b border-surface-container-high/30 z-20 select-none",
    children: [
      s.jsxs("div", {
        className: "flex items-center gap-3 min-w-0",
        children: [
          s.jsx("button", {
            onClick: e,
            className:
              "lg:hidden w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors",
            "aria-label": "Mở menu",
            children: s.jsx(g, { name: "menu", size: 20 }),
          }),
          s.jsx("div", {
            className: "flex items-center gap-2 min-w-0",
            children: s.jsx("h1", {
              className: "text-[15px] font-bold text-on-surface truncate",
              children: j(),
            }),
          }),
        ],
      }),
      s.jsx("div", {
        className: "hidden md:flex flex-1 max-w-sm mx-6",
        children: s.jsx("form", {
          onSubmit: N,
          className: "relative w-full",
          children: s.jsxs("div", {
            className: `flex items-center gap-2 w-full px-3 py-1.5 rounded-lg bg-surface-container-low/60 border transition-all ${c ? "border-primary/50 bg-surface-container-lowest shadow-2xs" : "border-surface-container-high/30 hover:border-surface-container-high/60"}`,
            children: [
              s.jsx(g, {
                name: "search",
                size: 16,
                className: "text-on-surface-variant/80 shrink-0",
              }),
              s.jsx("input", {
                type: "text",
                placeholder: "Tìm kiếm nhanh... (Tree Traversal, CS201)",
                value: h,
                onChange: (I) => x(I.target.value),
                onFocus: () => u(!0),
                onBlur: () => u(!1),
                className:
                  "w-full bg-transparent text-on-surface text-[13px] placeholder:text-on-surface-variant/60 focus:outline-none",
              }),
              s.jsx("kbd", {
                className:
                  "hidden lg:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-on-surface-variant/70 bg-surface-container/60 rounded border border-surface-container-high/30 shrink-0",
                children: "⌘K",
              }),
            ],
          }),
        }),
      }),
      s.jsxs("div", {
        className: "flex items-center gap-1.5 sm:gap-2 shrink-0",
        children: [
          s.jsx("span", {
            className:
              "hidden sm:inline-block text-[12px] font-medium text-on-surface-variant mr-1",
            children: t.academicWeek,
          }),
          s.jsxs("div", {
            className: "relative",
            children: [
              s.jsxs("button", {
                onClick: () => y(!m),
                className:
                  "w-8 h-8 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low flex items-center justify-center transition-colors relative",
                "aria-label": "Thông báo",
                children: [
                  s.jsx(g, { name: "notifications", size: 18 }),
                  s.jsx("span", {
                    className:
                      "absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-error",
                  }),
                ],
              }),
              m &&
                s.jsxs("div", {
                  className:
                    "absolute right-0 mt-2 w-76 bg-surface-container-lowest rounded-xl shadow-lg border border-surface-container-high/60 p-3 z-50 animate-in fade-in duration-150",
                  children: [
                    s.jsxs("div", {
                      className:
                        "flex items-center justify-between pb-2 mb-2 border-b border-surface-container-high/40 text-[12px] font-semibold text-on-surface",
                      children: [
                        s.jsx("span", { children: "Thông báo" }),
                        s.jsx("span", {
                          className: "text-[10px] text-error font-medium",
                          children: "1 bài ôn tập",
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      onClick: () => {
                        (o(2), l("quiz"), y(!1));
                      },
                      className:
                        "p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer flex flex-col gap-1",
                      children: [
                        s.jsxs("div", {
                          className:
                            "flex items-center justify-between text-[11px] font-medium text-primary",
                          children: [
                            s.jsx("span", {
                              children: "Tree Traversal · CS201",
                            }),
                            s.jsx("span", { children: "10 phút" }),
                          ],
                        }),
                        s.jsx("p", {
                          className:
                            "text-[11px] text-on-surface-variant leading-relaxed",
                          children:
                            "Luyện tập 5 câu hỏi nhanh để củng cố kiến thức Call Stack.",
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          }),
          s.jsx("button", {
            onClick: a,
            className:
              "w-8 h-8 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low flex items-center justify-center transition-colors",
            title: i ? "Giao diện sáng" : "Giao diện tối",
            "aria-label": "Đổi giao diện",
            children: s.jsx(g, {
              name: i ? "light_mode" : "dark_mode",
              size: 18,
            }),
          }),
        ],
      }),
    ],
  });
}
function np({ isDrawerOpen: e, onCloseDrawer: t }) {
  const {
      activeTab: n,
      setActiveTab: r,
      setSettingsModalOpen: l,
      user: i,
    } = F(),
    a = [
      { id: "home", label: "Home", icon: "home" },
      {
        id: "courses",
        label: "Khóa học",
        icon: "menu_book",
        matchTabs: ["courses", "course-detail"],
      },
      { id: "quiz", label: "Quiz", icon: "quiz" },
      { id: "study-calendar", label: "Lịch học", icon: "calendar_month" },
      { id: "ai-companion", label: "AI Mentor", icon: "psychology" },
    ],
    o = (c) => (c.matchTabs ? c.matchTabs.includes(n) : n === c.id);
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx("nav", {
        className:
          "lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-surface-container-lowest/95 backdrop-blur-lg border-t border-surface-container-high/60 flex items-center justify-around px-2 z-40 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]",
        children: a.map((c) => {
          const u = o(c);
          return s.jsxs(
            "button",
            {
              onClick: () => r(c.id),
              className: `flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all ${u ? "text-primary font-bold" : "text-on-surface-variant hover:text-on-surface"}`,
              children: [
                s.jsx("div", {
                  className: `p-1 rounded-lg ${u ? "bg-primary-container/15 text-primary" : ""}`,
                  children: s.jsx(g, { name: c.icon, size: 20, fill: u }),
                }),
                s.jsx("span", {
                  className: "text-[10px] tracking-tight mt-0.5",
                  children: c.label,
                }),
              ],
            },
            c.id,
          );
        }),
      }),
      e &&
        s.jsxs("div", {
          className: "lg:hidden fixed inset-0 z-50 flex",
          children: [
            s.jsx("div", {
              className:
                "fixed inset-0 bg-on-surface/40 backdrop-blur-sm transition-opacity",
              onClick: t,
            }),
            s.jsxs("div", {
              className:
                "relative w-72 max-w-[80vw] h-full bg-surface-container-lowest flex flex-col justify-between p-4 shadow-2xl z-10 animate-in slide-in-from-left duration-200",
              children: [
                s.jsxs("div", {
                  className: "flex flex-col gap-4",
                  children: [
                    s.jsxs("div", {
                      className:
                        "flex items-center justify-between pb-3 border-b border-surface-container-high/60",
                      children: [
                        s.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            s.jsx("img", {
                              alt: "Học Cùng CTT",
                              className: "h-7 w-auto object-contain",
                              src: i.logoUrl,
                            }),
                            s.jsx("span", {
                              className:
                                "font-title text-title text-on-surface font-bold",
                              children: "HỌC CÙNG CTT",
                            }),
                          ],
                        }),
                        s.jsx("button", {
                          onClick: t,
                          className:
                            "w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container",
                          children: s.jsx(g, { name: "close", size: 20 }),
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "flex flex-col gap-1",
                      children: [
                        a.map((c) => {
                          const u = o(c);
                          return s.jsxs(
                            "button",
                            {
                              onClick: () => {
                                (r(c.id), t());
                              },
                              className: `flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all ${u ? "bg-primary-container text-on-primary font-semibold" : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"}`,
                              children: [
                                s.jsx(g, { name: c.icon, size: 20 }),
                                s.jsx("span", {
                                  className: "font-label-md text-label-md",
                                  children: c.label,
                                }),
                              ],
                            },
                            c.id,
                          );
                        }),
                        s.jsx("div", {
                          className: "h-px bg-surface-container-high my-2",
                        }),
                        s.jsxs("button", {
                          onClick: () => {
                            (l(!0), t());
                          },
                          className:
                            "flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-on-surface-variant hover:bg-surface-container hover:text-on-surface",
                          children: [
                            s.jsx(g, { name: "settings", size: 20 }),
                            s.jsx("span", {
                              className: "font-label-md text-label-md",
                              children: "Cài đặt hệ thống",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className:
                    "p-3 rounded-xl bg-surface-container-low flex items-center gap-3",
                  children: [
                    s.jsx("div", {
                      className:
                        "w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold",
                      children: s.jsx(g, { name: "person", size: 18 }),
                    }),
                    s.jsxs("div", {
                      className: "flex flex-col min-w-0",
                      children: [
                        s.jsx("span", {
                          className:
                            "font-label-md text-label-md font-bold text-on-surface truncate",
                          children: i.name,
                        }),
                        s.jsx("span", {
                          className:
                            "font-label-sm text-label-sm text-on-surface-variant truncate",
                          children: i.role,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
function rp({ children: e }) {
  const [t, n] = E.useState(!1);
  return s.jsxs("div", {
    className:
      "bg-background text-on-surface h-screen w-full flex overflow-hidden",
    children: [
      s.jsx(ep, {}),
      s.jsxs("div", {
        className: "flex-1 h-screen flex flex-col min-w-0 overflow-hidden",
        children: [
          s.jsx(tp, { onToggleMobileMenu: () => n(!0) }),
          s.jsx("main", {
            className:
              "flex-1 overflow-y-auto p-3 sm:p-5 lg:p-6 bg-background pb-24 lg:pb-8",
            children: s.jsx("div", {
              className: "w-full max-w-7xl mx-auto",
              children: e,
            }),
          }),
        ],
      }),
      s.jsx(np, { isDrawerOpen: t, onCloseDrawer: () => n(!1) }),
    ],
  });
}
function lp() {
  const { setActiveTab: e, handleJumpToQuestion: t } = F(),
    n = () => {
      (t(2), e("quiz"));
    },
    r = () => {
      e("ai-companion");
    };
  return s.jsx("div", {
    className:
      "relative overflow-hidden rounded-2xl bg-surface-container-low/80 hover:bg-surface-container-low border border-surface-container-high/40 p-5 sm:p-6 transition-all shadow-2xs",
    children: s.jsxs("div", {
      className:
        "flex flex-col md:flex-row md:items-center justify-between gap-5",
      children: [
        s.jsxs("div", {
          className: "flex items-start gap-3.5 max-w-2xl",
          children: [
            s.jsx("div", {
              className:
                "w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20",
              children: s.jsx(g, { name: "play_arrow", size: 22, fill: !0 }),
            }),
            s.jsxs("div", {
              className: "flex flex-col min-w-0",
              children: [
                s.jsxs("div", {
                  className: "flex items-center gap-2 mb-1",
                  children: [
                    s.jsx("span", {
                      className: "text-[12px] font-semibold text-primary",
                      children: "Tiếp tục bài học",
                    }),
                    s.jsx("span", {
                      className:
                        "text-[11px] text-on-surface-variant font-medium",
                      children: "· CS201 Cấu trúc dữ liệu & GT",
                    }),
                  ],
                }),
                s.jsx("h2", {
                  className:
                    "text-lg sm:text-xl font-bold text-on-surface tracking-tight",
                  children: "Duyệt cây nhị phân (Tree Traversal)",
                }),
                s.jsx("p", {
                  className:
                    "text-[13px] text-on-surface-variant mt-1 leading-relaxed",
                  children:
                    "CTT AI đã soạn sẵn 5 câu hỏi thích ứng ngắn giúp bạn phân biệt rõ cơ chế đệ quy Call Stack giữa In-order và Post-order.",
                }),
              ],
            }),
          ],
        }),
        s.jsxs("div", {
          className: "flex items-center gap-2.5 shrink-0",
          children: [
            s.jsx("button", {
              type: "button",
              onClick: r,
              className:
                "px-3.5 py-2 rounded-xl text-on-surface hover:bg-surface-container text-[13px] font-medium transition-colors border border-surface-container-high/40",
              children: "Hỏi trợ lý CTT",
            }),
            s.jsxs("button", {
              type: "button",
              onClick: n,
              className:
                "px-4 py-2 rounded-xl bg-primary hover:bg-primary/90 text-on-primary text-[13px] font-semibold flex items-center gap-1.5 shadow-sm transition-all active:scale-98",
              children: [
                s.jsx("span", { children: "Luyện tập (10 phút)" }),
                s.jsx(g, { name: "arrow_forward", size: 16 }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function sp() {
  const {
      setActiveTab: e,
      setActiveCourseId: t,
      handleJumpToQuestion: n,
    } = F(),
    r = [
      {
        id: "quiz-fast",
        label: "Luyện tập nhanh (5 phút)",
        icon: "bolt",
        onClick: () => {
          (n(2), e("quiz"));
        },
      },
      {
        id: "ask-ai",
        label: "Hỏi trợ lý CTT AI",
        icon: "smart_toy",
        onClick: () => e("ai-companion"),
      },
      {
        id: "today-cal",
        label: "Xem thời khóa biểu hôm nay",
        icon: "calendar_today",
        onClick: () => e("study-calendar"),
      },
      {
        id: "cs201-docs",
        label: "Tài liệu CS201",
        icon: "description",
        onClick: () => {
          (t("cs201"), e("course-detail"));
        },
      },
    ];
  return s.jsx("div", {
    className: "flex items-center gap-2 overflow-x-auto py-1 no-scrollbar",
    children: r.map((l) =>
      s.jsxs(
        "button",
        {
          type: "button",
          onClick: l.onClick,
          className:
            "flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-low/70 hover:bg-surface-container border border-surface-container-high/40 text-[12px] font-medium text-on-surface-variant hover:text-on-surface whitespace-nowrap transition-all active:scale-95 shrink-0",
          children: [
            s.jsx(g, { name: l.icon, size: 15, className: "text-primary" }),
            s.jsx("span", { children: l.label }),
          ],
        },
        l.id,
      ),
    ),
  });
}
function ip() {
  const { setActiveTab: e } = F(),
    t = [
      {
        id: "s1",
        time: "09:30 - 11:30",
        title: "Lập trình OOP Java",
        room: "TC-203 · Giảng đường",
        status: "completed",
        statusText: "Đã học",
        icon: "school",
      },
      {
        id: "s2",
        time: "18:00 - 18:20",
        title: "Duyệt cây nhị phân (AI Slot)",
        room: "20p Spaced Repetition",
        status: "action",
        statusText: "Bắt đầu",
        icon: "auto_awesome",
      },
      {
        id: "s3",
        time: "20:30 - 21:15",
        title: "Đọc slide Toán rời rạc MA110",
        room: "Hàm sinh & Đệ quy",
        status: "upcoming",
        statusText: "Sắp tới",
        icon: "menu_book",
      },
    ];
  return s.jsxs("div", {
    className: "flex flex-col gap-3",
    children: [
      s.jsxs("div", {
        className: "flex items-center justify-between",
        children: [
          s.jsx("h3", {
            className: "text-[15px] font-bold text-on-surface",
            children: "Lịch học hôm nay",
          }),
          s.jsxs("button", {
            onClick: () => e("study-calendar"),
            className:
              "text-[12px] font-medium text-primary hover:underline flex items-center gap-1",
            children: [
              s.jsx("span", { children: "Xem cả tuần" }),
              s.jsx(g, { name: "chevron_right", size: 14 }),
            ],
          }),
        ],
      }),
      s.jsx("div", {
        className: "flex flex-col gap-2",
        children: t.map((n) =>
          s.jsxs(
            "div",
            {
              className:
                "flex items-center justify-between p-3 rounded-xl bg-surface-container-low/60 hover:bg-surface-container-low border border-surface-container-high/30 transition-colors",
              children: [
                s.jsxs("div", {
                  className: "flex items-center gap-3 min-w-0",
                  children: [
                    s.jsx("div", {
                      className:
                        "w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant shrink-0",
                      children: s.jsx(g, {
                        name: n.icon,
                        size: 17,
                        className:
                          n.status === "action"
                            ? "text-primary"
                            : "text-on-surface-variant",
                      }),
                    }),
                    s.jsxs("div", {
                      className: "flex flex-col min-w-0",
                      children: [
                        s.jsx("span", {
                          className:
                            "text-[13px] font-semibold text-on-surface truncate",
                          children: n.title,
                        }),
                        s.jsxs("span", {
                          className:
                            "text-[11px] text-on-surface-variant truncate",
                          children: [n.time, " · ", n.room],
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "shrink-0",
                  children: [
                    n.status === "completed" &&
                      s.jsxs("span", {
                        className:
                          "inline-flex items-center gap-1 text-[11px] font-medium text-secondary bg-secondary-container/30 px-2 py-0.5 rounded-full",
                        children: [
                          s.jsx(g, { name: "check", size: 12 }),
                          n.statusText,
                        ],
                      }),
                    n.status === "action" &&
                      s.jsx("button", {
                        type: "button",
                        onClick: () => e("quiz"),
                        className:
                          "px-3 py-1 rounded-lg bg-primary text-on-primary text-[11px] font-semibold hover:bg-primary/90 transition-colors shadow-2xs",
                        children: n.statusText,
                      }),
                    n.status === "upcoming" &&
                      s.jsx("span", {
                        className:
                          "text-[11px] font-medium text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-full",
                        children: n.statusText,
                      }),
                  ],
                }),
              ],
            },
            n.id,
          ),
        ),
      }),
    ],
  });
}
function ap() {
  const { setActiveTab: e, setActiveCourseId: t } = F(),
    n = (r) => {
      (t(r), e("course-detail"));
    };
  return s.jsxs("div", {
    className: "flex flex-col gap-3",
    children: [
      s.jsxs("div", {
        className: "flex items-center justify-between",
        children: [
          s.jsx("h3", {
            className: "text-[15px] font-bold text-on-surface",
            children: "Khóa học của bạn",
          }),
          s.jsxs("button", {
            onClick: () => e("courses"),
            className:
              "text-[12px] font-medium text-primary hover:underline flex items-center gap-1",
            children: [
              s.jsx("span", { children: "Tất cả môn" }),
              s.jsx(g, { name: "chevron_right", size: 14 }),
            ],
          }),
        ],
      }),
      s.jsx("div", {
        className: "grid grid-cols-1 md:grid-cols-3 gap-3",
        children: fu.map((r) =>
          s.jsxs(
            "div",
            {
              onClick: () => n(r.id),
              className:
                "p-4 rounded-xl bg-surface-container-low/60 hover:bg-surface-container-low border border-surface-container-high/30 hover:border-surface-container-high/60 cursor-pointer transition-all flex flex-col justify-between gap-3 group shadow-2xs",
              children: [
                s.jsxs("div", {
                  className: "flex flex-col gap-1.5",
                  children: [
                    s.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        s.jsx("span", {
                          className:
                            "text-[11px] font-bold text-primary px-2 py-0.5 rounded-md bg-primary/10",
                          children: r.code,
                        }),
                        s.jsxs("span", {
                          className:
                            "text-[11px] font-semibold text-on-surface-variant",
                          children: [r.progress, "%"],
                        }),
                      ],
                    }),
                    s.jsx("h4", {
                      className:
                        "text-[14px] font-bold text-on-surface group-hover:text-primary transition-colors line-clamp-1",
                      children: r.name,
                    }),
                    s.jsxs("p", {
                      className: "text-[11px] text-on-surface-variant",
                      children: [r.lecturer, " · ", r.credits, " tín chỉ"],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "flex flex-col gap-1",
                  children: [
                    s.jsx("div", {
                      className:
                        "w-full h-1 rounded-full bg-surface-container overflow-hidden",
                      children: s.jsx("div", {
                        className:
                          "h-full bg-primary rounded-full transition-all duration-300",
                        style: { width: `${r.progress}%` },
                      }),
                    }),
                    s.jsxs("div", {
                      className:
                        "flex items-center justify-between text-[10px] text-on-surface-variant pt-0.5",
                      children: [
                        s.jsxs("span", {
                          children: [r.documentsCount, " tài liệu"],
                        }),
                        s.jsx("span", {
                          className: "text-secondary font-medium",
                          children: "EIU",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            },
            r.id,
          ),
        ),
      }),
    ],
  });
}
function op() {
  const {
      setActiveTab: e,
      setActiveCourseId: t,
      handleJumpToQuestion: n,
    } = F(),
    r = (l) => {
      l.id === "tree-traversal"
        ? (n(2), e("quiz"))
        : (t(l.course.toLowerCase()), e("course-detail"));
    };
  return s.jsxs("div", {
    className: "flex flex-col gap-3",
    children: [
      s.jsxs("div", {
        className: "flex items-center justify-between",
        children: [
          s.jsx("h3", {
            className: "text-[15px] font-bold text-on-surface",
            children: "Chủ đề nên ôn lại",
          }),
          s.jsx("span", {
            className: "text-[11px] text-on-surface-variant font-medium",
            children: "Dựa trên bài làm gần đây",
          }),
        ],
      }),
      s.jsx("div", {
        className: "grid grid-cols-1 sm:grid-cols-3 gap-2.5",
        children: Kf.map((l) =>
          s.jsxs(
            "div",
            {
              onClick: () => r(l),
              className:
                "p-3 rounded-xl bg-surface-container-low/50 hover:bg-surface-container-low border border-surface-container-high/30 cursor-pointer transition-colors flex items-center justify-between gap-2",
              children: [
                s.jsxs("div", {
                  className: "flex flex-col min-w-0",
                  children: [
                    s.jsx("span", {
                      className:
                        "text-[13px] font-semibold text-on-surface truncate",
                      children: l.name,
                    }),
                    s.jsxs("span", {
                      className: "text-[11px] text-on-surface-variant",
                      children: [l.course, " · Năng lực ", l.mastery, "%"],
                    }),
                  ],
                }),
                s.jsx("button", {
                  type: "button",
                  className:
                    "w-7 h-7 rounded-lg bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors shrink-0",
                  "aria-label": "Ôn tập",
                  children: s.jsx(g, { name: "arrow_forward", size: 15 }),
                }),
              ],
            },
            l.id,
          ),
        ),
      }),
    ],
  });
}
function Ja() {
  const { user: e } = F();
  return s.jsxs("div", {
    className: "flex flex-col gap-6 select-none max-w-4xl mx-auto py-2",
    children: [
      s.jsxs("div", {
        className: "flex items-center justify-between gap-4",
        children: [
          s.jsxs("div", {
            className: "flex flex-col",
            children: [
              s.jsxs("h1", {
                className:
                  "text-xl sm:text-2xl font-bold text-on-surface tracking-tight",
                children: ["Chào ", e.name.split(" ").pop(), " 👋"],
              }),
              s.jsxs("p", {
                className: "text-[13px] text-on-surface-variant mt-0.5",
                children: [
                  "Sẵn sàng cho buổi học hôm nay? Bạn đã duy trì chuỗi ",
                  e.streakDays,
                  " ngày liên tiếp.",
                ],
              }),
            ],
          }),
          s.jsxs("div", {
            className:
              "hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[12px] font-semibold",
            children: [
              s.jsx(g, { name: "local_fire_department", size: 16, fill: !0 }),
              s.jsxs("span", { children: [e.streakDays, " ngày streak"] }),
            ],
          }),
        ],
      }),
      s.jsx(lp, {}),
      s.jsx(sp, {}),
      s.jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-5 pt-1",
        children: [s.jsx(ip, {}), s.jsx(op, {})],
      }),
      s.jsx("div", { className: "pt-2", children: s.jsx(ap, {}) }),
    ],
  });
}
function mu({
  value: e = 0,
  max: t = 100,
  variant: n = "primary",
  height: r = "h-1.5",
  className: l = "",
}) {
  const i = Math.min(Math.max((e / t) * 100, 0), 100),
    a = {
      primary: "bg-primary-container",
      secondary: "bg-secondary",
      error: "bg-error",
      warning: "bg-tertiary-container",
    };
  return s.jsx("div", {
    className: `w-full bg-surface-container-highest rounded-full overflow-hidden ${r} ${l}`,
    role: "progressbar",
    "aria-valuenow": e,
    "aria-valuemin": 0,
    "aria-valuemax": t,
    children: s.jsx("div", {
      className: `h-full rounded-full transition-all duration-500 ease-out ${a[n] || a.primary}`,
      style: { width: `${i}%` },
    }),
  });
}
function cp({ course: e }) {
  const { setActiveTab: t, setActiveCourseId: n } = F(),
    r = () => {
      (n(e.id), t("course-detail"));
    },
    i = ((a) => {
      switch (a) {
        case "cs201":
          return {
            bar: "bg-gradient-to-r from-primary to-primary-container",
            iconBg: "bg-primary-container/10 border-primary/20",
            iconText: "text-primary",
            icon: "account_tree",
            progressVariant: "primary",
          };
        case "ma110":
          return {
            bar: "bg-gradient-to-r from-tertiary-container to-amber-500",
            iconBg: "bg-tertiary-fixed/30 border-amber-500/20",
            iconText: "text-tertiary",
            icon: "functions",
            progressVariant: "warning",
          };
        default:
          return {
            bar: "bg-gradient-to-r from-secondary to-teal-400",
            iconBg: "bg-secondary-fixed/30 border-secondary/20",
            iconText: "text-secondary",
            icon: "code",
            progressVariant: "secondary",
          };
      }
    })(e.id);
  return s.jsxs("div", {
    className:
      "group relative flex flex-col justify-between bg-surface-container-lowest rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all overflow-hidden border border-surface-container-high/50 hover:border-primary/40",
    children: [
      s.jsx("div", {
        className: `absolute top-0 left-0 right-0 h-1.5 ${i.bar}`,
      }),
      s.jsxs("div", {
        className: "flex flex-col gap-4",
        children: [
          s.jsxs("div", {
            className: "flex items-start justify-between gap-3",
            children: [
              s.jsxs("div", {
                className: "flex flex-col min-w-0",
                children: [
                  s.jsxs("span", {
                    className:
                      "text-[12px] text-primary font-bold tracking-wider uppercase",
                    children: [e.code, " · ", e.credits, " TÍN CHỈ"],
                  }),
                  s.jsx("h2", {
                    className:
                      "text-lg sm:text-xl text-on-surface font-bold mt-1 leading-snug group-hover:text-primary transition-colors",
                    children: e.title,
                  }),
                ],
              }),
              s.jsx("div", {
                className: `w-12 h-12 rounded-2xl ${i.iconBg} ${i.iconText} border flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:scale-105 transition-transform`,
                children: s.jsx(g, { name: i.icon, size: 26 }),
              }),
            ],
          }),
          s.jsxs("div", {
            className:
              "flex items-center gap-2 text-on-surface-variant text-[13px] font-medium",
            children: [
              s.jsx(g, {
                name: "school",
                size: 17,
                className: "text-on-surface-variant/80",
              }),
              s.jsxs("span", {
                className: "truncate",
                children: [e.lecturer, " · ", e.progressWeek],
              }),
            ],
          }),
          s.jsxs("div", {
            className:
              "bg-surface-container-low/80 rounded-xl p-4 flex flex-col gap-2.5 border border-surface-container-high/40",
            children: [
              s.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  s.jsx("span", {
                    className: "text-[13px] text-on-surface font-bold",
                    children: "Độ vững kiến thức",
                  }),
                  s.jsxs("span", {
                    className: "text-lg text-primary font-extrabold",
                    children: [e.mastery, "%"],
                  }),
                ],
              }),
              s.jsx(mu, {
                value: e.mastery,
                max: 100,
                variant: i.progressVariant,
                height: "h-2",
              }),
              s.jsxs("div", {
                className:
                  "flex justify-between items-center text-[12px] text-on-surface-variant pt-0.5",
                children: [
                  s.jsxs("span", {
                    children: [
                      e.passedObjectives,
                      "/",
                      e.totalObjectives,
                      " mục tiêu đạt chuẩn",
                    ],
                  }),
                  s.jsxs("span", {
                    className: "font-semibold text-on-surface",
                    children: ["Mục tiêu: ", e.targetMastery, "%"],
                  }),
                ],
              }),
            ],
          }),
          e.weakConcept &&
            s.jsxs("div", {
              className:
                "rounded-xl bg-error-container/25 border border-error/25 p-3 flex items-start gap-2.5",
              children: [
                s.jsx("span", {
                  className:
                    "w-2.5 h-2.5 rounded-full bg-error mt-1 flex-shrink-0",
                }),
                s.jsxs("div", {
                  className: "flex flex-col min-w-0",
                  children: [
                    s.jsx("span", {
                      className: "text-[12px] text-error font-bold",
                      children: e.weakConcept.label,
                    }),
                    s.jsx("p", {
                      className:
                        "text-[12px] text-on-surface truncate mt-0.5 font-medium",
                      children: e.weakConcept.topic,
                    }),
                  ],
                }),
              ],
            }),
          e.nextSession &&
            s.jsxs("div", {
              className:
                "rounded-xl bg-surface-container-low/60 border border-surface-container-high/40 p-3 flex items-center justify-between",
              children: [
                s.jsxs("div", {
                  className: "flex items-center gap-2.5 min-w-0",
                  children: [
                    s.jsx(g, {
                      name: "play_circle",
                      size: 19,
                      className: "text-primary shrink-0",
                    }),
                    s.jsxs("div", {
                      className: "flex flex-col min-w-0",
                      children: [
                        s.jsx("span", {
                          className:
                            "text-[11px] text-on-surface-variant font-medium",
                          children: "Bài ôn luyện kế tiếp:",
                        }),
                        s.jsx("span", {
                          className:
                            "text-[13px] text-on-surface font-bold truncate",
                          children: e.nextSession.title,
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsx("span", {
                  className:
                    "text-[12px] text-on-surface-variant bg-surface-container px-2.5 py-0.5 rounded-full font-bold shrink-0",
                  children: e.nextSession.duration,
                }),
              ],
            }),
        ],
      }),
      s.jsxs("div", {
        className:
          "pt-4 mt-4 flex items-center justify-between border-t border-surface-container-high/40",
        children: [
          s.jsxs("span", {
            className:
              "text-[12px] text-on-surface-variant flex items-center gap-1.5 font-medium",
            children: [
              s.jsx(g, {
                name: "verified",
                size: 17,
                className: "text-secondary",
              }),
              s.jsxs("span", { children: [e.labCount, " bài tập lab"] }),
            ],
          }),
          s.jsxs("button", {
            type: "button",
            onClick: r,
            className:
              "flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary hover:bg-primary/90 text-on-primary text-[13px] font-bold shadow-2xs group-hover:scale-[1.02] transition-all active:scale-95",
            children: [
              s.jsx("span", { children: "Mở môn học" }),
              s.jsx(g, { name: "arrow_forward", size: 16 }),
            ],
          }),
        ],
      }),
    ],
  });
}
function ur({
  isOpen: e,
  onClose: t,
  title: n,
  children: r,
  maxWidth: l = "max-w-lg",
  icon: i = null,
}) {
  return (
    E.useEffect(() => {
      const a = (o) => {
        o.key === "Escape" && e && t();
      };
      return (
        e
          ? ((document.body.style.overflow = "hidden"),
            window.addEventListener("keydown", a))
          : (document.body.style.overflow = ""),
        () => {
          ((document.body.style.overflow = ""),
            window.removeEventListener("keydown", a));
        }
      );
    }, [e, t]),
    e
      ? s.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center p-4",
          children: [
            s.jsx("div", {
              className:
                "fixed inset-0 bg-on-surface/40 backdrop-blur-sm transition-opacity",
              onClick: t,
              "aria-hidden": "true",
            }),
            s.jsxs("div", {
              role: "dialog",
              "aria-modal": "true",
              "aria-labelledby": "modal-title",
              className: `relative w-full ${l} bg-surface-container-lowest rounded-2xl p-6 shadow-2xl z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200`,
              children: [
                s.jsxs("div", {
                  className:
                    "flex items-center justify-between pb-4 border-b border-surface-container-high/60",
                  children: [
                    s.jsxs("div", {
                      className: "flex items-center gap-2.5",
                      children: [
                        i &&
                          s.jsx("div", {
                            className:
                              "w-9 h-9 rounded-xl bg-primary-container/10 text-primary flex items-center justify-center",
                            children: s.jsx(g, { name: i, size: 20 }),
                          }),
                        s.jsx("h3", {
                          id: "modal-title",
                          className:
                            "font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight",
                          children: n,
                        }),
                      ],
                    }),
                    s.jsx("button", {
                      onClick: t,
                      className:
                        "w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors",
                      "aria-label": "Đóng cửa sổ",
                      children: s.jsx(g, { name: "close", size: 20 }),
                    }),
                  ],
                }),
                s.jsx("div", { className: "mt-4", children: r }),
              ],
            }),
          ],
        })
      : null
  );
}
function tt({
  children: e,
  variant: t = "primary",
  size: n = "md",
  icon: r = null,
  iconRight: l = null,
  disabled: i = !1,
  onClick: a,
  type: o = "button",
  className: c = "",
  loading: u = !1,
  title: h = "",
}) {
  const x = {
      primary:
        "bg-primary-container text-on-primary hover:opacity-95 shadow-sm active:scale-[0.98]",
      primarySolid:
        "bg-primary text-on-primary hover:bg-primary-container shadow-sm active:scale-[0.98]",
      secondary:
        "bg-secondary text-on-secondary hover:opacity-95 shadow-sm active:scale-[0.98]",
      surface:
        "bg-surface-container hover:bg-surface-container-high text-on-surface active:scale-[0.98]",
      surfaceLowest:
        "bg-surface-container-lowest hover:bg-surface-container text-on-surface shadow-sm active:scale-[0.98]",
      ghost:
        "text-on-surface-variant hover:text-on-surface hover:bg-surface-container active:scale-[0.98]",
      error:
        "bg-error-container text-on-error-container hover:bg-error-container/80 active:scale-[0.98]",
      outline:
        "border border-surface-container-high text-on-surface hover:bg-surface-container-low active:scale-[0.98]",
    },
    m = {
      sm: "px-2.5 py-1.5 text-label-sm font-semibold rounded-lg gap-1.5",
      md: "px-4 py-2 text-label-md font-semibold rounded-xl gap-2",
      lg: "px-5 py-2.5 text-label-md font-bold rounded-xl gap-2.5",
    };
  return s.jsxs("button", {
    type: o,
    onClick: a,
    disabled: i || u,
    title: h,
    className: `inline-flex items-center justify-center font-title transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none ${x[t] || x.primary} ${m[n] || m.md} ${c}`,
    children: [
      u
        ? s.jsx("span", {
            className: "material-symbols-outlined text-[18px] animate-spin",
            children: "refresh",
          })
        : r && s.jsx(g, { name: r, size: n === "sm" ? 16 : 18 }),
      s.jsx("span", { children: e }),
      !u && l && s.jsx(g, { name: l, size: n === "sm" ? 16 : 18 }),
    ],
  });
}
function up({ isOpen: e, onClose: t }) {
  const [n, r] = E.useState(!1),
    [l, i] = E.useState(!1),
    a = () => {
      (r(!0),
        setTimeout(() => {
          (r(!1),
            i(!0),
            setTimeout(() => {
              (i(!1), t());
            }, 1500));
        }, 1200));
    };
  return s.jsx(ur, {
    isOpen: e,
    onClose: t,
    title: "Đồng bộ Cổng đào tạo QAA / SIS EIU",
    icon: "sync",
    children: s.jsxs("div", {
      className: "flex flex-col gap-4",
      children: [
        s.jsx("p", {
          className: "font-body-md text-body-md text-on-surface-variant",
          children:
            "Hệ thống sẽ kết nối với tài khoản CTT Quốc tế Miền Đông để cập nhật thời khóa biểu, danh sách lớp học phần và điểm quá trình kỳ 2024.2.",
        }),
        s.jsxs("div", {
          className:
            "p-3.5 rounded-xl bg-surface-container-low flex flex-col gap-2",
          children: [
            s.jsxs("div", {
              className: "flex items-center justify-between text-label-sm",
              children: [
                s.jsx("span", {
                  className: "text-on-surface-variant",
                  children: "Trạng thái kết nối:",
                }),
                s.jsxs("span", {
                  className:
                    "font-semibold text-secondary flex items-center gap-1",
                  children: [
                    s.jsx("span", {
                      className: "w-2 h-2 rounded-full bg-secondary",
                    }),
                    "Đã xác thực SSO EIU",
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className: "flex items-center justify-between text-label-sm",
              children: [
                s.jsx("span", {
                  className: "text-on-surface-variant",
                  children: "Lần đồng bộ gần nhất:",
                }),
                s.jsx("span", {
                  className: "font-medium text-on-surface",
                  children: "22/10/2024, 08:30",
                }),
              ],
            }),
            s.jsxs("div", {
              className: "flex items-center justify-between text-label-sm",
              children: [
                s.jsx("span", {
                  className: "text-on-surface-variant",
                  children: "Mã sinh viên:",
                }),
                s.jsx("span", {
                  className: "font-medium text-on-surface",
                  children: "20205214 · Nguyễn Trọng Tiến",
                }),
              ],
            }),
          ],
        }),
        l
          ? s.jsxs("div", {
              className:
                "p-3 rounded-xl bg-secondary-container/60 text-on-secondary-container flex items-center gap-2 font-label-md",
              children: [
                s.jsx(g, {
                  name: "check_circle",
                  size: 20,
                  className: "text-secondary",
                }),
                s.jsx("span", {
                  children: "Đã cập nhật thành công 3 môn học & 14 buổi lab!",
                }),
              ],
            })
          : null,
        s.jsxs("div", {
          className:
            "flex items-center justify-end gap-2 pt-3 border-t border-surface-container-high/60",
          children: [
            s.jsx(tt, {
              variant: "surface",
              size: "md",
              onClick: t,
              disabled: n,
              children: "Đóng",
            }),
            s.jsx(tt, {
              variant: "primary",
              size: "md",
              icon: "sync",
              loading: n,
              onClick: a,
              children: n ? "Đang đồng bộ..." : "Bắt đầu đồng bộ",
            }),
          ],
        }),
      ],
    }),
  });
}
function dp({ isOpen: e, onClose: t, onAddCourse: n }) {
  const [r, l] = E.useState({ code: "", title: "", credits: 3, lecturer: "" }),
    i = (a) => {
      (a.preventDefault(),
        !(!r.code || !r.title) &&
          (n({
            id: r.code.toLowerCase(),
            code: r.code.toUpperCase(),
            title: r.title,
            credits: Number(r.credits),
            lecturer: r.lecturer || "Giảng viên EIU",
            progressWeek: "Tuần 1/16",
            mastery: 0,
            targetMastery: 80,
            passedObjectives: 0,
            totalObjectives: 30,
            labCount: 0,
            colorAccent: "primary-container",
            statusBadge: "Mới thêm",
          }),
          t()));
    };
  return s.jsx(ur, {
    isOpen: e,
    onClose: t,
    title: "Thêm môn học mới",
    icon: "add_circle",
    children: s.jsxs("form", {
      onSubmit: i,
      className: "flex flex-col gap-4",
      children: [
        s.jsxs("div", {
          children: [
            s.jsx("label", {
              className:
                "block text-label-sm font-semibold text-on-surface mb-1",
              children: "Mã học phần (Course Code)",
            }),
            s.jsx("input", {
              type: "text",
              required: !0,
              placeholder: "Ví dụ: CS301, IT3100",
              value: r.code,
              onChange: (a) => l({ ...r, code: a.target.value }),
              className:
                "w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary text-on-surface font-body-md",
            }),
          ],
        }),
        s.jsxs("div", {
          children: [
            s.jsx("label", {
              className:
                "block text-label-sm font-semibold text-on-surface mb-1",
              children: "Tên môn học",
            }),
            s.jsx("input", {
              type: "text",
              required: !0,
              placeholder: "Ví dụ: Cơ sở dữ liệu, Mạng máy tính",
              value: r.title,
              onChange: (a) => l({ ...r, title: a.target.value }),
              className:
                "w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary text-on-surface font-body-md",
            }),
          ],
        }),
        s.jsxs("div", {
          className: "grid grid-cols-2 gap-3",
          children: [
            s.jsxs("div", {
              children: [
                s.jsx("label", {
                  className:
                    "block text-label-sm font-semibold text-on-surface mb-1",
                  children: "Số tín chỉ",
                }),
                s.jsx("input", {
                  type: "number",
                  min: "1",
                  max: "6",
                  value: r.credits,
                  onChange: (a) => l({ ...r, credits: a.target.value }),
                  className:
                    "w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary text-on-surface font-body-md",
                }),
              ],
            }),
            s.jsxs("div", {
              children: [
                s.jsx("label", {
                  className:
                    "block text-label-sm font-semibold text-on-surface mb-1",
                  children: "Giảng viên phụ trách",
                }),
                s.jsx("input", {
                  type: "text",
                  placeholder: "TS. Nguyễn Văn A",
                  value: r.lecturer,
                  onChange: (a) => l({ ...r, lecturer: a.target.value }),
                  className:
                    "w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary text-on-surface font-body-md",
                }),
              ],
            }),
          ],
        }),
        s.jsxs("div", {
          className:
            "flex items-center justify-end gap-2 pt-3 border-t border-surface-container-high/60",
          children: [
            s.jsx(tt, {
              variant: "surface",
              size: "md",
              onClick: t,
              children: "Hủy",
            }),
            s.jsx(tt, {
              variant: "primary",
              size: "md",
              type: "submit",
              children: "Thêm môn học",
            }),
          ],
        }),
      ],
    }),
  });
}
function fp() {
  const {
      courses: e,
      setCourses: t,
      syncModalOpen: n,
      setSyncModalOpen: r,
      addCourseModalOpen: l,
      setAddCourseModalOpen: i,
    } = F(),
    a = (o) => {
      t((c) => [...c, o]);
    };
  return s.jsxs("div", {
    className: "flex flex-col gap-6 select-none max-w-6xl mx-auto py-2",
    children: [
      s.jsxs("div", {
        className:
          "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-surface-container-high/40",
        children: [
          s.jsxs("div", {
            className: "flex flex-col",
            children: [
              s.jsxs("div", {
                className: "flex items-center gap-2.5 flex-wrap",
                children: [
                  s.jsx("h1", {
                    className:
                      "text-xl sm:text-2xl font-bold text-on-surface tracking-tight",
                    children: "Khóa học của bạn",
                  }),
                  s.jsx("span", {
                    className:
                      "text-[12px] font-semibold text-primary px-2.5 py-0.5 rounded-full bg-primary/10",
                    children: "Học kỳ 2024.2 · EIU",
                  }),
                ],
              }),
              s.jsxs("p", {
                className: "text-[13px] text-on-surface-variant mt-1",
                children: [
                  e.length,
                  " môn học chính khóa · K65 Công nghệ Thông tin · Đại học Quốc tế Miền Đông Hà Nội",
                ],
              }),
            ],
          }),
          s.jsxs("div", {
            className: "flex items-center gap-2.5 flex-wrap",
            children: [
              s.jsxs("button", {
                type: "button",
                onClick: () => r(!0),
                className:
                  "px-4 py-2 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface text-[13px] font-semibold border border-surface-container-high/50 transition-colors flex items-center gap-2 shadow-2xs",
                children: [
                  s.jsx(g, {
                    name: "sync",
                    size: 17,
                    className: "text-primary",
                  }),
                  s.jsx("span", { children: "Đồng bộ từ QAA / SIS" }),
                ],
              }),
              s.jsxs("button", {
                type: "button",
                onClick: () => i(!0),
                className:
                  "px-4 py-2 rounded-xl bg-primary hover:bg-primary/90 text-on-primary text-[13px] font-semibold transition-all flex items-center gap-1.5 shadow-sm active:scale-95",
                children: [
                  s.jsx(g, { name: "add", size: 18 }),
                  s.jsx("span", { children: "Thêm môn học mới" }),
                ],
              }),
            ],
          }),
        ],
      }),
      s.jsx("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
        children: e.map((o) => s.jsx(cp, { course: o }, o.id)),
      }),
      s.jsx(up, { isOpen: n, onClose: () => r(!1) }),
      s.jsx(dp, { isOpen: l, onClose: () => i(!1), onAddCourse: a }),
    ],
  });
}
function pp() {
  const { setActiveTab: e, cs201Detail: t, handleJumpToQuestion: n } = F(),
    [r, l] = E.useState(t.documents),
    [i, a] = E.useState("all"),
    [o, c] = E.useState(null),
    u = () => {
      (n(2), e("quiz"));
    },
    h = (m) => {
      var j;
      const y = (j = m.target.files) == null ? void 0 : j[0];
      if (y) {
        const N = {
          id: `doc-${Date.now()}`,
          filename: y.name,
          coreConcepts: "Đang phân tích vector embeddings...",
          status: "Đã nạp",
          synced: !0,
          size: `${(y.size / 1024 / 1024).toFixed(1)} MB`,
        };
        (l((I) => [N, ...I]),
          c(`Đã nạp thành công ${y.name}`),
          setTimeout(() => c(null), 3e3));
      }
    },
    x = t.knowledgeTree.filter((m) =>
      i === "weak" ? m.mastery < 60 : i === "mastered" ? m.mastery >= 60 : !0,
    );
  return s.jsxs("div", {
    className: "flex flex-col gap-6 select-none max-w-6xl mx-auto py-2",
    children: [
      s.jsxs("section", {
        className:
          "flex flex-col md:flex-row md:items-center justify-between gap-4 pb-3 border-b border-surface-container-high/40",
        children: [
          s.jsxs("div", {
            className: "flex flex-col gap-1.5 min-w-0",
            children: [
              s.jsxs("div", {
                className: "flex items-center gap-2 text-on-surface-variant",
                children: [
                  s.jsxs("button", {
                    onClick: () => e("courses"),
                    className:
                      "inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:underline transition-all group",
                    children: [
                      s.jsx(g, {
                        name: "arrow_back",
                        size: 17,
                        className:
                          "group-hover:-translate-x-0.5 transition-transform",
                      }),
                      s.jsx("span", { children: "Quay lại Khóa học" }),
                    ],
                  }),
                  s.jsx("span", {
                    className: "text-outline-variant font-medium",
                    children: "/",
                  }),
                  s.jsx("span", {
                    className:
                      "text-[12px] text-on-surface-variant font-semibold uppercase tracking-wider",
                    children: t.semester,
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "flex items-baseline gap-3 flex-wrap",
                children: [
                  s.jsxs("h1", {
                    className:
                      "text-xl sm:text-2xl font-bold text-on-surface tracking-tight",
                    children: [
                      t.title,
                      " ",
                      s.jsxs("span", {
                        className: "text-primary font-semibold",
                        children: ["(", t.code, ")"],
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className:
                      "inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full",
                    children: [
                      s.jsx("span", {
                        className: "w-2 h-2 rounded-full bg-secondary",
                      }),
                      s.jsxs("span", {
                        className: "text-[12px] font-bold",
                        children: [
                          t.mastery,
                          "% Mastery · ",
                          r.length,
                          " slide PDF đã kết nối",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          s.jsxs("div", {
            className: "flex items-center gap-2.5 flex-wrap shrink-0",
            children: [
              s.jsxs("label", {
                className:
                  "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface text-[13px] font-semibold border border-surface-container-high/50 transition-all cursor-pointer shadow-2xs active:scale-95",
                children: [
                  s.jsx(g, {
                    name: "upload_file",
                    size: 18,
                    className: "text-primary",
                  }),
                  s.jsx("span", { children: "Nạp tài liệu PDF" }),
                  s.jsx("input", {
                    type: "file",
                    accept: ".pdf,.doc,.docx",
                    className: "hidden",
                    onChange: h,
                  }),
                ],
              }),
              s.jsxs("button", {
                type: "button",
                onClick: u,
                className:
                  "px-4 py-2 rounded-xl bg-primary hover:bg-primary/90 text-on-primary text-[13px] font-bold transition-all flex items-center gap-1.5 shadow-sm active:scale-95",
                children: [
                  s.jsx(g, { name: "auto_awesome", size: 18 }),
                  s.jsx("span", { children: "Tạo đề thích ứng" }),
                ],
              }),
            ],
          }),
        ],
      }),
      o &&
        s.jsxs("div", {
          className:
            "p-3.5 rounded-xl bg-secondary-container/40 text-secondary border border-secondary/30 flex items-center gap-2.5 text-[13px] font-semibold animate-in fade-in duration-200",
          children: [
            s.jsx(g, { name: "check_circle", size: 20 }),
            s.jsx("span", { children: o }),
          ],
        }),
      s.jsxs("div", {
        className: "grid grid-cols-1 lg:grid-cols-3 gap-5",
        children: [
          s.jsxs("div", {
            className:
              "flex flex-col bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-surface-container-high/40 justify-between gap-4",
            children: [
              s.jsxs("div", {
                className: "flex flex-col gap-3",
                children: [
                  s.jsxs("div", {
                    className:
                      "flex items-center justify-between pb-3 border-b border-surface-container-high/40",
                    children: [
                      s.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          s.jsx(g, {
                            name: "folder_open",
                            size: 20,
                            className: "text-primary",
                          }),
                          s.jsx("h3", {
                            className: "text-[15px] font-bold text-on-surface",
                            children: "Tài liệu đã nạp",
                          }),
                        ],
                      }),
                      s.jsxs("span", {
                        className:
                          "text-[11px] font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary",
                        children: [r.length, " files"],
                      }),
                    ],
                  }),
                  s.jsx("div", {
                    className: "flex flex-col gap-2.5",
                    children: r.map((m) =>
                      s.jsxs(
                        "div",
                        {
                          className:
                            "flex items-center justify-between p-3 rounded-xl bg-surface-container-low/70 hover:bg-surface-container border border-surface-container-high/30 transition-all group",
                          children: [
                            s.jsxs("div", {
                              className: "flex items-center gap-3 min-w-0",
                              children: [
                                s.jsx("div", {
                                  className:
                                    "w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-primary group-hover:text-white transition-colors",
                                  children: s.jsx(g, {
                                    name: "picture_as_pdf",
                                    size: 20,
                                  }),
                                }),
                                s.jsxs("div", {
                                  className: "flex flex-col min-w-0",
                                  children: [
                                    s.jsx("p", {
                                      className:
                                        "text-[13px] font-semibold text-on-surface truncate",
                                      children: m.filename,
                                    }),
                                    s.jsx("p", {
                                      className:
                                        "text-[11px] text-on-surface-variant truncate",
                                      children: m.coreConcepts,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            s.jsx("span", {
                              className:
                                "text-[11px] font-bold px-2 py-0.5 rounded-full bg-secondary-container/50 text-secondary shrink-0",
                              children: m.status,
                            }),
                          ],
                        },
                        m.id,
                      ),
                    ),
                  }),
                ],
              }),
              s.jsx("div", {
                className: "pt-3 border-t border-surface-container-high/40",
                children: s.jsx("p", {
                  className:
                    "text-[11px] text-on-surface-variant text-center font-medium",
                  children:
                    "AI liên tục vector hóa tài liệu để sinh câu hỏi bám sát giáo trình",
                }),
              }),
            ],
          }),
          s.jsxs("div", {
            className:
              "flex flex-col bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-surface-container-high/40 justify-between gap-4",
            children: [
              s.jsxs("div", {
                className: "flex flex-col gap-3",
                children: [
                  s.jsxs("div", {
                    className:
                      "flex items-center justify-between pb-3 border-b border-surface-container-high/40",
                    children: [
                      s.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          s.jsx(g, {
                            name: "account_tree",
                            size: 20,
                            className: "text-primary",
                          }),
                          s.jsx("h3", {
                            className: "text-[15px] font-bold text-on-surface",
                            children: "Cây tri thức",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className:
                          "flex items-center gap-1 bg-surface-container-low p-0.5 rounded-lg border border-surface-container-high/40 text-[11px] font-semibold",
                        children: [
                          s.jsx("button", {
                            type: "button",
                            onClick: () => a("all"),
                            className: `px-2 py-0.5 rounded ${i === "all" ? "bg-primary text-white" : "text-on-surface-variant"}`,
                            children: "Tất cả",
                          }),
                          s.jsx("button", {
                            type: "button",
                            onClick: () => a("weak"),
                            className: `px-2 py-0.5 rounded ${i === "weak" ? "bg-error text-white" : "text-on-surface-variant"}`,
                            children: "Cần ôn",
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsx("div", {
                    className: "flex flex-col gap-3",
                    children: x.map((m, y) => {
                      const j = m.mastery < 50,
                        N = m.mastery >= 80;
                      return s.jsxs(
                        "div",
                        {
                          className:
                            "p-3 rounded-xl bg-surface-container-low/70 border border-surface-container-high/30 flex flex-col gap-2",
                          children: [
                            s.jsxs("div", {
                              className: "flex items-center justify-between",
                              children: [
                                s.jsx("h4", {
                                  className:
                                    "text-[13px] font-bold text-on-surface truncate",
                                  children: m.topic,
                                }),
                                s.jsxs("span", {
                                  className: `text-[12px] font-extrabold ${j ? "text-error" : N ? "text-secondary" : "text-primary"}`,
                                  children: [m.mastery, "%"],
                                }),
                              ],
                            }),
                            s.jsx(mu, {
                              value: m.mastery,
                              max: 100,
                              variant: j
                                ? "error"
                                : N
                                  ? "secondary"
                                  : "primary",
                              height: "h-1.5",
                            }),
                            s.jsxs("div", {
                              className:
                                "flex items-center justify-between text-[11px] text-on-surface-variant pt-0.5",
                              children: [
                                s.jsxs("span", {
                                  children: [
                                    "Đúng ",
                                    m.correctQuestions,
                                    "/",
                                    m.totalQuestions,
                                    " câu",
                                  ],
                                }),
                                j &&
                                  s.jsxs("button", {
                                    type: "button",
                                    onClick: u,
                                    className:
                                      "text-error font-bold hover:underline flex items-center gap-0.5",
                                    children: [
                                      s.jsx("span", { children: "Luyện ngay" }),
                                      s.jsx(g, {
                                        name: "arrow_forward",
                                        size: 13,
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        },
                        y,
                      );
                    }),
                  }),
                ],
              }),
              s.jsxs("div", {
                className:
                  "pt-3 border-t border-surface-container-high/40 flex items-center justify-between text-[12px] text-on-surface-variant font-medium",
                children: [
                  s.jsx("span", { children: "Độ hoàn thành:" }),
                  s.jsx("span", {
                    className: "text-primary font-bold",
                    children: "68% / 100%",
                  }),
                ],
              }),
            ],
          }),
          s.jsxs("div", {
            className:
              "flex flex-col bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-surface-container-high/40 justify-between gap-4",
            children: [
              s.jsxs("div", {
                className: "flex flex-col gap-3.5",
                children: [
                  s.jsxs("div", {
                    className:
                      "flex items-center justify-between pb-3 border-b border-surface-container-high/40",
                    children: [
                      s.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          s.jsx(g, {
                            name: "psychology",
                            size: 20,
                            className: "text-primary",
                          }),
                          s.jsx("h3", {
                            className: "text-[15px] font-bold text-on-surface",
                            children: "Chẩn đoán CTT AI",
                          }),
                        ],
                      }),
                      s.jsx("span", {
                        className:
                          "text-[11px] font-bold text-error bg-error-container/60 px-2 py-0.5 rounded-full",
                        children: "Tree Traversal",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className:
                      "p-3.5 rounded-xl bg-error-container/20 border border-error/25 flex flex-col gap-2",
                    children: [
                      s.jsxs("div", {
                        className:
                          "flex items-center gap-2 text-error font-bold text-[13px]",
                        children: [
                          s.jsx(g, { name: "warning", size: 18 }),
                          s.jsx("span", {
                            children: "Rào cản nhận thức phát hiện được",
                          }),
                        ],
                      }),
                      s.jsx("p", {
                        className:
                          "text-[12px] text-on-surface leading-relaxed",
                        children: t.aiDiagnostic.summary,
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className:
                      "p-3.5 rounded-xl bg-surface-container-low/70 border border-surface-container-high/30 flex flex-col gap-2",
                    children: [
                      s.jsxs("div", {
                        className:
                          "flex items-center gap-1.5 text-primary font-bold text-[13px]",
                        children: [
                          s.jsx(g, { name: "lightbulb", size: 18 }),
                          s.jsx("span", {
                            children: "Khuyến nghị phương pháp học",
                          }),
                        ],
                      }),
                      s.jsx("p", {
                        className:
                          "text-[12px] text-on-surface-variant leading-relaxed",
                        children: t.aiDiagnostic.recommendation,
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className:
                      "p-3 rounded-xl bg-surface-container-low/60 flex items-center justify-between text-[12px] border border-surface-container-high/30",
                    children: [
                      s.jsx("span", {
                        className: "text-on-surface-variant font-medium",
                        children: "Thời gian hoàn thành:",
                      }),
                      s.jsx("span", {
                        className: "font-bold text-on-surface",
                        children: t.aiDiagnostic.estimatedTime,
                      }),
                    ],
                  }),
                ],
              }),
              s.jsxs("div", {
                className:
                  "pt-3 border-t border-surface-container-high/40 flex flex-col gap-2.5",
                children: [
                  s.jsxs("button", {
                    type: "button",
                    onClick: u,
                    className:
                      "w-full py-2.5 px-4 rounded-xl bg-primary hover:bg-primary/90 text-on-primary text-[13px] font-bold flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95",
                    children: [
                      s.jsx("span", { children: "Bắt đầu bài trắc nghiệm" }),
                      s.jsx(g, { name: "arrow_forward", size: 16 }),
                    ],
                  }),
                  s.jsx("button", {
                    type: "button",
                    onClick: () => e("ai-companion"),
                    className:
                      "text-center text-[12px] font-semibold text-primary hover:underline",
                    children: "Hoặc thảo luận trực tiếp với AI Mentor",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function mp() {
  const {
      quizQuestions: e,
      activeQuestionIndex: t,
      quizTimeLeft: n,
      handleJumpToQuestion: r,
      setActiveTab: l,
    } = F(),
    i = Math.floor(n / 60),
    a = n % 60,
    o = `${String(i).padStart(2, "0")}:${String(a).padStart(2, "0")}`,
    c = e[t];
  return s.jsxs("header", {
    className:
      "bg-surface-container-lowest rounded-2xl p-4 sm:p-5 shadow-sm border border-surface-container-high/40 flex flex-col gap-3.5 shrink-0 select-none",
    children: [
      s.jsxs("div", {
        className: "flex items-center justify-between gap-3",
        children: [
          s.jsxs("div", {
            className: "flex items-center gap-2.5 min-w-0",
            children: [
              s.jsx("div", {
                className:
                  "w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/20",
                children: s.jsx(g, { name: "account_tree", size: 20 }),
              }),
              s.jsxs("div", {
                className: "flex items-center gap-2 truncate",
                children: [
                  s.jsx("span", {
                    className: "text-[13px] text-primary font-bold",
                    children: "CS201",
                  }),
                  s.jsx("span", {
                    className: "text-outline text-xs",
                    children: "/",
                  }),
                  s.jsx("span", {
                    className:
                      "text-[14px] sm:text-[15px] text-on-surface font-bold truncate",
                    children:
                      (c == null ? void 0 : c.topic) || "Tree Traversal",
                  }),
                  s.jsxs("span", {
                    className:
                      "hidden sm:inline-flex px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[12px] font-bold",
                    children: ["Câu ", t + 1, "/", e.length],
                  }),
                ],
              }),
            ],
          }),
          s.jsxs("div", {
            className: "flex items-center gap-3 shrink-0",
            children: [
              s.jsxs("div", {
                className: `flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-mono text-sm sm:text-base font-bold tracking-tight shadow-2xs border ${n < 60 ? "bg-error-container text-error border-error/30 animate-pulse" : "bg-surface-container-low text-primary border-surface-container-high/50"}`,
                children: [
                  s.jsx(g, { name: "timer", size: 18 }),
                  s.jsx("span", { children: o }),
                ],
              }),
              s.jsxs("button", {
                onClick: () => l("course-detail"),
                className:
                  "flex items-center gap-1.5 px-3 py-1.5 text-on-surface-variant hover:text-error hover:bg-error-container/30 rounded-xl transition-colors text-[13px] font-semibold border border-surface-container-high/30",
                type: "button",
                children: [
                  s.jsx(g, { name: "logout", size: 17 }),
                  s.jsx("span", {
                    className: "hidden sm:inline",
                    children: "Thoát",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      s.jsxs("div", {
        className:
          "flex items-center justify-between pt-3 border-t border-surface-container-high/40 overflow-x-auto gap-3",
        children: [
          s.jsx("span", {
            className:
              "text-[12px] text-on-surface-variant font-bold uppercase tracking-wider shrink-0",
            children: "Điều hướng:",
          }),
          s.jsx("div", {
            className: "flex items-center gap-2 overflow-x-auto py-1",
            children: e.map((u, h) => {
              const x = h === t;
              let m =
                  "bg-surface-container-low text-on-surface-variant hover:bg-surface-container border border-surface-container-high/40",
                y = null;
              return (
                x
                  ? ((m =
                      "bg-primary text-white font-extrabold shadow-sm ring-2 ring-primary/40 ring-offset-2 border-transparent scale-105"),
                    (y = s.jsx("span", {
                      className: "text-[10px] ml-0.5",
                      children: "●",
                    })))
                  : u.isAnswered &&
                    (u.isCorrect
                      ? ((m =
                          "bg-secondary/15 text-secondary font-bold hover:ring-1 hover:ring-secondary border-secondary/30"),
                        (y = s.jsx(g, { name: "check", size: 13 })))
                      : ((m =
                          "bg-error-container/60 text-error font-bold hover:ring-1 hover:ring-error border-error/30"),
                        (y = s.jsx(g, { name: "close", size: 13 })))),
                s.jsxs(
                  "button",
                  {
                    onClick: () => r(h),
                    type: "button",
                    title: `Câu ${u.id}: ${u.topic}`,
                    className: `w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-[13px] font-bold flex items-center justify-center gap-0.5 transition-all shrink-0 active:scale-95 ${m}`,
                    children: [s.jsx("span", { children: u.id }), y],
                  },
                  u.id,
                )
              );
            }),
          }),
        ],
      }),
    ],
  });
}
function hp() {
  const {
      quizQuestions: e,
      activeQuestionIndex: t,
      handleSelectQuizAnswer: n,
    } = F(),
    r = e[t];
  return r
    ? s.jsxs("div", {
        className:
          "flex flex-col gap-4 min-h-0 flex-1 justify-between select-none",
        children: [
          s.jsxs("section", {
            className:
              "bg-surface-container-lowest rounded-2xl p-5 sm:p-6 shadow-sm border border-surface-container-high/40 relative overflow-hidden shrink-0",
            children: [
              s.jsx("div", {
                className: "absolute top-0 left-0 w-1.5 h-full bg-primary",
              }),
              s.jsxs("div", {
                className: "flex items-start justify-between gap-4 pl-2",
                children: [
                  s.jsxs("div", {
                    className: "flex flex-col gap-2 min-w-0",
                    children: [
                      s.jsxs("div", {
                        className: "flex items-center gap-2 flex-wrap",
                        children: [
                          s.jsxs("span", {
                            className:
                              "px-3 py-0.5 rounded-full bg-primary/10 text-primary font-bold text-[12px] uppercase tracking-wider",
                            children: [
                              "CÂU HỎI ",
                              String(r.id).padStart(2, "0"),
                            ],
                          }),
                          s.jsx("span", {
                            className: "text-outline text-xs",
                            children: "·",
                          }),
                          s.jsxs("span", {
                            className:
                              "text-[13px] text-on-surface-variant font-medium",
                            children: ["Độ khó: ", r.difficulty],
                          }),
                        ],
                      }),
                      s.jsx("h2", {
                        className:
                          "text-lg sm:text-xl text-on-surface font-bold tracking-tight mt-0.5 leading-snug",
                        children: r.questionEn,
                      }),
                      s.jsx("p", {
                        className:
                          "text-[14px] text-on-surface-variant leading-relaxed",
                        children: r.questionVi,
                      }),
                    ],
                  }),
                  s.jsx("div", {
                    className:
                      "shrink-0 w-11 h-11 rounded-2xl bg-surface-container-low flex items-center justify-center text-primary border border-surface-container-high/40 shadow-2xs",
                    children: s.jsx(g, { name: "quiz", size: 22 }),
                  }),
                ],
              }),
            ],
          }),
          s.jsx("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5 shrink-0",
            children: r.options.map((l) => {
              const i = r.selectedAnswer === l.key,
                a = r.isAnswered && l.key === r.correctAnswer,
                o = r.isAnswered && i && !r.isCorrect;
              let c = null,
                u = null,
                h = "bg-surface-container text-on-surface-variant",
                x =
                  "border-surface-container-high/50 hover:bg-surface-container-low/70 hover:border-primary/40";
              return (
                r.isAnswered
                  ? a
                    ? ((c = s.jsx("div", {
                        className:
                          "absolute left-0 top-0 bottom-0 w-2 bg-secondary rounded-l-2xl",
                      })),
                      (h = "bg-secondary text-white"),
                      (x =
                        "border-secondary/50 bg-secondary-container/20 ring-2 ring-secondary/30"),
                      (u = s.jsxs("span", {
                        className:
                          "inline-flex items-center gap-1 text-[12px] font-bold text-on-secondary-container bg-secondary-container px-3 py-0.5 rounded-full whitespace-nowrap",
                        children: [
                          s.jsx(g, { name: "check", size: 14 }),
                          "Đáp án chính xác",
                        ],
                      })))
                    : o &&
                      ((c = s.jsx("div", {
                        className:
                          "absolute left-0 top-0 bottom-0 w-2 bg-error rounded-l-2xl",
                      })),
                      (h = "bg-error text-white"),
                      (x =
                        "border-error/50 bg-error-container/20 ring-2 ring-error/30"),
                      (u = s.jsxs("span", {
                        className:
                          "inline-flex items-center gap-1 text-[12px] font-bold text-on-error-container bg-error-container px-3 py-0.5 rounded-full whitespace-nowrap",
                        children: [
                          s.jsx(g, { name: "close", size: 14 }),
                          "Bạn đã chọn",
                        ],
                      })))
                  : i &&
                    ((x =
                      "border-primary bg-primary/10 ring-2 ring-primary/40"),
                    (h = "bg-primary text-white")),
                s.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => n(t, l.key),
                    className: `relative bg-surface-container-lowest rounded-2xl p-4 sm:p-5 shadow-2xs border flex flex-col justify-between text-left transition-all active:scale-[0.99] ${x}`,
                    children: [
                      c,
                      s.jsxs("div", {
                        className:
                          "flex items-start justify-between gap-2 pl-2",
                        children: [
                          s.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [
                              s.jsx("span", {
                                className: `w-8 h-8 rounded-xl text-[14px] flex items-center justify-center font-extrabold shadow-2xs shrink-0 ${h}`,
                                children: l.key,
                              }),
                              s.jsx("span", {
                                className:
                                  "text-[14px] sm:text-[15px] font-bold text-on-surface",
                                children: l.text,
                              }),
                            ],
                          }),
                          u,
                        ],
                      }),
                      s.jsx("p", {
                        className:
                          "text-[13px] text-on-surface-variant pl-2 mt-2 leading-snug",
                        children: l.viText,
                      }),
                    ],
                  },
                  l.key,
                )
              );
            }),
          }),
          r.isAnswered &&
            s.jsxs("section", {
              className:
                "bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-surface-container-high/40 flex flex-col gap-3 shrink-0 animate-in fade-in duration-200",
              children: [
                s.jsxs("div", {
                  className:
                    "flex items-center justify-between pb-2.5 border-b border-surface-container-high/40",
                  children: [
                    s.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        r.isCorrect
                          ? s.jsx("span", {
                              className:
                                "w-7 h-7 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0",
                              children: s.jsx(g, { name: "check", size: 17 }),
                            })
                          : s.jsx("span", {
                              className:
                                "w-7 h-7 rounded-full bg-error-container text-on-error-container flex items-center justify-center shrink-0",
                              children: s.jsx(g, { name: "close", size: 17 }),
                            }),
                        s.jsx("span", {
                          className: "text-[14px] font-bold text-on-surface",
                          children: r.isCorrect
                            ? "Chính xác · Phân tích khái niệm"
                            : "Chưa chính xác · Phân tích nguyên nhân",
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className:
                        "flex items-center gap-1 text-primary font-bold text-[13px]",
                      children: [
                        s.jsx(g, { name: "psychology", size: 18 }),
                        s.jsx("span", { children: "CTT AI Diagnostic" }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-12 gap-4 items-center text-left",
                  children: [
                    s.jsx("div", {
                      className: "md:col-span-8 flex flex-col gap-1",
                      children: s.jsx("p", {
                        className:
                          "text-[13px] sm:text-[14px] text-on-surface leading-relaxed",
                        children: r.explanation,
                      }),
                    }),
                    s.jsxs("div", {
                      className:
                        "md:col-span-4 bg-surface-container-low/80 rounded-xl p-3.5 flex flex-col gap-2 border border-surface-container-high/30",
                      children: [
                        s.jsxs("div", {
                          className: "flex items-center justify-between",
                          children: [
                            s.jsx("span", {
                              className:
                                "text-[12px] text-on-surface-variant font-semibold",
                              children: "Năng lực chủ đề",
                            }),
                            s.jsx("span", {
                              className: `text-[13px] font-extrabold ${r.isCorrect ? "text-secondary" : "text-primary"}`,
                              children: r.isCorrect ? "+5%" : "+3%",
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            s.jsx("div", {
                              className:
                                "w-full bg-surface-container-highest h-2 rounded-full overflow-hidden",
                              children: s.jsx("div", {
                                className:
                                  "h-full bg-secondary rounded-full transition-all duration-700",
                                style: { width: `${r.isCorrect ? 40 : 35}%` },
                              }),
                            }),
                            s.jsx("span", {
                              className:
                                "text-[12px] text-on-surface font-extrabold",
                              children: r.isCorrect ? "40%" : "35%",
                            }),
                          ],
                        }),
                        s.jsx("span", {
                          className:
                            "text-[11px] text-on-surface-variant truncate font-medium",
                          children: "Tree Traversal (CS201)",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
        ],
      })
    : null;
}
function xp() {
  const {
      quizQuestions: e,
      activeQuestionIndex: t,
      handlePrevQuestion: n,
      handleNextQuestion: r,
      handleAskCompanionFromQuiz: l,
    } = F(),
    i = e.length,
    a = e.filter((h) => h.isAnswered && h.isCorrect).length,
    o = e.filter((h) => h.isAnswered && !h.isCorrect).length,
    c = i - a - o,
    u = Math.round(((a + o) / i) * 100);
  return s.jsxs("div", {
    className:
      "bg-surface-container-lowest rounded-2xl px-4 py-3 shadow-sm border border-surface-container-high/40 flex flex-col gap-2.5 shrink-0 select-none",
    children: [
      s.jsxs("div", {
        className: "flex items-center justify-between flex-wrap gap-2.5",
        children: [
          s.jsxs("button", {
            type: "button",
            onClick: n,
            disabled: t === 0,
            className:
              "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-surface-container-low hover:bg-surface-container disabled:opacity-40 disabled:cursor-not-allowed text-on-surface font-label-md text-label-md font-bold transition-all active:scale-[0.98] border border-surface-container-high/40",
            children: [
              s.jsx(g, { name: "arrow_back", size: 16 }),
              s.jsx("span", { children: "Câu trước" }),
            ],
          }),
          s.jsxs("button", {
            type: "button",
            onClick: l,
            className:
              "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary-container to-indigo-600 hover:from-primary hover:to-indigo-700 text-on-primary font-label-md text-label-md font-extrabold transition-all active:scale-[0.98] shadow-sm card-shadow-glow-primary",
            children: [
              s.jsx(g, { name: "smart_toy", size: 18 }),
              s.jsx("span", { children: "Hỏi CTT Companion" }),
              s.jsx("span", {
                className:
                  "text-[10px] px-1.5 py-0.2 rounded bg-white/20 uppercase font-bold",
                children: "Socratic",
              }),
            ],
          }),
          s.jsxs("button", {
            type: "button",
            onClick: r,
            className:
              "inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md font-extrabold transition-all shadow-sm active:scale-[0.98]",
            children: [
              s.jsx("span", {
                children: t === i - 1 ? "Nộp bài thi" : "Câu tiếp theo",
              }),
              s.jsx(g, { name: "arrow_forward", size: 16 }),
            ],
          }),
        ],
      }),
      s.jsxs("div", {
        className:
          "flex items-center justify-between pt-2 border-t border-surface-container-high/40 flex-wrap gap-2",
        children: [
          s.jsxs("div", {
            className: "flex items-center gap-2 text-label-sm",
            children: [
              s.jsx("span", {
                className:
                  "font-bold text-on-surface-variant uppercase tracking-wider text-[11px]",
                children: "Tổng quan:",
              }),
              s.jsxs("span", {
                className: "text-on-surface text-[12px] font-medium",
                children: [
                  i,
                  " câu hỏi · ",
                  s.jsxs("span", {
                    className: "text-secondary font-bold",
                    children: [a, " đúng"],
                  }),
                  " ·",
                  " ",
                  s.jsxs("span", {
                    className: "text-error font-bold",
                    children: [o, " sai"],
                  }),
                  " ·",
                  " ",
                  s.jsxs("span", {
                    className: "text-on-surface-variant font-medium",
                    children: [c, " chưa làm"],
                  }),
                ],
              }),
            ],
          }),
          s.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              s.jsx("div", {
                className:
                  "w-28 bg-surface-container-highest h-2 rounded-full overflow-hidden",
                children: s.jsx("div", {
                  className:
                    "h-full bg-primary-container rounded-full transition-all duration-300",
                  style: { width: `${u}%` },
                }),
              }),
              s.jsxs("span", {
                className:
                  "font-label-sm text-[12px] text-on-surface font-extrabold",
                children: [a + o, "/", i],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function gp() {
  const {
      quizQuestions: e,
      activeQuestionIndex: t,
      handleJumpToQuestion: n,
    } = F(),
    r = e[t];
  return s.jsxs("aside", {
    className:
      "w-full lg:w-80 h-full flex flex-col gap-3 shrink-0 overflow-y-auto lg:overflow-hidden select-none",
    children: [
      s.jsxs("div", {
        className:
          "bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-surface-container-high/40 flex flex-col gap-2.5 shrink-0",
        children: [
          s.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              s.jsxs("span", {
                className:
                  "font-label-md text-label-md font-extrabold text-on-surface flex items-center gap-1.5",
                children: [
                  s.jsx(g, {
                    name: "insights",
                    size: 18,
                    className: "text-primary",
                  }),
                  "TIẾN ĐỘ NĂNG LỰC",
                ],
              }),
              s.jsx("span", {
                className:
                  "px-2.5 py-0.5 rounded-full bg-error-container text-error font-label-sm text-[11px] font-bold border border-error/20",
                children: "🔴 Ưu tiên cao",
              }),
            ],
          }),
          s.jsxs("div", {
            className:
              "flex flex-col gap-2 bg-surface-container-low/70 rounded-xl p-3 border border-surface-container-high/30",
            children: [
              s.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  s.jsx("span", {
                    className:
                      "font-label-md text-label-md font-bold text-on-surface",
                    children: "Tree Traversal",
                  }),
                  s.jsx("span", {
                    className:
                      "font-label-md text-label-md font-extrabold text-primary",
                    children: "35% Mastery",
                  }),
                ],
              }),
              s.jsx("div", {
                className:
                  "w-full bg-surface-container-highest h-2 rounded-full overflow-hidden",
                children: s.jsx("div", {
                  className:
                    "h-full bg-primary rounded-full w-[35%] transition-all duration-500",
                }),
              }),
              s.jsxs("p", {
                className:
                  "font-body-sm text-[11px] text-error flex items-center gap-1 mt-0.5 font-medium",
                children: [
                  s.jsx(g, { name: "warning", size: 14 }),
                  "4/6 câu trắc nghiệm gần đây chưa chính xác",
                ],
              }),
            ],
          }),
        ],
      }),
      s.jsxs("div", {
        className:
          "bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-surface-container-high/40 flex flex-col gap-2.5 shrink-0",
        children: [
          s.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              s.jsxs("span", {
                className:
                  "font-label-md text-label-md font-extrabold text-on-surface flex items-center gap-1.5",
                children: [
                  s.jsx(g, {
                    name: "error_outline",
                    size: 18,
                    className: "text-error",
                  }),
                  "AI PHẢN HỒI",
                ],
              }),
              s.jsxs("span", {
                className:
                  "text-[11px] font-bold px-2 py-0.2 rounded-full bg-surface-container text-on-surface-variant",
                children: ["Câu ", r == null ? void 0 : r.id],
              }),
            ],
          }),
          s.jsxs("div", {
            className:
              "p-3 bg-error-container/30 rounded-xl flex flex-col gap-1.5 border-l-3 border-error",
            children: [
              s.jsxs("div", {
                className:
                  "flex items-center gap-1.5 text-error font-label-md font-bold",
                children: [
                  s.jsx(g, { name: "cancel", size: 16 }),
                  s.jsx("span", {
                    children:
                      r != null && r.isCorrect
                        ? "Đã nắm đúng"
                        : "Lưu ý trọng tâm",
                  }),
                ],
              }),
              s.jsxs("p", {
                className:
                  "font-body-sm text-[12px] text-on-surface leading-snug",
                children: [
                  s.jsx("strong", {
                    className: "text-primary",
                    children: "Preorder:",
                  }),
                  " Root → Left → Right",
                ],
              }),
              s.jsxs("div", {
                className:
                  "flex items-center justify-between font-label-sm text-[11px] pt-1.5 border-t border-surface-container-high/40",
                children: [
                  s.jsxs("span", {
                    className: "text-error font-medium truncate max-w-[130px]",
                    children: [
                      "Bạn chọn: ",
                      r != null && r.selectedAnswer
                        ? `${r.selectedAnswer}`
                        : "Chưa chọn",
                    ],
                  }),
                  s.jsxs("span", {
                    className: "text-secondary font-bold",
                    children: ["Đúng: ", r == null ? void 0 : r.correctAnswer],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      s.jsxs("div", {
        className:
          "bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-surface-container-high/40 flex flex-col gap-2.5 flex-1 min-h-[220px] lg:min-h-0 overflow-hidden",
        children: [
          s.jsxs("div", {
            className: "flex items-center justify-between shrink-0",
            children: [
              s.jsxs("span", {
                className:
                  "font-label-md text-label-md font-extrabold text-on-surface flex items-center gap-1.5",
                children: [
                  s.jsx(g, {
                    name: "history",
                    size: 18,
                    className: "text-primary",
                  }),
                  "LỊCH SỬ CÂU HỎI",
                ],
              }),
              s.jsxs("span", {
                className:
                  "font-label-sm text-[11px] text-on-surface-variant font-bold",
                children: [e.length, " câu"],
              }),
            ],
          }),
          s.jsx("div", {
            className: "flex flex-col gap-1.5 overflow-y-auto flex-1 pr-0.5",
            children: e.map((l, i) => {
              const a = i === t;
              let o = s.jsx("span", {
                className: "text-[11px] text-on-surface-variant font-medium",
                children: "○ Chưa làm",
              });
              return (
                a
                  ? (o = s.jsx("span", {
                      className:
                        "inline-flex items-center gap-0.5 text-[11px] font-bold text-primary",
                      children: "● Đang làm",
                    }))
                  : l.isAnswered &&
                    (l.isCorrect
                      ? (o = s.jsxs("span", {
                          className:
                            "inline-flex items-center gap-0.5 text-[11px] font-bold text-secondary",
                          children: [
                            s.jsx(g, { name: "check", size: 13 }),
                            "Đúng",
                          ],
                        }))
                      : (o = s.jsxs("span", {
                          className:
                            "inline-flex items-center gap-0.5 text-[11px] font-bold text-error",
                          children: [
                            s.jsx(g, { name: "close", size: 13 }),
                            "Sai",
                          ],
                        }))),
                s.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => n(i),
                    className: `flex items-center justify-between p-2.5 rounded-xl text-left transition-all active:scale-[0.99] ${a ? "bg-primary-container/15 ring-2 ring-primary/40 border border-primary/20" : "bg-surface-container-low/60 hover:bg-surface-container border border-surface-container-high/30"}`,
                    children: [
                      s.jsxs("div", {
                        className: "flex items-center gap-2.5 min-w-0",
                        children: [
                          s.jsx("span", {
                            className: `w-6 h-6 rounded-lg flex items-center justify-center font-extrabold text-[11px] shrink-0 ${l.isAnswered && l.isCorrect ? "bg-secondary/20 text-secondary" : l.isAnswered && !l.isCorrect ? "bg-error-container text-error" : a ? "bg-primary-container text-on-primary shadow-xs" : "bg-surface-container text-on-surface-variant"}`,
                            children: String(l.id).padStart(2, "0"),
                          }),
                          s.jsx("span", {
                            className:
                              "font-label-sm text-label-sm text-on-surface font-semibold truncate",
                            children: l.topic,
                          }),
                        ],
                      }),
                      o,
                    ],
                  },
                  l.id,
                )
              );
            }),
          }),
        ],
      }),
    ],
  });
}
function yp({ isOpen: e, onClose: t, onRestart: n, onGoHome: r, stats: l }) {
  const {
    total: i,
    correct: a,
    incorrect: o,
    unattempted: c,
    percentage: u,
  } = l;
  return s.jsx(ur, {
    isOpen: e,
    onClose: t,
    title: "Kết quả đánh giá năng lực thích ứng",
    icon: "military_tech",
    children: s.jsxs("div", {
      className: "flex flex-col gap-4",
      children: [
        s.jsxs("div", {
          className:
            "flex flex-col items-center justify-center p-4 rounded-xl bg-surface-container-low text-center",
          children: [
            s.jsxs("span", {
              className: "text-4xl font-extrabold text-primary mb-1",
              children: [u, "%"],
            }),
            s.jsx("span", {
              className: "font-label-md text-on-surface font-semibold",
              children:
                u >= 70
                  ? "Đã đạt chuẩn kiến thức!"
                  : "Cần củng cố thêm chủ đề Tree Traversal",
            }),
            s.jsx("p", {
              className:
                "font-body-sm text-on-surface-variant text-[12px] mt-1",
              children:
                "Chủ đề: Tree Traversal (CS201 · Cấu trúc Dữ liệu & Giải thuật)",
            }),
          ],
        }),
        s.jsxs("div", {
          className: "grid grid-cols-3 gap-2 text-center text-label-sm",
          children: [
            s.jsxs("div", {
              className:
                "p-2.5 rounded-xl bg-secondary-container/40 text-on-secondary-container",
              children: [
                s.jsx("span", {
                  className: "block text-xl font-bold",
                  children: a,
                }),
                s.jsx("span", { children: "Câu đúng" }),
              ],
            }),
            s.jsxs("div", {
              className: "p-2.5 rounded-xl bg-error-container/60 text-error",
              children: [
                s.jsx("span", {
                  className: "block text-xl font-bold",
                  children: o,
                }),
                s.jsx("span", { children: "Câu sai" }),
              ],
            }),
            s.jsxs("div", {
              className:
                "p-2.5 rounded-xl bg-surface-container text-on-surface-variant",
              children: [
                s.jsx("span", {
                  className: "block text-xl font-bold",
                  children: c,
                }),
                s.jsx("span", { children: "Chưa làm" }),
              ],
            }),
          ],
        }),
        s.jsxs("div", {
          className:
            "p-3 rounded-xl bg-surface-container-low text-body-sm text-on-surface flex items-start gap-2",
          children: [
            s.jsx(g, {
              name: "psychology",
              size: 20,
              className: "text-primary shrink-0",
            }),
            s.jsxs("p", {
              className: "leading-snug",
              children: [
                s.jsx("strong", { children: "Lời khuyên CTT Socratic:" }),
                " Bạn đã cải thiện rõ rệt ở các câu hỏi lý thuyết cơ bản. Tiếp tục thảo luận với AI Mentor về ",
                s.jsx("em", { children: "Stack Call Frame" }),
                " để giải quyết triệt để các câu hỏi đệ quy phức tạp.",
              ],
            }),
          ],
        }),
        s.jsxs("div", {
          className:
            "flex items-center justify-end gap-2 pt-3 border-t border-surface-container-high/60",
          children: [
            s.jsx(tt, {
              variant: "surface",
              size: "md",
              onClick: r,
              children: "Về trang chủ",
            }),
            s.jsx(tt, {
              variant: "primary",
              size: "md",
              onClick: n,
              children: "Làm lại bài này",
            }),
          ],
        }),
      ],
    }),
  });
}
function vp() {
  const {
      quizQuestions: e,
      quizCompletedModalOpen: t,
      setQuizCompletedModalOpen: n,
      setActiveTab: r,
      handleJumpToQuestion: l,
    } = F(),
    i = e.length,
    a = e.filter((m) => m.isAnswered && m.isCorrect).length,
    o = e.filter((m) => m.isAnswered && !m.isCorrect).length,
    c = i - a - o,
    u = Math.round((a / i) * 100),
    h = () => {
      (n(!1), l(0));
    },
    x = () => {
      (n(!1), r("home"));
    };
  return s.jsxs("div", {
    className:
      "flex flex-col lg:flex-row w-full gap-5 select-none max-w-6xl mx-auto py-1",
    children: [
      s.jsxs("div", {
        className: "flex-1 flex flex-col justify-between min-w-0 gap-4",
        children: [s.jsx(mp, {}), s.jsx(hp, {}), s.jsx(xp, {})],
      }),
      s.jsx(gp, {}),
      s.jsx(yp, {
        isOpen: t,
        onClose: () => n(!1),
        onRestart: h,
        onGoHome: x,
        stats: {
          total: i,
          correct: a,
          incorrect: o,
          unattempted: c,
          percentage: u,
        },
      }),
    ],
  });
}
function wp({ onSelectChip: e }) {
  const { chatMessages: t, isAiTyping: n, user: r } = F(),
    l = E.useRef(null);
  return (
    E.useEffect(() => {
      var i;
      (i = l.current) == null || i.scrollIntoView({ behavior: "smooth" });
    }, [t, n]),
    s.jsxs("div", {
      className:
        "relative z-10 flex-1 flex flex-col gap-3 py-2 overflow-y-auto pr-1",
      children: [
        t.map((i) =>
          i.sender === "user"
            ? s.jsxs(
                "div",
                {
                  className: "flex items-start gap-2.5 justify-end",
                  children: [
                    s.jsxs("div", {
                      className:
                        "max-w-[85%] sm:max-w-[76%] rounded-2xl rounded-tr-xs bg-primary text-on-primary px-4 py-3 shadow-sm",
                      children: [
                        s.jsxs("div", {
                          className:
                            "flex items-center justify-between gap-4 mb-1 opacity-80 text-label-sm",
                          children: [
                            s.jsx("span", {
                              className: "font-bold",
                              children: i.senderName || r.name,
                            }),
                            s.jsx("span", {
                              className: "text-[11px]",
                              children: i.timestamp,
                            }),
                          ],
                        }),
                        s.jsx("p", {
                          className:
                            "font-body-md text-body-md text-on-primary font-medium leading-relaxed whitespace-pre-wrap",
                          children: i.content,
                        }),
                      ],
                    }),
                    s.jsx("div", {
                      className:
                        "w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center flex-shrink-0 mt-1 shadow-xs",
                      children: s.jsx(g, { name: "person", size: 16 }),
                    }),
                  ],
                },
                i.id,
              )
            : s.jsxs(
                "div",
                {
                  className: "flex items-start gap-2.5 justify-start",
                  children: [
                    s.jsx("div", {
                      className:
                        "w-8 h-8 rounded-xl bg-primary-container text-on-primary flex items-center justify-center flex-shrink-0 mt-1 shadow-sm",
                      children: s.jsx(g, { name: "psychology", size: 18 }),
                    }),
                    s.jsxs("div", {
                      className:
                        "max-w-[94%] sm:max-w-[88%] rounded-3xl rounded-tl-xs bg-surface-container-low/80 px-4.5 py-4 shadow-sm text-on-surface border border-surface-container-high/40",
                      children: [
                        s.jsxs("div", {
                          className:
                            "flex items-center justify-between gap-3 mb-2 text-on-surface-variant flex-wrap",
                          children: [
                            s.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                s.jsx("span", {
                                  className:
                                    "font-label-md text-label-md text-primary font-extrabold",
                                  children:
                                    i.senderName || "CTT Socratic Engine",
                                }),
                                i.badge &&
                                  s.jsx("span", {
                                    className:
                                      "font-label-sm text-[11px] bg-surface-container px-2 py-0.2 rounded-full text-on-surface-variant font-bold border border-surface-container-high/40",
                                    children: i.badge,
                                  }),
                              ],
                            }),
                            s.jsx("span", {
                              className:
                                "text-[11px] text-on-surface-variant font-medium",
                              children: i.timestamp,
                            }),
                          ],
                        }),
                        s.jsx("div", {
                          className:
                            "font-body-md text-body-md text-on-surface leading-relaxed whitespace-pre-wrap",
                          children: i.content,
                        }),
                        i.diagnosticPoints &&
                          s.jsx("div", {
                            className:
                              "space-y-1.5 font-body-sm text-body-sm text-on-surface mt-3",
                            children: i.diagnosticPoints.map((o, c) =>
                              s.jsxs(
                                "div",
                                {
                                  className: `flex items-start gap-2.5 p-2.5 rounded-xl border ${o.type === "error" ? "bg-surface-container-lowest border-surface-container-high/40" : "bg-error-container/30 text-on-error-container border-error/20"}`,
                                  children: [
                                    s.jsx("span", {
                                      className: `w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${o.type === "error" ? "bg-error" : "bg-on-tertiary-container"}`,
                                    }),
                                    s.jsx("span", { children: o.text }),
                                  ],
                                },
                                c,
                              ),
                            ),
                          }),
                        i.chips &&
                          i.chips.length > 0 &&
                          s.jsx("div", {
                            className:
                              "flex flex-wrap gap-2 mt-3.5 pt-2.5 border-t border-surface-container-high/40",
                            children: i.chips.map((o, c) =>
                              s.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => e(o),
                                  className:
                                    "px-3 py-1 rounded-full bg-surface-container-lowest hover:bg-primary-container hover:text-on-primary text-primary border border-primary/30 font-label-sm text-[12px] font-bold transition-all active:scale-95 shadow-2xs",
                                  children: o,
                                },
                                c,
                              ),
                            ),
                          }),
                      ],
                    }),
                  ],
                },
                i.id,
              ),
        ),
        n &&
          s.jsxs("div", {
            className:
              "flex items-center gap-2 text-on-surface-variant font-label-sm p-3 animate-pulse",
            children: [
              s.jsx("div", {
                className:
                  "w-7 h-7 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center",
                children: s.jsx(g, { name: "smart_toy", size: 16 }),
              }),
              s.jsx("span", {
                className: "font-semibold text-[12px]",
                children: "CTT Socratic AI đang phân tích rào cản nhận thức...",
              }),
            ],
          }),
        s.jsx("div", { ref: l }),
      ],
    })
  );
}
function jp({ onSendMessage: e }) {
  const [t, n] = E.useState(""),
    r = () => {
      t.trim() && (e(t), n(""));
    },
    l = (a) => {
      a.key === "Enter" && !a.shiftKey && (a.preventDefault(), r());
    },
    i = [
      "Giải thích trực quan Call Stack",
      "Cho ví dụ mẫu C++",
      "Tạo câu hỏi kiểm tra lại",
    ];
  return s.jsxs("div", {
    className:
      "relative z-10 pt-2 border-t border-surface-container-high/40 flex flex-col gap-2 shrink-0",
    children: [
      s.jsxs("div", {
        className:
          "flex items-center gap-1.5 overflow-x-auto pb-1 text-label-sm",
        children: [
          s.jsx("span", {
            className:
              "text-on-surface-variant font-semibold text-[11px] shrink-0",
            children: "Gợi ý nhanh:",
          }),
          i.map((a, o) =>
            s.jsx(
              "button",
              {
                type: "button",
                onClick: () => e(a),
                className:
                  "px-2.5 py-1 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface text-[11px] font-medium shrink-0 transition-colors",
                children: a,
              },
              o,
            ),
          ),
        ],
      }),
      s.jsxs("div", {
        className:
          "flex items-center gap-2 bg-surface-container-low p-1.5 rounded-2xl border border-surface-container-high/60 focus-within:ring-2 focus-within:ring-primary focus-within:bg-surface-container-lowest transition-all",
        children: [
          s.jsx("textarea", {
            rows: 1,
            value: t,
            onChange: (a) => n(a.target.value),
            onKeyDown: l,
            placeholder:
              "Hỏi CTT Companion về khái niệm hoặc nhờ giải thích câu sai...",
            className:
              "flex-1 bg-transparent px-3 py-1.5 text-on-surface placeholder:text-on-surface-variant focus:outline-none resize-none font-body-md text-body-md max-h-24",
          }),
          s.jsx("button", {
            type: "button",
            onClick: r,
            disabled: !t.trim(),
            className:
              "w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary shadow-xs transition-all active:scale-95 shrink-0",
            "aria-label": "Gửi tin nhắn",
            children: s.jsx(g, { name: "send", size: 18 }),
          }),
        ],
      }),
    ],
  });
}
function Np() {
  const {
      aiKnowledgeContext: e,
      setActiveTab: t,
      handleJumpToQuestion: n,
    } = F(),
    r = () => {
      (n(2), t("quiz"));
    };
  return s.jsxs("aside", {
    className:
      "w-full lg:w-80 h-full flex flex-col gap-3 shrink-0 overflow-y-auto lg:overflow-hidden select-none",
    children: [
      s.jsxs("div", {
        className:
          "bg-surface-container-lowest rounded-3xl p-4 shadow-sm border border-surface-container-high/40 flex flex-col gap-3 shrink-0",
        children: [
          s.jsxs("div", {
            className:
              "flex items-center justify-between pb-2 border-b border-surface-container-high/40",
            children: [
              s.jsxs("span", {
                className:
                  "font-label-md text-label-md font-extrabold text-on-surface flex items-center gap-1.5",
                children: [
                  s.jsx(g, {
                    name: "hub",
                    size: 18,
                    className: "text-primary",
                  }),
                  "NGỮ CẢNH TRI THỨC",
                ],
              }),
              s.jsxs("span", {
                className:
                  "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container/50 text-on-secondary-container font-label-sm text-[11px] font-bold",
                children: [
                  s.jsx("span", {
                    className: "w-1.5 h-1.5 rounded-full bg-secondary",
                  }),
                  "Đồng bộ SIS",
                ],
              }),
            ],
          }),
          s.jsxs("div", {
            className: "flex flex-col gap-1 text-label-sm",
            children: [
              s.jsx("span", {
                className: "text-on-surface-variant font-medium text-[11px]",
                children: "Môn học đang khảo sát:",
              }),
              s.jsx("strong", {
                className:
                  "text-on-surface font-extrabold text-body-sm leading-snug",
                children: e.course,
              }),
            ],
          }),
          s.jsxs("div", {
            className:
              "p-3 rounded-2xl bg-surface-container-low/70 border border-surface-container-high/30 flex items-center justify-between",
            children: [
              s.jsxs("div", {
                className: "flex flex-col",
                children: [
                  s.jsx("span", {
                    className:
                      "font-label-sm text-[11px] text-on-surface-variant font-medium",
                    children: "Chủ đề trọng điểm",
                  }),
                  s.jsx("span", {
                    className: "font-label-md font-extrabold text-primary",
                    children: e.activeTopic,
                  }),
                ],
              }),
              s.jsx("span", {
                className:
                  "font-label-sm text-[11px] font-extrabold text-error bg-error-container/60 px-2.5 py-0.5 rounded-full border border-error/20",
                children: e.mastery,
              }),
            ],
          }),
        ],
      }),
      s.jsxs("div", {
        className:
          "bg-surface-container-lowest rounded-3xl p-4 shadow-sm border border-surface-container-high/40 flex flex-col gap-2.5 shrink-0",
        children: [
          s.jsxs("span", {
            className:
              "font-label-md text-label-md font-extrabold text-on-surface flex items-center gap-1.5",
            children: [
              s.jsx(g, {
                name: "menu_book",
                size: 18,
                className: "text-primary",
              }),
              "TRÍCH XUẤT TÀI LIỆU EIU",
            ],
          }),
          s.jsx("div", {
            className: "flex flex-col gap-2",
            children: e.connectedDocuments.map((l, i) =>
              s.jsxs(
                "div",
                {
                  className:
                    "p-3 rounded-2xl bg-surface-container-low/60 flex flex-col gap-1 border border-surface-container-high/30 hover:bg-surface-container/70 transition-colors",
                  children: [
                    s.jsxs("div", {
                      className:
                        "flex items-center gap-2 text-primary font-label-sm font-bold truncate",
                      children: [
                        s.jsx(g, { name: "picture_as_pdf", size: 16 }),
                        s.jsx("span", {
                          className: "truncate",
                          children: l.name,
                        }),
                      ],
                    }),
                    s.jsx("p", {
                      className:
                        "font-body-sm text-[11px] text-on-surface-variant leading-snug",
                      children: l.page,
                    }),
                    s.jsxs("span", {
                      className:
                        "text-[10px] text-secondary font-bold flex items-center gap-1 pt-0.5",
                      children: [
                        s.jsx(g, { name: "verified", size: 12 }),
                        l.status,
                      ],
                    }),
                  ],
                },
                i,
              ),
            ),
          }),
        ],
      }),
      s.jsxs("div", {
        className:
          "bg-surface-container-lowest rounded-3xl p-4 shadow-sm border border-surface-container-high/40 flex flex-col justify-between gap-3 flex-1 min-h-[160px] lg:min-h-0",
        children: [
          s.jsxs("div", {
            className: "flex flex-col gap-1.5",
            children: [
              s.jsxs("span", {
                className:
                  "font-label-md text-label-md font-extrabold text-on-surface flex items-center gap-1.5",
                children: [
                  s.jsx(g, {
                    name: "bolt",
                    size: 18,
                    className: "text-amber-500",
                    fill: !0,
                  }),
                  "LUYỆN TẬP THÍCH ỨNG",
                ],
              }),
              s.jsx("p", {
                className:
                  "font-body-sm text-body-sm text-on-surface-variant leading-relaxed",
                children:
                  "Kiểm tra mức độ tiến bộ sau khi được AI mentor gợi mở tư duy bằng 5 câu hỏi chẩn đoán nhanh.",
              }),
            ],
          }),
          s.jsx(tt, {
            variant: "primary",
            size: "md",
            iconRight: "arrow_forward",
            onClick: r,
            className:
              "w-full justify-center card-shadow-glow-primary font-bold",
            children: "Luyện tập 5 câu hỏi nhanh",
          }),
        ],
      }),
    ],
  });
}
function kp() {
  const { handleSendMessage: e } = F();
  return s.jsxs("div", {
    className:
      "flex flex-col lg:flex-row w-full gap-5 select-none max-w-6xl mx-auto py-1",
    children: [
      s.jsxs("section", {
        className:
          "flex-1 w-full lg:w-[68%] flex flex-col justify-between bg-surface-container-lowest rounded-2xl shadow-sm border border-surface-container-high/40 p-4 sm:p-5 relative min-h-[560px]",
        children: [
          s.jsxs("div", {
            className:
              "relative z-10 flex items-center justify-between pb-3.5 border-b border-surface-container-high/40 shrink-0",
            children: [
              s.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  s.jsx("div", {
                    className:
                      "w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-xs shrink-0",
                    children: s.jsx(g, { name: "smart_toy", size: 22 }),
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsxs("div", {
                        className: "flex items-center gap-2 flex-wrap",
                        children: [
                          s.jsx("h2", {
                            className: "text-[16px] font-bold text-on-surface",
                            children: "CTT Companion",
                          }),
                          s.jsx("span", {
                            className:
                              "text-[11px] px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-bold",
                            children: "Socratic AI Mentor",
                          }),
                        ],
                      }),
                      s.jsx("p", {
                        className:
                          "text-[12px] text-on-surface-variant line-clamp-1 italic mt-0.5",
                        children:
                          "“Không học thay bạn, học cùng bạn · Đồng bộ môn Cấu trúc Dữ liệu & Giải thuật”",
                      }),
                    ],
                  }),
                ],
              }),
              s.jsx("div", {
                className: "flex items-center gap-1.5 shrink-0",
                children: s.jsxs("span", {
                  className:
                    "hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low text-secondary text-[12px] font-semibold border border-surface-container-high/40",
                  children: [
                    s.jsx("span", {
                      className:
                        "w-2 h-2 rounded-full bg-secondary animate-pulse",
                    }),
                    " Live Sync",
                  ],
                }),
              }),
            ],
          }),
          s.jsx(wp, { onSelectChip: e }),
          s.jsx(jp, { onSendMessage: e }),
        ],
      }),
      s.jsx(Np, {}),
    ],
  });
}
function bp({ activeView: e, setActiveView: t, onJumpToday: n }) {
  const { calendarOptimized: r, setCalendarOptimized: l } = F(),
    [i, a] = E.useState(!1),
    [o, c] = E.useState(!1),
    [u, h] = E.useState(!1),
    x = () => {
      (a(!0),
        setTimeout(() => {
          (a(!1),
            c(!0),
            l(!0),
            setTimeout(() => {
              c(!1);
            }, 2500));
        }, 700));
    },
    m = () => {
      (h(!0),
        setTimeout(() => {
          h(!1);
        }, 2e3));
    };
  return s.jsxs("div", {
    className:
      "flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-surface-container-high/40",
    children: [
      s.jsxs("div", {
        className: "flex items-center gap-3 sm:gap-4 flex-wrap",
        children: [
          s.jsx("button", {
            type: "button",
            onClick: n,
            className:
              "px-4 py-2 rounded-full border border-surface-container-high/80 hover:bg-surface-container text-on-surface text-[14px] font-semibold transition-all active:scale-95 shadow-2xs",
            children: "Hôm nay",
          }),
          s.jsxs("div", {
            className: "flex items-center",
            children: [
              s.jsx("button", {
                type: "button",
                className:
                  "w-9 h-9 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors",
                "aria-label": "Tuần trước",
                children: s.jsx(g, { name: "chevron_left", size: 22 }),
              }),
              s.jsx("button", {
                type: "button",
                className:
                  "w-9 h-9 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors",
                "aria-label": "Tuần sau",
                children: s.jsx(g, { name: "chevron_right", size: 22 }),
              }),
            ],
          }),
          s.jsxs("div", {
            className: "flex items-baseline gap-2.5",
            children: [
              s.jsx("h2", {
                className:
                  "text-xl sm:text-2xl font-bold text-on-surface tracking-tight",
                children: "Tháng 10 năm 2024",
              }),
              s.jsx("span", {
                className:
                  "text-[13px] font-semibold text-primary px-2.5 py-0.5 rounded-full bg-primary/10",
                children: "Tuần 7 · EIU",
              }),
            ],
          }),
        ],
      }),
      s.jsxs("div", {
        className: "flex items-center gap-2.5 flex-wrap",
        children: [
          s.jsxs("div", {
            className:
              "flex items-center p-1 rounded-xl bg-surface-container-low border border-surface-container-high/50 text-[13px] font-medium",
            children: [
              s.jsxs("button", {
                type: "button",
                onClick: () => t("grid"),
                className: `px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${e === "grid" ? "bg-surface-container-lowest text-primary font-bold shadow-2xs" : "text-on-surface-variant hover:text-on-surface"}`,
                children: [
                  s.jsx(g, { name: "calendar_view_week", size: 16 }),
                  s.jsx("span", { children: "Tuần" }),
                ],
              }),
              s.jsxs("button", {
                type: "button",
                onClick: () => t("list"),
                className: `px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${e === "list" ? "bg-surface-container-lowest text-primary font-bold shadow-2xs" : "text-on-surface-variant hover:text-on-surface"}`,
                children: [
                  s.jsx(g, { name: "view_agenda", size: 16 }),
                  s.jsx("span", { children: "Lịch biểu" }),
                ],
              }),
            ],
          }),
          s.jsxs("button", {
            type: "button",
            onClick: m,
            className:
              "px-3.5 py-2 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface text-[13px] font-semibold border border-surface-container-high/50 transition-colors flex items-center gap-2 shadow-2xs",
            children: [
              s.jsx(g, {
                name: u ? "check" : "sync",
                size: 17,
                className: u ? "text-secondary" : "text-primary",
              }),
              s.jsx("span", {
                className: "hidden sm:inline",
                children: u ? "Đã đồng bộ!" : "Google Calendar",
              }),
            ],
          }),
          s.jsx("button", {
            type: "button",
            onClick: x,
            disabled: i,
            className: `flex items-center gap-2 px-4 py-2 rounded-xl text-white text-[13px] font-bold shadow-sm transition-all active:scale-95 ${o ? "bg-emerald-600" : "bg-primary hover:bg-primary/90"}`,
            children: i
              ? s.jsxs(s.Fragment, {
                  children: [
                    s.jsx("span", {
                      className:
                        "material-symbols-outlined text-[17px] animate-spin",
                      children: "refresh",
                    }),
                    s.jsx("span", { children: "Đang tính toán..." }),
                  ],
                })
              : o
                ? s.jsxs(s.Fragment, {
                    children: [
                      s.jsx(g, { name: "done_all", size: 17 }),
                      s.jsx("span", { children: "Đã khớp 3 phiên học!" }),
                    ],
                  })
                : s.jsxs(s.Fragment, {
                    children: [
                      s.jsx(g, { name: "auto_awesome", size: 17 }),
                      s.jsx("span", { children: "Tối ưu bằng AI" }),
                    ],
                  }),
          }),
        ],
      }),
    ],
  });
}
function Sp({ onSelectSession: e }) {
  const { calendarSchedule: t, calendarOptimized: n } = F(),
    r = [
      "07:00",
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
    ],
    l = (i) => {
      switch (i) {
        case "exam":
          return {
            label: "BÀI THI / MINI-TEST",
            bg: "bg-rose-600 dark:bg-rose-700",
            text: "text-white",
            border: "border-rose-700",
          };
        case "ai-scheduled":
          return {
            label: "AI REVIEW",
            bg: "bg-purple-600 dark:bg-purple-700",
            text: "text-white",
            border: "border-purple-700",
          };
        case "lab":
          return {
            label: "THỰC HÀNH LAB",
            bg: "bg-teal-600 dark:bg-teal-700",
            text: "text-white",
            border: "border-teal-700",
          };
        case "lecture":
          return {
            label: "LÝ THUYẾT",
            bg: "bg-blue-600 dark:bg-blue-700",
            text: "text-white",
            border: "border-blue-700",
          };
        default:
          return {
            label: "TỰ HỌC",
            bg: "bg-amber-600 dark:bg-amber-700",
            text: "text-white",
            border: "border-amber-700",
          };
      }
    };
  return s.jsxs("div", {
    className:
      "w-full bg-surface-container-lowest rounded-2xl border border-surface-container-high/60 shadow-sm overflow-hidden flex flex-col select-none",
    children: [
      s.jsxs("div", {
        className:
          "grid grid-cols-[60px_repeat(7,1fr)] sm:grid-cols-[72px_repeat(7,1fr)] border-b border-surface-container-high/60 bg-surface-container-low/40",
        children: [
          s.jsx("div", {
            className:
              "flex items-center justify-center border-r border-surface-container-high/40 text-[11px] font-semibold text-on-surface-variant/80",
            children: "GMT+7",
          }),
          t.map((i, a) => {
            const o = i.isToday,
              c = i.day.replace("Thứ ", "T").replace("Chủ Nhật", "CN");
            return s.jsxs(
              "div",
              {
                className: `flex flex-col items-center py-3 border-r border-surface-container-high/30 last:border-r-0 transition-colors ${o ? "bg-primary/5" : ""}`,
                children: [
                  s.jsx("span", {
                    className: `text-[12px] font-bold tracking-wider uppercase ${o ? "text-primary" : "text-on-surface-variant"}`,
                    children: c,
                  }),
                  s.jsx("div", {
                    className: `mt-1 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-bold text-lg sm:text-xl transition-transform hover:scale-105 ${o ? "bg-primary text-white shadow-md" : "text-on-surface hover:bg-surface-container"}`,
                    children: i.date.split("/")[0],
                  }),
                ],
              },
              a,
            );
          }),
        ],
      }),
      s.jsx("div", {
        className: "overflow-x-auto",
        children: s.jsxs("div", {
          className:
            "grid grid-cols-[60px_repeat(7,1fr)] sm:grid-cols-[72px_repeat(7,1fr)] min-w-[880px] relative",
          children: [
            s.jsx("div", {
              className:
                "flex flex-col border-r border-surface-container-high/40 bg-surface-container-low/20",
              children: r.map((i, a) =>
                s.jsx(
                  "div",
                  {
                    className:
                      "h-24 sm:h-28 pr-2 pt-1 text-right text-[11px] sm:text-[12px] font-semibold text-on-surface-variant border-b border-surface-container-high/30",
                    children: i,
                  },
                  a,
                ),
              ),
            }),
            t.map((i, a) => {
              const o = i.isToday;
              return s.jsxs(
                "div",
                {
                  className: `relative flex flex-col border-r border-surface-container-high/30 last:border-r-0 ${o ? "bg-primary/5" : ""}`,
                  children: [
                    s.jsx("div", {
                      className:
                        "absolute inset-0 flex flex-col pointer-events-none",
                      children: r.map((c, u) =>
                        s.jsx(
                          "div",
                          {
                            className:
                              "h-24 sm:h-28 border-b border-surface-container-high/25 w-full",
                          },
                          u,
                        ),
                      ),
                    }),
                    o &&
                      s.jsxs("div", {
                        className:
                          "absolute top-[48%] left-0 right-0 z-20 flex items-center pointer-events-none",
                        children: [
                          s.jsx("div", {
                            className:
                              "w-2.5 h-2.5 rounded-full bg-red-500 -ml-1.5 shadow-sm",
                          }),
                          s.jsx("div", {
                            className: "h-[2px] bg-red-500 flex-1 shadow-sm",
                          }),
                        ],
                      }),
                    s.jsxs("div", {
                      className:
                        "relative z-10 p-1.5 sm:p-2 flex flex-col gap-2.5 flex-1 min-h-[600px]",
                      children: [
                        i.events.map((c, u) => {
                          const h = l(c.type),
                            x = c.type === "ai-scheduled";
                          return s.jsxs(
                            "div",
                            {
                              onClick: () => e(c),
                              className: `p-3 rounded-xl cursor-pointer transition-all shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-98 flex flex-col justify-between gap-2 border-l-4 ${h.bg} ${h.text} ${h.border}`,
                              children: [
                                s.jsxs("div", {
                                  className:
                                    "flex items-center justify-between gap-1",
                                  children: [
                                    s.jsx("span", {
                                      className:
                                        "text-[11px] font-extrabold tracking-wider uppercase opacity-95",
                                      children: c.code,
                                    }),
                                    s.jsxs("span", {
                                      className:
                                        "text-[10px] font-bold px-1.5 py-0.5 rounded bg-black/20 text-white flex items-center gap-1",
                                      children: [
                                        x &&
                                          s.jsx(g, {
                                            name: "auto_awesome",
                                            size: 12,
                                          }),
                                        h.label,
                                      ],
                                    }),
                                  ],
                                }),
                                s.jsx("div", {
                                  className:
                                    "text-[13px] sm:text-[14px] font-bold leading-snug line-clamp-2 drop-shadow-2xs",
                                  children: c.title,
                                }),
                                s.jsxs("div", {
                                  className:
                                    "flex items-center justify-between text-[11px] sm:text-[12px] opacity-95 font-medium pt-1 border-t border-white/20",
                                  children: [
                                    s.jsxs("span", {
                                      className: "flex items-center gap-1",
                                      children: [
                                        s.jsx(g, {
                                          name: "schedule",
                                          size: 13,
                                        }),
                                        s.jsx("span", { children: c.time }),
                                      ],
                                    }),
                                    s.jsxs("span", {
                                      className: "flex items-center gap-1",
                                      children: [
                                        s.jsx(g, {
                                          name: "location_on",
                                          size: 13,
                                        }),
                                        s.jsx("span", { children: c.room }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            u,
                          );
                        }),
                        n &&
                          i.events.length === 0 &&
                          s.jsxs("div", {
                            className:
                              "border-2 border-dashed border-primary/30 rounded-xl p-4 text-center my-auto flex flex-col items-center justify-center gap-1.5 bg-primary/5 text-primary",
                            children: [
                              s.jsx(g, { name: "event_available", size: 22 }),
                              s.jsx("span", {
                                className: "text-[13px] font-bold",
                                children: "Giờ tự học tự do",
                              }),
                              s.jsx("span", {
                                className:
                                  "text-[11px] text-on-surface-variant",
                                children: "CTT AI đã tối ưu",
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                },
                a,
              );
            }),
          ],
        }),
      }),
    ],
  });
}
function Cp({ onSelectSession: e }) {
  const { calendarSchedule: t, calendarOptimized: n } = F();
  return s.jsx("div", {
    className: "flex flex-col gap-4",
    children: t.map((r, l) => {
      const i = r.isToday;
      return s.jsxs(
        "div",
        {
          className: `p-4 rounded-2xl border transition-all ${i ? "bg-primary/5 border-primary/30 ring-1 ring-primary/20" : "bg-surface-container-low/50 border-surface-container-high/30"}`,
          children: [
            s.jsxs("div", {
              className:
                "flex items-center justify-between pb-3 mb-3 border-b border-surface-container-high/30",
              children: [
                s.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    s.jsxs("span", {
                      className: `text-[14px] font-bold ${i ? "text-primary" : "text-on-surface"}`,
                      children: [r.day, " (", r.date, ")"],
                    }),
                    i &&
                      s.jsx("span", {
                        className:
                          "text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary text-on-primary",
                        children: "Hôm nay",
                      }),
                  ],
                }),
                s.jsxs("span", {
                  className: "text-[12px] text-on-surface-variant font-medium",
                  children: [r.events.length, " phiên"],
                }),
              ],
            }),
            r.events.length > 0
              ? s.jsx("div", {
                  className: "flex flex-col gap-2.5",
                  children: r.events.map((a, o) => {
                    const c = a.type === "ai-scheduled",
                      u = a.type === "exam";
                    return s.jsxs(
                      "div",
                      {
                        onClick: () => e(a),
                        className:
                          "p-3 rounded-xl bg-surface-container-lowest hover:bg-surface-container border border-surface-container-high/40 cursor-pointer transition-all flex items-center justify-between gap-3 group shadow-2xs",
                        children: [
                          s.jsxs("div", {
                            className: "flex items-center gap-3 min-w-0",
                            children: [
                              s.jsx("div", {
                                className: `w-1.5 h-10 rounded-full shrink-0 ${u ? "bg-error" : c ? "bg-primary" : "bg-secondary"}`,
                              }),
                              s.jsxs("div", {
                                className: "flex flex-col min-w-0",
                                children: [
                                  s.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      s.jsx("span", {
                                        className:
                                          "text-[11px] font-bold text-primary",
                                        children: a.code,
                                      }),
                                      c &&
                                        s.jsxs("span", {
                                          className:
                                            "text-[10px] font-semibold text-primary px-1.5 py-0.2 rounded bg-primary/10 flex items-center gap-1",
                                          children: [
                                            s.jsx(g, {
                                              name: "auto_awesome",
                                              size: 11,
                                            }),
                                            "AI Slot",
                                          ],
                                        }),
                                      u &&
                                        s.jsx("span", {
                                          className:
                                            "text-[10px] font-bold text-error px-1.5 py-0.2 rounded bg-error-container/60",
                                          children: "Bài kiểm tra",
                                        }),
                                    ],
                                  }),
                                  s.jsx("h4", {
                                    className:
                                      "text-[13px] font-semibold text-on-surface group-hover:text-primary transition-colors truncate",
                                    children: a.title,
                                  }),
                                  s.jsxs("span", {
                                    className:
                                      "text-[11px] text-on-surface-variant",
                                    children: [a.time, " · ", a.room],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          s.jsx("button", {
                            type: "button",
                            className:
                              "w-7 h-7 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface-variant group-hover:text-primary transition-colors shrink-0",
                            children: s.jsx(g, {
                              name: "chevron_right",
                              size: 16,
                            }),
                          }),
                        ],
                      },
                      o,
                    );
                  }),
                })
              : s.jsxs("div", {
                  className:
                    "py-4 text-center text-[12px] text-on-surface-variant flex items-center justify-center gap-1.5",
                  children: [
                    s.jsx(g, { name: "event_available", size: 16 }),
                    s.jsx("span", {
                      children:
                        "Không có tiết học chính khóa (ngày tự học tự do)",
                    }),
                  ],
                }),
          ],
        },
        l,
      );
    }),
  });
}
function Tp({ session: e, onClose: t }) {
  const {
      setActiveTab: n,
      setActiveCourseId: r,
      handleJumpToQuestion: l,
    } = F(),
    [i, a] = E.useState(!1);
  if (!e) return null;
  const o = () => {
      (a(!0),
        setTimeout(() => {
          a(!1);
        }, 2e3));
    },
    c = () => {
      (t(),
        e.type === "ai-scheduled"
          ? (l(2), n("quiz"))
          : e.code && e.code.toLowerCase().startsWith("cs")
            ? (r(e.code.toLowerCase()), n("course-detail"))
            : n("courses"));
    },
    u = e.type === "ai-scheduled",
    h = e.type === "exam";
  return s.jsx(ur, {
    isOpen: !!e,
    onClose: t,
    title: "Chi tiết phiên học",
    size: "md",
    children: s.jsxs("div", {
      className: "flex flex-col gap-4",
      children: [
        s.jsxs("div", {
          className: "flex flex-col gap-1.5",
          children: [
            s.jsxs("div", {
              className: "flex items-center gap-2 flex-wrap",
              children: [
                s.jsx("span", {
                  className:
                    "text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary",
                  children: e.code,
                }),
                u &&
                  s.jsxs("span", {
                    className:
                      "text-[11px] font-bold px-2 py-0.5 rounded-full bg-primary-container text-on-primary flex items-center gap-1",
                    children: [
                      s.jsx(g, { name: "auto_awesome", size: 13 }),
                      "AI Spaced Repetition",
                    ],
                  }),
                h &&
                  s.jsx("span", {
                    className:
                      "text-[11px] font-bold px-2 py-0.5 rounded-full bg-error-container text-on-error-container",
                    children: "Bài kiểm tra chính thức",
                  }),
              ],
            }),
            s.jsx("h3", {
              className: "text-lg font-bold text-on-surface",
              children: e.title,
            }),
          ],
        }),
        s.jsxs("div", {
          className:
            "grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-surface-container-low/70 border border-surface-container-high/40 text-[13px]",
          children: [
            s.jsxs("div", {
              className: "flex items-center gap-2.5 text-on-surface",
              children: [
                s.jsx(g, {
                  name: "schedule",
                  size: 18,
                  className: "text-primary shrink-0",
                }),
                s.jsxs("div", {
                  children: [
                    s.jsx("div", {
                      className:
                        "text-[10px] text-on-surface-variant font-medium",
                      children: "Thời gian",
                    }),
                    s.jsx("div", {
                      className: "font-semibold",
                      children: e.time,
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className: "flex items-center gap-2.5 text-on-surface",
              children: [
                s.jsx(g, {
                  name: "location_on",
                  size: 18,
                  className: "text-secondary shrink-0",
                }),
                s.jsxs("div", {
                  children: [
                    s.jsx("div", {
                      className:
                        "text-[10px] text-on-surface-variant font-medium",
                      children: "Địa điểm",
                    }),
                    s.jsx("div", {
                      className: "font-semibold",
                      children: e.room || "Trực tuyến / CTT App",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        s.jsx("p", {
          className: "text-[12px] text-on-surface-variant leading-relaxed",
          children: u
            ? "Phiên học này được CTT AI tự động sắp xếp vào giờ rảnh giữa các tiết học nhằm khắc phục rào cản nhận thức gần đây."
            : "Tiết học thuộc chương trình đào tạo chính khóa kỳ 2024.2 tại Đại học Quốc tế Miền Đông Hà Nội.",
        }),
        s.jsxs("div", {
          className:
            "flex items-center justify-end gap-2.5 pt-2 border-t border-surface-container-high/40",
          children: [
            s.jsxs("button", {
              type: "button",
              onClick: o,
              className:
                "px-3.5 py-2 rounded-xl text-[12px] font-medium text-on-surface hover:bg-surface-container border border-surface-container-high/40 transition-colors flex items-center gap-1.5",
              children: [
                s.jsx(g, {
                  name: i ? "check" : "calendar_add_on",
                  size: 16,
                  className: i ? "text-secondary" : "text-on-surface-variant",
                }),
                s.jsx("span", {
                  children: i ? "Đã đồng bộ!" : "Google Calendar",
                }),
              ],
            }),
            s.jsxs("button", {
              type: "button",
              onClick: c,
              className:
                "px-4 py-2 rounded-xl bg-primary hover:bg-primary/90 text-on-primary text-[12px] font-semibold flex items-center gap-1.5 shadow-2xs transition-all active:scale-98",
              children: [
                s.jsx("span", {
                  children: u ? "Bắt đầu ôn tập (10p)" : "Mở tài liệu môn học",
                }),
                s.jsx(g, { name: "arrow_forward", size: 15 }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function zp() {
  const [e, t] = E.useState(null),
    [n, r] = E.useState("grid"),
    l = () => {
      r("grid");
    };
  return s.jsxs("div", {
    className:
      "flex flex-col gap-4 select-none w-full max-w-[1440px] mx-auto py-1",
    children: [
      s.jsx(bp, { activeView: n, setActiveView: r, onJumpToday: l }),
      n === "grid"
        ? s.jsx(Sp, { onSelectSession: t })
        : s.jsx(Cp, { onSelectSession: t }),
      s.jsxs("div", {
        className:
          "flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-2 text-[13px] text-on-surface-variant pt-2",
        children: [
          s.jsxs("div", {
            className: "flex items-center gap-4 flex-wrap",
            children: [
              s.jsxs("span", {
                className: "flex items-center gap-2 font-medium",
                children: [
                  s.jsx("span", {
                    className: "w-3 h-3 rounded-sm bg-blue-600 shadow-xs",
                  }),
                  "Lý thuyết (Chính khóa)",
                ],
              }),
              s.jsxs("span", {
                className: "flex items-center gap-2 font-medium",
                children: [
                  s.jsx("span", {
                    className: "w-3 h-3 rounded-sm bg-teal-600 shadow-xs",
                  }),
                  "Thực hành Lab (C9-301)",
                ],
              }),
              s.jsxs("span", {
                className: "flex items-center gap-2 font-medium",
                children: [
                  s.jsx("span", {
                    className: "w-3 h-3 rounded-sm bg-purple-600 shadow-xs",
                  }),
                  "Ôn tập AI (Spaced Repetition)",
                ],
              }),
              s.jsxs("span", {
                className: "flex items-center gap-2 font-medium",
                children: [
                  s.jsx("span", {
                    className: "w-3 h-3 rounded-sm bg-rose-600 shadow-xs",
                  }),
                  "Bài thi / Mini-test",
                ],
              }),
              s.jsxs("span", {
                className: "flex items-center gap-2 font-medium",
                children: [
                  s.jsx("span", {
                    className: "w-3 h-3 rounded-sm bg-amber-600 shadow-xs",
                  }),
                  "Tự học / Hoạt động",
                ],
              }),
            ],
          }),
          s.jsxs("div", {
            className:
              "flex items-center gap-1.5 text-primary font-semibold text-[12px]",
            children: [
              s.jsx(g, { name: "verified", size: 16 }),
              s.jsx("span", {
                children: "Đồng bộ tự động với cổng SIS Quốc tế Miền Đông",
              }),
            ],
          }),
        ],
      }),
      s.jsx(Tp, { session: e, onClose: () => t(null) }),
    ],
  });
}
function Ep({ isOpen: e, onClose: t }) {
  const { user: n, setUser: r, isDarkMode: l, toggleDarkMode: i } = F(),
    [a, o] = E.useState("socratic"),
    [c, u] = E.useState(!0),
    [h, x] = E.useState(!0),
    [m, y] = E.useState(!1),
    j = () => {
      (y(!0),
        setTimeout(() => {
          (y(!1), t());
        }, 1200));
    };
  return s.jsx(ur, {
    isOpen: e,
    onClose: t,
    title: "Cài đặt hệ thống & Hồ sơ sinh viên",
    icon: "settings",
    children: s.jsxs("div", {
      className: "flex flex-col gap-4 text-left",
      children: [
        s.jsxs("div", {
          className:
            "p-3.5 rounded-xl bg-surface-container-low flex items-center gap-3",
          children: [
            s.jsx("div", {
              className:
                "w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-lg shadow-sm",
              children: s.jsx(g, { name: "person", size: 24 }),
            }),
            s.jsxs("div", {
              className: "flex flex-col min-w-0",
              children: [
                s.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    s.jsx("h4", {
                      className:
                        "font-title text-title font-bold text-on-surface truncate",
                      children: n.name,
                    }),
                    s.jsx("span", {
                      className:
                        "px-2 py-0.2 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-[11px] font-bold",
                      children: n.role,
                    }),
                  ],
                }),
                s.jsxs("p", {
                  className:
                    "font-body-sm text-body-sm text-on-surface-variant truncate",
                  children: ["tien.nt205214@sis.EIU.edu.vn · ", n.school],
                }),
              ],
            }),
          ],
        }),
        s.jsxs("div", {
          className: "flex flex-col gap-2",
          children: [
            s.jsx("span", {
              className:
                "text-label-sm font-bold text-on-surface uppercase tracking-wider",
              children: "Phong cách hướng dẫn CTT AI",
            }),
            s.jsxs("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
              children: [
                s.jsxs("button", {
                  type: "button",
                  onClick: () => o("socratic"),
                  className: `p-3 rounded-xl border text-left transition-all ${a === "socratic" ? "border-primary bg-primary-container/10 ring-1 ring-primary/40" : "border-surface-container-high bg-surface-container-low"}`,
                  children: [
                    s.jsxs("div", {
                      className: "flex items-center justify-between mb-1",
                      children: [
                        s.jsx("span", {
                          className: "font-label-md font-bold text-on-surface",
                          children: "Socratic Mentor",
                        }),
                        s.jsx("span", {
                          className:
                            "text-[10px] px-1.5 py-0.2 rounded bg-primary-container text-on-primary font-bold",
                          children: "Khuyên dùng",
                        }),
                      ],
                    }),
                    s.jsx("p", {
                      className:
                        "text-[11px] text-on-surface-variant leading-tight",
                      children:
                        "Không giải thay, đặt câu hỏi gợi mở để người học tự khám phá bản chất thuật toán.",
                    }),
                  ],
                }),
                s.jsxs("button", {
                  type: "button",
                  onClick: () => o("direct"),
                  className: `p-3 rounded-xl border text-left transition-all ${a === "direct" ? "border-primary bg-primary-container/10 ring-1 ring-primary/40" : "border-surface-container-high bg-surface-container-low"}`,
                  children: [
                    s.jsx("div", {
                      className: "flex items-center justify-between mb-1",
                      children: s.jsx("span", {
                        className: "font-label-md font-bold text-on-surface",
                        children: "Direct Answer",
                      }),
                    }),
                    s.jsx("p", {
                      className:
                        "text-[11px] text-on-surface-variant leading-tight",
                      children:
                        "Cung cấp đáp án và lời giải chi tiết ngay lập tức cho các câu hỏi ôn tập nhanh.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        s.jsxs("div", {
          className:
            "flex flex-col gap-2 pt-2 border-t border-surface-container-high/40",
          children: [
            s.jsx("span", {
              className:
                "text-label-sm font-bold text-on-surface uppercase tracking-wider",
              children: "Tùy chọn thông báo & Lịch",
            }),
            s.jsxs("label", {
              className:
                "flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors",
              children: [
                s.jsxs("div", {
                  className: "flex flex-col",
                  children: [
                    s.jsx("span", {
                      className:
                        "font-label-md text-label-md font-semibold text-on-surface",
                      children: "Nhắc nhở phiên ôn tập AI trước 15 phút",
                    }),
                    s.jsx("span", {
                      className: "text-[11px] text-on-surface-variant",
                      children: "Gửi thông báo đẩy về thiết bị di động",
                    }),
                  ],
                }),
                s.jsx("input", {
                  type: "checkbox",
                  checked: c,
                  onChange: (N) => u(N.target.checked),
                  className: "w-5 h-5 accent-primary rounded cursor-pointer",
                }),
              ],
            }),
            s.jsxs("label", {
              className:
                "flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors",
              children: [
                s.jsxs("div", {
                  className: "flex flex-col",
                  children: [
                    s.jsx("span", {
                      className:
                        "font-label-md text-label-md font-semibold text-on-surface",
                      children: "Tự động đồng bộ Google Calendar",
                    }),
                    s.jsx("span", {
                      className: "text-[11px] text-on-surface-variant",
                      children:
                        "Chèn các buổi Spaced Repetition vào lịch cá nhân",
                    }),
                  ],
                }),
                s.jsx("input", {
                  type: "checkbox",
                  checked: h,
                  onChange: (N) => x(N.target.checked),
                  className: "w-5 h-5 accent-primary rounded cursor-pointer",
                }),
              ],
            }),
            s.jsxs("label", {
              className:
                "flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors",
              children: [
                s.jsxs("div", {
                  className: "flex flex-col",
                  children: [
                    s.jsxs("span", {
                      className:
                        "font-label-md text-label-md font-semibold text-on-surface flex items-center gap-1.5",
                      children: [
                        s.jsx(g, {
                          name: l ? "dark_mode" : "light_mode",
                          size: 18,
                          className: "text-primary",
                        }),
                        "Chế độ nền tối (Dark mode)",
                      ],
                    }),
                    s.jsx("span", {
                      className: "text-[11px] text-on-surface-variant",
                      children:
                        "Giao diện học đêm chuẩn Academic Mastery, bảo vệ mắt",
                    }),
                  ],
                }),
                s.jsx("input", {
                  type: "checkbox",
                  checked: l,
                  onChange: i,
                  className: "w-5 h-5 accent-primary rounded cursor-pointer",
                }),
              ],
            }),
          ],
        }),
        m &&
          s.jsxs("div", {
            className:
              "p-2.5 rounded-xl bg-secondary-container/60 text-on-secondary-container flex items-center gap-2 text-label-sm font-semibold animate-in fade-in duration-150",
            children: [
              s.jsx(g, {
                name: "check_circle",
                size: 16,
                className: "text-secondary",
              }),
              s.jsx("span", { children: "Đã lưu thành công các tùy chọn!" }),
            ],
          }),
        s.jsxs("div", {
          className:
            "flex items-center justify-end gap-2 pt-3 border-t border-surface-container-high/60",
          children: [
            s.jsx(tt, {
              variant: "surface",
              size: "md",
              onClick: t,
              children: "Đóng",
            }),
            s.jsx(tt, {
              variant: "primary",
              size: "md",
              onClick: j,
              children: "Lưu thay đổi",
            }),
          ],
        }),
      ],
    }),
  });
}
function _p() {
  const { activeTab: e, settingsModalOpen: t, setSettingsModalOpen: n } = F(),
    r = () => {
      switch (e) {
        case "home":
          return s.jsx(Ja, {});
        case "courses":
          return s.jsx(fp, {});
        case "course-detail":
          return s.jsx(pp, {});
        case "quiz":
          return s.jsx(vp, {});
        case "ai-companion":
          return s.jsx(kp, {});
        case "study-calendar":
          return s.jsx(zp, {});
        default:
          return s.jsx(Ja, {});
      }
    };
  return s.jsxs(rp, {
    children: [r(), s.jsx(Ep, { isOpen: t, onClose: () => n(!1) })],
  });
}
ns.createRoot(document.getElementById("root")).render(
  s.jsx(Au.StrictMode, { children: s.jsx(Zf, { children: s.jsx(_p, {}) }) }),
);
