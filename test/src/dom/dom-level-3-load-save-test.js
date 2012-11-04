/******************************************************************************/
/* DOM Load & Save Level 3 */
/******************************************************************************/

if (typeof require !== "undefined") {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../src/logger-core.js");
}

// http://www.w3.org/TR/2004/REC-DOM-Level-3-LS-20040407/load-save.html
buster.testCase("logger/dom DOM Load & Save Level 3", {
    // 1.2.1 The LSInputStream Type

    "[??? LSInputStream]": function () { assert(false); },

    // 1.2.2 The LSOutputStream Type

    "[??? LSOutputStream]": function () { assert(false); },

    // 1.2.3 The LSReader Type

    "[??? LSReader]": function () { assert(false); },

    // 1.2.4 The LSWriter Type

    "[??? LSWriter]": function () { assert(false); },

    // 1.3 Fundamental Interfaces

    // exceptions
    "[exception LSException]": function () { assert(false); },

    // interfaces
    "[interface DOMImplementationLS]": function () { assert(false); },
    "[interface LSInput]": function () { assert(false); },
    "[interface LSResourceResolver]": function () { assert(false); },
    "[interface LSParserFilter]": function () { assert(false); },
    "[interface LSProgressEvent : events::Event]": function () { assert(false); },
    "[interface LSLoadEvent : events::Event]": function () { assert(false); },
    "[interface LSSerializer]": function () { assert(false); },
    "[interface LSOutput]": function () { assert(false); },
    "[interface LSSerializerFilter : traversal::NodeFilter]": function () { assert(false); },
});
