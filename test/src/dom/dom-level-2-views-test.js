/******************************************************************************/
/* DOM Views Level 2 */
/******************************************************************************/

if (typeof require !== "undefined") {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../src/logger-core.js");
}

// http://www.w3.org/TR/2000/REC-DOM-Level-2-Views-20001113/views.html
buster.testCase("logger/dom DOM Views Level 2", {
    // 1.2. Interfaces

    // interfaces
    "[interface AbstractView]": function () { assert(false); },
    "[interface DocumentView]": function () { assert(false); }
});
