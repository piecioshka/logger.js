// Copyright Piotr Kowalski and other contributors.
//
// MIT License
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function logger(data) {
    var i,
        // returned value
        res,

        // available special logger types
        parts = ["DOMLogger", "JSLogger"],

        // number of special loggers
        len = parts.length;

    // reset found status
    logger.found = false;

    // check if some special logger found value
    for (i = 0; i < len; ++i) {
        if ( (res = logger[parts[i]](data)) !== undefined ) {
            logger.found = true;
            break;
        }
    }

    if ( logger.found ) {
        // if logger model has matched also returned parsing value
        return res;
    }

    // if not found, report w exception
    throw new TypeError("LoggerUnexpectedValue: undefined type of variable: " + logger.JSLogger({
        // value convert to string
        "toString": Object.prototype.toString.call( data ),
        "typeof": typeof data,
        "contructor": data.constructor && data.constructor.name
    }));
}

// found status
logger.found = false;

// parser's
logger.parser = {};

// public API
if (typeof module !== "undefined") {
    // only for NodeJS
    module.exports = logger;
}

(function () {
    "use strict";

    // master scope
    var global = this,

        logger = (typeof require !== "undefined") ? require("./logger-core.js") : global.logger;

    // Types of all available node
    var nodeTypes = {
        "ELEMENT_NODE": 1,
        "ATTRIBUTE_NODE": 2,
        "TEXT_NODE": 3,
        "CDATA_SECTION_NODE": 4,
        "ENTITY_REFERENCE_NODE": 5,
        "ENTITY_NODE": 6,
        "PROCESSING_INSTRUCTION_NODE": 7,
        "COMMENT_NODE": 8,
        "DOCUMENT_NODE": 9,
        "DOCUMENT_TYPE_NODE": 10,
        "DOCUMENT_FRAGMENT_NODE": 11,
        "NOTATION_NODE": 12
    };

    function to_string(data) {
        return Object.prototype.toString.call(data);
    }

    function in_array(arr, element) {
        var i, len = arr.length;

        for (i = 0; i < len; ++i) {
            if (arr[i] === element) {
                return true;
            }
        }

        return false;
    }

    function trim(source) {
        return source.replace(/^\s+|\s+$/g, "");
    }

    var checker = {
        "ArrayBuffer": function (o) {
            return false;
        },
        "Attr": function (o) {
            return o && to_string(o) === "[object Attr]";
        },
        "Audio": function (o) {
            return false;
        },
        "AudioProcessingEvent": function (o) {
            return false;
        },
        "BarInfo": function (o) {
            return o && to_string(o) === "[object BarInfo]";
        },
        "BarProp": function (o) {
            return o && to_string(o) === "[object BarProp]";
        },
        "BeforeLoadEvent": function (o) {
            return false;
        },
        "Blob": function (o) {
            return false;
        },
        "CDATASection": function (o) {
            return false;
        },
        "CSSCharsetRule": function (o) {
            return false;
        },
        "CSSFontFaceRule": function (o) {
            return false;
        },
        "CSSImportRule": function (o) {
            return false;
        },
        "CSSMediaRule": function (o) {
            return false;
        },
        "CSSPageRule": function (o) {
            return false;
        },
        "CSSPrimitiveValue": function (o) {
            return false;
        },
        "CSSRule": function (o) {
            return false;
        },
        "CSSRuleList": function (o) {
            return false;
        },
        "CSSStyleDeclaration": function (o) {
            return false;
        },
        "CSSStyleRule": function (o) {
            return false;
        },
        "CSSStyleSheet": function (o) {
            return false;
        },
        "CSSValue": function (o) {
            return false;
        },
        "CSSValueList": function (o) {
            return false;
        },
        "CanvasGradient": function (o) {
            return false;
        },
        "CanvasPattern": function (o) {
            return false;
        },
        "CanvasRenderingContext2D": function (o) {
            return false;
        },
        "CharacterData": function (o) {
            return false;
        },
        "ClientRect": function (o) {
            return false;
        },
        "ClientRectList": function (o) {
            return false;
        },
        "Clipboard": function (o) {
            return false;
        },
        "CloseEvent": function (o) {
            return false;
        },
        "Comment": function (o) {
            return false;
        },
        "CompositionEvent": function (o) {
            return false;
        },
        "Counter": function (o) {
            return false;
        },
        "CustomEvent": function (o) {
            return false;
        },
        "DOMException": function (o) {
            return to_string(o) === "[object DOMException]";
        },
        "DOMImplementation": function (o) {
            return false;
        },
        "DOMParser": function (o) {
            return false;
        },
        "DOMSettableTokenList": function (o) {
            return false;
        },
        "DOMStringList": function (o) {
            return false;
        },
        "DOMStringMap": function (o) {
            return false;
        },
        "DOMTokenList": function (o) {
            return false;
        },
        "DataView": function (o) {
            return false;
        },
        "DeviceOrientationEvent": function (o) {
            return false;
        },
        "Document": function (o) {
            var types = ["[object Document]", "[object HTMLDocument]"];
            return o && in_array(types, to_string(o));
        },
        "DocumentFragment": function (o) {
            return false;
        },
        "DocumentType": function (o) {
            return false;
        },
        "Element": function (o) {
            return false;
        },
        "Entity": function (o) {
            return false;
        },
        "EntityReference": function (o) {
        },
        "ErrorEvent": function (o) {
            return false;
        },
        "Event": function (o) {
            return false;
        },
        "EventException": function (o) {
            return false;
        },
        "EventSource": function (o) {
            return false;
        },
        "File": function (o) {
            return false;
        },
        "FileError": function (o) {
            return false;
        },
        "FileList": function (o) {
            return false;
        },
        "FileReader": function (o) {
            return false;
        },
        "Float32Array": function (o) {
            return false;
        },
        "Float64Array": function (o) {
            return false;
        },
        "FormData": function (o) {
            return false;
        },
        "HTMLAllCollection": function (o) {
            return false;
        },
        "HTMLAnchorElement": function (o) {
            return false;
        },
        "HTMLAppletElement": function (o) {
            return false;
        },
        "HTMLAreaElement": function (o) {
            return false;
        },
        "HTMLAudioElement": function (o) {
            return false;
        },
        "HTMLBRElement": function (o) {
            return false;
        },
        "HTMLBaseElement": function (o) {
            return false;
        },
        "HTMLBaseFontElement": function (o) {
            return false;
        },
        "HTMLBodyElement": function (o) {
            return false;
        },
        "HTMLButtonElement": function (o) {
            return false;
        },
        "HTMLCanvasElement": function (o) {
            return false;
        },
        "HTMLCollection": function (o) {
            return false;
        },
        "HTMLDListElement": function (o) {
            return false;
        },
        "HTMLDataListElement": function (o) {
            return false;
        },
        "HTMLDirectoryElement": function (o) {
            return false;
        },
        "HTMLDivElement": function (o) {
            return o && to_string(o) === "[object HTMLDivElement]";
        },
        "HTMLDocument": function (o) {
            return false;
        },
        "HTMLElement": function (o) {
            return false;
        },
        "HTMLEmbedElement": function (o) {
            return false;
        },
        "HTMLFieldSetElement": function (o) {
            return false;
        },
        "HTMLFontElement": function (o) {
            return false;
        },
        "HTMLFormElement": function (o) {
            return false;
        },
        "HTMLFrameElement": function (o) {
            return false;
        },
        "HTMLFrameSetElement": function (o) {
            return false;
        },
        "HTMLHRElement": function (o) {
            return false;
        },
        "HTMLHeadElement": function (o) {
            return false;
        },
        "HTMLHeadingElement": function (o) {
            return false;
        },
        "HTMLHtmlElement": function (o) {
            return false;
        },
        "HTMLIFrameElement": function (o) {
            return false;
        },
        "HTMLImageElement": function (o) {
            return false;
        },
        "HTMLInputElement": function (o) {
            return false;
        },
        "HTMLKeygenElement": function (o) {
            return false;
        },
        "HTMLLIElement": function (o) {
            return false;
        },
        "HTMLLabelElement": function (o) {
            return false;
        },
        "HTMLLegendElement": function (o) {
            return false;
        },
        "HTMLLinkElement": function (o) {
            return false;
        },
        "HTMLMapElement": function (o) {
            return false;
        },
        "HTMLMarqueeElement": function (o) {
            return false;
        },
        "HTMLMediaElement": function (o) {
            return false;
        },
        "HTMLMenuElement": function (o) {
            return false;
        },
        "HTMLMetaElement": function (o) {
            return false;
        },
        "HTMLMeterElement": function (o) {
            return false;
        },
        "HTMLModElement": function (o) {
            return false;
        },
        "HTMLOListElement": function (o) {
            return false;
        },
        "HTMLObjectElement": function (o) {
            return false;
        },
        "HTMLOptGroupElement": function (o) {
            return false;
        },
        "HTMLOptionElement": function (o) {
            return false;
        },
        "HTMLOutputElement": function (o) {
            return false;
        },
        "HTMLParagraphElement": function (o) {
            return false;
        },
        "HTMLParamElement": function (o) {
            return false;
        },
        "HTMLPreElement": function (o) {
            return false;
        },
        "HTMLProgressElement": function (o) {
            return false;
        },
        "HTMLQuoteElement": function (o) {
            return false;
        },
        "HTMLScriptElement": function (o) {
            return false;
        },
        "HTMLSelectElement": function (o) {
            return false;
        },
        "HTMLSourceElement": function (o) {
            return false;
        },
        "HTMLSpanElement": function (o) {
            return false;
        },
        "HTMLStyleElement": function (o) {
            return false;
        },
        "HTMLTableCaptionElement": function (o) {
            return false;
        },
        "HTMLTableCellElement": function (o) {
            return false;
        },
        "HTMLTableColElement": function (o) {
            return false;
        },
        "HTMLTableElement": function (o) {
            return false;
        },
        "HTMLTableRowElement": function (o) {
            return false;
        },
        "HTMLTableSectionElement": function (o) {
            return false;
        },
        "HTMLTextAreaElement": function (o) {
            return false;
        },
        "HTMLTitleElement": function (o) {
            return false;
        },
        "HTMLUListElement": function (o) {
            return false;
        },
        "HTMLUnknownElement": function (o) {
            return false;
        },
        "HTMLVideoElement": function (o) {
            return false;
        },
        "HashChangeEvent": function (o) {
            return false;
        },
        "IceCandidate": function (o) {
            return false;
        },
        "Image": function (o) {
            return false;
        },
        "ImageData": function (o) {
            return false;
        },
        "Int8Array": function (o) {
            return false;
        },
        "Int16Array": function (o) {
            return false;
        },
        "Int32Array": function (o) {
            return false;
        },
        "KeyboardEvent": function (o) {
            return false;
        },
        "MediaController": function (o) {
            return false;
        },
        "MediaError": function (o) {
            return false;
        },
        "MediaList": function (o) {
            return false;
        },
        "MediaStreamEvent": function (o) {
            return false;
        },
        "MessageChannel": function (o) {
            return false;
        },
        "MessageEvent": function (o) {
            return false;
        },
        "MessagePort": function (o) {
            return false;
        },
        "MimeType": function (o) {
            return false;
        },
        "MimeTypeArray": function (o) {
            return false;
        },
        "MouseEvent": function (o) {
            return false;
        },
        "MutationEvent": function (o) {
            return false;
        },
        "NamedNodeMap": function (o) {
            return o && to_string(o) === "[object NamedNodeMap]";
        },
        "Node": function (o) {
            return false;
        },
        "NodeFilter": function (o) {
            return false;
        },
        "NodeList": function (o) {
            return false;
        },
        "Notation": function (o) {
            return false;
        },
        "Notification": function (o) {
            return false;
        },
        "OfflineAudioCompletionEvent": function (o) {
            return false;
        },
        "Option": function (o) {
            return false;
        },
        "OverflowEvent": function (o) {
            return false;
        },
        "PageTransitionEvent": function (o) {
            return false;
        },
        "Plugin": function (o) {
            return false;
        },
        "PluginArray": function (o) {
            return false;
        },
        "PopStateEvent": function (o) {
            return false;
        },
        "ProcessingInstruction": function (o) {
            return false;
        },
        "ProgressEvent": function (o) {
            return false;
        },
        "RGBColor": function (o) {
            return false;
        },
        "Range": function (o) {
            return false;
        },
        "RangeException": function (o) {
            return false;
        },
        "Rect": function (o) {
            return false;
        },
        "SQLException": function (o) {
            return false;
        },
        "SVGAElement": function (o) {
            return false;
        },
        "SVGAltGlyphDefElement": function (o) {
            return false;
        },
        "SVGAltGlyphElement": function (o) {
            return false;
        },
        "SVGAltGlyphItemElement": function (o) {
            return false;
        },
        "SVGAngle": function (o) {
            return false;
        },
        "SVGAnimateColorElement": function (o) {
            return false;
        },
        "SVGAnimateElement": function (o) {
            return false;
        },
        "SVGAnimateMotionElement": function (o) {
            return false;
        },
        "SVGAnimateTransformElement": function (o) {
            return false;
        },
        "SVGAnimatedAngle": function (o) {
            return false;
        },
        "SVGAnimatedBoolean": function (o) {
            return false;
        },
        "SVGAnimatedEnumeration": function (o) {
            return false;
        },
        "SVGAnimatedInteger": function (o) {
            return false;
        },
        "SVGAnimatedLength": function (o) {
            return false;
        },
        "SVGAnimatedLengthList": function (o) {
            return false;
        },
        "SVGAnimatedNumber": function (o) {
            return false;
        },
        "SVGAnimatedNumberList": function (o) {
            return false;
        },
        "SVGAnimatedPreserveAspectRatio": function (o) {
            return false;
        },
        "SVGAnimatedRect": function (o) {
            return false;
        },
        "SVGAnimatedString": function (o) {
            return false;
        },
        "SVGAnimatedTransformList": function (o) {
            return false;
        },
        "SVGCircleElement": function (o) {
            return false;
        },
        "SVGClipPathElement": function (o) {
            return false;
        },
        "SVGColor": function (o) {
            return false;
        },
        "SVGComponentTransferFunctionElement": function (o) {
            return false;
        },
        "SVGCursorElement": function (o) {
            return false;
        },
        "SVGDefsElement": function (o) {
            return false;
        },
        "SVGDescElement": function (o) {
            return false;
        },
        "SVGDocument": function (o) {
            return false;
        },
        "SVGElement": function (o) {
            return false;
        },
        "SVGElementInstance": function (o) {
            return false;
        },
        "SVGElementInstanceList": function (o) {
            return false;
        },
        "SVGEllipseElement": function (o) {
            return false;
        },
        "SVGException": function (o) {
            return false;
        },
        "SVGFEBlendElement": function (o) {
            return false;
        },
        "SVGFEColorMatrixElement": function (o) {
            return false;
        },
        "SVGFEComponentTransferElement": function (o) {
            return false;
        },
        "SVGFECompositeElement": function (o) {
            return false;
        },
        "SVGFEConvolveMatrixElement": function (o) {
            return false;
        },
        "SVGFEDiffuseLightingElement": function (o) {
            return false;
        },
        "SVGFEDisplacementMapElement": function (o) {
            return false;
        },
        "SVGFEDistantLightElement": function (o) {
            return false;
        },
        "SVGFEDropShadowElement": function (o) {
            return false;
        },
        "SVGFEFloodElement": function (o) {
            return false;
        },
        "SVGFEFuncAElement": function (o) {
            return false;
        },
        "SVGFEFuncBElement": function (o) {
            return false;
        },
        "SVGFEFuncGElement": function (o) {
            return false;
        },
        "SVGFEFuncRElement": function (o) {
            return false;
        },
        "SVGFEGaussianBlurElement": function (o) {
            return false;
        },
        "SVGFEImageElement": function (o) {
            return false;
        },
        "SVGFEMergeElement": function (o) {
            return false;
        },
        "SVGFEMergeNodeElement": function (o) {
            return false;
        },
        "SVGFEMorphologyElement": function (o) {
            return false;
        },
        "SVGFEOffsetElement": function (o) {
            return false;
        },
        "SVGFEPointLightElement": function (o) {
            return false;
        },
        "SVGFESpecularLightingElement": function (o) {
            return false;
        },
        "SVGFESpotLightElement": function (o) {
            return false;
        },
        "SVGFETileElement": function (o) {
            return false;
        },
        "SVGFETurbulenceElement": function (o) {
            return false;
        },
        "SVGFilterElement": function (o) {
            return false;
        },
        "SVGFontElement": function (o) {
            return false;
        },
        "SVGFontFaceElement": function (o) {
            return false;
        },
        "SVGFontFaceFormatElement": function (o) {
            return false;
        },
        "SVGFontFaceNameElement": function (o) {
            return false;
        },
        "SVGFontFaceSrcElement": function (o) {
            return false;
        },
        "SVGFontFaceUriElement": function (o) {
            return false;
        },
        "SVGForeignObjectElement": function (o) {
            return false;
        },
        "SVGGElement": function (o) {
            return false;
        },
        "SVGGlyphElement": function (o) {
            return false;
        },
        "SVGGlyphRefElement": function (o) {
            return false;
        },
        "SVGGradientElement": function (o) {
            return false;
        },
        "SVGHKernElement": function (o) {
            return false;
        },
        "SVGImageElement": function (o) {
            return false;
        },
        "SVGLength": function (o) {
            return false;
        },
        "SVGLengthList": function (o) {
            return false;
        },
        "SVGLineElement": function (o) {
            return false;
        },
        "SVGLinearGradientElement": function (o) {
            return false;
        },
        "SVGMPathElement": function (o) {
            return false;
        },
        "SVGMarkerElement": function (o) {
            return false;
        },
        "SVGMaskElement": function (o) {
            return false;
        },
        "SVGMatrix": function (o) {
            return false;
        },
        "SVGMetadataElement": function (o) {
            return false;
        },
        "SVGMissingGlyphElement": function (o) {
            return false;
        },
        "SVGNumber": function (o) {
            return false;
        },
        "SVGNumberList": function (o) {
            return false;
        },
        "SVGPaint": function (o) {
            return false;
        },
        "SVGPathElement": function (o) {
            return false;
        },
        "SVGPathSeg": function (o) {
            return false;
        },
        "SVGPathSegArcAbs": function (o) {
            return false;
        },
        "SVGPathSegArcRel": function (o) {
            return false;
        },
        "SVGPathSegClosePath": function (o) {
            return false;
        },
        "SVGPathSegCurvetoCubicAbs": function (o) {
            return false;
        },
        "SVGPathSegCurvetoCubicRel": function (o) {
            return false;
        },
        "SVGPathSegCurvetoCubicSmoothAbs": function (o) {
            return false;
        },
        "SVGPathSegCurvetoCubicSmoothRel": function (o) {
            return false;
        },
        "SVGPathSegCurvetoQuadraticAbs": function (o) {
            return false;
        },
        "SVGPathSegCurvetoQuadraticRel": function (o) {
            return false;
        },
        "SVGPathSegCurvetoQuadraticSmoothAbs": function (o) {
            return false;
        },
        "SVGPathSegCurvetoQuadraticSmoothRel": function (o) {
            return false;
        },
        "SVGPathSegLinetoAbs": function (o) {
            return false;
        },
        "SVGPathSegLinetoHorizontalAbs": function (o) {
            return false;
        },
        "SVGPathSegLinetoHorizontalRel": function (o) {
            return false;
        },
        "SVGPathSegLinetoRel": function (o) {
            return false;
        },
        "SVGPathSegLinetoVerticalAbs": function (o) {
            return false;
        },
        "SVGPathSegLinetoVerticalRel": function (o) {
            return false;
        },
        "SVGPathSegList": function (o) {
            return false;
        },
        "SVGPathSegMovetoAbs": function (o) {
            return false;
        },
        "SVGPathSegMovetoRel": function (o) {
            return false;
        },
        "SVGPatternElement": function (o) {
            return false;
        },
        "SVGPoint": function (o) {
            return false;
        },
        "SVGPointList": function (o) {
            return false;
        },
        "SVGPolygonElement": function (o) {
            return false;
        },
        "SVGPolylineElement": function (o) {
            return false;
        },
        "SVGPreserveAspectRatio": function (o) {
            return false;
        },
        "SVGRadialGradientElement": function (o) {
            return false;
        },
        "SVGRect": function (o) {
            return false;
        },
        "SVGRectElement": function (o) {
            return false;
        },
        "SVGRenderingIntent": function (o) {
            return false;
        },
        "SVGSVGElement": function (o) {
            return false;
        },
        "SVGScriptElement": function (o) {
            return false;
        },
        "SVGSetElement": function (o) {
            return false;
        },
        "SVGStopElement": function (o) {
            return false;
        },
        "SVGStringList": function (o) {
            return false;
        },
        "SVGStyleElement": function (o) {
            return false;
        },
        "SVGSwitchElement": function (o) {
            return false;
        },
        "SVGSymbolElement": function (o) {
            return false;
        },
        "SVGTRefElement": function (o) {
            return false;
        },
        "SVGTSpanElement": function (o) {
            return false;
        },
        "SVGTextContentElement": function (o) {
            return false;
        },
        "SVGTextElement": function (o) {
            return false;
        },
        "SVGTextPathElement": function (o) {
            return false;
        },
        "SVGTextPositioningElement": function (o) {
            return false;
        },
        "SVGTitleElement": function (o) {
            return false;
        },
        "SVGTransform": function (o) {
            return false;
        },
        "SVGTransformList": function (o) {
            return false;
        },
        "SVGUnitTypes": function (o) {
            return false;
        },
        "SVGUseElement": function (o) {
            return false;
        },
        "SVGVKernElement": function (o) {
            return false;
        },
        "SVGViewElement": function (o) {
            return false;
        },
        "SVGViewSpec": function (o) {
            return false;
        },
        "SVGZoomAndPan": function (o) {
            return false;
        },
        "SVGZoomEvent": function (o) {
            return false;
        },
        "Selection": function (o) {
            return false;
        },
        "SessionDescription": function (o) {
            return false;
        },
        "SharedWorker": function (o) {
            return false;
        },
        "SpeechInputEvent": function (o) {
            return false;
        },
        "StyleSheet": function (o) {
            return false;
        },
        "StyleSheetList": function (o) {
            return false;
        },
        "Text": function (o) {
            return false;
        },
        "TextEvent": function (o) {
            return false;
        },
        "TextMetrics": function (o) {
            return false;
        },
        "TimeRanges": function (o) {
            return false;
        },
        "TouchEvent": function (o) {
            return false;
        },
        "UIEvent": function (o) {
            return false;
        },
        "Uint8Array": function (o) {
            return false;
        },
        "Uint8ClampedArray": function (o) {
            return false;
        },
        "Uint16Array": function (o) {
            return false;
        },
        "Uint32Array": function (o) {
            return false;
        },
        "WebGLActiveInfo": function (o) {
            return false;
        },
        "WebGLBuffer": function (o) {
            return false;
        },
        "WebGLContextEvent": function (o) {
            return false;
        },
        "WebGLFramebuffer": function (o) {
            return false;
        },
        "WebGLProgram": function (o) {
            return false;
        },
        "WebGLRenderbuffer": function (o) {
            return false;
        },
        "WebGLRenderingContext": function (o) {
            return false;
        },
        "WebGLShader": function (o) {
            return false;
        },
        "WebGLShaderPrecisionFormat": function (o) {
            return false;
        },
        "WebGLTexture": function (o) {
            return false;
        },
        "WebGLUniformLocation": function (o) {
            return false;
        },
        "WebKitAnimationEvent": function (o) {
            return false;
        },
        "WebKitBlobBuilder": function (o) {
            return false;
        },
        "WebKitCSSFilterValue": function (o) {
            return false;
        },
        "WebKitCSSKeyframeRule": function (o) {
            return false;
        },
        "WebKitCSSKeyframesRule": function (o) {
            return false;
        },
        "WebKitCSSMatrix": function (o) {
            return false;
        },
        "WebKitCSSRegionRule": function (o) {
            return false;
        },
        "WebKitCSSTransformValue": function (o) {
            return false;
        },
        "WebKitIntent": function (o) {
            return false;
        },
        "WebKitMutationObserver": function (o) {
            return false;
        },
        "WebKitPoint": function (o) {
            return false;
        },
        "WebKitTransitionEvent": function (o) {
            return false;
        },
        "WebSocket": function (o) {
            return false;
        },
        "WheelEvent": function (o) {
            return false;
        },
        "Window": function (o) {
            return o === global;
        },
        "Worker": function (o) {
            return false;
        },
        "XMLDocument": function (o) {
            return false;
        },
        "XMLSerializer": function (o) {
            return false;
        },
        "XPathEvaluator": function (o) {
            return false;
        },
        "XPathException": function (o) {
            return false;
        },
        "XPathResult": function (o) {
            return false;
        },
        "XSLTProcessor": function (o) {
            return false;
        },
        "clientInformation": function (o) {
            return false;
        },
        "console": function (o) {
            return false;
        },
        "crypto": function (o) {
            return false;
        },
        "document": function (o) {
            return false;
        },
        "frames": function (o) {
            return false;
        },
        "history": function (o) {
            return false;
        },
        "location": function (o) {
            return false;
        },
        "locationbar": function (o) {
            return false;
        },
        "menubar": function (o) {
            return false;
        },
        "navigator": function (o) {
            return false;
        },
        "parent": function (o) {
            return false;
        },
        "performance": function (o) {
            return false;
        },
        "personalbar": function (o) {
            return false;
        },
        "screen": function (o) {
            return false;
        },
        "scrollbars": function (o) {
            return false;
        },
        "self": function (o) {
            return false;
        },
        "statusbar": function (o) {
            return false;
        },
        "styleMedia": function (o) {
            return false;
        },
        "toolbar": function (o) {
            return false;
        },
        "top": function (o) {
            return false;
        },
        "v8Intl": function (o) {
            return false;
        },
        "webkitAudioContext": function (o) {
            return false;
        },
        "webkitAudioPannerNode": function (o) {
            return false;
        },
        "webkitCancelAnimationFrame": function (o) {
            return false;
        },
        "webkitCancelRequestAnimationFrame": function (o) {
            return false;
        },
        "webkitConvertPointFromNodeToPage": function (o) {
            return false;
        },
        "webkitConvertPointFromPageToNode": function (o) {
            return false;
        },
        "webkitIDBCursor": function (o) {
            return false;
        },
        "webkitIDBDatabase": function (o) {
            return false;
        },
        "webkitIDBDatabaseException": function (o) {
            return false;
        },
        "webkitIDBFactory": function (o) {
            return false;
        },
        "webkitIDBIndex": function (o) {
            return false;
        },
        "webkitIDBKeyRange": function (o) {
            return false;
        },
        "webkitIDBObjectStore": function (o) {
            return false;
        },
        "webkitIDBRequest": function (o) {
            return false;
        },
        "webkitIDBTransaction": function (o) {
            return false;
        },
        "webkitIndexedDB": function (o) {
            return false;
        },
        "webkitMediaStream": function (o) {
            return false;
        },
        "webkitNotifications": function (o) {
            return false;
        },
        "webkitPostMessage": function (o) {
            return false;
        },
        "webkitRequestAnimationFrame": function (o) {
            return false;
        },
        "webkitRequestFileSystem": function (o) {
            return false;
        },
        "webkitResolveLocalFileSystemURL": function (o) {
            return false;
        },
        "webkitURL": function (o) {
            return false;
        },
        "window": function (o) {
            return false;
        }
    };

    // public API
    logger.DOMLogger = function (data) {
        var res,
            type;

        for (type in checker) {
            if (checker.hasOwnProperty(type)) {
                if (checker[type].call(null, data)) {
                    res = logger.parser.DOMParser.call(this, type, data);
                    // res = ">>" + type + "<< : " + logger.parser.DOMParser[type].call(this, data);
                }
            }
        }

        return res;
    };

}).call(this);
/******************************************************************************/
/* Logger JavaScript */
/******************************************************************************/

