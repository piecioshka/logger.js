/******************************************************************************/
/* DOM CSS Level 2 */
/******************************************************************************/

if (require !== undefined) {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../../src/logger-core.js");
}

// http://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/css.html
buster.testCase("logger/dom DOM Events Level 2", {
    // 2.2. CSS Fundamental Interfaces

    // interfaces
    "[interface CSSStyleSheet : stylesheets::StyleSheet]": function () {
        assert(false);
    },
    "[interface CSSRuleList]": function () {
        assert(false);
    },
    "[interface CSSRule]": function () {
        assert(false);
    },
    "[interface CSSStyleRule : CSSRule]": function () {
        assert(false);
    },
    "[interface CSSMediaRule : CSSRule]": function () {
        assert(false);
    },
    "[interface CSSFontFaceRule : CSSRule]": function () {
        assert(false);
    },
    "[interface CSSPageRule : CSSRule]": function () {
        assert(false);
    },
    "[interface CSSImportRule : CSSRule]": function () {
        assert(false);
    },
    "[interface CSSCharsetRule : CSSRule]": function () {
        assert(false);
    },
    "[interface CSSUnknownRule : CSSRule]": function () {
        assert(false);
    },
    "[interface CSSStyleDeclaration]": function () {
        assert(false);
    },
    "[interface CSSValue]": function () {
        assert(false);
    },
    "[interface CSSPrimitiveValue : CSSValue]": function () {
        assert(false);
    },
    "[interface CSSValueList : CSSValue]": function () {
        assert(false);
    },
    "[interface RGBColor]": function () {
        assert(false);
    },
    "[interface Rect]": function () {
        assert(false);
    },
    "[interface Counter]": function () {
        assert(false);
    },

    // 2.2.1. Override and computed style sheet

    // interfaces
    "[interface ViewCSS : views::AbstractView]": function () {
        assert(false);
    },
    "[interface DocumentCSS : stylesheets::DocumentStyle]": function () {
        assert(false);
    },

    // 2.2.2. Style sheet creation

    // interfaces
    "[interface DOMImplementationCSS : DOMImplementation]": function () {
        assert(false);
    },

    // 2.2.3. Element with CSS inline style

    // interfaces
    "[interface ElementCSSInlineStyle]": function () {
        assert(false);
    },

    // 2.3. CSS2 Extended Interface

    // interfaces
    "[interface CSS2Properties]": function () {
        assert(false);
    }
});


