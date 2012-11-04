/******************************************************************************/
/* DOM Core Level 2 */
/******************************************************************************/

if (typeof require !== "undefined") {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../src/logger-core.js");
}

// http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html
buster.testCase("logger/dom DOM Core Level 2", {
    // 1.1.6. The DOMTimeStamp type

    "[valuetype DOMString]": function () { assert(false); },
    "[??? DOMTimeStamp]": function () { assert(false); }
});
