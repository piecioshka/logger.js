/******************************************************************************/
/* TEST CASE: logger.js() */
/******************************************************************************/

if (typeof require !== "undefined") {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../src/logger-core.js");
}

buster.testCase("logger/js/core", {

/******************************************************************************/
/* FALSY VALUES */
/******************************************************************************/

    "Falsy Values": function () {
        assert.equals(logger(false), "false", "Falsy Values: false");
        assert.equals(logger(0), 0, "Falsy Values: 0");
        assert.equals(logger(null), "null", "Falsy Values: null");
        assert.equals(logger(''), '\"\"', "Falsy Values: \"\"");
        assert.equals(logger(NaN), "NaN", "Falsy Values: NaN");
        assert.equals(logger(undefined), "undefined", "Falsy Values: undefined");
    },

/******************************************************************************/
/* General-purpose constructors */
/******************************************************************************/

    "Array": function () {
        assert.equals(logger([]), "[]", "Array");
    },

    "Arguments": function () {
        assert.equals(logger([1, 2, 3, "A"]), "[1, 2, 3, \"A\"]", "General-purpose constructors: Arguments: not empty");
        (function () {
            assert.equals(logger(arguments), "[]", "General-purpose constructors: Arguments: empty");
        }());
    },

    "Boolean": function () {
        assert.equals(logger(false), "false", "General-purpose constructors: Boolean: false");
        assert.equals(logger(1 === 0), "false", "General-purpose constructors: Boolean: false");
        assert.equals(logger(true), "true", "General-purpose constructors: Boolean: true");
        assert.equals(logger(1 === 1), "true", "General-purpose constructors: Boolean: true");
    },


    "Date": function () {
        assert.equals(logger(new Date()), "Date: " + new Date().toString(), "General-purpose constructors: Date");
    },

    "Function": function () {
        assert.equals(logger(function () {
            return 1;
        }), "function () { [ignore code] }", "General-purpose constructors: Function: empty");
        assert.equals(logger(function (a, b) {
            return 1;
        }), "function (a, b) { [ignore code] }", "General-purpose constructors: Function: with params");

        assert.equals(logger(new Function("test")), "function anonymous() { [ignore code] }", "General-purpose constructors: Function: not empty object");
    },

    // Harmony JS
    // "Iterator": function (o) { assert(false); },

    "Number": function () {
        assert.equals(logger(1), 1, "General-purpose constructors: Number: 1");
        assert.equals(logger(0), 0, "General-purpose constructors: Number: 0");
        (function () {
            assert.equals(logger(arguments.length), 0, "General-purpose constructors: Number: Arguments 0");
        }());
        (function (a) {
            assert.equals(logger(arguments.length), 1, "General-purpose constructors: Number: Arguments 1");
        }(1));
    },

    "Object": function () {
        assert.equals(logger({}), "{}", "General-purpose constructors: Object: empty object");
        assert.equals(logger({ alpha: "beta" }), "{\n\t\"alpha\": \"beta\"\n}", "General-purpose constructors: Object: empty object");
    },

    "RegExp": function () {
        assert.equals(logger(/^(.*)$/), "/^(.*)$/", "General-purpose constructors: RegExp");
    },

    "String": function () {
        assert.equals(logger("xyz"), "\"xyz\"", "General-purpose constructors: String: xyz");
        assert.equals(logger(["abc"].join("")), "\"abc\"", "General-purpose constructors: String: abc");
        assert.equals(logger("NaN"), "\"NaN\"", "General-purpose constructors: String: NaN");
        assert.equals(logger("Infinity"), "\"Infinity\"", "General-purpose constructors: String: Infinity");
        assert.equals(logger("-Infinity"), "\"-Infinity\"", "General-purpose constructors: String: -Infinity");
        assert.equals(logger("Function"), "\"Function\"", "General-purpose constructors: String: Function");
        assert.equals(logger("Array"), "\"Array\"", "General-purpose constructors: String: Array");
    },

/******************************************************************************/
/* Typed array constructors */
/******************************************************************************/

    "ArrayBuffer": function () {
        assert.equals(logger(new ArrayBuffer(Infinity)), "[].byteLength: 0", "Typed array constructors: ArrayBuffer: Infinity");
        assert.equals(logger(new ArrayBuffer(0)), "[].byteLength: 0", "Typed array constructors: ArrayBuffer: 0");
        assert.equals(logger(new ArrayBuffer(2)), "[].byteLength: 2", "Typed array constructors: ArrayBuffer: 2");
        assert.equals(logger(new ArrayBuffer(Math.E)), "[].byteLength: 2", "Typed array constructors: ArrayBuffer: Math.E");
        assert.equals(logger(new ArrayBuffer(5)), "[].byteLength: 5", "Typed array constructors: ArrayBuffer: 5");
        assert.equals(logger(new ArrayBuffer(123456789)), "[].byteLength: 123456789", "Typed array constructors: ArrayBuffer: 123456789");
        assert.equals(logger(new ArrayBuffer(Number.MAX_VALUE)), "[].byteLength: 0", "Typed array constructors: ArrayBuffer: Number.MAX_VALUE");
    },

    "DataView": function () {
        assert.equals(logger(new DataView(new ArrayBuffer(1), 0)), "[].buffer.byteLength: 1", "Typed array constructors: DataView: 1");
        assert.equals(logger(new DataView(new ArrayBuffer(123456789))), "[].buffer.byteLength: 123456789", "Typed array constructors: DataView: 123456789");

        assert.equals(logger(new DataView(new ArrayBuffer(12), 0, 0)), "[].buffer.byteLength: 12", "Typed array constructors: DataView: 12");
    },

    "Float32Array": function () {
        assert.equals(logger(new Float32Array(0)), "[].buffer.byteLength: 0", "Typed array constructors: Float32Array: 0");
        assert.equals(logger(new Float32Array(1)), "[].buffer.byteLength: 4", "Typed array constructors: Float32Array: 1");
        assert.equals(logger(new Float32Array(Number.MAX_VALUE)), "[].buffer.byteLength: 0", "Typed array constructors: Float32Array: Number.MAX_VALUE");
    },

    "Float64Array": function () {
        assert.equals(logger(new Float64Array(0)), "[].buffer.byteLength: 0", "Typed array constructors: Float64Array: 0");
        assert.equals(logger(new Float64Array(1)), "[].buffer.byteLength: 8", "Typed array constructors: Float64Array: 1");
        assert.equals(logger(new Float64Array(Number.MAX_VALUE)), "[].buffer.byteLength: 0", "Typed array constructors: Float64Array: Number.MAX_VALUE");
    },

    "Int16Array": function () {
        assert.equals(logger(new Int16Array(0)), "[].buffer.byteLength: 0", "Typed array constructors: Int16Array: 0");
        assert.equals(logger(new Int16Array(1)), "[].buffer.byteLength: 2", "Typed array constructors: Int16Array: 1");
        assert.equals(logger(new Int16Array(Number.MAX_VALUE)), "[].buffer.byteLength: 0", "Typed array constructors: Int16Array: Number.MAX_VALUE");
    },

    "Int32Array": function () {
        assert.equals(logger(new Int32Array(0)), "[].buffer.byteLength: 0", "Typed array constructors: Int32Array: 0");
        assert.equals(logger(new Int32Array(1)), "[].buffer.byteLength: 4", "Typed array constructors: Int32Array: 1");
        assert.equals(logger(new Int32Array(Number.MAX_VALUE)), "[].buffer.byteLength: 0", "Typed array constructors: Int32Array: Number.MAX_VALUE");
    },

    "Int8Array": function () {
        assert.equals(logger(new Int8Array(0)), "[].buffer.byteLength: 0", "Typed array constructors: Int8Array: 0");
        assert.equals(logger(new Int8Array(1)), "[].buffer.byteLength: 1", "Typed array constructors: Int8Array: 1");
        assert.equals(logger(new Int8Array(Number.MAX_VALUE)), "[].buffer.byteLength: 0", "Typed array constructors: Int8Array: Number.MAX_VALUE");
    },

    "Uint16Array": function () {
        assert.equals(logger(new Uint16Array(0)), "[].buffer.byteLength: 0", "Typed array constructors: Uint16Array: 0");
        assert.equals(logger(new Uint16Array(1)), "[].buffer.byteLength: 2", "Typed array constructors: Uint16Array: 1");
        assert.equals(logger(new Uint16Array(Number.MAX_VALUE)), "[].buffer.byteLength: 0", "Typed array constructors: Uint16Array: Number.MAX_VALUE");
    },

    "Uint32Array": function () {
        assert.equals(logger(new Uint32Array(0)), "[].buffer.byteLength: 0", "Typed array constructors: Uint32Array: 0");
        assert.equals(logger(new Uint32Array(1)), "[].buffer.byteLength: 4", "Typed array constructors: Uint32Array: 1");
        assert.equals(logger(new Uint32Array(Number.MAX_VALUE)), "[].buffer.byteLength: 0", "Typed array constructors: Uint32Array: Number.MAX_VALUE");
    },

    "Uint8Array": function () {
        assert.equals(logger(new Uint8Array(0)), "[].buffer.byteLength: 0", "Typed array constructors: Uint8Array: 0");
        assert.equals(logger(new Uint8Array(1)), "[].buffer.byteLength: 1", "Typed array constructors: Uint8Array: 1");
        assert.equals(logger(new Uint8Array(Number.MAX_VALUE)), "[].buffer.byteLength: 0", "Typed array constructors: Uint8Array: Number.MAX_VALUE");
    },

    // Harmony JS
    // "Uint8ClampedArray": function () { assert(false); },

/******************************************************************************/
/* Error constructors */
/******************************************************************************/

    "Error": function () {
        assert.equals(logger(new Error()), "Error()", "Error constructors: Error: empty");
        assert.equals(logger(new Error("test")), "Error({\n\tMessage: \"test\"\n})", "Error constructors: Error: with message");
    },

    "EvalError": function () {
        assert.equals(logger(new EvalError()), "EvalError()", "Error constructors: EvalError");
        assert.equals(logger(new EvalError("test")), "EvalError({\n\tMessage: \"test\"\n})", "Error constructors: EvalError: with message");
    },

    // Harmony JS
    // "InternalError": function () { assert(false); },

    "RangeError": function () {
        assert.equals(logger(new RangeError()), "RangeError()", "Error constructors: RangeError");
        assert.equals(logger(new RangeError("test")), "RangeError({\n\tMessage: \"test\"\n})", "Error constructors: RangeError: with message");
    },

    "ReferenceError": function () {
        assert.equals(logger(new ReferenceError()), "ReferenceError()", "Error constructors: ReferenceError");
        assert.equals(logger(new ReferenceError("test")), "ReferenceError({\n\tMessage: \"test\"\n})", "Error constructors: ReferenceError: with message");
    },

    // Harmony JS
    // "StopIteration": function () { assert(false); },

    "SyntaxError": function () {
        assert.equals(logger(new SyntaxError()), "SyntaxError()", "Error constructors: SyntaxError");
        assert.equals(logger(new SyntaxError("test")), "SyntaxError({\n\tMessage: \"test\"\n})", "Error constructors: SyntaxError: with message");
    },

    "TypeError": function () {
        assert.equals(logger(new TypeError()), "TypeError()", "Error constructors: TypeError");
        assert.equals(logger(new TypeError("test")), "TypeError({\n\tMessage: \"test\"\n})", "Error constructors: TypeError: with message");
    },

    "URIError": function () {
        assert.equals(logger(new URIError()), "URIError()", "Error constructors: URIError");
        assert.equals(logger(new URIError("test")), "URIError({\n\tMessage: \"test\"\n})", "Error constructors: URIError: with message");
    },

/******************************************************************************/
/* Non-constructor functions */
/******************************************************************************/

    "decodeURI": function () {
        assert.equals(logger(decodeURI), "function decodeURI() { [native code] }", "Non-constructor functions: decodeURI");
    },

    "decodeURIComponent": function () {
        assert.equals(logger(decodeURIComponent), "function decodeURIComponent() { [native code] }", "Non-constructor functions: decodeURIComponent");
    },

    "encodeURI": function () {
        assert.equals(logger(encodeURI), "function encodeURI() { [native code] }", "Non-constructor functions: encodeURI");
    },

    "encodeURIComponent": function () {
        assert.equals(logger(encodeURIComponent), "function encodeURIComponent() { [native code] }", "Non-constructor functions: encodeURIComponent");
    },

    "eval": function () {
        assert.equals(logger(eval), "function eval() { [native code] }", "Non-constructor functions: eval");
    },

    "isFinite": function () {
        assert.equals(logger(isFinite), "function isFinite() { [native code] }", "Non-constructor functions: isFinite");
    },

    "isNaN": function () {
        assert.equals(logger(isNaN), "function isNaN() { [native code] }", "Non-constructor functions: isNaN");
    },

    "parseFloat": function () {
        assert.equals(logger(parseFloat), "function parseFloat() { [native code] }", "Non-constructor functions: parseFloat");
    },

    "parseInt": function () {
        assert.equals(logger(parseInt), "function parseInt() { [native code] }", "Non-constructor functions: parseInt");
    },

    // Harmony JS
    // "uneval": function () { assert(false); },

/******************************************************************************/
/* Other */
/******************************************************************************/

    "Infinity": function () {
        assert.equals(logger(Infinity), "Infinity", "Other: Infinity");
        assert.equals(logger(-Infinity), "-Infinity", "Other: -Infinity");
    },

    "JSON": function () {
        assert.equals(logger({
            alpha: 1
        }), "{\n\t\"alpha\": 1\n}", "Other: JSON");

        assert.equals(logger({
            alpha: 1,
            "beta": 2
        }), "{\n\t\"alpha\": 1,\n\t\"beta\": 2\n}", "Other: JSON");
    },

    "Math": function () {
        assert.equals(logger(Math), "{}", "Other: Math");
    },

    "NaN": function () {
        assert.equals(logger(NaN), "NaN", "Other: NaN");
    },

    "Null": function () {
        assert.equals(logger(null), "null", "Other: Null");
    },

    "undefined": function () {
        assert.equals(logger(undefined), "undefined", "Other: undefined");
    }
});

