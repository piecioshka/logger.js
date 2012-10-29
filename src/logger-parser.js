/******************************************************************************/
/* Logger Parser */
/******************************************************************************/

if (typeof require !== "undefined") {
    var logger = require("./logger-core.js");
}

logger.parser = (function () {

    var

        printer_dom = {},

        printer_bom = {},

        printer_js = {

/******************************************************************************/
/* General-purpose constructors */
/******************************************************************************/

            "Array": function (o) {
                var r = "[",
                    i = 0,
                    l = o.length;

                for (; i < l; ++i) {
                    r += logger(o);
                }

                return r + "]";
            },
            "Boolean": function (o) {
                return o;
            },
            "Date": function (o) {
                return "Date:" + o.toString();
            },
            "Function": function (o) {
                var s = o.toString(),
                    pre = s.split("\n")[0],
                    post = " [ignore code] }";

                return pre + post;
            },
            // Harmony JS
            // "Iterator": function (o) { return o; },
            "Number": function (o) { return o; },
            "Object": function (o) {
                var r = "{\n",
                    i;

                for (i in o) {
                    if (o.hasOwnProperty(i)) {
                        r += "\t" + "\"" + i + "\": " + logger(o[i]);
                    }
                }

                return r + "\n}";
            },
            "RegExp": function (o) { return o.toString(); },
            "String": function (o) { return String(o); },

/******************************************************************************/
/* Typed array constructors */
/******************************************************************************/

            "ArrayBuffer": function (o) { return o; },
            "DataView": function (o) { return o; },
            "Float32Array": function (o) { return o; },
            "Float64Array": function (o) { return o; },
            "Int16Array": function (o) { return o; },
            "Int32Array": function (o) { return o; },
            "Int8Array": function (o) { return o; },
            "Uint16Array": function (o) { return o; },
            "Uint32Array": function (o) { return o; },
            "Uint8Array": function (o) { return o; },
            "Uint8ClampedArray": function (o) { return o; },

/******************************************************************************/
/* Error constructors */
/******************************************************************************/

            "Error": function (o) { return o; },
            "EvalError": function (o) { return o; },
            "InternalError": function (o) { return o; },
            "RangeError": function (o) { return o; },
            "ReferenceError": function (o) { return o; },
            "StopIteration": function (o) { return o; },
            "SyntaxError": function (o) { return o; },
            "TypeError": function (o) { return o; },
            "URIError": function (o) { return o; },

/******************************************************************************/
/* Non-constructor functions */
/******************************************************************************/

            "decodeURI": function (o) { return o; },
            "decodeURIComponent": function (o) { return o; },
            "encodeURI": function (o) { return o; },
            "encodeURIComponent": function (o) { return o; },
            "eval": function (o) { return o; },
            "isFinite": function (o) { return o; },
            "isNaN": function (o) { return o; },
            "parseFloat": function (o) { return o; },
            "parseInt": function (o) { return o; },
            "uneval": function (o) { return o; },

/******************************************************************************/
/* Other */
/******************************************************************************/

            "Infinity": function (o) { return String(o); },
            "JSON": function (o) { return printer_js["Object"](o); },
            "Math": function (o) { return o; },
            "NaN": function (o) { return String(o); },
            "Null": function (o) { return o; },
            "undefined": function (o) { return o; }
        };

    // public API
    return {
        dom: printer_dom,
        bom: printer_bom,
        js: printer_js
    };
}());

