/********************************************************************************/
/* DOM Abstract Schema Level 3 */
/********************************************************************************/

if (typeof require !== "undefined") {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../src/logger-core.js");
}

// http://www.w3.org/TR/2002/NOTE-DOM-Level-3-AS-20020725/abstract-schemas.html
buster.testCase("logger/dom DOM Abstract Schema Level 3", {
    // 1.3.1. Basic Abstract Schema Interfaces

    // interfaces
    "[interface ASConstants]": function () {},
    "[interface ASObject]": function () {},
    "[interface ASDataType]": function () {},
    "[interface ASObjectList]": function () {},
    "[interface ASNamedObjectMap]": function () {},
    "[interface ASModel : ASObject]": function () {},
    "[interface ASContentModel : ASObject]": function () {},
    "[interface ASElementDecl : ASObject]": function () {},
    "[interface ASAttributeDecl : ASObject]": function () {},
    "[interface ASEntityDecl : ASObject]": function () {},
    "[interface ASNotationDecl : ASObject]": function () {},
    "[interface ASWModel : ASModel]": function () {},
    "[interface ASWNamedObjectMap : ASNamedObjectMap]": function () {},
    "[interface ASWElementDecl : ASElementDecl]": function () {},
    "[interface ASWContentModel : ASContentModel]": function () {},
    "[interface ASWAttributeDecl : ASAttributeDecl]": function () {},
    "[interface ASWEntityDecl : ASEntityDecl]": function () {},
    "[interface ASWNotationDecl : ASNotationDecl]": function () {},

    // 1.4. Validation and Other Interfaces

    // exceptions
    "[exception ASException : ASNotationDecl]": function () {},

    // interface
    "[interface DocumentAS : Document]": function () {},
    "[interface DOMImplementationAS : DOMImplementation]": function () {},

    // 1.9. Load and Save for Abstract Schemas

    // interface
    "[interface ASDOMBuilder : ls::DOMBuilder]": function () {},
    "[interface ASDOMWriter : ls::DOMWriter]": function () {},
});
