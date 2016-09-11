/******************************************************************************/
/* TEST CASE: logger.bom(): Chrome CSS */
/******************************************************************************/

xdescribe("logger/bom/chrome CSS", function () {
    it("CSSCharsetRule", function () {
        // function CSSCharsetRule() { [native code] }
        expect(logger(new CSSCharsetRule()), "[CSSCharsetRule]", "CSSCharsetRule");
    });
    it("CSSFontFaceRule", function () {
        // function CSSFontFaceRule() { [native code] }
        expect(logger(new CSSFontFaceRule()), "[CSSFontFaceRule]", "CSSFontFaceRule");
    });
    it("CSSImportRule", function () {
        // function CSSImportRule() { [native code] }
        expect(logger(new CSSImportRule()), "[CSSImportRule]", "CSSImportRule");
    });
    it("CSSMediaRule", function () {
        // function CSSMediaRule() { [native code] }
        expect(logger(new CSSMediaRule()), "[CSSMediaRule]", "CSSMediaRule");
    });
    it("CSSPageRule", function () {
        // function CSSPageRule() { [native code] }
        expect(logger(new CSSPageRule()), "[CSSPageRule]", "CSSPageRule");
    });
    it("CSSPrimitiveValue", function () {
        // function CSSPrimitiveValue() { [native code] }
        expect(logger(new CSSPrimitiveValue()), "[CSSPrimitiveValue]", "CSSPrimitiveValue");
    });
    it("CSSRule", function () {
        // function CSSRule() { [native code] }
        expect(logger(new CSSRule()), "[CSSRule]", "CSSRule");
    });
    it("CSSRuleList", function () {
        // function CSSRuleList() { [native code] }
        expect(logger(new CSSRuleList()), "[CSSRuleList]", "CSSRuleList");
    });
    it("CSSStyleDeclaration", function () {
        // function CSSStyleDeclaration() { [native code] }
        expect(logger(new CSSStyleDeclaration()), "[CSSStyleDeclaration]", "CSSStyleDeclaration");
    });
    it("CSSStyleRule", function () {
        // function CSSStyleRule() { [native code] }
        expect(logger(new CSSStyleRule()), "[CSSStyleRule]", "CSSStyleRule");
    });
    it("CSSStyleSheet", function () {
        // function CSSStyleSheet() { [native code] }
        expect(logger(new CSSStyleSheet()), "[CSSStyleSheet]", "CSSStyleSheet");
    });
    it("CSSValue", function () {
        // function CSSValue() { [native code] }
        expect(logger(new CSSValue()), "[CSSValue]", "CSSValue");
    });
    it("CSSValueList", function () {
        // function CSSValueList() { [native code] }
        expect(logger(new CSSValueList()), "[CSSValueList]", "CSSValueList");
    });
});
