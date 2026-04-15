module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/Website/lib/csv-db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addPlanting",
    ()=>addPlanting,
    "getSessionUser",
    ()=>getSessionUser,
    "getUserPlantings",
    ()=>getUserPlantings,
    "initCSVDB",
    ()=>initCSVDB,
    "readRequests",
    ()=>readRequests,
    "readUsers",
    ()=>readUsers,
    "writeRequests",
    ()=>writeRequests,
    "writeUsers",
    ()=>writeUsers
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$sync$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Website/node_modules/csv-parse/lib/sync.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$stringify$2f$lib$2f$sync$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/csv-stringify/lib/sync.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/next/headers.js [app-route] (ecmascript)");
;
;
;
;
;
const DATA_DIR = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'data');
const USERS_FILE = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(DATA_DIR, 'users.csv');
const REQUESTS_FILE = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(DATA_DIR, 'requests.csv');
function initCSVDB() {
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(DATA_DIR)) __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].mkdirSync(DATA_DIR, {
        recursive: true
    });
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(USERS_FILE)) {
        const adminUser = {
            id: 'admin-1',
            name: 'System Admin',
            email: 'admin@greenai.com',
            phone: '0000000000',
            credits: 0,
            password: 'admin',
            isAdmin: 'true'
        };
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(USERS_FILE, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$stringify$2f$lib$2f$sync$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringify"])([
            adminUser
        ], {
            header: true
        }));
    }
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(REQUESTS_FILE)) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(REQUESTS_FILE, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$stringify$2f$lib$2f$sync$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringify"])([], {
            columns: [
                'id',
                'user_id',
                'species',
                'state',
                'district',
                'planting_date',
                'status',
                'credits_earned',
                'created_at'
            ],
            header: true
        }));
    }
}
function readUsers() {
    initCSVDB();
    const fileContent = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(USERS_FILE, 'utf-8');
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$sync$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(fileContent, {
        columns: true,
        skip_empty_lines: true
    });
}
function writeUsers(users) {
    const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$stringify$2f$lib$2f$sync$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringify"])(users, {
        header: true
    });
    __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(USERS_FILE, content);
}
function readRequests() {
    initCSVDB();
    const fileContent = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(REQUESTS_FILE, 'utf-8');
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$sync$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(fileContent, {
        columns: true,
        skip_empty_lines: true
    });
}
function writeRequests(requests) {
    const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$csv$2d$stringify$2f$lib$2f$sync$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stringify"])(requests, {
        header: true
    });
    __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(REQUESTS_FILE, content);
}
async function getSessionUser() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const sessionId = cookieStore.get('auth_session')?.value;
    if (!sessionId) return null;
    const users = readUsers();
    const user = users.find((u)=>u.id === sessionId);
    if (!user) return null;
    return {
        ...user,
        credits: Number(user.credits || 0),
        isAdmin: user.isAdmin === 'true'
    };
}
function getUserPlantings(userId) {
    const requests = readRequests();
    return requests.filter((r)=>r.user_id === userId);
}
function addPlanting(userId, planting) {
    const requests = readRequests();
    const newPlanting = {
        id: Math.random().toString(36).substr(2, 9),
        user_id: userId,
        species: planting.species || 'Unknown',
        state: planting.state || 'Unknown',
        district: planting.district || 'Unknown',
        planting_date: planting.planting_date || new Date().toISOString(),
        status: "pending",
        credits_earned: 0,
        created_at: new Date().toISOString()
    };
    requests.push(newPlanting);
    writeRequests(requests);
    return newPlanting;
}
}),
"[project]/Website/app/api/auth/sign-up/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$lib$2f$csv$2d$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/lib/csv-db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/next/headers.js [app-route] (ecmascript)");
;
;
;
async function POST(request) {
    try {
        const { name, email, phone, password } = await request.json();
        const users = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$lib$2f$csv$2d$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readUsers"])();
        // Check if email exists
        if (users.find((u)=>u.email === email)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Email already registered'
            }, {
                status: 400
            });
        }
        const newUser = {
            id: Math.random().toString(36).substr(2, 9),
            name,
            email,
            phone,
            credits: 0,
            password,
            isAdmin: 'false'
        };
        users.push(newUser);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$lib$2f$csv$2d$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeUsers"])(users);
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
        cookieStore.set('auth_session', newUser.id, {
            maxAge: 60 * 60 * 24 * 7,
            path: '/',
            httpOnly: true,
            secure: ("TURBOPACK compile-time value", "development") === 'production'
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            user: {
                id: newUser.id,
                name: newUser.name,
                isAdmin: false
            }
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal Server Error'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ee2295f1._.js.map