if (typeof require !== "undefined") {
    var logger = require("./logger-core.js");
}

(function () {
    "use strict";

    // master scope
    var global = this;

    /**
     * @param {Object} o
     * @returns {String}
     */
    function to_string(o) {
        return Object.prototype.toString.call(o);
    }

    var checker = {

/******************************************************************************/
/* General-purpose constructors */
/******************************************************************************/

        "Array": function (o) {
            if ( o && o.constructor && o.constructor.name === "Array" ) {
                return true;
            }
            return o && o.constructor && o.pop && o.push &&
                o.reverse && (typeof o.length === "number") && o.shift &&
                o.sort && o.splice && o.unshift && o.concat && o.join &&
                o.slice && o.indexOf;
        },
        "Arguments": function (o) {
            return o && (typeof o.length === "number") &&
                Object.prototype.toString.call(o) === "[object Arguments]";
        },
        "Boolean": function (o) { return typeof o === "boolean" },
        "Date": function (o) { return o && o.getDate && o.getDay
            && o.getFullYear && o.getHours && o.getMilliseconds &&
            o.getMinutes && o.getMonth && o.getSeconds;
        },
        "Function": function (o) { return o &&
            Object.prototype.toString.call(o) === "[object Function]";
        },
        // Harmony JS
        // "Iterator": function (o) { return o.constructor === Iterator; },
        "Number": function (o) { return typeof o === "number" && !isNaN(o) &&
            isFinite(o);
        },
        "Object": function (o) {
            return o && Object.prototype.toString.call(o) === "[object Object]";
        },
        "RegExp": function (o) { return o && o.exec && o.test; },
        "String": function (o) { return typeof o === "string"; },

/******************************************************************************/
/* Typed array constructors */
/******************************************************************************/

        "ArrayBuffer": function (o) {
            if ("ArrayBuffer" in global) {
                return o && o instanceof ArrayBuffer && typeof o.byteLength === "number";
            }
            return false;
        },
        "DataView": function (o) {
            if ("ArrayBuffer" in global) {
                return o && o.buffer instanceof ArrayBuffer &&
                    o.getInt8 && o.getUint8 && o.getInt16 && o.getUint16 && o.getInt32 &&
                    o.getUint32 && o.getFloat32 && o.getFloat64 && o instanceof DataView;
            }
            return false;
        },
        "Float32Array": function (o) {
            if ("ArrayBuffer" in global) {
                return o && o.buffer instanceof ArrayBuffer &&
                    typeof o.byteLength === "number" && typeof o.byteOffset === "number" &&
                    o instanceof Float32Array;
            }
            return false;
        },
        "Float64Array": function (o) {
            if ("ArrayBuffer" in global) {
                return o && o.buffer instanceof ArrayBuffer &&
                    typeof o.byteLength === "number" && typeof o.byteOffset === "number" &&
                    o instanceof Float64Array;
            }
            return false;
        },
        "Int16Array": function (o) {
            if ("ArrayBuffer" in global) {
                return o && o.buffer instanceof ArrayBuffer &&
                    typeof o.byteLength === "number" && typeof o.byteOffset === "number" &&
                    o instanceof Int16Array;
            }
        },
        "Int32Array": function (o) {
            if ("ArrayBuffer" in global) {
                return o && o.buffer instanceof ArrayBuffer &&
                    typeof o.byteLength === "number" && typeof o.byteOffset === "number" &&
                    o instanceof Int32Array;
            }
        },
        "Int8Array": function (o) {
            if ("ArrayBuffer" in global) {
                return o && o.buffer instanceof ArrayBuffer &&
                    typeof o.byteLength === "number" && typeof o.byteOffset === "number" &&
                    o instanceof Int8Array;
            }
        },
        "Uint16Array": function (o) {
            if ("ArrayBuffer" in global) {
                return o && o.buffer instanceof ArrayBuffer &&
                    typeof o.byteLength === "number" && typeof o.byteOffset === "number" &&
                    o instanceof Uint16Array;
            }
        },
        "Uint32Array": function (o) {
            if ("ArrayBuffer" in global) {
                return o && o.buffer instanceof ArrayBuffer &&
                    typeof o.byteLength === "number" && typeof o.byteOffset === "number" &&
                    o instanceof Uint32Array;
            }
        },
        "Uint8Array": function (o) {
            if ("ArrayBuffer" in global) {
                return o && o.buffer instanceof ArrayBuffer &&
                    typeof o.byteLength === "number" && typeof o.byteOffset === "number" &&
                    o instanceof Uint8Array;
            }
        },
        /*
        "Uint8ClampedArray": function (o) { return o && o.buffer instanceof ArrayBuffer &&
            typeof o.byteLength === "number" && typeof o.byteOffset === "number" &&
            !!Uint8ClampedArray && o instanceof Uint8ClampedArray;
        },
        */

/******************************************************************************/
/* Error constructors */
/******************************************************************************/

        "Error": function (o) {
            return o && o.name === "Error" && o instanceof Error;
        },
        "EvalError": function (o) {
            return o && o instanceof Error && o instanceof EvalError;
        },
        /*
        // Harmony JS
        "InternalError": function (o) { return o && o.name === "InternalError" &&
            o instanceof Error && o instanceof InternalError;
        },
        */
        "RangeError": function (o) {
            return o && o instanceof Error && o instanceof RangeError;
        },
        "ReferenceError": function (o) {
            return o && o instanceof Error && o instanceof ReferenceError;
        },
        /*
        // Harmony JS
        "StopIteration": function (o) { return o && o.name === "StopIteration" &&
            o instanceof Error && o instanceof StopIteration;
        },
        */
        "SyntaxError": function (o) {
            return o && o instanceof Error && o instanceof SyntaxError;
        },
        "TypeError": function (o) {
            return o && o instanceof Error && o instanceof TypeError;
        },
        "URIError": function (o) {
            return o && o instanceof Error && o instanceof URIError;
        },

/******************************************************************************/
/* Storage */
/******************************************************************************/

        "Storage": function (o) {
            return o && to_string(o) === "[object Storage]";
        },
        "StorageEvent": function (o) {
            return false;
        },
        "localStorage": function (o) {
            return false;
        },
        "sessionStorage": function (o) {
            return false;
        },
        "webkitStorageInfo": function (o) {
            // StorageInfo
            return false;
        },

/******************************************************************************/
/* XMLHttpRequest */
/******************************************************************************/

        "XMLHttpRequest": function (o) {
            return to_string(o) === "[object XMLHttpRequest]";
        },
        "XMLHttpRequestException": function (o) {
            return to_string(o) === "[object XMLHttpRequestException]";
        },
        "XMLHttpRequestProgressEvent": function (o) {
            return to_string(o) === "[object XMLHttpRequestProgressEvent]";
        },
        "XMLHttpRequestUpload": function (o) {
            return to_string(o) === "[object XMLHttpRequestUpload]";
        },

/******************************************************************************/
/* Other */
/******************************************************************************/

        "Infinity": function (o) { return typeof o === "number" &&
            !isFinite(o);
        },
        "JSON": function (o) { return checker["Object"](o); },
        "Math": function (o) { return o && o === Math; },
        "NaN": function (o) { return typeof o === "number" && isNaN(o); },
        "Null": function (o) { return o === null; },
        "undefined": function (o) { return o === undefined; }
    };

    // public API
    logger.JSLogger = function (data) {
        var res,
            type;

        for (type in checker) {
            if (checker.hasOwnProperty(type)) {
                if (checker[type].call(null, data)) {
                    res = logger.parser.JSParser.call(this, type, data);
                }
            }
        }

        return res;
    };

}).call(this);
(function () {
    "use strict";

    // master scope
    var global = this,

        // lib
        logger = (typeof require !== "undefined") ? require("../logger-core.js") : global.logger,

        // parser
        DOMParser;

    var default_data_objects = [
        "ArrayBuffer",
        "Audio",
        "AudioProcessingEvent",
        "BeforeLoadEvent",
        "Blob",
        "CDATASection",
        "CSSCharsetRule",
        "CSSFontFaceRule",
        "CSSImportRule",
        "CSSMediaRule",
        "CSSPageRule",
        "CSSPrimitiveValue",
        "CSSRule",
        "CSSRuleList",
        "CSSStyleDeclaration",
        "CSSStyleRule",
        "CSSStyleSheet",
        "CSSValue",
        "CSSValueList",
        "CanvasGradient",
        "CanvasPattern",
        "CanvasRenderingContext2D",
        "CharacterData",
        "ClientRect",
        "ClientRectList",
        "Clipboard",
        "CloseEvent",
        "Comment",
        "CompositionEvent",
        "Counter",
        "CustomEvent",
        "DOMImplementation",
        "DOMParser",
        "DOMSettableTokenList",
        "DOMStringList",
        "DOMStringMap",
        "DOMTokenList",
        "DataView",
        "DeviceOrientationEvent",
        "DocumentFragment",
        "DocumentType",
        "Entity",
        "EntityReference",
        "ErrorEvent",
        "Event",
        "EventException",
        "EventSource",
        "File",
        "FileError",
        "FileList",
        "FileReader",
        "Float32Array",
        "Float64Array",
        "FormData",
        "HTMLAllCollection",
        "HashChangeEvent",
        "IceCandidate",
        "Image",
        "ImageData",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "KeyboardEvent",
        "MediaController",
        "MediaError",
        "MediaList",
        "MediaStreamEvent",
        "MessageChannel",
        "MessageEvent",
        "MessagePort",
        "MimeType",
        "MimeTypeArray",
        "MouseEvent",
        "MutationEvent",
        "NodeFilter",
        "NodeList",
        "Notation",
        "Notification",
        "OfflineAudioCompletionEvent",
        "Option",
        "OverflowEvent",
        "PageTransitionEvent",
        "Plugin",
        "PluginArray",
        "PopStateEvent",
        "ProcessingInstruction",
        "ProgressEvent",
        "RGBColor",
        "Range",
        "RangeException",
        "Rect",
        "SQLException",
        "SVGAElement",
        "SVGAltGlyphDefElement",
        "SVGAltGlyphElement",
        "SVGAltGlyphItemElement",
        "SVGAngle",
        "SVGAnimateColorElement",
        "SVGAnimateElement",
        "SVGAnimateMotionElement",
        "SVGAnimateTransformElement",
        "SVGAnimatedAngle",
        "SVGAnimatedBoolean",
        "SVGAnimatedEnumeration",
        "SVGAnimatedInteger",
        "SVGAnimatedLength",
        "SVGAnimatedLengthList",
        "SVGAnimatedNumber",
        "SVGAnimatedNumberList",
        "SVGAnimatedPreserveAspectRatio",
        "SVGAnimatedRect",
        "SVGAnimatedString",
        "SVGAnimatedTransformList",
        "SVGCircleElement",
        "SVGClipPathElement",
        "SVGColor",
        "SVGComponentTransferFunctionElement",
        "SVGCursorElement",
        "SVGDefsElement",
        "SVGDescElement",
        "SVGDocument",
        "SVGElement",
        "SVGElementInstance",
        "SVGElementInstanceList",
        "SVGEllipseElement",
        "SVGException",
        "SVGFEBlendElement",
        "SVGFEColorMatrixElement",
        "SVGFEComponentTransferElement",
        "SVGFECompositeElement",
        "SVGFEConvolveMatrixElement",
        "SVGFEDiffuseLightingElement",
        "SVGFEDisplacementMapElement",
        "SVGFEDistantLightElement",
        "SVGFEDropShadowElement",
        "SVGFEFloodElement",
        "SVGFEFuncAElement",
        "SVGFEFuncBElement",
        "SVGFEFuncGElement",
        "SVGFEFuncRElement",
        "SVGFEGaussianBlurElement",
        "SVGFEImageElement",
        "SVGFEMergeElement",
        "SVGFEMergeNodeElement",
        "SVGFEMorphologyElement",
        "SVGFEOffsetElement",
        "SVGFEPointLightElement",
        "SVGFESpecularLightingElement",
        "SVGFESpotLightElement",
        "SVGFETileElement",
        "SVGFETurbulenceElement",
        "SVGFilterElement",
        "SVGFontElement",
        "SVGFontFaceElement",
        "SVGFontFaceFormatElement",
        "SVGFontFaceNameElement",
        "SVGFontFaceSrcElement",
        "SVGFontFaceUriElement",
        "SVGForeignObjectElement",
        "SVGGElement",
        "SVGGlyphElement",
        "SVGGlyphRefElement",
        "SVGGradientElement",
        "SVGHKernElement",
        "SVGImageElement",
        "SVGLength",
        "SVGLengthList",
        "SVGLineElement",
        "SVGLinearGradientElement",
        "SVGMPathElement",
        "SVGMarkerElement",
        "SVGMaskElement",
        "SVGMatrix",
        "SVGMetadataElement",
        "SVGMissingGlyphElement",
        "SVGNumber",
        "SVGNumberList",
        "SVGPaint",
        "SVGPathElement",
        "SVGPathSeg",
        "SVGPathSegArcAbs",
        "SVGPathSegArcRel",
        "SVGPathSegClosePath",
        "SVGPathSegCurvetoCubicAbs",
        "SVGPathSegCurvetoCubicRel",
        "SVGPathSegCurvetoCubicSmoothAbs",
        "SVGPathSegCurvetoCubicSmoothRel",
        "SVGPathSegCurvetoQuadraticAbs",
        "SVGPathSegCurvetoQuadraticRel",
        "SVGPathSegCurvetoQuadraticSmoothAbs",
        "SVGPathSegCurvetoQuadraticSmoothRel",
        "SVGPathSegLinetoAbs",
        "SVGPathSegLinetoHorizontalAbs",
        "SVGPathSegLinetoHorizontalRel",
        "SVGPathSegLinetoRel",
        "SVGPathSegLinetoVerticalAbs",
        "SVGPathSegLinetoVerticalRel",
        "SVGPathSegList",
        "SVGPathSegMovetoAbs",
        "SVGPathSegMovetoRel",
        "SVGPatternElement",
        "SVGPoint",
        "SVGPointList",
        "SVGPolygonElement",
        "SVGPolylineElement",
        "SVGPreserveAspectRatio",
        "SVGRadialGradientElement",
        "SVGRect",
        "SVGRectElement",
        "SVGRenderingIntent",
        "SVGSVGElement",
        "SVGScriptElement",
        "SVGSetElement",
        "SVGStopElement",
        "SVGStringList",
        "SVGStyleElement",
        "SVGSwitchElement",
        "SVGSymbolElement",
        "SVGTRefElement",
        "SVGTSpanElement",
        "SVGTextContentElement",
        "SVGTextElement",
        "SVGTextPathElement",
        "SVGTextPositioningElement",
        "SVGTitleElement",
        "SVGTransform",
        "SVGTransformList",
        "SVGUnitTypes",
        "SVGUseElement",
        "SVGVKernElement",
        "SVGViewElement",
        "SVGViewSpec",
        "SVGZoomAndPan",
        "SVGZoomEvent",
        "Selection",
        "SessionDescription",
        "SharedWorker",
        "SpeechInputEvent",
        "StyleSheet",
        "StyleSheetList",
        "Text",
        "TextEvent",
        "TextMetrics",
        "TimeRanges",
        "TouchEvent",
        "UIEvent",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WebGLActiveInfo",
        "WebGLBuffer",
        "WebGLContextEvent",
        "WebGLFramebuffer",
        "WebGLProgram",
        "WebGLRenderbuffer",
        "WebGLRenderingContext",
        "WebGLShader",
        "WebGLShaderPrecisionFormat",
        "WebGLTexture",
        "WebGLUniformLocation",
        "WebKitAnimationEvent",
        "WebKitBlobBuilder",
        "WebKitCSSFilterValue",
        "WebKitCSSKeyframeRule",
        "WebKitCSSKeyframesRule",
        "WebKitCSSMatrix",
        "WebKitCSSRegionRule",
        "WebKitCSSTransformValue",
        "WebKitIntent",
        "WebKitMutationObserver",
        "WebKitPoint",
        "WebKitTransitionEvent",
        "WebSocket",
        "WheelEvent",
        "Worker",
        "XMLDocument",
        "XMLSerializer",
        "XPathEvaluator",
        "XPathException",
        "XPathResult",
        "XSLTProcessor",
        "clientInformation",
        "console",
        "crypto",
        "document",
        "frames",
        "history",
        "location",
        "locationbar",
        "menubar",
        "navigator",
        "parent",
        "performance",
        "personalbar",
        "screen",
        "scrollbars",
        "self",
        "statusbar",
        "styleMedia",
        "toolbar",
        "top",
        "v8Intl",
        "webkitAudioContext",
        "webkitAudioPannerNode",
        "webkitCancelAnimationFrame",
        "webkitCancelRequestAnimationFrame",
        "webkitConvertPointFromNodeToPage",
        "webkitConvertPointFromPageToNode",
        "webkitIDBCursor",
        "webkitIDBDatabase",
        "webkitIDBDatabaseException",
        "webkitIDBFactory",
        "webkitIDBIndex",
        "webkitIDBKeyRange",
        "webkitIDBObjectStore",
        "webkitIDBRequest",
        "webkitIDBTransaction",
        "webkitIndexedDB",
        "webkitMediaStream",
        "webkitNotifications",
        "webkitPostMessage",
        "webkitRequestAnimationFrame",
        "webkitRequestFileSystem",
        "webkitResolveLocalFileSystemURL",
        "webkitURL",
        "window"
    ];

    var special_parsers = {
        "Attr": function (o) {
            return logger.parser.JSParser["Object"](o);
        },

        "Document": function (o) {
            return "Document: " + o.URL;
        },

        "DOMException": function (o) {
            var code, message, name, stack;

            if ( "code" in o && o.code ) {
                code = o.code;
            }
            if ( "message" in o && o.message ) {
                message = o.message;
            }
            if ( "name" in o && o.name ) {
                name = o.name;
            }
            if ( "stack" in o && o.stack ) {
                stack = o.stack;
            }

            return {
                code: code,
                message: message,
                name: name,
                stack: stack
            }
        },

        "BarInfo": function (o) {
            return "[BarInfo]";
        },

        "NamedNodeMap": function () {
            return logger.parser.JSParser["Object"].call(this, o);
        },

        "Window": function (o) {
            return "Window: " + o.location.href;
        }
    };

/******************************************************************************/
/* Node */
/******************************************************************************/

    function is_node(type) {
        return type == "Node";
    }

/******************************************************************************/
/* Node ELEMENT_NODE 1 */
/******************************************************************************/

    function is_element(type) {
        var ELEMENT_NODE_ARRAY = [
            "Element",
            "HTMLAnchorElement",
            "HTMLAppletElement",
            "HTMLAreaElement",
            "HTMLAudioElement",
            "HTMLBRElement",
            "HTMLBaseElement",
            "HTMLBaseFontElement",
            "HTMLBodyElement",
            "HTMLButtonElement",
            "HTMLCanvasElement",
            "HTMLCollection",
            "HTMLDListElement",
            "HTMLDataListElement",
            "HTMLDirectoryElement",
            "HTMLDivElement",
            "HTMLDocument",
            "HTMLElement",
            "HTMLEmbedElement",
            "HTMLFieldSetElement",
            "HTMLFontElement",
            "HTMLFormElement",
            "HTMLFrameElement",
            "HTMLFrameSetElement",
            "HTMLHRElement",
            "HTMLHeadElement",
            "HTMLHeadingElement",
            "HTMLHtmlElement",
            "HTMLIFrameElement",
            "HTMLImageElement",
            "HTMLInputElement",
            "HTMLKeygenElement",
            "HTMLLIElement",
            "HTMLLabelElement",
            "HTMLLegendElement",
            "HTMLLinkElement",
            "HTMLMapElement",
            "HTMLMarqueeElement",
            "HTMLMediaElement",
            "HTMLMenuElement",
            "HTMLMetaElement",
            "HTMLMeterElement",
            "HTMLModElement",
            "HTMLOListElement",
            "HTMLObjectElement",
            "HTMLOptGroupElement",
            "HTMLOptionElement",
            "HTMLOutputElement",
            "HTMLParagraphElement",
            "HTMLParamElement",
            "HTMLPreElement",
            "HTMLProgressElement",
            "HTMLQuoteElement",
            "HTMLScriptElement",
            "HTMLSelectElement",
            "HTMLSourceElement",
            "HTMLSpanElement",
            "HTMLStyleElement",
            "HTMLTableCaptionElement",
            "HTMLTableCellElement",
            "HTMLTableColElement",
            "HTMLTableElement",
            "HTMLTableRowElement",
            "HTMLTableSectionElement",
            "HTMLTextAreaElement",
            "HTMLTitleElement",
            "HTMLUListElement",
            "HTMLUnknownElement",
            "HTMLVideoElement"
        ];

        return in_array(type, ELEMENT_NODE_ARRAY);
    }

    function like_as_node(o) {
        var tagName = o.tagName;
        var longTag = "<%TAG% %ATTRS%>%CONTENT%</%TAG%>";
        var shortTag = "<%TAG% %ATTRS% />";
        var tag = "";

        var isContent = false;

        // check if tag have a content
        if (o.innerHTML.length > 0) {
            isContent = true;
        }

        if (isContent) {
            // if content exists, returns long tag representant
            tag = longTag;
        } else {
            // if content doesn't exists return short
            tag = shortTag
        }

        // replace node name
        tag = tag.replace(/%TAG%/gi, tagName);

        // replace node attributes
        tag = tag.replace(/%ATTRS%/, parse_attrs(o));

        return tag;
    }

    function parse_attrs(o) {
        var attrs = "", i, attr, attrs_count = o.attributes.length;

        for (i = 0; i < attrs_count; ++i) {
            attr = o[i];

            attrs += attr.nodeName + "=\"" + attr.nodeValue + "\"";

            if (i < attrs_count - 1) {
                attrs += " ";
            }
        }

        return attrs;
    }

    function in_array(i, a) {
        var j, l = a.length;

        for (j = 0; j < l; ++j) {
            if (a[j] === i) {
                return true;
            }
        }
        return false;
    }

    function to_string(o) {
        return Object.prototype.toString.call(o);
    }

    DOMParser = function (type, data) {
        // check if exists special parser
        if (type in special_parsers) {
            // yes! exists, so run it!
            return special_parsers[type](data);
        }

        // doesn't exists special parser for this object type
        else if (is_node(type) && is_element(type)) {
            return like_as_node(data);
        }

        // default parser
        return to_string(data);
    };

    // public API
    logger.parser.DOMParser = DOMParser;

}).call(this);(function () {
    "use strict";

    // master scope
    var global = this,

        // lib
        logger = (typeof require !== "undefined") ? require("../logger-core.js") : global.logger,

        // parser
        JSParser;

    var default_data_objects = [
        "Array",
        "Arguments",
        "Boolean",
        "Date",
        "Function",
        "Number",
        "Object",
        "RegExp",
        "String",

        "ArrayBuffer",
        "DataView",
        "Float32Array",
        "Float64Array",
        "Int16Array",
        "Int32Array",
        "Int8Array",
        "Uint16Array",
        "Uint32Array",
        "Uint8Array",
        "Uint8ClampedArray",

        "Error",
        "EvalError",
        "RangeError",
        "ReferenceError",
        "SyntaxError",
        "TypeError",
        "URIError",

        "StorageInfo",
        "StorageEvent",
        "localStorage",
        "sessionStorage",
        "webkitStorageInfo",

        "XMLHttpRequest",
        "XMLHttpRequestException",
        "XMLHttpRequestProgressEvent",
        "XMLHttpRequestUpload",

        "Infinity",
        "JSON",
        "Math",
        "NaN",
        "Null",
        "undefined"
    ];
    
    var special_parsers = {

/******************************************************************************/
/* General-purpose constructors */
/******************************************************************************/

        "Array": function (o) {
            o = Array.prototype.slice.call(o);

            var r = "[",
                i = 0,
                l = o.length;

            for (; i < l; ++i) {
                r += logger(o[i]);

                if (i < l - 1) {
                    r += ", ";
                }
            }

            return r + "]";
        },
        "Arguments": function (o) {
            return this["Array"](o);
        },
        "Date": function (o) {
            return "Date: " + o.toString();
        },
        "Function": function (o) {
            var s = o.toString(), pre, post;

            pre = s.slice(0, s.indexOf("{") + 1);
            post = " [ignore code] }";

            return pre + post;
        },
        "Number": function (o) {
            return o;
        },
        "Object": function (o) {
            var r = "{",
                i,
                c = 0,
                len = (function (o) {
                    var i,
                        c = 0;

                    for (i in o) {
                        if (o.hasOwnProperty(i)) {
                            c++;
                        }
                    }

                    return c;
                }(o));

            if (len > 0) {
                r += "\n";
            }

            for (i in o) {
                if (o.hasOwnProperty(i)) {
                    r += "\t" + "\"" + i + "\": " + logger(o[i]);

                    if (c < len - 1) {
                        r += ",\n";
                    }

                    c++;
                }
            }

            if (len > 0) {
                r += "\n";
            }

            return r + "}";
        },
        "RegExp": function (o) {
            return o.toString();
        },
        "String": function (o) {
            return "\"" + String(o) + "\"";
        },

/******************************************************************************/
/* Typed array constructors */
/******************************************************************************/

        "ArrayBuffer": function (o) {
            return "[].byteLength: " + o.byteLength;
        },
        "DataView": function (o) {
            return "[].buffer.byteLength: " + o.buffer.byteLength;
        },

/******************************************************************************/
/* Error constructors */
/******************************************************************************/

        "Error": function (o) {
            var res = "";
            res += o.name + "(";
            if (o.message || o.lineNumber || o.line || o.fileName || o.sourceURL) {
                res += "{\n";
                if (o.message) {
                    res += "\tMessage: \"" + o.message + "\"\n";
                }
                if (o.lineNumber || o.line) {
                    res += "\tLine: " + (o.lineNumber || o.line) + "\n";
                }
                if (o.fileName || o.sourceURL) {
                    res += "\tFile: \"" + (o.fileName || o.sourceURL) + "\"\n";
                }
                res += "}";
            }
            res += ")";
            return res;
        },

/******************************************************************************/
/* Storage */
/******************************************************************************/

        "Storage": function () {
            return "[Storage]";
        },

/******************************************************************************/
/* XMLHttpRequest */
/******************************************************************************/

        "XMLHttpRequest": function (o) {
            var state, code = 0, text = "";

            switch (o.readyState) {
                case 0: state = "UNSENT (0)"; break;
                case 1: state = "OPENED (1)"; break;
                case 2: state = "HEADERS_RECEIVED (2)"; break;
                case 3: state = "LOADING (3)"; break;
                case 4: state = "DONE (4)"; break;
            }

            // if XHR is not ready, can not read "status" and "statusText" values
            if ( !in_array(o.readyState, [0, 1]) ) {
                code = o.status;
                text = o.statusText;
            }

            return {
                type: "[XMLHttpRequest]",
                readyState: state,
                statusText: text,
                httpCode: code
            };
        },
        "XMLHttpRequestException": function (o) {
            return {
                type: "[XMLHttpRequestException]",
                code: o.code
            };
        },
        "XMLHttpRequestProgressEvent": function (o) {
            return ["XMLHttpRequestProgressEvent"];
        },
        "XMLHttpRequestUpload": function (o) {
            return "[XMLHttpRequestUpload]";
        },

/******************************************************************************/
/* Other */
/******************************************************************************/

        "JSON": function (o) {
            return this["Object"](o);
        },
        "Math": function (o) {
            return this["Object"](o);
        }
    };

    function in_array(i, a) {
        var l = a.length;
        for (var j = 0; j < l; ++j) {
            if (a[j] === i) {
                return true;
            }
        }
        return false;
    }

    function like_as_data_view(o) {
        return JSParser("DataView", o);
    }
    
    function is_special_number(type) {
        var SPECIAL_NUMBER_ARRAY = [
            "Float32Array",
            "Float64Array",
            "Int16Array",
            "Int32Array",
            "Int8Array",
            "Uint16Array",
            "Uint32Array",
            "Uint8Array",
            "Uint8ClampedArray"
        ];

        return in_array(type, SPECIAL_NUMBER_ARRAY);
    }

    function like_as_error(o) {
        return JSParser("Error", o);
    }

    function is_error(type) {
        var ERRORS_NAME_ARRAY = [
            "EvalError",
            "RangeError",
            "ReferenceError",
            "SyntaxError",
            "TypeError",
            "URIError"
        ];

        return in_array(type, ERRORS_NAME_ARRAY);
    }

    JSParser = function (type, data) {
        // check if exists special parser
        if (type in special_parsers) {
            // yes! exists, so run it!
            return special_parsers[type](data);
        }

        // is Special Number
        else if (is_special_number(type)) {
            return like_as_data_view(data);
        }

        // is Error
        else if (is_error(type)) {
            return like_as_error(data);
        }

        // default parser
        return String(data);
    };

    // public API
    logger.parser.JSParser = JSParser;

}).call(this);
