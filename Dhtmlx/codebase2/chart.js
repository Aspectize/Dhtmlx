/*
@license

dhtmlxChart v.7.1.8 GPL

This software is covered by GPL license.
To use it in non-GPL project, you need obtain Commercial or Enterprise license
Please contact sales@dhtmlx.com. Usage without proper license is prohibited.
(c) XB Software.

*/
if (window.dhx){ window.dhx_legacy = dhx; delete window.dhx; }(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dhx"] = factory();
	else
		root["dhx"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/codebase/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 57);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {
Object.defineProperty(exports, "__esModule", { value: true });
var dom = __webpack_require__(68);
exports.el = dom.defineElement;
exports.sv = dom.defineSvgElement;
exports.view = dom.defineView;
exports.create = dom.createView;
exports.inject = dom.injectView;
exports.KEYED_LIST = dom.KEYED_LIST;
function disableHelp() {
    dom.DEVMODE.mutations = false;
    dom.DEVMODE.warnings = false;
    dom.DEVMODE.verbose = false;
    dom.DEVMODE.UNKEYED_INPUT = false;
}
exports.disableHelp = disableHelp;
function resizer(handler) {
    var resize = window.ResizeObserver;
    var activeHandler = function (node) {
        var height = node.el.offsetHeight;
        var width = node.el.offsetWidth;
        handler(width, height);
    };
    if (resize) {
        return exports.el("div.dhx-resize-observer", {
            _hooks: {
                didInsert: function (node) {
                    new resize(function () { return activeHandler(node); }).observe(node.el);
                },
            },
        });
    }
    return exports.el("iframe.dhx-resize-observer", {
        _hooks: {
            didInsert: function (node) {
                node.el.contentWindow.onresize = function () { return activeHandler(node); };
                activeHandler(node);
            },
        },
    });
}
exports.resizer = resizer;
function resizeHandler(container, handler) {
    return exports.create({
        render: function () {
            return resizer(handler);
        },
    }).mount(container);
}
exports.resizeHandler = resizeHandler;
function awaitRedraw() {
    return new Promise(function (res) {
        requestAnimationFrame(function () {
            res();
        });
    });
}
exports.awaitRedraw = awaitRedraw;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var html_1 = __webpack_require__(3);
var counter = new Date().valueOf();
function uid() {
    return "u" + counter++;
}
exports.uid = uid;
function extend(target, source, deep) {
    if (deep === void 0) { deep = true; }
    if (source) {
        for (var key in source) {
            var sobj = source[key];
            var tobj = target[key];
            if (sobj === undefined) {
                delete target[key];
            }
            else if (deep &&
                typeof tobj === "object" &&
                !(tobj instanceof Date) &&
                !(tobj instanceof Array)) {
                extend(tobj, sobj);
            }
            else {
                target[key] = sobj;
            }
        }
    }
    return target;
}
exports.extend = extend;
function copy(source, withoutInner) {
    var result = {};
    for (var key in source) {
        if (!withoutInner || !key.startsWith("$")) {
            result[key] = source[key];
        }
    }
    return result;
}
exports.copy = copy;
function naturalSort(arr) {
    return arr.sort(function (a, b) {
        var nn = typeof a === "string" ? a.localeCompare(b) : a - b;
        return nn;
    });
}
exports.naturalSort = naturalSort;
function findIndex(arr, predicate) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        if (predicate(arr[i])) {
            return i;
        }
    }
    return -1;
}
exports.findIndex = findIndex;
function isEqualString(from, to) {
    from = from.toString();
    to = to.toString();
    if (from.length > to.length) {
        return false;
    }
    for (var i = 0; i < from.length; i++) {
        if (from[i].toLowerCase() !== to[i].toLowerCase()) {
            return false;
        }
    }
    return true;
}
exports.isEqualString = isEqualString;
function singleOuterClick(fn) {
    var click = function (e) {
        if (fn(e)) {
            document.removeEventListener("click", click);
        }
    };
    document.addEventListener("click", click);
}
exports.singleOuterClick = singleOuterClick;
function detectWidgetClick(widgetId, cb) {
    var click = function (e) { return cb(html_1.locate(e, "dhx_widget_id") === widgetId); };
    document.addEventListener("click", click);
    return function () { return document.removeEventListener("click", click); };
}
exports.detectWidgetClick = detectWidgetClick;
function unwrapBox(box) {
    if (Array.isArray(box)) {
        return box[0];
    }
    return box;
}
exports.unwrapBox = unwrapBox;
function wrapBox(unboxed) {
    if (Array.isArray(unboxed)) {
        return unboxed;
    }
    return [unboxed];
}
exports.wrapBox = wrapBox;
function isDefined(some) {
    return some !== null && some !== undefined;
}
exports.isDefined = isDefined;
function range(from, to) {
    if (from > to) {
        return [];
    }
    var result = [];
    while (from <= to) {
        result.push(from++);
    }
    return result;
}
exports.range = range;
function isNumeric(val) {
    return !isNaN(val - parseFloat(val));
}
exports.isNumeric = isNumeric;
function downloadFile(data, filename, mimeType) {
    if (mimeType === void 0) { mimeType = "text/plain"; }
    var file = new Blob([data], { type: mimeType });
    if (window.navigator.msSaveOrOpenBlob) {
        // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    }
    else {
        var a_1 = document.createElement("a");
        var url_1 = URL.createObjectURL(file);
        a_1.href = url_1;
        a_1.download = filename;
        document.body.appendChild(a_1);
        a_1.click();
        setTimeout(function () {
            document.body.removeChild(a_1);
            window.URL.revokeObjectURL(url_1);
        }, 0);
    }
}
exports.downloadFile = downloadFile;
function debounce(func, wait, immediate) {
    var timeout;
    return function executedFunction() {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var later = function () {
            timeout = null;
            if (!immediate) {
                func.apply(_this, args);
            }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(this, args);
        }
    };
}
exports.debounce = debounce;
function compare(obj1, obj2) {
    for (var p in obj1) {
        if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) {
            return false;
        }
        switch (typeof obj1[p]) {
            case "object":
                if (!compare(obj1[p], obj2[p])) {
                    return false;
                }
                break;
            case "function":
                if (typeof obj2[p] === "undefined" ||
                    (p !== "compare" && obj1[p].toString() !== obj2[p].toString())) {
                    return false;
                }
                break;
            default:
                if (obj1[p] !== obj2[p]) {
                    return false;
                }
        }
    }
    for (var p in obj2) {
        if (typeof obj1[p] === "undefined") {
            return false;
        }
    }
    return true;
}
exports.compare = compare;
exports.isType = function (value) {
    var regex = /^\[object (\S+?)\]$/;
    var matches = Object.prototype.toString.call(value).match(regex) || [];
    return (matches[1] || "undefined").toLowerCase();
};
exports.isEmptyObj = function (obj) {
    for (var key in obj) {
        return false;
    }
    return true;
};
exports.getMaxArrayNymber = function (array) {
    if (!array.length)
        return;
    var maxNumber = -Infinity;
    var index = 0;
    var length = array.length;
    for (index; index < length; index++) {
        if (array[index] > maxNumber)
            maxNumber = array[index];
    }
    return maxNumber;
};
exports.getMinArrayNymber = function (array) {
    if (!array.length)
        return;
    var minNumber = +Infinity;
    var index = 0;
    var length = array.length;
    for (index; index < length; index++) {
        if (array[index] < minNumber)
            minNumber = array[index];
    }
    return minNumber;
};
exports.getStringWidth = function (value, config) {
    config = __assign({ font: "normal 14px Roboto", lineHeight: 20 }, config);
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    if (config.font)
        ctx.font = config.font;
    var width = ctx.measureText(value).width;
    canvas.remove();
    return width;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var defaultColors = [
    "#394E79",
    "#5E83BA",
    "#C2D2E9",
    "#647B37",
    "#98A468",
    "#F0D0A9",
    "#EEB98E",
    "#9A8BA5",
    "#E3C5D5",
];
function getDefaultColor(index) {
    if (index === void 0) { index = 0; }
    return defaultColors[index];
}
exports.getDefaultColor = getDefaultColor;
function locator(value) {
    if (!value) {
        return function () { return ""; };
    }
    if (typeof value === "string") {
        return function (obj) { return obj[value]; };
    }
    else {
        return value;
    }
}
exports.locator = locator;
function log10(x) {
    return Math.log(x) / Math.LN10;
}
exports.log10 = log10;
function anyArgsMemo(fn) {
    var cached = {};
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var mem = cached;
        for (var i = 0; i < args.length - 1; i++) {
            mem[args[i]] = mem[args[i]] || {};
            mem = mem[args[i]];
        }
        var last = args.length - 1;
        if (mem[last]) {
            return mem[last];
        }
        return (mem[last] = fn.apply(void 0, args));
    };
}
exports.getTextWidth = anyArgsMemo(function (text, font) {
    if (font === void 0) { font = ""; }
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    if (font) {
        ctx.font = font;
    }
    return ctx.measureText(text).width;
});
function memo(fn) {
    var cached = {};
    return function (arg) {
        if (cached[arg]) {
            return cached[arg];
        }
        return (cached[arg] = fn(arg));
    };
}
function getRgbaFromColor(color) {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 2, 2);
    var rgba = ctx.getImageData(1, 1, 1, 1).data;
    return [rgba[0], rgba[1], rgba[2]];
}
var memoizedColorFromRgba = memo(getRgbaFromColor);
function getColorShade(color, light) {
    var _a = memoizedColorFromRgba(color).map(function (value) {
        return Math.floor(value * light + 255 * (1 - light));
    }), r = _a[0], g = _a[1], b = _a[2];
    return "rgb(" + r + "," + g + "," + b + ")";
}
exports.getColorShade = getColorShade;
exports.getFontStyle = memo(function (className) {
    var chart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    chart.setAttribute("class", "dhx_chart");
    var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("class", className);
    chart.setAttribute("visibility", "hidden");
    text.textContent = "test";
    chart.appendChild(text);
    document.body.appendChild(chart);
    var style = getComputedStyle(text);
    var font = style.fontSize + " " + style.fontFamily;
    document.body.removeChild(chart);
    return font;
});
function linearGradient(grad, id) {
    var stops = grad.stops;
    var colors = stops.map(function (item) {
        return dom_1.sv("stop", {
            offset: item.offset * 100 + "%",
            "stop-color": item.color,
            "stop-opacity": item.opacity || 1,
        });
    });
    var gradient = dom_1.sv("linearGradient", {
        id: id,
        gradientTransform: "rotate(90)",
    }, colors);
    return gradient;
}
exports.linearGradient = linearGradient;
function getRadialGradient(opts, stops, id) {
    var colors = stops.map(function (item) {
        return dom_1.sv("stop", {
            offset: item.offset,
            "stop-color": item.color,
            "stop-opacity": item.opacity || 1,
        });
    });
    var gradient = dom_1.sv("radialGradient", __assign({ id: id, cx: 0, cy: 0, gradientUnits: "userSpaceOnUse" }, opts), colors);
    return gradient;
}
exports.getRadialGradient = getRadialGradient;
function euclideanDistance(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}
exports.euclideanDistance = euclideanDistance;
function verticalCenteredText(text) {
    return dom_1.sv("tspan", {
        dy: "0.5ex",
        style: {
            pointerEvents: "none",
        },
    }, text);
}
exports.verticalCenteredText = verticalCenteredText;
function verticalTopText(text) {
    return dom_1.sv("tspan", {
        dy: "-0.5ex",
    }, text);
}
exports.verticalTopText = verticalTopText;
function verticalBottomText(text) {
    return dom_1.sv("tspan", {
        dy: "1.5ex",
    }, text);
}
exports.verticalBottomText = verticalBottomText;
function calcPointRef(pointId, serieId) {
    return pointId + "_" + serieId;
}
exports.calcPointRef = calcPointRef;
function getClassesForRotateScale(position, angle) {
    var className = "";
    var classList = [];
    if (position === "left" || position === "top") {
        classList.push("start-text", "end-text");
    }
    else if (position === "right" || position === "bottom") {
        classList.push("end-text", "start-text");
    }
    switch (position) {
        case "left":
        case "right":
            if (angle === 0) {
                className = classList[1];
            }
            else if (angle > 0) {
                if (angle === 180) {
                    className = classList[0];
                }
                else if (angle > 180) {
                    if (angle < 270) {
                        className = classList[0];
                    }
                    else if (angle > 270) {
                        className = classList[1];
                    }
                }
                else if (angle < 180) {
                    if (angle > 90) {
                        className = classList[0];
                    }
                    else if (angle < 90) {
                        className = classList[1];
                    }
                }
            }
            else if (angle < 0) {
                if (angle === -180) {
                    className = classList[0];
                }
                else if (angle < -180) {
                    if (angle > -270) {
                        className = classList[0];
                    }
                    else if (angle < -270) {
                        className = classList[1];
                    }
                }
                else if (angle > -180) {
                    if (angle < -90) {
                        className = classList[0];
                    }
                    else if (angle > -90) {
                        className = classList[1];
                    }
                }
            }
            break;
        case "top":
        case "bottom":
            if (angle > 0) {
                if (angle > 180) {
                    className = classList[0];
                }
                else if (angle < 180) {
                    className = classList[1];
                }
            }
            else if (angle < 0) {
                if (angle > -180) {
                    className = classList[0];
                }
                else if (angle < -180) {
                    className = classList[1];
                }
            }
            break;
    }
    return className;
}
exports.getClassesForRotateScale = getClassesForRotateScale;
function getScales(config) {
    var scales = [];
    for (var scaleName in config) {
        var scale = config[scaleName];
        if (scale.min || scale.max || scale.maxTicks || scale.text || scale.value) {
            scales.push(scaleName);
        }
    }
    return scales;
}
exports.getScales = getScales;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
function toNode(node) {
    return typeof node === "string"
        ? document.getElementById(node) || document.querySelector(node) || document.body
        : node || document.body;
}
exports.toNode = toNode;
function eventHandler(prepare, hash, afterCall) {
    var keys = Object.keys(hash);
    return function (ev) {
        var data = prepare(ev);
        if (data !== undefined) {
            var node = ev.target;
            outer_block: while (node) {
                var cssstring = node.getAttribute ? node.getAttribute("class") || "" : "";
                if (cssstring.length) {
                    var css = cssstring.split(" ");
                    for (var j = 0; j < keys.length; j++) {
                        if (css.includes(keys[j])) {
                            if (hash[keys[j]](ev, data) === false)
                                return false;
                            else
                                break outer_block;
                        }
                    }
                }
                node = node.parentNode;
            }
        }
        if (afterCall)
            afterCall(ev);
        return true;
    };
}
exports.eventHandler = eventHandler;
function locateNode(target, attr, dir) {
    if (attr === void 0) { attr = "dhx_id"; }
    if (dir === void 0) { dir = "target"; }
    if (target instanceof Event) {
        target = target[dir];
    }
    while (target) {
        if (target.getAttribute && target.getAttribute(attr)) {
            return target;
        }
        target = target.parentNode;
    }
}
exports.locateNode = locateNode;
function locate(target, attr) {
    if (attr === void 0) { attr = "dhx_id"; }
    var node = locateNode(target, attr);
    return node ? node.getAttribute(attr) : "";
}
exports.locate = locate;
function locateNodeByClassName(target, className) {
    if (target instanceof Event) {
        target = target.target;
    }
    while (target) {
        if (className) {
            if (target.classList && target.classList.contains(className)) {
                return target;
            }
        }
        else if (target.getAttribute && target.getAttribute("dhx_id")) {
            return target;
        }
        target = target.parentNode;
    }
}
exports.locateNodeByClassName = locateNodeByClassName;
function getBox(elem) {
    var box = elem.getBoundingClientRect();
    var body = document.body;
    var scrollTop = window.pageYOffset || body.scrollTop;
    var scrollLeft = window.pageXOffset || body.scrollLeft;
    var top = box.top + scrollTop;
    var left = box.left + scrollLeft;
    var right = body.offsetWidth - box.right;
    var bottom = body.offsetHeight - box.bottom;
    var width = box.right - box.left;
    var height = box.bottom - box.top;
    return { top: top, left: left, right: right, bottom: bottom, width: width, height: height };
}
exports.getBox = getBox;
var scrollWidth = -1;
function getScrollbarWidth() {
    if (scrollWidth > -1) {
        return scrollWidth;
    }
    var scrollDiv = document.createElement("div");
    document.body.appendChild(scrollDiv);
    scrollDiv.style.cssText = "position: absolute;left: -99999px;overflow:scroll;width: 100px;height: 100px;";
    scrollWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollWidth;
}
exports.getScrollbarWidth = getScrollbarWidth;
function isIE() {
    var ua = window.navigator.userAgent;
    return ua.includes("MSIE ") || ua.includes("Trident/");
}
exports.isIE = isIE;
function isSafari() {
    var check = function (str) { return str.test(window.navigator.userAgent); };
    var chrome = check(/Chrome/);
    var firefox = check(/Firefox/);
    return !chrome && !firefox && check(/Safari/);
}
exports.isSafari = isSafari;
function getRealPosition(node) {
    var rects = node.getBoundingClientRect();
    return {
        left: rects.left + window.pageXOffset,
        right: rects.right + window.pageXOffset,
        top: rects.top + window.pageYOffset,
        bottom: rects.bottom + window.pageYOffset,
    };
}
exports.getRealPosition = getRealPosition;
function getWindowBorders() {
    return {
        rightBorder: window.pageXOffset + window.innerWidth,
        bottomBorder: window.pageYOffset + window.innerHeight,
    };
}
function horizontalCentering(pos, width, rightBorder) {
    var nodeWidth = pos.right - pos.left;
    var diff = (width - nodeWidth) / 2;
    var left = pos.left - diff;
    var right = pos.right + diff;
    if (left >= 0 && right <= rightBorder) {
        return left;
    }
    if (left < 0) {
        return 0;
    }
    return rightBorder - width;
}
function verticalCentering(pos, height, bottomBorder) {
    var nodeHeight = pos.bottom - pos.top;
    var diff = (height - nodeHeight) / 2;
    var top = pos.top - diff;
    var bottom = pos.bottom + diff;
    if (top >= 0 && bottom <= bottomBorder) {
        return top;
    }
    if (top < 0) {
        return 0;
    }
    return bottomBorder - height;
}
function placeBottomOrTop(pos, config) {
    var _a = getWindowBorders(), rightBorder = _a.rightBorder, bottomBorder = _a.bottomBorder;
    var left;
    var top;
    var bottomDiff = bottomBorder - pos.bottom - config.height;
    var topDiff = pos.top - config.height;
    if (config.mode === "bottom") {
        if (bottomDiff >= 0) {
            top = pos.bottom;
        }
        else if (topDiff >= 0) {
            top = topDiff;
        }
    }
    else {
        if (topDiff >= 0) {
            top = topDiff;
        }
        else if (bottomDiff >= 0) {
            top = pos.bottom;
        }
    }
    if (bottomDiff < 0 && topDiff < 0) {
        if (config.auto) {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            return placeRightOrLeft(pos, __assign(__assign({}, config), { mode: "right", auto: false }));
        }
        top = bottomDiff > topDiff ? pos.bottom : topDiff;
    }
    if (config.centering) {
        left = horizontalCentering(pos, config.width, rightBorder);
    }
    else {
        var leftDiff = rightBorder - pos.left - config.width;
        var rightDiff = pos.right - config.width;
        if (leftDiff >= 0) {
            left = pos.left;
        }
        else if (rightDiff >= 0) {
            left = rightDiff;
        }
        else {
            left = rightDiff > leftDiff ? pos.left : rightDiff;
        }
    }
    return { left: left, top: top };
}
function placeRightOrLeft(pos, config) {
    var _a = getWindowBorders(), rightBorder = _a.rightBorder, bottomBorder = _a.bottomBorder;
    var left;
    var top;
    var rightDiff = rightBorder - pos.right - config.width;
    var leftDiff = pos.left - config.width;
    if (config.mode === "right") {
        if (rightDiff >= 0) {
            left = pos.right;
        }
        else if (leftDiff >= 0) {
            left = leftDiff;
        }
    }
    else {
        if (leftDiff >= 0) {
            left = leftDiff;
        }
        else if (rightDiff >= 0) {
            left = pos.right;
        }
    }
    if (leftDiff < 0 && rightDiff < 0) {
        if (config.auto) {
            return placeBottomOrTop(pos, __assign(__assign({}, config), { mode: "bottom", auto: false }));
        }
        left = leftDiff > rightDiff ? leftDiff : pos.right;
    }
    if (config.centering) {
        top = verticalCentering(pos, config.height, rightBorder);
    }
    else {
        var bottomDiff = pos.bottom - config.height;
        var topDiff = bottomBorder - pos.top - config.height;
        if (topDiff >= 0) {
            top = pos.top;
        }
        else if (bottomDiff > 0) {
            top = bottomDiff;
        }
        else {
            top = bottomDiff > topDiff ? bottomDiff : pos.top;
        }
    }
    return { left: left, top: top };
}
function calculatePosition(pos, config) {
    var _a = config.mode === "bottom" || config.mode === "top"
        ? placeBottomOrTop(pos, config)
        : placeRightOrLeft(pos, config), left = _a.left, top = _a.top;
    return {
        left: Math.round(left) + "px",
        top: Math.round(top) + "px",
        minWidth: Math.round(config.width) + "px",
        position: "absolute",
    };
}
exports.calculatePosition = calculatePosition;
function fitPosition(node, config) {
    return calculatePosition(getRealPosition(node), config);
}
exports.fitPosition = fitPosition;
function getPageCss() {
    var css = [];
    for (var sheeti = 0; sheeti < document.styleSheets.length; sheeti++) {
        var sheet = document.styleSheets[sheeti];
        var rules = "cssRules" in sheet ? sheet.cssRules : sheet.rules;
        for (var rulei = 0; rulei < rules.length; rulei++) {
            var rule = rules[rulei];
            if ("cssText" in rule) {
                css.push(rule.cssText);
            }
            else {
                css.push(rule.selectorText + " {\n" + rule.style.cssText + "\n}\n");
            }
        }
    }
    return css.join("\n");
}
exports.getPageCss = getPageCss;
function getLabelStyle(config) {
    var helpMessage = config.helpMessage, type = config.type, labelWidth = config.labelWidth, label = config.label;
    var isZero = labelWidth && labelWidth.toString().startsWith("0");
    var required = type !== "text" && config.required;
    if (!helpMessage && !required && (!label || (label && isZero)) && (!labelWidth || isZero)) {
        return false;
    }
    return {
        style: (label || labelWidth) && !isZero && { width: labelWidth, "max-width": "100%" },
        label: label && isZero ? null : label,
    };
}
exports.getLabelStyle = getLabelStyle;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GridEvents;
(function (GridEvents) {
    GridEvents["scroll"] = "scroll";
    GridEvents["expand"] = "expand";
    GridEvents["filterChange"] = "filterChange";
    GridEvents["beforeResizeStart"] = "beforeResizeStart";
    GridEvents["resize"] = "resize";
    GridEvents["afterResizeEnd"] = "afterResizeEnd";
    GridEvents["cellClick"] = "cellClick";
    GridEvents["cellRightClick"] = "cellRightClick";
    GridEvents["cellMouseOver"] = "cellMouseOver";
    GridEvents["cellMouseDown"] = "cellMouseDown";
    GridEvents["cellDblClick"] = "cellDblClick";
    GridEvents["headerCellClick"] = "headerCellClick";
    GridEvents["footerCellClick"] = "footerCellClick";
    GridEvents["headerCellMouseOver"] = "headerCellMouseOver";
    GridEvents["footerCellMouseOver"] = "footerCellMouseOver";
    GridEvents["headerCellMouseDown"] = "headerCellMouseDown";
    GridEvents["footerCellMouseDown"] = "footerCellMouseDown";
    GridEvents["headerCellDblClick"] = "headerCellDblClick";
    GridEvents["footerCellDblClick"] = "footerCellDblClick";
    GridEvents["headerCellRightClick"] = "headerCellRightClick";
    GridEvents["footerCellRightClick"] = "footerCellRightClick";
    GridEvents["beforeEditStart"] = "beforeEditStart";
    GridEvents["afterEditStart"] = "afterEditStart";
    GridEvents["beforeEditEnd"] = "beforeEditEnd";
    GridEvents["afterEditEnd"] = "afterEditEnd";
    GridEvents["beforeKeyDown"] = "beforeKeyDown";
    GridEvents["afterKeyDown"] = "afterKeyDown";
    GridEvents["beforeColumnHide"] = "beforeColumnHide";
    GridEvents["afterColumnHide"] = "afterColumnHide";
    GridEvents["beforeColumnShow"] = "beforeColumnShow";
    GridEvents["afterColumnShow"] = "afterColumnShow";
    GridEvents["beforeRowHide"] = "beforeRowHide";
    GridEvents["afterRowHide"] = "afterRowHide";
    GridEvents["beforeRowShow"] = "beforeRowShow";
    GridEvents["afterRowShow"] = "afterRowShow";
    GridEvents["beforeRowDrag"] = "beforeRowDrag";
    GridEvents["dragRowStart"] = "dragRowStart";
    GridEvents["dragRowOut"] = "dragRowOut";
    GridEvents["dragRowIn"] = "dragRowIn";
    GridEvents["canRowDrop"] = "canRowDrop";
    GridEvents["cancelRowDrop"] = "cancelRowDrop";
    GridEvents["beforeRowDrop"] = "beforeRowDrop";
    GridEvents["afterRowDrop"] = "afterRowDrop";
    GridEvents["afterRowDrag"] = "afterRowDrag";
    GridEvents["beforeColumnDrag"] = "beforeColumnDrag";
    GridEvents["dragColumnStart"] = "dragColumnStart";
    GridEvents["dragColumnOut"] = "dragColumnOut";
    GridEvents["dragColumnIn"] = "dragColumnIn";
    GridEvents["canColumnDrop"] = "canColumnDrop";
    GridEvents["cancelColumnDrop"] = "cancelColumnDrop";
    GridEvents["beforeColumnDrop"] = "beforeColumnDrop";
    GridEvents["afterColumnDrop"] = "afterColumnDrop";
    GridEvents["afterColumnDrag"] = "afterColumnDrag";
    GridEvents["beforeRowResize"] = "beforeRowResize";
    GridEvents["afterRowResize"] = "afterRowResize";
    GridEvents["beforeSort"] = "beforeSort";
    GridEvents["afterSort"] = "afterSort";
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    GridEvents["headerInput"] = "headerInput";
})(GridEvents = exports.GridEvents || (exports.GridEvents = {}));
var GridSystemEvents;
(function (GridSystemEvents) {
    GridSystemEvents["cellTouchMove"] = "cellTouchMove";
    GridSystemEvents["cellTouchEnd"] = "cellTouchEnd";
    GridSystemEvents["headerCellTouchMove"] = "headerCellTouchMove";
    GridSystemEvents["headerCellTouchEnd"] = "headerCellTouchEnd";
})(GridSystemEvents = exports.GridSystemEvents || (exports.GridSystemEvents = {}));
var GridSelectionEvents;
(function (GridSelectionEvents) {
    GridSelectionEvents["beforeUnSelect"] = "beforeUnSelect";
    GridSelectionEvents["afterUnSelect"] = "afterUnSelect";
    GridSelectionEvents["beforeSelect"] = "beforeSelect";
    GridSelectionEvents["afterSelect"] = "afterSelect";
})(GridSelectionEvents = exports.GridSelectionEvents || (exports.GridSelectionEvents = {}));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EventSystem = /** @class */ (function () {
    function EventSystem(context) {
        this.events = {};
        this.context = context || this;
    }
    EventSystem.prototype.on = function (name, callback, context) {
        var event = name.toLowerCase();
        this.events[event] = this.events[event] || [];
        this.events[event].push({ callback: callback, context: context || this.context });
    };
    EventSystem.prototype.detach = function (name, context) {
        var event = name.toLowerCase();
        var eStack = this.events[event];
        if (context && eStack && eStack.length) {
            for (var i = eStack.length - 1; i >= 0; i--) {
                if (eStack[i].context === context) {
                    eStack.splice(i, 1);
                }
            }
        }
        else {
            this.events[event] = [];
        }
    };
    EventSystem.prototype.fire = function (name, args) {
        if (typeof args === "undefined") {
            args = [];
        }
        var event = name.toLowerCase();
        if (this.events[event]) {
            var res = this.events[event].map(function (e) { return e.callback.apply(e.context, args); });
            return !res.includes(false);
        }
        return true;
    };
    EventSystem.prototype.clear = function () {
        this.events = {};
    };
    return EventSystem;
}());
exports.EventSystem = EventSystem;
function EventsMixin(obj) {
    obj = obj || {};
    var eventSystem = new EventSystem(obj);
    obj.detachEvent = eventSystem.detach.bind(eventSystem);
    obj.attachEvent = eventSystem.on.bind(eventSystem);
    obj.callEvent = eventSystem.fire.bind(eventSystem);
}
exports.EventsMixin = EventsMixin;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var html_1 = __webpack_require__(3);
var View = /** @class */ (function () {
    function View(_container, config) {
        this.config = config || {};
        this._uid = this.config.rootId || core_1.uid();
    }
    View.prototype.mount = function (container, vnode) {
        if (vnode) {
            this._view = vnode;
        }
        if (container && this._view && this._view.mount) {
            // init view inside of HTML container
            this._container = html_1.toNode(container);
            if (this._container.tagName) {
                this._view.mount(this._container);
            }
            else if (this._container.attach) {
                this._container.attach(this);
            }
        }
    };
    View.prototype.unmount = function () {
        var rootView = this.getRootView();
        if (rootView && rootView.node) {
            rootView.unmount();
            this._view = null;
        }
    };
    View.prototype.getRootView = function () {
        return this._view;
    };
    View.prototype.getRootNode = function () {
        return this._view && this._view.node && this._view.node.el;
    };
    View.prototype.paint = function () {
        if (this._view && // was mounted
            (this._view.node || // already rendered node
                this._container)) {
            // not rendered, but has container
            this._doNotRepaint = false;
            this._view.redraw();
        }
    };
    return View;
}());
exports.View = View;
function toViewLike(view) {
    return {
        getRootView: function () { return view; },
        paint: function () { return view.node && view.redraw(); },
        mount: function (container) { return view.mount(container); },
    };
}
exports.toViewLike = toViewLike;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(9));
__export(__webpack_require__(33));
__export(__webpack_require__(74));
__export(__webpack_require__(75));
__export(__webpack_require__(13));
__export(__webpack_require__(117));
__export(__webpack_require__(10));
__export(__webpack_require__(36));
__export(__webpack_require__(35));
__export(__webpack_require__(118));
__export(__webpack_require__(34));
__export(__webpack_require__(21));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function rgbToHex(color) {
    if (color.substr(0, 1) === "#") {
        return color;
    }
    var digits = /(.*?)rgb[a]?\((\d+), *(\d+), *(\d+),* *([\d+.]*)\)/.exec(color);
    var red = parseInt(digits[2], 10)
        .toString(16)
        .padStart(2, "0");
    var green = parseInt(digits[3], 10)
        .toString(16)
        .padStart(2, "0");
    var blue = parseInt(digits[4], 10)
        .toString(16)
        .padStart(2, "0");
    return "#" + red + green + blue;
}
exports.rgbToHex = rgbToHex;
function transpose(arr, transform) {
    var columns = [];
    for (var i = 0; i < arr.length; i++) {
        var row = arr[i];
        for (var cellInd = 0; cellInd < row.length; cellInd++) {
            columns[cellInd] = columns[cellInd] || [];
            var cell = transform ? transform(row[cellInd]) : row[cellInd];
            columns[cellInd].push(cell);
        }
    }
    return columns;
}
exports.transpose = transpose;
function insert(node, newone) {
    if (typeof newone === "string") {
        node.insertAdjacentHTML("beforeend", newone);
        return node.lastChild;
    }
    else {
        node.appendChild(newone);
        return newone;
    }
}
function getStyleByClass(cssClass, container, targetClass, def) {
    var cont = container.querySelector("." + targetClass);
    var testDiv = insert(cont, "<div class=\"" + cssClass + "\"></div>");
    var styles = window.getComputedStyle(testDiv);
    var result = {
        color: styles.color === "rgb(0, 0, 0)" ? def.color : rgbToHex(styles.color),
        background: styles.backgroundColor === "rgba(0, 0, 0, 0)" ? def.background : rgbToHex(styles.backgroundColor),
        fontSize: parseFloat(styles.fontSize),
    };
    cont.removeChild(testDiv);
    // [dirty]
    if (result.color === def.color &&
        result.background === def.background &&
        result.fontSize === def.fontSize) {
        return null;
    }
    return result;
}
exports.getStyleByClass = getStyleByClass;
function removeHTMLTags(str) {
    if (typeof str !== "string" && typeof str !== "number" && typeof str !== "boolean") {
        return "";
    }
    return ("" + (str === undefined || str === null ? "" : str))
        .replace(/<[^>]*>/g, "")
        .replace(/["]/g, "&quot;")
        .trim();
}
exports.removeHTMLTags = removeHTMLTags;
function isCssSupport(property, value) {
    try {
        return CSS.supports(property, value);
    }
    catch (err) {
        var el = document.createElement("div");
        el.style[property] = value;
        return el.style[property] === value;
    }
}
exports.isCssSupport = isCssSupport;
function isRowEmpty(row) {
    if (!row) {
        return;
    }
    return Object.keys(row).reduce(function (acc, col) {
        if (col === "id" || col.startsWith("$")) {
            return acc;
        }
        if (acc && row[col] !== undefined && row[col] !== "") {
            return;
        }
        return acc;
    }, true);
}
exports.isRowEmpty = isRowEmpty;
function isSortable(config, col) {
    return (col.sortable !== false && config.sortable) || col.sortable;
}
exports.isSortable = isSortable;
function isAutoWidth(config, col) {
    if (col) {
        return (col.autoWidth !== false && config.autoWidth) || col.autoWidth;
    }
    var check = false;
    config.columns.map(function (col) {
        if ((col.autoWidth !== false && config.autoWidth) || col.autoWidth) {
            check = true;
            return;
        }
    });
    return check;
}
exports.isAutoWidth = isAutoWidth;
function isTooltip(config, element) {
    return (element.tooltip !== false && config.tooltip) || element.tooltip;
}
exports.isTooltip = isTooltip;
function isHtmlEnable(config, col) {
    return (col.htmlEnable !== false && config.htmlEnable) || col.htmlEnable;
}
exports.isHtmlEnable = isHtmlEnable;
function getTotalWidth(columns) {
    return columns.reduce(function (total, col) { return total + (col.$width || 0); }, 0);
}
exports.getTotalWidth = getTotalWidth;
function getTotalHeight(rows) {
    return rows.reduce(function (total, row) { return total + (row.$height || 0); }, 0);
}
exports.getTotalHeight = getTotalHeight;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TreeFilterType;
(function (TreeFilterType) {
    TreeFilterType["all"] = "all";
    TreeFilterType["level"] = "level";
    TreeFilterType["leafs"] = "leafs";
})(TreeFilterType = exports.TreeFilterType || (exports.TreeFilterType = {}));
var DataEvents;
(function (DataEvents) {
    DataEvents["afterAdd"] = "afteradd";
    DataEvents["beforeAdd"] = "beforeadd";
    DataEvents["removeAll"] = "removeall";
    DataEvents["beforeRemove"] = "beforeremove";
    DataEvents["afterRemove"] = "afterremove";
    DataEvents["change"] = "change";
    DataEvents["load"] = "load";
    DataEvents["loadError"] = "loaderror";
    DataEvents["beforeLazyLoad"] = "beforelazyload";
    DataEvents["afterLazyLoad"] = "afterlazyload";
})(DataEvents = exports.DataEvents || (exports.DataEvents = {}));
var DragEvents;
(function (DragEvents) {
    DragEvents["beforeDrag"] = "beforeDrag";
    DragEvents["dragStart"] = "dragStart";
    DragEvents["dragOut"] = "dragOut";
    DragEvents["dragIn"] = "dragIn";
    DragEvents["canDrop"] = "canDrop";
    DragEvents["cancelDrop"] = "cancelDrop";
    DragEvents["beforeDrop"] = "beforeDrop";
    DragEvents["afterDrop"] = "afterDrop";
    DragEvents["afterDrag"] = "afterDrag";
})(DragEvents = exports.DragEvents || (exports.DragEvents = {}));
var DataDriver;
(function (DataDriver) {
    DataDriver["json"] = "json";
    DataDriver["csv"] = "csv";
    DataDriver["xml"] = "xml";
})(DataDriver = exports.DataDriver || (exports.DataDriver = {}));


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dataproxy_1 = __webpack_require__(13);
var drivers_1 = __webpack_require__(34);
function isEqualObj(a, b) {
    for (var key in a) {
        if (a[key] !== b[key] || Array.isArray(a[key])) {
            return false;
        }
    }
    return true;
}
exports.isEqualObj = isEqualObj;
function naturalCompare(a, b) {
    if (isNaN(a) || isNaN(b)) {
        var ax_1 = [];
        var bx_1 = [];
        a.replace(/(\d+)|(\D+)/g, function (_, $1, $2) {
            ax_1.push([$1 || Infinity, $2 || ""]);
        });
        b.replace(/(\d+)|(\D+)/g, function (_, $1, $2) {
            bx_1.push([$1 || Infinity, $2 || ""]);
        });
        while (ax_1.length && bx_1.length) {
            var an = ax_1.shift();
            var bn = bx_1.shift();
            var nn = an[0] - bn[0] || an[1].localeCompare(bn[1]);
            if (nn) {
                return nn;
            }
        }
        return ax_1.length - bx_1.length;
    }
    return a - b;
}
exports.naturalCompare = naturalCompare;
function findByConf(item, conf) {
    if (typeof conf === "function") {
        if (conf.call(this, item)) {
            return item;
        }
    }
    else if (conf.by && conf.match) {
        if (item[conf.by] === conf.match) {
            return item;
        }
    }
}
exports.findByConf = findByConf;
function isDebug() {
    var dhx = window.dhx;
    if (typeof dhx !== "undefined") {
        return typeof dhx.debug !== "undefined" && dhx.debug;
    }
    // return typeof DHX_DEBUG_MODE !== "undefined" && DHX_DEBUG_MODE;
}
exports.isDebug = isDebug;
function dhxWarning(msg) {
    // tslint:disable-next-line:no-console
    console.warn(msg);
}
exports.dhxWarning = dhxWarning;
function dhxError(msg) {
    throw new Error(msg);
}
exports.dhxError = dhxError;
function toProxy(proxy) {
    var type = typeof proxy;
    if (type === "string") {
        return new dataproxy_1.DataProxy(proxy);
    }
    else if (type === "object") {
        return proxy;
    }
}
exports.toProxy = toProxy;
function toDataDriver(driver) {
    if (typeof driver === "string") {
        var dhx = window.dhx;
        var drivers = (dhx && dhx.dataDrivers) || drivers_1.dataDrivers;
        if (drivers[driver]) {
            return new drivers[driver]();
        }
        else {
            // tslint:disable-next-line:no-console
            console.warn("Incorrect data driver type:", driver);
            // tslint:disable-next-line:no-console
            console.warn("Available types:", JSON.stringify(Object.keys(drivers)));
        }
    }
    else if (typeof driver === "object") {
        return driver;
    }
}
exports.toDataDriver = toDataDriver;
function copyWithoutInner(obj, forbidden) {
    var result = {};
    for (var key in obj) {
        if (!key.startsWith("$") && (!forbidden || !forbidden[key])) {
            result[key] = obj[key];
        }
    }
    return result;
}
exports.copyWithoutInner = copyWithoutInner;
function isTreeCollection(obj) {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    return Boolean(obj.getRoot);
}
exports.isTreeCollection = isTreeCollection;
function hasJsonOrArrayStructure(str) {
    if (typeof str === "object") {
        return true;
    }
    if (typeof str !== "string") {
        return false;
    }
    try {
        var result = JSON.parse(str);
        return Object.prototype.toString.call(result) === "[object Object]" || Array.isArray(result);
    }
    catch (err) {
        return false;
    }
}
exports.hasJsonOrArrayStructure = hasJsonOrArrayStructure;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var main_1 = __webpack_require__(8);
var date_1 = __webpack_require__(16);
function normalizeArray(obj, name) {
    if (!obj[name]) {
        return;
    }
    if (typeof obj[name] === "string") {
        obj[name] = [
            {
                text: "" + obj[name],
            },
        ];
    }
    else {
        obj[name] = obj[name].map(function (el) {
            if (typeof el === "string") {
                el = { text: el };
            }
            return el;
        });
    }
}
function normalizeColumns(_a) {
    var columns = _a.columns, htmlEnable = _a.htmlEnable;
    for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
        var col = columns_1[_i];
        col.$htmlEnable = !!(col.htmlEnable || htmlEnable);
        col.$cellCss = col.$cellCss || {};
        normalizeArray(col, "header");
        normalizeArray(col, "footer");
        var isContent = col.header.reduce(function (acc, item) { return (acc = acc || !!item.content); }, false);
        if (isContent) {
            col.$uniqueData = [];
        }
        var width = col.minWidth || 100;
        if (col.width) {
            if (col.maxWidth && col.minWidth) {
                width =
                    col.width >= col.minWidth && col.width <= col.maxWidth
                        ? col.width
                        : col.width >= col.maxWidth
                            ? col.maxWidth
                            : col.minWidth;
            }
            else if (col.maxWidth) {
                width = col.width <= col.maxWidth ? col.width : col.maxWidth > 100 ? col.maxWidth : 100;
            }
            else if (col.minWidth) {
                width = col.width >= col.minWidth ? col.width : col.minWidth;
            }
            else {
                width = col.width;
            }
        }
        col.$width = col.$width || width;
        if (col.$width > col.maxWidth) {
            col.$width = col.maxWidth;
        }
        if (col.$width < col.minWidth) {
            col.$width = col.minWidth;
        }
    }
}
exports.normalizeColumns = normalizeColumns;
function countColumns(config, columns) {
    var headerRowsCount = 0;
    var footerRowsCount = 0;
    var totalWidth = 0;
    var colspans = false;
    var rowsHeadersCount = 0;
    var footer = false;
    columns.forEach(function (col) {
        headerRowsCount = Math.max(headerRowsCount, col.header.length);
        totalWidth += col.$width;
        if (col.footer) {
            footerRowsCount = Math.max(footerRowsCount, col.footer.length);
            if (!footer) {
                footer = true;
            }
        }
        if (!colspans) {
            for (var _i = 0, _a = col.header; _i < _a.length; _i++) {
                var head = _a[_i];
                if (head.colspan) {
                    colspans = true;
                    return;
                }
            }
        }
    });
    // fill missing cells
    columns.forEach(function (col) {
        if (col.header.length < headerRowsCount) {
            for (var i = 0; i < headerRowsCount; i++) {
                col.header[i] = col.header[i] || { text: "" };
            }
        }
        if (footer) {
            col.footer = col.footer || [];
        }
        if (col.footer && col.footer.length < footerRowsCount) {
            for (var i = 0; i < footerRowsCount; i++) {
                col.footer[i] = col.footer[i] || { text: "" };
            }
        }
        col.header = col.header.map(function (head) {
            if (typeof head !== "object") {
                head = { text: head };
            }
            head.css = head.css || "";
            if (!head.text && !head.css.includes("dhx_cell-empty")) {
                head.css += " dhx_cell-empty";
            }
            return head;
        });
        // find header columns indexes
        if (col.header[0].text === "") {
            rowsHeadersCount++;
        }
    });
    config.$totalWidth = totalWidth;
    config.$headerLevel = headerRowsCount;
    config.$footerLevel = footerRowsCount;
    config.$colspans = colspans;
    config.$footer = footer;
    return rowsHeadersCount;
}
exports.countColumns = countColumns;
function calculatePositions(width, height, scroll, conf, data) {
    var columns = conf.columns || [];
    var columnsLength = columns.length;
    var rows = data || [];
    var rowsLength = rows.length;
    var maxWidth = -Infinity;
    for (var index = 0; index < columnsLength; index++) {
        if (columns[index].$width > maxWidth)
            maxWidth = columns[index].$width;
    }
    var minWidth = +Infinity;
    for (var index = 0; index < columnsLength; index++) {
        if (columns[index].$width < minWidth)
            minWidth = columns[index].$width;
    }
    var maxHeight = -Infinity;
    for (var index = 0; index < rowsLength; index++) {
        if (rows[index].$height > maxHeight)
            maxHeight = rows[index].$height;
    }
    var minHeight = conf.rowHeight;
    var xReserve = Math.round(maxWidth / minWidth);
    var yReserve = Math.round(maxHeight / minHeight);
    var avrColWidth = conf.$totalWidth / columnsLength;
    var colPerPage = Math.round(width / avrColWidth);
    var avrRowHeight = conf.$totalHeight / rowsLength;
    var rowPerPage = Math.round(height / avrRowHeight);
    var x = 0;
    var scrollLeft = scroll.left;
    for (var i = 0; i < columns.length; i++) {
        var col = columns[i];
        scrollLeft = scrollLeft - col.$width;
        if (scrollLeft + avrColWidth / 2 > 0) {
            x++;
        }
        else {
            break;
        }
    }
    var y = 0;
    var scrollTop = scroll.top;
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        scrollTop = scrollTop - row.$height;
        if (scrollTop + avrRowHeight / 2 > 0) {
            y++;
        }
        else {
            break;
        }
    }
    var xStart = x - xReserve >= 0 ? x - xReserve : 0;
    var xEnd = x + colPerPage + xReserve;
    var yStart = y - yReserve >= 0 ? y - yReserve : 0;
    var yEnd = y + rowPerPage + yReserve;
    return {
        xStart: xStart,
        xEnd: xEnd,
        yStart: yStart,
        yEnd: yEnd,
    };
}
exports.calculatePositions = calculatePositions;
function getUnique(arr, name) {
    return arr
        .map(function (item) { return item[name]; })
        .filter(function (item, i, array) { return array.indexOf(item) === i; })
        .sort();
}
exports.getUnique = getUnique;
exports.getMaxRowHeight = function (row, cols, config) {
    if (config === void 0) { config = { font: "20px Roboto", lineHeight: 20 }; }
    var _a, _b;
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d", {
        alpha: false,
    });
    ctx.font = config.font;
    var definedColumns = {};
    var colLength = cols.length;
    for (var index = 0; index < colLength; index++) {
        if (cols[index].template) {
            definedColumns[cols[index].id] = {
                width: cols[index].$width || 0,
                htmlEnable: cols[index].$htmlEnable,
                template: cols[index].template,
                cols: cols[index],
            };
        }
        else {
            definedColumns[cols[index].id] = {
                width: cols[index].$width || 0,
                htmlEnable: cols[index].$htmlEnable,
            };
        }
    }
    var defaultLineBreak = [];
    var mathLineBreak = [];
    for (var _i = 0, _c = Object.entries(row); _i < _c.length; _i++) {
        var _d = _c[_i], key = _d[0], value = _d[1];
        if (definedColumns[key] &&
            key !== "id" &&
            key !== "height" &&
            !key.startsWith("$") &&
            (typeof value === "string" || typeof value === "number")) {
            var currentValue = "";
            if ((_a = definedColumns[key]) === null || _a === void 0 ? void 0 : _a.template) {
                var templateValue = definedColumns[key].template(value, row, definedColumns[key].cols);
                currentValue = definedColumns[key].htmlEnable ? main_1.removeHTMLTags(templateValue) : templateValue;
            }
            else if (typeof value === "string") {
                if (definedColumns[key].htmlEnable) {
                    currentValue = main_1.removeHTMLTags(value);
                }
                else {
                    currentValue = value;
                }
            }
            else {
                currentValue = value.toString();
            }
            defaultLineBreak.push(currentValue.split("\n").length);
            mathLineBreak.push(Math.round(ctx.measureText(currentValue).width / ((_b = definedColumns[key]) === null || _b === void 0 ? void 0 : _b.width)));
        }
    }
    var maxRows = Math.max(core_1.getMaxArrayNymber(defaultLineBreak), core_1.getMaxArrayNymber(mathLineBreak));
    canvas.remove();
    return maxRows * config.lineHeight;
};
exports.getCalculatedRowHeight = function (height, config) {
    if (config === void 0) { config = {
        rowHeight: 40,
        padding: 8,
    }; }
    var calculateHeight = config.rowHeight < 40 ? height : height + config.padding * 2;
    return height < config.rowHeight ? config.rowHeight : calculateHeight;
};
exports.getTreeCellWidthOffset = function (row) {
    return 20 + row.$level * 20 - (row.$items ? 20 : 0);
};
exports.getMaxColsWidth = function (rows, cols, config, target) {
    if (config === void 0) { config = {
        font: "normal 14.4px Arial",
    }; }
    var _a;
    if (!rows.length || !cols.length)
        return;
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d", {
        alpha: false,
    });
    ctx.font = config.font;
    var definedColumns = {};
    var colLength = cols.length;
    for (var index = 0; index < colLength; index++) {
        if (cols[index].template && target === "data") {
            definedColumns[cols[index].id] = {
                width: 20,
                htmlEnable: cols[index].$htmlEnable,
                template: cols[index].template,
                cols: cols[index],
            };
        }
        else {
            definedColumns[cols[index].id] = {
                width: 20,
                htmlEnable: cols[index].$htmlEnable,
            };
        }
    }
    var rowsLength = rows.length;
    for (var index = 0; index < rowsLength; index++) {
        for (var _i = 0, _b = Object.entries(rows[index]); _i < _b.length; _i++) {
            var _c = _b[_i], key = _c[0], value = _c[1];
            if (definedColumns[key] &&
                key !== "id" &&
                key !== "height" &&
                !key.startsWith("$") &&
                (typeof value === "string" || typeof value === "number")) {
                var currentValue = void 0;
                if (typeof ((_a = definedColumns[key]) === null || _a === void 0 ? void 0 : _a.template) === "function") {
                    var templateValue = definedColumns[key].template(value, rows[index], definedColumns[key].cols);
                    currentValue = definedColumns[key].htmlEnable
                        ? main_1.removeHTMLTags(templateValue)
                        : templateValue;
                }
                else if (definedColumns[key].htmlEnable) {
                    currentValue = main_1.removeHTMLTags(value);
                }
                else {
                    currentValue = value.toString();
                }
                var width = ctx.measureText(currentValue).width;
                if (width > definedColumns[key].width)
                    definedColumns[key].width = width;
            }
        }
    }
    canvas.remove();
    var totalColumns = {};
    for (var _d = 0, _e = Object.entries(definedColumns); _d < _e.length; _d++) {
        var _f = _e[_d], key = _f[0], value = _f[1];
        totalColumns[key] = Math.ceil(value.width);
    }
    return totalColumns;
};
function toFormat(value, type, format) {
    if (!value && typeof value !== "number") {
        return value;
    }
    var formatTemplate = function (type) {
        value = value.toString();
        var result;
        var template = format
            .replace(/#+/g, "#")
            .split("#")
            .filter(function (i) { return i; });
        value = type === "percent" ? (Number(value) * 100).toString() : value;
        var trunc = Math.trunc(Number(value)).toString();
        var formatFractionLength = format.match(/0/g) && format.match(/0/g).length;
        var truncTemplate = template.find(function (i) { return !i.includes("0"); });
        result = truncTemplate ? trunc.replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1" + truncTemplate) : trunc;
        if (formatFractionLength) {
            var delimiter = template.find(function (i) { return i.includes("0"); }).replace(/0+/g, "");
            var truncFractional = value.split(".")[1] || "0";
            var fractional = Number("0." + truncFractional)
                .toFixed(formatFractionLength)
                .toString()
                .split(".")[1]
                .padEnd(formatFractionLength, "0");
            result += delimiter + fractional;
        }
        return type === "percent" ? result + "%" : result;
    };
    switch (type) {
        case "number":
        case "percent":
            if (!format)
                format = "#";
            return core_1.isDefined(value) && !isNaN(Number(value)) ? formatTemplate(type) : value;
        case "date":
            if (!format)
                format = "%M %d %Y";
            if (typeof value === "string") {
                value = date_1.getFormattedDate(format, date_1.stringToDate(value, format));
            }
            else if (typeof value === "object") {
                value = date_1.getFormattedDate(format, value);
            }
            return value;
        default:
            return value;
    }
}
exports.toFormat = toFormat;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {(function () {
  global = this

  var queueId = 1
  var queue = {}
  var isRunningTask = false

  if (!global.setImmediate)
    global.addEventListener('message', function (e) {
      if (e.source == global){
        if (isRunningTask)
          nextTick(queue[e.data])
        else {
          isRunningTask = true
          try {
            queue[e.data]()
          } catch (e) {}

          delete queue[e.data]
          isRunningTask = false
        }
      }
    })

  function nextTick(fn) {
    if (global.setImmediate) setImmediate(fn)
    // if inside of web worker
    else if (global.importScripts) setTimeout(fn)
    else {
      queueId++
      queue[queueId] = fn
      global.postMessage(queueId, '*')
    }
  }

  Deferred.resolve = function (value) {
    if (!(this._d == 1))
      throw TypeError()

    if (value instanceof Deferred)
      return value

    return new Deferred(function (resolve) {
        resolve(value)
    })
  }

  Deferred.reject = function (value) {
    if (!(this._d == 1))
      throw TypeError()

    return new Deferred(function (resolve, reject) {
        reject(value)
    })
  }

  Deferred.all = function (arr) {
    if (!(this._d == 1))
      throw TypeError()

    if (!(arr instanceof Array))
      return Deferred.reject(TypeError())

    var d = new Deferred()

    function done(e, v) {
      if (v)
        return d.resolve(v)

      if (e)
        return d.reject(e)

      var unresolved = arr.reduce(function (cnt, v) {
        if (v && v.then)
          return cnt + 1
        return cnt
      }, 0)

      if(unresolved == 0)
        d.resolve(arr)

      arr.map(function (v, i) {
        if (v && v.then)
          v.then(function (r) {
            arr[i] = r
            done()
            return r
          }, done)
      })
    }

    done()

    return d
  }

  Deferred.race = function (arr) {
    if (!(this._d == 1))
      throw TypeError()

    if (!(arr instanceof Array))
      return Deferred.reject(TypeError())

    if (arr.length == 0)
      return new Deferred()

    var d = new Deferred()

    function done(e, v) {
      if (v)
        return d.resolve(v)

      if (e)
        return d.reject(e)

      var unresolved = arr.reduce(function (cnt, v) {
        if (v && v.then)
          return cnt + 1
        return cnt
      }, 0)

      if(unresolved == 0)
        d.resolve(arr)

      arr.map(function (v, i) {
        if (v && v.then)
          v.then(function (r) {
            done(null, r)
          }, done)
      })
    }

    done()

    return d
  }

  Deferred._d = 1


  /**
   * @constructor
   */
  function Deferred(resolver) {
    'use strict'
    if (typeof resolver != 'function' && resolver != undefined)
      throw TypeError()

    if (typeof this != 'object' || (this && this.then))
      throw TypeError()

    // states
    // 0: pending
    // 1: resolving
    // 2: rejecting
    // 3: resolved
    // 4: rejected
    var self = this,
      state = 0,
      val = 0,
      next = [],
      fn, er;

    self['promise'] = self

    self['resolve'] = function (v) {
      fn = self.fn
      er = self.er
      if (!state) {
        val = v
        state = 1

        nextTick(fire)
      }
      return self
    }

    self['reject'] = function (v) {
      fn = self.fn
      er = self.er
      if (!state) {
        val = v
        state = 2

        nextTick(fire)

      }
      return self
    }

    self['_d'] = 1

    self['then'] = function (_fn, _er) {
      if (!(this._d == 1))
        throw TypeError()

      var d = new Deferred()

      d.fn = _fn
      d.er = _er
      if (state == 3) {
        d.resolve(val)
      }
      else if (state == 4) {
        d.reject(val)
      }
      else {
        next.push(d)
      }

      return d
    }

    self['catch'] = function (_er) {
      return self['then'](null, _er)
    }

    var finish = function (type) {
      state = type || 4
      next.map(function (p) {
        state == 3 && p.resolve(val) || p.reject(val)
      })
    }

    try {
      if (typeof resolver == 'function')
        resolver(self['resolve'], self['reject'])
    } catch (e) {
      self['reject'](e)
    }

    return self

    // ref : reference to 'then' function
    // cb, ec, cn : successCallback, failureCallback, notThennableCallback
    function thennable (ref, cb, ec, cn) {
      // Promises can be rejected with other promises, which should pass through
      if (state == 2) {
        return cn()
      }
      if ((typeof val == 'object' || typeof val == 'function') && typeof ref == 'function') {
        try {

          // cnt protects against abuse calls from spec checker
          var cnt = 0
          ref.call(val, function (v) {
            if (cnt++) return
            val = v
            cb()
          }, function (v) {
            if (cnt++) return
            val = v
            ec()
          })
        } catch (e) {
          val = e
          ec()
        }
      } else {
        cn()
      }
    };

    function fire() {

      // check if it's a thenable
      var ref;
      try {
        ref = val && val.then
      } catch (e) {
        val = e
        state = 2
        return fire()
      }

      thennable(ref, function () {
        state = 1
        fire()
      }, function () {
        state = 2
        fire()
      }, function () {
        try {
          if (state == 1 && typeof fn == 'function') {
            val = fn(val)
          }

          else if (state == 2 && typeof er == 'function') {
            val = er(val)
            state = 1
          }
        } catch (e) {
          val = e
          return finish()
        }

        if (val == self) {
          val = TypeError()
          finish()
        } else thennable(ref, function () {
            finish(3)
          }, finish, function () {
            finish(state == 1 && 3)
          })

      })
    }


  }

  // Export our library object, either for node.js or as a globally scoped variable
  if (true) {
    module['exports'] = Deferred
  } else {}
})()

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(20), __webpack_require__(65).setImmediate))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ajax_1 = __webpack_require__(21);
var DataProxy = /** @class */ (function () {
    function DataProxy(url, config) {
        this.url = this._url = url;
        this.config = config;
    }
    DataProxy.prototype.updateUrl = function (url, params) {
        if (params === void 0) { params = {}; }
        this._url = this.url = url || this._url;
        this.url += this.url.includes("?") ? "&" : "?";
        for (var param in params) {
            this.config[param] = params[param];
            this.url += param + "=" + encodeURIComponent(params[param]) + "&";
        }
        this.url = this.url.slice(0, -1);
    };
    DataProxy.prototype.load = function () {
        return ajax_1.ajax.get(this.url, null, { responseType: "text" });
    };
    DataProxy.prototype.save = function (data, mode) {
        switch (mode) {
            case "delete":
                return ajax_1.ajax.delete(this.url, data);
            case "update":
            case "insert":
            default:
                return ajax_1.ajax.post(this.url, data);
        }
    };
    return DataProxy;
}());
exports.DataProxy = DataProxy;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var common_1 = __webpack_require__(2);
function getCoordinates(percent, radiusX, radiusY) {
    var x = Math.cos(2 * Math.PI * percent) * radiusX;
    var y = Math.sin(2 * Math.PI * percent) * radiusY;
    return [x, y];
}
exports.getCoordinates = getCoordinates;
function shiftCoordinates(item, dx, dy) {
    return [item[0] + dx, item[1] + dy];
}
exports.shiftCoordinates = shiftCoordinates;
exports.pieLikeHandlers = {
    onmouseover: function (shiftX, shiftY, _, node) {
        node.el.setAttribute("transform", "translate(" + shiftX + ", " + shiftY + ") scale(1.05)");
        node.el.classList.add("dhx_pie-transform-delay");
    },
    onmouseout: function (_, node) {
        node.el.setAttribute("transform", "translate(0, 0)");
        node.el.classList.remove("dhx_pie-transform-delay");
    },
};
function checkMiss(v, r) {
    var miss = 0.000001;
    return v - miss < r && v + miss > r;
}
function drawBackgroundCircle(radius, color) {
    return dom_1.sv("circle", {
        cx: 0,
        cy: 0,
        r: radius,
        fill: color,
        stroke: "none",
        class: "background-circle",
    });
}
function arc(r, flag) {
    return "M" + -r + ",0A" + r + "," + r + " 0 " + (flag ? 0 : 1) + " 1 " + r + ",0A" + r + "," + r + " 0 " + (flag ? 0 : 1) + " 1 " + -r + ",0";
}
function radarScale(data, width, height) {
    var getScaleAriaAttrs = function (text) { return ({
        "aria-label": "x-axis" + (text ? ", " + text : ""),
    }); };
    var radius;
    if (height > width) {
        radius = width / 2;
    }
    else {
        radius = height / 2;
    }
    var scalePercent = 1 / data.scales.length;
    var largeArcFlag = scalePercent > 0.5 ? 1 : 0;
    var svg = [];
    var background = drawBackgroundCircle(radius, "#FAFBFD");
    svg.push(background);
    var currentPercent = -0.25;
    var grid = [];
    var axis = data.axis;
    var gridClass = "radar-grid " + (data.zebra ? "zebra" : "");
    for (var i = 1; i < axis.length; i += 2) {
        var r1 = radius * axis[i - 1];
        var r2 = radius * axis[i];
        var d = arc(r1, true) + " " + arc(r2, false);
        var arcs = dom_1.sv("path", {
            d: d,
            fill: "none",
            stroke: "black",
            class: gridClass,
        });
        grid.push(arcs);
    }
    svg.push(grid);
    data.scales.forEach(function (item) {
        var _a = getCoordinates(currentPercent, radius, radius), startX = _a[0], startY = _a[1];
        var nextPercent = currentPercent + scalePercent;
        var _b = getCoordinates(nextPercent, radius, radius), endX = _b[0], endY = _b[1];
        var d = "M " + startX + " " + startY + " A " + radius + " " + radius + " 0 " + largeArcFlag + " 1 " + endX + " " + endY + " L 0 0";
        var path = dom_1.sv("path", {
            d: d,
            stroke: "black",
            fill: "none",
            class: "radar-scale",
        });
        svg.push(path);
        var _c = [8, 8], yTextPadding = _c[0], xTextPadding = _c[1];
        var dy = checkMiss(currentPercent, 0) || checkMiss(currentPercent, 0.5)
            ? 0
            : currentPercent < 0 || currentPercent > 0.5
                ? -yTextPadding
                : yTextPadding;
        var dx = checkMiss(currentPercent, -0.25) || checkMiss(currentPercent, 0.25)
            ? 0
            : currentPercent < -0.25 || currentPercent > 0.25
                ? -xTextPadding
                : xTextPadding;
        if (checkMiss(currentPercent, -0.25) || checkMiss(currentPercent, 0.25)) {
            var alignFn = checkMiss(currentPercent, -0.25) ? common_1.verticalTopText : common_1.verticalBottomText;
            var text = dom_1.sv("text", { x: startX + dx, y: startY + dy, class: "scale-text" }, [alignFn(item)]);
            svg.push(text);
        }
        else {
            var className = currentPercent >= -0.25 && currentPercent <= 0.25
                ? "start-text scale-text"
                : "end-text scale-text";
            var text = dom_1.sv("text", { x: startX + dx, y: startY + dy, class: className }, [
                common_1.verticalCenteredText(item),
            ]);
            svg.push(text);
        }
        currentPercent = nextPercent;
    });
    currentPercent = -0.25;
    if (data.realAxis) {
        var scaleText = data.realAxis.map(function (item, index) {
            var _a = getCoordinates(-0.25, radius * axis[index], radius * axis[index]), x = _a[0], y = _a[1];
            return dom_1.sv("text", { x: x, y: y, dx: -10, class: "radar-axis-text" }, [
                common_1.verticalCenteredText(item.toString()),
            ]);
        });
        svg.push(scaleText);
    }
    return dom_1.sv("g", __assign({ transform: "translate(" + width / 2 + ", " + height / 2 + ")" }, getScaleAriaAttrs(data.attribute)), svg);
}
exports.radarScale = radarScale;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var html_1 = __webpack_require__(3);
var FocusManager = /** @class */ (function () {
    function FocusManager() {
        var _this = this;
        this._initHandler = function (e) { return (_this._activeWidgetId = html_1.locate(e, "dhx_widget_id")); };
        document.addEventListener("click", this._initHandler);
    }
    FocusManager.prototype.getFocusId = function () {
        return this._activeWidgetId;
    };
    FocusManager.prototype.setFocusId = function (id) {
        this._activeWidgetId = id;
    };
    return FocusManager;
}());
exports.focusManager = new FocusManager();


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var core_2 = __webpack_require__(1);
exports.locale = {
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],
    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Monday"],
    cancel: "Cancel",
};
/*
    %d	day as a number with leading zero, 01..31
    %j	day as a number, 1..31
    %D	short name of the day, Su Mo Tu...
    %l	full name of the day, Sunday Monday Tuesday...
    %m	month as a number with leading zero, 01..12
    %n	month as a number, 1..12
    %M	short name of the month, Jan Feb Mar...
    %F	full name of the month, January February March...
    %y	year as a number, 2 digits
    %Y	year as a number, 4 digits
    %h	hours 12-format with leading zero, 01..12)
    %g	hours 12-format, 1..12)
    %H	hours 24-format with leading zero, 01..24
    %G	hours 24-format, 1..24
    %i	minutes with leading zero, 01..59
    %s	seconds with leading zero, 01..59
    %a	am or pm
    %A	AM or PM
    %u	milliseconds
*/
var formatters = {
    "%d": function (date) {
        var day = date.getDate();
        return day < 10 ? "0" + day : day;
    },
    "%j": function (date) { return date.getDate(); },
    "%l": function (date) {
        return exports.locale.days[date.getDay()];
    },
    "%D": function (date) {
        return exports.locale.daysShort[date.getDay()];
    },
    "%m": function (date) {
        var month = date.getMonth() + 1;
        return month < 10 ? "0" + month : month;
    },
    "%n": function (date) { return date.getMonth() + 1; },
    "%M": function (date) { return exports.locale.monthsShort[date.getMonth()]; },
    "%F": function (date) { return exports.locale.months[date.getMonth()]; },
    "%y": function (date) {
        return date
            .getFullYear()
            .toString()
            .slice(2);
    },
    "%Y": function (date) { return date.getFullYear(); },
    "%h": function (date) {
        var hours = date.getHours() % 12;
        if (hours === 0) {
            hours = 12;
        }
        return hours < 10 ? "0" + hours : hours;
    },
    "%g": function (date) {
        var hours = date.getHours() % 12;
        if (hours === 0) {
            hours = 12;
        }
        return hours;
    },
    "%H": function (date) {
        var hours = date.getHours();
        return hours < 10 ? "0" + hours : hours;
    },
    "%G": function (date) { return date.getHours(); },
    "%i": function (date) {
        var minutes = date.getMinutes();
        return minutes < 10 ? "0" + minutes : minutes;
    },
    "%s": function (date) {
        var seconds = date.getSeconds();
        return seconds < 10 ? "0" + seconds : seconds;
    },
    "%a": function (date) {
        return date.getHours() >= 12 ? "pm" : "am";
    },
    "%A": function (date) {
        return date.getHours() >= 12 ? "PM" : "AM";
    },
    "%u": function (date) { return date.getMilliseconds(); },
};
var setFormatters = {
    "%d": function (date, value) {
        var check = /(^([0-9][0-9])$)/i.test(value);
        check ? date.setDate(Number(value)) : date.setDate(Number(1));
    },
    "%j": function (date, value) {
        var check = /(^([0-9]?[0-9])$)/i.test(value);
        check ? date.setDate(Number(value)) : date.setDate(Number(1));
    },
    "%m": function (date, value) {
        var check = /(^([0-9][0-9])$)/i.test(value);
        check ? date.setMonth(Number(value) - 1) : date.setMonth(Number(0));
    },
    "%n": function (date, value) {
        var check = /(^([0-9]?[0-9])$)/i.test(value);
        check ? date.setMonth(Number(value) - 1) : date.setMonth(Number(0));
    },
    "%M": function (date, value) {
        var index = core_2.findIndex(exports.locale.monthsShort, function (v) { return v === value; });
        index === -1 ? date.setMonth(0) : date.setMonth(index);
    },
    "%F": function (date, value) {
        var index = core_2.findIndex(exports.locale.months, function (v) { return v === value; });
        index === -1 ? date.setMonth(0) : date.setMonth(index);
    },
    "%y": function (date, value) {
        var check = /(^([0-9][0-9])$)/i.test(value);
        check ? date.setFullYear(Number("20" + value)) : date.setFullYear(Number("2000"));
    },
    "%Y": function (date, value) {
        var check = /(^([0-9][0-9][0-9][0-9])$)/i.test(value);
        check ? date.setFullYear(Number(value)) : date.setFullYear(Number("2000"));
    },
    "%h": function (date, value, dateFormat) {
        var check = /(^0[1-9]|1[0-2]$)/i.test(value);
        (check && dateFormat === "pm") || dateFormat === "PM"
            ? date.setHours(Number(value))
            : date.setHours(Number(0));
    },
    "%g": function (date, value, dateFormat) {
        var check = /(^[1-9]$)|(^0[1-9]|1[0-2]$)/i.test(value);
        (check && dateFormat === "pm") || dateFormat === "PM"
            ? date.setHours(Number(value))
            : date.setHours(Number(0));
    },
    "%H": function (date, value) {
        var check = /(^[0-2][0-9]$)/i.test(value);
        check ? date.setHours(Number(value)) : date.setHours(Number(0));
    },
    "%G": function (date, value) {
        var check = /(^[1-9][0-9]?$)/i.test(value);
        check ? date.setHours(Number(value)) : date.setHours(Number(0));
    },
    "%i": function (date, value) {
        var check = /(^([0-5][0-9])$)/i.test(value);
        check ? date.setMinutes(Number(value)) : date.setMinutes(Number(0));
    },
    "%s": function (date, value) {
        var check = /(^([0-5][0-9])$)/i.test(value);
        check ? date.setSeconds(Number(value)) : date.setSeconds(Number(0));
    },
    "%a": function (date, value) {
        if (value === "pm") {
            date.setHours(date.getHours() + 12);
        }
    },
    "%A": function (date, value) {
        if (value === "PM") {
            date.setHours(date.getHours() + 12);
        }
    },
};
var TokenType;
(function (TokenType) {
    TokenType[TokenType["separator"] = 0] = "separator";
    TokenType[TokenType["datePart"] = 1] = "datePart";
})(TokenType || (TokenType = {}));
function tokenizeFormat(format) {
    var tokens = [];
    var currentSeparator = "";
    for (var i = 0; i < format.length; i++) {
        if (format[i] === "%") {
            if (currentSeparator.length > 0) {
                tokens.push({
                    type: TokenType.separator,
                    value: currentSeparator,
                });
                currentSeparator = "";
            }
            tokens.push({
                type: TokenType.datePart,
                value: format[i] + format[i + 1],
            });
            i++;
        }
        else {
            currentSeparator += format[i];
        }
    }
    if (currentSeparator.length > 0) {
        tokens.push({
            type: TokenType.separator,
            value: currentSeparator,
        });
    }
    return tokens;
}
function getFormattedDate(format, date) {
    return tokenizeFormat(format).reduce(function (res, token) {
        if (token.type === TokenType.separator) {
            return res + token.value;
        }
        else {
            if (!formatters[token.value]) {
                return res;
            }
            return res + formatters[token.value](date);
        }
    }, "");
}
exports.getFormattedDate = getFormattedDate;
function stringToDate(str, format, validate) {
    if (typeof str !== "string") {
        return;
    }
    var tokens = tokenizeFormat(format);
    var dateParts = [];
    var index = 0;
    var formatter = null;
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (token.type === TokenType.separator) {
            var sepratorIndex = str.indexOf(token.value, index);
            if (sepratorIndex === -1) {
                if (validate) {
                    return false;
                }
                throw new Error("Incorrect date, see docs: https://docs.dhtmlx.com/suite/calendar__api__calendar_dateformat_config.html");
            }
            if (formatter) {
                dateParts.push({
                    formatter: formatter,
                    value: str.slice(index, sepratorIndex),
                });
                formatter = null;
            }
            index = sepratorIndex + token.value.length;
        }
        else if (token.type === TokenType.datePart) {
            formatter = token.value;
        }
    }
    if (formatter === "%A" || formatter === "%a") {
        dateParts.unshift({
            formatter: formatter,
            value: str.slice(index),
        });
    }
    else if (formatter) {
        dateParts.push({
            formatter: formatter,
            value: str.slice(index),
        });
    }
    dateParts.reverse();
    var dateFormat;
    for (var _a = 0, dateParts_1 = dateParts; _a < dateParts_1.length; _a++) {
        var datePart = dateParts_1[_a];
        if (datePart.formatter === "%A" || datePart.formatter === "%a") {
            dateFormat = datePart.value;
        }
    }
    var date = new Date(0);
    for (var _b = 0, dateParts_2 = dateParts; _b < dateParts_2.length; _b++) {
        var datePart = dateParts_2[_b];
        if (setFormatters[datePart.formatter]) {
            setFormatters[datePart.formatter](date, datePart.value, dateFormat);
        }
    }
    return validate ? true : date;
}
exports.stringToDate = stringToDate;
var DateHelper = /** @class */ (function () {
    function DateHelper() {
    }
    DateHelper.copy = function (d) {
        return new Date(d);
    };
    DateHelper.fromYear = function (year) {
        return new Date(year, 0, 1);
    };
    DateHelper.fromYearAndMonth = function (year, month) {
        return new Date(year, month, 1);
    };
    DateHelper.weekStart = function (d, firstWeekday) {
        var diff = (d.getDay() + 7 - firstWeekday) % 7;
        return new Date(d.getFullYear(), d.getMonth(), d.getDate() - diff);
    };
    DateHelper.monthStart = function (d) {
        return new Date(d.getFullYear(), d.getMonth(), 1);
    };
    DateHelper.yearStart = function (d) {
        return new Date(d.getFullYear(), 0, 1);
    };
    DateHelper.dayStart = function (d) {
        return new Date(d.getFullYear(), d.getMonth(), d.getDate());
    };
    DateHelper.addDay = function (d, count) {
        if (count === void 0) { count = 1; }
        return new Date(d.getFullYear(), d.getMonth(), d.getDate() + count);
    };
    DateHelper.addMonth = function (d, count) {
        if (count === void 0) { count = 1; }
        return new Date(d.getFullYear(), d.getMonth() + count);
    };
    DateHelper.addYear = function (d, count) {
        if (count === void 0) { count = 1; }
        return new Date(d.getFullYear() + count, d.getMonth());
    };
    DateHelper.withHoursAndMinutes = function (d, hours, minutes, dateFormat) {
        if (dateFormat === undefined || (!dateFormat && hours === 12) || (dateFormat && hours !== 12)) {
            return new Date(d.getFullYear(), d.getMonth(), d.getDate(), hours, minutes);
        }
        else if (dateFormat && hours === 12) {
            return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, minutes);
        }
        else {
            return new Date(d.getFullYear(), d.getMonth(), d.getDate(), hours + 12, minutes);
        }
    };
    DateHelper.setMonth = function (d, month) {
        d.setMonth(month);
    };
    DateHelper.setYear = function (d, year) {
        d.setFullYear(year);
    };
    DateHelper.mergeHoursAndMinutes = function (source, target) {
        return new Date(source.getFullYear(), source.getMonth(), source.getDate(), target.getHours(), target.getMinutes());
    };
    DateHelper.isWeekEnd = function (d) {
        return d.getDay() === 0 || d.getDay() === 6;
    };
    DateHelper.getTwelweYears = function (d) {
        var y = d.getFullYear();
        var firstYear = y - (y % 12);
        return core_1.range(firstYear, firstYear + 11);
    };
    DateHelper.getWeekNumber = function (d) {
        if (d.getDay() !== 6) {
            d = DateHelper.addDay(d, 6 - d.getDay());
        }
        var dayMS = 24 * 60 * 60 * 1000;
        var ordinal = (d.valueOf() - DateHelper.yearStart(d).valueOf()) / dayMS;
        return Math.floor((ordinal - d.getDay() + 10) / 7);
    };
    DateHelper.isSameDay = function (d1, d2) {
        return (d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate());
    };
    DateHelper.toDateObject = function (date, dateFormat) {
        if (typeof date === "string") {
            return stringToDate(date, dateFormat);
        }
        else {
            return new Date(date);
        }
    };
    DateHelper.nullTimestampDate = new Date(0);
    return DateHelper;
}());
exports.DateHelper = DateHelper;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LayoutEvents;
(function (LayoutEvents) {
    LayoutEvents["beforeShow"] = "beforeShow";
    LayoutEvents["afterShow"] = "afterShow";
    LayoutEvents["beforeHide"] = "beforeHide";
    LayoutEvents["afterHide"] = "afterHide";
    LayoutEvents["beforeResizeStart"] = "beforeResizeStart";
    LayoutEvents["resize"] = "resize";
    LayoutEvents["afterResizeEnd"] = "afterResizeEnd";
    LayoutEvents["beforeAdd"] = "beforeAdd";
    LayoutEvents["afterAdd"] = "afterAdd";
    LayoutEvents["beforeRemove"] = "beforeRemove";
    LayoutEvents["afterRemove"] = "afterRemove";
    LayoutEvents["beforeCollapse"] = "beforeCollapse";
    LayoutEvents["afterCollapse"] = "afterCollapse";
    LayoutEvents["beforeExpand"] = "beforeExpand";
    LayoutEvents["afterExpand"] = "afterExpand";
})(LayoutEvents = exports.LayoutEvents || (exports.LayoutEvents = {}));
var resizeMode;
(function (resizeMode) {
    resizeMode[resizeMode["unknown"] = 0] = "unknown";
    resizeMode[resizeMode["percents"] = 1] = "percents";
    resizeMode[resizeMode["pixels"] = 2] = "pixels";
    resizeMode[resizeMode["mixedpx1"] = 3] = "mixedpx1";
    resizeMode[resizeMode["mixedpx2"] = 4] = "mixedpx2";
    resizeMode[resizeMode["mixedperc1"] = 5] = "mixedperc1";
    resizeMode[resizeMode["mixedperc2"] = 6] = "mixedperc2";
})(resizeMode = exports.resizeMode || (exports.resizeMode = {}));


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SelectionEvents;
(function (SelectionEvents) {
    SelectionEvents["beforeUnSelect"] = "beforeunselect";
    SelectionEvents["afterUnSelect"] = "afterunselect";
    SelectionEvents["beforeSelect"] = "beforeselect";
    SelectionEvents["afterSelect"] = "afterselect";
})(SelectionEvents = exports.SelectionEvents || (exports.SelectionEvents = {}));


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ChartEvents;
(function (ChartEvents) {
    ChartEvents["toggleSeries"] = "toggleSeries";
    ChartEvents["chartMouseMove"] = "chartMouseMove";
    ChartEvents["chartMouseLeave"] = "chartMouseLeave";
    ChartEvents["resize"] = "resize";
    ChartEvents["serieClick"] = "serieClick";
    // private
    ChartEvents["seriaMouseMove"] = "seriaMouseMove";
    ChartEvents["seriaMouseLeave"] = "seriaMouseLeave";
})(ChartEvents = exports.ChartEvents || (exports.ChartEvents = {}));


/***/ }),
/* 20 */
/***/ (function(module, exports) {

"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(9);
var helpers_1 = __webpack_require__(10);
function toQueryString(data) {
    return Object.keys(data)
        .reduce(function (entries, key) {
        var value = typeof data[key] === "object" ? JSON.stringify(data[key]) : data[key];
        entries.push(key + "=" + encodeURIComponent(value));
        return entries;
    }, [])
        .join("&");
}
function inferResponseType(contentType) {
    if (!contentType) {
        return "text";
    }
    if (contentType.includes("json")) {
        return "json";
    }
    if (contentType.includes("xml")) {
        return "xml";
    }
    return "text";
}
function send(url, data, method, headers, responseType) {
    function parseResponse(responseText, genResponseType) {
        switch (genResponseType) {
            case "json": {
                return JSON.parse(responseText);
            }
            case "text": {
                return responseText;
            }
            case "xml": {
                var driver = helpers_1.toDataDriver(types_1.DataDriver.xml);
                if (driver) {
                    return driver.toJsonObject(responseText);
                }
                else {
                    return { parseError: "Incorrect data driver type: 'xml'" };
                }
            }
            default: {
                return responseText;
            }
        }
    }
    var allHeaders = headers || {};
    if (responseType) {
        allHeaders.Accept = "application/" + responseType;
    }
    if (method !== "GET") {
        allHeaders["Content-Type"] = allHeaders["Content-Type"] || "application/json";
    }
    if (method === "GET") {
        var urlData = data && typeof data === "object"
            ? toQueryString(data)
            : data && typeof data === "string"
                ? data
                : "";
        if (urlData) {
            url += !url.includes("?") ? "?" : "&";
            url += urlData;
        }
        data = null;
    }
    if (!window.fetch) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    if (responseType === "raw") {
                        resolve({
                            url: xhr.responseURL,
                            headers: xhr
                                .getAllResponseHeaders()
                                .trim()
                                .split(/[\r\n]+/)
                                .reduce(function (acc, cur) {
                                var kv = cur.split(": ");
                                acc[kv[0]] = kv[1];
                                return acc;
                            }, {}),
                            body: xhr.response,
                        });
                    }
                    if (xhr.status === 204) {
                        resolve();
                    }
                    else {
                        resolve(parseResponse(xhr.responseText, responseType || inferResponseType(xhr.getResponseHeader("Content-Type"))));
                    }
                }
                else {
                    reject({
                        status: xhr.status,
                        statusText: xhr.statusText,
                    });
                }
            };
            xhr.onerror = function () {
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText,
                    message: xhr.responseText,
                });
            };
            xhr.open(method, url);
            for (var headerKey in allHeaders) {
                xhr.setRequestHeader(headerKey, allHeaders[headerKey]);
            }
            switch (method) {
                case "POST":
                case "DELETE":
                case "PUT":
                    xhr.send(data !== undefined ? JSON.stringify(data) : "");
                    break;
                case "GET":
                    xhr.send();
                    break;
                default:
                    xhr.send();
                    break;
            }
        });
    }
    else {
        return window
            .fetch(url, {
            method: method,
            body: data ? JSON.stringify(data) : null,
            headers: allHeaders,
        })
            .then(function (response) {
            if (response.ok) {
                var genResponseType = responseType || inferResponseType(response.headers.get("Content-Type"));
                if (genResponseType === "raw") {
                    return {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                        // @ts-ignore
                        headers: Object.fromEntries(response.headers.entries()),
                        url: response.url,
                        body: response.body,
                    };
                }
                if (response.status !== 204) {
                    switch (genResponseType) {
                        case "json": {
                            return response.json();
                        }
                        case "xml": {
                            var driver_1 = helpers_1.toDataDriver(types_1.DataDriver.xml);
                            if (driver_1) {
                                return response.text().then(function (xmlData) { return driver_1.toJsonObject(xmlData); });
                            }
                            else {
                                return response.text();
                            }
                        }
                        default:
                            return response.text();
                    }
                }
            }
            else {
                return response.text().then(function (message) {
                    return Promise.reject({
                        status: response.status,
                        statusText: response.statusText,
                        message: message,
                    });
                });
            }
        });
    }
}
exports.ajax = {
    get: function (url, data, config) {
        return send(url, data, "GET", config && config.headers, config !== undefined ? config.responseType : undefined);
    },
    post: function (url, data, config) {
        return send(url, data, "POST", config && config.headers, config !== undefined ? config.responseType : undefined);
    },
    put: function (url, data, config) {
        return send(url, data, "PUT", config && config.headers, config !== undefined ? config.responseType : undefined);
    },
    delete: function (url, data, config) {
        return send(url, data, "DELETE", config && config.headers, config !== undefined ? config.responseType : undefined);
    },
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FocusManager_1 = __webpack_require__(15);
var html_1 = __webpack_require__(3);
function getHotKeyCode(code) {
    var matches = code.toLowerCase().match(/\w+/g);
    var comp = 0;
    var key = "";
    for (var i = 0; i < matches.length; i++) {
        var check = matches[i];
        if (check === "ctrl") {
            comp += 4;
        }
        else if (check === "shift") {
            comp += 2;
        }
        else if (check === "alt") {
            comp += 1;
        }
        else {
            key = check;
        }
    }
    return comp + key;
}
var ie_key_map = {
    Up: "arrowUp",
    Down: "arrowDown",
    Right: "arrowRight",
    Left: "arrowLeft",
    Esc: "escape",
    Spacebar: "space",
};
var KeyManager = /** @class */ (function () {
    function KeyManager(beforeCall) {
        var _this = this;
        this._keysStorage = {};
        this._initHandler = function (e) {
            var key;
            if ((e.which >= 48 && e.which <= 57) || (e.which >= 65 && e.which <= 90)) {
                key = String.fromCharCode(e.which);
            }
            else {
                var keyName = e.which === 32 ? e.code : e.key;
                key = html_1.isIE() ? ie_key_map[keyName] || keyName : keyName;
            }
            var actions = _this._keysStorage[(e.ctrlKey || e.metaKey ? 4 : 0) +
                (e.shiftKey ? 2 : 0) +
                (e.altKey ? 1 : 0) +
                (key && key.toLowerCase())];
            if (actions) {
                for (var i = 0; i < actions.length; i++) {
                    if (_this._beforeCall && _this._beforeCall(e, FocusManager_1.focusManager.getFocusId()) === false) {
                        return;
                    }
                    actions[i].handler(e);
                }
            }
        };
        if (beforeCall) {
            this._beforeCall = beforeCall;
        }
        document.addEventListener("keydown", this._initHandler);
    }
    KeyManager.prototype.destructor = function () {
        document.removeEventListener("keydown", this._initHandler);
        this.removeHotKey();
    };
    KeyManager.prototype.addHotKey = function (key, handler) {
        var code = getHotKeyCode(key);
        if (!this._keysStorage[code]) {
            this._keysStorage[code] = [];
        }
        this._keysStorage[code].push({ handler: handler });
    };
    KeyManager.prototype.removeHotKey = function (key, handler) {
        var _this = this;
        if (key) {
            if (key && handler) {
                var code_1 = getHotKeyCode(key);
                var functionToString_1 = function (fun) {
                    return fun
                        .toString()
                        .replace(/\n/g, "")
                        .replace(/\s/g, "");
                };
                this._keysStorage[code_1].forEach(function (existHotKey, i) {
                    if (functionToString_1(existHotKey.handler) === functionToString_1(handler)) {
                        delete _this._keysStorage[code_1][i];
                        _this._keysStorage[code_1] = _this._keysStorage[code_1].filter(function (el) { return el; });
                    }
                });
            }
            else {
                var code = getHotKeyCode(key);
                delete this._keysStorage[code];
            }
        }
        else {
            this._keysStorage = {};
        }
    };
    KeyManager.prototype.exist = function (key) {
        var code = getHotKeyCode(key);
        return !!this._keysStorage[code];
    };
    return KeyManager;
}());
exports.KeyManager = KeyManager;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var cells_1 = __webpack_require__(24);
var main_1 = __webpack_require__(8);
var types_1 = __webpack_require__(4);
var editors_1 = __webpack_require__(79);
var html_1 = __webpack_require__(3);
var data_1 = __webpack_require__(11);
function handleMouse(rowStart, colStart, conf, type, e) {
    colStart = html_1.locateNodeByClassName(e.target, "dhx_grid-fixed-cols-wrap") ? 0 : colStart;
    var target = html_1.locateNodeByClassName(e.target, "dhx_grid-cell");
    if (!target || !type) {
        return;
    }
    var rowNode = target.parentNode;
    var bodyNode = rowNode.parentNode;
    var colIndex = Array.prototype.indexOf.call(rowNode.childNodes, target);
    var columns = conf.columns.filter(function (col) { return !col.hidden; });
    var col = columns[colStart + colIndex];
    var rowIndex = Array.prototype.indexOf.call(bodyNode.childNodes, rowNode);
    var row = conf.data[rowStart + rowIndex];
    var systemEvent = type.toLocaleLowerCase().includes("touch");
    if (systemEvent) {
        conf._events.fire(type, [row, col, e]);
    }
    else {
        conf.events.fire(type, [row, col, e]);
    }
}
function getHandlers(row, column, conf) {
    return {
        onclick: [handleMouse, row, column, conf, types_1.GridEvents.cellClick],
        onmouseover: [handleMouse, row, column, conf, types_1.GridEvents.cellMouseOver],
        onmousedown: [handleMouse, row, column, conf, types_1.GridEvents.cellMouseDown],
        ondblclick: [handleMouse, row, column, conf, types_1.GridEvents.cellDblClick],
        oncontextmenu: [handleMouse, row, column, conf, types_1.GridEvents.cellRightClick],
        ontouchstart: [handleMouse, row, column, conf, types_1.GridEvents.cellMouseDown],
        ontouchmove: [handleMouse, row, column, conf, types_1.GridSystemEvents.cellTouchMove],
        ontouchend: [handleMouse, row, column, conf, types_1.GridSystemEvents.cellTouchEnd],
    };
}
exports.getHandlers = getHandlers;
function getColumnHeaderText(col) {
    var colHeader = col.id;
    if (col.header && col.header.length) {
        var i = col.header.length - 1;
        while (i >= 0) {
            var headerConf = col.header[i];
            if (headerConf && headerConf.text) {
                colHeader = headerConf.text;
                break;
            }
            i -= 1;
        }
    }
    return colHeader;
}
function getTreeCell(content, row, col, conf) {
    var isEditable = conf.$editable && conf.$editable.row === row.id && conf.$editable.col === col.id;
    var css = "";
    var cellAlign = col.align ? " dhx_align-" + col.align : "dhx_align-left";
    if (conf.dragMode && conf.dragItem === "row") {
        css +=
            (row.$drophere && !isEditable ? " dhx_grid-cell--drophere" : "") +
                (row.$dragtarget && !isEditable ? " dhx_grid-cell--dragtarget" : "") +
                (!isEditable ? " dhx_grid-cell--drag" : "");
    }
    var parentPadding = data_1.getTreeCellWidthOffset(row);
    return dom_1.el(".dhx_grid-cell", {
        class: "dhx_tree-cell " + (col.$cellCss[row.id] || "") + " " + (row.$items ? "dhx_grid-expand-cell" : "") +
            (" " + (isEditable ? "dhx_tree-editing-cell" : "") + " " + css) +
            cellAlign,
        style: {
            width: col.$width,
            height: row.$height,
            padding: !row.$items ? "0 0 0 " + parentPadding + "px" : 0,
        },
        dhx_col_id: col.id,
        role: "gridcell",
        "aria-colindex": 1,
        "aria-label": getColumnHeaderText(col),
    }, [
        row.$items
            ? dom_1.el(".dhx_grid-expand-cell-icon", {
                class: row.$opened ? "dxi dxi-chevron-up" : "dxi dxi-chevron-down",
                dhx_id: row.id,
                role: "button",
                "aria-label": row.$opened ? "Collapse group" : "Expand group",
                style: {
                    padding: row.$level ? "0 0 0 " + (4 + parentPadding) + "px" : "0 0 0 4px",
                },
            })
            : null,
        dom_1.el(".dhx_tree-cell", {
            class: cellAlign + ("" + ((conf.autoHeight && " dhx_tree-cell_auto-height") || "")),
        }, [content]),
    ]);
}
exports.getTreeCell = getTreeCell;
function getEditorCell(row, col, conf) {
    return editors_1.getEditor(row, col, conf);
}
function getCells(conf) {
    if (!conf.data || !conf.columns) {
        return [];
    }
    var pos = conf.$positions;
    var data = conf.data ? conf.data.slice(pos.yStart, pos.yEnd) : [];
    var columns = conf.columns.slice(pos.xStart, pos.xEnd);
    return data.map(function (row, index) {
        var isLastRow = data.length - 1 === index;
        var rowCss = "";
        if (conf.rowCss) {
            rowCss = conf.rowCss(row);
        }
        if (row.$css) {
            rowCss += row.$css;
        }
        return dom_1.el(".dhx_grid-row", {
            style: { height: isLastRow ? row.$height + 1 : row.$height },
            dhx_id: row.id,
            class: rowCss,
            _key: row.id,
            _flags: dom_1.KEYED_LIST,
            role: "row",
            "aria-rowindex": pos.yStart + index + 1,
        }, row.$customRender
            ? [row.$customRender(row, conf)]
            : columns.map(function (col, colIndex) {
                if (!col.hidden) {
                    var value = data_1.toFormat(row[col.id], col.type, col.format);
                    var defaultTemplate = function (text) {
                        if (typeof text === "boolean" || col.type === "boolean") {
                            if (typeof text !== "string") {
                                return "" + Boolean(text);
                            }
                        }
                        return text || text === 0 ? text : "";
                    };
                    var content = col.template
                        ? col.template(value, row, col)
                        : defaultTemplate(value);
                    // content can be a domvm node or a string
                    if (typeof content === "string") {
                        content = main_1.isHtmlEnable(conf, col)
                            ? dom_1.el("div.dhx_grid-cell__content", {
                                role: "button",
                                "aria-label": "Edit content",
                                ".innerHTML": content,
                            })
                            : content;
                    }
                    var css = (((col.$cellCss && col.$cellCss[row.id]) || "") + " dhx_" + col.type + "-cell").replace(/\s+/g, " ");
                    var colWidth = col.$width;
                    var isEditable = conf.$editable &&
                        conf.$editable.row === row.id &&
                        conf.$editable.col === col.id;
                    if (isEditable || (col.type === "boolean" && (conf.editable || col.editable))) {
                        if (!(conf.leftSplit &&
                            conf.columns.length !== conf.leftSplit &&
                            conf.columns.indexOf(col) < conf.leftSplit)) {
                            content = getEditorCell(row, col, conf).toHTML();
                            css += " dhx_grid-cell__editable";
                            if (conf.leftSplit === conf.columns.indexOf(col) + 1) {
                                colWidth -= 1;
                            }
                        }
                    }
                    if (conf.type === "tree" && conf.firstColId === col.id) {
                        return getTreeCell(content, row, col, conf);
                    }
                    if (conf.dragMode && conf.dragItem === "row") {
                        css +=
                            (row.$drophere && !isEditable ? " dhx_grid-cell--drophere" : "") +
                                (row.$dragtarget && !isEditable ? " dhx_grid-cell--dragtarget" : "") +
                                (!isEditable ? " dhx_grid-cell--drag" : "");
                    }
                    if (col.align) {
                        css += " dhx_align-" + col.align;
                    }
                    if (conf.autoHeight) {
                        css += " dhx_grid-cell__content_auto-height";
                    }
                    return dom_1.el(".dhx_grid-cell", {
                        class: css,
                        style: {
                            width: colWidth,
                            height: row.$height + "px",
                        },
                        _key: col.id,
                        dhx_col_id: col.id,
                        role: "gridcell",
                        "aria-colindex": pos.xStart + colIndex + 1,
                        "aria-label": getColumnHeaderText(col),
                    }, [content]);
                }
            }));
    });
}
exports.getCells = getCells;
function getSpans(config, frozen) {
    var spanCells = [];
    var columns = config.columns;
    var rows = config.data;
    if (!columns.length || !config.spans)
        return null;
    var spans = config.spans.sort(function (a, b) {
        return typeof a.row === "string" && typeof b.row === "string"
            ? a.row.localeCompare(b.row)
            : a.row - b.row;
    });
    var _loop_1 = function (i) {
        var row = spans[i].row;
        var col = spans[i].column;
        var spanHeight = spans[i].rowspan;
        var spanWidth = spans[i].colspan;
        var spanCss = spans[i].css;
        if (spanHeight === 1) {
            return "continue";
        }
        var colIndex = core_1.findIndex(columns, function (item) { return "" + item.id === "" + col; });
        var rowIndex = core_1.findIndex(rows, function (item) { return "" + item.id === "" + row; });
        if (colIndex < 0 || rowIndex < 0) {
            return "continue";
        }
        if (frozen === true &&
            ((spanWidth || 1) + colIndex > config.leftSplit || colIndex + 1 > config.leftSplit)) {
            return "continue";
        }
        var currCol = columns[colIndex];
        var currRow = rows[rowIndex];
        if (currCol.hidden) {
            return "continue";
        }
        var content = spans[i].text ? spans[i].text : currRow[col] === undefined ? "" : currRow[col];
        var t = function (text, _row, _col) { return (text || text === 0 ? text : ""); };
        var template = currCol.template || t;
        content = template(content, currRow, currCol);
        content =
            typeof content === "string"
                ? dom_1.el("div.dhx_span-cell-content", { ".innerHTML": content })
                : content;
        var currentTop = 0;
        for (var index = 0; index < rowIndex; index++) {
            currentTop += rows[index].$height;
        }
        var top_1 = currentTop - 1;
        var left = 0;
        for (var s = colIndex - 1; s >= 0; s--) {
            left += columns[s].$width;
        }
        var rowspanWithLastCol = colIndex === columns.length - 1;
        var colspanWithLastCol = colIndex + spanWidth === columns.length;
        var css = currCol.header[0].text ? " dhx_span-cell" : " dhx_span-cell dhx_span-cell--title";
        css += spanCss ? " " + spanCss : "";
        css += rowIndex === 0 ? " dhx_span-first-row" : "";
        css += colIndex === 0 ? " dhx_span-first-col" : "";
        css += rowspanWithLastCol || colspanWithLastCol ? " dhx_span-last-col" : "";
        css += !spanWidth ? " dhx_span-" + (currCol.type || "string") + "-cell" : " dhx_span-string-cell";
        css += currCol.align ? " dhx_align-" + currCol.align : " dhx_align-left";
        var width = spanWidth > 1 ? cells_1.getWidth(columns, spanWidth, colIndex) : currCol.$width;
        var height = spanHeight > 1 ? cells_1.getHeight(rows, spanHeight, rowIndex) : currRow.$height;
        spanCells.push(dom_1.el("div", {
            class: css,
            style: {
                width: width,
                height: height,
                top: top_1,
                left: left,
            },
            dhx_col_id: col,
            dhx_id: row,
            "aria-hidden": "true",
        }, [content]));
    };
    for (var i = 0; i < spans.length; i++) {
        _loop_1(i);
    }
    return spanCells;
}
exports.getSpans = getSpans;
function getShifts(conf) {
    var columnsLeft = conf.columns.slice(0, conf.$positions.xStart);
    var rowsTop = conf.data.slice(0, conf.$positions.yStart);
    return {
        x: main_1.getTotalWidth(columnsLeft),
        y: main_1.getTotalHeight(rowsTop),
    };
}
exports.getShifts = getShifts;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getWidth(columns, colspan, index) {
    var cols = columns.filter(function (_a) {
        var hidden = _a.hidden;
        return !hidden;
    });
    if (!colspan) {
        return cols[index].$width;
    }
    return cols.reduce(function (width, _a, i) {
        var $width = _a.$width;
        width += i >= index && i < index + colspan ? $width : 0;
        return width;
    }, 0);
}
exports.getWidth = getWidth;
function getHeight(dataRows, rowspan, index) {
    var rows = dataRows.filter(function (_a) {
        var hidden = _a.hidden;
        return !hidden;
    });
    if (!rowspan) {
        return rows[index].$height;
    }
    return rows.reduce(function (height, _a, i) {
        var $height = _a.$height;
        height += i >= index && i < index + rowspan ? $height : 0;
        return height;
    }, 0);
}
exports.getHeight = getHeight;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(92));
__export(__webpack_require__(40));


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ListEvents;
(function (ListEvents) {
    ListEvents["click"] = "click";
    ListEvents["doubleClick"] = "doubleclick";
    ListEvents["focusChange"] = "focuschange";
    ListEvents["beforeEditStart"] = "beforeEditStart";
    ListEvents["afterEditStart"] = "afterEditStart";
    ListEvents["beforeEditEnd"] = "beforeEditEnd";
    ListEvents["afterEditEnd"] = "afterEditEnd";
    ListEvents["itemRightClick"] = "itemRightClick";
    ListEvents["itemMouseOver"] = "itemMouseOver";
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    ListEvents["contextmenu"] = "contextmenu";
})(ListEvents = exports.ListEvents || (exports.ListEvents = {}));


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RealPosition;
(function (RealPosition) {
    RealPosition["left"] = "left";
    RealPosition["right"] = "right";
    RealPosition["top"] = "top";
    RealPosition["bottom"] = "bottom";
    RealPosition["center"] = "center";
})(RealPosition = exports.RealPosition || (exports.RealPosition = {}));
var Position;
(function (Position) {
    Position["right"] = "right";
    Position["bottom"] = "bottom";
    Position["center"] = "center";
})(Position = exports.Position || (exports.Position = {}));
var MessageContainerPosition;
(function (MessageContainerPosition) {
    MessageContainerPosition["topLeft"] = "top-left";
    MessageContainerPosition["topRight"] = "top-right";
    MessageContainerPosition["bottomLeft"] = "bottom-left";
    MessageContainerPosition["bottomRight"] = "bottom-right";
})(MessageContainerPosition = exports.MessageContainerPosition || (exports.MessageContainerPosition = {}));


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var AxisCreator_1 = __webpack_require__(125);
var SvgScales_1 = __webpack_require__(52);
var common_1 = __webpack_require__(2);
var renderScale = {
    left: SvgScales_1.left,
    right: SvgScales_1.right,
    bottom: SvgScales_1.bottom,
    top: SvgScales_1.top,
};
var renderGrid = {
    left: SvgScales_1.leftGrid,
    right: SvgScales_1.rightGrid,
    bottom: SvgScales_1.bottomGrid,
    top: SvgScales_1.topGrid,
};
var Scale = /** @class */ (function () {
    function Scale(_data, config, position) {
        this._data = _data;
        this._padding = false;
        this._charts = [];
        this._position = position;
        this._setDefaults(config);
        this._isXDirection = position === "bottom" || position === "top";
        if (position !== "radial") {
            if (position === "left" || position === "right") {
                this.config.size = this.config.size || 40 + (this.config.title ? 40 : 0);
            }
            else {
                this.config.size = this.config.size || 20 + (this.config.title ? 40 : 0);
            }
        }
    }
    Scale.prototype.addPadding = function () {
        this._padding = true;
    };
    Scale.prototype.getSize = function () {
        return this.config.size;
    };
    Scale.prototype.scaleReady = function (sizes) {
        var points = [];
        this._charts.forEach(function (chart) {
            chart.getPoints().forEach(function (item) { return points.push(item[1]); }); // y-value
        });
        this._axis = new AxisCreator_1.AxisCreator(points, this.config).getScale();
        var position = this._position;
        if (position !== "radial") {
            sizes[position] += this.config.size;
        }
    };
    Scale.prototype.point = function (pos) {
        if (this.config.log) {
            return this._logPoint(pos);
        }
        else {
            return this._isXDirection
                ? (pos - this._axis.min) / (this._axis.max - this._axis.min)
                : 1 - (pos - this._axis.min) / (this._axis.max - this._axis.min);
        }
    };
    Scale.prototype.add = function (val) {
        this._charts.push(val);
    };
    Scale.prototype.paint = function (width, height) {
        var _this = this;
        if (this.config.hidden) {
            return null;
        }
        var steps = this._axis.steps;
        var points = steps.map(function (item) { return [
            _this._isXDirection ? _this.point(item) * width : _this.point(item) * height,
            item,
        ]; });
        if (points.length === 0 && this._position === "left") {
            points = [[0, 0]];
        }
        return renderScale[this._position](points, this.config, width, height);
    };
    Scale.prototype.scaleGrid = function () {
        var _this = this;
        var getPoints = function (width, height) {
            return _this._axis.steps.map(function (item) { return [
                _this._isXDirection ? _this.point(item) * width : _this.point(item) * height,
                item,
            ]; });
        };
        var type = this._position;
        var grid = this.config.grid;
        var dashed = this.config.dashed;
        var hidden = this.config.hidden;
        var getSpecificLevel = function () { return _this._axis.steps.indexOf(_this.config.targetLine); };
        var getSpecificNumber = function () { return _this.point(_this.config.targetValue); };
        return {
            paint: function (width, height) {
                var targetLine = getSpecificLevel();
                var points = getPoints(width, height);
                var targetValue = getSpecificNumber();
                var config = {
                    targetLine: targetLine,
                    dashed: dashed,
                    grid: grid,
                    targetValue: targetValue,
                    hidden: hidden,
                };
                return renderGrid[type](points, width, height, config);
            },
        };
    };
    Scale.prototype._setDefaults = function (config) {
        var defaults = {
            scalePadding: 20,
            textPadding: 11,
            grid: true,
            targetLine: null,
            showText: true,
        };
        if (config.locator) {
            this.locator = common_1.locator(config.locator);
        }
        this.config = __assign(__assign({}, defaults), config);
    };
    Scale.prototype._logPoint = function (pos) {
        var logPos;
        var sign = Math.abs(pos) / pos;
        var steps = this._axis.steps;
        var count = steps.length - 1;
        var index = steps.indexOf(pos);
        if (index !== -1) {
            logPos = index / count;
        }
        else {
            var dx = this._axis.min < 0 ? steps.indexOf(0) : 0;
            var exp = sign * common_1.log10(Math.abs(pos));
            logPos = (dx + exp) / count;
        }
        return this._isXDirection ? logPos : 1 - logPos;
    };
    return Scale;
}());
exports.Scale = Scale;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(2);
var BaseSeria_1 = __webpack_require__(30);
var ScaleSeria = /** @class */ (function (_super) {
    __extends(ScaleSeria, _super);
    function ScaleSeria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScaleSeria.prototype.addScale = function (type, scale) {
        if (type === "bottom" || type === "top") {
            this.xScale = scale;
            this._xLocator = scale.locator;
        }
        else {
            this.yScale = scale;
            this._yLocator = common_1.locator(this.config.value);
        }
    };
    ScaleSeria.prototype.paint = function (width, height) {
        _super.prototype.paint.call(this, width, height);
    };
    ScaleSeria.prototype.dataReady = function (prev) {
        var _this = this;
        if (!this.config.active) {
            return (this._points = []);
        }
        this._points = this._data.map(function (item, index) {
            // raw values
            var x = _this._xLocator(item);
            var y = _this._yLocator(item);
            var set = [x, y, item.id, x, y];
            if (prev) {
                set[1] += prev[index][1];
            }
            return set;
        });
        return this._points;
    };
    ScaleSeria.prototype._calckFinalPoints = function (width, height) {
        var _this = this;
        this._points.forEach(function (item, index) {
            // scaled values
            item[0] = _this.xScale.point(item[0]) * width || 0;
            var pointHeight = _this.yScale.point(item[1]) * height;
            item[1] = !isNaN(pointHeight) ? pointHeight : _this.config.type === "xbar" ? 0 : height;
        });
    };
    ScaleSeria.prototype._defaultLocator = function (v) {
        return [this._yLocator(v), this._xLocator(v)];
    };
    return ScaleSeria;
}(BaseSeria_1.default));
exports.default = ScaleSeria;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var types_1 = __webpack_require__(19);
var common_1 = __webpack_require__(2);
var line_1 = __webpack_require__(54);
var BaseSeria = /** @class */ (function () {
    function BaseSeria(_data, config, other) {
        var _this = this;
        this._data = _data;
        this._handlers = {
            onclick: function (id, value) { return _this._events.fire(types_1.ChartEvents.serieClick, [id, value]); },
            onmousemove: function (id, value, e) {
                return _this._events.fire(types_1.ChartEvents.seriaMouseMove, [id, value, e]);
            },
            onmouseleave: function (id, value) {
                return _this._events.fire(types_1.ChartEvents.seriaMouseLeave, [id, value]);
            },
        };
        this.id = config.id = config.id || core_1.uid();
        this._events = other;
        this._points = [];
        this._setDefaults(config);
    }
    BaseSeria.prototype.toggle = function () {
        this.config.active = !this.config.active;
    };
    BaseSeria.prototype.getClosest = function (x, y) {
        var res = [Infinity, null, null, null];
        for (var _i = 0, _a = this._points; _i < _a.length; _i++) {
            var point = _a[_i];
            var dist = this._getClosestDist(x, y, point[0], point[1]);
            if (res[0] > dist) {
                res[0] = dist;
                res[1] = point[0];
                res[2] = point[1];
                res[3] = point[2];
            }
        }
        return res;
    };
    BaseSeria.prototype.getClosestVertical = function (x) {
        var res = [Infinity, null, null, null, null];
        for (var _i = 0, _a = this._points; _i < _a.length; _i++) {
            var point = _a[_i];
            var dist = Math.abs(point[0] - x);
            if (res[0] > dist) {
                res[0] = dist;
                res[1] = point[0];
                res[2] = point[1];
                res[3] = point[2];
                res[4] = point[4];
            }
        }
        return res;
    };
    BaseSeria.prototype.getTooltipType = function (_id) {
        return "top";
    };
    BaseSeria.prototype.getTooltipText = function (id) {
        if (!this._data.getItem(id)) {
            return;
        }
        if (this.config.tooltip) {
            var p = this._defaultLocator(this._data.getItem(id));
            if (this.config.tooltipTemplate) {
                return this.config.tooltipTemplate(p);
            }
            return p[0];
        }
    };
    BaseSeria.prototype.dataReady = function (prev) {
        return (this._points = []);
    };
    BaseSeria.prototype.paint = function (width, height) {
        return this._calckFinalPoints(width, height);
    };
    BaseSeria.prototype.getPoints = function () {
        return this._points;
    };
    BaseSeria.prototype.addScale = function (type, scale) {
        // do nothing
    };
    BaseSeria.prototype._getClosestDist = function (x, y, px, py) {
        return common_1.euclideanDistance(x, y, px, py);
    };
    BaseSeria.prototype._calckFinalPoints = function (_width, _height) {
        // do nothing
    };
    BaseSeria.prototype._setDefaults = function (config) {
        this.config = config;
    };
    BaseSeria.prototype._defaultLocator = function (_) {
        return [null, null];
    };
    BaseSeria.prototype._getPointType = function (form, color) {
        return line_1.getShadeHelper(form, color);
    };
    return BaseSeria;
}());
exports.default = BaseSeria;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(2);
var BaseSeria_1 = __webpack_require__(30);
var NoScaleSeria = /** @class */ (function (_super) {
    __extends(NoScaleSeria, _super);
    function NoScaleSeria() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._center = [0, 0]; // (x, y)
        _this._tooltipData = []; // (x, y)
        return _this;
    }
    NoScaleSeria.prototype.scaleReady = function (sizes) {
        for (var key in sizes) {
            sizes[key] += this.config.paddings;
        }
        return sizes;
    };
    NoScaleSeria.prototype.dataReady = function () {
        var _this = this;
        var data = this._data;
        this._sum = data.reduce(function (sum, item) { return (item.$hidden ? sum : sum + parseFloat(_this._valueLocator(item))); }, 0);
        this._points = data.reduce(function (items, item, i) {
            if (item.$hidden) {
                return items;
            }
            var t = _this._textLocator(item);
            var v = _this._valueLocator(item);
            var x = v / _this._sum;
            var c = _this._colorLocator ? _this._colorLocator(item) : common_1.getDefaultColor(i);
            items.push([x, v, item.id, t, c]);
            return items;
        }, []);
        return this._points;
    };
    NoScaleSeria.prototype.toggle = function (id) {
        var item = this._data.getItem(id);
        if (!item) {
            return;
        }
        this._data.update(id, { $hidden: !item.$hidden });
    };
    NoScaleSeria.prototype.getClosest = function (x, y) {
        var percent = 1 - (Math.atan2(x - this._center[0], y - this._center[1]) + Math.PI) / Math.PI / 2;
        var points = this._points;
        for (var i = 0; i < points.length; i++) {
            if (points[i][0] >= percent) {
                return [0, this._tooltipData[i][0], this._tooltipData[i][1], points[i][2]];
            }
            percent -= points[i][0];
        }
        return [Infinity, null, null, null];
    };
    NoScaleSeria.prototype.getTooltipText = function (id) {
        if (this.config.tooltip) {
            var p = this._defaultLocator(this._data.getItem(id));
            if (this.config.tooltipTemplate) {
                return this.config.tooltipTemplate(p);
            }
            return p[0];
        }
    };
    NoScaleSeria.prototype.getTooltipType = function (_id) {
        return "simple";
    };
    NoScaleSeria.prototype._setDefaults = function (config) {
        var _this = this;
        var defaults = {
            subType: "basic",
            paddings: 20,
        };
        this.config = __assign(__assign({}, defaults), config);
        this._drawPointType = this._getPointType("empty", "none");
        this._valueLocator = common_1.locator(config.value);
        this._textLocator = common_1.locator(config.text);
        if (config.color) {
            this._colorLocator = common_1.locator(config.color);
        }
        else if (config.monochrome) {
            this._colorLocator = function (item) { return common_1.getColorShade(config.monochrome, _this._getPercent(item) * 2); }; // 2 for more bright
        }
    };
    NoScaleSeria.prototype._defaultLocator = function (v) {
        return [this._valueLocator(v), this._textLocator(v)];
    };
    NoScaleSeria.prototype._getPercent = function (item) {
        return parseFloat(this._valueLocator(item)) / this._sum;
    };
    return NoScaleSeria;
}(BaseSeria_1.default));
exports.default = NoScaleSeria;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var common_1 = __webpack_require__(2);
var ScaleSeria_1 = __webpack_require__(29);
var Line = /** @class */ (function (_super) {
    __extends(Line, _super);
    function Line() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Line.prototype.paint = function (width, height) {
        var _this = this;
        _super.prototype.paint.call(this, width, height);
        var getChartAriaAttrs = function (cfg) { return ({
            "aria-label": "chart " + (cfg.value || ""),
        }); };
        var getPointAriaAttrs = function (key, points) {
            var point;
            if (key) {
                point = points.find(function (p) { return key.includes(p[2]); });
            }
            return {
                role: "graphics-symbol",
                "aria-roledescription": "point",
                "aria-label": point ? "point x=" + point[3] + " y=" + point[4] : "",
            };
        };
        var color = this.config.pointColor || this.config.color;
        var css = "chart " + this.config.type + " " + (this.config.css || "") + " " + (this.config.dashed ? "dash-line" : "");
        var svg = [];
        if (this.config.strokeWidth) {
            svg.push(this._getForm(this._points, this.config, css, width, height));
        }
        if (this.config.pointType) {
            var point_1 = this._getPointType(this.config.pointType, color);
            svg = svg.concat(this._points
                .map(function (p) { return point_1(p[0], p[1], common_1.calcPointRef(p[2], _this.id)); })
                .map(function (node, index) {
                if (node && node.attrs) {
                    node.attrs = __assign(__assign({}, node.attrs), getPointAriaAttrs(node.key, _this._points));
                    if (_this.config.tooltip) {
                        node.attrs.onmousemove = [
                            _this._handlers.onmousemove,
                            _this._points[index][2],
                            _this.id,
                        ];
                        node.attrs.onmouseleave = [
                            _this._handlers.onmouseleave,
                            _this._points[index][2],
                            _this.id,
                        ];
                        node.attrs.onclick = [
                            _this._handlers.onmousemove,
                            _this._points[index][2],
                            _this.id,
                        ];
                    }
                }
                return node;
            }));
        }
        return dom_1.sv("g", __assign({ class: "seria", _key: this.id }, getChartAriaAttrs(this.config)), svg);
    };
    Line.prototype._getForm = function (points, config, css, width, height) {
        var d = points.map(function (item, index) { return (index ? "L" : "M") + (item[0] + " " + item[1]); }).join(" ");
        var path = dom_1.sv("path", {
            id: "seria" + config.id,
            d: d,
            stroke: config.color,
            class: css,
            "stroke-width": this.config.strokeWidth,
            fill: "none",
        });
        return path;
    };
    Line.prototype._setDefaults = function (config) {
        var defaults = {
            alpha: 1,
            strokeWidth: 2,
            active: true,
            tooltip: true,
        };
        this.config = __assign(__assign({}, defaults), config);
    };
    return Line;
}(ScaleSeria_1.default));
exports.default = Line;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __webpack_require__(5);
var loader_1 = __webpack_require__(70);
var sort_1 = __webpack_require__(73);
var dataproxy_1 = __webpack_require__(13);
var helpers_1 = __webpack_require__(10);
var types_1 = __webpack_require__(9);
var core_1 = __webpack_require__(1);
var DataCollection = /** @class */ (function () {
    function DataCollection(config, events) {
        var _this = this;
        this._changes = { order: [] };
        this.config = config || {};
        this._sort = new sort_1.Sort();
        this._loader = new loader_1.Loader(this, this._changes);
        this.events = events || new events_1.EventSystem(this);
        this.events.on("dataRequest", function (from, to) {
            var proxy = _this.dataProxy;
            if (proxy && proxy.updateUrl) {
                proxy.updateUrl(null, { from: from, limit: proxy.config.limit || to - from });
                _this.load(proxy);
            }
        });
        this.events.on(types_1.DataEvents.loadError, function (response) {
            if (typeof response !== "string") {
                helpers_1.dhxError(response);
            }
            else {
                helpers_1.dhxWarning(response);
            }
        });
        this._reset();
    }
    DataCollection.prototype._reset = function () {
        this._order = [];
        this._pull = {};
        this._changes = { order: [] };
        this._initOrder = null;
        this._meta = new WeakMap();
        this._loaded = false;
    };
    DataCollection.prototype.add = function (newItem, index) {
        var _this = this;
        if (!this.events.fire(types_1.DataEvents.beforeAdd, [newItem])) {
            return;
        }
        var out;
        if (Array.isArray(newItem)) {
            out = newItem.map(function (element, key) {
                if (key !== 0) {
                    index = index + 1;
                }
                return _this._add(element, index);
            });
        }
        else {
            out = this._add(newItem, index);
        }
        this._applySmart();
        return out;
    };
    DataCollection.prototype.remove = function (id) {
        var _this = this;
        if (id) {
            if (id instanceof Array) {
                __spreadArrays(id).map(function (elementId) {
                    _this._remove(elementId);
                });
            }
            else {
                this._remove(id);
            }
        }
    };
    DataCollection.prototype.removeAll = function () {
        this._reset();
        this.events.fire(types_1.DataEvents.removeAll);
        this.events.fire(types_1.DataEvents.change);
    };
    DataCollection.prototype.exists = function (id) {
        return !!this._pull[id];
    };
    DataCollection.prototype.getNearId = function (id) {
        var item = this._pull[id];
        if (!item) {
            return this._order[0].id || "";
        }
    };
    DataCollection.prototype.getItem = function (id) {
        return this._pull[id];
    };
    DataCollection.prototype.update = function (id, newItem, silent) {
        var item = this.getItem(id);
        if (item) {
            if (helpers_1.isEqualObj(newItem, item)) {
                return;
            }
            if (newItem.id && id !== newItem.id) {
                helpers_1.dhxWarning("this method doesn't allow change id");
                if (helpers_1.isDebug()) {
                    // eslint-disable-next-line no-debugger
                    debugger;
                }
            }
            else {
                if (newItem.parent && item.parent && newItem.parent !== item.parent) {
                    this.move(id, -1, this, newItem.parent);
                }
                core_1.extend(this._pull[id], newItem, false);
                if (this.config.update) {
                    this.config.update(this._pull[id]);
                }
                if (!silent) {
                    this._onChange("update", id, this._pull[id]);
                }
            }
            this._applySmart();
        }
        else {
            helpers_1.dhxWarning("item not found");
        }
    };
    DataCollection.prototype.getIndex = function (id) {
        if (!id) {
            return -1;
        }
        var res = core_1.findIndex(this._order, function (item) { return item && item.id.toString() === id.toString(); });
        if (this._pull[id] && res >= 0) {
            return res;
        }
    };
    DataCollection.prototype.getId = function (index) {
        if (!this._order[index]) {
            return;
        }
        return this._order[index].id;
    };
    DataCollection.prototype.getLength = function () {
        return this._order.length;
    };
    DataCollection.prototype.isDataLoaded = function (from, to) {
        if (from === void 0) { from = 0; }
        if (to === void 0) { to = this._order.length; }
        if (core_1.isNumeric(from) && core_1.isNumeric(to)) {
            return this._order.slice(from, to).filter(function (item) { return item && item.$empty; }).length === 0;
        }
        // if check succeeds once, collection can't go back to not-loaded state
        if (!this._loaded) {
            this._loaded = !this.find(function (item) { return item.$empty; });
        }
        return !!this._loaded;
    };
    DataCollection.prototype.filter = function (rule, config) {
        if (!this.isDataLoaded()) {
            helpers_1.dhxWarning("the method doesn't work with lazyLoad");
            return;
        }
        if (!config || !config.add) {
            this._order = this._initOrder || this._order;
            this._initOrder = null;
        }
        if (rule && typeof rule !== "function") {
            var t_1 = rule;
            if (t_1.by !== undefined && t_1.match !== undefined) {
                rule = t_1.compare ? function (obj) { return t_1.compare(obj[t_1.by], t_1.match, obj); } : function (obj) { return obj[t_1.by] == t_1.match; };
            }
        }
        this._filter = config && config.smartFilter ? rule : null;
        this._applyFilters(rule);
        this.events.fire(types_1.DataEvents.change);
    };
    DataCollection.prototype.find = function (conf) {
        for (var key in this._pull) {
            var res = helpers_1.findByConf(this._pull[key], conf);
            if (res) {
                return res;
            }
        }
        return null;
    };
    DataCollection.prototype.findAll = function (conf) {
        var res = [];
        for (var key in this._pull) {
            var item = helpers_1.findByConf(this._pull[key], conf);
            if (item) {
                res.push(item);
            }
        }
        return res;
    };
    DataCollection.prototype.sort = function (rule, config) {
        if (!this.isDataLoaded()) {
            helpers_1.dhxWarning("the method doesn't work with lazyLoad");
            return;
        }
        if (config && config.smartSorting) {
            this._sorter = rule;
        }
        if (rule) {
            this._applySorters(rule);
        }
        this.events.fire(types_1.DataEvents.change);
    };
    DataCollection.prototype.copy = function (id, index, target, targetId) {
        var _this = this;
        if (id instanceof Array) {
            return id.map(function (elementId, key) {
                return _this._copy(elementId, index, target, targetId, key);
            });
        }
        else {
            return this._copy(id, index, target, targetId);
        }
    };
    DataCollection.prototype.move = function (id, index, target, targetId) {
        var _this = this;
        if (id instanceof Array) {
            return id.map(function (elementId, key) {
                return _this._move(elementId, index, target, targetId, key);
            });
        }
        else {
            return this._move(id, index, target, targetId);
        }
    };
    DataCollection.prototype.forEach = function (callback) {
        for (var i = 0; i < this._order.length; i++) {
            callback.call(this, this._order[i], i, this._order);
        }
    };
    DataCollection.prototype.load = function (url, driver) {
        if (typeof url === "string") {
            this.dataProxy = url = new dataproxy_1.DataProxy(url);
        }
        this.dataProxy = url;
        return this._loader.load(url, driver);
    };
    DataCollection.prototype.parse = function (data, driver) {
        this._reset();
        return this._loader.parse(data, driver);
    };
    DataCollection.prototype.$parse = function (data) {
        var apx = this.config.approximate;
        if (apx) {
            data = this._approximate(data, apx.value, apx.maxNum);
        }
        this._parse_data(data);
        this._applySmart();
        this.events.fire(types_1.DataEvents.change, ["load"]);
        this.events.fire(types_1.DataEvents.load);
    };
    DataCollection.prototype.save = function (url) {
        if (typeof url === "string") {
            url = new dataproxy_1.DataProxy(url);
        }
        this._loader.save(url);
    };
    DataCollection.prototype.changeId = function (id, newId, silent) {
        if (newId === void 0) { newId = core_1.uid(); }
        if (!silent && !this.isDataLoaded()) {
            helpers_1.dhxWarning("the method doesn't work with lazyLoad");
            return;
        }
        var item = this.getItem(id);
        if (!item) {
            helpers_1.dhxWarning("item not found");
        }
        else {
            item.id = newId;
            core_1.extend(this._pull[id], item);
            this._pull[newId] = this._pull[id];
            if (!silent) {
                this._onChange("update", newId, this._pull[newId]);
            }
            delete this._pull[id];
        }
    };
    // todo: loop through the array and check saved statuses
    DataCollection.prototype.isSaved = function () {
        return !this._changes.order.length; // todo: bad solution, errors and holded elments are missed...
    };
    DataCollection.prototype.map = function (callback) {
        var result = [];
        for (var i = 0; i < this._order.length; i++) {
            result.push(callback.call(this, this._order[i], i, this._order));
        }
        return result;
    };
    DataCollection.prototype.mapRange = function (from, to, callback) {
        if (from < 0) {
            from = 0;
        }
        if (to > this._order.length - 1) {
            to = this._order.length - 1;
        }
        var arr = this._order.slice(from, to);
        var result = [];
        for (var i = from; i <= to; i++) {
            result.push(callback.call(this, this._order[i], i, arr));
        }
        return result;
    };
    DataCollection.prototype.reduce = function (callback, acc) {
        for (var i = 0; i < this._order.length; i++) {
            acc = callback.call(this, acc, this._order[i], i);
        }
        return acc;
    };
    DataCollection.prototype.serialize = function (driver) {
        if (driver === void 0) { driver = types_1.DataDriver.json; }
        // remove $ attrs
        var data = this.map(function (item) {
            var newItem = __assign({}, item);
            Object.keys(newItem).forEach(function (key) {
                if (key.startsWith("$")) {
                    delete newItem[key];
                }
            });
            return newItem;
        });
        var dataDriver = helpers_1.toDataDriver(driver);
        if (dataDriver) {
            return dataDriver.serialize(data);
        }
    };
    DataCollection.prototype.getInitialData = function () {
        return this._initOrder;
    };
    DataCollection.prototype.setMeta = function (obj, key, value) {
        if (!obj)
            return;
        var map = this._meta.get(obj);
        if (!map) {
            map = {};
            this._meta.set(obj, map);
        }
        map[key] = value;
    };
    DataCollection.prototype.getMeta = function (obj, key) {
        var map = this._meta.get(obj);
        return map ? map[key] : null;
    };
    DataCollection.prototype.getMetaMap = function (obj) {
        return this._meta.get(obj);
    };
    DataCollection.prototype.setRange = function (from, to) {
        this._range = !to ? null : [from, to];
    };
    DataCollection.prototype.getRawData = function (from, to, order, mode) {
        order = order || this._order;
        if (mode === 1)
            return order;
        if (this._range) {
            from = this._range[0] + from;
            if (to === -1) {
                to = this._range[1];
            }
            else {
                var diff = to - from;
                to = from + diff > this._range[1] ? this._range[1] : from + diff;
            }
        }
        if (!to || (from === 0 && (to === -1 || to === order.length))) {
            return order;
        }
        if (from >= order.length)
            return [];
        if (to === -1 || to > order.length)
            to = order.length;
        var slice = order.slice(from, to);
        if (slice.filter(function (item) { return item.$empty; }).length !== 0) {
            this.events.fire("dataRequest", [from, to]);
        }
        return slice;
    };
    DataCollection.prototype._add = function (newItem, index) {
        if (!this.isDataLoaded()) {
            helpers_1.dhxWarning("the method doesn't work with lazyLoad");
            return;
        }
        var id = this._addCore(newItem, index);
        this._onChange("add", newItem.id, newItem);
        this.events.fire(types_1.DataEvents.afterAdd, [newItem]);
        return id;
    };
    DataCollection.prototype._remove = function (id) {
        if (!this.isDataLoaded()) {
            helpers_1.dhxWarning("the method doesn't work with lazyLoad");
            return;
        }
        var removedItem = this._pull[id];
        if (removedItem) {
            if (!this.events.fire(types_1.DataEvents.beforeRemove, [removedItem])) {
                return;
            }
            this._removeCore(removedItem.id);
            this._onChange("remove", id, removedItem);
        }
        this.events.fire(types_1.DataEvents.afterRemove, [removedItem]);
    };
    DataCollection.prototype._copy = function (id, index, target, targetId, key) {
        if (!this.isDataLoaded()) {
            helpers_1.dhxWarning("the method doesn't work with lazyLoad");
            return;
        }
        if (!this.exists(id)) {
            return null;
        }
        var newid = core_1.uid();
        if (key) {
            index = index === -1 ? -1 : index + key;
        }
        if (target) {
            if (!(target instanceof DataCollection) && targetId) {
                target.add(helpers_1.copyWithoutInner(this.getItem(id)), index);
                return;
            }
            if (target.exists(id)) {
                target.add(__assign(__assign({}, helpers_1.copyWithoutInner(this.getItem(id))), { id: newid }), index);
                return newid;
            }
            else {
                target.add(helpers_1.copyWithoutInner(this.getItem(id)), index);
                return id;
            }
        }
        this.add(__assign(__assign({}, helpers_1.copyWithoutInner(this.getItem(id))), { id: newid }), index);
        return newid;
    };
    DataCollection.prototype._move = function (id, index, target, targetId, key) {
        if (!this.isDataLoaded()) {
            helpers_1.dhxWarning("the method doesn't work with lazyLoad");
            return;
        }
        if (key) {
            index = index === -1 ? -1 : index + key;
        }
        if (target && target !== this && this.exists(id)) {
            var item = core_1.copy(this.getItem(id), true);
            if (target.exists(id)) {
                item.id = core_1.uid();
            }
            if (targetId) {
                item.parent = targetId;
            }
            target.add(item, index);
            // remove data from original collection
            this.remove(id);
            return item.id;
        }
        if (this.getIndex(id) === index) {
            return null;
        }
        // move other elements
        var spliced = this._order.splice(this.getIndex(id), 1)[0];
        if (index === -1) {
            index = this._order.length;
        }
        this._order.splice(index, 0, spliced);
        this.events.fire(types_1.DataEvents.change, [id, "update", this.getItem(id)]);
        return id;
    };
    DataCollection.prototype._addCore = function (obj, index) {
        if (this.config.init) {
            obj = this.config.init(obj);
        }
        obj.id = core_1.isDefined(obj.id) ? obj.id : core_1.uid();
        if (this._pull[obj.id]) {
            helpers_1.dhxError("Item already exist");
        }
        // todo: not ideal solution
        if (this._initOrder && this._initOrder.length) {
            this._addToOrder(this._initOrder, obj, index);
        }
        this._addToOrder(this._order, obj, index);
        return obj.id;
    };
    DataCollection.prototype._removeCore = function (id) {
        if (this.getIndex(id) >= 0) {
            this._order = this._order.filter(function (el) { return el.id !== id; });
            delete this._pull[id];
        }
        if (this._initOrder && this._initOrder.length) {
            this._initOrder = this._initOrder.filter(function (el) { return el.id !== id; });
            delete this._pull[id];
        }
    };
    DataCollection.prototype._parse_data = function (data) {
        var index = this._order.length;
        if (this.config.prep) {
            data = this.config.prep(data);
        }
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var obj = data_1[_i];
            this._addCore(obj, index++);
        }
    };
    DataCollection.prototype._approximate = function (data, values, maxNum) {
        var len = data.length;
        var vlen = values.length;
        var rlen = Math.floor(len / maxNum);
        var newData = Array(Math.ceil(len / rlen));
        var index = 0;
        for (var i = 0; i < len; i += rlen) {
            var newItem = core_1.copy(data[i]);
            var end = Math.min(len, i + rlen);
            for (var j = 0; j < vlen; j++) {
                var sum = 0;
                for (var z = i; z < end; z++) {
                    sum += data[z][values[j]];
                }
                newItem[values[j]] = sum / (end - i);
            }
            newData[index++] = newItem;
        }
        return newData;
    };
    DataCollection.prototype._onChange = function (status, id, obj) {
        for (var _i = 0, _a = this._changes.order; _i < _a.length; _i++) {
            var item = _a[_i];
            // update pending item if previous state is "saving" or if item not saved yet
            if (item.id === id && !item.saving) {
                // update item
                if (item.error) {
                    item.error = false;
                }
                var index = this._changes.order.indexOf(item);
                item = __assign(__assign({}, item), { obj: obj, status: status });
                this._changes.order.splice(index, 1, item);
                this._loader.updateChanges(this._changes);
                this.events.fire(types_1.DataEvents.change, [id, status, obj]);
                return;
            }
        }
        this._changes.order.push({ id: id, status: status, obj: __assign({}, obj), saving: false });
        this._loader.updateChanges(this._changes);
        this.events.fire(types_1.DataEvents.change, [id, status, obj]);
    };
    DataCollection.prototype._addToOrder = function (array, obj, index) {
        if (index >= 0 && array[index]) {
            this._pull[obj.id] = obj;
            array.splice(index, 0, obj);
        }
        else {
            this._pull[obj.id] = obj;
            array.push(obj);
        }
    };
    DataCollection.prototype._applySmart = function () {
        if (this._filter) {
            this._applyFilters();
        }
        if (this._sorter) {
            this._applySorters();
        }
    };
    DataCollection.prototype._applySorters = function (by) {
        this._sort.sort(this._order, by, this._sorter);
        // sort the not-filtered dataset
        if (this._initOrder && this._initOrder.length) {
            this._sort.sort(this._initOrder, by, this._sorter);
        }
    };
    DataCollection.prototype._applyFilters = function (rule) {
        var filter = this._filter;
        if (rule === filter)
            rule = null;
        if (rule || filter) {
            var fOrder = this._order.filter(function (item) { return (rule ? rule(item) : true) && (filter ? filter(item) : true); });
            if (!this._initOrder) {
                this._initOrder = this._order;
            }
            this._order = fOrder;
        }
    };
    return DataCollection;
}());
exports.DataCollection = DataCollection;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var JsonDriver_1 = __webpack_require__(35);
var CsvDriver_1 = __webpack_require__(36);
var XMLDriver_1 = __webpack_require__(71);
exports.dataDrivers = {
    json: JsonDriver_1.JsonDriver,
    csv: CsvDriver_1.CsvDriver,
};
exports.dataDriversPro = __assign(__assign({}, exports.dataDrivers), { xml: XMLDriver_1.XMLDriver });


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var JsonDriver = /** @class */ (function () {
    function JsonDriver() {
    }
    JsonDriver.prototype.toJsonArray = function (data) {
        return this.getRows(data);
    };
    JsonDriver.prototype.serialize = function (data) {
        return data;
    };
    JsonDriver.prototype.getFields = function (row) {
        return row;
    };
    JsonDriver.prototype.getRows = function (data) {
        return typeof data === "string" ? JSON.parse(data) : data;
    };
    return JsonDriver;
}());
exports.JsonDriver = JsonDriver;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var CsvDriver = /** @class */ (function () {
    function CsvDriver(config) {
        var initConfig = {
            skipHeader: 0,
            nameByHeader: false,
            rowDelimiter: "\n",
            columnDelimiter: ",",
        };
        this.config = __assign(__assign({}, initConfig), config);
        if (this.config.nameByHeader) {
            this.config.skipHeader = 1;
        }
    }
    CsvDriver.prototype.getFields = function (row, headers) {
        var parts = row.trim().split(this.config.columnDelimiter);
        var obj = {};
        for (var i = 0; i < parts.length; i++) {
            obj[headers ? headers[i] : i + 1] = isNaN(Number(parts[i])) ? parts[i] : parseFloat(parts[i]);
        }
        return obj;
    };
    CsvDriver.prototype.getRows = function (data) {
        return data.trim().split(this.config.rowDelimiter);
    };
    CsvDriver.prototype.toJsonArray = function (data) {
        var _this = this;
        var rows = this.getRows(data);
        var names = this.config.names;
        if (this.config.skipHeader) {
            var top_1 = rows.splice(0, this.config.skipHeader);
            if (this.config.nameByHeader) {
                names = top_1[0].trim().split(this.config.columnDelimiter);
            }
        }
        return rows.map(function (row) { return _this.getFields(row, names); });
    };
    CsvDriver.prototype.serialize = function (data, withoutHeader) {
        var header = data[0]
            ? Object.keys(data[0])
                .filter(function (key) { return !key.startsWith("$"); })
                .join(this.config.columnDelimiter) +
                this.config.columnDelimiter +
                this.config.rowDelimiter
            : "";
        var readyData = this._serialize(data);
        if (withoutHeader) {
            return readyData;
        }
        return header + readyData;
    };
    CsvDriver.prototype._serialize = function (data) {
        var _this = this;
        return data.reduce(function (csv, row) {
            var cells = Object.keys(row).reduce(function (total, key, i) {
                if (key.startsWith("$") || key === "items") {
                    return total;
                }
                return "" + total + row[key] + (i === row.length - 1 ? "" : _this.config.columnDelimiter);
            }, "");
            if (row.items) {
                return "" + csv + (csv ? "\n" : "") + cells + _this._serialize(row.items);
            }
            return "" + csv + (csv ? _this.config.rowDelimiter : "") + cells;
        }, "");
    };
    return CsvDriver;
}());
exports.CsvDriver = CsvDriver;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(5);
var html_1 = __webpack_require__(3);
var core_1 = __webpack_require__(1);
var KeyManager_1 = __webpack_require__(22);
var view_1 = __webpack_require__(6);
var ts_data_1 = __webpack_require__(7);
var Exporter_1 = __webpack_require__(77);
var data_1 = __webpack_require__(11);
var main_1 = __webpack_require__(8);
var Selection_1 = __webpack_require__(78);
var types_1 = __webpack_require__(4);
var render_1 = __webpack_require__(38);
var date_1 = __webpack_require__(16);
var content_1 = __webpack_require__(108);
var columnsResizer_1 = __webpack_require__(109);
var ts_message_1 = __webpack_require__(49);
var keys_1 = __webpack_require__(114);
var FocusManager_1 = __webpack_require__(15);
var Grid = /** @class */ (function (_super) {
    __extends(Grid, _super);
    function Grid(container, config) {
        var _this = _super.call(this, container, config) || this;
        _this._touch = {
            duration: 350,
            dblDuration: 300,
            timer: null,
            start: false,
            timeStamp: null,
        };
        _this.config = core_1.extend({
            rowHeight: 40,
            headerRowHeight: 40,
            footerRowHeight: 40,
            keyNavigation: true,
            // selection: "cell", // TODO: turn it on to test aria attrs only OR add correct tabindexes to use native focus
            sortable: true,
            columns: [],
            data: [],
            tooltip: true,
            rootParent: (typeof container === "string" && container) || _this._uid,
            // TODO: remove suite_7.0
            headerSort: true,
        }, config);
        _this.content = content_1.getContent();
        _this._scroll = {
            top: 0,
            left: 0,
        };
        // TODO: remove suite_7.0
        _this.config.autoWidth = _this.config.autoWidth || _this.config.fitToContainer;
        _this.config.adjust = _this.config.adjust || _this.config.columnsAutoWidth;
        _this.config.editable = _this.config.editable || _this.config.editing;
        _this.config.leftSplit = _this.config.leftSplit || _this.config.splitAt;
        if (!_this.config.sortable || !_this.config.headerSort) {
            _this.config.sortable = false;
        }
        _this.config.columns.forEach(function (col) {
            col.format = col.format || col.dateFormat;
        });
        var showCellTooltip = function (row, column, node) {
            if (row && column && main_1.isTooltip(_this.config, column)) {
                var value = data_1.toFormat(row[column.id], column.type, column.format);
                if (column.tooltipTemplate) {
                    value = column.tooltipTemplate(value, row, column);
                }
                else if (value && column.template) {
                    value = column.template(value, row, column);
                }
                value &&
                    ts_message_1.tooltip(value, {
                        css: "dhx_grid_tooltip",
                        node: node,
                        htmlEnable: main_1.isHtmlEnable(_this.config, column),
                    });
            }
        };
        var showContentTootlip = function (e, column) {
            if (column && main_1.isTooltip(_this.config, column)) {
                var value = (e.target.querySelector(".dhx_grid-header-cell-text span") &&
                    e.target.querySelector(".dhx_grid-header-cell-text span").textContent) ||
                    (e.target.querySelector(".dhx_grid-footer-cell-text span") &&
                        e.target.querySelector(".dhx_grid-footer-cell-text span").textContent) ||
                    "";
                value &&
                    ts_message_1.tooltip(value, {
                        css: "dhx_grid_tooltip",
                        node: e.target,
                        htmlEnable: main_1.isHtmlEnable(_this.config, column),
                    });
            }
        };
        var htmlEvents = {
            onclick: html_1.eventHandler(function (e) { return html_1.locate(e); }, {
                "dhx_grid-header-cell--sortable": function (e, id) {
                    var isResizable = e.target.getAttribute("dhx_resized");
                    var column = _this._getColumn(id);
                    if (column &&
                        main_1.isSortable(_this.config, column) &&
                        !isResizable &&
                        _this.events.fire(types_1.GridEvents.beforeSort, [column, _this._sortDir ? "asc" : "desc"])) {
                        _this._sort(id);
                    }
                },
                "dhx_grid-expand-cell": function (e, item) {
                    if (e.target.classList.contains("dhx_grid-expand-cell-icon")) {
                        _this.events.fire(types_1.GridEvents.expand, [item]);
                    }
                },
            }),
            onscroll: function (e) {
                _this.events.fire(types_1.GridEvents.scroll, [
                    {
                        y: e.target.scrollTop,
                        x: e.target.scrollLeft,
                    },
                ]);
            },
            onmouseover: {
                ".dhx_grid-cell": function (e) {
                    var row = _this.data.getItem(e.composedPath()[1].getAttribute("dhx_id"));
                    var column = _this._getColumn(e.target.getAttribute("dhx_col_id"));
                    showCellTooltip(row, column, e.target);
                },
                ".dhx_grid-cell:not(.dhx_tree-cell) .dhx_grid-cell__content, .dhx_tree-cell :not(.dhx_grid-cell__content)": function (e) {
                    var path = e.composedPath();
                    var row = _this.data.getItem(path[2].getAttribute("dhx_id"));
                    var column = _this._getColumn(path[1].getAttribute("dhx_col_id"));
                    showCellTooltip(row, column, e.target);
                },
                ".dhx_grid-cell.dhx_tree-cell .dhx_grid-cell__content": function (e) {
                    var path = e.composedPath();
                    var row = _this.data.getItem(path[3].getAttribute("dhx_id"));
                    var column = _this._getColumn(path[2].getAttribute("dhx_col_id"));
                    showCellTooltip(row, column, path[2]);
                },
                ".dhx_span-cell:not(.dhx_grid-header-cell)": function (e) {
                    var row = _this.data.getItem(e.target.getAttribute("dhx_id"));
                    var column = _this._getColumn(e.target.getAttribute("dhx_col_id"));
                    var span = _this.getSpan(row.id, column.id);
                    if (row && span && main_1.isTooltip(_this.config, span)) {
                        var value = span.text || data_1.toFormat(row[column.id], column.type, column.format);
                        if (span.tooltipTemplate) {
                            value = span.tooltipTemplate(value, span);
                        }
                        else if (column.template) {
                            value = column.template(value, row, column);
                        }
                        value &&
                            ts_message_1.tooltip(value, {
                                css: "dhx_grid_tooltip",
                                node: e.target,
                                htmlEnable: true,
                            });
                    }
                },
                ".dhx_grid-header-cell:not(.dhx_span-cell)": function (e) {
                    var column = _this._getColumn(e.target.getAttribute("dhx_id"));
                    showContentTootlip(e, column);
                },
                ".dhx_grid-footer-cell:not(.dhx_span-cell)": function (e) {
                    var column = _this._getColumn(e.target.getAttribute("dhx_id"));
                    showContentTootlip(e, column);
                },
                ".dhx_grid-header-cell.dhx_span-cell": function (e) {
                    var column = _this._getColumn(e.target.getAttribute("dhx_id"));
                    var headerSpan = column && column.header.find(function (item) { return !!(item.rowspan || item.colspan); });
                    if (column && headerSpan && main_1.isTooltip(_this.config, column)) {
                        var value = headerSpan.text || "";
                        value &&
                            ts_message_1.tooltip(value, {
                                css: "dhx_grid_tooltip",
                                node: e.target,
                                htmlEnable: main_1.isHtmlEnable(_this.config, column),
                            });
                    }
                },
                ".dhx_grid-header-cell-text_content": function (e) {
                    var path = e.composedPath();
                    var column = _this._getColumn(path[1].getAttribute("dhx_id"));
                    if (column && main_1.isTooltip(_this.config, column)) {
                        var value = (path[2].querySelector(".dhx_grid-header-cell-text_content") &&
                            path[2].querySelector(".dhx_grid-header-cell-text_content").textContent) ||
                            "";
                        value &&
                            ts_message_1.tooltip(value, {
                                css: "dhx_grid_tooltip",
                                node: path[1],
                                htmlEnable: main_1.isHtmlEnable(_this.config, column),
                            });
                    }
                },
            },
        };
        if (_this.config.dragMode || _this.config.dragItem) {
            ts_data_1.dragManager.setItem(_this._uid, _this);
            if (!_this.config.dragItem) {
                _this.config.dragItem = "row";
            }
            if (!_this.config.dragMode) {
                _this.config.dragMode = "both";
            }
        }
        _this._init();
        if (_this.config.columns) {
            _this._parseColumns();
        }
        if (_this.config.data &&
            _this.config.data instanceof Array &&
            _this.config.data.length &&
            _this.config.columns) {
            _this.data.parse(_this.config.data);
        }
        _this.selection = new Selection_1.Selection(_this, {
            disabled: !_this.config.selection,
        }, _this.events);
        if (_this.config.keyNavigation) {
            _this.keyManager = new KeyManager_1.KeyManager(function (e, focusId) {
                if (focusId === _this._uid && _this.events.fire(types_1.GridEvents.beforeKeyDown, [e])) {
                    _this.events.fire(types_1.GridEvents.afterKeyDown, [e]);
                    return true;
                }
                return false;
            });
            _this._initHotKey();
            FocusManager_1.focusManager.setFocusId(_this._uid);
        }
        var view = dom_1.create({
            render: function (vm, obj) {
                return render_1.render(vm, obj, htmlEvents, _this.selection, _this._uid);
            },
        }, _this);
        _this.mount(container, view);
        _this.config.autoWidth && _this.config.autoHeight && _this._prepareData(_this.config.data);
        if (config.autoEmptyRow && _this.data.getLength() === 0) {
            _this._addEmptyRow();
            _this.paint();
        }
        return _this;
    }
    Grid.prototype.destructor = function () {
        this._destroyContent();
        this.keyManager && this.keyManager.destructor();
        this.events.events = {};
        this.events.context = null;
        this._activeFilters = this._filterData = this._scroll = this.content = null;
        this.unmount();
    };
    Grid.prototype.setColumns = function (columns) {
        this.config.columns = columns;
        this._parseColumns();
        this.mount(this.config.rootParent, this.getRootView());
        this._adjustColumns();
        this._checkFilters();
        this._checkMarks();
        this.paint();
    };
    Grid.prototype.addRowCss = function (id, css) {
        var item = this.data.getItem(id);
        var styles = item.$css || "";
        if (!styles.match(new RegExp(css, "g"))) {
            item.$css = styles + (" " + css);
            this.paint();
        }
    };
    Grid.prototype.removeRowCss = function (id, css) {
        var item = this.data.getItem(id);
        var styles = item.$css ? item.$css.replace(css, "") : "";
        item.$css = styles;
        this.paint();
    };
    Grid.prototype.addCellCss = function (row, col, css) {
        var column = this._getColumn(col);
        if (column) {
            if (column.$cellCss[row]) {
                // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
                column.$cellCss[row] += column.$cellCss[row].match(new RegExp(css, "g")) ? "" : " " + css;
            }
            else if (this.data.getItem(row)) {
                column.$cellCss[row] = css + " ";
            }
            this.paint();
        }
    };
    Grid.prototype.removeCellCss = function (row, col, css) {
        var column = this._getColumn(col);
        if (column) {
            if (column.$cellCss[row]) {
                column.$cellCss[row] = column.$cellCss[row].replace(css, "");
                this.paint();
            }
            else if (this.data.getItem(row)) {
                column.$cellCss[row] = "";
            }
        }
    };
    Grid.prototype.showColumn = function (colId) {
        var column = this._getColumn(colId);
        if (!column || !column.hidden) {
            return;
        }
        if (!this.events.fire(types_1.GridEvents.beforeColumnShow, [column]))
            return;
        column.hidden = false;
        this.config.$totalWidth += column.$width;
        var filter = this._hiddenFilters && this._hiddenFilters[column.id];
        if (filter) {
            this._activeFilters[column.id] = filter;
            delete this._hiddenFilters[column.id];
        }
        this.paint();
        this._checkFilters();
        this.events.fire(types_1.GridEvents.afterColumnShow, [column]);
    };
    Grid.prototype.hideColumn = function (colId) {
        var column = this._getColumn(colId);
        if (!column || column.hidden) {
            return;
        }
        if (!this.events.fire(types_1.GridEvents.beforeColumnHide, [column]))
            return;
        column.hidden = true;
        this.config.$totalWidth -= column.$width;
        var filter = this._activeFilters && this._activeFilters[column.id];
        if (filter) {
            if (!this._hiddenFilters) {
                this._hiddenFilters = {};
            }
            this._hiddenFilters[column.id] = filter;
            delete this._activeFilters[column.id];
            this.data.filter();
        }
        this.paint();
        this._checkFilters();
        this.events.fire(types_1.GridEvents.afterColumnHide, [column]);
    };
    Grid.prototype.isColumnHidden = function (colId) {
        var column = this._getColumn(colId);
        if (column) {
            return !!column.hidden;
        }
    };
    Grid.prototype.showRow = function (rowId) {
        if (!core_1.isDefined(rowId)) {
            return;
        }
        var id = rowId.toString();
        var row = this.data.getItem(id);
        if (!row || !row.hidden) {
            return;
        }
        if (!this.events.fire(types_1.GridEvents.beforeRowShow, [row]))
            return;
        this.data.update(id, { hidden: false });
        this.data.filter(function (i) { return !i.hidden; });
        this.events.fire(types_1.GridEvents.afterRowShow, [row]);
    };
    Grid.prototype.hideRow = function (rowId) {
        if (!core_1.isDefined(rowId)) {
            return;
        }
        var id = rowId.toString();
        var row = this.data.getItem(id);
        if (!row) {
            return;
        }
        if (!this.events.fire(types_1.GridEvents.beforeRowHide, [row]))
            return;
        this.data.update(id, { hidden: true });
        this.data.filter(function (i) { return !i.hidden; });
        this.events.fire(types_1.GridEvents.afterRowHide, [row]);
    };
    Grid.prototype.isRowHidden = function (rowId) {
        if (!core_1.isDefined(rowId)) {
            return;
        }
        var row = this.data.getItem(rowId.toString());
        if (row) {
            return !!row.hidden;
        }
    };
    Grid.prototype.getScrollState = function () {
        return {
            x: this._scroll.left,
            y: this._scroll.top,
        };
    };
    Grid.prototype.scroll = function (x, y) {
        var gridBody = this.getRootView().refs.grid_body.el;
        gridBody.scrollLeft = typeof x === "number" ? x : gridBody.scrollLeft;
        gridBody.scrollTop = typeof y === "number" ? y : gridBody.scrollTop;
        this.paint();
    };
    Grid.prototype.scrollTo = function (row, col) {
        var selectedCell = this.selection.getCell();
        var columns = this.config.columns.filter(function (col) { return !col.hidden; });
        var colInd = core_1.findIndex(columns, function (_a) {
            var id = _a.id;
            return id == col;
        });
        var prevCol = selectedCell ? selectedCell.column : this.config.columns[0];
        var prevColInd = core_1.findIndex(columns, function (obj) { return obj.id == prevCol.id; });
        var fixedColsWidth = this.config.leftSplit
            ? main_1.getTotalWidth(columns.slice(0, this.config.leftSplit))
            : 0;
        var x = main_1.getTotalWidth(columns.slice(0, colInd)) - (colInd - prevColInd < 0 ? fixedColsWidth : 0);
        var rows = this.data.getRawData(0, -1);
        var rowInd = core_1.findIndex(rows, function (_a) {
            var id = _a.id;
            return id == row;
        });
        var y = main_1.getTotalHeight(rows.slice(0, rowInd));
        var scrollState = this.getScrollState();
        var gridRight = this.config.width + scrollState.x;
        var gridBottom = this.config.height + scrollState.y - this.config.headerRowHeight * this.config.$headerLevel;
        var cellTop = y - scrollState.y - rows[rowInd].$height;
        var cellLeft = x - scrollState.x - columns[colInd].$width;
        var cellBottom = y + rows[rowInd].$height * 2 + 18 - gridBottom;
        var cellRight = x + columns[colInd].$width * 2 + 18 - gridRight;
        var scrollTop = cellTop > 0 && cellBottom < 0 ? 0 : cellTop < 0 ? cellTop : cellBottom;
        var scrollLeft = cellLeft > 0 && cellRight < 0 ? 0 : cellLeft < 0 ? cellLeft : cellRight;
        this.scroll(scrollLeft + scrollState.x, scrollTop + scrollState.y);
    };
    Grid.prototype.adjustColumnWidth = function (id, adjust) {
        if (adjust === void 0) { adjust = true; }
        var columns = this.config.columns.filter(function (col) { return !col.hidden; });
        var col = columns.filter(function (col) { return col.id === id; });
        var totalCols = this._adjustColumnsWidth(this.config.data, col, adjust);
        this.config.$totalWidth = columns.reduce(function (totalWidth, column) {
            if (totalCols[column.id]) {
                column.$fixed = true;
                var max = column.maxWidth;
                var min = column.minWidth;
                var width = totalCols[column.id];
                column.$width = width;
                if (max && width > max) {
                    column.$width = max;
                }
                if (min && column.$width < min) {
                    column.$width = min;
                }
            }
            return (totalWidth += column.$width);
        }, 0);
        this.paint();
    };
    Grid.prototype.getCellRect = function (row, col) {
        var columns = this.config.columns.filter(function (col) { return !col.hidden; });
        var rows = this.data.getRawData(0, -1);
        var colInd = core_1.findIndex(columns, function (obj) { return obj.id == col; });
        var rowInd = core_1.findIndex(rows, function (obj) { return obj.id == row; });
        var x = main_1.getTotalWidth(columns.slice(0, colInd));
        var y = main_1.getTotalHeight(rows.slice(0, rowInd));
        return {
            x: x,
            y: y,
            height: rows[rowInd] ? rows[rowInd].$height : 0,
            width: columns[colInd] ? columns[colInd].$width : 0,
        };
    };
    Grid.prototype.getColumn = function (colId) {
        var id = core_1.findIndex(this.config.columns, function (col) { return col.id == colId; });
        if (id >= 0) {
            return this.config.columns[id];
        }
    };
    Grid.prototype.addSpan = function (spanObj) {
        this.config.spans = this.config.spans || [];
        var index = core_1.findIndex(this.config.spans, function (span) { return "" + span.row === "" + spanObj.row && "" + span.column === "" + spanObj.column; });
        if (index >= 0) {
            this.config.spans[index] = spanObj;
            return;
        }
        this.config.spans.push(spanObj);
    };
    Grid.prototype.getSpan = function (row, col) {
        if (this.config.spans) {
            var index = core_1.findIndex(this.config.spans, function (span) { return "" + span.row === "" + row && "" + span.column === "" + col; });
            return this.config.spans[index];
        }
    };
    Grid.prototype.removeSpan = function (row, col) {
        if (this.config.spans) {
            var index = core_1.findIndex(this.config.spans, function (span) { return "" + span.row === "" + row && "" + span.column === "" + col; });
            this.config.spans.splice(index, 1);
        }
    };
    Grid.prototype.editCell = function (rowId, colId, editorType) {
        var row = this.data.getItem(rowId);
        var col = this.getColumn(colId);
        var colEditorType = col.editorType;
        if (!row || row[colId] === undefined) {
            ts_data_1.dhxWarning("item not found");
            return;
        }
        if (!editorType) {
            if (col.type === "date") {
                editorType = "datePicker";
            }
            if (col.type === "boolean") {
                editorType = "checkbox";
            }
            if (colEditorType) {
                editorType = colEditorType;
            }
        }
        if (!this.events.fire(types_1.GridEvents.beforeEditStart, [row, col, editorType])) {
            return;
        }
        if (this.config.$editable &&
            this.config.$editable.row === rowId &&
            this.config.$editable.col === colId &&
            this.config.$editable.editorType === editorType) {
            return;
        }
        this.config.$editable = {
            row: row.id,
            col: col.id,
            editorType: editorType,
        };
        if (!this.selection.config.disabled) {
            this.selection.setCell(rowId.toString(), colId.toString());
        }
        this.paint();
        this.events.fire(types_1.GridEvents.afterEditStart, [row, col, editorType]);
    };
    Grid.prototype.editEnd = function (withoutSave) {
        if (this.config.$editable && this.config.$editable.editor) {
            this.config.$editable.editor.endEdit(withoutSave);
        }
    };
    Grid.prototype.getSortingState = function () {
        return { dir: this._sortDir, by: this._sortBy };
    };
    Grid.prototype.getHeaderFilter = function (colId) {
        var _this = this;
        var col = this.getColumn(colId);
        if (!col) {
            return;
        }
        var filter = null;
        col.header.forEach(function (cell) {
            if (cell.content) {
                var filterEl = _this.content[cell.content].element[colId];
                filter =
                    cell.content === "comboFilter" ? filterEl : _this.getRootView().refs[colId + "_filter"].el;
            }
        });
        return filter;
    };
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    Grid.prototype.edit = function (rowId, colId, editorType) {
        this.editCell(rowId, colId, editorType);
    };
    Grid.prototype._parseColumns = function () {
        data_1.normalizeColumns(this.config);
        var columns = this.config.columns.filter(function (col) { return !col.hidden; });
        data_1.countColumns(this.config, columns);
    };
    Grid.prototype._parseData = function () {
        this.config.data = this._prepareData(this.data);
        this._detectColsTypes();
        this._checkFilters();
        this._checkMarks();
        this.data.filter(function (i) { return !i.hidden; });
        this._render();
    };
    Grid.prototype._createCollection = function (prep) {
        this.data = new ts_data_1.DataCollection({ prep: prep }, this.events);
    };
    Grid.prototype._getRowIndex = function (rowId) {
        return this.data.getIndex(rowId);
    };
    Grid.prototype._setEventHandlers = function () {
        var _this = this;
        var updater = function (updateObj) { return function (_a) {
            var source = _a.source, target = _a.target;
            if (source && source instanceof Array && source.length > 1) {
                source.map(function (selectedId) { return _this.data.exists(selectedId) && _this.data.update(selectedId, updateObj); });
                return;
            }
            if (_this.data.exists(target)) {
                _this.data.update(target, updateObj);
            }
        }; };
        this.data.events.on(ts_data_1.DataEvents.load, function () {
            _this._parseData();
            _this._checkFilters();
        });
        this.data.events.on(ts_data_1.DataEvents.change, function (id, status, obj) {
            if (status === "remove" && obj.$emptyRow) {
                return;
            }
            if (status === "setPage") {
                dom_1.awaitRedraw().then(function () {
                    _this.scrollTo(_this.data.getId(obj[0]).toString(), _this.config.columns[0].id.toString());
                    _this._render();
                });
                return;
            }
            if (status === "add" || status === "update" || status === "remove") {
                _this.config.data = _this._prepareData(_this.data);
            }
            if (id) {
                _this._filterData = _this.data.map(function (el) { return el; }) || [];
                _this._checkFilters();
            }
            _this._detectColsTypes();
            _this._removeMarks();
            _this._checkMarks();
            if (_this.config.autoEmptyRow && (!_this._activeFilters || core_1.isEmptyObj(_this._activeFilters))) {
                var emptyRow = _this.data.find({ by: "$emptyRow", match: true });
                if (emptyRow) {
                    if (emptyRow.id === id)
                        return;
                    _this.data.move(emptyRow.id, _this.data.getLength() - 1);
                }
                else {
                    _this._addEmptyRow();
                }
            }
            _this._render();
        });
        this.data.events.on(ts_data_1.DataEvents.removeAll, function () {
            _this.config.columns.map(function (col) {
                col.header.map(function (cell) {
                    if (cell.content && (cell.content === "selectFilter" || cell.content === "comboFilter")) {
                        col.$uniqueData = [];
                    }
                });
            });
        });
        this.events.on(ts_data_1.DragEvents.beforeDrag, function (data, events) {
            if (_this.data.getItem(data.start)) {
                return _this.events.fire(types_1.GridEvents.beforeRowDrag, [data, events]);
            }
            else if (_this.config.dragItem === "column" || _this.config.dragItem === "both") {
                return _this.events.fire(types_1.GridEvents.beforeColumnDrag, [data, events]);
            }
        });
        this.events.on(ts_data_1.DragEvents.dragStart, function (data, events) {
            updater({ $dragtarget: true });
            if (_this.data.getItem(data.start)) {
                _this.events.fire(types_1.GridEvents.dragRowStart, [data, events]);
            }
            else if (_this.config.dragItem === "column" || _this.config.dragItem === "both") {
                _this.events.fire(types_1.GridEvents.dragColumnStart, [data, events]);
            }
        });
        this.events.on(ts_data_1.DragEvents.dragIn, function (data, events) {
            if (_this.data.getItem(data.start)) {
                _this.events.fire(types_1.GridEvents.dragRowIn, [data, events]);
            }
            else if (_this.config.dragItem === "column" || _this.config.dragItem === "both") {
                _this.events.fire(types_1.GridEvents.dragColumnIn, [data, events]);
            }
        });
        this.events.on(ts_data_1.DragEvents.dragOut, function (data, events) {
            if (_this.data.getItem(data.start)) {
                _this.events.fire(types_1.GridEvents.dragRowOut, [data, events]);
            }
            else if (_this.config.dragItem === "column" || _this.config.dragItem === "both") {
                _this.events.fire(types_1.GridEvents.dragColumnOut, [data, events]);
            }
        });
        this.events.on(ts_data_1.DragEvents.canDrop, function (data, events) {
            updater({ $drophere: true });
            if (_this.data.getItem(data.start)) {
                _this.events.fire(types_1.GridEvents.canRowDrop, [data, events]);
            }
            else if (_this.config.dragItem === "column" || _this.config.dragItem === "both") {
                _this.events.fire(types_1.GridEvents.canColumnDrop, [data, events]);
            }
        });
        this.events.on(ts_data_1.DragEvents.cancelDrop, function (data, events) {
            updater({ $drophere: undefined });
            if (_this.data.getItem(data.start)) {
                _this.events.fire(types_1.GridEvents.cancelRowDrop, [data, events]);
            }
            else if (_this.config.dragItem === "column" || _this.config.dragItem === "both") {
                _this.events.fire(types_1.GridEvents.cancelColumnDrop, [data, events]);
            }
        });
        this.events.on(ts_data_1.DragEvents.beforeDrop, function (data, events) {
            if (_this.config.dragItem === "row" &&
                (_this.config.dragMode === "both" || _this.config.dragMode === "target")) {
                return _this.events.fire(types_1.GridEvents.beforeRowDrop, [data, events]);
            }
            else if (_this.config.dragItem === "column" || _this.config.dragItem === "both") {
                return _this.events.fire(types_1.GridEvents.beforeColumnDrop, [data, events]);
            }
        });
        this.events.on(ts_data_1.DragEvents.afterDrop, function (data, events) {
            var _a;
            if (_this.data.getItem(data.start)) {
                _this.events.fire(types_1.GridEvents.afterRowDrop, [data, events]);
                var item = _this.data.getItem(data.start);
                for (var _i = 0, _b = _this.config.columns; _i < _b.length; _i++) {
                    var col = _b[_i];
                    if (typeof item[col.id] === "undefined") {
                        _this.data.update(item.id, (_a = {}, _a[col.id] = null, _a), true);
                    }
                }
            }
            else if (_this.config.dragItem === "column" || _this.config.dragItem === "both") {
                _this.events.fire(types_1.GridEvents.afterColumnDrop, [data, events]);
            }
            _this.config.data = _this._prepareData(_this.data.map(function (i) { return i; }));
            _this.data.parse(_this.config.data);
        });
        this.events.on(ts_data_1.DragEvents.afterDrag, function (data, events) {
            updater({ $dragtarget: undefined });
            if (_this.data.getItem(data.start)) {
                _this.events.fire(types_1.GridEvents.afterRowDrag, [data, events]);
            }
            else if (_this.config.dragItem === "column" || _this.config.dragItem === "both") {
                _this.events.fire(types_1.GridEvents.afterColumnDrag, [data, events]);
            }
            _this.config.data = _this._prepareData(_this.data.map(function (i) { return i; }));
            _this.data.parse(_this.config.data);
        });
        // TODO: When introducing touch events, remove system events
        this.events.on(types_1.GridEvents.cellMouseDown, function (row, col, e) {
            if (!e.targetTouches) {
                _this._dragStart(e);
            }
            else {
                _this._touch.timer = setTimeout(function () {
                    _this._dragStart(e);
                }, _this._touch.duration);
                if (!_this._touch.timeStamp) {
                    _this._touch.timeStamp = +e.timeStamp.toFixed();
                }
                else {
                    var doubleTap = _this._touch.dblDuration >= _this._touch.timeStamp - +e.timeStamp.toFixed();
                    if (doubleTap) {
                        if ((col.editable !== false && _this.config.editable) || col.editable) {
                            _this.editCell(row.id, col.id, col.editorType);
                        }
                        e.preventDefault();
                        // to simulate on touch devices
                        _this.events.fire(types_1.GridEvents.cellDblClick, [row, col, e]);
                    }
                    _this._touch.timeStamp = null;
                }
                setTimeout(function () {
                    _this._touch.timeStamp = null;
                }, _this._touch.dblDuration);
            }
        });
        this._events.on(types_1.GridSystemEvents.cellTouchMove, function (_row, _col, e) {
            _this._touch.start && e.preventDefault();
            _this._clearTouchTimer();
        });
        this._events.on(types_1.GridSystemEvents.cellTouchEnd, function () {
            _this._touch.start = false;
            _this._clearTouchTimer();
        });
        // TODO: remove suite_7.0
        this.events.on(types_1.GridEvents.headerInput, function (val, colId, filter) {
            if (_this.config.autoEmptyRow) {
                var emptyRow = _this.data.find({ by: "$emptyRow", match: true });
                if (emptyRow) {
                    _this.data.remove(emptyRow.id);
                }
            }
            if (!_this._activeFilters) {
                _this._activeFilters = {};
            }
            if (val) {
                _this._activeFilters[colId] = {
                    by: colId,
                    match: val,
                    compare: _this.content[filter].match,
                };
            }
            else {
                delete _this._activeFilters[colId];
            }
            _this.data.filter(function (i) { return i; });
            for (var compare in _this._activeFilters) {
                _this.data.filter(_this._activeFilters[compare], { add: true });
            }
        });
        this.events.on(types_1.GridEvents.filterChange, function (val, colId, filter) {
            if (_this.config.autoEmptyRow) {
                var emptyRow = _this.data.find({ by: "$emptyRow", match: true });
                if (emptyRow) {
                    _this.data.remove(emptyRow.id);
                }
            }
            if (!_this._activeFilters) {
                _this._activeFilters = {};
            }
            if (val) {
                _this._activeFilters[colId] = {
                    by: colId,
                    match: val,
                    compare: _this.content[filter].match,
                };
            }
            else {
                delete _this._activeFilters[colId];
            }
            _this.data.filter(function (i) { return i; });
            for (var compare in _this._activeFilters) {
                _this.data.filter(_this._activeFilters[compare], { add: true });
            }
        });
        this.events.on(types_1.GridEvents.scroll, function (scrollState) {
            _this._scroll = { top: scrollState.y, left: scrollState.x };
            _this.editEnd();
            _this.paint();
        });
        this.events.on(types_1.GridEvents.cellDblClick, function (row, col) {
            if ((col.editable !== false && _this.config.editable) || col.editable) {
                _this.editCell(row.id, col.id, col.editorType);
            }
        });
        this.events.on(types_1.GridEvents.afterEditEnd, function (value, eRow, eCol) {
            var _a;
            var row;
            var col;
            if (!_this.config.$editable) {
                row = eRow.id;
                col = eCol.id;
            }
            else {
                row = _this.config.$editable.row;
                col = _this.config.$editable.col;
            }
            var item = _this.data.getItem(row);
            delete item.$emptyRow;
            if (value !== undefined) {
                _this.data.update(row, __assign(__assign({}, item), (_a = {}, _a[col] = value, _a)));
            }
            _this.config.$editable = null;
            _this._checkFilters();
            _this.paint();
        });
        this.events.on(types_1.GridEvents.headerCellMouseDown, function (col, e) {
            var target = e.target;
            var resizedColumn = target.getAttribute("dhx_resized");
            if (resizedColumn && _this.events.fire(types_1.GridEvents.beforeResizeStart, [col, e])) {
                columnsResizer_1.startResize(_this, resizedColumn.toString(), e, function () {
                    _this.paint();
                    _this.config.$resizing = null;
                    _this.events.fire(types_1.GridEvents.afterResizeEnd, [col, e]);
                });
            }
            if (e.targetTouches) {
                if (!_this._touch.timeStamp) {
                    _this._touch.timeStamp = +e.timeStamp.toFixed();
                }
                else {
                    var doubleTap = _this._touch.dblDuration >= _this._touch.timeStamp - +e.timeStamp.toFixed();
                    if (doubleTap) {
                        e.preventDefault();
                        // to simulate on touch devices
                        _this.events.fire(types_1.GridEvents.headerCellDblClick, [col, e]);
                    }
                    _this._touch.timeStamp = null;
                }
                setTimeout(function () {
                    _this._touch.timeStamp = null;
                }, _this._touch.dblDuration);
            }
        });
        this.events.on(types_1.GridEvents.footerCellDblClick, function (col, e) {
            if (e.targetTouches) {
                if (!_this._touch.timeStamp) {
                    _this._touch.timeStamp = +e.timeStamp.toFixed();
                }
                else {
                    var doubleTap = _this._touch.dblDuration >= _this._touch.timeStamp - +e.timeStamp.toFixed();
                    if (doubleTap) {
                        e.preventDefault();
                        // to simulate on touch devices
                        _this.events.fire(types_1.GridEvents.footerCellDblClick, [col, e]);
                    }
                    _this._touch.timeStamp = null;
                }
                setTimeout(function () {
                    _this._touch.timeStamp = null;
                }, _this._touch.dblDuration);
            }
        });
        this.events.on(types_1.GridEvents.resize, function () {
            _this._parseColumns();
            _this._checkFilters();
        });
    };
    Grid.prototype._addEmptyRow = function () {
        var id = this.data.getId(this.data.getLength() - 1);
        var lastRow = this.data.getItem(id);
        var columns = this.config.columns.filter(function (col) { return !col.hidden; });
        var isEmpty = main_1.isRowEmpty(lastRow);
        if (!isEmpty) {
            this.data.add(columns.reduce(function (total, col) {
                total[col.id] = "";
                return total;
            }, { $emptyRow: true }));
        }
    };
    Grid.prototype._sort = function (by, dir) {
        var _this = this;
        if (!dir) {
            if (this._sortBy === by) {
                this._sortDir = this._sortDir === "asc" ? "desc" : "asc";
            }
            else {
                this._sortDir = "asc";
            }
        }
        else {
            this._sortDir = dir;
        }
        this._sortBy = by;
        this.data.sort({
            by: by,
            dir: this._sortDir,
            as: function (item) {
                var col = _this.getColumn(by);
                if (item && col.type === "date") {
                    return typeof item === "string"
                        ? date_1.stringToDate(item, col.format).getTime()
                        : item.getTime();
                }
                return item ? "" + item : "";
            },
        });
        this.events.fire(types_1.GridEvents.afterSort, [this.getColumn(by), this._sortDir]);
    };
    Grid.prototype._clearTouchTimer = function () {
        if (this._touch.timer) {
            clearTimeout(this._touch.timer);
            this._touch.timer = null;
        }
    };
    Grid.prototype._checkFilters = function () {
        var _this = this;
        var data = this._filterData;
        if (!data)
            return;
        this.config.columns.forEach(function (col) {
            col.header.forEach(function (cell) {
                if (cell.content && (cell.content === "selectFilter" || cell.content === "comboFilter")) {
                    var unique = data_1.getUnique(data, col.id);
                    if (col.$uniqueData && col.$uniqueData.length > unique.length) {
                        unique.forEach(function (item) {
                            if (!col.$uniqueData.includes(item)) {
                                col.$uniqueData.push(item);
                            }
                        });
                    }
                    else {
                        col.$uniqueData = unique;
                    }
                }
            });
        });
        var _loop_1 = function (compare) {
            var col = this_1.config.columns.find(function (i) { return i.id === compare; });
            var filter = col.header.find(function (i) { return !!i.content; });
            if (filter &&
                (filter.content === "selectFilter" || filter.content === "comboFilter") &&
                !col.$uniqueData.find(function (i) { return i.toString() === _this._activeFilters[compare].match; })) {
                delete this_1._activeFilters[compare];
                this_1.data.filter();
            }
            else {
                this_1.data.filter(this_1._activeFilters[compare], { add: true });
            }
        };
        var this_1 = this;
        for (var compare in this._activeFilters) {
            _loop_1(compare);
        }
    };
    Grid.prototype._adjustColumns = function () {
        var _this = this;
        if (typeof this.config.adjust === "boolean" ||
            this.config.adjust === "data" ||
            this.config.adjust === "header" ||
            this.config.adjust === "footer") {
            var columns = this.config.columns.filter(function (col) { return !col.hidden; });
            if (!columns.length)
                return;
            var data = !this.config.data || !this.config.data.length ? this.data.map(function (row) { return row; }) : this.config.data;
            var totalCols_1 = this._adjustColumnsWidth(data, columns);
            this.config.$totalWidth = columns.reduce(function (totalWidth, column) {
                column.$fixed = true;
                var max = column.maxWidth;
                var min = column.minWidth;
                var width = totalCols_1[column.id];
                column.$width = width;
                if (max && width > max) {
                    column.$width = max;
                }
                if (min && column.$width < min) {
                    column.$width = min;
                }
                return (totalWidth += column.$width);
            }, 0);
        }
        else {
            var columns = this.config.columns.filter(function (col) { return !col.hidden && col.adjust; });
            if (!columns.length)
                return;
            columns.forEach(function (col) {
                _this.adjustColumnWidth(col.id, col.adjust);
            });
        }
    };
    Grid.prototype._prepareData = function (data) {
        var _this = this;
        if (this.config.autoHeight)
            this.config.autoHeight = false;
        this._adjustColumns();
        return data.map(function (row) {
            row.$height = row.height || _this.config.rowHeight;
            return row;
        });
    };
    Grid.prototype._adjustColumnsWidth = function (rows, cols, adjust) {
        var _a, _b, _c;
        if (adjust === void 0) { adjust = this.config.adjust; }
        var columnsWidth = {};
        if (adjust === "header" || adjust === true) {
            var currentCols = cols.filter(function (col) { return col.header; });
            var data = data_1.getMaxColsWidth(this._prepareColumnData(currentCols, "header"), currentCols, {
                font: "bold 14.4px Arial",
            }, "header");
            if (data) {
                for (var _i = 0, _d = Object.entries(data); _i < _d.length; _i++) {
                    var _e = _d[_i], key = _e[0], value = _e[1];
                    columnsWidth = Object.assign(columnsWidth, (_a = {},
                        _a[key] = +value + (main_1.isSortable(this.config, this.getColumn(key)) ? 36 : 16),
                        _a));
                }
            }
        }
        if (adjust === "footer" || adjust === true) {
            var currentCols = cols.filter(function (col) { return col.footer; });
            var data = data_1.getMaxColsWidth(this._prepareColumnData(currentCols, "footer"), currentCols, {
                font: "bold 14.4px Arial",
            }, "footer");
            if (data) {
                for (var _f = 0, _g = Object.entries(data); _f < _g.length; _f++) {
                    var _h = _g[_f], key = _h[0], value = _h[1];
                    if ((columnsWidth[key] && columnsWidth[key] < +value + 16) || !columnsWidth[key]) {
                        columnsWidth = Object.assign(columnsWidth, (_b = {},
                            _b[key] = +value + 16,
                            _b));
                    }
                }
            }
        }
        if (adjust === "data" || adjust === true) {
            var data = data_1.getMaxColsWidth(rows, cols, {
                font: "normal 14.4px Arial",
            }, "data");
            if (data) {
                for (var _j = 0, _k = Object.entries(data); _j < _k.length; _j++) {
                    var _l = _k[_j], key = _l[0], value = _l[1];
                    if ((columnsWidth[key] && columnsWidth[key] < +value + 16) || !columnsWidth[key]) {
                        columnsWidth = Object.assign(columnsWidth, (_c = {},
                            _c[key] = +value + 16,
                            _c));
                    }
                }
            }
        }
        return columnsWidth;
    };
    Grid.prototype._prepareColumnData = function (data, type) {
        var _a;
        var _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var totalRow = [];
        for (var i = 0; i < data.length; i++) {
            var row = [];
            for (var k = 0; k < ((_b = data[k]) === null || _b === void 0 ? void 0 : _b[type].length); k++) {
                var rowData = {};
                if ((_d = (_c = data[i]) === null || _c === void 0 ? void 0 : _c[type][k]) === null || _d === void 0 ? void 0 : _d.text) {
                    rowData[data[i].id] = ((_f = (_e = data[i]) === null || _e === void 0 ? void 0 : _e[type][k]) === null || _f === void 0 ? void 0 : _f.text) || "";
                    row.push(rowData);
                }
                else if ((_h = (_g = data[i]) === null || _g === void 0 ? void 0 : _g[type][k]) === null || _h === void 0 ? void 0 : _h.content) {
                    rowData[data[i].id] =
                        this.content[(_k = (_j = data[i]) === null || _j === void 0 ? void 0 : _j[type][k]) === null || _k === void 0 ? void 0 : _k.content].toHtml(this.getColumn(data[i].id), this.config) || "";
                    row.push(rowData);
                }
            }
            for (var j = 0; j < row.length; j++) {
                for (var _i = 0, _l = Object.entries(row[j]); _i < _l.length; _i++) {
                    var _m = _l[_i], key = _m[0], value = _m[1];
                    totalRow[j] = __assign({}, totalRow[j]) || {};
                    totalRow[j] = Object.assign(totalRow[j], (_a = {}, _a[key] = value, _a));
                }
            }
        }
        return totalRow;
    };
    Grid.prototype._dragStart = function (e) {
        if (this.config.dragMode &&
            (this.config.dragItem === "row" || this.config.dragItem === "both") &&
            !this.config.$editable) {
            var item = html_1.locateNode(e, "dhx_id");
            var itemId = item && item.getAttribute("dhx_id");
            if (e.targetTouches) {
                this._touch.start = true;
            }
            return ts_data_1.dragManager.onMouseDown(e, [itemId], [item]);
        }
    };
    Grid.prototype._getColumn = function (id) {
        for (var _i = 0, _a = this.config.columns; _i < _a.length; _i++) {
            var col = _a[_i];
            if (col.id == id) {
                return col;
            }
        }
    };
    Grid.prototype._init = function () {
        this.events = new events_1.EventSystem(this);
        this._events = new events_1.EventSystem(this);
        this._attachDataCollection();
        this.export = new Exporter_1.Exporter(this);
        this._setEventHandlers();
    };
    Grid.prototype._attachDataCollection = function () {
        var _this = this;
        var prep = function (data) {
            if (data.spans) {
                _this.config.spans = data.spans;
                data = data.data;
            }
            return data;
        };
        if (this.config.data instanceof ts_data_1.DataCollection) {
            this.data = this.config.data;
            this.config.data = this.data.serialize();
            return;
        }
        this._createCollection(prep);
    };
    Grid.prototype._setMarks = function (col, func) {
        var colCells = this.data.map(function (row) { return ({
            id: row.id,
            data: row[col.id],
            row: row,
        }); });
        var colCellsData = this.data.map(function (row) { return row[col.id]; });
        var _loop_2 = function (cell) {
            var css = func(cell.data, colCellsData, cell.row, col);
            if (css) {
                col.$cellCss = col.$cellCss || {};
                var cellCss_1 = (col.$cellCss[cell.id] || "").split(" ");
                css.split(" ").map(function (item) {
                    if (!cellCss_1.includes(item)) {
                        cellCss_1.push(item);
                    }
                });
                col.$cellCss[cell.id] = cellCss_1.join(" ");
            }
        };
        for (var _i = 0, colCells_1 = colCells; _i < colCells_1.length; _i++) {
            var cell = colCells_1[_i];
            _loop_2(cell);
        }
    };
    Grid.prototype._checkMarks = function () {
        var _this = this;
        this.config.columns.map(function (col) {
            var mark = col.mark;
            if (mark) {
                if (typeof mark === "function") {
                    _this._setMarks(col, mark);
                }
                else {
                    _this._setMarks(col, function (el, c) {
                        var data = [];
                        c.forEach(function (item) {
                            if (item !== null && item !== undefined && item !== "") {
                                data.push(parseFloat(item));
                            }
                        });
                        var min = core_1.getMinArrayNymber(data);
                        var max = core_1.getMaxArrayNymber(data);
                        if (mark.max && max === parseFloat(el)) {
                            return mark.max;
                        }
                        if (mark.min && min === parseFloat(el)) {
                            return mark.min;
                        }
                        return false;
                    });
                }
            }
        });
    };
    Grid.prototype._removeMarks = function () {
        this.config.columns.forEach(function (col) {
            if (col.mark) {
                col.$cellCss = {};
            }
        });
    };
    // [todo] make more smart type detection
    Grid.prototype._detectColsTypes = function () {
        this.config.columns.forEach(function (col) {
            if (col.type) {
                return col;
            }
            if (col.format) {
                col.type = "number";
                return col;
            }
            if (!col.type) {
                col.type = "string";
            }
        });
    };
    Grid.prototype._destroyContent = function () {
        for (var contentName in this.content) {
            if (contentName === "comboFilter") {
                this.content[contentName].destroy();
            }
        }
    };
    Grid.prototype._render = function () {
        this.paint();
    };
    Grid.prototype._initHotKey = function () {
        var handlers = keys_1.getKeysHandlers(this);
        for (var key in handlers) {
            this.keyManager.addHotKey(key, handlers[key]);
        }
        for (var key in this.config.hotkeys) {
            this.keyManager.addHotKey(key, this.config.hotkeys[key]);
        }
    };
    return Grid;
}(view_1.View));
exports.Grid = Grid;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var html_1 = __webpack_require__(3);
var data_1 = __webpack_require__(11);
var main_1 = __webpack_require__(8);
var Cells_1 = __webpack_require__(23);
var FixedCols_1 = __webpack_require__(107);
var FixedRows_1 = __webpack_require__(48);
var core_1 = __webpack_require__(1);
var BORDERS = 2;
function getRenderConfig(obj, data, wrapperSizes) {
    var config = obj.config;
    var columns = config.columns.filter(function (col) { return !col.hidden; });
    var positions = data_1.calculatePositions(wrapperSizes.width, wrapperSizes.height, obj._scroll, config, data);
    var currentColumns = columns.slice(positions.xStart, positions.xEnd);
    var currentRows = data.slice(positions.yStart, positions.yEnd);
    return __assign(__assign({}, config), { data: data,
        columns: columns, scroll: obj._scroll, $positions: positions, headerHeight: config.$headerLevel * config.headerRowHeight, footerHeight: config.$footerLevel * config.footerRowHeight, firstColId: columns[0] && columns[0].id, events: obj.events, _events: obj._events, currentColumns: currentColumns,
        currentRows: currentRows, sortBy: obj._sortBy, sortDir: obj._sortDir, content: obj.content, gridId: obj._uid });
}
exports.getRenderConfig = getRenderConfig;
function getElementSizes(element) {
    if (!element)
        return;
    if (!element.tagName)
        element = element._parent._container;
    if (!element)
        return;
    var styles = element.currentStyle || window.getComputedStyle(element);
    var paddingsByWidth = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight) || 0;
    var paddingsByHeight = parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom) || 0;
    return {
        width: element.clientWidth - paddingsByWidth,
        height: element.clientHeight - paddingsByHeight,
    };
}
function getGridData(renderConfig, shifts) {
    var content = Cells_1.getCells(renderConfig);
    var contentSpans = Cells_1.getSpans(renderConfig);
    var resizedLine;
    var colums = renderConfig.columns;
    if (renderConfig.$resizing) {
        var colIndex = core_1.findIndex(colums, function (col) { return col.id === renderConfig.$resizing; });
        var firstCellLeft = main_1.getTotalWidth(colums.slice(0, colIndex)) + colums[colIndex].$width;
        resizedLine = dom_1.el(".dhx_grid-resize-line", {
            style: {
                top: 0,
                left: firstCellLeft,
                height: renderConfig.$totalHeight,
            },
        });
    }
    var selection = renderConfig.selection ? renderConfig.selection.toHTML() : null;
    selection =
        typeof selection === "string" ? dom_1.el("div.dhx_selection", { ".innerHTML": selection }) : selection;
    var pos = renderConfig.$positions;
    var events = {};
    function getCellInfo(e) {
        var rowId = html_1.locate(e, "dhx_id");
        var colId = html_1.locate(e, "dhx_col_id");
        var row = renderConfig.currentRows.filter(function (item) { return item.id === rowId; })[0];
        var col = renderConfig.currentColumns.filter(function (item) { return item.id === colId; })[0];
        return {
            row: rowId ? row : {},
            col: colId ? col : {},
        };
    }
    if (renderConfig.eventHandlers) {
        for (var key in renderConfig.eventHandlers) {
            if (renderConfig.eventHandlers.hasOwnProperty(key)) {
                var event_1 = renderConfig.eventHandlers[key];
                events[key] = html_1.eventHandler(function (e) { return getCellInfo(e); }, __assign({}, event_1));
            }
        }
    }
    return dom_1.el(".dhx_data-wrap", __assign({ style: {
            height: renderConfig.$totalHeight,
            width: renderConfig.$totalWidth,
            "padding-left": shifts.x,
            "padding-top": shifts.y,
        }, role: "presentation" }, events), [
        dom_1.el(".dhx_grid_data", __assign(__assign({ _flags: dom_1.KEYED_LIST }, Cells_1.getHandlers(pos.yStart, pos.xStart, renderConfig)), { role: "rowgroup" }), content),
        // el(".dhx_span-spans", contentSpans),
        dom_1.el(".dhx_span-spans", { role: "presentation" }, contentSpans),
        dom_1.el(".dhx_grid_selection", { _ref: "selection", "aria-hidden": "true" }, [selection, resizedLine]),
    ]);
}
function getContentHeight(renderConfig, isSticky, wrapperSizes) {
    var contentHeight = wrapperSizes.height - BORDERS;
    contentHeight = isSticky ? contentHeight : contentHeight - renderConfig.headerHeight;
    var isFooter = renderConfig.$footer;
    return (contentHeight = isFooter
        ? isSticky
            ? contentHeight
            : contentHeight - renderConfig.footerHeight
        : contentHeight);
}
function applyAutoWidth(config, wrapperSizes, firstApply, resizer) {
    if (firstApply === void 0) { firstApply = true; }
    if (resizer === void 0) { resizer = false; }
    var scrollbarY = config.$totalHeight >= wrapperSizes.height - config.headerRowHeight ? html_1.getScrollbarWidth() : 0;
    var newTotalWidth = wrapperSizes.width - BORDERS - scrollbarY;
    var columns = config.columns.filter(function (col) { return !col.hidden; });
    var growingColumns = columns.filter(function (col) { return !col.width && !col.$fixed && main_1.isAutoWidth(config, col); });
    var nonGrowingColumnsWidth = main_1.getTotalWidth(columns.filter(function (col) { return col.width || col.$fixed || !main_1.isAutoWidth(config, col); }));
    var fullGravity = growingColumns.reduce(function (gravity, col) { return gravity + (col.gravity || 1); }, 0);
    if (newTotalWidth < config.$totalWidth) {
        var growingColumnsWidth_1 = growingColumns.reduce(function (width, col) { return width + (col.maxWidth || col.$width); }, 0);
        if (growingColumns.length > 1) {
            growingColumns.forEach(function (col) {
                var newWidth = 0;
                if (firstApply) {
                    newWidth =
                        Math.abs(newTotalWidth - growingColumnsWidth_1) * ((col.gravity || 1) / fullGravity);
                }
                else {
                    newWidth =
                        Math.abs(newTotalWidth - nonGrowingColumnsWidth) * ((col.gravity || 1) / fullGravity);
                }
                var wrongMin = newWidth < col.minWidth;
                var wrongMax = newWidth > col.maxWidth;
                if (!wrongMin && !wrongMax) {
                    col.$width = newWidth;
                }
                else if (wrongMin) {
                    nonGrowingColumnsWidth += col.$width - newWidth;
                    col.$fixed = true;
                }
                else if (wrongMax) {
                    col.$width = col.maxWidth;
                    col.$fixed = true;
                }
            });
        }
    }
    else {
        growingColumns.forEach(function (col) {
            var newWidth = Math.abs(newTotalWidth - nonGrowingColumnsWidth) * ((col.gravity || 1) / fullGravity);
            var wrongMin = newWidth < col.minWidth;
            var wrongMax = newWidth > col.maxWidth;
            if (!wrongMin && !wrongMax) {
                col.$width = newWidth;
            }
            else if (wrongMin) {
                nonGrowingColumnsWidth += col.$width - newWidth;
                if (resizer)
                    col.$fixed = true;
            }
            else if (wrongMax) {
                col.$width = col.maxWidth;
                if (resizer)
                    col.$fixed = true;
            }
            if (!firstApply && col.$fixed) {
                delete col.$fixed;
            }
        });
    }
    if (firstApply) {
        applyAutoWidth(config, wrapperSizes, false);
    }
}
function render(vm, obj, htmlEvents, selection, uid) {
    if (!obj._container) {
        obj.config.width = 1;
        obj.config.height = 1;
    }
    // if grid placed inside another component, it will fit to its container
    if (vm && vm.node && vm.node.parent && vm.node.parent.el) {
        var parentNode = vm.node.parent.el;
        var parentSizes = getElementSizes(parentNode);
        obj.config.width = parentSizes.width;
        obj.config.height = parentSizes.height;
    }
    var config = obj.config;
    // when grid is destructing and user try to repaint it
    if (!config) {
        return dom_1.el("div");
    }
    if (!config.columns.length) {
        return dom_1.el(".dhx_grid");
    }
    var data = obj.data.getRawData(0, -1, null, 2);
    if (config.columns.reduce(function (check, col) { return (check = !col.hidden ? col.hidden : check); }, true)) {
        config.$totalHeight = 0;
    }
    else {
        config.$totalHeight = data.reduce(function (total, _a) {
            var $height = _a.$height;
            return (total += $height || 0);
        }, 0);
    }
    var sizes = getElementSizes(obj._container);
    var wrapperSizes = {
        width: (config.width ? config.width : sizes && sizes.width) || 0,
        height: (config.height ? config.height : sizes && sizes.height) || 0,
    };
    // TODO: Remove scroll
    if (main_1.isAutoWidth(config)) {
        applyAutoWidth(config, wrapperSizes);
        config.$totalWidth = main_1.getTotalWidth(config.columns.filter(function (col) { return !col.hidden; }));
    }
    config.width = wrapperSizes.width;
    config.height = wrapperSizes.height;
    var renderConfig = getRenderConfig(obj, data, wrapperSizes);
    renderConfig.selection = selection;
    renderConfig.datacollection = obj.data;
    var shifts = Cells_1.getShifts(renderConfig);
    var isSticky = main_1.isCssSupport("position", "sticky");
    var gridBodyHeight = getContentHeight(renderConfig, isSticky, wrapperSizes);
    var layoutState = {
        wrapper: wrapperSizes,
        sticky: isSticky,
        shifts: shifts,
        gridBodyHeight: gridBodyHeight,
    };
    var header = FixedRows_1.getFixedRows(renderConfig, __assign(__assign({}, layoutState), { name: "header", position: "top" }));
    var footer = renderConfig.$footer
        ? FixedRows_1.getFixedRows(renderConfig, __assign(__assign({}, layoutState), { name: "footer", position: "bottom" }))
        : null;
    var lessByWidth = renderConfig.$totalWidth + BORDERS < wrapperSizes.width ? "dhx_grid-less-width" : "";
    var lessByHeight = renderConfig.$totalHeight + BORDERS < wrapperSizes.height ? "dhx_grid-less-height" : "";
    // dirty: but work. Change checking of rendering Grid
    if (!vm.node) {
        var _a = obj.getScrollState(), x_1 = _a.x, y_1 = _a.y;
        dom_1.awaitRedraw().then(function () {
            obj.scroll(x_1, y_1);
        });
    }
    return dom_1.el(".dhx_grid.dhx_widget", {
        class: (renderConfig.css || "") +
            (!isSticky ? " dhx_grid_border" : "") +
            (config.multiselection ? " dhx_no-select--pointer" : ""),
        dhx_widget_id: uid,
        dhx_root_id: config.rootParent,
        role: "grid",
        "aria-rowcount": renderConfig.data.length,
        "aria-colcount": config.columns.filter(function (col) { return !col.hidden; }).length,
    }, [
        dom_1.resizer(function (changeWith) {
            if (main_1.isAutoWidth(obj.config) && !!changeWith) {
                config.$totalWidth = 0;
                applyAutoWidth(config, wrapperSizes, true, true);
            }
            return obj.paint();
        }),
        dom_1.el(".dhx_grid-content", {
            style: __assign({}, wrapperSizes),
            onclick: htmlEvents.onclick,
            onmouseover: htmlEvents.onmouseover,
            class: (lessByWidth + " " + lessByHeight).trim(),
            role: "presentation",
        }, [
            isSticky ? null : header,
            dom_1.el(".dhx_grid-body", {
                style: {
                    height: gridBodyHeight,
                    width: wrapperSizes.width - BORDERS,
                },
                onscroll: htmlEvents.onscroll,
                _ref: "grid_body",
                role: "presentation",
            }, [
                dom_1.el("div", {}, [
                    isSticky ? header : null,
                    getGridData(renderConfig, shifts),
                    isSticky ? footer : null,
                ]),
            ]),
            FixedCols_1.getFixedColsHeader(renderConfig, layoutState),
            FixedCols_1.getFixedCols(renderConfig, layoutState),
            isSticky ? null : footer,
        ]),
    ]);
}
exports.render = render;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(87));
__export(__webpack_require__(17));


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PopupEvents;
(function (PopupEvents) {
    PopupEvents["beforeHide"] = "beforeHide";
    PopupEvents["beforeShow"] = "beforeShow";
    PopupEvents["afterHide"] = "afterHide";
    PopupEvents["afterShow"] = "afterShow";
    PopupEvents["click"] = "click";
})(PopupEvents = exports.PopupEvents || (exports.PopupEvents = {}));


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SliderEvents;
(function (SliderEvents) {
    SliderEvents["change"] = "change";
    SliderEvents["mousedown"] = "mousedown";
    SliderEvents["mouseup"] = "mouseup";
})(SliderEvents = exports.SliderEvents || (exports.SliderEvents = {}));


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TimepickerEvents;
(function (TimepickerEvents) {
    TimepickerEvents["change"] = "change";
    TimepickerEvents["beforeApply"] = "beforeApply";
    TimepickerEvents["afterApply"] = "afterApply";
    TimepickerEvents["beforeClose"] = "beforeClose";
    TimepickerEvents["afterClose"] = "afterClose";
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    TimepickerEvents["apply"] = "apply";
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    TimepickerEvents["close"] = "close";
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    TimepickerEvents["save"] = "save";
})(TimepickerEvents = exports.TimepickerEvents || (exports.TimepickerEvents = {}));


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CalendarEvents;
(function (CalendarEvents) {
    CalendarEvents["change"] = "change";
    CalendarEvents["beforeChange"] = "beforechange";
    CalendarEvents["modeChange"] = "modeChange";
    CalendarEvents["monthSelected"] = "monthSelected";
    CalendarEvents["yearSelected"] = "yearSelected";
    CalendarEvents["cancelClick"] = "cancelClick";
    CalendarEvents["dateMouseOver"] = "dateMouseOver";
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    CalendarEvents["dateHover"] = "dateHover";
})(CalendarEvents = exports.CalendarEvents || (exports.CalendarEvents = {}));


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(98));
__export(__webpack_require__(47));


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(18);
var ts_data_1 = __webpack_require__(7);
var Selection = /** @class */ (function () {
    function Selection(config, data, events) {
        var _this = this;
        this.config = config;
        this.events = events;
        this._data = data;
        this._selected = [];
        this._data.events.on(ts_data_1.DataEvents.removeAll, function () {
            _this._selected = [];
        });
        if (typeof this.config.multiselection === "string") {
            var types = ["click", "ctrlClick"];
            if (!types.includes(this.config.multiselection)) {
                this.config.multiselection = false;
            }
        }
        this._data.events.on(ts_data_1.DataEvents.beforeRemove, function (obj) {
            _this._nextSelection = null;
            if (_this._selected.length === 1) {
                var next = _this._data.getIndex(obj.id);
                var count = _this._data.getLength();
                if (count > 1) {
                    var lastIndex = count == next - 1 ? next - 1 : next + 1;
                    _this._nextSelection = _this._data.getId(lastIndex);
                }
            }
        });
        this._data.events.on(ts_data_1.DataEvents.afterRemove, function (obj) {
            var hasIndex = _this._selected.indexOf(obj.id);
            if (hasIndex !== -1) {
                _this._selected.splice(hasIndex, 1);
            }
            if (_this._nextSelection) {
                _this.add(_this._nextSelection);
                _this._nextSelection = null;
            }
        });
    }
    Selection.prototype.enable = function () {
        this.config.disabled = false;
    };
    Selection.prototype.disable = function () {
        this.remove();
        this.config.disabled = true;
    };
    Selection.prototype.getId = function () {
        if (this.config.multiselection) {
            return this._selected;
        }
        return this._selected[0];
    };
    Selection.prototype.getItem = function () {
        var _this = this;
        if (this.config.multiselection) {
            return this._selected.map(function (id) { return _this._data.getItem(id); });
        }
        return this._selected.length ? this._data.getItem(this._selected[0]) : null;
    };
    Selection.prototype.contains = function (id) {
        if (id) {
            return this._selected.includes(id);
        }
        return this._selected.length > 0;
    };
    Selection.prototype.remove = function (id) {
        var _this = this;
        if (id) {
            this._unselectItem(id);
        }
        else {
            this._selected.forEach(function (selectedId) { return _this._unselectItem(selectedId); });
            this._selected = [];
        }
    };
    Selection.prototype.add = function (id, isCtrl, isShift, silent) {
        var _this = this;
        if (this.config.disabled) {
            return;
        }
        if (typeof id === "undefined") {
            var unSelected = this._data.serialize().filter(function (_a) {
                var id = _a.id;
                return !_this._selected.includes(id);
            });
            unSelected.forEach(function (_a) {
                var id = _a.id;
                _this._addMulti(id, silent);
            });
            return;
        }
        var multi = this.config.multiselection;
        if (isShift && this._selected.length && multi) {
            this._addMulti(id, silent);
        }
        else {
            this._addSingle(id, multi && (multi !== "ctrlClick" || isCtrl), silent);
        }
    };
    Selection.prototype.destructor = function () {
        var _this = this;
        this._selected.forEach(function (selectedId) { return _this._unselectItem(selectedId, true); });
    };
    Selection.prototype._addMulti = function (id, silent) {
        var _a;
        var last = this._selected[this._selected.length - 1];
        var i1 = this._data.getIndex(last);
        var i2 = this._data.getIndex(id);
        if (i1 > i2) {
            _a = [i2, i1], i1 = _a[0], i2 = _a[1];
        }
        for (i1; i1 <= i2; i1++) {
            var id_1 = this._data.getId(i1);
            this._selectItem(id_1, silent);
        }
    };
    Selection.prototype._addSingle = function (id, isCtrl, silent) {
        var _this = this;
        if (!isCtrl) {
            this._selected.forEach(function (selectedId) {
                if (selectedId != id)
                    _this._unselectItem(selectedId);
            });
        }
        if (isCtrl && this._selected.includes(id)) {
            this._unselectItem(id, silent);
        }
        else {
            this._selectItem(id, silent);
        }
    };
    Selection.prototype._selectItem = function (id, silent) {
        var item = this._data.getItem(id);
        if (!item || this._data.getMeta(item, "selected"))
            return;
        if (!silent && !this.events.fire(types_1.SelectionEvents.beforeSelect, [id]))
            return;
        this._selected.push(id);
        this._data.setMeta(item, "selected", true);
        if (!silent)
            this.events.fire(types_1.SelectionEvents.afterSelect, [id]);
    };
    Selection.prototype._unselectItem = function (id, silent) {
        if (!silent && !this.events.fire(types_1.SelectionEvents.beforeUnSelect, [id]))
            return;
        this._selected = this._selected.filter(function (selectedId) { return selectedId !== id; });
        this._data.setMeta(this._data.getItem(id), "selected", false);
        if (!silent)
            this.events.fire(types_1.SelectionEvents.afterUnSelect, [id]);
    };
    return Selection;
}());
exports.Selection = Selection;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    notFound: "Not Found",
    selectAll: "Select All",
    unselectAll: "Unselect All",
    selectedItems: "selected items",
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ComboboxEvents;
(function (ComboboxEvents) {
    ComboboxEvents["change"] = "change";
    ComboboxEvents["open"] = "open";
    ComboboxEvents["input"] = "input";
    ComboboxEvents["beforeClose"] = "beforeClose";
    ComboboxEvents["afterClose"] = "afterClose";
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    ComboboxEvents["close"] = "close";
})(ComboboxEvents = exports.ComboboxEvents || (exports.ComboboxEvents = {}));
var ComboState;
(function (ComboState) {
    ComboState[ComboState["default"] = 0] = "default";
    ComboState[ComboState["error"] = 1] = "error";
    ComboState[ComboState["success"] = 2] = "success";
})(ComboState = exports.ComboState || (exports.ComboState = {}));


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var cells_1 = __webpack_require__(24);
var main_1 = __webpack_require__(8);
var types_1 = __webpack_require__(4);
function handleMouse(col, config, type, e) {
    if (!type)
        return;
    var systemEvent = type.toLocaleLowerCase().includes("touch");
    if (systemEvent) {
        config._events.fire(type, [col, e]);
    }
    else {
        config.events.fire(type, [col, e]);
    }
}
function getHandlers(column, rowName, config) {
    return {
        onclick: [handleMouse, column, config, types_1.GridEvents[rowName + "CellClick"]],
        onmouseover: [handleMouse, column, config, types_1.GridEvents[rowName + "CellMouseOver"]],
        onmousedown: [handleMouse, column, config, types_1.GridEvents[rowName + "CellMouseDown"]],
        ontouchstart: [handleMouse, column, config, types_1.GridEvents[rowName + "CellMouseDown"]],
        ondblclick: [handleMouse, column, config, types_1.GridEvents[rowName + "CellDblClick"]],
        oncontextmenu: [handleMouse, column, config, types_1.GridEvents[rowName + "CellRightClick"]],
        ontouchmove: [handleMouse, column, config, types_1.GridSystemEvents[rowName + "CellTouchMove"]],
        ontouchend: [handleMouse, column, config, types_1.GridSystemEvents[rowName + "CelltouchEnd"]],
    };
}
function buildRows(columns, name) {
    var header = columns.map(function (col) { return col[name] || [{}]; });
    return main_1.transpose(header);
}
function getColumnHeaderText(col) {
    var colHeader = col.id;
    if (col.header && col.header.length) {
        var i = col.header.length - 1;
        while (i >= 0) {
            var headerConf = col.header[i];
            if (headerConf && headerConf.text) {
                colHeader = headerConf.text;
                break;
            }
            i -= 1;
        }
    }
    return colHeader;
}
function getCustomContentCell(cell, column, config, rowName, css, colIndex, rowIndex) {
    if (css === void 0) { css = ""; }
    var rowHeight = config[rowName + "RowHeight"] || 40;
    var type = column.type ? "dhx_" + column.type + "-cell" : "dhx_string_cell";
    // TODO: over with index of filter inside of header or footer
    var content = config.content[cell.content] && config.content[cell.content].toHtml(column, config);
    var cellRow = {};
    config.columns.forEach(function (col) {
        var hasContent = !!config.content[col[rowName][rowIndex].content];
        cellRow[col.id] =
            (hasContent && config.content[col[rowName][rowIndex].content].toHtml(col, config)) ||
                col[rowName][rowIndex].text;
    });
    return dom_1.el(".dhx_grid-" + rowName + "-cell.dhx_grid-custom-content-cell." + type, __assign(__assign({ class: css, style: {
            width: column.$width,
            height: rowHeight + "px",
        } }, getHandlers(column, rowName, config)), { dhx_id: column.id, role: "gridcell", "aria-colindex": colIndex, "aria-label": getColumnHeaderText(column) }), [
        content &&
            (typeof content === "string" || typeof content === "number"
                ? dom_1.el("div", {
                    class: "dhx_grid-footer-cell-text",
                    role: "presentation",
                    ".innerHTML": column.template && typeof content === "string"
                        ? column.template(content, cellRow, column)
                        : content,
                })
                : content),
    ]);
}
function getRows(config, rowsConfig) {
    if (!config.data || !config.columns) {
        return [];
    }
    var pos = config.$positions;
    var rowName = rowsConfig.name;
    var columns = config.currentColumns;
    var rowHeight = config[rowName + "RowHeight"] || 40;
    var rows = buildRows(columns, rowName);
    return rows.map(function (row, j) {
        return dom_1.el(".dhx_" + rowName + "-row", {
            style: {
                height: rowHeight,
            },
            role: "row",
            "aria-rowindex": j + 1,
        }, row.map(function (cell, i) {
            var css = cell.css || "";
            var column = columns[i];
            var colIndex = pos.xStart + i + 1;
            var sortIconCss = "dxi dxi-sort-variant dhx_grid-sort-icon";
            var ariaSort = "none";
            if (config.sortBy && "" + column.id === config.sortBy && !cell.content) {
                var dir = config.sortDir || "asc";
                sortIconCss += " dhx_grid-sort-icon--" + dir;
                css += " dhx_grid-" + rowName + "-cell--sorted ";
                ariaSort = dir === "asc" ? "ascending" : "descending";
            }
            var sortIconVisible = main_1.isSortable(config, column) && cell.text && rowName !== "footer";
            if (sortIconVisible) {
                css += " dhx_grid-header-cell--sortable";
            }
            var isFirstCol = i === 0 ? "dhx_first-column-cell" : "";
            var isLastCol = i === columns.length - 1 ? "dhx_last-column-cell" : "";
            if (!cell.content) {
                if (cell.align) {
                    css += " dhx_grid-header-cell--align_" + cell.align + " ";
                }
                else {
                    css += " dhx_grid-header-cell--" + (column.type === "number" || column.type === "percent" || column.type === "date"
                        ? "align_right"
                        : "align_left") + " ";
                }
            }
            css += isFirstCol + " " + isLastCol;
            var resizable = column.resizable !== undefined ? column.resizable : config.resizable;
            if (resizable) {
                resizable = dom_1.el("div", {
                    class: "dhx_resizer_grip_wrap",
                    "aria-hidden": "true",
                }, [
                    dom_1.el("div", {
                        class: "dhx_resizer_grip",
                        dhx_resized: column.id,
                        style: {
                            height: rows.length * 100 + "%",
                        },
                    }, [dom_1.el("div", { class: "dhx_resizer_grip_line" })]),
                ]);
                if (rowName === "footer" || j > 0) {
                    resizable = null;
                }
            }
            if (cell.align) {
                css += " dhx_align-" + cell.align;
            }
            if (cell.content) {
                return getCustomContentCell(cell, column, config, rowName, css, colIndex, j);
            }
            var cellAria = {
                role: "columnheader",
                "aria-colindex": colIndex,
                "aria-sort": ariaSort,
                "aria-label": cell.text,
            };
            var innerCellAria = {
                role: "button",
                "aria-label": "Click to sort by",
            };
            if (rowName === "footer") {
                cellAria.role = "gridcell";
                delete cellAria["aria-sort"];
                delete cellAria["aria-label"];
                delete innerCellAria.role;
                delete innerCellAria["aria-label"];
            }
            var cellCss = "dhx_grid-header-cell-text_content";
            if (config.autoHeight)
                cellCss += " dhx_grid-header-cell-text_content-auto-height";
            return dom_1.el(".dhx_grid-" + rowName + "-cell", __assign(__assign({ class: css.trim(), dhx_id: column.id, _key: i, style: {
                    width: column.$width,
                    height: rowHeight + "px",
                } }, getHandlers(column, rowName, config)), cellAria), [
                dom_1.el("div.dhx_grid-header-cell-text", {
                    role: "presentation",
                }, [
                    dom_1.el("span", __assign({ class: cellCss, style: { lineHeight: rowHeight + "px" }, ".innerHTML": cell.text }, innerCellAria)),
                    resizable || null,
                ]),
                sortIconVisible && dom_1.el("div", { class: sortIconCss, "aria-hidden": "true" }),
            ]);
        }));
    });
}
exports.getRows = getRows;
function getFixedSpans(config, rowsConfig) {
    var cols = config.columns;
    var rows = main_1.transpose(cols.map(function (col) { return col[rowsConfig.name] || []; }));
    var height = config[rowsConfig.name + "RowHeight"] || 40;
    var rowName = rowsConfig.name;
    var pos = config.$positions;
    var leftShift = 0;
    return rows.map(function (row, i) {
        leftShift = 0;
        return dom_1.el(".dhx_span-row", {
            style: { top: height * i + "px", height: height },
            class: "dhx_header-row",
            "aria-hidden": "true",
        }, row
            .map(function (cell, cellIdx) {
            var col = cols[cellIdx];
            var colIndex = pos.xStart + cellIdx + 1;
            leftShift += col.hidden ? 0 : col.$width;
            var isFirstCol = cellIdx === 0 ? "dhx_first-column-cell" : "";
            var isLastCol = cellIdx === cols.length - 1 || (cell.colspan || 0) + (cellIdx - 1) >= cols.length - 1
                ? "dhx_last-column-cell"
                : "";
            var spanHeight = height;
            if (cell.rowspan) {
                spanHeight = spanHeight * cell.rowspan - 1;
            }
            var sortIconVisible = main_1.isSortable(config, col) && cell.rowspan && cell.text && rowsConfig.name !== "footer";
            var sortIconCss = "dxi dxi-sort-variant dhx_grid-sort-icon";
            if (config.sortBy && "" + col.id === config.sortBy && !cell.content) {
                sortIconCss += " dhx_grid-sort-icon--" + (config.sortDir || "asc");
            }
            var cellAlign = col.align
                ? "dhx_align-" + col.align
                : (col.type === "number" || col.type === "percent" || col.type === "date") &&
                    !cell.colspan
                    ? "dhx_align-right"
                    : "dhx_align-left";
            var css = "dhx_grid-header-cell " + isFirstCol + " " + isLastCol + " " + (cell.rowspan ? "dhx_span-cell__rowspan" : "") + " " + (cell.align ? "dhx_align-" + cell.align : cellAlign) + " " + (cell.css ? cell.css : "");
            if (sortIconVisible) {
                css += " dhx_grid-header-cell--sortable";
            }
            if (!cell.content) {
                if (cell.align) {
                    css += " dhx_grid-header-cell--align_" + cell.align + " ";
                }
                else {
                    css += " dhx_grid-header-cell--" + (col.type === "number" || col.type === "percent" || col.type === "date"
                        ? "align_right"
                        : "align_left") + " ";
                }
            }
            var content = null;
            if (cell.content) {
                content = getCustomContentCell(cell, col, config, rowName, css, colIndex, i);
                content.attrs.style = __assign(__assign({}, content.attrs.style), { width: "100%", borderRight: "0" });
            }
            var borderLeft = "";
            if (leftShift - col.$width > 0) {
                borderLeft = "1px solid #e4e4e4";
            }
            var cellCss = "dhx_grid-header-cell-text_content";
            if (config.autoHeight)
                cellCss += " dhx_grid-header-cell-text_content-auto-height";
            return cell.colspan || cell.rowspan
                ? dom_1.el(".dhx_span-cell", {
                    style: {
                        width: cells_1.getWidth(cols, cell.colspan, cellIdx),
                        height: spanHeight,
                        left: leftShift - col.$width,
                        borderLeft: borderLeft,
                        top: height * i,
                    },
                    class: css.trim(),
                    dhx_id: col.id,
                }, [
                    content ||
                        dom_1.el("span", {
                            class: cellCss,
                            ".innerHTML": cell.text,
                        }),
                    sortIconVisible && dom_1.el("div", { class: sortIconCss }),
                ])
                : null;
        })
            .filter(function (cell) { return cell; }));
    });
}
exports.getFixedSpans = getFixedSpans;
function getFixedRows(config, rowsConfig) {
    var _a;
    var rows = getRows(config, rowsConfig);
    var spans = getFixedSpans(config, rowsConfig);
    var fixedCols = null;
    if (rowsConfig.name === "footer" && !rowsConfig.sticky) {
        fixedCols =
            config.leftSplit >= 0 &&
                getRows(__assign(__assign({}, config), { currentColumns: config.columns.slice(0, config.leftSplit), $positions: __assign(__assign({}, config.$positions), { xStart: 0, xEnd: config.leftSplit }) }), rowsConfig);
    }
    var styles = (_a = {
            position: "sticky"
        },
        _a[rowsConfig.position] = 0,
        _a);
    var left;
    if (!rowsConfig.sticky) {
        styles.left = -config.scroll.left;
        left = -config.scroll.left;
        styles.position = "relative";
    }
    var BORDERS = 2;
    return dom_1.el(".dhx_" + rowsConfig.name + "-wrapper", {
        class: rowsConfig.sticky ? "" : "dhx_compatible-" + rowsConfig.name,
        style: __assign(__assign({}, styles), { left: rowsConfig.sticky ? left : 0, height: config[rowsConfig.name + "Height"], width: rowsConfig.sticky ? config.$totalWidth : rowsConfig.wrapper.width - BORDERS }),
        role: "presentation",
    }, [
        dom_1.el(".dhx_grid-" + rowsConfig.name, {
            style: {
                height: config[rowsConfig.name + "Height"],
                left: left,
                paddingLeft: rowsConfig.shifts.x,
                width: config.$totalWidth,
            },
            role: "presentation",
        }, [
            dom_1.el(".dhx_" + rowsConfig.name + "-rows", {
                role: "rowgroup",
                "aria-rowcount": __spreadArrays(rows).length,
            }, __spreadArrays(rows)),
            dom_1.el(".dhx_" + rowsConfig.name + "-spans", {
                style: {
                    marginLeft: -rowsConfig.shifts.x,
                },
                class: "dhx_" + rowsConfig.name + "-rows",
                role: "presentation",
            }, spans),
            fixedCols &&
                dom_1.el(".dhx_" + rowsConfig.name + "-fixed-cols", {
                    style: {
                        position: "absolute",
                        top: 0,
                        left: config.scroll.left + "px",
                        height: "100%",
                    },
                }, fixedCols),
        ]),
        dom_1.el("div", { style: { width: config.$totalWidth }, role: "presentation" }),
    ]);
}
exports.getFixedRows = getFixedRows;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(110));
__export(__webpack_require__(111));
__export(__webpack_require__(112));
__export(__webpack_require__(113));
__export(__webpack_require__(27));


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var locale = {
    apply: "apply",
    reject: "reject",
};
exports.default = locale;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function blockKeys(e) {
    var active = document.activeElement;
    if (!active.classList.contains("dhx_alert__confirm-reject") &&
        !active.classList.contains("dhx_alert__confirm-aply")) {
        e.preventDefault();
    }
}
function blockScreen(css) {
    var blocker = document.createElement("div");
    blocker.className = "dhx_alert__overlay " + (css || "");
    document.body.appendChild(blocker);
    document.addEventListener("keydown", blockKeys);
    return function () {
        document.body.removeChild(blocker);
        document.removeEventListener("keydown", blockKeys);
    };
}
exports.blockScreen = blockScreen;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var common_1 = __webpack_require__(2);
var defaultTextTemplate = function (item) { return item.toString(); };
var getScaleAriaAttrs = function (axis, text) { return ({
    role: "graphics-object",
    "aria-label": axis + "-axis" + (text ? ", " + text : ""),
}); };
function bottom(points, config, width, height) {
    var title = config.title, textPadding = config.textPadding, scalePadding = config.scalePadding, textTemplate = config.textTemplate, showText = config.showText, scaleRotate = config.scaleRotate;
    var template = textTemplate || defaultTextTemplate;
    var text = [];
    var extraTittlePadding = 0;
    if (showText) {
        extraTittlePadding = textPadding;
        var canRotate_1 = scaleRotate && !isNaN(scaleRotate);
        var y_1 = height + textPadding;
        text = points.map(function (p) {
            var x = p[0];
            var transform = canRotate_1 ? "rotate(" + scaleRotate + " " + x + " " + y_1 + ")" : "";
            var classList = ["scale-text", "top-text"];
            if (canRotate_1) {
                var angle = scaleRotate % 360;
                classList.push(common_1.getClassesForRotateScale("bottom", angle));
            }
            return dom_1.sv("text", { x: x, y: y_1, class: classList.join(" "), transform: transform }, [
                common_1.verticalCenteredText(template(p[1])),
            ]);
        });
    }
    var id = core_1.uid();
    var svTitle = null;
    var mainLine = dom_1.sv("path", {
        class: "main-scale",
        d: "M0 " + height + " H" + (width - 0.5),
        id: id,
    });
    if (title) {
        svTitle = dom_1.sv("text", { dx: width / 2, dy: scalePadding + extraTittlePadding }, [
            dom_1.sv("textPath", { href: "#" + id, class: "scale-title " }, title),
        ]);
    }
    return dom_1.sv("g", __assign({}, getScaleAriaAttrs("x", title || config.text)), [mainLine, svTitle].concat(text));
}
exports.bottom = bottom;
function bottomGrid(points, width, height, config) {
    var dashed = config.dashed, grid = config.grid, targetLine = config.targetLine, targetValue = config.targetValue;
    var len = points.length;
    var gridLines = [];
    var className = "grid-line " + (dashed ? "dash-line" : "") + " " + (!grid ? "hidden-line" : "");
    for (var i = 0; i < len; i++) {
        if (i === 0 && points[i][0] === 0 && !config.hidden) {
            continue;
        }
        if (i === targetLine) {
            var d_1 = "M" + points[i][0] + " 0 V " + height;
            var path_1 = dom_1.sv("path", { d: d_1, class: className + " spec-grid-line" });
            gridLines.push(path_1);
            continue;
        }
        var d = "M" + points[i][0] + " 0 V " + height;
        var path = dom_1.sv("path", { d: d, class: className, _ref: "line" + Math.round(points[i][0]) });
        gridLines.push(path);
        if (i === len - 1 && points[i][0] !== width) {
            var additionD = "M" + width + " 0 V " + height;
            var additionPath = dom_1.sv("path", { d: additionD, class: className });
            gridLines.push(additionPath);
        }
    }
    if (targetValue) {
        var d = "M" + targetValue * width + " 0 V " + height;
        var path = dom_1.sv("path", { d: d, class: className + " spec-grid-line" });
        gridLines.push(path);
    }
    return dom_1.sv("g", gridLines);
}
exports.bottomGrid = bottomGrid;
function top(points, config, width, _height) {
    var title = config.title, textPadding = config.textPadding, scalePadding = config.scalePadding, textTemplate = config.textTemplate, showText = config.showText, scaleRotate = config.scaleRotate;
    var template = textTemplate || defaultTextTemplate;
    var text = [];
    var extraTittlePadding = 0;
    if (showText) {
        extraTittlePadding = textPadding;
        var canRotate_2 = scaleRotate && !isNaN(scaleRotate);
        var y_2 = -textPadding;
        text = points.map(function (p) {
            var classList = ["scale-text"];
            var x = p[0];
            var transform = canRotate_2 ? "rotate(" + scaleRotate + " " + x + " " + y_2 + ")" : "";
            if (canRotate_2) {
                var angle = scaleRotate % 360;
                classList.push(common_1.getClassesForRotateScale("top", angle));
            }
            return dom_1.sv("text", { x: x, y: y_2, class: classList.join(" "), transform: transform }, [
                common_1.verticalCenteredText(template(p[1])),
            ]);
        });
    }
    var id = core_1.uid();
    var mainLine = dom_1.sv("path", { d: "M0 0 H" + width, class: "main-scale", id: id });
    var svTitle = null;
    if (title) {
        svTitle = dom_1.sv("text", { dx: width / 2, dy: -scalePadding - extraTittlePadding }, [
            dom_1.sv("textPath", { href: "#" + id, class: "scale-title" }, title),
        ]);
    }
    return dom_1.sv("g", __assign({}, getScaleAriaAttrs("x", title || config.text)), [mainLine, svTitle].concat(text));
}
exports.top = top;
function topGrid(points, _width, height, config) {
    var dashed = config.dashed, grid = config.grid, targetLine = config.targetLine;
    var len = points.length;
    var gridLines = [];
    var className = "grid-line " + (dashed ? "dash-line" : "") + " " + (!grid ? "hidden-line" : "");
    for (var i = 0; i < len; i++) {
        if (i === 0 && points[i][0] === 0 && !config.hidden) {
            continue;
        }
        if (i === targetLine) {
            var d_2 = "M" + points[i][0] + " 0 V " + height;
            var path_2 = dom_1.sv("path", { d: d_2, class: className + " spec-grid-line" });
            gridLines.push(path_2);
            continue;
        }
        var d = "M" + points[i][0] + " 0 V " + height;
        var path = dom_1.sv("path", { d: d, class: className, _ref: "line" + Math.round(points[i][0]) });
        gridLines.push(path);
        if (i === len - 1 && points[i][0] !== 0) {
            var additionD = "M0 0 V " + height;
            var additionPath = dom_1.sv("path", { d: additionD, class: className });
            gridLines.push(additionPath);
        }
    }
    return dom_1.sv("g", gridLines);
}
exports.topGrid = topGrid;
function left(points, config, _width, height) {
    var title = config.title, textPadding = config.textPadding, scalePadding = config.scalePadding, textTemplate = config.textTemplate, showText = config.showText, scaleRotate = config.scaleRotate;
    var template = textTemplate || defaultTextTemplate;
    var text = [];
    var extraTittlePadding = 0;
    if (showText) {
        var style_1 = common_1.getFontStyle("scale-text");
        var maxTextWidth_1 = 0;
        var canRotate_3 = scaleRotate && !isNaN(scaleRotate);
        text = points.map(function (p) {
            var y = p[0];
            var x = -textPadding;
            var transform = canRotate_3 ? "rotate(" + scaleRotate + " " + x + " " + y + ")" : "";
            var classList = ["scale-text"];
            var scaleText = template(p[1]);
            if (title) {
                var textWidth = common_1.getTextWidth(scaleText, style_1);
                if (maxTextWidth_1 < textWidth) {
                    maxTextWidth_1 = textWidth;
                }
            }
            if (canRotate_3) {
                var angle = scaleRotate % 360;
                classList.push(common_1.getClassesForRotateScale("left", angle));
            }
            else {
                classList.push("end-text");
            }
            return dom_1.sv("text", { x: x, y: y, class: classList.join(" "), transform: transform }, [
                common_1.verticalCenteredText(scaleText),
            ]);
        });
        extraTittlePadding = maxTextWidth_1 + textPadding;
    }
    var id = core_1.uid();
    var mainLine = dom_1.sv("path", {
        class: "main-scale",
        d: "M0 " + height + " V 0.5",
        id: id,
        _ref: points.length ? "line0" : null,
    }); // 0.5 instead of 0, coz stroke-linecap: square and dirrent stroke size
    var svTitle = null;
    if (title) {
        svTitle = dom_1.sv("text", { dx: height / 2, dy: -scalePadding - extraTittlePadding }, [
            dom_1.sv("textPath", { href: "#" + id, class: "scale-title" }, title),
        ]);
    }
    return dom_1.sv("g", __assign({}, getScaleAriaAttrs("y", title || config.text)), [mainLine, svTitle].concat(text));
}
exports.left = left;
function leftGrid(points, width, height, config) {
    var dashed = config.dashed, grid = config.grid, targetLine = config.targetLine, targetValue = config.targetValue;
    var len = points.length;
    var gridLines = [];
    var className = "grid-line " + (dashed ? "dash-line" : "");
    for (var i = 0; i < len; i++) {
        if (i === 0 && points[i][0] === height && !config.hidden) {
            continue;
        }
        if (targetLine === i) {
            var d = "M0 " + points[i][0] + " H " + width;
            var path = dom_1.sv("path", { d: d, class: className + " spec-grid-line" });
            gridLines.push(path);
            continue;
        }
        if (grid) {
            var d = "M0 " + points[i][0] + " H " + width;
            var path = dom_1.sv("path", { d: d, class: className });
            gridLines.push(path);
            if (i === len - 1 && points[i][0] !== width) {
                var additionD = "M0 0 H" + width;
                var additionPath = dom_1.sv("path", { d: additionD, class: className });
                gridLines.push(additionPath);
            }
        }
    }
    if (targetValue) {
        var d = "M0 " + targetValue * height + " H " + width;
        var path = dom_1.sv("path", { d: d, class: className + " spec-grid-line" });
        gridLines.push(path);
    }
    return dom_1.sv("g", gridLines);
}
exports.leftGrid = leftGrid;
function right(points, config, width, height) {
    var title = config.title, textPadding = config.textPadding, scalePadding = config.scalePadding, textTemplate = config.textTemplate, showText = config.showText, scaleRotate = config.scaleRotate;
    var template = textTemplate || defaultTextTemplate;
    var text = [];
    var extraTittlePadding = 0;
    if (showText) {
        var style_2 = common_1.getFontStyle("scale-text");
        var maxTextWidth_2 = 0;
        var canRotate_4 = scaleRotate && !isNaN(scaleRotate);
        text = points.map(function (p) {
            var scaleText = template(p[1]);
            var y = p[0];
            var x = width + textPadding;
            var transform = canRotate_4 ? "rotate(" + scaleRotate + " " + x + " " + y + ")" : "";
            var classList = ["scale-text"];
            if (title) {
                var textWidth = common_1.getTextWidth(scaleText, style_2);
                if (maxTextWidth_2 < textWidth) {
                    maxTextWidth_2 = textWidth;
                }
            }
            if (canRotate_4) {
                var angle = scaleRotate % 360;
                classList.push(common_1.getClassesForRotateScale("right", angle));
            }
            else {
                classList.push("start-text");
            }
            return dom_1.sv("text", { x: x, y: y, class: classList.join(" "), transform: transform }, [
                common_1.verticalCenteredText(scaleText),
            ]);
        });
        extraTittlePadding = textPadding + maxTextWidth_2;
    }
    var id = core_1.uid();
    var mainLine = dom_1.sv("path", {
        d: "M" + width + " " + height + " V 0",
        class: "main-scale",
        id: id,
        _ref: points.length ? "line0" : null,
    });
    var svTitle = null;
    if (title) {
        svTitle = dom_1.sv("text", { dx: height / 2, dy: scalePadding + extraTittlePadding }, [
            dom_1.sv("textPath", { href: "#" + id, class: "scale-title" }, title),
        ]);
    }
    return dom_1.sv("g", __assign({}, getScaleAriaAttrs("y", title || config.text)), [mainLine, svTitle].concat(text));
}
exports.right = right;
function rightGrid(points, width, height, config) {
    var dashed = config.dashed, grid = config.grid, targetLine = config.targetLine;
    var len = points.length;
    var gridLines = [];
    var className = "grid-line " + (dashed ? "dash-line" : "");
    for (var i = 0; i < len; i++) {
        if (i === 0 && points[i][0] === height && !config.hidden) {
            continue;
        }
        if (targetLine === i) {
            var d = "M0 " + points[i][0] + " H " + width;
            var path = dom_1.sv("path", { d: d, class: className + " spec-grid-line" });
            gridLines.push(path);
            continue;
        }
        if (grid) {
            var d = "M0 " + points[i][0] + " H " + width;
            var path = dom_1.sv("path", { d: d, class: className });
            gridLines.push(path);
            if (i === len - 1 && points[i][0] !== width) {
                var additionD = "M0 0 H" + width;
                var additionPath = dom_1.sv("path", { d: additionD, class: className });
                gridLines.push(additionPath);
            }
        }
    }
    return dom_1.sv("g", gridLines);
}
exports.rightGrid = rightGrid;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var common_1 = __webpack_require__(2);
var ScaleSeria_1 = __webpack_require__(29);
var Area = /** @class */ (function (_super) {
    __extends(Area, _super);
    function Area() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Area.prototype.paint = function (width, height, prev) {
        _super.prototype.paint.call(this, width, height);
        var getChartAriaAttrs = function (cfg) { return ({
            "aria-label": "chart " + (cfg.value || ""),
        }); };
        var svg = [];
        this._form(width, height, svg, prev);
        this._markers(svg);
        return dom_1.sv("g", __assign({ class: "seria", _key: this.id }, getChartAriaAttrs(this.config)), svg);
    };
    Area.prototype.paintformAndMarkers = function (width, height, prev) {
        _super.prototype.paint.call(this, width, height);
        var svg = [];
        var markers = [];
        this._form(width, height, svg, prev);
        this._markers(markers);
        return [
            dom_1.sv("g", { class: "seria", _key: this.id }, svg),
            dom_1.sv("g", { class: "seria_markers", _key: this.id + "_markers" }, markers),
        ];
    };
    Area.prototype._markers = function (svg) {
        var _this = this;
        if (this.config.pointType) {
            var color = this.config.pointColor || this.config.color;
            var point_1 = this._getPointType(this.config.pointType, color);
            svg.push.apply(svg, this._points.map(function (p) { return point_1(p[0], p[1], common_1.calcPointRef(p[2], _this.id)); }));
        }
    };
    Area.prototype._form = function (width, height, svg, prev) {
        var css = "chart " + this.config.type + " " + (this.config.css || "") + " " + (this.config.dashed ? "dash-line" : "");
        var _a = this.config, id = _a.id, fill = _a.fill, alpha = _a.alpha, color = _a.color, strokeWidth = _a.strokeWidth;
        var points = this._points;
        var last = points[points.length - 1];
        var d = "";
        if (prev) {
            // bottom line in stacked area
            for (var i = prev.length - 1; i >= 0; i--) {
                var item = prev[i];
                d += i === points.length - 1 ? "M" + item[0] + " " + item[1] + " " : "L" + item[0] + " " + item[1] + " ";
            }
            // top line in stacked area
            d +=
                points.map(function (item, index) { return (!index ? "V " + item[1] : "L " + item[0] + " " + item[1]); }).join(" ") +
                    "Z";
        }
        else {
            d +=
                points
                    .map(function (item, index) {
                    return index ? "L" + item[0] + " " + item[1] : "M0 " + height + " L0 " + item[1] + " L" + item[0] + " " + item[1];
                })
                    .join(" ") + ("L" + width + " " + last[1] + " V " + height);
        }
        if (strokeWidth) {
            var len_1 = points.length - 1;
            var strokePadding_1 = function (index) { return (index === len_1 ? -0.5 : index ? 0 : 0.5); };
            var line = points
                .map(function (item, index) {
                return index
                    ? "L" + (item[0] + strokePadding_1(index)) + " " + item[1]
                    : "M0 " + item[1] + " L0 " + (item[1] + strokePadding_1(index)) + " L" + (item[0] +
                        strokePadding_1(index)) + " " + item[1];
            })
                .join(" ") + ("L" + width + " " + last[1]);
            var linePath = dom_1.sv("path", {
                d: line,
                "stroke-width": strokeWidth,
                stroke: color,
                fill: "none",
                class: css,
            });
            svg.push(linePath);
        }
        var path = dom_1.sv("path", {
            id: "seria" + id,
            d: d,
            class: css,
            fill: fill,
            _ref: id,
            "fill-opacity": alpha,
            stroke: "none",
        });
        svg.push(path);
        return svg;
    };
    Area.prototype._setDefaults = function (config) {
        var defaults = {
            alpha: 0.3,
            strokeWidth: 2,
            fill: config.color || "#5E83BA",
            color: "#5E83BA",
            active: true,
            tooltip: true,
            pointType: "empty",
        };
        this.config = __assign(__assign({}, defaults), config);
        var point = this.config.pointType;
        var color = this.config.pointColor || this.config.color;
        if (point) {
            this._drawPointType = this._getPointType(point, color);
        }
    };
    return Area;
}(ScaleSeria_1.default));
exports.default = Area;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var common_1 = __webpack_require__(2);
var forms = {
    circle: function (color, fill, _alpha, x, y, id) {
        var config = {
            _ref: id,
            cx: x,
            cy: y,
            r: 4,
            class: "figure point-circle",
            fill: fill,
            stroke: color,
            "stroke-width": 2,
        };
        return dom_1.sv("circle", config);
    },
    rect: function (color, fill, _alpha, x, y, id) {
        var config = {
            _ref: id,
            x: x - 4,
            y: y - 4,
            width: 8,
            height: 8,
            class: "figure point-rect",
            fill: fill,
            stroke: color,
            "stroke-width": 2,
        };
        return dom_1.sv("rect", config);
    },
    rhombus: function (color, fill, _alpha, x, y, id) {
        var config = {
            _ref: id,
            points: x - 5 + "," + y + " " + x + "," + (y + 5) + " " + (x + 5) + "," + y + " " + x + "," + (y - 5),
            class: "figure point-rhombus",
            fill: fill,
            stroke: color,
            "stroke-width": 2,
        };
        return dom_1.sv("polygon", config);
    },
    triangle: function (color, fill, _alpha, x, y, id) {
        var config = {
            _ref: id,
            points: x + "," + (y - 5) + " " + (x + 5) + "," + (y + 5) + " " + (x - 5) + "," + (y + 5),
            class: "figure point-triangle",
            fill: fill,
            stroke: color,
            "stroke-width": 2,
        };
        return dom_1.sv("polygon", config);
    },
    simpleCircle: function (color, _fill, _alpha, x, y, id) {
        var config = {
            _ref: id,
            cx: x,
            cy: y,
            r: 3,
            class: "figure point-simple-circle",
            fill: color,
        };
        return dom_1.sv("circle", config);
    },
    simpleRect: function (color, _fill, _alpha, x, y, id) {
        var config = {
            _ref: id,
            x: x - 3,
            y: y - 3,
            width: 6,
            height: 6,
            class: "figure point-simple-rect",
            fill: color,
        };
        return dom_1.sv("rect", config);
    },
    empty: function () {
        return null;
    },
};
var formsHTML = {
    circle: function (color, fill, _alpha, x, y, id) {
        return "<circle class=\"figure point-circle\" _ref=\"" + id + "\" cx=\"" + x + "\" cy=\"" + y + "\" r=\"4\" fill=\"" + fill + "\" stroke=\"" + color + "\" stroke-width=\"2\"/>";
    },
    rect: function (color, fill, _alpha, x, y, id) {
        return "<rect _ref=\"" + id + "\" x=\"" + (x - 4) + "\" y=\"" + (y -
            4) + "\" width=\"8\" height=\"8\" class=\"figure point-rect\" fill=\"" + fill + "\" stroke=\"" + color + "\" stroke-width=\"2\"/>";
    },
    rhombus: function (color, fill, _alpha, x, y, id) {
        return "<polygon _ref=\"" + id + "\" points=\"" + (x - 5) + "," + y + " " + x + "," + (y + 5) + " " + (x + 5) + "," + y + " " + x + "," + (y -
            5) + "\" class=\"figure point-rhombus\" fill=\"" + fill + "\" stroke=\"" + color + "\" stroke-width=\"2\"/>";
    },
    triangle: function (color, fill, _alpha, x, y, id) {
        return "<polygon _ref=\"" + id + "\" points=\"" + x + "," + (y - 5) + " " + (x + 5) + "," + (y + 5) + " " + (x - 5) + "," + (y +
            5) + "\" class=\"figure point-triangle\" fill=\"" + fill + "\" stroke=\"" + color + "\" stroke-width=\"2\"/>";
    },
    simpleCircle: function (color, _fill, _alpha, x, y, id) {
        return "<circle _ref=\"" + id + "\" cx=\"" + x + "\" cy=\"" + y + "\" r=\"3\" class=\"figure point-simple-circle\" fill=\"" + color + "\"/>";
    },
    simpleRect: function (color, _fill, _alpha, x, y, id) {
        return "<rect _ref=\"id\" x=\"" + (x - 3) + "\" y=\"" + (y -
            3) + "\" width=\"6\" height=\"6\" class=\"figure point-simple-rect\" fill=\"" + color + "\"/>";
    },
    empty: function () {
        return null;
    },
};
function getHelper(type) {
    var helper = forms[type.toString()];
    if (!helper) {
        throw new Error("unknown point type");
    }
    return helper;
}
exports.getHelper = getHelper;
function getHTMLHelper(type) {
    var helper = formsHTML[type.toString()];
    if (!helper) {
        throw new Error("unknown point type");
    }
    return helper;
}
exports.getHTMLHelper = getHTMLHelper;
function getShadeHelper(type, color) {
    var helper = getHelper(type);
    color = color || "none";
    var shade = common_1.getColorShade(color, 0.2);
    return function (x, y, id) {
        return helper(color, shade, "", x, y, id);
    };
}
exports.getShadeHelper = getShadeHelper;
function getShadeHTMLHelper(type, color) {
    var helper = getHTMLHelper(type);
    color = color || "none";
    var shade = common_1.getColorShade(color, 0.2);
    return function (x, y, id) {
        return helper(color, shade, "", x, y, id);
    };
}
exports.getShadeHTMLHelper = getShadeHTMLHelper;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var common_1 = __webpack_require__(2);
var ScaleSeria_1 = __webpack_require__(29);
var Bar = /** @class */ (function (_super) {
    __extends(Bar, _super);
    function Bar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._shift = 0;
        return _this;
    }
    Bar.prototype.addScale = function (type, scale) {
        _super.prototype.addScale.call(this, type, scale);
        scale.addPadding();
    };
    Bar.prototype.seriesShift = function (shift) {
        this._shift = shift;
        return this.config.barWidth;
    };
    Bar.prototype.paint = function (width, height, prev) {
        _super.prototype.paint.call(this, width, height);
        var getChartAriaAttrs = function (cfg) { return ({
            "aria-label": "chart " + (cfg.value || ""),
        }); };
        if (!this.config.active) {
            return null;
        }
        var svg = [];
        if (this._gradient) {
            svg.push(dom_1.sv("defs", [this._gradient()]));
        }
        var css = "chart " + this.config.type + " " + (this.config.css || "") + " " + (this.config.dashed ? "dash-line" : "");
        var form = this._getForm(this._points, css, width, height, prev);
        svg = svg.concat(form);
        return dom_1.sv("g", __assign({ class: "seria", _key: this.id }, getChartAriaAttrs(this.config)), svg);
    };
    Bar.prototype.getTooltipType = function (_id, _x, y) {
        if (this.config.baseLine !== undefined && this._baseLinePosition < y) {
            return "bot";
        }
        return "top";
    };
    Bar.prototype._getClosestDist = function (x, y, px, py) {
        if (this.config.stacked && y < py) {
            return Infinity;
        }
        return Math.abs(x - px);
    };
    Bar.prototype._path = function (item, prev) {
        item[0] += this._shift;
        return "\nM " + (item[0] - this.config.barWidth / 2) + " " + prev + "\nV " + item[1] + "\nh " + this.config.barWidth + "\nV " + prev;
    };
    Bar.prototype._base = function (height) {
        var baseLine = this.config.baseLine;
        return (this._baseLinePosition =
            baseLine !== undefined ? this.yScale.point(baseLine) * height : height - 1);
    };
    Bar.prototype._text = function (item, prev, rotate) {
        var x = item[0];
        var y = (prev + item[1]) / 2;
        var canRotate = rotate && !isNaN(rotate);
        return {
            x: x,
            y: y,
            class: "bar-text",
            transform: canRotate ? "rotate(" + rotate + " " + x + " " + y + ")" : "",
        };
    };
    Bar.prototype._getForm = function (points, css, _width, height, prev) {
        var _this = this;
        var getPointAriaLabel = function (barType, item, baseLine) {
            if (baseLine === void 0) { baseLine = 0; }
            var x = item[3];
            var yStart = baseLine;
            var yEnd = item[4];
            if (baseLine > yEnd) {
                yStart = yEnd;
                yEnd = baseLine;
            }
            return barType === "xbar"
                ? "bar y=" + x + ", x from " + yStart + " to " + yEnd
                : "bar x=" + x + ", y from " + yStart + " to " + yEnd;
        };
        var getPointAriaAttrs = function (barType, item, baseLine) { return ({
            role: "graphics-symbol",
            "aria-roledescription": "bar",
            "aria-label": getPointAriaLabel(barType, item, baseLine),
        }); };
        var _a = this.config, baseLine = _a.baseLine, fill = _a.fill, alpha = _a.alpha, showText = _a.showText, showTextTemplate = _a.showTextTemplate, showTextRotate = _a.showTextRotate;
        var svg = [];
        var base = this._base(height);
        var getPrev = function (index) { return (!prev ? base : prev[index][1]); };
        var series = points.map(function (item, index) {
            return dom_1.sv("path", __assign({ _key: "seria" + _this.config.id + index, _ref: common_1.calcPointRef(item[2], _this.config.id), d: _this._path(item, getPrev(index)), class: css, fill: fill, onclick: [_this._handlers.onclick, item[2], _this.config.value], onmousemove: [_this._handlers.onmousemove, item[2], _this.config.id], onmouseleave: [_this._handlers.onmouseleave, item[2], _this.config.id], "fill-opacity": alpha }, getPointAriaAttrs(_this.config.type, item, baseLine)));
        });
        svg.push.apply(svg, series);
        if ((showText || showTextTemplate || showTextRotate) && showText !== false) {
            var isWrite_1 = function (item, index) { return Math.abs(getPrev(index) - item[1]) > 16; }; // hide text, where height < 16
            var text = points.map(function (item, index) {
                var value = _this._getText(item);
                return isWrite_1(item, index)
                    ? dom_1.sv("text", __assign(__assign({}, _this._text(item, getPrev(index), showTextRotate)), { "aria-hidden": "true" }), [
                        showTextTemplate
                            ? common_1.verticalCenteredText(showTextTemplate(value))
                            : common_1.verticalCenteredText(value),
                    ])
                    : null;
            });
            svg.push.apply(svg, text);
        }
        return svg;
    };
    Bar.prototype._getText = function (item) {
        return item[4].toString();
    };
    Bar.prototype._setDefaults = function (config) {
        var defaults = {
            barWidth: 30,
            alpha: 1,
            active: true,
            tooltip: true,
            pointType: "empty",
        };
        this.config = __assign(__assign({}, defaults), config);
        var point = this.config.pointType;
        var color = this.config.pointColor || this.config.color;
        if (point) {
            this.config.pointType = point;
            this._drawPointType = this._getPointType(point, color);
        }
        if (this.config.gradient) {
            var id_1 = "gradient" + core_1.uid();
            var gradient_1 = this.config.gradient(this.config.fill);
            this._gradient = function () { return common_1.linearGradient(gradient_1, id_1); };
            this.config.fill = "url(#" + id_1 + ")";
        }
    };
    return Bar;
}(ScaleSeria_1.default));
exports.default = Bar;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function spline(initPoints, link) {
    var len = initPoints.length;
    var points;
    if (len < 3) {
        points = initPoints;
    }
    else {
        var p0 = initPoints[0];
        var p1 = initPoints[0];
        var p2 = initPoints[1];
        var p3 = initPoints[2];
        points = [initPoints[0].slice(0, 2)];
        for (var i = 1; i < len; i++) {
            points.push([
                (-p0[0] + 6 * p1[0] + p2[0]) / 6,
                (-p0[1] + 6 * p1[1] + p2[1]) / 6,
                (p1[0] + 6 * p2[0] - p3[0]) / 6,
                (p1[1] + 6 * p2[1] - p3[1]) / 6,
                p2[0],
                p2[1],
            ]);
            p0 = p1;
            p1 = p2;
            p2 = p3;
            p3 = initPoints[i + 2] || p3;
        }
    }
    var d = "";
    for (var i = 0; i < points.length; i++) {
        var point = points[i];
        var n = point.length;
        if (!i) {
            d += link ? "L" : "M";
            d += n === 5 ? point[0] + " " + point[1] : point[n - 2] + " " + point[n - 1];
        }
        else if (n > 5) {
            d += "C" + point[0] + " " + point[1] + "\n\t\t\t\t" + point[2] + " " + point[3] + "\n\t\t\t\t" + point[4] + " " + point[5];
        }
        else if (n === 5) {
            d += "L" + point[0] + " " + point[1];
        }
        else {
            d += "S" + point[0] + " " + point[1] + "\n\t\t\t\t" + point[2] + " " + point[3];
        }
    }
    return d;
}
exports.default = spline;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58);
__webpack_require__(59);
__webpack_require__(60);
__webpack_require__(61);
__webpack_require__(62);
module.exports = __webpack_require__(63);


/***/ }),
/* 58 */
/***/ (function(module, exports) {

Object.values = Object.values
    ? Object.values
    : function (obj) {
        var allowedTypes = [
            "[object String]",
            "[object Object]",
            "[object Array]",
            "[object Function]",
        ];
        var objType = Object.prototype.toString.call(obj);
        if (obj === null || typeof obj === "undefined") {
            throw new TypeError("Cannot convert undefined or null to object");
        }
        else if (!~allowedTypes.indexOf(objType)) {
            return [];
        }
        else {
            // if ES6 is supported
            if (Object.keys) {
                return Object.keys(obj).map(function (key) {
                    return obj[key];
                });
            }
            var result = [];
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    result.push(obj[prop]);
                }
            }
            return result;
        }
    };
if (!Object.assign) {
    Object.defineProperty(Object, "assign", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (target) {
            "use strict";
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (target === undefined || target === null) {
                throw new TypeError("Cannot convert first argument to object");
            }
            var to = Object(target);
            for (var i = 0; i < args.length; i++) {
                var nextSource = args[i];
                if (nextSource === undefined || nextSource === null) {
                    continue;
                }
                var keysArray = Object.keys(Object(nextSource));
                for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                    var nextKey = keysArray[nextIndex];
                    var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                    if (desc !== undefined && desc.enumerable) {
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        },
    });
}


/***/ }),
/* 59 */
/***/ (function(module, exports) {

/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/unbound-method */
// eslint-disable-next-line @typescript-eslint/unbound-method
if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, "includes", {
        value: function (searchElement, fromIndex) {
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            // 1. Let O be ? ToObject(this value).
            var o = Object(this);
            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;
            // 3. If len is 0, return false.
            if (len === 0) {
                return false;
            }
            // 4. Let n be ? ToInteger(fromIndex).
            //    (If fromIndex is undefined, this step produces the value 0.)
            var n = fromIndex | 0;
            // 5. If n ≥ 0, then
            //  a. Let k be n.
            // 6. Else n < 0,
            //  a. Let k be len + n.
            //  b. If k < 0, let k be 0.
            var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
            function sameValueZero(x, y) {
                return x === y || (typeof x === "number" && typeof y === "number" && isNaN(x) && isNaN(y));
            }
            // 7. Repeat, while k < len
            while (k < len) {
                // a. Let elementK be the result of ? Get(O, ! ToString(k)).
                // b. If SameValueZero(searchElement, elementK) is true, return true.
                if (sameValueZero(o[k], searchElement)) {
                    return true;
                }
                // c. Increase k by 1.
                k++;
            }
            // 8. Return false
            return false;
        },
        configurable: true,
        writable: true,
    });
}
// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, "find", {
        value: function (predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            var o = Object(this);
            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;
            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== "function") {
                throw new TypeError("predicate must be a function");
            }
            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1];
            // 5. Let k be 0.
            var k = 0;
            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                // d. If testResult is true, return kValue.
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return kValue;
                }
                // e. Increase k by 1.
                k++;
            }
            // 7. Return undefined.
            return undefined;
        },
        configurable: true,
        writable: true,
    });
}
if (!Array.prototype.findIndex) {
    Array.prototype.findIndex = function (predicate) {
        if (this == null) {
            throw new TypeError("Array.prototype.findIndex called on null or undefined");
        }
        if (typeof predicate !== "function") {
            throw new TypeError("predicate must be a function");
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;
        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return i;
            }
        }
        return -1;
    };
}


/***/ }),
/* 60 */
/***/ (function(module, exports) {

if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        "use strict";
        if (typeof start !== "number") {
            start = 0;
        }
        if (start + search.length > this.length) {
            return false;
        }
        else {
            return this.indexOf(search, start) !== -1;
        }
    };
}
if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, "startsWith", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (searchString, position) {
            position = position || 0;
            return this.indexOf(searchString, position) === position;
        },
    });
}
if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength, padString) {
        targetLength = targetLength >> 0;
        padString = String(padString || " ");
        if (this.length > targetLength) {
            return String(this);
        }
        else {
            targetLength = targetLength - this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength / padString.length);
            }
            return padString.slice(0, targetLength) + String(this);
        }
    };
}
if (!String.prototype.padEnd) {
    String.prototype.padEnd = function padEnd(targetLength, padString) {
        targetLength = targetLength >> 0;
        padString = String(padString || " ");
        if (this.length > targetLength) {
            return String(this);
        }
        else {
            targetLength = targetLength - this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength / padString.length);
            }
            return String(this) + padString.slice(0, targetLength);
        }
    };
}


/***/ }),
/* 61 */
/***/ (function(module, exports) {

/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/unbound-method */
if (Element && !Element.prototype.matches) {
    var proto = Element.prototype;
    proto.matches =
        proto.matchesSelector ||
            proto.mozMatchesSelector ||
            proto.msMatchesSelector ||
            proto.oMatchesSelector ||
            proto.webkitMatchesSelector;
}
// Source: https://github.com/naminho/svg-classlist-polyfill/blob/master/polyfill.js
if (!("classList" in SVGElement.prototype)) {
    Object.defineProperty(SVGElement.prototype, "classList", {
        get: function get() {
            var _this = this;
            return {
                contains: function contains(className) {
                    return _this.className.baseVal.split(" ").indexOf(className) !== -1;
                },
                add: function add(className) {
                    return _this.setAttribute("class", _this.getAttribute("class") + " " + className);
                },
                remove: function remove(className) {
                    var removedClass = _this
                        .getAttribute("class")
                        .replace(new RegExp("(\\s|^)".concat(className, "(\\s|$)"), "g"), "$2");
                    if (_this.classList.contains(className)) {
                        _this.setAttribute("class", removedClass);
                    }
                },
                toggle: function toggle(className) {
                    if (this.contains(className)) {
                        this.remove(className);
                    }
                    else {
                        this.add(className);
                    }
                },
            };
        },
        configurable: true,
    });
}
// Source: https://github.com/tc39/proposal-object-values-entries/blob/master/polyfill.js
if (!Object.entries) {
    var reduce_1 = Function.bind.call(Function.call, Array.prototype.reduce);
    var isEnumerable_1 = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable);
    var concat_1 = Function.bind.call(Function.call, Array.prototype.concat);
    Object.entries = function entries(O) {
        return reduce_1(Object.keys(O), function (e, k) { return concat_1(e, typeof k === "string" && isEnumerable_1(O, k) ? [[k, O[k]]] : []); }, []);
    };
}
// Source: https://gist.github.com/rockinghelvetica/00b9f7b5c97a16d3de75ba99192ff05c
if (!Event.prototype.composedPath) {
    Event.prototype.composedPath = function () {
        if (this.path) {
            return this.path;
        }
        var target = this.target;
        this.path = [];
        while (target.parentNode !== null) {
            this.path.push(target);
            target = target.parentNode;
        }
        this.path.push(document, window);
        return this.path;
    };
}


/***/ }),
/* 62 */
/***/ (function(module, exports) {

Math.sign =
    Math.sign ||
        function (x) {
            x = +x;
            if (x === 0 || isNaN(x)) {
                return x;
            }
            return x > 0 ? 1 : -1;
        };


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(64);
// HELPERS
var dom_1 = __webpack_require__(0);
exports.vmdom = { sv: dom_1.sv };
var dom_2 = __webpack_require__(0);
exports.resizeHandler = dom_2.resizeHandler;
// WIDGETS
var Chart_1 = __webpack_require__(69);
exports.Chart = Chart_1.Chart;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(66);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(20)))

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(20), __webpack_require__(67)))

/***/ }),
/* 67 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

/**
* Copyright (c) 2017, Leon Sorokin
* All rights reserved. (MIT Licensed)
*
* domvm.js (DOM ViewModel)
* A thin, fast, dependency-free vdom view layer
* @preserve https://github.com/leeoniya/domvm (v3.2.6, micro build)
*/

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

// NOTE: if adding a new *VNode* type, make it < COMMENT and renumber rest.
// There are some places that test <= COMMENT to assert if node is a VNode

// VNode types
var ELEMENT	= 1;
var TEXT		= 2;
var COMMENT	= 3;

// placeholder types
var VVIEW		= 4;
var VMODEL		= 5;

var ENV_DOM = typeof window !== "undefined";
var win = ENV_DOM ? window : {};
var rAF = win.requestAnimationFrame;

var emptyObj = {};

function noop() {}

var isArr = Array.isArray;

function isSet(val) {
	return val != null;
}

function isPlainObj(val) {
	return val != null && val.constructor === Object;		//  && typeof val === "object"
}

function insertArr(targ, arr, pos, rem) {
	targ.splice.apply(targ, [pos, rem].concat(arr));
}

function isVal(val) {
	var t = typeof val;
	return t === "string" || t === "number";
}

function isFunc(val) {
	return typeof val === "function";
}

function isProm(val) {
	return typeof val === "object" && isFunc(val.then);
}



function assignObj(targ) {
	var args = arguments;

	for (var i = 1; i < args.length; i++)
		{ for (var k in args[i])
			{ targ[k] = args[i][k]; } }

	return targ;
}

// export const defProp = Object.defineProperty;

function deepSet(targ, path, val) {
	var seg;

	while (seg = path.shift()) {
		if (path.length === 0)
			{ targ[seg] = val; }
		else
			{ targ[seg] = targ = targ[seg] || {}; }
	}
}

/*
export function deepUnset(targ, path) {
	var seg;

	while (seg = path.shift()) {
		if (path.length === 0)
			targ[seg] = val;
		else
			targ[seg] = targ = targ[seg] || {};
	}
}
*/

function sliceArgs(args, offs) {
	var arr = [];
	for (var i = offs; i < args.length; i++)
		{ arr.push(args[i]); }
	return arr;
}

function cmpObj(a, b) {
	for (var i in a)
		{ if (a[i] !== b[i])
			{ return false; } }

	return true;
}

function cmpArr(a, b) {
	var alen = a.length;

	if (b.length !== alen)
		{ return false; }

	for (var i = 0; i < alen; i++)
		{ if (a[i] !== b[i])
			{ return false; } }

	return true;
}

// https://github.com/darsain/raft
// rAF throttler, aggregates multiple repeated redraw calls within single animframe
function raft(fn) {
	if (!rAF)
		{ return fn; }

	var id, ctx, args;

	function call() {
		id = 0;
		fn.apply(ctx, args);
	}

	return function() {
		ctx = this;
		args = arguments;
		if (!id) { id = rAF(call); }
	};
}

function curry(fn, args, ctx) {
	return function() {
		return fn.apply(ctx, args);
	};
}

/*
export function prop(val, cb, ctx, args) {
	return function(newVal, execCb) {
		if (newVal !== undefined && newVal !== val) {
			val = newVal;
			execCb !== false && isFunc(cb) && cb.apply(ctx, args);
		}

		return val;
	};
}
*/

/*
// adapted from https://github.com/Olical/binary-search
export function binaryKeySearch(list, item) {
    var min = 0;
    var max = list.length - 1;
    var guess;

	var bitwise = (max <= 2147483647) ? true : false;
	if (bitwise) {
		while (min <= max) {
			guess = (min + max) >> 1;
			if (list[guess].key === item) { return guess; }
			else {
				if (list[guess].key < item) { min = guess + 1; }
				else { max = guess - 1; }
			}
		}
	} else {
		while (min <= max) {
			guess = Math.floor((min + max) / 2);
			if (list[guess].key === item) { return guess; }
			else {
				if (list[guess].key < item) { min = guess + 1; }
				else { max = guess - 1; }
			}
		}
	}

    return -1;
}
*/

// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
// impl borrowed from https://github.com/ivijs/ivi
function longestIncreasingSubsequence(a) {
	var p = a.slice();
	var result = [];
	result.push(0);
	var u;
	var v;

	for (var i = 0, il = a.length; i < il; ++i) {
		var j = result[result.length - 1];
		if (a[j] < a[i]) {
			p[i] = j;
			result.push(i);
			continue;
		}

		u = 0;
		v = result.length - 1;

		while (u < v) {
			var c = ((u + v) / 2) | 0;
			if (a[result[c]] < a[i]) {
				u = c + 1;
			} else {
				v = c;
			}
		}

		if (a[i] < a[result[u]]) {
			if (u > 0) {
				p[i] = result[u - 1];
			}
			result[u] = i;
		}
	}

	u = result.length;
	v = result[u - 1];

	while (u-- > 0) {
		result[u] = v;
		v = p[v];
	}

	return result;
}

// based on https://github.com/Olical/binary-search
function binaryFindLarger(item, list) {
	var min = 0;
	var max = list.length - 1;
	var guess;

	var bitwise = (max <= 2147483647) ? true : false;
	if (bitwise) {
		while (min <= max) {
			guess = (min + max) >> 1;
			if (list[guess] === item) { return guess; }
			else {
				if (list[guess] < item) { min = guess + 1; }
				else { max = guess - 1; }
			}
		}
	} else {
		while (min <= max) {
			guess = Math.floor((min + max) / 2);
			if (list[guess] === item) { return guess; }
			else {
				if (list[guess] < item) { min = guess + 1; }
				else { max = guess - 1; }
			}
		}
	}

	return (min == list.length) ? null : min;

//	return -1;
}

function isEvProp(name) {
	return name[0] === "o" && name[1] === "n";
}

function isSplProp(name) {
	return name[0] === "_";
}

function isStyleProp(name) {
	return name === "style";
}

function repaint(node) {
	node && node.el && node.el.offsetHeight;
}

function isHydrated(vm) {
	return vm.node != null && vm.node.el != null;
}

// tests interactive props where real val should be compared
function isDynProp(tag, attr) {
//	switch (tag) {
//		case "input":
//		case "textarea":
//		case "select":
//		case "option":
			switch (attr) {
				case "value":
				case "checked":
				case "selected":
//				case "selectedIndex":
					return true;
			}
//	}

	return false;
}

function getVm(n) {
	n = n || emptyObj;
	while (n.vm == null && n.parent)
		{ n = n.parent; }
	return n.vm;
}

function VNode() {}

var VNodeProto = VNode.prototype = {
	constructor: VNode,

	type:	null,

	vm:		null,

	// all this stuff can just live in attrs (as defined) just have getters here for it
	key:	null,
	ref:	null,
	data:	null,
	hooks:	null,
	ns:		null,

	el:		null,

	tag:	null,
	attrs:	null,
	body:	null,

	flags:	0,

	_class:	null,
	_diff:	null,

	// pending removal on promise resolution
	_dead:	false,
	// part of longest increasing subsequence?
	_lis:	false,

	idx:	null,
	parent:	null,

	/*
	// break out into optional fluent module
	key:	function(val) { this.key	= val; return this; },
	ref:	function(val) { this.ref	= val; return this; },		// deep refs
	data:	function(val) { this.data	= val; return this; },
	hooks:	function(val) { this.hooks	= val; return this; },		// h("div").hooks()
	html:	function(val) { this.html	= true; return this.body(val); },

	body:	function(val) { this.body	= val; return this; },
	*/
};

function defineText(body) {
	var node = new VNode;
	node.type = TEXT;
	node.body = body;
	return node;
}

// creates a one-shot self-ending stream that redraws target vm
// TODO: if it's already registered by any parent vm, then ignore to avoid simultaneous parent & child refresh

var tagCache = {};

var RE_ATTRS = /\[(\w+)(?:=(\w+))?\]/g;

function cssTag(raw) {
	{
		var cached = tagCache[raw];

		if (cached == null) {
			var tag, id, cls, attr;

			tagCache[raw] = cached = {
				tag:	(tag	= raw.match( /^[-\w]+/))		?	tag[0]						: "div",
				id:		(id		= raw.match( /#([-\w]+)/))		? 	id[1]						: null,
				class:	(cls	= raw.match(/\.([-\w.]+)/))		?	cls[1].replace(/\./g, " ")	: null,
				attrs:	null,
			};

			while (attr = RE_ATTRS.exec(raw)) {
				if (cached.attrs == null)
					{ cached.attrs = {}; }
				cached.attrs[attr[1]] = attr[2] || "";
			}
		}

		return cached;
	}
}

// (de)optimization flags

// forces slow bottom-up removeChild to fire deep willRemove/willUnmount hooks,
var DEEP_REMOVE = 1;
// prevents inserting/removing/reordering of children
var FIXED_BODY = 2;
// enables fast keyed lookup of children via binary search, expects homogeneous keyed body
var KEYED_LIST = 4;
// indicates an vnode match/diff/recycler function for body
var LAZY_LIST = 8;

function initElementNode(tag, attrs, body, flags) {
	var node = new VNode;

	node.type = ELEMENT;

	if (isSet(flags))
		{ node.flags = flags; }

	node.attrs = attrs;

	var parsed = cssTag(tag);

	node.tag = parsed.tag;

	// meh, weak assertion, will fail for id=0, etc.
	if (parsed.id || parsed.class || parsed.attrs) {
		var p = node.attrs || {};

		if (parsed.id && !isSet(p.id))
			{ p.id = parsed.id; }

		if (parsed.class) {
			node._class = parsed.class;		// static class
			p.class = parsed.class + (isSet(p.class) ? (" " + p.class) : "");
		}
		if (parsed.attrs) {
			for (var key in parsed.attrs)
				{ if (!isSet(p[key]))
					{ p[key] = parsed.attrs[key]; } }
		}

//		if (node.attrs !== p)
			node.attrs = p;
	}

	var mergedAttrs = node.attrs;

	if (isSet(mergedAttrs)) {
		if (isSet(mergedAttrs._key))
			{ node.key = mergedAttrs._key; }

		if (isSet(mergedAttrs._ref))
			{ node.ref = mergedAttrs._ref; }

		if (isSet(mergedAttrs._hooks))
			{ node.hooks = mergedAttrs._hooks; }

		if (isSet(mergedAttrs._data))
			{ node.data = mergedAttrs._data; }

		if (isSet(mergedAttrs._flags))
			{ node.flags = mergedAttrs._flags; }

		if (!isSet(node.key)) {
			if (isSet(node.ref))
				{ node.key = node.ref; }
			else if (isSet(mergedAttrs.id))
				{ node.key = mergedAttrs.id; }
			else if (isSet(mergedAttrs.name))
				{ node.key = mergedAttrs.name + (mergedAttrs.type === "radio" || mergedAttrs.type === "checkbox" ? mergedAttrs.value : ""); }
		}
	}

	if (body != null)
		{ node.body = body; }

	return node;
}

function setRef(vm, name, node) {
	var path = ["refs"].concat(name.split("."));
	deepSet(vm, path, node);
}

function setDeepRemove(node) {
	while (node = node.parent)
		{ node.flags |= DEEP_REMOVE; }
}

// vnew, vold
function preProc(vnew, parent, idx, ownVm) {
	if (vnew.type === VMODEL || vnew.type === VVIEW)
		{ return; }

	vnew.parent = parent;
	vnew.idx = idx;
	vnew.vm = ownVm;

	if (vnew.ref != null)
		{ setRef(getVm(vnew), vnew.ref, vnew); }

	var nh = vnew.hooks,
		vh = ownVm && ownVm.hooks;

	if (nh && (nh.willRemove || nh.didRemove) ||
		vh && (vh.willUnmount || vh.didUnmount))
		{ setDeepRemove(vnew); }

	if (isArr(vnew.body))
		{ preProcBody(vnew); }
	else {}
}

function preProcBody(vnew) {
	var body = vnew.body;

	for (var i = 0; i < body.length; i++) {
		var node2 = body[i];

		// remove false/null/undefined
		if (node2 === false || node2 == null)
			{ body.splice(i--, 1); }
		// flatten arrays
		else if (isArr(node2)) {
			insertArr(body, node2, i--, 1);
		}
		else {
			if (node2.type == null)
				{ body[i] = node2 = defineText(""+node2); }

			if (node2.type === TEXT) {
				// remove empty text nodes
				if (node2.body == null || node2.body === "")
					{ body.splice(i--, 1); }
				// merge with previous text node
				else if (i > 0 && body[i-1].type === TEXT) {
					body[i-1].body += node2.body;
					body.splice(i--, 1);
				}
				else
					{ preProc(node2, vnew, i, null); }
			}
			else
				{ preProc(node2, vnew, i, null); }
		}
	}
}

var unitlessProps = {
	animationIterationCount: true,
	boxFlex: true,
	boxFlexGroup: true,
	boxOrdinalGroup: true,
	columnCount: true,
	flex: true,
	flexGrow: true,
	flexPositive: true,
	flexShrink: true,
	flexNegative: true,
	flexOrder: true,
	gridRow: true,
	gridColumn: true,
	order: true,
	lineClamp: true,

	borderImageOutset: true,
	borderImageSlice: true,
	borderImageWidth: true,
	fontWeight: true,
	lineHeight: true,
	opacity: true,
	orphans: true,
	tabSize: true,
	widows: true,
	zIndex: true,
	zoom: true,

	fillOpacity: true,
	floodOpacity: true,
	stopOpacity: true,
	strokeDasharray: true,
	strokeDashoffset: true,
	strokeMiterlimit: true,
	strokeOpacity: true,
	strokeWidth: true
};

function autoPx(name, val) {
	{
		// typeof val === 'number' is faster but fails for numeric strings
		return !isNaN(val) && !unitlessProps[name] ? (val + "px") : val;
	}
}

// assumes if styles exist both are objects or both are strings
function patchStyle(n, o) {
	var ns =     (n.attrs || emptyObj).style;
	var os = o ? (o.attrs || emptyObj).style : null;

	// replace or remove in full
	if (ns == null || isVal(ns))
		{ n.el.style.cssText = ns; }
	else {
		for (var nn in ns) {
			var nv = ns[nn];

			if (os == null || nv != null && nv !== os[nn])
				{ n.el.style[nn] = autoPx(nn, nv); }
		}

		// clean old
		if (os) {
			for (var on in os) {
				if (ns[on] == null)
					{ n.el.style[on] = ""; }
			}
		}
	}
}

var didQueue = [];

function fireHook(hooks, name, o, n, immediate) {
	if (hooks != null) {
		var fn = o.hooks[name];

		if (fn) {
			if (name[0] === "d" && name[1] === "i" && name[2] === "d") {	// did*
				//	console.log(name + " should queue till repaint", o, n);
				immediate ? repaint(o.parent) && fn(o, n) : didQueue.push([fn, o, n]);
			}
			else {		// will*
				//	console.log(name + " may delay by promise", o, n);
				return fn(o, n);		// or pass  done() resolver
			}
		}
	}
}

function drainDidHooks(vm) {
	if (didQueue.length) {
		repaint(vm.node);

		var item;
		while (item = didQueue.shift())
			{ item[0](item[1], item[2]); }
	}
}

var doc = ENV_DOM ? document : null;

function closestVNode(el) {
	while (el._node == null)
		{ el = el.parentNode; }
	return el._node;
}

function createElement(tag, ns) {
	if (ns != null)
		{ return doc.createElementNS(ns, tag); }
	return doc.createElement(tag);
}

function createTextNode(body) {
	return doc.createTextNode(body);
}

function createComment(body) {
	return doc.createComment(body);
}

// ? removes if !recycled
function nextSib(sib) {
	return sib.nextSibling;
}

// ? removes if !recycled
function prevSib(sib) {
	return sib.previousSibling;
}

// TODO: this should collect all deep proms from all hooks and return Promise.all()
function deepNotifyRemove(node) {
	var vm = node.vm;

	var wuRes = vm != null && fireHook(vm.hooks, "willUnmount", vm, vm.data);

	var wrRes = fireHook(node.hooks, "willRemove", node);

	if ((node.flags & DEEP_REMOVE) === DEEP_REMOVE && isArr(node.body)) {
		for (var i = 0; i < node.body.length; i++)
			{ deepNotifyRemove(node.body[i]); }
	}

	return wuRes || wrRes;
}

function _removeChild(parEl, el, immediate) {
	var node = el._node, vm = node.vm;

	if (isArr(node.body)) {
		if ((node.flags & DEEP_REMOVE) === DEEP_REMOVE) {
			for (var i = 0; i < node.body.length; i++)
				{ _removeChild(el, node.body[i].el); }
		}
		else
			{ deepUnref(node); }
	}

	delete el._node;

	parEl.removeChild(el);

	fireHook(node.hooks, "didRemove", node, null, immediate);

	if (vm != null) {
		fireHook(vm.hooks, "didUnmount", vm, vm.data, immediate);
		vm.node = null;
	}
}

// todo: should delay parent unmount() by returning res prom?
function removeChild(parEl, el) {
	var node = el._node;

	// already marked for removal
	if (node._dead) { return; }

	var res = deepNotifyRemove(node);

	if (res != null && isProm(res)) {
		node._dead = true;
		res.then(curry(_removeChild, [parEl, el, true]));
	}
	else
		{ _removeChild(parEl, el); }
}

function deepUnref(node) {
	var obody = node.body;

	for (var i = 0; i < obody.length; i++) {
		var o2 = obody[i];
		delete o2.el._node;

		if (o2.vm != null)
			{ o2.vm.node = null; }

		if (isArr(o2.body))
			{ deepUnref(o2); }
	}
}

function clearChildren(parent) {
	var parEl = parent.el;

	if ((parent.flags & DEEP_REMOVE) === 0) {
		isArr(parent.body) && deepUnref(parent);
		parEl.textContent = null;
	}
	else {
		var el = parEl.firstChild;

		do {
			var next = nextSib(el);
			removeChild(parEl, el);
		} while (el = next);
	}
}

// todo: hooks
function insertBefore(parEl, el, refEl) {
	var node = el._node, inDom = el.parentNode != null;

	// el === refEl is asserted as a no-op insert called to fire hooks
	var vm = (el === refEl || !inDom) ? node.vm : null;

	if (vm != null)
		{ fireHook(vm.hooks, "willMount", vm, vm.data); }

	fireHook(node.hooks, inDom ? "willReinsert" : "willInsert", node);
	parEl.insertBefore(el, refEl);
	fireHook(node.hooks, inDom ? "didReinsert" : "didInsert", node);

	if (vm != null)
		{ fireHook(vm.hooks, "didMount", vm, vm.data); }
}

function insertAfter(parEl, el, refEl) {
	insertBefore(parEl, el, refEl ? nextSib(refEl) : null);
}

var onemit = {};

function emitCfg(cfg) {
	assignObj(onemit, cfg);
}

function emit(evName) {
	var targ = this,
		src = targ;

	var args = sliceArgs(arguments, 1).concat(src, src.data);

	do {
		var evs = targ.onemit;
		var fn = evs ? evs[evName] : null;

		if (fn) {
			fn.apply(targ, args);
			break;
		}
	} while (targ = targ.parent());

	if (onemit[evName])
		{ onemit[evName].apply(targ, args); }
}

var onevent = noop;

function config(newCfg) {
	onevent = newCfg.onevent || onevent;

	{
		if (newCfg.onemit)
			{ emitCfg(newCfg.onemit); }
	}

	
}

function bindEv(el, type, fn) {
	el[type] = fn;
}

function exec(fn, args, e, node, vm) {
	var out = fn.apply(vm, args.concat([e, node, vm, vm.data]));

	// should these respect out === false?
	vm.onevent(e, node, vm, vm.data, args);
	onevent.call(null, e, node, vm, vm.data, args);

	if (out === false) {
		e.preventDefault();
		e.stopPropagation();
	}
}

function handle(e) {
	var node = closestVNode(e.target);
	var vm = getVm(node);

	var evDef = e.currentTarget._node.attrs["on" + e.type], fn, args;

	if (isArr(evDef)) {
		fn = evDef[0];
		args = evDef.slice(1);
		exec(fn, args, e, node, vm);
	}
	else {
		for (var sel in evDef) {
			if (e.target.matches(sel)) {
				var evDef2 = evDef[sel];

				if (isArr(evDef2)) {
					fn = evDef2[0];
					args = evDef2.slice(1);
				}
				else {
					fn = evDef2;
					args = [];
				}

				exec(fn, args, e, node, vm);
			}
		}
	}
}

function patchEvent(node, name, nval, oval) {
	if (nval === oval)
		{ return; }

	var el = node.el;

	if (nval == null || isFunc(nval))
		{ bindEv(el, name, nval); }
	else if (oval == null)
		{ bindEv(el, name, handle); }
}

function remAttr(node, name, asProp) {
	if (name[0] === ".") {
		name = name.substr(1);
		asProp = true;
	}

	if (asProp)
		{ node.el[name] = ""; }
	else
		{ node.el.removeAttribute(name); }
}

// setAttr
// diff, ".", "on*", bool vals, skip _*, value/checked/selected selectedIndex
function setAttr(node, name, val, asProp, initial) {
	var el = node.el;

	if (val == null)
		{ !initial && remAttr(node, name, false); }		// will also removeAttr of style: null
	else if (node.ns != null)
		{ el.setAttribute(name, val); }
	else if (name === "class")
		{ el.className = val; }
	else if (name === "id" || typeof val === "boolean" || asProp)
		{ el[name] = val; }
	else if (name[0] === ".")
		{ el[name.substr(1)] = val; }
	else
		{ el.setAttribute(name, val); }
}

function patchAttrs(vnode, donor, initial) {
	var nattrs = vnode.attrs || emptyObj;
	var oattrs = donor.attrs || emptyObj;

	if (nattrs === oattrs) {
		
	}
	else {
		for (var key in nattrs) {
			var nval = nattrs[key];
			var isDyn = isDynProp(vnode.tag, key);
			var oval = isDyn ? vnode.el[key] : oattrs[key];

			if (nval === oval) {}
			else if (isStyleProp(key))
				{ patchStyle(vnode, donor); }
			else if (isSplProp(key)) {}
			else if (isEvProp(key))
				{ patchEvent(vnode, key, nval, oval); }
			else
				{ setAttr(vnode, key, nval, isDyn, initial); }
		}

		// TODO: bench style.cssText = "" vs removeAttribute("style")
		for (var key in oattrs) {
			!(key in nattrs) &&
			!isSplProp(key) &&
			remAttr(vnode, key, isDynProp(vnode.tag, key) || isEvProp(key));
		}
	}
}

function createView(view, data, key, opts) {
	if (view.type === VVIEW) {
		data	= view.data;
		key		= view.key;
		opts	= view.opts;
		view	= view.view;
	}

	return new ViewModel(view, data, key, opts);
}

//import { XML_NS, XLINK_NS } from './defineSvgElement';
function hydrateBody(vnode) {
	for (var i = 0; i < vnode.body.length; i++) {
		var vnode2 = vnode.body[i];
		var type2 = vnode2.type;

		// ELEMENT,TEXT,COMMENT
		if (type2 <= COMMENT)
			{ insertBefore(vnode.el, hydrate(vnode2)); }		// vnode.el.appendChild(hydrate(vnode2))
		else if (type2 === VVIEW) {
			var vm = createView(vnode2.view, vnode2.data, vnode2.key, vnode2.opts)._redraw(vnode, i, false);		// todo: handle new data updates
			type2 = vm.node.type;
			insertBefore(vnode.el, hydrate(vm.node));
		}
		else if (type2 === VMODEL) {
			var vm = vnode2.vm;
			vm._redraw(vnode, i);					// , false
			type2 = vm.node.type;
			insertBefore(vnode.el, vm.node.el);		// , hydrate(vm.node)
		}
	}
}

//  TODO: DRY this out. reusing normal patch here negatively affects V8's JIT
function hydrate(vnode, withEl) {
	if (vnode.el == null) {
		if (vnode.type === ELEMENT) {
			vnode.el = withEl || createElement(vnode.tag, vnode.ns);

		//	if (vnode.tag === "svg")
		//		vnode.el.setAttributeNS(XML_NS, 'xmlns:xlink', XLINK_NS);

			if (vnode.attrs != null)
				{ patchAttrs(vnode, emptyObj, true); }

			if ((vnode.flags & LAZY_LIST) === LAZY_LIST)	// vnode.body instanceof LazyList
				{ vnode.body.body(vnode); }

			if (isArr(vnode.body))
				{ hydrateBody(vnode); }
			else if (vnode.body != null && vnode.body !== "")
				{ vnode.el.textContent = vnode.body; }
		}
		else if (vnode.type === TEXT)
			{ vnode.el = withEl || createTextNode(vnode.body); }
		else if (vnode.type === COMMENT)
			{ vnode.el = withEl || createComment(vnode.body); }
	}

	vnode.el._node = vnode;

	return vnode.el;
}

// prevent GCC from inlining some large funcs (which negatively affects Chrome's JIT)
//window.syncChildren = syncChildren;
window.lisMove = lisMove;

function nextNode(node, body) {
	return body[node.idx + 1];
}

function prevNode(node, body) {
	return body[node.idx - 1];
}

function parentNode(node) {
	return node.parent;
}

var BREAK = 1;
var BREAK_ALL = 2;

function syncDir(advSib, advNode, insert, sibName, nodeName, invSibName, invNodeName, invInsert) {
	return function(node, parEl, body, state, convTest, lis) {
		var sibNode, tmpSib;

		if (state[sibName] != null) {
			// skip dom elements not created by domvm
			if ((sibNode = state[sibName]._node) == null) {
				state[sibName] = advSib(state[sibName]);
				return;
			}

			if (parentNode(sibNode) !== node) {
				tmpSib = advSib(state[sibName]);
				sibNode.vm != null ? sibNode.vm.unmount(true) : removeChild(parEl, state[sibName]);
				state[sibName] = tmpSib;
				return;
			}
		}

		if (state[nodeName] == convTest)
			{ return BREAK_ALL; }
		else if (state[nodeName].el == null) {
			insert(parEl, hydrate(state[nodeName]), state[sibName]);	// should lis be updated here?
			state[nodeName] = advNode(state[nodeName], body);		// also need to advance sib?
		}
		else if (state[nodeName].el === state[sibName]) {
			state[nodeName] = advNode(state[nodeName], body);
			state[sibName] = advSib(state[sibName]);
		}
		// head->tail or tail->head
		else if (!lis && sibNode === state[invNodeName]) {
			tmpSib = state[sibName];
			state[sibName] = advSib(tmpSib);
			invInsert(parEl, tmpSib, state[invSibName]);
			state[invSibName] = tmpSib;
		}
		else {
			if (lis && state[sibName] != null)
				{ return lisMove(advSib, advNode, insert, sibName, nodeName, parEl, body, sibNode, state); }

			return BREAK;
		}
	};
}

function lisMove(advSib, advNode, insert, sibName, nodeName, parEl, body, sibNode, state) {
	if (sibNode._lis) {
		insert(parEl, state[nodeName].el, state[sibName]);
		state[nodeName] = advNode(state[nodeName], body);
	}
	else {
		// find closest tomb
		var t = binaryFindLarger(sibNode.idx, state.tombs);
		sibNode._lis = true;
		var tmpSib = advSib(state[sibName]);
		insert(parEl, state[sibName], t != null ? body[state.tombs[t]].el : t);

		if (t == null)
			{ state.tombs.push(sibNode.idx); }
		else
			{ state.tombs.splice(t, 0, sibNode.idx); }

		state[sibName] = tmpSib;
	}
}

var syncLft = syncDir(nextSib, nextNode, insertBefore, "lftSib", "lftNode", "rgtSib", "rgtNode", insertAfter);
var syncRgt = syncDir(prevSib, prevNode, insertAfter, "rgtSib", "rgtNode", "lftSib", "lftNode", insertBefore);

function syncChildren(node, donor) {
	var obody	= donor.body,
		parEl	= node.el,
		body	= node.body,
		state = {
			lftNode:	body[0],
			rgtNode:	body[body.length - 1],
			lftSib:		((obody)[0] || emptyObj).el,
			rgtSib:		(obody[obody.length - 1] || emptyObj).el,
		};

	converge:
	while (1) {
//		from_left:
		while (1) {
			var l = syncLft(node, parEl, body, state, null, false);
			if (l === BREAK) { break; }
			if (l === BREAK_ALL) { break converge; }
		}

//		from_right:
		while (1) {
			var r = syncRgt(node, parEl, body, state, state.lftNode, false);
			if (r === BREAK) { break; }
			if (r === BREAK_ALL) { break converge; }
		}

		sortDOM(node, parEl, body, state);
		break;
	}
}

// TODO: also use the state.rgtSib and state.rgtNode bounds, plus reduce LIS range
function sortDOM(node, parEl, body, state) {
	var kids = Array.prototype.slice.call(parEl.childNodes);
	var domIdxs = [];

	for (var k = 0; k < kids.length; k++) {
		var n = kids[k]._node;

		if (n.parent === node)
			{ domIdxs.push(n.idx); }
	}

	// list of non-movable vnode indices (already in correct order in old dom)
	var tombs = longestIncreasingSubsequence(domIdxs).map(function (i) { return domIdxs[i]; });

	for (var i = 0; i < tombs.length; i++)
		{ body[tombs[i]]._lis = true; }

	state.tombs = tombs;

	while (1) {
		var r = syncLft(node, parEl, body, state, null, true);
		if (r === BREAK_ALL) { break; }
	}
}

function alreadyAdopted(vnode) {
	return vnode.el._node.parent !== vnode.parent;
}

function takeSeqIndex(n, obody, fromIdx) {
	return obody[fromIdx];
}

function findSeqThorough(n, obody, fromIdx) {		// pre-tested isView?
	for (; fromIdx < obody.length; fromIdx++) {
		var o = obody[fromIdx];

		if (o.vm != null) {
			// match by key & viewFn || vm
			if (n.type === VVIEW && o.vm.view === n.view && o.vm.key === n.key || n.type === VMODEL && o.vm === n.vm)
				{ return o; }
		}
		else if (!alreadyAdopted(o) && n.tag === o.tag && n.type === o.type && n.key === o.key && (n.flags & ~DEEP_REMOVE) === (o.flags & ~DEEP_REMOVE))
			{ return o; }
	}

	return null;
}

function findHashKeyed(n, obody, fromIdx) {
	return obody[obody._keys[n.key]];
}

/*
// list must be a sorted list of vnodes by key
function findBinKeyed(n, list) {
	var idx = binaryKeySearch(list, n.key);
	return idx > -1 ? list[idx] : null;
}
*/

// have it handle initial hydrate? !donor?
// types (and tags if ELEM) are assumed the same, and donor exists
function patch(vnode, donor) {
	fireHook(donor.hooks, "willRecycle", donor, vnode);

	var el = vnode.el = donor.el;

	var obody = donor.body;
	var nbody = vnode.body;

	el._node = vnode;

	// "" => ""
	if (vnode.type === TEXT && nbody !== obody) {
		el.nodeValue = nbody;
		return;
	}

	if (vnode.attrs != null || donor.attrs != null)
		{ patchAttrs(vnode, donor, false); }

	// patch events

	var oldIsArr = isArr(obody);
	var newIsArr = isArr(nbody);
	var lazyList = (vnode.flags & LAZY_LIST) === LAZY_LIST;

//	var nonEqNewBody = nbody != null && nbody !== obody;

	if (oldIsArr) {
		// [] => []
		if (newIsArr || lazyList)
			{ patchChildren(vnode, donor); }
		// [] => "" | null
		else if (nbody !== obody) {
			if (nbody != null)
				{ el.textContent = nbody; }
			else
				{ clearChildren(donor); }
		}
	}
	else {
		// "" | null => []
		if (newIsArr) {
			clearChildren(donor);
			hydrateBody(vnode);
		}
		// "" | null => "" | null
		else if (nbody !== obody) {
			if (el.firstChild)
				{ el.firstChild.nodeValue = nbody; }
			else
				{ el.textContent = nbody; }
		}
	}

	fireHook(donor.hooks, "didRecycle", donor, vnode);
}

// larger qtys of KEYED_LIST children will use binary search
//const SEQ_FAILS_MAX = 100;

// TODO: modify vtree matcher to work similar to dom reconciler for keyed from left -> from right -> head/tail -> binary
// fall back to binary if after failing nri - nli > SEQ_FAILS_MAX
// while-advance non-keyed fromIdx
// [] => []
function patchChildren(vnode, donor) {
	var nbody		= vnode.body,
		nlen		= nbody.length,
		obody		= donor.body,
		olen		= obody.length,
		isLazy		= (vnode.flags & LAZY_LIST) === LAZY_LIST,
		isFixed		= (vnode.flags & FIXED_BODY) === FIXED_BODY,
		isKeyed		= (vnode.flags & KEYED_LIST) === KEYED_LIST,
		domSync		= !isFixed && vnode.type === ELEMENT,
		doFind		= true,
		find		= (
			isKeyed ? findHashKeyed :				// keyed lists/lazyLists
			isFixed || isLazy ? takeSeqIndex :		// unkeyed lazyLists and FIXED_BODY
			findSeqThorough							// more complex stuff
		);

	if (isKeyed) {
		var keys = {};
		for (var i = 0; i < obody.length; i++)
			{ keys[obody[i].key] = i; }
		obody._keys = keys;
	}

	if (domSync && nlen === 0) {
		clearChildren(donor);
		if (isLazy)
			{ vnode.body = []; }	// nbody.tpl(all);
		return;
	}

	var donor2,
		node2,
		foundIdx,
		patched = 0,
		everNonseq = false,
		fromIdx = 0;		// first unrecycled node (search head)

	if (isLazy) {
		var fnode2 = {key: null};
		var nbodyNew = Array(nlen);
	}

	for (var i = 0; i < nlen; i++) {
		if (isLazy) {
			var remake = false;
			var diffRes = null;

			if (doFind) {
				if (isKeyed)
					{ fnode2.key = nbody.key(i); }

				donor2 = find(fnode2, obody, fromIdx);
			}

			if (donor2 != null) {
                foundIdx = donor2.idx;
				diffRes = nbody.diff(i, donor2);

				// diff returns same, so cheaply adopt vnode without patching
				if (diffRes === true) {
					node2 = donor2;
					node2.parent = vnode;
					node2.idx = i;
					node2._lis = false;
				}
				// diff returns new diffVals, so generate new vnode & patch
				else
					{ remake = true; }
			}
			else
				{ remake = true; }

			if (remake) {
				node2 = nbody.tpl(i);			// what if this is a VVIEW, VMODEL, injected element?
				preProc(node2, vnode, i);

				node2._diff = diffRes != null ? diffRes : nbody.diff(i);

				if (donor2 != null)
					{ patch(node2, donor2); }
			}
			else {
				// TODO: flag tmp FIXED_BODY on unchanged nodes?

				// domSync = true;		if any idx changes or new nodes added/removed
			}

			nbodyNew[i] = node2;
		}
		else {
			var node2 = nbody[i];
			var type2 = node2.type;

			// ELEMENT,TEXT,COMMENT
			if (type2 <= COMMENT) {
				if (donor2 = doFind && find(node2, obody, fromIdx)) {
					patch(node2, donor2);
					foundIdx = donor2.idx;
				}
			}
			else if (type2 === VVIEW) {
				if (donor2 = doFind && find(node2, obody, fromIdx)) {		// update/moveTo
					foundIdx = donor2.idx;
					var vm = donor2.vm._update(node2.data, vnode, i);		// withDOM
				}
				else
					{ var vm = createView(node2.view, node2.data, node2.key, node2.opts)._redraw(vnode, i, false); }	// createView, no dom (will be handled by sync below)

				type2 = vm.node.type;
			}
			else if (type2 === VMODEL) {
				// if the injected vm has never been rendered, this vm._update() serves as the
				// initial vtree creator, but must avoid hydrating (creating .el) because syncChildren()
				// which is responsible for mounting below (and optionally hydrating), tests .el presence
				// to determine if hydration & mounting are needed
				var withDOM = isHydrated(node2.vm);

				var vm = node2.vm._update(node2.data, vnode, i, withDOM);
				type2 = vm.node.type;
			}
		}

		// found donor & during a sequential search ...at search head
		if (!isKeyed && donor2 != null) {
			if (foundIdx === fromIdx) {
				// advance head
				fromIdx++;
				// if all old vnodes adopted and more exist, stop searching
				if (fromIdx === olen && nlen > olen) {
					// short-circuit find, allow loop just create/init rest
					donor2 = null;
					doFind = false;
				}
			}
			else
				{ everNonseq = true; }

			if (olen > 100 && everNonseq && ++patched % 10 === 0)
				{ while (fromIdx < olen && alreadyAdopted(obody[fromIdx]))
					{ fromIdx++; } }
		}
	}

	// replace List w/ new body
	if (isLazy)
		{ vnode.body = nbodyNew; }

	domSync && syncChildren(vnode, donor);
}

// view + key serve as the vm's unique identity
function ViewModel(view, data, key, opts) {
	var vm = this;

	vm.view = view;
	vm.data = data;
	vm.key = key;

	if (opts) {
		vm.opts = opts;
		vm.config(opts);
	}

	var out = isPlainObj(view) ? view : view.call(vm, vm, data, key, opts);

	if (isFunc(out))
		{ vm.render = out; }
	else {
		vm.render = out.render;
		vm.config(out);
	}

	// these must be wrapped here since they're debounced per view
	vm._redrawAsync = raft(function (_) { return vm.redraw(true); });
	vm._updateAsync = raft(function (newData) { return vm.update(newData, true); });

	vm.init && vm.init.call(vm, vm, vm.data, vm.key, opts);
}

var ViewModelProto = ViewModel.prototype = {
	constructor: ViewModel,

	_diff:	null,	// diff cache

	init:	null,
	view:	null,
	key:	null,
	data:	null,
	state:	null,
	api:	null,
	opts:	null,
	node:	null,
	hooks:	null,
	onevent: noop,
	refs:	null,
	render:	null,

	mount: mount,
	unmount: unmount,
	config: function(opts) {
		var t = this;

		if (opts.init)
			{ t.init = opts.init; }
		if (opts.diff)
			{ t.diff = opts.diff; }
		if (opts.onevent)
			{ t.onevent = opts.onevent; }

		// maybe invert assignment order?
		if (opts.hooks)
			{ t.hooks = assignObj(t.hooks || {}, opts.hooks); }

		{
			if (opts.onemit)
				{ t.onemit = assignObj(t.onemit || {}, opts.onemit); }
		}
	},
	parent: function() {
		return getVm(this.node.parent);
	},
	root: function() {
		var p = this.node;

		while (p.parent)
			{ p = p.parent; }

		return p.vm;
	},
	redraw: function(sync) {
		var vm = this;
		sync ? vm._redraw(null, null, isHydrated(vm)) : vm._redrawAsync();
		return vm;
	},
	update: function(newData, sync) {
		var vm = this;
		sync ? vm._update(newData, null, null, isHydrated(vm)) : vm._updateAsync(newData);
		return vm;
	},

	_update: updateSync,
	_redraw: redrawSync,
	_redrawAsync: null,
	_updateAsync: null,
};

function mount(el, isRoot) {
	var vm = this;

	if (isRoot) {
		clearChildren({el: el, flags: 0});

		vm._redraw(null, null, false);

		// if placeholder node doesnt match root tag
		if (el.nodeName.toLowerCase() !== vm.node.tag) {
			hydrate(vm.node);
			insertBefore(el.parentNode, vm.node.el, el);
			el.parentNode.removeChild(el);
		}
		else
			{ insertBefore(el.parentNode, hydrate(vm.node, el), el); }
	}
	else {
		vm._redraw(null, null);

		if (el)
			{ insertBefore(el, vm.node.el); }
	}

	if (el)
		{ drainDidHooks(vm); }

	return vm;
}

// asSub means this was called from a sub-routine, so don't drain did* hook queue
function unmount(asSub) {
	var vm = this;

	var node = vm.node;
	var parEl = node.el.parentNode;

	// edge bug: this could also be willRemove promise-delayed; should .then() or something to make sure hooks fire in order
	removeChild(parEl, node.el);

	if (!asSub)
		{ drainDidHooks(vm); }
}

function reParent(vm, vold, newParent, newIdx) {
	if (newParent != null) {
		newParent.body[newIdx] = vold;
		vold.idx = newIdx;
		vold.parent = newParent;
		vold._lis = false;
	}
	return vm;
}

function redrawSync(newParent, newIdx, withDOM) {
	var isRedrawRoot = newParent == null;
	var vm = this;
	var isMounted = vm.node && vm.node.el && vm.node.el.parentNode;

	var vold = vm.node, oldDiff, newDiff;

	if (vm.diff != null) {
		oldDiff = vm._diff;
		vm._diff = newDiff = vm.diff(vm, vm.data);

		if (vold != null) {
			var cmpFn = isArr(oldDiff) ? cmpArr : cmpObj;
			var isSame = oldDiff === newDiff || cmpFn(oldDiff, newDiff);

			if (isSame)
				{ return reParent(vm, vold, newParent, newIdx); }
		}
	}

	isMounted && fireHook(vm.hooks, "willRedraw", vm, vm.data);

	var vnew = vm.render.call(vm, vm, vm.data, oldDiff, newDiff);

	if (vnew === vold)
		{ return reParent(vm, vold, newParent, newIdx); }

	// todo: test result of willRedraw hooks before clearing refs
	vm.refs = null;

	// always assign vm key to root vnode (this is a de-opt)
	if (vm.key != null && vnew.key !== vm.key)
		{ vnew.key = vm.key; }

	vm.node = vnew;

	if (newParent) {
		preProc(vnew, newParent, newIdx, vm);
		newParent.body[newIdx] = vnew;
	}
	else if (vold && vold.parent) {
		preProc(vnew, vold.parent, vold.idx, vm);
		vold.parent.body[vold.idx] = vnew;
	}
	else
		{ preProc(vnew, null, null, vm); }

	if (withDOM !== false) {
		if (vold) {
			// root node replacement
			if (vold.tag !== vnew.tag || vold.key !== vnew.key) {
				// hack to prevent the replacement from triggering mount/unmount
				vold.vm = vnew.vm = null;

				var parEl = vold.el.parentNode;
				var refEl = nextSib(vold.el);
				removeChild(parEl, vold.el);
				insertBefore(parEl, hydrate(vnew), refEl);

				// another hack that allows any higher-level syncChildren to set
				// reconciliation bounds using a live node
				vold.el = vnew.el;

				// restore
				vnew.vm = vm;
			}
			else
				{ patch(vnew, vold); }
		}
		else
			{ hydrate(vnew); }
	}

	isMounted && fireHook(vm.hooks, "didRedraw", vm, vm.data);

	if (isRedrawRoot && isMounted)
		{ drainDidHooks(vm); }

	return vm;
}

// this also doubles as moveTo
// TODO? @withRedraw (prevent redraw from firing)
function updateSync(newData, newParent, newIdx, withDOM) {
	var vm = this;

	if (newData != null) {
		if (vm.data !== newData) {
			fireHook(vm.hooks, "willUpdate", vm, newData);
			vm.data = newData;

			
		}
	}

	return vm._redraw(newParent, newIdx, withDOM);
}

function defineElement(tag, arg1, arg2, flags) {
	var attrs, body;

	if (arg2 == null) {
		if (isPlainObj(arg1))
			{ attrs = arg1; }
		else
			{ body = arg1; }
	}
	else {
		attrs = arg1;
		body = arg2;
	}

	return initElementNode(tag, attrs, body, flags);
}

//export const XML_NS = "http://www.w3.org/2000/xmlns/";
var SVG_NS = "http://www.w3.org/2000/svg";

function defineSvgElement(tag, arg1, arg2, flags) {
	var n = defineElement(tag, arg1, arg2, flags);
	n.ns = SVG_NS;
	return n;
}

function defineComment(body) {
	var node = new VNode;
	node.type = COMMENT;
	node.body = body;
	return node;
}

// placeholder for declared views
function VView(view, data, key, opts) {
	this.view = view;
	this.data = data;
	this.key = key;
	this.opts = opts;
}

VView.prototype = {
	constructor: VView,

	type: VVIEW,
	view: null,
	data: null,
	key: null,
	opts: null,
};

function defineView(view, data, key, opts) {
	return new VView(view, data, key, opts);
}

// placeholder for injected ViewModels
function VModel(vm) {
	this.vm = vm;
}

VModel.prototype = {
	constructor: VModel,

	type: VMODEL,
	vm: null,
};

function injectView(vm) {
//	if (vm.node == null)
//		vm._redraw(null, null, false);

//	return vm.node;

	return new VModel(vm);
}

function injectElement(el) {
	var node = new VNode;
	node.type = ELEMENT;
	node.el = node.key = el;
	return node;
}

function lazyList(items, cfg) {
	var len = items.length;

	var self = {
		items: items,
		length: len,
		// defaults to returning item identity (or position?)
		key: function(i) {
			return cfg.key(items[i], i);
		},
		// default returns 0?
		diff: function(i, donor) {
			var newVals = cfg.diff(items[i], i);
			if (donor == null)
				{ return newVals; }
			var oldVals = donor._diff;
			var same = newVals === oldVals || isArr(oldVals) ? cmpArr(newVals, oldVals) : cmpObj(newVals, oldVals);
			return same || newVals;
		},
		tpl: function(i) {
			return cfg.tpl(items[i], i);
		},
		map: function(tpl) {
			cfg.tpl = tpl;
			return self;
		},
		body: function(vnode) {
			var nbody = Array(len);

			for (var i = 0; i < len; i++) {
				var vnode2 = self.tpl(i);

			//	if ((vnode.flags & KEYED_LIST) === KEYED_LIST && self. != null)
			//		vnode2.key = getKey(item);

				vnode2._diff = self.diff(i);			// holds oldVals for cmp

				nbody[i] = vnode2;

				// run preproc pass (should this be just preProc in above loop?) bench
				preProc(vnode2, vnode, i);
			}

			// replace List with generated body
			vnode.body = nbody;
		}
	};

	return self;
}

var nano = {
	config: config,

	ViewModel: ViewModel,
	VNode: VNode,

	createView: createView,

	defineElement: defineElement,
	defineSvgElement: defineSvgElement,
	defineText: defineText,
	defineComment: defineComment,
	defineView: defineView,

	injectView: injectView,
	injectElement: injectElement,

	lazyList: lazyList,

	FIXED_BODY: FIXED_BODY,
	DEEP_REMOVE: DEEP_REMOVE,
	KEYED_LIST: KEYED_LIST,
	LAZY_LIST: LAZY_LIST,
};

function protoPatch(n, doRepaint) {
	patch$1(this, n, doRepaint);
}

// newNode can be either {class: style: } or full new VNode
// will/didPatch hooks?
function patch$1(o, n, doRepaint) {
	if (n.type != null) {
		// no full patching of view roots, just use redraw!
		if (o.vm != null)
			{ return; }

		preProc(n, o.parent, o.idx, null);
		o.parent.body[o.idx] = n;
		patch(n, o);
		doRepaint && repaint(n);
		drainDidHooks(getVm(n));
	}
	else {
		// TODO: re-establish refs

		// shallow-clone target
		var donor = Object.create(o);
		// fixate orig attrs
		donor.attrs = assignObj({}, o.attrs);
		// assign new attrs into live targ node
		var oattrs = assignObj(o.attrs, n);
		// prepend any fixed shorthand class
		if (o._class != null) {
			var aclass = oattrs.class;
			oattrs.class = aclass != null && aclass !== "" ? o._class + " " + aclass : o._class;
		}

		patchAttrs(o, donor);

		doRepaint && repaint(o);
	}
}

VNodeProto.patch = protoPatch;

function nextSubVms(n, accum) {
	var body = n.body;

	if (isArr(body)) {
		for (var i = 0; i < body.length; i++) {
			var n2 = body[i];

			if (n2.vm != null)
				{ accum.push(n2.vm); }
			else
				{ nextSubVms(n2, accum); }
		}
	}

	return accum;
}

function defineElementSpread(tag) {
	var args = arguments;
	var len = args.length;
	var body, attrs;

	if (len > 1) {
		var bodyIdx = 1;

		if (isPlainObj(args[1])) {
			attrs = args[1];
			bodyIdx = 2;
		}

		if (len === bodyIdx + 1 && (isVal(args[bodyIdx]) || isArr(args[bodyIdx]) || attrs && (attrs._flags & LAZY_LIST) === LAZY_LIST))
			{ body = args[bodyIdx]; }
		else
			{ body = sliceArgs(args, bodyIdx); }
	}

	return initElementNode(tag, attrs, body);
}

function defineSvgElementSpread() {
	var n = defineElementSpread.apply(null, arguments);
	n.ns = SVG_NS;
	return n;
}

ViewModelProto.emit = emit;
ViewModelProto.onemit = null;

ViewModelProto.body = function() {
	return nextSubVms(this.node, []);
};

nano.defineElementSpread = defineElementSpread;
nano.defineSvgElementSpread = defineSvgElementSpread;

return nano;

})));
//# sourceMappingURL=domvm.micro.js.map


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(5);
var view_1 = __webpack_require__(6);
var ts_data_1 = __webpack_require__(7);
var ComposeLayer_1 = __webpack_require__(119);
var Legend_1 = __webpack_require__(121);
var types_1 = __webpack_require__(19);
var index_1 = __webpack_require__(123);
var index_2 = __webpack_require__(127);
var Stacker_1 = __webpack_require__(136);
var common_1 = __webpack_require__(2);
var Tooltip_1 = __webpack_require__(137);
var Chart = /** @class */ (function (_super) {
    __extends(Chart, _super);
    function Chart(node, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, null, config) || this;
        // using zero values ensure that widget will not attempt to render self in the hidden state
        _this._width = 0;
        _this._height = 0;
        _this._left = 0;
        _this._top = 0;
        var dataConfig = {};
        if (config.maxPoints) {
            dataConfig.approximate = {
                value: config.series.map(function (a) { return a.value; }),
                maxNum: config.maxPoints,
            };
        }
        if (Array.isArray(config.data)) {
            _this.events = new events_1.EventSystem(_this);
            _this.data = new ts_data_1.DataCollection(dataConfig, _this.events);
            _this.data.parse(config.data);
        }
        else if (config.data && config.data.events) {
            _this.data = config.data;
            _this.events = _this.data.events;
            _this.events.context = _this;
        }
        else {
            _this.events = new events_1.EventSystem(_this);
            _this.data = new ts_data_1.DataCollection(dataConfig, _this.events);
        }
        _this._globalHTMLHandlers = {
            onmousemove: function (e) {
                var _a = _this._layers.getSizes(), left = _a.left, top = _a.top, bottom = _a.bottom, right = _a.right;
                var pageX = e.pageX, pageY = e.pageY;
                var rects = _this.getRootView().node.el.getBoundingClientRect();
                _this._left = rects.left + window.pageXOffset;
                _this._top = rects.top + window.pageYOffset;
                var x = pageX - left - _this._left;
                var y = pageY - top - _this._top;
                if (x >= 0 && x <= _this._width - right - left && y >= 0 && y <= _this._height - bottom - top) {
                    _this.events.fire(types_1.ChartEvents.chartMouseMove, [x, y, _this._left + left, _this._top + top]);
                }
                else {
                    _this.events.fire(types_1.ChartEvents.chartMouseLeave);
                }
            },
            onmouseleave: function () { return _this.events.fire(types_1.ChartEvents.chartMouseLeave); },
        };
        _this._layers = new ComposeLayer_1.ComposeLayer();
        _this.setConfig(config);
        _this._initEvents();
        _this._tooltip = new Tooltip_1.Tooltip(_this);
        var render = function () {
            if (!_this.data.getLength()) {
                return dom_1.el("div");
            }
            var getChartAriaLabel = function (config) {
                /*  Full example (without symbols of new line):
                    Type chart "Title". X/Y Scale Name: bottom axis from Min to Max. Scale Name: left axis Name from Min to Max.
                    Series: seria A, seria B, seria C, ...
                 */
                var scales = _this._scales;
                var series = config.series;
                var type = config.type;
                if (!type) {
                    // scatter chart
                    type = series && series.length && series[0] ? series[0].type || "" : "";
                }
                var label = (type || "") + " chart.";
                var getAxisName = function (cfg) { return (cfg._isXDirection ? "X" : "Y"); };
                var getAxisTitle = function (cfg) { return cfg.title || cfg.text || cfg.value || ""; };
                var getAxisMin = function (cfg) { return (cfg.steps && cfg.steps.length ? cfg.steps[0] : cfg.min || 0); };
                var getAxisMax = function (cfg) {
                    return cfg.steps && cfg.steps.length
                        ? cfg.steps[cfg.steps.length - 1]
                        : cfg.max || cfg.maxPoints || "max";
                };
                var getRadialAxisValue = function (attr, point) { return point[attr]; };
                if (scales) {
                    Object.keys(scales).forEach(function (direction) {
                        var scale = scales[direction];
                        var cfg = scale._axis || scale.config;
                        if (direction === "radial") {
                            var xData = scale._data._order;
                            label += " X scale " + getAxisTitle(scale.config) + ": " + direction + " axis from " + getRadialAxisValue(scale.config.value, xData[0]) + " to " + getRadialAxisValue(scale.config.value, xData[xData.length - 1]) + ".";
                            label += " " + getAxisName(scale) + " scale: axis from " + getAxisMin(cfg) + " to " + getAxisMax(cfg) + ".";
                        }
                        else {
                            label += " " + getAxisName(scale) + " scale " + getAxisTitle(scale.config) + ": " + direction + " axis from " + getAxisMin(cfg) + " to " + getAxisMax(cfg) + ".";
                        }
                    });
                }
                if (series && series.length) {
                    label += " Series:";
                    series.forEach(function (seria, index) {
                        label += " " + (type === "pie" || type === "pie3D" || type === "donut" ? seria.text : seria.value);
                        label += index === series.length - 1 ? "." : ",";
                    });
                }
                return label;
            };
            var getChartAriaAttrs = function (config) { return ({
                "aria-label": getChartAriaLabel(config),
            }); };
            var content = [
                dom_1.resizer(function (x, y) {
                    _this._width = x;
                    _this._height = y || 400; // if height is not provided, use default value
                    var view = _this.getRootView();
                    if (view && view.node && view.node.el) {
                        var rects = view.node.el.getBoundingClientRect();
                        _this._left = rects.left + window.pageXOffset;
                        _this._top = rects.top + window.pageYOffset;
                    }
                    _this.events.fire(types_1.ChartEvents.resize, [_this._width, _this._height]);
                    _this.paint();
                }),
            ];
            if (_this._width && _this._height) {
                content.push(_this._layers.toVDOM(_this._width, _this._height, _this.events));
            }
            return dom_1.el(".dhx_widget.dhx_chart", __assign({ class: config.css ? config.css : "", onmousemove: _this._globalHTMLHandlers.onmousemove, onmouseleave: _this._globalHTMLHandlers.onmouseleave }, getChartAriaAttrs(config)), content);
        };
        var view = dom_1.create({
            render: render,
            hooks: {
                didMount: function (vm) {
                    if (vm && vm.node && vm.node.parent && vm.node.parent.el) {
                        _this._width = vm.node.parent.el.offsetWidth;
                        _this._height = vm.node.parent.el.offsetHeight || 400;
                        _this.paint();
                    }
                },
            },
        });
        _this.mount(node, view);
        return _this;
    }
    Chart.prototype.getSeries = function (key) {
        return this._series[key];
    };
    Chart.prototype.eachSeries = function (handler) {
        var result = [];
        for (var key in this._series) {
            result.push(handler.call(this, this._series[key]));
        }
        return result;
    };
    Chart.prototype.destructor = function () {
        this._tooltip.destructor();
        this.events.clear();
        this.unmount();
    };
    Chart.prototype.setConfig = function (config) {
        var _this = this;
        this.config = config;
        this._layers.clear();
        this._series = {};
        this._scales = {};
        var min;
        // let baseLine;
        if (config.scales) {
            for (var key in config.scales) {
                var scale = __assign({}, config.scales[key]);
                if (config.scales[key].min !== undefined) {
                    min = config.scales[key].min;
                }
                scale.type = scale.type || this._detectScaleType(scale, key);
                if (config.scales.radial && key !== "radial") {
                    scale.hidden = true;
                }
                this._setScale(scale, key);
            }
        }
        var stack = new Stacker_1.default();
        this._layers.add(stack);
        config.series.forEach(function (cfg) {
            if (cfg.baseLine !== undefined && cfg.baseLine < min) {
                cfg.baseLine = undefined;
            }
            var serieConfig = __assign({}, cfg);
            serieConfig.type = serieConfig.type || config.type;
            var chartFactory = index_2.default[serieConfig.type];
            if (serieConfig.barWidth || _this.config.barWidth) {
                serieConfig.barWidth = serieConfig.barWidth || _this.config.barWidth;
            }
            var chart = new chartFactory(_this.data, serieConfig, _this.events);
            var scales = common_1.getScales(config.scales);
            var chartScales = scales.length > 1 && scales[0] !== "radial"
                ? scales
                : scales[0] === "radial"
                    ? scales
                    : ["bottom", "left"];
            chartScales.forEach(function (type) {
                var scale = _this._scales[type];
                if (!scale) {
                    return;
                }
                chart.addScale(type, scale);
                if (!serieConfig.stacked) {
                    scale.add(chart);
                }
                else {
                    scale.add(stack);
                }
            });
            _this._series[chart.id] = chart;
            if (serieConfig.stacked) {
                stack.add(chart);
            }
            else {
                _this._layers.add(chart);
            }
        });
        if (config.legend) {
            var legendConfig = __assign({}, config.legend);
            if (legendConfig.series) {
                legendConfig.$seriesInfo = legendConfig.series.map(function (id) { return _this._series[id]; });
            }
            var legend = new Legend_1.Legend(this.data, legendConfig, this.events);
            this._layers.add(legend);
        }
        this.paint();
    };
    Chart.prototype._setScale = function (config, position) {
        var scale = new index_1.default[config.type](this.data, config, position);
        if (scale.config.type !== "radial") {
            this._layers.add(scale.scaleGrid());
        }
        this._layers.add(scale);
        this._scales[position] = scale;
    };
    Chart.prototype._detectScaleType = function (config, key) {
        if (key === "radial") {
            return key;
        }
        if (config.text) {
            return "text";
        }
        return "numeric";
    };
    Chart.prototype._initEvents = function () {
        var _this = this;
        // hide/show series on legend click
        this.events.on(types_1.ChartEvents.toggleSeries, function (id, pieLike) {
            if (pieLike) {
                var serie = _this._series[Object.keys(_this._series)[0]];
                if (serie) {
                    serie.toggle(id);
                    _this.paint();
                }
            }
            else if (_this._series[id]) {
                _this._series[id].toggle();
                _this.paint();
            }
        }, this);
        // repaint on data change
        this.events.on(ts_data_1.DataEvents.change, function () { return _this.paint(); });
    };
    return Chart;
}(view_1.View));
exports.Chart = Chart;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(10);
var types_1 = __webpack_require__(9);
var Loader = /** @class */ (function () {
    function Loader(parent, changes) {
        this._parent = parent;
        this._changes = changes; // todo: [dirty] mutation
    }
    Loader.prototype.load = function (url, driver) {
        var _this = this;
        // TODO: change way for checking lazyLoad
        if (url.config && !this._parent.events.fire(types_1.DataEvents.beforeLazyLoad, [])) {
            return;
        }
        return (this._parent.loadData = url
            .load()
            .then(function (data) {
            if (data) {
                return _this.parse(data, driver);
            }
            else {
                return [];
            }
        })
            .catch(function (error) {
            _this._parent.events.fire(types_1.DataEvents.loadError, [error]);
        }));
    };
    Loader.prototype.parse = function (data, driver) {
        var _this = this;
        if (driver === void 0) { driver = types_1.DataDriver.json; }
        if (driver === "json" && !helpers_1.hasJsonOrArrayStructure(data)) {
            this._parent.events.fire(types_1.DataEvents.loadError, ["Uncaught SyntaxError: Unexpected end of input"]);
        }
        driver = helpers_1.toDataDriver(driver);
        data = driver.toJsonArray(data);
        if (!(data instanceof Array)) {
            var totalCount = data.total_count - 1;
            var from_1 = data.from;
            data = data.data;
            if (this._parent.getLength() === 0) {
                var newData = [];
                for (var i = 0, j = 0; i <= totalCount; i++) {
                    if (i >= from_1 && i <= from_1 + data.length - 1) {
                        newData.push(data[j]);
                        j++;
                    }
                    else {
                        newData.push({ $empty: true });
                    }
                }
                data = newData;
            }
            else {
                data.forEach(function (newItem, i) {
                    var index = from_1 + i;
                    var oldId = _this._parent.getId(index);
                    if (oldId) {
                        var emptyItem = _this._parent.getItem(oldId);
                        if (emptyItem && emptyItem.$empty) {
                            _this._parent.changeId(oldId, newItem.id, true);
                            _this._parent.update(newItem.id, __assign(__assign({}, newItem), { $empty: undefined }), true);
                        }
                    }
                    else {
                        helpers_1.dhxWarning("item not found");
                    }
                });
                this._parent.events.fire(types_1.DataEvents.afterLazyLoad, [from_1, data.length]);
                this._parent.events.fire(types_1.DataEvents.change);
                return data;
            }
        }
        if (this._parent.getInitialData()) {
            this._parent.removeAll();
        }
        this._parent.$parse(data);
        return data;
    };
    Loader.prototype.save = function (url) {
        var _this = this;
        var _loop_1 = function (el) {
            if (el.saving || el.pending) {
                helpers_1.dhxWarning("item is saving");
            }
            else {
                var prevEl_1 = this_1._findPrevState(el.id);
                if (prevEl_1 && prevEl_1.saving) {
                    var pending = new Promise(function (res, rej) {
                        prevEl_1.promise
                            .then(function () {
                            el.pending = false;
                            res(_this._setPromise(el, url));
                        })
                            .catch(function (err) {
                            _this._removeFromOrder(prevEl_1);
                            _this._setPromise(el, url);
                            helpers_1.dhxWarning(err);
                            rej(err);
                        });
                    });
                    this_1._addToChain(pending);
                    el.pending = true;
                }
                else {
                    this_1._setPromise(el, url);
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this._changes.order; _i < _a.length; _i++) {
            var el = _a[_i];
            _loop_1(el);
        }
        if (this._changes.order.length) {
            this._parent.saveData.then(function () {
                _this._saving = false;
            });
        }
    };
    Loader.prototype.updateChanges = function (changes) {
        this._changes = changes;
    };
    Loader.prototype._setPromise = function (el, url) {
        var _this = this;
        el.promise = url.save(el.obj, el.status);
        el.promise
            .then(function () {
            _this._removeFromOrder(el);
        })
            .catch(function (err) {
            el.saving = false;
            el.error = true;
            helpers_1.dhxError(err);
        });
        el.saving = true;
        this._saving = true;
        this._addToChain(el.promise);
        return el.promise;
    };
    Loader.prototype._addToChain = function (promise) {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        if (this._parent.saveData && this._saving) {
            this._parent.saveData = this._parent.saveData.then(function () { return promise; });
        }
        else {
            this._parent.saveData = promise;
        }
    };
    Loader.prototype._findPrevState = function (id) {
        for (var _i = 0, _a = this._changes.order; _i < _a.length; _i++) {
            var el = _a[_i];
            if (el.id === id) {
                return el;
            }
        }
        return null;
    };
    Loader.prototype._removeFromOrder = function (el) {
        this._changes.order = this._changes.order.filter(function (item) { return !helpers_1.isEqualObj(item, el); });
    };
    return Loader;
}());
exports.Loader = Loader;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)))

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var xml_1 = __webpack_require__(72);
var ARRAY_NAME = "items";
var ITEM_NAME = "item";
// convert xml tag to js object, all subtags and attributes are mapped to the properties of result object
function tagToObject(tag, initialObj) {
    initialObj = initialObj || {};
    // map attributes
    var a = tag.attributes;
    if (a && a.length) {
        for (var i = 0; i < a.length; i++) {
            initialObj[a[i].name] = a[i].value;
        }
    }
    // map subtags
    var b = tag.childNodes;
    for (var i = 0; i < b.length; i++) {
        if (b[i].nodeType === 1) {
            var name_1 = b[i].tagName;
            if (initialObj[name_1]) {
                if (typeof initialObj[name_1].push !== "function") {
                    initialObj[name_1] = [initialObj[name_1]];
                }
                initialObj[name_1].push(tagToObject(b[i], {}));
            }
            else {
                initialObj[name_1] = tagToObject(b[i], {}); // sub-object for complex subtags
            }
        }
    }
    return initialObj;
}
var XMLDriver = /** @class */ (function () {
    function XMLDriver() {
    }
    XMLDriver.prototype.toJsonArray = function (data) {
        return this.getRows(data);
    };
    XMLDriver.prototype.toJsonObject = function (data) {
        var doc;
        if (typeof data === "string") {
            doc = this._fromString(data);
        }
        return tagToObject(doc);
    };
    XMLDriver.prototype.serialize = function (data) {
        return xml_1.jsonToXML(data);
    };
    XMLDriver.prototype.getFields = function (row) {
        return row;
    };
    XMLDriver.prototype.getRows = function (data) {
        if (typeof data === "string") {
            data = this._fromString(data);
        }
        if (data) {
            var childNodes = data.childNodes && data.childNodes[0] && data.childNodes[0].childNodes;
            if (!childNodes || !childNodes.length) {
                return null;
            }
            return this._getRows(childNodes);
        }
        return [];
    };
    XMLDriver.prototype._getRows = function (nodes) {
        var result = [];
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].tagName === ITEM_NAME) {
                result.push(this._nodeToJS(nodes[i]));
            }
        }
        return result;
    };
    XMLDriver.prototype._fromString = function (data) {
        try {
            return new DOMParser().parseFromString(data, "text/xml");
        }
        catch (_a) {
            return null;
        }
    };
    XMLDriver.prototype._nodeToJS = function (node) {
        var result = {};
        if (this._haveAttrs(node)) {
            var attrs = node.attributes;
            for (var i = 0; i < attrs.length; i++) {
                var _a = attrs[i], name_2 = _a.name, value = _a.value;
                result[name_2] = this._toType(value);
            }
        }
        if (node.nodeType === 3) {
            result.value = result.value || this._toType(node.textContent);
            return result;
        }
        var childNodes = node.childNodes;
        if (childNodes) {
            for (var i = 0; i < childNodes.length; i++) {
                var subNode = childNodes[i];
                var tag = subNode.tagName;
                if (!tag) {
                    continue;
                }
                if (tag === ARRAY_NAME && subNode.childNodes) {
                    result[tag] = this._getRows(subNode.childNodes);
                }
                else {
                    if (this._haveAttrs(subNode)) {
                        result[tag] = this._nodeToJS(subNode);
                    }
                    else {
                        result[tag] = this._toType(subNode.textContent);
                    }
                }
            }
        }
        return result;
    };
    XMLDriver.prototype._toType = function (val) {
        if (val === "false" || val === "true") {
            return val === "true";
        }
        if (!isNaN(val)) {
            return Number(val);
        }
        return val;
    };
    XMLDriver.prototype._haveAttrs = function (node) {
        return node.attributes && node.attributes.length;
    };
    return XMLDriver;
}());
exports.XMLDriver = XMLDriver;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var INDENT_STEP = 4;
function ws(count) {
    return " ".repeat(count);
}
function itemToXML(item, indent) {
    if (indent === void 0) { indent = INDENT_STEP; }
    var result = ws(indent) + "<item>\n";
    for (var key in item) {
        if (Array.isArray(item[key])) {
            result += ws(indent + INDENT_STEP) + ("<" + key + ">\n");
            result +=
                item[key].map(function (subItem) { return itemToXML(subItem, indent + INDENT_STEP * 2); }).join("\n") +
                    "\n";
            result += ws(indent + INDENT_STEP) + ("</" + key + ">\n");
        }
        else {
            result += ws(indent + INDENT_STEP) + ("<" + key + ">" + item[key] + "</" + key + ">\n");
        }
    }
    result += ws(indent) + "</item>";
    return result;
}
function jsonToXML(data, root) {
    if (root === void 0) { root = "root"; }
    var result = "<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n<" + root + ">";
    for (var i = 0; i < data.length; i++) {
        result += "\n" + itemToXML(data[i]);
    }
    return result + ("\n</" + root + ">");
}
exports.jsonToXML = jsonToXML;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(10);
var Sort = /** @class */ (function () {
    function Sort() {
    }
    Sort.prototype.sort = function (array, by, perm) {
        this._createSorter(by);
        if (perm === by)
            by = null;
        if (perm || by)
            this._sort(array, perm, by);
    };
    Sort.prototype._createSorter = function (by) {
        var _this = this;
        if (by && !by.rule) {
            by.rule = function (a, b) {
                var aa = _this._checkVal(by.as, a[by.by]);
                var bb = _this._checkVal(by.as, b[by.by]);
                // [TODO] why we need naturalCompare
                return helpers_1.naturalCompare(aa.toString(), bb.toString());
            };
        }
    };
    Sort.prototype._checkVal = function (method, val) {
        return method ? method.call(this, val) : val;
    };
    Sort.prototype._sort = function (arr, conf, conf2) {
        var _this = this;
        var dir = {
            asc: 1,
            desc: -1,
        };
        return arr.sort(function (a, b) {
            var t = 0;
            if (conf)
                t = conf.rule.call(_this, a, b) * (dir[conf.dir] || dir.asc);
            if (t === 0 && conf2)
                t = conf2.rule.call(_this, a, b) * (dir[conf2.dir] || dir.asc);
            return t;
        });
    };
    return Sort;
}());
exports.Sort = Sort;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var datacollection_1 = __webpack_require__(33);
var dataproxy_1 = __webpack_require__(13);
var helpers_1 = __webpack_require__(10);
var types_1 = __webpack_require__(9);
function addToOrder(store, obj, parent, index) {
    if (index !== undefined && index !== -1 && store[parent] && store[parent][index]) {
        store[parent].splice(index, 0, obj);
    }
    else {
        if (!store[parent]) {
            store[parent] = [];
        }
        store[parent].push(obj);
    }
}
var TreeCollection = /** @class */ (function (_super) {
    __extends(TreeCollection, _super);
    function TreeCollection(config, events) {
        var _a;
        var _this = _super.call(this, config, events) || this;
        _this._childs = {};
        var root = (_this._root = (config && config.rootId) || "_ROOT_" + core_1.uid());
        _this._childs = (_a = {}, _a[root] = [], _a);
        _this._initChilds = null;
        return _this;
    }
    TreeCollection.prototype.add = function (newItem, index, parent) {
        var _this = this;
        if (index === void 0) { index = -1; }
        if (parent === void 0) { parent = this._root; }
        if (typeof newItem !== "object") {
            newItem = {
                value: newItem,
            };
        }
        if (Array.isArray(newItem)) {
            return newItem.map(function (element, key) {
                return _this._add(element, index, parent, key);
            });
        }
        else {
            return this._add(newItem, index, parent);
        }
    };
    TreeCollection.prototype.getRoot = function () {
        return this._root;
    };
    TreeCollection.prototype.getParent = function (id, asObj) {
        if (asObj === void 0) { asObj = false; }
        if (!this._pull[id]) {
            return null;
        }
        var parent = this._pull[id].parent;
        return asObj ? this._pull[parent] : parent;
    };
    TreeCollection.prototype.getItems = function (id) {
        if (this._childs && this._childs[id]) {
            return this._childs[id];
        }
        return [];
    };
    TreeCollection.prototype.getLength = function (id) {
        if (id === void 0) { id = this._root; }
        if (!this._childs[id]) {
            return null;
        }
        return this._childs[id].length;
    };
    TreeCollection.prototype.removeAll = function (id) {
        var _a;
        if (!id) {
            _super.prototype.removeAll.call(this);
            var root = this._root;
            this._initChilds = null;
            this._childs = (_a = {}, _a[root] = [], _a);
        }
        else if (this._childs[id]) {
            var childs = __spreadArrays(this._childs[id]);
            for (var _i = 0, childs_1 = childs; _i < childs_1.length; _i++) {
                var child = childs_1[_i];
                this.remove(child.id);
            }
        }
    };
    TreeCollection.prototype.getIndex = function (id) {
        var parent = this.getParent(id);
        if (!parent || !this._childs[parent]) {
            return -1;
        }
        return core_1.findIndex(this._childs[parent], function (item) { return item.id === id; });
    };
    TreeCollection.prototype.sort = function (rule) {
        var _this = this;
        if (!rule) {
            this._childs = {};
            // [dirty]
            this._parse_data(Object.keys(this._pull).map(function (key) { return _this._pull[key]; }));
            if (this._filters) {
                for (var key in this._filters) {
                    var filter = this._filters[key];
                    this.filter(filter.rule, filter.config);
                }
            }
        }
        else {
            for (var key in this._childs) {
                this._sort.sort(this._childs[key], rule);
            }
            if (this._initChilds && Object.keys(this._initChilds).length) {
                for (var key in this._initChilds) {
                    this._sort.sort(this._initChilds[key], rule);
                }
            }
        }
        this.events.fire(types_1.DataEvents.change);
    };
    TreeCollection.prototype.filter = function (rule, config) {
        var _this = this;
        if (config === void 0) { config = {}; }
        if (!rule) {
            this.restoreOrder();
            return;
        }
        if (!this._initChilds) {
            this._initChilds = this._childs;
        }
        config.type = config.type || types_1.TreeFilterType.all;
        // [todo] we can store multiple filter rules, like in datacollection
        this._filters = {};
        this._filters._ = {
            rule: rule,
            config: config,
        };
        var newChilds = {};
        this._recursiveFilter(rule, config, this._root, 0, newChilds);
        Object.keys(newChilds).forEach(function (key) {
            var parentId = _this.getParent(key);
            var current = _this.getItem(key);
            while (parentId) {
                if (!newChilds[parentId]) {
                    newChilds[parentId] = [];
                }
                if (current && !newChilds[parentId].find(function (x) { return x.id === current.id; })) {
                    newChilds[parentId].push(current);
                }
                current = _this.getItem(parentId);
                parentId = _this.getParent(parentId);
            }
        });
        this._childs = newChilds;
        this.events.fire(types_1.DataEvents.change);
    };
    TreeCollection.prototype.restoreOrder = function () {
        if (this._initChilds) {
            this._childs = this._initChilds;
            this._initChilds = null;
        }
        this.events.fire(types_1.DataEvents.change);
    };
    TreeCollection.prototype.copy = function (id, index, target, targetId) {
        var _this = this;
        if (target === void 0) { target = this; }
        if (targetId === void 0) { targetId = this._root; }
        if (id instanceof Array) {
            return id.map(function (elementId, key) {
                return _this._copy(elementId, index, target, targetId, key);
            });
        }
        else {
            return this._copy(id, index, target, targetId);
        }
    };
    TreeCollection.prototype.move = function (id, index, target, targetId) {
        var _this = this;
        if (target === void 0) { target = this; }
        if (targetId === void 0) { targetId = this._root; }
        if (id instanceof Array) {
            return id.map(function (elementId, key) {
                return _this._move(elementId, index, target, targetId, key);
            });
        }
        else {
            return this._move(id, index, target, targetId);
        }
    };
    TreeCollection.prototype.forEach = function (callback, parent, level) {
        if (parent === void 0) { parent = this._root; }
        if (level === void 0) { level = Infinity; }
        if (!this.haveItems(parent) || level < 1) {
            return;
        }
        var array = this._childs[parent];
        for (var i = 0; i < array.length; i++) {
            callback.call(this, array[i], i, array);
            if (this.haveItems(array[i].id)) {
                this.forEach(callback, array[i].id, --level);
            }
        }
    };
    TreeCollection.prototype.eachChild = function (id, callback, direct, checkItem) {
        if (direct === void 0) { direct = true; }
        if (checkItem === void 0) { checkItem = function () { return true; }; }
        if (!this.haveItems(id)) {
            return;
        }
        for (var i = 0; i < this._childs[id].length; i++) {
            callback.call(this, this._childs[id][i], i);
            if (direct && checkItem(this._childs[id][i])) {
                this.eachChild(this._childs[id][i].id, callback, direct, checkItem);
            }
        }
    };
    TreeCollection.prototype.getNearId = function (id) {
        return id; // for selection
    };
    TreeCollection.prototype.loadItems = function (id, driver) {
        var _this = this;
        if (driver === void 0) { driver = types_1.DataDriver.json; }
        var url = this.config.autoload + "?id=" + id;
        var proxy = new dataproxy_1.DataProxy(url);
        proxy.load().then(function (data) {
            driver = helpers_1.toDataDriver(driver);
            data = driver.toJsonArray(data);
            _this._parse_data(data, id);
            _this.events.fire(types_1.DataEvents.change);
        });
    };
    TreeCollection.prototype.refreshItems = function (id, driver) {
        if (driver === void 0) { driver = types_1.DataDriver.json; }
        this.removeAll(id);
        this.loadItems(id, driver);
    };
    TreeCollection.prototype.eachParent = function (id, callback, self) {
        if (self === void 0) { self = false; }
        var item = this.getItem(id);
        if (!item) {
            return;
        }
        if (self) {
            callback.call(this, item);
        }
        if (item.parent === this._root) {
            return;
        }
        var parent = this.getItem(item.parent);
        callback.call(this, parent);
        this.eachParent(item.parent, callback);
    };
    TreeCollection.prototype.haveItems = function (id) {
        return id in this._childs;
    };
    TreeCollection.prototype.canCopy = function (id, target) {
        if (id === target) {
            return false;
        }
        var canCopy = true;
        this.eachParent(target, function (item) { return (item.id === id ? (canCopy = false) : null); }); // locate return string
        return canCopy;
    };
    TreeCollection.prototype.serialize = function (driver, checkItem) {
        if (driver === void 0) { driver = types_1.DataDriver.json; }
        var data = this._serialize(this._root, checkItem);
        var dataDriver = helpers_1.toDataDriver(driver);
        if (dataDriver) {
            return dataDriver.serialize(data);
        }
    };
    TreeCollection.prototype.getId = function (index, parent) {
        if (parent === void 0) { parent = this._root; }
        if (!this._childs[parent] || !this._childs[parent][index]) {
            return;
        }
        return this._childs[parent][index].id;
    };
    // Non public API from suite_6.4
    TreeCollection.prototype.map = function (callback, parent, direct) {
        if (parent === void 0) { parent = this._root; }
        if (direct === void 0) { direct = true; }
        var result = [];
        if (!this.haveItems(parent)) {
            return result;
        }
        for (var i = 0; i < this._childs[parent].length; i++) {
            result.push(callback.call(this, this._childs[parent][i], i, this._childs));
            if (direct) {
                var childResult = this.map(callback, this._childs[parent][i].id, direct);
                result = result.concat(childResult);
            }
        }
        return result;
    };
    TreeCollection.prototype.getRawData = function (from, to, order, mode, parent) {
        parent = parent || this._root;
        var out;
        if (parent === this._root)
            out = _super.prototype.getRawData.call(this, from, to, this._childs[parent]);
        else
            out = this._childs[parent];
        if (mode === 2) {
            return this.flatten(out);
        }
        return out;
    };
    TreeCollection.prototype.flatten = function (input) {
        var _this = this;
        var out = [];
        input.forEach(function (a) {
            out.push(a);
            var kids = _this._childs[a.id];
            if (kids && a.$opened) {
                out = out.concat(_this.flatten(kids));
            }
        });
        return out;
    };
    TreeCollection.prototype._add = function (newItem, index, parent, key) {
        if (index === void 0) { index = -1; }
        if (parent === void 0) { parent = this._root; }
        newItem.parent = newItem.parent ? newItem.parent.toString() : parent;
        if (key > 0 && index !== -1) {
            index = index + 1;
        }
        var id = _super.prototype._add.call(this, newItem, index);
        if (Array.isArray(newItem.items)) {
            for (var _i = 0, _a = newItem.items; _i < _a.length; _i++) {
                var item = _a[_i];
                this.add(item, -1, newItem.id);
            }
        }
        return id;
    };
    TreeCollection.prototype._copy = function (id, index, target, targetId, key) {
        if (target === void 0) { target = this; }
        if (targetId === void 0) { targetId = this._root; }
        if (!this.exists(id)) {
            return null;
        }
        var currentChilds = this._childs[id];
        if (key) {
            index = index === -1 ? -1 : index + key;
        }
        if (target === this && !this.canCopy(id, targetId)) {
            return null;
        }
        var itemCopy = helpers_1.copyWithoutInner(this.getItem(id), { items: true });
        if (target.exists(id)) {
            itemCopy.id = core_1.uid();
        }
        if (!helpers_1.isTreeCollection(target)) {
            target.add(itemCopy, index);
            return;
        }
        if (this.exists(id)) {
            itemCopy.parent = targetId;
            if (target !== this && targetId === this._root) {
                itemCopy.parent = target.getRoot();
            }
            target.add(itemCopy, index);
            id = itemCopy.id;
        }
        if (currentChilds) {
            for (var _i = 0, currentChilds_1 = currentChilds; _i < currentChilds_1.length; _i++) {
                var child = currentChilds_1[_i];
                var childId = child.id;
                var childIndex = this.getIndex(childId);
                if (typeof id === "string") {
                    this.copy(childId, childIndex, target, id);
                }
            }
        }
        return id;
    };
    TreeCollection.prototype._move = function (id, index, target, targetId, key) {
        if (target === void 0) { target = this; }
        if (targetId === void 0) { targetId = this._root; }
        if (!this.exists(id)) {
            return null;
        }
        if (key) {
            index = index === -1 ? -1 : index + key;
        }
        if (target !== this) {
            if (!helpers_1.isTreeCollection(target)) {
                // move to datacollection
                target.add(helpers_1.copyWithoutInner(this.getItem(id)), index);
                this.remove(id);
                return;
            }
            var returnId = this.copy(id, index, target, targetId);
            this.remove(id);
            return returnId;
        }
        // move inside
        if (!this.canCopy(id, targetId)) {
            return null;
        }
        var parent = this.getParent(id);
        var parentIndex = this.getIndex(id);
        // get item from parent array and move to target array
        var spliced = this._childs[parent].splice(parentIndex, 1)[0];
        spliced.parent = targetId; // need for next moving, ... not best solution, may be full method for get item
        if (!this._childs[parent].length) {
            delete this._childs[parent];
        }
        if (!this.haveItems(targetId)) {
            this._childs[targetId] = [];
        }
        if (index === -1) {
            index = this._childs[targetId].push(spliced);
        }
        else {
            this._childs[targetId].splice(index, 0, spliced);
        }
        this.events.fire(types_1.DataEvents.change, [id, "update", this.getItem(id)]);
        return id;
    };
    TreeCollection.prototype._reset = function (id) {
        var _a;
        if (id) {
            var childs = __spreadArrays(this._childs[id]);
            for (var _i = 0, childs_2 = childs; _i < childs_2.length; _i++) {
                var child = childs_2[_i];
                this.remove(child.id);
            }
        }
        else {
            _super.prototype._reset.call(this);
            var root = this._root;
            this._initChilds = null;
            this._childs = (_a = {}, _a[root] = [], _a);
        }
    };
    TreeCollection.prototype._removeCore = function (id) {
        if (this._pull[id]) {
            var parent_1 = this.getParent(id);
            this._childs[parent_1] = this._childs[parent_1].filter(function (item) { return item.id !== id; });
            if (parent_1 !== this._root && !this._childs[parent_1].length) {
                delete this._childs[parent_1];
            }
            if (this._initChilds && this._initChilds[parent_1]) {
                this._initChilds[parent_1] = this._initChilds[parent_1].filter(function (item) { return item.id !== id; });
                if (parent_1 !== this._root && !this._initChilds[parent_1].length) {
                    delete this._initChilds[parent_1];
                }
            }
            this._fastDeleteChilds(this._childs, id);
            if (this._initChilds) {
                this._fastDeleteChilds(this._initChilds, id);
            }
        }
    };
    TreeCollection.prototype._addToOrder = function (_order, obj, index) {
        var childs = this._childs;
        var initChilds = this._initChilds;
        var parent = obj.parent;
        this._pull[obj.id] = obj;
        _super.prototype._addToOrder.call(this, _order, obj, index);
        addToOrder(childs, obj, parent, index);
        if (initChilds) {
            addToOrder(initChilds, obj, parent, index);
        }
    };
    TreeCollection.prototype._parse_data = function (data, parent) {
        if (parent === void 0) { parent = this._root; }
        var index = this._order.length;
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var obj = data_1[_i];
            if (this.config.init) {
                obj = this.config.init(obj);
            }
            if (typeof obj !== "object") {
                obj = {
                    value: obj,
                };
            }
            obj.id = obj.id ? obj.id : core_1.uid();
            obj.parent =
                typeof obj.parent === "undefined" || obj.parent === null || (obj.parent && obj.$items)
                    ? parent
                    : obj.parent;
            if (this._pull[obj.id]) {
                helpers_1.dhxError("Item already exist");
            }
            this._pull[obj.id] = obj;
            this._order[index++] = obj;
            if (!this._childs[obj.parent]) {
                this._childs[obj.parent] = [];
            }
            this._childs[obj.parent].push(obj);
            if (obj.items && obj.items instanceof Object) {
                this._parse_data(obj.items, obj.id);
            }
        }
    };
    TreeCollection.prototype._fastDeleteChilds = function (target, id) {
        if (this._pull[id]) {
            delete this._pull[id];
        }
        if (!target[id]) {
            return;
        }
        for (var i = 0; i < target[id].length; i++) {
            this._fastDeleteChilds(target, target[id][i].id);
        }
        delete target[id];
    };
    TreeCollection.prototype._recursiveFilter = function (rule, config, current, level, newChilds) {
        var _this = this;
        var childs = this._childs[current];
        if (!childs) {
            return;
        }
        var condition = function (item) {
            switch (config.type) {
                case types_1.TreeFilterType.all: {
                    return true;
                }
                case types_1.TreeFilterType.level: {
                    return level === config.level;
                }
                case types_1.TreeFilterType.leafs: {
                    return !_this.haveItems(item.id);
                }
            }
        };
        if (typeof rule === "function") {
            var customRule = function (item) { return condition(item) && rule(item); };
            var filtered = childs.filter(customRule);
            if (filtered.length) {
                newChilds[current] = filtered;
            }
        }
        else if (rule.by && rule.match) {
            var customRule = function (item) {
                return condition(item) &&
                    item[rule.by] &&
                    item[rule.by]
                        .toString()
                        .toLowerCase()
                        .indexOf(rule.match.toString().toLowerCase()) !== -1;
            };
            var filtered = childs.filter(customRule);
            if (filtered.length) {
                newChilds[current] = filtered;
            }
        }
        for (var _i = 0, childs_3 = childs; _i < childs_3.length; _i++) {
            var child = childs_3[_i];
            this._recursiveFilter(rule, config, child.id, level + 1, newChilds);
        }
    };
    TreeCollection.prototype._serialize = function (parent, fn) {
        var _this = this;
        if (parent === void 0) { parent = this._root; }
        return this.map(function (item) {
            var itemCopy = {};
            for (var key in item) {
                if (key === "parent" || key === "items" || key.startsWith("$")) {
                    continue;
                }
                itemCopy[key] = item[key];
            }
            if (fn) {
                itemCopy = fn(itemCopy);
            }
            if (_this.haveItems(item.id)) {
                itemCopy.items = _this._serialize(item.id, fn);
            }
            return itemCopy;
        }, parent, false);
    };
    return TreeCollection;
}(datacollection_1.DataCollection));
exports.TreeCollection = TreeCollection;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var html_1 = __webpack_require__(3);
var ts_grid_1 = __webpack_require__(76);
var CollectionStore_1 = __webpack_require__(116);
var types_1 = __webpack_require__(9);
var helpers_1 = __webpack_require__(10);
function getPosition(e) {
    var y = e.clientY;
    var element = html_1.locateNode(e);
    if (!element) {
        return null;
    }
    var treeLine = element.childNodes[0];
    if (treeLine) {
        var _a = treeLine.getBoundingClientRect(), top_1 = _a.top, height = _a.height;
        return (y - top_1) / height;
    }
}
function dragEventContent(element, elements, exhaustiveList) {
    if (exhaustiveList === void 0) { exhaustiveList = false; }
    var rect = element.getBoundingClientRect();
    var ghost = document.createElement("div");
    var clone = element.cloneNode(true);
    clone.style.width = rect.width + "px";
    clone.style.height = rect.height + "px";
    clone.style.maxHeight = rect.height + "px";
    clone.style.fontSize = window.getComputedStyle(element.parentElement).fontSize;
    clone.style.opacity = "0.8";
    clone.style.fontSize = window.getComputedStyle(element.parentElement).fontSize;
    if (!exhaustiveList || !elements || !elements.length) {
        ghost.appendChild(clone);
    }
    if (elements && elements.length) {
        elements.forEach(function (node, key) {
            var nodeClone = node.cloneNode(true);
            nodeClone.style.width = rect.width + "px";
            nodeClone.style.height = rect.height + "px";
            nodeClone.style.maxHeight = rect.height + "px";
            nodeClone.style.top = (key + 1) * 12 - rect.height - rect.height * key + "px";
            nodeClone.style.left = (key + 1) * 12 + "px";
            nodeClone.style.opacity = "0.6";
            nodeClone.style.zIndex = "" + (-key - 1);
            ghost.appendChild(nodeClone);
        });
    }
    ghost.className = "dhx_drag-ghost";
    return ghost;
}
var DragManager = /** @class */ (function () {
    function DragManager() {
        var _this = this;
        this._transferData = {};
        this._canMove = true;
        this._isDrag = false;
        this._onMouseMove = function (e) {
            if (!_this._transferData.start) {
                return;
            }
            var pageX = e.targetTouches ? e.targetTouches[0].pageX : e.pageX;
            var pageY = e.targetTouches ? e.targetTouches[0].pageY : e.pageY;
            var _a = _this._transferData, x = _a.x, y = _a.y, start = _a.start, componentId = _a.componentId;
            if (!_this._transferData.ghost) {
                if (Math.abs(x - pageX) < 3 && Math.abs(y - pageY) < 3) {
                    return;
                }
                else {
                    var ghost = _this._onDragStart(start, componentId, e);
                    if (!ghost) {
                        _this._endDrop(e);
                        return;
                    }
                    else {
                        _this._transferData.ghost = ghost;
                        document.body.appendChild(_this._transferData.ghost);
                    }
                }
            }
            _this._moveGhost(pageX, pageY);
            _this._onDrag(e);
        };
        this._onMouseUp = function (e) {
            if (!_this._transferData.x) {
                return;
            }
            if (_this._transferData.ghost) {
                _this._removeGhost();
                _this._onDrop(e);
            }
            else {
                _this._endDrop(e);
            }
            if (!e.targetTouches) {
                document.removeEventListener("mousemove", _this._onMouseMove);
                document.removeEventListener("mouseup", _this._onMouseUp);
            }
            else {
                document.removeEventListener("touchmove", _this._onMouseMove);
                document.removeEventListener("touchend", _this._onMouseUp);
            }
        };
    }
    DragManager.prototype.setItem = function (id, item) {
        CollectionStore_1.collectionStore.setItem(id, item);
    };
    DragManager.prototype.onMouseDown = function (e, source, itemsForGhost) {
        // onmousedown only for target objects
        if (e.which !== 1 && !e.targetTouches) {
            return;
        }
        if (!e.targetTouches) {
            document.addEventListener("mousemove", this._onMouseMove);
            document.addEventListener("mouseup", this._onMouseUp);
        }
        else {
            document.addEventListener("touchmove", this._onMouseMove, false);
            document.addEventListener("touchend", this._onMouseUp, false);
        }
        var item = html_1.locateNode(e, "dhx_id");
        var id = item && item.getAttribute("dhx_id");
        var componentId = html_1.locate(e, "dhx_widget_id");
        if (source && source.includes(id) && source.length > 1) {
            this._transferData.source = source;
            this._itemsForGhost = itemsForGhost;
        }
        else {
            this._transferData.source = [id];
            this._itemsForGhost = null;
        }
        if (id && componentId) {
            var _a = html_1.getBox(item), left = _a.left, top_2 = _a.top;
            var pageX = e.targetTouches ? e.targetTouches[0].pageX : e.pageX;
            var pageY = e.targetTouches ? e.targetTouches[0].pageY : e.pageY;
            this._transferData.initXOffset = pageX - left;
            this._transferData.initYOffset = pageY - top_2;
            this._transferData.x = pageX;
            this._transferData.y = pageY;
            this._transferData.componentId = componentId;
            this._transferData.start = id;
            this._transferData.item = item;
        }
    };
    DragManager.prototype.isDrag = function () {
        return this._isDrag;
    };
    DragManager.prototype._moveGhost = function (x, y) {
        if (this._transferData.ghost) {
            this._transferData.ghost.style.left = x - this._transferData.initXOffset + "px";
            this._transferData.ghost.style.top = y - this._transferData.initYOffset + "px";
        }
    };
    DragManager.prototype._removeGhost = function () {
        document.body.removeChild(this._transferData.ghost);
    };
    DragManager.prototype._onDrop = function (e) {
        if (!this._canMove) {
            this._endDrop(e);
            return;
        }
        var _a = this._transferData, start = _a.start, source = _a.source, target = _a.target, dropComponentId = _a.dropComponentId, dropPosition = _a.dropPosition;
        var data = { start: start, source: source, target: target, dropPosition: dropPosition };
        var component = CollectionStore_1.collectionStore.getItem(dropComponentId);
        var config = component && component.config;
        if (!component || config.dragMode === "source") {
            this._endDrop(e);
            return;
        }
        if (component.events.fire(types_1.DragEvents.beforeDrop, [data, e])) {
            var to = {
                id: target,
                component: component,
            };
            var from = {
                id: start,
                component: this._transferData.component,
            };
            this._move(from, to);
            to.component.events.fire(types_1.DragEvents.afterDrop, [data, e]);
        }
        this._endDrop(e);
    };
    DragManager.prototype._onDragStart = function (id, componentId, e) {
        var component = CollectionStore_1.collectionStore.getItem(componentId);
        var config = component.config;
        var _a = this._transferData, start = _a.start, source = _a.source, target = _a.target;
        var data = {
            start: start,
            source: source,
            target: target,
        };
        if (config.dragMode === "target") {
            return null;
        }
        var ghost = dragEventContent(this._transferData.item, this._itemsForGhost, config.dragItem === "column");
        var ans = component.events.fire(types_1.DragEvents.beforeDrag, [data, e, ghost]);
        if (!ans || !id) {
            return null;
        }
        component.events.fire(types_1.DragEvents.dragStart, [data, e]);
        this._isDrag = true;
        this._toggleTextSelection(true);
        this._transferData.component = component;
        this._transferData.dragConfig = config;
        return ghost;
    };
    DragManager.prototype._onDrag = function (e) {
        var clientX = e.targetTouches ? e.targetTouches[0].clientX : e.clientX;
        var clientY = e.targetTouches ? e.targetTouches[0].clientY : e.clientY;
        var element = document.elementFromPoint(clientX, clientY);
        var collectionId = html_1.locate(element, "dhx_widget_id");
        if (!collectionId) {
            if (this._canMove) {
                this._cancelCanDrop(e);
            }
            return;
        }
        var component = CollectionStore_1.collectionStore.getItem(collectionId);
        var isTreeHeaderOrFooter = !!html_1.locateNodeByClassName(element, "dhx_grid-header") ||
            !!html_1.locateNodeByClassName(element, "dhx_grid-footer");
        var gridConfig = component.config.columns
            ? component.config
            : undefined;
        var isColumnDrag = gridConfig && (gridConfig.dragItem === "both" || gridConfig.dragItem === "column");
        if (isTreeHeaderOrFooter && !isColumnDrag) {
            if (this._canMove) {
                this._cancelCanDrop(e);
            }
            return;
        }
        var id = html_1.locate(element, "dhx_id");
        var rootId = html_1.locate(element, "dhx_root_id");
        if (!id && !rootId) {
            this._cancelCanDrop(e);
            this._transferData.dropComponentId = collectionId;
            this._transferData.target = null;
            this._canDrop(e);
            return;
        }
        var _a = this._transferData, dropComponentId = _a.dropComponentId, start = _a.start, source = _a.source, target = _a.target, componentId = _a.componentId, dropPosition = _a.dropPosition;
        if (component.config.dropBehaviour === "complex") {
            var pos = getPosition(e);
            if (pos <= 0.25) {
                this._transferData.dropPosition = "top";
            }
            else if (pos >= 0.75) {
                this._transferData.dropPosition = "bottom";
            }
            else {
                this._transferData.dropPosition = "in";
            }
        }
        else if ((target === id || target === rootId) && dropComponentId === collectionId) {
            return;
        }
        var from = {
            id: start,
            component: this._transferData.component,
        };
        if (component.config.dragMode === "source") {
            return;
        }
        from.component.events.fire(types_1.DragEvents.dragOut, [
            {
                start: start,
                source: source,
                target: target,
            },
            e,
        ]);
        if (collectionId !== componentId ||
            !helpers_1.isTreeCollection(from.component.data) ||
            (helpers_1.isTreeCollection(from.component.data) && from.component.data.canCopy(from.id, id))) {
            this._cancelCanDrop(e); // clear last
            this._transferData.target = id || rootId;
            this._transferData.dropComponentId = collectionId;
            var canMove = from.component.events.fire(types_1.DragEvents.dragIn, [
                {
                    start: start,
                    source: source,
                    target: target,
                    dropPosition: dropPosition,
                },
                e,
            ]);
            if (canMove) {
                this._canDrop(e);
            }
        }
        else {
            this._cancelCanDrop(e);
        }
    };
    DragManager.prototype._move = function (from, to) {
        var fromData = from.component.data;
        var toData = to.component.data;
        var index = 0;
        var componentId = to.id;
        var behaviour = helpers_1.isTreeCollection(toData) ? to.component.config.dropBehaviour : undefined;
        var gridConfig = from.component.config.columns
            ? from.component.config
            : undefined;
        var isColumnDrag = gridConfig &&
            (gridConfig.dragItem === "both" || gridConfig.dragItem === "column") &&
            gridConfig.columns.map(function (c) { return c.id; }).filter(function (id) { return id === from.id || id === to.id; }).length;
        if (isColumnDrag && from.component === to.component && from.id !== to.id) {
            var grid = from.component;
            var currentCols = grid.config.columns.map(function (c) { return (__assign({}, c)); });
            var sourceIndex = currentCols.findIndex(function (c) { return c.id === from.id; });
            var componentIndex = currentCols.findIndex(function (c) { return c.id === to.id; });
            currentCols.splice(componentIndex, 0, currentCols.splice(sourceIndex, 1)[0]);
            grid.setColumns(currentCols);
            grid.paint();
            return;
        }
        else if (isColumnDrag && from.component instanceof ts_grid_1.ProGrid && to.component instanceof ts_grid_1.ProGrid) {
            var grid = from.component;
            var nextGrid_1 = to.component;
            var currentCols = grid.config.columns.map(function (c) { return (__assign({}, c)); });
            var sourceIndex = currentCols.findIndex(function (c) { return c.id === from.id; });
            var nextGridCols = nextGrid_1.config.columns.map(function (c) { return (__assign({}, c)); });
            var componentIndex = nextGridCols.findIndex(function (c) { return c.id === to.id; });
            var isIdExsist = nextGridCols.findIndex(function (item) { return item.id === from.id; });
            var copyId_1 = isIdExsist >= 0 ? from.id + "_copy" : from.id;
            var currentColumnData_1 = [];
            grid.data.forEach(function (item) {
                var _a;
                currentColumnData_1.push((_a = {}, _a[copyId_1] = item[from.id], _a));
            });
            nextGrid_1.data.forEach(function (item, index) {
                nextGrid_1.data.update(item.id, __assign(__assign({}, item), currentColumnData_1[index]));
            });
            var col = currentCols.splice(sourceIndex, 1)[0];
            col.id = copyId_1;
            nextGridCols.splice(componentIndex, 0, col);
            nextGrid_1.setColumns(nextGridCols);
            nextGrid_1.paint();
            grid.setColumns(currentCols);
            grid.paint();
            return;
        }
        var isRootParent = to.id === to.component.config.rootParent;
        switch (behaviour) {
            case "child":
                break;
            case "sibling":
                componentId = toData.getParent(componentId);
                index = toData.getIndex(to.id) + 1;
                break;
            case "complex": {
                var dropPosition = this._transferData.dropPosition;
                if (isRootParent) {
                    componentId = to.id;
                    index = toData.getLength();
                }
                else {
                    if (dropPosition === "top") {
                        componentId = toData.getParent(componentId);
                        index = toData.getIndex(to.id);
                    }
                    else if (dropPosition === "bottom") {
                        componentId = toData.getParent(componentId);
                        index = toData.getIndex(to.id) + 1;
                    }
                }
                break;
            }
            default:
                // list move
                if (!to.id) {
                    index = -1;
                }
                else if (from.component === to.component &&
                    toData.getIndex(from.id) < toData.getIndex(to.id)) {
                    index = toData.getIndex(to.id) - 1;
                }
                else {
                    index = toData.getIndex(to.id);
                }
        }
        if (this._transferData.dragConfig.dragCopy) {
            if (this._transferData.source instanceof Array && this._transferData.source.length > 1) {
                this._transferData.source.map(function (selctedId) {
                    fromData.copy(selctedId, index, toData, componentId);
                    if (index > -1) {
                        index++;
                    }
                });
            }
            else {
                fromData.copy(from.id, index, toData, componentId);
            }
        }
        else {
            if (this._transferData.source instanceof Array && this._transferData.source.length > 1) {
                this._transferData.source.map(function (selctedId) {
                    fromData.move(selctedId, index, toData, componentId);
                    if (index > -1) {
                        index++;
                    }
                });
            }
            else {
                fromData.move(from.id, index, toData, componentId);
            }
        }
    };
    DragManager.prototype._endDrop = function (e) {
        this._toggleTextSelection(false);
        if (this._transferData.component) {
            var _a = this._transferData, start = _a.start, source = _a.source, target = _a.target;
            var data = { start: start, source: source, target: target };
            this._transferData.component.events.fire(types_1.DragEvents.afterDrag, [data, e]);
        }
        this._cancelCanDrop(e);
        this._canMove = true;
        this._transferData = {};
        this._transferData.target = null;
        this._transferData.dropComponentId = null;
    };
    DragManager.prototype._cancelCanDrop = function (e) {
        this._canMove = false;
        this._isDrag = false;
        var _a = this._transferData, start = _a.start, source = _a.source, target = _a.target, dropComponentId = _a.dropComponentId;
        var data = {
            start: start,
            source: source,
            target: target,
        };
        var collection = CollectionStore_1.collectionStore.getItem(dropComponentId);
        if (collection && target) {
            collection.events.fire(types_1.DragEvents.cancelDrop, [data, e]);
        }
        this._transferData.dropComponentId = null;
        this._transferData.target = null;
    };
    DragManager.prototype._canDrop = function (e) {
        this._canMove = true;
        var _a = this._transferData, start = _a.start, source = _a.source, target = _a.target, dropPosition = _a.dropPosition;
        var data = {
            start: start,
            source: source,
            target: target,
            dropPosition: dropPosition,
        };
        var component = CollectionStore_1.collectionStore.getItem(this._transferData.dropComponentId);
        if (component && this._transferData.target) {
            component.events.fire(types_1.DragEvents.canDrop, [data, e]);
        }
    };
    DragManager.prototype._toggleTextSelection = function (add) {
        if (add) {
            document.body.classList.add("dhx_no-select");
        }
        else {
            document.body.classList.remove("dhx_no-select");
        }
    };
    return DragManager;
}());
var dhx = (window.dhxHelpers = window.dhxHelpers || {});
dhx.dragManager = dhx.dragManager || new DragManager();
exports.dragManager = dhx.dragManager;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(37));
__export(__webpack_require__(115));
__export(__webpack_require__(4));
__export(__webpack_require__(24));
var Cells_1 = __webpack_require__(23);
exports.getTreeCell = Cells_1.getTreeCell;
__export(__webpack_require__(11));
__export(__webpack_require__(8));


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = __webpack_require__(8);
var ts_data_1 = __webpack_require__(7);
var core_1 = __webpack_require__(1);
function fillArray(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = value;
    }
    return arr;
}
var Exporter = /** @class */ (function () {
    function Exporter(_view) {
        this._view = _view;
    }
    Exporter.prototype.xlsx = function (config) {
        return this._export(config);
    };
    Exporter.prototype.csv = function (config) {
        if (config === void 0) { config = {}; }
        config = __assign({
            asFile: true,
            rowDelimiter: "\n",
            columnDelimiter: ",",
            skipHeader: 0,
        }, config);
        var csv;
        if ("getRoot" in this._view.data && config.flat) {
            csv = this.getFlatCSV(config);
        }
        else {
            csv = this._getCSV(config);
        }
        var name = config.name || "grid_export";
        if (config.asFile) {
            core_1.downloadFile(csv, name + ".csv", "text/csv");
        }
        return csv;
    };
    Exporter.prototype._export = function (config) {
        if (config === void 0) { config = {}; }
        var configCols = this._view.config.columns.filter(function (i) { return !i.hidden; });
        var rowsIndexMap = {};
        var headers = main_1.transpose(configCols.map(function (col) { return col.header.map(function (level) { return level.text || " "; }); }));
        var columns = [];
        var uniqStyles = {
            default: {
                color: "#000000",
                background: "#FFFFFF",
                fontSize: 14,
            },
        };
        var cells = [];
        var columnsIndexMap = {};
        var data = this._view.data.serialize().map(function (row, i) {
            rowsIndexMap[row.id] = i;
            var rowData = configCols.map(function (col, k) {
                columnsIndexMap[col.id] = k;
                return main_1.removeHTMLTags(row[col.id]);
            });
            return rowData;
        });
        var footer = [];
        var content = this._view.content;
        var _loop_1 = function (col) {
            if (col.footer) {
                var id_1 = col.id;
                var columnData = this_1._view.data.serialize().reduce(function (items, item) {
                    if (item[id_1] !== undefined && item[id_1] !== "" && !isNaN(item[id_1])) {
                        items.push(parseFloat(item[id_1]));
                    }
                    return items;
                }, []);
                var roots = columnData;
                if (this_1._view.config.type === "tree") {
                    var datacollection_1 = this_1._view.data;
                    var data_1 = datacollection_1.serialize();
                    roots = data_1.reduce(function (total, item) {
                        if (item.$level === 0) {
                            if (item[id_1] !== undefined && item[id_1] !== "" && !isNaN(item[id_1])) {
                                total.push(parseFloat(item[id_1]) || 0);
                            }
                            else {
                                var value_1 = 0;
                                datacollection_1.eachChild(item.id, function (cell) {
                                    if (!datacollection_1.haveItems(cell.id)) {
                                        value_1 += parseFloat(cell[id_1]);
                                    }
                                });
                                total.push(value_1);
                            }
                        }
                        return total;
                    }, []);
                }
                if (col.footer[0].content) {
                    var val = content[col.footer[0].content].calculate(columnData, roots);
                    footer.push(val);
                }
                else {
                    footer.push(col.footer[0].css || col.footer[0].text || " ");
                }
            }
            columns.push({ width: col.width });
            for (var key in col.$cellCss) {
                var colStyle = col.$cellCss[key];
                var colStyleHash = colStyle
                    .split("")
                    .reduce(function (h, letter) {
                    var hh = (h << 5) - h + letter.charCodeAt(0);
                    return Math.abs(hh & hh);
                }, 0)
                    .toString();
                if (!uniqStyles[colStyleHash]) {
                    var cont = document.body;
                    var css = main_1.getStyleByClass(colStyle, cont, "dhx_grid-row", uniqStyles.default);
                    if (css) {
                        uniqStyles[colStyleHash] = css;
                    }
                }
                if (uniqStyles[colStyleHash]) {
                    cells.push([rowsIndexMap[key], configCols.indexOf(col), colStyleHash]);
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, configCols_1 = configCols; _i < configCols_1.length; _i++) {
            var col = configCols_1[_i];
            _loop_1(col);
        }
        if (footer.length) {
            data.push(footer);
        }
        var exportData = {
            name: config.name || "data",
            columns: columns,
            header: headers,
            data: data,
            styles: {
                cells: cells,
                css: uniqStyles,
            },
        };
        if (config.url) {
            var form_1 = document.createElement("form");
            form_1.setAttribute("target", "_blank");
            form_1.setAttribute("action", config.url);
            form_1.setAttribute("method", "POST");
            form_1.style.visibility = "hidden";
            var input = document.createElement("textarea");
            input.setAttribute("name", "data");
            input.value = JSON.stringify(exportData);
            form_1.appendChild(input);
            document.body.appendChild(form_1);
            form_1.submit();
            setTimeout(function () {
                form_1.parentNode.removeChild(form_1);
            }, 100);
        }
        return exportData;
    };
    Exporter.prototype.getFlatCSV = function (config) {
        var treeData = this._view.data;
        var root = treeData.getRoot();
        var firstCol = this._view.config.columns[0];
        var maxLevel = treeData.getMaxLevel();
        var getParentsChain = function (item, data) {
            var parents = [];
            for (var i = 0; i <= maxLevel; i++) {
                if (item && item[firstCol.id]) {
                    parents[item.$level] = item[firstCol.id];
                    var parent_1 = data.getParent(item.id, true);
                    if (parent_1 && parent_1.id) {
                        item = parent_1;
                    }
                    else {
                        item = null;
                    }
                }
                else {
                    parents[i] = "";
                }
            }
            return parents;
        };
        var total = "";
        treeData.eachChild(root, function (item) {
            var parents = getParentsChain(item, treeData).join(config.columnDelimiter);
            total +=
                parents +
                    Object.keys(item).reduce(function (values, key, i) {
                        if (key !== "id" && key !== "parent" && !key.startsWith("$") && i !== 0) {
                            return values + config.columnDelimiter + (item[key] === null ? "" : item[key]);
                        }
                        return values;
                    }, "");
            total += config.rowDelimiter;
        });
        var exportData = this._export(config);
        // [dirty]
        var emptyHeaders = fillArray(new Array(maxLevel + 1), "");
        var headers = exportData.header.map(function (header) {
            header.splice.apply(header, __spreadArrays([0, 1], emptyHeaders));
            return header;
        });
        var head = new ts_data_1.CsvDriver(config).serialize(headers, true) + config.rowDelimiter;
        return head + total;
    };
    Exporter.prototype._getCSV = function (config) {
        var exportData = this._export(config);
        var headers = exportData.header;
        var driver = new ts_data_1.CsvDriver(config);
        var head = driver.serialize(headers, true);
        var readyData = driver.serialize(exportData.data, true);
        return head + "\n" + readyData;
    };
    return Exporter;
}());
exports.Exporter = Exporter;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var core_1 = __webpack_require__(1);
var ts_data_1 = __webpack_require__(7);
var events_1 = __webpack_require__(5);
var types_1 = __webpack_require__(4);
var Selection = /** @class */ (function () {
    function Selection(grid, config, events) {
        var types = ["cell", "row", "complex"];
        this._grid = grid;
        this.config = config;
        this._selectedCell = undefined;
        this._oldSelectedCell = undefined;
        this._selectedCells = [];
        this._type = types.includes(this._grid.config.selection) ? this._grid.config.selection : "complex";
        this._multiselection = grid.config.multiselection && this._type !== "complex";
        this.events = events || new events_1.EventSystem(this);
        this._init();
    }
    Selection.prototype.setCell = function (row, col, ctrlUp, shiftUp) {
        var _this = this;
        if (ctrlUp === void 0) { ctrlUp = false; }
        if (shiftUp === void 0) { shiftUp = false; }
        if (this.config.disabled ||
            this._grid.config.$editable ||
            (!this._multiselection &&
                this._oldSelectedCell &&
                this._oldSelectedCell.row.id === ((row && row.id) || row) &&
                this._oldSelectedCell.column.id === ((col && col.id) || col)) ||
            (this._multiselection &&
                this._selectedCells.length === 1 &&
                this._selectedCells[0].row.id === ((row && row.id) || row) &&
                this._selectedCells[0].column.id === ((col && col.id) || col))) {
            return;
        }
        if ((this._multiselection && !ctrlUp && !shiftUp) || !this._multiselection) {
            this._selectedCells.length && this._removeCells();
        }
        if (this._multiselection &&
            this._type === "cell" &&
            this._selectedCells.find(function (item) {
                return item.row.id === ((row && row.id) || row) && item.column.id === ((col && col.id) || col);
            })) {
            this.removeCell((row && row.id) || row, (col && col.id) || col);
            return;
        }
        var oldSelectedCell = this._oldSelectedCell ? this._oldSelectedCell : undefined;
        row = this._grid.data.getItem((row && row.id) || row);
        var colums = this._grid.config.columns.filter(function (col) { return !col.hidden; });
        if (!col) {
            col = colums[0];
        }
        col = this._grid.getColumn(col.id || col);
        if (!col || !row) {
            return;
        }
        col = col.id ? col : this._grid.getColumn(col);
        if (!this.events.fire(types_1.GridSelectionEvents.beforeSelect, [row, col]))
            return;
        this._selectedCell = { row: row, column: col };
        this.events.fire(types_1.GridSelectionEvents.afterSelect, [row, col]);
        if (this._multiselection && shiftUp && oldSelectedCell) {
            this._oldSelectedCell = oldSelectedCell;
        }
        else {
            this._oldSelectedCell = this._selectedCell;
        }
        if (this._multiselection) {
            if (shiftUp && !ctrlUp && this._selectedCells.length > 0) {
                var startRowIndex = this._grid.data.getIndex(this._oldSelectedCell.row.id);
                var endRowIndex = this._grid.data.getIndex(row.id);
                if (startRowIndex > endRowIndex) {
                    var temp = startRowIndex;
                    startRowIndex = endRowIndex;
                    endRowIndex = temp;
                }
                this._selectedCells = [this._oldSelectedCell];
                if (this._type === "cell") {
                    var columnsIds = colums.map(function (e) { return e.id; });
                    var startColIndex = columnsIds.indexOf(oldSelectedCell.column.id);
                    var endColIndex = columnsIds.indexOf(col.id);
                    if (startColIndex !== -1 && endColIndex !== -1) {
                        if (startColIndex > endColIndex) {
                            var temp = startColIndex;
                            startColIndex = endColIndex;
                            endColIndex = temp;
                        }
                        var columns_1 = colums.slice(startColIndex, endColIndex + 1);
                        this._grid.data.mapRange(startRowIndex, endRowIndex, function (item) {
                            columns_1.forEach(function (column) {
                                var cell = { row: item, column: column };
                                if (_this._findIndex(cell) === -1) {
                                    _this._selectedCells.push(cell);
                                }
                            });
                        });
                    }
                }
                else {
                    this._grid.data.mapRange(startRowIndex, endRowIndex, function (item) {
                        var cell = { row: item, column: col };
                        if (_this._findIndex(cell) === -1) {
                            _this._selectedCells.push(cell);
                        }
                    });
                }
            }
            else if (ctrlUp && !shiftUp) {
                var cellIndex = this._findIndex();
                if (cellIndex === -1) {
                    this._selectedCells.push({
                        row: this._selectedCell.row,
                        column: this._selectedCell.column,
                    });
                }
                else {
                    this._selectedCells.length > 1 && this._selectedCells.splice(cellIndex, 1);
                }
            }
            else {
                this._selectedCells = [this._selectedCell];
            }
        }
        else {
            this._selectedCells = [this._selectedCell];
        }
        dom_1.awaitRedraw().then(function () {
            _this._grid.paint();
        });
    };
    Selection.prototype.getCell = function () {
        return this._selectedCell;
    };
    Selection.prototype.getCells = function () {
        return this._selectedCells;
    };
    Selection.prototype.toHTML = function () {
        var _this = this;
        if (this._isUnselected()) {
            return;
        }
        if (this._multiselection) {
            var selection_1 = [];
            this._selectedCells.forEach(function (cell, index, array) {
                selection_1.push(_this._toHTML(cell.row, cell.column, index === array.length - 1 || _this._type === "cell"));
            });
            return selection_1;
        }
        else {
            return this._toHTML(this._selectedCell.row, this._selectedCell.column, true);
        }
    };
    Selection.prototype.disable = function () {
        this.removeCell();
        this.config.disabled = true;
        this._grid.paint();
    };
    Selection.prototype.enable = function () {
        this.config.disabled = false;
        this._grid.paint();
    };
    Selection.prototype.removeCell = function (rowId, colId) {
        var _this = this;
        if (rowId && colId && this._type === "cell") {
            var cell = this._selectedCells.find(function (_a) {
                var row = _a.row, column = _a.column;
                return row.id == rowId && column.id == colId;
            });
            cell && this._removeCell(cell.row, cell.column);
        }
        else if (rowId) {
            var cells = this._selectedCells.filter(function (_a) {
                var row = _a.row;
                return row.id == rowId;
            });
            cells.forEach(function (_a) {
                var row = _a.row, column = _a.column;
                _this._removeCell(row, column);
            });
        }
        else {
            this._removeCells();
        }
        dom_1.awaitRedraw().then(function () {
            _this._grid.paint();
        });
    };
    Selection.prototype._removeCell = function (row, col) {
        if (!row || !col || !row.id || !col.id)
            return;
        if (!this.events.fire(types_1.GridSelectionEvents.beforeUnSelect, [row, col]))
            return;
        var index = this._selectedCells.findIndex(function (item) { return item.row.id === row.id && item.column.id === col.id; });
        this._selectedCells.splice(index, 1);
        if (this._selectedCell &&
            col.id === this._selectedCell.column.id &&
            row.id === this._selectedCell.row.id) {
            this._selectedCell = this._selectedCells[this._selectedCells.length - 1] || undefined;
        }
        this.events.fire(types_1.GridSelectionEvents.afterUnSelect, [row, col]);
    };
    Selection.prototype._removeCells = function () {
        var _this = this;
        this._selectedCells.forEach(function (item) {
            _this._removeCell(item && item.row, item && item.column);
        });
        this._selectedCells.length && this._removeCells();
    };
    Selection.prototype._init = function () {
        var _this = this;
        this._grid.events.on(types_1.GridEvents.cellClick, function (row, col, e) {
            _this.setCell(row, col, e.ctrlKey || e.metaKey, e.shiftKey);
        });
        this._grid.data.events.on(ts_data_1.DataEvents.beforeRemove, function (item) {
            if (item && _this._selectedCell && _this._selectedCell.row) {
                var index = _this._grid.data.getIndex(String(_this._selectedCell.row.id));
                var id = _this._grid.data.getId(index + 1);
                if (id) {
                    _this.setCell(id);
                }
                else {
                    var newId = _this._grid.data.getId(index - 1);
                    if (newId) {
                        _this.setCell(newId);
                    }
                }
                _this._grid.paint();
            }
        });
    };
    Selection.prototype._toHTML = function (row, column, last) {
        if (last === void 0) { last = false; }
        var colums = this._grid.config.columns.filter(function (col) { return !col.hidden; });
        var fixedCols = this._grid.config.leftSplit ? colums.slice(0, this._grid.config.leftSplit) : [];
        var fixedColsIds = fixedCols.map(function (col) { return col.id; });
        var fixedColsWidth = fixedCols.reduce(function (total, coll) { return (total += coll.$width); }, 0);
        var fixedCell;
        var cellRect = this._grid.getCellRect(row.id, column.id);
        var scrollState = this._grid.getScrollState();
        if (fixedColsIds.includes(column.id) && last) {
            fixedCell = dom_1.el(".dhx_grid-selected-cell", {
                style: {
                    width: this._grid.config.leftSplit === fixedColsIds.indexOf(column.id) + 1
                        ? cellRect.width - 1
                        : cellRect.width,
                    height: cellRect.height,
                    top: cellRect.y,
                    left: cellRect.x + scrollState.x,
                    position: "absolute",
                    zIndex: 10,
                },
            });
        }
        var isBehindFixedCols = fixedCols.length && fixedColsWidth > cellRect.x - scrollState.x;
        var width = cellRect.width;
        if (isBehindFixedCols) {
            width -= fixedColsWidth - (cellRect.x - scrollState.x);
        }
        var totalWidth = this._grid.config.$totalWidth;
        return dom_1.el(".dhx_grid-selection", {
            style: {
                zIndex: fixedCell ||
                    this._grid.config.selection === "row" ||
                    this._grid.config.selection === "complex"
                    ? 20
                    : 10,
            },
        }, [
            (this._type === "row" || this._type === "complex") &&
                dom_1.el(".dhx_grid-selected-row", {
                    style: {
                        width: fixedCols.length ? totalWidth - scrollState.x : totalWidth,
                        height: cellRect.height - 1,
                        top: cellRect.y,
                        left: fixedCols.length ? scrollState.x : 0,
                        position: "absolute",
                    },
                }),
            ((this._type === "cell" || this._type === "complex") && fixedCell) ||
                ((this._type === "cell" || this._type === "complex") &&
                    last &&
                    dom_1.el(".dhx_grid-selected-cell", {
                        style: {
                            width: width,
                            height: cellRect.height - 1,
                            top: cellRect.y,
                            left: isBehindFixedCols ? fixedColsWidth + scrollState.x : cellRect.x,
                            position: "absolute",
                            display: width > 0 ? "flex" : "none",
                            borderLeft: isBehindFixedCols ? "none" : null,
                        },
                    })),
        ]);
    };
    Selection.prototype._isUnselected = function () {
        return (!this._selectedCell ||
            !this._selectedCell.row ||
            !this._selectedCell.column ||
            this._selectedCells.length === 0);
    };
    Selection.prototype._findIndex = function (cell) {
        var _this = this;
        if (cell === void 0) { cell = this._selectedCell; }
        var cellIndex = -1;
        this._selectedCells.some(function (element, index) {
            if (_this._type === "cell") {
                if (core_1.compare(element.row, cell.row) && core_1.compare(element.column, cell.column)) {
                    cellIndex = index;
                    return true;
                }
            }
            else if (_this._type === "row") {
                if (core_1.compare(element.row, cell.row)) {
                    cellIndex = index;
                    return true;
                }
            }
        });
        return cellIndex;
    };
    return Selection;
}());
exports.Selection = Selection;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(4);
var InputEditor_1 = __webpack_require__(80);
var SelectEditor_1 = __webpack_require__(81);
var DateEditor_1 = __webpack_require__(82);
var CheckboxEditor_1 = __webpack_require__(96);
var ComboboxEditor_1 = __webpack_require__(97);
var TextAreaEditor_1 = __webpack_require__(106);
var lastEditor = {
    cell: {
        row: null,
        col: null,
    },
    editor: null,
    gridId: null,
};
var editHandler;
function getEditor(row, col, conf) {
    var type = col.type === "boolean" ? "checkbox" : conf.$editable.editorType;
    if (typeof type === "undefined")
        type = conf.autoHeight ? "textarea" : "input";
    if (lastEditor.cell.row === row.id &&
        lastEditor.cell.col === col.id &&
        lastEditor.gridId === conf.gridId) {
        return lastEditor.editor;
    }
    if (type !== "checkbox") {
        lastEditor = {
            cell: {
                row: row.id,
                col: col.id,
            },
            editor: lastEditor.editor,
            gridId: conf.gridId,
        };
    }
    if (!editHandler) {
        editHandler = function () {
            lastEditor = {
                cell: {
                    row: null,
                    col: null,
                },
                editor: null,
                gridId: null,
            };
        };
        conf.events.on(types_1.GridEvents.afterEditEnd, editHandler);
    }
    switch (type) {
        case "input":
            return (lastEditor.editor = new InputEditor_1.InputEditor(row, col, conf));
        case "textarea":
            return (lastEditor.editor = new TextAreaEditor_1.TextAreaEditor(row, col, conf));
        case "select":
            return (lastEditor.editor = new SelectEditor_1.SelectEditor(row, col, conf));
        case "datePicker":
            return (lastEditor.editor = new DateEditor_1.DateEditor(row, col, conf));
        case "checkbox":
            return new CheckboxEditor_1.CheckboxEditor(row, col, conf);
        case "combobox":
            return (lastEditor.editor = new ComboboxEditor_1.ComboboxEditor(row, col, conf));
        default:
            return (lastEditor.editor = new InputEditor_1.InputEditor(row, col, conf));
    }
}
exports.getEditor = getEditor;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var types_1 = __webpack_require__(4);
var core_1 = __webpack_require__(1);
var InputEditor = /** @class */ (function () {
    function InputEditor(row, col, config) {
        this._config = config;
        this._cell = { row: row, col: col };
        this._initHandlers();
    }
    InputEditor.prototype.endEdit = function (withoutSave) {
        var value;
        if (!withoutSave) {
            value = this._input.value;
        }
        if (this._config.events.fire(types_1.GridEvents.beforeEditEnd, [value, this._cell.row, this._cell.col])) {
            this._input.removeEventListener("blur", this._handlers.onBlur);
            this._input.removeEventListener("change", this._handlers.onChange);
            if (this._cell.col.type !== "string" && core_1.isNumeric(value)) {
                value = parseFloat(value);
            }
            this._cell.row = this._config.datacollection.getItem(this._cell.row.id);
            this._config.events.fire(types_1.GridEvents.afterEditEnd, [value, this._cell.row, this._cell.col]);
        }
        else {
            this._input.focus();
        }
    };
    InputEditor.prototype.toHTML = function () {
        var content = this._cell.row[this._cell.col.id];
        if (this._input) {
            content = this._input.value;
        }
        this._config.$editable.editor = this;
        return dom_1.el("input.dhx_cell-editor.dhx_cell-editor__input", {
            _hooks: {
                didInsert: this._handlers.didInsert,
            },
            _key: "cell_editor",
            dhx_id: "cell_editor",
            value: content,
        });
    };
    InputEditor.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            onBlur: function () {
                _this.endEdit();
            },
            onChange: function () {
                _this.endEdit();
            },
            didInsert: function (node) {
                var input = node.el;
                _this._input = input;
                input.focus();
                input.setSelectionRange(0, input.value.length);
                input.addEventListener("change", _this._handlers.onChange);
                input.addEventListener("blur", _this._handlers.onBlur);
            },
        };
    };
    return InputEditor;
}());
exports.InputEditor = InputEditor;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var types_1 = __webpack_require__(4);
var SelectEditor = /** @class */ (function () {
    function SelectEditor(row, col, config) {
        this._config = config;
        this._cell = { row: row, col: col };
        this._initHandlers();
    }
    SelectEditor.prototype.endEdit = function (withoutSave) {
        var value;
        if (!withoutSave) {
            value = this._input.value;
        }
        if (this._config.events.fire(types_1.GridEvents.beforeEditEnd, [value, this._cell.row, this._cell.col])) {
            this._input.removeEventListener("blur", this._handlers.onBlur);
            this._cell.row = this._config.datacollection.getItem(this._cell.row.id);
            this._config.events.fire(types_1.GridEvents.afterEditEnd, [value, this._cell.row, this._cell.col]);
        }
        else {
            this._input.focus();
        }
    };
    SelectEditor.prototype.toHTML = function () {
        var content = this._cell.col.options || [];
        var selected = this._cell.row[this._cell.col.id];
        if (this._input) {
            selected = this._input.options[this._input.selectedIndex].value;
        }
        var options = content.map(function (item) {
            return dom_1.el("option", {
                selected: item === selected,
            }, item);
        });
        this._config.$editable.editor = this;
        return dom_1.el("select.dhx_cell-editor.dhx_cell-editor__select", {
            _hooks: {
                didInsert: this._handlers.didInsert,
            },
            _key: "cell_editor",
            dhx_id: "cell_editor",
        }, options);
    };
    SelectEditor.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            onBlur: function () {
                _this.endEdit();
            },
            didInsert: function (node) {
                var input = node.el;
                _this._input = input;
                input.focus();
                input.addEventListener("blur", _this._handlers.onBlur);
            },
        };
    };
    return SelectEditor;
}());
exports.SelectEditor = SelectEditor;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var types_1 = __webpack_require__(4);
var ts_calendar_1 = __webpack_require__(83);
var date_1 = __webpack_require__(16);
var ts_popup_1 = __webpack_require__(25);
var DateEditor = /** @class */ (function () {
    function DateEditor(row, col, config) {
        var _this = this;
        this._config = config;
        this._cell = { row: row, col: col };
        this._calendar = new ts_calendar_1.Calendar(null, { dateFormat: col.format });
        var value = this._cell.row[this._cell.col.id];
        var format = this._calendar.config.dateFormat;
        if (date_1.stringToDate(value, format, true) || value instanceof Date) {
            this._calendar.setValue(value);
            this._value = this._calendar.getValue();
            this._cell.row[this._cell.col.id] = this._value;
        }
        this._popup = new ts_popup_1.Popup({ css: "dhx_widget--bordered" });
        this._popup.attach(this._calendar);
        this._calendar.events.on(ts_calendar_1.CalendarEvents.change, function () {
            _this.endEdit(false, true);
        });
        this._popup.events.on(ts_popup_1.PopupEvents.afterHide, function () {
            _this.endEdit();
        });
        this._initHandlers();
    }
    DateEditor.prototype.endEdit = function (withoutSave, calendarChange) {
        var _this = this;
        if (!this._handlers) {
            return;
        }
        var format = this._calendar.config.dateFormat;
        var value = this._cell.row[this._cell.col.id];
        if (!withoutSave) {
            if (value instanceof Date || calendarChange) {
                this._value = this._calendar.getValue();
                this._input.value = this._value;
                this._popup.hide();
                return;
            }
            else if (date_1.stringToDate(this._input.value, format, true) &&
                this._input.value.length === value.length) {
                this._value = this._input.value;
            }
        }
        if (this._config.events.fire(types_1.GridEvents.beforeEditEnd, [this._value, this._cell.row, this._cell.col])) {
            this._input.removeEventListener("focus", this._handlers.onFocus);
            this._input.removeEventListener("change", this._handlers.onChange);
            document.removeEventListener("mousedown", this._handlers.onOuterClick);
            dom_1.awaitRedraw().then(function () {
                _this._popup.destructor();
                _this._calendar.destructor();
            });
            this._cell.row = this._config.datacollection.getItem(this._cell.row.id);
            this._config.events.fire(types_1.GridEvents.afterEditEnd, [this._value, this._cell.row, this._cell.col]);
        }
        else {
            this._input.focus();
        }
    };
    DateEditor.prototype.toHTML = function () {
        var value = this._cell.row[this._cell.col.id];
        this._config.$editable.editor = this;
        document.addEventListener("mousedown", this._handlers.onOuterClick);
        return dom_1.el("input.dhx_cell-editor.dhx_cell-editor__input.dhx_cell-editor__datepicker", {
            _hooks: {
                didInsert: this._handlers.didInsert,
            },
            _key: "cell_editor",
            dhx_id: "cell_editor",
            value: value,
        });
    };
    DateEditor.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            onFocus: function () {
                dom_1.awaitRedraw().then(function () {
                    _this._popup.show(_this._input, {
                        centering: true,
                        mode: "bottom",
                    });
                });
            },
            onChange: function () {
                _this.endEdit();
            },
            onOuterClick: function (e) {
                if (e.target instanceof Node) {
                    var isInput = _this._input && _this._input.contains(e.target);
                    var isPopup = _this._popup &&
                        _this._popup.getRootNode() &&
                        _this._popup.getRootNode().contains(e.target);
                    if (!(isInput || isPopup)) {
                        _this._popup.hide();
                    }
                }
            },
            didInsert: function (node) {
                var input = node.el;
                _this._input = input;
                _this._input.addEventListener("focus", _this._handlers.onFocus);
                _this._input.addEventListener("change", _this._handlers.onChange);
                input.focus();
                input.setSelectionRange(input.value.length, input.value.length);
            },
        };
    };
    return DateEditor;
}());
exports.DateEditor = DateEditor;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(84));
__export(__webpack_require__(43));


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(5);
var view_1 = __webpack_require__(6);
var ts_timepicker_1 = __webpack_require__(85);
var helper_1 = __webpack_require__(95);
var date_1 = __webpack_require__(16);
var types_1 = __webpack_require__(43);
var Calendar = /** @class */ (function (_super) {
    __extends(Calendar, _super);
    function Calendar(container, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, container, core_1.extend({
            weekStart: "sunday",
            thisMonthOnly: false,
            dateFormat: window && window.dhx && window.dhx.dateFormat,
            width: "250px",
        }, config)) || this;
        _this._selected = [];
        _this.events = new events_1.EventSystem();
        _this.config.disabledDates = _this.config.disabledDates || _this.config.block; // TODO: remove suite_7.0
        _this.config.mode = _this.config.mode || _this.config.view; // TODO: remove suite_7.0
        if (!_this.config.dateFormat) {
            if (_this.config.timePicker) {
                if (_this.config.timeFormat === 12) {
                    _this.config.dateFormat = "%d/%m/%y %h:%i %A";
                }
                else {
                    _this.config.dateFormat = "%d/%m/%y %H:%i";
                }
            }
            else {
                _this.config.dateFormat = "%d/%m/%y";
            }
        }
        if (_this.config.value) {
            _this._setSelected(_this.config.value);
        }
        if (_this.config.date) {
            _this._currentDate = date_1.DateHelper.toDateObject(_this.config.date, _this.config.dateFormat);
        }
        else if (_this._getSelected()) {
            _this._currentDate = date_1.DateHelper.copy(_this._getSelected());
        }
        else {
            _this._currentDate = new Date();
        }
        switch (_this.config.mode) {
            case "month":
                _this._currentViewMode = "month";
                break;
            case "year":
                _this._currentViewMode = "year";
                break;
            default:
                _this._currentViewMode = "calendar";
        }
        _this._initHandlers();
        if (_this.config.timePicker) {
            _this._timepicker = new ts_timepicker_1.Timepicker(null, {
                timeFormat: _this.config.timeFormat,
                controls: true,
            });
            var initTime = _this._getSelected() || new Date();
            _this._timepicker.setValue(initTime);
            _this._time = _this._timepicker.getValue();
            _this._timepicker.events.on(ts_timepicker_1.TimepickerEvents.afterClose, function () {
                _this._timepicker.setValue(_this._time);
                _this.showDate(null, "calendar");
            });
            _this._timepicker.events.on(ts_timepicker_1.TimepickerEvents.afterApply, function () {
                var _a = _this._timepicker.getValue(true), hour = _a.hour, minute = _a.minute, AM = _a.AM;
                var oldDate = _this._getSelected();
                var newDate = date_1.DateHelper.withHoursAndMinutes(_this._getSelected() || new Date(), hour, minute, AM);
                if (_this.events.fire(types_1.CalendarEvents.beforeChange, [newDate, oldDate, true])) {
                    _this._selected[_this._selected.length - 1] = newDate;
                    _this.events.fire(types_1.CalendarEvents.change, [newDate, oldDate, true]);
                }
                _this._time = _this._timepicker.getValue();
                _this.showDate(null, "calendar");
            });
        }
        var render = function () { return _this._draw(); };
        _this.mount(container, dom_1.create({ render: render }));
        return _this;
    }
    Calendar.prototype.setValue = function (value) {
        if (!value || (value instanceof Array && value.length === 0)) {
            return false;
        }
        this._selected = [];
        var currentDate = value instanceof Array ? value[0] : value;
        var date = date_1.DateHelper.toDateObject(currentDate, this.config.dateFormat);
        var oldDate = date_1.DateHelper.copy(this._getSelected());
        if (!this.events.fire(types_1.CalendarEvents.beforeChange, [date, oldDate, false])) {
            return false;
        }
        this._setSelected(value);
        if (this._timepicker) {
            this._timepicker.setValue(date);
            this._time = this._timepicker.getValue();
        }
        this.showDate(this._getSelected());
        this.events.fire(types_1.CalendarEvents.change, [date, oldDate, false]);
        this.paint();
        return true;
    };
    Calendar.prototype.getValue = function (asDateObject) {
        var _this = this;
        if (asDateObject === void 0) { asDateObject = false; }
        if (!this._selected[0]) {
            return "";
        }
        if (this.config.range) {
            return asDateObject
                ? this._selected.map(function (date) { return date_1.DateHelper.copy(date); })
                : this._selected.map(function (date) { return date_1.getFormattedDate(_this.config.dateFormat, date); });
        }
        return asDateObject
            ? date_1.DateHelper.copy(this._selected[0])
            : date_1.getFormattedDate(this.config.dateFormat, this._selected[0]);
    };
    Calendar.prototype.getCurrentMode = function () {
        return this._currentViewMode;
    };
    Calendar.prototype.showDate = function (date, mode) {
        if (date) {
            this._currentDate = date_1.DateHelper.copy(date);
        }
        if (mode) {
            this._currentViewMode = mode;
        }
        this.paint();
    };
    Calendar.prototype.destructor = function () {
        this._linkedCalendar && this._unlink();
        this._timepicker && this._timepicker.destructor();
        this.events && this.events.clear();
        this.config = this.events = null;
        this._uid = this._selected = this._currentDate = this._currentViewMode = this._handlers = this._timepicker = this._time = null;
        this.unmount();
    };
    Calendar.prototype.clear = function () {
        var oldDate = this.getValue(true);
        if (this.config.timePicker) {
            this._timepicker.clear();
            this._time = this._timepicker.getValue();
        }
        this._selected = [];
        this.showDate(null, this.config.mode);
        this.events.fire(types_1.CalendarEvents.change, [this.getValue(true), oldDate, false]);
    };
    Calendar.prototype.link = function (targetCalendar) {
        var _this = this;
        if (this._linkedCalendar) {
            this._unlink();
        }
        this._linkedCalendar = targetCalendar;
        var rawLowerDate = this.getValue(true);
        var rawUpperDate = targetCalendar.getValue(true);
        var lowerDate = rawLowerDate && date_1.DateHelper.dayStart(rawLowerDate);
        var upperDate = rawUpperDate && date_1.DateHelper.dayStart(rawUpperDate);
        var getRangeClass = function (date) {
            if (date_1.DateHelper.isSameDay(upperDate, lowerDate)) {
                return null;
            }
            var positionInRange = "dhx_calendar-day--in-range";
            if (date_1.DateHelper.isSameDay(date, lowerDate)) {
                positionInRange += " dhx_calendar-day--first-date";
            }
            if (date_1.DateHelper.isSameDay(date, upperDate)) {
                positionInRange += " dhx_calendar-day--last-date";
            }
            return positionInRange;
        };
        var rangeMark = function (date) {
            if (lowerDate && upperDate) {
                return date >= lowerDate && date <= upperDate && getRangeClass(date);
            }
        };
        if (!this.config.$rangeMark || !this._linkedCalendar.config.$rangeMark) {
            this.config.$rangeMark = this._linkedCalendar.config.$rangeMark = rangeMark;
        }
        if (!this.config.disabledDates || !this._linkedCalendar.config.disabledDates) {
            this.config.disabledDates = function (date) {
                if (upperDate) {
                    return date > upperDate;
                }
            };
            this._linkedCalendar.config.disabledDates = function (date) {
                if (lowerDate) {
                    return date < lowerDate;
                }
            };
        }
        this.config.thisMonthOnly = true;
        targetCalendar.config.thisMonthOnly = true;
        this.events.on(types_1.CalendarEvents.change, function (date) {
            lowerDate = date_1.DateHelper.dayStart(date);
            _this._linkedCalendar.paint();
        }, "link");
        this._linkedCalendar.events.on(types_1.CalendarEvents.change, function (date) {
            upperDate = date_1.DateHelper.dayStart(date);
            _this.paint();
        }, "link");
        this._linkedCalendar.paint();
        this.paint();
    };
    Calendar.prototype._unlink = function () {
        if (this._linkedCalendar) {
            this.config.$rangeMark = this._linkedCalendar.config.$rangeMark = null;
            this.config.disabledDates = this._linkedCalendar.config.disabledDates = null;
            this.events.detach(types_1.CalendarEvents.change, "link");
            this._linkedCalendar.events.detach(types_1.CalendarEvents.change, "link");
            this._linkedCalendar.paint();
            this._linkedCalendar = null;
        }
    };
    Calendar.prototype._setSelected = function (value) {
        var _this = this;
        var currentDate = value instanceof Array ? value[0] : value;
        var date = date_1.DateHelper.toDateObject(currentDate, this.config.dateFormat);
        if (value instanceof Array && this.config.range) {
            var filterDate_1 = [];
            value.forEach(function (element, index) {
                if (index < 2) {
                    filterDate_1.push(date_1.DateHelper.toDateObject(element, _this.config.dateFormat));
                }
            });
            if (filterDate_1.length === 2 && filterDate_1[0] < filterDate_1[1]) {
                filterDate_1.forEach(function (element) { return _this._selected.push(element); });
            }
            else {
                this._selected[0] = filterDate_1[0];
            }
        }
        else {
            this._selected[0] = date;
        }
    };
    Calendar.prototype._getSelected = function () {
        return this._selected[this._selected.length - 1];
    };
    Calendar.prototype._draw = function () {
        switch (this._currentViewMode) {
            case "calendar":
                this.events.fire(types_1.CalendarEvents.modeChange, ["calendar"]);
                return this._drawCalendar();
            case "month":
                this.events.fire(types_1.CalendarEvents.modeChange, ["month"]);
                return this._drawMonthSelector();
            case "year":
                this.events.fire(types_1.CalendarEvents.modeChange, ["year"]);
                return this._drawYearSelector();
            case "timepicker":
                this.events.fire(types_1.CalendarEvents.modeChange, ["timepicker"]);
                return this._drawTimepicker();
        }
    };
    Calendar.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            onclick: {
                ".dhx_calendar-year, .dhx_calendar-month, .dhx_calendar-day": function (_e, vn) {
                    var date = vn.attrs._date;
                    var oldDate = date_1.DateHelper.copy(_this._getSelected());
                    switch (_this._currentViewMode) {
                        case "calendar": {
                            var mergedDate = _this.config.timePicker
                                ? date_1.DateHelper.mergeHoursAndMinutes(date, _this._getSelected() || _this._currentDate)
                                : date;
                            if (!_this.events.fire(types_1.CalendarEvents.beforeChange, [mergedDate, oldDate, true])) {
                                return;
                            }
                            if (_this.config.range &&
                                _this._selected.length === 1 &&
                                _this._selected[0] < mergedDate) {
                                _this._selected.push(mergedDate);
                            }
                            else {
                                _this._selected = [];
                                _this._selected[0] = mergedDate;
                            }
                            vn.el.blur();
                            _this.showDate(_this._getSelected());
                            _this.events.fire(types_1.CalendarEvents.change, [date, oldDate, true]);
                            break;
                        }
                        case "month":
                            if (_this.config.mode !== "month") {
                                date_1.DateHelper.setMonth(_this._currentDate, date);
                                _this.showDate(null, "calendar");
                                _this.events.fire(types_1.CalendarEvents.monthSelected, [date]);
                            }
                            else {
                                var newDate = date_1.DateHelper.fromYearAndMonth(_this._currentDate.getFullYear() || _this._getSelected().getFullYear(), date);
                                if (!_this.events.fire(types_1.CalendarEvents.beforeChange, [newDate, oldDate, true])) {
                                    return;
                                }
                                _this._currentDate = newDate;
                                _this._selected[0] = newDate;
                                _this.events.fire(types_1.CalendarEvents.change, [_this._getSelected(), oldDate, true]);
                                _this.events.fire(types_1.CalendarEvents.monthSelected, [date]);
                                _this.paint();
                            }
                            break;
                        case "year":
                            if (_this.config.mode !== "year") {
                                date_1.DateHelper.setYear(_this._currentDate, date);
                                _this.showDate(null, "month");
                                _this.events.fire(types_1.CalendarEvents.yearSelected, [date]);
                            }
                            else {
                                var newDate = date_1.DateHelper.fromYear(date);
                                if (!_this.events.fire(types_1.CalendarEvents.beforeChange, [newDate, oldDate, true])) {
                                    return;
                                }
                                _this._currentDate = newDate;
                                _this._selected[0] = newDate;
                                _this.events.fire(types_1.CalendarEvents.change, [_this._getSelected(), oldDate, true]);
                                _this.events.fire(types_1.CalendarEvents.yearSelected, [date]);
                                _this.paint();
                            }
                    }
                },
                ".dhx_calendar-action__cancel": function () {
                    _this.showDate(_this._getSelected(), "calendar");
                    _this.events.fire(types_1.CalendarEvents.cancelClick, []);
                },
                ".dhx_calendar-action__show-month": function () { return _this.showDate(null, "month"); },
                ".dhx_calendar-action__show-year": function () { return _this.showDate(null, "year"); },
                ".dhx_calendar-action__next": function () {
                    var newDate;
                    switch (_this._currentViewMode) {
                        case "calendar":
                            newDate = date_1.DateHelper.addMonth(_this._currentDate, 1);
                            break;
                        case "month":
                            newDate = date_1.DateHelper.addYear(_this._currentDate, 1);
                            break;
                        case "year":
                            newDate = date_1.DateHelper.addYear(_this._currentDate, 12);
                    }
                    _this.showDate(newDate);
                },
                ".dhx_calendar-action__prev": function () {
                    var newDate;
                    switch (_this._currentViewMode) {
                        case "calendar":
                            newDate = date_1.DateHelper.addMonth(_this._currentDate, -1);
                            break;
                        case "month":
                            newDate = date_1.DateHelper.addYear(_this._currentDate, -1);
                            break;
                        case "year":
                            newDate = date_1.DateHelper.addYear(_this._currentDate, -12);
                    }
                    _this.showDate(newDate);
                },
                ".dhx_calendar-action__show-timepicker": function () {
                    _this._currentViewMode = "timepicker";
                    _this.paint();
                },
            },
            onmouseover: {
                ".dhx_calendar-day": function (event, node) {
                    _this.events.fire(types_1.CalendarEvents.dateMouseOver, [new Date(node.attrs._date), event]);
                    _this.events.fire(types_1.CalendarEvents.dateHover, [new Date(node.attrs._date), event]); // TODO: remove suite_7.0
                },
            },
        };
    };
    Calendar.prototype._getData = function (date) {
        var _this = this;
        var firstDay = this.config.weekStart === "monday" ? 1 : 0;
        var first = date_1.DateHelper.weekStart(date_1.DateHelper.monthStart(date), firstDay);
        var data = [];
        var weeksCount = 6;
        var currentDate = first;
        while (weeksCount--) {
            var currentWeek = date_1.DateHelper.getWeekNumber(currentDate);
            var disabledDays = 0;
            var daysCount = 7;
            var days = [];
            var _loop_1 = function () {
                var isDateWeekEnd = date_1.DateHelper.isWeekEnd(currentDate);
                var isCurrentMonth = date.getMonth() === currentDate.getMonth();
                var isBlocked = this_1.config.disabledDates && this_1.config.disabledDates(currentDate);
                var css = [];
                if (this_1.config.range && this_1._selected[0] && this_1._selected[1]) {
                    var getRangeClass_1 = function () {
                        if (date_1.DateHelper.isSameDay(_this._selected[0], _this._selected[1])) {
                            return null;
                        }
                        return "dhx_calendar-day--in-range";
                    };
                    var rangeMark = function () {
                        if (_this._selected[0] && _this._selected[1]) {
                            var firstDate = date_1.DateHelper.dayStart(_this._selected[0]);
                            var lastDate = date_1.DateHelper.dayStart(_this._selected[1]);
                            return currentDate >= firstDate && currentDate <= lastDate && getRangeClass_1();
                        }
                    };
                    this_1.config.$rangeMark = rangeMark;
                }
                if (isDateWeekEnd && isCurrentMonth) {
                    css.push("dhx_calendar-day--weekend");
                }
                if (!isCurrentMonth) {
                    if (this_1.config.thisMonthOnly) {
                        disabledDays++;
                        css.push("dhx_calendar-day--hidden");
                    }
                    else {
                        css.push("dhx_calendar-day--muffled");
                    }
                }
                if (this_1.config.mark) {
                    var markedCss = this_1.config.mark(currentDate);
                    if (markedCss) {
                        css.push(markedCss);
                    }
                }
                if (this_1.config.$rangeMark) {
                    var rangeMark = this_1.config.$rangeMark(currentDate);
                    if (rangeMark) {
                        css.push(rangeMark);
                    }
                }
                if (isBlocked) {
                    if (isDateWeekEnd) {
                        css.push("dhx_calendar-day--weekend-disabled");
                    }
                    else {
                        css.push("dhx_calendar-day--disabled");
                    }
                }
                this_1._selected.forEach(function (selected, index) {
                    if (selected && date_1.DateHelper.isSameDay(selected, currentDate)) {
                        var dayCss = "dhx_calendar-day--selected";
                        if (_this.config.range) {
                            dayCss += " dhx_calendar-day--selected-" + (index === 0 ? "first " : "last");
                        }
                        css.push(dayCss);
                    }
                });
                days.push({
                    date: currentDate,
                    day: currentDate.getDate(),
                    css: css.join(" "),
                });
                currentDate = date_1.DateHelper.addDay(currentDate);
            };
            var this_1 = this;
            while (daysCount--) {
                _loop_1();
            }
            data.push({
                weekNumber: currentWeek,
                days: days,
                disabledWeekNumber: disabledDays === 7,
            });
        }
        return data;
    };
    Calendar.prototype._drawCalendar = function () {
        var date = this._currentDate;
        var _a = this.config, weekStart = _a.weekStart, thisMonthOnly = _a.thisMonthOnly, css = _a.css, timePicker = _a.timePicker, width = _a.width;
        var weekDays = weekStart === "monday" ? __spreadArrays(date_1.locale.daysShort.slice(1), [date_1.locale.daysShort[0]]) : date_1.locale.daysShort;
        var weekDaysHeader = weekDays.map(function (day) { return dom_1.el(".dhx_calendar-weekday", day); });
        var data = this._getData(date);
        var content = [];
        var weekNumbers = [];
        var weekNumbersWrapper;
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var week = data_1[_i];
            var weekRow = week.days.map(function (item) {
                return dom_1.el("div.dhx_calendar-day", {
                    class: item.css,
                    _date: item.date,
                    tabIndex: 1,
                }, item.day);
            });
            if (this.config.weekNumbers && !(week.disabledWeekNumber && thisMonthOnly)) {
                weekNumbers.push(dom_1.el("div", {
                    class: "dhx_calendar-week-number",
                }, week.weekNumber));
            }
            content = content.concat(weekRow);
        }
        if (this.config.weekNumbers) {
            weekNumbersWrapper = dom_1.el(".dhx_calendar__week-numbers", weekNumbers);
        }
        var widgetClass = "dhx_calendar dhx_widget" +
            (css ? " " + css : "") +
            (timePicker ? " dhx_calendar--with_timepicker" : "") +
            (this.config.weekNumbers ? " dhx_calendar--with_week-numbers" : "");
        return dom_1.el("div", __assign({ class: widgetClass, style: {
                width: this.config.weekNumbers ? "calc(" + width + " + 48px )" : width,
            } }, this._handlers), [
            dom_1.el(".dhx_calendar__wrapper", [
                this._drawHeader(dom_1.el("button.dhx_calendar-action__show-month.dhx_button.dhx_button--view_link.dhx_button--size_small.dhx_button--color_secondary.dhx_button--circle", date_1.locale.months[date.getMonth()] + " " + date.getFullYear())),
                this.config.weekNumbers &&
                    dom_1.el(".dhx_calendar__dates-wrapper", [
                        dom_1.el(".dhx_calendar__weekdays", weekDaysHeader),
                        dom_1.el(".dhx_calendar__days", content),
                        weekNumbersWrapper,
                    ]),
                !this.config.weekNumbers && dom_1.el(".dhx_calendar__weekdays", weekDaysHeader),
                !this.config.weekNumbers && dom_1.el(".dhx_calendar__days", content),
                timePicker
                    ? dom_1.el(".dhx_timepicker__actions", [
                        dom_1.el("button.dhx_calendar__timepicker-button." +
                            "dhx_button.dhx_button--view_link.dhx_button--size_small.dhx_button--color_secondary.dhx_button--width_full.dhx_button--circle.dhx_calendar-action__show-timepicker", [
                            dom_1.el("span.dhx_button__icon.dxi.dxi-clock-outline"),
                            dom_1.el("span.dhx_button__text", this._time),
                        ]),
                    ])
                    : null,
            ]),
        ]);
    };
    Calendar.prototype._drawMonthSelector = function () {
        var date = this._currentDate;
        var currentMonth = date.getMonth();
        var currentYear = this._getSelected() ? this._getSelected().getFullYear() : null;
        var _a = this.config, css = _a.css, timePicker = _a.timePicker, weekNumbers = _a.weekNumbers, width = _a.width, mode = _a.mode;
        var widgetClass = "dhx_calendar dhx_widget" +
            (css ? " " + css : "") +
            (timePicker ? " dhx_calendar--with_timepicker" : "") +
            (weekNumbers ? " dhx_calendar--with_week-numbers" : "");
        return dom_1.el("div", __assign({ class: widgetClass, style: {
                width: weekNumbers ? "calc(" + width + " + 48px)" : width,
            } }, this._handlers), [
            dom_1.el(".dhx_calendar__wrapper", [
                this._drawHeader(dom_1.el("button.dhx_calendar-action__show-year.dhx_button.dhx_button--view_link.dhx_button--size_small.dhx_button--color_secondary.dhx_button--circle", date.getFullYear())),
                dom_1.el(".dhx_calendar__months", date_1.locale.monthsShort.map(function (item, i) {
                    return dom_1.el("div", {
                        class: "dhx_calendar-month" +
                            (currentMonth === i && currentYear === date.getFullYear()
                                ? " dhx_calendar-month--selected"
                                : ""),
                        tabIndex: 1,
                        _date: i,
                    }, item);
                })),
                mode !== "month"
                    ? dom_1.el(".dhx_calendar__actions", [
                        dom_1.el("button.dhx_button.dhx_button--color_primary.dhx_button--view_link.dhx_button--size_small.dhx_button--width_full.dhx_button--circle.dhx_calendar-action__cancel", date_1.locale.cancel),
                    ])
                    : null,
            ]),
        ]);
    };
    Calendar.prototype._drawYearSelector = function () {
        var _this = this;
        var date = this._currentDate;
        var yearsDiapason = date_1.DateHelper.getTwelweYears(date);
        var _a = this.config, css = _a.css, timePicker = _a.timePicker, weekNumbers = _a.weekNumbers, width = _a.width, mode = _a.mode;
        var widgetClass = "dhx_calendar dhx_widget" +
            (css ? " " + css : "") +
            (timePicker ? " dhx_calendar--with_timepicker" : "") +
            (weekNumbers ? " dhx_calendar--with_week-numbers" : "");
        return dom_1.el("div", __assign({ class: widgetClass, style: { width: weekNumbers ? "calc(" + width + " + 48px)" : width } }, this._handlers), [
            dom_1.el(".dhx_calendar__wrapper", [
                this._drawHeader(dom_1.el("button.dhx_button.dhx_button--view_link.dhx_button--size_small.dhx_button--color_secondary.dhx_button--circle", yearsDiapason[0] + "-" + yearsDiapason[yearsDiapason.length - 1])),
                dom_1.el(".dhx_calendar__years", yearsDiapason.map(function (item) {
                    return dom_1.el("div", {
                        class: "dhx_calendar-year" +
                            (_this._getSelected() && item === _this._getSelected().getFullYear()
                                ? " dhx_calendar-year--selected"
                                : ""),
                        _date: item,
                        tabIndex: 1,
                    }, item);
                })),
                mode !== "year" && mode !== "month"
                    ? dom_1.el(".dhx_calendar__actions", [
                        dom_1.el("button.dhx_button.dhx_button--color_primary.dhx_button--view_link.dhx_button--size_small.dhx_button--width_full.dhx_button--circle.dhx_calendar-action__cancel", date_1.locale.cancel),
                    ])
                    : null,
            ]),
        ]);
    };
    Calendar.prototype._drawHeader = function (actionContent) {
        return dom_1.el(".dhx_calendar__navigation", [
            dom_1.el("button.dhx_calendar-navigation__button.dhx_calendar-action__prev" +
                helper_1.linkButtonClasses +
                ".dhx_button--icon.dhx_button--circle", { "aria-label": "prev" }, [dom_1.el(".dhx_button__icon.dxi.dxi-chevron-left")]),
            actionContent,
            dom_1.el("button.dhx_calendar-navigation__button.dhx_calendar-action__next" +
                helper_1.linkButtonClasses +
                ".dhx_button--icon.dhx_button--circle", { "aria-label": "next" }, [dom_1.el(".dhx_button__icon.dxi.dxi-chevron-right")]),
        ]);
    };
    Calendar.prototype._drawTimepicker = function () {
        var _a = this.config, css = _a.css, weekNumbers = _a.weekNumbers, width = _a.width;
        return dom_1.el(".dhx_widget.dhx-calendar", {
            class: css ? " " + css : "",
            style: { width: weekNumbers ? "calc(" + width + " + 48px)" : width },
        }, [dom_1.inject(this._timepicker.getRootView())]);
    };
    return Calendar;
}(view_1.View));
exports.Calendar = Calendar;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(86));
__export(__webpack_require__(42));


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(5);
var view_1 = __webpack_require__(6);
var ts_layout_1 = __webpack_require__(39);
var ts_slider_1 = __webpack_require__(90);
var en_1 = __webpack_require__(93);
var helper_1 = __webpack_require__(94);
var types_1 = __webpack_require__(42);
function validate(value, max) {
    if (isNaN(value)) {
        return 0;
    }
    return Math.min(max, Math.max(0, value));
}
var Timepicker = /** @class */ (function (_super) {
    __extends(Timepicker, _super);
    function Timepicker(container, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, container, core_1.extend({
            timeFormat: 24,
            controls: false,
            valueFormat: "string",
            actions: false,
        }, config)) || this;
        _this.events = new events_1.EventSystem(_this);
        _this._time = {
            hour: 0,
            minute: 0,
            AM: true,
        };
        if (_this.config.timeFormat === 12) {
            _this._time.hour = 12;
        }
        _this.config.controls = _this.config.controls || _this.config.actions; // TODO: remove suite_7.0
        _this.config.value && _this._setValue(_this.config.value);
        _this._initUI(container);
        _this._initHandlers();
        _this._initEvents();
        return _this;
    }
    Timepicker.prototype.getValue = function (asOBject) {
        if (this.config.timeFormat === 12)
            this._time.hour = this._time.hour % 12 || 12;
        var _a = this._time, h = _a.hour, m = _a.minute, isAM = _a.AM;
        if (asOBject) {
            var obj = {
                hour: h,
                minute: m,
            };
            if (this.config.timeFormat === 12) {
                obj.AM = isAM;
            }
            return obj;
        }
        return ((h < 10 ? "0" + h : h) +
            ":" +
            (m < 10 ? "0" + m : m) +
            (this.config.timeFormat === 12 ? (isAM ? "AM" : "PM") : ""));
    };
    Timepicker.prototype.setValue = function (value) {
        this._setValue(value);
        this._hoursSlider.setValue(this._time.hour);
        this._minutesSlider.setValue(this._time.minute);
        this._inputsView.paint();
    };
    Timepicker.prototype.clear = function () {
        if (this.config.timeFormat === 24) {
            this.setValue("00:00");
        }
        else {
            this.setValue("12:00AM");
        }
    };
    Timepicker.prototype.destructor = function () {
        this._minutesSlider && this._minutesSlider.destructor();
        this._hoursSlider && this._hoursSlider.destructor();
        this.events && this.events.clear();
        this.layout && this.layout.destructor();
        this.config = this.events = null;
        this._handlers = this._time = this._inputsView = this._minutesSlider = this._hoursSlider = null;
        this.unmount();
    };
    Timepicker.prototype.getRootView = function () {
        return this.layout.getRootView();
    };
    Timepicker.prototype._setValue = function (value) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var m = 0;
        var h = 0;
        var isPM;
        if (typeof value === "number") {
            value = new Date(value);
        }
        if (value instanceof Date) {
            m = value.getMinutes();
            h = value.getHours();
        }
        else if (Array.isArray(value)) {
            h = validate(value[0], 23);
            m = validate(value[1], 59);
            if (value[2] && value[2].toLowerCase() === "pm") {
                isPM = true;
            }
        }
        else if (typeof value === "string") {
            var matches = value.match(/\d+/g);
            h = validate(+matches[0], 23);
            m = validate(+matches[1], 59);
            if (value.toLowerCase().includes("pm")) {
                isPM = true;
            }
        }
        else if (typeof value === "object" &&
            value.hasOwnProperty("hour") &&
            value.hasOwnProperty("minute")) {
            h = value.hour;
            m = value.minute;
            isPM = !value.AM;
        }
        if (isPM && h < 12) {
            h += 12;
        }
        if (this.config.timeFormat === 12 && !helper_1.isTimeCheck(value) && h >= 12)
            isPM = true;
        return (this._time = {
            hour: h,
            minute: m,
            AM: !isPM,
        });
    };
    Timepicker.prototype._initUI = function (container) {
        var _this = this;
        var layoutConfig = {
            gravity: false,
            css: "dhx_widget dhx_timepicker " +
                (this.config.css ? this.config.css : "") +
                (this.config.controls ? " dhx_timepicker--with-controls" : ""),
            rows: [
                {
                    id: "timepicker",
                    css: "dhx_timepicker__inputs",
                },
                {
                    id: "hour-slider",
                    css: "dhx_timepicker__hour",
                },
                {
                    id: "minute-slider",
                    css: "dhx_timepicker__minute",
                },
            ],
        };
        if (this.config.controls) {
            layoutConfig.rows.unshift({
                id: "close-action",
                css: "dhx_timepicker__close",
            });
            layoutConfig.rows.push({
                id: "save-action",
                css: "dhx_timepicker__save",
            });
        }
        var layout = (this.layout = new ts_layout_1.Layout(container, layoutConfig));
        var timepicker = dom_1.create({
            render: function () { return _this._draw(); },
        });
        var inputsView = (this._inputsView = view_1.toViewLike(timepicker));
        var mSlider = (this._minutesSlider = new ts_slider_1.Slider(null, {
            min: 0,
            max: 59,
            step: 1,
            tooltip: false,
            labelPosition: "top",
            label: en_1.default.minutes,
            value: this.config.value ? this._time.minute : 0,
        }));
        var hSlider = (this._hoursSlider = new ts_slider_1.Slider(null, {
            min: 0,
            max: 23,
            step: 1,
            tooltip: false,
            labelPosition: "top",
            label: en_1.default.hours,
            value: this.config.value ? (this._time.hour === 12 && this._time.AM ? 0 : this._time.hour) : 0,
        }));
        layout.getCell("timepicker").attach(inputsView);
        layout.getCell("hour-slider").attach(hSlider);
        layout.getCell("minute-slider").attach(mSlider);
        if (this.config.controls) {
            var save = function () {
                return dom_1.el("button.dhx_timepicker__button-save.dhx_button.dhx_button--view_flat.dhx_button--color_primary.dhx_button--size_small.dhx_button--circle.dhx_button--width_full", { onclick: _this._outerHandlers.save }, en_1.default.save);
            };
            var close_1 = function () {
                return dom_1.el("button.dhx_timepicker__button-close.dhx_button.dhx_button--view_link.dhx_button--size_medium.dhx_button--view_link.dhx_button--color_secondary.dhx_button--icon.dhx_button--circle", {
                    onclick: _this._outerHandlers.close,
                    "aria-label": "close timepicker",
                }, [dom_1.el("span.dhx_button__icon.dxi.dxi-close")]);
            };
            layout.getCell("save-action").attach(save);
            layout.getCell("close-action").attach(close_1);
        }
    };
    Timepicker.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            onchange: {
                ".dhx_timepicker-input--hour": function (e) {
                    var hour = validate(parseInt(e.target.value, 10), 23);
                    e.target.value = hour;
                    _this._hoursSlider.setValue(hour);
                },
                ".dhx_timepicker-input--minutes": function (e) {
                    var min = validate(parseInt(e.target.value, 10), 59);
                    e.target.value = min;
                    _this._minutesSlider.setValue(min);
                },
            },
        };
        this._outerHandlers = {
            close: function () {
                if (!_this.events.fire(types_1.TimepickerEvents.beforeClose, [
                    _this.getValue(_this.config.valueFormat === "timeObject"),
                ])) {
                    return;
                }
                _this.events.fire(types_1.TimepickerEvents.afterClose, [
                    _this.getValue(_this.config.valueFormat === "timeObject"),
                ]);
                _this.events.fire(types_1.TimepickerEvents.close, []); // TODO: remove suite_7.0
            },
            save: function () {
                if (!_this.events.fire(types_1.TimepickerEvents.beforeApply, [
                    _this.getValue(_this.config.valueFormat === "timeObject"),
                ]))
                    return;
                _this.events.fire(types_1.TimepickerEvents.afterApply, [
                    _this.getValue(_this.config.valueFormat === "timeObject"),
                ]);
                _this.events.fire(types_1.TimepickerEvents.apply, [_this.getValue()]); // TODO: remove suite_7.0
                _this.events.fire(types_1.TimepickerEvents.save, [_this._time]); // TODO: remove suite_7.0
            },
        };
    };
    Timepicker.prototype._initEvents = function () {
        var _this = this;
        this._hoursSlider.events.on(ts_slider_1.SliderEvents.change, function (value) {
            if (value < _this._hoursSlider.config.min || value > _this._hoursSlider.config.max) {
                return;
            }
            if (_this.config.timeFormat === 12) {
                _this._time.AM = value < 12;
                _this._time.hour = value % 12 || 12;
            }
            else {
                _this._time.hour = value;
            }
            _this.events.fire(types_1.TimepickerEvents.change, [
                _this.getValue(_this.config.valueFormat === "timeObject"),
            ]);
            _this._inputsView.paint();
        });
        this._minutesSlider.events.on(ts_slider_1.SliderEvents.change, function (value) {
            if (value < _this._minutesSlider.config.min || value > _this._minutesSlider.config.max) {
                return;
            }
            _this._time.minute = value;
            _this.events.fire(types_1.TimepickerEvents.change, [
                _this.getValue(_this.config.valueFormat === "timeObject"),
            ]);
            _this._inputsView.paint();
        });
    };
    Timepicker.prototype._draw = function () {
        return dom_1.el(".dhx_timepicker-inputs", __assign({}, this._handlers), [
            dom_1.el("input.dhx_timepicker-input.dhx_timepicker-input--hour", {
                _key: "hour",
                value: this.getValue(true).hour.toString().length > 1
                    ? this.getValue(true).hour
                    : "0" + this.getValue(true).hour,
                "aria-label": "hours",
            }),
            dom_1.el("span.dhx_timepicker-delimer", ":"),
            dom_1.el("input.dhx_timepicker-input.dhx_timepicker-input--minutes", {
                _key: "minute",
                value: this.getValue(true).minute.toString().length > 1
                    ? this.getValue(true).minute
                    : "0" + this.getValue(true).minute,
                "aria-label": "minutes",
            }),
            this.config.timeFormat === 12
                ? dom_1.el(".dhx_timepicker-ampm", this._time.AM ? "AM" : "PM")
                : null,
        ]);
    };
    return Timepicker;
}(view_1.View));
exports.Timepicker = Timepicker;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Cell_1 = __webpack_require__(88);
var types_1 = __webpack_require__(17);
var dom_1 = __webpack_require__(0);
var Layout = /** @class */ (function (_super) {
    __extends(Layout, _super);
    function Layout(parent, config) {
        var _this = _super.call(this, parent, config) || this;
        // root layout
        _this._root = _this.config.parent || _this;
        _this._all = {};
        _this._parseConfig();
        if (_this.config.activeTab) {
            _this.config.activeView = _this.config.activeTab;
        }
        // Need replace to tabbar
        if (_this.config.views) {
            _this.config.activeView = _this.config.activeView || _this._cells[0].id;
            _this._isViewLayout = true;
        }
        if (!config.parent) {
            var view = dom_1.create({ render: function () { return _this.toVDOM(); } }, _this);
            _this.mount(parent, view);
        }
        return _this;
    }
    Layout.prototype.destructor = function () {
        for (var key in this._all) {
            if (Object.prototype.hasOwnProperty.call(this._all, key)) {
                var cell = this._all[key];
                if (cell.getWidget() && typeof cell.getWidget().destructor === "function") {
                    cell.getWidget().destructor();
                }
                cell.destructor();
            }
        }
        this.config = this._cells = this._root = this._xLayout = this._isViewLayout = null;
        this._all = {};
        this.unmount();
    };
    Layout.prototype.toVDOM = function () {
        if (this._isViewLayout) {
            var roots = [this.getCell(this.config.activeView).toVDOM()];
            return _super.prototype.toVDOM.call(this, roots);
        }
        var nodes = [];
        this._inheritTypes();
        this._cells.forEach(function (cell) {
            var node = cell.toVDOM();
            if (Array.isArray(node)) {
                nodes = nodes.concat(node);
            }
            else {
                nodes.push(node);
            }
        });
        return _super.prototype.toVDOM.call(this, nodes);
    };
    Layout.prototype.removeCell = function (id) {
        if (!this.events.fire(types_1.LayoutEvents.beforeRemove, [id])) {
            return;
        }
        var root = this.config.parent || this;
        if (root !== this) {
            return root.removeCell(id);
        }
        // this === root layout
        var view = this.getCell(id);
        if (view) {
            var parent_1 = view.getParent();
            delete this._all[id];
            parent_1._cells = parent_1._cells.filter(function (cell) { return cell.id != id; });
            parent_1.paint();
        }
        this.events.fire(types_1.LayoutEvents.afterRemove, [id]);
    };
    Layout.prototype.addCell = function (config, index) {
        if (index === void 0) { index = -1; }
        if (!this.events.fire(types_1.LayoutEvents.beforeAdd, [config.id])) {
            return;
        }
        var view = this._createCell(config);
        if (index < 0) {
            index = this._cells.length + index + 1;
        }
        this._cells.splice(index, 0, view);
        this.paint();
        if (!this.events.fire(types_1.LayoutEvents.afterAdd, [config.id])) {
            return;
        }
    };
    Layout.prototype.getId = function (index) {
        if (index < 0) {
            index = this._cells.length + index;
        }
        return this._cells[index] ? this._cells[index].id : undefined;
    };
    Layout.prototype.getRefs = function (name) {
        return this._root.getRootView().refs[name];
    };
    Layout.prototype.getCell = function (id) {
        return this._root._all[id];
    };
    Layout.prototype.forEach = function (callback, parent, level) {
        if (level === void 0) { level = Infinity; }
        if (!this._haveCells(parent) || level < 1) {
            return;
        }
        var array;
        if (parent) {
            array = this._root._all[parent]._cells;
        }
        else {
            array = this._root._cells;
        }
        for (var index = 0; index < array.length; index++) {
            var cell = array[index];
            callback.call(this, cell, index, array);
            if (this._haveCells(cell.id)) {
                cell.forEach(callback, cell.id, --level);
            }
        }
    };
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    Layout.prototype.cell = function (id) {
        return this.getCell(id);
    };
    Layout.prototype._getCss = function (content) {
        var layoutCss = this._xLayout ? "dhx_layout-columns" : "dhx_layout-rows";
        var directionCss = this.config.align ? " " + layoutCss + "--" + this.config.align : "";
        if (content) {
            return (layoutCss +
                " dhx_layout-cell" +
                (this.config.align ? " dhx_layout-cell--" + this.config.align : ""));
        }
        else {
            var cellCss = this.config.parent ? _super.prototype._getCss.call(this) : "dhx_widget dhx_layout";
            var fullModeCss = this.config.parent ? "" : " dhx_layout-cell";
            return cellCss + (this.config.full ? fullModeCss : " " + layoutCss) + directionCss;
        }
    };
    Layout.prototype._parseConfig = function () {
        var _this = this;
        var config = this.config;
        var cells = config.rows || config.cols || config.views || [];
        this._xLayout = !config.rows;
        this._cells = cells.map(function (a) { return _this._createCell(a); });
    };
    Layout.prototype._createCell = function (cell) {
        var view;
        if (cell.rows || cell.cols || cell.views) {
            cell.parent = this._root;
            view = new Layout(this, cell);
        }
        else {
            view = new Cell_1.Cell(this, cell);
        }
        // FIxME
        this._root._all[view.id] = view;
        if (cell.init) {
            cell.init(view, cell);
        }
        return view;
    };
    Layout.prototype._haveCells = function (id) {
        if (id) {
            var array = this._root._all[id];
            return array._cells && array._cells.length > 0;
        }
        return Object.keys(this._all).length > 0;
    };
    Layout.prototype._inheritTypes = function (obj) {
        var _this = this;
        if (obj === void 0) { obj = this._cells; }
        if (Array.isArray(obj)) {
            obj.forEach(function (cell) { return _this._inheritTypes(cell); });
        }
        else {
            var cellConfig = obj.config;
            if (cellConfig.rows || cellConfig.cols) {
                var viewParent = obj.getParent();
                if (!cellConfig.type && viewParent) {
                    if (viewParent.config.type) {
                        cellConfig.type = viewParent.config.type;
                    }
                    else {
                        this._inheritTypes(viewParent);
                    }
                }
            }
        }
    };
    return Layout;
}(Cell_1.Cell));
exports.Layout = Layout;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var view_1 = __webpack_require__(6);
var types_1 = __webpack_require__(17);
var helpers_1 = __webpack_require__(89);
var events_1 = __webpack_require__(5);
var Cell = /** @class */ (function (_super) {
    __extends(Cell, _super);
    function Cell(parent, config) {
        var _this = _super.call(this, parent, config) || this;
        _this._disabled = [];
        var p = parent;
        if (p && p.isVisible) {
            _this._parent = p;
        }
        if (_this._parent && _this._parent.events) {
            _this.events = _this._parent.events;
        }
        else {
            _this.events = new events_1.EventSystem(_this);
        }
        _this.config.full =
            _this.config.full === undefined
                ? Boolean(_this.config.header ||
                    _this.config.collapsable ||
                    _this.config.headerHeight ||
                    _this.config.headerIcon ||
                    _this.config.headerImage)
                : _this.config.full;
        _this._initHandlers();
        _this.id = _this.config.id || core_1.uid();
        return _this;
    }
    Cell.prototype.paint = function () {
        if (this.isVisible()) {
            var view = this.getRootView();
            if (view) {
                view.redraw();
            }
            else {
                this._parent.paint();
            }
        }
    };
    Cell.prototype.isVisible = function () {
        // top level node
        if (!this._parent) {
            if (this._container && this._container.tagName) {
                return true;
            }
            return Boolean(this.getRootNode());
        }
        // check active view in case of multiview
        var active = this._parent.config.activeView;
        if (active && active !== this.id) {
            return false;
        }
        // check that all parents of the cell are visible as well
        return !this.config.hidden && (!this._parent || this._parent.isVisible());
    };
    Cell.prototype.hide = function () {
        if (!this.events.fire(types_1.LayoutEvents.beforeHide, [this.id])) {
            return;
        }
        this.config.hidden = true;
        if (this._parent && this._parent.paint) {
            this._parent.paint();
        }
        this.events.fire(types_1.LayoutEvents.afterHide, [this.id]);
    };
    Cell.prototype.show = function () {
        if (!this.events.fire(types_1.LayoutEvents.beforeShow, [this.id])) {
            return;
        }
        if (this._parent && this._parent.config && this._parent.config.activeView !== undefined) {
            this._parent.config.activeView = this.id;
        }
        else {
            this.config.hidden = false;
        }
        if (this._parent && !this._parent.isVisible()) {
            this._parent.show();
        }
        this.paint();
        this.events.fire(types_1.LayoutEvents.afterShow, [this.id]);
    };
    Cell.prototype.expand = function () {
        if (!this.events.fire(types_1.LayoutEvents.beforeExpand, [this.id])) {
            return;
        }
        this.config.collapsed = false;
        this.events.fire(types_1.LayoutEvents.afterExpand, [this.id]);
        this.paint();
    };
    Cell.prototype.collapse = function () {
        if (!this.events.fire(types_1.LayoutEvents.beforeCollapse, [this.id])) {
            return;
        }
        this.config.collapsed = true;
        this.events.fire(types_1.LayoutEvents.afterCollapse, [this.id]);
        this.paint();
    };
    Cell.prototype.toggle = function () {
        if (this.config.collapsed) {
            this.expand();
        }
        else {
            this.collapse();
        }
    };
    Cell.prototype.getParent = function () {
        return this._parent;
    };
    Cell.prototype.destructor = function () {
        this.events && this.events.clear();
        this.config = this.events = this.id = null;
        this._parent = this._handlers = this._uid = this._disabled = this._resizerHandlers = null;
        this.unmount();
    };
    Cell.prototype.getWidget = function () {
        return this._ui;
    };
    Cell.prototype.getCellView = function () {
        return this._parent && this._parent.getRefs(this._uid);
    };
    Cell.prototype.attach = function (name, config) {
        this.config.html = null;
        if (typeof name === "object") {
            this._ui = name;
        }
        else if (typeof name === "string") {
            this._ui = new window.dhx[name](null, config);
        }
        else if (typeof name === "function") {
            if (name.prototype instanceof view_1.View) {
                this._ui = new name(null, config);
            }
            else {
                this._ui = {
                    getRootView: function () {
                        return name(config);
                    },
                };
            }
        }
        this.paint();
        return this._ui;
    };
    Cell.prototype.attachHTML = function (html) {
        this.config.html = html;
        this.paint();
    };
    Cell.prototype.toVDOM = function (nodes) {
        var _a;
        if (this.config === null) {
            this.config = {};
        }
        if (this.config.hidden) {
            return;
        }
        var style = this._calculateStyle();
        var stylePadding = core_1.isDefined(this.config.padding)
            ? !isNaN(Number(this.config.padding))
                ? { padding: this.config.padding + "px" }
                : { padding: this.config.padding }
            : "";
        var fullStyle = this.config.full || this.config.html ? style : __assign(__assign({}, style), stylePadding);
        var kids;
        if (!this.config.html) {
            if (this._ui) {
                var view = this._ui.getRootView();
                if (view.render) {
                    view = dom_1.inject(view);
                }
                kids = [view];
            }
            else {
                kids = nodes || null;
            }
        }
        var resizer = this.config.resizable && !this._isLastCell() && !this.config.collapsed
            ? dom_1.el(".dhx_layout-resizer." +
                (this._isXDirection() ? "dhx_layout-resizer--x" : "dhx_layout-resizer--y"), __assign(__assign({}, this._resizerHandlers), { _ref: "resizer_" + this._uid }), [
                dom_1.el("span.dhx_layout-resizer__icon", {
                    class: "dxi " +
                        (this._isXDirection() ? "dxi-dots-vertical" : "dxi-dots-horizontal"),
                }),
            ])
            : null;
        var handlers = {};
        if (this.config.on) {
            for (var key in this.config.on) {
                handlers["on" + key] = this.config.on[key];
            }
        }
        var typeClass = "";
        var isParent = this.config.cols || this.config.rows;
        if (this.config.type && isParent) {
            switch (this.config.type) {
                case "line":
                    typeClass = " dhx_layout-line";
                    break;
                case "wide":
                    typeClass = " dhx_layout-wide";
                    break;
                case "space":
                    typeClass = " dhx_layout-space";
                    break;
                default:
                    break;
            }
        }
        var cell = dom_1.el("div", __assign(__assign((_a = { _key: this._uid, _ref: this._uid }, _a["aria-label"] = this.config.id ? "tab-content-" + this.config.id : null, _a), handlers), { class: this._getCss(false) +
                (this.config.css ? " " + this.config.css : "") +
                (this.config.collapsed ? " dhx_layout-cell--collapsed" : "") +
                (this.config.resizable ? " dhx_layout-cell--resizable" : "") +
                (this.config.type && !this.config.full ? typeClass : ""), style: fullStyle }), this.config.full
            ? [
                dom_1.el("div", {
                    tabindex: this.config.collapsable ? "0" : "-1",
                    class: "dhx_layout-cell-header" +
                        (this._isXDirection()
                            ? " dhx_layout-cell-header--col"
                            : " dhx_layout-cell-header--row") +
                        (this.config.collapsable ? " dhx_layout-cell-header--collapseble" : "") +
                        (this.config.collapsed ? " dhx_layout-cell-header--collapsed" : "") +
                        (((this.getParent() || {}).config || {}).isAccordion
                            ? " dhx_layout-cell-header--accordion"
                            : ""),
                    style: {
                        height: this.config.headerHeight,
                    },
                    onclick: this._handlers.toggle,
                    onkeydown: this._handlers.enterCollapse,
                }, [
                    this.config.headerIcon &&
                        dom_1.el("span.dhx_layout-cell-header__icon", {
                            class: this.config.headerIcon,
                        }),
                    this.config.headerImage &&
                        dom_1.el(".dhx_layout-cell-header__image-wrapper", [
                            dom_1.el("img", {
                                src: this.config.headerImage,
                                class: "dhx_layout-cell-header__image",
                            }),
                        ]),
                    this.config.header &&
                        dom_1.el("h3.dhx_layout-cell-header__title", this.config.header),
                    this.config.collapsable
                        ? dom_1.el("div.dhx_layout-cell-header__collapse-icon", {
                            class: this._getCollapseIcon(),
                        })
                        : dom_1.el("div.dhx_layout-cell-header__collapse-icon", {
                            class: "dxi dxi-empty",
                        }),
                ]),
                !this.config.collapsed
                    ? dom_1.el("div", {
                        style: __assign(__assign({}, stylePadding), { height: "calc(100% - " + (this.config.headerHeight || 37) + "px)" }),
                        ".innerHTML": this.config.html,
                        class: this._getCss(true) +
                            " dhx_layout-cell-content" +
                            (this.config.type ? typeClass : ""),
                    }, kids)
                    : null,
            ]
            : this.config.html &&
                !(this.config.rows &&
                    this.config.cols &&
                    this.config.views)
                ? [
                    dom_1.el(".dhx_layout-cell-content", {
                        ".innerHTML": this.config.html,
                        style: stylePadding,
                    }),
                ]
                : kids);
        return resizer ? [cell, resizer] : cell;
    };
    Cell.prototype._getCss = function (_content) {
        return "dhx_layout-cell";
    };
    Cell.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            enterCollapse: function (e) {
                if (e.keyCode === 13) {
                    _this._handlers.toggle();
                }
            },
            collapse: function () {
                if (!_this.config.collapsable) {
                    return;
                }
                _this.collapse();
            },
            expand: function () {
                if (!_this.config.collapsable) {
                    return;
                }
                _this.expand();
            },
            toggle: function () {
                if (!_this.config.collapsable) {
                    return;
                }
                _this.toggle();
            },
        };
        var blockOpts = {
            left: null,
            top: null,
            isActive: false,
            range: null,
            xLayout: null,
            nextCell: null,
            size: null,
            resizerLength: null,
            mode: null,
            percentsum: null,
            margin: null,
        };
        var resizeMove = function (event) {
            if (!blockOpts.isActive) {
                return;
            }
            var clientX = event.targetTouches ? event.targetTouches[0].clientX : event.clientX;
            var clientY = event.targetTouches ? event.targetTouches[0].clientY : event.clientY;
            var newValue = blockOpts.xLayout
                ? clientX - blockOpts.range.min + window.pageXOffset
                : clientY - blockOpts.range.min + window.pageYOffset;
            var prop = blockOpts.xLayout ? "width" : "height";
            if (newValue < 0) {
                newValue = blockOpts.resizerLength / 2;
            }
            else if (newValue > blockOpts.size) {
                newValue = blockOpts.size - blockOpts.resizerLength;
            }
            switch (blockOpts.mode) {
                case types_1.resizeMode.pixels:
                    _this.config[prop] = newValue - blockOpts.resizerLength / 2 + "px";
                    blockOpts.nextCell.config[prop] =
                        blockOpts.size - newValue - blockOpts.resizerLength / 2 + "px";
                    break;
                case types_1.resizeMode.mixedpx1:
                    _this.config[prop] = newValue - blockOpts.resizerLength / 2 + "px";
                    break;
                case types_1.resizeMode.mixedpx2:
                    blockOpts.nextCell.config[prop] =
                        blockOpts.size - newValue - blockOpts.resizerLength / 2 + "px";
                    break;
                case types_1.resizeMode.percents:
                    _this.config[prop] = (newValue / blockOpts.size) * blockOpts.percentsum + "%";
                    blockOpts.nextCell.config[prop] =
                        ((blockOpts.size - newValue) / blockOpts.size) * blockOpts.percentsum + "%";
                    break;
                case types_1.resizeMode.mixedperc1:
                    _this.config[prop] = (newValue / blockOpts.size) * blockOpts.percentsum + "%";
                    break;
                case types_1.resizeMode.mixedperc2:
                    blockOpts.nextCell.config[prop] =
                        ((blockOpts.size - newValue) / blockOpts.size) * blockOpts.percentsum + "%";
                    break;
                case types_1.resizeMode.unknown:
                    _this.config[prop] = newValue - blockOpts.resizerLength / 2 + "px";
                    blockOpts.nextCell.config[prop] =
                        blockOpts.size - newValue - blockOpts.resizerLength / 2 + "px";
                    _this.config.$fixed = true;
                    break;
            }
            _this.paint();
            _this.events.fire(types_1.LayoutEvents.resize, [_this.id]);
        };
        var resizeEnd = function (event) {
            blockOpts.isActive = false;
            document.body.classList.remove("dhx_no-select--resize");
            if (!event.targetTouches) {
                document.removeEventListener("mouseup", resizeEnd);
                document.removeEventListener("mousemove", resizeMove);
            }
            else {
                document.removeEventListener("touchend", resizeEnd);
                document.removeEventListener("touchmove", resizeMove);
            }
            _this.events.fire(types_1.LayoutEvents.afterResizeEnd, [_this.id]);
        };
        var resizeStart = function (event) {
            event.targetTouches && event.preventDefault();
            if (event.which === 3) {
                return;
            }
            if (blockOpts.isActive) {
                resizeEnd(event);
            }
            if (!_this.events.fire(types_1.LayoutEvents.beforeResizeStart, [_this.id])) {
                return;
            }
            document.body.classList.add("dhx_no-select--resize");
            var block = _this.getCellView();
            var nextCell = _this._getNextCell();
            var nextBlock = nextCell.getCellView();
            var resizerBlock = _this._getResizerView();
            var blockOffsets = block.el.getBoundingClientRect();
            var resizerOffsets = resizerBlock.el.getBoundingClientRect();
            var nextBlockOffsets = nextBlock.el.getBoundingClientRect();
            blockOpts.xLayout = _this._isXDirection();
            blockOpts.left = blockOffsets.left + window.pageXOffset;
            blockOpts.top = blockOffsets.top + window.pageYOffset;
            blockOpts.margin = helpers_1.getMarginSize(_this.getParent().config, blockOpts.xLayout);
            blockOpts.range = helpers_1.getBlockRange(blockOffsets, nextBlockOffsets, blockOpts.xLayout);
            blockOpts.size = blockOpts.range.max - blockOpts.range.min - blockOpts.margin;
            blockOpts.isActive = true;
            blockOpts.nextCell = nextCell;
            blockOpts.resizerLength = blockOpts.xLayout ? resizerOffsets.width : resizerOffsets.height;
            blockOpts.mode = helpers_1.getResizeMode(blockOpts.xLayout, _this.config, nextCell.config);
            if (blockOpts.mode === types_1.resizeMode.percents) {
                var field = blockOpts.xLayout ? "width" : "height";
                blockOpts.percentsum =
                    parseFloat(_this.config[field].slice(0, -1)) +
                        parseFloat(nextCell.config[field].slice(0, -1));
            }
            if (blockOpts.mode === types_1.resizeMode.mixedperc1) {
                var field = blockOpts.xLayout ? "width" : "height";
                blockOpts.percentsum =
                    (1 / (blockOffsets[field] / (blockOpts.size - blockOpts.resizerLength))) *
                        parseFloat(_this.config[field].slice(0, -1));
            }
            if (blockOpts.mode === types_1.resizeMode.mixedperc2) {
                var field = blockOpts.xLayout ? "width" : "height";
                blockOpts.percentsum =
                    (1 / (nextBlockOffsets[field] / (blockOpts.size - blockOpts.resizerLength))) *
                        parseFloat(nextCell.config[field]);
            }
        };
        this._resizerHandlers = {
            onmousedown: function (e) {
                resizeStart(e);
                document.addEventListener("mouseup", resizeEnd);
                document.addEventListener("mousemove", resizeMove);
            },
            ontouchstart: function (e) {
                resizeStart(e);
                document.addEventListener("touchend", resizeEnd);
                document.addEventListener("touchmove", resizeMove);
            },
            ondragstart: function (e) { return e.preventDefault(); },
        };
    };
    Cell.prototype._getCollapseIcon = function () {
        if (this._isXDirection() && this.config.collapsed) {
            return "dxi dxi-chevron-right";
        }
        if (this._isXDirection() && !this.config.collapsed) {
            return "dxi dxi-chevron-left";
        }
        if (!this._isXDirection() && this.config.collapsed) {
            return "dxi dxi-chevron-up";
        }
        if (!this._isXDirection() && !this.config.collapsed) {
            return "dxi dxi-chevron-down";
        }
    };
    Cell.prototype._isLastCell = function () {
        var parent = this._parent;
        return parent && parent._cells.indexOf(this) === parent._cells.length - 1;
    };
    Cell.prototype._getNextCell = function () {
        var parent = this._parent;
        var index = parent._cells.indexOf(this);
        return parent._cells[index + 1];
    };
    Cell.prototype._getResizerView = function () {
        return this._parent.getRefs("resizer_" + this._uid);
    };
    Cell.prototype._isXDirection = function () {
        return this._parent && this._parent._xLayout;
    };
    Cell.prototype._calculateStyle = function () {
        var config = this.config;
        if (!config) {
            return;
        }
        var style = {};
        var autoWidth = false;
        var autoHeight = false;
        if (!isNaN(Number(config.width)))
            config.width = config.width + "px";
        if (!isNaN(Number(config.height)))
            config.height = config.height + "px";
        if (!isNaN(Number(config.minWidth)))
            config.minWidth = config.minWidth + "px";
        if (!isNaN(Number(config.minHeight)))
            config.minHeight = config.minHeight + "px";
        if (!isNaN(Number(config.maxWidth)))
            config.maxWidth = config.maxWidth + "px";
        if (!isNaN(Number(config.maxHeight)))
            config.maxHeight = config.maxHeight + "px";
        if (config.width === "content")
            autoWidth = true;
        if (config.height === "content")
            autoHeight = true;
        var _a = config, width = _a.width, height = _a.height, cols = _a.cols, rows = _a.rows, minWidth = _a.minWidth, minHeight = _a.minHeight, maxWidth = _a.maxWidth, maxHeight = _a.maxHeight, gravity = _a.gravity, collapsed = _a.collapsed, $fixed = _a.$fixed;
        var gravityNumber = Math.sign(gravity) === -1 ? 0 : gravity;
        if (typeof gravity === "boolean") {
            gravityNumber = gravity ? 1 : 0;
        }
        var fixed = typeof gravity === "boolean" ? !gravity : Math.sign(gravity) === -1;
        if (this._isXDirection()) {
            if ($fixed || width || (gravity === undefined && (minWidth || maxWidth))) {
                fixed = true;
            }
        }
        else {
            if ($fixed || height || (gravity === undefined && (minHeight || maxHeight))) {
                fixed = true;
            }
        }
        var grow = fixed ? 0 : gravityNumber || 1;
        var fillSpace = this._isXDirection() ? "x" : "y";
        if (minWidth !== undefined)
            style.minWidth = minWidth;
        if (minHeight !== undefined)
            style.minHeight = minHeight;
        if (maxWidth !== undefined)
            style.maxWidth = maxWidth;
        if (maxHeight !== undefined)
            style.maxHeight = maxHeight;
        if (this._parent === undefined && !fillSpace !== undefined) {
            fillSpace = true;
        }
        if (width !== undefined && width !== "content") {
            style.width = width;
        }
        else {
            if (fillSpace === true) {
                style.width = "100%";
            }
            else if (fillSpace === "x") {
                if (autoWidth) {
                    style.flex = "0 0 auto";
                }
                else {
                    var isAuto = this._isXDirection() ? "1px" : "auto";
                    style.flex = grow + " " + (cols || rows ? "0 " + isAuto : "1 auto");
                }
            }
        }
        if (height !== undefined && height !== "content") {
            style.height = height;
        }
        else {
            if (fillSpace === true) {
                style.height = "100%";
            }
            else if (fillSpace === "y") {
                if (autoHeight) {
                    style.flex = "0 0 auto";
                }
                else {
                    var isAuto = !this._isXDirection() ? "1px" : "auto";
                    style.flex = grow + " " + (cols || rows ? "0 " + isAuto : "1 auto");
                }
            }
        }
        if (fillSpace === true && config.width === undefined && config.height === undefined) {
            style.flex = grow + " 1 auto";
        }
        if (collapsed) {
            if (this._isXDirection()) {
                style.width = "auto";
            }
            else {
                style.height = "auto";
            }
            style.flex = "0 0 auto";
        }
        return style;
    };
    return Cell;
}(view_1.View));
exports.Cell = Cell;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(17);
function getResizeMode(isXLayout, conf1, conf2) {
    var field = isXLayout ? "width" : "height";
    var is1perc = conf1[field] && conf1[field].includes("%");
    var is2perc = conf2[field] && conf2[field].includes("%");
    var is1px = conf1[field] && conf1[field].includes("px");
    var is2px = conf2[field] && conf2[field].includes("px");
    if (is1perc && is2perc) {
        return types_1.resizeMode.percents;
    }
    if (is1px && is2px) {
        return types_1.resizeMode.pixels;
    }
    if (is1px && !is2px) {
        return types_1.resizeMode.mixedpx1;
    }
    if (is2px && !is1px) {
        return types_1.resizeMode.mixedpx2;
    }
    if (is1perc) {
        return types_1.resizeMode.mixedperc1;
    }
    if (is2perc) {
        return types_1.resizeMode.mixedperc2;
    }
    return types_1.resizeMode.unknown;
}
exports.getResizeMode = getResizeMode;
function getBlockRange(block1, block2, isXLayout) {
    if (isXLayout === void 0) { isXLayout = true; }
    if (isXLayout) {
        return {
            min: block1.left + window.pageXOffset,
            max: block2.right + window.pageXOffset,
        };
    }
    return {
        min: block1.top + window.pageYOffset,
        max: block2.bottom + window.pageYOffset,
    };
}
exports.getBlockRange = getBlockRange;
function getMarginSize(config, xLayout) {
    if (!config) {
        return 0;
    }
    if (config.type === "space" || (config.type === "wide" && xLayout)) {
        return 10;
    }
    return 0;
}
exports.getMarginSize = getMarginSize;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(91));
__export(__webpack_require__(41));


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(5);
var KeyManager_1 = __webpack_require__(22);
var view_1 = __webpack_require__(6);
var ts_popup_1 = __webpack_require__(25);
var types_1 = __webpack_require__(41);
var html_1 = __webpack_require__(3);
function normalizeValue(value, min, max) {
    if (value < min) {
        return min;
    }
    if (value > max) {
        return max;
    }
    return value;
}
function parseValue(value, min, max) {
    var values;
    if (value === undefined) {
        values = [];
    }
    else if (Array.isArray(value)) {
        values = value;
    }
    else if (typeof value === "string") {
        values = value.split(",").map(function (v) { return parseInt(v, 10); });
    }
    else {
        values = [value];
    }
    values[0] = values[0] === undefined ? min : normalizeValue(values[0], min, max);
    values[1] = values[1] === undefined ? max : normalizeValue(values[1], min, max);
    return values;
}
var Slider = /** @class */ (function (_super) {
    __extends(Slider, _super);
    function Slider(container, config) {
        var _this = _super.call(this, container, core_1.extend({
            mode: "horizontal",
            min: 0,
            max: 100,
            step: 1,
            tooltip: true,
        }, config)) || this;
        _this._disabled = false;
        _this.config.helpMessage = _this.config.helpMessage || _this.config.help; // TODO: remove suite_7.0
        if (_this.config.thumbLabel !== undefined) {
            _this.config.tooltip = _this.config.thumbLabel; // TODO: remove suite_7.0
        }
        if (_this.config.labelInline) {
            _this.config.labelPosition = "left"; // TODO: remove suite_7.0
        }
        _this.events = new events_1.EventSystem(_this);
        _this._axis = _this.config.mode === "horizontal" ? "clientX" : "clientY";
        _this._initStartPosition();
        _this._keyManager = new KeyManager_1.KeyManager(function () {
            var _a;
            var activeEl = document.activeElement;
            var element = (_a = _this.getRootView().refs[_this._isExtraActive ? "extraRunner" : "runner"]) === null || _a === void 0 ? void 0 : _a.el;
            return activeEl === element;
        });
        _this._initHotkeys();
        var vNode = dom_1.create({
            render: function () { return _this._draw(); },
            hooks: {
                didMount: function () { return _this._calcSliderPosition(); },
                didRedraw: function () { return _this._calcSliderPosition(); },
            },
        });
        _this._initHandlers();
        _this.mount(container, vNode);
        return _this;
    }
    Slider.prototype.disable = function () {
        this._disabled = true;
        this.paint();
    };
    Slider.prototype.enable = function () {
        this._disabled = false;
        this.paint();
    };
    Slider.prototype.isDisabled = function () {
        return this._disabled;
    };
    Slider.prototype.focus = function (extra) {
        this.getRootView().refs[extra ? "extraRunner" : "runner"].el.focus();
    };
    Slider.prototype.getValue = function () {
        var res;
        if (this.config.range) {
            var a = this._getValue(this._currentPosition);
            var b = this._getValue(this._extraCurrentPosition);
            res = a < b ? [a, b] : [b, a];
        }
        else {
            res = [this._getValue(this._currentPosition)];
        }
        return res;
    };
    Slider.prototype.setValue = function (value) {
        var old = this._getValue(this._currentPosition);
        if (Array.isArray(value) && value.length > 1) {
            var oldExtra = this._getValue(this._extraCurrentPosition);
            this._setValue(value[0], false);
            this.events.fire(types_1.SliderEvents.change, [value[0], old, false]);
            this._setValue(value[1], true);
            this.events.fire(types_1.SliderEvents.change, [value[1], oldExtra, true]);
        }
        else {
            value = parseFloat(value);
            if (!isNaN(value)) {
                this._setValue(value);
                this.events.fire(types_1.SliderEvents.change, [value, old, false]);
            }
            else {
                throw new Error("Wrong value type, for more info check documentation https://docs.dhtmlx.com/suite/slider__api__slider_setvalue_method.html");
            }
        }
        this.paint();
    };
    Slider.prototype.destructor = function () {
        this._keyManager && this._keyManager.destructor();
        document.body.contains(this._tooltip) && document.body.removeChild(this._tooltip);
        this._tooltip = null;
        this.unmount();
    };
    Slider.prototype._calcSliderPosition = function () {
        var root = this.getRootView();
        if (!root) {
            return;
        }
        var tracker = root.refs.track.el;
        var rect = tracker.getBoundingClientRect();
        this._offsets = {
            left: rect.left + window.pageXOffset,
            top: rect.top + window.pageYOffset,
        };
        this._length = this.config.mode === "horizontal" ? rect.width : rect.height;
    };
    Slider.prototype._initHotkeys = function () {
        var _this = this;
        var handlers = {
            arrowLeft: function (e) {
                e.preventDefault();
                _this._move(-_this.config.step, e.target.classList.contains("dhx_slider__thumb--extra"));
            },
            arrowRight: function (e) {
                e.preventDefault();
                _this._move(_this.config.step, e.target.classList.contains("dhx_slider__thumb--extra"));
            },
            arrowUp: function (e) {
                e.preventDefault();
                _this._move(_this.config.step, e.target.classList.contains("dhx_slider__thumb--extra"));
            },
            arrowDown: function (e) {
                e.preventDefault();
                _this._move(-_this.config.step, e.target.classList.contains("dhx_slider__thumb--extra"));
            },
        };
        for (var key in handlers) {
            this._keyManager.addHotKey(key, handlers[key]);
        }
    };
    Slider.prototype._move = function (value, forExtra) {
        if (this.config.inverse) {
            value = -value;
        }
        var _a = this.config, max = _a.max, min = _a.min;
        var oldValue = forExtra
            ? this._getValue(this._extraCurrentPosition)
            : this._getValue(this._currentPosition);
        var newValue = oldValue + value;
        this._setValue(oldValue + value, forExtra);
        if (newValue > max || newValue < min) {
            newValue = oldValue;
        }
        this.events.fire(types_1.SliderEvents.change, [newValue, oldValue, forExtra]);
        this.paint();
    };
    Slider.prototype._initStartPosition = function () {
        var _a = this.config, max = _a.max, min = _a.min, range = _a.range;
        var _b = parseValue(this.config.value, this.config.min, this.config.max), value = _b[0], extraValue = _b[1];
        this._currentPosition = ((value - min) / (max - min)) * 100;
        if (range) {
            this._extraCurrentPosition = ((max - extraValue) / (max - min)) * 100;
        }
        this._currentPosition = ((value - min) / (max - min)) * 100;
        if (range) {
            this._extraCurrentPosition = ((extraValue - min) / (max - min)) * 100;
        }
        if (this._isInverse()) {
            this._currentPosition = 100 - this._currentPosition;
            if (range) {
                this._extraCurrentPosition = 100 - this._extraCurrentPosition;
            }
        }
    };
    Slider.prototype._getValue = function (value) {
        if (this._isInverse()) {
            value = 100 - value;
        }
        var _a = this.config, min = _a.min, max = _a.max, step = _a.step;
        if (value === 100) {
            return max;
        }
        if (value === 0) {
            return min;
        }
        var val = (value * (max - min)) / 100;
        var remain = val % step;
        var rounder = remain >= step / 2 ? step : 0;
        var result = Number(min) + Number(val) - remain + rounder;
        return +result.toFixed(5);
    };
    Slider.prototype._setValue = function (val, forExtra) {
        if (forExtra === void 0) { forExtra = false; }
        var _a = this.config, max = _a.max, min = _a.min;
        if (val > max || val < min) {
            return false;
        }
        var rawValue = ((val - min) / (max - min)) * 100;
        var newValue = this._isInverse() ? 100 - rawValue : rawValue;
        if (forExtra) {
            this._extraCurrentPosition = newValue;
        }
        else {
            this._currentPosition = newValue;
        }
    };
    Slider.prototype._initHandlers = function () {
        var _this = this;
        var sliderMove = function (e) {
            !e.targetTouches && e.preventDefault();
            var currentPosition = e.targetTouches ? e.targetTouches[0][_this._axis] : e[_this._axis];
            var x = ((currentPosition - _this._getBegining()) / _this._length) * 100;
            if (_this._findNewDirection) {
                if (Math.abs(_this._currentPosition - x) < 1) {
                    return;
                }
                if (x > _this._currentPosition) {
                    _this._possibleRange = [_this._currentPosition, 100];
                }
                else {
                    _this._possibleRange = [0, _this._currentPosition];
                }
                _this._findNewDirection = null;
            }
            if (_this._inSide(x)) {
                _this._updatePosition(x, _this._isExtraActive);
            }
            _this.paint();
        };
        var sliderEnd = function (e) {
            _this.events.fire(types_1.SliderEvents.mouseup, [e]);
            setTimeout(function () {
                _this._isMouseMoving = false;
                _this.paint();
            }, 4);
            if (!e.targetTouches) {
                document.removeEventListener("mouseup", sliderEnd);
                document.removeEventListener("mousemove", sliderMove);
            }
            else {
                document.removeEventListener("touchend", sliderEnd);
                document.removeEventListener("touchmove", sliderMove);
            }
        };
        var sliderStart = function (e) {
            if (_this._disabled || e.which === 3) {
                return;
            }
            _this.events.fire(types_1.SliderEvents.mousedown, [e]);
            _this._isMouseMoving = true;
            var active;
            if (e.target.classList.contains("dhx_slider__thumb--extra")) {
                _this._isExtraActive = true;
                active = _this._extraCurrentPosition;
            }
            else {
                _this._isExtraActive = false;
                active = _this._currentPosition;
            }
            _this._findNewDirection = null;
            // define possible range
            if (_this.config.range) {
                var _a = _this._currentPosition > _this._extraCurrentPosition
                    ? [_this._currentPosition, _this._extraCurrentPosition]
                    : [_this._extraCurrentPosition, _this._currentPosition], more = _a[0], less = _a[1];
                if (_this._currentPosition === _this._extraCurrentPosition) {
                    _this._findNewDirection = active;
                    _this._possibleRange = [0, 100];
                }
                else if (active < more) {
                    _this._possibleRange = [0, more];
                }
                else {
                    _this._possibleRange = [less, 100];
                }
            }
            else {
                _this._possibleRange = [0, 100];
            }
        };
        if (this.config.helpMessage) {
            this._helper = new ts_popup_1.Popup({
                css: "dhx_tooltip dhx_tooltip--forced dhx_tooltip--light",
            });
            this._helper.attachHTML(this.config.helpMessage);
        }
        this._handlers = {
            showHelper: function (e) {
                e.preventDefault();
                e.stopPropagation();
                _this._helper.show(e.target);
            },
            onmousedown: function (e) {
                sliderStart(e);
                document.addEventListener("mousemove", sliderMove);
                document.addEventListener("mouseup", sliderEnd);
            },
            ontouchstart: function (e) {
                _this._setTooltip(e);
                _this._mouseIn = false;
                sliderStart(e);
                document.addEventListener("touchmove", sliderMove);
                document.addEventListener("touchend", sliderEnd);
                _this.paint();
            },
            ontouchend: function (e) {
                _this._setTooltip(e);
                _this._mouseIn = false;
                _this.paint();
            },
            onlabelClick: function () {
                var refs = _this.getRootView().refs;
                refs.runner.el.focus();
            },
            onclick: function (e) {
                if (_this._disabled || _this._isMouseMoving || e.which === 3) {
                    return;
                }
                var x = ((e[_this._axis] - _this._getBegining()) / _this._length) * 100;
                var refs = _this.getRootView().refs;
                if (_this.config.range) {
                    var dist = Math.abs(_this._currentPosition - x);
                    var extraDist = Math.abs(_this._extraCurrentPosition - x);
                    if (dist < extraDist) {
                        _this._updatePosition(x, false);
                        refs.runner.el.focus();
                    }
                    else {
                        _this._updatePosition(x, true);
                        refs.extraRunner.el.focus();
                    }
                }
                else {
                    _this._updatePosition(x, false);
                    refs.runner.el.focus();
                }
                _this.paint();
            },
            onmouseover: function (e) {
                _this._setTooltip(e);
                _this._mouseIn = true;
                _this.paint();
            },
            onmouseout: function (e) {
                _this._setTooltip(e);
                _this._mouseIn = false;
                _this.paint();
            },
            onfocus: function (e) {
                _this._setTooltip(e);
                _this._focusIn = true;
                _this.paint();
            },
            onblur: function (e) {
                _this._setTooltip(e);
                _this._focusIn = false;
                _this.paint();
            },
        };
    };
    Slider.prototype._getBegining = function () {
        return this.config.mode === "horizontal"
            ? this._offsets.left - window.pageXOffset
            : this._offsets.top - window.pageYOffset;
    };
    Slider.prototype._inSide = function (x) {
        var range = this._possibleRange;
        if (x < range[0]) {
            this._updatePosition(range[0], this._isExtraActive);
            return false;
        }
        if (x > range[1]) {
            this._updatePosition(range[1], this._isExtraActive);
            return false;
        }
        return true;
    };
    Slider.prototype._updatePosition = function (x, extra) {
        if (extra === void 0) { extra = false; }
        if (x > 100) {
            x = 100;
        }
        if (x < 0) {
            x = 0;
        }
        var _a = this.config, max = _a.max, min = _a.min;
        var position = extra ? this._extraCurrentPosition : this._currentPosition;
        var oldValue = this._getValue(position);
        var newValue = this._getValue(x);
        if (oldValue === newValue) {
            return;
        }
        var rawValue = ((newValue - min) / (max - min)) * 100;
        var value = this._isInverse() ? 100 - rawValue : rawValue;
        if (extra) {
            this._extraCurrentPosition = value;
        }
        else {
            this._currentPosition = value;
        }
        this.events.fire(types_1.SliderEvents.change, [newValue, oldValue, extra]);
    };
    Slider.prototype._getRunnerStyle = function (forExtra) {
        var _a;
        if (forExtra === void 0) { forExtra = false; }
        var direction = this.config.mode === "horizontal" ? "left" : "top";
        var pos = forExtra ? this._extraCurrentPosition : this._currentPosition;
        return _a = {},
            _a[direction] = pos + "%",
            _a;
    };
    Slider.prototype._isInverse = function () {
        return ((this.config.inverse && this.config.mode === "horizontal") ||
            (!this.config.inverse && this.config.mode === "vertical"));
    };
    Slider.prototype._getRunnerCss = function (forExtra) {
        if (forExtra === void 0) { forExtra = false; }
        return ("dhx_slider__thumb" +
            (forExtra ? " dhx_slider__thumb--extra" : "") +
            (this._isMouseMoving && ((forExtra && this._isExtraActive) || (!forExtra && !this._isExtraActive))
                ? " dhx_slider__thumb--active"
                : "") +
            (this._disabled ? " dhx_slider__thumb--disabled" : "") +
            (this._isNullable(forExtra ? this._extraCurrentPosition : this._currentPosition) &&
                !this.config.range
                ? " dhx_slider__thumb--nullable"
                : ""));
    };
    Slider.prototype._draw = function () {
        var _a = this.config, labelPosition = _a.labelPosition, mode = _a.mode, hiddenLabel = _a.hiddenLabel, tick = _a.tick, majorTick = _a.majorTick, css = _a.css, helpMessage = _a.helpMessage;
        var labelStyle = html_1.getLabelStyle(__assign(__assign({}, this.config), { required: false }));
        if (this._tooltip && (!this._mouseIn || !this._focusIn || !this._isMouseMoving)) {
            document.body.contains(this._tooltip) && document.body.removeChild(this._tooltip);
        }
        return dom_1.el("div", {
            class: "dhx_slider" +
                " dhx_slider--mode_" +
                mode +
                (labelPosition === "left" ? " dhx_slider--label-inline" : "") +
                (hiddenLabel ? " dhx_slider--label_sr" : "") +
                (tick ? " dhx_slider--ticks" : "") +
                (majorTick ? " dhx_slider--major-ticks" : "") +
                (css ? " " + css : "") +
                (this._disabled ? " dhx_slider--disabled" : ""),
        }, [
            labelStyle
                ? dom_1.el("label.dhx_label.dhx_slider__label", {
                    style: labelStyle.style,
                    class: helpMessage ? "dhx_label--with-help" : "",
                    onclick: this._handlers.onlabelClick,
                }, helpMessage
                    ? [
                        labelStyle.label && dom_1.el("span.dhx_label__holder", labelStyle.label),
                        dom_1.el("span.dhx_label-help.dxi.dxi-help-circle-outline", {
                            tabindex: "0",
                            role: "button",
                            onclick: this._handlers.showHelper,
                        }),
                    ]
                    : labelStyle.label)
                : null,
            this._drawSlider(),
        ]);
    };
    Slider.prototype._drawSlider = function () {
        return dom_1.el(".dhx_widget.dhx_slider__track-holder", {
            dhx_widget_id: this._uid,
        }, [
            dom_1.el(".dhx_slider__track", {
                _ref: "track",
                onmouseover: this._handlers.onmouseover,
                onmouseout: this._handlers.onmouseout,
                onclick: this._handlers.onclick,
            }, [
                this._getDetector(),
                dom_1.el("div", {
                    _ref: "runner",
                    class: this._getRunnerCss(),
                    ontouchstart: this._handlers.ontouchstart,
                    ontouchend: this._handlers.ontouchend,
                    onmousedown: this._handlers.onmousedown,
                    onfocus: this._handlers.onfocus,
                    onblur: this._handlers.onblur,
                    style: this._getRunnerStyle(),
                    tabindex: 0,
                }),
                this.config.tooltip && (this._mouseIn || this._focusIn || this._isMouseMoving)
                    ? this._drawTooltip()
                    : null,
                this.config.tooltip &&
                    this.config.range &&
                    (this._mouseIn || this._focusIn || this._isMouseMoving)
                    ? this._drawTooltip(true)
                    : null,
                this.config.range
                    ? dom_1.el("div", {
                        _ref: "extraRunner",
                        class: this._getRunnerCss(true),
                        ontouchstart: this._handlers.ontouchstart,
                        ontouchend: this._handlers.ontouchend,
                        onmousedown: this._handlers.onmousedown,
                        onfocus: this._handlers.onfocus,
                        onblur: this._handlers.onblur,
                        style: this._getRunnerStyle(true),
                        tabindex: 0,
                    })
                    : null,
            ]),
            this.config.tick ? this._drawTicks() : null,
        ]);
    };
    Slider.prototype._getDetector = function () {
        var _a, _b, _c;
        if (this._disabled) {
            return dom_1.el(".dhx_slider__range");
        }
        var direction = this.config.mode === "horizontal" ? "left" : "top";
        var size = this.config.mode === "horizontal" ? "width" : "height";
        if (this.config.range) {
            var _d = this._currentPosition > this._extraCurrentPosition
                ? [this._currentPosition, this._extraCurrentPosition]
                : [this._extraCurrentPosition, this._currentPosition], more = _d[0], less = _d[1];
            return dom_1.el(".dhx_slider__range", {
                style: (_a = {},
                    _a[direction] = less + "%",
                    _a[size] = more - less + "%",
                    _a),
            });
        }
        if (this._isInverse()) {
            return dom_1.el(".dhx_slider__range", {
                style: (_b = {},
                    _b[direction] = this._currentPosition + "%",
                    _b[size] = 100 - this._currentPosition + "%",
                    _b),
            });
        }
        return dom_1.el(".dhx_slider__range", {
            style: (_c = {},
                _c[direction] = 0,
                _c[size] = this._currentPosition + "%",
                _c),
        });
    };
    Slider.prototype._drawTooltip = function (forExtra) {
        if (forExtra === void 0) { forExtra = false; }
        if (this._activeTooltip === "none")
            return;
        var pos = this._activeTooltip === "extraTooltip" ? this._extraCurrentPosition : this._currentPosition;
        var direction = this.config.mode === "horizontal" ? "left" : "top";
        var classNameModifiers = "";
        if ((forExtra && this._isExtraActive) || (!forExtra && !this._isExtraActive)) {
            classNameModifiers += " dhx_slider__thumb-label--active";
        }
        if (!this._tooltip) {
            this._tooltip = document.createElement("div");
        }
        var coords = this._activeTooltip === "tooltip"
            ? this.getRootView().refs.runner.el.getBoundingClientRect()
            : this.getRootView().refs.extraRunner.el.getBoundingClientRect();
        this._tooltip.className = "dhx_slider__thumb-label" + classNameModifiers;
        this._tooltip.style.left = coords.x + (direction === "left" ? 6 : -30) + window.pageXOffset + "px";
        this._tooltip.style.top = coords.y + (direction === "left" ? -30 : 6) + window.pageYOffset + "px";
        this._tooltip.innerText = this._getValue(pos).toString();
        document.body.appendChild(this._tooltip);
    };
    Slider.prototype._getTicks = function () {
        var _a = this.config, max = _a.max, min = _a.min, step = _a.step, tick = _a.tick, majorTick = _a.majorTick;
        var len = max - min;
        var tickLength = (step * tick) / len;
        var positions = [];
        var length = 0;
        var index = 0;
        while (length < 1) {
            var tickValue = +(Number(min) + length * len).toFixed(5);
            var isMultiple = index % majorTick === 0;
            positions.push({
                position: (this._isInverse() ? (1 - length) * 100 : length * 100) + "%",
                isMultiple: isMultiple,
                label: isMultiple && typeof this.config.tickTemplate === "function"
                    ? this.config.tickTemplate(tickValue)
                    : null,
            });
            length += tickLength;
            index++;
        }
        positions.push({
            position: (this._isInverse() ? 0 : 100) + "%",
            isMultiple: true,
            label: typeof this.config.tickTemplate === "function" ? this.config.tickTemplate(max) : null,
        });
        return positions;
    };
    Slider.prototype._drawTicks = function () {
        var direction = this.config.mode === "horizontal" ? "left" : "top";
        return dom_1.el(".dhx_slider__ticks-holder", this._getTicks().map(function (tick) {
            var _a;
            return dom_1.el("div", {
                class: "dhx_slider__tick" + (tick.isMultiple ? " dhx_slider__tick--major" : ""),
                style: (_a = {},
                    _a[direction] = tick.position,
                    _a),
            }, tick.label !== undefined ? [dom_1.el(".dhx_slider__tick-label", tick.label)] : null);
        }));
    };
    Slider.prototype._isNullable = function (value) {
        if (this._isInverse()) {
            return value === 100;
        }
        else {
            return value === 0;
        }
    };
    Slider.prototype._setTooltip = function (e) {
        if (e.target.classList.contains("dhx_slider__thumb--extra")) {
            this._activeTooltip = "extraTooltip";
        }
        else if (e.target.classList.contains("dhx_slider__thumb")) {
            this._activeTooltip = "tooltip";
        }
        else {
            this._activeTooltip = "none";
        }
    };
    return Slider;
}(view_1.View));
exports.Slider = Slider;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(5);
var html_1 = __webpack_require__(3);
var view_1 = __webpack_require__(6);
var types_1 = __webpack_require__(40);
var Popup = /** @class */ (function (_super) {
    __extends(Popup, _super);
    function Popup(config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, null, core_1.extend({}, config)) || this;
        var popup = (_this._popup = document.createElement("div"));
        popup.className = "dhx_widget dhx_popup" + (_this.config.css ? " " + _this.config.css : "");
        popup.style.position = "absolute";
        popup.setAttribute("role", "dialog");
        popup.setAttribute("aria-modal", "true");
        popup.setAttribute("aria-live", "polite");
        _this.mount(popup, dom_1.create({
            render: function () { return _this.toVDOM(); },
        }));
        _this._clickEvent = function (e) { return _this.events.fire(types_1.PopupEvents.click, [e]); };
        _this.events = config.events || new events_1.EventSystem(_this);
        _this._isActive = false;
        return _this;
    }
    Popup.prototype.show = function (node, config, attached) {
        var _this = this;
        if (config === void 0) { config = {}; }
        if (!this.events.fire(types_1.PopupEvents.beforeShow, [node])) {
            return;
        }
        node = html_1.toNode(node);
        if (this._isActive) {
            this._setPopupSize(node, config);
            return;
        }
        if (attached) {
            this.attach(attached);
        }
        this._popup.style.left = "0";
        this._popup.style.top = "0";
        dom_1.awaitRedraw()
            .then(function () {
            _this._setPopupSize(node, config);
            _this._popup.style.position = "fixed";
            document.body.appendChild(_this._popup);
            _this._isActive = true;
        })
            .then(function () {
            _this._popup.style.position = "absolute";
            _this.events.fire(types_1.PopupEvents.afterShow, [node]);
            _this._outerClickDestructor = _this._detectOuterClick(node);
        });
    };
    Popup.prototype.hide = function () {
        this._hide(false, null);
    };
    Popup.prototype.isVisible = function () {
        return this._isActive;
    };
    Popup.prototype.attach = function (name, config) {
        this._html = null;
        if (typeof name === "object") {
            this._ui = name;
        }
        else if (typeof name === "string") {
            this._ui = new window.dhx[name](null, config);
        }
        else if (typeof name === "function") {
            if (name.prototype instanceof view_1.View) {
                this._ui = new name(null, config);
            }
            else {
                this._ui = {
                    getRootView: function () {
                        return name(config);
                    },
                };
            }
        }
        this.paint();
        return this._ui;
    };
    Popup.prototype.attachHTML = function (html) {
        this._html = html;
        this.paint();
    };
    Popup.prototype.getWidget = function () {
        return this._ui;
    };
    Popup.prototype.getContainer = function () {
        return this.getRootView().refs.content.el;
    };
    Popup.prototype.toVDOM = function () {
        var view;
        if (this._html) {
            view = dom_1.el(".dhx_popup__inner-html-content", {
                ".innerHTML": this._html,
            });
        }
        else {
            view = this._ui ? this._ui.getRootView() : null;
            if (view && view.render) {
                view = dom_1.inject(view);
            }
        }
        return dom_1.el("div", {
            class: "dhx_popup-content",
            onclick: this._clickEvent,
            _key: this._uid,
            _ref: "content",
        }, [view]);
    };
    Popup.prototype.destructor = function () {
        this.hide();
        if (this._outerClickDestructor) {
            this._outerClickDestructor();
        }
        this._popup = null;
    };
    Popup.prototype._setPopupSize = function (node, config, calls) {
        var _this = this;
        if (calls === void 0) { calls = 3; }
        var _a = this._popup.getBoundingClientRect(), width = _a.width, height = _a.height;
        // TODO: IE popup height = 0
        if (this._timeout) {
            clearTimeout(this._timeout);
            this._timeout = null;
        }
        if (calls && (width === 0 || height === 0)) {
            this._timeout = setTimeout(function () {
                if (!_this._isActive) {
                    return;
                }
                _this._setPopupSize(node, config, calls - 1);
                _this._timeout = null;
            });
            return;
        }
        var _b = html_1.fitPosition(node, __assign(__assign({ centering: true, mode: "bottom" }, config), { width: width,
            height: height })), left = _b.left, top = _b.top;
        this._popup.style.left = left;
        this._popup.style.top = top;
        if (config.indent && config.indent !== 0) {
            switch (config.mode) {
                case "top":
                    this._popup.style.top =
                        parseInt(this._popup.style.top.slice(0, -2), null) -
                            parseInt(config.indent.toString(), null) +
                            "px";
                    break;
                case "bottom":
                    this._popup.style.top =
                        parseInt(this._popup.style.top.slice(0, -2), null) +
                            parseInt(config.indent.toString(), null) +
                            "px";
                    break;
                case "left":
                    this._popup.style.left =
                        parseInt(this._popup.style.left.slice(0, -2), null) -
                            parseInt(config.indent.toString(), null) +
                            "px";
                    break;
                case "right":
                    this._popup.style.left =
                        parseInt(this._popup.style.left.slice(0, -2), null) +
                            parseInt(config.indent.toString(), null) +
                            "px";
                    break;
                default:
                    this._popup.style.top =
                        parseInt(this._popup.style.top.slice(0, -2), null) +
                            parseInt(config.indent.toString(), null) +
                            "px";
                    break;
            }
        }
    };
    Popup.prototype._detectOuterClick = function (node) {
        var _this = this;
        var outerClick = function (event) {
            var target = event.target;
            while (target) {
                if (target === node || target === _this._popup) {
                    return;
                }
                target = target.parentNode;
            }
            if (_this._hide(true, event)) {
                document.removeEventListener("mousedown", outerClick);
            }
        };
        document.addEventListener("mousedown", outerClick);
        return function () { return document.removeEventListener("mousedown", outerClick); };
    };
    Popup.prototype._hide = function (fromOuterClick, e) {
        if (this._isActive) {
            if (!this.events.fire(types_1.PopupEvents.beforeHide, [fromOuterClick, e])) {
                return false;
            }
            document.body.removeChild(this._popup);
            this._isActive = false;
            if (this._outerClickDestructor) {
                this._outerClickDestructor();
                this._outerClickDestructor = null;
            }
            this.events.fire(types_1.PopupEvents.afterHide, [e]);
            return true;
        }
    };
    return Popup;
}(view_1.View));
exports.Popup = Popup;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var locale = {
    hours: "Hours",
    minutes: "Minutes",
    save: "Save",
};
exports.default = locale;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This function is designed to resolve conflicts with the time setting for the 12 hour format.
 */
function isTimeCheck(value) {
    return /(^12:[0-5][0-9]?AM$)/i.test(value);
}
exports.isTimeCheck = isTimeCheck;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.linkButtonClasses = ".dhx_button.dhx_button--view_link.dhx_button--icon.dhx_button--size_medium.dhx_button--color_secondary";


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var types_1 = __webpack_require__(4);
var CheckboxEditor = /** @class */ (function () {
    function CheckboxEditor(row, col, config) {
        this._config = config;
        this._cell = { row: row, col: col };
        this._initHandlers();
    }
    CheckboxEditor.prototype.endEdit = function () {
        var value = this._checked;
        if (this._config.events.fire(types_1.GridEvents.beforeEditEnd, [value, this._cell.row, this._cell.col])) {
            this._cell.row = this._config.datacollection.getItem(this._cell.row.id);
            this._config.events.fire(types_1.GridEvents.afterEditEnd, [value, this._cell.row, this._cell.col]);
        }
        else {
            this._input.checked = !value;
        }
    };
    CheckboxEditor.prototype.toHTML = function () {
        if (this._checked === undefined) {
            this._checked = this._cell.row[this._cell.col.id];
        }
        return dom_1.el("label.dhx_checkbox.dhx_cell-editor__checkbox", [
            dom_1.el("input.dhx_checkbox__input", {
                type: "checkbox",
                _hooks: {
                    didInsert: this._handlers.didInsert,
                },
                _key: "cell_editor",
                dhx_id: "cell_editor",
                checked: this._checked,
                style: {
                    userSelect: "none",
                },
            }),
            dom_1.el("span.dhx_checkbox__visual-input"),
        ]);
    };
    CheckboxEditor.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            onChange: function (e) {
                var value = e.target.checked;
                if (_this._config.events.fire(types_1.GridEvents.beforeEditStart, [
                    _this._cell.row,
                    _this._cell.col,
                    "checkbox",
                ])) {
                    _this._checked = value;
                    _this._config.events.fire(types_1.GridEvents.afterEditStart, [
                        _this._cell.row,
                        _this._cell.col,
                        "checkbox",
                    ]);
                    _this.endEdit();
                }
                else {
                    _this._input.checked = !value;
                }
            },
            didInsert: function (node) {
                _this._checkbox = node.el.parentNode.lastChild;
                _this._input = node.el.parentNode.firstChild;
                _this._input.addEventListener("change", _this._handlers.onChange);
            },
        };
    };
    return CheckboxEditor;
}());
exports.CheckboxEditor = CheckboxEditor;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var types_1 = __webpack_require__(4);
var ts_combobox_1 = __webpack_require__(44);
var FocusManager_1 = __webpack_require__(15);
var ComboboxEditor = /** @class */ (function () {
    function ComboboxEditor(row, col, config) {
        this._config = config;
        this._cell = { row: row, col: col };
        this._initHandlers();
    }
    ComboboxEditor.prototype.endEdit = function (withoutSave) {
        var value;
        if (!withoutSave) {
            value = this._input.getValue();
        }
        if (this._config.events.fire(types_1.GridEvents.beforeEditEnd, [value, this._cell.row, this._cell.col])) {
            this._input.popup.hide();
            document.removeEventListener("mousedown", this._handlers.onOuterClick);
            this._cell.row = this._config.datacollection.getItem(this._cell.row.id);
            FocusManager_1.focusManager.setFocusId(this._config.gridId);
            this._config.events.fire(types_1.GridEvents.afterEditEnd, [value, this._cell.row, this._cell.col]);
        }
        else {
            this._input.focus();
        }
    };
    ComboboxEditor.prototype.toHTML = function () {
        var _this = this;
        var content = this._cell.col.options.map(function (item) {
            return { id: "" + item, value: item };
        }) || [];
        if (!this._input) {
            this._input = new ts_combobox_1.Combobox(null, {
                readOnly: true,
                cellHeight: 37,
                css: "dhx_cell-editor__combobox",
            });
            this._input.data.parse(content);
            this._input.setValue(this._cell.row[this._cell.col.id]);
        }
        document.addEventListener("mousedown", this._handlers.onOuterClick);
        this._config.$editable.editor = this;
        dom_1.awaitRedraw().then(function () {
            var holderNode = _this._input.getRootView().refs.holder.el;
            _this._input.popup.getContainer().style.width = holderNode.offsetWidth + "px";
            _this._input.popup.show(holderNode);
        });
        FocusManager_1.focusManager.setFocusId(this._input._uid);
        return dom_1.inject(this._input.getRootView());
    };
    ComboboxEditor.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            onOuterClick: function (e) {
                if (e.target instanceof Node) {
                    var isInput = _this._input &&
                        _this._input.getRootNode() &&
                        _this._input.getRootNode().contains(e.target);
                    var isPopup = _this._input.popup &&
                        _this._input.popup.getRootNode() &&
                        _this._input.popup.getRootNode().contains(e.target);
                    if (!(isInput || isPopup)) {
                        _this.endEdit();
                    }
                }
            },
        };
    };
    return ComboboxEditor;
}());
exports.ComboboxEditor = ComboboxEditor;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(5);
var html_1 = __webpack_require__(3);
var keycodes_1 = __webpack_require__(99);
var view_1 = __webpack_require__(6);
var ts_data_1 = __webpack_require__(7);
var ts_layout_1 = __webpack_require__(39);
var ts_list_1 = __webpack_require__(100);
var ts_popup_1 = __webpack_require__(25);
var keyListener_1 = __webpack_require__(104);
var en_1 = __webpack_require__(46);
var types_1 = __webpack_require__(18);
var helper_1 = __webpack_require__(105);
var types_2 = __webpack_require__(47);
function itemsCountTemplate(count, templateFN) {
    if (typeof templateFN === "function") {
        return templateFN(count);
    }
    else {
        return count + " " + en_1.default.selectedItems;
    }
}
var template = function (item) {
    if (item.icon) {
        return "<span class=\"" + item.icon + " dhx_combobox-options__icon\"></span> <span class=\"dhx_combobox-options__value\">" + item.value + "</span>";
    }
    if (item.src) {
        return "<img src=\"" + item.src + "\" class=\"dhx_combobox-options__image\" alt=" + item.value + "></img> <span class=\"dhx_combobox-options__value\">" + item.value + "</span>";
    }
    return "<span class=\"dhx_combobox-options__value\">" + item.value + "</span>";
};
var Combobox = /** @class */ (function (_super) {
    __extends(Combobox, _super);
    function Combobox(element, config) {
        var _this = _super.call(this, element, core_1.extend({
            template: template,
            listHeight: 224,
            itemHeight: 36,
            disabled: false,
            readOnly: false,
        }, config)) || this;
        _this.config.itemsCount = _this.config.itemsCount || _this.config.showItemsCount; // TODO: remove suite_7.0
        _this.config.helpMessage = _this.config.helpMessage || _this.config.help; // TODO: remove suite_7.0
        if (_this.config.cellHeight && _this.config.itemHeight === 32) {
            _this.config.itemHeight = _this.config.cellHeight; // TODO: remove suite_7.0
        }
        if (_this.config.labelInline) {
            _this.config.labelPosition = "left"; // TODO: remove suite_7.0
        }
        if (Array.isArray(_this.config.data)) {
            _this.events = new events_1.EventSystem(_this);
            _this.data = new ts_data_1.DataCollection({});
            _this.data.parse(_this.config.data);
        }
        else if (_this.config.data) {
            _this.data = _this.config.data;
            _this.events = new events_1.EventSystem(_this);
            _this.events.context = _this;
        }
        else {
            _this.events = new events_1.EventSystem(_this);
            _this.data = new ts_data_1.DataCollection({});
        }
        _this.popup = new ts_popup_1.Popup();
        _this.popup.events.on(ts_popup_1.PopupEvents.afterShow, function () {
            _this.paint();
        });
        _this.popup.events.on(ts_popup_1.PopupEvents.afterHide, function () {
            if (_this.config.multiselection) {
                _this._state.value = "";
            }
            _this.paint();
        });
        _this.popup.events.on(ts_popup_1.PopupEvents.beforeHide, function (fromOuterClick) {
            fromOuterClick && _this._hideOptions();
        });
        if (_this.config.readonly || _this.config.readOnly) {
            _this.config.readOnly = _this.config.readOnly || _this.config.readonly;
            _this._keyListener = new keyListener_1.KeyListener();
        }
        _this._state = {
            value: "",
            ignoreNext: false,
            canDelete: false,
            unselectActive: false,
            currentState: types_2.ComboState.default,
        };
        _this._initHandlers();
        _this._createLayout();
        if (_this.config.value) {
            _this._setValue(_this.config.value, true);
        }
        _this._initEvents();
        var vnode = dom_1.create({
            render: function () { return _this._draw(); },
            hooks: {
                didRedraw: function () {
                    if (_this.popup.isVisible()) {
                        _this.focus();
                        _this._configurePopup();
                    }
                },
            },
        });
        // const container = toNode(element);
        _this.mount(element, vnode);
        return _this;
    }
    Combobox.prototype.focus = function () {
        if (this.config.disabled) {
            return false;
        }
        var rootView = this.getRootView();
        rootView.refs.input.el.focus();
    };
    Combobox.prototype.enable = function () {
        this.config.disabled = false;
        this.paint();
    };
    Combobox.prototype.disable = function () {
        this.config.disabled = true;
        this.paint();
    };
    Combobox.prototype.isDisabled = function () {
        return this.config.disabled;
    };
    Combobox.prototype.clear = function () {
        if (this.config.disabled) {
            return false;
        }
        this.list.selection.remove();
        this._state.value = "";
        this._filter();
        this.paint();
    };
    Combobox.prototype.getValue = function (asArray) {
        var ids = this.list.selection.getId();
        if (asArray) {
            return core_1.wrapBox(ids);
        }
        return Array.isArray(ids) ? ids.join(",") : ids;
    };
    Combobox.prototype.setValue = function (ids) {
        return this._setValue(ids);
    };
    Combobox.prototype.destructor = function () {
        this.popup && this.popup.destructor();
        this.events && this.events.clear();
        this.list && this.list.destructor();
        this._helper && this._helper.destructor();
        this._layout && this._layout.destructor();
        this.config = this.events = this.list = this.popup = null;
        this._helper = this._keyListener = this._handlers = this._state = this._uid = this._isPopupConfiqureted = null;
        this.unmount();
    };
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    Combobox.prototype.setState = function (state) {
        switch (state) {
            case "success":
                this._state.currentState = types_2.ComboState.success;
                break;
            case "error":
                this._state.currentState = types_2.ComboState.error;
                break;
            default:
                this._state.currentState = types_2.ComboState.default;
                break;
        }
        this.paint();
    };
    Combobox.prototype._setValue = function (ids, silent) {
        var _this = this;
        if (silent === void 0) { silent = false; }
        if (this.config.disabled || !this._exsistId(ids)) {
            return false;
        }
        this._filter();
        if (!this.config.multiselection) {
            this.list.selection.remove();
            this._state.value = "";
        }
        if (this.config.multiselection) {
            if (typeof ids === "string") {
                ids = ids.split(",");
            }
            if (typeof ids === "number") {
                ids = [ids];
            }
            ids.forEach(function (id) {
                _this.list.selection.add(id, false, false, silent);
            });
        }
        else {
            var id = core_1.unwrapBox(ids);
            this.list.selection.add(id, false, false, silent);
            var item = this.data.getItem(id);
            if (item) {
                this._state.value = this._getItemText(item);
            }
        }
        this.paint();
    };
    Combobox.prototype._createLayout = function () {
        var list = (this.list = new ts_list_1.List(null, {
            template: this.config.template,
            virtual: this.config.virtual,
            keyNavigation: false,
            multiselection: this.config.multiselection,
            itemHeight: this.config.itemHeight,
            height: this.config.listHeight,
            data: this.data,
        }));
        var layout = (this._layout = new ts_layout_1.Layout(this.popup.getContainer(), {
            css: "dhx_combobox-options dhx_combobox__options",
            rows: [
                {
                    id: "select-unselect-all",
                    hidden: !this.config.multiselection || !this.config.selectAllButton,
                },
                { id: "list", css: "dhx_layout-cell--gravity", height: "content" },
                {
                    id: "not-found",
                    hidden: true,
                },
            ],
            on: {
                click: {
                    ".dhx_combobox__action-select-all": this._handlers.selectAll,
                },
            },
        }));
        layout.getCell("list").attach(list);
        if (this.config.multiselection && this.config.selectAllButton) {
            layout.getCell("select-unselect-all").attach(helper_1.selectAllView);
        }
    };
    Combobox.prototype._initHandlers = function () {
        var _this = this;
        if (this.config.helpMessage) {
            this._helper = new ts_popup_1.Popup({
                css: "dhx_tooltip dhx_tooltip--forced dhx_tooltip--light",
            });
            this._helper.attachHTML(this.config.helpMessage);
        }
        this._handlers = {
            showHelper: function (e) {
                e.preventDefault();
                e.stopPropagation();
                _this._helper.show(e.target, {
                    mode: _this.config.labelPosition === "left" ? "bottom" : "right",
                });
            },
            selectAll: function () {
                if (_this._state.unselectActive) {
                    _this.list.selection.remove();
                    if (_this.config.selectAllButton) {
                        _this._layout.getCell("select-unselect-all").attach(helper_1.selectAllView);
                        _this._state.unselectActive = false;
                    }
                }
                else {
                    _this.data.filter();
                    _this.list.selection.add();
                    if (_this.config.selectAllButton) {
                        _this._layout.getCell("select-unselect-all").attach(helper_1.unselectAllView);
                        _this._state.unselectActive = true;
                    }
                }
                _this._changePopupPosition();
                _this.paint();
            },
            onkeydown: function (e) {
                if (e.key === "Tab" && _this.popup.isVisible()) {
                    _this._hideOptions();
                    return;
                }
                if (!_this.popup.isVisible() && e.which === keycodes_1.KEY_CODES.DOWN_ARROW) {
                    _this._showOptions();
                }
                if (_this.popup.isVisible() && e.which === keycodes_1.KEY_CODES.RIGHT_ARROW) {
                    if (_this.config.readOnly && !_this.config.multiselection) {
                        _this.list.moveFocus(ts_list_1.MOVE_DOWN);
                        e.preventDefault();
                    }
                }
                if (_this.popup.isVisible() && e.which === keycodes_1.KEY_CODES.LEFT_ARROW) {
                    if (_this.config.readOnly && !_this.config.multiselection) {
                        _this.list.moveFocus(ts_list_1.MOVE_UP);
                        e.preventDefault();
                    }
                }
                if (_this.popup.isVisible() && e.which === keycodes_1.KEY_CODES.DOWN_ARROW) {
                    _this.list.moveFocus(ts_list_1.MOVE_DOWN);
                    e.preventDefault();
                }
                if (_this.popup.isVisible() && e.which === keycodes_1.KEY_CODES.UP_ARROW) {
                    _this.list.moveFocus(ts_list_1.MOVE_UP);
                    e.preventDefault();
                }
                if (_this.popup.isVisible() && e.which === keycodes_1.KEY_CODES.ESC) {
                    _this._hideOptions();
                }
                if (_this.popup.isVisible() && e.which === keycodes_1.KEY_CODES.ENTER) {
                    _this.setValue(_this.list.getFocus());
                    if (!_this.config.multiselection)
                        _this._hideOptions();
                }
            },
            onkeyup: function (e) {
                if (!_this.config.multiselection || _this.config.itemsCount) {
                    return;
                }
                if (_this._state.ignoreNext) {
                    _this._state.ignoreNext = false;
                    return;
                }
                if (e.which === keycodes_1.KEY_CODES.BACKSPACE &&
                    _this._state.canDelete &&
                    _this.list.selection.getId().length) {
                    var selected = _this.list.selection.getId();
                    var id = selected[selected.length - 1];
                    _this.list.selection.remove(id);
                    _this.paint();
                }
            },
            oninput: function (e) {
                if (_this.config.disabled) {
                    return;
                }
                var input = e.target;
                var value = input.value;
                _this.events.fire(types_2.ComboboxEvents.input, [value]);
                _this._state.value = value;
                _this._filter();
                if (!value.length) {
                    _this._state.ignoreNext = true;
                    _this._state.canDelete = true;
                }
                else {
                    _this._state.canDelete = false;
                }
                if (!_this.config.multiselection) {
                    _this.list.selection.remove();
                    _this.paint();
                }
                if (!_this.popup.isVisible()) {
                    _this._showOptions();
                }
            },
            oninputclick: function (e) {
                if (_this.config.disabled) {
                    return;
                }
                _this.focus();
                if (e.target.classList.contains("dhx_combobox__action-remove")) {
                    var id = html_1.locate(e);
                    if (!id) {
                        return;
                    }
                    _this.list.selection.remove(id);
                    _this._changePopupPosition();
                    _this.paint();
                    return;
                }
                if (e.target.classList.contains("dhx_combobox__action-clear-all")) {
                    _this.list.selection.getId().forEach(function (id) { return _this.list.selection.remove(id); });
                    if (_this.config.selectAllButton && _this._state.unselectActive) {
                        _this._layout.getCell("select-unselect-all").attach(helper_1.selectAllView);
                        _this._state.unselectActive = false;
                    }
                    _this.paint();
                    return;
                }
                e.preventDefault();
                if (!_this.popup.isVisible()) {
                    _this._showOptions();
                    return;
                }
                _this.focus();
            },
            toggleIcon: function () {
                _this.focus();
                if (_this.popup.isVisible()) {
                    _this._hideOptions();
                }
                else {
                    _this._showOptions();
                }
            },
        };
    };
    Combobox.prototype._initEvents = function () {
        var _this = this;
        this.data.events.on(ts_data_1.DataEvents.load, function () {
            if (_this.config.value) {
                _this._setValue(_this.config.value, true);
            }
        });
        this.list.events.on(ts_list_1.ListEvents.click, function () {
            if (!_this.config.multiselection) {
                _this._hideOptions();
            }
            _this._changePopupPosition();
        });
        this.list.selection.events.on(types_1.SelectionEvents.afterSelect, function () {
            var value = _this.getValue(_this.config.multiselection);
            _this.events.fire(types_2.ComboboxEvents.change, [value]);
            _this._updateSelectedItem(value);
        });
        this.list.selection.events.on(types_1.SelectionEvents.afterUnSelect, function () {
            var multi = _this.config.multiselection;
            var value = _this.getValue(multi);
            _this.events.fire(types_2.ComboboxEvents.change, [value]);
            if (multi)
                _this._updateSelectedItem(value);
        });
        this.popup.events.on(ts_popup_1.PopupEvents.beforeShow, function () {
            if (!_this.popup.isVisible() && !_this._isPopupConfiqureted) {
                _this._configurePopup();
                return false;
            }
        });
        if (this.config.readOnly) {
            this.popup.events.on(ts_popup_1.PopupEvents.afterShow, function () {
                if (_this._state.value) {
                    var id = _this.list.selection.getId();
                    _this.list.setFocus(id);
                }
                else {
                    _this.list.setFocus(_this.data.getId(0));
                }
                _this._keyListener.startNewListen(function (val) { return _this._findBest(val); });
            });
        }
    };
    Combobox.prototype._showOptions = function () {
        if (this._state.value.length) {
            this._state.canDelete = true;
        }
        this._filter();
        if (this._configurePopup()) {
            this.events.fire(types_2.ComboboxEvents.open);
        }
    };
    Combobox.prototype._configurePopup = function () {
        this._isPopupConfiqureted = true;
        var rootView = this.getRootView();
        if (!rootView || !rootView.refs || !rootView.refs.holder) {
            return false;
        }
        if (!this.popup.isVisible()) {
            var holderNode = rootView.refs.holder.el;
            this.popup.getContainer().style.width = holderNode.offsetWidth + "px";
            this.popup.show(holderNode, { mode: "bottom" });
        }
        return true;
    };
    Combobox.prototype._hideOptions = function () {
        var _this = this;
        if (!this.events.fire(types_2.ComboboxEvents.beforeClose)) {
            return;
        }
        if (this.config.readOnly) {
            this._keyListener.endListen();
        }
        this.list.setFocus(this.data.getId(0));
        if (!this.config.multiselection && !this.config.readOnly && !this.list.selection.contains()) {
            this._state.value = "";
        }
        dom_1.awaitRedraw().then(function () { return _this.popup.isVisible() && _this.popup.hide(); });
        this.events.fire(types_2.ComboboxEvents.afterClose);
        this.events.fire(types_2.ComboboxEvents.close); // TODO: remove suite_7.0
        this._filter();
        this.paint();
    };
    Combobox.prototype._filter = function () {
        var _this = this;
        if (this.config.readOnly) {
            return;
        }
        this.data.filter(function (item) {
            return _this.config.filter
                ? _this.config.filter(item, _this._state.value)
                : core_1.isEqualString(_this._state.value, _this._getItemText(item));
        });
        if (this.config.multiselection) {
            this.list.setFocus(this.data.getId(0));
        }
        else {
            var index = this.data.getIndex(this.list.selection.getId());
            this.list.setFocus(this.data.getId(index > -1 ? index : 0));
        }
        if (this.data.getLength() === 0) {
            if (this.config.multiselection && this.config.selectAllButton) {
                this._layout.getCell("select-unselect-all").hide();
            }
            this._layout.getCell("list").hide();
            this._layout.getCell("not-found").attach(helper_1.emptyListView);
            this._layout.getCell("not-found").show();
        }
        else {
            if (this.config.multiselection && this.config.selectAllButton) {
                this._layout.getCell("select-unselect-all").show();
            }
            if (this._layout.getCell("not-found").isVisible()) {
                this._layout.getCell("list").show();
                this._layout.getCell("not-found").hide();
            }
        }
    };
    Combobox.prototype._findBest = function (value) {
        var _this = this;
        var best = this.data.find(function (item) { return core_1.isEqualString(value, _this._getItemText(item)); });
        if (!best) {
            return;
        }
        if (this.list.selection.getId() === best.id) {
            return;
        }
        this.list.setFocus(best.id);
        this.paint();
    };
    Combobox.prototype._exsistId = function (id) {
        var _this = this;
        if (id instanceof Array) {
            return id.every(function (i) { return _this.data.exists(i); });
        }
        return this.data.exists(id);
    };
    Combobox.prototype._draw = function () {
        var _a = this.config, multiselection = _a.multiselection, labelPosition = _a.labelPosition, hiddenLabel = _a.hiddenLabel, required = _a.required, disabled = _a.disabled, css = _a.css, helpMessage = _a.helpMessage, readOnly = _a.readOnly, placeholder = _a.placeholder;
        var item = multiselection ? null : this.data.getItem(this.list.selection.getId());
        var showPlaceholder = !this.list.selection.getId() ||
            (typeof this.list.selection.getId() === "object" &&
                this.list.selection.getId().length === 0);
        var labelStyle = html_1.getLabelStyle(this.config);
        return dom_1.el("div", {
            dhx_widget_id: this._uid,
            onkeydown: this._handlers.onkeydown,
            onkeyup: this._handlers.onkeyup,
            class: "dhx_widget dhx_combobox" +
                (labelPosition === "left" ? " dhx_combobox--label-inline" : "") +
                (hiddenLabel ? " dhx_combobox--sr_only" : "") +
                (required ? " dhx_combobox--required" : "") +
                (disabled ? " dhx_combobox--disabled" : "") +
                (css ? " " + css : ""),
        }, [
            labelStyle
                ? dom_1.el("label.dhx_label.dhx_combobox__label", {
                    style: labelStyle.style,
                    class: helpMessage ? "dhx_label--with-help" : "",
                    onclick: this._handlers.oninputclick,
                }, helpMessage
                    ? [
                        (labelStyle.label || required) &&
                            dom_1.el("span.dhx_label__holder", labelStyle.label),
                        dom_1.el("span.dhx_label-help.dxi.dxi-help-circle-outline", {
                            tabindex: "0",
                            role: "button",
                            onclick: this._handlers.showHelper,
                            id: "dhx_label__help_" + this._uid,
                        }),
                    ]
                    : labelStyle.label)
                : null,
            dom_1.el("div.dhx_combobox-input-box" +
                // (this.popup.isVisible() ? ".dhx_combobox-input-box" : "") +
                (disabled ? ".dhx_combobox-input-box--disabled" : "") +
                (readOnly ? ".dhx_combobox-input-box--readonly" : "") +
                (this._state.currentState === types_2.ComboState.error
                    ? ".dhx_combobox-input-box--state_error"
                    : "") +
                (this._state.currentState === types_2.ComboState.success
                    ? ".dhx_combobox-input-box--state_success"
                    : ""), {
                _ref: "holder",
            }, [
                dom_1.el("div.dhx_combobox-input__icon", {
                    onclick: this._handlers.toggleIcon,
                }, [
                    dom_1.el("span" +
                        (this.popup.isVisible() ? ".dxi.dxi-menu-up" : ".dxi.dxi-menu-down")),
                ]),
                dom_1.el("div.dhx_combobox-input-list-wrapper", {
                    onclick: this._handlers.oninputclick,
                }, [
                    dom_1.el("ul.dhx_combobox-input-list", __spreadArrays(this._drawSelectedItems(), [
                        dom_1.el("li.dhx_combobox-input-list__item.dhx_combobox-input-list__item--input", [
                            dom_1.el("input.dhx_combobox-input", {
                                oninput: this._handlers.oninput,
                                _ref: "input",
                                _key: this._uid,
                                type: "text",
                                placeHolder: showPlaceholder && placeholder ? placeholder : undefined,
                                value: readOnly && item
                                    ? this._getItemText(item)
                                    : this._state.value,
                                readOnly: readOnly || disabled,
                                required: required,
                                "aria-label": readOnly
                                    ? "Select value"
                                    : "Type or select value",
                                "aria-describedby": helpMessage
                                    ? "dhx_label__help_" + this._uid
                                    : null,
                                "aria-expanded": true,
                            }),
                        ]),
                    ])),
                ]),
            ]),
        ]);
    };
    Combobox.prototype._drawSelectedItems = function () {
        var _this = this;
        if (!this.config.multiselection) {
            return [];
        }
        if (this.config.itemsCount) {
            var count = this.list.selection.getId().length;
            return count
                ? [
                    dom_1.el("li.dhx_combobox-input-list__item.dhx_combobox-tag", [
                        dom_1.el("span.dhx_combobox-tag__value", itemsCountTemplate(count, this.config.itemsCount)),
                        dom_1.el("button.dhx_button.dhx_combobox-tag__action.dhx_combobox__action-clear-all", { "aria-label": "clear all" }, [dom_1.el("span.dhx_button__icon.dxi.dxi-close-circle")]),
                    ]),
                ]
                : [];
        }
        return this.list.selection.getId().map(function (id) {
            var item = _this.data.getItem(id);
            if (!item) {
                return null;
            }
            return dom_1.el("li.dhx_combobox-input-list__item.dhx_combobox-tag", { dhx_id: id }, [
                _this._drawImageOrIcon(item),
                dom_1.el("span.dhx_combobox-tag__value", _this._getItemText(item)),
                dom_1.el("button.dhx_button.dhx_button--icon.dhx_combobox-tag__action.dhx_combobox__action-remove", {
                    type: "button",
                    "aria-label": "remove",
                }, [dom_1.el("span.dhx_button__icon.dxi.dxi-close-circle")]),
            ]);
        });
    };
    Combobox.prototype._drawImageOrIcon = function (item) {
        if (item.src) {
            return dom_1.el("img.dhx_combobox-tag__image", { src: item.src, alt: "" });
        }
        else if (item.icon) {
            return dom_1.el("span.dhx_combobox-tag__icon", { class: item.icon });
        }
        return null;
    };
    Combobox.prototype._getItemText = function (item) {
        if (!item) {
            return null;
        }
        return item.value;
    };
    Combobox.prototype._updateSelectedItem = function (id) {
        if (this.config.multiselection) {
            if (this.config.selectAllButton &&
                !this._state.unselectActive &&
                this.data.getLength() === id.length) {
                this._layout.getCell("select-unselect-all").attach(helper_1.unselectAllView);
                this._state.unselectActive = true;
            }
            else if (this.config.selectAllButton && this._state.unselectActive) {
                this._layout.getCell("select-unselect-all").attach(helper_1.selectAllView);
                this._state.unselectActive = false;
            }
            if (!this._state.value.length) {
                this._state.canDelete = id.length === 0;
            }
        }
        else {
            this._state.value = this._getItemText(this.data.getItem(id)) || "";
        }
        this.paint();
    };
    Combobox.prototype._changePopupPosition = function () {
        var _this = this;
        if (this.config.multiselection) {
            dom_1.awaitRedraw().then(function () {
                var holderNode = _this.getRootView().refs.holder.el;
                _this.popup.getContainer().style.width = holderNode.offsetWidth + "px";
                _this.popup.show(holderNode, { mode: "bottom" });
            });
        }
    };
    return Combobox;
}(view_1.View));
exports.Combobox = Combobox;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.KEY_CODES = {
    BACKSPACE: 8,
    ENTER: 13,
    ESC: 27,
    DOWN_ARROW: 40,
    UP_ARROW: 38,
    LEFT_ARROW: 37,
    RIGHT_ARROW: 39,
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(101));
__export(__webpack_require__(45));
__export(__webpack_require__(26));


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var ts_data_1 = __webpack_require__(7);
var dom_1 = __webpack_require__(0);
var KeyManager_1 = __webpack_require__(22);
var FocusManager_1 = __webpack_require__(15);
var types_1 = __webpack_require__(18);
var view_1 = __webpack_require__(6);
var Selection_1 = __webpack_require__(45);
var html_1 = __webpack_require__(3);
var types_2 = __webpack_require__(26);
var editors_1 = __webpack_require__(102);
exports.MOVE_UP = 1;
exports.MOVE_DOWN = 2;
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List(node, config) {
        if (config === void 0) { config = {}; }
        var _this = this;
        var itemHeight = config.itemHeight || (config.virtual ? 37 : null);
        if (itemHeight && typeof itemHeight === "number") {
            itemHeight = itemHeight.toString() + "px";
        }
        _this = _super.call(this, node, core_1.extend({
            itemHeight: itemHeight,
            keyNavigation: true,
            editable: false,
            selection: true,
        }, config)) || this;
        _this._touch = {
            duration: 350,
            dblDuration: 300,
            timer: null,
            start: false,
            timeStamp: null,
        };
        // init data colleciton and link events between widget and data
        var data = _this.config.data;
        if (!(data instanceof ts_data_1.DataCollection)) {
            _this.data = new ts_data_1.DataCollection({});
            _this.events = _this.data.events;
            if (data)
                _this.data.parse(data);
        }
        else {
            // [TODO] deprecate in favor of raw data input
            _this.data = data;
            _this.events = data.events;
        }
        _this.selection = new Selection_1.Selection({
            disabled: !_this.config.selection,
            multiselection: _this.config.multiselection,
        }, _this.data, _this.events);
        if (_this.config.keyNavigation) {
            _this.keyManager = new KeyManager_1.KeyManager(function (e, focusId) {
                return focusId == _this._uid && (!_this._edited || (_this._edited && e.key !== "escape"));
            });
            _this._initHotKey();
            FocusManager_1.focusManager.setFocusId(_this._uid);
        }
        _this.events.on(ts_data_1.DataEvents.change, function (_, status, item) {
            if (status === "setPage") {
                _this.showItem(_this.data.getId(item[0]));
            }
            _this.paint();
        });
        _this.events.on(types_1.SelectionEvents.afterUnSelect, function () { return _this.paint(); });
        _this.events.on(types_1.SelectionEvents.afterSelect, function () { return _this.paint(); });
        _this.events.on(types_2.ListEvents.afterEditEnd, _this.editEnd.bind(_this));
        var drop = function (value) { return function (info) {
            _this.data.setMeta(_this.data.getItem(info.target), "drop", value);
            _this.paint();
        }; };
        _this.events.on(ts_data_1.DragEvents.canDrop, drop(true));
        _this.events.on(ts_data_1.DragEvents.cancelDrop, drop(false));
        var drag = function (value) { return function (info) {
            info.source.map(function (id) { return _this.data.setMeta(_this.data.getItem(id), "drag", value); });
            _this.paint();
        }; };
        _this.events.on(ts_data_1.DragEvents.dragStart, drag(true));
        _this.events.on(ts_data_1.DragEvents.afterDrag, drag(false));
        _this._handlers = {
            onmousedown: function (e) {
                _this._dragStart(e);
            },
            ontouchstart: function (e) {
                _this._touch.timer = setTimeout(function () {
                    _this._dragStart(e);
                }, _this._touch.duration);
                if (!_this._touch.timeStamp) {
                    _this._touch.timeStamp = +e.timeStamp.toFixed();
                }
                else {
                    var dblTap = _this._touch.dblDuration >= _this._touch.timeStamp - +e.timeStamp.toFixed();
                    if (dblTap) {
                        e.preventDefault();
                        _this._dblClick(e);
                    }
                    _this._touch.timeStamp = null;
                }
                setTimeout(function () {
                    _this._touch.timeStamp = null;
                }, _this._touch.dblDuration);
            },
            ontouchmove: function (e) {
                _this._touch.start && e.preventDefault();
                _this._clearTouchTimer();
            },
            ontouchend: function () {
                _this._touch.start = false;
                _this._clearTouchTimer();
            },
            ondragstart: function () { return (_this.config.dragMode && !_this._edited ? false : null); },
            oncontextmenu: function (e) {
                var id = html_1.locate(e);
                if (!core_1.isDefined(id)) {
                    return;
                }
                _this.events.fire(types_2.ListEvents.itemRightClick, [id, e]);
            },
            onclick: function (e) {
                var id = html_1.locate(e);
                if (!core_1.isDefined(id)) {
                    return;
                }
                _this.selection.add(id, e.ctrlKey || e.metaKey, e.shiftKey);
                _this.events.fire(types_2.ListEvents.click, [id, e]);
                _this._focus = id;
                _this.paint();
            },
            ondblclick: function (e) {
                _this._dblClick(e);
            },
            onscroll: function (e) {
                if (_this.config.virtual) {
                    _this._topOffset = e.target.scrollTop;
                    _this._visibleHeight = e.target.offsetHeight;
                    _this.paint();
                }
            },
            onmouseover: function (e) {
                var id = html_1.locate(e);
                if (!core_1.isDefined(id)) {
                    return;
                }
                var prevId = html_1.locate(e.relatedTarget);
                if (id !== prevId)
                    _this.events.fire(types_2.ListEvents.itemMouseOver, [id, e]);
            },
        };
        var evs = _this.config.eventHandlers;
        if (evs) {
            for (var _i = 0, _a = Object.entries(evs); _i < _a.length; _i++) {
                var _b = _a[_i], event_name = _b[0], events = _b[1];
                _this._handlers[event_name] = html_1.eventHandler(function (e) { return html_1.locate(e); }, events, _this._handlers[event_name]);
            }
        }
        if (_this.config.dragMode) {
            ts_data_1.dragManager.setItem(_this._uid, _this);
        }
        // defaults for virtual rendering
        _this._topOffset = _this._visibleHeight = 0;
        var view = dom_1.create({
            render: function () { return _this._renderList(); },
            hooks: {
                didMount: function (vm) {
                    if (_this.config.virtual)
                        _this._visibleHeight = vm.node.el.offsetHeight;
                },
                didRedraw: function (vm) { return _this._didRedraw(vm); },
            },
        });
        _this.mount(node, view);
        return _this;
    }
    List.prototype._didRedraw = function (vm) {
        // do nothing
    };
    List.prototype._dblClick = function (e) {
        var id = html_1.locate(e);
        if (!id) {
            return;
        }
        id = this.data.getItem(id).id;
        if (this.config.editable) {
            this.editItem(id);
        }
        this.events.fire(types_2.ListEvents.doubleClick, [id, e]);
    };
    List.prototype._clearTouchTimer = function () {
        if (this._touch.timer) {
            clearTimeout(this._touch.timer);
            this._touch.timer = null;
        }
    };
    List.prototype._dragStart = function (e) {
        var _this = this;
        this._touch.start = true;
        var itemsForGhost = [];
        var item = html_1.locateNode(e, "dhx_id");
        var itemId = item && item.getAttribute("dhx_id");
        var selectionIds = this.selection.getId();
        if (this.config.multiselection && selectionIds instanceof Array) {
            selectionIds.map(function (id) {
                if (id !== itemId && _this.getRootView().refs[id]) {
                    itemsForGhost.push(_this.getRootView().refs[id].el);
                }
            });
            selectionIds = __spreadArrays(selectionIds);
        }
        if (typeof selectionIds === "string") {
            selectionIds = [selectionIds];
        }
        return this.config.dragMode && !this._edited
            ? ts_data_1.dragManager.onMouseDown(e, selectionIds || [itemId], itemsForGhost)
            : null;
    };
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    List.prototype.disableSelection = function () {
        this.selection.disable();
    };
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    List.prototype.enableSelection = function () {
        this.selection.enable();
    };
    List.prototype.editItem = function (id) {
        this._edited = id;
        if (!this.data.getItem(this._edited) || !this.events.fire(types_2.ListEvents.beforeEditStart, [id])) {
            this._edited = null;
            return;
        }
        this._getHotkeys();
        this.paint();
        this.events.fire(types_2.ListEvents.afterEditStart, [id]);
    };
    // [TODO] maybe better name
    List.prototype.editEnd = function (value, id) {
        if (this._edited) {
            if (value !== null) {
                var item = this.data.getItem(id);
                this.data.update(id, __assign(__assign({}, item), { value: value }));
            }
            this._edited = null;
            this.paint();
        }
    };
    /*
        Focus API allows to mark item as active one, but not selected yet
        Used by keyboard navigation
    */
    List.prototype.getFocusItem = function () {
        return this.data.getItem(this._focus);
    };
    List.prototype.setFocus = function (id) {
        if (this._focus != id && this.data.exists(id)) {
            this._focus = id;
            this.showItem(id);
            this.events.fire(types_2.ListEvents.focusChange, [this.data.getIndex(this._focus), this._focus]);
            this.paint();
        }
    };
    List.prototype.getFocus = function () {
        return this._focus;
    };
    List.prototype.destructor = function () {
        this.events && this.events.clear();
        this.keyManager && this.keyManager.destructor();
        this.selection && this.selection.destructor();
        this.config = this.events = this.selection = this.keyManager = null;
        this._handlers = this._focus = this._edited = this._events = this._topOffset = this._visibleHeight = this._touch = null;
        this.unmount();
    };
    List.prototype.showItem = function (id) {
        var rootView = this.getRootView();
        if (!rootView || !rootView.node || !rootView.node.el || typeof id === "undefined") {
            return;
        }
        var listEl = this.getRootNode();
        if (!listEl) {
            return;
        }
        var virtual = this.config.virtual;
        var index = this.data.getIndex(id);
        var currentPage = Math.floor(index / listEl.children.length) || 0;
        var el = listEl.children[index - listEl.children.length * currentPage];
        if (!virtual && !el)
            return;
        var height = virtual ? parseInt(this.config.itemHeight) : el.clientHeight;
        var top = virtual ? index * height : el.offsetTop;
        if (top >= listEl.scrollTop + listEl.clientHeight - height) {
            listEl.scrollTo(0, top - listEl.clientHeight + height);
        }
        else if (top < listEl.scrollTop) {
            listEl.scrollTo(0, top);
        }
    };
    List.prototype._renderItem = function (item, index) {
        var itemHeight = this.config.itemHeight;
        if (item.$empty) {
            return dom_1.el("li", {
                class: "dhx_list-item",
                style: {
                    height: itemHeight,
                },
            });
        }
        var html = (this.config.template && this.config.template(item)) || item.html;
        var focus = item.id == this._focus;
        if (item.id == this._edited) {
            var editor = editors_1.getEditor(item, this);
            return editor.toHTML();
        }
        var mx = this.data.getMetaMap(item);
        var node = __assign(__assign(__assign(__assign({}, this._events), { class: "dhx_list-item" +
                (mx && mx.selected ? " dhx_list-item--selected" : "") +
                (focus ? " dhx_list-item--focus" : "") +
                (mx && mx.drop && !this._edited ? " dhx_list-item--drophere" : "") +
                (mx && mx.drag && !this._edited ? " dhx_list-item--dragtarget" : "") +
                (this.config.dragMode && !this._edited ? " dhx_list-item--drag" : "") +
                (item.css ? " " + item.css : ""), dhx_id: item.id, _ref: item.id.toString(), style: {
                height: itemHeight,
            }, _key: item.id, ".innerHTML": html }), this.getItemAriaAttrs(this, item)), { tabindex: focus ? 0 : -1 });
        if (html) {
            node[".innerHTML"] = html;
            return dom_1.el("li", node);
        }
        else {
            node.class += " dhx_list-item--text";
            return dom_1.el("li", node, item.text || item.value);
        }
    };
    List.prototype._renderList = function () {
        var _this = this;
        var range = this._getRange();
        // mapRange
        var data = this.data.getRawData(range[0], range[1]);
        var kids = data.map(function (obj, index) { return _this._renderItem(obj, index); });
        if (this.config.virtual) {
            kids = __spreadArrays([
                dom_1.el(".div", { style: { height: range[2] + "px" } })
            ], kids, [
                dom_1.el(".div", { style: { height: range[3] + "px" } }),
            ]);
        }
        return dom_1.el("ul.dhx_widget.dhx_list", __assign(__assign({ style: {
                "min-height": this.config.itemHeight,
                "max-height": this.config.height,
                position: "relative",
            }, class: (this.config.css ? this.config.css : "") +
                (this.config.multiselection && this.selection.getItem() ? " dhx_no-select--pointer" : ""), dhx_widget_id: this._uid }, this._handlers), this.getListAriaAttrs(this.config, this.data.getLength())), kids);
    };
    List.prototype.moveFocus = function (mode, step) {
        var length = this.data.getLength();
        if (!length) {
            return;
        }
        var id = this._focus;
        var index = id ? this.data.getIndex(id) : -1;
        step = step || 1;
        if (mode === exports.MOVE_DOWN) {
            id = this.data.getId(Math.min(index + step, length - 1));
        }
        else if (mode === exports.MOVE_UP) {
            id = this.data.getId(Math.max(index - step, 0));
        }
        this.setFocus(id);
    };
    List.prototype._getRange = function () {
        if (this.config.virtual) {
            var overscanCount = 5;
            var visibleHeight = this._visibleHeight || parseInt(this.config.height);
            var itemHeight = parseInt(this.config.itemHeight);
            var total = this.data.getLength();
            var totalHeight = this.data.getLength() * itemHeight;
            var position = this._topOffset;
            // correct value to be in [0, total-visible] range
            position = Math.max(0, Math.min(position, totalHeight - visibleHeight));
            var index = Math.floor(position / itemHeight);
            var count = Math.min(total - index, Math.floor(visibleHeight / itemHeight) + overscanCount);
            this._topOffset = position;
            return [index, count + index, index * itemHeight, totalHeight - itemHeight * (count + index)];
        }
        else {
            return [0, -1, 0, 0];
        }
    };
    List.prototype._getHotkeys = function () {
        var _this = this;
        return {
            arrowDown: function (e) {
                _this.moveFocus(exports.MOVE_DOWN);
                e.preventDefault();
            },
            arrowUp: function (e) {
                _this.moveFocus(exports.MOVE_UP);
                e.preventDefault();
            },
            escape: function () {
                _this.editEnd(null);
            },
            enter: function (e) {
                _this.selection.add(_this._focus);
                _this.events.fire(types_2.ListEvents.click, [_this._focus, e]);
            },
            "shift+enter": function (e) {
                _this.selection.add(_this._focus, false, true);
                _this.events.fire(types_2.ListEvents.click, [_this._focus, e]);
            },
            "ctrl+enter": function (e) {
                _this.selection.add(_this._focus, true, false);
                _this.events.fire(types_2.ListEvents.click, [_this._focus, e]);
            },
            "ctrl+a": function (e) {
                if (_this.config.multiselection) {
                    e.preventDefault();
                    _this.selection.remove();
                    var ids = _this.data.map(function (i) { return i.id; });
                    ids.forEach(function (id) {
                        if (_this.config.multiselection === "ctrlClick") {
                            _this.selection.add(id, true);
                        }
                        else {
                            _this.selection.add(id);
                        }
                    });
                }
            },
        };
    };
    List.prototype._initHotKey = function () {
        var handlers = this._getHotkeys();
        for (var key in handlers) {
            this.keyManager.addHotKey(key, handlers[key]);
        }
        for (var key in this.config.hotkeys) {
            this.keyManager.addHotKey(key, this.config.hotkeys[key]);
        }
    };
    List.prototype.getItemAriaAttrs = function (context, item) {
        var getAriaGrabbed = function (context, item) {
            return context.config.dragMode && !context._edited
                ? { "aria-grabbed": Boolean(item.$dragtarget && !context._edited).toString() }
                : {};
        };
        var getAriaRoleDescription = function (context) {
            return context.config.editable
                ? {
                    "aria-roledescription": "" + (context._edited ? "Press Enter to stop editing" : "Double click to edit content"),
                }
                : {};
        };
        return __assign(__assign({ role: "option", "aria-selected": item.$selected ? "true" : "false" }, getAriaGrabbed(context, item)), getAriaRoleDescription(context));
    };
    List.prototype.getListAriaAttrs = function (config, dataLength) {
        return {
            role: "listbox",
            "aria-label": "Listbox " + (config.title || "") + ", count of options = " + dataLength + "." + (config.editable ? " Content is editable." : ""),
            "aria-multiselectable": config.selection && config.multiselection ? "true" : "false",
            "aria-readonly": config.editable ? "false" : "true",
        };
    };
    return List;
}(view_1.View));
exports.List = List;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InputEditor_1 = __webpack_require__(103);
function getEditor(item, list) {
    return new InputEditor_1.InputEditor(item, list);
}
exports.getEditor = getEditor;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var types_1 = __webpack_require__(26);
var InputEditor = /** @class */ (function () {
    function InputEditor(item, list) {
        var _this = this;
        this._list = list;
        this._config = list.config;
        this._item = item;
        this._list.events.on(types_1.ListEvents.focusChange, function (index, id) {
            if (_this._mode && id !== _this._item.id) {
                _this.endEdit();
            }
        });
        this._initHandlers();
    }
    InputEditor.prototype.endEdit = function () {
        if (this._input) {
            var value = this._input.value;
            if (this._list.events.fire(types_1.ListEvents.beforeEditEnd, [value, this._item.id])) {
                this._input.removeEventListener("blur", this._handlers.onBlur);
                this._input.removeEventListener("change", this._handlers.onChange);
                this._handlers = {};
                this._mode = false;
                this._list.events.fire(types_1.ListEvents.afterEditEnd, [value, this._item.id]);
            }
            else {
                this._input.focus();
            }
        }
    };
    InputEditor.prototype.toHTML = function () {
        this._mode = true;
        var itemHeight = this._config.itemHeight;
        return dom_1.el(".dhx_input__wrapper", { role: "presentation" }, [
            dom_1.el("div.dhx_input__container", { role: "presentation" }, [
                dom_1.el("input.dhx_input", {
                    class: this._item.css ? " " + this._item.css : "",
                    style: {
                        height: itemHeight,
                        width: "100%",
                        padding: "8px, 12px",
                    },
                    _hooks: {
                        didInsert: this._handlers.didInsert,
                    },
                    _key: this._item.id,
                    dhx_id: this._item.id,
                }),
            ]),
        ]);
    };
    InputEditor.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            onBlur: function () {
                _this.endEdit();
            },
            onChange: function () {
                _this.endEdit();
            },
            didInsert: function (node) {
                var input = node.el;
                _this._input = input;
                input.focus();
                input.value = _this._item.value;
                input.setSelectionRange(0, input.value.length);
                input.addEventListener("change", _this._handlers.onChange);
                input.addEventListener("blur", _this._handlers.onBlur);
            },
        };
    };
    return InputEditor;
}());
exports.InputEditor = InputEditor;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CLEAR_TIMEOUT = 2000;
var KeyListener = /** @class */ (function () {
    function KeyListener() {
        var _this = this;
        this._sequence = "";
        document.addEventListener("keydown", function (e) {
            if (!_this._isActive) {
                return;
            }
            var key = e.key;
            if (key === "Backspace" && _this._sequence.length > 0) {
                _this._sequence = _this._sequence.slice(0, _this._sequence.length - 1);
                _this._change();
            }
            if (key.length < 2) {
                // handle only single key value
                _this._sequence += key;
                _this._change();
            }
        });
    }
    KeyListener.prototype.startNewListen = function (action) {
        this._isActive = true;
        this._sequence = "";
        this._currentAction = action;
    };
    KeyListener.prototype.endListen = function () {
        this._currentAction = null;
        this.reset();
        this._isActive = false;
    };
    KeyListener.prototype.reset = function () {
        this._sequence = "";
    };
    KeyListener.prototype._change = function () {
        this._currentAction(this._sequence);
        this._addClearTimeout();
    };
    KeyListener.prototype._addClearTimeout = function () {
        var _this = this;
        if (this._clearTimeout) {
            clearTimeout(this._clearTimeout);
        }
        this._clearTimeout = setTimeout(function () {
            _this.reset();
            _this._clearTimeout = null;
        }, CLEAR_TIMEOUT);
    };
    return KeyListener;
}());
exports.KeyListener = KeyListener;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var en_1 = __webpack_require__(46);
function selectAllView() {
    return dom_1.el(".dhx_list-item.dhx_combobox-options__item.dhx_combobox-options__item--select-all.dhx_combobox__action-select-all", en_1.default.selectAll);
}
exports.selectAllView = selectAllView;
function unselectAllView() {
    return dom_1.el(".dhx_list-item.dhx_combobox-options__item.dhx_combobox-options__item--select-all.dhx_combobox__action-select-all", en_1.default.unselectAll);
}
exports.unselectAllView = unselectAllView;
function emptyListView() {
    return dom_1.el("ul.dhx_list", [dom_1.el("li.dhx_list-item.dhx_combobox-options__item", {}, en_1.default.notFound)]);
}
exports.emptyListView = emptyListView;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var types_1 = __webpack_require__(4);
var core_1 = __webpack_require__(1);
var data_1 = __webpack_require__(11);
var TextAreaEditor = /** @class */ (function () {
    function TextAreaEditor(row, col, config) {
        this._config = config;
        this._cell = { row: row, col: col };
        this._width = this._cell.col.$width;
        var widthOffset = 0;
        if (this._config.firstColId === this._cell.col.id && this._cell.row.hasOwnProperty("$level")) {
            widthOffset = data_1.getTreeCellWidthOffset(this._cell.row);
        }
        this._width -= widthOffset - 4;
        this._initHandlers();
    }
    TextAreaEditor.prototype.endEdit = function (withoutSave) {
        var value;
        if (!withoutSave) {
            value = this._editor.value;
        }
        if (this._config.events.fire(types_1.GridEvents.beforeEditEnd, [value, this._cell.row, this._cell.col])) {
            this._editor.removeEventListener("blur", this._handlers.onBlur);
            this._editor.removeEventListener("change", this._handlers.onChange);
            this._editor.removeEventListener("input", this._handlers.onInput);
            if (this._cell.col.type !== "string" && core_1.isNumeric(value)) {
                value = parseFloat(value);
            }
            this._cell.row = this._config.datacollection.getItem(this._cell.row.id);
            this._config.events.fire(types_1.GridEvents.afterEditEnd, [value, this._cell.row, this._cell.col]);
        }
        else {
            this._editor.focus();
        }
    };
    TextAreaEditor.prototype.toHTML = function () {
        var value = this._cell.row[this._cell.col.id];
        if (this._editor) {
            value = this._editor.value;
        }
        this._config.$editable.editor = this;
        var css = typeof this._cell.row.height === "undefined" && !this._cell.col.htmlEnable
            ? "dhx_cell-editor dhx_cell-editor__textarea"
            : "dhx_cell-editor dhx_cell-editor__textarea_constant-height";
        return dom_1.el("textarea", {
            _hooks: {
                didInsert: this._handlers.didInsert,
            },
            _ref: "textarea",
            _key: "cell_editor",
            dhx_id: "cell_editor",
            value: value,
            class: css,
            style: {
                width: this._width,
            },
        });
    };
    TextAreaEditor.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            onBlur: function () {
                _this.endEdit();
            },
            onChange: function () {
                _this.endEdit();
            },
            onInput: function (event) {
                var _a;
                if (typeof _this._cell.row.height !== "undefined" || _this._cell.col.htmlEnable)
                    return;
                var currentHeight = _this._getCurrentHeight(_this._editor.value, {
                    width: _this._cell.col.$width - 2,
                    maxHeight: _this._config.rowHeight,
                });
                _this._cell.row[_this._cell.col.id] = _this._editor.value;
                var totalHeight = data_1.getCalculatedRowHeight(data_1.getMaxRowHeight(_this._cell.row, _this._config.columns));
                var currentRowHeight = data_1.getCalculatedRowHeight(data_1.getMaxRowHeight((_a = {}, _a[_this._cell.col.id] = _this._cell.row[_this._cell.col.id], _a), _this._config.columns));
                _this._minHeight = totalHeight === currentRowHeight ? _this._config.rowHeight : totalHeight;
                if (currentHeight >= _this._minHeight && currentHeight !== _this._prevHeight) {
                    if (!_this._config.events.fire(types_1.GridEvents.beforeRowResize, [
                        _this._cell.row,
                        event,
                        currentHeight,
                    ])) {
                        return;
                    }
                    _this._config.events.fire(types_1.GridEvents.afterRowResize, [
                        _this._cell.row,
                        event,
                        currentHeight,
                    ]);
                }
                _this._prevHeight = currentHeight;
            },
            didInsert: function (node) {
                _this._editor = node.el;
                _this._editor.focus();
                _this._editor.setSelectionRange(0, _this._editor.value.length);
                _this._editor.addEventListener("change", _this._handlers.onChange);
                _this._editor.addEventListener("blur", _this._handlers.onBlur);
                _this._editor.addEventListener("input", _this._handlers.onInput);
            },
        };
    };
    TextAreaEditor.prototype._getCurrentHeight = function (value, config) {
        config = __assign({ width: 100, maxHeight: 40, lineHeight: 20 }, config);
        var element = document.createElement("textarea");
        element.className = "dhx_cell-editor dhx_cell-editor__textarea";
        element.value = value;
        element.style.width = config.width + "px";
        element.style.lineHeight = config.lineHeight + "px";
        element.style.maxHeight = config.maxHeight + "px";
        element.style.boxSizing = "border-box";
        document.body.appendChild(element);
        var height = this._getElementHeight(element);
        var currentRows = element.value.split("\n").length;
        var calculateRows = Math.round(height / config.lineHeight);
        var calculateHeight = height < config.maxHeight ? config.maxHeight : height;
        document.body.removeChild(element);
        return currentRows === 1 && currentRows === calculateRows ? config.maxHeight : calculateHeight;
    };
    TextAreaEditor.prototype._getElementHeight = function (element) {
        return element.scrollHeight;
    };
    return TextAreaEditor;
}());
exports.TextAreaEditor = TextAreaEditor;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var html_1 = __webpack_require__(3);
var Cells_1 = __webpack_require__(23);
var FixedRows_1 = __webpack_require__(48);
var main_1 = __webpack_require__(8);
function getFixedColsHeader(renderConfig, layout) {
    if (typeof renderConfig.leftSplit !== "number") {
        return;
    }
    var splitHidden = 0;
    for (var index = 0; index < renderConfig.leftSplit; index++) {
        if (renderConfig.columns[index].hidden)
            splitHidden++;
    }
    if (splitHidden === renderConfig.leftSplit) {
        return;
    }
    var columns = renderConfig.columns.slice(0, renderConfig.leftSplit - splitHidden);
    var width = 0;
    for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
        var col = columns_1[_i];
        width += col.$width;
    }
    var frozenHeaderCols = renderConfig.leftSplit >= 0 &&
        FixedRows_1.getFixedRows(__assign(__assign({}, renderConfig), { currentColumns: columns, $positions: __assign(__assign({}, renderConfig.$positions), { xStart: 0, xEnd: renderConfig.leftSplit }), scroll: { top: 0, left: 0 }, columns: columns }), __assign(__assign({}, layout), { name: "header", position: "top", shifts: { x: 0, y: 0 } }));
    var headerRowsConfig = __assign(__assign({}, layout), { name: "header", position: "top" });
    return (frozenHeaderCols &&
        dom_1.el(".dhx_" + headerRowsConfig.name + "-fixed-cols", {
            style: {
                position: "absolute",
                top: 0,
                left: 0,
                maxWidth: width,
                overflow: "hidden",
            },
            role: "rowgroup",
            "aria-rowcount": frozenHeaderCols.length,
        }, frozenHeaderCols.body));
}
exports.getFixedColsHeader = getFixedColsHeader;
function getFixedCols(renderConfig, layout) {
    if (typeof renderConfig.leftSplit !== "number") {
        return;
    }
    var splitHidden = 0;
    for (var index = 0; index < renderConfig.leftSplit; index++) {
        if (renderConfig.columns[index].hidden)
            splitHidden++;
    }
    if (splitHidden === renderConfig.leftSplit) {
        return;
    }
    var scrollBarWidth = renderConfig.$totalWidth <= layout.wrapper.width ? 0 : html_1.getScrollbarWidth();
    var fixedContentHeight = renderConfig.$totalHeight + renderConfig.headerHeight + renderConfig.footerHeight;
    var fixedColsHeight = fixedContentHeight - (fixedContentHeight > layout.gridBodyHeight ? scrollBarWidth : null);
    var columns = renderConfig.columns.slice(0, renderConfig.leftSplit - splitHidden);
    renderConfig.fixedColumnsWidth = main_1.getTotalWidth(columns);
    var fixedCols = Cells_1.getCells(__assign(__assign({}, renderConfig), { columns: columns, $positions: __assign(__assign({}, renderConfig.$positions), { xStart: 0, xEnd: renderConfig.leftSplit }) }));
    var isSticky = layout.sticky;
    var footerRowsConfig = __assign(__assign({}, layout), { name: "footer", position: "bottom" });
    var frozenFooterCols = renderConfig.leftSplit >= 0 &&
        FixedRows_1.getRows(__assign(__assign({}, renderConfig), { currentColumns: columns, $positions: __assign(__assign({}, renderConfig.$positions), { xStart: 0, xEnd: renderConfig.leftSplit }) }), __assign(__assign({}, layout), { name: "footer", position: "bottom" }));
    var footerHeight = 0;
    if (frozenFooterCols) {
        frozenFooterCols.forEach(function (node) { return (footerHeight += node.attrs.style.height); });
    }
    var frozenFooter = isSticky
        ? frozenFooterCols &&
            dom_1.el(".dhx_" + footerRowsConfig.name + "-fixed-cols", {
                style: {
                    position: "absolute",
                    top: fixedColsHeight < layout.gridBodyHeight ? fixedColsHeight - footerHeight : null,
                    left: 0,
                    bottom: fixedColsHeight > layout.gridBodyHeight
                        ? 0 + (isSticky ? scrollBarWidth : 0) + "px"
                        : null,
                },
                role: "rowgroup",
                "aria-rowcount": frozenFooterCols.length,
            }, frozenFooterCols)
        : null;
    var pos = renderConfig.$positions;
    var spans = Cells_1.getSpans(renderConfig, true);
    return [
        dom_1.el(".dhx_grid-fixed-cols-wrap", {
            style: {
                height: fixedColsHeight > layout.gridBodyHeight
                    ? (isSticky
                        ? layout.gridBodyHeight
                        : layout.gridBodyHeight + renderConfig.headerHeight) - scrollBarWidth
                    : fixedColsHeight,
                paddingTop: renderConfig.headerHeight,
                overflow: "hidden",
                width: renderConfig.fixedColumnsWidth,
            },
            role: "presentation",
            "aria-label": "Fixed column",
        }, [
            dom_1.el(".dhx_grid-fixed-cols", __assign(__assign({ style: {
                    top: -renderConfig.scroll.top + renderConfig.headerHeight - 1 + "px",
                    paddingTop: layout.shifts.y,
                    height: renderConfig.$totalHeight,
                    position: "absolute",
                }, _flags: dom_1.KEYED_LIST }, Cells_1.getHandlers(pos.yStart, pos.xStart, renderConfig)), { role: "rowgroup", "aria-rowcount": renderConfig.data.length }), __spreadArrays([spans && dom_1.el(".dhx_span-spans", { role: "presentation" }, [spans])], fixedCols)),
            dom_1.el(".dhx_frozen-cols-border", { role: "presentation" }),
        ]),
        renderConfig.$footer ? frozenFooter : null,
    ];
}
exports.getFixedCols = getFixedCols;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var ts_combobox_1 = __webpack_require__(44);
var ts_data_1 = __webpack_require__(7);
var types_1 = __webpack_require__(4);
var data_1 = __webpack_require__(11);
var html_1 = __webpack_require__(3);
var inputDelay;
function onInput(eventSystem, colId, filter, filterObj, e) {
    var inputHandler = function () {
        var val = html_1.isIE() || html_1.isSafari() ? e.target.value : e.path ? e.path[0].value : e.explicitOriginalTarget.value;
        filterObj.value[colId] = val;
        eventSystem.fire(types_1.GridEvents.filterChange, [val, colId, filter]);
        eventSystem.fire(types_1.GridEvents.headerInput, [val, colId, filter]); // TODO: remove sute_7.0
    };
    if (filter === "selectFilter") {
        inputHandler();
        return;
    }
    if (inputDelay) {
        clearTimeout(inputDelay);
    }
    inputDelay = setTimeout(inputHandler, 250);
}
function applyMathMethod(column, config, method, validate) {
    if (!column || !config || !method) {
        return;
    }
    var id = column.id;
    var columnData = validate
        ? validate(id, config.data)
        : config.data.reduce(function (items, item) {
            if (item[id] !== undefined && item[id] !== "" && !isNaN(item[id])) {
                items.push(parseFloat(item[id]));
            }
            return items;
        }, []);
    // [todo] move to treegrid
    var roots = columnData;
    if (config.type === "tree") {
        roots = config.data.reduce(function (total, item) {
            if (item.$level === 0) {
                if (item[id] !== undefined && item[id] !== "" && !isNaN(item[id])) {
                    total.push(parseFloat(item[id]) || 0);
                }
                else {
                    var value_1 = 0;
                    config.datacollection.eachChild(item.id, function (cell) {
                        if (!config.datacollection.haveItems(cell.id)) {
                            value_1 += parseFloat(cell[id]);
                        }
                    });
                    total.push(value_1);
                }
            }
            return total;
        }, []);
    }
    return method(columnData, roots);
}
function getContent() {
    var _this = this;
    return {
        inputFilter: {
            element: {},
            toHtml: function (column, config) {
                var colId = column.id.toString();
                this.element[colId] = dom_1.el("label.dhx_grid-filter__label.dxi.dxi-magnify", { "aria-label": "Type to search", _ref: column.id + "_filter" }, [
                    dom_1.el("input", {
                        type: "text",
                        class: "dhx_input dhx_grid-filter",
                        oninput: [onInput, config.events, column.id, "inputFilter", this],
                        _key: column.id,
                        value: this.value[column.id] || "",
                    }),
                ]);
                return this.element[colId];
            },
            match: function (value, match) {
                var res = "";
                for (var i = 0; i < match.length; i++) {
                    var char = match.charCodeAt(i);
                    if ((char > 32 && char < 48) || char === 63 || (char > 90 && char < 95) || char === 124) {
                        res += "\\" + match[i];
                    }
                    else {
                        res += match[i];
                    }
                }
                return new RegExp("" + res, "i").test(value);
            },
            value: {},
        },
        selectFilter: {
            element: {},
            toHtml: function (column, config) {
                var _this = this;
                var colId = column.id.toString();
                this.element[colId] = dom_1.el("label.dhx_grid-filter__label.dxi.dxi-menu-down", { _ref: column.id + "_filter" }, [
                    dom_1.el("select.dxi.dxi-menu-down", {
                        type: "text",
                        class: "dhx_input dhx_grid-filter dhx_grid-filter--select",
                        onchange: [onInput, config.events, column.id, "selectFilter", this],
                        _key: column.id,
                    }, __spreadArrays([
                        dom_1.el("option", { value: "" }, "")
                    ], column.$uniqueData.map(function (val) {
                        return val &&
                            dom_1.el("option", {
                                value: val,
                                selected: _this.value[column.id] === val.toString(),
                            }, val);
                    }))),
                ]);
                return this.element[colId];
            },
            match: function (value, match) { return (match ? value.toString() == match : true); },
            value: {},
        },
        comboFilter: {
            element: {},
            toHtml: function (column, config) {
                var combo;
                var colId = column.id.toString();
                if (!this.element[colId]) {
                    var conf = column.header.filter(function (item) { return item.filterConfig !== undefined; })[0];
                    if (conf && conf.filterConfig) {
                        combo = new ts_combobox_1.Combobox(null, JSON.parse(JSON.stringify(conf.filterConfig)));
                    }
                    else {
                        combo = new ts_combobox_1.Combobox(null, {});
                    }
                    combo.data.parse(column.$uniqueData.map(function (value) { return ({ value: value }); }));
                    config.events.on(ts_data_1.DataEvents.load, function () {
                        combo.data.parse(column.$uniqueData.map(function (value) { return ({ value: value }); }));
                    });
                    this.element[colId] = combo;
                    combo.events.on("change", function (id) {
                        if (id) {
                            var item = void 0;
                            var value = void 0;
                            if (combo.data.getItem(id)) {
                                item = combo.list.selection.getItem();
                                value = item.value;
                                config.events.fire(types_1.GridEvents.filterChange, [value, colId, "comboFilter"]);
                                config.events.fire(types_1.GridEvents.headerInput, [value, colId, "comboFilter"]); // TODO: remove suite_7.0
                            }
                            else {
                                config.events.fire(types_1.GridEvents.filterChange, ["", colId, "comboFilter"]);
                                config.events.fire(types_1.GridEvents.headerInput, ["", colId, "comboFilter"]); // TODO: remove suite_7.0
                            }
                        }
                    });
                    config.events.on(types_1.GridEvents.scroll, function () {
                        combo._hideOptions();
                    });
                    combo.popup.events.on("afterHide", function () {
                        if (!combo.list.selection.getItem()) {
                            combo.clear();
                            config.events.fire(types_1.GridEvents.filterChange, ["", colId, "comboFilter"]);
                            config.events.fire(types_1.GridEvents.headerInput, ["", colId, "comboFilter"]); // TODO: remove suite_7.0
                        }
                    });
                }
                else {
                    combo = this.element[column.id];
                }
                return dom_1.inject(combo.getRootView());
            },
            match: function (value, match) { return (match ? value === match : true); },
            destroy: function () {
                if (_this.content && _this.content.comboFilter.element) {
                    var comboFilters = _this.content.comboFilter.element;
                    for (var combo in comboFilters) {
                        comboFilters[combo].destructor();
                        delete comboFilters[combo];
                    }
                }
            },
            value: {},
        },
        sum: {
            calculate: function (col, roots) { return roots.reduce(function (sum, c) { return (sum += parseFloat(c) || 0); }, 0); },
            toHtml: function (column, config) {
                var value = applyMathMethod(column, config, this.calculate);
                if (column.format || column.type === "percent") {
                    return data_1.toFormat(value, column.type, column.format);
                }
                else {
                    return value ? value.toFixed(3) : null;
                }
            },
        },
        avg: {
            calculate: function (col, roots) {
                return col.length ? roots.reduce(function (sum, c) { return (sum += c); }, 0) / col.length : null;
            },
            toHtml: function (column, config) {
                var value = applyMathMethod(column, config, this.calculate);
                if (column.format || column.type === "percent") {
                    return data_1.toFormat(value, column.type, column.format);
                }
                else {
                    return value ? value.toFixed(3) : null;
                }
            },
        },
        min: {
            calculate: function (col) { return (col.length ? Math.min.apply(Math, col) : null); },
            toHtml: function (column, config) {
                var value = applyMathMethod(column, config, this.calculate);
                if (column.format || column.type === "percent") {
                    return data_1.toFormat(value, column.type, column.format);
                }
                else {
                    return value ? value.toFixed(3) : null;
                }
            },
        },
        max: {
            calculate: function (col) { return (col.length ? Math.max.apply(Math, col) : null); },
            toHtml: function (column, config) {
                var value = applyMathMethod(column, config, this.calculate);
                if (column.format || column.type === "percent") {
                    return data_1.toFormat(value, column.type, column.format);
                }
                else {
                    return value ? value.toFixed(3) : null;
                }
            },
        },
        count: {
            calculate: function (_col, roots) {
                // [todo]
                return roots.reduce(function (count, c) { return (count += c); }, 0);
            },
            validate: function (colId, data) {
                return data.reduce(function (items, item) {
                    if (item[colId] !== undefined && item[colId] !== "") {
                        if (isNaN(item)) {
                            items.push(1);
                        }
                        else {
                            items.push(item);
                        }
                    }
                    return items;
                }, []);
            },
            toHtml: function (column, config) {
                return applyMathMethod(column, config, this.calculate, this.validate);
            },
        },
    };
}
exports.getContent = getContent;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var types_1 = __webpack_require__(4);
var html_1 = __webpack_require__(3);
function startResize(grid, column, ev, cb) {
    ev.targetTouches && ev.preventDefault();
    var initX = ev.targetTouches ? ev.targetTouches[0].clientX : ev.clientX;
    var columns = grid.config.columns.filter(function (col) { return !col.hidden; });
    var initWidth = 0;
    grid.config.$resizing = column;
    var moveHandler = function (e) {
        var i = core_1.findIndex(columns, function (obj) {
            return obj.id === column;
        });
        var currentX = e.targetTouches ? e.targetTouches[0].clientX : e.clientX;
        var containerLeft = currentX - grid.getRootNode().getBoundingClientRect().left;
        var scrollbarY = grid.config.$totalHeight > grid.config.height ? html_1.getScrollbarWidth() : 0;
        if (grid.config.leftSplit === i + 1 && containerLeft >= grid.config.width - scrollbarY - 2) {
            return;
        }
        initWidth = initWidth || columns[i].$width;
        var minWidth = columns[i].minWidth || 40;
        var maxWidth = columns[i].maxWidth;
        var move = currentX - initX;
        var cols = __spreadArrays(columns);
        var size = initWidth + move;
        var final;
        if ((maxWidth && size >= maxWidth) || size <= minWidth) {
            if (size <= minWidth) {
                final = minWidth;
            }
            if (size >= maxWidth) {
                final = maxWidth;
            }
        }
        else {
            final = size;
        }
        cols[i].$width = final;
        cols[i].$fixed = true;
        grid.events.fire(types_1.GridEvents.resize, [columns[i], e]);
        grid.paint();
    };
    var upHandler = function () {
        if (!ev.targetTouches) {
            document.removeEventListener("mousemove", moveHandler);
            document.removeEventListener("mouseup", upHandler);
        }
        else {
            document.removeEventListener("touchmove", moveHandler);
            document.removeEventListener("touchend", upHandler);
        }
        cb();
    };
    if (!ev.targetTouches) {
        document.addEventListener("mousemove", moveHandler);
        document.addEventListener("mouseup", upHandler);
    }
    else {
        document.addEventListener("touchmove", moveHandler);
        document.addEventListener("touchend", upHandler);
    }
    grid.paint();
}
exports.startResize = startResize;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var html_1 = __webpack_require__(3);
var types_1 = __webpack_require__(27);
var nodeTimeout = new WeakMap();
var containers = new Map();
function createMessageContainer(parent, position) {
    var messageContainer = document.createElement("div");
    messageContainer.setAttribute("data-position", position);
    messageContainer.className =
        "dhx_message-container " +
            "dhx_message-container--" +
            position +
            (parent === document.body ? " dhx_message-container--in-body" : "");
    return messageContainer;
}
function onExpire(node, fromClick) {
    if (fromClick) {
        clearTimeout(nodeTimeout.get(node));
    }
    var container = node.parentNode;
    var position = container.getAttribute("data-position");
    var parent = container.parentNode;
    var messageContainerInfo = containers.get(parent);
    if (!messageContainerInfo) {
        return;
    }
    var positionInfo = messageContainerInfo[position];
    if (!positionInfo) {
        return;
    }
    var stack = positionInfo.stack;
    var index = stack.indexOf(node);
    if (index !== -1) {
        container.removeChild(node);
        stack.splice(index, 1);
        if (stack.length === 0) {
            parent.removeChild(container);
        }
        return;
    }
}
function message(props) {
    var _a;
    if (typeof props === "string") {
        props = { text: props };
    }
    props.position = props.position || types_1.MessageContainerPosition.topRight;
    var messageBox = document.createElement("div");
    messageBox.className = "dhx_widget dhx_message " + (props.css || "");
    messageBox.setAttribute("role", "alert");
    props.text && messageBox.setAttribute("aria-describedby", "dhx_alert__content");
    if (props.html) {
        messageBox.innerHTML = props.html;
    }
    else {
        messageBox.innerHTML = "<span class=\"dhx_message__text\">" + props.text + "</span>\n\t\t" + (props.icon ? "<span class=\"dhx_message__icon dxi " + props.icon + "\"></span>" : "");
    }
    var parent = props.node ? html_1.toNode(props.node) : document.body;
    var position = getComputedStyle(parent).position;
    if (position === "static") {
        parent.style.position = "relative";
    }
    var messageContainerInfo = containers.get(parent);
    if (!messageContainerInfo) {
        containers.set(parent, (_a = {},
            _a[props.position] = {
                stack: [],
                container: createMessageContainer(parent, props.position),
            },
            _a));
    }
    else if (!messageContainerInfo[props.position]) {
        messageContainerInfo[props.position] = {
            stack: [],
            container: createMessageContainer(parent, props.position),
        };
    }
    var _b = containers.get(parent)[props.position], stack = _b.stack, container = _b.container;
    if (stack.length === 0) {
        parent.appendChild(container);
    }
    stack.push(messageBox);
    container.appendChild(messageBox);
    if (props.expire) {
        var timeout = setTimeout(function () { return onExpire(messageBox); }, props.expire);
        nodeTimeout.set(messageBox, timeout);
    }
    messageBox.onclick = function () { return onExpire(messageBox, true); };
}
exports.message = message;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {
Object.defineProperty(exports, "__esModule", { value: true });
var en_1 = __webpack_require__(50);
var common_1 = __webpack_require__(51);
function alert(props) {
    var apply = props.buttons && props.buttons[0] ? props.buttons[0] : en_1.default.apply;
    var unblock = common_1.blockScreen(props.blockerCss);
    return new Promise(function (res) {
        var alertBox = document.createElement("div");
        alertBox.setAttribute("role", "alert");
        alertBox.setAttribute("aria-modal", "true");
        props.text && alertBox.setAttribute("aria-describedby", "dhx_alert__content");
        props.header && alertBox.setAttribute("aria-labelledby", "dhx_alert__header");
        alertBox.className = "dhx_widget dhx_alert " + (props.css || "");
        var closeAlert = function (e) {
            if (e.key === "Escape" || e.key === "Esc" || e.key === " ") {
                e.preventDefault();
                alertBox.querySelector("button").click();
            }
        };
        alertBox.innerHTML = "\n\t\t\t" + (props.header ? "<div id=\"dhx_alert__header\" class=\"dhx_alert__header\"> " + props.header + " </div>" : "") + "\n\t\t\t" + (props.text ? "<div id=\"dhx_alert__content\" class=\"dhx_alert__content\">" + props.text + "</div>" : "") + "\n\t\t\t<div class=\"dhx_alert__footer " + (props.buttonsAlignment ? "dhx_alert__footer--" + props.buttonsAlignment : "") + "\">\n\t\t\t\t<button type=\"button\" aria-label=\"confirm\" class=\"dhx_alert__apply-button dhx_button dhx_button--view_flat dhx_button--color_primary dhx_button--size_medium\">" + apply + "</button>\n\t\t\t</div>";
        document.body.appendChild(alertBox);
        alertBox.querySelector(".dhx_alert__apply-button").focus();
        alertBox.querySelector("button").addEventListener("click", function () {
            unblock();
            document.body.removeChild(alertBox);
            res(true);
        });
        alertBox.addEventListener("keydown", closeAlert);
    });
}
exports.alert = alert;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)))

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {
Object.defineProperty(exports, "__esModule", { value: true });
var en_1 = __webpack_require__(50);
var common_1 = __webpack_require__(51);
function confirm(props) {
    props.buttonsAlignment = props.buttonsAlignment || "right";
    var apply = props.buttons && props.buttons[1] ? props.buttons[1] : en_1.default.apply;
    var reject = props.buttons && props.buttons[0] ? props.buttons[0] : en_1.default.reject;
    var unblock = common_1.blockScreen(props.blockerCss);
    return new Promise(function (res) {
        var confirmBox = document.createElement("div");
        confirmBox.setAttribute("role", "alertdialog");
        confirmBox.setAttribute("aria-modal", "true");
        props.text && confirmBox.setAttribute("aria-describedby", "dhx_alert__content");
        props.header && confirmBox.setAttribute("aria-labelledby", "dhx_alert__header");
        var focusItem;
        var answer = function (val) {
            unblock();
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            confirmBox.removeEventListener("click", clickHandler);
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            document.removeEventListener("keydown", closeConfirm);
            document.body.removeChild(confirmBox);
            res(val);
        };
        var clickHandler = function (e) {
            if (e.target.tagName === "BUTTON") {
                answer(e.target.classList.contains("dhx_alert__confirm-aply"));
            }
        };
        var closeConfirm = function (e) {
            if (e.key === "Escape" || e.key === "Esc") {
                confirmBox.querySelector(".dhx_alert__confirm-aply").focus();
                answer(e.target.classList.contains("dhx_alert__confirm-reject"));
            }
            else if (e.key === "Tab") {
                if (focusItem === "aply") {
                    focusItem = "reject";
                    confirmBox.querySelector(".dhx_alert__confirm-reject").focus();
                }
                else {
                    focusItem = "aply";
                    confirmBox.querySelector(".dhx_alert__confirm-aply").focus();
                }
                e.preventDefault();
            }
        };
        confirmBox.className = "dhx_widget dhx_alert dhx_alert--confirm" + (props.css ? " " + props.css : "");
        confirmBox.innerHTML = "\n\t\t" + (props.header ? "<div class=\"dhx_alert__header\"> " + props.header + " </div>" : "") + "\n\t\t" + (props.text ? "<div class=\"dhx_alert__content\">" + props.text + "</div>" : "") + "\n\t\t\t<div class=\"dhx_alert__footer " + (props.buttonsAlignment ? "dhx_alert__footer--" + props.buttonsAlignment : "") + "\">\n\t\t\t\t<button type=\"button\" aria-label=\"reject\" class=\"dhx_alert__confirm-reject dhx_button dhx_button--view_link dhx_button--color_primary dhx_button--size_medium\">" + reject + "</button>\n\t\t\t\t<button type=\"button\"  aria-label=\"aply\"class=\"dhx_alert__confirm-aply dhx_button dhx_button--view_flat dhx_button--color_primary dhx_button--size_medium\">" + apply + "</button>\n\t\t\t</div>";
        document.body.appendChild(confirmBox);
        focusItem = "aply";
        confirmBox.querySelector(".dhx_alert__confirm-aply").focus();
        confirmBox.addEventListener("click", clickHandler);
        document.addEventListener("keydown", closeConfirm);
    });
}
exports.confirm = confirm;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)))

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var html_1 = __webpack_require__(3);
var types_1 = __webpack_require__(27);
var DEFAULT_SHOW_DELAY = 750;
var DEFAULT_HIDE_DELAY = 200;
function findPosition(targetRect, position, width, height) {
    var margin = 8; // margin top/bot, left/right
    var pos;
    var left;
    var top;
    switch (position) {
        case types_1.Position.center:
            left = targetRect.left + window.pageXOffset + (targetRect.width - width) / 2;
            if (left + margin < window.pageXOffset) {
                left = targetRect.left + window.pageXOffset;
            }
            top = targetRect.top + window.pageYOffset + (targetRect.height - height) / 2;
            pos = types_1.RealPosition.center;
            return { left: left, top: top, pos: pos };
        case types_1.Position.right:
            pos = types_1.RealPosition.right;
            left = targetRect.right + window.pageXOffset;
            if (left + width + margin > window.innerWidth + window.pageXOffset) {
                // set left
                left = window.pageXOffset + targetRect.left - width;
                pos = types_1.RealPosition.left;
            }
            top = window.pageYOffset + targetRect.top + (targetRect.height - height) / 2;
            return { left: left, top: top, pos: pos };
        case types_1.Position.bottom:
        default:
            left = window.pageXOffset + targetRect.left + (targetRect.width - width) / 2;
            if (left + width > window.innerWidth + window.pageXOffset) {
                left = window.innerWidth + window.pageXOffset - width;
            }
            else if (left < 0) {
                left = 0;
            }
            pos = types_1.RealPosition.bottom;
            top = window.pageYOffset + targetRect.bottom;
            if (top + height + margin > window.innerHeight + window.pageYOffset) {
                // set top
                top = window.pageYOffset + targetRect.top - height;
                pos = types_1.RealPosition.top;
            }
            return { left: left, top: top, pos: pos };
    }
}
exports.findPosition = findPosition;
// tooltip init
var tooltipBox = document.createElement("div");
var tooltipText = document.createElement("span");
tooltipText.className = "dhx_tooltip__text";
tooltipBox.appendChild(tooltipText);
tooltipBox.setAttribute("role", "tooltip");
tooltipBox.style.position = "absolute";
var lastNode = null;
var isActive = false;
var hideTimeout = null;
var showTimeout = null;
var activeListenersDestructor;
function getZIndex(node) {
    if (node &&
        node.classList.contains("dhx_popup--window") &&
        node.classList.contains("dhx_popup--window_active")) {
        return 2147483647;
    }
    if (node && node.classList.contains("dhx_popup--window")) {
        return 2147483646;
    }
    if (node && node.offsetParent) {
        return getZIndex(node.offsetParent);
    }
    return null;
}
exports.getZIndex = getZIndex;
function showTooltip(node, text, position, css, force, htmlEnable) {
    if (force === void 0) { force = false; }
    var rects = node.getBoundingClientRect();
    if (htmlEnable) {
        tooltipText.innerHTML = text;
    }
    else {
        tooltipText.textContent = text;
    }
    document.body.appendChild(tooltipBox);
    tooltipBox.className = "dhx_widget dhx_tooltip" + (force ? " dhx_tooltip--forced" : "");
    var _a = tooltipBox.getBoundingClientRect(), width = _a.width, height = _a.height;
    var _b = findPosition(rects, position, width, height), left = _b.left, top = _b.top, pos = _b.pos;
    var zIndex = getZIndex(node);
    if (zIndex) {
        tooltipBox.style.zIndex = zIndex.toString();
    }
    switch (pos) {
        case types_1.RealPosition.bottom:
            tooltipBox.style.left = left + "px";
            tooltipBox.style.top = top + "px";
            break;
        case types_1.RealPosition.top:
            tooltipBox.style.left = left + "px";
            tooltipBox.style.top = top + "px";
            break;
        case types_1.RealPosition.left:
            tooltipBox.style.left = left + "px";
            tooltipBox.style.top = top + "px";
            break;
        case types_1.RealPosition.right:
            tooltipBox.style.left = left + "px";
            tooltipBox.style.top = top + "px";
            break;
        case types_1.RealPosition.center:
            tooltipBox.style.left = left + "px";
            tooltipBox.style.top = top + "px";
            break;
    }
    tooltipBox.className += " dhx_tooltip--" + pos + " " + (css || "");
    isActive = true;
    if (!force) {
        setTimeout(function () {
            tooltipBox.className += " dhx_tooltip--animate";
        });
    }
}
function hideTooltip(delay) {
    if (lastNode) {
        hideTimeout = setTimeout(function () {
            document.body.removeChild(tooltipBox);
            isActive = false;
            hideTimeout = null;
        }, delay || DEFAULT_HIDE_DELAY);
    }
}
function addListeners(node, text, config) {
    var force = config.force, showDelay = config.showDelay, hideDelay = config.hideDelay, position = config.position, css = config.css, htmlEnable = config.htmlEnable;
    if (!force) {
        showTimeout = setTimeout(function () {
            showTooltip(node, text, position || types_1.Position.bottom, css, false, htmlEnable);
        }, showDelay || DEFAULT_SHOW_DELAY);
    }
    var hide = function () {
        if (isActive) {
            hideTooltip(hideDelay);
        }
        clearTimeout(showTimeout);
        node.removeEventListener("mouseleave", hide);
        node.removeEventListener("blur", hide);
        document.removeEventListener("mousedown", hide);
        lastNode = null;
        activeListenersDestructor = null;
    };
    if (force) {
        showTooltip(node, text, position, css, force, htmlEnable);
    }
    node.addEventListener("mouseleave", hide);
    node.addEventListener("blur", hide);
    document.addEventListener("mousedown", hide);
    activeListenersDestructor = hide;
}
// default
function tooltip(text, config) {
    var node = html_1.toNode(config.node);
    if (node === lastNode) {
        return;
    }
    if (activeListenersDestructor) {
        activeListenersDestructor();
        activeListenersDestructor = null;
    }
    lastNode = node;
    if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
        addListeners(node, text, __assign(__assign({}, config), { force: true }));
    }
    else {
        addListeners(node, text, config);
    }
}
exports.tooltip = tooltip;
function _mousemove(e) {
    var node = html_1.locateNode(e, "dhx_tooltip_text");
    if (!node) {
        return;
    }
    tooltip(node.getAttribute("dhx_tooltip_text"), {
        position: node.getAttribute("dhx_tooltip_position") || types_1.Position.bottom,
        node: node,
    });
}
function enableTooltip() {
    document.addEventListener("mousemove", _mousemove);
}
exports.enableTooltip = enableTooltip;
function disableTooltip() {
    document.removeEventListener("mousemove", _mousemove);
}
exports.disableTooltip = disableTooltip;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(4);
var html_1 = __webpack_require__(3);
function selectionMove(e, grid, dir, range, toEnd, ctrlUp, shiftUp) {
    if (toEnd === void 0) { toEnd = false; }
    if (ctrlUp === void 0) { ctrlUp = false; }
    if (shiftUp === void 0) { shiftUp = false; }
    if (grid.config.$editable || !grid.config.selection || html_1.locateNodeByClassName(e, "dhx_grid-header-cell")) {
        return;
    }
    if (e) {
        e.preventDefault();
    }
    var selected = grid.selection.getCell();
    var columns = grid.config.columns.filter(function (col) { return !col.hidden; });
    grid.data.filter(function (row) { return !row.hidden; });
    if (selected) {
        if (dir === "vertical") {
            if (toEnd) {
                var newItem = range === 1
                    ? grid.data.getItem(grid.data.getId(grid.data.getLength() - 1))
                    : grid.data.getItem(grid.data.getId(0));
                grid.selection.setCell(newItem.id, selected.column.id, ctrlUp, shiftUp);
                grid.scrollTo(newItem.id.toString(), selected.column.id.toString());
            }
            else {
                var index = grid.data.getIndex(selected.row.id.toString());
                if (index + range >= 0 && index + range < grid.data.getLength()) {
                    var newItem = grid.data.getItem(grid.data.getId(index + range));
                    grid.selection.setCell(newItem.id, selected.column.id, ctrlUp, shiftUp);
                    grid.scrollTo(newItem.id.toString(), selected.column.id.toString());
                }
            }
        }
        else {
            if (toEnd) {
                var newItem = range === 1 ? columns[columns.length - 1] : columns[0];
                grid.selection.setCell(selected.row.id, newItem.id, ctrlUp, shiftUp);
                grid.scrollTo(selected.row.id.toString(), newItem.id.toString());
            }
            else {
                var index = columns.indexOf(selected.column);
                if (index + range >= 0 && index + range < columns.length) {
                    grid.scrollTo(selected.row.id.toString(), columns[index + range].id.toString());
                    grid.selection.setCell(selected.row.id, columns[index + range].id, ctrlUp, shiftUp);
                }
            }
        }
    }
}
exports.selectionMove = selectionMove;
function getKeysHandlers(grid) {
    var cellSelection = grid.config.selection === "cell" ||
        grid.config.selection === "complex" ||
        grid.config.selection === true;
    var gridBodyHandlers = {};
    if (grid.getRootView()) {
        var gridBody_1 = grid.getRootView().refs.grid_body.el;
        gridBodyHandlers = {
            pageUp: function (e) {
                e.preventDefault();
                gridBody_1.scrollTop -= gridBody_1.clientHeight;
            },
            pageDown: function (e) {
                e.preventDefault();
                gridBody_1.scrollTop += gridBody_1.clientHeight;
            },
            home: function (e) {
                e.preventDefault();
                gridBody_1.scrollTop = 0;
            },
            end: function (e) {
                e.preventDefault();
                gridBody_1.scrollTop += gridBody_1.scrollHeight;
            },
        };
    }
    return __assign({ enter: function () {
            if (cellSelection) {
                var selected = grid.selection.getCell();
                if (selected &&
                    ((selected.column.editable !== false && grid.config.editable) || selected.column.editable)) {
                    if (!grid.config.$editable) {
                        if (selected.column.type !== "boolean") {
                            grid.editCell(selected.row.id, selected.column.id, selected.column.editorType);
                        }
                        else {
                            grid.events.fire(types_1.GridEvents.afterEditEnd, [
                                !selected.row[selected.column.id],
                                selected.row,
                                selected.column,
                            ]);
                        }
                    }
                    else {
                        grid.editEnd();
                    }
                }
            }
            else {
                if (grid.config.$editable) {
                    grid.editEnd();
                }
            }
        }, space: function (e) {
            if (cellSelection && grid.config.editable && !grid.config.$editable) {
                var selected = grid.selection.getCell();
                if (selected && selected.column.type === "boolean") {
                    e.preventDefault();
                    grid.events.fire(types_1.GridEvents.afterEditEnd, [
                        !selected.row[selected.column.id],
                        selected.row,
                        selected.column,
                    ]);
                }
            }
        }, escape: function () {
            if (grid.config.$editable) {
                grid.editEnd(true);
            }
        }, tab: function (e) {
            if (!grid.config.selection || html_1.locateNodeByClassName(e, "dhx_grid-header-cell")) {
                return;
            }
            if (e) {
                e.preventDefault();
            }
            if (grid.config.$editable) {
                grid.editEnd();
            }
            var selected = grid.selection.getCell();
            var columns = grid.config.columns.filter(function (col) { return !col.hidden; });
            if (selected) {
                var index = columns.indexOf(selected.column) + 1;
                if (index >= 0 && index < columns.length) {
                    grid.selection.setCell(selected.row.id, columns[index].id);
                    grid.scrollTo(selected.row.id.toString(), columns[index].id.toString());
                }
                else if (index >= 0) {
                    var newLineIndex = grid.data.getIndex(selected.row.id.toString()) + 1;
                    if (newLineIndex < grid.data.getLength()) {
                        grid.selection.setCell(grid.data.getId(newLineIndex), columns[0].id);
                        grid.scrollTo(grid.data.getId(newLineIndex).toString(), columns[0].id.toString());
                    }
                }
            }
        }, "shift+tab": function (e) {
            if (!grid.config.selection || html_1.locateNodeByClassName(e, "dhx_grid-header-cell")) {
                return;
            }
            if (e) {
                e.preventDefault();
            }
            if (grid.config.$editable) {
                grid.editEnd();
            }
            var selected = grid.selection.getCell();
            var columns = grid.config.columns.filter(function (col) { return !col.hidden; });
            if (selected) {
                var index = columns.indexOf(selected.column) - 1;
                if (index >= 0 && index < columns.length) {
                    grid.selection.setCell(selected.row.id, columns[index].id);
                    grid.scrollTo(selected.row.id.toString(), columns[index].id.toString());
                }
                else if (index < grid.data.getLength()) {
                    var newLineIndex = grid.data.getIndex(selected.row.id.toString()) - 1;
                    if (newLineIndex >= 0) {
                        grid.selection.setCell(grid.data.getId(newLineIndex), columns[columns.length - 1].id);
                        grid.scrollTo(grid.data.getId(newLineIndex).toString(), columns[columns.length - 1].id.toString());
                    }
                }
            }
        }, arrowUp: function (e) {
            selectionMove(e, grid, "vertical", -1);
        }, "ctrl+arrowUp": function (e) {
            selectionMove(e, grid, "vertical", -1, true);
        }, "shift+arrowUp": function (e) {
            if (grid.config.multiselection) {
                selectionMove(e, grid, "vertical", -1, false, false, true);
            }
        }, "ctrl+shift+arrowUp": function (e) {
            if (grid.config.multiselection) {
                selectionMove(e, grid, "vertical", -1, true, false, true);
            }
        }, arrowDown: function (e) {
            selectionMove(e, grid, "vertical", 1);
        }, "ctrl+arrowDown": function (e) {
            selectionMove(e, grid, "vertical", 1, true);
        }, "shift+arrowDown": function (e) {
            if (grid.config.multiselection) {
                selectionMove(e, grid, "vertical", 1, false, false, true);
            }
        }, "ctrl+shift+arrowDown": function (e) {
            if (grid.config.multiselection) {
                selectionMove(e, grid, "vertical", 1, true, false, true);
            }
        }, arrowRight: function (e) {
            selectionMove(e, grid, "horizontal", 1);
        }, "ctrl+arrowRight": function (e) {
            selectionMove(e, grid, "horizontal", 1, true);
        }, "shift+arrowRight": function (e) {
            if (grid.config.multiselection) {
                selectionMove(e, grid, "horizontal", 1, false, false, true);
            }
        }, "ctrl+shift+arrowRight": function (e) {
            if (grid.config.multiselection) {
                selectionMove(e, grid, "horizontal", 1, true, false, true);
            }
        }, arrowLeft: function (e) {
            selectionMove(e, grid, "horizontal", -1);
        }, "ctrl+arrowLeft": function (e) {
            selectionMove(e, grid, "horizontal", -1, true);
        }, "shift+arrowLeft": function (e) {
            if (grid.config.multiselection) {
                selectionMove(e, grid, "horizontal", -1, false, false, true);
            }
        }, "ctrl+shift+arrowLeft": function (e) {
            if (grid.config.multiselection) {
                selectionMove(e, grid, "horizontal", -1, true, false, true);
            }
        } }, gridBodyHandlers);
}
exports.getKeysHandlers = getKeysHandlers;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Grid_1 = __webpack_require__(37);
var types_1 = __webpack_require__(4);
var ts_data_1 = __webpack_require__(7);
var html_1 = __webpack_require__(3);
var data_1 = __webpack_require__(11);
var render_1 = __webpack_require__(38);
var ProGrid = /** @class */ (function (_super) {
    __extends(ProGrid, _super);
    function ProGrid(container, config) {
        return _super.call(this, container, __assign({ autoHeight: false }, config)) || this;
    }
    ProGrid.prototype._setEventHandlers = function () {
        var _this = this;
        _super.prototype._setEventHandlers.call(this);
        this.events.on(types_1.GridEvents.headerCellMouseDown, function (col, e) {
            if (!e.targetTouches) {
                _this._dragStartColumn(e, col);
            }
            else {
                _this._touch.timer = setTimeout(function () {
                    _this._dragStartColumn(e, col);
                }, _this._touch.duration);
            }
        });
        this._events.on(types_1.GridSystemEvents.headerCellTouchMove, function (_col, e) {
            _this._touch.start && e.preventDefault();
            _this._clearTouchTimer();
        });
        this._events.on(types_1.GridSystemEvents.headerCellTouchEnd, function () {
            _this._touch.start = false;
            _this._clearTouchTimer();
        });
        this.events.on(types_1.GridEvents.resize, function () {
            _this._parseColumns();
            _this._checkFilters();
        });
        this.events.on(types_1.GridEvents.afterResizeEnd, function () {
            if (_this.config.autoHeight) {
                _this.config.data = _this.data.map(function (row) {
                    var height = data_1.getMaxRowHeight(row, _this.config.columns);
                    row.$height = data_1.getCalculatedRowHeight(height, {
                        rowHeight: _this.config.rowHeight,
                        padding: 8,
                    });
                    return row;
                });
            }
        });
        this.events.on(types_1.GridEvents.afterRowResize, function (row, _e, currentHeight) {
            var _a = _this.data.getItem(row.id), id = _a.id, height = _a.height, $height = _a.$height;
            if (height && height !== $height) {
                _this.data.update(id, { height: currentHeight });
            }
            _this.data.update(id, { $height: currentHeight }, true);
            _this.config.data = _this.data.map(function (row) { return row; });
            _this.paint();
        });
        this.events.on(types_1.GridEvents.scroll, function () {
            _this._lazyLoad();
        });
    };
    ProGrid.prototype._prepareData = function (data) {
        var _this = this;
        this._adjustColumns();
        return data.map(function (row) {
            if (_this.config.autoHeight && typeof row.height === "undefined") {
                var height = data_1.getMaxRowHeight(row, _this.config.columns);
                row.$height =
                    data_1.getCalculatedRowHeight(height, {
                        rowHeight: _this.config.rowHeight,
                        padding: 8,
                    }) || _this.config.rowHeight;
            }
            else {
                row.$height = row.height || _this.config.rowHeight;
            }
            return row;
        });
    };
    ProGrid.prototype._prepareDataFromTo = function (data, from, to) {
        var _this = this;
        return data.mapRange(from, to, function (row) {
            var height = data_1.getMaxRowHeight(row, _this.config.columns);
            row.$height =
                data_1.getCalculatedRowHeight(height, {
                    rowHeight: _this.config.rowHeight,
                    padding: 8,
                }) || _this.config.rowHeight;
            return row;
        });
    };
    ProGrid.prototype._lazyLoad = function () {
        var _this = this;
        var _a, _b;
        var proxy = this.data.dataProxy;
        if (proxy && proxy.config) {
            var data = this.data.getRawData(0, -1, null, 2);
            var renderConfig = render_1.getRenderConfig(this, data, {
                width: this.config.width,
                height: this.config.height,
            });
            var from_1 = this.data.getIndex((_a = renderConfig.currentRows[0]) === null || _a === void 0 ? void 0 : _a.id.toString());
            var to_1 = this.data.getIndex((_b = renderConfig.currentRows[renderConfig.currentRows.length - 1]) === null || _b === void 0 ? void 0 : _b.id.toString());
            if (!this.data.isDataLoaded(from_1, to_1) && this.data.events.fire(ts_data_1.DataEvents.beforeLazyLoad, [])) {
                proxy.updateUrl(null, { from: from_1, limit: proxy.config.limit });
                this.data.load(proxy).then(function () {
                    _this.config.autoHeight && _this._prepareDataFromTo(_this.data, from_1, to_1);
                });
            }
        }
    };
    ProGrid.prototype._getColumnGhost = function (col) {
        var headerRow = this._container.querySelector(".dhx_header-row");
        var colHeaderCell = headerRow.querySelector(".dhx_grid-header-cell[dhx_id=\"" + col.id + "\"]");
        var headerCols = Array.from(headerRow.childNodes);
        var n = headerCols.indexOf(colHeaderCell) + 1;
        var colHeaderCells = this._container.querySelectorAll(".dhx_grid-header-cell[dhx_id=\"" + col.id + "\"]");
        var ghostGridNodes = this._container.querySelectorAll(".dhx_grid_data .dhx_grid-cell:nth-child(" + n + ")");
        var ghostContainer = document.createElement("div");
        colHeaderCells.forEach(function (node) { return ghostContainer.appendChild(node.cloneNode(true)); });
        ghostGridNodes.forEach(function (node) { return ghostContainer.appendChild(node.cloneNode(true)); });
        return ghostContainer;
    };
    ProGrid.prototype._dragStartColumn = function (e, col) {
        var target = e.target;
        var testCustom = function (el) { return el.classList.contains("dhx_grid-custom-content-cell"); };
        var isCustom = testCustom(target.parentElement) || testCustom(target.parentElement.parentElement);
        if (!isCustom &&
            (col.draggable ||
                (this.config.dragItem === "column" && col.draggable !== false) ||
                (this.config.dragItem === "both" && col.draggable !== false)) &&
            !html_1.locateNodeByClassName(e, "dhx_resizer_grip_wrap")) {
            if (e.targetTouches) {
                this._touch.start = true;
            }
            ts_data_1.dragManager.onMouseDown(e, col.id, [this._getColumnGhost(col)]);
        }
    };
    return ProGrid;
}(Grid_1.Grid));
exports.ProGrid = ProGrid;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CollectionStore = /** @class */ (function () {
    function CollectionStore() {
        this._store = {};
    }
    CollectionStore.prototype.setItem = function (id, target) {
        this._store[id] = target;
    };
    CollectionStore.prototype.getItem = function (id) {
        if (!this._store[id]) {
            return null;
        }
        return this._store[id];
    };
    return CollectionStore;
}());
var dhx = (window.dhxHelpers = window.dhxHelpers || {});
dhx.collectionStore = dhx.collectionStore || new CollectionStore();
exports.collectionStore = dhx.collectionStore;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dataproxy_1 = __webpack_require__(13);
var core_1 = __webpack_require__(1);
var ajax_1 = __webpack_require__(21);
var LazyDataProxy = /** @class */ (function (_super) {
    __extends(LazyDataProxy, _super);
    function LazyDataProxy(url, config) {
        var _this = _super.call(this, url) || this;
        _this.config = core_1.extend({
            from: 0,
            limit: 50,
            delay: 50,
            prepare: 0,
        }, config);
        _this.updateUrl(url, { from: _this.config.from, limit: _this.config.limit });
        return _this;
    }
    LazyDataProxy.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (!_this._timeout) {
                ajax_1.ajax.get(_this.url, { responseType: "text" }).then(resolve);
                _this._cooling = true;
                _this._timeout = setTimeout(function () {
                    return;
                });
            }
            else {
                clearTimeout(_this._timeout);
                _this._timeout = setTimeout(function () {
                    ajax_1.ajax.get(_this.url, { responseType: "text" }).then(resolve);
                    _this._cooling = true;
                }, _this.config.delay);
                if (_this._cooling) {
                    resolve(null);
                    _this._cooling = false;
                }
            }
        });
    };
    return LazyDataProxy;
}(dataproxy_1.DataProxy));
exports.LazyDataProxy = LazyDataProxy;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)))

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __webpack_require__(5);
var types_1 = __webpack_require__(18);
var types_2 = __webpack_require__(9);
var Selection = /** @class */ (function () {
    function Selection(config, data, events) {
        var _this = this;
        this.events = events || new events_1.EventSystem(this);
        this._data = data;
        this.config = config;
        this._data.events.on(types_2.DataEvents.removeAll, function () {
            _this._selected = null;
        });
        this._data.events.on(types_2.DataEvents.change, function () {
            if (_this._selected) {
                var near = _this._data.getNearId(_this._selected);
                if (near !== _this._selected) {
                    _this._selected = null;
                    if (near) {
                        _this.add(near);
                    }
                }
            }
        });
    }
    Selection.prototype.getId = function () {
        return this._selected;
    };
    Selection.prototype.getItem = function () {
        if (this._selected) {
            return this._data.getItem(this._selected);
        }
        return null;
    };
    Selection.prototype.remove = function (id) {
        id = id || this._selected;
        if (!id) {
            return true;
        }
        if (this.events.fire(types_1.SelectionEvents.beforeUnSelect, [id])) {
            this._data.update(id, { $selected: false }, true);
            this._selected = null;
            this.events.fire(types_1.SelectionEvents.afterUnSelect, [id]);
            return true;
        }
        return false;
    };
    Selection.prototype.add = function (id) {
        if (this._selected === id || !!this.config.disabled || !this._data.exists(id)) {
            return;
        }
        this.remove();
        this._addSingle(id);
    };
    Selection.prototype.enable = function () {
        this.config.disabled = false;
    };
    Selection.prototype.disable = function () {
        this.remove();
        this.config.disabled = true;
    };
    Selection.prototype._addSingle = function (id) {
        if (this.events.fire(types_1.SelectionEvents.beforeSelect, [id])) {
            this._selected = id;
            this._data.update(id, { $selected: true }, true);
            this.events.fire(types_1.SelectionEvents.afterSelect, [id]);
        }
    };
    return Selection;
}());
exports.Selection = Selection;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var Filters_1 = __webpack_require__(120);
var ComposeLayer = /** @class */ (function () {
    function ComposeLayer() {
        this._data = [];
        this._sizes = { left: 20, right: 20, top: 10, bottom: 10 };
    }
    ComposeLayer.prototype.add = function (obj) {
        this._data.push(obj);
    };
    ComposeLayer.prototype.clear = function () {
        this._data.forEach(function (item) { return item.destructor && item.destructor(); });
        this._data = [];
    };
    ComposeLayer.prototype.getSizes = function () {
        return this._sizes;
    };
    ComposeLayer.prototype.toVDOM = function (width, height) {
        var sizes = { left: 20, right: 20, top: 10, bottom: 10 };
        // eslint-disable-next-line @typescript-eslint/unbound-method
        var toPaint = this._data.filter(function (l) { return !l.dataReady || l.dataReady().length; });
        // eslint-disable-next-line @typescript-eslint/unbound-method
        this._data.forEach(function (l) { return !l.scaleReady || l.scaleReady(sizes); });
        var shift = 0;
        var shiftCount = 0;
        toPaint.forEach(function (item) {
            if (item.seriesShift) {
                shift += item.seriesShift();
                shiftCount++;
            }
        });
        var step = shift / shiftCount;
        shift = shiftCount ? (step - shift) / 2 : 0;
        toPaint.forEach(function (item) {
            if (item.seriesShift) {
                item.seriesShift(shift);
                shift += step;
            }
        });
        this._sizes = sizes;
        var contentWidth = width - sizes.left - sizes.right;
        var contentHeight = height - sizes.top - sizes.bottom;
        var chartsContent = dom_1.sv("g", {
            transform: "translate(" + sizes.left + ", " + sizes.top + ")",
        }, __spreadArrays([
            dom_1.sv("rect.dhx_chart-graph_area", {
                width: contentWidth > 0 ? contentWidth : 0,
                height: contentHeight > 0 ? contentHeight : 0,
                fill: "transparent",
            })
        ], toPaint.map(function (item) {
            return item.paint(width - (sizes.left + sizes.right), height - (sizes.top + sizes.bottom));
        })));
        var defs = dom_1.sv("defs", [Filters_1.dropShadow(), Filters_1.shadow()]);
        return dom_1.sv("svg", {
            width: width,
            height: height,
            role: "graphics-document",
        }, [defs, chartsContent]);
    };
    return ComposeLayer;
}());
exports.ComposeLayer = ComposeLayer;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
exports.shadow = function () {
    return dom_1.sv("filter", { id: "shadow" }, [
        dom_1.sv("feDiffuseLighting", {
            in: "SourceGraphic",
            result: "light",
            "lighting-color": "white",
        }, [dom_1.sv("feDistantLight", { azimuth: 90, elevation: 25 })]),
        dom_1.sv("feComposite", {
            in: "SourceGraphic",
            in2: "light",
            operator: "arithmetic",
            k1: "1",
            k2: "0",
            k3: "0",
            k4: "0",
        }),
    ]);
};
exports.dropShadow = function () {
    return dom_1.sv("filter", {
        id: "dropshadow",
        x: "-100%",
        y: "-100%",
        width: "300%",
        height: "300%",
    }, [
        dom_1.sv("feGaussianBlur", { in: "SourceAlpha", stdDeviation: 2 }),
        dom_1.sv("feOffset", { dx: 0, dy: 0, result: "offsetblur" }),
        dom_1.sv("feOffset", { dx: 0, dy: 0, result: "offsetblur" }),
        dom_1.sv("feFlood", { "flood-color": "rgba(85,85,85,0.5)" }),
        dom_1.sv("feComposite", { in2: "offsetblur", operator: "in" }),
        dom_1.sv("feMerge", [dom_1.sv("feMergeNode"), dom_1.sv("feMergeNode", { in: "SourceGraphic" })]),
    ]);
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(19);
var dom_1 = __webpack_require__(0);
var common_1 = __webpack_require__(2);
var legend_1 = __webpack_require__(122);
function getDefaultMargin(halign, valign) {
    switch (valign) {
        case "middle": {
            switch (halign) {
                case "right":
                    return 60;
                case "left":
                    return 120;
                case "center":
                    throw new Error("cant place legend on center, middle");
            }
        }
        // eslint-disable-next-line no-fallthrough
        case "top":
            return 20;
        case "bottom":
            return 60;
    }
}
var Legend = /** @class */ (function () {
    function Legend(_data, config, _events) {
        var _this = this;
        this._data = _data;
        this._events = _events;
        var defaults = {
            form: "rect",
            itemPadding: 20,
            halign: "right",
            valign: "middle",
        };
        this.config = __assign(__assign({}, defaults), config);
        this.config.margin = config.margin || getDefaultMargin(this.config.halign, this.config.valign);
        this._handlers = {
            onclick: function (id, pieLike) {
                return _this._events.fire(types_1.ChartEvents.toggleSeries, [id, pieLike]);
            },
        };
    }
    Legend.prototype.scaleReady = function (sizes) {
        if (this.config.valign === "middle") {
            if (this.config.halign === "right") {
                sizes.right += this.config.size || 200;
            }
            else if (this.config.halign === "left") {
                sizes.left += this.config.size || 200;
            }
        }
        else {
            if (this.config.valign === "top") {
                sizes.top += this.config.size || 40;
            }
            else if (this.config.valign === "bottom") {
                sizes.bottom += this.config.size || 40;
            }
        }
    };
    Legend.prototype.paint = function (width, height) {
        var _this = this;
        var getLegendAriaAttrs = function (item) { return ({
            role: "button",
            "aria-label": item.active ? "Hide chart " + item.text : "Show chart " + item.text,
        }); };
        var data = this._getData();
        var config = this.config;
        var positionX;
        var positionY;
        var font = common_1.getFontStyle("legend-text");
        var figureWidth = 10; // get Figure width from config ??
        var margin = config.margin, itemPadding = config.itemPadding;
        var svg = [];
        var isMid = config.valign === "middle";
        var xPadding = 0;
        var yPadding = 0;
        data.forEach(function (item) {
            svg.push(dom_1.sv("g", __assign({ transform: "translate(" + xPadding + "," + yPadding + ")", onclick: [_this._handlers.onclick, item.id, _this.config.values], class: "legend-item " + (!item.active ? "not-active" : "") }, getLegendAriaAttrs(item)), [
                dom_1.sv("text", {
                    x: figureWidth / 2 + 5,
                    y: 0,
                    class: "start-text legend-text",
                }, [common_1.verticalCenteredText(item.text)]),
                legend_1.legendShape(config.form, item),
            ]));
            if (!isMid) {
                var textWidth = common_1.getTextWidth(item.text, font);
                xPadding += textWidth + itemPadding + figureWidth * 1.5;
            }
            else {
                yPadding += itemPadding + 2;
            }
        });
        switch (config.valign) {
            case "top":
                positionY = -margin - figureWidth / 2;
                break;
            case "middle":
                positionY = (height - yPadding) / 2 + itemPadding / 2;
                break;
            case "bottom":
                positionY = height + margin;
                break;
        }
        switch (config.halign) {
            case "left":
                positionX = isMid ? -margin : figureWidth / 2;
                break;
            case "center":
                positionX = (width - xPadding) / 2;
                break;
            case "right":
                positionX = isMid
                    ? width + margin + figureWidth / 2
                    : width - xPadding + itemPadding + figureWidth / 2;
                break;
        }
        return dom_1.sv("g", {
            transform: "translate(" + positionX + ", " + positionY + ")",
            "aria-label": "Legend",
        }, svg);
    };
    Legend.prototype._getData = function () {
        var drawData = [];
        if (this.config.values) {
            var text_1 = common_1.locator(this.config.values.text);
            var fill_1 = common_1.locator(this.config.values.color);
            this._data.map(function (item, index) {
                drawData.push({
                    id: item.id,
                    text: text_1(item).toString(),
                    alpha: 1,
                    fill: fill_1(item).toString() || common_1.getDefaultColor(index),
                    active: !item.$hidden,
                });
            });
        }
        else {
            var series = this.config.$seriesInfo;
            for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
                var serie = series_1[_i];
                var seriaConfig = serie.config;
                var useColor = seriaConfig.fill && seriaConfig.color;
                drawData.push({
                    id: seriaConfig.id,
                    text: seriaConfig.name || seriaConfig.value,
                    alpha: seriaConfig.alpha,
                    fill: seriaConfig.fill || seriaConfig.color,
                    color: useColor && seriaConfig.color,
                    active: seriaConfig.active,
                });
            }
        }
        return drawData;
    };
    return Legend;
}());
exports.Legend = Legend;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var figureWidth = 10;
var forms = {
    circle: function (color, fill, fillOpacity) {
        return dom_1.sv("circle", {
            id: core_1.uid(),
            r: figureWidth / 2,
            fill: fill,
            class: "figure " + (color !== "none" ? "with-stroke" : ""),
            "stroke-width": 2,
            "fill-opacity": fillOpacity,
            stroke: color,
            transform: "translate(0, -1)",
        });
    },
    rect: function (color, fill, fillOpacity) {
        return dom_1.sv("rect", {
            id: core_1.uid(),
            fill: fill,
            "fill-opacity": fillOpacity,
            width: figureWidth,
            "stroke-width": 2,
            height: figureWidth,
            class: "figure " + (color !== "none" ? "with-stroke" : ""),
            stroke: color,
            transform: "translate(" + -figureWidth / 2 + ", " + -figureWidth / 2 + ")",
        });
    },
};
function legendShape(form, item) {
    if (typeof form === "string") {
        form = forms[form];
    }
    return form(item.color || "none", item.fill, item.alpha || 1);
}
exports.legendShape = legendShape;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RadialScale_1 = __webpack_require__(124);
var Scale_1 = __webpack_require__(28);
var TextScale_1 = __webpack_require__(126);
var scaleTypes = {
    radial: RadialScale_1.RadialScale,
    text: TextScale_1.TextScale,
    numeric: Scale_1.Scale,
};
exports.default = scaleTypes;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var circle_1 = __webpack_require__(14);
var Scale_1 = __webpack_require__(28);
var RadialScale = /** @class */ (function (_super) {
    __extends(RadialScale, _super);
    function RadialScale(_data, config) {
        return _super.call(this, _data, config, "radial") || this;
    }
    RadialScale.prototype.paint = function (width, height) {
        var _this = this;
        if (this.config.hidden) {
            return null;
        }
        var zebra = this.config.zebra;
        var attribute = this.config.value;
        var realAxis = this.config.showAxis ? this._axis.steps : null;
        var axis = this._axis.steps.map(function (step) { return _this.point(step); });
        var scales = this._data.map(function (item) { return item[attribute]; });
        var config = { scales: scales, axis: axis, realAxis: realAxis, zebra: zebra, attribute: attribute };
        return circle_1.radarScale(config, width, height);
    };
    RadialScale.prototype.point = function (val) {
        return (val - this._axis.min) / (this._axis.max - this._axis.min);
    };
    return RadialScale;
}(Scale_1.Scale));
exports.RadialScale = RadialScale;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(2);
var allowedBases = [1, 2, 3, 5, 10];
var AxisCreator = /** @class */ (function () {
    function AxisCreator(_data, conf) {
        if (conf === void 0) { conf = {}; }
        this._data = _data;
        var chekedData = [];
        for (var _i = 0, _a = this._data; _i < _a.length; _i++) {
            var item = _a[_i];
            if (typeof item === "number") {
                chekedData.push(item);
            }
        }
        var defaults = {
            min: Math.min.apply(Math, chekedData),
            max: Math.max.apply(Math, chekedData),
            maxTicks: this._data.length < 20 ? this._data.length : 20,
        };
        this.config = __assign(__assign({}, defaults), conf);
        if (this.config.padding) {
            this._addPadding();
        }
    }
    AxisCreator.prototype.getScale = function () {
        var steps = this.config.log ? this._logSteps() : this._calculateSteps(this._getStep());
        return {
            min: steps[0],
            max: steps[steps.length - 1],
            steps: steps,
        };
    };
    AxisCreator.prototype._getStep = function () {
        var ticks = this.config.maxTicks;
        var dif = this.config.max - this.config.min;
        var exponent = Math.floor(common_1.log10(dif / ticks));
        var step = Math.pow(10, exponent);
        var rawBase = dif / step / ticks;
        var nearestBase = allowedBases[__spreadArrays(allowedBases, [rawBase]).sort(function (a, b) { return a - b; }).indexOf(rawBase)];
        return nearestBase * step;
    };
    AxisCreator.prototype._calculateSteps = function (step) {
        var firstIndex = Math.floor(this.config.min / step);
        var lastIndex = Math.ceil(this.config.max / step);
        var steps = [];
        for (var i = firstIndex; i <= lastIndex; i++) {
            var currentStep = step * i;
            if (Math.floor(currentStep) !== currentStep) {
                currentStep = parseFloat(currentStep.toFixed(8));
            }
            steps.push(currentStep);
        }
        return steps;
    };
    AxisCreator.prototype._logSteps = function () {
        var steps = [];
        if (this.config.min < 0) {
            var negativeExponent = Math.ceil(common_1.log10(-this.config.min));
            for (var i = negativeExponent; i > 0; i--) {
                steps.push(-(Math.pow(10, i)));
            }
            steps.push(0);
        }
        if (this.config.max > 0) {
            var positiveExponent = Math.ceil(common_1.log10(this.config.max));
            for (var i = 0; i <= positiveExponent; i++) {
                steps.push(Math.pow(10, i));
            }
        }
        return steps;
    };
    AxisCreator.prototype._addPadding = function () {
        this.config.min -= this.config.padding;
    };
    return AxisCreator;
}());
exports.AxisCreator = AxisCreator;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(2);
var Scale_1 = __webpack_require__(28);
var SvgScales_1 = __webpack_require__(52);
var renderScale = {
    left: SvgScales_1.left,
    right: SvgScales_1.right,
    bottom: SvgScales_1.bottom,
    top: SvgScales_1.top,
};
var renderGrid = {
    left: SvgScales_1.leftGrid,
    right: SvgScales_1.rightGrid,
    bottom: SvgScales_1.bottomGrid,
    top: SvgScales_1.topGrid,
};
var TextScale = /** @class */ (function (_super) {
    __extends(TextScale, _super);
    function TextScale() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextScale.prototype.scaleReady = function (sizes) {
        var max = this._data.getLength() - 1;
        var steps = this._data.map(this.locator);
        this._axis = { max: max, steps: steps };
        sizes[this._position] += this.config.size;
    };
    TextScale.prototype.point = function (value) {
        var pos = this._axis.steps.indexOf(value);
        if (this._padding) {
            var max = this._axis.max + 1;
            var padding = 0.5 / max;
            var point = pos / max;
            return this._isXDirection ? padding + point : 1 - padding - point;
        }
        else {
            return this._isXDirection ? pos / this._axis.max : 1 - pos / this._axis.max;
        }
    };
    TextScale.prototype.paint = function (width, height) {
        var _this = this;
        if (this.config.hidden) {
            return null;
        }
        var points = this._axis.steps.map(function (item, index) { return [
            _this._isXDirection ? _this._getAxisPoint(index) * width : _this.point(item) * height,
            item,
        ]; });
        return renderScale[this._position](points, this.config, width, height);
    };
    TextScale.prototype.scaleGrid = function () {
        var _this = this;
        var getPoints = function (width, height) {
            return _this._axis.steps.map(function (item, index) { return [
                _this._isXDirection ? _this._getAxisPoint(index) * width : _this._getAxisPoint(index) * height,
                item,
            ]; });
        };
        var type = this._position;
        var grid = this.config.grid;
        var dashed = this.config.dashed;
        var hidden = this.config.hidden;
        var getSpecificLevel = function () { return _this._axis.steps.indexOf(_this.config.targetLine); };
        return {
            paint: function (width, height) {
                var targetLine = getSpecificLevel();
                var points = getPoints(width, height);
                var config = { targetLine: targetLine, dashed: dashed, grid: grid, hidden: hidden };
                return renderGrid[type](points, width, height, config);
            },
        };
    };
    TextScale.prototype._setDefaults = function (config) {
        var defaults = {
            scalePadding: 30,
            textPadding: 12,
            grid: true,
            targetLine: null,
            showText: true,
        };
        this.locator = common_1.locator(config.text);
        this.config = __assign(__assign({}, defaults), config);
    };
    TextScale.prototype._getAxisPoint = function (index) {
        var max = this._axis.max;
        if (this._padding) {
            var count = max + 1;
            var padding = 0.5 / count;
            var point = index / count;
            return this._isXDirection ? padding + point : 1 - padding - point;
        }
        else {
            return this._isXDirection ? index / max : 1 - index / max;
        }
    };
    return TextScale;
}(Scale_1.Scale));
exports.TextScale = TextScale;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Area_1 = __webpack_require__(53);
var Bar_1 = __webpack_require__(55);
var BarX_1 = __webpack_require__(128);
var Donut_1 = __webpack_require__(129);
var Line_1 = __webpack_require__(32);
var Pie_1 = __webpack_require__(130);
var Pie3D_1 = __webpack_require__(131);
var Radar_1 = __webpack_require__(132);
var Scatter_1 = __webpack_require__(133);
var Spline_1 = __webpack_require__(134);
var SplineArea_1 = __webpack_require__(135);
var seriesTypes = {
    line: Line_1.default,
    spline: Spline_1.default,
    area: Area_1.default,
    splineArea: SplineArea_1.default,
    scatter: Scatter_1.default,
    pie: Pie_1.default,
    pie3D: Pie3D_1.default,
    donut: Donut_1.default,
    radar: Radar_1.default,
    bar: Bar_1.default,
    xbar: BarX_1.default,
};
exports.default = seriesTypes;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Bar_1 = __webpack_require__(55);
var BarX = /** @class */ (function (_super) {
    __extends(BarX, _super);
    function BarX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BarX.prototype.addScale = function (type, scale) {
        var realtype = type === "top" || type === "bottom" ? "left" : "top";
        _super.prototype.addScale.call(this, realtype, scale);
    };
    BarX.prototype.paint = function (width, height, prev) {
        return _super.prototype.paint.call(this, height, width, prev);
    };
    BarX.prototype.getTooltipType = function (id, x, y) {
        if (this.config.baseLine !== undefined && this._baseLinePosition > x) {
            return "left";
        }
        return "right";
    };
    BarX.prototype.getClosest = function (x, y) {
        var res = [Infinity, null, null, null];
        for (var _i = 0, _a = this._points; _i < _a.length; _i++) {
            var point = _a[_i];
            var dist = this._getClosestDist(x, y, point[1], point[0]);
            if (res[0] > dist) {
                res[0] = dist;
                res[1] = point[1];
                res[2] = point[0];
                res[3] = point[2];
            }
        }
        return res;
    };
    BarX.prototype._getText = function (item) {
        return item[4].toString();
    };
    BarX.prototype._getClosestDist = function (x, y, px, py) {
        if (this.config.stacked && x > px) {
            return Infinity;
        }
        return Math.abs(y - py);
    };
    BarX.prototype._path = function (item, prev) {
        item[0] += this._shift;
        return "\nM " + prev + " " + (item[0] - this.config.barWidth / 2) + "\nH " + item[1] + "\nv " + this.config.barWidth + "\nH " + prev;
    };
    BarX.prototype._base = function (height) {
        var baseLine = this.config.baseLine;
        return (this._baseLinePosition = baseLine !== undefined ? this.yScale.point(baseLine) * height : 0);
    };
    BarX.prototype._text = function (item, prev, rotate) {
        var x = (prev + item[1]) / 2;
        var y = item[0];
        var canRotate = rotate && !isNaN(rotate);
        return {
            x: x,
            y: y,
            class: "bar-text",
            transform: canRotate ? "rotate(" + rotate + " " + x + " " + y + ")" : "",
        };
    };
    return BarX;
}(Bar_1.default));
exports.default = BarX;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var circle_1 = __webpack_require__(14);
var common_1 = __webpack_require__(2);
var NoScaleSeria_1 = __webpack_require__(31);
var Donut = /** @class */ (function (_super) {
    __extends(Donut, _super);
    function Donut() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Donut.prototype.paint = function (width, height) {
        var _this = this;
        var roundToTwoNumAfterPoint = function (p) { return Math.round((p * 100 + Number.EPSILON) * 100) / 100; };
        var getPointAriaAttrs = function (value, text, percent) {
            if (percent === void 0) { percent = 0; }
            return ({
                role: "graphics-symbol",
                "aria-roledescription": "piece of donut",
                "aria-label": (text || "") + ", " + value + " (" + roundToTwoNumAfterPoint(percent) + "%)",
            });
        };
        var getChartAriaAttrs = function (cfg) { return ({
            "aria-label": "chart " + (cfg.text || ""),
        }); };
        var _a = this.config, stroke = _a.stroke, strokeWidth = _a.strokeWidth, useLines = _a.useLines, subType = _a.subType;
        var radius;
        if (height > width) {
            radius = width / 2;
        }
        else {
            radius = height / 2;
        }
        var currentPercent = -0.25;
        var svg = [];
        var links = [];
        var lines = [];
        var tooltipData = [];
        this._points.forEach(function (item) {
            var percent = item[0], value = item[1], id = item[2], text = item[3], color = item[4];
            var err = percent === 0 || percent === 1 ? -0.000001 : 0;
            var _a = circle_1.getCoordinates(currentPercent, radius, radius), startX = _a[0], startY = _a[1];
            var avPercent = currentPercent + percent / 2;
            currentPercent += percent + err;
            var _b = circle_1.getCoordinates(currentPercent, radius, radius), endX = _b[0], endY = _b[1];
            var largeArcFlag = percent > 0.5 ? 1 : 0;
            var middleLine = circle_1.getCoordinates(avPercent, radius, radius);
            var isRight = avPercent > -0.25 && avPercent < 0.25;
            var isUp = avPercent > 0.5 || avPercent < 0;
            var lineLength = avPercent < 0.25 ? 5 : -5;
            var _c = [5, 30], startPart = _c[0], endPart = _c[1];
            var _d = [
                circle_1.getCoordinates(avPercent, radius + startPart, radius + startPart),
                circle_1.getCoordinates(avPercent, radius + endPart, radius + endPart),
            ], linkStart = _d[0], linkEnd = _d[1];
            if (useLines && subType !== "percentOnly") {
                links.push(dom_1.sv("path", {
                    d: "M" + linkStart[0] + " " + linkStart[1] + " L" + linkEnd[0] + " " + linkEnd[1] + " h " + lineLength,
                    class: "pie-value-connector",
                }));
            }
            switch (_this.config.subType) {
                case "basic": {
                    var className = isRight ? "donut-value-title start-text" : "donut-value-title end-text";
                    var textPadding = 10;
                    var dy = isUp ? -textPadding * 2 : textPadding;
                    var linkStart_1 = circle_1.getCoordinates(avPercent, radius + 10, radius + 10);
                    var className2 = isRight ? "donut-value start-text" : "donut-value end-text";
                    var text1 = dom_1.sv("text", __assign({ x: useLines ? linkEnd[0] : linkStart_1[0], y: (useLines ? linkEnd[1] : linkStart_1[1]) + dy, class: className }, getPointAriaAttrs(value, text, percent)), [common_1.verticalCenteredText(text.toString())]);
                    var text2 = dom_1.sv("text", {
                        x: useLines ? linkEnd[0] : linkStart_1[0],
                        y: (useLines ? linkEnd[1] : linkStart_1[1]) + dy + 16,
                        class: className2,
                        "aria-hidden": "true",
                    }, [common_1.verticalCenteredText(value.toString())]);
                    links.push(text1);
                    links.push(text2);
                    break;
                }
                case "valueOnly": {
                    var className = isRight ? "donut-value start-text" : "donut-value end-text";
                    var textPadding = 10;
                    var dy = isUp ? -textPadding : textPadding;
                    var linkStart_2 = circle_1.getCoordinates(avPercent, radius + 10, radius + 10);
                    var textSvg = dom_1.sv("text", __assign({ x: useLines ? linkEnd[0] : linkStart_2[0], y: (useLines ? linkEnd[1] : linkStart_2[1]) + dy, class: className }, getPointAriaAttrs(value, text, percent)), [common_1.verticalCenteredText(text.toString())]);
                    links.push(textSvg);
                    break;
                }
                case "percentOnly": {
                    var percentText = dom_1.sv("text", __assign({ x: (middleLine[0] * 7) / 9, y: (middleLine[1] * 7) / 9, class: "pie-inner-value" }, getPointAriaAttrs(value, text, percent)), [common_1.verticalCenteredText(Math.round(percent * 100) + "%")]);
                    links.push(percentText);
                    break;
                }
            }
            var d = "M " + startX + " " + startY + " A " + radius + " " + radius + " 0 " + largeArcFlag + " 1 " + endX + " " + endY + " L 0 0";
            var _e = circle_1.getCoordinates(avPercent, 4, 4), shiftX = _e[0], shiftY = _e[1];
            var currentSector = dom_1.sv("path", {
                d: d,
                _key: id,
                fill: color,
                class: "chart donut",
                onclick: [_this._handlers.onclick, item[1], item[2]],
                // eslint-disable-next-line @typescript-eslint/unbound-method
                onmouseout: [circle_1.pieLikeHandlers.onmouseout],
                // eslint-disable-next-line @typescript-eslint/unbound-method
                onmouseover: [circle_1.pieLikeHandlers.onmouseover, shiftX, shiftY],
                role: "presentation",
            });
            svg.push(currentSector);
            if (_this._points.length > 1 && stroke) {
                var strokeOpts = {
                    "stroke-width": strokeWidth,
                    stroke: stroke,
                };
                var line = dom_1.sv("path", __assign({ d: "M 0 0 L" + endX + " " + endY, fill: "none" }, strokeOpts));
                lines.push(line);
            }
            if (_this._points.length === 1) {
                tooltipData.push([width / 2, height / 2]);
            }
            else {
                tooltipData.push([middleLine[0] * 0.8 + width / 2, middleLine[1] * 0.8 + height / 2]);
            }
        });
        this._center = [width / 2, height / 2];
        this._tooltipData = tooltipData;
        svg = svg.concat(lines);
        svg.push(dom_1.sv("circle", {
            cx: 0,
            cy: 0,
            r: (radius * 5) / 9,
            fill: "#FFFFFF",
            role: "presentation",
        }));
        svg = svg.concat(links);
        return dom_1.sv("g", __assign({ transform: "translate(" + width / 2 + ", " + height / 2 + ")" }, getChartAriaAttrs(this.config)), svg);
    };
    return Donut;
}(NoScaleSeria_1.default));
exports.default = Donut;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var circle_1 = __webpack_require__(14);
var common_1 = __webpack_require__(2);
var NoScaleSeria_1 = __webpack_require__(31);
var Pie = /** @class */ (function (_super) {
    __extends(Pie, _super);
    function Pie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // todo move to NoScaleSeria
    Pie.prototype.paint = function (width, height) {
        var _this = this;
        var roundToTwoNumAfterPoint = function (p) { return Math.round((p * 100 + Number.EPSILON) * 100) / 100; };
        var getPointAriaAttrs = function (value, text, percent) { return ({
            role: "graphics-symbol",
            "aria-roledescription": "piece of pie",
            "aria-label": (text || "") + ", " + value + " (" + roundToTwoNumAfterPoint(percent) + "%)",
        }); };
        var getChartAriaAttrs = function (cfg) { return ({
            "aria-label": "chart " + (cfg.text || ""),
        }); };
        var _a = this.config, stroke = _a.stroke, strokeWidth = _a.strokeWidth, gradient = _a.gradient, useLines = _a.useLines, showText = _a.showText, showTextTemplate = _a.showTextTemplate, subType = _a.subType;
        var radius;
        if (height > width) {
            radius = width / 2;
        }
        else {
            radius = height / 2;
        }
        var currentPercent = -0.25; // 0 percent is (1, 0) point, -.25 is (0, -1) point
        var tooltipData = [];
        var svg = [];
        var defs = [];
        var links = [];
        var pie = [];
        var lines = [];
        this._points.forEach(function (item) {
            var percent = item[0], value = item[1], id = item[2], text = item[3], color = item[4];
            var err = percent === 0 || percent === 1 ? -0.000001 : 0;
            var fill = color;
            if (gradient) {
                var grad = gradient(color);
                var gradientId = "gradient" + core_1.uid();
                var radialGradient = common_1.getRadialGradient(grad.options, grad.stops, gradientId);
                fill = "url(#" + gradientId + ")";
                defs.push(radialGradient);
            }
            var _a = circle_1.getCoordinates(currentPercent, radius, radius), startX = _a[0], startY = _a[1];
            var avPercent = currentPercent + percent / 2;
            var lineLength = avPercent < 0.25 ? 5 : -5; // from 0 to 180 right pointer, 180 to 360 left pointer
            var middleLine = circle_1.getCoordinates(avPercent, radius, radius);
            var _b = [5, 30], startPart = _b[0], endPart = _b[1];
            var _c = [
                circle_1.getCoordinates(avPercent, radius + startPart, radius + startPart),
                circle_1.getCoordinates(avPercent, radius + endPart, radius + endPart),
            ], linkStart = _c[0], linkEnd = _c[1];
            var className = avPercent > -0.25 && avPercent < 0.25 ? "pie-value start-text" : "pie-value end-text";
            if (useLines) {
                links.push(dom_1.sv("path", {
                    d: "M" + linkStart[0] + " " + linkStart[1] + " L" + linkEnd[0] + " " + linkEnd[1] + " h " + lineLength,
                    class: "pie-value-connector",
                }));
                var textSvg = dom_1.sv("text", __assign({ x: linkEnd[0], y: linkEnd[1], dx: lineLength / 2 + lineLength > 0 ? 10 : -10, class: className }, getPointAriaAttrs(value, text, percent)), [common_1.verticalCenteredText(text.toString())]);
                links.push(textSvg);
            }
            else {
                var textPadding = 5;
                var dy = avPercent > 0.5 || avPercent < 0 ? -textPadding : textPadding;
                var textSvg = dom_1.sv("text", __assign({ x: linkStart[0], y: linkStart[1] + dy, class: className }, getPointAriaAttrs(value, text, percent)), [common_1.verticalCenteredText(text.toString())]);
                links.push(textSvg);
            }
            if ((showText || showTextTemplate) && showText !== false) {
                var linkText = dom_1.sv("text", {
                    x: middleLine[0] * 0.7,
                    y: middleLine[1] * 0.7,
                    class: "pie-inner-value",
                    "aria-hidden": "true",
                }, [
                    showTextTemplate
                        ? common_1.verticalCenteredText(showTextTemplate(value.toString()))
                        : common_1.verticalCenteredText(value.toString()),
                ]);
                links.push(linkText);
            }
            if (subType === "percentOnly") {
                var percentText = dom_1.sv("text", {
                    x: middleLine[0] * 0.5,
                    y: middleLine[1] * 0.5,
                    class: "pie-inner-value",
                    "aria-hidden": "true",
                }, [common_1.verticalCenteredText(Math.round(percent * 100) + "%")]);
                links.push(percentText);
            }
            currentPercent += percent + err;
            var _d = circle_1.getCoordinates(currentPercent, radius, radius), endX = _d[0], endY = _d[1];
            var largeArcFlag = percent > 0.5 ? 1 : 0;
            var d = "M " + startX + " " + startY + " A " + radius + " " + radius + " 0 " + largeArcFlag + " 1 " + endX + " " + endY + " L 0 0";
            var _e = circle_1.getCoordinates(avPercent, 4, 4), shiftX = _e[0], shiftY = _e[1];
            var currentSector = dom_1.sv("path", {
                d: d,
                class: "chart pie",
                _key: id,
                fill: fill,
                onclick: [_this._handlers.onclick, item[1], item[2]],
                // eslint-disable-next-line @typescript-eslint/unbound-method
                onmouseover: [circle_1.pieLikeHandlers.onmouseover, shiftX, shiftY],
                // eslint-disable-next-line @typescript-eslint/unbound-method
                onmouseout: [circle_1.pieLikeHandlers.onmouseout],
                role: "presentation",
            });
            pie.push(currentSector);
            if (_this._points.length > 1 && stroke) {
                var strokeOpts = {
                    "stroke-width": strokeWidth,
                    stroke: stroke,
                };
                var line = dom_1.sv("path", __assign({ d: "M0 0 L" + endX + " " + endY, fill: "none" }, strokeOpts));
                lines.push(line);
            }
            if (_this._points.length === 1) {
                tooltipData.push([width / 2, height / 2]);
            }
            else {
                tooltipData.push([middleLine[0] * 0.7 + width / 2, middleLine[1] * 0.7 + height / 2]);
            }
        });
        this._center = [width / 2, height / 2];
        this._tooltipData = tooltipData;
        svg.push(dom_1.sv("defs", defs));
        svg = svg.concat(pie);
        svg = svg.concat(lines);
        svg = svg.concat(links);
        return dom_1.sv("g", __assign({ transform: "translate(" + width / 2 + ", " + height / 2 + ")" }, getChartAriaAttrs(this.config)), svg);
    };
    return Pie;
}(NoScaleSeria_1.default));
exports.default = Pie;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var circle_1 = __webpack_require__(14);
var common_1 = __webpack_require__(2);
var NoScaleSeria_1 = __webpack_require__(31);
var Pie = /** @class */ (function (_super) {
    __extends(Pie, _super);
    function Pie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // todo move to NoScaleSeria
    Pie.prototype.paint = function (width, height) {
        var _this = this;
        var roundToTwoNumAfterPoint = function (p) { return Math.round((p * 100 + Number.EPSILON) * 100) / 100; };
        var getPointAriaAttrs = function (value, text, percent) { return ({
            role: "graphics-symbol",
            "aria-roledescription": "piece of pie",
            "aria-label": (text || "") + ", " + value + " (" + roundToTwoNumAfterPoint(percent) + "%)",
        }); };
        var getChartAriaAttrs = function (cfg) { return ({
            "aria-label": "chart " + (cfg.text || ""),
        }); };
        var _a = this.config, subType = _a.subType, useLines = _a.useLines, showText = _a.showText, showTextTemplate = _a.showTextTemplate;
        var radiusX;
        if (height > width) {
            radiusX = width / 2;
        }
        else {
            radiusX = height / 2;
        }
        var radiusY = radiusX * 0.5;
        var connector = radiusX / 5;
        var tooltipData = [];
        var currentPercent = -0.25;
        var svg = [];
        var links = [];
        this._points.forEach(function (item) {
            var percent = item[0], value = item[1], id = item[2], text = item[3], color = item[4];
            var err = percent === 0 || percent === 1 ? -0.000001 : 0;
            var _a = circle_1.getCoordinates(currentPercent, radiusX, radiusY), startX = _a[0], startY = _a[1];
            var avPercent = currentPercent + percent / 2;
            var lineLength = avPercent < 0.25 ? 5 : -5;
            var middleLine = circle_1.getCoordinates(avPercent, radiusX, radiusY);
            var delta = 0;
            if (avPercent > 0 && avPercent < 0.5) {
                delta = connector * Math.sin(2 * Math.PI * avPercent);
            }
            var linkStart = circle_1.getCoordinates(avPercent, radiusX + 5 + delta, radiusY + 5 + delta);
            var linkEnd = circle_1.getCoordinates(avPercent, radiusX + 30 + delta, radiusY + 30 + delta);
            var nextPercent = currentPercent + percent + err;
            var _b = circle_1.getCoordinates(nextPercent, radiusX, radiusY), endX = _b[0], endY = _b[1];
            var largeArcFlag = percent > 0.5 ? 1 : 0;
            var className = avPercent > -0.25 && avPercent < 0.25 ? "pie-value start-text" : "pie-value end-text";
            if (useLines) {
                links.push(dom_1.sv("path", {
                    d: "M" + linkStart[0] + " " + linkStart[1] + " L" + linkEnd[0] + " " + linkEnd[1] + " h " + lineLength,
                    class: "pie-value-connector",
                }));
                var textSvg = dom_1.sv("text", __assign({ x: linkEnd[0], y: linkEnd[1], dx: lineLength / 2 + lineLength > 0 ? 10 : -10, class: className }, getPointAriaAttrs(value, text, percent)), [common_1.verticalCenteredText(text.toString())]);
                links.push(textSvg);
            }
            else {
                var textPadding = 10;
                var dy = avPercent > 0.5 || avPercent < 0 ? -textPadding : textPadding;
                var textSvg = dom_1.sv("text", __assign({ x: linkStart[0], y: linkStart[1] + dy, class: className }, getPointAriaAttrs(value, text, percent)), [common_1.verticalCenteredText(text.toString())]);
                links.push(textSvg);
            }
            if ((showText || showTextTemplate) && showText !== false) {
                var textSvg = dom_1.sv("text", {
                    x: middleLine[0] * 0.7,
                    y: middleLine[1] * 0.7,
                    class: "pie-inner-value",
                    "aria-hidden": "true",
                }, [
                    showTextTemplate
                        ? common_1.verticalCenteredText(showTextTemplate(value))
                        : common_1.verticalCenteredText(value.toString()),
                ]);
                links.push(textSvg);
            }
            if (subType === "percentOnly") {
                var percentText = dom_1.sv("text", {
                    x: middleLine[0] * 0.6,
                    y: middleLine[1] * 0.6,
                    class: "pie-inner-value",
                    "aria-hidden": "true",
                }, [common_1.verticalCenteredText(Math.round(percent * 100) + "%")]);
                links.push(percentText);
            }
            // 3d block
            var addition = "";
            if (currentPercent <= 0 && nextPercent >= 0.5) {
                addition = "M " + radiusX + " 0 v " + connector + " A " + radiusX + " " + radiusY + " 0 1 1 " + -radiusX + " " + connector + " v " + -connector;
            }
            else if (currentPercent <= 0 && nextPercent < 0.5) {
                addition = "M " + radiusX + " 0 v " + connector + " A " + radiusX + " " + radiusY + " 0 0 1 " + endX + " " + (endY +
                    connector) + " v " + -connector;
            }
            else if (currentPercent > 0 && currentPercent <= 0.5 && nextPercent >= 0.5) {
                addition = "M " + startX + " " + startY + " v " + connector + " A " + radiusX + " " + radiusY + " 0 0 1 " + -radiusX + " " + connector + " v " + -connector;
            }
            else if (currentPercent > 0 && nextPercent < 0.5) {
                addition = "M " + startX + " " + startY + " v " + connector + " A " + radiusX + " " + radiusY + " 0 0 1 " + endX + " " + (endY +
                    connector) + " v " + -connector;
            }
            if (addition) {
                var additionPath = dom_1.sv("path", {
                    _key: id + "__shadow__",
                    d: addition,
                    fill: color,
                    onclick: [_this._handlers.onclick, item[1], item[2]],
                    class: "chart pie3d addition",
                    stroke: "none",
                    filter: "url(#shadow)",
                    role: "presentation",
                });
                svg.push(additionPath);
            }
            // end 3d block
            var d = "M " + startX + " " + startY + " A " + radiusX + " " + radiusY + " 0 " + largeArcFlag + " 1 " + endX + " " + endY + " L 0 0";
            svg.push(dom_1.sv("path", {
                d: d,
                _key: id,
                fill: color,
                stroke: "none",
                onclick: [_this._handlers.onclick, item[1], item[2]],
                class: "chart pie3d",
                role: "presentation",
            }));
            if (_this._points.length === 1) {
                tooltipData.push([width / 2, height / 2]);
            }
            else {
                tooltipData.push([middleLine[0] * 0.7 + width / 2, middleLine[1] * 0.7 + height / 2]);
            }
            currentPercent = nextPercent;
        });
        this._center = [width / 2, height / 2];
        this._tooltipData = tooltipData;
        svg = svg.concat(links);
        return dom_1.sv("g", __assign({ transform: "translate(" + width / 2 + ", " + height / 2 + ")" }, getChartAriaAttrs(this.config)), svg);
    };
    return Pie;
}(NoScaleSeria_1.default));
exports.default = Pie;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var circle_1 = __webpack_require__(14);
var common_1 = __webpack_require__(2);
var BaseSeria_1 = __webpack_require__(30);
var Radar = /** @class */ (function (_super) {
    __extends(Radar, _super);
    function Radar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Radar.prototype.addScale = function (type, scale) {
        this._scale = scale;
    };
    Radar.prototype.scaleReady = function (sizes) {
        for (var key in sizes) {
            sizes[key] += this.config.paddings;
        }
        return sizes;
    };
    Radar.prototype.dataReady = function (prev) {
        var _this = this;
        if (!this.config.active) {
            return (this._points = []);
        }
        var xLocator = common_1.locator(this._scale.config.value);
        this._points = this._data.map(function (item, index) {
            // raw values
            var value = _this._locator(item);
            var set = [value, value, item.id, value, value];
            if (prev) {
                set[1] += prev[index][1];
            }
            if (xLocator) {
                set.push(xLocator(item));
            }
            return set;
        });
        return this._points;
    };
    Radar.prototype.getTooltipText = function (id) {
        if (this.config.tooltip) {
            var p = this._defaultLocator(this._data.getItem(id));
            if (this.config.tooltipTemplate) {
                return this.config.tooltipTemplate(p);
            }
            return p;
        }
    };
    Radar.prototype.paint = function (width, height) {
        var _this = this;
        _super.prototype.paint.call(this, width, height);
        var getPointAriaAttrs = function (key, points) {
            var point;
            if (key) {
                point = points.find(function (p) { return key.includes(p[2]); });
            }
            return {
                role: "graphics-symbol",
                "aria-roledescription": "point",
                "aria-label": point ? "point x=" + point[5] + " y=" + point[4] : "",
            };
        };
        var getChartAriaAttrs = function (cfg) { return ({
            "aria-label": "chart " + (cfg.value || ""),
        }); };
        if (!this.config.active) {
            return;
        }
        var config = this.config;
        var svg = [];
        var d = this._points.map(function (item, first) { return (first ? "L" : "M") + (item[0] + " " + item[1]); }).join(" ") + "Z";
        svg.push(dom_1.sv("path", {
            d: d,
            stroke: config.color,
            "stroke-width": config.strokeWidth,
            fill: config.fill,
            "fill-opacity": config.alpha,
            class: "chart radar",
        }));
        if (config.pointType) {
            var points = this._points
                .map(function (p) { return _this._drawPointType(p[0], p[1], common_1.calcPointRef(p[2], _this.id)); })
                .map(function (node) {
                if (node && node.attrs) {
                    node.attrs = __assign(__assign({}, node.attrs), getPointAriaAttrs(node.key, _this._points));
                }
                return node;
            });
            svg.push(dom_1.sv("g", points));
        }
        return dom_1.sv("g", __assign({ id: "seria" + config.id }, getChartAriaAttrs(this.config)), svg);
    };
    Radar.prototype._calckFinalPoints = function (width, height) {
        var _this = this;
        var radius;
        if (height > width) {
            radius = width / 2;
        }
        else {
            radius = height / 2;
        }
        var scalePercent = 1 / this._data.getLength();
        var currentPercent = -0.25 - scalePercent;
        this._points.forEach(function (item, index) {
            currentPercent += scalePercent;
            var value = _this._scale.point(item[0]);
            var real = circle_1.getCoordinates(currentPercent, value * radius, value * radius);
            // scaled values
            item[0] = real[0] + width / 2;
            item[1] = real[1] + height / 2;
        });
    };
    Radar.prototype._defaultLocator = function (v) {
        return this._locator(v);
    };
    Radar.prototype._setDefaults = function (config) {
        var defaults = {
            strokeWidth: 2,
            active: true,
            tooltip: true,
            paddings: 5,
            color: "none",
            fill: "none",
            pointType: "circle",
        };
        this._locator = common_1.locator(config.value);
        config.scales = config.scales || ["radial"];
        this.config = __assign(__assign({}, defaults), config);
        if (this.config.pointType) {
            var color = this.config.pointColor || this.config.color;
            this._drawPointType = this._getPointType(this.config.pointType, color);
        }
    };
    return Radar;
}(BaseSeria_1.default));
exports.default = Radar;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Line_1 = __webpack_require__(32);
var common_1 = __webpack_require__(2);
var Scatter = /** @class */ (function (_super) {
    __extends(Scatter, _super);
    function Scatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Scatter.prototype.addScale = function (type, scale) {
        if (type === "bottom" || type === "top") {
            this.xScale = scale;
            this._xLocator = common_1.locator(this.config.value);
        }
        else {
            this.yScale = scale;
            this._yLocator = common_1.locator(this.config.valueY);
        }
    };
    Scatter.prototype._setDefaults = function (config) {
        var defaults = {
            active: true,
            tooltip: true,
            pointType: "rect",
        };
        this.config = __assign(__assign({}, defaults), config);
        var point = this.config.pointType;
        var color = this.config.pointColor || this.config.color;
        if (point) {
            this._drawPointType = this._getPointType(point, color);
        }
    };
    return Scatter;
}(Line_1.default));
exports.default = Scatter;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var spline_1 = __webpack_require__(56);
var Line_1 = __webpack_require__(32);
var Spline = /** @class */ (function (_super) {
    __extends(Spline, _super);
    function Spline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Spline.prototype._getForm = function (points, config, css, width, height) {
        var color = config.color;
        var className = config.css;
        var d = spline_1.default(points);
        return dom_1.sv("path", {
            id: "seria" + config.id,
            d: d,
            class: className,
            stroke: color,
            "stroke-width": 2,
            fill: "none",
        });
    };
    return Spline;
}(Line_1.default));
exports.default = Spline;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var spline_1 = __webpack_require__(56);
var Area_1 = __webpack_require__(53);
var SplineArea = /** @class */ (function (_super) {
    __extends(SplineArea, _super);
    function SplineArea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SplineArea.prototype._form = function (width, height, svg, prev) {
        var _a = this.config, fill = _a.fill, alpha = _a.alpha, strokeWidth = _a.strokeWidth, color = _a.color, id = _a.id;
        var className = this.config.css;
        var d = "";
        var first = this._points[0];
        if (prev) {
            d = spline_1.default([].concat(prev).reverse()) + " " + spline_1.default(this._points, true) + " Z";
        }
        else {
            d = "M" + first[0] + " " + height + " V " + first[1] + " " + spline_1.default(this._points) + " V" + height + " H " + first[0];
        }
        if (strokeWidth) {
            var line = spline_1.default(this._points);
            var splinePath = dom_1.sv("path", {
                d: line,
                "stroke-width": strokeWidth,
                stroke: color,
                fill: "none",
                "stroke-linecap": "butt",
                class: className,
            });
            svg.push(splinePath);
        }
        var path = dom_1.sv("path", {
            id: "seria" + id,
            d: d,
            class: className,
            fill: fill,
            "fill-opacity": alpha,
            stroke: "none",
        });
        svg.push(path);
        return svg;
    };
    return SplineArea;
}(Area_1.default));
exports.default = SplineArea;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var Stacker = /** @class */ (function () {
    function Stacker() {
        this._series = [];
    }
    Stacker.prototype.add = function (seria) {
        this._series.push(seria);
    };
    Stacker.prototype.dataReady = function (prev) {
        this._toPaint = this._series.filter(function (serie) {
            var next = serie.dataReady(prev);
            if (next.length) {
                prev = next;
                return true;
            }
            return false;
        });
        return prev || [];
    };
    Stacker.prototype.getPoints = function () {
        if (this._toPaint.length) {
            return this._toPaint[0].getPoints().concat(this._toPaint[this._toPaint.length - 1].getPoints());
        }
        return [];
    };
    Stacker.prototype.paint = function (width, height, prev) {
        var svg = [];
        var markers = [];
        this._toPaint.forEach(function (seria) {
            if (seria.paintformAndMarkers) {
                var _a = seria.paintformAndMarkers(width, height, prev), content = _a[0], seriesMarkers = _a[1];
                svg.push(content);
                markers.push(seriesMarkers);
            }
            else {
                var content = seria.paint(width, height, prev);
                svg.push(content);
            }
            prev = seria.getPoints();
        });
        return dom_1.sv("g", svg.concat(markers));
    };
    return Stacker;
}());
exports.default = Stacker;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ts_message_1 = __webpack_require__(49);
var common_1 = __webpack_require__(2);
var line_1 = __webpack_require__(54);
var types_1 = __webpack_require__(19);
var Tooltip = /** @class */ (function () {
    function Tooltip(chart) {
        this._chart = chart;
        this._initEvents();
    }
    Tooltip.prototype.destructor = function () {
        if (this._tooltip) {
            document.body.removeChild(this._tooltip);
            this._tooltip = null;
        }
    };
    Tooltip.prototype._showLineTooltip = function (lineTooltipItems) {
        var lineTooltip = "";
        var root = this._chart.getRootView();
        var calcPointTop = 0;
        for (var _i = 0, lineTooltipItems_1 = lineTooltipItems; _i < lineTooltipItems_1.length; _i++) {
            var item = lineTooltipItems_1[_i];
            calcPointTop += item.top;
            this._prevLine =
                root &&
                    root.refs &&
                    root.refs["line" + Math.round(item.left)] &&
                    root.refs["line" + Math.round(item.left)].el;
            this._prevLine.classList.add("grid-line__active");
            var seria = this._chart.getSeries(item.seriaId);
            var point = seria.getPoints();
            if (!point.length || !seria.config.tooltip)
                continue;
            var shadeColor = seria.config.pointColor ||
                (seria.config.color && seria.config.color !== "none"
                    ? seria.config.color
                    : seria.config.fill);
            var shadeHTMLHelper = line_1.getShadeHTMLHelper(seria.config.pointType !== "empty" && seria.config.pointType
                ? seria.config.pointType
                : "simpleRect", shadeColor);
            lineTooltip += "<div class=\"line-point\" _ref=\"dhx_tooltip_" + seria.config.id + "_box\">\n\t\t\t\t<svg class=\"dhx_tooltip_svg\" role=\"graphics-document\" style=\"width: 8px; height: 8px;\">" + shadeHTMLHelper(4, 4, point[0][2]) + "</svg>\n\t\t\t\t<span class=\"dhx_line-point-text\" _ref=\"dhx_tooltip_" + seria.config.id + "_text\">" + item.text + "</span>\n\t\t\t</div>";
        }
        if (!this._tooltip) {
            this._createTooltip();
        }
        var bodyHeight = document.body.offsetHeight;
        var bodyWidth = document.body.offsetWidth;
        this._tooltip.innerHTML = lineTooltip;
        this._tooltip.classList.add("dhx_chart_tooltip__visible");
        var middlePointHeight = calcPointTop / lineTooltipItems.length;
        var lineRect = this._prevLine.getBoundingClientRect();
        var contentHight = this._tooltip.offsetHeight;
        var contentWidth = this._tooltip.offsetWidth;
        var top = middlePointHeight - contentHight / 2 + lineRect.top + window.scrollY;
        var left = lineRect.left + 10;
        if (top + contentHight > bodyHeight) {
            top -= top + contentHight - bodyHeight;
        }
        if (left + contentWidth > bodyWidth) {
            left = lineRect.left - contentWidth - 10;
        }
        var zIndex = ts_message_1.getZIndex(this._chart.getRootNode());
        if (zIndex) {
            this._tooltip.style.zIndex = zIndex.toString();
        }
        this._tooltip.style.left = left + "px";
        this._tooltip.style.top = top + "px";
    };
    Tooltip.prototype._showTooltip = function (text, e) {
        if (!this._tooltip) {
            this._createTooltip();
        }
        var bodyHeight = document.body.offsetHeight;
        var bodyWidth = document.body.offsetWidth;
        this._tooltip.innerHTML = text;
        this._tooltip.classList.add("dhx_chart_tooltip__visible");
        var contentHight = this._tooltip.offsetHeight;
        var contentWidth = this._tooltip.offsetWidth;
        var mouseTop = e.pageY + 10;
        var mouseLeft = e.pageX + 10;
        if (mouseTop + contentHight > bodyHeight) {
            mouseTop = e.pageY - contentHight;
        }
        if (mouseLeft + contentWidth > bodyWidth) {
            mouseLeft = e.pageX - contentWidth - 10;
        }
        var zIndex = ts_message_1.getZIndex(this._chart.getRootNode());
        if (zIndex) {
            this._tooltip.style.zIndex = zIndex.toString();
        }
        this._tooltip.style.left = mouseLeft + "px";
        this._tooltip.style.top = mouseTop + "px";
    };
    Tooltip.prototype._showTooltipOnClosest = function (closest) {
        if (!this._tooltip) {
            this._createTooltip();
        }
        var tooltipSeries = this._chart.getSeries(closest[4]);
        if (tooltipSeries) {
            var text = tooltipSeries.getTooltipText(closest[3]);
            if (!text)
                return;
            var layersSize = this._chart._layers.getSizes();
            var root = this._chart.getRootNode();
            var rect = root.getBoundingClientRect();
            this._tooltip.innerHTML = text;
            this._tooltip.classList.add("dhx_chart_tooltip__visible");
            var bodyHeight = document.body.offsetHeight;
            var contentHight = this._tooltip.offsetHeight;
            var top_1 = closest[2] +
                rect.top +
                contentHight / 2 +
                layersSize.top -
                (this._chart.config.type === "radar" ? 10 : 15);
            if (top_1 + contentHight > bodyHeight) {
                top_1 =
                    closest[2] +
                        rect.top -
                        contentHight / 2 +
                        layersSize.top -
                        (this._chart.config.type === "radar" ? 10 : 15);
            }
            if (top_1 + contentHight > bodyHeight) {
                this._tooltip.classList.remove("dhx_chart_tooltip__visible");
            }
            var zIndex = ts_message_1.getZIndex(this._chart.getRootNode());
            if (zIndex) {
                this._tooltip.style.zIndex = zIndex.toString();
            }
            this._tooltip.style.left = rect.left + closest[1] + 10 + "px";
            this._tooltip.style.top = top_1 + "px";
        }
    };
    Tooltip.prototype._createTooltip = function () {
        this._tooltip = document.createElement("div");
        this._tooltip.setAttribute("dhx_widget_id", this._chart._uid);
        this._tooltip.classList.add("dhx_chart_tooltip");
        this._tooltip.classList.add("dhx_chart_tooltip_line");
        this._tooltip.classList.add("dhx_chart_tooltip__hidden");
        document.body.appendChild(this._tooltip);
    };
    Tooltip.prototype._initEvents = function () {
        var _this = this;
        this._chart.events.on(types_1.ChartEvents.chartMouseMove, function (x, y) {
            if (_this._prevLine) {
                _this._prevLine.classList.remove("grid-line__active");
            }
            if (!_this._mouseOverBar) {
                var lineTooltipItems_2 = [];
                var closest_1 = [Infinity, null, null, null, null]; // (dist, x, y, id, serieid)
                _this._chart.eachSeries(function (seria) {
                    var type = seria.config.type;
                    if (type === "line" || type === "spline" || type === "splineArea" || type === "area") {
                        var closestLine = seria.getClosestVertical(x);
                        var item = {
                            value: closestLine[4],
                            text: seria.getTooltipText(closestLine[3]),
                            seriaId: seria.config.id,
                            left: closestLine[1],
                            top: closestLine[2],
                        };
                        if (typeof item.left === "number" && typeof item.top === "number") {
                            lineTooltipItems_2.push(item);
                        }
                    }
                    else if (type === "pie" || type === "pie3D" || type === "donut" || type === "radar") {
                        var seriaClosest = seria.getClosest(x, y);
                        if (closest_1[0] > seriaClosest[0]) {
                            closest_1[0] = seriaClosest[0];
                            closest_1[1] = seriaClosest[1];
                            closest_1[2] = seriaClosest[2];
                            closest_1[3] = seriaClosest[3];
                            closest_1[4] = seria.id;
                        }
                    }
                });
                if (lineTooltipItems_2.length) {
                    lineTooltipItems_2.sort(function (a, b) { return b.value - a.value; });
                    _this._showLineTooltip(lineTooltipItems_2);
                }
                else {
                    _this._showTooltipOnClosest(closest_1);
                }
            }
        });
        this._chart.events.on(types_1.ChartEvents.seriaMouseMove, function (id, seriaId, e) {
            _this._mouseOverBar = true;
            var rootView = _this._chart.getRootView();
            var seria = _this._chart.getSeries(seriaId);
            var text = seria.getTooltipText(id);
            var item = rootView && rootView.refs && rootView.refs[common_1.calcPointRef(id, seriaId)].el;
            item.setAttribute("fill-opacity", seria.config.alpha > 0.6 ? seria.config.alpha - 0.4 : 1);
            if (text) {
                _this._showTooltip(text, e);
            }
            else if (_this._tooltip) {
                _this._tooltip.classList.remove("dhx_chart_tooltip__visible");
            }
        });
        this._chart.events.on(types_1.ChartEvents.seriaMouseLeave, function (id, seriaId) {
            _this._mouseOverBar = false;
            var rootView = _this._chart.getRootView();
            var seria = _this._chart.getSeries(seriaId);
            if (seria.config.type !== "area") {
                var item = rootView && rootView.refs && rootView.refs[common_1.calcPointRef(id, seriaId)].el;
                item.setAttribute("fill-opacity", seria.config.alpha);
            }
            if (_this._tooltip) {
                _this._tooltip.classList.remove("dhx_chart_tooltip__visible");
            }
        });
        this._chart.events.on(types_1.ChartEvents.chartMouseLeave, function () {
            if (_this._tooltip) {
                _this._tooltip.classList.remove("dhx_chart_tooltip__visible");
            }
            if (_this._prevLine) {
                _this._prevLine.classList.remove("grid-line__active");
            }
        });
    };
    return Tooltip;
}());
exports.Tooltip = Tooltip;


/***/ })
/******/ ]);
});if (window.dhx_legacy) { if (window.dhx){ for (var key in dhx) dhx_legacy[key] = dhx[key]; } window.dhx = dhx_legacy; delete window.dhx_legacy; }
//# sourceMappingURL=chart.js.map