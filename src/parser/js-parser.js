(function () {
    "use strict";

    // master scope
    var global = this,

        // lib
        logger = (typeof require !== "undefined") ? require("../logger-core.js") : global.logger,

        // parser
        JSParser;

    var default_data_objects = [
        "Array",
        "Arguments",
        "Boolean",
        "Date",
        "Function",
        "Number",
        "Object",
        "RegExp",
        "String",

        "ArrayBuffer",
        "DataView",
        "Float32Array",
        "Float64Array",
        "Int16Array",
        "Int32Array",
        "Int8Array",
        "Uint16Array",
        "Uint32Array",
        "Uint8Array",
        "Uint8ClampedArray",

        "Error",
        "EvalError",
        "RangeError",
        "ReferenceError",
        "SyntaxError",
        "TypeError",
        "URIError",

        "Storage",
        "StorageInfo",
        "StorageEvent",
        "localStorage",
        "sessionStorage",
        "webkitStorageInfo",

        "Infinity",
        "JSON",
        "Math",
        "NaN",
        "Null",
        "undefined"
    ];
    
    var special_parsers = {

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
        "Date": function (o) {
            return "Date: " + o.toString();
        },
        "Function": function (o) {
            var s = o.toString(), pre, post;

            pre = s.slice(0, s.indexOf("{") + 1);
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

/******************************************************************************/
/* Other */
/******************************************************************************/

        "JSON": function (o) {
            return this["Object"](o);
        },
        "Math": function (o) {
            return this["Object"](o);
        }
    };

    function in_array(i, a) {
        var l = a.length;
        for (var j = 0; j < l; ++j) {
            if (a[j] === i) {
                return true;
            }
        }
        return false;
    }

    function like_as_data_view(o) {
        return JSParser("DataView", o);
    }
    
    function is_special_number(type) {
        var SPECIAL_NUMBER_ARRAY = [
            "Float32Array",
            "Float64Array",
            "Int16Array",
            "Int32Array",
            "Int8Array",
            "Uint16Array",
            "Uint32Array",
            "Uint8Array",
            "Uint8ClampedArray"
        ];

        return in_array(type, SPECIAL_NUMBER_ARRAY);
    }

    function like_as_error(o) {
        return JSParser("Error", o);
    }

    function is_error(type) {
        var ERRORS_NAME_ARRAY = [
            "EvalError",
            "RangeError",
            "ReferenceError",
            "SyntaxError",
            "TypeError",
            "URIError"
        ];

        return in_array(type, ERRORS_NAME_ARRAY);
    }

    JSParser = function (type, data) {
        // check if exists special parser
        if (type in special_parsers) {
            // yes! exists, so run it!
            return special_parsers[type](data);
        }

        // is Special Number
        else if (is_special_number(type)) {
            return like_as_data_view(data);
        }

        // is Error
        else if (is_error(type)) {
            return like_as_error(data);
        }

        // default parser
        return String(data);
    };

    // public API
    logger.parser.JSParser = JSParser;

}).call(this);
