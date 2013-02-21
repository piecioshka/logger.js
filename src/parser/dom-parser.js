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
        "Document",
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
        "Window",
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

        "BarInfo": function (o) {
            return "[BarInfo]";
        },

        "NamedNodeMap": function () {
            return logger.parser.JSParser["Object"].call(this, o);
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

}).call(this);