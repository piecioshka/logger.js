/********************************************************************************/
/* DOM Validation Level 3 */
/********************************************************************************/

if (typeof require !== "undefined") {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../lib/logger-core.js");
}

// http://www.w3.org/TR/2004/REC-DOM-Level-3-Val-20040127/validation.html
buster.testCase("logger/dom DOM Validation Level 3", {
    // 1.2 Exceptions

    // exceptions
    "[exception ExceptionVAL]": function () {},

    // interfaces
    "[interface DocumentEditVAL : NodeEditVAL]": function () {},
    "[interface NodeEditVAL]": function () {},
    "[interface ElementEditVAL : NodeEditVAL]": function () {},
    "[interface CharacterDataEditVAL : NodeEditVAL]": function () {},
});
