// http://www.w3.org/TR/2004/REC-DOM-Level-3-Val-20040127/validation.html
describe("logger/dom DOM Validation Level 3", function () {
    // 1.2 Exceptions

    // exceptions
    it("[exception ExceptionVAL]", function () {
        expect(1).toEqual(1);
    });

    // interfaces
    it("[interface DocumentEditVAL : NodeEditVAL]", function () {
        expect(1).toEqual(1);
    });
    it("[interface NodeEditVAL]", function () {
        expect(1).toEqual(1);
    });
    it("[interface ElementEditVAL : NodeEditVAL]", function () {
        expect(1).toEqual(1);
    });
    it("[interface CharacterDataEditVAL : NodeEditVAL]", function () {
        expect(1).toEqual(1);
    });
});
