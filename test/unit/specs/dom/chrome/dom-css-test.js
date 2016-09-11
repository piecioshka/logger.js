describe("logger/bom/chrome CSS", function () {
    it("CSSCharsetRule", function () {
        // function CSSCharsetRule() { [native code] }
        expect(logger(new CSSCharsetRule())).toEqual("[CSSCharsetRule]");
    });
    it("CSSFontFaceRule", function () {
        // function CSSFontFaceRule() { [native code] }
        expect(logger(new CSSFontFaceRule())).toEqual("[CSSFontFaceRule]");
    });
    it("CSSImportRule", function () {
        // function CSSImportRule() { [native code] }
        expect(logger(new CSSImportRule())).toEqual("[CSSImportRule]");
    });
    it("CSSMediaRule", function () {
        // function CSSMediaRule() { [native code] }
        expect(logger(new CSSMediaRule())).toEqual("[CSSMediaRule]");
    });
    it("CSSPageRule", function () {
        // function CSSPageRule() { [native code] }
        expect(logger(new CSSPageRule())).toEqual("[CSSPageRule]");
    });
    it("CSSPrimitiveValue", function () {
        // function CSSPrimitiveValue() { [native code] }
        expect(logger(new CSSPrimitiveValue())).toEqual("[CSSPrimitiveValue]");
    });
    it("CSSRule", function () {
        // function CSSRule() { [native code] }
        expect(logger(new CSSRule())).toEqual("[CSSRule]");
    });
    it("CSSRuleList", function () {
        // function CSSRuleList() { [native code] }
        expect(logger(new CSSRuleList())).toEqual("[CSSRuleList]");
    });
    it("CSSStyleDeclaration", function () {
        // function CSSStyleDeclaration() { [native code] }
        expect(logger(new CSSStyleDeclaration())).toEqual("[CSSStyleDeclaration]");
    });
    it("CSSStyleRule", function () {
        // function CSSStyleRule() { [native code] }
        expect(logger(new CSSStyleRule())).toEqual("[CSSStyleRule]");
    });
    it("CSSStyleSheet", function () {
        // function CSSStyleSheet() { [native code] }
        expect(logger(new CSSStyleSheet())).toEqual("[CSSStyleSheet]");
    });
    it("CSSValue", function () {
        // function CSSValue() { [native code] }
        expect(logger(new CSSValue())).toEqual("[CSSValue]");
    });
    it("CSSValueList", function () {
        // function CSSValueList() { [native code] }
        expect(logger(new CSSValueList())).toEqual("[CSSValueList]");
    });
});
