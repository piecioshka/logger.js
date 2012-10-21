/********************************************************************************/
/* DOM XPath Level 3 */
/********************************************************************************/

if (typeof require !== "undefined") {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../src/logger-core.js");
}

// http://www.w3.org/TR/2004/NOTE-DOM-Level-3-XPath-20040226/xpath.html
buster.testCase("logger/dom DOM XPath Level 3", {
    // 1.4 Interfaces

    // exceptions
    "[exception XPathException]": function () {},

    // interfaces
    "[interface XPathEvaluator]": function () {},
    "[interface XPathExpression]": function () {},
    "[interface XPathNSResolver]": function () {},
    "[interface XPathResult]": function () {},
    "[interface XPathNamespace : Node]": function () {},
});
