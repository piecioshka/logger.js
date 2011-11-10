/********************************************************************************/
/* DOM Load & Save Level 3 */
/********************************************************************************/

// http://www.w3.org/TR/2004/REC-DOM-Level-3-LS-20040407/load-save.html
buster.testCase("DOM Load & Save Level 3", {
    // 1.2.1 The LSInputStream Type

    "[??? LSInputStream]": function () {},

    // 1.2.2 The LSOutputStream Type

    "[??? LSOutputStream]": function () {},

    // 1.2.3 The LSReader Type

    "[??? LSReader]": function () {},

    // 1.2.4 The LSWriter Type

    "[??? LSWriter]": function () {},

    // 1.3 Fundamental Interfaces

    // exceptions
    "[exception LSException]": function () {},

    // interfaces
    "[interface DOMImplementationLS]": function () {},
    "[interface LSInput]": function () {},
    "[interface LSResourceResolver]": function () {},
    "[interface LSParserFilter]": function () {},
    "[interface LSProgressEvent : events::Event]": function () {},
    "[interface LSLoadEvent : events::Event]": function () {},
    "[interface LSSerializer]": function () {},
    "[interface LSOutput]": function () {},
    "[interface LSSerializerFilter : traversal::NodeFilter]": function () {},
});
