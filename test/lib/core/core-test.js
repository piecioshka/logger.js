/********************************************************************************/
/* TEST CASE: logger() */
/********************************************************************************/

if (typeof require !== "undefined") {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../lib/logger-core.js");
}

buster.testCase("logger/core", {
    "exists logger": function () {
        assert(typeof logger === "function", "Exists master object logger");
    },

    "init by new ": function () {
        assert(typeof new logger() === "function", "\"new logger()\" also get function");
    },

    "test use with new": function () {
        assert(new logger() instanceof Function, "Run logger with operator \"new\"");
    }
});

