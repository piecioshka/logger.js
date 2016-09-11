describe("logger/js General-purpose constructors", function () {
    var get_space;

    beforeEach(function () {
        get_space = function (nr) {
            var result = "";
            var space = "    ";

            while (nr--) {
                result += space;
            }

            return result;
        };
    });

/******************************************************************************/
/* General-purpose constructors */
/******************************************************************************/

    it("Array", function () {
        expect(logger([])).toEqual("[]");
    });

    it("Arguments", function () {
        (function () {
            expect(logger(arguments)).toEqual("[1, 2, 3, \"A\"]");
        }(1, 2, 3, "A"));

        (function () {
            expect(logger(arguments)).toEqual("[]");
        }());
    });

    it("Boolean", function () {
        expect(logger(false)).toEqual("false");
        expect(logger(1 === 0)).toEqual("false");
        expect(logger(true)).toEqual("true");
        expect(logger(1 === 1)).toEqual("true");
    });


    it("Date", function () {
        expect(logger(new Date())).toEqual("Date: " + new Date().toString());
    });

    it("Function", function () {
        expect(logger(Storage)).toEqual("function Storage() { [ignore code] }");

        expect(logger(function () {
            return 1;
        })).toEqual("function () { [ignore code] }");
        expect(logger(function (a, b) {
            return 1;
        })).toEqual("function (a, b) { [ignore code] }");

        expect(logger(new Function("test"))).toEqual("function anonymous() { [ignore code] }");
    });

    // Harmony JS
    // "Iterator": function (o) { assert(false); },

    it("Number", function () {
        expect(logger(1), 1);
        expect(logger(0), 0);
        (function () {
            expect(logger(arguments.length), 0);
        }());
        (function (a) {
            expect(logger(arguments.length), 1);
        }(1));
    });

    it("Object", function () {
        expect(logger({})).toEqual("{}");
        expect(logger({ alpha: "beta" })).toEqual("{\n" + get_space(1) + "\"alpha\": \"beta\"\n}");
    });

    it("RegExp", function () {
        expect(logger(/^(.*)$/)).toEqual("/^(.*)$/");
    });

    it("String", function () {
        expect(logger("xyz")).toEqual("\"xyz\"");
        expect(logger(["abc"].join(""))).toEqual("\"abc\"");
        expect(logger("NaN")).toEqual("\"NaN\"");
        expect(logger("Infinity")).toEqual("\"Infinity\"");
        expect(logger("-Infinity")).toEqual("\"-Infinity\"");
        expect(logger("Function")).toEqual("\"Function\"");
        expect(logger("Array")).toEqual("\"Array\"");
    });
});
