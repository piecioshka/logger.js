/********************************************************************************/
/* DOM Views & Formatting Level 3 */
/********************************************************************************/

if (typeof require !== "undefined") {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../src/logger-core.js");
}

// http://www.w3.org/TR/2004/NOTE-DOM-Level-3-Views-20040226/views-formatting.html
buster.testCase("logger/dom DOM Views & Formatting Level 3", {
    // 1.2 Formal Interface Definition for a Generic View

    // interfaces
    "[interface View]": function () {},
    "[interface Segment]": function () {},
    "[interface Segment : Match]": function () {},
    "[interface Match]": function () {},
    "[interface MatchString : Match]": function () {},
    "[interface MatchInteger : Match]": function () {},
    "[interface MatchBoolean : Match]": function () {},
    "[interface MatchContent : Match]": function () {},
    "[interface MatchSet : Match]": function () {},
    "[interface Item]": function () {},
    "[interface StringItem : Item]": function () {},
    "[interface IntegerItem : Item]": function () {},
    "[interface BooleanItem : Item]": function () {},
    "[interface ContentItem : Item]": function () {},
    "[interface VisualView]": function () {},
    "[interface VisualResource]": function () {},
    "[interface VisualFont : VisualResource]": function () {},
    "[interface VisualSegment : VisualResource]": function () {},
    "[interface VisualCharacter : VisualSegment]": function () {},
    "[interface VisualCharacterRun : VisualSegment]": function () {},
    "[interface VisualFrame : VisualSegment]": function () {},
    "[interface VisualImage : VisualSegment]": function () {},
    "[interface VisualFormButton : VisualSegment]": function () {},
    "[interface VisualFormField : VisualSegment]": function () {},
});
