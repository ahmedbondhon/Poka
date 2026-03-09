(function(define){var __define; typeof define === "function" && (__define=define,define=null);
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2U0HK":[function(require,module,exports) {
var u = typeof globalThis.process < "u" ? globalThis.process.argv : [];
var h = ()=>typeof globalThis.process < "u" ? globalThis.process.env : {};
var B = new Set(u), _ = (e)=>B.has(e), G = u.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var U = _("--dry-run"), g = ()=>_("--verbose") || h().VERBOSE === "true", N = g();
var m = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var y = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), b = (...e)=>m("\uD83D\uDD35 INFO", ...e), f = (...e)=>m("\uD83D\uDFE0 WARN", ...e), M = 0, i = (...e)=>g() && m(`\u{1F7E1} ${M++}`, ...e);
var v = ()=>{
    let e = globalThis.browser?.runtime || globalThis.chrome?.runtime, t = ()=>setInterval(e.getPlatformInfo, 24e3);
    e.onStartup.addListener(t), t();
};
var n = {
    "isContentScript": false,
    "isBackground": true,
    "isReact": false,
    "runtimes": [
        "background-service-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "D:\\Projects\\poka\\.plasmo\\static\\background\\index.ts",
    "bundleId": "c338908e704c91f1",
    "envHash": "d99a5ffa57acd638",
    "verbose": "false",
    "secure": false,
    "serverPort": 1012
};
module.bundle.HMR_BUNDLE_ID = n.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: n.verbose
    }
};
var D = module.bundle.Module;
function H(e) {
    D.call(this, e), this.hot = {
        data: module.bundle.hotData[e],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(t) {
            this._acceptCallbacks.push(t || function() {});
        },
        dispose: function(t) {
            this._disposeCallbacks.push(t);
        }
    }, module.bundle.hotData[e] = void 0;
}
module.bundle.Module = H;
module.bundle.hotData = {};
var c = globalThis.browser || globalThis.chrome || null;
function R() {
    return !n.host || n.host === "0.0.0.0" ? location.protocol.indexOf("http") === 0 ? location.hostname : "localhost" : n.host;
}
function x() {
    return !n.host || n.host === "0.0.0.0" ? "localhost" : n.host;
}
function d() {
    return n.port || location.port;
}
var P = "__plasmo_runtime_page_", S = "__plasmo_runtime_script_";
var O = `${n.secure ? "https" : "http"}://${R()}:${d()}/`;
async function k(e = 1470) {
    for(;;)try {
        await fetch(O);
        break;
    } catch  {
        await new Promise((o)=>setTimeout(o, e));
    }
}
if (c.runtime.getManifest().manifest_version === 3) {
    let e = c.runtime.getURL("/__plasmo_hmr_proxy__?url=");
    globalThis.addEventListener("fetch", function(t) {
        let o = t.request.url;
        if (o.startsWith(e)) {
            let s = new URL(decodeURIComponent(o.slice(e.length)));
            s.hostname === n.host && s.port === `${n.port}` ? (s.searchParams.set("t", Date.now().toString()), t.respondWith(fetch(s).then((r)=>new Response(r.body, {
                    headers: {
                        "Content-Type": r.headers.get("Content-Type") ?? "text/javascript"
                    }
                })))) : t.respondWith(new Response("Plasmo HMR", {
                status: 200,
                statusText: "Testing"
            }));
        }
    });
}
function E(e, t) {
    let { modules: o } = e;
    return o ? !!o[t] : !1;
}
function C(e = d()) {
    let t = x();
    return `${n.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function T(e) {
    typeof e.message == "string" && y("[plasmo/parcel-runtime]: " + e.message);
}
function L(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(C(Number(d()) + 1));
    return t.addEventListener("message", async function(o) {
        let s = JSON.parse(o.data);
        await e(s);
    }), t.addEventListener("error", T), t;
}
function A(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(C());
    return t.addEventListener("message", async function(o) {
        let s = JSON.parse(o.data);
        if (s.type === "update" && await e(s.assets), s.type === "error") for (let r of s.diagnostics.ansi){
            let l = r.codeframe || r.stack;
            f("[plasmo/parcel-runtime]: " + r.message + `
` + l + `

` + r.hints.join(`
`));
        }
    }), t.addEventListener("error", T), t.addEventListener("open", ()=>{
        b(`[plasmo/parcel-runtime]: Connected to HMR server for ${n.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        f(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${n.entryFilePath}`);
    }), t;
}
var w = module.bundle.parent, a = {
    buildReady: !1,
    bgChanged: !1,
    csChanged: !1,
    pageChanged: !1,
    scriptPorts: new Set,
    pagePorts: new Set
};
async function p(e = !1) {
    if (e || a.buildReady && a.pageChanged) {
        i("BGSW Runtime - reloading Page");
        for (let t of a.pagePorts)t.postMessage(null);
    }
    if (e || a.buildReady && (a.bgChanged || a.csChanged)) {
        i("BGSW Runtime - reloading CS");
        let t = await c?.tabs.query({
            active: !0
        });
        for (let o of a.scriptPorts){
            let s = t.some((r)=>r.id === o.sender.tab?.id);
            o.postMessage({
                __plasmo_cs_active_tab__: s
            });
        }
        c.runtime.reload();
    }
}
if (!w || !w.isParcelRequire) {
    v();
    let e = A(async (t)=>{
        i("BGSW Runtime - On HMR Update"), a.bgChanged ||= t.filter((s)=>s.envHash === n.envHash).some((s)=>E(module.bundle, s.id));
        let o = t.find((s)=>s.type === "json");
        if (o) {
            let s = new Set(t.map((l)=>l.id)), r = Object.values(o.depsByBundle).map((l)=>Object.values(l)).flat();
            a.bgChanged ||= r.every((l)=>s.has(l));
        }
        p();
    });
    e.addEventListener("open", ()=>{
        let t = setInterval(()=>e.send("ping"), 24e3);
        e.addEventListener("close", ()=>clearInterval(t));
    }), e.addEventListener("close", async ()=>{
        await k(), p(!0);
    });
}
L(async (e)=>{
    switch(i("BGSW Runtime - On Build Repackaged"), e.type){
        case "build_ready":
            a.buildReady ||= !0, p();
            break;
        case "cs_changed":
            a.csChanged ||= !0, p();
            break;
    }
});
c.runtime.onConnect.addListener(function(e) {
    let t = e.name.startsWith(P), o = e.name.startsWith(S);
    if (t || o) {
        let s = t ? a.pagePorts : a.scriptPorts;
        s.add(e), e.onDisconnect.addListener(()=>{
            s.delete(e);
        }), e.onMessage.addListener(function(r) {
            i("BGSW Runtime - On source changed", r), r.__plasmo_cs_changed__ && (a.csChanged ||= !0), r.__plasmo_page_changed__ && (a.pageChanged ||= !0), p();
        });
    }
});
c.runtime.onMessage.addListener(function(t) {
    return t.__plasmo_full_reload__ && (i("BGSW Runtime - On top-level code changed"), p()), !0;
});

},{}],"8oeFb":[function(require,module,exports) {
var _index = require("../../../background/index");

},{"../../../background/index":"leaNT"}],"leaNT":[function(require,module,exports) {
// Service worker \u2013 handles heavy tasks, messaging, and API proxying if needed
chrome.runtime.onInstalled.addListener(()=>{
    console.log("Poka installed");
});
// Listen for messages from content script or popup
chrome.runtime.onMessage.addListener((message, sender1, sendResponse)=>{
    if (message.type === "OPEN_POPUP") // Open the popup programmatically? Not directly possible.
    // Alternative: open the dashboard tab
    chrome.tabs.create({
        url: chrome.runtime.getURL("tabs/dashboard.html")
    });
    if (message.type === "CAPTURE_AND_DIAGNOSE") {
        // This would coordinate capturing, getting logs, calling AI, etc.
        // For brevity, we'll implement a simpler version.
        handleCaptureAndDiagnose(sender1.tab?.id).then(sendResponse);
        return true; // keep channel open for async response
    }
});
async function handleCaptureAndDiagnose(tabId) {
    if (!tabId) throw new Error("No tab ID");
    // 1. Capture screenshot via chrome.tabs API
    const screenshot = await new Promise((resolve, reject)=>{
        chrome.tabs.captureVisibleTab(null, {
            format: "png"
        }, (dataUrl)=>{
            if (chrome.runtime.lastError) reject(chrome.runtime.lastError);
            else resolve(dataUrl);
        });
    });
    // 2. Get logs from content script
    const logs = await new Promise((resolve)=>{
        chrome.tabs.sendMessage(tabId, {
            type: "GET_LOGS"
        }, (response)=>{
            resolve(response || {
                errors: [],
                network: []
            });
        });
    });
    // 3. Mask PII in logs (text only)
    const maskedErrors = logs.errors.map((e)=>maskText(e));
    const maskedNetwork = logs.network.map((n)=>({
            ...n,
            url: maskText(n.url || "")
        }));
    // 4. Get diagnosis from backend
    const diagnosis = await getDiagnosis({
        logs: maskedErrors,
        errors: maskedErrors,
        network: maskedNetwork,
        metadata: {
            url: sender.tab?.url || "",
            userAgent: navigator.userAgent // but this is background's UA, not page's
        }
    });
    // 5. Store snap in Supabase
    const { data, error } = await supabase.from("snaps").insert({
        screenshot,
        logs: maskedErrors,
        network: maskedNetwork,
        diagnosis,
        created_at: new Date()
    });
    if (error) throw error;
    return {
        snapId: data?.[0]?.id,
        diagnosis
    };
}

},{}]},["2U0HK","8oeFb"], "8oeFb", "parcelRequire892f")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sS0FBSyxPQUFPO1lBQ3hCLFdBQVcsVUFBVSxVQUFVLDBDQUEwQztRQUUzRTtJQUNGO0lBRUEsNEJBQTRCO0lBQzVCLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTSxTQUFTLEtBQUssU0FBUyxPQUFPO1FBQzFEO1FBQ0EsTUFBTTtRQUNOLFNBQVM7UUFDVDtRQUNBLFlBQVksSUFBSTtJQUNsQjtJQUVBLElBQUksT0FBTyxNQUFNO0lBRWpCLE9BQU87UUFBRSxRQUFRLE1BQU0sQ0FBQyxFQUFFLEVBQUU7UUFBSTtJQUFVO0FBQzVDIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS02ODQ3OTcyNWNjNjI3NGI0LmpzIiwiLnBsYXNtby9zdGF0aWMvYmFja2dyb3VuZC9pbmRleC50cyIsImJhY2tncm91bmQvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHU9dHlwZW9mIGdsb2JhbFRoaXMucHJvY2VzczxcInVcIj9nbG9iYWxUaGlzLnByb2Nlc3MuYXJndjpbXTt2YXIgaD0oKT0+dHlwZW9mIGdsb2JhbFRoaXMucHJvY2VzczxcInVcIj9nbG9iYWxUaGlzLnByb2Nlc3MuZW52Ont9O3ZhciBCPW5ldyBTZXQodSksXz1lPT5CLmhhcyhlKSxHPXUuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgVT1fKFwiLS1kcnktcnVuXCIpLGc9KCk9Pl8oXCItLXZlcmJvc2VcIil8fGgoKS5WRVJCT1NFPT09XCJ0cnVlXCIsTj1nKCk7dmFyIG09KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIHk9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxiPSguLi5lKT0+bShcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLGY9KC4uLmUpPT5tKFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksTT0wLGk9KC4uLmUpPT5nKCkmJm0oYFxcdXsxRjdFMX0gJHtNKyt9YCwuLi5lKTt2YXIgdj0oKT0+e2xldCBlPWdsb2JhbFRoaXMuYnJvd3Nlcj8ucnVudGltZXx8Z2xvYmFsVGhpcy5jaHJvbWU/LnJ1bnRpbWUsdD0oKT0+c2V0SW50ZXJ2YWwoZS5nZXRQbGF0Zm9ybUluZm8sMjRlMyk7ZS5vblN0YXJ0dXAuYWRkTGlzdGVuZXIodCksdCgpfTt2YXIgbj17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOnRydWUsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcImJhY2tncm91bmQtc2VydmljZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIkQ6XFxcXFByb2plY3RzXFxcXHBva2FcXFxcLnBsYXNtb1xcXFxzdGF0aWNcXFxcYmFja2dyb3VuZFxcXFxpbmRleC50c1wiLFwiYnVuZGxlSWRcIjpcImMzMzg5MDhlNzA0YzkxZjFcIixcImVudkhhc2hcIjpcImQ5OWE1ZmZhNTdhY2Q2MzhcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjoxMDEyfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9bi5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOm4udmVyYm9zZX19O3ZhciBEPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIEgoZSl7RC5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1IO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgYz1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2Z1bmN0aW9uIFIoKXtyZXR1cm4hbi5ob3N0fHxuLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpuLmhvc3R9ZnVuY3Rpb24geCgpe3JldHVybiFuLmhvc3R8fG4uaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6bi5ob3N0fWZ1bmN0aW9uIGQoKXtyZXR1cm4gbi5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBQPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiLFM9XCJfX3BsYXNtb19ydW50aW1lX3NjcmlwdF9cIjt2YXIgTz1gJHtuLnNlY3VyZT9cImh0dHBzXCI6XCJodHRwXCJ9Oi8vJHtSKCl9OiR7ZCgpfS9gO2FzeW5jIGZ1bmN0aW9uIGsoZT0xNDcwKXtmb3IoOzspdHJ5e2F3YWl0IGZldGNoKE8pO2JyZWFrfWNhdGNoe2F3YWl0IG5ldyBQcm9taXNlKG89PnNldFRpbWVvdXQobyxlKSl9fWlmKGMucnVudGltZS5nZXRNYW5pZmVzdCgpLm1hbmlmZXN0X3ZlcnNpb249PT0zKXtsZXQgZT1jLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIik7Z2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKFwiZmV0Y2hcIixmdW5jdGlvbih0KXtsZXQgbz10LnJlcXVlc3QudXJsO2lmKG8uc3RhcnRzV2l0aChlKSl7bGV0IHM9bmV3IFVSTChkZWNvZGVVUklDb21wb25lbnQoby5zbGljZShlLmxlbmd0aCkpKTtzLmhvc3RuYW1lPT09bi5ob3N0JiZzLnBvcnQ9PT1gJHtuLnBvcnR9YD8ocy5zZWFyY2hQYXJhbXMuc2V0KFwidFwiLERhdGUubm93KCkudG9TdHJpbmcoKSksdC5yZXNwb25kV2l0aChmZXRjaChzKS50aGVuKHI9Pm5ldyBSZXNwb25zZShyLmJvZHkse2hlYWRlcnM6e1wiQ29udGVudC1UeXBlXCI6ci5oZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKT8/XCJ0ZXh0L2phdmFzY3JpcHRcIn19KSkpKTp0LnJlc3BvbmRXaXRoKG5ldyBSZXNwb25zZShcIlBsYXNtbyBITVJcIix7c3RhdHVzOjIwMCxzdGF0dXNUZXh0OlwiVGVzdGluZ1wifSkpfX0pfWZ1bmN0aW9uIEUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBDKGU9ZCgpKXtsZXQgdD14KCk7cmV0dXJuYCR7bi5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gVChlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZ5KFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTChlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoQyhOdW1iZXIoZCgpKSsxKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcz1KU09OLnBhcnNlKG8uZGF0YSk7YXdhaXQgZShzKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsVCksdH1mdW5jdGlvbiBBKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChDKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHM9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHMudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUocy5hc3NldHMpLHMudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IHIgb2Ygcy5kaWFnbm9zdGljcy5hbnNpKXtsZXQgbD1yLmNvZGVmcmFtZXx8ci5zdGFjaztmKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK3IubWVzc2FnZStgXG5gK2wrYFxuXG5gK3IuaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixUKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntiKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7bi5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e2YoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtuLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciB3PW1vZHVsZS5idW5kbGUucGFyZW50LGE9e2J1aWxkUmVhZHk6ITEsYmdDaGFuZ2VkOiExLGNzQ2hhbmdlZDohMSxwYWdlQ2hhbmdlZDohMSxzY3JpcHRQb3J0czpuZXcgU2V0LHBhZ2VQb3J0czpuZXcgU2V0fTthc3luYyBmdW5jdGlvbiBwKGU9ITEpe2lmKGV8fGEuYnVpbGRSZWFkeSYmYS5wYWdlQ2hhbmdlZCl7aShcIkJHU1cgUnVudGltZSAtIHJlbG9hZGluZyBQYWdlXCIpO2ZvcihsZXQgdCBvZiBhLnBhZ2VQb3J0cyl0LnBvc3RNZXNzYWdlKG51bGwpfWlmKGV8fGEuYnVpbGRSZWFkeSYmKGEuYmdDaGFuZ2VkfHxhLmNzQ2hhbmdlZCkpe2koXCJCR1NXIFJ1bnRpbWUgLSByZWxvYWRpbmcgQ1NcIik7bGV0IHQ9YXdhaXQgYz8udGFicy5xdWVyeSh7YWN0aXZlOiEwfSk7Zm9yKGxldCBvIG9mIGEuc2NyaXB0UG9ydHMpe2xldCBzPXQuc29tZShyPT5yLmlkPT09by5zZW5kZXIudGFiPy5pZCk7by5wb3N0TWVzc2FnZSh7X19wbGFzbW9fY3NfYWN0aXZlX3RhYl9fOnN9KX1jLnJ1bnRpbWUucmVsb2FkKCl9fWlmKCF3fHwhdy5pc1BhcmNlbFJlcXVpcmUpe3YoKTtsZXQgZT1BKGFzeW5jIHQ9PntpKFwiQkdTVyBSdW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxhLmJnQ2hhbmdlZHx8PXQuZmlsdGVyKHM9PnMuZW52SGFzaD09PW4uZW52SGFzaCkuc29tZShzPT5FKG1vZHVsZS5idW5kbGUscy5pZCkpO2xldCBvPXQuZmluZChzPT5zLnR5cGU9PT1cImpzb25cIik7aWYobyl7bGV0IHM9bmV3IFNldCh0Lm1hcChsPT5sLmlkKSkscj1PYmplY3QudmFsdWVzKG8uZGVwc0J5QnVuZGxlKS5tYXAobD0+T2JqZWN0LnZhbHVlcyhsKSkuZmxhdCgpO2EuYmdDaGFuZ2VkfHw9ci5ldmVyeShsPT5zLmhhcyhsKSl9cCgpfSk7ZS5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57bGV0IHQ9c2V0SW50ZXJ2YWwoKCk9PmUuc2VuZChcInBpbmdcIiksMjRlMyk7ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+Y2xlYXJJbnRlcnZhbCh0KSl9KSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLGFzeW5jKCk9Pnthd2FpdCBrKCkscCghMCl9KX1MKGFzeW5jIGU9Pntzd2l0Y2goaShcIkJHU1cgUnVudGltZSAtIE9uIEJ1aWxkIFJlcGFja2FnZWRcIiksZS50eXBlKXtjYXNlXCJidWlsZF9yZWFkeVwiOnthLmJ1aWxkUmVhZHl8fD0hMCxwKCk7YnJlYWt9Y2FzZVwiY3NfY2hhbmdlZFwiOnthLmNzQ2hhbmdlZHx8PSEwLHAoKTticmVha319fSk7Yy5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihmdW5jdGlvbihlKXtsZXQgdD1lLm5hbWUuc3RhcnRzV2l0aChQKSxvPWUubmFtZS5zdGFydHNXaXRoKFMpO2lmKHR8fG8pe2xldCBzPXQ/YS5wYWdlUG9ydHM6YS5zY3JpcHRQb3J0cztzLmFkZChlKSxlLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e3MuZGVsZXRlKGUpfSksZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24ocil7aShcIkJHU1cgUnVudGltZSAtIE9uIHNvdXJjZSBjaGFuZ2VkXCIsciksci5fX3BsYXNtb19jc19jaGFuZ2VkX18mJihhLmNzQ2hhbmdlZHx8PSEwKSxyLl9fcGxhc21vX3BhZ2VfY2hhbmdlZF9fJiYoYS5wYWdlQ2hhbmdlZHx8PSEwKSxwKCl9KX19KTtjLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uKHQpe3JldHVybiB0Ll9fcGxhc21vX2Z1bGxfcmVsb2FkX18mJihpKFwiQkdTVyBSdW50aW1lIC0gT24gdG9wLWxldmVsIGNvZGUgY2hhbmdlZFwiKSxwKCkpLCEwfSk7XG4iLCJpbXBvcnQgXCIuLi8uLi8uLi9iYWNrZ3JvdW5kL2luZGV4XCIiLCIvLyBTZXJ2aWNlIHdvcmtlciDigJMgaGFuZGxlcyBoZWF2eSB0YXNrcywgbWVzc2FnaW5nLCBhbmQgQVBJIHByb3h5aW5nIGlmIG5lZWRlZFxyXG5cclxuY2hyb21lLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdQb2thIGluc3RhbGxlZCcpO1xyXG59KTtcclxuXHJcbi8vIExpc3RlbiBmb3IgbWVzc2FnZXMgZnJvbSBjb250ZW50IHNjcmlwdCBvciBwb3B1cFxyXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XHJcbiAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ09QRU5fUE9QVVAnKSB7XHJcbiAgICAvLyBPcGVuIHRoZSBwb3B1cCBwcm9ncmFtbWF0aWNhbGx5PyBOb3QgZGlyZWN0bHkgcG9zc2libGUuXHJcbiAgICAvLyBBbHRlcm5hdGl2ZTogb3BlbiB0aGUgZGFzaGJvYXJkIHRhYlxyXG4gICAgY2hyb21lLnRhYnMuY3JlYXRlKHsgdXJsOiBjaHJvbWUucnVudGltZS5nZXRVUkwoJ3RhYnMvZGFzaGJvYXJkLmh0bWwnKSB9KTtcclxuICB9XHJcblxyXG4gIGlmIChtZXNzYWdlLnR5cGUgPT09ICdDQVBUVVJFX0FORF9ESUFHTk9TRScpIHtcclxuICAgIC8vIFRoaXMgd291bGQgY29vcmRpbmF0ZSBjYXB0dXJpbmcsIGdldHRpbmcgbG9ncywgY2FsbGluZyBBSSwgZXRjLlxyXG4gICAgLy8gRm9yIGJyZXZpdHksIHdlJ2xsIGltcGxlbWVudCBhIHNpbXBsZXIgdmVyc2lvbi5cclxuICAgIGhhbmRsZUNhcHR1cmVBbmREaWFnbm9zZShzZW5kZXIudGFiPy5pZCkudGhlbihzZW5kUmVzcG9uc2UpO1xyXG4gICAgcmV0dXJuIHRydWU7IC8vIGtlZXAgY2hhbm5lbCBvcGVuIGZvciBhc3luYyByZXNwb25zZVxyXG4gIH1cclxufSk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVDYXB0dXJlQW5kRGlhZ25vc2UodGFiSWQ/OiBudW1iZXIpIHtcclxuICBpZiAoIXRhYklkKSB0aHJvdyBuZXcgRXJyb3IoJ05vIHRhYiBJRCcpO1xyXG5cclxuICAvLyAxLiBDYXB0dXJlIHNjcmVlbnNob3QgdmlhIGNocm9tZS50YWJzIEFQSVxyXG4gIGNvbnN0IHNjcmVlbnNob3QgPSBhd2FpdCBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGNocm9tZS50YWJzLmNhcHR1cmVWaXNpYmxlVGFiKG51bGwsIHsgZm9ybWF0OiAncG5nJyB9LCAoZGF0YVVybCkgPT4ge1xyXG4gICAgICBpZiAoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKSByZWplY3QoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKTtcclxuICAgICAgZWxzZSByZXNvbHZlKGRhdGFVcmwpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIDIuIEdldCBsb2dzIGZyb20gY29udGVudCBzY3JpcHRcclxuICBjb25zdCBsb2dzID0gYXdhaXQgbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSkgPT4ge1xyXG4gICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHsgdHlwZTogJ0dFVF9MT0dTJyB9LCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmVzb2x2ZShyZXNwb25zZSB8fCB7IGVycm9yczogW10sIG5ldHdvcms6IFtdIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIDMuIE1hc2sgUElJIGluIGxvZ3MgKHRleHQgb25seSlcclxuICBjb25zdCBtYXNrZWRFcnJvcnMgPSBsb2dzLmVycm9ycy5tYXAoKGU6IHN0cmluZykgPT4gbWFza1RleHQoZSkpO1xyXG4gIGNvbnN0IG1hc2tlZE5ldHdvcmsgPSBsb2dzLm5ldHdvcmsubWFwKChuOiBhbnkpID0+ICh7XHJcbiAgICAuLi5uLFxyXG4gICAgdXJsOiBtYXNrVGV4dChuLnVybCB8fCAnJylcclxuICB9KSk7XHJcblxyXG4gIC8vIDQuIEdldCBkaWFnbm9zaXMgZnJvbSBiYWNrZW5kXHJcbiAgY29uc3QgZGlhZ25vc2lzID0gYXdhaXQgZ2V0RGlhZ25vc2lzKHtcclxuICAgIGxvZ3M6IG1hc2tlZEVycm9ycywgLy8gd2UgZG9uJ3Qgc3RvcmUgbG9ncz8gd2UgbWlnaHQgd2FudCB0byBzdG9yZSBmdWxsLlxyXG4gICAgZXJyb3JzOiBtYXNrZWRFcnJvcnMsXHJcbiAgICBuZXR3b3JrOiBtYXNrZWROZXR3b3JrLFxyXG4gICAgbWV0YWRhdGE6IHtcclxuICAgICAgdXJsOiBzZW5kZXIudGFiPy51cmwgfHwgJycsXHJcbiAgICAgIHVzZXJBZ2VudDogbmF2aWdhdG9yLnVzZXJBZ2VudCAvLyBidXQgdGhpcyBpcyBiYWNrZ3JvdW5kJ3MgVUEsIG5vdCBwYWdlJ3NcclxuICAgICAgLy8gYmV0dGVyIHRvIGdldCBmcm9tIGNvbnRlbnQgc2NyaXB0XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIDUuIFN0b3JlIHNuYXAgaW4gU3VwYWJhc2VcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKCdzbmFwcycpLmluc2VydCh7XHJcbiAgICBzY3JlZW5zaG90LFxyXG4gICAgbG9nczogbWFza2VkRXJyb3JzLFxyXG4gICAgbmV0d29yazogbWFza2VkTmV0d29yayxcclxuICAgIGRpYWdub3NpcyxcclxuICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKClcclxuICB9KTtcclxuXHJcbiAgaWYgKGVycm9yKSB0aHJvdyBlcnJvcjtcclxuXHJcbiAgcmV0dXJuIHsgc25hcElkOiBkYXRhPy5bMF0/LmlkLCBkaWFnbm9zaXMgfTtcclxufSJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJpbmRleC5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);