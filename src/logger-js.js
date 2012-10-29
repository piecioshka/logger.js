/******************************************************************************/
/* Logger JavaScript */
/******************************************************************************/

(function () {
    "use strict";

    if (typeof require !== "undefined") {
        var logger = require("./logger-core.js");
    }

    var checker = {

/******************************************************************************/
/* General-purpose constructors */
/******************************************************************************/

        "Array": function (o) { return o && o.constructor && o.length && o.pop &&
            o.push && o.reverse && o.shift && o.sort && o.splice && o.unshift &&
            o.concat && o.join && o.slice && o.indexOf;
        },
        "Boolean": function (o) { return typeof o === "boolean" },
        "Date": function (o) { return o.parse && o.UTC && o.getDate &&
            o.getDay && o.getFullYear && o.getHours && o.getMilliseconds &&
            o.getMinutes && o.getMonth && o.getSeconds;
        },
        "Function": function (o) { return o.constructor && o.call && o.apply &&
            o instanceof Function;
        },
        // Harmony JS
        // "Iterator": function (o) { return o.constructor === Iterator; },
        "Number": function (o) { return typeof o === "number" && !isNaN(o) &&
            isFinite(o);
        },
        "Object": function (o) { return o && !o.length && o instanceof Object &&
            o.constructor === Object;
        },
        "RegExp": function (o) { return o && o.exec && o.test; },
        "String": function (o) { return typeof o === "string";},

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

        "Infinity": function (o) { return !isFinite(o); },
        "JSON": function (o) { return checker["Object"](o); },
        "Math": function (o) { return false; },
        "NaN": function (o) { return isNaN(o); },
        "Null": function (o) { return o === null; },
        "undefined": function (o) { return o === undefined; }
    };

    logger.js = function (data) {
        var res,
            type;

        for (type in checker) {
            if (checker.hasOwnProperty(type)) {
                if (checker[type].call(null, data)) {
                    res = "[" + type + "]" + logger.parser.js[type].call(this, data);
                }
            }
        }

        return res;
    };


}).call(this);