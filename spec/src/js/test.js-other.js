/******************************************************************************/
/* TEST CASE: logger.js(): Other */
/******************************************************************************/

describe("logger/js Other", function () {

/******************************************************************************/
/* Other */
/******************************************************************************/

    it("Infinity", function () {
        expect(logger(Infinity), "Infinity", "Other: Infinity");
        expect(logger(-Infinity), "-Infinity", "Other: -Infinity");
    });

    it("JSON", function () {
        expect(logger({
            alpha: 1
        }), "{\n\t\"alpha\": 1\n}", "Other: JSON");

        expect(logger({
            alpha: 1,
            "beta": 2
        }), "{\n\t\"alpha\": 1,\n\t\"beta\": 2\n}", "Other: JSON");
    });

    it("Math", function () {
        expect(logger(Math), "{}", "Other: Math");
    });

    it("NaN", function () {
        expect(logger(NaN), "NaN", "Other: NaN");
    });

    it("Null", function () {
        expect(logger(null), "null", "Other: Null");
    });

    it("undefined", function () {
        expect(logger(undefined), "undefined", "Other: undefined");
    });
});

