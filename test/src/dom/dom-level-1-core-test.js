/******************************************************************************/
/* DOM Core Level 1 */
/******************************************************************************/

if (typeof require !== "undefined") {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../src/logger-core.js");
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
    "[interface DOMImplementation]": function () { assert(false); },
    "[interface DocumentFragment : Node]": function () { assert(false); },
    "[interface Document : Node]": function () { assert(false); },
    "[interface Node]": function () { assert(false); },
    "[interface NodeList]": function () { assert(false); },
    "[interface NamedNodeMap]": function () { assert(false); },
    "[interface CharacterData : Node]": function () { assert(false); },
    "[interface Attr : Node]": function () { assert(false); },
    "[interface Element : Node]": function () { assert(false); },
    "[interface Text : CharacterData]": function () { assert(false); },
    "[interface Comment : CharacterData]": function () { assert(false); },

    // 1.3. Extended Interfaces

    // interfaces
    "[interface CDATASection : Text]": function () { assert(false); },
    "[interface DocumentType : Node]": function () { assert(false); },
    "[interface Notation : Node]": function () { assert(false); },
    "[interface Entity : Node]": function () { assert(false); },
    "[interface EntityReference : Node]": function () { assert(false); },
    "[interface ProcessingInstruction : Node]": function () { assert(false); }
});
