module.exports = [
"[project]/Website/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable import/no-extraneous-dependencies */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _server.registerServerReference;
    }
});
const _server = __turbopack_context__.r("[project]/Website/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"); //# sourceMappingURL=server-reference.js.map
}),
"[project]/Website/node_modules/next/dist/client/components/readonly-url-search-params.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * ReadonlyURLSearchParams implementation shared between client and server.
 * This file is intentionally not marked as 'use client' or 'use server'
 * so it can be imported by both environments.
 */ /** @internal */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReadonlyURLSearchParams", {
    enumerable: true,
    get: function() {
        return ReadonlyURLSearchParams;
    }
});
class ReadonlyURLSearchParamsError extends Error {
    constructor(){
        super('Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams');
    }
}
class ReadonlyURLSearchParams extends URLSearchParams {
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ append() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ delete() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ set() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ sort() {
        throw new ReadonlyURLSearchParamsError();
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=readonly-url-search-params.js.map
}),
"[project]/Website/node_modules/next/dist/client/components/redirect-status-code.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RedirectStatusCode", {
    enumerable: true,
    get: function() {
        return RedirectStatusCode;
    }
});
var RedirectStatusCode = /*#__PURE__*/ function(RedirectStatusCode) {
    RedirectStatusCode[RedirectStatusCode["SeeOther"] = 303] = "SeeOther";
    RedirectStatusCode[RedirectStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    RedirectStatusCode[RedirectStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
    return RedirectStatusCode;
}({});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-status-code.js.map
}),
"[project]/Website/node_modules/next/dist/client/components/redirect-error.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    REDIRECT_ERROR_CODE: null,
    RedirectType: null,
    isRedirectError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    REDIRECT_ERROR_CODE: function() {
        return REDIRECT_ERROR_CODE;
    },
    RedirectType: function() {
        return RedirectType;
    },
    isRedirectError: function() {
        return isRedirectError;
    }
});
const _redirectstatuscode = __turbopack_context__.r("[project]/Website/node_modules/next/dist/client/components/redirect-status-code.js [app-rsc] (ecmascript)");
const REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';
var RedirectType = /*#__PURE__*/ function(RedirectType) {
    RedirectType["push"] = "push";
    RedirectType["replace"] = "replace";
    return RedirectType;
}({});
function isRedirectError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const digest = error.digest.split(';');
    const [errorCode, type] = digest;
    const destination = digest.slice(2, -2).join(';');
    const status = digest.at(-2);
    const statusCode = Number(status);
    return errorCode === REDIRECT_ERROR_CODE && (type === 'replace' || type === 'push') && typeof destination === 'string' && !isNaN(statusCode) && statusCode in _redirectstatuscode.RedirectStatusCode;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-error.js.map
}),
"[project]/Website/node_modules/next/dist/client/components/redirect.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getRedirectError: null,
    getRedirectStatusCodeFromError: null,
    getRedirectTypeFromError: null,
    getURLFromRedirectError: null,
    permanentRedirect: null,
    redirect: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getRedirectError: function() {
        return getRedirectError;
    },
    getRedirectStatusCodeFromError: function() {
        return getRedirectStatusCodeFromError;
    },
    getRedirectTypeFromError: function() {
        return getRedirectTypeFromError;
    },
    getURLFromRedirectError: function() {
        return getURLFromRedirectError;
    },
    permanentRedirect: function() {
        return permanentRedirect;
    },
    redirect: function() {
        return redirect;
    }
});
const _redirectstatuscode = __turbopack_context__.r("[project]/Website/node_modules/next/dist/client/components/redirect-status-code.js [app-rsc] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/Website/node_modules/next/dist/client/components/redirect-error.js [app-rsc] (ecmascript)");
const actionAsyncStorage = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)").actionAsyncStorage : "TURBOPACK unreachable";
function getRedirectError(url, type, statusCode = _redirectstatuscode.RedirectStatusCode.TemporaryRedirect) {
    const error = Object.defineProperty(new Error(_redirecterror.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = `${_redirecterror.REDIRECT_ERROR_CODE};${type};${url};${statusCode};`;
    return error;
}
function redirect(/** The URL to redirect to */ url, type) {
    type ??= actionAsyncStorage?.getStore()?.isAction ? _redirecterror.RedirectType.push : _redirecterror.RedirectType.replace;
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.TemporaryRedirect);
}
function permanentRedirect(/** The URL to redirect to */ url, type = _redirecterror.RedirectType.replace) {
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.PermanentRedirect);
}
function getURLFromRedirectError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.split(';').slice(2, -2).join(';');
}
function getRedirectTypeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return error.digest.split(';', 2)[1];
}
function getRedirectStatusCodeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return Number(error.digest.split(';').at(-2));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect.js.map
}),
"[project]/Website/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HTTPAccessErrorStatus: null,
    HTTP_ERROR_FALLBACK_ERROR_CODE: null,
    getAccessFallbackErrorTypeByStatus: null,
    getAccessFallbackHTTPStatus: null,
    isHTTPAccessFallbackError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HTTPAccessErrorStatus: function() {
        return HTTPAccessErrorStatus;
    },
    HTTP_ERROR_FALLBACK_ERROR_CODE: function() {
        return HTTP_ERROR_FALLBACK_ERROR_CODE;
    },
    getAccessFallbackErrorTypeByStatus: function() {
        return getAccessFallbackErrorTypeByStatus;
    },
    getAccessFallbackHTTPStatus: function() {
        return getAccessFallbackHTTPStatus;
    },
    isHTTPAccessFallbackError: function() {
        return isHTTPAccessFallbackError;
    }
});
const HTTPAccessErrorStatus = {
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401
};
const ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
const HTTP_ERROR_FALLBACK_ERROR_CODE = 'NEXT_HTTP_ERROR_FALLBACK';
function isHTTPAccessFallbackError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const [prefix, httpStatus] = error.digest.split(';');
    return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE && ALLOWED_CODES.has(Number(httpStatus));
}
function getAccessFallbackHTTPStatus(error) {
    const httpStatus = error.digest.split(';')[1];
    return Number(httpStatus);
}
function getAccessFallbackErrorTypeByStatus(status) {
    switch(status){
        case 401:
            return 'unauthorized';
        case 403:
            return 'forbidden';
        case 404:
            return 'not-found';
        default:
            return;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=http-access-fallback.js.map
}),
"[project]/Website/node_modules/next/dist/client/components/not-found.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "notFound", {
    enumerable: true,
    get: function() {
        return notFound;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/Website/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)");
/**
 * This function allows you to render the [not-found.js file](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
 * within a route segment as well as inject a tag.
 *
 * `notFound()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * - In a Server Component, this will insert a `<meta name="robots" content="noindex" />` meta tag and set the status code to 404.
 * - In a Route Handler or Server Action, it will serve a 404 to the caller.
 *
 * Read more: [Next.js Docs: `notFound`](https://nextjs.org/docs/app/api-reference/functions/not-found)
 */ const DIGEST = `${_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE};404`;
function notFound() {
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map
}),
"[project]/Website/node_modules/next/dist/client/components/forbidden.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "forbidden", {
    enumerable: true,
    get: function() {
        return forbidden;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/Website/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)");
// TODO: Add `forbidden` docs
/**
 * @experimental
 * This function allows you to render the [forbidden.js file](https://nextjs.org/docs/app/api-reference/file-conventions/forbidden)
 * within a route segment as well as inject a tag.
 *
 * `forbidden()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * Read more: [Next.js Docs: `forbidden`](https://nextjs.org/docs/app/api-reference/functions/forbidden)
 */ const DIGEST = `${_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE};403`;
function forbidden() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error(`\`forbidden()\` is experimental and only allowed to be enabled when \`experimental.authInterrupts\` is enabled.`), "__NEXT_ERROR_CODE", {
            value: "E488",
            enumerable: false,
            configurable: true
        });
    }
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=forbidden.js.map
}),
"[project]/Website/node_modules/next/dist/client/components/unauthorized.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unauthorized", {
    enumerable: true,
    get: function() {
        return unauthorized;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/Website/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)");
// TODO: Add `unauthorized` docs
/**
 * @experimental
 * This function allows you to render the [unauthorized.js file](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized)
 * within a route segment as well as inject a tag.
 *
 * `unauthorized()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 *
 * Read more: [Next.js Docs: `unauthorized`](https://nextjs.org/docs/app/api-reference/functions/unauthorized)
 */ const DIGEST = `${_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE};401`;
function unauthorized() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error(`\`unauthorized()\` is experimental and only allowed to be used when \`experimental.authInterrupts\` is enabled.`), "__NEXT_ERROR_CODE", {
            value: "E411",
            enumerable: false,
            configurable: true
        });
    }
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unauthorized.js.map
}),
"[project]/Website/node_modules/next/dist/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    isHangingPromiseRejectionError: null,
    makeDevtoolsIOAwarePromise: null,
    makeHangingPromise: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isHangingPromiseRejectionError: function() {
        return isHangingPromiseRejectionError;
    },
    makeDevtoolsIOAwarePromise: function() {
        return makeDevtoolsIOAwarePromise;
    },
    makeHangingPromise: function() {
        return makeHangingPromise;
    }
});
function isHangingPromiseRejectionError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === HANGING_PROMISE_REJECTION;
}
const HANGING_PROMISE_REJECTION = 'HANGING_PROMISE_REJECTION';
class HangingPromiseRejectionError extends Error {
    constructor(route, expression){
        super(`During prerendering, ${expression} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${expression} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${route}".`), this.route = route, this.expression = expression, this.digest = HANGING_PROMISE_REJECTION;
    }
}
const abortListenersBySignal = new WeakMap();
function makeHangingPromise(signal, route, expression) {
    if (signal.aborted) {
        return Promise.reject(new HangingPromiseRejectionError(route, expression));
    } else {
        const hangingPromise = new Promise((_, reject)=>{
            const boundRejection = reject.bind(null, new HangingPromiseRejectionError(route, expression));
            let currentListeners = abortListenersBySignal.get(signal);
            if (currentListeners) {
                currentListeners.push(boundRejection);
            } else {
                const listeners = [
                    boundRejection
                ];
                abortListenersBySignal.set(signal, listeners);
                signal.addEventListener('abort', ()=>{
                    for(let i = 0; i < listeners.length; i++){
                        listeners[i]();
                    }
                }, {
                    once: true
                });
            }
        });
        // We are fine if no one actually awaits this promise. We shouldn't consider this an unhandled rejection so
        // we attach a noop catch handler here to suppress this warning. If you actually await somewhere or construct
        // your own promise out of it you'll need to ensure you handle the error when it rejects.
        hangingPromise.catch(ignoreReject);
        return hangingPromise;
    }
}
function ignoreReject() {}
function makeDevtoolsIOAwarePromise(underlying, requestStore, stage) {
    if (requestStore.stagedRendering) {
        // We resolve each stage in a timeout, so React DevTools will pick this up as IO.
        return requestStore.stagedRendering.delayUntilStage(stage, undefined, underlying);
    }
    // in React DevTools if we resolve in a setTimeout we will observe
    // the promise resolution as something that can suspend a boundary or root.
    return new Promise((resolve)=>{
        // Must use setTimeout to be considered IO React DevTools. setImmediate will not work.
        setTimeout(()=>{
            resolve(underlying);
        }, 0);
    });
} //# sourceMappingURL=dynamic-rendering-utils.js.map
}),
"[project]/Website/node_modules/next/dist/server/lib/router-utils/is-postpone.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isPostpone", {
    enumerable: true,
    get: function() {
        return isPostpone;
    }
});
const REACT_POSTPONE_TYPE = Symbol.for('react.postpone');
function isPostpone(error) {
    return typeof error === 'object' && error !== null && error.$$typeof === REACT_POSTPONE_TYPE;
} //# sourceMappingURL=is-postpone.js.map
}),
"[project]/Website/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This has to be a shared module which is shared between client component error boundary and dynamic component
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    BailoutToCSRError: null,
    isBailoutToCSRError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BailoutToCSRError: function() {
        return BailoutToCSRError;
    },
    isBailoutToCSRError: function() {
        return isBailoutToCSRError;
    }
});
const BAILOUT_TO_CSR = 'BAILOUT_TO_CLIENT_SIDE_RENDERING';
class BailoutToCSRError extends Error {
    constructor(reason){
        super(`Bail out to client-side rendering: ${reason}`), this.reason = reason, this.digest = BAILOUT_TO_CSR;
    }
}
function isBailoutToCSRError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === BAILOUT_TO_CSR;
} //# sourceMappingURL=bailout-to-csr.js.map
}),
"[project]/Website/node_modules/next/dist/client/components/is-next-router-error.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isNextRouterError", {
    enumerable: true,
    get: function() {
        return isNextRouterError;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/Website/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/Website/node_modules/next/dist/client/components/redirect-error.js [app-rsc] (ecmascript)");
function isNextRouterError(error) {
    return (0, _redirecterror.isRedirectError)(error) || (0, _httpaccessfallback.isHTTPAccessFallbackError)(error);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-next-router-error.js.map
}),
"[project]/Website/node_modules/next/dist/client/components/hooks-server-context.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DynamicServerError: null,
    isDynamicServerError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DynamicServerError: function() {
        return DynamicServerError;
    },
    isDynamicServerError: function() {
        return isDynamicServerError;
    }
});
const DYNAMIC_ERROR_CODE = 'DYNAMIC_SERVER_USAGE';
class DynamicServerError extends Error {
    constructor(description){
        super(`Dynamic server usage: ${description}`), this.description = description, this.digest = DYNAMIC_ERROR_CODE;
    }
}
function isDynamicServerError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err) || typeof err.digest !== 'string') {
        return false;
    }
    return err.digest === DYNAMIC_ERROR_CODE;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hooks-server-context.js.map
}),
"[project]/Website/node_modules/next/dist/client/components/static-generation-bailout.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    StaticGenBailoutError: null,
    isStaticGenBailoutError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    StaticGenBailoutError: function() {
        return StaticGenBailoutError;
    },
    isStaticGenBailoutError: function() {
        return isStaticGenBailoutError;
    }
});
const NEXT_STATIC_GEN_BAILOUT = 'NEXT_STATIC_GEN_BAILOUT';
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args), this.code = NEXT_STATIC_GEN_BAILOUT;
    }
}
function isStaticGenBailoutError(error) {
    if (typeof error !== 'object' || error === null || !('code' in error)) {
        return false;
    }
    return error.code === NEXT_STATIC_GEN_BAILOUT;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-bailout.js.map
}),
"[project]/Website/node_modules/next/dist/lib/framework/boundary-constants.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    METADATA_BOUNDARY_NAME: null,
    OUTLET_BOUNDARY_NAME: null,
    ROOT_LAYOUT_BOUNDARY_NAME: null,
    VIEWPORT_BOUNDARY_NAME: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    METADATA_BOUNDARY_NAME: function() {
        return METADATA_BOUNDARY_NAME;
    },
    OUTLET_BOUNDARY_NAME: function() {
        return OUTLET_BOUNDARY_NAME;
    },
    ROOT_LAYOUT_BOUNDARY_NAME: function() {
        return ROOT_LAYOUT_BOUNDARY_NAME;
    },
    VIEWPORT_BOUNDARY_NAME: function() {
        return VIEWPORT_BOUNDARY_NAME;
    }
});
const METADATA_BOUNDARY_NAME = '__next_metadata_boundary__';
const VIEWPORT_BOUNDARY_NAME = '__next_viewport_boundary__';
const OUTLET_BOUNDARY_NAME = '__next_outlet_boundary__';
const ROOT_LAYOUT_BOUNDARY_NAME = '__next_root_layout_boundary__'; //# sourceMappingURL=boundary-constants.js.map
}),
"[project]/Website/node_modules/next/dist/lib/scheduler.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    atLeastOneTask: null,
    scheduleImmediate: null,
    scheduleOnNextTick: null,
    waitAtLeastOneReactRenderTask: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    atLeastOneTask: function() {
        return atLeastOneTask;
    },
    scheduleImmediate: function() {
        return scheduleImmediate;
    },
    scheduleOnNextTick: function() {
        return scheduleOnNextTick;
    },
    waitAtLeastOneReactRenderTask: function() {
        return waitAtLeastOneReactRenderTask;
    }
});
const scheduleOnNextTick = (cb)=>{
    // We use Promise.resolve().then() here so that the operation is scheduled at
    // the end of the promise job queue, we then add it to the next process tick
    // to ensure it's evaluated afterwards.
    //
    // This was inspired by the implementation of the DataLoader interface: https://github.com/graphql/dataloader/blob/d336bd15282664e0be4b4a657cb796f09bafbc6b/src/index.js#L213-L255
    //
    Promise.resolve().then(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            process.nextTick(cb);
        }
    });
};
const scheduleImmediate = (cb)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        setImmediate(cb);
    }
};
function atLeastOneTask() {
    return new Promise((resolve)=>scheduleImmediate(resolve));
}
function waitAtLeastOneReactRenderTask() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return new Promise((r)=>setImmediate(r));
    }
} //# sourceMappingURL=scheduler.js.map
}),
"[project]/Website/node_modules/next/dist/shared/lib/invariant-error.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "InvariantError", {
    enumerable: true,
    get: function() {
        return InvariantError;
    }
});
class InvariantError extends Error {
    constructor(message, options){
        super(`Invariant: ${message.endsWith('.') ? message : message + '.'} This is a bug in Next.js.`, options);
        this.name = 'InvariantError';
    }
} //# sourceMappingURL=invariant-error.js.map
}),
"[project]/Website/node_modules/next/dist/shared/lib/promise-with-resolvers.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createPromiseWithResolvers", {
    enumerable: true,
    get: function() {
        return createPromiseWithResolvers;
    }
});
function createPromiseWithResolvers() {
    // Shim of Stage 4 Promise.withResolvers proposal
    let resolve;
    let reject;
    const promise = new Promise((res, rej)=>{
        resolve = res;
        reject = rej;
    });
    return {
        resolve: resolve,
        reject: reject,
        promise
    };
} //# sourceMappingURL=promise-with-resolvers.js.map
}),
"[project]/Website/node_modules/next/dist/server/app-render/staged-rendering.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RenderStage: null,
    StagedRenderingController: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RenderStage: function() {
        return RenderStage;
    },
    StagedRenderingController: function() {
        return StagedRenderingController;
    }
});
const _invarianterror = __turbopack_context__.r("[project]/Website/node_modules/next/dist/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
const _promisewithresolvers = __turbopack_context__.r("[project]/Website/node_modules/next/dist/shared/lib/promise-with-resolvers.js [app-rsc] (ecmascript)");
var RenderStage = /*#__PURE__*/ function(RenderStage) {
    RenderStage[RenderStage["Static"] = 1] = "Static";
    RenderStage[RenderStage["Runtime"] = 2] = "Runtime";
    RenderStage[RenderStage["Dynamic"] = 3] = "Dynamic";
    return RenderStage;
}({});
class StagedRenderingController {
    constructor(abortSignal = null){
        this.abortSignal = abortSignal;
        this.currentStage = 1;
        this.runtimeStagePromise = (0, _promisewithresolvers.createPromiseWithResolvers)();
        this.dynamicStagePromise = (0, _promisewithresolvers.createPromiseWithResolvers)();
        if (abortSignal) {
            abortSignal.addEventListener('abort', ()=>{
                const { reason } = abortSignal;
                if (this.currentStage < 2) {
                    this.runtimeStagePromise.promise.catch(ignoreReject) // avoid unhandled rejections
                    ;
                    this.runtimeStagePromise.reject(reason);
                }
                if (this.currentStage < 3) {
                    this.dynamicStagePromise.promise.catch(ignoreReject) // avoid unhandled rejections
                    ;
                    this.dynamicStagePromise.reject(reason);
                }
            }, {
                once: true
            });
        }
    }
    advanceStage(stage) {
        // If we're already at the target stage or beyond, do nothing.
        // (this can happen e.g. if sync IO advanced us to the dynamic stage)
        if (this.currentStage >= stage) {
            return;
        }
        this.currentStage = stage;
        // Note that we might be going directly from Static to Dynamic,
        // so we need to resolve the runtime stage as well.
        if (stage >= 2) {
            this.runtimeStagePromise.resolve();
        }
        if (stage >= 3) {
            this.dynamicStagePromise.resolve();
        }
    }
    getStagePromise(stage) {
        switch(stage){
            case 2:
                {
                    return this.runtimeStagePromise.promise;
                }
            case 3:
                {
                    return this.dynamicStagePromise.promise;
                }
            default:
                {
                    stage;
                    throw Object.defineProperty(new _invarianterror.InvariantError(`Invalid render stage: ${stage}`), "__NEXT_ERROR_CODE", {
                        value: "E881",
                        enumerable: false,
                        configurable: true
                    });
                }
        }
    }
    waitForStage(stage) {
        return this.getStagePromise(stage);
    }
    delayUntilStage(stage, displayName, resolvedValue) {
        const ioTriggerPromise = this.getStagePromise(stage);
        const promise = makeDevtoolsIOPromiseFromIOTrigger(ioTriggerPromise, displayName, resolvedValue);
        // Analogously to `makeHangingPromise`, we might reject this promise if the signal is invoked.
        // (e.g. in the case where we don't want want the render to proceed to the dynamic stage and abort it).
        // We shouldn't consider this an unhandled rejection, so we attach a noop catch handler here to suppress this warning.
        if (this.abortSignal) {
            promise.catch(ignoreReject);
        }
        return promise;
    }
}
function ignoreReject() {}
// TODO(restart-on-cache-miss): the layering of `delayUntilStage`,
// `makeDevtoolsIOPromiseFromIOTrigger` and and `makeDevtoolsIOAwarePromise`
// is confusing, we should clean it up.
function makeDevtoolsIOPromiseFromIOTrigger(ioTrigger, displayName, resolvedValue) {
    // If we create a `new Promise` and give it a displayName
    // (with no userspace code above us in the stack)
    // React Devtools will use it as the IO cause when determining "suspended by".
    // In particular, it should shadow any inner IO that resolved/rejected the promise
    // (in case of staged rendering, this will be the `setTimeout` that triggers the relevant stage)
    const promise = new Promise((resolve, reject)=>{
        ioTrigger.then(resolve.bind(null, resolvedValue), reject);
    });
    if (displayName !== undefined) {
        // @ts-expect-error
        promise.displayName = displayName;
    }
    return promise;
} //# sourceMappingURL=staged-rendering.js.map
}),
"[project]/Website/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * The functions provided by this module are used to communicate certain properties
 * about the currently running code so that Next.js can make decisions on how to handle
 * the current execution in different rendering modes such as pre-rendering, resuming, and SSR.
 *
 * Today Next.js treats all code as potentially static. Certain APIs may only make sense when dynamically rendering.
 * Traditionally this meant deopting the entire render to dynamic however with PPR we can now deopt parts
 * of a React tree as dynamic while still keeping other parts static. There are really two different kinds of
 * Dynamic indications.
 *
 * The first is simply an intention to be dynamic. unstable_noStore is an example of this where
 * the currently executing code simply declares that the current scope is dynamic but if you use it
 * inside unstable_cache it can still be cached. This type of indication can be removed if we ever
 * make the default dynamic to begin with because the only way you would ever be static is inside
 * a cache scope which this indication does not affect.
 *
 * The second is an indication that a dynamic data source was read. This is a stronger form of dynamic
 * because it means that it is inappropriate to cache this at all. using a dynamic data source inside
 * unstable_cache should error. If you want to use some dynamic data inside unstable_cache you should
 * read that data outside the cache and pass it in as an argument to the cached function.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Postpone: null,
    PreludeState: null,
    abortAndThrowOnSynchronousRequestDataAccess: null,
    abortOnSynchronousPlatformIOAccess: null,
    accessedDynamicData: null,
    annotateDynamicAccess: null,
    consumeDynamicAccess: null,
    createDynamicTrackingState: null,
    createDynamicValidationState: null,
    createHangingInputAbortSignal: null,
    createRenderInBrowserAbortSignal: null,
    delayUntilRuntimeStage: null,
    formatDynamicAPIAccesses: null,
    getFirstDynamicReason: null,
    isDynamicPostpone: null,
    isPrerenderInterruptedError: null,
    logDisallowedDynamicError: null,
    markCurrentScopeAsDynamic: null,
    postponeWithTracking: null,
    throwIfDisallowedDynamic: null,
    throwToInterruptStaticGeneration: null,
    trackAllowedDynamicAccess: null,
    trackDynamicDataInDynamicRender: null,
    trackSynchronousPlatformIOAccessInDev: null,
    useDynamicRouteParams: null,
    useDynamicSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Postpone: function() {
        return Postpone;
    },
    PreludeState: function() {
        return PreludeState;
    },
    abortAndThrowOnSynchronousRequestDataAccess: function() {
        return abortAndThrowOnSynchronousRequestDataAccess;
    },
    abortOnSynchronousPlatformIOAccess: function() {
        return abortOnSynchronousPlatformIOAccess;
    },
    accessedDynamicData: function() {
        return accessedDynamicData;
    },
    annotateDynamicAccess: function() {
        return annotateDynamicAccess;
    },
    consumeDynamicAccess: function() {
        return consumeDynamicAccess;
    },
    createDynamicTrackingState: function() {
        return createDynamicTrackingState;
    },
    createDynamicValidationState: function() {
        return createDynamicValidationState;
    },
    createHangingInputAbortSignal: function() {
        return createHangingInputAbortSignal;
    },
    createRenderInBrowserAbortSignal: function() {
        return createRenderInBrowserAbortSignal;
    },
    delayUntilRuntimeStage: function() {
        return delayUntilRuntimeStage;
    },
    formatDynamicAPIAccesses: function() {
        return formatDynamicAPIAccesses;
    },
    getFirstDynamicReason: function() {
        return getFirstDynamicReason;
    },
    isDynamicPostpone: function() {
        return isDynamicPostpone;
    },
    isPrerenderInterruptedError: function() {
        return isPrerenderInterruptedError;
    },
    logDisallowedDynamicError: function() {
        return logDisallowedDynamicError;
    },
    markCurrentScopeAsDynamic: function() {
        return markCurrentScopeAsDynamic;
    },
    postponeWithTracking: function() {
        return postponeWithTracking;
    },
    throwIfDisallowedDynamic: function() {
        return throwIfDisallowedDynamic;
    },
    throwToInterruptStaticGeneration: function() {
        return throwToInterruptStaticGeneration;
    },
    trackAllowedDynamicAccess: function() {
        return trackAllowedDynamicAccess;
    },
    trackDynamicDataInDynamicRender: function() {
        return trackDynamicDataInDynamicRender;
    },
    trackSynchronousPlatformIOAccessInDev: function() {
        return trackSynchronousPlatformIOAccessInDev;
    },
    useDynamicRouteParams: function() {
        return useDynamicRouteParams;
    },
    useDynamicSearchParams: function() {
        return useDynamicSearchParams;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/Website/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)"));
