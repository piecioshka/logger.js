/********************************************************************************/
/* DOM HTML Level 2 */
/********************************************************************************/

if (typeof require !== "undefined") {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../lib/logger-core.js");
}

// http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
buster.testCase("logger/dom DOM HTML Level 2", {
    // 1.4. Miscellaneous Object Definitions

    // interfaces
    "[interface HTMLCollection]": function () {},
    "[interface HTMLOptionsCollection]": function () {},

    // 1.5. Objects related to HTML documents

    // interfaces
    "[interface HTMLDocument : Document]": function () {},

    // 1.6.4. The HTMLElement interface

    // interfaces
    "[interface HTMLElement : Element]": function () {},

    // 1.6.5. Object definitions

    // interfaces
    "[interface HTMLHtmlElement : HTMLElement]": function () {},
    "[interface HTMLHeadElement : HTMLElement]": function () {},
    "[interface HTMLLinkElement : HTMLElement]": function () {},
    "[interface HTMLTitleElement : HTMLElement]": function () {},
    "[interface HTMLMetaElement : HTMLElement]": function () {},
    "[interface HTMLBaseElement : HTMLElement]": function () {},
    "[interface HTMLIsIndexElement : HTMLElement]": function () {},
    "[interface HTMLStyleElement : HTMLElement]": function () {},
    "[interface HTMLBodyElement : HTMLElement]": function () {},
    "[interface HTMLFormElement : HTMLElement]": function () {},
    "[interface HTMLSelectElement : HTMLElement]": function () {},
    "[interface HTMLOptGroupElement : HTMLElement]": function () {},
    "[interface HTMLOptionElement : HTMLElement]": function () {},
    "[interface HTMLInputElement : HTMLElement]": function () {},
    "[interface HTMLTextAreaElement : HTMLElement]": function () {},
    "[interface HTMLButtonElement : HTMLElement]": function () {},
    "[interface HTMLLabelElement : HTMLElement]": function () {},
    "[interface HTMLFieldSetElement : HTMLElement]": function () {},
    "[interface HTMLLegendElement : HTMLElement]": function () {},
    "[interface HTMLUListElement : HTMLElement]": function () {},
    "[interface HTMLOListElement : HTMLElement]": function () {},
    "[interface HTMLDListElement : HTMLElement]": function () {},
    "[interface HTMLDirectoryElement : HTMLElement]": function () {},
    "[interface HTMLMenuElement : HTMLElement]": function () {},
    "[interface HTMLLIElement : HTMLElement]": function () {},
    "[interface HTMLDivElement : HTMLElement]": function () {},
    "[interface HTMLParagraphElement : HTMLElement]": function () {},
    "[interface HTMLHeadingElement : HTMLElement]": function () {},
    "[interface HTMLQuoteElement : HTMLElement]": function () {},
    "[interface HTMLPreElement : HTMLElement]": function () {},
    "[interface HTMLBRElement : HTMLElement]": function () {},
    "[interface HTMLBaseFontElement : HTMLElement]": function () {},
    "[interface HTMLFontElement : HTMLElement]": function () {},
    "[interface HTMLHRElement : HTMLElement]": function () {},
    "[interface HTMLModElement : HTMLElement]": function () {},
    "[interface HTMLAnchorElement : HTMLElement]": function () {},
    "[interface HTMLImageElement : HTMLElement]": function () {},
    "[interface HTMLObjectElement : HTMLElement]": function () {},
    "[interface HTMLParamElement : HTMLElement]": function () {},
    "[interface HTMLAppletElement : HTMLElement]": function () {},
    "[interface HTMLMapElement : HTMLElement]": function () {},
    "[interface HTMLAreaElement : HTMLElement]": function () {},
    "[interface HTMLScriptElement : HTMLElement]": function () {},
    "[interface HTMLTableElement : HTMLElement]": function () {},
    "[interface HTMLTableCaptionElement : HTMLElement]": function () {},
    "[interface HTMLTableColElement : HTMLElement]": function () {},
    "[interface HTMLTableSectionElement : HTMLElement]": function () {},
    "[interface HTMLTableRowElement : HTMLElement]": function () {},
    "[interface HTMLTableCellElement : HTMLElement]": function () {},
    "[interface HTMLFrameSetElement : HTMLElement]": function () {},
    "[interface HTMLFrameElement : HTMLElement]": function () {},
    "[interface HTMLIFrameElement : HTMLElement]": function () {},
});
