/******************************************************************************/
/* TEST CASE: logger.js(): Other */
/******************************************************************************/

if (typeof require !== "undefined") {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../src/logger-core.js");
}

buster.testCase("logger/js Other", {

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

