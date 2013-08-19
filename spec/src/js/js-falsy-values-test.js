describe("logger/js/core", function () {

    /******************************************************************************/
    /* FALSY VALUES */
    /******************************************************************************/

    it("Falsy Values", function () {
        expect(logger(false)).toEqual("false");
        expect(logger(0)).toEqual(0);
        expect(logger(null)).toEqual("null");
        expect(logger('')).toEqual('\"\"');
        expect(logger(NaN)).toEqual("NaN");
        expect(logger(undefined)).toEqual("undefined");
    });
});
