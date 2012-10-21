/********************************************************************************/
/* TEST CASE: logger.js() */
/********************************************************************************/

if (typeof require !== "undefined") {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../src/logger-core.js");
}

buster.testCase("logger/js/core", {
    /********************************************************************************/
    /* FALSY VALUES */
    /********************************************************************************/

    "Falsy Values": function () {
        assert.equals(logger(false), false, "false");
        assert.equals(logger(0), 0, "0");
        assert.equals(logger(null), null, "null");
        assert.equals(logger(''), '""', "''");
        assert.equals(logger(NaN), "NaN", "NaN");
        assert.equals(logger(undefined), undefined, "undefined");
    },

    /********************************************************************************/
    /* PRIMITIVE */
    /********************************************************************************/

    "Boolean": function () {
        assert.equals(logger(false), false, "Boolean false");
        assert.equals(logger(1 === 0), false, "Boolean true");
        assert.equals(logger(true), true, "Boolean true");
        assert.equals(logger(1 === 1), true, "Boolean true");
    },

    "Number": function () {
        assert.equals(logger(1), 1, "Number 1");
        assert.equals(logger(0), 0, "Number 0");
        assert.equals(logger(NaN), "NaN", "Number NaN");
        assert.equals(logger(Infinity), "Infinity", "Number Infinity");
        assert.equals(logger(-Infinity), "-Infinity", "Number -Infinity");
        (function () {
            assert.equals(logger(arguments.length), 0, "Number Arguments 0");
        }());
        (function (a) {
            assert.equals(logger(arguments.length), 1, "Number Arguments 1");
        }(1));
    },

    "String": function () {
        assert.equals(logger("xyz"), "\"xyz\"", "String xyz");
        var array = [];
        array.push("abc");
        assert.equals(logger(array.join("")), "\"abc\"", "String abc");
        assert.equals(logger("NaN"), "\"NaN\"", "String NaN");
        assert.equals(logger("Infinity"), "\"Infinity\"", "String Infinity");
        assert.equals(logger("-Infinity"), "\"-Infinity\"", "String -Infinity");
    },

    "Undefined": function () {
        var a;
        assert.equals(logger(a), undefined, "Undefined");
    },

    "Function": function () {
        assert.equals(logger(function () {
            return 1;
        }), "function () { [ignore code] }", "Function");
        assert.equals(logger(function (a, b) {
            return 1;
        }), "function (a, b) { [ignore code] }", "Function with params");
    },

    /********************************************************************************/
    /* OBJECT */
    /********************************************************************************/

    "Array": function () {
        assert.equals(logger([]), "[]", "Array");
        assert.equals(logger([1, 2, 3, "A"]), "[1, 2, 3, \"A\"]", "Array with params");
        (function () {
            assert.equals(logger(arguments), "[]", "Arguments");
        }());
    },

    "Null": function () {
        var a = null;
        assert.equals(logger(a), null, "Null");
    },

    "JSON": function () {
        assert.equals(logger({
            a: 1
        }), "{\n\t\"a\": 1,\n}", "JSON");
    },

    "prototype": function () {
        var result = ["function () { [ignore code] }", "function Empty() { [ignore code] }"],
            testing = logger(Function.prototype),
            in_side = false;
        for (var i = 0; i < result.length; ++i) {
            if (result[i] === testing) {
                in_side = true;
            }
        }
        assert(in_side, "Function.prototype");
        assert.equals(logger(function () {}.prototype), "{\n}", "function () {}.prototype");
    },

    "RegExp": function () {
        assert.equals(logger(/^(.*)$/), "/^(.*)$/", "RegExp");
    },

    "Date": function () {
        var d = new Date().toString();
        assert.equals(logger(new Date()), "Date(" + d + ")", "Date");
    }
});

