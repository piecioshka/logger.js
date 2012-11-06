// Copyright Piotr Kowalski and other contributors.
//
// MIT License
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

function logger(data) {
    var i = 0,
        // returned value
        res,

        // available special logger types
        parts = ["bom", "dom", "js"],

        // number of special loggers
        len = parts.length;

    // reset found status
    logger.found = false;

    // if run that "new logger()" conv to "logger()"
    if (this instanceof logger) {
        return logger;
    }

    // check if some special logger found value
    for (; i < len; ++i) {
        if ((res = logger[parts[i]](data)) !== undefined) {
            logger.found = true;
            break;
        }
    }

    if (logger.found) {
        // if found parse value return that
        return res;
    }

    // if not found, report w exception
    throw {
        name: "LoggerUnexpectedTypeError",
        message: "Undefined type of variable: " + data
    };
}

// found status
logger.found = false;

// public API
if (typeof module !== "undefined") {
    // only for NodeJS
    module.exports = logger;
}

/******************************************************************************/
/* Logger BOM */
/******************************************************************************/

if (typeof require !== "undefined") {
    var logger = require("./logger-core.js");
}

(function () {
    "use strict";

    var checker = {

/******************************************************************************/
/* General */
/******************************************************************************/

    };

    logger.bom = function (data) {
        var res,
            type;

        for (type in checker) {
            if (checker.hasOwnProperty(type)) {
                if (checker[type].call(null, data)) {
                    // res = logger.parser.bom[type].call(this, data);
                    res = ">>" + type + "<< : " + logger.parser.bom[type].call(this, data);
                }
            }
        }

        return res;
    };
}).call(this);

/******************************************************************************/
/* Logger DOM */
/******************************************************************************/

if (typeof require !== "undefined") {
    var logger = require("./logger-core.js");
}

(function () {
    "use strict";

    var checker = {

    };

    logger.dom = function (data) {
        var res,
            type;

        for (type in checker) {
            if (checker.hasOwnProperty(type)) {
                if (checker[type].call(null, data)) {
                    res = logger.parser.dom[type].call(this, data);
                }
            }
        }

        return res;
    };
}).call(this);

/******************************************************************************/
/* Logger JavaScript */
/******************************************************************************/

if (typeof require !== "undefined") {
    var logger = require("./logger-core.js");
}

