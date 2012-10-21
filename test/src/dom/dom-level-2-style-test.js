/********************************************************************************/
/* DOM Style Level 2 */
/********************************************************************************/

if (typeof require !== "undefined") {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../src/logger-core.js");
}

// http://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/stylesheets.html
buster.testCase("logger/dom DOM Events Level 2", {
    // 1.2. Style Sheet Interfaces

    // interfaces
    "[interface StyleSheet]": function () {},
    "[interface StyleSheetList]": function () {},
    "[interface MediaList]": function () {},

    // 1.3. Document Extensions

    // interfaces
    "[interface LinkStyle]": function () {},
    "[interface DocumentStyle]": function () {}
});
