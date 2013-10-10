/******************************************************************************/
/* TEST CASE: logger.js() */
/******************************************************************************/

describe("logger/js/core", function () {

    /******************************************************************************/
    /* FALSY VALUES */
    /******************************************************************************/

    it("Falsy Values", function () {
        expect(logger(false), "false", "Falsy Values: false");
        expect(logger(0), 0, "Falsy Values: 0");
        expect(logger(null), "null", "Falsy Values: null");
        expect(logger(''), '\"\"', "Falsy Values: \"\"");
        expect(logger(NaN), "NaN", "Falsy Values: NaN");
        expect(logger(undefined), "undefined", "Falsy Values: undefined");
    });
});