const _hooksservercontext = __turbopack_context__.r("[project]/Website/node_modules/next/dist/client/components/hooks-server-context.js [app-rsc] (ecmascript)");
const _staticgenerationbailout = __turbopack_context__.r("[project]/Website/node_modules/next/dist/client/components/static-generation-bailout.js [app-rsc] (ecmascript)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/Website/node_modules/next/dist/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)");
const _boundaryconstants = __turbopack_context__.r("[project]/Website/node_modules/next/dist/lib/framework/boundary-constants.js [app-rsc] (ecmascript)");
const _scheduler = __turbopack_context__.r("[project]/Website/node_modules/next/dist/lib/scheduler.js [app-rsc] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/Website/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-rsc] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/Website/node_modules/next/dist/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
const _stagedrendering = __turbopack_context__.r("[project]/Website/node_modules/next/dist/server/app-render/staged-rendering.js [app-rsc] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const hasPostpone = typeof _react.default.unstable_postpone === 'function';
function createDynamicTrackingState(isDebugDynamicAccesses) {
    return {
        isDebugDynamicAccesses,
        dynamicAccesses: [],
        syncDynamicErrorWithStack: null
    };
}
function createDynamicValidationState() {
    return {
        hasSuspenseAboveBody: false,
        hasDynamicMetadata: false,
        hasDynamicViewport: false,
        hasAllowedDynamic: false,
        dynamicErrors: []
    };
}
function getFirstDynamicReason(trackingState) {
    var _trackingState_dynamicAccesses_;
    return (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) == null ? void 0 : _trackingState_dynamicAccesses_.expression;
}
function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'cache':
            case 'unstable-cache':
                // Inside cache scopes, marking a scope as dynamic has no effect,
                // because the outer cache scope creates a cache boundary. This is
                // subtly different from reading a dynamic data source, which is
                // forbidden inside a cache scope.
                return;
            case 'private-cache':
                // A private cache scope is already dynamic by definition.
                return;
            case 'prerender-legacy':
            case 'prerender-ppr':
            case 'request':
                break;
            default:
                workUnitStore;
        }
    }
    // If we're forcing dynamic rendering or we're forcing static rendering, we
    // don't need to do anything here because the entire page is already dynamic
    // or it's static and it should not throw or postpone here.
    if (store.forceDynamic || store.forceStatic) return;
    if (store.dynamicShouldError) {
        throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
            value: "E553",
            enumerable: false,
            configurable: true
        });
    }
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender-ppr':
                return postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
            case 'prerender-legacy':
                workUnitStore.revalidate = 0;
                // We aren't prerendering, but we are generating a static page. We need
                // to bail out of static generation.
                const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
                    value: "E550",
                    enumerable: false,
                    configurable: true
                });
                store.dynamicUsageDescription = expression;
                store.dynamicUsageStack = err.stack;
                throw err;
            case 'request':
                if ("TURBOPACK compile-time truthy", 1) {
                    workUnitStore.usedDynamic = true;
                }
                break;
            default:
                workUnitStore;
        }
    }
}
function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
    // We aren't prerendering but we are generating a static page. We need to bail out of static generation
    const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
        value: "E558",
        enumerable: false,
        configurable: true
    });
    prerenderStore.revalidate = 0;
    store.dynamicUsageDescription = expression;
    store.dynamicUsageStack = err.stack;
    throw err;
}
function trackDynamicDataInDynamicRender(workUnitStore) {
    switch(workUnitStore.type){
        case 'cache':
        case 'unstable-cache':
            // Inside cache scopes, marking a scope as dynamic has no effect,
            // because the outer cache scope creates a cache boundary. This is
            // subtly different from reading a dynamic data source, which is
            // forbidden inside a cache scope.
            return;
        case 'private-cache':
            // A private cache scope is already dynamic by definition.
            return;
        case 'prerender':
        case 'prerender-runtime':
        case 'prerender-legacy':
        case 'prerender-ppr':
        case 'prerender-client':
            break;
        case 'request':
            if ("TURBOPACK compile-time truthy", 1) {
                workUnitStore.usedDynamic = true;
            }
            break;
        default:
            workUnitStore;
    }
}
function abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore) {
    const reason = `Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`;
    const error = createPrerenderInterruptedError(reason);
    prerenderStore.controller.abort(error);
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function abortOnSynchronousPlatformIOAccess(route, expression, errorWithStack, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
    // It is important that we set this tracking value after aborting. Aborts are executed
    // synchronously except for the case where you abort during render itself. By setting this
    // value late we can use it to determine if any of the aborted tasks are the task that
    // called the sync IO expression in the first place.
    if (dynamicTracking) {
        if (dynamicTracking.syncDynamicErrorWithStack === null) {
            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
        }
    }
}
function trackSynchronousPlatformIOAccessInDev(requestStore) {
    // We don't actually have a controller to abort but we do the semantic equivalent by
    // advancing the request store out of the prerender stage
    if (requestStore.stagedRendering) {
        // TODO: error for sync IO in the runtime stage
        // (which is not currently covered by the validation render in `spawnDynamicValidationInDev`)
        requestStore.stagedRendering.advanceStage(_stagedrendering.RenderStage.Dynamic);
    }
}
function abortAndThrowOnSynchronousRequestDataAccess(route, expression, errorWithStack, prerenderStore) {
    const prerenderSignal = prerenderStore.controller.signal;
    if (prerenderSignal.aborted === false) {
        // TODO it would be better to move this aborted check into the callsite so we can avoid making
        // the error object when it isn't relevant to the aborting of the prerender however
        // since we need the throw semantics regardless of whether we abort it is easier to land
        // this way. See how this was handled with `abortOnSynchronousPlatformIOAccess` for a closer
        // to ideal implementation
        abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
        // It is important that we set this tracking value after aborting. Aborts are executed
        // synchronously except for the case where you abort during render itself. By setting this
        // value late we can use it to determine if any of the aborted tasks are the task that
        // called the sync IO expression in the first place.
        const dynamicTracking = prerenderStore.dynamicTracking;
        if (dynamicTracking) {
            if (dynamicTracking.syncDynamicErrorWithStack === null) {
                dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
            }
        }
    }
    throw createPrerenderInterruptedError(`Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`);
}
function Postpone({ reason, route }) {
    const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    const dynamicTracking = prerenderStore && prerenderStore.type === 'prerender-ppr' ? prerenderStore.dynamicTracking : null;
    postponeWithTracking(route, reason, dynamicTracking);
}
function postponeWithTracking(route, expression, dynamicTracking) {
    assertPostpone();
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
    _react.default.unstable_postpone(createPostponeReason(route, expression));
}
function createPostponeReason(route, expression) {
    return `Route ${route} needs to bail out of prerendering at this point because it used ${expression}. ` + `React throws this special object to indicate where. It should not be caught by ` + `your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
}
function isDynamicPostpone(err) {
    if (typeof err === 'object' && err !== null && typeof err.message === 'string') {
        return isDynamicPostponeReason(err.message);
    }
    return false;
}
function isDynamicPostponeReason(reason) {
    return reason.includes('needs to bail out of prerendering at this point because it used') && reason.includes('Learn more: https://nextjs.org/docs/messages/ppr-caught-error');
}
if (isDynamicPostponeReason(createPostponeReason('%%%', '^^^')) === false) {
    throw Object.defineProperty(new Error('Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js'), "__NEXT_ERROR_CODE", {
        value: "E296",
        enumerable: false,
        configurable: true
    });
}
const NEXT_PRERENDER_INTERRUPTED = 'NEXT_PRERENDER_INTERRUPTED';
function createPrerenderInterruptedError(message) {
    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = NEXT_PRERENDER_INTERRUPTED;
    return error;
}
function isPrerenderInterruptedError(error) {
    return typeof error === 'object' && error !== null && error.digest === NEXT_PRERENDER_INTERRUPTED && 'name' in error && 'message' in error && error instanceof Error;
}
function accessedDynamicData(dynamicAccesses) {
    return dynamicAccesses.length > 0;
}
function consumeDynamicAccess(serverDynamic, clientDynamic) {
    // We mutate because we only call this once we are no longer writing
    // to the dynamicTrackingState and it's more efficient than creating a new
    // array.
    serverDynamic.dynamicAccesses.push(...clientDynamic.dynamicAccesses);
    return serverDynamic.dynamicAccesses;
}
function formatDynamicAPIAccesses(dynamicAccesses) {
    return dynamicAccesses.filter((access)=>typeof access.stack === 'string' && access.stack.length > 0).map(({ expression, stack })=>{
        stack = stack.split('\n') // Remove the "Error: " prefix from the first line of the stack trace as
        // well as the first 4 lines of the stack trace which is the distance
        // from the user code and the `new Error().stack` call.
        .slice(4).filter((line)=>{
            // Exclude Next.js internals from the stack trace.
            if (line.includes('node_modules/next/')) {
                return false;
            }
            // Exclude anonymous functions from the stack trace.
            if (line.includes(' (<anonymous>)')) {
                return false;
            }
            // Exclude Node.js internals from the stack trace.
            if (line.includes(' (node:')) {
                return false;
            }
            return true;
        }).join('\n');
        return `Dynamic API Usage Debug - ${expression}:\n${stack}`;
    });
}
function assertPostpone() {
    if (!hasPostpone) {
        throw Object.defineProperty(new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`), "__NEXT_ERROR_CODE", {
            value: "E224",
            enumerable: false,
            configurable: true
        });
    }
}
function createRenderInBrowserAbortSignal() {
    const controller = new AbortController();
    controller.abort(Object.defineProperty(new _bailouttocsr.BailoutToCSRError('Render in Browser'), "__NEXT_ERROR_CODE", {
        value: "E721",
        enumerable: false,
        configurable: true
    }));
    return controller.signal;
}
function createHangingInputAbortSignal(workUnitStore) {
    switch(workUnitStore.type){
        case 'prerender':
        case 'prerender-runtime':
            const controller = new AbortController();
            if (workUnitStore.cacheSignal) {
                // If we have a cacheSignal it means we're in a prospective render. If
                // the input we're waiting on is coming from another cache, we do want
                // to wait for it so that we can resolve this cache entry too.
                workUnitStore.cacheSignal.inputReady().then(()=>{
                    controller.abort();
                });
            } else {
                // Otherwise we're in the final render and we should already have all
                // our caches filled.
                // If the prerender uses stages, we have wait until the runtime stage,
                // at which point all runtime inputs will be resolved.
                // (otherwise, a runtime prerender might consider `cookies()` hanging
                //  even though they'd resolve in the next task.)
                //
                // We might still be waiting on some microtasks so we
                // wait one tick before giving up. When we give up, we still want to
                // render the content of this cache as deeply as we can so that we can
                // suspend as deeply as possible in the tree or not at all if we don't
                // end up waiting for the input.
                const runtimeStagePromise = (0, _workunitasyncstorageexternal.getRuntimeStagePromise)(workUnitStore);
                if (runtimeStagePromise) {
                    runtimeStagePromise.then(()=>(0, _scheduler.scheduleOnNextTick)(()=>controller.abort()));
                } else {
                    (0, _scheduler.scheduleOnNextTick)(()=>controller.abort());
                }
            }
            return controller.signal;
        case 'prerender-client':
        case 'prerender-ppr':
        case 'prerender-legacy':
        case 'request':
        case 'cache':
        case 'private-cache':
        case 'unstable-cache':
            return undefined;
        default:
            workUnitStore;
    }
}
function annotateDynamicAccess(expression, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function useDynamicRouteParams(expression) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workStore && workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender-client':
            case 'prerender':
                {
                    const fallbackParams = workUnitStore.fallbackRouteParams;
                    if (fallbackParams && fallbackParams.size > 0) {
                        // We are in a prerender with cacheComponents semantics. We are going to
                        // hang here and never resolve. This will cause the currently
                        // rendering component to effectively be a dynamic hole.
                        _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, expression));
                    }
                    break;
                }
            case 'prerender-ppr':
                {
                    const fallbackParams = workUnitStore.fallbackRouteParams;
                    if (fallbackParams && fallbackParams.size > 0) {
                        return postponeWithTracking(workStore.route, expression, workUnitStore.dynamicTracking);
                    }
                    break;
                }
            case 'prerender-runtime':
                throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called during a runtime prerender. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E771",
                    enumerable: false,
                    configurable: true
                });
            case 'cache':
            case 'private-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called inside a cache scope. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E745",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-legacy':
            case 'request':
            case 'unstable-cache':
                break;
            default:
                workUnitStore;
        }
    }
}
function useDynamicSearchParams(expression) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (!workStore) {
        // We assume pages router context and just return
        return;
    }
    if (!workUnitStore) {
        (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(expression);
    }
    switch(workUnitStore.type){
        case 'prerender-client':
            {
                _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, expression));
                break;
            }
        case 'prerender-legacy':
        case 'prerender-ppr':
            {
                if (workStore.forceStatic) {
                    return;
                }
                throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(expression), "__NEXT_ERROR_CODE", {
                    value: "E394",
                    enumerable: false,
                    configurable: true
                });
            }
        case 'prerender':
        case 'prerender-runtime':
            throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called from a Server Component. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                value: "E795",
                enumerable: false,
                configurable: true
            });
        case 'cache':
        case 'unstable-cache':
        case 'private-cache':
            throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called inside a cache scope. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                value: "E745",
                enumerable: false,
                configurable: true
            });
        case 'request':
            return;
        default:
            workUnitStore;
    }
}
const hasSuspenseRegex = /\n\s+at Suspense \(<anonymous>\)/;
// Common implicit body tags that React will treat as body when placed directly in html
const bodyAndImplicitTags = 'body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6';
// Detects when RootLayoutBoundary (our framework marker component) appears
// after Suspense in the component stack, indicating the root layout is wrapped
// within a Suspense boundary. Ensures no body/html/implicit-body components are in between.
//
// Example matches:
//   at Suspense (<anonymous>)
//   at __next_root_layout_boundary__ (<anonymous>)
//
// Or with other components in between (but not body/html/implicit-body):
//   at Suspense (<anonymous>)
//   at SomeComponent (<anonymous>)
//   at __next_root_layout_boundary__ (<anonymous>)
const hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex = new RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:${bodyAndImplicitTags}) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${_boundaryconstants.ROOT_LAYOUT_BOUNDARY_NAME} \\([^\\n]*\\)`);
const hasMetadataRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.METADATA_BOUNDARY_NAME}[\\n\\s]`);
const hasViewportRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`);
const hasOutletRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
function trackAllowedDynamicAccess(workStore, componentStack, dynamicValidation, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        dynamicValidation.hasDynamicMetadata = true;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        dynamicValidation.hasDynamicViewport = true;
        return;
    } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        // For Suspense within body, the prelude wouldn't be empty so it wouldn't violate the empty static shells rule.
        // But if you have Suspense above body, the prelude is empty but we allow that because having Suspense
        // is an explicit signal from the user that they acknowledge the empty shell and want dynamic rendering.
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        // this error had a Suspense boundary above it so we don't need to report it as a source
        // of disallowed
        dynamicValidation.hasAllowedDynamic = true;
        return;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
        // This task was the task that called the sync error.
        dynamicValidation.dynamicErrors.push(clientDynamic.syncDynamicErrorWithStack);
        return;
    } else {
        const message = `Route "${workStore.route}": Uncached data was accessed outside of ` + '<Suspense>. This delays the entire page from rendering, resulting in a ' + 'slow user experience. Learn more: ' + 'https://nextjs.org/docs/messages/blocking-route';
        const error = createErrorWithComponentOrOwnerStack(message, componentStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
    }
}
/**
 * In dev mode, we prefer using the owner stack, otherwise the provided
 * component stack is used.
 */ function createErrorWithComponentOrOwnerStack(message, componentStack) {
    const ownerStack = ("TURBOPACK compile-time value", "development") !== 'production' && _react.default.captureOwnerStack ? _react.default.captureOwnerStack() : null;
    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.stack = error.name + ': ' + message + (ownerStack ?? componentStack);
    return error;
}
var PreludeState = /*#__PURE__*/ function(PreludeState) {
    PreludeState[PreludeState["Full"] = 0] = "Full";
    PreludeState[PreludeState["Empty"] = 1] = "Empty";
    PreludeState[PreludeState["Errored"] = 2] = "Errored";
    return PreludeState;
}({});
function logDisallowedDynamicError(workStore, error) {
    console.error(error);
    if (!workStore.dev) {
        if (workStore.hasReadableErrorStacks) {
            console.error(`To get a more detailed stack trace and pinpoint the issue, start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.`);
        } else {
            console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`);
        }
    }
}
function throwIfDisallowedDynamic(workStore, prelude, dynamicValidation, serverDynamic) {
    if (serverDynamic.syncDynamicErrorWithStack) {
        logDisallowedDynamicError(workStore, serverDynamic.syncDynamicErrorWithStack);
        throw new _staticgenerationbailout.StaticGenBailoutError();
    }
    if (prelude !== 0) {
        if (dynamicValidation.hasSuspenseAboveBody) {
            // This route has opted into allowing fully dynamic rendering
            // by including a Suspense boundary above the body. In this case
            // a lack of a shell is not considered disallowed so we simply return
            return;
        }
        // We didn't have any sync bailouts but there may be user code which
        // blocked the root. We would have captured these during the prerender
        // and can log them here and then terminate the build/validating render
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
            for(let i = 0; i < dynamicErrors.length; i++){
                logDisallowedDynamicError(workStore, dynamicErrors[i]);
            }
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        // If we got this far then the only other thing that could be blocking
        // the root is dynamic Viewport. If this is dynamic then
        // you need to opt into that by adding a Suspense boundary above the body
        // to indicate your are ok with fully dynamic rendering.
        if (dynamicValidation.hasDynamicViewport) {
            console.error(`Route "${workStore.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        if (prelude === 1) {
            // If we ever get this far then we messed up the tracking of invalid dynamic.
            // We still adhere to the constraint that you must produce a shell but invite the
            // user to report this as a bug in Next.js.
            console.error(`Route "${workStore.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
    } else {
        if (dynamicValidation.hasAllowedDynamic === false && dynamicValidation.hasDynamicMetadata) {
            console.error(`Route "${workStore.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
    }
}
function delayUntilRuntimeStage(prerenderStore, result) {
    if (prerenderStore.runtimeStagePromise) {
        return prerenderStore.runtimeStagePromise.then(()=>result);
    }
    return result;
} //# sourceMappingURL=dynamic-rendering.js.map
}),
"[project]/Website/node_modules/next/dist/client/components/unstable-rethrow.server.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const _dynamicrenderingutils = __turbopack_context__.r("[project]/Website/node_modules/next/dist/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)");
const _ispostpone = __turbopack_context__.r("[project]/Website/node_modules/next/dist/server/lib/router-utils/is-postpone.js [app-rsc] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/Website/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-rsc] (ecmascript)");
const _isnextroutererror = __turbopack_context__.r("[project]/Website/node_modules/next/dist/client/components/is-next-router-error.js [app-rsc] (ecmascript)");
const _dynamicrendering = __turbopack_context__.r("[project]/Website/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)");
const _hooksservercontext = __turbopack_context__.r("[project]/Website/node_modules/next/dist/client/components/hooks-server-context.js [app-rsc] (ecmascript)");
function unstable_rethrow(error) {
    if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error) || (0, _hooksservercontext.isDynamicServerError)(error) || (0, _dynamicrendering.isDynamicPostpone)(error) || (0, _ispostpone.isPostpone)(error) || (0, _dynamicrenderingutils.isHangingPromiseRejectionError)(error) || (0, _dynamicrendering.isPrerenderInterruptedError)(error)) {
        throw error;
    }
    if (error instanceof Error && 'cause' in error) {
        unstable_rethrow(error.cause);
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.server.js.map
}),
"[project]/Website/node_modules/next/dist/client/components/unstable-rethrow.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * This function should be used to rethrow internal Next.js errors so that they can be handled by the framework.
 * When wrapping an API that uses errors to interrupt control flow, you should use this function before you do any error handling.
 * This function will rethrow the error if it is a Next.js error so it can be handled, otherwise it will do nothing.
 *
 * Read more: [Next.js Docs: `unstable_rethrow`](https://nextjs.org/docs/app/api-reference/functions/unstable_rethrow)
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const unstable_rethrow = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/Website/node_modules/next/dist/client/components/unstable-rethrow.server.js [app-rsc] (ecmascript)").unstable_rethrow : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.js.map
}),
"[project]/Website/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    RedirectType: null,
    forbidden: null,
    notFound: null,
    permanentRedirect: null,
    redirect: null,
    unauthorized: null,
    unstable_isUnrecognizedActionError: null,
    unstable_rethrow: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return _readonlyurlsearchparams.ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _redirecterror.RedirectType;
    },
    forbidden: function() {
        return _forbidden.forbidden;
    },
    notFound: function() {
        return _notfound.notFound;
    },
    permanentRedirect: function() {
        return _redirect.permanentRedirect;
    },
    redirect: function() {
        return _redirect.redirect;
    },
    unauthorized: function() {
        return _unauthorized.unauthorized;
    },
    unstable_isUnrecognizedActionError: function() {
        return unstable_isUnrecognizedActionError;
    },
    unstable_rethrow: function() {
        return _unstablerethrow.unstable_rethrow;
    }
});
const _readonlyurlsearchparams = __turbopack_context__.r("[project]/Website/node_modules/next/dist/client/components/readonly-url-search-params.js [app-rsc] (ecmascript)");
const _redirect = __turbopack_context__.r("[project]/Website/node_modules/next/dist/client/components/redirect.js [app-rsc] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/Website/node_modules/next/dist/client/components/redirect-error.js [app-rsc] (ecmascript)");
const _notfound = __turbopack_context__.r("[project]/Website/node_modules/next/dist/client/components/not-found.js [app-rsc] (ecmascript)");
const _forbidden = __turbopack_context__.r("[project]/Website/node_modules/next/dist/client/components/forbidden.js [app-rsc] (ecmascript)");
const _unauthorized = __turbopack_context__.r("[project]/Website/node_modules/next/dist/client/components/unauthorized.js [app-rsc] (ecmascript)");
const _unstablerethrow = __turbopack_context__.r("[project]/Website/node_modules/next/dist/client/components/unstable-rethrow.js [app-rsc] (ecmascript)");
function unstable_isUnrecognizedActionError() {
    throw Object.defineProperty(new Error('`unstable_isUnrecognizedActionError` can only be used on the client.'), "__NEXT_ERROR_CODE", {
        value: "E776",
        enumerable: false,
        configurable: true
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.react-server.js.map
}),
"[project]/Website/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)"); //# sourceMappingURL=navigation.react-server.js.map
;
}),
"[project]/Website/node_modules/next/dist/server/web/spec-extension/cookies.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RequestCookies: null,
    ResponseCookies: null,
    stringifyCookie: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RequestCookies: function() {
        return _cookies.RequestCookies;
    },
    ResponseCookies: function() {
        return _cookies.ResponseCookies;
    },
    stringifyCookie: function() {
        return _cookies.stringifyCookie;
    }
});
const _cookies = __turbopack_context__.r("[project]/Website/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [app-rsc] (ecmascript)"); //# sourceMappingURL=cookies.js.map
}),
"[project]/Website/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReflectAdapter", {
    enumerable: true,
    get: function() {
        return ReflectAdapter;
    }
});
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === 'function') {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
} //# sourceMappingURL=reflect.js.map
}),
"[project]/Website/node_modules/next/dist/server/web/spec-extension/adapters/request-cookies.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    MutableRequestCookiesAdapter: null,
    ReadonlyRequestCookiesError: null,
    RequestCookiesAdapter: null,
    appendMutableCookies: null,
    areCookiesMutableInCurrentPhase: null,
    createCookiesWithMutableAccessCheck: null,
    getModifiedCookieValues: null,
    responseCookiesToRequestCookies: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    MutableRequestCookiesAdapter: function() {
        return MutableRequestCookiesAdapter;
    },
    ReadonlyRequestCookiesError: function() {
        return ReadonlyRequestCookiesError;
    },
    RequestCookiesAdapter: function() {
        return RequestCookiesAdapter;
    },
    appendMutableCookies: function() {
        return appendMutableCookies;
    },
    areCookiesMutableInCurrentPhase: function() {
        return areCookiesMutableInCurrentPhase;
    },
    createCookiesWithMutableAccessCheck: function() {
        return createCookiesWithMutableAccessCheck;
    },
    getModifiedCookieValues: function() {
        return getModifiedCookieValues;
    },
    responseCookiesToRequestCookies: function() {
        return responseCookiesToRequestCookies;
    }
});
const _cookies = __turbopack_context__.r("[project]/Website/node_modules/next/dist/server/web/spec-extension/cookies.js [app-rsc] (ecmascript)");
const _reflect = __turbopack_context__.r("[project]/Website/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-rsc] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
class ReadonlyRequestCookiesError extends Error {
    constructor(){
        super('Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#options');
    }
    static callable() {
        throw new ReadonlyRequestCookiesError();
    }
}
class RequestCookiesAdapter {
    static seal(cookies) {
        return new Proxy(cookies, {
            get (target, prop, receiver) {
                switch(prop){
                    case 'clear':
                    case 'delete':
                    case 'set':
                        return ReadonlyRequestCookiesError.callable;
                    default:
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
    }
}
const SYMBOL_MODIFY_COOKIE_VALUES = Symbol.for('next.mutated.cookies');
function getModifiedCookieValues(cookies) {
    const modified = cookies[SYMBOL_MODIFY_COOKIE_VALUES];
    if (!modified || !Array.isArray(modified) || modified.length === 0) {
        return [];
    }
    return modified;
}
function appendMutableCookies(headers, mutableCookies) {
    const modifiedCookieValues = getModifiedCookieValues(mutableCookies);
    if (modifiedCookieValues.length === 0) {
        return false;
    }
    // Return a new response that extends the response with
    // the modified cookies as fallbacks. `res` cookies
    // will still take precedence.
    const resCookies = new _cookies.ResponseCookies(headers);
    const returnedCookies = resCookies.getAll();
    // Set the modified cookies as fallbacks.
    for (const cookie of modifiedCookieValues){
        resCookies.set(cookie);
    }
    // Set the original cookies as the final values.
    for (const cookie of returnedCookies){
        resCookies.set(cookie);
    }
    return true;
}
class MutableRequestCookiesAdapter {
    static wrap(cookies, onUpdateCookies) {
        const responseCookies = new _cookies.ResponseCookies(new Headers());
        for (const cookie of cookies.getAll()){
            responseCookies.set(cookie);
        }
        let modifiedValues = [];
        const modifiedCookies = new Set();
        const updateResponseCookies = ()=>{
            // TODO-APP: change method of getting workStore
            const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
            if (workStore) {
                workStore.pathWasRevalidated = true;
            }
            const allCookies = responseCookies.getAll();
            modifiedValues = allCookies.filter((c)=>modifiedCookies.has(c.name));
            if (onUpdateCookies) {
                const serializedCookies = [];
                for (const cookie of modifiedValues){
                    const tempCookies = new _cookies.ResponseCookies(new Headers());
                    tempCookies.set(cookie);
                    serializedCookies.push(tempCookies.toString());
                }
                onUpdateCookies(serializedCookies);
            }
        };
        const wrappedCookies = new Proxy(responseCookies, {
            get (target, prop, receiver) {
                switch(prop){
                    // A special symbol to get the modified cookie values
                    case SYMBOL_MODIFY_COOKIE_VALUES:
                        return modifiedValues;
                    // TODO: Throw error if trying to set a cookie after the response
                    // headers have been set.
                    case 'delete':
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === 'string' ? args[0] : args[0].name);
                            try {
                                target.delete(...args);
                                return wrappedCookies;
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    case 'set':
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === 'string' ? args[0] : args[0].name);
                            try {
                                target.set(...args);
                                return wrappedCookies;
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    default:
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
        return wrappedCookies;
    }
}
function createCookiesWithMutableAccessCheck(requestStore) {
    const wrappedCookies = new Proxy(requestStore.mutableCookies, {
        get (target, prop, receiver) {
            switch(prop){
                case 'delete':
                    return function(...args) {
                        ensureCookiesAreStillMutable(requestStore, 'cookies().delete');
                        target.delete(...args);
                        return wrappedCookies;
                    };
                case 'set':
                    return function(...args) {
                        ensureCookiesAreStillMutable(requestStore, 'cookies().set');
                        target.set(...args);
                        return wrappedCookies;
                    };
                default:
                    return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
        }
    });
    return wrappedCookies;
}
function areCookiesMutableInCurrentPhase(requestStore) {
    return requestStore.phase === 'action';
}
/** Ensure that cookies() starts throwing on mutation
 * if we changed phases and can no longer mutate.
 *
 * This can happen when going:
 *   'render' -> 'after'
 *   'action' -> 'render'
 * */ function ensureCookiesAreStillMutable(requestStore, _callingExpression) {
    if (!areCookiesMutableInCurrentPhase(requestStore)) {
        // TODO: maybe we can give a more precise error message based on callingExpression?
        throw new ReadonlyRequestCookiesError();
    }
}
function responseCookiesToRequestCookies(responseCookies) {
    const requestCookies = new _cookies.RequestCookies(new Headers());
    for (const cookie of responseCookies.getAll()){
        requestCookies.set(cookie);
    }
    return requestCookies;
} //# sourceMappingURL=request-cookies.js.map
}),
"[project]/Website/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createDedupedByCallsiteServerErrorLoggerDev", {
    enumerable: true,
    get: function() {
        return createDedupedByCallsiteServerErrorLoggerDev;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(__turbopack_context__.r("[project]/Website/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const errorRef = {
    current: null
};
// React.cache is currently only available in canary/experimental React channels.
const cache = typeof _react.cache === 'function' ? _react.cache : (fn)=>fn;
// When Cache Components is enabled, we record these as errors so that they
// are captured by the dev overlay as it's more critical to fix these
// when enabled.
const logErrorOrWarn = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : console.warn;
// We don't want to dedupe across requests.
// The developer might've just attempted to fix the warning so we should warn again if it still happens.
const flushCurrentErrorIfNew = cache((key)=>{
    try {
        logErrorOrWarn(errorRef.current);
    } finally{
        errorRef.current = null;
    }
});
function createDedupedByCallsiteServerErrorLoggerDev(getMessage) {
    return function logDedupedError(...args) {
        const message = getMessage(...args);
        if ("TURBOPACK compile-time truthy", 1) {
            var _stack;
            const callStackFrames = (_stack = new Error().stack) == null ? void 0 : _stack.split('\n');
            if (callStackFrames === undefined || callStackFrames.length < 4) {
                logErrorOrWarn(message);
            } else {
                // Error:
                //   logDedupedError
                //   asyncApiBeingAccessedSynchronously
                //   <userland callsite>
                // TODO: This breaks if sourcemaps with ignore lists are enabled.
                const key = callStackFrames[4];
                errorRef.current = message;
                flushCurrentErrorIfNew(key);
            }
        } else //TURBOPACK unreachable
        ;
    };
} //# sourceMappingURL=create-deduped-by-callsite-server-error-logger.js.map
}),
"[project]/Website/node_modules/next/dist/server/request/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    isRequestAPICallableInsideAfter: null,
    throwForSearchParamsAccessInUseCache: null,
    throwWithStaticGenerationBailoutErrorWithDynamicError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isRequestAPICallableInsideAfter: function() {
        return isRequestAPICallableInsideAfter;
    },
    throwForSearchParamsAccessInUseCache: function() {
        return throwForSearchParamsAccessInUseCache;
    },
    throwWithStaticGenerationBailoutErrorWithDynamicError: function() {
        return throwWithStaticGenerationBailoutErrorWithDynamicError;
    }
});
const _staticgenerationbailout = __turbopack_context__.r("[project]/Website/node_modules/next/dist/client/components/static-generation-bailout.js [app-rsc] (ecmascript)");
const _aftertaskasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)");
function throwWithStaticGenerationBailoutErrorWithDynamicError(route, expression) {
    throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${route} with \`dynamic = "error"\` couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
        value: "E543",
        enumerable: false,
        configurable: true
    });
}
function throwForSearchParamsAccessInUseCache(workStore, constructorOpt) {
    const error = Object.defineProperty(new Error(`Route ${workStore.route} used \`searchParams\` inside "use cache". Accessing dynamic request data inside a cache scope is not supported. If you need some search params inside a cached function await \`searchParams\` outside of the cached function and pass only the required search params as arguments to the cached function. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
        value: "E842",
        enumerable: false,
        configurable: true
    });
    Error.captureStackTrace(error, constructorOpt);
    workStore.invalidDynamicUsageError ??= error;
    throw error;
}
function isRequestAPICallableInsideAfter() {
    const afterTaskStore = _aftertaskasyncstorageexternal.afterTaskAsyncStorage.getStore();
    return (afterTaskStore == null ? void 0 : afterTaskStore.rootTaskSpawnPhase) === 'action';
} //# sourceMappingURL=utils.js.map
}),
"[project]/Website/node_modules/next/dist/server/request/cookies.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "cookies", {
    enumerable: true,
    get: function() {
        return cookies;
    }
});
const _requestcookies = __turbopack_context__.r("[project]/Website/node_modules/next/dist/server/web/spec-extension/adapters/request-cookies.js [app-rsc] (ecmascript)");
const _cookies = __turbopack_context__.r("[project]/Website/node_modules/next/dist/server/web/spec-extension/cookies.js [app-rsc] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _dynamicrendering = __turbopack_context__.r("[project]/Website/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)");
const _staticgenerationbailout = __turbopack_context__.r("[project]/Website/node_modules/next/dist/client/components/static-generation-bailout.js [app-rsc] (ecmascript)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/Website/node_modules/next/dist/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)");
const _creatededupedbycallsiteservererrorlogger = __turbopack_context__.r("[project]/Website/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-rsc] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/Website/node_modules/next/dist/server/request/utils.js [app-rsc] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/Website/node_modules/next/dist/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
const _stagedrendering = __turbopack_context__.r("[project]/Website/node_modules/next/dist/server/app-render/staged-rendering.js [app-rsc] (ecmascript)");
function cookies() {
    const callingExpression = 'cookies';
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workStore) {
        if (workUnitStore && workUnitStore.phase === 'after' && !(0, _utils.isRequestAPICallableInsideAfter)()) {
            throw Object.defineProperty(new Error(`Route ${workStore.route} used \`cookies()\` inside \`after()\`. This is not supported. If you need this data inside an \`after()\` callback, use \`cookies()\` outside of the callback. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
                value: "E843",
                enumerable: false,
                configurable: true
            });
        }
        if (workStore.forceStatic) {
            // When using forceStatic we override all other logic and always just return an empty
            // cookies object without tracking
            const underlyingCookies = createEmptyCookies();
            return makeUntrackedCookies(underlyingCookies);
        }
        if (workStore.dynamicShouldError) {
            throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`cookies()\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
                value: "E849",
                enumerable: false,
                configurable: true
            });
        }
        if (workUnitStore) {
            switch(workUnitStore.type){
                case 'cache':
                    const error = Object.defineProperty(new Error(`Route ${workStore.route} used \`cookies()\` inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use \`cookies()\` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
                        value: "E831",
                        enumerable: false,
                        configurable: true
                    });
                    Error.captureStackTrace(error, cookies);
                    workStore.invalidDynamicUsageError ??= error;
                    throw error;
                case 'unstable-cache':
                    throw Object.defineProperty(new Error(`Route ${workStore.route} used \`cookies()\` inside a function cached with \`unstable_cache()\`. Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use \`cookies()\` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
                        value: "E846",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender':
                    return makeHangingCookies(workStore, workUnitStore);
                case 'prerender-client':
                    const exportName = '`cookies`';
                    throw Object.defineProperty(new _invarianterror.InvariantError(`${exportName} must not be used within a Client Component. Next.js should be preventing ${exportName} from being included in Client Components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                        value: "E832",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender-ppr':
                    // We need track dynamic access here eagerly to keep continuity with
                    // how cookies has worked in PPR without cacheComponents.
                    return (0, _dynamicrendering.postponeWithTracking)(workStore.route, callingExpression, workUnitStore.dynamicTracking);
                case 'prerender-legacy':
                    // We track dynamic access here so we don't need to wrap the cookies
                    // in individual property access tracking.
                    return (0, _dynamicrendering.throwToInterruptStaticGeneration)(callingExpression, workStore, workUnitStore);
                case 'prerender-runtime':
                    return (0, _dynamicrendering.delayUntilRuntimeStage)(workUnitStore, makeUntrackedCookies(workUnitStore.cookies));
                case 'private-cache':
                    // Private caches are delayed until the runtime stage in use-cache-wrapper,
                    // so we don't need an additional delay here.
                    return makeUntrackedCookies(workUnitStore.cookies);
                case 'request':
                    (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workUnitStore);
                    let underlyingCookies;
                    if ((0, _requestcookies.areCookiesMutableInCurrentPhase)(workUnitStore)) {
                        // We can't conditionally return different types here based on the context.
                        // To avoid confusion, we always return the readonly type here.
                        underlyingCookies = workUnitStore.userspaceMutableCookies;
                    } else {
                        underlyingCookies = workUnitStore.cookies;
                    }
                    if ("TURBOPACK compile-time truthy", 1) {
                        // Semantically we only need the dev tracking when running in `next dev`
                        // but since you would never use next dev with production NODE_ENV we use this
                        // as a proxy so we can statically exclude this code from production builds.
                        return makeUntrackedCookiesWithDevWarnings(workUnitStore, underlyingCookies, workStore == null ? void 0 : workStore.route);
                    } else //TURBOPACK unreachable
                    ;
                default:
                    workUnitStore;
            }
        }
    }
    // If we end up here, there was no work store or work unit store present.
    (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(callingExpression);
}
function createEmptyCookies() {
    return _requestcookies.RequestCookiesAdapter.seal(new _cookies.RequestCookies(new Headers({})));
}
const CachedCookies = new WeakMap();
function makeHangingCookies(workStore, prerenderStore) {
    const cachedPromise = CachedCookies.get(prerenderStore);
    if (cachedPromise) {
        return cachedPromise;
    }
    const promise = (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, workStore.route, '`cookies()`');
    CachedCookies.set(prerenderStore, promise);
    return promise;
}
function makeUntrackedCookies(underlyingCookies) {
    const cachedCookies = CachedCookies.get(underlyingCookies);
    if (cachedCookies) {
        return cachedCookies;
    }
    const promise = Promise.resolve(underlyingCookies);
    CachedCookies.set(underlyingCookies, promise);
    return promise;
}
function makeUntrackedCookiesWithDevWarnings(requestStore, underlyingCookies, route) {
    if (requestStore.asyncApiPromises) {
        let promise;
        if (underlyingCookies === requestStore.mutableCookies) {
            promise = requestStore.asyncApiPromises.mutableCookies;
        } else if (underlyingCookies === requestStore.cookies) {
            promise = requestStore.asyncApiPromises.cookies;
        } else {
            throw Object.defineProperty(new _invarianterror.InvariantError('Received an underlying cookies object that does not match either `cookies` or `mutableCookies`'), "__NEXT_ERROR_CODE", {
                value: "E890",
                enumerable: false,
                configurable: true
            });
        }
        return instrumentCookiesPromiseWithDevWarnings(promise, route);
    }
    const cachedCookies = CachedCookies.get(underlyingCookies);
    if (cachedCookies) {
        return cachedCookies;
    }
    const promise = (0, _dynamicrenderingutils.makeDevtoolsIOAwarePromise)(underlyingCookies, requestStore, _stagedrendering.RenderStage.Runtime);
    const proxiedPromise = instrumentCookiesPromiseWithDevWarnings(promise, route);
    CachedCookies.set(underlyingCookies, proxiedPromise);
    return proxiedPromise;
}
const warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createCookiesAccessError);
function instrumentCookiesPromiseWithDevWarnings(promise, route) {
    Object.defineProperties(promise, {
        [Symbol.iterator]: replaceableWarningDescriptorForSymbolIterator(promise, route),
        size: replaceableWarningDescriptor(promise, 'size', route),
        get: replaceableWarningDescriptor(promise, 'get', route),
        getAll: replaceableWarningDescriptor(promise, 'getAll', route),
        has: replaceableWarningDescriptor(promise, 'has', route),
        set: replaceableWarningDescriptor(promise, 'set', route),
        delete: replaceableWarningDescriptor(promise, 'delete', route),
        clear: replaceableWarningDescriptor(promise, 'clear', route),
        toString: replaceableWarningDescriptor(promise, 'toString', route)
    });
    return promise;
}
function replaceableWarningDescriptor(target, prop, route) {
    return {
        enumerable: false,
        get () {
            warnForSyncAccess(route, `\`cookies().${prop}\``);
            return undefined;
        },
        set (value) {
            Object.defineProperty(target, prop, {
                value,
                writable: true,
                configurable: true
            });
        },
        configurable: true
    };
}
function replaceableWarningDescriptorForSymbolIterator(target, route) {
    return {
        enumerable: false,
        get () {
            warnForSyncAccess(route, '`...cookies()` or similar iteration');
            return undefined;
        },
        set (value) {
            Object.defineProperty(target, Symbol.iterator, {
                value,
                writable: true,
                enumerable: true,
                configurable: true
            });
        },
        configurable: true
    };
}
function createCookiesAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`cookies()\` returns a Promise and must be unwrapped with \`await\` or \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E830",
        enumerable: false,
        configurable: true
    });
} //# sourceMappingURL=cookies.js.map
}),
"[project]/Website/node_modules/next/dist/server/web/spec-extension/adapters/headers.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HeadersAdapter: null,
    ReadonlyHeadersError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HeadersAdapter: function() {
        return HeadersAdapter;
    },
    ReadonlyHeadersError: function() {
        return ReadonlyHeadersError;
    }
});
const _reflect = __turbopack_context__.r("[project]/Website/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-rsc] (ecmascript)");
class ReadonlyHeadersError extends Error {
    constructor(){
        super('Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers');
    }
    static callable() {
        throw new ReadonlyHeadersError();
    }
}
class HeadersAdapter extends Headers {
    constructor(headers){
        // We've already overridden the methods that would be called, so we're just
        // calling the super constructor to ensure that the instanceof check works.
        super();
        this.headers = new Proxy(headers, {
            get (target, prop, receiver) {
                // Because this is just an object, we expect that all "get" operations
                // are for properties. If it's a "get" for a symbol, we'll just return
                // the symbol.
                if (typeof prop === 'symbol') {
                    return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return undefined.
                if (typeof original === 'undefined') return;
                // If the original casing exists, return the value.
                return _reflect.ReflectAdapter.get(target, original, receiver);
            },
            set (target, prop, value, receiver) {
                if (typeof prop === 'symbol') {
                    return _reflect.ReflectAdapter.set(target, prop, value, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, use the prop as the key.
                return _reflect.ReflectAdapter.set(target, original ?? prop, value, receiver);
            },
            has (target, prop) {
                if (typeof prop === 'symbol') return _reflect.ReflectAdapter.has(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return false.
                if (typeof original === 'undefined') return false;
                // If the original casing exists, return true.
                return _reflect.ReflectAdapter.has(target, original);
            },
            deleteProperty (target, prop) {
                if (typeof prop === 'symbol') return _reflect.ReflectAdapter.deleteProperty(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return true.
                if (typeof original === 'undefined') return true;
                // If the original casing exists, delete the property.
                return _reflect.ReflectAdapter.deleteProperty(target, original);
            }
        });
    }
    /**
   * Seals a Headers instance to prevent modification by throwing an error when
   * any mutating method is called.
   */ static seal(headers) {
        return new Proxy(headers, {
            get (target, prop, receiver) {
                switch(prop){
                    case 'append':
                    case 'delete':
                    case 'set':
                        return ReadonlyHeadersError.callable;
                    default:
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
    }
    /**
   * Merges a header value into a string. This stores multiple values as an
   * array, so we need to merge them into a string.
   *
   * @param value a header value
   * @returns a merged header value (a string)
   */ merge(value) {
        if (Array.isArray(value)) return value.join(', ');
        return value;
    }
    /**
   * Creates a Headers instance from a plain object or a Headers instance.
   *
   * @param headers a plain object or a Headers instance
   * @returns a headers instance
   */ static from(headers) {
        if (headers instanceof Headers) return headers;
        return new HeadersAdapter(headers);
    }
    append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === 'string') {
            this.headers[name] = [
                existing,
                value
            ];
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            this.headers[name] = value;
        }
    }
    delete(name) {
        delete this.headers[name];
    }
    get(name) {
        const value = this.headers[name];
        if (typeof value !== 'undefined') return this.merge(value);
        return null;
    }
    has(name) {
        return typeof this.headers[name] !== 'undefined';
    }
    set(name, value) {
        this.headers[name] = value;
    }
    forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()){
            callbackfn.call(thisArg, value, name, this);
        }
    }
    *entries() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(name);
            yield [
                name,
                value
            ];
        }
    }
    *keys() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            yield name;
        }
    }
    *values() {
        for (const key of Object.keys(this.headers)){
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(key);
            yield value;
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
} //# sourceMappingURL=headers.js.map
}),
"[project]/Website/node_modules/next/dist/server/request/headers.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "headers", {
    enumerable: true,
    get: function() {
        return headers;
    }
});
const _headers = __turbopack_context__.r("[project]/Website/node_modules/next/dist/server/web/spec-extension/adapters/headers.js [app-rsc] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _dynamicrendering = __turbopack_context__.r("[project]/Website/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)");
const _staticgenerationbailout = __turbopack_context__.r("[project]/Website/node_modules/next/dist/client/components/static-generation-bailout.js [app-rsc] (ecmascript)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/Website/node_modules/next/dist/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)");
const _creatededupedbycallsiteservererrorlogger = __turbopack_context__.r("[project]/Website/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-rsc] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/Website/node_modules/next/dist/server/request/utils.js [app-rsc] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/Website/node_modules/next/dist/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
const _stagedrendering = __turbopack_context__.r("[project]/Website/node_modules/next/dist/server/app-render/staged-rendering.js [app-rsc] (ecmascript)");
function headers() {
    const callingExpression = 'headers';
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workStore) {
        if (workUnitStore && workUnitStore.phase === 'after' && !(0, _utils.isRequestAPICallableInsideAfter)()) {
            throw Object.defineProperty(new Error(`Route ${workStore.route} used \`headers()\` inside \`after()\`. This is not supported. If you need this data inside an \`after()\` callback, use \`headers()\` outside of the callback. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
                value: "E839",
                enumerable: false,
                configurable: true
            });
        }
        if (workStore.forceStatic) {
            // When using forceStatic we override all other logic and always just return an empty
            // headers object without tracking
            const underlyingHeaders = _headers.HeadersAdapter.seal(new Headers({}));
            return makeUntrackedHeaders(underlyingHeaders);
        }
        if (workUnitStore) {
            switch(workUnitStore.type){
                case 'cache':
                    {
                        const error = Object.defineProperty(new Error(`Route ${workStore.route} used \`headers()\` inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use \`headers()\` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
                            value: "E833",
                            enumerable: false,
                            configurable: true
                        });
                        Error.captureStackTrace(error, headers);
                        workStore.invalidDynamicUsageError ??= error;
                        throw error;
                    }
                case 'unstable-cache':
                    throw Object.defineProperty(new Error(`Route ${workStore.route} used \`headers()\` inside a function cached with \`unstable_cache()\`. Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use \`headers()\` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
                        value: "E838",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender':
                case 'prerender-client':
                case 'private-cache':
                case 'prerender-runtime':
                case 'prerender-ppr':
                case 'prerender-legacy':
                case 'request':
                    break;
                default:
                    workUnitStore;
            }
        }
        if (workStore.dynamicShouldError) {
            throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`headers()\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
                value: "E828",
                enumerable: false,
                configurable: true
            });
        }
        if (workUnitStore) {
            switch(workUnitStore.type){
                case 'prerender':
                    return makeHangingHeaders(workStore, workUnitStore);
                case 'prerender-client':
                    const exportName = '`headers`';
                    throw Object.defineProperty(new _invarianterror.InvariantError(`${exportName} must not be used within a client component. Next.js should be preventing ${exportName} from being included in client components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                        value: "E693",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender-ppr':
                    // PPR Prerender (no cacheComponents)
                    // We are prerendering with PPR. We need track dynamic access here eagerly
                    // to keep continuity with how headers has worked in PPR without cacheComponents.
                    // TODO consider switching the semantic to throw on property access instead
                    return (0, _dynamicrendering.postponeWithTracking)(workStore.route, callingExpression, workUnitStore.dynamicTracking);
                case 'prerender-legacy':
                    // Legacy Prerender
                    // We are in a legacy static generation mode while prerendering
                    // We track dynamic access here so we don't need to wrap the headers in
                    // individual property access tracking.
                    return (0, _dynamicrendering.throwToInterruptStaticGeneration)(callingExpression, workStore, workUnitStore);
                case 'prerender-runtime':
                    return (0, _dynamicrendering.delayUntilRuntimeStage)(workUnitStore, makeUntrackedHeaders(workUnitStore.headers));
                case 'private-cache':
                    // Private caches are delayed until the runtime stage in use-cache-wrapper,
                    // so we don't need an additional delay here.
                    return makeUntrackedHeaders(workUnitStore.headers);
                case 'request':
                    (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workUnitStore);
                    if ("TURBOPACK compile-time truthy", 1) {
                        // Semantically we only need the dev tracking when running in `next dev`
                        // but since you would never use next dev with production NODE_ENV we use this
                        // as a proxy so we can statically exclude this code from production builds.
                        return makeUntrackedHeadersWithDevWarnings(workUnitStore.headers, workStore == null ? void 0 : workStore.route, workUnitStore);
                    } else //TURBOPACK unreachable
                    ;
                    //TURBOPACK unreachable
                    ;
                default:
                    workUnitStore;
            }
        }
    }
    // If we end up here, there was no work store or work unit store present.
    (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(callingExpression);
}
const CachedHeaders = new WeakMap();
function makeHangingHeaders(workStore, prerenderStore) {
    const cachedHeaders = CachedHeaders.get(prerenderStore);
    if (cachedHeaders) {
        return cachedHeaders;
    }
    const promise = (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, workStore.route, '`headers()`');
    CachedHeaders.set(prerenderStore, promise);
    return promise;
}
function makeUntrackedHeaders(underlyingHeaders) {
    const cachedHeaders = CachedHeaders.get(underlyingHeaders);
    if (cachedHeaders) {
        return cachedHeaders;
    }
    const promise = Promise.resolve(underlyingHeaders);
    CachedHeaders.set(underlyingHeaders, promise);
    return promise;
}
function makeUntrackedHeadersWithDevWarnings(underlyingHeaders, route, requestStore) {
    if (requestStore.asyncApiPromises) {
        const promise = requestStore.asyncApiPromises.headers;
        return instrumentHeadersPromiseWithDevWarnings(promise, route);
    }
    const cachedHeaders = CachedHeaders.get(underlyingHeaders);
    if (cachedHeaders) {
        return cachedHeaders;
    }
    const promise = (0, _dynamicrenderingutils.makeDevtoolsIOAwarePromise)(underlyingHeaders, requestStore, _stagedrendering.RenderStage.Runtime);
    const proxiedPromise = instrumentHeadersPromiseWithDevWarnings(promise, route);
    CachedHeaders.set(underlyingHeaders, proxiedPromise);
    return proxiedPromise;
}
const warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createHeadersAccessError);
function instrumentHeadersPromiseWithDevWarnings(promise, route) {
    Object.defineProperties(promise, {
        [Symbol.iterator]: replaceableWarningDescriptorForSymbolIterator(promise, route),
        append: replaceableWarningDescriptor(promise, 'append', route),
        delete: replaceableWarningDescriptor(promise, 'delete', route),
        get: replaceableWarningDescriptor(promise, 'get', route),
        has: replaceableWarningDescriptor(promise, 'has', route),
        set: replaceableWarningDescriptor(promise, 'set', route),
        getSetCookie: replaceableWarningDescriptor(promise, 'getSetCookie', route),
        forEach: replaceableWarningDescriptor(promise, 'forEach', route),
        keys: replaceableWarningDescriptor(promise, 'keys', route),
        values: replaceableWarningDescriptor(promise, 'values', route),
        entries: replaceableWarningDescriptor(promise, 'entries', route)
    });
    return promise;
}
function replaceableWarningDescriptor(target, prop, route) {
    return {
        enumerable: false,
        get () {
            warnForSyncAccess(route, `\`headers().${prop}\``);
            return undefined;
        },
        set (value) {
            Object.defineProperty(target, prop, {
                value,
                writable: true,
                configurable: true
            });
        },
        configurable: true
    };
}
function replaceableWarningDescriptorForSymbolIterator(target, route) {
    return {
        enumerable: false,
        get () {
            warnForSyncAccess(route, '`...headers()` or similar iteration');
            return undefined;
        },
        set (value) {
            Object.defineProperty(target, Symbol.iterator, {
                value,
                writable: true,
                enumerable: true,
                configurable: true
            });
        },
        configurable: true
    };
}
function createHeadersAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`headers()\` returns a Promise and must be unwrapped with \`await\` or \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E836",
        enumerable: false,
        configurable: true
    });
} //# sourceMappingURL=headers.js.map
}),
"[project]/Website/node_modules/next/dist/server/request/draft-mode.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "draftMode", {
    enumerable: true,
    get: function() {
        return draftMode;
    }
});
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _dynamicrendering = __turbopack_context__.r("[project]/Website/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)");
const _creatededupedbycallsiteservererrorlogger = __turbopack_context__.r("[project]/Website/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-rsc] (ecmascript)");
const _staticgenerationbailout = __turbopack_context__.r("[project]/Website/node_modules/next/dist/client/components/static-generation-bailout.js [app-rsc] (ecmascript)");
const _hooksservercontext = __turbopack_context__.r("[project]/Website/node_modules/next/dist/client/components/hooks-server-context.js [app-rsc] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/Website/node_modules/next/dist/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
const _reflect = __turbopack_context__.r("[project]/Website/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-rsc] (ecmascript)");
function draftMode() {
    const callingExpression = 'draftMode';
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (!workStore || !workUnitStore) {
        (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(callingExpression);
    }
    switch(workUnitStore.type){
        case 'prerender-runtime':
            // TODO(runtime-ppr): does it make sense to delay this? normally it's always microtasky
            return (0, _dynamicrendering.delayUntilRuntimeStage)(workUnitStore, createOrGetCachedDraftMode(workUnitStore.draftMode, workStore));
        case 'request':
            return createOrGetCachedDraftMode(workUnitStore.draftMode, workStore);
        case 'cache':
        case 'private-cache':
        case 'unstable-cache':
            // Inside of `"use cache"` or `unstable_cache`, draft mode is available if
            // the outmost work unit store is a request store (or a runtime prerender),
            // and if draft mode is enabled.
            const draftModeProvider = (0, _workunitasyncstorageexternal.getDraftModeProviderForCacheScope)(workStore, workUnitStore);
            if (draftModeProvider) {
                return createOrGetCachedDraftMode(draftModeProvider, workStore);
            }
        // Otherwise, we fall through to providing an empty draft mode.
        // eslint-disable-next-line no-fallthrough
        case 'prerender':
        case 'prerender-client':
        case 'prerender-ppr':
        case 'prerender-legacy':
            // Return empty draft mode
            return createOrGetCachedDraftMode(null, workStore);
        default:
            return workUnitStore;
    }
}
function createOrGetCachedDraftMode(draftModeProvider, workStore) {
    const cacheKey = draftModeProvider ?? NullDraftMode;
    const cachedDraftMode = CachedDraftModes.get(cacheKey);
    if (cachedDraftMode) {
        return cachedDraftMode;
    }
    if (("TURBOPACK compile-time value", "development") === 'development' && !(workStore == null ? void 0 : workStore.isPrefetchRequest)) {
        const route = workStore == null ? void 0 : workStore.route;
        return createDraftModeWithDevWarnings(draftModeProvider, route);
    } else {
        return Promise.resolve(new DraftMode(draftModeProvider));
    }
}
const NullDraftMode = {};
const CachedDraftModes = new WeakMap();
function createDraftModeWithDevWarnings(underlyingProvider, route) {
    const instance = new DraftMode(underlyingProvider);
    const promise = Promise.resolve(instance);
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            switch(prop){
                case 'isEnabled':
                    warnForSyncAccess(route, `\`draftMode().${prop}\``);
                    break;
                case 'enable':
                case 'disable':
                    {
                        warnForSyncAccess(route, `\`draftMode().${prop}()\``);
                        break;
                    }
                default:
                    {
                    // We only warn for well-defined properties of the draftMode object.
                    }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        }
    });
    return proxiedPromise;
}
class DraftMode {
    constructor(provider){
        this._provider = provider;
    }
    get isEnabled() {
        if (this._provider !== null) {
            return this._provider.isEnabled;
        }
        return false;
    }
    enable() {
        // We have a store we want to track dynamic data access to ensure we
        // don't statically generate routes that manipulate draft mode.
        trackDynamicDraftMode('draftMode().enable()', this.enable);
        if (this._provider !== null) {
            this._provider.enable();
        }
    }
    disable() {
        trackDynamicDraftMode('draftMode().disable()', this.disable);
        if (this._provider !== null) {
            this._provider.disable();
        }
    }
}
const warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createDraftModeAccessError);
function createDraftModeAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`draftMode()\` returns a Promise and must be unwrapped with \`await\` or \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E835",
        enumerable: false,
        configurable: true
    });
}
function trackDynamicDraftMode(expression, constructorOpt) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workStore) {
        // We have a store we want to track dynamic data access to ensure we
        // don't statically generate routes that manipulate draft mode.
        if ((workUnitStore == null ? void 0 : workUnitStore.phase) === 'after') {
            throw Object.defineProperty(new Error(`Route ${workStore.route} used "${expression}" inside \`after()\`. The enabled status of \`draftMode()\` can be read inside \`after()\` but you cannot enable or disable \`draftMode()\`. See more info here: https://nextjs.org/docs/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
                value: "E845",
                enumerable: false,
                configurable: true
            });
        }
        if (workStore.dynamicShouldError) {
            throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
                value: "E553",
                enumerable: false,
                configurable: true
            });
        }
        if (workUnitStore) {
            switch(workUnitStore.type){
                case 'cache':
                case 'private-cache':
                    {
                        const error = Object.defineProperty(new Error(`Route ${workStore.route} used "${expression}" inside "use cache". The enabled status of \`draftMode()\` can be read in caches but you must not enable or disable \`draftMode()\` inside a cache. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
                            value: "E829",
                            enumerable: false,
                            configurable: true
                        });
                        Error.captureStackTrace(error, constructorOpt);
                        workStore.invalidDynamicUsageError ??= error;
                        throw error;
                    }
                case 'unstable-cache':
                    throw Object.defineProperty(new Error(`Route ${workStore.route} used "${expression}" inside a function cached with \`unstable_cache()\`. The enabled status of \`draftMode()\` can be read in caches but you must not enable or disable \`draftMode()\` inside a cache. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
                        value: "E844",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender':
                case 'prerender-runtime':
                    {
                        const error = Object.defineProperty(new Error(`Route ${workStore.route} used ${expression} without first calling \`await connection()\`. See more info here: https://nextjs.org/docs/messages/next-prerender-sync-headers`), "__NEXT_ERROR_CODE", {
                            value: "E126",
                            enumerable: false,
                            configurable: true
                        });
                        return (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(workStore.route, expression, error, workUnitStore);
                    }
                case 'prerender-client':
                    const exportName = '`draftMode`';
                    throw Object.defineProperty(new _invarianterror.InvariantError(`${exportName} must not be used within a Client Component. Next.js should be preventing ${exportName} from being included in Client Components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                        value: "E832",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender-ppr':
                    return (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, workUnitStore.dynamicTracking);
                case 'prerender-legacy':
                    workUnitStore.revalidate = 0;
                    const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${workStore.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
                        value: "E558",
                        enumerable: false,
                        configurable: true
                    });
                    workStore.dynamicUsageDescription = expression;
                    workStore.dynamicUsageStack = err.stack;
                    throw err;
                case 'request':
                    (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workUnitStore);
                    break;
                default:
                    workUnitStore;
            }
        }
    }
} //# sourceMappingURL=draft-mode.js.map
}),
"[project]/Website/node_modules/next/headers.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports.cookies = __turbopack_context__.r("[project]/Website/node_modules/next/dist/server/request/cookies.js [app-rsc] (ecmascript)").cookies;
module.exports.headers = __turbopack_context__.r("[project]/Website/node_modules/next/dist/server/request/headers.js [app-rsc] (ecmascript)").headers;
module.exports.draftMode = __turbopack_context__.r("[project]/Website/node_modules/next/dist/server/request/draft-mode.js [app-rsc] (ecmascript)").draftMode;
}),
"[project]/Website/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/Website/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/Website/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/Website/node_modules/next/dist/client/app-dir/link.js <module evaluation>"));
}),
"[project]/Website/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy)", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/Website/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/Website/node_modules/next/dist/client/app-dir/link.js"));
}),
"[project]/Website/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Website/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Website/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Website/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
    default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return _link.useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/Website/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-rsc] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Website/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
const _link = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Website/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)"));
function LinkComponent(props) {
    const isLegacyBehavior = props.legacyBehavior;
    const childIsHostComponent = typeof props.children === 'string' || typeof props.children === 'number' || typeof props.children?.type === 'string';
    const childIsClientComponent = props.children?.type?.$$typeof === Symbol.for('react.client.reference');
    if (isLegacyBehavior && !childIsHostComponent && !childIsClientComponent) {
        if (props.children?.type?.$$typeof === Symbol.for('react.lazy')) {
            console.error(`Using a Lazy Component as a direct child of \`<Link legacyBehavior>\` from a Server Component is not supported. If you need legacyBehavior, wrap your Lazy Component in a Client Component that renders the Link's \`<a>\` tag.`);
        } else {
            console.error(`Using a Server Component as a direct child of \`<Link legacyBehavior>\` is not supported. If you need legacyBehavior, wrap your Server Component in a Client Component that renders the Link's \`<a>\` tag.`);
        }
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_link.default, {
        ...props
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.react-server.js.map
}),
"[project]/Website/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Website/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Website/node_modules/lucide-react/dist/esm/Icon.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-rsc] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/Website/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/lucide-react/dist/esm/Icon.js [app-rsc] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toKebabCase"])(iconName)}`, className),
            ...props
        }));
    Component.displayName = `${iconName}`;
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/Website/node_modules/lucide-react/dist/esm/icons/log-out.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>LogOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const LogOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("LogOut", [
    [
        "path",
        {
            d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
            key: "1uf3rs"
        }
    ],
    [
        "polyline",
        {
            points: "16 17 21 12 16 7",
            key: "1gabdz"
        }
    ],
    [
        "line",
        {
            x1: "21",
            x2: "9",
            y1: "12",
            y2: "12",
            key: "1uyos4"
        }
    ]
]);
;
 //# sourceMappingURL=log-out.js.map
}),
"[project]/Website/node_modules/lucide-react/dist/esm/icons/log-out.js [app-rsc] (ecmascript) <export default as LogOut>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/lucide-react/dist/esm/icons/log-out.js [app-rsc] (ecmascript)");
}),
"[project]/Website/node_modules/lucide-react/dist/esm/icons/leaf.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const Leaf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("Leaf", [
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
"[project]/Website/node_modules/lucide-react/dist/esm/icons/leaf.js [app-rsc] (ecmascript) <export default as Leaf>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Leaf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/lucide-react/dist/esm/icons/leaf.js [app-rsc] (ecmascript)");
}),
"[project]/Website/node_modules/lucide-react/dist/esm/icons/trophy.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Trophy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const Trophy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("Trophy", [
    [
        "path",
        {
            d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6",
            key: "17hqa7"
        }
    ],
    [
        "path",
        {
            d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18",
            key: "lmptdp"
        }
    ],
    [
        "path",
        {
            d: "M4 22h16",
            key: "57wxv0"
        }
    ],
    [
        "path",
        {
            d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
            key: "1nw9bq"
        }
    ],
    [
        "path",
        {
            d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
            key: "1np0yb"
        }
    ],
    [
        "path",
        {
            d: "M18 2H6v7a6 6 0 0 0 12 0V2Z",
            key: "u46fv3"
        }
    ]
]);
;
 //# sourceMappingURL=trophy.js.map
}),
"[project]/Website/node_modules/lucide-react/dist/esm/icons/trophy.js [app-rsc] (ecmascript) <export default as Trophy>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trophy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/lucide-react/dist/esm/icons/trophy.js [app-rsc] (ecmascript)");
}),
"[project]/Website/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>TrendingUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const TrendingUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("TrendingUp", [
    [
        "polyline",
        {
            points: "22 7 13.5 15.5 8.5 10.5 2 17",
            key: "126l90"
        }
    ],
    [
        "polyline",
        {
            points: "16 7 22 7 22 13",
            key: "kwv8wd"
        }
    ]
]);
;
 //# sourceMappingURL=trending-up.js.map
}),
"[project]/Website/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-rsc] (ecmascript) <export default as TrendingUp>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrendingUp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-rsc] (ecmascript)");
}),
"[project]/Website/node_modules/csv-parse/lib/api/CsvError.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CsvError",
    ()=>CsvError
]);
class CsvError extends Error {
    constructor(code, message, options, ...contexts){
        if (Array.isArray(message)) message = message.join(" ").trim();
        super(message);
        if (Error.captureStackTrace !== undefined) {
            Error.captureStackTrace(this, CsvError);
        }
        this.code = code;
        for (const context of contexts){
            for(const key in context){
                const value = context[key];
                this[key] = Buffer.isBuffer(value) ? value.toString(options.encoding) : value == null ? value : JSON.parse(JSON.stringify(value));
            }
        }
    }
}
;
}),
"[project]/Website/node_modules/csv-parse/lib/utils/is_object.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "is_object",
    ()=>is_object
]);
const is_object = function(obj) {
    return typeof obj === "object" && obj !== null && !Array.isArray(obj);
};
;
}),
"[project]/Website/node_modules/csv-parse/lib/api/normalize_columns_array.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalize_columns_array",
    ()=>normalize_columns_array
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/csv-parse/lib/api/CsvError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$utils$2f$is_object$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/csv-parse/lib/utils/is_object.js [app-rsc] (ecmascript)");
;
;
const normalize_columns_array = function(columns) {
    const normalizedColumns = [];
    for(let i = 0, l = columns.length; i < l; i++){
        const column = columns[i];
        if (column === undefined || column === null || column === false) {
            normalizedColumns[i] = {
                disabled: true
            };
        } else if (typeof column === "string" || typeof column === "number") {
            normalizedColumns[i] = {
                name: `${column}`
            };
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$utils$2f$is_object$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["is_object"])(column)) {
            if (typeof column.name !== "string") {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CsvError"]("CSV_OPTION_COLUMNS_MISSING_NAME", [
                    "Option columns missing name:",
                    `property "name" is required at position ${i}`,
                    "when column is an object literal"
                ]);
            }
            normalizedColumns[i] = column;
        } else {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_COLUMN_DEFINITION", [
                "Invalid column definition:",
                "expect a string or a literal object,",
                `got ${JSON.stringify(column)} at position ${i}`
            ]);
        }
    }
    return normalizedColumns;
};
;
}),
"[project]/Website/node_modules/csv-parse/lib/utils/ResizeableBuffer.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
class ResizeableBuffer {
    constructor(size = 100){
        this.size = size;
        this.length = 0;
        this.buf = Buffer.allocUnsafe(size);
    }
    prepend(val) {
        if (Buffer.isBuffer(val)) {
            const length = this.length + val.length;
            if (length >= this.size) {
                this.resize();
                if (length >= this.size) {
                    throw Error("INVALID_BUFFER_STATE");
                }
            }
            const buf = this.buf;
            this.buf = Buffer.allocUnsafe(this.size);
            val.copy(this.buf, 0);
            buf.copy(this.buf, val.length);
            this.length += val.length;
        } else {
            const length = this.length++;
            if (length === this.size) {
                this.resize();
            }
            const buf = this.clone();
            this.buf[0] = val;
            buf.copy(this.buf, 1, 0, length);
        }
    }
    append(val) {
        const length = this.length++;
        if (length === this.size) {
            this.resize();
        }
        this.buf[length] = val;
    }
    clone() {
        return Buffer.from(this.buf.slice(0, this.length));
    }
    resize() {
        const length = this.length;
        this.size = this.size * 2;
        const buf = Buffer.allocUnsafe(this.size);
        this.buf.copy(buf, 0, 0, length);
        this.buf = buf;
    }
    toString(encoding) {
        if (encoding) {
            return this.buf.slice(0, this.length).toString(encoding);
        } else {
            return Uint8Array.prototype.slice.call(this.buf.slice(0, this.length));
        }
    }
    toJSON() {
        return this.toString("utf8");
    }
    reset() {
        this.length = 0;
    }
}
const __TURBOPACK__default__export__ = ResizeableBuffer;
}),
"[project]/Website/node_modules/csv-parse/lib/api/init_state.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "init_state",
    ()=>init_state
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$utils$2f$ResizeableBuffer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/csv-parse/lib/utils/ResizeableBuffer.js [app-rsc] (ecmascript)");
;
// white space characters
// https://en.wikipedia.org/wiki/Whitespace_character
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes#Types
// \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff
const np = 12;
const cr = 13; // `\r`, carriage return, 0x0D in hexadécimal, 13 in decimal
const nl = 10; // `\n`, newline, 0x0A in hexadecimal, 10 in decimal
const space = 32;
const tab = 9;
const init_state = function(options) {
    return {
        bomSkipped: false,
        bufBytesStart: 0,
        castField: options.cast_function,
        commenting: false,
        // Current error encountered by a record
        error: undefined,
        enabled: options.from_line === 1,
        escaping: false,
        escapeIsQuote: Buffer.isBuffer(options.escape) && Buffer.isBuffer(options.quote) && Buffer.compare(options.escape, options.quote) === 0,
        // columns can be `false`, `true`, `Array`
        expectedRecordLength: Array.isArray(options.columns) ? options.columns.length : undefined,
        field: new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$utils$2f$ResizeableBuffer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](20),
        firstLineToHeaders: options.cast_first_line_to_header,
        needMoreDataSize: Math.max(// Skip if the remaining buffer smaller than comment
        options.comment !== null ? options.comment.length : 0, // Skip if the remaining buffer can be delimiter
        ...options.delimiter.map((delimiter)=>delimiter.length), // Skip if the remaining buffer can be escape sequence
        options.quote !== null ? options.quote.length : 0),
        previousBuf: undefined,
        quoting: false,
        stop: false,
        rawBuffer: new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$utils$2f$ResizeableBuffer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](100),
        record: [],
        recordHasError: false,
        record_length: 0,
        recordDelimiterMaxLength: options.record_delimiter.length === 0 ? 0 : Math.max(...options.record_delimiter.map((v)=>v.length)),
        trimChars: [
            Buffer.from(" ", options.encoding)[0],
            Buffer.from("\t", options.encoding)[0]
        ],
        wasQuoting: false,
        wasRowDelimiter: false,
        timchars: [
            Buffer.from(Buffer.from([
                cr
            ], "utf8").toString(), options.encoding),
            Buffer.from(Buffer.from([
                nl
            ], "utf8").toString(), options.encoding),
            Buffer.from(Buffer.from([
                np
            ], "utf8").toString(), options.encoding),
            Buffer.from(Buffer.from([
                space
            ], "utf8").toString(), options.encoding),
            Buffer.from(Buffer.from([
                tab
            ], "utf8").toString(), options.encoding)
        ]
    };
};
;
}),
"[project]/Website/node_modules/csv-parse/lib/utils/underscore.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "underscore",
    ()=>underscore
]);
const underscore = function(str) {
    return str.replace(/([A-Z])/g, function(_, match) {
        return "_" + match.toLowerCase();
    });
};
;
}),
"[project]/Website/node_modules/csv-parse/lib/api/normalize_options.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalize_options",
    ()=>normalize_options
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$normalize_columns_array$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/csv-parse/lib/api/normalize_columns_array.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/csv-parse/lib/api/CsvError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$utils$2f$underscore$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/csv-parse/lib/utils/underscore.js [app-rsc] (ecmascript)");
;
;
;
const normalize_options = function(opts) {
    const options = {};
    // Merge with user options
    for(const opt in opts){
        options[(0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$utils$2f$underscore$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["underscore"])(opt)] = opts[opt];
    }
    // Normalize option `encoding`
    // Note: defined first because other options depends on it
    // to convert chars/strings into buffers.
    if (options.encoding === undefined || options.encoding === true) {
        options.encoding = "utf8";
    } else if (options.encoding === null || options.encoding === false) {
        options.encoding = null;
    } else if (typeof options.encoding !== "string" && options.encoding !== null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_ENCODING", [
            "Invalid option encoding:",
            "encoding must be a string or null to return a buffer,",
            `got ${JSON.stringify(options.encoding)}`
        ], options);
    }
    // Normalize option `bom`
    if (options.bom === undefined || options.bom === null || options.bom === false) {
        options.bom = false;
    } else if (options.bom !== true) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_BOM", [
            "Invalid option bom:",
            "bom must be true,",
            `got ${JSON.stringify(options.bom)}`
        ], options);
    }
    // Normalize option `cast`
    options.cast_function = null;
    if (options.cast === undefined || options.cast === null || options.cast === false || options.cast === "") {
        options.cast = undefined;
    } else if (typeof options.cast === "function") {
        options.cast_function = options.cast;
        options.cast = true;
    } else if (options.cast !== true) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_CAST", [
            "Invalid option cast:",
            "cast must be true or a function,",
            `got ${JSON.stringify(options.cast)}`
        ], options);
    }
    // Normalize option `cast_date`
    if (options.cast_date === undefined || options.cast_date === null || options.cast_date === false || options.cast_date === "") {
        options.cast_date = false;
    } else if (options.cast_date === true) {
        options.cast_date = function(value) {
            const date = Date.parse(value);
            return !isNaN(date) ? new Date(date) : value;
        };
    } else if (typeof options.cast_date !== "function") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_CAST_DATE", [
            "Invalid option cast_date:",
            "cast_date must be true or a function,",
            `got ${JSON.stringify(options.cast_date)}`
        ], options);
    }
    // Normalize option `columns`
    options.cast_first_line_to_header = undefined;
    if (options.columns === true) {
        // Fields in the first line are converted as-is to columns
        options.cast_first_line_to_header = undefined;
    } else if (typeof options.columns === "function") {
        options.cast_first_line_to_header = options.columns;
        options.columns = true;
    } else if (Array.isArray(options.columns)) {
        options.columns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$normalize_columns_array$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalize_columns_array"])(options.columns);
    } else if (options.columns === undefined || options.columns === null || options.columns === false) {
        options.columns = false;
    } else {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_COLUMNS", [
            "Invalid option columns:",
            "expect an array, a function or true,",
            `got ${JSON.stringify(options.columns)}`
        ], options);
    }
    // Normalize option `group_columns_by_name`
    if (options.group_columns_by_name === undefined || options.group_columns_by_name === null || options.group_columns_by_name === false) {
        options.group_columns_by_name = false;
    } else if (options.group_columns_by_name !== true) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_GROUP_COLUMNS_BY_NAME", [
            "Invalid option group_columns_by_name:",
            "expect an boolean,",
            `got ${JSON.stringify(options.group_columns_by_name)}`
        ], options);
    } else if (options.columns === false) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_GROUP_COLUMNS_BY_NAME", [
            "Invalid option group_columns_by_name:",
            "the `columns` mode must be activated."
        ], options);
    }
    // Normalize option `comment`
    if (options.comment === undefined || options.comment === null || options.comment === false || options.comment === "") {
        options.comment = null;
    } else {
        if (typeof options.comment === "string") {
            options.comment = Buffer.from(options.comment, options.encoding);
        }
        if (!Buffer.isBuffer(options.comment)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_COMMENT", [
                "Invalid option comment:",
                "comment must be a buffer or a string,",
                `got ${JSON.stringify(options.comment)}`
            ], options);
        }
    }
    // Normalize option `comment_no_infix`
    if (options.comment_no_infix === undefined || options.comment_no_infix === null || options.comment_no_infix === false) {
        options.comment_no_infix = false;
    } else if (options.comment_no_infix !== true) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_COMMENT", [
            "Invalid option comment_no_infix:",
            "value must be a boolean,",
            `got ${JSON.stringify(options.comment_no_infix)}`
        ], options);
    }
    // Normalize option `delimiter`
    const delimiter_json = JSON.stringify(options.delimiter);
    if (!Array.isArray(options.delimiter)) options.delimiter = [
        options.delimiter
    ];
    if (options.delimiter.length === 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_DELIMITER", [
            "Invalid option delimiter:",
            "delimiter must be a non empty string or buffer or array of string|buffer,",
            `got ${delimiter_json}`
        ], options);
    }
    options.delimiter = options.delimiter.map(function(delimiter) {
        if (delimiter === undefined || delimiter === null || delimiter === false) {
            return Buffer.from(",", options.encoding);
        }
        if (typeof delimiter === "string") {
            delimiter = Buffer.from(delimiter, options.encoding);
        }
        if (!Buffer.isBuffer(delimiter) || delimiter.length === 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_DELIMITER", [
                "Invalid option delimiter:",
                "delimiter must be a non empty string or buffer or array of string|buffer,",
                `got ${delimiter_json}`
            ], options);
        }
        return delimiter;
    });
    // Normalize option `escape`
    if (options.escape === undefined || options.escape === true) {
        options.escape = Buffer.from('"', options.encoding);
    } else if (typeof options.escape === "string") {
        options.escape = Buffer.from(options.escape, options.encoding);
    } else if (options.escape === null || options.escape === false) {
        options.escape = null;
    }
    if (options.escape !== null) {
        if (!Buffer.isBuffer(options.escape)) {
            throw new Error(`Invalid Option: escape must be a buffer, a string or a boolean, got ${JSON.stringify(options.escape)}`);
        }
    }
    // Normalize option `from`
    if (options.from === undefined || options.from === null) {
        options.from = 1;
    } else {
        if (typeof options.from === "string" && /\d+/.test(options.from)) {
            options.from = parseInt(options.from);
        }
        if (Number.isInteger(options.from)) {
            if (options.from < 0) {
                throw new Error(`Invalid Option: from must be a positive integer, got ${JSON.stringify(opts.from)}`);
            }
        } else {
            throw new Error(`Invalid Option: from must be an integer, got ${JSON.stringify(options.from)}`);
        }
    }
    // Normalize option `from_line`
    if (options.from_line === undefined || options.from_line === null) {
        options.from_line = 1;
    } else {
        if (typeof options.from_line === "string" && /\d+/.test(options.from_line)) {
            options.from_line = parseInt(options.from_line);
        }
        if (Number.isInteger(options.from_line)) {
            if (options.from_line <= 0) {
                throw new Error(`Invalid Option: from_line must be a positive integer greater than 0, got ${JSON.stringify(opts.from_line)}`);
            }
        } else {
            throw new Error(`Invalid Option: from_line must be an integer, got ${JSON.stringify(opts.from_line)}`);
        }
    }
    // Normalize options `ignore_last_delimiters`
    if (options.ignore_last_delimiters === undefined || options.ignore_last_delimiters === null) {
        options.ignore_last_delimiters = false;
    } else if (typeof options.ignore_last_delimiters === "number") {
        options.ignore_last_delimiters = Math.floor(options.ignore_last_delimiters);
        if (options.ignore_last_delimiters === 0) {
            options.ignore_last_delimiters = false;
        }
    } else if (typeof options.ignore_last_delimiters !== "boolean") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_IGNORE_LAST_DELIMITERS", [
            "Invalid option `ignore_last_delimiters`:",
            "the value must be a boolean value or an integer,",
            `got ${JSON.stringify(options.ignore_last_delimiters)}`
        ], options);
    }
    if (options.ignore_last_delimiters === true && options.columns === false) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CsvError"]("CSV_IGNORE_LAST_DELIMITERS_REQUIRES_COLUMNS", [
            "The option `ignore_last_delimiters`",
            "requires the activation of the `columns` option"
        ], options);
    }
    // Normalize option `info`
    if (options.info === undefined || options.info === null || options.info === false) {
        options.info = false;
    } else if (options.info !== true) {
        throw new Error(`Invalid Option: info must be true, got ${JSON.stringify(options.info)}`);
    }
    // Normalize option `max_record_size`
    if (options.max_record_size === undefined || options.max_record_size === null || options.max_record_size === false) {
        options.max_record_size = 0;
    } else if (Number.isInteger(options.max_record_size) && options.max_record_size >= 0) {
    // Great, nothing to do
    } else if (typeof options.max_record_size === "string" && /\d+/.test(options.max_record_size)) {
        options.max_record_size = parseInt(options.max_record_size);
    } else {
        throw new Error(`Invalid Option: max_record_size must be a positive integer, got ${JSON.stringify(options.max_record_size)}`);
    }
    // Normalize option `objname`
    if (options.objname === undefined || options.objname === null || options.objname === false) {
        options.objname = undefined;
    } else if (Buffer.isBuffer(options.objname)) {
        if (options.objname.length === 0) {
            throw new Error(`Invalid Option: objname must be a non empty buffer`);
        }
        if (options.encoding === null) {
        // Don't call `toString`, leave objname as a buffer
        } else {
            options.objname = options.objname.toString(options.encoding);
        }
    } else if (typeof options.objname === "string") {
        if (options.objname.length === 0) {
            throw new Error(`Invalid Option: objname must be a non empty string`);
        }
    // Great, nothing to do
    } else if (typeof options.objname === "number") {
    // if(options.objname.length === 0){
    //   throw new Error(`Invalid Option: objname must be a non empty string`);
    // }
    // Great, nothing to do
    } else {
        throw new Error(`Invalid Option: objname must be a string or a buffer, got ${options.objname}`);
    }
    if (options.objname !== undefined) {
        if (typeof options.objname === "number") {
            if (options.columns !== false) {
                throw Error("Invalid Option: objname index cannot be combined with columns or be defined as a field");
            }
        } else {
            // A string or a buffer
            if (options.columns === false) {
                throw Error("Invalid Option: objname field must be combined with columns or be defined as an index");
            }
        }
    }
    // Normalize option `on_record`
    if (options.on_record === undefined || options.on_record === null) {
        options.on_record = undefined;
    } else if (typeof options.on_record !== "function") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_ON_RECORD", [
            "Invalid option `on_record`:",
            "expect a function,",
            `got ${JSON.stringify(options.on_record)}`
        ], options);
    }
    // Normalize option `on_skip`
    // options.on_skip ??= (err, chunk) => {
    //   this.emit('skip', err, chunk);
    // };
    if (options.on_skip !== undefined && options.on_skip !== null && typeof options.on_skip !== "function") {
        throw new Error(`Invalid Option: on_skip must be a function, got ${JSON.stringify(options.on_skip)}`);
    }
    // Normalize option `quote`
    if (options.quote === null || options.quote === false || options.quote === "") {
        options.quote = null;
    } else {
        if (options.quote === undefined || options.quote === true) {
            options.quote = Buffer.from('"', options.encoding);
        } else if (typeof options.quote === "string") {
            options.quote = Buffer.from(options.quote, options.encoding);
        }
        if (!Buffer.isBuffer(options.quote)) {
            throw new Error(`Invalid Option: quote must be a buffer or a string, got ${JSON.stringify(options.quote)}`);
        }
    }
    // Normalize option `raw`
    if (options.raw === undefined || options.raw === null || options.raw === false) {
        options.raw = false;
    } else if (options.raw !== true) {
        throw new Error(`Invalid Option: raw must be true, got ${JSON.stringify(options.raw)}`);
    }
    // Normalize option `record_delimiter`
    if (options.record_delimiter === undefined) {
        options.record_delimiter = [];
    } else if (typeof options.record_delimiter === "string" || Buffer.isBuffer(options.record_delimiter)) {
        if (options.record_delimiter.length === 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_RECORD_DELIMITER", [
                "Invalid option `record_delimiter`:",
                "value must be a non empty string or buffer,",
                `got ${JSON.stringify(options.record_delimiter)}`
            ], options);
        }
        options.record_delimiter = [
            options.record_delimiter
        ];
    } else if (!Array.isArray(options.record_delimiter)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_RECORD_DELIMITER", [
            "Invalid option `record_delimiter`:",
            "value must be a string, a buffer or array of string|buffer,",
            `got ${JSON.stringify(options.record_delimiter)}`
        ], options);
    }
    options.record_delimiter = options.record_delimiter.map(function(rd, i) {
        if (typeof rd !== "string" && !Buffer.isBuffer(rd)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_RECORD_DELIMITER", [
                "Invalid option `record_delimiter`:",
                "value must be a string, a buffer or array of string|buffer",
                `at index ${i},`,
                `got ${JSON.stringify(rd)}`
            ], options);
        } else if (rd.length === 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_RECORD_DELIMITER", [
                "Invalid option `record_delimiter`:",
                "value must be a non empty string or buffer",
                `at index ${i},`,
                `got ${JSON.stringify(rd)}`
            ], options);
        }
        if (typeof rd === "string") {
            rd = Buffer.from(rd, options.encoding);
        }
        return rd;
    });
    // Normalize option `relax_column_count`
    if (typeof options.relax_column_count === "boolean") {
    // Great, nothing to do
    } else if (options.relax_column_count === undefined || options.relax_column_count === null) {
        options.relax_column_count = false;
    } else {
        throw new Error(`Invalid Option: relax_column_count must be a boolean, got ${JSON.stringify(options.relax_column_count)}`);
    }
    if (typeof options.relax_column_count_less === "boolean") {
    // Great, nothing to do
    } else if (options.relax_column_count_less === undefined || options.relax_column_count_less === null) {
        options.relax_column_count_less = false;
    } else {
        throw new Error(`Invalid Option: relax_column_count_less must be a boolean, got ${JSON.stringify(options.relax_column_count_less)}`);
    }
    if (typeof options.relax_column_count_more === "boolean") {
    // Great, nothing to do
    } else if (options.relax_column_count_more === undefined || options.relax_column_count_more === null) {
        options.relax_column_count_more = false;
    } else {
        throw new Error(`Invalid Option: relax_column_count_more must be a boolean, got ${JSON.stringify(options.relax_column_count_more)}`);
    }
    // Normalize option `relax_quotes`
    if (typeof options.relax_quotes === "boolean") {
    // Great, nothing to do
    } else if (options.relax_quotes === undefined || options.relax_quotes === null) {
        options.relax_quotes = false;
    } else {
        throw new Error(`Invalid Option: relax_quotes must be a boolean, got ${JSON.stringify(options.relax_quotes)}`);
    }
    // Normalize option `skip_empty_lines`
    if (typeof options.skip_empty_lines === "boolean") {
    // Great, nothing to do
    } else if (options.skip_empty_lines === undefined || options.skip_empty_lines === null) {
        options.skip_empty_lines = false;
    } else {
        throw new Error(`Invalid Option: skip_empty_lines must be a boolean, got ${JSON.stringify(options.skip_empty_lines)}`);
    }
    // Normalize option `skip_records_with_empty_values`
    if (typeof options.skip_records_with_empty_values === "boolean") {
    // Great, nothing to do
    } else if (options.skip_records_with_empty_values === undefined || options.skip_records_with_empty_values === null) {
        options.skip_records_with_empty_values = false;
    } else {
        throw new Error(`Invalid Option: skip_records_with_empty_values must be a boolean, got ${JSON.stringify(options.skip_records_with_empty_values)}`);
    }
    // Normalize option `skip_records_with_error`
    if (typeof options.skip_records_with_error === "boolean") {
    // Great, nothing to do
    } else if (options.skip_records_with_error === undefined || options.skip_records_with_error === null) {
        options.skip_records_with_error = false;
    } else {
        throw new Error(`Invalid Option: skip_records_with_error must be a boolean, got ${JSON.stringify(options.skip_records_with_error)}`);
    }
    // Normalize option `rtrim`
    if (options.rtrim === undefined || options.rtrim === null || options.rtrim === false) {
        options.rtrim = false;
    } else if (options.rtrim !== true) {
        throw new Error(`Invalid Option: rtrim must be a boolean, got ${JSON.stringify(options.rtrim)}`);
    }
    // Normalize option `ltrim`
    if (options.ltrim === undefined || options.ltrim === null || options.ltrim === false) {
        options.ltrim = false;
    } else if (options.ltrim !== true) {
        throw new Error(`Invalid Option: ltrim must be a boolean, got ${JSON.stringify(options.ltrim)}`);
    }
    // Normalize option `trim`
    if (options.trim === undefined || options.trim === null || options.trim === false) {
        options.trim = false;
    } else if (options.trim !== true) {
        throw new Error(`Invalid Option: trim must be a boolean, got ${JSON.stringify(options.trim)}`);
    }
    // Normalize options `trim`, `ltrim` and `rtrim`
    if (options.trim === true && opts.ltrim !== false) {
        options.ltrim = true;
    } else if (options.ltrim !== true) {
        options.ltrim = false;
    }
    if (options.trim === true && opts.rtrim !== false) {
        options.rtrim = true;
    } else if (options.rtrim !== true) {
        options.rtrim = false;
    }
    // Normalize option `to`
    if (options.to === undefined || options.to === null) {
        options.to = -1;
    } else if (options.to !== -1) {
        if (typeof options.to === "string" && /\d+/.test(options.to)) {
            options.to = parseInt(options.to);
        }
        if (Number.isInteger(options.to)) {
            if (options.to <= 0) {
                throw new Error(`Invalid Option: to must be a positive integer greater than 0, got ${JSON.stringify(opts.to)}`);
            }
        } else {
            throw new Error(`Invalid Option: to must be an integer, got ${JSON.stringify(opts.to)}`);
        }
    }
    // Normalize option `to_line`
    if (options.to_line === undefined || options.to_line === null) {
        options.to_line = -1;
    } else if (options.to_line !== -1) {
        if (typeof options.to_line === "string" && /\d+/.test(options.to_line)) {
            options.to_line = parseInt(options.to_line);
        }
        if (Number.isInteger(options.to_line)) {
            if (options.to_line <= 0) {
                throw new Error(`Invalid Option: to_line must be a positive integer greater than 0, got ${JSON.stringify(opts.to_line)}`);
            }
        } else {
            throw new Error(`Invalid Option: to_line must be an integer, got ${JSON.stringify(opts.to_line)}`);
        }
    }
    return options;
};
;
}),
"[project]/Website/node_modules/csv-parse/lib/api/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "transform",
    ()=>transform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$normalize_columns_array$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/csv-parse/lib/api/normalize_columns_array.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$init_state$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/csv-parse/lib/api/init_state.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$normalize_options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/csv-parse/lib/api/normalize_options.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/csv-parse/lib/api/CsvError.js [app-rsc] (ecmascript)");
;
;
;
;
const isRecordEmpty = function(record) {
    return record.every((field)=>field == null || field.toString && field.toString().trim() === "");
};
const cr = 13; // `\r`, carriage return, 0x0D in hexadécimal, 13 in decimal
const nl = 10; // `\n`, newline, 0x0A in hexadecimal, 10 in decimal
const boms = {
    // Note, the following are equals:
    // Buffer.from("\ufeff")
    // Buffer.from([239, 187, 191])
    // Buffer.from('EFBBBF', 'hex')
    utf8: Buffer.from([
        239,
        187,
        191
    ]),
    // Note, the following are equals:
    // Buffer.from "\ufeff", 'utf16le
    // Buffer.from([255, 254])
    utf16le: Buffer.from([
        255,
        254
    ])
};
const transform = function(original_options = {}) {
    const info = {
        bytes: 0,
        bytes_records: 0,
        comment_lines: 0,
        empty_lines: 0,
        invalid_field_length: 0,
        lines: 1,
        records: 0
    };
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$normalize_options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalize_options"])(original_options);
    return {
        info: info,
        original_options: original_options,
        options: options,
        state: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$init_state$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["init_state"])(options),
        __needMoreData: function(i, bufLen, end) {
            if (end) return false;
            const { encoding, escape, quote } = this.options;
            const { quoting, needMoreDataSize, recordDelimiterMaxLength } = this.state;
            const numOfCharLeft = bufLen - i - 1;
            const requiredLength = Math.max(needMoreDataSize, // Skip if the remaining buffer smaller than record delimiter
            // If "record_delimiter" is yet to be discovered:
            // 1. It is equals to `[]` and "recordDelimiterMaxLength" equals `0`
            // 2. We set the length to windows line ending in the current encoding
            // Note, that encoding is known from user or bom discovery at that point
            // recordDelimiterMaxLength,
            recordDelimiterMaxLength === 0 ? Buffer.from("\r\n", encoding).length : recordDelimiterMaxLength, // Skip if remaining buffer can be an escaped quote
            quoting ? (escape === null ? 0 : escape.length) + quote.length : 0, // Skip if remaining buffer can be record delimiter following the closing quote
            quoting ? quote.length + recordDelimiterMaxLength : 0);
            return numOfCharLeft < requiredLength;
        },
        // Central parser implementation
        parse: function(nextBuf, end, push, close) {
            const { bom, comment_no_infix, encoding, from_line, ltrim, max_record_size, raw, relax_quotes, rtrim, skip_empty_lines, to, to_line } = this.options;
            let { comment, escape, quote, record_delimiter } = this.options;
            const { bomSkipped, previousBuf, rawBuffer, escapeIsQuote } = this.state;
            let buf;
            if (previousBuf === undefined) {
                if (nextBuf === undefined) {
                    // Handle empty string
                    close();
                    return;
                } else {
                    buf = nextBuf;
                }
            } else if (previousBuf !== undefined && nextBuf === undefined) {
                buf = previousBuf;
            } else {
                buf = Buffer.concat([
                    previousBuf,
                    nextBuf
                ]);
            }
            // Handle UTF BOM
            if (bomSkipped === false) {
                if (bom === false) {
                    this.state.bomSkipped = true;
                } else if (buf.length < 3) {
                    // No enough data
                    if (end === false) {
                        // Wait for more data
                        this.state.previousBuf = buf;
                        return;
                    }
                } else {
                    for(const encoding in boms){
                        if (boms[encoding].compare(buf, 0, boms[encoding].length) === 0) {
                            // Skip BOM
                            const bomLength = boms[encoding].length;
                            this.state.bufBytesStart += bomLength;
                            buf = buf.slice(bomLength);
                            // Renormalize original options with the new encoding
                            const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$normalize_options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalize_options"])({
                                ...this.original_options,
                                encoding: encoding
                            });
                            // Properties are merged with the existing options instance
                            for(const key in options){
                                this.options[key] = options[key];
                            }
                            // Options will re-evaluate the Buffer with the new encoding
                            ({ comment, escape, quote } = this.options);
                            break;
                        }
                    }
                    this.state.bomSkipped = true;
                }
            }
            const bufLen = buf.length;
            let pos;
            for(pos = 0; pos < bufLen; pos++){
                // Ensure we get enough space to look ahead
                // There should be a way to move this out of the loop
                if (this.__needMoreData(pos, bufLen, end)) {
                    break;
                }
                if (this.state.wasRowDelimiter === true) {
                    this.info.lines++;
                    this.state.wasRowDelimiter = false;
                }
                if (to_line !== -1 && this.info.lines > to_line) {
                    this.state.stop = true;
                    close();
                    return;
                }
                // Auto discovery of record_delimiter, unix, mac and windows supported
                if (this.state.quoting === false && record_delimiter.length === 0) {
                    const record_delimiterCount = this.__autoDiscoverRecordDelimiter(buf, pos);
                    if (record_delimiterCount) {
                        record_delimiter = this.options.record_delimiter;
                    }
                }
                const chr = buf[pos];
                if (raw === true) {
                    rawBuffer.append(chr);
                }
                if ((chr === cr || chr === nl) && this.state.wasRowDelimiter === false) {
                    this.state.wasRowDelimiter = true;
                }
                // Previous char was a valid escape char
                // treat the current char as a regular char
                if (this.state.escaping === true) {
                    this.state.escaping = false;
                } else {
                    // Escape is only active inside quoted fields
                    // We are quoting, the char is an escape chr and there is a chr to escape
                    // if(escape !== null && this.state.quoting === true && chr === escape && pos + 1 < bufLen){
                    if (escape !== null && this.state.quoting === true && this.__isEscape(buf, pos, chr) && pos + escape.length < bufLen) {
                        if (escapeIsQuote) {
                            if (this.__isQuote(buf, pos + escape.length)) {
                                this.state.escaping = true;
                                pos += escape.length - 1;
                                continue;
                            }
                        } else {
                            this.state.escaping = true;
                            pos += escape.length - 1;
                            continue;
                        }
                    }
                    // Not currently escaping and chr is a quote
                    // TODO: need to compare bytes instead of single char
                    if (this.state.commenting === false && this.__isQuote(buf, pos)) {
                        if (this.state.quoting === true) {
                            const nextChr = buf[pos + quote.length];
                            const isNextChrTrimable = rtrim && this.__isCharTrimable(buf, pos + quote.length);
                            const isNextChrComment = comment !== null && this.__compareBytes(comment, buf, pos + quote.length, nextChr);
                            const isNextChrDelimiter = this.__isDelimiter(buf, pos + quote.length, nextChr);
                            const isNextChrRecordDelimiter = record_delimiter.length === 0 ? this.__autoDiscoverRecordDelimiter(buf, pos + quote.length) : this.__isRecordDelimiter(nextChr, buf, pos + quote.length);
                            // Escape a quote
                            // Treat next char as a regular character
                            if (escape !== null && this.__isEscape(buf, pos, chr) && this.__isQuote(buf, pos + escape.length)) {
                                pos += escape.length - 1;
                            } else if (!nextChr || isNextChrDelimiter || isNextChrRecordDelimiter || isNextChrComment || isNextChrTrimable) {
                                this.state.quoting = false;
                                this.state.wasQuoting = true;
                                pos += quote.length - 1;
                                continue;
                            } else if (relax_quotes === false) {
                                const err = this.__error(new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_CLOSING_QUOTE", [
                                    "Invalid Closing Quote:",
                                    `got "${String.fromCharCode(nextChr)}"`,
                                    `at line ${this.info.lines}`,
                                    "instead of delimiter, record delimiter, trimable character",
                                    "(if activated) or comment"
                                ], this.options, this.__infoField()));
                                if (err !== undefined) return err;
                            } else {
                                this.state.quoting = false;
                                this.state.wasQuoting = true;
                                this.state.field.prepend(quote);
                                pos += quote.length - 1;
                            }
                        } else {
                            if (this.state.field.length !== 0) {
                                // In relax_quotes mode, treat opening quote preceded by chrs as regular
                                if (relax_quotes === false) {
                                    const info = this.__infoField();
                                    const bom = Object.keys(boms).map((b)=>boms[b].equals(this.state.field.toString()) ? b : false).filter(Boolean)[0];
                                    const err = this.__error(new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CsvError"]("INVALID_OPENING_QUOTE", [
                                        "Invalid Opening Quote:",
                                        `a quote is found on field ${JSON.stringify(info.column)} at line ${info.lines}, value is ${JSON.stringify(this.state.field.toString(encoding))}`,
                                        bom ? `(${bom} bom)` : undefined
                                    ], this.options, info, {
                                        field: this.state.field
                                    }));
                                    if (err !== undefined) return err;
                                }
                            } else {
                                this.state.quoting = true;
                                pos += quote.length - 1;
                                continue;
                            }
                        }
                    }
                    if (this.state.quoting === false) {
                        const recordDelimiterLength = this.__isRecordDelimiter(chr, buf, pos);
                        if (recordDelimiterLength !== 0) {
                            // Do not emit comments which take a full line
                            const skipCommentLine = this.state.commenting && this.state.wasQuoting === false && this.state.record.length === 0 && this.state.field.length === 0;
                            if (skipCommentLine) {
                                this.info.comment_lines++;
                            // Skip full comment line
                            } else {
                                // Activate records emission if above from_line
                                if (this.state.enabled === false && this.info.lines + (this.state.wasRowDelimiter === true ? 1 : 0) >= from_line) {
                                    this.state.enabled = true;
                                    this.__resetField();
                                    this.__resetRecord();
                                    pos += recordDelimiterLength - 1;
                                    continue;
                                }
                                // Skip if line is empty and skip_empty_lines activated
                                if (skip_empty_lines === true && this.state.wasQuoting === false && this.state.record.length === 0 && this.state.field.length === 0) {
                                    this.info.empty_lines++;
                                    pos += recordDelimiterLength - 1;
                                    continue;
                                }
                                this.info.bytes = this.state.bufBytesStart + pos;
                                const errField = this.__onField();
                                if (errField !== undefined) return errField;
                                this.info.bytes = this.state.bufBytesStart + pos + recordDelimiterLength;
                                const errRecord = this.__onRecord(push);
                                if (errRecord !== undefined) return errRecord;
                                if (to !== -1 && this.info.records >= to) {
                                    this.state.stop = true;
                                    close();
                                    return;
                                }
                            }
                            this.state.commenting = false;
                            pos += recordDelimiterLength - 1;
                            continue;
                        }
                        if (this.state.commenting) {
                            continue;
                        }
                        if (comment !== null && (comment_no_infix === false || this.state.record.length === 0 && this.state.field.length === 0)) {
                            const commentCount = this.__compareBytes(comment, buf, pos, chr);
                            if (commentCount !== 0) {
                                this.state.commenting = true;
                                continue;
                            }
                        }
                        const delimiterLength = this.__isDelimiter(buf, pos, chr);
                        if (delimiterLength !== 0) {
                            this.info.bytes = this.state.bufBytesStart + pos;
                            const errField = this.__onField();
                            if (errField !== undefined) return errField;
                            pos += delimiterLength - 1;
                            continue;
                        }
                    }
                }
                if (this.state.commenting === false) {
                    if (max_record_size !== 0 && this.state.record_length + this.state.field.length > max_record_size) {
                        return this.__error(new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CsvError"]("CSV_MAX_RECORD_SIZE", [
                            "Max Record Size:",
                            "record exceed the maximum number of tolerated bytes",
                            `of ${max_record_size}`,
                            `at line ${this.info.lines}`
                        ], this.options, this.__infoField()));
                    }
                }
                const lappend = ltrim === false || this.state.quoting === true || this.state.field.length !== 0 || !this.__isCharTrimable(buf, pos);
                // rtrim in non quoting is handle in __onField
                const rappend = rtrim === false || this.state.wasQuoting === false;
                if (lappend === true && rappend === true) {
                    this.state.field.append(chr);
                } else if (rtrim === true && !this.__isCharTrimable(buf, pos)) {
                    return this.__error(new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CsvError"]("CSV_NON_TRIMABLE_CHAR_AFTER_CLOSING_QUOTE", [
                        "Invalid Closing Quote:",
                        "found non trimable byte after quote",
                        `at line ${this.info.lines}`
                    ], this.options, this.__infoField()));
                } else {
                    if (lappend === false) {
                        pos += this.__isCharTrimable(buf, pos) - 1;
                    }
                    continue;
                }
            }
            if (end === true) {
                // Ensure we are not ending in a quoting state
                if (this.state.quoting === true) {
                    const err = this.__error(new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CsvError"]("CSV_QUOTE_NOT_CLOSED", [
                        "Quote Not Closed:",
                        `the parsing is finished with an opening quote at line ${this.info.lines}`
                    ], this.options, this.__infoField()));
                    if (err !== undefined) return err;
                } else {
                    // Skip last line if it has no characters
                    if (this.state.wasQuoting === true || this.state.record.length !== 0 || this.state.field.length !== 0) {
                        this.info.bytes = this.state.bufBytesStart + pos;
                        const errField = this.__onField();
                        if (errField !== undefined) return errField;
                        const errRecord = this.__onRecord(push);
                        if (errRecord !== undefined) return errRecord;
                    } else if (this.state.wasRowDelimiter === true) {
                        this.info.empty_lines++;
                    } else if (this.state.commenting === true) {
                        this.info.comment_lines++;
                    }
                }
            } else {
                this.state.bufBytesStart += pos;
                this.state.previousBuf = buf.slice(pos);
            }
            if (this.state.wasRowDelimiter === true) {
                this.info.lines++;
                this.state.wasRowDelimiter = false;
            }
        },
        __onRecord: function(push) {
            const { columns, group_columns_by_name, encoding, info, from, relax_column_count, relax_column_count_less, relax_column_count_more, raw, skip_records_with_empty_values } = this.options;
            const { enabled, record } = this.state;
            if (enabled === false) {
                return this.__resetRecord();
            }
            // Convert the first line into column names
            const recordLength = record.length;
            if (columns === true) {
                if (skip_records_with_empty_values === true && isRecordEmpty(record)) {
                    this.__resetRecord();
                    return;
                }
                return this.__firstLineToColumns(record);
            }
            if (columns === false && this.info.records === 0) {
                this.state.expectedRecordLength = recordLength;
            }
            if (recordLength !== this.state.expectedRecordLength) {
                const err = columns === false ? new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CsvError"]("CSV_RECORD_INCONSISTENT_FIELDS_LENGTH", [
                    "Invalid Record Length:",
                    `expect ${this.state.expectedRecordLength},`,
                    `got ${recordLength} on line ${this.info.lines}`
                ], this.options, this.__infoField(), {
                    record: record
                }) : new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CsvError"]("CSV_RECORD_INCONSISTENT_COLUMNS", [
                    "Invalid Record Length:",
                    `columns length is ${columns.length},`,
                    `got ${recordLength} on line ${this.info.lines}`
                ], this.options, this.__infoField(), {
                    record: record
                });
                if (relax_column_count === true || relax_column_count_less === true && recordLength < this.state.expectedRecordLength || relax_column_count_more === true && recordLength > this.state.expectedRecordLength) {
                    this.info.invalid_field_length++;
                    this.state.error = err;
                // Error is undefined with skip_records_with_error
                } else {
                    const finalErr = this.__error(err);
                    if (finalErr) return finalErr;
                }
            }
            if (skip_records_with_empty_values === true && isRecordEmpty(record)) {
                this.__resetRecord();
                return;
            }
            if (this.state.recordHasError === true) {
                this.__resetRecord();
                this.state.recordHasError = false;
                return;
            }
            this.info.records++;
            if (from === 1 || this.info.records >= from) {
                const { objname } = this.options;
                // With columns, records are object
                if (columns !== false) {
                    const obj = {};
                    // Transform record array to an object
                    for(let i = 0, l = record.length; i < l; i++){
                        if (columns[i] === undefined || columns[i].disabled) continue;
                        // Turn duplicate columns into an array
                        if (group_columns_by_name === true && obj[columns[i].name] !== undefined) {
                            if (Array.isArray(obj[columns[i].name])) {
                                obj[columns[i].name] = obj[columns[i].name].concat(record[i]);
                            } else {
                                obj[columns[i].name] = [
                                    obj[columns[i].name],
                                    record[i]
                                ];
                            }
                        } else {
                            obj[columns[i].name] = record[i];
                        }
                    }
                    // Without objname (default)
                    if (raw === true || info === true) {
                        const extRecord = Object.assign({
                            record: obj
                        }, raw === true ? {
                            raw: this.state.rawBuffer.toString(encoding)
                        } : {}, info === true ? {
                            info: this.__infoRecord()
                        } : {});
                        const err = this.__push(objname === undefined ? extRecord : [
                            obj[objname],
                            extRecord
                        ], push);
                        if (err) {
                            return err;
                        }
                    } else {
                        const err = this.__push(objname === undefined ? obj : [
                            obj[objname],
                            obj
                        ], push);
                        if (err) {
                            return err;
                        }
                    }
                // Without columns, records are array
                } else {
                    if (raw === true || info === true) {
                        const extRecord = Object.assign({
                            record: record
                        }, raw === true ? {
                            raw: this.state.rawBuffer.toString(encoding)
                        } : {}, info === true ? {
                            info: this.__infoRecord()
                        } : {});
                        const err = this.__push(objname === undefined ? extRecord : [
                            record[objname],
                            extRecord
                        ], push);
                        if (err) {
                            return err;
                        }
                    } else {
                        const err = this.__push(objname === undefined ? record : [
                            record[objname],
                            record
                        ], push);
                        if (err) {
                            return err;
                        }
                    }
                }
            }
            this.__resetRecord();
        },
        __firstLineToColumns: function(record) {
            const { firstLineToHeaders } = this.state;
            try {
                const headers = firstLineToHeaders === undefined ? record : firstLineToHeaders.call(null, record);
                if (!Array.isArray(headers)) {
                    return this.__error(new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_COLUMN_MAPPING", [
                        "Invalid Column Mapping:",
                        "expect an array from column function,",
                        `got ${JSON.stringify(headers)}`
                    ], this.options, this.__infoField(), {
                        headers: headers
                    }));
                }
                const normalizedHeaders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$normalize_columns_array$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalize_columns_array"])(headers);
                this.state.expectedRecordLength = normalizedHeaders.length;
                this.options.columns = normalizedHeaders;
                this.__resetRecord();
                return;
            } catch (err) {
                return err;
            }
        },
        __resetRecord: function() {
            if (this.options.raw === true) {
                this.state.rawBuffer.reset();
            }
            this.state.error = undefined;
            this.state.record = [];
            this.state.record_length = 0;
        },
        __onField: function() {
            const { cast, encoding, rtrim, max_record_size } = this.options;
            const { enabled, wasQuoting } = this.state;
            // Short circuit for the from_line options
            if (enabled === false) {
                return this.__resetField();
            }
            let field = this.state.field.toString(encoding);
            if (rtrim === true && wasQuoting === false) {
                field = field.trimRight();
            }
            if (cast === true) {
                const [err, f] = this.__cast(field);
                if (err !== undefined) return err;
                field = f;
            }
            this.state.record.push(field);
            // Increment record length if record size must not exceed a limit
            if (max_record_size !== 0 && typeof field === "string") {
                this.state.record_length += field.length;
            }
            this.__resetField();
        },
        __resetField: function() {
            this.state.field.reset();
            this.state.wasQuoting = false;
        },
        __push: function(record, push) {
            const { on_record } = this.options;
            if (on_record !== undefined) {
                const info = this.__infoRecord();
                try {
                    record = on_record.call(null, record, info);
                } catch (err) {
                    return err;
                }
                if (record === undefined || record === null) {
                    return;
                }
            }
            this.info.bytes_records += this.info.bytes;
            push(record);
        },
        // Return a tuple with the error and the casted value
        __cast: function(field) {
            const { columns, relax_column_count } = this.options;
            const isColumns = Array.isArray(columns);
            // Dont loose time calling cast
            // because the final record is an object
            // and this field can't be associated to a key present in columns
            if (isColumns === true && relax_column_count && this.options.columns.length <= this.state.record.length) {
                return [
                    undefined,
                    undefined
                ];
            }
            if (this.state.castField !== null) {
                try {
                    const info = this.__infoField();
                    return [
                        undefined,
                        this.state.castField.call(null, field, info)
                    ];
                } catch (err) {
                    return [
                        err
                    ];
                }
            }
            if (this.__isFloat(field)) {
                return [
                    undefined,
                    parseFloat(field)
                ];
            } else if (this.options.cast_date !== false) {
                const info = this.__infoField();
                return [
                    undefined,
                    this.options.cast_date.call(null, field, info)
                ];
            }
            return [
                undefined,
                field
            ];
        },
        // Helper to test if a character is a space or a line delimiter
        __isCharTrimable: function(buf, pos) {
            const isTrim = (buf, pos)=>{
                const { timchars } = this.state;
                loop1: for(let i = 0; i < timchars.length; i++){
                    const timchar = timchars[i];
                    for(let j = 0; j < timchar.length; j++){
                        if (timchar[j] !== buf[pos + j]) continue loop1;
                    }
                    return timchar.length;
                }
                return 0;
            };
            return isTrim(buf, pos);
        },
        // Keep it in case we implement the `cast_int` option
        // __isInt(value){
        //   // return Number.isInteger(parseInt(value))
        //   // return !isNaN( parseInt( obj ) );
        //   return /^(\-|\+)?[1-9][0-9]*$/.test(value)
        // }
        __isFloat: function(value) {
            return value - parseFloat(value) + 1 >= 0; // Borrowed from jquery
        },
        __compareBytes: function(sourceBuf, targetBuf, targetPos, firstByte) {
            if (sourceBuf[0] !== firstByte) return 0;
            const sourceLength = sourceBuf.length;
            for(let i = 1; i < sourceLength; i++){
                if (sourceBuf[i] !== targetBuf[targetPos + i]) return 0;
            }
            return sourceLength;
        },
        __isDelimiter: function(buf, pos, chr) {
            const { delimiter, ignore_last_delimiters } = this.options;
            if (ignore_last_delimiters === true && this.state.record.length === this.options.columns.length - 1) {
                return 0;
            } else if (ignore_last_delimiters !== false && typeof ignore_last_delimiters === "number" && this.state.record.length === ignore_last_delimiters - 1) {
                return 0;
            }
            loop1: for(let i = 0; i < delimiter.length; i++){
                const del = delimiter[i];
                if (del[0] === chr) {
                    for(let j = 1; j < del.length; j++){
                        if (del[j] !== buf[pos + j]) continue loop1;
                    }
                    return del.length;
                }
            }
            return 0;
        },
        __isRecordDelimiter: function(chr, buf, pos) {
            const { record_delimiter } = this.options;
            const recordDelimiterLength = record_delimiter.length;
            loop1: for(let i = 0; i < recordDelimiterLength; i++){
                const rd = record_delimiter[i];
                const rdLength = rd.length;
                if (rd[0] !== chr) {
                    continue;
                }
                for(let j = 1; j < rdLength; j++){
                    if (rd[j] !== buf[pos + j]) {
                        continue loop1;
                    }
                }
                return rd.length;
            }
            return 0;
        },
        __isEscape: function(buf, pos, chr) {
            const { escape } = this.options;
            if (escape === null) return false;
            const l = escape.length;
            if (escape[0] === chr) {
                for(let i = 0; i < l; i++){
                    if (escape[i] !== buf[pos + i]) {
                        return false;
                    }
                }
                return true;
            }
            return false;
        },
        __isQuote: function(buf, pos) {
            const { quote } = this.options;
            if (quote === null) return false;
            const l = quote.length;
            for(let i = 0; i < l; i++){
                if (quote[i] !== buf[pos + i]) {
                    return false;
                }
            }
            return true;
        },
        __autoDiscoverRecordDelimiter: function(buf, pos) {
            const { encoding } = this.options;
            // Note, we don't need to cache this information in state,
            // It is only called on the first line until we find out a suitable
            // record delimiter.
            const rds = [
                // Important, the windows line ending must be before mac os 9
                Buffer.from("\r\n", encoding),
                Buffer.from("\n", encoding),
                Buffer.from("\r", encoding)
            ];
            loop: for(let i = 0; i < rds.length; i++){
                const l = rds[i].length;
                for(let j = 0; j < l; j++){
                    if (rds[i][j] !== buf[pos + j]) {
                        continue loop;
                    }
                }
                this.options.record_delimiter.push(rds[i]);
                this.state.recordDelimiterMaxLength = rds[i].length;
                return rds[i].length;
            }
            return 0;
        },
        __error: function(msg) {
            const { encoding, raw, skip_records_with_error } = this.options;
            const err = typeof msg === "string" ? new Error(msg) : msg;
            if (skip_records_with_error) {
                this.state.recordHasError = true;
                if (this.options.on_skip !== undefined) {
                    try {
                        this.options.on_skip(err, raw ? this.state.rawBuffer.toString(encoding) : undefined);
                    } catch (err) {
                        return err;
                    }
                }
                // this.emit('skip', err, raw ? this.state.rawBuffer.toString(encoding) : undefined);
                return undefined;
            } else {
                return err;
            }
        },
        __infoDataSet: function() {
            return {
                ...this.info,
                columns: this.options.columns
            };
        },
        __infoRecord: function() {
            const { columns, raw, encoding } = this.options;
            return {
                ...this.__infoDataSet(),
                bytes_records: this.info.bytes,
                error: this.state.error,
                header: columns === true,
                index: this.state.record.length,
                raw: raw ? this.state.rawBuffer.toString(encoding) : undefined
            };
        },
        __infoField: function() {
            const { columns } = this.options;
            const isColumns = Array.isArray(columns);
            // Bytes records are only incremented when all records'fields are parsed
            const bytes_records = this.info.bytes_records;
            return {
                ...this.__infoRecord(),
                bytes_records: bytes_records,
                column: isColumns === true ? columns.length > this.state.record.length ? columns[this.state.record.length].name : null : this.state.record.length,
                quoting: this.state.wasQuoting
            };
        }
    };
};
;
}),
"[project]/Website/node_modules/csv-parse/lib/sync.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parse",
    ()=>parse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Website/node_modules/csv-parse/lib/api/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/csv-parse/lib/api/CsvError.js [app-rsc] (ecmascript)");
;
const parse = function(data, opts = {}) {
    if (typeof data === "string") {
        data = Buffer.from(data);
    }
    const records = opts && opts.objname ? {} : [];
    const parser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["transform"])(opts);
    const push = (record)=>{
        if (parser.options.objname === undefined) records.push(record);
        else {
            records[record[0]] = record[1];
        }
    };
    const close = ()=>{};
    const error = parser.parse(data, true, push, close);
    if (error !== undefined) throw error;
    // 250606: `parser.parse` was implemented as 2 calls:
    // const err1 = parser.parse(data, false, push, close);
    // if (err1 !== undefined) throw err1;
    // const err2 = parser.parse(undefined, true, push, close);
    // if (err2 !== undefined) throw err2;
    return records;
};
;
;
}),
"[project]/Website/node_modules/csv-stringify/lib/utils/get.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Lodash implementation of `get`
__turbopack_context__.s([
    "get",
    ()=>get
]);
const charCodeOfDot = ".".charCodeAt(0);
const reEscapeChar = /\\(\\)?/g;
const rePropName = RegExp(// Match anything that isn't a dot or bracket.
"[^.[\\]]+" + "|" + // Or match property names within brackets.
"\\[(?:" + // Match a non-string expression.
"([^\"'][^[]*)" + "|" + // Or match strings (supports escaping characters).
"([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2" + ")\\]" + "|" + // Or match "" as the space between consecutive dots or empty brackets.
"(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))", "g");
const reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
const reIsPlainProp = /^\w*$/;
const getTag = function(value) {
    // if (!value) value === undefined ? "[object Undefined]" : "[object Null]";
    return Object.prototype.toString.call(value);
};
const isSymbol = function(value) {
    const type = typeof value;
    return type === "symbol" || type === "object" && value && getTag(value) === "[object Symbol]";
};
const isKey = function(value, object) {
    if (Array.isArray(value)) {
        return false;
    }
    const type = typeof value;
    if (type === "number" || type === "symbol" || type === "boolean" || !value || isSymbol(value)) {
        return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
};
const stringToPath = function(string) {
    const result = [];
    if (string.charCodeAt(0) === charCodeOfDot) {
        result.push("");
    }
    string.replace(rePropName, function(match, expression, quote, subString) {
        let key = match;
        if (quote) {
            key = subString.replace(reEscapeChar, "$1");
        } else if (expression) {
            key = expression.trim();
        }
        result.push(key);
    });
    return result;
};
const castPath = function(value, object) {
    if (Array.isArray(value)) {
        return value;
    } else {
        return isKey(value, object) ? [
            value
        ] : stringToPath(value);
    }
};
const toKey = function(value) {
    if (typeof value === "string" || isSymbol(value)) return value;
    const result = `${value}`;
    return result == "0" && 1 / value == -Infinity ? "-0" : result;
};
const get = function(object, path) {
    path = castPath(path, object);
    let index = 0;
    const length = path.length;
    while(object != null && index < length){
        object = object[toKey(path[index++])];
    }
    return index && index === length ? object : undefined;
};
;
}),
"[project]/Website/node_modules/csv-stringify/lib/utils/is_object.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "is_object",
    ()=>is_object
]);
const is_object = function(obj) {
    return typeof obj === "object" && obj !== null && !Array.isArray(obj);
};
;
}),
"[project]/Website/node_modules/csv-stringify/lib/api/normalize_columns.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalize_columns",
    ()=>normalize_columns
]);
const normalize_columns = function(columns) {
    if (columns === undefined || columns === null) {
        return [
            undefined,
            undefined
        ];
    }
    if (typeof columns !== "object") {
        return [
            Error('Invalid option "columns": expect an array or an object')
        ];
    }
    if (!Array.isArray(columns)) {
        const newcolumns = [];
        for(const k in columns){
            newcolumns.push({
                key: k,
                header: columns[k]
            });
        }
        columns = newcolumns;
    } else {
        const newcolumns = [];
        for (const column of columns){
            if (typeof column === "string") {
                newcolumns.push({
                    key: column,
                    header: column
                });
            } else if (typeof column === "object" && column !== null && !Array.isArray(column)) {
                if (!column.key) {
                    return [
                        Error('Invalid column definition: property "key" is required')
                    ];
                }
                if (column.header === undefined) {
                    column.header = column.key;
                }
                newcolumns.push(column);
            } else {
                return [
                    Error("Invalid column definition: expect a string or an object")
                ];
            }
        }
        columns = newcolumns;
    }
    return [
        undefined,
        columns
    ];
};
;
}),
"[project]/Website/node_modules/csv-stringify/lib/api/CsvError.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CsvError",
    ()=>CsvError
]);
class CsvError extends Error {
    constructor(code, message, ...contexts){
        if (Array.isArray(message)) message = message.join(" ");
        super(message);
        if (Error.captureStackTrace !== undefined) {
            Error.captureStackTrace(this, CsvError);
        }
        this.code = code;
        for (const context of contexts){
            for(const key in context){
                const value = context[key];
                this[key] = Buffer.isBuffer(value) ? value.toString() : value == null ? value : JSON.parse(JSON.stringify(value));
            }
        }
    }
}
;
}),
"[project]/Website/node_modules/csv-stringify/lib/utils/underscore.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "underscore",
    ()=>underscore
]);
const underscore = function(str) {
    return str.replace(/([A-Z])/g, function(_, match) {
        return "_" + match.toLowerCase();
    });
};
;
}),
"[project]/Website/node_modules/csv-stringify/lib/api/normalize_options.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalize_options",
    ()=>normalize_options
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$stringify$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/csv-stringify/lib/api/CsvError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$stringify$2f$lib$2f$api$2f$normalize_columns$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/csv-stringify/lib/api/normalize_columns.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$stringify$2f$lib$2f$utils$2f$underscore$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/csv-stringify/lib/utils/underscore.js [app-rsc] (ecmascript)");
;
;
;
const normalize_options = function(opts) {
    const options = {};
    // Merge with user options
    for(const opt in opts){
        options[(0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$stringify$2f$lib$2f$utils$2f$underscore$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["underscore"])(opt)] = opts[opt];
    }
    // Normalize option `bom`
    if (options.bom === undefined || options.bom === null || options.bom === false) {
        options.bom = false;
    } else if (options.bom !== true) {
        return [
            new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$stringify$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CsvError"]("CSV_OPTION_BOOLEAN_INVALID_TYPE", [
                "option `bom` is optional and must be a boolean value,",
                `got ${JSON.stringify(options.bom)}`
            ])
        ];
    }
    // Normalize option `delimiter`
    if (options.delimiter === undefined || options.delimiter === null) {
        options.delimiter = ",";
    } else if (Buffer.isBuffer(options.delimiter)) {
        options.delimiter = options.delimiter.toString();
    } else if (typeof options.delimiter !== "string") {
        return [
            new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$stringify$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CsvError"]("CSV_OPTION_DELIMITER_INVALID_TYPE", [
                "option `delimiter` must be a buffer or a string,",
                `got ${JSON.stringify(options.delimiter)}`
            ])
        ];
    }
    // Normalize option `quote`
    if (options.quote === undefined || options.quote === null) {
        options.quote = '"';
    } else if (options.quote === true) {
        options.quote = '"';
    } else if (options.quote === false) {
        options.quote = "";
    } else if (Buffer.isBuffer(options.quote)) {
        options.quote = options.quote.toString();
    } else if (typeof options.quote !== "string") {
        return [
            new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$stringify$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CsvError"]("CSV_OPTION_QUOTE_INVALID_TYPE", [
                "option `quote` must be a boolean, a buffer or a string,",
                `got ${JSON.stringify(options.quote)}`
            ])
        ];
    }
    // Normalize option `quoted`
    if (options.quoted === undefined || options.quoted === null) {
        options.quoted = false;
    } else {
    // todo
    }
    // Normalize option `escape_formulas`
    if (options.escape_formulas === undefined || options.escape_formulas === null) {
        options.escape_formulas = false;
    } else if (typeof options.escape_formulas !== "boolean") {
        return [
            new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$stringify$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CsvError"]("CSV_OPTION_ESCAPE_FORMULAS_INVALID_TYPE", [
                "option `escape_formulas` must be a boolean,",
                `got ${JSON.stringify(options.escape_formulas)}`
            ])
        ];
    }
    // Normalize option `quoted_empty`
    if (options.quoted_empty === undefined || options.quoted_empty === null) {
        options.quoted_empty = undefined;
    } else {
    // todo
    }
    // Normalize option `quoted_match`
    if (options.quoted_match === undefined || options.quoted_match === null || options.quoted_match === false) {
        options.quoted_match = null;
    } else if (!Array.isArray(options.quoted_match)) {
        options.quoted_match = [
            options.quoted_match
        ];
    }
    if (options.quoted_match) {
        for (const quoted_match of options.quoted_match){
            const isString = typeof quoted_match === "string";
            const isRegExp = quoted_match instanceof RegExp;
            if (!isString && !isRegExp) {
                return [
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$stringify$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CsvError"]("CSV_OPTION_QUOTED_MATCH", [
                        "option `quoted_match` must be a string or a regex,",
                        `got ${JSON.stringify(options.quoted_match)}`
                    ])
                ];
            }
        }
    }
    // Normalize option `quoted_string`
    if (options.quoted_string === undefined || options.quoted_string === null) {
        options.quoted_string = false;
    } else {
    // todo
    }
    // Normalize option `eof`
    if (options.eof === undefined || options.eof === null) {
        options.eof = true;
    } else {
    // todo
    }
    // Normalize option `escape`
    if (options.escape === undefined || options.escape === null) {
        options.escape = '"';
    } else if (Buffer.isBuffer(options.escape)) {
        options.escape = options.escape.toString();
    } else if (typeof options.escape !== "string") {
        return [
            Error(`Invalid Option: escape must be a buffer or a string, got ${JSON.stringify(options.escape)}`)
        ];
    }
    if (options.escape.length > 1) {
        return [
            Error(`Invalid Option: escape must be one character, got ${options.escape.length} characters`)
        ];
    }
    // Normalize option `header`
    if (options.header === undefined || options.header === null || options.header === false) {
        options.header = false;
    } else if (options.header !== true) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$stringify$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_HEADER", [
            "option `header` is expected to be a boolean,",
            `got ${JSON.stringify(options.header)}`
        ], options);
    }
    // Normalize option `headers_as_comment`
    if (options.header_as_comment === undefined || options.header_as_comment === null || options.header_as_comment === false) {
        options.header_as_comment = false;
    } else if (options.header_as_comment === true) {
        options.header_as_comment = "#";
    } else if (Buffer.isBuffer(options.header_as_comment)) {
        options.header_as_comment = options.header_as_comment.toString();
    } else if (typeof options.header_as_comment !== "string") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$stringify$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_HEADER_AS_COMMENT", [
            "option `header_as_comment` must be a boolean, a string or a buffer,",
            `got ${JSON.stringify(options.header_as_comment)}`
        ], options);
    }
    // if (options.header_as_comment && !options.comment?.length) {
    //   throw new CsvError(
    //     "CSV_INVALID_OPTION_COMMENT",
    //     [
    //       "option `comment` must be a non empty string or buffer when using `header_as_comment`,",
    //       `got ${JSON.stringify(options.comment)}`,
    //     ],
    //     options,
    //   );
    // }
    // Header is always enabled with `header_as_comment`
    // if (options.header_as_comment === true) {
    //   options.header = true;
    // }
    // Normalize option `columns`
    const [errColumns, columns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$stringify$2f$lib$2f$api$2f$normalize_columns$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalize_columns"])(options.columns);
    if (errColumns !== undefined) return [
        errColumns
    ];
    options.columns = columns;
    // Normalize option `quoted`
    if (options.quoted === undefined || options.quoted === null) {
        options.quoted = false;
    } else {
    // todo
    }
    // Normalize option `cast`
    if (options.cast === undefined || options.cast === null) {
        options.cast = {};
    } else {
    // todo
    }
    // Normalize option cast.bigint
    if (options.cast.bigint === undefined || options.cast.bigint === null) {
        // Cast boolean to string by default
        options.cast.bigint = (value)=>"" + value;
    }
    // Normalize option cast.boolean
    if (options.cast.boolean === undefined || options.cast.boolean === null) {
        // Cast boolean to string by default
        options.cast.boolean = (value)=>value ? "1" : "";
    }
    // Normalize option cast.date
    if (options.cast.date === undefined || options.cast.date === null) {
        // Cast date to timestamp string by default
        options.cast.date = (value)=>"" + value.getTime();
    }
    // Normalize option cast.number
    if (options.cast.number === undefined || options.cast.number === null) {
        // Cast number to string using native casting by default
        options.cast.number = (value)=>"" + value;
    }
    // Normalize option cast.object
    if (options.cast.object === undefined || options.cast.object === null) {
        // Stringify object as JSON by default
        options.cast.object = (value)=>JSON.stringify(value);
    }
    // Normalize option cast.string
    if (options.cast.string === undefined || options.cast.string === null) {
        // Leave string untouched
        options.cast.string = function(value) {
            return value;
        };
    }
    // Normalize option `on_record`
    if (options.on_record !== undefined && typeof options.on_record !== "function") {
        return [
            Error(`Invalid Option: "on_record" must be a function.`)
        ];
    }
    // Normalize option `record_delimiter`
    if (options.record_delimiter === undefined || options.record_delimiter === null) {
        options.record_delimiter = "\n";
    } else if (Buffer.isBuffer(options.record_delimiter)) {
        options.record_delimiter = options.record_delimiter.toString();
    } else if (typeof options.record_delimiter !== "string") {
        return [
            Error(`Invalid Option: record_delimiter must be a buffer or a string, got ${JSON.stringify(options.record_delimiter)}`)
        ];
    }
    switch(options.record_delimiter){
        case "unix":
            options.record_delimiter = "\n";
            break;
        case "mac":
            options.record_delimiter = "\r";
            break;
        case "windows":
            options.record_delimiter = "\r\n";
            break;
        case "ascii":
            options.record_delimiter = "\u001e";
            break;
        case "unicode":
            options.record_delimiter = "\u2028";
            break;
    }
    return [
        undefined,
        options
    ];
};
;
}),
"[project]/Website/node_modules/csv-stringify/lib/api/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stringifier",
    ()=>stringifier
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$stringify$2f$lib$2f$utils$2f$get$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/csv-stringify/lib/utils/get.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$stringify$2f$lib$2f$utils$2f$is_object$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/csv-stringify/lib/utils/is_object.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$stringify$2f$lib$2f$api$2f$normalize_columns$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/csv-stringify/lib/api/normalize_columns.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$stringify$2f$lib$2f$api$2f$normalize_options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/csv-stringify/lib/api/normalize_options.js [app-rsc] (ecmascript)");
;
;
;
;
const bom_utf8 = Buffer.from([
    239,
    187,
    191
]);
const stringifier = function(options, state, info) {
    return {
        options: options,
        state: state,
        info: info,
        __transform: function(chunk, push) {
            // Chunk validation
            if (!Array.isArray(chunk) && typeof chunk !== "object") {
                return Error(`Invalid Record: expect an array or an object, got ${JSON.stringify(chunk)}`);
            }
            // Detect columns from the first record
            if (this.info.records === 0) {
                if (Array.isArray(chunk)) {
                    if (this.options.header === true && this.options.columns === undefined) {
                        return Error("Undiscoverable Columns: header option requires column option or object records");
                    }
                } else if (this.options.columns === undefined) {
                    const [err, columns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$stringify$2f$lib$2f$api$2f$normalize_columns$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalize_columns"])(Object.keys(chunk));
                    if (err) return;
                    this.options.columns = columns;
                }
            }
            // Emit the header
            if (this.info.records === 0) {
                this.bom(push);
                const err = this.headers(push);
                if (err) return err;
            }
            // Emit and stringify the record if an object or an array
            try {
                // this.emit('record', chunk, this.info.records);
                if (this.options.on_record) {
                    this.options.on_record(chunk, this.info.records);
                }
            } catch (err) {
                return err;
            }
            // Convert the record into a string
            let err, chunk_string;
            if (this.options.eof) {
                [err, chunk_string] = this.stringify(chunk);
                if (err) return err;
                if (chunk_string === undefined) {
                    return;
                } else {
                    chunk_string = chunk_string + this.options.record_delimiter;
                }
            } else {
                [err, chunk_string] = this.stringify(chunk);
                if (err) return err;
                if (chunk_string === undefined) {
                    return;
                } else {
                    if (this.options.header || this.info.records) {
                        chunk_string = this.options.record_delimiter + chunk_string;
                    }
                }
            }
            // Emit the csv
            this.info.records++;
            push(chunk_string);
        },
        stringify: function(chunk, chunkIsHeader = false) {
            if (typeof chunk !== "object") {
                return [
                    undefined,
                    chunk
                ];
            }
            const { columns } = this.options;
            const record = [];
            // Record is an array
            if (Array.isArray(chunk)) {
                // We are getting an array but the user has specified output columns. In
                // this case, we respect the columns indexes
                if (columns) {
                    chunk.splice(columns.length);
                }
                // Cast record elements
                for(let i = 0; i < chunk.length; i++){
                    const field = chunk[i];
                    const [err, value] = this.__cast(field, {
                        index: i,
                        column: i,
                        records: this.info.records,
                        header: chunkIsHeader
                    });
                    if (err) return [
                        err
                    ];
                    record[i] = [
                        value,
                        field
                    ];
                }
            // Record is a literal object
            // `columns` is always defined: it is either provided or discovered.
            } else {
                for(let i = 0; i < columns.length; i++){
                    const field = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$stringify$2f$lib$2f$utils$2f$get$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["get"])(chunk, columns[i].key);
                    const [err, value] = this.__cast(field, {
                        index: i,
                        column: columns[i].key,
                        records: this.info.records,
                        header: chunkIsHeader
                    });
                    if (err) return [
                        err
                    ];
                    record[i] = [
                        value,
                        field
                    ];
                }
            }
            let csvrecord = "";
            for(let i = 0; i < record.length; i++){
                let options, err;
                let [value, field] = record[i];
                if (typeof value === "string") {
                    options = this.options;
                } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$stringify$2f$lib$2f$utils$2f$is_object$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["is_object"])(value)) {
                    options = value;
                    value = options.value;
                    delete options.value;
                    if (typeof value !== "string" && value !== undefined && value !== null) {
                        if (err) return [
                            Error(`Invalid Casting Value: returned value must return a string, null or undefined, got ${JSON.stringify(value)}`)
                        ];
                    }
                    options = {
                        ...this.options,
                        ...options
                    };
                    [err, options] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$stringify$2f$lib$2f$api$2f$normalize_options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalize_options"])(options);
                    if (err !== undefined) {
                        return [
                            err
                        ];
                    }
                } else if (value === undefined || value === null) {
                    options = this.options;
                } else {
                    return [
                        Error(`Invalid Casting Value: returned value must return a string, an object, null or undefined, got ${JSON.stringify(value)}`)
                    ];
                }
                const { delimiter, escape, quote, quoted, quoted_empty, quoted_string, quoted_match, record_delimiter, escape_formulas } = options;
                if ("" === value && "" === field) {
                    let quotedMatch = quoted_match && quoted_match.filter((quoted_match)=>{
                        if (typeof quoted_match === "string") {
                            return value.indexOf(quoted_match) !== -1;
                        } else {
                            return quoted_match.test(value);
                        }
                    });
                    quotedMatch = quotedMatch && quotedMatch.length > 0;
                    const shouldQuote = quotedMatch || true === quoted_empty || true === quoted_string && false !== quoted_empty;
                    if (shouldQuote === true) {
                        value = quote + value + quote;
                    }
                    csvrecord += value;
                } else if (value) {
                    if (typeof value !== "string") {
                        return [
                            Error(`Formatter must return a string, null or undefined, got ${JSON.stringify(value)}`)
                        ];
                    }
                    const containsdelimiter = delimiter.length && value.indexOf(delimiter) >= 0;
                    const containsQuote = quote !== "" && value.indexOf(quote) >= 0;
                    const containsEscape = value.indexOf(escape) >= 0 && escape !== quote;
                    const containsRecordDelimiter = value.indexOf(record_delimiter) >= 0;
                    const quotedString = quoted_string && typeof field === "string";
                    let quotedMatch = quoted_match && quoted_match.filter((quoted_match)=>{
                        if (typeof quoted_match === "string") {
                            return value.indexOf(quoted_match) !== -1;
                        } else {
                            return quoted_match.test(value);
                        }
                    });
                    quotedMatch = quotedMatch && quotedMatch.length > 0;
                    // See https://github.com/adaltas/node-csv/pull/387
                    // More about CSV injection or formula injection, when websites embed
                    // untrusted input inside CSV files:
                    // https://owasp.org/www-community/attacks/CSV_Injection
                    // http://georgemauer.net/2017/10/07/csv-injection.html
                    // Apple Numbers unicode normalization is empirical from testing
                    if (escape_formulas) {
                        switch(value[0]){
                            case "=":
                            case "+":
                            case "-":
                            case "@":
                            case "\t":
                            case "\r":
                            case "\uFF1D":
                            case "\uFF0B":
                            case "\uFF0D":
                            case "\uFF20":
                                value = `'${value}`;
                                break;
                        }
                    }
                    const shouldQuote = containsQuote === true || containsdelimiter || containsRecordDelimiter || quoted || quotedString || quotedMatch;
                    if (shouldQuote === true && containsEscape === true) {
                        const regexp = escape === "\\" ? new RegExp(escape + escape, "g") : new RegExp(escape, "g");
                        value = value.replace(regexp, escape + escape);
                    }
                    if (containsQuote === true) {
                        const regexp = new RegExp(quote, "g");
                        value = value.replace(regexp, escape + quote);
                    }
                    if (shouldQuote === true) {
                        value = quote + value + quote;
                    }
                    csvrecord += value;
                } else if (quoted_empty === true || field === "" && quoted_string === true && quoted_empty !== false) {
                    csvrecord += quote + quote;
                }
                if (i !== record.length - 1) {
                    csvrecord += delimiter;
                }
            }
            return [
                undefined,
                csvrecord
            ];
        },
        bom: function(push) {
            if (this.options.bom !== true) {
                return;
            }
            push(bom_utf8);
        },
        headers: function(push) {
            if (this.options.header === false) {
                return;
            }
            if (this.options.columns === undefined) {
                return;
            }
            let err;
            let headers = this.options.columns.map((column)=>column.header);
            if (this.options.eof) {
                [err, headers] = this.stringify(headers, true);
                headers += this.options.record_delimiter;
            } else {
                [err, headers] = this.stringify(headers);
            }
            if (err) return err;
            if (this.options.header_as_comment) {
                headers = this.options.header_as_comment + " " + headers;
            }
            push(headers);
        },
        __cast: function(value, context) {
            const type = typeof value;
            try {
                if (type === "string") {
                    // Fine for 99% of the cases
                    return [
                        undefined,
                        this.options.cast.string(value, context)
                    ];
                } else if (type === "bigint") {
                    return [
                        undefined,
                        this.options.cast.bigint(value, context)
                    ];
                } else if (type === "number") {
                    return [
                        undefined,
                        this.options.cast.number(value, context)
                    ];
                } else if (type === "boolean") {
                    return [
                        undefined,
                        this.options.cast.boolean(value, context)
                    ];
                } else if (value instanceof Date) {
                    return [
                        undefined,
                        this.options.cast.date(value, context)
                    ];
                } else if (type === "object" && value !== null) {
                    return [
                        undefined,
                        this.options.cast.object(value, context)
                    ];
                } else {
                    return [
                        undefined,
                        value,
                        value
                    ];
                }
            } catch (err) {
                return [
                    err
                ];
            }
        }
    };
};
;
}),
"[project]/Website/node_modules/csv-stringify/lib/sync.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stringify",
    ()=>stringify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$stringify$2f$lib$2f$api$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/csv-stringify/lib/api/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$stringify$2f$lib$2f$api$2f$normalize_options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/csv-stringify/lib/api/normalize_options.js [app-rsc] (ecmascript)");
;
;
const stringify = function(records, opts = {}) {
    const data = [];
    const [err, options] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$stringify$2f$lib$2f$api$2f$normalize_options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalize_options"])(opts);
    if (err !== undefined) throw err;
    const state = {
        stop: false
    };
    // Information
    const info = {
        records: 0
    };
    const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$stringify$2f$lib$2f$api$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringifier"])(options, state, info);
    for (const record of records){
        const err = api.__transform(record, function(record) {
            data.push(record);
        });
        if (err !== undefined) throw err;
    }
    if (data.length === 0) {
        api.bom((d)=>{
            data.push(d);
        });
        const err = api.headers((headers)=>{
            data.push(headers);
        });
        if (err !== undefined) throw err;
    }
    return data.join("");
};
;
}),
];

//# sourceMappingURL=798be_1420cc5b._.js.map