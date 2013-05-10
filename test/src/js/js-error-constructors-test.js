/******************************************************************************/
/* TEST CASE: logger.js(): Error constructors */
/******************************************************************************/

if (typeof require !== "undefined") {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../src/logger-core.js");
}

buster.testCase("logger/js Error constructors", {

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

    "Error": function () {
        assert.equals(logger(new Error()), "Error()", "Error constructors: Error");
        assert.equals(logger(new Error("test")), "Error({\n\tMessage: \"test\"\n})", "Error constructors: Error: with message");
    },

    "URIError": function () {
        assert.equals(logger(new URIError()), "URIError()", "Error constructors: URIError");
        assert.equals(logger(new URIError("test")), "URIError({\n\tMessage: \"test\"\n})", "Error constructors: URIError: with message");
    }

});
