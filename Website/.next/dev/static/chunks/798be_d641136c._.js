(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Website/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Website/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Website/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target, ...searchParamsList) {
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}),
"[project]/Website/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/Website/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Website/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}),
"[project]/Website/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/Website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}),
"[project]/Website/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/Website/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/Website/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/Website/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}),
"[project]/Website/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}),
"[project]/Website/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/Website/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Website/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/Website/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/Website/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/Website/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/Website/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/Website/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/Website/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/Website/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/Website/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _segmentcache = __turbopack_context__.r("[project]/Website/node_modules/next/dist/client/components/segment-cache.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/Website/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    if (typeof window !== 'undefined') {
        const { nodeName } = e.currentTarget;
        // anchors inside an svg have a lowercase nodeName
        const isAnchorNodeName = nodeName.toUpperCase() === 'A';
        if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
            // ignore click for browser’s default behavior
            return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
            if (replace) {
                // browser default behavior does not replace the history state
                // so we need to do it manually
                e.preventDefault();
                location.replace(href);
            }
            // ignore click for browser’s default behavior
            return;
        }
        e.preventDefault();
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        const { dispatchNavigateAction } = __turbopack_context__.r("[project]/Website/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
        _react.default.startTransition(()=>{
            dispatchNavigateAction(as || href, replace ? 'replace' : 'push', scroll ?? true, linkInstanceRef.current);
        });
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _segmentcache.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto' && props[key] !== 'unstable_forceStale') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto" | "unstable_forceStale"`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error(`Dynamic href \`${href}\` found in <Link> while using the \`/app\` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href`), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo({
        "LinkComponent.useMemo": ()=>{
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
    }["LinkComponent.useMemo"], [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (children?.$$typeof === Symbol.for('react.lazy')) {
            throw Object.defineProperty(new Error(`\`<Link legacyBehavior>\` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's \`<a>\` tag.`), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: false,
                configurable: true
            });
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
            }
            if (onMouseEnterProp) {
                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${hrefProp}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${hrefProp}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (children?.type === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        href,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchProp === null || prefetchProp === 'auto' ? _segmentcache.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _segmentcache.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}),
"[project]/Website/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses,
    "toKebabCase",
    ()=>toKebabCase
]);
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/Website/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/Website/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/Website/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])(iconName)}`, className),
            ...props
        }));
    Component.displayName = `${iconName}`;
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/Website/node_modules/lucide-react/dist/esm/icons/leaf.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Leaf
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Leaf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Leaf", [
    [
        "path",
        {
            d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
            key: "nnexq3"
        }
    ],
    [
        "path",
        {
            d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",
            key: "mt58a7"
        }
    ]
]);
;
 //# sourceMappingURL=leaf.js.map
}),
"[project]/Website/node_modules/lucide-react/dist/esm/icons/leaf.js [app-client] (ecmascript) <export default as Leaf>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Leaf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/lucide-react/dist/esm/icons/leaf.js [app-client] (ecmascript)");
}),
"[project]/Website/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Sun
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Sun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Sun", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "4",
            key: "4exip2"
        }
    ],
    [
        "path",
        {
            d: "M12 2v2",
            key: "tus03m"
        }
    ],
    [
        "path",
        {
            d: "M12 20v2",
            key: "1lh1kg"
        }
    ],
    [
        "path",
        {
            d: "m4.93 4.93 1.41 1.41",
            key: "149t6j"
        }
    ],
    [
        "path",
        {
            d: "m17.66 17.66 1.41 1.41",
            key: "ptbguv"
        }
    ],
    [
        "path",
        {
            d: "M2 12h2",
            key: "1t8f8n"
        }
    ],
    [
        "path",
        {
            d: "M20 12h2",
            key: "1q8mjw"
        }
    ],
    [
        "path",
        {
            d: "m6.34 17.66-1.41 1.41",
            key: "1m8zz5"
        }
    ],
    [
        "path",
        {
            d: "m19.07 4.93-1.41 1.41",
            key: "1shlcs"
        }
    ]
]);
;
 //# sourceMappingURL=sun.js.map
}),
"[project]/Website/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sun",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript)");
}),
"[project]/Website/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Moon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Moon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Moon", [
    [
        "path",
        {
            d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",
            key: "a7tn18"
        }
    ]
]);
;
 //# sourceMappingURL=moon.js.map
}),
"[project]/Website/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Moon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript)");
}),
"[project]/Website/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Shield
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Shield = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Shield", [
    [
        "path",
        {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }
    ]
]);
;
 //# sourceMappingURL=shield.js.map
}),
"[project]/Website/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Shield",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript)");
}),
"[project]/Website/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Upload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Upload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Upload", [
    [
        "path",
        {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
            key: "ih7n3h"
        }
    ],
    [
        "polyline",
        {
            points: "17 8 12 3 7 8",
            key: "t8dd8p"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "3",
            y2: "15",
            key: "widbto"
        }
    ]
]);
;
 //# sourceMappingURL=upload.js.map
}),
"[project]/Website/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Upload",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript)");
}),
"[project]/Website/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>MapPin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const MapPin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("MapPin", [
    [
        "path",
        {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }
    ]
]);
;
 //# sourceMappingURL=map-pin.js.map
}),
"[project]/Website/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapPin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript)");
}),
"[project]/Website/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>CircleCheck
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const CircleCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("CircleCheck", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }
    ]
]);
;
 //# sourceMappingURL=circle-check.js.map
}),
"[project]/Website/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript)");
}),
"[project]/Website/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>CircleAlert
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const CircleAlert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("CircleAlert", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "12",
            key: "1pkeuh"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12.01",
            y1: "16",
            y2: "16",
            key: "4dfq90"
        }
    ]
]);
;
 //# sourceMappingURL=circle-alert.js.map
}),
"[project]/Website/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript)");
}),
"[project]/Website/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function() {
    var e = {
        675: function(e, r) {
            "use strict";
            r.byteLength = byteLength;
            r.toByteArray = toByteArray;
            r.fromByteArray = fromByteArray;
            var t = [];
            var f = [];
            var n = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
            var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            for(var o = 0, u = i.length; o < u; ++o){
                t[o] = i[o];
                f[i.charCodeAt(o)] = o;
            }
            f["-".charCodeAt(0)] = 62;
            f["_".charCodeAt(0)] = 63;
            function getLens(e) {
                var r = e.length;
                if (r % 4 > 0) {
                    throw new Error("Invalid string. Length must be a multiple of 4");
                }
                var t = e.indexOf("=");
                if (t === -1) t = r;
                var f = t === r ? 0 : 4 - t % 4;
                return [
                    t,
                    f
                ];
            }
            function byteLength(e) {
                var r = getLens(e);
                var t = r[0];
                var f = r[1];
                return (t + f) * 3 / 4 - f;
            }
            function _byteLength(e, r, t) {
                return (r + t) * 3 / 4 - t;
            }
            function toByteArray(e) {
                var r;
                var t = getLens(e);
                var i = t[0];
                var o = t[1];
                var u = new n(_byteLength(e, i, o));
                var a = 0;
                var s = o > 0 ? i - 4 : i;
                var h;
                for(h = 0; h < s; h += 4){
                    r = f[e.charCodeAt(h)] << 18 | f[e.charCodeAt(h + 1)] << 12 | f[e.charCodeAt(h + 2)] << 6 | f[e.charCodeAt(h + 3)];
                    u[a++] = r >> 16 & 255;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                if (o === 2) {
                    r = f[e.charCodeAt(h)] << 2 | f[e.charCodeAt(h + 1)] >> 4;
                    u[a++] = r & 255;
                }
                if (o === 1) {
                    r = f[e.charCodeAt(h)] << 10 | f[e.charCodeAt(h + 1)] << 4 | f[e.charCodeAt(h + 2)] >> 2;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                return u;
            }
            function tripletToBase64(e) {
                return t[e >> 18 & 63] + t[e >> 12 & 63] + t[e >> 6 & 63] + t[e & 63];
            }
            function encodeChunk(e, r, t) {
                var f;
                var n = [];
                for(var i = r; i < t; i += 3){
                    f = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (e[i + 2] & 255);
                    n.push(tripletToBase64(f));
                }
                return n.join("");
            }
            function fromByteArray(e) {
                var r;
                var f = e.length;
                var n = f % 3;
                var i = [];
                var o = 16383;
                for(var u = 0, a = f - n; u < a; u += o){
                    i.push(encodeChunk(e, u, u + o > a ? a : u + o));
                }
                if (n === 1) {
                    r = e[f - 1];
                    i.push(t[r >> 2] + t[r << 4 & 63] + "==");
                } else if (n === 2) {
                    r = (e[f - 2] << 8) + e[f - 1];
                    i.push(t[r >> 10] + t[r >> 4 & 63] + t[r << 2 & 63] + "=");
                }
                return i.join("");
            }
        },
        72: function(e, r, t) {
            "use strict";
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ var f = t(675);
            var n = t(783);
            var i = typeof Symbol === "function" && typeof Symbol.for === "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
            r.Buffer = Buffer;
            r.SlowBuffer = SlowBuffer;
            r.INSPECT_MAX_BYTES = 50;
            var o = 2147483647;
            r.kMaxLength = o;
            Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
            if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
                console.error("This browser lacks typed array (Uint8Array) support which is required by " + "`buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
            }
            function typedArraySupport() {
                try {
                    var e = new Uint8Array(1);
                    var r = {
                        foo: function() {
                            return 42;
                        }
                    };
                    Object.setPrototypeOf(r, Uint8Array.prototype);
                    Object.setPrototypeOf(e, r);
                    return e.foo() === 42;
                } catch (e) {
                    return false;
                }
            }
            Object.defineProperty(Buffer.prototype, "parent", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.buffer;
                }
            });
            Object.defineProperty(Buffer.prototype, "offset", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.byteOffset;
                }
            });
            function createBuffer(e) {
                if (e > o) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
                var r = new Uint8Array(e);
                Object.setPrototypeOf(r, Buffer.prototype);
                return r;
            }
            function Buffer(e, r, t) {
                if (typeof e === "number") {
                    if (typeof r === "string") {
                        throw new TypeError('The "string" argument must be of type string. Received type number');
                    }
                    return allocUnsafe(e);
                }
                return from(e, r, t);
            }
            Buffer.poolSize = 8192;
            function from(e, r, t) {
                if (typeof e === "string") {
                    return fromString(e, r);
                }
                if (ArrayBuffer.isView(e)) {
                    return fromArrayLike(e);
                }
                if (e == null) {
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
                }
                if (isInstance(e, ArrayBuffer) || e && isInstance(e.buffer, ArrayBuffer)) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof SharedArrayBuffer !== "undefined" && (isInstance(e, SharedArrayBuffer) || e && isInstance(e.buffer, SharedArrayBuffer))) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof e === "number") {
                    throw new TypeError('The "value" argument must not be of type number. Received type number');
                }
                var f = e.valueOf && e.valueOf();
                if (f != null && f !== e) {
                    return Buffer.from(f, r, t);
                }
                var n = fromObject(e);
                if (n) return n;
                if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] === "function") {
                    return Buffer.from(e[Symbol.toPrimitive]("string"), r, t);
                }
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
            }
            Buffer.from = function(e, r, t) {
                return from(e, r, t);
            };
            Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
            Object.setPrototypeOf(Buffer, Uint8Array);
            function assertSize(e) {
                if (typeof e !== "number") {
                    throw new TypeError('"size" argument must be of type number');
                } else if (e < 0) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
            }
            function alloc(e, r, t) {
                assertSize(e);
                if (e <= 0) {
                    return createBuffer(e);
                }
                if (r !== undefined) {
                    return typeof t === "string" ? createBuffer(e).fill(r, t) : createBuffer(e).fill(r);
                }
                return createBuffer(e);
            }
            Buffer.alloc = function(e, r, t) {
                return alloc(e, r, t);
            };
            function allocUnsafe(e) {
                assertSize(e);
                return createBuffer(e < 0 ? 0 : checked(e) | 0);
            }
            Buffer.allocUnsafe = function(e) {
                return allocUnsafe(e);
            };
            Buffer.allocUnsafeSlow = function(e) {
                return allocUnsafe(e);
            };
            function fromString(e, r) {
                if (typeof r !== "string" || r === "") {
                    r = "utf8";
                }
                if (!Buffer.isEncoding(r)) {
                    throw new TypeError("Unknown encoding: " + r);
                }
                var t = byteLength(e, r) | 0;
                var f = createBuffer(t);
                var n = f.write(e, r);
                if (n !== t) {
                    f = f.slice(0, n);
                }
                return f;
            }
            function fromArrayLike(e) {
                var r = e.length < 0 ? 0 : checked(e.length) | 0;
                var t = createBuffer(r);
                for(var f = 0; f < r; f += 1){
                    t[f] = e[f] & 255;
                }
                return t;
            }
            function fromArrayBuffer(e, r, t) {
                if (r < 0 || e.byteLength < r) {
                    throw new RangeError('"offset" is outside of buffer bounds');
                }
                if (e.byteLength < r + (t || 0)) {
                    throw new RangeError('"length" is outside of buffer bounds');
                }
                var f;
                if (r === undefined && t === undefined) {
                    f = new Uint8Array(e);
                } else if (t === undefined) {
                    f = new Uint8Array(e, r);
                } else {
                    f = new Uint8Array(e, r, t);
                }
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            }
            function fromObject(e) {
                if (Buffer.isBuffer(e)) {
                    var r = checked(e.length) | 0;
                    var t = createBuffer(r);
                    if (t.length === 0) {
                        return t;
                    }
                    e.copy(t, 0, 0, r);
                    return t;
                }
                if (e.length !== undefined) {
                    if (typeof e.length !== "number" || numberIsNaN(e.length)) {
                        return createBuffer(0);
                    }
                    return fromArrayLike(e);
                }
                if (e.type === "Buffer" && Array.isArray(e.data)) {
                    return fromArrayLike(e.data);
                }
            }
            function checked(e) {
                if (e >= o) {
                    throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x" + o.toString(16) + " bytes");
                }
                return e | 0;
            }
            function SlowBuffer(e) {
                if (+e != e) {
                    e = 0;
                }
                return Buffer.alloc(+e);
            }
            Buffer.isBuffer = function isBuffer(e) {
                return e != null && e._isBuffer === true && e !== Buffer.prototype;
            };
            Buffer.compare = function compare(e, r) {
                if (isInstance(e, Uint8Array)) e = Buffer.from(e, e.offset, e.byteLength);
                if (isInstance(r, Uint8Array)) r = Buffer.from(r, r.offset, r.byteLength);
                if (!Buffer.isBuffer(e) || !Buffer.isBuffer(r)) {
                    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                }
                if (e === r) return 0;
                var t = e.length;
                var f = r.length;
                for(var n = 0, i = Math.min(t, f); n < i; ++n){
                    if (e[n] !== r[n]) {
                        t = e[n];
                        f = r[n];
                        break;
                    }
                }
                if (t < f) return -1;
                if (f < t) return 1;
                return 0;
            };
            Buffer.isEncoding = function isEncoding(e) {
                switch(String(e).toLowerCase()){
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return true;
                    default:
                        return false;
                }
            };
            Buffer.concat = function concat(e, r) {
                if (!Array.isArray(e)) {
                    throw new TypeError('"list" argument must be an Array of Buffers');
                }
                if (e.length === 0) {
                    return Buffer.alloc(0);
                }
                var t;
                if (r === undefined) {
                    r = 0;
                    for(t = 0; t < e.length; ++t){
                        r += e[t].length;
                    }
                }
                var f = Buffer.allocUnsafe(r);
                var n = 0;
                for(t = 0; t < e.length; ++t){
                    var i = e[t];
                    if (isInstance(i, Uint8Array)) {
                        i = Buffer.from(i);
                    }
                    if (!Buffer.isBuffer(i)) {
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    }
                    i.copy(f, n);
                    n += i.length;
                }
                return f;
            };
            function byteLength(e, r) {
                if (Buffer.isBuffer(e)) {
                    return e.length;
                }
                if (ArrayBuffer.isView(e) || isInstance(e, ArrayBuffer)) {
                    return e.byteLength;
                }
                if (typeof e !== "string") {
                    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + "Received type " + typeof e);
                }
                var t = e.length;
                var f = arguments.length > 2 && arguments[2] === true;
                if (!f && t === 0) return 0;
                var n = false;
                for(;;){
                    switch(r){
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return t;
                        case "utf8":
                        case "utf-8":
                            return utf8ToBytes(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return t * 2;
                        case "hex":
                            return t >>> 1;
                        case "base64":
                            return base64ToBytes(e).length;
                        default:
                            if (n) {
                                return f ? -1 : utf8ToBytes(e).length;
                            }
                            r = ("" + r).toLowerCase();
                            n = true;
                    }
                }
            }
            Buffer.byteLength = byteLength;
            function slowToString(e, r, t) {
                var f = false;
                if (r === undefined || r < 0) {
                    r = 0;
                }
                if (r > this.length) {
                    return "";
                }
                if (t === undefined || t > this.length) {
                    t = this.length;
                }
                if (t <= 0) {
                    return "";
                }
                t >>>= 0;
                r >>>= 0;
                if (t <= r) {
                    return "";
                }
                if (!e) e = "utf8";
                while(true){
                    switch(e){
                        case "hex":
                            return hexSlice(this, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Slice(this, r, t);
                        case "ascii":
                            return asciiSlice(this, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Slice(this, r, t);
                        case "base64":
                            return base64Slice(this, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return utf16leSlice(this, r, t);
                        default:
                            if (f) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase();
                            f = true;
                    }
                }
            }
            Buffer.prototype._isBuffer = true;
            function swap(e, r, t) {
                var f = e[r];
                e[r] = e[t];
                e[t] = f;
            }
            Buffer.prototype.swap16 = function swap16() {
                var e = this.length;
                if (e % 2 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                }
                for(var r = 0; r < e; r += 2){
                    swap(this, r, r + 1);
                }
                return this;
            };
            Buffer.prototype.swap32 = function swap32() {
                var e = this.length;
                if (e % 4 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                }
                for(var r = 0; r < e; r += 4){
                    swap(this, r, r + 3);
                    swap(this, r + 1, r + 2);
                }
                return this;
            };
            Buffer.prototype.swap64 = function swap64() {
                var e = this.length;
                if (e % 8 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                }
                for(var r = 0; r < e; r += 8){
                    swap(this, r, r + 7);
                    swap(this, r + 1, r + 6);
                    swap(this, r + 2, r + 5);
                    swap(this, r + 3, r + 4);
                }
                return this;
            };
            Buffer.prototype.toString = function toString() {
                var e = this.length;
                if (e === 0) return "";
                if (arguments.length === 0) return utf8Slice(this, 0, e);
                return slowToString.apply(this, arguments);
            };
            Buffer.prototype.toLocaleString = Buffer.prototype.toString;
            Buffer.prototype.equals = function equals(e) {
                if (!Buffer.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (this === e) return true;
                return Buffer.compare(this, e) === 0;
            };
            Buffer.prototype.inspect = function inspect() {
                var e = "";
                var t = r.INSPECT_MAX_BYTES;
                e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim();
                if (this.length > t) e += " ... ";
                return "<Buffer " + e + ">";
            };
            if (i) {
                Buffer.prototype[i] = Buffer.prototype.inspect;
            }
            Buffer.prototype.compare = function compare(e, r, t, f, n) {
                if (isInstance(e, Uint8Array)) {
                    e = Buffer.from(e, e.offset, e.byteLength);
                }
                if (!Buffer.isBuffer(e)) {
                    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + "Received type " + typeof e);
                }
                if (r === undefined) {
                    r = 0;
                }
                if (t === undefined) {
                    t = e ? e.length : 0;
                }
                if (f === undefined) {
                    f = 0;
                }
                if (n === undefined) {
                    n = this.length;
                }
                if (r < 0 || t > e.length || f < 0 || n > this.length) {
                    throw new RangeError("out of range index");
                }
                if (f >= n && r >= t) {
                    return 0;
                }
                if (f >= n) {
                    return -1;
                }
                if (r >= t) {
                    return 1;
                }
                r >>>= 0;
                t >>>= 0;
                f >>>= 0;
                n >>>= 0;
                if (this === e) return 0;
                var i = n - f;
                var o = t - r;
                var u = Math.min(i, o);
                var a = this.slice(f, n);
                var s = e.slice(r, t);
                for(var h = 0; h < u; ++h){
                    if (a[h] !== s[h]) {
                        i = a[h];
                        o = s[h];
                        break;
                    }
                }
                if (i < o) return -1;
                if (o < i) return 1;
                return 0;
            };
            function bidirectionalIndexOf(e, r, t, f, n) {
                if (e.length === 0) return -1;
                if (typeof t === "string") {
                    f = t;
                    t = 0;
                } else if (t > 2147483647) {
                    t = 2147483647;
                } else if (t < -2147483648) {
                    t = -2147483648;
                }
                t = +t;
                if (numberIsNaN(t)) {
                    t = n ? 0 : e.length - 1;
                }
                if (t < 0) t = e.length + t;
                if (t >= e.length) {
                    if (n) return -1;
                    else t = e.length - 1;
                } else if (t < 0) {
                    if (n) t = 0;
                    else return -1;
                }
                if (typeof r === "string") {
                    r = Buffer.from(r, f);
                }
                if (Buffer.isBuffer(r)) {
                    if (r.length === 0) {
                        return -1;
                    }
                    return arrayIndexOf(e, r, t, f, n);
                } else if (typeof r === "number") {
                    r = r & 255;
                    if (typeof Uint8Array.prototype.indexOf === "function") {
                        if (n) {
                            return Uint8Array.prototype.indexOf.call(e, r, t);
                        } else {
                            return Uint8Array.prototype.lastIndexOf.call(e, r, t);
                        }
                    }
                    return arrayIndexOf(e, [
                        r
                    ], t, f, n);
                }
                throw new TypeError("val must be string, number or Buffer");
            }
            function arrayIndexOf(e, r, t, f, n) {
                var i = 1;
                var o = e.length;
                var u = r.length;
                if (f !== undefined) {
                    f = String(f).toLowerCase();
                    if (f === "ucs2" || f === "ucs-2" || f === "utf16le" || f === "utf-16le") {
                        if (e.length < 2 || r.length < 2) {
                            return -1;
                        }
                        i = 2;
                        o /= 2;
                        u /= 2;
                        t /= 2;
                    }
                }
                function read(e, r) {
                    if (i === 1) {
                        return e[r];
                    } else {
                        return e.readUInt16BE(r * i);
                    }
                }
                var a;
                if (n) {
                    var s = -1;
                    for(a = t; a < o; a++){
                        if (read(e, a) === read(r, s === -1 ? 0 : a - s)) {
                            if (s === -1) s = a;
                            if (a - s + 1 === u) return s * i;
                        } else {
                            if (s !== -1) a -= a - s;
                            s = -1;
                        }
                    }
                } else {
                    if (t + u > o) t = o - u;
                    for(a = t; a >= 0; a--){
                        var h = true;
                        for(var c = 0; c < u; c++){
                            if (read(e, a + c) !== read(r, c)) {
                                h = false;
                                break;
                            }
                        }
                        if (h) return a;
                    }
                }
                return -1;
            }
            Buffer.prototype.includes = function includes(e, r, t) {
                return this.indexOf(e, r, t) !== -1;
            };
            Buffer.prototype.indexOf = function indexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, true);
            };
            Buffer.prototype.lastIndexOf = function lastIndexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, false);
            };
            function hexWrite(e, r, t, f) {
                t = Number(t) || 0;
                var n = e.length - t;
                if (!f) {
                    f = n;
                } else {
                    f = Number(f);
                    if (f > n) {
                        f = n;
                    }
                }
                var i = r.length;
                if (f > i / 2) {
                    f = i / 2;
                }
                for(var o = 0; o < f; ++o){
                    var u = parseInt(r.substr(o * 2, 2), 16);
                    if (numberIsNaN(u)) return o;
                    e[t + o] = u;
                }
                return o;
            }
            function utf8Write(e, r, t, f) {
                return blitBuffer(utf8ToBytes(r, e.length - t), e, t, f);
            }
            function asciiWrite(e, r, t, f) {
                return blitBuffer(asciiToBytes(r), e, t, f);
            }
            function latin1Write(e, r, t, f) {
                return asciiWrite(e, r, t, f);
            }
            function base64Write(e, r, t, f) {
                return blitBuffer(base64ToBytes(r), e, t, f);
            }
            function ucs2Write(e, r, t, f) {
                return blitBuffer(utf16leToBytes(r, e.length - t), e, t, f);
            }
            Buffer.prototype.write = function write(e, r, t, f) {
                if (r === undefined) {
                    f = "utf8";
                    t = this.length;
                    r = 0;
                } else if (t === undefined && typeof r === "string") {
                    f = r;
                    t = this.length;
                    r = 0;
                } else if (isFinite(r)) {
                    r = r >>> 0;
                    if (isFinite(t)) {
                        t = t >>> 0;
                        if (f === undefined) f = "utf8";
                    } else {
                        f = t;
                        t = undefined;
                    }
                } else {
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                }
                var n = this.length - r;
                if (t === undefined || t > n) t = n;
                if (e.length > 0 && (t < 0 || r < 0) || r > this.length) {
                    throw new RangeError("Attempt to write outside buffer bounds");
                }
                if (!f) f = "utf8";
                var i = false;
                for(;;){
                    switch(f){
                        case "hex":
                            return hexWrite(this, e, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Write(this, e, r, t);
                        case "ascii":
                            return asciiWrite(this, e, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Write(this, e, r, t);
                        case "base64":
                            return base64Write(this, e, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return ucs2Write(this, e, r, t);
                        default:
                            if (i) throw new TypeError("Unknown encoding: " + f);
                            f = ("" + f).toLowerCase();
                            i = true;
                    }
                }
            };
            Buffer.prototype.toJSON = function toJSON() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };
            function base64Slice(e, r, t) {
                if (r === 0 && t === e.length) {
                    return f.fromByteArray(e);
                } else {
                    return f.fromByteArray(e.slice(r, t));
                }
            }
            function utf8Slice(e, r, t) {
                t = Math.min(e.length, t);
                var f = [];
                var n = r;
                while(n < t){
                    var i = e[n];
                    var o = null;
                    var u = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
                    if (n + u <= t) {
                        var a, s, h, c;
                        switch(u){
                            case 1:
                                if (i < 128) {
                                    o = i;
                                }
                                break;
                            case 2:
                                a = e[n + 1];
                                if ((a & 192) === 128) {
                                    c = (i & 31) << 6 | a & 63;
                                    if (c > 127) {
                                        o = c;
                                    }
                                }
                                break;
                            case 3:
                                a = e[n + 1];
                                s = e[n + 2];
                                if ((a & 192) === 128 && (s & 192) === 128) {
                                    c = (i & 15) << 12 | (a & 63) << 6 | s & 63;
                                    if (c > 2047 && (c < 55296 || c > 57343)) {
                                        o = c;
                                    }
                                }
                                break;
                            case 4:
                                a = e[n + 1];
                                s = e[n + 2];
                                h = e[n + 3];
                                if ((a & 192) === 128 && (s & 192) === 128 && (h & 192) === 128) {
                                    c = (i & 15) << 18 | (a & 63) << 12 | (s & 63) << 6 | h & 63;
                                    if (c > 65535 && c < 1114112) {
                                        o = c;
                                    }
                                }
                        }
                    }
                    if (o === null) {
                        o = 65533;
                        u = 1;
                    } else if (o > 65535) {
                        o -= 65536;
                        f.push(o >>> 10 & 1023 | 55296);
                        o = 56320 | o & 1023;
                    }
                    f.push(o);
                    n += u;
                }
                return decodeCodePointsArray(f);
            }
            var u = 4096;
            function decodeCodePointsArray(e) {
                var r = e.length;
                if (r <= u) {
                    return String.fromCharCode.apply(String, e);
                }
                var t = "";
                var f = 0;
                while(f < r){
                    t += String.fromCharCode.apply(String, e.slice(f, f += u));
                }
                return t;
            }
            function asciiSlice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n] & 127);
                }
                return f;
            }
            function latin1Slice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n]);
                }
                return f;
            }
            function hexSlice(e, r, t) {
                var f = e.length;
                if (!r || r < 0) r = 0;
                if (!t || t < 0 || t > f) t = f;
                var n = "";
                for(var i = r; i < t; ++i){
                    n += s[e[i]];
                }
                return n;
            }
            function utf16leSlice(e, r, t) {
                var f = e.slice(r, t);
                var n = "";
                for(var i = 0; i < f.length; i += 2){
                    n += String.fromCharCode(f[i] + f[i + 1] * 256);
                }
                return n;
            }
            Buffer.prototype.slice = function slice(e, r) {
                var t = this.length;
                e = ~~e;
                r = r === undefined ? t : ~~r;
                if (e < 0) {
                    e += t;
                    if (e < 0) e = 0;
                } else if (e > t) {
                    e = t;
                }
                if (r < 0) {
                    r += t;
                    if (r < 0) r = 0;
                } else if (r > t) {
                    r = t;
                }
                if (r < e) r = e;
                var f = this.subarray(e, r);
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            };
            function checkOffset(e, r, t) {
                if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + r > t) throw new RangeError("Trying to access beyond buffer length");
            }
            Buffer.prototype.readUIntLE = function readUIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                return f;
            };
            Buffer.prototype.readUIntBE = function readUIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) {
                    checkOffset(e, r, this.length);
                }
                var f = this[e + --r];
                var n = 1;
                while(r > 0 && (n *= 256)){
                    f += this[e + --r] * n;
                }
                return f;
            };
            Buffer.prototype.readUInt8 = function readUInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                return this[e];
            };
            Buffer.prototype.readUInt16LE = function readUInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] | this[e + 1] << 8;
            };
            Buffer.prototype.readUInt16BE = function readUInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] << 8 | this[e + 1];
            };
            Buffer.prototype.readUInt32LE = function readUInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
            };
            Buffer.prototype.readUInt32BE = function readUInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
            };
            Buffer.prototype.readIntLE = function readIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                n *= 128;
                if (f >= n) f -= Math.pow(2, 8 * r);
                return f;
            };
            Buffer.prototype.readIntBE = function readIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = r;
                var n = 1;
                var i = this[e + --f];
                while(f > 0 && (n *= 256)){
                    i += this[e + --f] * n;
                }
                n *= 128;
                if (i >= n) i -= Math.pow(2, 8 * r);
                return i;
            };
            Buffer.prototype.readInt8 = function readInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                if (!(this[e] & 128)) return this[e];
                return (255 - this[e] + 1) * -1;
            };
            Buffer.prototype.readInt16LE = function readInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e] | this[e + 1] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt16BE = function readInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e + 1] | this[e] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt32LE = function readInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
            };
            Buffer.prototype.readInt32BE = function readInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
            };
            Buffer.prototype.readFloatLE = function readFloatLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, true, 23, 4);
            };
            Buffer.prototype.readFloatBE = function readFloatBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, false, 23, 4);
            };
            Buffer.prototype.readDoubleLE = function readDoubleLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, true, 52, 8);
            };
            Buffer.prototype.readDoubleBE = function readDoubleBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, false, 52, 8);
            };
            function checkInt(e, r, t, f, n, i) {
                if (!Buffer.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (r > n || r < i) throw new RangeError('"value" argument is out of bounds');
                if (t + f > e.length) throw new RangeError("Index out of range");
            }
            Buffer.prototype.writeUIntLE = function writeUIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = 1;
                var o = 0;
                this[r] = e & 255;
                while(++o < t && (i *= 256)){
                    this[r + o] = e / i & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUIntBE = function writeUIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = t - 1;
                var o = 1;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    this[r + i] = e / o & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUInt8 = function writeUInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 255, 0);
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeUInt16LE = function writeUInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeUInt16BE = function writeUInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeUInt32LE = function writeUInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r + 3] = e >>> 24;
                this[r + 2] = e >>> 16;
                this[r + 1] = e >>> 8;
                this[r] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeUInt32BE = function writeUInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeIntLE = function writeIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = 0;
                var o = 1;
                var u = 0;
                this[r] = e & 255;
                while(++i < t && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i - 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeIntBE = function writeIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = t - 1;
                var o = 1;
                var u = 0;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i + 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeInt8 = function writeInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 127, -128);
                if (e < 0) e = 255 + e + 1;
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeInt16LE = function writeInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeInt16BE = function writeInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeInt32LE = function writeInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                this[r + 2] = e >>> 16;
                this[r + 3] = e >>> 24;
                return r + 4;
            };
            Buffer.prototype.writeInt32BE = function writeInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                if (e < 0) e = 4294967295 + e + 1;
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            function checkIEEE754(e, r, t, f, n, i) {
                if (t + f > e.length) throw new RangeError("Index out of range");
                if (t < 0) throw new RangeError("Index out of range");
            }
            function writeFloat(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 4, 34028234663852886e22, -34028234663852886e22);
                }
                n.write(e, r, t, f, 23, 4);
                return t + 4;
            }
            Buffer.prototype.writeFloatLE = function writeFloatLE(e, r, t) {
                return writeFloat(this, e, r, true, t);
            };
            Buffer.prototype.writeFloatBE = function writeFloatBE(e, r, t) {
                return writeFloat(this, e, r, false, t);
            };
            function writeDouble(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 8, 17976931348623157e292, -17976931348623157e292);
                }
                n.write(e, r, t, f, 52, 8);
                return t + 8;
            }
            Buffer.prototype.writeDoubleLE = function writeDoubleLE(e, r, t) {
                return writeDouble(this, e, r, true, t);
            };
            Buffer.prototype.writeDoubleBE = function writeDoubleBE(e, r, t) {
                return writeDouble(this, e, r, false, t);
            };
            Buffer.prototype.copy = function copy(e, r, t, f) {
                if (!Buffer.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                if (!t) t = 0;
                if (!f && f !== 0) f = this.length;
                if (r >= e.length) r = e.length;
                if (!r) r = 0;
                if (f > 0 && f < t) f = t;
                if (f === t) return 0;
                if (e.length === 0 || this.length === 0) return 0;
                if (r < 0) {
                    throw new RangeError("targetStart out of bounds");
                }
                if (t < 0 || t >= this.length) throw new RangeError("Index out of range");
                if (f < 0) throw new RangeError("sourceEnd out of bounds");
                if (f > this.length) f = this.length;
                if (e.length - r < f - t) {
                    f = e.length - r + t;
                }
                var n = f - t;
                if (this === e && typeof Uint8Array.prototype.copyWithin === "function") {
                    this.copyWithin(r, t, f);
                } else if (this === e && t < r && r < f) {
                    for(var i = n - 1; i >= 0; --i){
                        e[i + r] = this[i + t];
                    }
                } else {
                    Uint8Array.prototype.set.call(e, this.subarray(t, f), r);
                }
                return n;
            };
            Buffer.prototype.fill = function fill(e, r, t, f) {
                if (typeof e === "string") {
                    if (typeof r === "string") {
                        f = r;
                        r = 0;
                        t = this.length;
                    } else if (typeof t === "string") {
                        f = t;
                        t = this.length;
                    }
                    if (f !== undefined && typeof f !== "string") {
                        throw new TypeError("encoding must be a string");
                    }
                    if (typeof f === "string" && !Buffer.isEncoding(f)) {
                        throw new TypeError("Unknown encoding: " + f);
                    }
                    if (e.length === 1) {
                        var n = e.charCodeAt(0);
                        if (f === "utf8" && n < 128 || f === "latin1") {
                            e = n;
                        }
                    }
                } else if (typeof e === "number") {
                    e = e & 255;
                } else if (typeof e === "boolean") {
                    e = Number(e);
                }
                if (r < 0 || this.length < r || this.length < t) {
                    throw new RangeError("Out of range index");
                }
                if (t <= r) {
                    return this;
                }
                r = r >>> 0;
                t = t === undefined ? this.length : t >>> 0;
                if (!e) e = 0;
                var i;
                if (typeof e === "number") {
                    for(i = r; i < t; ++i){
                        this[i] = e;
                    }
                } else {
                    var o = Buffer.isBuffer(e) ? e : Buffer.from(e, f);
                    var u = o.length;
                    if (u === 0) {
                        throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                    }
                    for(i = 0; i < t - r; ++i){
                        this[i + r] = o[i % u];
                    }
                }
                return this;
            };
            var a = /[^+/0-9A-Za-z-_]/g;
            function base64clean(e) {
                e = e.split("=")[0];
                e = e.trim().replace(a, "");
                if (e.length < 2) return "";
                while(e.length % 4 !== 0){
                    e = e + "=";
                }
                return e;
            }
            function utf8ToBytes(e, r) {
                r = r || Infinity;
                var t;
                var f = e.length;
                var n = null;
                var i = [];
                for(var o = 0; o < f; ++o){
                    t = e.charCodeAt(o);
                    if (t > 55295 && t < 57344) {
                        if (!n) {
                            if (t > 56319) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            } else if (o + 1 === f) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            }
                            n = t;
                            continue;
                        }
                        if (t < 56320) {
                            if ((r -= 3) > -1) i.push(239, 191, 189);
                            n = t;
                            continue;
                        }
                        t = (n - 55296 << 10 | t - 56320) + 65536;
                    } else if (n) {
                        if ((r -= 3) > -1) i.push(239, 191, 189);
                    }
                    n = null;
                    if (t < 128) {
                        if ((r -= 1) < 0) break;
                        i.push(t);
                    } else if (t < 2048) {
                        if ((r -= 2) < 0) break;
                        i.push(t >> 6 | 192, t & 63 | 128);
                    } else if (t < 65536) {
                        if ((r -= 3) < 0) break;
                        i.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
                    } else if (t < 1114112) {
                        if ((r -= 4) < 0) break;
                        i.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
                    } else {
                        throw new Error("Invalid code point");
                    }
                }
                return i;
            }
            function asciiToBytes(e) {
                var r = [];
                for(var t = 0; t < e.length; ++t){
                    r.push(e.charCodeAt(t) & 255);
                }
                return r;
            }
            function utf16leToBytes(e, r) {
                var t, f, n;
                var i = [];
                for(var o = 0; o < e.length; ++o){
                    if ((r -= 2) < 0) break;
                    t = e.charCodeAt(o);
                    f = t >> 8;
                    n = t % 256;
                    i.push(n);
                    i.push(f);
                }
                return i;
            }
            function base64ToBytes(e) {
                return f.toByteArray(base64clean(e));
            }
            function blitBuffer(e, r, t, f) {
                for(var n = 0; n < f; ++n){
                    if (n + t >= r.length || n >= e.length) break;
                    r[n + t] = e[n];
                }
                return n;
            }
            function isInstance(e, r) {
                return e instanceof r || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === r.name;
            }
            function numberIsNaN(e) {
                return e !== e;
            }
            var s = function() {
                var e = "0123456789abcdef";
                var r = new Array(256);
                for(var t = 0; t < 16; ++t){
                    var f = t * 16;
                    for(var n = 0; n < 16; ++n){
                        r[f + n] = e[t] + e[n];
                    }
                }
                return r;
            }();
        },
        783: function(e, r) {
            /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ r.read = function(e, r, t, f, n) {
                var i, o;
                var u = n * 8 - f - 1;
                var a = (1 << u) - 1;
                var s = a >> 1;
                var h = -7;
                var c = t ? n - 1 : 0;
                var l = t ? -1 : 1;
                var p = e[r + c];
                c += l;
                i = p & (1 << -h) - 1;
                p >>= -h;
                h += u;
                for(; h > 0; i = i * 256 + e[r + c], c += l, h -= 8){}
                o = i & (1 << -h) - 1;
                i >>= -h;
                h += f;
                for(; h > 0; o = o * 256 + e[r + c], c += l, h -= 8){}
                if (i === 0) {
                    i = 1 - s;
                } else if (i === a) {
                    return o ? NaN : (p ? -1 : 1) * Infinity;
                } else {
                    o = o + Math.pow(2, f);
                    i = i - s;
                }
                return (p ? -1 : 1) * o * Math.pow(2, i - f);
            };
            r.write = function(e, r, t, f, n, i) {
                var o, u, a;
                var s = i * 8 - n - 1;
                var h = (1 << s) - 1;
                var c = h >> 1;
                var l = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                var p = f ? 0 : i - 1;
                var y = f ? 1 : -1;
                var g = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
                r = Math.abs(r);
                if (isNaN(r) || r === Infinity) {
                    u = isNaN(r) ? 1 : 0;
                    o = h;
                } else {
                    o = Math.floor(Math.log(r) / Math.LN2);
                    if (r * (a = Math.pow(2, -o)) < 1) {
                        o--;
                        a *= 2;
                    }
                    if (o + c >= 1) {
                        r += l / a;
                    } else {
                        r += l * Math.pow(2, 1 - c);
                    }
                    if (r * a >= 2) {
                        o++;
                        a /= 2;
                    }
                    if (o + c >= h) {
                        u = 0;
                        o = h;
                    } else if (o + c >= 1) {
                        u = (r * a - 1) * Math.pow(2, n);
                        o = o + c;
                    } else {
                        u = r * Math.pow(2, c - 1) * Math.pow(2, n);
                        o = 0;
                    }
                }
                for(; n >= 8; e[t + p] = u & 255, p += y, u /= 256, n -= 8){}
                o = o << n | u;
                s += n;
                for(; s > 0; e[t + p] = o & 255, p += y, o /= 256, s -= 8){}
                e[t + p - y] |= g * 128;
            };
        }
    };
    var r = {};
    function __nccwpck_require__(t) {
        var f = r[t];
        if (f !== undefined) {
            return f.exports;
        }
        var n = r[t] = {
            exports: {}
        };
        var i = true;
        try {
            e[t](n, n.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete r[t];
        }
        return n.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/Website/node_modules/next/dist/compiled/buffer") + "/";
    var t = __nccwpck_require__(72);
    module.exports = t;
})();
}),
"[project]/Website/node_modules/exifr/dist/full.esm.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Exifr",
    ()=>te,
    "Options",
    ()=>q,
    "allFormatters",
    ()=>X,
    "chunkedProps",
    ()=>G,
    "createDictionary",
    ()=>U,
    "default",
    ()=>__TURBOPACK__default__export__,
    "extendDictionary",
    ()=>F,
    "fetchUrlAsArrayBuffer",
    ()=>M,
    "fileParsers",
    ()=>w,
    "fileReaders",
    ()=>A,
    "gps",
    ()=>Se,
    "gpsOnlyOptions",
    ()=>me,
    "inheritables",
    ()=>K,
    "orientation",
    ()=>Pe,
    "orientationOnlyOptions",
    ()=>Ie,
    "otherSegments",
    ()=>V,
    "parse",
    ()=>ie,
    "readBlobAsArrayBuffer",
    ()=>R,
    "rotateCanvas",
    ()=>we,
    "rotateCss",
    ()=>Te,
    "rotation",
    ()=>Ae,
    "rotations",
    ()=>ke,
    "segmentParsers",
    ()=>T,
    "segments",
    ()=>z,
    "segmentsAndBlocks",
    ()=>j,
    "sidecar",
    ()=>st,
    "tagKeys",
    ()=>E,
    "tagRevivers",
    ()=>N,
    "tagValues",
    ()=>B,
    "thumbnail",
    ()=>ye,
    "thumbnailOnlyOptions",
    ()=>Ce,
    "thumbnailUrl",
    ()=>be,
    "tiffBlocks",
    ()=>H,
    "tiffExtractables",
    ()=>W
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Website/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var e = "undefined" != typeof self ? self : /*TURBOPACK member replacement*/ __turbopack_context__.g;
const t = "undefined" != typeof navigator, i = t && "undefined" == typeof HTMLImageElement, n = !("undefined" == ("TURBOPACK compile-time value", "object") || "undefined" == typeof __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] || !__TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions || !__TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions.node), s = e.Buffer, r = e.BigInt, a = !!s, o = (e)=>e;
function l(e, t = o) {
    if (n) try {
        return ("TURBOPACK compile-time truthy", 1) ? Promise.resolve(t((()=>{
            const e = new Error("Cannot find module as expression is too dynamic");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })())) : "TURBOPACK unreachable";
    } catch (t) {
        console.warn(`Couldn't load ${e}`);
    }
}
let h = e.fetch;
const u = (e)=>h = e;
if (!e.fetch) {
    const e = l("http", (e)=>e), t = l("https", (e)=>e), i = (n, { headers: s } = {})=>new Promise(async (r, a)=>{
            let { port: o, hostname: l, pathname: h, protocol: u, search: c } = new URL(n);
            const f = {
                method: "GET",
                hostname: l,
                path: encodeURI(h) + c,
                headers: s
            };
            "" !== o && (f.port = Number(o));
            const d = ("https:" === u ? await t : await e).request(f, (e)=>{
                if (301 === e.statusCode || 302 === e.statusCode) {
                    let t = new URL(e.headers.location, n).toString();
                    return i(t, {
                        headers: s
                    }).then(r).catch(a);
                }
                r({
                    status: e.statusCode,
                    arrayBuffer: ()=>new Promise((t)=>{
                            let i = [];
                            e.on("data", (e)=>i.push(e)), e.on("end", ()=>t(__TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].concat(i)));
                        })
                });
            });
            d.on("error", a), d.end();
        });
    u(i);
}
function c(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i, e;
}
const f = (e)=>p(e) ? void 0 : e, d = (e)=>void 0 !== e;
function p(e) {
    return void 0 === e || (e instanceof Map ? 0 === e.size : 0 === Object.values(e).filter(d).length);
}
function g(e) {
    let t = new Error(e);
    throw delete t.stack, t;
}
function m(e) {
    return "" === (e = (function(e) {
        for(; e.endsWith("\0");)e = e.slice(0, -1);
        return e;
    })(e).trim()) ? void 0 : e;
}
function S(e) {
    let t = function(e) {
        let t = 0;
        return e.ifd0.enabled && (t += 1024), e.exif.enabled && (t += 2048), e.makerNote && (t += 2048), e.userComment && (t += 1024), e.gps.enabled && (t += 512), e.interop.enabled && (t += 100), e.ifd1.enabled && (t += 1024), t + 2048;
    }(e);
    return e.jfif.enabled && (t += 50), e.xmp.enabled && (t += 2e4), e.iptc.enabled && (t += 14e3), e.icc.enabled && (t += 6e3), t;
}
const C = (e)=>String.fromCharCode.apply(null, e), y = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8") : void 0;
function b(e) {
    return y ? y.decode(e) : a ? __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(e).toString("utf8") : decodeURIComponent(escape(C(e)));
}
class I {
    static from(e, t) {
        return e instanceof this && e.le === t ? e : new I(e, void 0, void 0, t);
    }
    constructor(e, t = 0, i, n){
        if ("boolean" == typeof n && (this.le = n), Array.isArray(e) && (e = new Uint8Array(e)), 0 === e) this.byteOffset = 0, this.byteLength = 0;
        else if (e instanceof ArrayBuffer) {
            void 0 === i && (i = e.byteLength - t);
            let n = new DataView(e, t, i);
            this._swapDataView(n);
        } else if (e instanceof Uint8Array || e instanceof DataView || e instanceof I) {
            void 0 === i && (i = e.byteLength - t), (t += e.byteOffset) + i > e.byteOffset + e.byteLength && g("Creating view outside of available memory in ArrayBuffer");
            let n = new DataView(e.buffer, t, i);
            this._swapDataView(n);
        } else if ("number" == typeof e) {
            let t = new DataView(new ArrayBuffer(e));
            this._swapDataView(t);
        } else g("Invalid input argument for BufferView: " + e);
    }
    _swapArrayBuffer(e) {
        this._swapDataView(new DataView(e));
    }
    _swapBuffer(e) {
        this._swapDataView(new DataView(e.buffer, e.byteOffset, e.byteLength));
    }
    _swapDataView(e) {
        this.dataView = e, this.buffer = e.buffer, this.byteOffset = e.byteOffset, this.byteLength = e.byteLength;
    }
    _lengthToEnd(e) {
        return this.byteLength - e;
    }
    set(e, t, i = I) {
        return e instanceof DataView || e instanceof I ? e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e instanceof ArrayBuffer && (e = new Uint8Array(e)), e instanceof Uint8Array || g("BufferView.set(): Invalid data argument."), this.toUint8().set(e, t), new i(this, t, e.byteLength);
    }
    subarray(e, t) {
        return t = t || this._lengthToEnd(e), new I(this, e, t);
    }
    toUint8() {
        return new Uint8Array(this.buffer, this.byteOffset, this.byteLength);
    }
    getUint8Array(e, t) {
        return new Uint8Array(this.buffer, this.byteOffset + e, t);
    }
    getString(e = 0, t = this.byteLength) {
        return b(this.getUint8Array(e, t));
    }
    getLatin1String(e = 0, t = this.byteLength) {
        let i = this.getUint8Array(e, t);
        return C(i);
    }
    getUnicodeString(e = 0, t = this.byteLength) {
        const i = [];
        for(let n = 0; n < t && e + n < this.byteLength; n += 2)i.push(this.getUint16(e + n));
        return C(i);
    }
    getInt8(e) {
        return this.dataView.getInt8(e);
    }
    getUint8(e) {
        return this.dataView.getUint8(e);
    }
    getInt16(e, t = this.le) {
        return this.dataView.getInt16(e, t);
    }
    getInt32(e, t = this.le) {
        return this.dataView.getInt32(e, t);
    }
    getUint16(e, t = this.le) {
        return this.dataView.getUint16(e, t);
    }
    getUint32(e, t = this.le) {
        return this.dataView.getUint32(e, t);
    }
    getFloat32(e, t = this.le) {
        return this.dataView.getFloat32(e, t);
    }
    getFloat64(e, t = this.le) {
        return this.dataView.getFloat64(e, t);
    }
    getFloat(e, t = this.le) {
        return this.dataView.getFloat32(e, t);
    }
    getDouble(e, t = this.le) {
        return this.dataView.getFloat64(e, t);
    }
    getUintBytes(e, t, i) {
        switch(t){
            case 1:
                return this.getUint8(e, i);
            case 2:
                return this.getUint16(e, i);
            case 4:
                return this.getUint32(e, i);
            case 8:
                return this.getUint64 && this.getUint64(e, i);
        }
    }
    getUint(e, t, i) {
        switch(t){
            case 8:
                return this.getUint8(e, i);
            case 16:
                return this.getUint16(e, i);
            case 32:
                return this.getUint32(e, i);
            case 64:
                return this.getUint64 && this.getUint64(e, i);
        }
    }
    toString(e) {
        return this.dataView.toString(e, this.constructor.name);
    }
    ensureChunk() {}
}
function P(e, t) {
    g(`${e} '${t}' was not loaded, try using full build of exifr.`);
}
class k extends Map {
    constructor(e){
        super(), this.kind = e;
    }
    get(e, t) {
        return this.has(e) || P(this.kind, e), t && (e in t || function(e, t) {
            g(`Unknown ${e} '${t}'.`);
        }(this.kind, e), t[e].enabled || P(this.kind, e)), super.get(e);
    }
    keyList() {
        return Array.from(this.keys());
    }
}
var w = new k("file parser"), T = new k("segment parser"), A = new k("file reader");
function D(e, n) {
    return "string" == typeof e ? O(e, n) : t && !i && e instanceof HTMLImageElement ? O(e.src, n) : e instanceof Uint8Array || e instanceof ArrayBuffer || e instanceof DataView ? new I(e) : t && e instanceof Blob ? x(e, n, "blob", R) : void g("Invalid input argument");
}
function O(e, i) {
    return (s = e).startsWith("data:") || s.length > 1e4 ? v(e, i, "base64") : n && e.includes("://") ? x(e, i, "url", M) : n ? v(e, i, "fs") : t ? x(e, i, "url", M) : void g("Invalid input argument");
    //TURBOPACK unreachable
    ;
    var s;
}
async function x(e, t, i, n) {
    return A.has(i) ? v(e, t, i) : n ? async function(e, t) {
        let i = await t(e);
        return new I(i);
    }(e, n) : void g(`Parser ${i} is not loaded`);
}
async function v(e, t, i) {
    let n = new (A.get(i))(e, t);
    return await n.read(), n;
}
const M = (e)=>h(e).then((e)=>e.arrayBuffer()), R = (e)=>new Promise((t, i)=>{
        let n = new FileReader;
        n.onloadend = ()=>t(n.result || new ArrayBuffer), n.onerror = i, n.readAsArrayBuffer(e);
    });
