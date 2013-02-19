/******************************************************************************/
/* TEST CASE: logger.js(): General-purpose constructors */
/******************************************************************************/

if (typeof require !== "undefined") {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../src/logger-core.js");
}

buster.testCase("logger/js General-purpose constructors", {

/******************************************************************************/
/* General-purpose constructors */
/******************************************************************************/

    "Array": function () {
        assert.equals(logger([]), "[]", "Array");
    },

    "Arguments": function () {
        (function () {
            assert.equals(logger(arguments), "[1, 2, 3, \"A\"]", "General-purpose constructors: Arguments: not empty");
        }(1, 2, 3, "A"));

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
        assert.equals(logger(Storage), "function Storage() { [ignore code] }", "Storage");

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
    }
});
