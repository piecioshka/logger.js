/******************************************************************************/
/* TEST CASE: logger.bom(): Chrome DOM */
/******************************************************************************/

if (typeof require !== "undefined") {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../src/logger-core.js");
}

buster.testCase("logger/bom/chrome DOM", {
    "Attr": function () {
        // assert.equals(logger(new Attr()), "[Attr]", "Attr");
    },
    "CDATASection": function () {
        // function CDATASection() { [native code] }
        // assert.equals(logger(new CDATASection()), "[CDATASection]", "CDATASection");
    },
    "Comment": function () {
        // function Comment() { [native code] }
        // assert.equals(logger(new Comment()), "[Comment]", "Comment");
    },
    "DOMException": function () {
        // function DOMException() { [native code] }
        // assert.equals(logger(new DOMException()), "[DOMException]", "DOMException");
    },
    "DOMImplementation": function () {
        // function DOMImplementation() { [native code] }
        // assert.equals(logger(new DOMImplementation()), "[DOMImplementation]", "DOMImplementation");
    },
    "DOMParser": function () {
        // function DOMParser() { [native code] }
        // assert.equals(logger(new DOMParser()), "[DOMParser]", "DOMParser");
    },
    "DOMSettableTokenList": function () {
        // function DOMSettableTokenList() { [native code] }
        // assert.equals(logger(new DOMSettableTokenList()), "[DOMSettableTokenList]", "DOMSettableTokenList");
    },
    "DOMStringList": function () {
        // function DOMStringList() { [native code] }
        // assert.equals(logger(new DOMStringList()), "[DOMStringList]", "DOMStringList");
    },
    "DOMStringMap": function () {
        // function DOMStringMap() { [native code] }
        // assert.equals(logger(new DOMStringMap()), "[DOMStringMap]", "DOMStringMap");
    },
    "DOMTokenList": function () {
        // function DOMTokenList() { [native code] }
        // assert.equals(logger(new DOMTokenList()), "[DOMTokenList]", "DOMTokenList");
    },
    "Document": function () {
        // function Document() { [native code] }
        // assert.equals(logger(new Document()), "[Document]", "Document");
    },
    "DocumentFragment": function () {
        // function DocumentFragment() { [native code] }
        // assert.equals(logger(new DocumentFragment()), "[DocumentFragment]", "DocumentFragment");
    },
    "DocumentType": function () {
        // function DocumentType() { [native code] }
        // assert.equals(logger(new DocumentType()), "[DocumentType]", "DocumentType");
    },
    "Element": function () {
        // function Element() { [native code] }
        // assert.equals(logger(new Element()), "[Element]", "Element");
    },
    "Entity": function () {
        // function Entity() { [native code] }
        // assert.equals(logger(new Entity()), "[Entity]", "Entity");
    },
    "EntityReference": function () {
        // function EntityReference() { [native code] }
        // assert.equals(logger(new EntityReference()), "[EntityReference]", "EntityReference");
    },
    "HTMLAllCollection": function () {
        // function HTMLAllCollection() { [native code] }
        // assert.equals(logger(new HTMLAllCollection()), "[HTMLAllCollection]", "HTMLAllCollection");
    },
    "HTMLAnchorElement": function () {
        // function HTMLAnchorElement() { [native code] }
        // assert.equals(logger(new HTMLAnchorElement()), "[HTMLAnchorElement]", "HTMLAnchorElement");
    },
    "HTMLAppletElement": function () {
        // function HTMLAppletElement() { [native code] }
        // assert.equals(logger(new HTMLAppletElement()), "[HTMLAppletElement]", "HTMLAppletElement");
    },
    "HTMLAreaElement": function () {
        // function HTMLAreaElement() { [native code] }
        // assert.equals(logger(new HTMLAreaElement()), "[HTMLAreaElement]", "HTMLAreaElement");
    },
    "HTMLAudioElement": function () {
        // function HTMLAudioElement() { [native code] }
        // assert.equals(logger(new HTMLAudioElement()), "[HTMLAudioElement]", "HTMLAudioElement");
    },
    "HTMLBRElement": function () {
        // function HTMLBRElement() { [native code] }
        // assert.equals(logger(new HTMLBRElement()), "[HTMLBRElement]", "HTMLBRElement");
    },
    "HTMLBaseElement": function () {
        // function HTMLBaseElement() { [native code] }
        // assert.equals(logger(new HTMLBaseElement()), "[HTMLBaseElement]", "HTMLBaseElement");
    },
    "HTMLBaseFontElement": function () {
        // function HTMLBaseFontElement() { [native code] }
        // assert.equals(logger(new HTMLBaseFontElement()), "[HTMLBaseFontElement]", "HTMLBaseFontElement");
    },
    "HTMLBodyElement": function () {
        // function HTMLBodyElement() { [native code] }
        // assert.equals(logger(new HTMLBodyElement()), "[HTMLBodyElement]", "HTMLBodyElement");
    },
    "HTMLButtonElement": function () {
        // function HTMLButtonElement() { [native code] }
        // assert.equals(logger(new HTMLButtonElement()), "[HTMLButtonElement]", "HTMLButtonElement");
    },
    "HTMLCanvasElement": function () {
        // function HTMLCanvasElement() { [native code] }
        // assert.equals(logger(new HTMLCanvasElement()), "[HTMLCanvasElement]", "HTMLCanvasElement");
    },
    "HTMLCollection": function () {
        // function HTMLCollection() { [native code] }
        // assert.equals(logger(new HTMLCollection()), "[HTMLCollection]", "HTMLCollection");
    },
    "HTMLDListElement": function () {
        // function HTMLDListElement() { [native code] }
        // assert.equals(logger(new HTMLDListElement()), "[HTMLDListElement]", "HTMLDListElement");
    },
    "HTMLDataListElement": function () {
        // function HTMLDataListElement() { [native code] }
        // assert.equals(logger(new HTMLDataListElement()), "[HTMLDataListElement]", "HTMLDataListElement");
    },
    "HTMLDirectoryElement": function () {
        // function HTMLDirectoryElement() { [native code] }
        // assert.equals(logger(new HTMLDirectoryElement()), "[HTMLDirectoryElement]", "HTMLDirectoryElement");
    },
    "HTMLDivElement": function () {
        // function HTMLDivElement() { [native code] }
        // assert.equals(logger(new HTMLDivElement()), "[HTMLDivElement]", "HTMLDivElement");
    },
    "HTMLDocument": function () {
        // function HTMLDocument() { [native code] }
        // assert.equals(logger(new HTMLDocument()), "[HTMLDocument]", "HTMLDocument");
    },
    "HTMLElement": function () {
        // function HTMLElement() { [native code] }
        // assert.equals(logger(new HTMLElement()), "[HTMLElement]", "HTMLElement");
    },
    "HTMLEmbedElement": function () {
        // function HTMLEmbedElement() { [native code] }
        // assert.equals(logger(new HTMLEmbedElement()), "[HTMLEmbedElement]", "HTMLEmbedElement");
    },
    "HTMLFieldSetElement": function () {
        // function HTMLFieldSetElement() { [native code] }
        // assert.equals(logger(new HTMLFieldSetElement()), "[HTMLFieldSetElement]", "HTMLFieldSetElement");
    },
    "HTMLFontElement": function () {
        // function HTMLFontElement() { [native code] }
        // assert.equals(logger(new HTMLFontElement()), "[HTMLFontElement]", "HTMLFontElement");
    },
    "HTMLFormElement": function () {
        // function HTMLFormElement() { [native code] }
        // assert.equals(logger(new HTMLFormElement()), "[HTMLFormElement]", "HTMLFormElement");
    },
    "HTMLFrameElement": function () {
        // function HTMLFrameElement() { [native code] }
        // assert.equals(logger(new HTMLFrameElement()), "[HTMLFrameElement]", "HTMLFrameElement");
    },
    "HTMLFrameSetElement": function () {
        // function HTMLFrameSetElement() { [native code] }
        // assert.equals(logger(new HTMLFrameSetElement()), "[HTMLFrameSetElement]", "HTMLFrameSetElement");
    },
    "HTMLHRElement": function () {
        // function HTMLHRElement() { [native code] }
        // assert.equals(logger(new HTMLHRElement()), "[HTMLHRElement]", "HTMLHRElement");
    },
    "HTMLHeadElement": function () {
        // function HTMLHeadElement() { [native code] }
        // assert.equals(logger(new HTMLHeadElement()), "[HTMLHeadElement]", "HTMLHeadElement");
    },
    "HTMLHeadingElement": function () {
        // function HTMLHeadingElement() { [native code] }
        // assert.equals(logger(new HTMLHeadingElement()), "[HTMLHeadingElement]", "HTMLHeadingElement");
    },
    "HTMLHtmlElement": function () {
        // function HTMLHtmlElement() { [native code] }
        // assert.equals(logger(new HTMLHtmlElement()), "[HTMLHtmlElement]", "HTMLHtmlElement");
    },
    "HTMLIFrameElement": function () {
        // function HTMLIFrameElement() { [native code] }
        // assert.equals(logger(new HTMLIFrameElement()), "[HTMLIFrameElement]", "HTMLIFrameElement");
    },
    "HTMLImageElement": function () {
        // function HTMLImageElement() { [native code] }
        // assert.equals(logger(new HTMLImageElement()), "[HTMLImageElement]", "HTMLImageElement");
    },
    "HTMLInputElement": function () {
        // function HTMLInputElement() { [native code] }
        // assert.equals(logger(new HTMLInputElement()), "[HTMLInputElement]", "HTMLInputElement");
    },
    "HTMLKeygenElement": function () {
        // function HTMLKeygenElement() { [native code] }
        // assert.equals(logger(new HTMLKeygenElement()), "[HTMLKeygenElement]", "HTMLKeygenElement");
    },
    "HTMLLIElement": function () {
        // function HTMLLIElement() { [native code] }
        // assert.equals(logger(new HTMLLIElement()), "[HTMLLIElement]", "HTMLLIElement");
    },
    "HTMLLabelElement": function () {
        // function HTMLLabelElement() { [native code] }
        // assert.equals(logger(new HTMLLabelElement()), "[HTMLLabelElement]", "HTMLLabelElement");
    },
    "HTMLLegendElement": function () {
        // function HTMLLegendElement() { [native code] }
        // assert.equals(logger(new HTMLLegendElement()), "[HTMLLegendElement]", "HTMLLegendElement");
    },
    "HTMLLinkElement": function () {
        // function HTMLLinkElement() { [native code] }
        // assert.equals(logger(new HTMLLinkElement()), "[HTMLLinkElement]", "HTMLLinkElement");
    },
    "HTMLMapElement": function () {
        // function HTMLMapElement() { [native code] }
        // assert.equals(logger(new HTMLMapElement()), "[HTMLMapElement]", "HTMLMapElement");
    },
    "HTMLMarqueeElement": function () {
        // function HTMLMarqueeElement() { [native code] }
        // assert.equals(logger(new HTMLMarqueeElement()), "[HTMLMarqueeElement]", "HTMLMarqueeElement");
    },
    "HTMLMediaElement": function () {
        // function HTMLMediaElement() { [native code] }
        // assert.equals(logger(new HTMLMediaElement()), "[HTMLMediaElement]", "HTMLMediaElement");
    },
    "HTMLMenuElement": function () {
        // function HTMLMenuElement() { [native code] }
        // assert.equals(logger(new HTMLMenuElement()), "[HTMLMenuElement]", "HTMLMenuElement");
    },
    "HTMLMetaElement": function () {
        // function HTMLMetaElement() { [native code] }
        // assert.equals(logger(new HTMLMetaElement()), "[HTMLMetaElement]", "HTMLMetaElement");
    },
    "HTMLMeterElement": function () {
        // function HTMLMeterElement() { [native code] }
        // assert.equals(logger(new HTMLMeterElement()), "[HTMLMeterElement]", "HTMLMeterElement");
    },
    "HTMLModElement": function () {
        // function HTMLModElement() { [native code] }
        // assert.equals(logger(new HTMLModElement()), "[HTMLModElement]", "HTMLModElement");
    },
    "HTMLOListElement": function () {
        // function HTMLOListElement() { [native code] }
        // assert.equals(logger(new HTMLOListElement()), "[HTMLOListElement]", "HTMLOListElement");
    },
    "HTMLObjectElement": function () {
        // function HTMLObjectElement() { [native code] }
        // assert.equals(logger(new HTMLObjectElement()), "[HTMLObjectElement]", "HTMLObjectElement");
    },
    "HTMLOptGroupElement": function () {
        // function HTMLOptGroupElement() { [native code] }
        // assert.equals(logger(new HTMLOptGroupElement()), "[HTMLOptGroupElement]", "HTMLOptGroupElement");
    },
    "HTMLOptionElement": function () {
        // function HTMLOptionElement() { [native code] }
        // assert.equals(logger(new HTMLOptionElement()), "[HTMLOptionElement]", "HTMLOptionElement");
    },
    "HTMLOutputElement": function () {
        // function HTMLOutputElement() { [native code] }
        // assert.equals(logger(new HTMLOutputElement()), "[HTMLOutputElement]", "HTMLOutputElement");
    },
    "HTMLParagraphElement": function () {
        // function HTMLParagraphElement() { [native code] }
        // assert.equals(logger(new HTMLParagraphElement()), "[HTMLParagraphElement]", "HTMLParagraphElement");
    },
    "HTMLParamElement": function () {
        // function HTMLParamElement() { [native code] }
        // assert.equals(logger(new HTMLParamElement()), "[HTMLParamElement]", "HTMLParamElement");
    },
    "HTMLPreElement": function () {
        // function HTMLPreElement() { [native code] }
        // assert.equals(logger(new HTMLPreElement()), "[HTMLPreElement]", "HTMLPreElement");
    },
    "HTMLProgressElement": function () {
        // function HTMLProgressElement() { [native code] }
        // assert.equals(logger(new HTMLProgressElement()), "[HTMLProgressElement]", "HTMLProgressElement");
    },
    "HTMLQuoteElement": function () {
        // function HTMLQuoteElement() { [native code] }
        // assert.equals(logger(new HTMLQuoteElement()), "[HTMLQuoteElement]", "HTMLQuoteElement");
    },
    "HTMLScriptElement": function () {
        // function HTMLScriptElement() { [native code] }
        // assert.equals(logger(new HTMLScriptElement()), "[HTMLScriptElement]", "HTMLScriptElement");
    },
    "HTMLSelectElement": function () {
        // function HTMLSelectElement() { [native code] }
        // assert.equals(logger(new HTMLSelectElement()), "[HTMLSelectElement]", "HTMLSelectElement");
    },
    "HTMLSourceElement": function () {
        // function HTMLSourceElement() { [native code] }
        // assert.equals(logger(new HTMLSourceElement()), "[HTMLSourceElement]", "HTMLSourceElement");
    },
    "HTMLSpanElement": function () {
        // function HTMLSpanElement() { [native code] }
        // assert.equals(logger(new HTMLSpanElement()), "[HTMLSpanElement]", "HTMLSpanElement");
    },
    "HTMLStyleElement": function () {
        // function HTMLStyleElement() { [native code] }
        // assert.equals(logger(new HTMLStyleElement()), "[HTMLStyleElement]", "HTMLStyleElement");
    },
    "HTMLTableCaptionElement": function () {
        // function HTMLTableCaptionElement() { [native code] }
        // assert.equals(logger(new HTMLTableCaptionElement()), "[HTMLTableCaptionElement]", "HTMLTableCaptionElement");
    },
    "HTMLTableCellElement": function () {
        // function HTMLTableCellElement() { [native code] }
        // assert.equals(logger(new HTMLTableCellElement()), "[HTMLTableCellElement]", "HTMLTableCellElement");
    },
    "HTMLTableColElement": function () {
        // function HTMLTableColElement() { [native code] }
        // assert.equals(logger(new HTMLTableColElement()), "[HTMLTableColElement]", "HTMLTableColElement");
    },
    "HTMLTableElement": function () {
        // function HTMLTableElement() { [native code] }
        // assert.equals(logger(new HTMLTableElement()), "[HTMLTableElement]", "HTMLTableElement");
    },
    "HTMLTableRowElement": function () {
        // function HTMLTableRowElement() { [native code] }
        // assert.equals(logger(new HTMLTableRowElement()), "[HTMLTableRowElement]", "HTMLTableRowElement");
    },
    "HTMLTableSectionElement": function () {
        // function HTMLTableSectionElement() { [native code] }
        // assert.equals(logger(new HTMLTableSectionElement()), "[HTMLTableSectionElement]", "HTMLTableSectionElement");
    },
    "HTMLTextAreaElement": function () {
        // function HTMLTextAreaElement() { [native code] }
        // assert.equals(logger(new HTMLTextAreaElement()), "[HTMLTextAreaElement]", "HTMLTextAreaElement");
    },
    "HTMLTitleElement": function () {
        // function HTMLTitleElement() { [native code] }
        // assert.equals(logger(new HTMLTitleElement()), "[HTMLTitleElement]", "HTMLTitleElement");
    },
    "HTMLUListElement": function () {
        // function HTMLUListElement() { [native code] }
        // assert.equals(logger(new HTMLUListElement()), "[HTMLUListElement]", "HTMLUListElement");
    },
    "HTMLUnknownElement": function () {
        // function HTMLUnknownElement() { [native code] }
        // assert.equals(logger(new HTMLUnknownElement()), "[HTMLUnknownElement]", "HTMLUnknownElement");
    },
    "HTMLVideoElement": function () {
        // function HTMLVideoElement() { [native code] }
        // assert.equals(logger(new HTMLVideoElement()), "[HTMLVideoElement]", "HTMLVideoElement");
    },
    "NamedNodeMap": function () {
        // function NamedNodeMap() { [native code] }
        // assert.equals(logger(new NamedNodeMap()), "[NamedNodeMap]", "NamedNodeMap");
    },
    "Node": function () {
        // function Node() { [native code] }
        // assert.equals(logger(new Node()), "[Node]", "Node");
    },
    "NodeFilter": function () {
        // function NodeFilter() { [native code] }
        // assert.equals(logger(new NodeFilter()), "[NodeFilter]", "NodeFilter");
    },
    "NodeList": function () {
        // function NodeList() { [native code] }
        // assert.equals(logger(new NodeList()), "[NodeList]", "NodeList");
    },
    "Window": function () {
        // function Window() { [native code] }
        assert.equals(logger(window), "[Global]", "window");
        assert.equals(logger(parent), "[Global]", "parent");
        assert.equals(logger(self), "[Global]", "self");
        assert.equals(logger(top), "[Global]", "top");
        assert.equals(logger(frames), "[Global]", "frames");
    },
    "XMLDocument": function () {
        // function Document() { [native code] }
        // assert.equals(logger(new Document()), "[Document]", "Document");
    },
    "XMLHttpRequest": function () {
        // function XMLHttpRequest() { [native code] }
        assert.equals(logger(new XMLHttpRequest()), "[XMLHttpRequest]", "XMLHttpRequest");
    },
    "XMLHttpRequestException": function () {
        // function XMLHttpRequestException() { [native code] }
        // assert.equals(logger(new XMLHttpRequestException()), "[XMLHttpRequestException]", "XMLHttpRequestException");
    },
    "XMLHttpRequestProgressEvent": function () {
        // function XMLHttpRequestProgressEvent() { [native code] }
        // assert.equals(logger(new XMLHttpRequestProgressEvent()), "[XMLHttpRequestProgressEvent]", "XMLHttpRequestProgressEvent");
    },
    "XMLHttpRequestUpload": function () {
        // function XMLHttpRequestUpload() { [native code] }
        // assert.equals(logger(new XMLHttpRequestUpload()), "[XMLHttpRequestUpload]", "XMLHttpRequestUpload");
    },
    "XMLSerializer": function () {
        // function XMLSerializer() { [native code] }
        // assert.equals(logger(new XMLSerializer()), "[XMLSerializer]", "XMLSerializer");
    },
    "XPathEvaluator": function () {
        // function XPathEvaluator() { [native code] }
        // assert.equals(logger(new XPathEvaluator()), "[XPathEvaluator]", "XPathEvaluator");
    },
    "XPathException": function () {
        // function XPathException() { [native code] }
        // assert.equals(logger(new XPathException()), "[XPathException]", "XPathException");
    },
    "XPathResult": function () {
        // function XPathResult() { [native code] }
        // assert.equals(logger(new XPathResult()), "[XPathResult]", "XPathResult");
    },
    "XSLTProcessor": function () {
        // function XSLTProcessor() { [native code] }
        // assert.equals(logger(new XSLTProcessor()), "[XSLTProcessor]", "XSLTProcessor");
    }
});
