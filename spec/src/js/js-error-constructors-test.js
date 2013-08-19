describe("logger/js Error constructors", function () {

/******************************************************************************/
/* Error constructors */
/******************************************************************************/

    it("Error", function () {
        expect(logger(new Error())).toEqual("Error()");
        expect(logger(new Error("test"))).toEqual("Error({\n\tMessage: \"test\"\n})");
    });

    it("EvalError", function () {
        expect(logger(new EvalError())).toEqual("EvalError()");
        expect(logger(new EvalError("test"))).toEqual("EvalError({\n\tMessage: \"test\"\n})");
    });

    // Harmony JS
    // "InternalError", function () { assert(false); },

    it("RangeError", function () {
        expect(logger(new RangeError())).toEqual("RangeError()");
        expect(logger(new RangeError("test"))).toEqual("RangeError({\n\tMessage: \"test\"\n})");
    });

    it("ReferenceError", function () {
        expect(logger(new ReferenceError())).toEqual("ReferenceError()");
        expect(logger(new ReferenceError("test"))).toEqual("ReferenceError({\n\tMessage: \"test\"\n})");
    });

    // Harmony JS
    // "StopIteration", function () { assert(false); },

    it("SyntaxError", function () {
        expect(logger(new SyntaxError())).toEqual("SyntaxError()");
        expect(logger(new SyntaxError("test"))).toEqual("SyntaxError({\n\tMessage: \"test\"\n})");
    });

    it("Error", function () {
        expect(logger(new Error())).toEqual("Error()");
        expect(logger(new Error("test"))).toEqual("Error({\n\tMessage: \"test\"\n})");
    });

    it("URIError", function () {
        expect(logger(new URIError())).toEqual("URIError()");
        expect(logger(new URIError("test"))).toEqual("URIError({\n\tMessage: \"test\"\n})");
    });
});
