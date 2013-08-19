/******************************************************************************/
/* Logger JavaScript */
/******************************************************************************/

if (typeof require !== 'undefined') {
    var logger = require("./logger-core.js");
}

(function () {
    "use strict";

    // master scope
    var global = this;

    /**
     * @param {Object} o
     * @returns {String}
     */
    function to_string(o) {
        return Object.prototype.toString.call(o);
    }

    var checker = {

/******************************************************************************/
/* General-purpose constructors */
/******************************************************************************/

        "Array": function (o) {
            if ( o && o.constructor && o.constructor.name === "Array" ) {
                return true;
            }
            return o && o.constructor && o.pop && o.push &&
                o.reverse && (typeof o.length === "number") && o.shift &&
                o.sort && o.splice && o.unshift && o.concat && o.join &&
                o.slice && o.indexOf;
        },
        "Arguments": function (o) {
            return o && (typeof o.length === "number") &&
                Object.prototype.toString.call(o) === "[object Arguments]";
        },
        "Boolean": function (o) { return typeof o === "boolean" },
        "Date": function (o) { return o && o.getDate && o.getDay
            && o.getFullYear && o.getHours && o.getMilliseconds &&
            o.getMinutes && o.getMonth && o.getSeconds;
        },
        "Function": function (o) { return o &&
            Object.prototype.toString.call(o) === "[object Function]";
        },
        // Harmony JS
        // "Iterator": function (o) { return o.constructor === Iterator; },
        "Number": function (o) { return typeof o === "number" && !isNaN(o) &&
            isFinite(o);
        },
        "Object": function (o) {
            return o && Object.prototype.toString.call(o) === "[object Object]";
        },
        "RegExp": function (o) { return o && o.exec && o.test; },
        "String": function (o) { return typeof o === "string"; },

/******************************************************************************/
/* Typed array constructors */
/******************************************************************************/

        "ArrayBuffer": function (o) {
            if ("ArrayBuffer" in global) {
                return o && o instanceof ArrayBuffer && typeof o.byteLength === "number";
            }
            return false;
        },
        "DataView": function (o) {
            if ("ArrayBuffer" in global) {
                return o && o.buffer instanceof ArrayBuffer &&
                    o.getInt8 && o.getUint8 && o.getInt16 && o.getUint16 && o.getInt32 &&
                    o.getUint32 && o.getFloat32 && o.getFloat64 && o instanceof DataView;
            }
            return false;
        },
        "Float32Array": function (o) {
            if ("ArrayBuffer" in global) {
                return o && o.buffer instanceof ArrayBuffer &&
                    typeof o.byteLength === "number" && typeof o.byteOffset === "number" &&
                    o instanceof Float32Array;
            }
            return false;
        },
        "Float64Array": function (o) {
            if ("ArrayBuffer" in global) {
                return o && o.buffer instanceof ArrayBuffer &&
                    typeof o.byteLength === "number" && typeof o.byteOffset === "number" &&
                    o instanceof Float64Array;
            }
            return false;
        },
        "Int16Array": function (o) {
            if ("ArrayBuffer" in global) {
                return o && o.buffer instanceof ArrayBuffer &&
                    typeof o.byteLength === "number" && typeof o.byteOffset === "number" &&
                    o instanceof Int16Array;
            }
        },
        "Int32Array": function (o) {
            if ("ArrayBuffer" in global) {
                return o && o.buffer instanceof ArrayBuffer &&
                    typeof o.byteLength === "number" && typeof o.byteOffset === "number" &&
                    o instanceof Int32Array;
            }
        },
        "Int8Array": function (o) {
            if ("ArrayBuffer" in global) {
                return o && o.buffer instanceof ArrayBuffer &&
                    typeof o.byteLength === "number" && typeof o.byteOffset === "number" &&
                    o instanceof Int8Array;
            }
        },
        "Uint16Array": function (o) {
            if ("ArrayBuffer" in global) {
                return o && o.buffer instanceof ArrayBuffer &&
                    typeof o.byteLength === "number" && typeof o.byteOffset === "number" &&
                    o instanceof Uint16Array;
            }
        },
        "Uint32Array": function (o) {
            if ("ArrayBuffer" in global) {
                return o && o.buffer instanceof ArrayBuffer &&
                    typeof o.byteLength === "number" && typeof o.byteOffset === "number" &&
                    o instanceof Uint32Array;
            }
        },
        "Uint8Array": function (o) {
            if ("ArrayBuffer" in global) {
                return o && o.buffer instanceof ArrayBuffer &&
                    typeof o.byteLength === "number" && typeof o.byteOffset === "number" &&
                    o instanceof Uint8Array;
            }
        },
        /*
        "Uint8ClampedArray": function (o) { return o && o.buffer instanceof ArrayBuffer &&
            typeof o.byteLength === "number" && typeof o.byteOffset === "number" &&
            !!Uint8ClampedArray && o instanceof Uint8ClampedArray;
        },
        */

/******************************************************************************/
/* Error constructors */
/******************************************************************************/

        "Error": function (o) {
            return o && o.name === "Error" && o instanceof Error;
        },
        "EvalError": function (o) {
            return o && o instanceof Error && o instanceof EvalError;
        },
        /*
        // Harmony JS
        "InternalError": function (o) { return o && o.name === "InternalError" &&
            o instanceof Error && o instanceof InternalError;
        },
        */
        "RangeError": function (o) {
            return o && o instanceof Error && o instanceof RangeError;
        },
        "ReferenceError": function (o) {
            return o && o instanceof Error && o instanceof ReferenceError;
        },
        /*
        // Harmony JS
        "StopIteration": function (o) { return o && o.name === "StopIteration" &&
            o instanceof Error && o instanceof StopIteration;
        },
        */
        "SyntaxError": function (o) {
            return o && o instanceof Error && o instanceof SyntaxError;
        },
        "TypeError": function (o) {
            return o && o instanceof Error && o instanceof TypeError;
        },
        "URIError": function (o) {
            return o && o instanceof Error && o instanceof URIError;
        },

/******************************************************************************/
/* Storage */
/******************************************************************************/

        "Storage": function (o) {
            return o && to_string(o) === "[object Storage]";
        },
        "StorageEvent": function (o) {
            return false;
        },
        "localStorage": function (o) {
            return false;
        },
        "sessionStorage": function (o) {
            return false;
        },
        "webkitStorageInfo": function (o) {
            // StorageInfo
            return false;
        },

/******************************************************************************/
/* XMLHttpRequest */
/******************************************************************************/

        "XMLHttpRequest": function (o) {
            return to_string(o) === "[object XMLHttpRequest]";
        },
        "XMLHttpRequestException": function (o) {
            return to_string(o) === "[object XMLHttpRequestException]";
        },
        "XMLHttpRequestProgressEvent": function (o) {
            return to_string(o) === "[object XMLHttpRequestProgressEvent]";
        },
        "XMLHttpRequestUpload": function (o) {
            return to_string(o) === "[object XMLHttpRequestUpload]";
        },

/******************************************************************************/
/* Other */
/******************************************************************************/

        "Infinity": function (o) { return typeof o === "number" &&
            !isFinite(o);
        },
        "JSON": function (o) { return checker["Object"](o); },
        "Math": function (o) { return o && o === Math; },
        "NaN": function (o) { return typeof o === "number" && isNaN(o); },
        "Null": function (o) { return o === null; },
        "undefined": function (o) { return o === undefined; }
    };

    // public API
    logger.JSLogger = function (data, indent) {
        var res, type;

        for (type in checker) {
            if (checker.hasOwnProperty(type)) {
                if (checker[type].call(null, data)) {
                    res = logger.parser.JSParser.call(this, type, data, indent);
                }
            }
        }

        return res;
    };

}).call(this);
