/********************************************************************************/
/* DOM XPath Level 3 */
/********************************************************************************/

// http://www.w3.org/TR/2004/NOTE-DOM-Level-3-XPath-20040226/xpath.html
buster.testCase("DOM XPath Level 3", {
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
