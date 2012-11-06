/******************************************************************************/
/* DOM Range Level 2 */
/******************************************************************************/

if (typeof require !== "undefined") {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../src/logger-core.js");
}

// http://www.w3.org/TR/2000/REC-DOM-Level-2-Traversal-Range-20001113/ranges.html
buster.testCase("logger/dom DOM Range Level 2", {
    // 2.13. Formal Description of the Range Interface

    // interfaces
    "[interface Range]": function () {
        assert(false);
    },
    "[interface DocumentRange]": function () {
        assert(false);
    },
    "[interface RangeException]": function () {
        assert(false);
    }
});
