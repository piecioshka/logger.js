// http://www.w3.org/TR/2002/NOTE-DOM-Level-3-AS-20020725/abstract-schemas.html
describe("logger/dom DOM Abstract Schema Level 3", function () {
    // 1.3.1. Basic Abstract Schema Interfaces

    // interfaces
    it("[interface ASConstants]", function () {
        expect(1).toBe(1);
    });
    it("[interface ASObject]", function () {
        expect(1).toBe(1);
    });
    it("[interface ASDataType]", function () {
        expect(1).toBe(1);
    });
    it("[interface ASObjectList]", function () {
        expect(1).toBe(1);
    });
    it("[interface ASNamedObjectMap]", function () {
        expect(1).toBe(1);
    });
    it("[interface ASModel : ASObject]", function () {
        expect(1).toBe(1);
    });
    it("[interface ASContentModel : ASObject]", function () {
        expect(1).toBe(1);
    });
    it("[interface ASElementDecl : ASObject]", function () {
        expect(1).toBe(1);
    });
    it("[interface ASAttributeDecl : ASObject]", function () {
        expect(1).toBe(1);
    });
    it("[interface ASEntityDecl : ASObject]", function () {
        expect(1).toBe(1);
    });
    it("[interface ASNotationDecl : ASObject]", function () {
        expect(1).toBe(1);
    });
    it("[interface ASWModel : ASModel]", function () {
        expect(1).toBe(1);
    });
    it("[interface ASWNamedObjectMap : ASNamedObjectMap]", function () {
        expect(1).toBe(1);
    });
    it("[interface ASWElementDecl : ASElementDecl]", function () {
        expect(1).toBe(1);
    });
    it("[interface ASWContentModel : ASContentModel]", function () {
        expect(1).toBe(1);
    });
    it("[interface ASWAttributeDecl : ASAttributeDecl]", function () {
        expect(1).toBe(1);
    });
    it("[interface ASWEntityDecl : ASEntityDecl]", function () {
        expect(1).toBe(1);
    });
    it("[interface ASWNotationDecl : ASNotationDecl]", function () {
        expect(1).toBe(1);
    });

    // 1.4. Validation and Other Interfaces

    // exceptions
    it("[exception ASException : ASNotationDecl]", function () {
        expect(1).toBe(1);
    });

    // interface
    it("[interface DocumentAS : Document]", function () {
        expect(1).toBe(1);
    });
    it("[interface DOMImplementationAS : DOMImplementation]", function () {
        expect(1).toBe(1);
    });

    // 1.9. Load and Save for Abstract Schemas

    // interface
    it("[interface ASDOMBuilder : ls::DOMBuilder]", function () {
        expect(1).toBe(1);
    });
    it("[interface ASDOMWriter : ls::DOMWriter]", function () {
        expect(1).toBe(1);
    });
});
