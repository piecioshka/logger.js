/********************************************************************************/
/* DOM Core Level 3 */
/********************************************************************************/

if (typeof require !== "undefined") {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../lib/logger-core.js");
}

// http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core.html
buster.testCase("logger/dom DOM Core Level 3", {
    // 1.2.3 The DOMUserData Type

    "[??? DOMUserData]": function () {},

    // 1.2.4 The DOMObject Type
    "[??? DOMObject]": function () {},

    // 1.4 Fundamental Interfaces: Core Module

    // exceptions
    "[exception DOMException]": function () {},

    // interfaces
    "[interface DOMStringList]": function () {},
    "[interface NameList]": function () {},
    "[interface DOMImplementationList]": function () {},
    "[interface DOMImplementationSource]": function () {},
    "[interface DOMImplementation]": function () {},
    "[interface DocumentFragment : Node]": function () {},
    "[interface Document : Node]": function () {},
    "[interface Node]": function () {},
    "[interface NodeList]": function () {},
    "[interface NamedNodeMap]": function () {},
    "[interface CharacterData : Node]": function () {},
    "[interface Attr : Node]": function () {},
    "[interface Element : Node]": function () {},
    "[interface Text : CharacterData]": function () {},
    "[interface Comment : CharacterData]": function () {},
    "[interface TypeInfo]": function () {},
    "[interface UserDataHandler]": function () {},
    "[interface DOMError]": function () {},
    "[interface DOMErrorHandler]": function () {},
    "[interface DOMLocator]": function () {},
    "[interface DOMConfiguration]": function () {},
    "[interface CDATASection : Text]": function () {},
    "[interface DocumentType : Node]": function () {},
    "[interface Notation : Node]": function () {},
    "[interface Entity : Node]": function () {},
    "[interface EntityReference : Node]": function () {},
    "[interface ProcessingInstruction : Node]": function () {},
});
