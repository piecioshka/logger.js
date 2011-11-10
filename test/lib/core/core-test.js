// Node.js tests
var buster = require("buster");
var logger = require("../../../lib/logger-core.js");

buster.testCase("logger - initialization process", {
    "init by new ": function () {
        var a = new logger();
        assert(typeof a === "function", "\"new logger()\" also get function");
    },
    "test use with new": function () {
        var msg = "Simple text";
        var msg_from_logger = new logger(msg);
        assert(msg === msg_from_logger, "Run logger with operator \"new\"");
    }
});
