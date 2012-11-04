/******************************************************************************/
/* DOM HTML Level 2 */
/******************************************************************************/

if (typeof require !== "undefined") {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../src/logger-core.js");
}

// http://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html
buster.testCase("logger/dom DOM HTML Level 2", {
    // 1.4. Miscellaneous Object Definitions

    // interfaces
    "[interface HTMLCollection]": function () { assert(false); },
    "[interface HTMLOptionsCollection]": function () { assert(false); },

    // 1.5. Objects related to HTML documents

    // interfaces
    "[interface HTMLDocument : Document]": function () { assert(false); },

    // 1.6.4. The HTMLElement interface

    // interfaces
    "[interface HTMLElement : Element]": function () { assert(false); },

    // 1.6.5. Object definitions

    // interfaces
    "[interface HTMLHtmlElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLHeadElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLLinkElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLTitleElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLMetaElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLBaseElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLIsIndexElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLStyleElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLBodyElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLFormElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLSelectElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLOptGroupElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLOptionElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLInputElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLTextAreaElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLButtonElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLLabelElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLFieldSetElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLLegendElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLUListElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLOListElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLDListElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLDirectoryElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLMenuElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLLIElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLDivElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLParagraphElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLHeadingElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLQuoteElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLPreElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLBRElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLBaseFontElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLFontElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLHRElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLModElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLAnchorElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLImageElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLObjectElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLParamElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLAppletElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLMapElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLAreaElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLScriptElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLTableElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLTableCaptionElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLTableColElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLTableSectionElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLTableRowElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLTableCellElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLFrameSetElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLFrameElement : HTMLElement]": function () { assert(false); },
    "[interface HTMLIFrameElement : HTMLElement]": function () { assert(false); },
});
