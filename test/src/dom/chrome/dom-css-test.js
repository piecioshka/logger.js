/******************************************************************************/
/* TEST CASE: logger.bom(): Chrome CSS */
/******************************************************************************/

if (require !== undefined) {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../../src/logger-core.js");
}

buster.testCase("logger/bom/chrome CSS", {
    "CSSCharsetRule": function () {
        // function CSSCharsetRule() { [native code] }
        assert.equals(logger(new CSSCharsetRule()), "[CSSCharsetRule]", "CSSCharsetRule");
    },
    "CSSFontFaceRule": function () {
        // function CSSFontFaceRule() { [native code] }
        assert.equals(logger(new CSSFontFaceRule()), "[CSSFontFaceRule]", "CSSFontFaceRule");
    },
    "CSSImportRule": function () {
        // function CSSImportRule() { [native code] }
        assert.equals(logger(new CSSImportRule()), "[CSSImportRule]", "CSSImportRule");
    },
    "CSSMediaRule": function () {
        // function CSSMediaRule() { [native code] }
        assert.equals(logger(new CSSMediaRule()), "[CSSMediaRule]", "CSSMediaRule");
    },
    "CSSPageRule": function () {
        // function CSSPageRule() { [native code] }
        assert.equals(logger(new CSSPageRule()), "[CSSPageRule]", "CSSPageRule");
    },
    "CSSPrimitiveValue": function () {
        // function CSSPrimitiveValue() { [native code] }
        assert.equals(logger(new CSSPrimitiveValue()), "[CSSPrimitiveValue]", "CSSPrimitiveValue");
    },
    "CSSRule": function () {
        // function CSSRule() { [native code] }
        assert.equals(logger(new CSSRule()), "[CSSRule]", "CSSRule");
    },
    "CSSRuleList": function () {
        // function CSSRuleList() { [native code] }
        assert.equals(logger(new CSSRuleList()), "[CSSRuleList]", "CSSRuleList");
    },
    "CSSStyleDeclaration": function () {
        // function CSSStyleDeclaration() { [native code] }
        assert.equals(logger(new CSSStyleDeclaration()), "[CSSStyleDeclaration]", "CSSStyleDeclaration");
    },
    "CSSStyleRule": function () {
        // function CSSStyleRule() { [native code] }
        assert.equals(logger(new CSSStyleRule()), "[CSSStyleRule]", "CSSStyleRule");
    },
    "CSSStyleSheet": function () {
        // function CSSStyleSheet() { [native code] }
        assert.equals(logger(new CSSStyleSheet()), "[CSSStyleSheet]", "CSSStyleSheet");
    },
    "CSSValue": function () {
        // function CSSValue() { [native code] }
        assert.equals(logger(new CSSValue()), "[CSSValue]", "CSSValue");
    },
    "CSSValueList": function () {
        // function CSSValueList() { [native code] }
        assert.equals(logger(new CSSValueList()), "[CSSValueList]", "CSSValueList");
    }
});
