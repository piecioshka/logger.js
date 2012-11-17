/******************************************************************************/
/* DOM Core Level 3 */
/******************************************************************************/

if (typeof require !== "undefined") {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../../src/logger-core.js");
}

// http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core.html
buster.testCase("logger/dom DOM Core Level 3", {
    // 1.2.3 The DOMUserData Type

    "[??? DOMUserData]": function () {
        assert(false);
    },

    // 1.2.4 The DOMObject Type
    "[??? DOMObject]": function () {
        assert(false);
    },

    // 1.4 Fundamental Interfaces: Core Module

    // exceptions
    "[exception DOMException]": function () {
        assert(false);
    },

    // interfaces
    "[interface DOMStringList]": function () {
        assert(false);
    },
    "[interface NameList]": function () {
        assert(false);
    },
    "[interface DOMImplementationList]": function () {
        assert(false);
    },
    "[interface DOMImplementationSource]": function () {
        assert(false);
    },
    "[interface DOMImplementation]": function () {
        assert(false);
    },
    "[interface DocumentFragment : Node]": function () {
        assert(false);
    },
    "[interface Document : Node]": function () {
        assert(false);
    },
    "[interface Node]": function () {
        assert(false);
    },
    "[interface NodeList]": function () {
        assert(false);
    },
    "[interface NamedNodeMap]": function () {
        assert(false);
    },
    "[interface CharacterData : Node]": function () {
        assert(false);
    },
    "[interface Attr : Node]": function () {
        assert(false);
    },
    "[interface Element : Node]": function () {
        assert(false);
    },
    "[interface Text : CharacterData]": function () {
        assert(false);
    },
    "[interface Comment : CharacterData]": function () {
        assert(false);
    },
    "[interface TypeInfo]": function () {
        assert(false);
    },
    "[interface UserDataHandler]": function () {
        assert(false);
    },
    "[interface DOMError]": function () {
        assert(false);
    },
    "[interface DOMErrorHandler]": function () {
        assert(false);
    },
    "[interface DOMLocator]": function () {
        assert(false);
    },
    "[interface DOMConfiguration]": function () {
        assert(false);
    },
    "[interface CDATASection : Text]": function () {
        assert(false);
    },
    "[interface DocumentType : Node]": function () {
        assert(false);
    },
    "[interface Notation : Node]": function () {
        assert(false);
    },
    "[interface Entity : Node]": function () {
        assert(false);
    },
    "[interface EntityReference : Node]": function () {
        assert(false);
    },
    "[interface ProcessingInstruction : Node]": function () {
        assert(false);
    }
});
