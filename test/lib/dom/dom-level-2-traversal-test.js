/********************************************************************************/
/* DOM Traversal Level 2 */
/********************************************************************************/

if (typeof require !== "undefined") {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../lib/logger-core.js");
}

// http://www.w3.org/TR/2000/REC-DOM-Level-2-Traversal-Range-20001113/traversal.html
buster.testCase("logger/dom DOM Traversal Level 2", {
    // 1.2. Formal Interface Definition

    // interfaces
    "[interface NodeIterator]": function () {},
    "[interface NodeFilter]": function () {},
    "[interface TreeWalker]": function () {},
    "[interface DocumentTraversal]": function () {}
});