(function () {
    "use strict";

    var checker = {

/******************************************************************************/
/* General-purpose constructors */
/******************************************************************************/

        "Array": function (o) { return o && o.constructor && o.pop && o.push &&
            o.reverse && (o.length !== undefined) && o.shift && o.sort &&
            o.splice && o.unshift && o.concat && o.join && o.slice && o.indexOf;
        },
        "Arguments": function (o) { return o && (o.length !== undefined) &&
            Object.prototype.toString.call(o) === "[object Arguments]";
        },
        "Boolean": function (o) { return typeof o === "boolean" },
        "Date": function (o) { return o && o.getDate && o.getDay
            && o.getFullYear && o.getHours && o.getMilliseconds &&
            o.getMinutes && o.getMonth && o.getSeconds;
        },
        "Function": function (o) { return o && (o.name === "empty" || o.name === "") &&
            o.constructor && o.call && o.apply && o instanceof Function;
        },
        // Harmony JS
        // "Iterator": function (o) { return o.constructor === Iterator; },
        "Number": function (o) { return typeof o === "number" && !isNaN(o) &&
            isFinite(o);
        },
        "Object": function (o) { return o && (o.length === undefined) &&
            o instanceof Object && o.constructor === Object;
        },
        "RegExp": function (o) { return o && o.exec && o.test; },
        "String": function (o) { return typeof o === "string"; },

/******************************************************************************/
/* Typed array constructors */
/******************************************************************************/

        "ArrayBuffer": function (o) { return o && o instanceof ArrayBuffer &&
            typeof o.byteLength === "number";
        },
        "DataView": function (o) { return o && o.buffer instanceof ArrayBuffer &&
            o.getInt8 && o.getUint8 && o.getInt16 && o.getUint16 && o.getInt32 &&
            o.getUint32 && o.getFloat32 && o.getFloat64 && o instanceof DataView;
        },
        "Float32Array": function (o) { return o && o.buffer instanceof ArrayBuffer &&
            typeof o.byteLength === "number" && typeof o.byteOffset === "number" &&
            o instanceof Float32Array;
        },
        "Float64Array": function (o) { return o && o.buffer instanceof ArrayBuffer &&
            typeof o.byteLength === "number" && typeof o.byteOffset === "number" &&
            o instanceof Float64Array;
        },
        "Int16Array": function (o) { return o && o.buffer instanceof ArrayBuffer &&
            typeof o.byteLength === "number" && typeof o.byteOffset === "number" &&
            o instanceof Int16Array;
        },
        "Int32Array": function (o) { return o && o.buffer instanceof ArrayBuffer &&
            typeof o.byteLength === "number" && typeof o.byteOffset === "number" &&
            o instanceof Int32Array;
        },
        "Int8Array": function (o) { return o && o.buffer instanceof ArrayBuffer &&
            typeof o.byteLength === "number" && typeof o.byteOffset === "number" &&
            o instanceof Int8Array;
        },
        "Uint16Array": function (o) { return o && o.buffer instanceof ArrayBuffer &&
            typeof o.byteLength === "number" && typeof o.byteOffset === "number" &&
            o instanceof Uint16Array;
        },
        "Uint32Array": function (o) { return o && o.buffer instanceof ArrayBuffer &&
            typeof o.byteLength === "number" && typeof o.byteOffset === "number" &&
            o instanceof Uint32Array;
        },
        "Uint8Array": function (o) { return o && o.buffer instanceof ArrayBuffer &&
            typeof o.byteLength === "number" && typeof o.byteOffset === "number" &&
            o instanceof Uint8Array;
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

        "Error": function (o) { return o && o.name === "Error" &&
            o instanceof Error;
        },
        "EvalError": function (o) { return o && o.name === "EvalError" &&
            o instanceof Error && o instanceof EvalError;
        },
        /*
        // Harmony JS
        "InternalError": function (o) { return o && o.name === "InternalError" &&
            o instanceof Error && o instanceof InternalError;
        },
        */
        "RangeError": function (o) { return o && o.name === "RangeError" &&
            o instanceof Error && o instanceof RangeError;
        },
        "ReferenceError": function (o) { return o && o.name === "ReferenceError" &&
            o instanceof Error && o instanceof ReferenceError;
        },
        /*
        // Harmony JS
        "StopIteration": function (o) { return o && o.name === "StopIteration" &&
            o instanceof Error && o instanceof StopIteration;
        },
        */
        "SyntaxError": function (o) { return o && o.name === "SyntaxError" &&
            o instanceof Error && o instanceof SyntaxError;
        },
        "TypeError": function (o) { return o && o.name === "TypeError" &&
            o instanceof Error && o instanceof TypeError;
        },
        "URIError": function (o) { return o && o.name === "URIError" &&
            o instanceof Error && o instanceof URIError;
        },

/******************************************************************************/
/* Other */
/******************************************************************************/

        "Infinity": function (o) { return typeof o === "number" &&
            !isFinite(o);
        },
        "JSON": function (o) { return checker["Object"](o); },
        "Math": function (o) { return o && o.E === Math.E; },
        "NaN": function (o) { return typeof o === "number" && isNaN(o); },
        "Null": function (o) { return o === null; },
        "undefined": function (o) { return o === undefined; }
    };

    logger.js = function (data) {
        var res,
            type;

        for (type in checker) {
            if (checker.hasOwnProperty(type)) {
                if (checker[type].call(null, data)) {
                    res = logger.parser.js[type].call(this, data);
                }
            }
        }

        return res;
    };
}).call(this);
