/******************************************************************************/
/* DOM CSS Level 2 */
/******************************************************************************/

if (typeof require !== "undefined") {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../src/logger-core.js");
}

// http://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/css.html
buster.testCase("logger/dom DOM Events Level 2", {
    // 2.2. CSS Fundamental Interfaces

    // interfaces
    "[interface CSSStyleSheet : stylesheets::StyleSheet]": function () {},
    "[interface CSSRuleList]": function () {},
    "[interface CSSRule]": function () {},
    "[interface CSSStyleRule : CSSRule]": function () {},
    "[interface CSSMediaRule : CSSRule]": function () {},
    "[interface CSSFontFaceRule : CSSRule]": function () {},
    "[interface CSSPageRule : CSSRule]": function () {},
    "[interface CSSImportRule : CSSRule]": function () {},
    "[interface CSSCharsetRule : CSSRule]": function () {},
    "[interface CSSUnknownRule : CSSRule]": function () {},
    "[interface CSSStyleDeclaration]": function () {},
    "[interface CSSValue]": function () {},
    "[interface CSSPrimitiveValue : CSSValue]": function () {},
    "[interface CSSValueList : CSSValue]": function () {},
    "[interface RGBColor]": function () {},
    "[interface Rect]": function () {},
    "[interface Counter]": function () {},

    // 2.2.1. Override and computed style sheet

    // interfaces
    "[interface ViewCSS : views::AbstractView]": function () {},
    "[interface DocumentCSS : stylesheets::DocumentStyle]": function () {},

    // 2.2.2. Style sheet creation

    // interfaces
    "[interface DOMImplementationCSS : DOMImplementation]": function () {},

    // 2.2.3. Element with CSS inline style

    // interfaces
    "[interface ElementCSSInlineStyle]": function () {},

    // 2.3. CSS2 Extended Interface

    // interfaces
    "[interface CSS2Properties]": function () {}
});


