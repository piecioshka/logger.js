(function () {
    "use strict";

    // master scope
    var global = this,

        // lib
        logger = (typeof require !== "undefined") ? require("../logger-core.js") : global.logger,

        // parser
        JSParser;

    JSParser = {

/******************************************************************************/
/* General-purpose constructors */
/******************************************************************************/

        "Array": function (o) {
            o = Array.prototype.slice.call(o);

            var r = "[",
                i = 0,
                l = o.length;

            for (; i < l; ++i) {
                r += logger(o[i]);

                if (i < l - 1) {
                    r += ", ";
                }
            }

            return r + "]";
        },
        "Arguments": function (o) {
            return this["Array"](o);
        },
        "Boolean": function (o) {
            return String(o);
        },
        "Date": function (o) {
            return "Date: " + o.toString();
        },
        "Function": function (o) {
            var s = o.toString(),
                pre = s.split("\n")[0],
                post = " [ignore code] }";

            return pre + post;
        },
        "Number": function (o) {
            return o;
        },
        "Object": function (o) {
            var r = "{",
                i,
                c = 0,
                len = (function (o) {
                    var i,
                        c = 0;

                    for (i in o) {
                        if (o.hasOwnProperty(i)) {
                            c++;
                        }
                    }

                    return c;
                }(o));

            if (len > 0) {
                r += "\n";
            }

            for (i in o) {
                if (o.hasOwnProperty(i)) {
                    r += "\t" + "\"" + i + "\": " + logger(o[i]);

                    if (c < len - 1) {
                        r += ",\n";
                    }

                    c++;
                }
            }

            if (len > 0) {
                r += "\n";
            }

            return r + "}";
        },
        "RegExp": function (o) {
            return o.toString();
        },
        "String": function (o) {
            return "\"" + String(o) + "\"";
        },

/******************************************************************************/
/* Typed array constructors */
/******************************************************************************/

        "ArrayBuffer": function (o) {
            return "[].byteLength: " + o.byteLength;
        },
        "DataView": function (o) {
            return "[].buffer.byteLength: " + o.buffer.byteLength;
        },
        "Float32Array": function (o) {
            return this["DataView"](o);
        },
        "Float64Array": function (o) {
            return this["DataView"](o);
        },
        "Int16Array": function (o) {
            return this["DataView"](o);
        },
        "Int32Array": function (o) {
            return this["DataView"](o);
        },
        "Int8Array": function (o) {
            return this["DataView"](o);
        },
        "Uint16Array": function (o) {
            return this["DataView"](o);
        },
        "Uint32Array": function (o) {
            return this["DataView"](o);
        },
        "Uint8Array": function (o) {
            return this["DataView"](o);
        },
        "Uint8ClampedArray": function (o) {
            return this["DataView"](o);
        },

/******************************************************************************/
/* Error constructors */
/******************************************************************************/

        "Error": function (o) {
            var res = "";
            res += o.name + "(";
            if (o.message || o.lineNumber || o.line || o.fileName || o.sourceURL) {
                res += "{\n";
                if (o.message) {
                    res += "\tMessage: \"" + o.message + "\"\n";
                }
                if (o.lineNumber || o.line) {
                    res += "\tLine: " + (o.lineNumber || o.line) + "\n";
                }
                if (o.fileName || o.sourceURL) {
                    res += "\tFile: \"" + (o.fileName || o.sourceURL) + "\"\n";
                }
                res += "}";
            }
            res += ")";
            return res;
        },
        "EvalError": function (o) {
            return this["Error"](o);
        },
        "RangeError": function (o) {
            return this["Error"](o);
        },
        "ReferenceError": function (o) {
            return this["Error"](o);
        },
        "SyntaxError": function (o) {
            return this["Error"](o);
        },
        "TypeError": function (o) {
            return this["Error"](o);
        },
        "URIError": function (o) {
            return this["Error"](o);
        },

/******************************************************************************/
/* Other */
/******************************************************************************/

        "Infinity": function (o) {
            return String(o);
        },
        "JSON": function (o) {
            return this["Object"](o);
        },
        "Math": function (o) {
            return this["Object"](o);
        },
        "NaN": function (o) {
            return String(o);
        },
        "Null": function (o) {
            return String(o);
        },
        "undefined": function (o) {
            return String(o);
        }
    };

    // public API
    logger.parser.JSParser = JSParser;

}).call(this);
