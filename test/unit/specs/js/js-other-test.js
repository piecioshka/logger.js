describe("logger/js Other", function () {
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
/* Other */
/******************************************************************************/

    it("Infinity", function () {
        expect(logger(Infinity)).toEqual("Infinity", "Other: Infinity");
        expect(logger(-Infinity)).toEqual("-Infinity", "Other: -Infinity");
    });

    it("JSON", function () {
        expect(logger({
            alpha: 1
        })).toEqual("{\n" + get_space(1) + "\"alpha\": 1\n}", "Other: JSON");

        expect(logger({
            alpha: 1,
            "beta": 2
        })).toEqual("{\n" + get_space(1) + "\"alpha\": 1,\n" + get_space(1) + "\"beta\": 2\n}", "Other: JSON");
    });

    it("Math", function () {
        expect(logger(Math)).toEqual("{}", "Other: Math");
    });

    it("NaN", function () {
        expect(logger(NaN)).toEqual("NaN", "Other: NaN");
    });

    it("Null", function () {
        expect(logger(null)).toEqual("null", "Other: Null");
    });

    it("undefined", function () {
        expect(logger(undefined)).toEqual("undefined", "Other: undefined");
    });
});

