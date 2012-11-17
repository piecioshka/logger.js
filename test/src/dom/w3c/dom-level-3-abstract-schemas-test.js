/******************************************************************************/
/* DOM Abstract Schema Level 3 */
/******************************************************************************/

if (typeof require !== "undefined") {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../../src/logger-core.js");
}

// http://www.w3.org/TR/2002/NOTE-DOM-Level-3-AS-20020725/abstract-schemas.html
buster.testCase("logger/dom DOM Abstract Schema Level 3", {
    // 1.3.1. Basic Abstract Schema Interfaces

    // interfaces
    "[interface ASConstants]": function () {
        assert(false);
    },
    "[interface ASObject]": function () {
        assert(false);
    },
    "[interface ASDataType]": function () {
        assert(false);
    },
    "[interface ASObjectList]": function () {
        assert(false);
    },
    "[interface ASNamedObjectMap]": function () {
        assert(false);
    },
    "[interface ASModel : ASObject]": function () {
        assert(false);
    },
    "[interface ASContentModel : ASObject]": function () {
        assert(false);
    },
    "[interface ASElementDecl : ASObject]": function () {
        assert(false);
    },
    "[interface ASAttributeDecl : ASObject]": function () {
        assert(false);
    },
    "[interface ASEntityDecl : ASObject]": function () {
        assert(false);
    },
    "[interface ASNotationDecl : ASObject]": function () {
        assert(false);
    },
    "[interface ASWModel : ASModel]": function () {
        assert(false);
    },
    "[interface ASWNamedObjectMap : ASNamedObjectMap]": function () {
        assert(false);
    },
    "[interface ASWElementDecl : ASElementDecl]": function () {
        assert(false);
    },
    "[interface ASWContentModel : ASContentModel]": function () {
        assert(false);
    },
    "[interface ASWAttributeDecl : ASAttributeDecl]": function () {
        assert(false);
    },
    "[interface ASWEntityDecl : ASEntityDecl]": function () {
        assert(false);
    },
    "[interface ASWNotationDecl : ASNotationDecl]": function () {
        assert(false);
    },

    // 1.4. Validation and Other Interfaces

    // exceptions
    "[exception ASException : ASNotationDecl]": function () {
        assert(false);
    },

    // interface
    "[interface DocumentAS : Document]": function () {
        assert(false);
    },
    "[interface DOMImplementationAS : DOMImplementation]": function () {
        assert(false);
    },

    // 1.9. Load and Save for Abstract Schemas

    // interface
    "[interface ASDOMBuilder : ls::DOMBuilder]": function () {
        assert(false);
    },
    "[interface ASDOMWriter : ls::DOMWriter]": function () {
        assert(false);
    }
});
