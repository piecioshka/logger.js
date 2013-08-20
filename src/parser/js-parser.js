(function (global) {
    "use strict";

    // lib
    var logger = (typeof require !== 'undefined') ? require("../logger-core.js") : global.logger;

    // parser
    var JSParser;

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

        "StorageInfo",
        "StorageEvent",
        "localStorage",
        "sessionStorage",
        "webkitStorageInfo",

        "XMLHttpRequest",
        "XMLHttpRequestException",
        "XMLHttpRequestProgressEvent",
        "XMLHttpRequestUpload",

        "Infinity",
        "JSON",
        "Math",
        "NaN",
        "Null",
        "undefined"
    ];

    function get_space(nr) {
        var result = "";
        var space = "    ";

        while (nr--) {
            result += space;
        }

        return result;
    }
    
    var special_parsers = {

/******************************************************************************/
/* General-purpose constructors */
/******************************************************************************/

        "Array": function (o, indent) {
            o = Array.prototype.slice.call(o);

            var r = "[",
                i = 0,
                l = o.length;

            for (; i < l; ++i) {
                indent++;

                r += logger(o[i], indent);

                indent--;

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
        "Object": function (o, indent) {
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

                    indent++;

                    r += (get_space(indent) + "\"" + i + "\": " + logger(o[i], indent));

                    indent--;

                    if (c < len - 1) {
                        r += ",\n";
                    }

                    c++;
                }
            }

            if (len > 0) {
                r += "\n";
            }

            return r + get_space(indent) + "}";
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
            if (o.message || o.lineNumber || o.line || o.lineno || o.filename || o.fileName || o.sourceURL) {
                res += "{\n";
                if (o.message) {
                    res += "\tMessage: \"" + o.message + "\"\n";
                }
                if (o.lineNumber || o.line) {
                    res += "\tLine: " + (o.lineNumber || o.line || o.lineno) + "\n";
                }
                if (o.fileName || o.sourceURL) {
                    res += "\tFile: \"" + (o.fileName || o.sourceURL || o.filename) + "\"\n";
                }
                res += "}";
            }
            res += ")";
            return res;
        },

/******************************************************************************/
/* Storage */
/******************************************************************************/

        "Storage": function () {
            return "[Storage]";
        },

/******************************************************************************/
/* XMLHttpRequest */
/******************************************************************************/

        "XMLHttpRequest": function (o) {
            var state, code = 0, text = "";

            switch (o.readyState) {
                case 0: state = "UNSENT (0)"; break;
                case 1: state = "OPENED (1)"; break;
                case 2: state = "HEADERS_RECEIVED (2)"; break;
                case 3: state = "LOADING (3)"; break;
                case 4: state = "DONE (4)"; break;
            }

            // if XHR is not ready, can not read "status" and "statusText" values
            if ( !in_array(o.readyState, [0, 1]) ) {
                code = o.status;
                text = o.statusText;
            }

            return {
                type: "[XMLHttpRequest]",
                readyState: state,
                statusText: text,
                httpCode: code
            };
        },
        "XMLHttpRequestException": function (o) {
            return {
                type: "[XMLHttpRequestException]",
                code: o.code
            };
        },
        "XMLHttpRequestProgressEvent": function (o) {
            return ["XMLHttpRequestProgressEvent"];
        },
        "XMLHttpRequestUpload": function (o) {
            return "[XMLHttpRequestUpload]";
        },

/******************************************************************************/
/* Other */
/******************************************************************************/

        "JSON": function (o, indent) {
            return this["Object"](o, indent);
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

    function like_as_data_view(o, indent) {
        return JSParser("DataView", o, indent);
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

    function like_as_error(o, indent) {
        return JSParser("Error", o, indent);
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

    JSParser = function (type, data, indent) {
        // check if exists special parser
        if (type in special_parsers) {
            // yes! exists, so run it!
            return special_parsers[type](data, indent);
        }

        // is Special Number
        else if (is_special_number(type)) {
            return like_as_data_view(data, indent);
        }

        // is Error
        else if (is_error(type)) {
            return like_as_error(data, indent);
        }

        // default parser
        return String(data, indent);
    };

    // public API
    logger.parser.JSParser = JSParser;

}(this));
