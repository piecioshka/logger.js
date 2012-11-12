/******************************************************************************/
/* Logger Parser */
/******************************************************************************/

if (typeof require !== "undefined") {
    var logger = require("./logger-core.js");
}

logger.parser = (function () {

    function parse_attrs(o) {
        var attrs = "",
            attrs_count = o.attributes.length;

        for (var i = 0; i < attrs_count; ++i) {
            var attr = o[i];

            attrs += attr.nodeName + "=\"" + attr.nodeValue + "\"";

            if (i < attrs_count - 1) {
                attrs += " ";
            }
        }

        return attrs;
    }

    var printer_dom = {
            "NamedNodeMap": function (o) {
                return printer_js["Object"](o);
            },

            /******************************************************************************/
            /* Node */
            /******************************************************************************/

            "Node": function (o) {

            },

            /******************************************************************************/
            /* Node ELEMENT_NODE 1 */
            /******************************************************************************/

            "Element": function (o) {
                return printer_js["Node"](o);
            },
            "HTMLElement": function (o) {
                return printer_js["Element"](o);
            },
            "HTMLDivElement": function (o) {
                return printer_js["HTMLElement"](o);
            },

            /******************************************************************************/
            /* Node ATTRIBUTE_NODE 2 */
            /******************************************************************************/

            "Attr": function (o) {
                return printer_js["Object"](o);
            }

            /******************************************************************************/
            /* Node TEXT_NODE 3 */
            /******************************************************************************/

            /******************************************************************************/
            /* Node CDATA_SECTION_NODE 4 */
            /******************************************************************************/

            /******************************************************************************/
            /* Node ENTITY_REFERENCE_NODE 5 */
            /******************************************************************************/

            /******************************************************************************/
            /* Node ENTITY_NODE 6 */
            /******************************************************************************/

            /******************************************************************************/
            /* Node PROCESSING_INSTRUCTION_NODE 7 */
            /******************************************************************************/

            /******************************************************************************/
            /* Node COMMENT_NODE 8 */
            /******************************************************************************/

            /******************************************************************************/
            /* Node DOCUMENT_NODE 9 */
            /******************************************************************************/

            /******************************************************************************/
            /* Node DOCUMENT_TYPE_NODE 10 */
            /******************************************************************************/

            /******************************************************************************/
            /* Node DOCUMENT_FRAGMENT_NODE 11 */
            /******************************************************************************/

            /******************************************************************************/
            /* Node NOTATION_NODE 12 */
            /******************************************************************************/
        },

        printer_bom = {
            "ArrayBuffer": function (o) {
                return o.toString();
            },
            "Attr": function (o) {
                return o.toString();
            },
            "Audio": function (o) {
                return o.toString();
            },
            "AudioProcessingEvent": function (o) {
                return o.toString();
            },
            "BeforeLoadEvent": function (o) {
                return o.toString();
            },
            "Blob": function (o) {
                return o.toString();
            },
            "CDATASection": function (o) {
                return o.toString();
            },
            "CSSCharsetRule": function (o) {
                return o.toString();
            },
            "CSSFontFaceRule": function (o) {
                return o.toString();
            },
            "CSSImportRule": function (o) {
                return o.toString();
            },
            "CSSMediaRule": function (o) {
                return o.toString();
            },
            "CSSPageRule": function (o) {
                return o.toString();
            },
            "CSSPrimitiveValue": function (o) {
                return o.toString();
            },
            "CSSRule": function (o) {
                return o.toString();
            },
            "CSSRuleList": function (o) {
                return o.toString();
            },
            "CSSStyleDeclaration": function (o) {
                return o.toString();
            },
            "CSSStyleRule": function (o) {
                return o.toString();
            },
            "CSSStyleSheet": function (o) {
                return o.toString();
            },
            "CSSValue": function (o) {
                return o.toString();
            },
            "CSSValueList": function (o) {
                return o.toString();
            },
            "CanvasGradient": function (o) {
                return o.toString();
            },
            "CanvasPattern": function (o) {
                return o.toString();
            },
            "CanvasRenderingContext2D": function (o) {
                return o.toString();
            },
            "CharacterData": function (o) {
                return o.toString();
            },
            "ClientRect": function (o) {
                return o.toString();
            },
            "ClientRectList": function (o) {
                return o.toString();
            },
            "Clipboard": function (o) {
                return o.toString();
            },
            "CloseEvent": function (o) {
                return o.toString();
            },
            "Comment": function (o) {
                return o.toString();
            },
            "CompositionEvent": function (o) {
                return o.toString();
            },
            "Counter": function (o) {
                return o.toString();
            },
            "CustomEvent": function (o) {
                return o.toString();
            },
            "DOMException": function (o) {
                return o.toString();
            },
            "DOMImplementation": function (o) {
                return o.toString();
            },
            "DOMParser": function (o) {
                return o.toString();
            },
            "DOMSettableTokenList": function (o) {
                return o.toString();
            },
            "DOMStringList": function (o) {
                return o.toString();
            },
            "DOMStringMap": function (o) {
                return o.toString();
            },
            "DOMTokenList": function (o) {
                return o.toString();
            },
            "DataView": function (o) {
                return o.toString();
            },
            "DeviceOrientationEvent": function (o) {
                return o.toString();
            },
            "Document": function (o) {
                return o.toString();
            },
            "DocumentFragment": function (o) {
                return o.toString();
            },
            "DocumentType": function (o) {
                return o.toString();
            },
            "Element": function (o) {
                return o.toString();
            },
            "Entity": function (o) {
                return o.toString();
            },
            "EntityReference": function (o) {
            },
            "ErrorEvent": function (o) {
                return o.toString();
            },
            "Event": function (o) {
                return o.toString();
            },
            "EventException": function (o) {
                return o.toString();
            },
            "EventSource": function (o) {
                return o.toString();
            },
            "File": function (o) {
                return o.toString();
            },
            "FileError": function (o) {
                return o.toString();
            },
            "FileList": function (o) {
                return o.toString();
            },
            "FileReader": function (o) {
                return o.toString();
            },
            "Float32Array": function (o) {
                return o.toString();
            },
            "Float64Array": function (o) {
                return o.toString();
            },
            "FormData": function (o) {
                return o.toString();
            },
            "HTMLAllCollection": function (o) {
                return o.toString();
            },
            "HTMLAnchorElement": function (o) {
                return o.toString();
            },
            "HTMLAppletElement": function (o) {
                return o.toString();
            },
            "HTMLAreaElement": function (o) {
                return o.toString();
            },
            "HTMLAudioElement": function (o) {
                return o.toString();
            },
            "HTMLBRElement": function (o) {
                return o.toString();
            },
            "HTMLBaseElement": function (o) {
                return o.toString();
            },
            "HTMLBaseFontElement": function (o) {
                return o.toString();
            },
            "HTMLBodyElement": function (o) {
                return o.toString();
            },
            "HTMLButtonElement": function (o) {
                return o.toString();
            },
            "HTMLCanvasElement": function (o) {
                return o.toString();
            },
            "HTMLCollection": function (o) {
                return o.toString();
            },
            "HTMLDListElement": function (o) {
                return o.toString();
            },
            "HTMLDataListElement": function (o) {
                return o.toString();
            },
            "HTMLDirectoryElement": function (o) {
                return o.toString();
            },
            "HTMLDivElement": function (o) {
                return o.toString();
            },
            "HTMLDocument": function (o) {
                return o.toString();
            },
            "HTMLElement": function (o) {
                return o.toString();
            },
            "HTMLEmbedElement": function (o) {
                return o.toString();
            },
            "HTMLFieldSetElement": function (o) {
                return o.toString();
            },
            "HTMLFontElement": function (o) {
                return o.toString();
            },
            "HTMLFormElement": function (o) {
                return o.toString();
            },
            "HTMLFrameElement": function (o) {
                return o.toString();
            },
            "HTMLFrameSetElement": function (o) {
                return o.toString();
            },
            "HTMLHRElement": function (o) {
                return o.toString();
            },
            "HTMLHeadElement": function (o) {
                return o.toString();
            },
            "HTMLHeadingElement": function (o) {
                return o.toString();
            },
            "HTMLHtmlElement": function (o) {
                return o.toString();
            },
            "HTMLIFrameElement": function (o) {
                return o.toString();
            },
            "HTMLImageElement": function (o) {
                return o.toString();
            },
            "HTMLInputElement": function (o) {
                return o.toString();
            },
            "HTMLKeygenElement": function (o) {
                return o.toString();
            },
            "HTMLLIElement": function (o) {
                return o.toString();
            },
            "HTMLLabelElement": function (o) {
                return o.toString();
            },
            "HTMLLegendElement": function (o) {
                return o.toString();
            },
            "HTMLLinkElement": function (o) {
                return o.toString();
            },
            "HTMLMapElement": function (o) {
                return o.toString();
            },
            "HTMLMarqueeElement": function (o) {
                return o.toString();
            },
            "HTMLMediaElement": function (o) {
                return o.toString();
            },
            "HTMLMenuElement": function (o) {
                return o.toString();
            },
            "HTMLMetaElement": function (o) {
                return o.toString();
            },
            "HTMLMeterElement": function (o) {
                return o.toString();
            },
            "HTMLModElement": function (o) {
                return o.toString();
            },
            "HTMLOListElement": function (o) {
                return o.toString();
            },
            "HTMLObjectElement": function (o) {
                return o.toString();
            },
            "HTMLOptGroupElement": function (o) {
                return o.toString();
            },
            "HTMLOptionElement": function (o) {
                return o.toString();
            },
            "HTMLOutputElement": function (o) {
                return o.toString();
            },
            "HTMLParagraphElement": function (o) {
                return o.toString();
            },
            "HTMLParamElement": function (o) {
                return o.toString();
            },
            "HTMLPreElement": function (o) {
                return o.toString();
            },
            "HTMLProgressElement": function (o) {
                return o.toString();
            },
            "HTMLQuoteElement": function (o) {
                return o.toString();
            },
            "HTMLScriptElement": function (o) {
                return o.toString();
            },
            "HTMLSelectElement": function (o) {
                return o.toString();
            },
            "HTMLSourceElement": function (o) {
                return o.toString();
            },
            "HTMLSpanElement": function (o) {
                return o.toString();
            },
            "HTMLStyleElement": function (o) {
                return o.toString();
            },
            "HTMLTableCaptionElement": function (o) {
                return o.toString();
            },
            "HTMLTableCellElement": function (o) {
                return o.toString();
            },
            "HTMLTableColElement": function (o) {
                return o.toString();
            },
            "HTMLTableElement": function (o) {
                return o.toString();
            },
            "HTMLTableRowElement": function (o) {
                return o.toString();
            },
            "HTMLTableSectionElement": function (o) {
                return o.toString();
            },
            "HTMLTextAreaElement": function (o) {
                return o.toString();
            },
            "HTMLTitleElement": function (o) {
                return o.toString();
            },
            "HTMLUListElement": function (o) {
                return o.toString();
            },
            "HTMLUnknownElement": function (o) {
                return o.toString();
            },
            "HTMLVideoElement": function (o) {
                return o.toString();
            },
            "HashChangeEvent": function (o) {
                return o.toString();
            },
            "IceCandidate": function (o) {
                return o.toString();
            },
            "Image": function (o) {
                return o.toString();
            },
            "ImageData": function (o) {
                return o.toString();
            },
            "Int8Array": function (o) {
                return o.toString();
            },
            "Int16Array": function (o) {
                return o.toString();
            },
            "Int32Array": function (o) {
                return o.toString();
            },
            "KeyboardEvent": function (o) {
                return o.toString();
            },
            "MediaController": function (o) {
                return o.toString();
            },
            "MediaError": function (o) {
                return o.toString();
            },
            "MediaList": function (o) {
                return o.toString();
            },
            "MediaStreamEvent": function (o) {
                return o.toString();
            },
            "MessageChannel": function (o) {
                return o.toString();
            },
            "MessageEvent": function (o) {
                return o.toString();
            },
            "MessagePort": function (o) {
                return o.toString();
            },
            "MimeType": function (o) {
                return o.toString();
            },
            "MimeTypeArray": function (o) {
                return o.toString();
            },
            "MouseEvent": function (o) {
                return o.toString();
            },
            "MutationEvent": function (o) {
                return o.toString();
            },
            "NamedNodeMap": function (o) {
                return o.toString();
            },
            "Node": function (o) {
                return o.toString();
            },
            "NodeFilter": function (o) {
                return o.toString();
            },
            "NodeList": function (o) {
                return o.toString();
            },
            "Notation": function (o) {
                return o.toString();
            },
            "Notification": function (o) {
                return o.toString();
            },
            "OfflineAudioCompletionEvent": function (o) {
                return o.toString();
            },
            "Option": function (o) {
                return o.toString();
            },
            "OverflowEvent": function (o) {
                return o.toString();
            },
            "PageTransitionEvent": function (o) {
                return o.toString();
            },
            "Plugin": function (o) {
                return o.toString();
            },
            "PluginArray": function (o) {
                return o.toString();
            },
            "PopStateEvent": function (o) {
                return o.toString();
            },
            "ProcessingInstruction": function (o) {
                return o.toString();
            },
            "ProgressEvent": function (o) {
                return o.toString();
            },
            "RGBColor": function (o) {
                return o.toString();
            },
            "Range": function (o) {
                return o.toString();
            },
            "RangeException": function (o) {
                return o.toString();
            },
            "Rect": function (o) {
                return o.toString();
            },
            "SQLException": function (o) {
                return o.toString();
            },
            "SVGAElement": function (o) {
                return o.toString();
            },
            "SVGAltGlyphDefElement": function (o) {
                return o.toString();
            },
            "SVGAltGlyphElement": function (o) {
                return o.toString();
            },
            "SVGAltGlyphItemElement": function (o) {
                return o.toString();
            },
            "SVGAngle": function (o) {
                return o.toString();
            },
            "SVGAnimateColorElement": function (o) {
                return o.toString();
            },
            "SVGAnimateElement": function (o) {
                return o.toString();
            },
            "SVGAnimateMotionElement": function (o) {
                return o.toString();
            },
            "SVGAnimateTransformElement": function (o) {
                return o.toString();
            },
            "SVGAnimatedAngle": function (o) {
                return o.toString();
            },
            "SVGAnimatedBoolean": function (o) {
                return o.toString();
            },
            "SVGAnimatedEnumeration": function (o) {
                return o.toString();
            },
            "SVGAnimatedInteger": function (o) {
                return o.toString();
            },
            "SVGAnimatedLength": function (o) {
                return o.toString();
            },
            "SVGAnimatedLengthList": function (o) {
                return o.toString();
            },
            "SVGAnimatedNumber": function (o) {
                return o.toString();
            },
            "SVGAnimatedNumberList": function (o) {
                return o.toString();
            },
            "SVGAnimatedPreserveAspectRatio": function (o) {
                return o.toString();
            },
            "SVGAnimatedRect": function (o) {
                return o.toString();
            },
            "SVGAnimatedString": function (o) {
                return o.toString();
            },
            "SVGAnimatedTransformList": function (o) {
                return o.toString();
            },
            "SVGCircleElement": function (o) {
                return o.toString();
            },
            "SVGClipPathElement": function (o) {
                return o.toString();
            },
            "SVGColor": function (o) {
                return o.toString();
            },
            "SVGComponentTransferFunctionElement": function (o) {
                return o.toString();
            },
            "SVGCursorElement": function (o) {
                return o.toString();
            },
            "SVGDefsElement": function (o) {
                return o.toString();
            },
            "SVGDescElement": function (o) {
                return o.toString();
            },
            "SVGDocument": function (o) {
                return o.toString();
            },
            "SVGElement": function (o) {
                return o.toString();
            },
            "SVGElementInstance": function (o) {
                return o.toString();
            },
            "SVGElementInstanceList": function (o) {
                return o.toString();
            },
            "SVGEllipseElement": function (o) {
                return o.toString();
            },
            "SVGException": function (o) {
                return o.toString();
            },
            "SVGFEBlendElement": function (o) {
                return o.toString();
            },
            "SVGFEColorMatrixElement": function (o) {
                return o.toString();
            },
            "SVGFEComponentTransferElement": function (o) {
                return o.toString();
            },
            "SVGFECompositeElement": function (o) {
                return o.toString();
            },
            "SVGFEConvolveMatrixElement": function (o) {
                return o.toString();
            },
            "SVGFEDiffuseLightingElement": function (o) {
                return o.toString();
            },
            "SVGFEDisplacementMapElement": function (o) {
                return o.toString();
            },
            "SVGFEDistantLightElement": function (o) {
                return o.toString();
            },
            "SVGFEDropShadowElement": function (o) {
                return o.toString();
            },
            "SVGFEFloodElement": function (o) {
                return o.toString();
            },
            "SVGFEFuncAElement": function (o) {
                return o.toString();
            },
            "SVGFEFuncBElement": function (o) {
                return o.toString();
            },
            "SVGFEFuncGElement": function (o) {
                return o.toString();
            },
            "SVGFEFuncRElement": function (o) {
                return o.toString();
            },
            "SVGFEGaussianBlurElement": function (o) {
                return o.toString();
            },
            "SVGFEImageElement": function (o) {
                return o.toString();
            },
            "SVGFEMergeElement": function (o) {
                return o.toString();
            },
            "SVGFEMergeNodeElement": function (o) {
                return o.toString();
            },
            "SVGFEMorphologyElement": function (o) {
                return o.toString();
            },
            "SVGFEOffsetElement": function (o) {
                return o.toString();
            },
            "SVGFEPointLightElement": function (o) {
                return o.toString();
            },
            "SVGFESpecularLightingElement": function (o) {
                return o.toString();
            },
            "SVGFESpotLightElement": function (o) {
                return o.toString();
            },
            "SVGFETileElement": function (o) {
                return o.toString();
            },
            "SVGFETurbulenceElement": function (o) {
                return o.toString();
            },
            "SVGFilterElement": function (o) {
                return o.toString();
            },
            "SVGFontElement": function (o) {
                return o.toString();
            },
            "SVGFontFaceElement": function (o) {
                return o.toString();
            },
            "SVGFontFaceFormatElement": function (o) {
                return o.toString();
            },
            "SVGFontFaceNameElement": function (o) {
                return o.toString();
            },
            "SVGFontFaceSrcElement": function (o) {
                return o.toString();
            },
            "SVGFontFaceUriElement": function (o) {
                return o.toString();
            },
            "SVGForeignObjectElement": function (o) {
                return o.toString();
            },
            "SVGGElement": function (o) {
                return o.toString();
            },
            "SVGGlyphElement": function (o) {
                return o.toString();
            },
            "SVGGlyphRefElement": function (o) {
                return o.toString();
            },
            "SVGGradientElement": function (o) {
                return o.toString();
            },
            "SVGHKernElement": function (o) {
                return o.toString();
            },
            "SVGImageElement": function (o) {
                return o.toString();
            },
            "SVGLength": function (o) {
                return o.toString();
            },
            "SVGLengthList": function (o) {
                return o.toString();
            },
            "SVGLineElement": function (o) {
                return o.toString();
            },
            "SVGLinearGradientElement": function (o) {
                return o.toString();
            },
            "SVGMPathElement": function (o) {
                return o.toString();
            },
            "SVGMarkerElement": function (o) {
                return o.toString();
            },
            "SVGMaskElement": function (o) {
                return o.toString();
            },
            "SVGMatrix": function (o) {
                return o.toString();
            },
            "SVGMetadataElement": function (o) {
                return o.toString();
            },
            "SVGMissingGlyphElement": function (o) {
                return o.toString();
            },
            "SVGNumber": function (o) {
                return o.toString();
            },
            "SVGNumberList": function (o) {
                return o.toString();
            },
            "SVGPaint": function (o) {
                return o.toString();
            },
            "SVGPathElement": function (o) {
                return o.toString();
            },
            "SVGPathSeg": function (o) {
                return o.toString();
            },
            "SVGPathSegArcAbs": function (o) {
                return o.toString();
            },
            "SVGPathSegArcRel": function (o) {
                return o.toString();
            },
            "SVGPathSegClosePath": function (o) {
                return o.toString();
            },
            "SVGPathSegCurvetoCubicAbs": function (o) {
                return o.toString();
            },
            "SVGPathSegCurvetoCubicRel": function (o) {
                return o.toString();
            },
            "SVGPathSegCurvetoCubicSmoothAbs": function (o) {
                return o.toString();
            },
            "SVGPathSegCurvetoCubicSmoothRel": function (o) {
                return o.toString();
            },
            "SVGPathSegCurvetoQuadraticAbs": function (o) {
                return o.toString();
            },
            "SVGPathSegCurvetoQuadraticRel": function (o) {
                return o.toString();
            },
            "SVGPathSegCurvetoQuadraticSmoothAbs": function (o) {
                return o.toString();
            },
            "SVGPathSegCurvetoQuadraticSmoothRel": function (o) {
                return o.toString();
            },
            "SVGPathSegLinetoAbs": function (o) {
                return o.toString();
            },
            "SVGPathSegLinetoHorizontalAbs": function (o) {
                return o.toString();
            },
            "SVGPathSegLinetoHorizontalRel": function (o) {
                return o.toString();
            },
            "SVGPathSegLinetoRel": function (o) {
                return o.toString();
            },
            "SVGPathSegLinetoVerticalAbs": function (o) {
                return o.toString();
            },
            "SVGPathSegLinetoVerticalRel": function (o) {
                return o.toString();
            },
            "SVGPathSegList": function (o) {
                return o.toString();
            },
            "SVGPathSegMovetoAbs": function (o) {
                return o.toString();
            },
            "SVGPathSegMovetoRel": function (o) {
                return o.toString();
            },
            "SVGPatternElement": function (o) {
                return o.toString();
            },
            "SVGPoint": function (o) {
                return o.toString();
            },
            "SVGPointList": function (o) {
                return o.toString();
            },
            "SVGPolygonElement": function (o) {
                return o.toString();
            },
            "SVGPolylineElement": function (o) {
                return o.toString();
            },
            "SVGPreserveAspectRatio": function (o) {
                return o.toString();
            },
            "SVGRadialGradientElement": function (o) {
                return o.toString();
            },
            "SVGRect": function (o) {
                return o.toString();
            },
            "SVGRectElement": function (o) {
                return o.toString();
            },
            "SVGRenderingIntent": function (o) {
                return o.toString();
            },
            "SVGSVGElement": function (o) {
                return o.toString();
            },
            "SVGScriptElement": function (o) {
                return o.toString();
            },
            "SVGSetElement": function (o) {
                return o.toString();
            },
            "SVGStopElement": function (o) {
                return o.toString();
            },
            "SVGStringList": function (o) {
                return o.toString();
            },
            "SVGStyleElement": function (o) {
                return o.toString();
            },
            "SVGSwitchElement": function (o) {
                return o.toString();
            },
            "SVGSymbolElement": function (o) {
                return o.toString();
            },
            "SVGTRefElement": function (o) {
                return o.toString();
            },
            "SVGTSpanElement": function (o) {
                return o.toString();
            },
            "SVGTextContentElement": function (o) {
                return o.toString();
            },
            "SVGTextElement": function (o) {
                return o.toString();
            },
            "SVGTextPathElement": function (o) {
                return o.toString();
            },
            "SVGTextPositioningElement": function (o) {
                return o.toString();
            },
            "SVGTitleElement": function (o) {
                return o.toString();
            },
            "SVGTransform": function (o) {
                return o.toString();
            },
            "SVGTransformList": function (o) {
                return o.toString();
            },
            "SVGUnitTypes": function (o) {
                return o.toString();
            },
            "SVGUseElement": function (o) {
                return o.toString();
            },
            "SVGVKernElement": function (o) {
                return o.toString();
            },
            "SVGViewElement": function (o) {
                return o.toString();
            },
            "SVGViewSpec": function (o) {
                return o.toString();
            },
            "SVGZoomAndPan": function (o) {
                return o.toString();
            },
            "SVGZoomEvent": function (o) {
                return o.toString();
            },
            "Selection": function (o) {
                return o.toString();
            },
            "SessionDescription": function (o) {
                return o.toString();
            },
            "SharedWorker": function (o) {
                return o.toString();
            },
            "SpeechInputEvent": function (o) {
                return o.toString();
            },
            "Storage": function (o) {
                return o.toString();
            },
            "StorageEvent": function (o) {
                return o.toString();
            },
            "StyleSheet": function (o) {
                return o.toString();
            },
            "StyleSheetList": function (o) {
                return o.toString();
            },
            "Text": function (o) {
                return o.toString();
            },
            "TextEvent": function (o) {
                return o.toString();
            },
            "TextMetrics": function (o) {
                return o.toString();
            },
            "TimeRanges": function (o) {
                return o.toString();
            },
            "TouchEvent": function (o) {
                return o.toString();
            },
            "UIEvent": function (o) {
                return o.toString();
            },
            "Uint8Array": function (o) {
                return o.toString();
            },
            "Uint8ClampedArray": function (o) {
                return o.toString();
            },
            "Uint16Array": function (o) {
                return o.toString();
            },
            "Uint32Array": function (o) {
                return o.toString();
            },
            "WebGLActiveInfo": function (o) {
                return o.toString();
            },
            "WebGLBuffer": function (o) {
                return o.toString();
            },
            "WebGLContextEvent": function (o) {
                return o.toString();
            },
            "WebGLFramebuffer": function (o) {
                return o.toString();
            },
            "WebGLProgram": function (o) {
                return o.toString();
            },
            "WebGLRenderbuffer": function (o) {
                return o.toString();
            },
            "WebGLRenderingContext": function (o) {
                return o.toString();
            },
            "WebGLShader": function (o) {
                return o.toString();
            },
            "WebGLShaderPrecisionFormat": function (o) {
                return o.toString();
            },
            "WebGLTexture": function (o) {
                return o.toString();
            },
            "WebGLUniformLocation": function (o) {
                return o.toString();
            },
            "WebKitAnimationEvent": function (o) {
                return o.toString();
            },
            "WebKitBlobBuilder": function (o) {
                return o.toString();
            },
            "WebKitCSSFilterValue": function (o) {
                return o.toString();
            },
            "WebKitCSSKeyframeRule": function (o) {
                return o.toString();
            },
            "WebKitCSSKeyframesRule": function (o) {
                return o.toString();
            },
            "WebKitCSSMatrix": function (o) {
                return o.toString();
            },
            "WebKitCSSRegionRule": function (o) {
                return o.toString();
            },
            "WebKitCSSTransformValue": function (o) {
                return o.toString();
            },
            "WebKitIntent": function (o) {
                return o.toString();
            },
            "WebKitMutationObserver": function (o) {
                return o.toString();
            },
            "WebKitPoint": function (o) {
                return o.toString();
            },
            "WebKitTransitionEvent": function (o) {
                return o.toString();
            },
            "WebSocket": function (o) {
                return o.toString();
            },
            "WheelEvent": function (o) {
                return o.toString();
            },
            "Window": function (o) {
                return "[Global]";
            },
            "Worker": function (o) {
                return o.toString();
            },
            "XMLDocument": function (o) {
                return o.toString();
            },
            "XMLHttpRequest": function (o) {
                return "[XMLHttpRequest]";
            },
            "XMLHttpRequestException": function (o) {
                return o.toString();
            },
            "XMLHttpRequestProgressEvent": function (o) {
                return o.toString();
            },
            "XMLHttpRequestUpload": function (o) {
                return o.toString();
            },
            "XMLSerializer": function (o) {
                return o.toString();
            },
            "XPathEvaluator": function (o) {
                return o.toString();
            },
            "XPathException": function (o) {
                return o.toString();
            },
            "XPathResult": function (o) {
                return o.toString();
            },
            "XSLTProcessor": function (o) {
                return o.toString();
            },
            "clientInformation": function (o) {
                return o.toString();
            },
            "console": function (o) {
                return o.toString();
            },
            "crypto": function (o) {
                return o.toString();
            },
            "document": function (o) {
                return o.toString();
            },
            "frames": function (o) {
                return o.toString();
            },
            "history": function (o) {
                return o.toString();
            },
            "localStorage": function (o) {
                return o.toString();
            },
            "location": function (o) {
                return o.toString();
            },
            "locationbar": function (o) {
                return o.toString();
            },
            "menubar": function (o) {
                return o.toString();
            },
            "navigator": function (o) {
                return o.toString();
            },
            "parent": function (o) {
                return o.toString();
            },
            "performance": function (o) {
                return o.toString();
            },
            "personalbar": function (o) {
                return o.toString();
            },
            "screen": function (o) {
                return o.toString();
            },
            "scrollbars": function (o) {
                return o.toString();
            },
            "self": function (o) {
                return o.toString();
            },
            "sessionStorage": function (o) {
                return o.toString();
            },
            "statusbar": function (o) {
                return o.toString();
            },
            "styleMedia": function (o) {
                return o.toString();
            },
            "toolbar": function (o) {
                return o.toString();
            },
            "top": function (o) {
                return o.toString();
            },
            "v8Intl": function (o) {
                return o.toString();
            },
            "webkitAudioContext": function (o) {
                return o.toString();
            },
            "webkitAudioPannerNode": function (o) {
                return o.toString();
            },
            "webkitCancelAnimationFrame": function (o) {
                return o.toString();
            },
            "webkitCancelRequestAnimationFrame": function (o) {
                return o.toString();
            },
            "webkitConvertPointFromNodeToPage": function (o) {
                return o.toString();
            },
            "webkitConvertPointFromPageToNode": function (o) {
                return o.toString();
            },
            "webkitIDBCursor": function (o) {
                return o.toString();
            },
            "webkitIDBDatabase": function (o) {
                return o.toString();
            },
            "webkitIDBDatabaseException": function (o) {
                return o.toString();
            },
            "webkitIDBFactory": function (o) {
                return o.toString();
            },
            "webkitIDBIndex": function (o) {
                return o.toString();
            },
            "webkitIDBKeyRange": function (o) {
                return o.toString();
            },
            "webkitIDBObjectStore": function (o) {
                return o.toString();
            },
            "webkitIDBRequest": function (o) {
                return o.toString();
            },
            "webkitIDBTransaction": function (o) {
                return o.toString();
            },
            "webkitIndexedDB": function (o) {
                return o.toString();
            },
            "webkitMediaStream": function (o) {
                return o.toString();
            },
            "webkitNotifications": function (o) {
                return o.toString();
            },
            "webkitPostMessage": function (o) {
                return o.toString();
            },
            "webkitRequestAnimationFrame": function (o) {
                return o.toString();
            },
            "webkitRequestFileSystem": function (o) {
                return o.toString();
            },
            "webkitResolveLocalFileSystemURL": function (o) {
                return o.toString();
            },
            "webkitStorageInfo": function (o) {
                //StorageInfo
                return o.toString();
            },
            "webkitURL": function (o) {
                return o.toString();
            },
            "window": function (o) {
                return o.toString();
            }
        },

        printer_js = {

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
                return printer_js["Array"](o);
            },
            "Boolean": function (o) {
                return String(o);
            },
            "Date": function (o) {
                return "Date: " + o.toString();
            },
            "Function": function (o) {
                var s = o.toString(),
                    pre = s.split("\n")[0],
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
            "Float32Array": function (o) {
                return printer_js["DataView"](o);
            },
            "Float64Array": function (o) {
                return printer_js["DataView"](o);
            },
            "Int16Array": function (o) {
                return printer_js["DataView"](o);
            },
            "Int32Array": function (o) {
                return printer_js["DataView"](o);
            },
            "Int8Array": function (o) {
                return printer_js["DataView"](o);
            },
            "Uint16Array": function (o) {
                return printer_js["DataView"](o);
            },
            "Uint32Array": function (o) {
                return printer_js["DataView"](o);
            },
            "Uint8Array": function (o) {
                return printer_js["DataView"](o);
            },
            "Uint8ClampedArray": function (o) {
                return printer_js["DataView"](o);
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
            "EvalError": function (o) {
                return printer_js["Error"](o);
            },
            "RangeError": function (o) {
                return printer_js["Error"](o);
            },
            "ReferenceError": function (o) {
                return printer_js["Error"](o);
            },
            "SyntaxError": function (o) {
                return printer_js["Error"](o);
            },
            "TypeError": function (o) {
                return printer_js["Error"](o);
            },
            "URIError": function (o) {
                return printer_js["Error"](o);
            },

            /******************************************************************************/
            /* Other */
            /******************************************************************************/

            "Infinity": function (o) {
                return String(o);
            },
            "JSON": function (o) {
                return printer_js["Object"](o);
            },
            "Math": function (o) {
                return printer_js["Object"](o);
            },
            "NaN": function (o) {
                return String(o);
            },
            "Null": function (o) {
                return String(o);
            },
            "undefined": function (o) {
                return String(o);
            }
        };

    return {
        dom: printer_dom,
        bom: printer_bom,
        js: printer_js
    };
}());

