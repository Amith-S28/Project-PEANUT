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
"[project]/Website/lib/mock-db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addPlanting",
    ()=>addPlanting,
    "getMockSessionUser",
    ()=>getMockSessionUser,
    "getUserCredits",
    ()=>getUserCredits,
    "getUserPlantings",
    ()=>getUserPlantings,
    "initDB",
    ()=>initDB,
    "readDB",
    ()=>readDB,
    "writeDB",
    ()=>writeDB
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
const DB_FILE = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'data', 'mock-db.json');
function initDB() {
    const dir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(DB_FILE);
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(dir)) __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].mkdirSync(dir, {
        recursive: true
    });
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(DB_FILE)) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(DB_FILE, JSON.stringify({
            users: {
                "demo-user": {
                    id: "demo-user",
                    email: "demo@greenai.com",
                    display_name: "Demo Environmentalist"
                }
            },
            user_credits: {
                "demo-user": {
                    user_id: "demo-user",
                    total_credits: 500,
                    credits_earned: 500
                }
            },
            user_plantings: []
        }, null, 2));
    }
}
function readDB() {
    initDB();
    return JSON.parse(__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(DB_FILE, 'utf-8'));
}
function writeDB(data) {
    __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}
async function getMockSessionUser() {
    return {
        id: "demo-user",
        email: "demo@greenai.com",
        user_metadata: {
            display_name: "Demo Environmentalist"
        }
    };
}
function getUserCredits(userId) {
    const db = readDB();
    return db.user_credits[userId] || {
        total_credits: 0,
        credits_earned: 0
    };
}
function getUserPlantings(userId) {
    const db = readDB();
    return db.user_plantings.filter((p)=>p.user_id === userId);
}
function addPlanting(userId, planting) {
    const db = readDB();
    // Create planting
    const newPlanting = {
        ...planting,
        id: Math.random().toString(36).substr(2, 9),
        user_id: userId,
        created_at: new Date().toISOString(),
        verification_status: "verified"
    };
    db.user_plantings.push(newPlanting);
    // Add credits
    if (!db.user_credits[userId]) {
        db.user_credits[userId] = {
            user_id: userId,
            total_credits: 0,
            credits_earned: 0
        };
    }
    const creditsToEarn = planting.credits_earned || 50;
    db.user_credits[userId].total_credits += creditsToEarn;
    db.user_credits[userId].credits_earned += creditsToEarn;
    writeDB(db);
    return newPlanting;
}
}),
"[project]/Website/app/api/user/plantings/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$lib$2f$mock$2d$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Website/lib/mock-db.ts [app-route] (ecmascript)");
;
;
async function GET() {
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$lib$2f$mock$2d$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getMockSessionUser"])();
    const plantings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$lib$2f$mock$2d$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUserPlantings"])(user.id);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(plantings);
}
async function POST(request) {
    try {
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$lib$2f$mock$2d$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getMockSessionUser"])();
        const body = await request.json();
        const newPlanting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$lib$2f$mock$2d$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addPlanting"])(user.id, body);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Success",
            planting: newPlanting
        });
    } catch (e) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e4dea134._.js.map