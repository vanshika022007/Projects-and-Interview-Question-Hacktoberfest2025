(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root-of-the-server]__c69ad7fd._.js", {

"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[project]/app/api/chat/route.ts [app-edge-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "POST": (()=>POST),
    "maxDuration": (()=>maxDuration),
    "runtime": (()=>runtime)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ai-sdk/openai/dist/index.mjs [app-edge-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$assistant$2d$ui$2f$react$2d$ai$2d$sdk$2f$dist$2f$frontendTools$2e$js__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@assistant-ui/react-ai-sdk/dist/frontendTools.js [app-edge-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ai/dist/index.mjs [app-edge-route] (ecmascript) <locals>");
;
;
;
const runtime = "edge";
const maxDuration = 30;
async function POST(req) {
    const { messages, system, tools } = await req.json();
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["streamText"])({
        model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__["openai"])("gpt-4o"),
        messages,
        // forward system prompt and tools from the frontend
        toolCallStreaming: true,
        system,
        tools: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$assistant$2d$ui$2f$react$2d$ai$2d$sdk$2f$dist$2f$frontendTools$2e$js__$5b$app$2d$edge$2d$route$5d$__$28$ecmascript$29$__["frontendTools"])(tools)
        },
        onError: console.log
    });
    return result.toDataStreamResponse();
}
}}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__c69ad7fd._.js.map