/******************************************************************************/
/* DOM Abstract Schema Level 3 */
/******************************************************************************/

// http://www.w3.org/TR/2002/NOTE-DOM-Level-3-AS-20020725/abstract-schemas.html
describe("logger/dom DOM Abstract Schema Level 3", function () {
    // 1.3.1. Basic Abstract Schema Interfaces

    // interfaces
    it("[interface ASConstants]", function () {
        // expect(true);
    });
    it("[interface ASObject]", function () {
        // expect(true);
    });
    it("[interface ASDataType]", function () {
        // expect(true);
    });
    it("[interface ASObjectList]", function () {
        // expect(true);
    });
    it("[interface ASNamedObjectMap]", function () {
        // expect(true);
    });
    it("[interface ASModel : ASObject]", function () {
        // expect(true);
    });
    it("[interface ASContentModel : ASObject]", function () {
        // expect(true);
    });
    it("[interface ASElementDecl : ASObject]", function () {
        // expect(true);
    });
    it("[interface ASAttributeDecl : ASObject]", function () {
        // expect(true);
    });
    it("[interface ASEntityDecl : ASObject]", function () {
        // expect(true);
    });
    it("[interface ASNotationDecl : ASObject]", function () {
        // expect(true);
    });
    it("[interface ASWModel : ASModel]", function () {
        // expect(true);
    });
    it("[interface ASWNamedObjectMap : ASNamedObjectMap]", function () {
        // expect(true);
    });
    it("[interface ASWElementDecl : ASElementDecl]", function () {
        // expect(true);
    });
    it("[interface ASWContentModel : ASContentModel]", function () {
        // expect(true);
    });
    it("[interface ASWAttributeDecl : ASAttributeDecl]", function () {
        // expect(true);
    });
    it("[interface ASWEntityDecl : ASEntityDecl]", function () {
        // expect(true);
    });
    it("[interface ASWNotationDecl : ASNotationDecl]", function () {
        // expect(true);
    });

    // 1.4. Validation and Other Interfaces

    // exceptions
    it("[exception ASException : ASNotationDecl]", function () {
        // expect(true);
    });

    // interface
    it("[interface DocumentAS : Document]", function () {
        // expect(true);
    });
    it("[interface DOMImplementationAS : DOMImplementation]", function () {
        // expect(true);
    });

    // 1.9. Load and Save for Abstract Schemas

    // interface
    it("[interface ASDOMBuilder : ls::DOMBuilder]", function () {
        // expect(true);
    });
    it("[interface ASDOMWriter : ls::DOMWriter]", function () {
        // expect(true);
    });
});
