/******************************************************************************/
/* DOM Traversal Level 3 */
/******************************************************************************/

if (typeof require !== "undefined") {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../../src/logger-core.js");
}

// http://www.w3.org/TR/2008/REC-ElementTraversal-20081222/
buster.testCase("logger/dom DOM Traversal Level 3", {
    // A. IDL Definitions

    // interfaces
    "[interface ElementTraversal]": function () {
        assert(false);
    }
});
