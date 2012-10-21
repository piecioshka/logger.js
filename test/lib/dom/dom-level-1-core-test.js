/********************************************************************************/
/* DOM Core Level 1 */
/********************************************************************************/

if (typeof require !== "undefined") {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../lib/logger-core.js");
}

// http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core.html
buster.testCase("logger/dom DOM Core Level 1", {
    // 1.2. Fundamental Interfaces

    // exceptions
    "[exception DOMException]": function () {
        var window = new IFrame("http://localhost/");
        window.document.body.appendChild(null);
    },

    // interfaces
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

    // 1.3. Extended Interfaces

    // interfaces
    "[interface CDATASection : Text]": function () {},
    "[interface DocumentType : Node]": function () {},
    "[interface Notation : Node]": function () {},
    "[interface Entity : Node]": function () {},
    "[interface EntityReference : Node]": function () {},
    "[interface ProcessingInstruction : Node]": function () {}
});
