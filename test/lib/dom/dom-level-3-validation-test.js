/********************************************************************************/
/* DOM Validation Level 3 */
/********************************************************************************/

// http://www.w3.org/TR/2004/REC-DOM-Level-3-Val-20040127/validation.html
buster.testCase("DOM Validation Level 3", {
    // 1.2 Exceptions

    // exceptions
    "[exception ExceptionVAL]": function () {},

    // interfaces
    "[interface DocumentEditVAL : NodeEditVAL]": function () {},
    "[interface NodeEditVAL]": function () {},
    "[interface ElementEditVAL : NodeEditVAL]": function () {},
    "[interface CharacterDataEditVAL : NodeEditVAL]": function () {},
});
