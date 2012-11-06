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
    }

});
