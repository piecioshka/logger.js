/******************************************************************************/
/* DOM Traversal Level 2 */
/******************************************************************************/

if (typeof require !== "undefined") {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../src/logger-core.js");
}

// http://www.w3.org/TR/2000/REC-DOM-Level-2-Traversal-Range-20001113/traversal.html
buster.testCase("logger/dom DOM Traversal Level 2", {
    // 1.2. Formal Interface Definition

    // interfaces
    "[interface NodeIterator]": function () { assert(false); },
    "[interface NodeFilter]": function () { assert(false); },
    "[interface TreeWalker]": function () { assert(false); },
    "[interface DocumentTraversal]": function () { assert(false); }
});
