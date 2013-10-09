/******************************************************************************/
/* TEST CASE: logger.js(): Error constructors */
/******************************************************************************/

describe("logger/js Error constructors", function () {

/******************************************************************************/
/* Error constructors */
/******************************************************************************/

    it("Error", function () {
        expect(logger(new Error()), "Error()", "Error constructors: Error: empty");
        expect(logger(new Error("test")), "Error({\n\tMessage: \"test\"\n})", "Error constructors: Error: with message");
    });

    it("EvalError", function () {
        expect(logger(new EvalError()), "EvalError()", "Error constructors: EvalError");
        expect(logger(new EvalError("test")), "EvalError({\n\tMessage: \"test\"\n})", "Error constructors: EvalError: with message");
    });

    // Harmony JS
    // "InternalError", function () { expect(false); },

    it("RangeError", function () {
        expect(logger(new RangeError()), "RangeError()", "Error constructors: RangeError");
        expect(logger(new RangeError("test")), "RangeError({\n\tMessage: \"test\"\n})", "Error constructors: RangeError: with message");
    });

    it("ReferenceError", function () {
        expect(logger(new ReferenceError()), "ReferenceError()", "Error constructors: ReferenceError");
        expect(logger(new ReferenceError("test")), "ReferenceError({\n\tMessage: \"test\"\n})", "Error constructors: ReferenceError: with message");
    });

    // Harmony JS
    // "StopIteration", function () { expect(false); },

    it("SyntaxError", function () {
        expect(logger(new SyntaxError()), "SyntaxError()", "Error constructors: SyntaxError");
        expect(logger(new SyntaxError("test")), "SyntaxError({\n\tMessage: \"test\"\n})", "Error constructors: SyntaxError: with message");
    });

    it("Error", function () {
        expect(logger(new Error()), "Error()", "Error constructors: Error");
        expect(logger(new Error("test")), "Error({\n\tMessage: \"test\"\n})", "Error constructors: Error: with message");
    });

    it("URIError", function () {
        expect(logger(new URIError()), "URIError()", "Error constructors: URIError");
        expect(logger(new URIError("test")), "URIError({\n\tMessage: \"test\"\n})", "Error constructors: URIError: with message");
    });
});