class L extends Map {
    get tagKeys() {
        return this.allKeys || (this.allKeys = Array.from(this.keys())), this.allKeys;
    }
    get tagValues() {
        return this.allValues || (this.allValues = Array.from(this.values())), this.allValues;
    }
}
function U(e, t, i) {
    let n = new L;
    for (let [e, t] of i)n.set(e, t);
    if (Array.isArray(t)) for (let i of t)e.set(i, n);
    else e.set(t, n);
    return n;
}
function F(e, t, i) {
    let n, s = e.get(t);
    for (n of i)s.set(n[0], n[1]);
}
const E = new Map, B = new Map, N = new Map, G = [
    "chunked",
    "firstChunkSize",
    "firstChunkSizeNode",
    "firstChunkSizeBrowser",
    "chunkSize",
    "chunkLimit"
], V = [
    "jfif",
    "xmp",
    "icc",
    "iptc",
    "ihdr"
], z = [
    "tiff",
    ...V
], H = [
    "ifd0",
    "ifd1",
    "exif",
    "gps",
    "interop"
], j = [
    ...z,
    ...H
], W = [
    "makerNote",
    "userComment"
], K = [
    "translateKeys",
    "translateValues",
    "reviveValues",
    "multiSegment"
], X = [
    ...K,
    "sanitize",
    "mergeOutput",
    "silentErrors"
];
class _ {
    get translate() {
        return this.translateKeys || this.translateValues || this.reviveValues;
    }
}
class Y extends _ {
    get needed() {
        return this.enabled || this.deps.size > 0;
    }
    constructor(e, t, i, n){
        if (super(), c(this, "enabled", !1), c(this, "skip", new Set), c(this, "pick", new Set), c(this, "deps", new Set), c(this, "translateKeys", !1), c(this, "translateValues", !1), c(this, "reviveValues", !1), this.key = e, this.enabled = t, this.parse = this.enabled, this.applyInheritables(n), this.canBeFiltered = H.includes(e), this.canBeFiltered && (this.dict = E.get(e)), void 0 !== i) if (Array.isArray(i)) this.parse = this.enabled = !0, this.canBeFiltered && i.length > 0 && this.translateTagSet(i, this.pick);
        else if ("object" == typeof i) {
            if (this.enabled = !0, this.parse = !1 !== i.parse, this.canBeFiltered) {
                let { pick: e, skip: t } = i;
                e && e.length > 0 && this.translateTagSet(e, this.pick), t && t.length > 0 && this.translateTagSet(t, this.skip);
            }
            this.applyInheritables(i);
        } else !0 === i || !1 === i ? this.parse = this.enabled = i : g(`Invalid options argument: ${i}`);
    }
    applyInheritables(e) {
        let t, i;
        for (t of K)i = e[t], void 0 !== i && (this[t] = i);
    }
    translateTagSet(e, t) {
        if (this.dict) {
            let i, n, { tagKeys: s, tagValues: r } = this.dict;
            for (i of e)"string" == typeof i ? (n = r.indexOf(i), -1 === n && (n = s.indexOf(Number(i))), -1 !== n && t.add(Number(s[n]))) : t.add(i);
        } else for (let i of e)t.add(i);
    }
    finalizeFilters() {
        !this.enabled && this.deps.size > 0 ? (this.enabled = !0, ee(this.pick, this.deps)) : this.enabled && this.pick.size > 0 && ee(this.pick, this.deps);
    }
}
var $ = {
    jfif: !1,
    tiff: !0,
    xmp: !1,
    icc: !1,
    iptc: !1,
    ifd0: !0,
    ifd1: !1,
    exif: !0,
    gps: !0,
    interop: !1,
    ihdr: void 0,
    makerNote: !1,
    userComment: !1,
    multiSegment: !1,
    skip: [],
    pick: [],
    translateKeys: !0,
    translateValues: !0,
    reviveValues: !0,
    sanitize: !0,
    mergeOutput: !0,
    silentErrors: !0,
    chunked: !0,
    firstChunkSize: void 0,
    firstChunkSizeNode: 512,
    firstChunkSizeBrowser: 65536,
    chunkSize: 65536,
    chunkLimit: 5
}, J = new Map;
class q extends _ {
    static useCached(e) {
        let t = J.get(e);
        return void 0 !== t || (t = new this(e), J.set(e, t)), t;
    }
    constructor(e){
        super(), !0 === e ? this.setupFromTrue() : void 0 === e ? this.setupFromUndefined() : Array.isArray(e) ? this.setupFromArray(e) : "object" == typeof e ? this.setupFromObject(e) : g(`Invalid options argument ${e}`), void 0 === this.firstChunkSize && (this.firstChunkSize = t ? this.firstChunkSizeBrowser : this.firstChunkSizeNode), this.mergeOutput && (this.ifd1.enabled = !1), this.filterNestedSegmentTags(), this.traverseTiffDependencyTree(), this.checkLoadedPlugins();
    }
    setupFromUndefined() {
        let e;
        for (e of G)this[e] = $[e];
        for (e of X)this[e] = $[e];
        for (e of W)this[e] = $[e];
        for (e of j)this[e] = new Y(e, $[e], void 0, this);
    }
    setupFromTrue() {
        let e;
        for (e of G)this[e] = $[e];
        for (e of X)this[e] = $[e];
        for (e of W)this[e] = !0;
        for (e of j)this[e] = new Y(e, !0, void 0, this);
    }
    setupFromArray(e) {
        let t;
        for (t of G)this[t] = $[t];
        for (t of X)this[t] = $[t];
        for (t of W)this[t] = $[t];
        for (t of j)this[t] = new Y(t, !1, void 0, this);
        this.setupGlobalFilters(e, void 0, H);
    }
    setupFromObject(e) {
        let t;
        for (t of (H.ifd0 = H.ifd0 || H.image, H.ifd1 = H.ifd1 || H.thumbnail, Object.assign(this, e), G))this[t] = Z(e[t], $[t]);
        for (t of X)this[t] = Z(e[t], $[t]);
        for (t of W)this[t] = Z(e[t], $[t]);
        for (t of z)this[t] = new Y(t, $[t], e[t], this);
        for (t of H)this[t] = new Y(t, $[t], e[t], this.tiff);
        this.setupGlobalFilters(e.pick, e.skip, H, j), !0 === e.tiff ? this.batchEnableWithBool(H, !0) : !1 === e.tiff ? this.batchEnableWithUserValue(H, e) : Array.isArray(e.tiff) ? this.setupGlobalFilters(e.tiff, void 0, H) : "object" == typeof e.tiff && this.setupGlobalFilters(e.tiff.pick, e.tiff.skip, H);
    }
    batchEnableWithBool(e, t) {
        for (let i of e)this[i].enabled = t;
    }
    batchEnableWithUserValue(e, t) {
        for (let i of e){
            let e = t[i];
            this[i].enabled = !1 !== e && void 0 !== e;
        }
    }
    setupGlobalFilters(e, t, i, n = i) {
        if (e && e.length) {
            for (let e of n)this[e].enabled = !1;
            let t = Q(e, i);
            for (let [e, i] of t)ee(this[e].pick, i), this[e].enabled = !0;
        } else if (t && t.length) {
            let e = Q(t, i);
            for (let [t, i] of e)ee(this[t].skip, i);
        }
    }
    filterNestedSegmentTags() {
        let { ifd0: e, exif: t, xmp: i, iptc: n, icc: s } = this;
        this.makerNote ? t.deps.add(37500) : t.skip.add(37500), this.userComment ? t.deps.add(37510) : t.skip.add(37510), i.enabled || e.skip.add(700), n.enabled || e.skip.add(33723), s.enabled || e.skip.add(34675);
    }
    traverseTiffDependencyTree() {
        let { ifd0: e, exif: t, gps: i, interop: n } = this;
        n.needed && (t.deps.add(40965), e.deps.add(40965)), t.needed && e.deps.add(34665), i.needed && e.deps.add(34853), this.tiff.enabled = H.some((e)=>!0 === this[e].enabled) || this.makerNote || this.userComment;
        for (let e of H)this[e].finalizeFilters();
    }
    get onlyTiff() {
        return !V.map((e)=>this[e].enabled).some((e)=>!0 === e) && this.tiff.enabled;
    }
    checkLoadedPlugins() {
        for (let e of z)this[e].enabled && !T.has(e) && P("segment parser", e);
    }
}
function Q(e, t) {
    let i, n, s, r, a = [];
    for (s of t){
        for (r of (i = E.get(s), n = [], i))(e.includes(r[0]) || e.includes(r[1])) && n.push(r[0]);
        n.length && a.push([
            s,
            n
        ]);
    }
    return a;
}
function Z(e, t) {
    return void 0 !== e ? e : void 0 !== t ? t : void 0;
}
function ee(e, t) {
    for (let i of t)e.add(i);
}
c(q, "default", $);
class te {
    constructor(e){
        c(this, "parsers", {}), c(this, "output", {}), c(this, "errors", []), c(this, "pushToErrors", (e)=>this.errors.push(e)), this.options = q.useCached(e);
    }
    async read(e) {
        this.file = await D(e, this.options);
    }
    setup() {
        if (this.fileParser) return;
        let { file: e } = this, t = e.getUint16(0);
        for (let [i, n] of w)if (n.canHandle(e, t)) return this.fileParser = new n(this.options, this.file, this.parsers), e[i] = !0;
        this.file.close && this.file.close(), g("Unknown file format");
    }
    async parse() {
        let { output: e, errors: t } = this;
        return this.setup(), this.options.silentErrors ? (await this.executeParsers().catch(this.pushToErrors), t.push(...this.fileParser.errors)) : await this.executeParsers(), this.file.close && this.file.close(), this.options.silentErrors && t.length > 0 && (e.errors = t), f(e);
    }
    async executeParsers() {
        let { output: e } = this;
        await this.fileParser.parse();
        let t = Object.values(this.parsers).map(async (t)=>{
            let i = await t.parse();
            t.assignToOutput(e, i);
        });
        this.options.silentErrors && (t = t.map((e)=>e.catch(this.pushToErrors))), await Promise.all(t);
    }
    async extractThumbnail() {
        this.setup();
        let { options: e, file: t } = this, i = T.get("tiff", e);
        var n;
        if (t.tiff ? n = {
            start: 0,
            type: "tiff"
        } : t.jpeg && (n = await this.fileParser.getOrFindSegment("tiff")), void 0 === n) return;
        let s = await this.fileParser.ensureSegmentChunk(n), r = this.parsers.tiff = new i(s, e, t), a = await r.extractThumbnail();
        return t.close && t.close(), a;
    }
}
async function ie(e, t) {
    let i = new te(t);
    return await i.read(e), i.parse();
}
var ne = Object.freeze({
    __proto__: null,
    parse: ie,
    Exifr: te,
    fileParsers: w,
    segmentParsers: T,
    fileReaders: A,
    tagKeys: E,
    tagValues: B,
    tagRevivers: N,
    createDictionary: U,
    extendDictionary: F,
    fetchUrlAsArrayBuffer: M,
    readBlobAsArrayBuffer: R,
    chunkedProps: G,
    otherSegments: V,
    segments: z,
    tiffBlocks: H,
    segmentsAndBlocks: j,
    tiffExtractables: W,
    inheritables: K,
    allFormatters: X,
    Options: q
});
class se {
    constructor(e, t, i){
        c(this, "errors", []), c(this, "ensureSegmentChunk", async (e)=>{
            let t = e.start, i = e.size || 65536;
            if (this.file.chunked) if (this.file.available(t, i)) e.chunk = this.file.subarray(t, i);
            else try {
                e.chunk = await this.file.readChunk(t, i);
            } catch (t) {
                g(`Couldn't read segment: ${JSON.stringify(e)}. ${t.message}`);
            }
            else this.file.byteLength > t + i ? e.chunk = this.file.subarray(t, i) : void 0 === e.size ? e.chunk = this.file.subarray(t) : g("Segment unreachable: " + JSON.stringify(e));
            return e.chunk;
        }), this.extendOptions && this.extendOptions(e), this.options = e, this.file = t, this.parsers = i;
    }
    injectSegment(e, t) {
        this.options[e].enabled && this.createParser(e, t);
    }
    createParser(e, t) {
        let i = new (T.get(e))(t, this.options, this.file);
        return this.parsers[e] = i;
    }
    createParsers(e) {
        for (let t of e){
            let { type: e, chunk: i } = t, n = this.options[e];
            if (n && n.enabled) {
                let t = this.parsers[e];
                t && t.append || t || this.createParser(e, i);
            }
        }
    }
    async readSegments(e) {
        let t = e.map(this.ensureSegmentChunk);
        await Promise.all(t);
    }
}
class re {
    static findPosition(e, t) {
        let i = e.getUint16(t + 2) + 2, n = "function" == typeof this.headerLength ? this.headerLength(e, t, i) : this.headerLength, s = t + n, r = i - n;
        return {
            offset: t,
            length: i,
            headerLength: n,
            start: s,
            size: r,
            end: s + r
        };
    }
    static parse(e, t = {}) {
        return new this(e, new q({
            [this.type]: t
        }), e).parse();
    }
    normalizeInput(e) {
        return e instanceof I ? e : new I(e);
    }
    constructor(e, t = {}, i){
        c(this, "errors", []), c(this, "raw", new Map), c(this, "handleError", (e)=>{
            if (!this.options.silentErrors) throw e;
            this.errors.push(e.message);
        }), this.chunk = this.normalizeInput(e), this.file = i, this.type = this.constructor.type, this.globalOptions = this.options = t, this.localOptions = t[this.type], this.canTranslate = this.localOptions && this.localOptions.translate;
    }
    translate() {
        this.canTranslate && (this.translated = this.translateBlock(this.raw, this.type));
    }
    get output() {
        return this.translated ? this.translated : this.raw ? Object.fromEntries(this.raw) : void 0;
    }
    translateBlock(e, t) {
        let i = N.get(t), n = B.get(t), s = E.get(t), r = this.options[t], a = r.reviveValues && !!i, o = r.translateValues && !!n, l = r.translateKeys && !!s, h = {};
        for (let [t, r] of e)a && i.has(t) ? r = i.get(t)(r) : o && n.has(t) && (r = this.translateValue(r, n.get(t))), l && s.has(t) && (t = s.get(t) || t), h[t] = r;
        return h;
    }
    translateValue(e, t) {
        return t[e] || t.DEFAULT || e;
    }
    assignToOutput(e, t) {
        this.assignObjectToOutput(e, this.constructor.type, t);
    }
    assignObjectToOutput(e, t, i) {
        if (this.globalOptions.mergeOutput) return Object.assign(e, i);
        e[t] ? Object.assign(e[t], i) : e[t] = i;
    }
}
c(re, "headerLength", 4), c(re, "type", void 0), c(re, "multiSegment", !1), c(re, "canHandle", ()=>!1);
function ae(e) {
    return 192 === e || 194 === e || 196 === e || 219 === e || 221 === e || 218 === e || 254 === e;
}
function oe(e) {
    return e >= 224 && e <= 239;
}
function le(e, t, i) {
    for (let [n, s] of T)if (s.canHandle(e, t, i)) return n;
}
class he extends se {
    constructor(...e){
        super(...e), c(this, "appSegments", []), c(this, "jpegSegments", []), c(this, "unknownSegments", []);
    }
    static canHandle(e, t) {
        return 65496 === t;
    }
    async parse() {
        await this.findAppSegments(), await this.readSegments(this.appSegments), this.mergeMultiSegments(), this.createParsers(this.mergedAppSegments || this.appSegments);
    }
    setupSegmentFinderArgs(e) {
        !0 === e ? (this.findAll = !0, this.wanted = new Set(T.keyList())) : (e = void 0 === e ? T.keyList().filter((e)=>this.options[e].enabled) : e.filter((e)=>this.options[e].enabled && T.has(e)), this.findAll = !1, this.remaining = new Set(e), this.wanted = new Set(e)), this.unfinishedMultiSegment = !1;
    }
    async findAppSegments(e = 0, t) {
        this.setupSegmentFinderArgs(t);
        let { file: i, findAll: n, wanted: s, remaining: r } = this;
        if (!n && this.file.chunked && (n = Array.from(s).some((e)=>{
            let t = T.get(e), i = this.options[e];
            return t.multiSegment && i.multiSegment;
        }), n && await this.file.readWhole()), e = this.findAppSegmentsInRange(e, i.byteLength), !this.options.onlyTiff && i.chunked) {
            let t = !1;
            for(; r.size > 0 && !t && (i.canReadNextChunk || this.unfinishedMultiSegment);){
                let { nextChunkOffset: n } = i, s = this.appSegments.some((e)=>!this.file.available(e.offset || e.start, e.length || e.size));
                if (t = e > n && !s ? !await i.readNextChunk(e) : !await i.readNextChunk(n), void 0 === (e = this.findAppSegmentsInRange(e, i.byteLength))) return;
            }
        }
    }
    findAppSegmentsInRange(e, t) {
        t -= 2;
        let i, n, s, r, a, o, { file: l, findAll: h, wanted: u, remaining: c, options: f } = this;
        for(; e < t; e++)if (255 === l.getUint8(e)) {
            if (i = l.getUint8(e + 1), oe(i)) {
                if (n = l.getUint16(e + 2), s = le(l, e, n), s && u.has(s) && (r = T.get(s), a = r.findPosition(l, e), o = f[s], a.type = s, this.appSegments.push(a), !h && (r.multiSegment && o.multiSegment ? (this.unfinishedMultiSegment = a.chunkNumber < a.chunkCount, this.unfinishedMultiSegment || c.delete(s)) : c.delete(s), 0 === c.size))) break;
                f.recordUnknownSegments && (a = re.findPosition(l, e), a.marker = i, this.unknownSegments.push(a)), e += n + 1;
            } else if (ae(i)) {
                if (n = l.getUint16(e + 2), 218 === i && !1 !== f.stopAfterSos) return;
                f.recordJpegSegments && this.jpegSegments.push({
                    offset: e,
                    length: n,
                    marker: i
                }), e += n + 1;
            }
        }
        return e;
    }
    mergeMultiSegments() {
        if (!this.appSegments.some((e)=>e.multiSegment)) return;
        let e = function(e, t) {
            let i, n, s, r = new Map;
            for(let a = 0; a < e.length; a++)i = e[a], n = i[t], r.has(n) ? s = r.get(n) : r.set(n, s = []), s.push(i);
            return Array.from(r);
        }(this.appSegments, "type");
        this.mergedAppSegments = e.map(([e, t])=>{
            let i = T.get(e, this.options);
            if (i.handleMultiSegments) {
                return {
                    type: e,
                    chunk: i.handleMultiSegments(t)
                };
            }
            return t[0];
        });
    }
    getSegment(e) {
        return this.appSegments.find((t)=>t.type === e);
    }
    async getOrFindSegment(e) {
        let t = this.getSegment(e);
        return void 0 === t && (await this.findAppSegments(0, [
            e
        ]), t = this.getSegment(e)), t;
    }
}
c(he, "type", "jpeg"), w.set("jpeg", he);
const ue = [
    void 0,
    1,
    1,
    2,
    4,
    8,
    1,
    1,
    2,
    4,
    8,
    4,
    8,
    4
];
class ce extends re {
    parseHeader() {
        var e = this.chunk.getUint16();
        18761 === e ? this.le = !0 : 19789 === e && (this.le = !1), this.chunk.le = this.le, this.headerParsed = !0;
    }
    parseTags(e, t, i = new Map) {
        let { pick: n, skip: s } = this.options[t];
        n = new Set(n);
        let r = n.size > 0, a = 0 === s.size, o = this.chunk.getUint16(e);
        e += 2;
        for(let l = 0; l < o; l++){
            let o = this.chunk.getUint16(e);
            if (r) {
                if (n.has(o) && (i.set(o, this.parseTag(e, o, t)), n.delete(o), 0 === n.size)) break;
            } else !a && s.has(o) || i.set(o, this.parseTag(e, o, t));
            e += 12;
        }
        return i;
    }
    parseTag(e, t, i) {
        let { chunk: n } = this, s = n.getUint16(e + 2), r = n.getUint32(e + 4), a = ue[s];
        if (a * r <= 4 ? e += 8 : e = n.getUint32(e + 8), (s < 1 || s > 13) && g(`Invalid TIFF value type. block: ${i.toUpperCase()}, tag: ${t.toString(16)}, type: ${s}, offset ${e}`), e > n.byteLength && g(`Invalid TIFF value offset. block: ${i.toUpperCase()}, tag: ${t.toString(16)}, type: ${s}, offset ${e} is outside of chunk size ${n.byteLength}`), 1 === s) return n.getUint8Array(e, r);
        if (2 === s) return m(n.getString(e, r));
        if (7 === s) return n.getUint8Array(e, r);
        if (1 === r) return this.parseTagValue(s, e);
        {
            let t = new (function(e) {
                switch(e){
                    case 1:
                        return Uint8Array;
                    case 3:
                        return Uint16Array;
                    case 4:
                        return Uint32Array;
                    case 5:
                        return Array;
                    case 6:
                        return Int8Array;
                    case 8:
                        return Int16Array;
                    case 9:
                        return Int32Array;
                    case 10:
                        return Array;
                    case 11:
                        return Float32Array;
                    case 12:
                        return Float64Array;
                    default:
                        return Array;
                }
            }(s))(r), i = a;
            for(let n = 0; n < r; n++)t[n] = this.parseTagValue(s, e), e += i;
            return t;
        }
    }
    parseTagValue(e, t) {
        let { chunk: i } = this;
        switch(e){
            case 1:
                return i.getUint8(t);
            case 3:
                return i.getUint16(t);
            case 4:
                return i.getUint32(t);
            case 5:
                return i.getUint32(t) / i.getUint32(t + 4);
            case 6:
                return i.getInt8(t);
            case 8:
                return i.getInt16(t);
            case 9:
                return i.getInt32(t);
            case 10:
                return i.getInt32(t) / i.getInt32(t + 4);
            case 11:
                return i.getFloat(t);
            case 12:
                return i.getDouble(t);
            case 13:
                return i.getUint32(t);
            default:
                g(`Invalid tiff type ${e}`);
        }
    }
}
class fe extends ce {
    static canHandle(e, t) {
        return 225 === e.getUint8(t + 1) && 1165519206 === e.getUint32(t + 4) && 0 === e.getUint16(t + 8);
    }
    async parse() {
        this.parseHeader();
        let { options: e } = this;
        return e.ifd0.enabled && await this.parseIfd0Block(), e.exif.enabled && await this.safeParse("parseExifBlock"), e.gps.enabled && await this.safeParse("parseGpsBlock"), e.interop.enabled && await this.safeParse("parseInteropBlock"), e.ifd1.enabled && await this.safeParse("parseThumbnailBlock"), this.createOutput();
    }
    safeParse(e) {
        let t = this[e]();
        return void 0 !== t.catch && (t = t.catch(this.handleError)), t;
    }
    findIfd0Offset() {
        void 0 === this.ifd0Offset && (this.ifd0Offset = this.chunk.getUint32(4));
    }
    findIfd1Offset() {
        if (void 0 === this.ifd1Offset) {
            this.findIfd0Offset();
            let e = this.chunk.getUint16(this.ifd0Offset), t = this.ifd0Offset + 2 + 12 * e;
            this.ifd1Offset = this.chunk.getUint32(t);
        }
    }
    parseBlock(e, t) {
        let i = new Map;
        return this[t] = i, this.parseTags(e, t, i), i;
    }
    async parseIfd0Block() {
        if (this.ifd0) return;
        let { file: e } = this;
        this.findIfd0Offset(), this.ifd0Offset < 8 && g("Malformed EXIF data"), !e.chunked && this.ifd0Offset > e.byteLength && g(`IFD0 offset points to outside of file.\nthis.ifd0Offset: ${this.ifd0Offset}, file.byteLength: ${e.byteLength}`), e.tiff && await e.ensureChunk(this.ifd0Offset, S(this.options));
        let t = this.parseBlock(this.ifd0Offset, "ifd0");
        return 0 !== t.size ? (this.exifOffset = t.get(34665), this.interopOffset = t.get(40965), this.gpsOffset = t.get(34853), this.xmp = t.get(700), this.iptc = t.get(33723), this.icc = t.get(34675), this.options.sanitize && (t.delete(34665), t.delete(40965), t.delete(34853), t.delete(700), t.delete(33723), t.delete(34675)), t) : void 0;
    }
    async parseExifBlock() {
        if (this.exif) return;
        if (this.ifd0 || await this.parseIfd0Block(), void 0 === this.exifOffset) return;
        this.file.tiff && await this.file.ensureChunk(this.exifOffset, S(this.options));
        let e = this.parseBlock(this.exifOffset, "exif");
        return this.interopOffset || (this.interopOffset = e.get(40965)), this.makerNote = e.get(37500), this.userComment = e.get(37510), this.options.sanitize && (e.delete(40965), e.delete(37500), e.delete(37510)), this.unpack(e, 41728), this.unpack(e, 41729), e;
    }
    unpack(e, t) {
        let i = e.get(t);
        i && 1 === i.length && e.set(t, i[0]);
    }
    async parseGpsBlock() {
        if (this.gps) return;
        if (this.ifd0 || await this.parseIfd0Block(), void 0 === this.gpsOffset) return;
        let e = this.parseBlock(this.gpsOffset, "gps");
        return e && e.has(2) && e.has(4) && (e.set("latitude", de(...e.get(2), e.get(1))), e.set("longitude", de(...e.get(4), e.get(3)))), e;
    }
    async parseInteropBlock() {
        if (!this.interop && (this.ifd0 || await this.parseIfd0Block(), void 0 !== this.interopOffset || this.exif || await this.parseExifBlock(), void 0 !== this.interopOffset)) return this.parseBlock(this.interopOffset, "interop");
    }
    async parseThumbnailBlock(e = !1) {
        if (!this.ifd1 && !this.ifd1Parsed && (!this.options.mergeOutput || e)) return this.findIfd1Offset(), this.ifd1Offset > 0 && (this.parseBlock(this.ifd1Offset, "ifd1"), this.ifd1Parsed = !0), this.ifd1;
    }
    async extractThumbnail() {
        if (this.headerParsed || this.parseHeader(), this.ifd1Parsed || await this.parseThumbnailBlock(!0), void 0 === this.ifd1) return;
        let e = this.ifd1.get(513), t = this.ifd1.get(514);
        return this.chunk.getUint8Array(e, t);
    }
    get image() {
        return this.ifd0;
    }
    get thumbnail() {
        return this.ifd1;
    }
    createOutput() {
        let e, t, i, n = {};
        for (t of H)if (e = this[t], !p(e)) if (i = this.canTranslate ? this.translateBlock(e, t) : Object.fromEntries(e), this.options.mergeOutput) {
            if ("ifd1" === t) continue;
            Object.assign(n, i);
        } else n[t] = i;
        return this.makerNote && (n.makerNote = this.makerNote), this.userComment && (n.userComment = this.userComment), n;
    }
    assignToOutput(e, t) {
        if (this.globalOptions.mergeOutput) Object.assign(e, t);
        else for (let [i, n] of Object.entries(t))this.assignObjectToOutput(e, i, n);
    }
}
function de(e, t, i, n) {
    var s = e + t / 60 + i / 3600;
    return "S" !== n && "W" !== n || (s *= -1), s;
}
c(fe, "type", "tiff"), c(fe, "headerLength", 10), T.set("tiff", fe);
var pe = Object.freeze({
    __proto__: null,
    default: ne,
    Exifr: te,
    fileParsers: w,
    segmentParsers: T,
    fileReaders: A,
    tagKeys: E,
    tagValues: B,
    tagRevivers: N,
    createDictionary: U,
    extendDictionary: F,
    fetchUrlAsArrayBuffer: M,
    readBlobAsArrayBuffer: R,
    chunkedProps: G,
    otherSegments: V,
    segments: z,
    tiffBlocks: H,
    segmentsAndBlocks: j,
    tiffExtractables: W,
    inheritables: K,
    allFormatters: X,
    Options: q,
    parse: ie
});
const ge = {
    ifd0: !1,
    ifd1: !1,
    exif: !1,
    gps: !1,
    interop: !1,
    sanitize: !1,
    reviveValues: !0,
    translateKeys: !1,
    translateValues: !1,
    mergeOutput: !1
}, me = Object.assign({}, ge, {
    firstChunkSize: 4e4,
    gps: [
        1,
        2,
        3,
        4
    ]
});
async function Se(e) {
    let t = new te(me);
    await t.read(e);
    let i = await t.parse();
    if (i && i.gps) {
        let { latitude: e, longitude: t } = i.gps;
        return {
            latitude: e,
            longitude: t
        };
    }
}
const Ce = Object.assign({}, ge, {
    tiff: !1,
    ifd1: !0,
    mergeOutput: !1
});
async function ye(e) {
    let t = new te(Ce);
    await t.read(e);
    let i = await t.extractThumbnail();
    return i && a ? s.from(i) : i;
}
async function be(e) {
    let t = await this.thumbnail(e);
    if (void 0 !== t) {
        let e = new Blob([
            t
        ]);
        return URL.createObjectURL(e);
    }
}
const Ie = Object.assign({}, ge, {
    firstChunkSize: 4e4,
    ifd0: [
        274
    ]
});
async function Pe(e) {
    let t = new te(Ie);
    await t.read(e);
    let i = await t.parse();
    if (i && i.ifd0) return i.ifd0[274];
}
const ke = Object.freeze({
    1: {
        dimensionSwapped: !1,
        scaleX: 1,
        scaleY: 1,
        deg: 0,
        rad: 0
    },
    2: {
        dimensionSwapped: !1,
        scaleX: -1,
        scaleY: 1,
        deg: 0,
        rad: 0
    },
    3: {
        dimensionSwapped: !1,
        scaleX: 1,
        scaleY: 1,
        deg: 180,
        rad: 180 * Math.PI / 180
    },
    4: {
        dimensionSwapped: !1,
        scaleX: -1,
        scaleY: 1,
        deg: 180,
        rad: 180 * Math.PI / 180
    },
    5: {
        dimensionSwapped: !0,
        scaleX: 1,
        scaleY: -1,
        deg: 90,
        rad: 90 * Math.PI / 180
    },
    6: {
        dimensionSwapped: !0,
        scaleX: 1,
        scaleY: 1,
        deg: 90,
        rad: 90 * Math.PI / 180
    },
    7: {
        dimensionSwapped: !0,
        scaleX: 1,
        scaleY: -1,
        deg: 270,
        rad: 270 * Math.PI / 180
    },
    8: {
        dimensionSwapped: !0,
        scaleX: 1,
        scaleY: 1,
        deg: 270,
        rad: 270 * Math.PI / 180
    }
});
let we = !0, Te = !0;
if ("object" == typeof navigator) {
    let e = navigator.userAgent;
    if (e.includes("iPad") || e.includes("iPhone")) {
        let t = e.match(/OS (\d+)_(\d+)/);
        if (t) {
            let [, e, i] = t, n = Number(e) + .1 * Number(i);
            we = n < 13.4, Te = !1;
        }
    } else if (e.includes("OS X 10")) {
        let [, t] = e.match(/OS X 10[_.](\d+)/);
        we = Te = Number(t) < 15;
    }
    if (e.includes("Chrome/")) {
        let [, t] = e.match(/Chrome\/(\d+)/);
        we = Te = Number(t) < 81;
    } else if (e.includes("Firefox/")) {
        let [, t] = e.match(/Firefox\/(\d+)/);
        we = Te = Number(t) < 77;
    }
}
async function Ae(e) {
    let t = await Pe(e);
    return Object.assign({
        canvas: we,
        css: Te
    }, ke[t]);
}
class De extends I {
    constructor(...e){
        super(...e), c(this, "ranges", new Oe), 0 !== this.byteLength && this.ranges.add(0, this.byteLength);
    }
    _tryExtend(e, t, i) {
        if (0 === e && 0 === this.byteLength && i) {
            let e = new DataView(i.buffer || i, i.byteOffset, i.byteLength);
            this._swapDataView(e);
        } else {
            let i = e + t;
            if (i > this.byteLength) {
                let { dataView: e } = this._extend(i);
                this._swapDataView(e);
            }
        }
    }
    _extend(e) {
        let t;
        t = a ? s.allocUnsafe(e) : new Uint8Array(e);
        let i = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return t.set(new Uint8Array(this.buffer, this.byteOffset, this.byteLength), 0), {
            uintView: t,
            dataView: i
        };
    }
    subarray(e, t, i = !1) {
        return t = t || this._lengthToEnd(e), i && this._tryExtend(e, t), this.ranges.add(e, t), super.subarray(e, t);
    }
    set(e, t, i = !1) {
        i && this._tryExtend(t, e.byteLength, e);
        let n = super.set(e, t);
        return this.ranges.add(t, n.byteLength), n;
    }
    async ensureChunk(e, t) {
        this.chunked && (this.ranges.available(e, t) || await this.readChunk(e, t));
    }
    available(e, t) {
        return this.ranges.available(e, t);
    }
}
class Oe {
    constructor(){
        c(this, "list", []);
    }
    get length() {
        return this.list.length;
    }
    add(e, t, i = 0) {
        let n = e + t, s = this.list.filter((t)=>xe(e, t.offset, n) || xe(e, t.end, n));
        if (s.length > 0) {
            e = Math.min(e, ...s.map((e)=>e.offset)), n = Math.max(n, ...s.map((e)=>e.end)), t = n - e;
            let i = s.shift();
            i.offset = e, i.length = t, i.end = n, this.list = this.list.filter((e)=>!s.includes(e));
        } else this.list.push({
            offset: e,
            length: t,
            end: n
        });
    }
    available(e, t) {
        let i = e + t;
        return this.list.some((t)=>t.offset <= e && i <= t.end);
    }
}
function xe(e, t, i) {
    return e <= t && t <= i;
}
class ve extends De {
    constructor(e, t){
        super(0), c(this, "chunksRead", 0), this.input = e, this.options = t;
    }
    async readWhole() {
        this.chunked = !1, await this.readChunk(this.nextChunkOffset);
    }
    async readChunked() {
        this.chunked = !0, await this.readChunk(0, this.options.firstChunkSize);
    }
    async readNextChunk(e = this.nextChunkOffset) {
        if (this.fullyRead) return this.chunksRead++, !1;
        let t = this.options.chunkSize, i = await this.readChunk(e, t);
        return !!i && i.byteLength === t;
    }
    async readChunk(e, t) {
        if (this.chunksRead++, 0 !== (t = this.safeWrapAddress(e, t))) return this._readChunk(e, t);
    }
    safeWrapAddress(e, t) {
        return void 0 !== this.size && e + t > this.size ? Math.max(0, this.size - e) : t;
    }
    get nextChunkOffset() {
        if (0 !== this.ranges.list.length) return this.ranges.list[0].length;
    }
    get canReadNextChunk() {
        return this.chunksRead < this.options.chunkLimit;
    }
    get fullyRead() {
        return void 0 !== this.size && this.nextChunkOffset === this.size;
    }
    read() {
        return this.options.chunked ? this.readChunked() : this.readWhole();
    }
    close() {}
}
A.set("blob", class extends ve {
    async readWhole() {
        this.chunked = !1;
        let e = await R(this.input);
        this._swapArrayBuffer(e);
    }
    readChunked() {
        return this.chunked = !0, this.size = this.input.size, super.readChunked();
    }
    async _readChunk(e, t) {
        let i = t ? e + t : void 0, n = this.input.slice(e, i), s = await R(n);
        return this.set(s, e, !0);
    }
});
var Me = Object.freeze({
    __proto__: null,
    default: pe,
    Exifr: te,
    fileParsers: w,
    segmentParsers: T,
    fileReaders: A,
    tagKeys: E,
    tagValues: B,
    tagRevivers: N,
    createDictionary: U,
    extendDictionary: F,
    fetchUrlAsArrayBuffer: M,
    readBlobAsArrayBuffer: R,
    chunkedProps: G,
    otherSegments: V,
    segments: z,
    tiffBlocks: H,
    segmentsAndBlocks: j,
    tiffExtractables: W,
    inheritables: K,
    allFormatters: X,
    Options: q,
    parse: ie,
    gpsOnlyOptions: me,
    gps: Se,
    thumbnailOnlyOptions: Ce,
    thumbnail: ye,
    thumbnailUrl: be,
    orientationOnlyOptions: Ie,
    orientation: Pe,
    rotations: ke,
    get rotateCanvas () {
        return we;
    },
    get rotateCss () {
        return Te;
    },
    rotation: Ae
});
A.set("url", class extends ve {
    async readWhole() {
        this.chunked = !1;
        let e = await M(this.input);
        e instanceof ArrayBuffer ? this._swapArrayBuffer(e) : e instanceof Uint8Array && this._swapBuffer(e);
    }
    async _readChunk(e, t) {
        let i = t ? e + t - 1 : void 0, n = this.options.httpHeaders || {};
        (e || i) && (n.range = `bytes=${[
            e,
            i
        ].join("-")}`);
        let s = await h(this.input, {
            headers: n
        }), r = await s.arrayBuffer(), a = r.byteLength;
        if (416 !== s.status) return a !== t && (this.size = e + a), this.set(r, e, !0);
    }
});
I.prototype.getUint64 = function(e) {
    let t = this.getUint32(e), i = this.getUint32(e + 4);
    return t < 1048575 ? t << 32 | i : void 0 !== typeof r ? (console.warn("Using BigInt because of type 64uint but JS can only handle 53b numbers."), r(t) << r(32) | r(i)) : void g("Trying to read 64b value but JS can only handle 53b numbers.");
};
class Re extends se {
    parseBoxes(e = 0) {
        let t = [];
        for(; e < this.file.byteLength - 4;){
            let i = this.parseBoxHead(e);
            if (t.push(i), 0 === i.length) break;
            e += i.length;
        }
        return t;
    }
    parseSubBoxes(e) {
        e.boxes = this.parseBoxes(e.start);
    }
    findBox(e, t) {
        return void 0 === e.boxes && this.parseSubBoxes(e), e.boxes.find((e)=>e.kind === t);
    }
    parseBoxHead(e) {
        let t = this.file.getUint32(e), i = this.file.getString(e + 4, 4), n = e + 8;
        return 1 === t && (t = this.file.getUint64(e + 8), n += 8), {
            offset: e,
            length: t,
            kind: i,
            start: n
        };
    }
    parseBoxFullHead(e) {
        if (void 0 !== e.version) return;
        let t = this.file.getUint32(e.start);
        e.version = t >> 24, e.start += 4;
    }
}
class Le extends Re {
    static canHandle(e, t) {
        if (0 !== t) return !1;
        let i = e.getUint16(2);
        if (i > 50) return !1;
        let n = 16, s = [];
        for(; n < i;)s.push(e.getString(n, 4)), n += 4;
        return s.includes(this.type);
    }
    async parse() {
        let e = this.file.getUint32(0), t = this.parseBoxHead(e);
        for(; "meta" !== t.kind;)e += t.length, await this.file.ensureChunk(e, 16), t = this.parseBoxHead(e);
        await this.file.ensureChunk(t.offset, t.length), this.parseBoxFullHead(t), this.parseSubBoxes(t), this.options.icc.enabled && await this.findIcc(t), this.options.tiff.enabled && await this.findExif(t);
    }
    async registerSegment(e, t, i) {
        await this.file.ensureChunk(t, i);
        let n = this.file.subarray(t, i);
        this.createParser(e, n);
    }
    async findIcc(e) {
        let t = this.findBox(e, "iprp");
        if (void 0 === t) return;
        let i = this.findBox(t, "ipco");
        if (void 0 === i) return;
        let n = this.findBox(i, "colr");
        void 0 !== n && await this.registerSegment("icc", n.offset + 12, n.length);
    }
    async findExif(e) {
        let t = this.findBox(e, "iinf");
        if (void 0 === t) return;
        let i = this.findBox(e, "iloc");
        if (void 0 === i) return;
        let n = this.findExifLocIdInIinf(t), s = this.findExtentInIloc(i, n);
        if (void 0 === s) return;
        let [r, a] = s;
        await this.file.ensureChunk(r, a);
        let o = 4 + this.file.getUint32(r);
        r += o, a -= o, await this.registerSegment("tiff", r, a);
    }
    findExifLocIdInIinf(e) {
        this.parseBoxFullHead(e);
        let t, i, n, s, r = e.start, a = this.file.getUint16(r);
        for(r += 2; a--;){
            if (t = this.parseBoxHead(r), this.parseBoxFullHead(t), i = t.start, t.version >= 2 && (n = 3 === t.version ? 4 : 2, s = this.file.getString(i + n + 2, 4), "Exif" === s)) return this.file.getUintBytes(i, n);
            r += t.length;
        }
    }
    get8bits(e) {
        let t = this.file.getUint8(e);
        return [
            t >> 4,
            15 & t
        ];
    }
    findExtentInIloc(e, t) {
        this.parseBoxFullHead(e);
        let i = e.start, [n, s] = this.get8bits(i++), [r, a] = this.get8bits(i++), o = 2 === e.version ? 4 : 2, l = 1 === e.version || 2 === e.version ? 2 : 0, h = a + n + s, u = 2 === e.version ? 4 : 2, c = this.file.getUintBytes(i, u);
        for(i += u; c--;){
            let e = this.file.getUintBytes(i, o);
            i += o + l + 2 + r;
            let u = this.file.getUint16(i);
            if (i += 2, e === t) return u > 1 && console.warn("ILOC box has more than one extent but we're only processing one\nPlease create an issue at https://github.com/MikeKovarik/exifr with this file"), [
                this.file.getUintBytes(i + a, n),
                this.file.getUintBytes(i + a + n, s)
            ];
            i += u * h;
        }
    }
}
class Ue extends Le {
}
c(Ue, "type", "heic");
class Fe extends Le {
}
c(Fe, "type", "avif"), w.set("heic", Ue), w.set("avif", Fe), U(E, [
    "ifd0",
    "ifd1"
], [
    [
        256,
        "ImageWidth"
    ],
    [
        257,
        "ImageHeight"
    ],
    [
        258,
        "BitsPerSample"
    ],
    [
        259,
        "Compression"
    ],
    [
        262,
        "PhotometricInterpretation"
    ],
    [
        270,
        "ImageDescription"
    ],
    [
        271,
        "Make"
    ],
    [
        272,
        "Model"
    ],
    [
        273,
        "StripOffsets"
    ],
    [
        274,
        "Orientation"
    ],
    [
        277,
        "SamplesPerPixel"
    ],
    [
        278,
        "RowsPerStrip"
    ],
    [
        279,
        "StripByteCounts"
    ],
    [
        282,
        "XResolution"
    ],
    [
        283,
        "YResolution"
    ],
    [
        284,
        "PlanarConfiguration"
    ],
    [
        296,
        "ResolutionUnit"
    ],
    [
        301,
        "TransferFunction"
    ],
    [
        305,
        "Software"
    ],
    [
        306,
        "ModifyDate"
    ],
    [
        315,
        "Artist"
    ],
    [
        316,
        "HostComputer"
    ],
    [
        317,
        "Predictor"
    ],
    [
        318,
        "WhitePoint"
    ],
    [
        319,
        "PrimaryChromaticities"
    ],
    [
        513,
        "ThumbnailOffset"
    ],
    [
        514,
        "ThumbnailLength"
    ],
    [
        529,
        "YCbCrCoefficients"
    ],
    [
        530,
        "YCbCrSubSampling"
    ],
    [
        531,
        "YCbCrPositioning"
    ],
    [
        532,
        "ReferenceBlackWhite"
    ],
    [
        700,
        "ApplicationNotes"
    ],
    [
        33432,
        "Copyright"
    ],
    [
        33723,
        "IPTC"
    ],
    [
        34665,
        "ExifIFD"
    ],
    [
        34675,
        "ICC"
    ],
    [
        34853,
        "GpsIFD"
    ],
    [
        330,
        "SubIFD"
    ],
    [
        40965,
        "InteropIFD"
    ],
    [
        40091,
        "XPTitle"
    ],
    [
        40092,
        "XPComment"
    ],
    [
        40093,
        "XPAuthor"
    ],
    [
        40094,
        "XPKeywords"
    ],
    [
        40095,
        "XPSubject"
    ]
]), U(E, "exif", [
    [
        33434,
        "ExposureTime"
    ],
    [
        33437,
        "FNumber"
    ],
    [
        34850,
        "ExposureProgram"
    ],
    [
        34852,
        "SpectralSensitivity"
    ],
    [
        34855,
        "ISO"
    ],
    [
        34858,
        "TimeZoneOffset"
    ],
    [
        34859,
        "SelfTimerMode"
    ],
    [
        34864,
        "SensitivityType"
    ],
    [
        34865,
        "StandardOutputSensitivity"
    ],
    [
        34866,
        "RecommendedExposureIndex"
    ],
    [
        34867,
        "ISOSpeed"
    ],
    [
        34868,
        "ISOSpeedLatitudeyyy"
    ],
    [
        34869,
        "ISOSpeedLatitudezzz"
    ],
    [
        36864,
        "ExifVersion"
    ],
    [
        36867,
        "DateTimeOriginal"
    ],
    [
        36868,
        "CreateDate"
    ],
    [
        36873,
        "GooglePlusUploadCode"
    ],
    [
        36880,
        "OffsetTime"
    ],
    [
        36881,
        "OffsetTimeOriginal"
    ],
    [
        36882,
        "OffsetTimeDigitized"
    ],
    [
        37121,
        "ComponentsConfiguration"
    ],
    [
        37122,
        "CompressedBitsPerPixel"
    ],
    [
        37377,
        "ShutterSpeedValue"
    ],
    [
        37378,
        "ApertureValue"
    ],
    [
        37379,
        "BrightnessValue"
    ],
    [
        37380,
        "ExposureCompensation"
    ],
    [
        37381,
        "MaxApertureValue"
    ],
    [
        37382,
        "SubjectDistance"
    ],
    [
        37383,
        "MeteringMode"
    ],
    [
        37384,
        "LightSource"
    ],
    [
        37385,
        "Flash"
    ],
    [
        37386,
        "FocalLength"
    ],
    [
        37393,
        "ImageNumber"
    ],
    [
        37394,
        "SecurityClassification"
    ],
    [
        37395,
        "ImageHistory"
    ],
    [
        37396,
        "SubjectArea"
    ],
    [
        37500,
        "MakerNote"
    ],
    [
        37510,
        "UserComment"
    ],
    [
        37520,
        "SubSecTime"
    ],
    [
        37521,
        "SubSecTimeOriginal"
    ],
    [
        37522,
        "SubSecTimeDigitized"
    ],
    [
        37888,
        "AmbientTemperature"
    ],
    [
        37889,
        "Humidity"
    ],
    [
        37890,
        "Pressure"
    ],
    [
        37891,
        "WaterDepth"
    ],
    [
        37892,
        "Acceleration"
    ],
    [
        37893,
        "CameraElevationAngle"
    ],
    [
        40960,
        "FlashpixVersion"
    ],
    [
        40961,
        "ColorSpace"
    ],
    [
        40962,
        "ExifImageWidth"
    ],
    [
        40963,
        "ExifImageHeight"
    ],
    [
        40964,
        "RelatedSoundFile"
    ],
    [
        41483,
        "FlashEnergy"
    ],
    [
        41486,
        "FocalPlaneXResolution"
    ],
    [
        41487,
        "FocalPlaneYResolution"
    ],
    [
        41488,
        "FocalPlaneResolutionUnit"
    ],
    [
        41492,
        "SubjectLocation"
    ],
    [
        41493,
        "ExposureIndex"
    ],
    [
        41495,
        "SensingMethod"
    ],
    [
        41728,
        "FileSource"
    ],
    [
        41729,
        "SceneType"
    ],
    [
        41730,
        "CFAPattern"
    ],
    [
        41985,
        "CustomRendered"
    ],
    [
        41986,
        "ExposureMode"
    ],
    [
        41987,
        "WhiteBalance"
    ],
    [
        41988,
        "DigitalZoomRatio"
    ],
    [
        41989,
        "FocalLengthIn35mmFormat"
    ],
    [
        41990,
        "SceneCaptureType"
    ],
    [
        41991,
        "GainControl"
    ],
    [
        41992,
        "Contrast"
    ],
    [
        41993,
        "Saturation"
    ],
    [
        41994,
        "Sharpness"
    ],
    [
        41996,
        "SubjectDistanceRange"
    ],
    [
        42016,
        "ImageUniqueID"
    ],
    [
        42032,
        "OwnerName"
    ],
    [
        42033,
        "SerialNumber"
    ],
    [
        42034,
        "LensInfo"
    ],
    [
        42035,
        "LensMake"
    ],
    [
        42036,
        "LensModel"
    ],
    [
        42037,
        "LensSerialNumber"
    ],
    [
        42080,
        "CompositeImage"
    ],
    [
        42081,
        "CompositeImageCount"
    ],
    [
        42082,
        "CompositeImageExposureTimes"
    ],
    [
        42240,
        "Gamma"
    ],
    [
        59932,
        "Padding"
    ],
    [
        59933,
        "OffsetSchema"
    ],
    [
        65e3,
        "OwnerName"
    ],
    [
        65001,
        "SerialNumber"
    ],
    [
        65002,
        "Lens"
    ],
    [
        65100,
        "RawFile"
    ],
    [
        65101,
        "Converter"
    ],
    [
        65102,
        "WhiteBalance"
    ],
    [
        65105,
        "Exposure"
    ],
    [
        65106,
        "Shadows"
    ],
    [
        65107,
        "Brightness"
    ],
    [
        65108,
        "Contrast"
    ],
    [
        65109,
        "Saturation"
    ],
    [
        65110,
        "Sharpness"
    ],
    [
        65111,
        "Smoothness"
    ],
    [
        65112,
        "MoireFilter"
    ],
    [
        40965,
        "InteropIFD"
    ]
]), U(E, "gps", [
    [
        0,
        "GPSVersionID"
    ],
    [
        1,
        "GPSLatitudeRef"
    ],
    [
        2,
        "GPSLatitude"
    ],
    [
        3,
        "GPSLongitudeRef"
    ],
    [
        4,
        "GPSLongitude"
    ],
    [
        5,
        "GPSAltitudeRef"
    ],
    [
        6,
        "GPSAltitude"
    ],
    [
        7,
        "GPSTimeStamp"
    ],
    [
        8,
        "GPSSatellites"
    ],
    [
        9,
        "GPSStatus"
    ],
    [
        10,
        "GPSMeasureMode"
    ],
    [
        11,
        "GPSDOP"
    ],
    [
        12,
        "GPSSpeedRef"
    ],
    [
        13,
        "GPSSpeed"
    ],
    [
        14,
        "GPSTrackRef"
    ],
    [
        15,
        "GPSTrack"
    ],
    [
        16,
        "GPSImgDirectionRef"
    ],
    [
        17,
        "GPSImgDirection"
    ],
    [
        18,
        "GPSMapDatum"
    ],
    [
        19,
        "GPSDestLatitudeRef"
    ],
    [
        20,
        "GPSDestLatitude"
    ],
    [
        21,
        "GPSDestLongitudeRef"
    ],
    [
        22,
        "GPSDestLongitude"
    ],
    [
        23,
        "GPSDestBearingRef"
    ],
    [
        24,
        "GPSDestBearing"
    ],
    [
        25,
        "GPSDestDistanceRef"
    ],
    [
        26,
        "GPSDestDistance"
    ],
    [
        27,
        "GPSProcessingMethod"
    ],
    [
        28,
        "GPSAreaInformation"
    ],
    [
        29,
        "GPSDateStamp"
    ],
    [
        30,
        "GPSDifferential"
    ],
    [
        31,
        "GPSHPositioningError"
    ]
]), U(B, [
    "ifd0",
    "ifd1"
], [
    [
        274,
        {
            1: "Horizontal (normal)",
            2: "Mirror horizontal",
            3: "Rotate 180",
            4: "Mirror vertical",
            5: "Mirror horizontal and rotate 270 CW",
            6: "Rotate 90 CW",
            7: "Mirror horizontal and rotate 90 CW",
            8: "Rotate 270 CW"
        }
    ],
    [
        296,
        {
            1: "None",
            2: "inches",
            3: "cm"
        }
    ]
]);
let Ee = U(B, "exif", [
    [
        34850,
        {
            0: "Not defined",
            1: "Manual",
            2: "Normal program",
            3: "Aperture priority",
            4: "Shutter priority",
            5: "Creative program",
            6: "Action program",
            7: "Portrait mode",
            8: "Landscape mode"
        }
    ],
    [
        37121,
        {
            0: "-",
            1: "Y",
            2: "Cb",
            3: "Cr",
            4: "R",
            5: "G",
            6: "B"
        }
    ],
    [
        37383,
        {
            0: "Unknown",
            1: "Average",
            2: "CenterWeightedAverage",
            3: "Spot",
            4: "MultiSpot",
            5: "Pattern",
            6: "Partial",
            255: "Other"
        }
    ],
    [
        37384,
        {
            0: "Unknown",
            1: "Daylight",
            2: "Fluorescent",
            3: "Tungsten (incandescent light)",
            4: "Flash",
            9: "Fine weather",
            10: "Cloudy weather",
            11: "Shade",
            12: "Daylight fluorescent (D 5700 - 7100K)",
            13: "Day white fluorescent (N 4600 - 5400K)",
            14: "Cool white fluorescent (W 3900 - 4500K)",
            15: "White fluorescent (WW 3200 - 3700K)",
            17: "Standard light A",
            18: "Standard light B",
            19: "Standard light C",
            20: "D55",
            21: "D65",
            22: "D75",
            23: "D50",
            24: "ISO studio tungsten",
            255: "Other"
        }
    ],
    [
        37385,
        {
            0: "Flash did not fire",
            1: "Flash fired",
            5: "Strobe return light not detected",
            7: "Strobe return light detected",
            9: "Flash fired, compulsory flash mode",
            13: "Flash fired, compulsory flash mode, return light not detected",
            15: "Flash fired, compulsory flash mode, return light detected",
            16: "Flash did not fire, compulsory flash mode",
            24: "Flash did not fire, auto mode",
            25: "Flash fired, auto mode",
            29: "Flash fired, auto mode, return light not detected",
            31: "Flash fired, auto mode, return light detected",
            32: "No flash function",
            65: "Flash fired, red-eye reduction mode",
            69: "Flash fired, red-eye reduction mode, return light not detected",
            71: "Flash fired, red-eye reduction mode, return light detected",
            73: "Flash fired, compulsory flash mode, red-eye reduction mode",
            77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
            79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
            89: "Flash fired, auto mode, red-eye reduction mode",
            93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
            95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
        }
    ],
    [
        41495,
        {
            1: "Not defined",
            2: "One-chip color area sensor",
            3: "Two-chip color area sensor",
            4: "Three-chip color area sensor",
            5: "Color sequential area sensor",
            7: "Trilinear sensor",
            8: "Color sequential linear sensor"
        }
    ],
    [
        41728,
        {
            1: "Film Scanner",
            2: "Reflection Print Scanner",
            3: "Digital Camera"
        }
    ],
    [
        41729,
        {
            1: "Directly photographed"
        }
    ],
    [
        41985,
        {
            0: "Normal",
            1: "Custom",
            2: "HDR (no original saved)",
            3: "HDR (original saved)",
            4: "Original (for HDR)",
            6: "Panorama",
            7: "Portrait HDR",
            8: "Portrait"
        }
    ],
    [
        41986,
        {
            0: "Auto",
            1: "Manual",
            2: "Auto bracket"
        }
    ],
    [
        41987,
        {
            0: "Auto",
            1: "Manual"
        }
    ],
    [
        41990,
        {
            0: "Standard",
            1: "Landscape",
            2: "Portrait",
            3: "Night",
            4: "Other"
        }
    ],
    [
        41991,
        {
            0: "None",
            1: "Low gain up",
            2: "High gain up",
            3: "Low gain down",
            4: "High gain down"
        }
    ],
    [
        41996,
        {
            0: "Unknown",
            1: "Macro",
            2: "Close",
            3: "Distant"
        }
    ],
    [
        42080,
        {
            0: "Unknown",
            1: "Not a Composite Image",
            2: "General Composite Image",
            3: "Composite Image Captured While Shooting"
        }
    ]
]);
const Be = {
    1: "No absolute unit of measurement",
    2: "Inch",
    3: "Centimeter"
};
Ee.set(37392, Be), Ee.set(41488, Be);
const Ne = {
    0: "Normal",
    1: "Low",
    2: "High"
};
function Ge(e) {
    return "object" == typeof e && void 0 !== e.length ? e[0] : e;
}
function Ve(e) {
    let t = Array.from(e).slice(1);
    return t[1] > 15 && (t = t.map((e)=>String.fromCharCode(e))), "0" !== t[2] && 0 !== t[2] || t.pop(), t.join(".");
}
function ze(e) {
    if ("string" == typeof e) {
        var [t, i, n, s, r, a] = e.trim().split(/[-: ]/g).map(Number), o = new Date(t, i - 1, n);
        return Number.isNaN(s) || Number.isNaN(r) || Number.isNaN(a) || (o.setHours(s), o.setMinutes(r), o.setSeconds(a)), Number.isNaN(+o) ? e : o;
    }
}
function He(e) {
    if ("string" == typeof e) return e;
    let t = [];
    if (0 === e[1] && 0 === e[e.length - 1]) for(let i = 0; i < e.length; i += 2)t.push(je(e[i + 1], e[i]));
    else for(let i = 0; i < e.length; i += 2)t.push(je(e[i], e[i + 1]));
    return m(String.fromCodePoint(...t));
}
function je(e, t) {
    return e << 8 | t;
}
Ee.set(41992, Ne), Ee.set(41993, Ne), Ee.set(41994, Ne), U(N, [
    "ifd0",
    "ifd1"
], [
    [
        50827,
        function(e) {
            return "string" != typeof e ? b(e) : e;
        }
    ],
    [
        306,
        ze
    ],
    [
        40091,
        He
    ],
    [
        40092,
        He
    ],
    [
        40093,
        He
    ],
    [
        40094,
        He
    ],
    [
        40095,
        He
    ]
]), U(N, "exif", [
    [
        40960,
        Ve
    ],
    [
        36864,
        Ve
    ],
    [
        36867,
        ze
    ],
    [
        36868,
        ze
    ],
    [
        40962,
        Ge
    ],
    [
        40963,
        Ge
    ]
]), U(N, "gps", [
    [
        0,
        (e)=>Array.from(e).join(".")
    ],
    [
        7,
        (e)=>Array.from(e).join(":")
    ]
]);
class We extends re {
    static canHandle(e, t) {
        return 225 === e.getUint8(t + 1) && 1752462448 === e.getUint32(t + 4) && "http://ns.adobe.com/" === e.getString(t + 4, "http://ns.adobe.com/".length);
    }
    static headerLength(e, t) {
        return "http://ns.adobe.com/xmp/extension/" === e.getString(t + 4, "http://ns.adobe.com/xmp/extension/".length) ? 79 : 4 + "http://ns.adobe.com/xap/1.0/".length + 1;
    }
    static findPosition(e, t) {
        let i = super.findPosition(e, t);
        return i.multiSegment = i.extended = 79 === i.headerLength, i.multiSegment ? (i.chunkCount = e.getUint8(t + 72), i.chunkNumber = e.getUint8(t + 76), 0 !== e.getUint8(t + 77) && i.chunkNumber++) : (i.chunkCount = 1 / 0, i.chunkNumber = -1), i;
    }
    static handleMultiSegments(e) {
        return e.map((e)=>e.chunk.getString()).join("");
    }
    normalizeInput(e) {
        return "string" == typeof e ? e : I.from(e).getString();
    }
    parse(e = this.chunk) {
        if (!this.localOptions.parse) return e;
        e = function(e) {
            let t = {}, i = {};
            for (let e of Ze)t[e] = [], i[e] = 0;
            return e.replace(et, (e, n, s)=>{
                if ("<" === n) {
                    let n = ++i[s];
                    return t[s].push(n), `${e}#${n}`;
                }
                return `${e}#${t[s].pop()}`;
            });
        }(e);
        let t = Xe.findAll(e, "rdf", "Description");
        0 === t.length && t.push(new Xe("rdf", "Description", void 0, e));
        let i, n = {};
        for (let e of t)for (let t of e.properties)i = Je(t.ns, n), _e(t, i);
        return function(e) {
            let t;
            for(let i in e)t = e[i] = f(e[i]), void 0 === t && delete e[i];
            return f(e);
        }(n);
    }
    assignToOutput(e, t) {
        if (this.localOptions.parse) for (let [i, n] of Object.entries(t))switch(i){
            case "tiff":
                this.assignObjectToOutput(e, "ifd0", n);
                break;
            case "exif":
                this.assignObjectToOutput(e, "exif", n);
                break;
            case "xmlns":
                break;
            default:
                this.assignObjectToOutput(e, i, n);
        }
        else e.xmp = t;
    }
}
c(We, "type", "xmp"), c(We, "multiSegment", !0), T.set("xmp", We);
class Ke {
    static findAll(e) {
        return qe(e, /([a-zA-Z0-9-]+):([a-zA-Z0-9-]+)=("[^"]*"|'[^']*')/gm).map(Ke.unpackMatch);
    }
    static unpackMatch(e) {
        let t = e[1], i = e[2], n = e[3].slice(1, -1);
        return n = Qe(n), new Ke(t, i, n);
    }
    constructor(e, t, i){
        this.ns = e, this.name = t, this.value = i;
    }
    serialize() {
        return this.value;
    }
}
class Xe {
    static findAll(e, t, i) {
        if (void 0 !== t || void 0 !== i) {
            t = t || "[\\w\\d-]+", i = i || "[\\w\\d-]+";
            var n = new RegExp(`<(${t}):(${i})(#\\d+)?((\\s+?[\\w\\d-:]+=("[^"]*"|'[^']*'))*\\s*)(\\/>|>([\\s\\S]*?)<\\/\\1:\\2\\3>)`, "gm");
        } else n = /<([\w\d-]+):([\w\d-]+)(#\d+)?((\s+?[\w\d-:]+=("[^"]*"|'[^']*'))*\s*)(\/>|>([\s\S]*?)<\/\1:\2\3>)/gm;
        return qe(e, n).map(Xe.unpackMatch);
    }
    static unpackMatch(e) {
        let t = e[1], i = e[2], n = e[4], s = e[8];
        return new Xe(t, i, n, s);
    }
    constructor(e, t, i, n){
        this.ns = e, this.name = t, this.attrString = i, this.innerXml = n, this.attrs = Ke.findAll(i), this.children = Xe.findAll(n), this.value = 0 === this.children.length ? Qe(n) : void 0, this.properties = [
            ...this.attrs,
            ...this.children
        ];
    }
    get isPrimitive() {
        return void 0 !== this.value && 0 === this.attrs.length && 0 === this.children.length;
    }
    get isListContainer() {
        return 1 === this.children.length && this.children[0].isList;
    }
    get isList() {
        let { ns: e, name: t } = this;
        return "rdf" === e && ("Seq" === t || "Bag" === t || "Alt" === t);
    }
    get isListItem() {
        return "rdf" === this.ns && "li" === this.name;
    }
    serialize() {
        if (0 === this.properties.length && void 0 === this.value) return;
        if (this.isPrimitive) return this.value;
        if (this.isListContainer) return this.children[0].serialize();
        if (this.isList) return $e(this.children.map(Ye));
        if (this.isListItem && 1 === this.children.length && 0 === this.attrs.length) return this.children[0].serialize();
        let e = {};
        for (let t of this.properties)_e(t, e);
        return void 0 !== this.value && (e.value = this.value), f(e);
    }
}
function _e(e, t) {
    let i = e.serialize();
    void 0 !== i && (t[e.name] = i);
}
var Ye = (e)=>e.serialize(), $e = (e)=>1 === e.length ? e[0] : e, Je = (e, t)=>t[e] ? t[e] : t[e] = {};
function qe(e, t) {
    let i, n = [];
    if (!e) return n;
    for(; null !== (i = t.exec(e));)n.push(i);
    return n;
}
function Qe(e) {
    if (function(e) {
        return null == e || "null" === e || "undefined" === e || "" === e || "" === e.trim();
    }(e)) return;
    let t = Number(e);
    if (!Number.isNaN(t)) return t;
    let i = e.toLowerCase();
    return "true" === i || "false" !== i && e.trim();
}
const Ze = [
    "rdf:li",
    "rdf:Seq",
    "rdf:Bag",
    "rdf:Alt",
    "rdf:Description"
], et = new RegExp(`(<|\\/)(${Ze.join("|")})`, "g");
var tt = Object.freeze({
    __proto__: null,
    default: Me,
    Exifr: te,
    fileParsers: w,
    segmentParsers: T,
    fileReaders: A,
    tagKeys: E,
    tagValues: B,
    tagRevivers: N,
    createDictionary: U,
    extendDictionary: F,
    fetchUrlAsArrayBuffer: M,
    readBlobAsArrayBuffer: R,
    chunkedProps: G,
    otherSegments: V,
    segments: z,
    tiffBlocks: H,
    segmentsAndBlocks: j,
    tiffExtractables: W,
    inheritables: K,
    allFormatters: X,
    Options: q,
    parse: ie,
    gpsOnlyOptions: me,
    gps: Se,
    thumbnailOnlyOptions: Ce,
    thumbnail: ye,
    thumbnailUrl: be,
    orientationOnlyOptions: Ie,
    orientation: Pe,
    rotations: ke,
    get rotateCanvas () {
        return we;
    },
    get rotateCss () {
        return Te;
    },
    rotation: Ae
});
const it = [
    "xmp",
    "icc",
    "iptc",
    "tiff"
], nt = ()=>{};
async function st(e, t, i) {
    let n = new q(t);
    n.chunked = !1, void 0 === i && "string" == typeof e && (i = function(e) {
        let t = e.toLowerCase().split(".").pop();
        if (function(e) {
            return "exif" === e || "tiff" === e || "tif" === e;
        }(t)) return "tiff";
        if (it.includes(t)) return t;
    }(e));
    let s = await D(e, n);
    if (i) {
        if (it.includes(i)) return rt(i, s, n);
        g("Invalid segment type");
    } else {
        if (function(e) {
            let t = e.getString(0, 50).trim();
            return t.includes("<?xpacket") || t.includes("<x:");
        }(s)) return rt("xmp", s, n);
        for (let [e] of T){
            if (!it.includes(e)) continue;
            let t = await rt(e, s, n).catch(nt);
            if (t) return t;
        }
        g("Unknown file format");
    }
}
async function rt(e, t, i) {
    let n = i[e];
    return n.enabled = !0, n.parse = !0, T.get(e).parse(t, n);
}
let at = l("fs", (e)=>e.promises);
A.set("fs", class extends ve {
    async readWhole() {
        this.chunked = !1, this.fs = await at;
        let e = await this.fs.readFile(this.input);
        this._swapBuffer(e);
    }
    async readChunked() {
        this.chunked = !0, this.fs = await at, await this.open(), await this.readChunk(0, this.options.firstChunkSize);
    }
    async open() {
        void 0 === this.fh && (this.fh = await this.fs.open(this.input, "r"), this.size = (await this.fh.stat(this.input)).size);
    }
    async _readChunk(e, t) {
        void 0 === this.fh && await this.open(), e + t > this.size && (t = this.size - e);
        var i = this.subarray(e, t, !0);
        return await this.fh.read(i.dataView, 0, t, e), i;
    }
    async close() {
        if (this.fh) {
            let e = this.fh;
            this.fh = void 0, await e.close();
        }
    }
});
A.set("base64", class extends ve {
    constructor(...e){
        super(...e), this.input = this.input.replace(/^data:([^;]+);base64,/gim, ""), this.size = this.input.length / 4 * 3, this.input.endsWith("==") ? this.size -= 2 : this.input.endsWith("=") && (this.size -= 1);
    }
    async _readChunk(e, t) {
        let i, n, r = this.input;
        void 0 === e ? (e = 0, i = 0, n = 0) : (i = 4 * Math.floor(e / 3), n = e - i / 4 * 3), void 0 === t && (t = this.size);
        let o = e + t, l = i + 4 * Math.ceil(o / 3);
        r = r.slice(i, l);
        let h = Math.min(t, this.size - e);
        if (a) {
            let t = s.from(r, "base64").slice(n, n + h);
            return this.set(t, e, !0);
        }
        {
            let t = this.subarray(e, h, !0), i = atob(r), s = t.toUint8();
            for(let e = 0; e < h; e++)s[e] = i.charCodeAt(n + e);
            return t;
        }
    }
});
class ot extends se {
    static canHandle(e, t) {
        return 18761 === t || 19789 === t;
    }
    extendOptions(e) {
        let { ifd0: t, xmp: i, iptc: n, icc: s } = e;
        i.enabled && t.deps.add(700), n.enabled && t.deps.add(33723), s.enabled && t.deps.add(34675), t.finalizeFilters();
    }
    async parse() {
        let { tiff: e, xmp: t, iptc: i, icc: n } = this.options;
        if (e.enabled || t.enabled || i.enabled || n.enabled) {
            let e = Math.max(S(this.options), this.options.chunkSize);
            await this.file.ensureChunk(0, e), this.createParser("tiff", this.file), this.parsers.tiff.parseHeader(), await this.parsers.tiff.parseIfd0Block(), this.adaptTiffPropAsSegment("xmp"), this.adaptTiffPropAsSegment("iptc"), this.adaptTiffPropAsSegment("icc");
        }
    }
    adaptTiffPropAsSegment(e) {
        if (this.parsers.tiff[e]) {
            let t = this.parsers.tiff[e];
            this.injectSegment(e, t);
        }
    }
}
c(ot, "type", "tiff"), w.set("tiff", ot);
let lt = l("zlib");
const ht = [
    "ihdr",
    "iccp",
    "text",
    "itxt",
    "exif"
];
class ut extends se {
    constructor(...e){
        super(...e), c(this, "catchError", (e)=>this.errors.push(e)), c(this, "metaChunks", []), c(this, "unknownChunks", []);
    }
    static canHandle(e, t) {
        return 35152 === t && 2303741511 === e.getUint32(0) && 218765834 === e.getUint32(4);
    }
    async parse() {
        let { file: e } = this;
        await this.findPngChunksInRange("PNG\r\n\n".length, e.byteLength), await this.readSegments(this.metaChunks), this.findIhdr(), this.parseTextChunks(), await this.findExif().catch(this.catchError), await this.findXmp().catch(this.catchError), await this.findIcc().catch(this.catchError);
    }
    async findPngChunksInRange(e, t) {
        let { file: i } = this;
        for(; e < t;){
            let t = i.getUint32(e), n = i.getUint32(e + 4), s = i.getString(e + 4, 4).toLowerCase(), r = t + 4 + 4 + 4, a = {
                type: s,
                offset: e,
                length: r,
                start: e + 4 + 4,
                size: t,
                marker: n
            };
            ht.includes(s) ? this.metaChunks.push(a) : this.unknownChunks.push(a), e += r;
        }
    }
    parseTextChunks() {
        let e = this.metaChunks.filter((e)=>"text" === e.type);
        for (let t of e){
            let [e, i] = this.file.getString(t.start, t.size).split("\0");
            this.injectKeyValToIhdr(e, i);
        }
    }
    injectKeyValToIhdr(e, t) {
        let i = this.parsers.ihdr;
        i && i.raw.set(e, t);
    }
    findIhdr() {
        let e = this.metaChunks.find((e)=>"ihdr" === e.type);
        e && !1 !== this.options.ihdr.enabled && this.createParser("ihdr", e.chunk);
    }
    async findExif() {
        let e = this.metaChunks.find((e)=>"exif" === e.type);
        e && this.injectSegment("tiff", e.chunk);
    }
    async findXmp() {
        let e = this.metaChunks.filter((e)=>"itxt" === e.type);
        for (let t of e){
            "XML:com.adobe.xmp" === t.chunk.getString(0, "XML:com.adobe.xmp".length) && this.injectSegment("xmp", t.chunk);
        }
    }
    async findIcc() {
        let e = this.metaChunks.find((e)=>"iccp" === e.type);
        if (!e) return;
        let { chunk: t } = e, i = t.getUint8Array(0, 81), s = 0;
        for(; s < 80 && 0 !== i[s];)s++;
        let r = s + 2, a = t.getString(0, s);
        if (this.injectKeyValToIhdr("ProfileName", a), n) {
            let e = await lt, i = t.getUint8Array(r);
            i = e.inflateSync(i), this.injectSegment("icc", i);
        }
    }
}
c(ut, "type", "png"), w.set("png", ut), U(E, "interop", [
    [
        1,
        "InteropIndex"
    ],
    [
        2,
        "InteropVersion"
    ],
    [
        4096,
        "RelatedImageFileFormat"
    ],
    [
        4097,
        "RelatedImageWidth"
    ],
    [
        4098,
        "RelatedImageHeight"
    ]
]), F(E, "ifd0", [
    [
        11,
        "ProcessingSoftware"
    ],
    [
        254,
        "SubfileType"
    ],
    [
        255,
        "OldSubfileType"
    ],
    [
        263,
        "Thresholding"
    ],
    [
        264,
        "CellWidth"
    ],
    [
        265,
        "CellLength"
    ],
    [
        266,
        "FillOrder"
    ],
    [
        269,
        "DocumentName"
    ],
    [
        280,
        "MinSampleValue"
    ],
    [
        281,
        "MaxSampleValue"
    ],
    [
        285,
        "PageName"
    ],
    [
        286,
        "XPosition"
    ],
    [
        287,
        "YPosition"
    ],
    [
        290,
        "GrayResponseUnit"
    ],
    [
        297,
        "PageNumber"
    ],
    [
        321,
        "HalftoneHints"
    ],
    [
        322,
        "TileWidth"
    ],
    [
        323,
        "TileLength"
    ],
    [
        332,
        "InkSet"
    ],
    [
        337,
        "TargetPrinter"
    ],
    [
        18246,
        "Rating"
    ],
    [
        18249,
        "RatingPercent"
    ],
    [
        33550,
        "PixelScale"
    ],
    [
        34264,
        "ModelTransform"
    ],
    [
        34377,
        "PhotoshopSettings"
    ],
    [
        50706,
        "DNGVersion"
    ],
    [
        50707,
        "DNGBackwardVersion"
    ],
    [
        50708,
        "UniqueCameraModel"
    ],
    [
        50709,
        "LocalizedCameraModel"
    ],
    [
        50736,
        "DNGLensInfo"
    ],
    [
        50739,
        "ShadowScale"
    ],
    [
        50740,
        "DNGPrivateData"
    ],
    [
        33920,
        "IntergraphMatrix"
    ],
    [
        33922,
        "ModelTiePoint"
    ],
    [
        34118,
        "SEMInfo"
    ],
    [
        34735,
        "GeoTiffDirectory"
    ],
    [
        34736,
        "GeoTiffDoubleParams"
    ],
    [
        34737,
        "GeoTiffAsciiParams"
    ],
    [
        50341,
        "PrintIM"
    ],
    [
        50721,
        "ColorMatrix1"
    ],
    [
        50722,
        "ColorMatrix2"
    ],
    [
        50723,
        "CameraCalibration1"
    ],
    [
        50724,
        "CameraCalibration2"
    ],
    [
        50725,
        "ReductionMatrix1"
    ],
    [
        50726,
        "ReductionMatrix2"
    ],
    [
        50727,
        "AnalogBalance"
    ],
    [
        50728,
        "AsShotNeutral"
    ],
    [
        50729,
        "AsShotWhiteXY"
    ],
    [
        50730,
        "BaselineExposure"
    ],
    [
        50731,
        "BaselineNoise"
    ],
    [
        50732,
        "BaselineSharpness"
    ],
    [
        50734,
        "LinearResponseLimit"
    ],
    [
        50735,
        "CameraSerialNumber"
    ],
    [
        50741,
        "MakerNoteSafety"
    ],
    [
        50778,
        "CalibrationIlluminant1"
    ],
    [
        50779,
        "CalibrationIlluminant2"
    ],
    [
        50781,
        "RawDataUniqueID"
    ],
    [
        50827,
        "OriginalRawFileName"
    ],
    [
        50828,
        "OriginalRawFileData"
    ],
    [
        50831,
        "AsShotICCProfile"
    ],
    [
        50832,
        "AsShotPreProfileMatrix"
    ],
    [
        50833,
        "CurrentICCProfile"
    ],
    [
        50834,
        "CurrentPreProfileMatrix"
    ],
    [
        50879,
        "ColorimetricReference"
    ],
    [
        50885,
        "SRawType"
    ],
    [
        50898,
        "PanasonicTitle"
    ],
    [
        50899,
        "PanasonicTitle2"
    ],
    [
        50931,
        "CameraCalibrationSig"
    ],
    [
        50932,
        "ProfileCalibrationSig"
    ],
    [
        50933,
        "ProfileIFD"
    ],
    [
        50934,
        "AsShotProfileName"
    ],
    [
        50936,
        "ProfileName"
    ],
    [
        50937,
        "ProfileHueSatMapDims"
    ],
    [
        50938,
        "ProfileHueSatMapData1"
    ],
    [
        50939,
        "ProfileHueSatMapData2"
    ],
    [
        50940,
        "ProfileToneCurve"
    ],
    [
        50941,
        "ProfileEmbedPolicy"
    ],
    [
        50942,
        "ProfileCopyright"
    ],
    [
        50964,
        "ForwardMatrix1"
    ],
    [
        50965,
        "ForwardMatrix2"
    ],
    [
        50966,
        "PreviewApplicationName"
    ],
    [
        50967,
        "PreviewApplicationVersion"
    ],
    [
        50968,
        "PreviewSettingsName"
    ],
    [
        50969,
        "PreviewSettingsDigest"
    ],
    [
        50970,
        "PreviewColorSpace"
    ],
    [
        50971,
        "PreviewDateTime"
    ],
    [
        50972,
        "RawImageDigest"
    ],
    [
        50973,
        "OriginalRawFileDigest"
    ],
    [
        50981,
        "ProfileLookTableDims"
    ],
    [
        50982,
        "ProfileLookTableData"
    ],
    [
        51043,
        "TimeCodes"
    ],
    [
        51044,
        "FrameRate"
    ],
    [
        51058,
        "TStop"
    ],
    [
        51081,
        "ReelName"
    ],
    [
        51089,
        "OriginalDefaultFinalSize"
    ],
    [
        51090,
        "OriginalBestQualitySize"
    ],
    [
        51091,
        "OriginalDefaultCropSize"
    ],
    [
        51105,
        "CameraLabel"
    ],
    [
        51107,
        "ProfileHueSatMapEncoding"
    ],
    [
        51108,
        "ProfileLookTableEncoding"
    ],
    [
        51109,
        "BaselineExposureOffset"
    ],
    [
        51110,
        "DefaultBlackRender"
    ],
    [
        51111,
        "NewRawImageDigest"
    ],
    [
        51112,
        "RawToPreviewGain"
    ]
]);
let ct = [
    [
        273,
        "StripOffsets"
    ],
    [
        279,
        "StripByteCounts"
    ],
    [
        288,
        "FreeOffsets"
    ],
    [
        289,
        "FreeByteCounts"
    ],
    [
        291,
        "GrayResponseCurve"
    ],
    [
        292,
        "T4Options"
    ],
    [
        293,
        "T6Options"
    ],
    [
        300,
        "ColorResponseUnit"
    ],
    [
        320,
        "ColorMap"
    ],
    [
        324,
        "TileOffsets"
    ],
    [
        325,
        "TileByteCounts"
    ],
    [
        326,
        "BadFaxLines"
    ],
    [
        327,
        "CleanFaxData"
    ],
    [
        328,
        "ConsecutiveBadFaxLines"
    ],
    [
        330,
        "SubIFD"
    ],
    [
        333,
        "InkNames"
    ],
    [
        334,
        "NumberofInks"
    ],
    [
        336,
        "DotRange"
    ],
    [
        338,
        "ExtraSamples"
    ],
    [
        339,
        "SampleFormat"
    ],
    [
        340,
        "SMinSampleValue"
    ],
    [
        341,
        "SMaxSampleValue"
    ],
    [
        342,
        "TransferRange"
    ],
    [
        343,
        "ClipPath"
    ],
    [
        344,
        "XClipPathUnits"
    ],
    [
        345,
        "YClipPathUnits"
    ],
    [
        346,
        "Indexed"
    ],
    [
        347,
        "JPEGTables"
    ],
    [
        351,
        "OPIProxy"
    ],
    [
        400,
        "GlobalParametersIFD"
    ],
    [
        401,
        "ProfileType"
    ],
    [
        402,
        "FaxProfile"
    ],
    [
        403,
        "CodingMethods"
    ],
    [
        404,
        "VersionYear"
    ],
    [
        405,
        "ModeNumber"
    ],
    [
        433,
        "Decode"
    ],
    [
        434,
        "DefaultImageColor"
    ],
    [
        435,
        "T82Options"
    ],
    [
        437,
        "JPEGTables"
    ],
    [
        512,
        "JPEGProc"
    ],
    [
        515,
        "JPEGRestartInterval"
    ],
    [
        517,
        "JPEGLosslessPredictors"
    ],
    [
        518,
        "JPEGPointTransforms"
    ],
    [
        519,
        "JPEGQTables"
    ],
    [
        520,
        "JPEGDCTables"
    ],
    [
        521,
        "JPEGACTables"
    ],
    [
        559,
        "StripRowCounts"
    ],
    [
        999,
        "USPTOMiscellaneous"
    ],
    [
        18247,
        "XP_DIP_XML"
    ],
    [
        18248,
        "StitchInfo"
    ],
    [
        28672,
        "SonyRawFileType"
    ],
    [
        28688,
        "SonyToneCurve"
    ],
    [
        28721,
        "VignettingCorrection"
    ],
    [
        28722,
        "VignettingCorrParams"
    ],
    [
        28724,
        "ChromaticAberrationCorrection"
    ],
    [
        28725,
        "ChromaticAberrationCorrParams"
    ],
    [
        28726,
        "DistortionCorrection"
    ],
    [
        28727,
        "DistortionCorrParams"
    ],
    [
        29895,
        "SonyCropTopLeft"
    ],
    [
        29896,
        "SonyCropSize"
    ],
    [
        32781,
        "ImageID"
    ],
    [
        32931,
        "WangTag1"
    ],
    [
        32932,
        "WangAnnotation"
    ],
    [
        32933,
        "WangTag3"
    ],
    [
        32934,
        "WangTag4"
    ],
    [
        32953,
        "ImageReferencePoints"
    ],
    [
        32954,
        "RegionXformTackPoint"
    ],
    [
        32955,
        "WarpQuadrilateral"
    ],
    [
        32956,
        "AffineTransformMat"
    ],
    [
        32995,
        "Matteing"
    ],
    [
        32996,
        "DataType"
    ],
    [
        32997,
        "ImageDepth"
    ],
    [
        32998,
        "TileDepth"
    ],
    [
        33300,
        "ImageFullWidth"
    ],
    [
        33301,
        "ImageFullHeight"
    ],
    [
        33302,
        "TextureFormat"
    ],
    [
        33303,
        "WrapModes"
    ],
    [
        33304,
        "FovCot"
    ],
    [
        33305,
        "MatrixWorldToScreen"
    ],
    [
        33306,
        "MatrixWorldToCamera"
    ],
    [
        33405,
        "Model2"
    ],
    [
        33421,
        "CFARepeatPatternDim"
    ],
    [
        33422,
        "CFAPattern2"
    ],
    [
        33423,
        "BatteryLevel"
    ],
    [
        33424,
        "KodakIFD"
    ],
    [
        33445,
        "MDFileTag"
    ],
    [
        33446,
        "MDScalePixel"
    ],
    [
        33447,
        "MDColorTable"
    ],
    [
        33448,
        "MDLabName"
    ],
    [
        33449,
        "MDSampleInfo"
    ],
    [
        33450,
        "MDPrepDate"
    ],
    [
        33451,
        "MDPrepTime"
    ],
    [
        33452,
        "MDFileUnits"
    ],
    [
        33589,
        "AdventScale"
    ],
    [
        33590,
        "AdventRevision"
    ],
    [
        33628,
        "UIC1Tag"
    ],
    [
        33629,
        "UIC2Tag"
    ],
    [
        33630,
        "UIC3Tag"
    ],
    [
        33631,
        "UIC4Tag"
    ],
    [
        33918,
        "IntergraphPacketData"
    ],
    [
        33919,
        "IntergraphFlagRegisters"
    ],
    [
        33921,
        "INGRReserved"
    ],
    [
        34016,
        "Site"
    ],
    [
        34017,
        "ColorSequence"
    ],
    [
        34018,
        "IT8Header"
    ],
    [
        34019,
        "RasterPadding"
    ],
    [
        34020,
        "BitsPerRunLength"
    ],
    [
        34021,
        "BitsPerExtendedRunLength"
    ],
    [
        34022,
        "ColorTable"
    ],
    [
        34023,
        "ImageColorIndicator"
    ],
    [
        34024,
        "BackgroundColorIndicator"
    ],
    [
        34025,
        "ImageColorValue"
    ],
    [
        34026,
        "BackgroundColorValue"
    ],
    [
        34027,
        "PixelIntensityRange"
    ],
    [
        34028,
        "TransparencyIndicator"
    ],
    [
        34029,
        "ColorCharacterization"
    ],
    [
        34030,
        "HCUsage"
    ],
    [
        34031,
        "TrapIndicator"
    ],
    [
        34032,
        "CMYKEquivalent"
    ],
    [
        34152,
        "AFCP_IPTC"
    ],
    [
        34232,
        "PixelMagicJBIGOptions"
    ],
    [
        34263,
        "JPLCartoIFD"
    ],
    [
        34306,
        "WB_GRGBLevels"
    ],
    [
        34310,
        "LeafData"
    ],
    [
        34687,
        "TIFF_FXExtensions"
    ],
    [
        34688,
        "MultiProfiles"
    ],
    [
        34689,
        "SharedData"
    ],
    [
        34690,
        "T88Options"
    ],
    [
        34732,
        "ImageLayer"
    ],
    [
        34750,
        "JBIGOptions"
    ],
    [
        34856,
        "Opto-ElectricConvFactor"
    ],
    [
        34857,
        "Interlace"
    ],
    [
        34908,
        "FaxRecvParams"
    ],
    [
        34909,
        "FaxSubAddress"
    ],
    [
        34910,
        "FaxRecvTime"
    ],
    [
        34929,
        "FedexEDR"
    ],
    [
        34954,
        "LeafSubIFD"
    ],
    [
        37387,
        "FlashEnergy"
    ],
    [
        37388,
        "SpatialFrequencyResponse"
    ],
    [
        37389,
        "Noise"
    ],
    [
        37390,
        "FocalPlaneXResolution"
    ],
    [
        37391,
        "FocalPlaneYResolution"
    ],
    [
        37392,
        "FocalPlaneResolutionUnit"
    ],
    [
        37397,
        "ExposureIndex"
    ],
    [
        37398,
        "TIFF-EPStandardID"
    ],
    [
        37399,
        "SensingMethod"
    ],
    [
        37434,
        "CIP3DataFile"
    ],
    [
        37435,
        "CIP3Sheet"
    ],
    [
        37436,
        "CIP3Side"
    ],
    [
        37439,
        "StoNits"
    ],
    [
        37679,
        "MSDocumentText"
    ],
    [
        37680,
        "MSPropertySetStorage"
    ],
    [
        37681,
        "MSDocumentTextPosition"
    ],
    [
        37724,
        "ImageSourceData"
    ],
    [
        40965,
        "InteropIFD"
    ],
    [
        40976,
        "SamsungRawPointersOffset"
    ],
    [
        40977,
        "SamsungRawPointersLength"
    ],
    [
        41217,
        "SamsungRawByteOrder"
    ],
    [
        41218,
        "SamsungRawUnknown"
    ],
    [
        41484,
        "SpatialFrequencyResponse"
    ],
    [
        41485,
        "Noise"
    ],
    [
        41489,
        "ImageNumber"
    ],
    [
        41490,
        "SecurityClassification"
    ],
    [
        41491,
        "ImageHistory"
    ],
    [
        41494,
        "TIFF-EPStandardID"
    ],
    [
        41995,
        "DeviceSettingDescription"
    ],
    [
        42112,
        "GDALMetadata"
    ],
    [
        42113,
        "GDALNoData"
    ],
    [
        44992,
        "ExpandSoftware"
    ],
    [
        44993,
        "ExpandLens"
    ],
    [
        44994,
        "ExpandFilm"
    ],
    [
        44995,
        "ExpandFilterLens"
    ],
    [
        44996,
        "ExpandScanner"
    ],
    [
        44997,
        "ExpandFlashLamp"
    ],
    [
        46275,
        "HasselbladRawImage"
    ],
    [
        48129,
        "PixelFormat"
    ],
    [
        48130,
        "Transformation"
    ],
    [
        48131,
        "Uncompressed"
    ],
    [
        48132,
        "ImageType"
    ],
    [
        48256,
        "ImageWidth"
    ],
    [
        48257,
        "ImageHeight"
    ],
    [
        48258,
        "WidthResolution"
    ],
    [
        48259,
        "HeightResolution"
    ],
    [
        48320,
        "ImageOffset"
    ],
    [
        48321,
        "ImageByteCount"
    ],
    [
        48322,
        "AlphaOffset"
    ],
    [
        48323,
        "AlphaByteCount"
    ],
    [
        48324,
        "ImageDataDiscard"
    ],
    [
        48325,
        "AlphaDataDiscard"
    ],
    [
        50215,
        "OceScanjobDesc"
    ],
    [
        50216,
        "OceApplicationSelector"
    ],
    [
        50217,
        "OceIDNumber"
    ],
    [
        50218,
        "OceImageLogic"
    ],
    [
        50255,
        "Annotations"
    ],
    [
        50459,
        "HasselbladExif"
    ],
    [
        50547,
        "OriginalFileName"
    ],
    [
        50560,
        "USPTOOriginalContentType"
    ],
    [
        50656,
        "CR2CFAPattern"
    ],
    [
        50710,
        "CFAPlaneColor"
    ],
    [
        50711,
        "CFALayout"
    ],
    [
        50712,
        "LinearizationTable"
    ],
    [
        50713,
        "BlackLevelRepeatDim"
    ],
    [
        50714,
        "BlackLevel"
    ],
    [
        50715,
        "BlackLevelDeltaH"
    ],
    [
        50716,
        "BlackLevelDeltaV"
    ],
    [
        50717,
        "WhiteLevel"
    ],
    [
        50718,
        "DefaultScale"
    ],
    [
        50719,
        "DefaultCropOrigin"
    ],
    [
        50720,
        "DefaultCropSize"
    ],
    [
        50733,
        "BayerGreenSplit"
    ],
    [
        50737,
        "ChromaBlurRadius"
    ],
    [
        50738,
        "AntiAliasStrength"
    ],
    [
        50752,
        "RawImageSegmentation"
    ],
    [
        50780,
        "BestQualityScale"
    ],
    [
        50784,
        "AliasLayerMetadata"
    ],
    [
        50829,
        "ActiveArea"
    ],
    [
        50830,
        "MaskedAreas"
    ],
    [
        50935,
        "NoiseReductionApplied"
    ],
    [
        50974,
        "SubTileBlockSize"
    ],
    [
        50975,
        "RowInterleaveFactor"
    ],
    [
        51008,
        "OpcodeList1"
    ],
    [
        51009,
        "OpcodeList2"
    ],
    [
        51022,
        "OpcodeList3"
    ],
    [
        51041,
        "NoiseProfile"
    ],
    [
        51114,
        "CacheVersion"
    ],
    [
        51125,
        "DefaultUserCrop"
    ],
    [
        51157,
        "NikonNEFInfo"
    ],
    [
        65024,
        "KdcIFD"
    ]
];
F(E, "ifd0", ct), F(E, "exif", ct), U(B, "gps", [
    [
        23,
        {
            M: "Magnetic North",
            T: "True North"
        }
    ],
    [
        25,
        {
            K: "Kilometers",
            M: "Miles",
            N: "Nautical Miles"
        }
    ]
]);
class ft extends re {
    static canHandle(e, t) {
        return 224 === e.getUint8(t + 1) && 1246120262 === e.getUint32(t + 4) && 0 === e.getUint8(t + 8);
    }
    parse() {
        return this.parseTags(), this.translate(), this.output;
    }
    parseTags() {
        this.raw = new Map([
            [
                0,
                this.chunk.getUint16(0)
            ],
            [
                2,
                this.chunk.getUint8(2)
            ],
            [
                3,
                this.chunk.getUint16(3)
            ],
            [
                5,
                this.chunk.getUint16(5)
            ],
            [
                7,
                this.chunk.getUint8(7)
            ],
            [
                8,
                this.chunk.getUint8(8)
            ]
        ]);
    }
}
c(ft, "type", "jfif"), c(ft, "headerLength", 9), T.set("jfif", ft), U(E, "jfif", [
    [
        0,
        "JFIFVersion"
    ],
    [
        2,
        "ResolutionUnit"
    ],
    [
        3,
        "XResolution"
    ],
    [
        5,
        "YResolution"
    ],
    [
        7,
        "ThumbnailWidth"
    ],
    [
        8,
        "ThumbnailHeight"
    ]
]);
class dt extends re {
    parse() {
        return this.parseTags(), this.translate(), this.output;
    }
    parseTags() {
        this.raw = new Map([
            [
                0,
                this.chunk.getUint32(0)
            ],
            [
                4,
                this.chunk.getUint32(4)
            ],
            [
                8,
                this.chunk.getUint8(8)
            ],
            [
                9,
                this.chunk.getUint8(9)
            ],
            [
                10,
                this.chunk.getUint8(10)
            ],
            [
                11,
                this.chunk.getUint8(11)
            ],
            [
                12,
                this.chunk.getUint8(12)
            ],
            ...Array.from(this.raw)
        ]);
    }
}
c(dt, "type", "ihdr"), T.set("ihdr", dt), U(E, "ihdr", [
    [
        0,
        "ImageWidth"
    ],
    [
        4,
        "ImageHeight"
    ],
    [
        8,
        "BitDepth"
    ],
    [
        9,
        "ColorType"
    ],
    [
        10,
        "Compression"
    ],
    [
        11,
        "Filter"
    ],
    [
        12,
        "Interlace"
    ]
]), U(B, "ihdr", [
    [
        9,
        {
            0: "Grayscale",
            2: "RGB",
            3: "Palette",
            4: "Grayscale with Alpha",
            6: "RGB with Alpha",
            DEFAULT: "Unknown"
        }
    ],
    [
        10,
        {
            0: "Deflate/Inflate",
            DEFAULT: "Unknown"
        }
    ],
    [
        11,
        {
            0: "Adaptive",
            DEFAULT: "Unknown"
        }
    ],
    [
        12,
        {
            0: "Noninterlaced",
            1: "Adam7 Interlace",
            DEFAULT: "Unknown"
        }
    ]
]);
class pt extends re {
    static canHandle(e, t) {
        return 226 === e.getUint8(t + 1) && 1229144927 === e.getUint32(t + 4);
    }
    static findPosition(e, t) {
        let i = super.findPosition(e, t);
        return i.chunkNumber = e.getUint8(t + 16), i.chunkCount = e.getUint8(t + 17), i.multiSegment = i.chunkCount > 1, i;
    }
    static handleMultiSegments(e) {
        return function(e) {
            let t = function(e) {
                let t = e[0].constructor, i = 0;
                for (let t of e)i += t.length;
                let n = new t(i), s = 0;
                for (let t of e)n.set(t, s), s += t.length;
                return n;
            }(e.map((e)=>e.chunk.toUint8()));
            return new I(t);
        }(e);
    }
    parse() {
        return this.raw = new Map, this.parseHeader(), this.parseTags(), this.translate(), this.output;
    }
    parseHeader() {
        let { raw: e } = this;
        this.chunk.byteLength < 84 && g("ICC header is too short");
        for (let [t, i] of Object.entries(gt)){
            t = parseInt(t, 10);
            let n = i(this.chunk, t);
            "\0\0\0\0" !== n && e.set(t, n);
        }
    }
    parseTags() {
        let e, t, i, n, s, { raw: r } = this, a = this.chunk.getUint32(128), o = 132, l = this.chunk.byteLength;
        for(; a--;){
            if (e = this.chunk.getString(o, 4), t = this.chunk.getUint32(o + 4), i = this.chunk.getUint32(o + 8), n = this.chunk.getString(t, 4), t + i > l) return void console.warn("reached the end of the first ICC chunk. Enable options.tiff.multiSegment to read all ICC segments.");
            s = this.parseTag(n, t, i), void 0 !== s && "\0\0\0\0" !== s && r.set(e, s), o += 12;
        }
    }
    parseTag(e, t, i) {
        switch(e){
            case "desc":
                return this.parseDesc(t);
            case "mluc":
                return this.parseMluc(t);
            case "text":
                return this.parseText(t, i);
            case "sig ":
                return this.parseSig(t);
        }
        if (!(t + i > this.chunk.byteLength)) return this.chunk.getUint8Array(t, i);
    }
    parseDesc(e) {
        let t = this.chunk.getUint32(e + 8) - 1;
        return m(this.chunk.getString(e + 12, t));
    }
    parseText(e, t) {
        return m(this.chunk.getString(e + 8, t - 8));
    }
    parseSig(e) {
        return m(this.chunk.getString(e + 8, 4));
    }
    parseMluc(e) {
        let { chunk: t } = this, i = t.getUint32(e + 8), n = t.getUint32(e + 12), s = e + 16, r = [];
        for(let a = 0; a < i; a++){
            let i = t.getString(s + 0, 2), a = t.getString(s + 2, 2), o = t.getUint32(s + 4), l = t.getUint32(s + 8) + e, h = m(t.getUnicodeString(l, o));
            r.push({
                lang: i,
                country: a,
                text: h
            }), s += n;
        }
        return 1 === i ? r[0].text : r;
    }
    translateValue(e, t) {
        return "string" == typeof e ? t[e] || t[e.toLowerCase()] || e : t[e] || e;
    }
}
c(pt, "type", "icc"), c(pt, "multiSegment", !0), c(pt, "headerLength", 18);
const gt = {
    4: mt,
    8: function(e, t) {
        return [
            e.getUint8(t),
            e.getUint8(t + 1) >> 4,
            e.getUint8(t + 1) % 16
        ].map((e)=>e.toString(10)).join(".");
    },
    12: mt,
    16: mt,
    20: mt,
    24: function(e, t) {
        const i = e.getUint16(t), n = e.getUint16(t + 2) - 1, s = e.getUint16(t + 4), r = e.getUint16(t + 6), a = e.getUint16(t + 8), o = e.getUint16(t + 10);
        return new Date(Date.UTC(i, n, s, r, a, o));
    },
    36: mt,
    40: mt,
    48: mt,
    52: mt,
    64: (e, t)=>e.getUint32(t),
    80: mt
};
function mt(e, t) {
    return m(e.getString(t, 4));
}
T.set("icc", pt), U(E, "icc", [
    [
        4,
        "ProfileCMMType"
    ],
    [
        8,
        "ProfileVersion"
    ],
    [
        12,
        "ProfileClass"
    ],
    [
        16,
        "ColorSpaceData"
    ],
    [
        20,
        "ProfileConnectionSpace"
    ],
    [
        24,
        "ProfileDateTime"
    ],
    [
        36,
        "ProfileFileSignature"
    ],
    [
        40,
        "PrimaryPlatform"
    ],
    [
        44,
        "CMMFlags"
    ],
    [
        48,
        "DeviceManufacturer"
    ],
    [
        52,
        "DeviceModel"
    ],
    [
        56,
        "DeviceAttributes"
    ],
    [
        64,
        "RenderingIntent"
    ],
    [
        68,
        "ConnectionSpaceIlluminant"
    ],
    [
        80,
        "ProfileCreator"
    ],
    [
        84,
        "ProfileID"
    ],
    [
        "Header",
        "ProfileHeader"
    ],
    [
        "MS00",
        "WCSProfiles"
    ],
    [
        "bTRC",
        "BlueTRC"
    ],
    [
        "bXYZ",
        "BlueMatrixColumn"
    ],
    [
        "bfd",
        "UCRBG"
    ],
    [
        "bkpt",
        "MediaBlackPoint"
    ],
    [
        "calt",
        "CalibrationDateTime"
    ],
    [
        "chad",
        "ChromaticAdaptation"
    ],
    [
        "chrm",
        "Chromaticity"
    ],
    [
        "ciis",
        "ColorimetricIntentImageState"
    ],
    [
        "clot",
        "ColorantTableOut"
    ],
    [
        "clro",
        "ColorantOrder"
    ],
    [
        "clrt",
        "ColorantTable"
    ],
    [
        "cprt",
        "ProfileCopyright"
    ],
    [
        "crdi",
        "CRDInfo"
    ],
    [
        "desc",
        "ProfileDescription"
    ],
    [
        "devs",
        "DeviceSettings"
    ],
    [
        "dmdd",
        "DeviceModelDesc"
    ],
    [
        "dmnd",
        "DeviceMfgDesc"
    ],
    [
        "dscm",
        "ProfileDescriptionML"
    ],
    [
        "fpce",
        "FocalPlaneColorimetryEstimates"
    ],
    [
        "gTRC",
        "GreenTRC"
    ],
    [
        "gXYZ",
        "GreenMatrixColumn"
    ],
    [
        "gamt",
        "Gamut"
    ],
    [
        "kTRC",
        "GrayTRC"
    ],
    [
        "lumi",
        "Luminance"
    ],
    [
        "meas",
        "Measurement"
    ],
    [
        "meta",
        "Metadata"
    ],
    [
        "mmod",
        "MakeAndModel"
    ],
    [
        "ncl2",
        "NamedColor2"
    ],
    [
        "ncol",
        "NamedColor"
    ],
    [
        "ndin",
        "NativeDisplayInfo"
    ],
    [
        "pre0",
        "Preview0"
    ],
    [
        "pre1",
        "Preview1"
    ],
    [
        "pre2",
        "Preview2"
    ],
    [
        "ps2i",
        "PS2RenderingIntent"
    ],
    [
        "ps2s",
        "PostScript2CSA"
    ],
    [
        "psd0",
        "PostScript2CRD0"
    ],
    [
        "psd1",
        "PostScript2CRD1"
    ],
    [
        "psd2",
        "PostScript2CRD2"
    ],
    [
        "psd3",
        "PostScript2CRD3"
    ],
    [
        "pseq",
        "ProfileSequenceDesc"
    ],
    [
        "psid",
        "ProfileSequenceIdentifier"
    ],
    [
        "psvm",
        "PS2CRDVMSize"
    ],
    [
        "rTRC",
        "RedTRC"
    ],
    [
        "rXYZ",
        "RedMatrixColumn"
    ],
    [
        "resp",
        "OutputResponse"
    ],
    [
        "rhoc",
        "ReflectionHardcopyOrigColorimetry"
    ],
    [
        "rig0",
        "PerceptualRenderingIntentGamut"
    ],
    [
        "rig2",
        "SaturationRenderingIntentGamut"
    ],
    [
        "rpoc",
        "ReflectionPrintOutputColorimetry"
    ],
    [
        "sape",
        "SceneAppearanceEstimates"
    ],
    [
        "scoe",
        "SceneColorimetryEstimates"
    ],
    [
        "scrd",
        "ScreeningDesc"
    ],
    [
        "scrn",
        "Screening"
    ],
    [
        "targ",
        "CharTarget"
    ],
    [
        "tech",
        "Technology"
    ],
    [
        "vcgt",
        "VideoCardGamma"
    ],
    [
        "view",
        "ViewingConditions"
    ],
    [
        "vued",
        "ViewingCondDesc"
    ],
    [
        "wtpt",
        "MediaWhitePoint"
    ]
]);
const St = {
    "4d2p": "Erdt Systems",
    AAMA: "Aamazing Technologies",
    ACER: "Acer",
    ACLT: "Acolyte Color Research",
    ACTI: "Actix Sytems",
    ADAR: "Adara Technology",
    ADBE: "Adobe",
    ADI: "ADI Systems",
    AGFA: "Agfa Graphics",
    ALMD: "Alps Electric",
    ALPS: "Alps Electric",
    ALWN: "Alwan Color Expertise",
    AMTI: "Amiable Technologies",
    AOC: "AOC International",
    APAG: "Apago",
    APPL: "Apple Computer",
    AST: "AST",
    "AT&T": "AT&T",
    BAEL: "BARBIERI electronic",
    BRCO: "Barco NV",
    BRKP: "Breakpoint",
    BROT: "Brother",
    BULL: "Bull",
    BUS: "Bus Computer Systems",
    "C-IT": "C-Itoh",
    CAMR: "Intel",
    CANO: "Canon",
    CARR: "Carroll Touch",
    CASI: "Casio",
    CBUS: "Colorbus PL",
    CEL: "Crossfield",
    CELx: "Crossfield",
    CGS: "CGS Publishing Technologies International",
    CHM: "Rochester Robotics",
    CIGL: "Colour Imaging Group, London",
    CITI: "Citizen",
    CL00: "Candela",
    CLIQ: "Color IQ",
    CMCO: "Chromaco",
    CMiX: "CHROMiX",
    COLO: "Colorgraphic Communications",
    COMP: "Compaq",
    COMp: "Compeq/Focus Technology",
    CONR: "Conrac Display Products",
    CORD: "Cordata Technologies",
    CPQ: "Compaq",
    CPRO: "ColorPro",
    CRN: "Cornerstone",
    CTX: "CTX International",
    CVIS: "ColorVision",
    CWC: "Fujitsu Laboratories",
    DARI: "Darius Technology",
    DATA: "Dataproducts",
    DCP: "Dry Creek Photo",
    DCRC: "Digital Contents Resource Center, Chung-Ang University",
    DELL: "Dell Computer",
    DIC: "Dainippon Ink and Chemicals",
    DICO: "Diconix",
    DIGI: "Digital",
    "DL&C": "Digital Light & Color",
    DPLG: "Doppelganger",
    DS: "Dainippon Screen",
    DSOL: "DOOSOL",
    DUPN: "DuPont",
    EPSO: "Epson",
    ESKO: "Esko-Graphics",
    ETRI: "Electronics and Telecommunications Research Institute",
    EVER: "Everex Systems",
    EXAC: "ExactCODE",
    Eizo: "Eizo",
    FALC: "Falco Data Products",
    FF: "Fuji Photo Film",
    FFEI: "FujiFilm Electronic Imaging",
    FNRD: "Fnord Software",
    FORA: "Fora",
    FORE: "Forefront Technology",
    FP: "Fujitsu",
    FPA: "WayTech Development",
    FUJI: "Fujitsu",
    FX: "Fuji Xerox",
    GCC: "GCC Technologies",
    GGSL: "Global Graphics Software",
    GMB: "Gretagmacbeth",
    GMG: "GMG",
    GOLD: "GoldStar Technology",
    GOOG: "Google",
    GPRT: "Giantprint",
    GTMB: "Gretagmacbeth",
    GVC: "WayTech Development",
    GW2K: "Sony",
    HCI: "HCI",
    HDM: "Heidelberger Druckmaschinen",
    HERM: "Hermes",
    HITA: "Hitachi America",
    HP: "Hewlett-Packard",
    HTC: "Hitachi",
    HiTi: "HiTi Digital",
    IBM: "IBM",
    IDNT: "Scitex",
    IEC: "Hewlett-Packard",
    IIYA: "Iiyama North America",
    IKEG: "Ikegami Electronics",
    IMAG: "Image Systems",
    IMI: "Ingram Micro",
    INTC: "Intel",
    INTL: "N/A (INTL)",
    INTR: "Intra Electronics",
    IOCO: "Iocomm International Technology",
    IPS: "InfoPrint Solutions Company",
    IRIS: "Scitex",
    ISL: "Ichikawa Soft Laboratory",
    ITNL: "N/A (ITNL)",
    IVM: "IVM",
    IWAT: "Iwatsu Electric",
    Idnt: "Scitex",
    Inca: "Inca Digital Printers",
    Iris: "Scitex",
    JPEG: "Joint Photographic Experts Group",
    JSFT: "Jetsoft Development",
    JVC: "JVC Information Products",
    KART: "Scitex",
    KFC: "KFC Computek Components",
    KLH: "KLH Computers",
    KMHD: "Konica Minolta",
    KNCA: "Konica",
    KODA: "Kodak",
    KYOC: "Kyocera",
    Kart: "Scitex",
    LCAG: "Leica",
    LCCD: "Leeds Colour",
    LDAK: "Left Dakota",
    LEAD: "Leading Technology",
    LEXM: "Lexmark International",
    LINK: "Link Computer",
    LINO: "Linotronic",
    LITE: "Lite-On",
    Leaf: "Leaf",
    Lino: "Linotronic",
    MAGC: "Mag Computronic",
    MAGI: "MAG Innovision",
    MANN: "Mannesmann",
    MICN: "Micron Technology",
    MICR: "Microtek",
    MICV: "Microvitec",
    MINO: "Minolta",
    MITS: "Mitsubishi Electronics America",
    MITs: "Mitsuba",
    MNLT: "Minolta",
    MODG: "Modgraph",
    MONI: "Monitronix",
    MONS: "Monaco Systems",
    MORS: "Morse Technology",
    MOTI: "Motive Systems",
    MSFT: "Microsoft",
    MUTO: "MUTOH INDUSTRIES",
    Mits: "Mitsubishi Electric",
    NANA: "NANAO",
    NEC: "NEC",
    NEXP: "NexPress Solutions",
    NISS: "Nissei Sangyo America",
    NKON: "Nikon",
    NONE: "none",
    OCE: "Oce Technologies",
    OCEC: "OceColor",
    OKI: "Oki",
    OKID: "Okidata",
    OKIP: "Okidata",
    OLIV: "Olivetti",
    OLYM: "Olympus",
    ONYX: "Onyx Graphics",
    OPTI: "Optiquest",
    PACK: "Packard Bell",
    PANA: "Matsushita Electric Industrial",
    PANT: "Pantone",
    PBN: "Packard Bell",
    PFU: "PFU",
    PHIL: "Philips Consumer Electronics",
    PNTX: "HOYA",
    POne: "Phase One A/S",
    PREM: "Premier Computer Innovations",
    PRIN: "Princeton Graphic Systems",
    PRIP: "Princeton Publishing Labs",
    QLUX: "Hong Kong",
    QMS: "QMS",
    QPCD: "QPcard AB",
    QUAD: "QuadLaser",
    QUME: "Qume",
    RADI: "Radius",
    RDDx: "Integrated Color Solutions",
    RDG: "Roland DG",
    REDM: "REDMS Group",
    RELI: "Relisys",
    RGMS: "Rolf Gierling Multitools",
    RICO: "Ricoh",
    RNLD: "Edmund Ronald",
    ROYA: "Royal",
    RPC: "Ricoh Printing Systems",
    RTL: "Royal Information Electronics",
    SAMP: "Sampo",
    SAMS: "Samsung",
    SANT: "Jaime Santana Pomares",
    SCIT: "Scitex",
    SCRN: "Dainippon Screen",
    SDP: "Scitex",
    SEC: "Samsung",
    SEIK: "Seiko Instruments",
    SEIk: "Seikosha",
    SGUY: "ScanGuy.com",
    SHAR: "Sharp Laboratories",
    SICC: "International Color Consortium",
    SONY: "Sony",
    SPCL: "SpectraCal",
    STAR: "Star",
    STC: "Sampo Technology",
    Scit: "Scitex",
    Sdp: "Scitex",
    Sony: "Sony",
    TALO: "Talon Technology",
    TAND: "Tandy",
    TATU: "Tatung",
    TAXA: "TAXAN America",
    TDS: "Tokyo Denshi Sekei",
    TECO: "TECO Information Systems",
    TEGR: "Tegra",
    TEKT: "Tektronix",
    TI: "Texas Instruments",
    TMKR: "TypeMaker",
    TOSB: "Toshiba",
    TOSH: "Toshiba",
    TOTK: "TOTOKU ELECTRIC",
    TRIU: "Triumph",
    TSBT: "Toshiba",
    TTX: "TTX Computer Products",
    TVM: "TVM Professional Monitor",
    TW: "TW Casper",
    ULSX: "Ulead Systems",
    UNIS: "Unisys",
    UTZF: "Utz Fehlau & Sohn",
    VARI: "Varityper",
    VIEW: "Viewsonic",
    VISL: "Visual communication",
    VIVO: "Vivo Mobile Communication",
    WANG: "Wang",
    WLBR: "Wilbur Imaging",
    WTG2: "Ware To Go",
    WYSE: "WYSE Technology",
    XERX: "Xerox",
    XRIT: "X-Rite",
    ZRAN: "Zoran",
    Zebr: "Zebra Technologies",
    appl: "Apple Computer",
    bICC: "basICColor",
    berg: "bergdesign",
    ceyd: "Integrated Color Solutions",
    clsp: "MacDermid ColorSpan",
    ds: "Dainippon Screen",
    dupn: "DuPont",
    ffei: "FujiFilm Electronic Imaging",
    flux: "FluxData",
    iris: "Scitex",
    kart: "Scitex",
    lcms: "Little CMS",
    lino: "Linotronic",
    none: "none",
    ob4d: "Erdt Systems",
    obic: "Medigraph",
    quby: "Qubyx Sarl",
    scit: "Scitex",
    scrn: "Dainippon Screen",
    sdp: "Scitex",
    siwi: "SIWI GRAFIKA",
    yxym: "YxyMaster"
}, Ct = {
    scnr: "Scanner",
    mntr: "Monitor",
    prtr: "Printer",
    link: "Device Link",
    abst: "Abstract",
    spac: "Color Space Conversion Profile",
    nmcl: "Named Color",
    cenc: "ColorEncodingSpace profile",
    mid: "MultiplexIdentification profile",
    mlnk: "MultiplexLink profile",
    mvis: "MultiplexVisualization profile",
    nkpf: "Nikon Input Device Profile (NON-STANDARD!)"
};
U(B, "icc", [
    [
        4,
        St
    ],
    [
        12,
        Ct
    ],
    [
        40,
        Object.assign({}, St, Ct)
    ],
    [
        48,
        St
    ],
    [
        80,
        St
    ],
    [
        64,
        {
            0: "Perceptual",
            1: "Relative Colorimetric",
            2: "Saturation",
            3: "Absolute Colorimetric"
        }
    ],
    [
        "tech",
        {
            amd: "Active Matrix Display",
            crt: "Cathode Ray Tube Display",
            kpcd: "Photo CD",
            pmd: "Passive Matrix Display",
            dcam: "Digital Camera",
            dcpj: "Digital Cinema Projector",
            dmpc: "Digital Motion Picture Camera",
            dsub: "Dye Sublimation Printer",
            epho: "Electrophotographic Printer",
            esta: "Electrostatic Printer",
            flex: "Flexography",
            fprn: "Film Writer",
            fscn: "Film Scanner",
            grav: "Gravure",
            ijet: "Ink Jet Printer",
            imgs: "Photo Image Setter",
            mpfr: "Motion Picture Film Recorder",
            mpfs: "Motion Picture Film Scanner",
            offs: "Offset Lithography",
            pjtv: "Projection Television",
            rpho: "Photographic Paper Printer",
            rscn: "Reflective Scanner",
            silk: "Silkscreen",
            twax: "Thermal Wax Printer",
            vidc: "Video Camera",
            vidm: "Video Monitor"
        }
    ]
]);
class yt extends re {
    static canHandle(e, t, i) {
        return 237 === e.getUint8(t + 1) && "Photoshop" === e.getString(t + 4, 9) && void 0 !== this.containsIptc8bim(e, t, i);
    }
    static headerLength(e, t, i) {
        let n, s = this.containsIptc8bim(e, t, i);
        if (void 0 !== s) return n = e.getUint8(t + s + 7), n % 2 != 0 && (n += 1), 0 === n && (n = 4), s + 8 + n;
    }
    static containsIptc8bim(e, t, i) {
        for(let n = 0; n < i; n++)if (this.isIptcSegmentHead(e, t + n)) return n;
    }
    static isIptcSegmentHead(e, t) {
        return 56 === e.getUint8(t) && 943868237 === e.getUint32(t) && 1028 === e.getUint16(t + 4);
    }
    parse() {
        let { raw: e } = this, t = this.chunk.byteLength - 1, i = !1;
        for(let n = 0; n < t; n++)if (28 === this.chunk.getUint8(n) && 2 === this.chunk.getUint8(n + 1)) {
            i = !0;
            let t = this.chunk.getUint16(n + 3), s = this.chunk.getUint8(n + 2), r = this.chunk.getLatin1String(n + 5, t);
            e.set(s, this.pluralizeValue(e.get(s), r)), n += 4 + t;
        } else if (i) break;
        return this.translate(), this.output;
    }
    pluralizeValue(e, t) {
        return void 0 !== e ? e instanceof Array ? (e.push(t), e) : [
            e,
            t
        ] : t;
    }
}
c(yt, "type", "iptc"), c(yt, "translateValues", !1), c(yt, "reviveValues", !1), T.set("iptc", yt), U(E, "iptc", [
    [
        0,
        "ApplicationRecordVersion"
    ],
    [
        3,
        "ObjectTypeReference"
    ],
    [
        4,
        "ObjectAttributeReference"
    ],
    [
        5,
        "ObjectName"
    ],
    [
        7,
        "EditStatus"
    ],
    [
        8,
        "EditorialUpdate"
    ],
    [
        10,
        "Urgency"
    ],
    [
        12,
        "SubjectReference"
    ],
    [
        15,
        "Category"
    ],
    [
        20,
        "SupplementalCategories"
    ],
    [
        22,
        "FixtureIdentifier"
    ],
    [
        25,
        "Keywords"
    ],
    [
        26,
        "ContentLocationCode"
    ],
    [
        27,
        "ContentLocationName"
    ],
    [
        30,
        "ReleaseDate"
    ],
    [
        35,
        "ReleaseTime"
    ],
    [
        37,
        "ExpirationDate"
    ],
    [
        38,
        "ExpirationTime"
    ],
    [
        40,
        "SpecialInstructions"
    ],
    [
        42,
        "ActionAdvised"
    ],
    [
        45,
        "ReferenceService"
    ],
    [
        47,
        "ReferenceDate"
    ],
    [
        50,
        "ReferenceNumber"
    ],
    [
        55,
        "DateCreated"
    ],
    [
        60,
        "TimeCreated"
    ],
    [
        62,
        "DigitalCreationDate"
    ],
    [
        63,
        "DigitalCreationTime"
    ],
    [
        65,
        "OriginatingProgram"
    ],
    [
        70,
        "ProgramVersion"
    ],
    [
        75,
        "ObjectCycle"
    ],
    [
        80,
        "Byline"
    ],
    [
        85,
        "BylineTitle"
    ],
    [
        90,
        "City"
    ],
    [
        92,
        "Sublocation"
    ],
    [
        95,
        "State"
    ],
    [
        100,
        "CountryCode"
    ],
    [
        101,
        "Country"
    ],
    [
        103,
        "OriginalTransmissionReference"
    ],
    [
        105,
        "Headline"
    ],
    [
        110,
        "Credit"
    ],
    [
        115,
        "Source"
    ],
    [
        116,
        "CopyrightNotice"
    ],
    [
        118,
        "Contact"
    ],
    [
        120,
        "Caption"
    ],
    [
        121,
        "LocalCaption"
    ],
    [
        122,
        "Writer"
    ],
    [
        125,
        "RasterizedCaption"
    ],
    [
        130,
        "ImageType"
    ],
    [
        131,
        "ImageOrientation"
    ],
    [
        135,
        "LanguageIdentifier"
    ],
    [
        150,
        "AudioType"
    ],
    [
        151,
        "AudioSamplingRate"
    ],
    [
        152,
        "AudioSamplingResolution"
    ],
    [
        153,
        "AudioDuration"
    ],
    [
        154,
        "AudioOutcue"
    ],
    [
        184,
        "JobID"
    ],
    [
        185,
        "MasterDocumentID"
    ],
    [
        186,
        "ShortDocumentID"
    ],
    [
        187,
        "UniqueDocumentID"
    ],
    [
        188,
        "OwnerID"
    ],
    [
        200,
        "ObjectPreviewFileFormat"
    ],
    [
        201,
        "ObjectPreviewFileVersion"
    ],
    [
        202,
        "ObjectPreviewData"
    ],
    [
        221,
        "Prefs"
    ],
    [
        225,
        "ClassifyState"
    ],
    [
        228,
        "SimilarityIndex"
    ],
    [
        230,
        "DocumentNotes"
    ],
    [
        231,
        "DocumentHistory"
    ],
    [
        232,
        "ExifCameraInfo"
    ],
    [
        255,
        "CatalogSets"
    ]
]), U(B, "iptc", [
    [
        10,
        {
            0: "0 (reserved)",
            1: "1 (most urgent)",
            2: "2",
            3: "3",
            4: "4",
            5: "5 (normal urgency)",
            6: "6",
            7: "7",
            8: "8 (least urgent)",
            9: "9 (user-defined priority)"
        }
    ],
    [
        75,
        {
            a: "Morning",
            b: "Both Morning and Evening",
            p: "Evening"
        }
    ],
    [
        131,
        {
            L: "Landscape",
            P: "Portrait",
            S: "Square"
        }
    ]
]);
const __TURBOPACK__default__export__ = tt;
;
}),
]);

//# sourceMappingURL=798be_d641136c._.js.map