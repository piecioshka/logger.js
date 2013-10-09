/******************************************************************************/
/* TEST CASE: logger.js(): General-purpose constructors */
/******************************************************************************/

describe("logger/js General-purpose constructors", function () {

/******************************************************************************/
/* General-purpose constructors */
/******************************************************************************/

    it("Array", function () {
        expect(logger([]), "[]", "Array");
    });

    it("Arguments", function () {
        (function () {
            expect(logger(arguments), "[1, 2, 3, \"A\"]", "General-purpose constructors: Arguments: not empty");
        }(1, 2, 3, "A"));

        (function () {
            expect(logger(arguments), "[]", "General-purpose constructors: Arguments: empty");
        }());
    });

    it("Boolean", function () {
        expect(logger(false), "false", "General-purpose constructors: Boolean: false");
        expect(logger(1 === 0), "false", "General-purpose constructors: Boolean: false");
        expect(logger(true), "true", "General-purpose constructors: Boolean: true");
        expect(logger(1 === 1), "true", "General-purpose constructors: Boolean: true");
    });


    it("Date", function () {
        expect(logger(new Date()), "Date: " + new Date().toString(), "General-purpose constructors: Date");
    });

    it("Function", function () {
        expect(logger(Storage), "function Storage() { [ignore code] }", "Storage");

        expect(logger(function () {
            return 1;
        }), "function () { [ignore code] }", "General-purpose constructors: Function: empty");
        expect(logger(function (a, b) {
            return 1;
        }), "function (a, b) { [ignore code] }", "General-purpose constructors: Function: with params");

        expect(logger(new Function("test")), "function anonymous() { [ignore code] }", "General-purpose constructors: Function: not empty object");
    });

    // Harmony JS
    // "Iterator": function (o) { expect(false); },

    it("Number", function () {
        expect(logger(1), 1, "General-purpose constructors: Number: 1");
        expect(logger(0), 0, "General-purpose constructors: Number: 0");
        (function () {
            expect(logger(arguments.length), 0, "General-purpose constructors: Number: Arguments 0");
        }());
        (function (a) {
            expect(logger(arguments.length), 1, "General-purpose constructors: Number: Arguments 1");
        }(1));
    });

    it("Object", function () {
        expect(logger({}), "{}", "General-purpose constructors: Object: empty object");
        expect(logger({ alpha: "beta" }), "{\n\t\"alpha\": \"beta\"\n}", "General-purpose constructors: Object: empty object");
    });

    it("RegExp", function () {
        expect(logger(/^(.*)$/), "/^(.*)$/", "General-purpose constructors: RegExp");
    });

    it("String", function () {
        expect(logger("xyz"), "\"xyz\"", "General-purpose constructors: String: xyz");
        expect(logger(["abc"].join("")), "\"abc\"", "General-purpose constructors: String: abc");
        expect(logger("NaN"), "\"NaN\"", "General-purpose constructors: String: NaN");
        expect(logger("Infinity"), "\"Infinity\"", "General-purpose constructors: String: Infinity");
        expect(logger("-Infinity"), "\"-Infinity\"", "General-purpose constructors: String: -Infinity");
        expect(logger("Function"), "\"Function\"", "General-purpose constructors: String: Function");
        expect(logger("Array"), "\"Array\"", "General-purpose constructors: String: Array");
    });
});
