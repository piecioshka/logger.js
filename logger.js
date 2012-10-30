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
    var res,
        parts = ["bom", "dom", "js"],
        i = 0,
        len = parts.length;

    // reset found system
    logger.found = false;

    if (this instanceof logger) {
        return logger;
    }

    for (; i < len; ++i) {
        if ((res = logger[parts[i]](data)) !== undefined) {
            logger.found = true;
            break;
        }
    }

    if (logger.found) {
        // run concrete logger
        return res;
    }

    throw {
        name: "UnexpectedTypeError",
        message: "Undefined type of variable: " + data
    };
}

// found type
logger.found = false;

// public API
if (typeof module !== "undefined") {
    module.exports = logger;
}

/******************************************************************************/
/* Logger BOM */
/******************************************************************************/

if (typeof require !== "undefined") {
    var logger = require("./logger-core.js");
}

logger.bom = function (data) {
    return;
};

/******************************************************************************/
/* Logger DOM */
/******************************************************************************/

if (typeof require !== "undefined") {
    var logger = require("./logger-core.js");
}

logger.dom = function (data) {
    return;
};

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
        "Function": function (o) { return o && o.constructor && o.call &&
            o.apply && o instanceof Function;
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

        "ArrayBuffer": function (o) { return false; },
        "DataView": function (o) { return false; },
        "Float32Array": function (o) { return false; },
        "Float64Array": function (o) { return false; },
        "Int16Array": function (o) { return false; },
        "Int32Array": function (o) { return false; },
        "Int8Array": function (o) { return false; },
        "Uint16Array": function (o) { return false; },
        "Uint32Array": function (o) { return false; },
        "Uint8Array": function (o) { return false; },
        "Uint8ClampedArray": function (o) { return false; },

/******************************************************************************/
/* Error constructors */
/******************************************************************************/

        "Error": function (o) { return false; },
        "EvalError": function (o) { return false; },
        "InternalError": function (o) { return false; },
        "RangeError": function (o) { return false; },
        "ReferenceError": function (o) { return false; },
        "StopIteration": function (o) { return false; },
        "SyntaxError": function (o) { return false; },
        "TypeError": function (o) { return false; },
        "URIError": function (o) { return false; },

/******************************************************************************/
/* Non-constructor functions */
/******************************************************************************/

        "decodeURI": function (o) { return false; },
        "decodeURIComponent": function (o) { return false; },
        "encodeURI": function (o) { return false; },
        "encodeURIComponent": function (o) { return false; },
        "eval": function (o) { return false; },
        "isFinite": function (o) { return false; },
        "isNaN": function (o) { return false; },
        "parseFloat": function (o) { return false; },
        "parseInt": function (o) { return false; },
        "uneval": function (o) { return false; },

/******************************************************************************/
/* Other */
/******************************************************************************/

        "Infinity": function (o) { return typeof o === "number" &&
            !isFinite(o);
        },
        "JSON": function (o) { return checker["Object"](o); },
        "Math": function (o) { return false; },
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
                    // res = "[" + type + "]" + logger.parser.js[type].call(this, data);
                    res = logger.parser.js[type].call(this, data);
                }
            }
        }

        return res;
    };
}).call(this);