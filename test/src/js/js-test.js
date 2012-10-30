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
    // "Iterator": function (o) { assert(true); },

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

    "ArrayBuffer": function () { assert(true); },
    "DataView": function () { assert(true); },
    "Float32Array": function () { assert(true); },
    "Float64Array": function () { assert(true); },
    "Int16Array": function () { assert(true); },
    "Int32Array": function () { assert(true); },
    "Int8Array": function () { assert(true); },
    "Uint16Array": function () { assert(true); },
    "Uint32Array": function () { assert(true); },
    "Uint8Array": function () { assert(true); },
    "Uint8ClampedArray": function () { assert(true); },

/******************************************************************************/
/* Error constructors */
/******************************************************************************/

    "Error": function () { assert(true); },
    "EvalError": function () { assert(true); },
    "InternalError": function () { assert(true); },
    "RangeError": function () { assert(true); },
    "ReferenceError": function () { assert(true); },
    "StopIteration": function () { assert(true); },
    "SyntaxError": function () { assert(true); },
    "TypeError": function () { assert(true); },
    "URIError": function () { assert(true); },

/******************************************************************************/
/* Non-constructor functions */
/******************************************************************************/

    "decodeURI": function () { assert(true); },
    "decodeURIComponent": function () { assert(true); },
    "encodeURI": function () { assert(true); },
    "encodeURIComponent": function () { assert(true); },
    "eval": function () { assert(true); },
    "isFinite": function () { assert(true); },
    "isNaN": function () { assert(true); },
    "parseFloat": function () { assert(true); },
    "parseInt": function () { assert(true); },
    "uneval": function () { assert(true); },

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
    "Math": function () { assert(true); },
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

