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

    // Types of all available node
    var nodeTypes = {
        "ELEMENT_NODE": 1,
        "ATTRIBUTE_NODE": 2,
        "TEXT_NODE": 3,
        "CDATA_SECTION_NODE": 4,
        "ENTITY_REFERENCE_NODE": 5,
        "ENTITY_NODE": 6,
        "PROCESSING_INSTRUCTION_NODE": 7,
        "COMMENT_NODE": 8,
        "DOCUMENT_NODE": 9,
        "DOCUMENT_TYPE_NODE": 10,
        "DOCUMENT_FRAGMENT_NODE": 11,
        "NOTATION_NODE": 12
    };

    function trim(source) {
        return source.replace(/^\s+|\s+$/g, "");
    }

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
/******************************************************************************/
/* Logger Parser */
/******************************************************************************/

if (typeof require !== "undefined") {
    var logger = require("./logger-core.js");
}

logger.parser = (function () {

    var

        printer_dom = {},

        printer_bom = {

/******************************************************************************/
/* General */
/******************************************************************************/

            "Document": function (o) {
                return "Document: \"" + o.location.href + "\"";
            },
            "Window": function (o) {
                return "Window: \"" + o.location.href + "\"";
            }
        },

        printer_js = {

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
                return printer_js["Array"](o);
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
            // Harmony JS
            // "Iterator": function (o) { return o; },
            "Number": function (o) { return o; },
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
            "RegExp": function (o) { return o.toString(); },
            "String": function (o) { return "\"" + String(o) + "\""; },

/******************************************************************************/
/* Typed array constructors */
/******************************************************************************/

            "ArrayBuffer": function (o) { return "[].byteLength: " + o.byteLength; },
            "DataView": function (o) { return "[].buffer.byteLength: " + o.buffer.byteLength; },
            "Float32Array": function (o) { return printer_js["DataView"](o); },
            "Float64Array": function (o) { return printer_js["DataView"](o); },
            "Int16Array": function (o) { return printer_js["DataView"](o); },
            "Int32Array": function (o) { return printer_js["DataView"](o); },
            "Int8Array": function (o) { return printer_js["DataView"](o); },
            "Uint16Array": function (o) { return printer_js["DataView"](o); },
            "Uint32Array": function (o) { return printer_js["DataView"](o); },
            "Uint8Array": function (o) { return printer_js["DataView"](o); },
            "Uint8ClampedArray": function (o) { return printer_js["DataView"](o); },

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
            "EvalError": function (o) { return printer_js["Error"](o); },
            // "InternalError": function (o) { return o; },
            "RangeError": function (o) { return printer_js["Error"](o); },
            "ReferenceError": function (o) { return printer_js["Error"](o); },
            // "StopIteration": function (o) { return o; },
            "SyntaxError": function (o) { return printer_js["Error"](o); },
            "TypeError": function (o) { return printer_js["Error"](o); },
            "URIError": function (o) { return printer_js["Error"](o); },

/******************************************************************************/
/* Other */
/******************************************************************************/

            "Infinity": function (o) { return String(o); },
            "JSON": function (o) { return printer_js["Object"](o); },
            "Math": function (o) { return printer_js["Object"](o); },
            "NaN": function (o) { return String(o); },
            "Null": function (o) { return String(o); },
            "undefined": function (o) { return String(o); }
        };

    // public API
    return {
        dom: printer_dom,
        bom: printer_bom,
        js: printer_js
    };
}());

