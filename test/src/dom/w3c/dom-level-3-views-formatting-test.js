/******************************************************************************/
/* DOM Views & Formatting Level 3 */
/******************************************************************************/

if (typeof require !== "undefined") {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../../src/logger-core.js");
}

// http://www.w3.org/TR/2004/NOTE-DOM-Level-3-Views-20040226/views-formatting.html
buster.testCase("logger/dom DOM Views & Formatting Level 3", {
    // 1.2 Formal Interface Definition for a Generic View

    // interfaces
    "[interface View]": function () {
        assert(false);
    },
    "[interface Segment]": function () {
        assert(false);
    },
    "[interface Segment : Match]": function () {
        assert(false);
    },
    "[interface Match]": function () {
        assert(false);
    },
    "[interface MatchString : Match]": function () {
        assert(false);
    },
    "[interface MatchInteger : Match]": function () {
        assert(false);
    },
    "[interface MatchBoolean : Match]": function () {
        assert(false);
    },
    "[interface MatchContent : Match]": function () {
        assert(false);
    },
    "[interface MatchSet : Match]": function () {
        assert(false);
    },
    "[interface Item]": function () {
        assert(false);
    },
    "[interface StringItem : Item]": function () {
        assert(false);
    },
    "[interface IntegerItem : Item]": function () {
        assert(false);
    },
    "[interface BooleanItem : Item]": function () {
        assert(false);
    },
    "[interface ContentItem : Item]": function () {
        assert(false);
    },
    "[interface VisualView]": function () {
        assert(false);
    },
    "[interface VisualResource]": function () {
        assert(false);
    },
    "[interface VisualFont : VisualResource]": function () {
        assert(false);
    },
    "[interface VisualSegment : VisualResource]": function () {
        assert(false);
    },
    "[interface VisualCharacter : VisualSegment]": function () {
        assert(false);
    },
    "[interface VisualCharacterRun : VisualSegment]": function () {
        assert(false);
    },
    "[interface VisualFrame : VisualSegment]": function () {
        assert(false);
    },
    "[interface VisualImage : VisualSegment]": function () {
        assert(false);
    },
    "[interface VisualFormButton : VisualSegment]": function () {
        assert(false);
    },
    "[interface VisualFormField : VisualSegment]": function () {
        assert(false);
    }
});
