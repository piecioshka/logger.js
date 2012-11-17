/******************************************************************************/
/* TEST CASE: logger.bom(): Chrome SVG */
/******************************************************************************/

if (typeof require !== "undefined") {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../../src/logger-core.js");
}

buster.testCase("logger/bom/chrome SVG", {
    "SVGAElement": function () {
        // function SVGAElement() { [native code] }
        assert.equals(logger(new SVGAElement()), "[SVGAElement]", "SVGAElement");
    },
    "SVGAltGlyphDefElement": function () {
        // function SVGAltGlyphDefElement() { [native code] }
        assert.equals(logger(new SVGAltGlyphDefElement()), "[SVGAltGlyphDefElement]", "SVGAltGlyphDefElement");
    },
    "SVGAltGlyphElement": function () {
        // function SVGAltGlyphElement() { [native code] }
        assert.equals(logger(new SVGAltGlyphElement()), "[SVGAltGlyphElement]", "SVGAltGlyphElement");
    },
    "SVGAltGlyphItemElement": function () {
        // function SVGAltGlyphItemElement() { [native code] }
        assert.equals(logger(new SVGAltGlyphItemElement()), "[SVGAltGlyphItemElement]", "SVGAltGlyphItemElement");
    },
    "SVGAngle": function () {
        // function SVGAngle() { [native code] }
        assert.equals(logger(new SVGAngle()), "[SVGAngle]", "SVGAngle");
    },
    "SVGAnimateColorElement": function () {
        // function SVGAnimateColorElement() { [native code] }
        assert.equals(logger(new SVGAnimateColorElement()), "[SVGAnimateColorElement]", "SVGAnimateColorElement");
    },
    "SVGAnimateElement": function () {
        // function SVGAnimateElement() { [native code] }
        assert.equals(logger(new SVGAnimateElement()), "[SVGAnimateElement]", "SVGAnimateElement");
    },
    "SVGAnimateMotionElement": function () {
        // function SVGAnimateMotionElement() { [native code] }
        assert.equals(logger(new SVGAnimateMotionElement()), "[SVGAnimateMotionElement]", "SVGAnimateMotionElement");
    },
    "SVGAnimateTransformElement": function () {
        // function SVGAnimateTransformElement() { [native code] }
        assert.equals(logger(new SVGAnimateTransformElement()), "[SVGAnimateTransformElement]", "SVGAnimateTransformElement");
    },
    "SVGAnimatedAngle": function () {
        // function SVGAnimatedAngle() { [native code] }
        assert.equals(logger(new SVGAnimatedAngle()), "[SVGAnimatedAngle]", "SVGAnimatedAngle");
    },
    "SVGAnimatedBoolean": function () {
        // function SVGAnimatedBoolean() { [native code] }
        assert.equals(logger(new SVGAnimatedBoolean()), "[SVGAnimatedBoolean]", "SVGAnimatedBoolean");
    },
    "SVGAnimatedEnumeration": function () {
        // function SVGAnimatedEnumeration() { [native code] }
        assert.equals(logger(new SVGAnimatedEnumeration()), "[SVGAnimatedEnumeration]", "SVGAnimatedEnumeration");
    },
    "SVGAnimatedInteger": function () {
        // function SVGAnimatedInteger() { [native code] }
        assert.equals(logger(new SVGAnimatedInteger()), "[SVGAnimatedInteger]", "SVGAnimatedInteger");
    },
    "SVGAnimatedLength": function () {
        // function SVGAnimatedLength() { [native code] }
        assert.equals(logger(new SVGAnimatedLength()), "[SVGAnimatedLength]", "SVGAnimatedLength");
    },
    "SVGAnimatedLengthList": function () {
        // function SVGAnimatedLengthList() { [native code] }
        assert.equals(logger(new SVGAnimatedLengthList()), "[SVGAnimatedLengthList]", "SVGAnimatedLengthList");
    },
    "SVGAnimatedNumber": function () {
        // function SVGAnimatedNumber() { [native code] }
        assert.equals(logger(new SVGAnimatedNumber()), "[SVGAnimatedNumber]", "SVGAnimatedNumber");
    },
    "SVGAnimatedNumberList": function () {
        // function SVGAnimatedNumberList() { [native code] }
        assert.equals(logger(new SVGAnimatedNumberList()), "[SVGAnimatedNumberList]", "SVGAnimatedNumberList");
    },
    "SVGAnimatedPreserveAspectRatio": function () {
        // function SVGAnimatedPreserveAspectRatio() { [native code] }
        assert.equals(logger(new SVGAnimatedPreserveAspectRatio()), "[SVGAnimatedPreserveAspectRatio]", "SVGAnimatedPreserveAspectRatio");
    },
    "SVGAnimatedRect": function () {
        // function SVGAnimatedRect() { [native code] }
        assert.equals(logger(new SVGAnimatedRect()), "[SVGAnimatedRect]", "SVGAnimatedRect");
    },
    "SVGAnimatedString": function () {
        // function SVGAnimatedString() { [native code] }
        assert.equals(logger(new SVGAnimatedString()), "[SVGAnimatedString]", "SVGAnimatedString");
    },
    "SVGAnimatedTransformList": function () {
        // function SVGAnimatedTransformList() { [native code] }
        assert.equals(logger(new SVGAnimatedTransformList()), "[SVGAnimatedTransformList]", "SVGAnimatedTransformList");
    },
    "SVGCircleElement": function () {
        // function SVGCircleElement() { [native code] }
        assert.equals(logger(new SVGCircleElement()), "[SVGCircleElement]", "SVGCircleElement");
    },
    "SVGClipPathElement": function () {
        // function SVGClipPathElement() { [native code] }
        assert.equals(logger(new SVGClipPathElement()), "[SVGClipPathElement]", "SVGClipPathElement");
    },
    "SVGColor": function () {
        // function SVGColor() { [native code] }
        assert.equals(logger(new SVGColor()), "[SVGColor]", "SVGColor");
    },
    "SVGComponentTransferFunctionElement": function () {
        // function SVGComponentTransferFunctionElement() { [native code] }
        assert.equals(logger(new SVGComponentTransferFunctionElement()), "[SVGComponentTransferFunctionElement]", "SVGComponentTransferFunctionElement");
    },
    "SVGCursorElement": function () {
        // function SVGCursorElement() { [native code] }
        assert.equals(logger(new SVGCursorElement()), "[SVGCursorElement]", "SVGCursorElement");
    },
    "SVGDefsElement": function () {
        // function SVGDefsElement() { [native code] }
        assert.equals(logger(new SVGDefsElement()), "[SVGDefsElement]", "SVGDefsElement");
    },
    "SVGDescElement": function () {
        // function SVGDescElement() { [native code] }
        assert.equals(logger(new SVGDescElement()), "[SVGDescElement]", "SVGDescElement");
    },
    "SVGDocument": function () {
        // function SVGDocument() { [native code] }
        assert.equals(logger(new SVGDocument()), "[SVGDocument]", "SVGDocument");
    },
    "SVGElement": function () {
        // function SVGElement() { [native code] }
        assert.equals(logger(new SVGElement()), "[SVGElement]", "SVGElement");
    },
    "SVGElementInstance": function () {
        // function SVGElementInstance() { [native code] }
        assert.equals(logger(new SVGElementInstance()), "[SVGElementInstance]", "SVGElementInstance");
    },
    "SVGElementInstanceList": function () {
        // function SVGElementInstanceList() { [native code] }
        assert.equals(logger(new SVGElementInstanceList()), "[SVGElementInstanceList]", "SVGElementInstanceList");
    },
    "SVGEllipseElement": function () {
        // function SVGEllipseElement() { [native code] }
        assert.equals(logger(new SVGEllipseElement()), "[SVGEllipseElement]", "SVGEllipseElement");
    },
    "SVGException": function () {
        // function SVGException() { [native code] }
        assert.equals(logger(new SVGException()), "[SVGException]", "SVGException");
    },
    "SVGFEBlendElement": function () {
        // function SVGFEBlendElement() { [native code] }
        assert.equals(logger(new SVGFEBlendElement()), "[SVGFEBlendElement]", "SVGFEBlendElement");
    },
    "SVGFEColorMatrixElement": function () {
        // function SVGFEColorMatrixElement() { [native code] }
        assert.equals(logger(new SVGFEColorMatrixElement()), "[SVGFEColorMatrixElement]", "SVGFEColorMatrixElement");
    },
    "SVGFEComponentTransferElement": function () {
        // function SVGFEComponentTransferElement() { [native code] }
        assert.equals(logger(new SVGFEComponentTransferElement()), "[SVGFEComponentTransferElement]", "SVGFEComponentTransferElement");
    },
    "SVGFECompositeElement": function () {
        // function SVGFECompositeElement() { [native code] }
        assert.equals(logger(new SVGFECompositeElement()), "[SVGFECompositeElement]", "SVGFECompositeElement");
    },
    "SVGFEConvolveMatrixElement": function () {
        // function SVGFEConvolveMatrixElement() { [native code] }
        assert.equals(logger(new SVGFEConvolveMatrixElement()), "[SVGFEConvolveMatrixElement]", "SVGFEConvolveMatrixElement");
    },
    "SVGFEDiffuseLightingElement": function () {
        // function SVGFEDiffuseLightingElement() { [native code] }
        assert.equals(logger(new SVGFEDiffuseLightingElement()), "[SVGFEDiffuseLightingElement]", "SVGFEDiffuseLightingElement");
    },
    "SVGFEDisplacementMapElement": function () {
        // function SVGFEDisplacementMapElement() { [native code] }
        assert.equals(logger(new SVGFEDisplacementMapElement()), "[SVGFEDisplacementMapElement]", "SVGFEDisplacementMapElement");
    },
    "SVGFEDistantLightElement": function () {
        // function SVGFEDistantLightElement() { [native code] }
        assert.equals(logger(new SVGFEDistantLightElement()), "[SVGFEDistantLightElement]", "SVGFEDistantLightElement");
    },
    "SVGFEDropShadowElement": function () {
        // function SVGFEDropShadowElement() { [native code] }
        assert.equals(logger(new SVGFEDropShadowElement()), "[SVGFEDropShadowElement]", "SVGFEDropShadowElement");
    },
    "SVGFEFloodElement": function () {
        // function SVGFEFloodElement() { [native code] }
        assert.equals(logger(new SVGFEFloodElement()), "[SVGFEFloodElement]", "SVGFEFloodElement");
    },
    "SVGFEFuncAElement": function () {
        // function SVGFEFuncAElement() { [native code] }
        assert.equals(logger(new SVGFEFuncAElement()), "[SVGFEFuncAElement]", "SVGFEFuncAElement");
    },
    "SVGFEFuncBElement": function () {
        // function SVGFEFuncBElement() { [native code] }
        assert.equals(logger(new SVGFEFuncBElement()), "[SVGFEFuncBElement]", "SVGFEFuncBElement");
    },
    "SVGFEFuncGElement": function () {
        // function SVGFEFuncGElement() { [native code] }
        assert.equals(logger(new SVGFEFuncGElement()), "[SVGFEFuncGElement]", "SVGFEFuncGElement");
    },
    "SVGFEFuncRElement": function () {
        // function SVGFEFuncRElement() { [native code] }
        assert.equals(logger(new SVGFEFuncRElement()), "[SVGFEFuncRElement]", "SVGFEFuncRElement");
    },
    "SVGFEGaussianBlurElement": function () {
        // function SVGFEGaussianBlurElement() { [native code] }
        assert.equals(logger(new SVGFEGaussianBlurElement()), "[SVGFEGaussianBlurElement]", "SVGFEGaussianBlurElement");
    },
    "SVGFEImageElement": function () {
        // function SVGFEImageElement() { [native code] }
        assert.equals(logger(new SVGFEImageElement()), "[SVGFEImageElement]", "SVGFEImageElement");
    },
    "SVGFEMergeElement": function () {
        // function SVGFEMergeElement() { [native code] }
        assert.equals(logger(new SVGFEMergeElement()), "[SVGFEMergeElement]", "SVGFEMergeElement");
    },
    "SVGFEMergeNodeElement": function () {
        // function SVGFEMergeNodeElement() { [native code] }
        assert.equals(logger(new SVGFEMergeNodeElement()), "[SVGFEMergeNodeElement]", "SVGFEMergeNodeElement");
    },
    "SVGFEMorphologyElement": function () {
        // function SVGFEMorphologyElement() { [native code] }
        assert.equals(logger(new SVGFEMorphologyElement()), "[SVGFEMorphologyElement]", "SVGFEMorphologyElement");
    },
    "SVGFEOffsetElement": function () {
        // function SVGFEOffsetElement() { [native code] }
        assert.equals(logger(new SVGFEOffsetElement()), "[SVGFEOffsetElement]", "SVGFEOffsetElement");
    },
    "SVGFEPointLightElement": function () {
        // function SVGFEPointLightElement() { [native code] }
        assert.equals(logger(new SVGFEPointLightElement()), "[SVGFEPointLightElement]", "SVGFEPointLightElement");
    },
    "SVGFESpecularLightingElement": function () {
        // function SVGFESpecularLightingElement() { [native code] }
        assert.equals(logger(new SVGFESpecularLightingElement()), "[SVGFESpecularLightingElement]", "SVGFESpecularLightingElement");
    },
    "SVGFESpotLightElement": function () {
        // function SVGFESpotLightElement() { [native code] }
        assert.equals(logger(new SVGFESpotLightElement()), "[SVGFESpotLightElement]", "SVGFESpotLightElement");
    },
    "SVGFETileElement": function () {
        // function SVGFETileElement() { [native code] }
        assert.equals(logger(new SVGFETileElement()), "[SVGFETileElement]", "SVGFETileElement");
    },
    "SVGFETurbulenceElement": function () {
        // function SVGFETurbulenceElement() { [native code] }
        assert.equals(logger(new SVGFETurbulenceElement()), "[SVGFETurbulenceElement]", "SVGFETurbulenceElement");
    },
    "SVGFilterElement": function () {
        // function SVGFilterElement() { [native code] }
        assert.equals(logger(new SVGFilterElement()), "[SVGFilterElement]", "SVGFilterElement");
    },
    "SVGFontElement": function () {
        // function SVGFontElement() { [native code] }
        assert.equals(logger(new SVGFontElement()), "[SVGFontElement]", "SVGFontElement");
    },
    "SVGFontFaceElement": function () {
        // function SVGFontFaceElement() { [native code] }
        assert.equals(logger(new SVGFontFaceElement()), "[SVGFontFaceElement]", "SVGFontFaceElement");
    },
    "SVGFontFaceFormatElement": function () {
        // function SVGFontFaceFormatElement() { [native code] }
        assert.equals(logger(new SVGFontFaceFormatElement()), "[SVGFontFaceFormatElement]", "SVGFontFaceFormatElement");
    },
    "SVGFontFaceNameElement": function () {
        // function SVGFontFaceNameElement() { [native code] }
        assert.equals(logger(new SVGFontFaceNameElement()), "[SVGFontFaceNameElement]", "SVGFontFaceNameElement");
    },
    "SVGFontFaceSrcElement": function () {
        // function SVGFontFaceSrcElement() { [native code] }
        assert.equals(logger(new SVGFontFaceSrcElement()), "[SVGFontFaceSrcElement]", "SVGFontFaceSrcElement");
    },
    "SVGFontFaceUriElement": function () {
        // function SVGFontFaceUriElement() { [native code] }
        assert.equals(logger(new SVGFontFaceUriElement()), "[SVGFontFaceUriElement]", "SVGFontFaceUriElement");
    },
    "SVGForeignObjectElement": function () {
        // function SVGForeignObjectElement() { [native code] }
        assert.equals(logger(new SVGForeignObjectElement()), "[SVGForeignObjectElement]", "SVGForeignObjectElement");
    },
    "SVGGElement": function () {
        // function SVGGElement() { [native code] }
        assert.equals(logger(new SVGGElement()), "[SVGGElement]", "SVGGElement");
    },
    "SVGGlyphElement": function () {
        // function SVGGlyphElement() { [native code] }
        assert.equals(logger(new SVGGlyphElement()), "[SVGGlyphElement]", "SVGGlyphElement");
    },
    "SVGGlyphRefElement": function () {
        // function SVGGlyphRefElement() { [native code] }
        assert.equals(logger(new SVGGlyphRefElement()), "[SVGGlyphRefElement]", "SVGGlyphRefElement");
    },
    "SVGGradientElement": function () {
        // function SVGGradientElement() { [native code] }
        assert.equals(logger(new SVGGradientElement()), "[SVGGradientElement]", "SVGGradientElement");
    },
    "SVGHKernElement": function () {
        // function SVGHKernElement() { [native code] }
        assert.equals(logger(new SVGHKernElement()), "[SVGHKernElement]", "SVGHKernElement");
    },
    "SVGImageElement": function () {
        // function SVGImageElement() { [native code] }
        assert.equals(logger(new SVGImageElement()), "[SVGImageElement]", "SVGImageElement");
    },
    "SVGLength": function () {
        // function SVGLength() { [native code] }
        assert.equals(logger(new SVGLength()), "[SVGLength]", "SVGLength");
    },
    "SVGLengthList": function () {
        // function SVGLengthList() { [native code] }
        assert.equals(logger(new SVGLengthList()), "[SVGLengthList]", "SVGLengthList");
    },
    "SVGLineElement": function () {
        // function SVGLineElement() { [native code] }
        assert.equals(logger(new SVGLineElement()), "[SVGLineElement]", "SVGLineElement");
    },
    "SVGLinearGradientElement": function () {
        // function SVGLinearGradientElement() { [native code] }
        assert.equals(logger(new SVGLinearGradientElement()), "[SVGLinearGradientElement]", "SVGLinearGradientElement");
    },
    "SVGMPathElement": function () {
        // function SVGMPathElement() { [native code] }
        assert.equals(logger(new SVGMPathElement()), "[SVGMPathElement]", "SVGMPathElement");
    },
    "SVGMarkerElement": function () {
        // function SVGMarkerElement() { [native code] }
        assert.equals(logger(new SVGMarkerElement()), "[SVGMarkerElement]", "SVGMarkerElement");
    },
    "SVGMaskElement": function () {
        // function SVGMaskElement() { [native code] }
        assert.equals(logger(new SVGMaskElement()), "[SVGMaskElement]", "SVGMaskElement");
    },
    "SVGMatrix": function () {
        // function SVGMatrix() { [native code] }
        assert.equals(logger(new SVGMatrix()), "[SVGMatrix]", "SVGMatrix");
    },
    "SVGMetadataElement": function () {
        // function SVGMetadataElement() { [native code] }
        assert.equals(logger(new SVGMetadataElement()), "[SVGMetadataElement]", "SVGMetadataElement");
    },
    "SVGMissingGlyphElement": function () {
        // function SVGMissingGlyphElement() { [native code] }
        assert.equals(logger(new SVGMissingGlyphElement()), "[SVGMissingGlyphElement]", "SVGMissingGlyphElement");
    },
    "SVGNumber": function () {
        // function SVGNumber() { [native code] }
        assert.equals(logger(new SVGNumber()), "[SVGNumber]", "SVGNumber");
    },
    "SVGNumberList": function () {
        // function SVGNumberList() { [native code] }
        assert.equals(logger(new SVGNumberList()), "[SVGNumberList]", "SVGNumberList");
    },
    "SVGPaint": function () {
        // function SVGPaint() { [native code] }
        assert.equals(logger(new SVGPaint()), "[SVGPaint]", "SVGPaint");
    },
    "SVGPathElement": function () {
        // function SVGPathElement() { [native code] }
        assert.equals(logger(new SVGPathElement()), "[SVGPathElement]", "SVGPathElement");
    },
    "SVGPathSeg": function () {
        // function SVGPathSeg() { [native code] }
        assert.equals(logger(new SVGPathSeg()), "[SVGPathSeg]", "SVGPathSeg");
    },
    "SVGPathSegArcAbs": function () {
        // function SVGPathSegArcAbs() { [native code] }
        assert.equals(logger(new SVGPathSegArcAbs()), "[SVGPathSegArcAbs]", "SVGPathSegArcAbs");
    },
    "SVGPathSegArcRel": function () {
        // function SVGPathSegArcRel() { [native code] }
        assert.equals(logger(new SVGPathSegArcRel()), "[SVGPathSegArcRel]", "SVGPathSegArcRel");
    },
    "SVGPathSegClosePath": function () {
        // function SVGPathSegClosePath() { [native code] }
        assert.equals(logger(new SVGPathSegClosePath()), "[SVGPathSegClosePath]", "SVGPathSegClosePath");
    },
    "SVGPathSegCurvetoCubicAbs": function () {
        // function SVGPathSegCurvetoCubicAbs() { [native code] }
        assert.equals(logger(new SVGPathSegCurvetoCubicAbs()), "[SVGPathSegCurvetoCubicAbs]", "SVGPathSegCurvetoCubicAbs");
    },
    "SVGPathSegCurvetoCubicRel": function () {
        // function SVGPathSegCurvetoCubicRel() { [native code] }
        assert.equals(logger(new SVGPathSegCurvetoCubicRel()), "[SVGPathSegCurvetoCubicRel]", "SVGPathSegCurvetoCubicRel");
    },
    "SVGPathSegCurvetoCubicSmoothAbs": function () {
        // function SVGPathSegCurvetoCubicSmoothAbs() { [native code] }
        assert.equals(logger(new SVGPathSegCurvetoCubicSmoothAbs()), "[SVGPathSegCurvetoCubicSmoothAbs]", "SVGPathSegCurvetoCubicSmoothAbs");
    },
    "SVGPathSegCurvetoCubicSmoothRel": function () {
        // function SVGPathSegCurvetoCubicSmoothRel() { [native code] }
        assert.equals(logger(new SVGPathSegCurvetoCubicSmoothRel()), "[SVGPathSegCurvetoCubicSmoothRel]", "SVGPathSegCurvetoCubicSmoothRel");
    },
    "SVGPathSegCurvetoQuadraticAbs": function () {
        // function SVGPathSegCurvetoQuadraticAbs() { [native code] }
        assert.equals(logger(new SVGPathSegCurvetoQuadraticAbs()), "[SVGPathSegCurvetoQuadraticAbs]", "SVGPathSegCurvetoQuadraticAbs");
    },
    "SVGPathSegCurvetoQuadraticRel": function () {
        // function SVGPathSegCurvetoQuadraticRel() { [native code] }
        assert.equals(logger(new SVGPathSegCurvetoQuadraticRel()), "[SVGPathSegCurvetoQuadraticRel]", "SVGPathSegCurvetoQuadraticRel");
    },
    "SVGPathSegCurvetoQuadraticSmoothAbs": function () {
        // function SVGPathSegCurvetoQuadraticSmoothAbs() { [native code] }
        assert.equals(logger(new SVGPathSegCurvetoQuadraticSmoothAbs()), "[SVGPathSegCurvetoQuadraticSmoothAbs]", "SVGPathSegCurvetoQuadraticSmoothAbs");
    },
    "SVGPathSegCurvetoQuadraticSmoothRel": function () {
        // function SVGPathSegCurvetoQuadraticSmoothRel() { [native code] }
        assert.equals(logger(new SVGPathSegCurvetoQuadraticSmoothRel()), "[SVGPathSegCurvetoQuadraticSmoothRel]", "SVGPathSegCurvetoQuadraticSmoothRel");
    },
    "SVGPathSegLinetoAbs": function () {
        // function SVGPathSegLinetoAbs() { [native code] }
        assert.equals(logger(new SVGPathSegLinetoAbs()), "[SVGPathSegLinetoAbs]", "SVGPathSegLinetoAbs");
    },
    "SVGPathSegLinetoHorizontalAbs": function () {
        // function SVGPathSegLinetoHorizontalAbs() { [native code] }
        assert.equals(logger(new SVGPathSegLinetoHorizontalAbs()), "[SVGPathSegLinetoHorizontalAbs]", "SVGPathSegLinetoHorizontalAbs");
    },
    "SVGPathSegLinetoHorizontalRel": function () {
        // function SVGPathSegLinetoHorizontalRel() { [native code] }
        assert.equals(logger(new SVGPathSegLinetoHorizontalRel()), "[SVGPathSegLinetoHorizontalRel]", "SVGPathSegLinetoHorizontalRel");
    },
    "SVGPathSegLinetoRel": function () {
        // function SVGPathSegLinetoRel() { [native code] }
        assert.equals(logger(new SVGPathSegLinetoRel()), "[SVGPathSegLinetoRel]", "SVGPathSegLinetoRel");
    },
    "SVGPathSegLinetoVerticalAbs": function () {
        // function SVGPathSegLinetoVerticalAbs() { [native code] }
        assert.equals(logger(new SVGPathSegLinetoVerticalAbs()), "[SVGPathSegLinetoVerticalAbs]", "SVGPathSegLinetoVerticalAbs");
    },
    "SVGPathSegLinetoVerticalRel": function () {
        // function SVGPathSegLinetoVerticalRel() { [native code] }
        assert.equals(logger(new SVGPathSegLinetoVerticalRel()), "[SVGPathSegLinetoVerticalRel]", "SVGPathSegLinetoVerticalRel");
    },
    "SVGPathSegList": function () {
        // function SVGPathSegList() { [native code] }
        assert.equals(logger(new SVGPathSegList()), "[SVGPathSegList]", "SVGPathSegList");
    },
    "SVGPathSegMovetoAbs": function () {
        // function SVGPathSegMovetoAbs() { [native code] }
        assert.equals(logger(new SVGPathSegMovetoAbs()), "[SVGPathSegMovetoAbs]", "SVGPathSegMovetoAbs");
    },
    "SVGPathSegMovetoRel": function () {
        // function SVGPathSegMovetoRel() { [native code] }
        assert.equals(logger(new SVGPathSegMovetoRel()), "[SVGPathSegMovetoRel]", "SVGPathSegMovetoRel");
    },
    "SVGPatternElement": function () {
        // function SVGPatternElement() { [native code] }
        assert.equals(logger(new SVGPatternElement()), "[SVGPatternElement]", "SVGPatternElement");
    },
    "SVGPoint": function () {
        // function SVGPoint() { [native code] }
        assert.equals(logger(new SVGPoint()), "[SVGPoint]", "SVGPoint");
    },
    "SVGPointList": function () {
        // function SVGPointList() { [native code] }
        assert.equals(logger(new SVGPointList()), "[SVGPointList]", "SVGPointList");
    },
    "SVGPolygonElement": function () {
        // function SVGPolygonElement() { [native code] }
        assert.equals(logger(new SVGPolygonElement()), "[SVGPolygonElement]", "SVGPolygonElement");
    },
    "SVGPolylineElement": function () {
        // function SVGPolylineElement() { [native code] }
        assert.equals(logger(new SVGPolylineElement()), "[SVGPolylineElement]", "SVGPolylineElement");
    },
    "SVGPreserveAspectRatio": function () {
        // function SVGPreserveAspectRatio() { [native code] }
        assert.equals(logger(new SVGPreserveAspectRatio()), "[SVGPreserveAspectRatio]", "SVGPreserveAspectRatio");
    },
    "SVGRadialGradientElement": function () {
        // function SVGRadialGradientElement() { [native code] }
        assert.equals(logger(new SVGRadialGradientElement()), "[SVGRadialGradientElement]", "SVGRadialGradientElement");
    },
    "SVGRect": function () {
        // function SVGRect() { [native code] }
        assert.equals(logger(new SVGRect()), "[SVGRect]", "SVGRect");
    },
    "SVGRectElement": function () {
        // function SVGRectElement() { [native code] }
        assert.equals(logger(new SVGRectElement()), "[SVGRectElement]", "SVGRectElement");
    },
    "SVGRenderingIntent": function () {
        // function SVGRenderingIntent() { [native code] }
        assert.equals(logger(new SVGRenderingIntent()), "[SVGRenderingIntent]", "SVGRenderingIntent");
    },
    "SVGSVGElement": function () {
        // function SVGSVGElement() { [native code] }
        assert.equals(logger(new SVGSVGElement()), "[SVGSVGElement]", "SVGSVGElement");
    },
    "SVGScriptElement": function () {
        // function SVGScriptElement() { [native code] }
        assert.equals(logger(new SVGScriptElement()), "[SVGScriptElement]", "SVGScriptElement");
    },
    "SVGSetElement": function () {
        // function SVGSetElement() { [native code] }
        assert.equals(logger(new SVGSetElement()), "[SVGSetElement]", "SVGSetElement");
    },
    "SVGStopElement": function () {
        // function SVGStopElement() { [native code] }
        assert.equals(logger(new SVGStopElement()), "[SVGStopElement]", "SVGStopElement");
    },
    "SVGStringList": function () {
        // function SVGStringList() { [native code] }
        assert.equals(logger(new SVGStringList()), "[SVGStringList]", "SVGStringList");
    },
    "SVGStyleElement": function () {
        // function SVGStyleElement() { [native code] }
        assert.equals(logger(new SVGStyleElement()), "[SVGStyleElement]", "SVGStyleElement");
    },
    "SVGSwitchElement": function () {
        // function SVGSwitchElement() { [native code] }
        assert.equals(logger(new SVGSwitchElement()), "[SVGSwitchElement]", "SVGSwitchElement");
    },
    "SVGSymbolElement": function () {
        // function SVGSymbolElement() { [native code] }
        assert.equals(logger(new SVGSymbolElement()), "[SVGSymbolElement]", "SVGSymbolElement");
    },
    "SVGTRefElement": function () {
        // function SVGTRefElement() { [native code] }
        assert.equals(logger(new SVGTRefElement()), "[SVGTRefElement]", "SVGTRefElement");
    },
    "SVGTSpanElement": function () {
        // function SVGTSpanElement() { [native code] }
        assert.equals(logger(new SVGTSpanElement()), "[SVGTSpanElement]", "SVGTSpanElement");
    },
    "SVGTextContentElement": function () {
        // function SVGTextContentElement() { [native code] }
        assert.equals(logger(new SVGTextContentElement()), "[SVGTextContentElement]", "SVGTextContentElement");
    },
    "SVGTextElement": function () {
        // function SVGTextElement() { [native code] }
        assert.equals(logger(new SVGTextElement()), "[SVGTextElement]", "SVGTextElement");
    },
    "SVGTextPathElement": function () {
        // function SVGTextPathElement() { [native code] }
        assert.equals(logger(new SVGTextPathElement()), "[SVGTextPathElement]", "SVGTextPathElement");
    },
    "SVGTextPositioningElement": function () {
        // function SVGTextPositioningElement() { [native code] }
        assert.equals(logger(new SVGTextPositioningElement()), "[SVGTextPositioningElement]", "SVGTextPositioningElement");
    },
    "SVGTitleElement": function () {
        // function SVGTitleElement() { [native code] }
        assert.equals(logger(new SVGTitleElement()), "[SVGTitleElement]", "SVGTitleElement");
    },
    "SVGTransform": function () {
        // function SVGTransform() { [native code] }
        assert.equals(logger(new SVGTransform()), "[SVGTransform]", "SVGTransform");
    },
    "SVGTransformList": function () {
        // function SVGTransformList() { [native code] }
        assert.equals(logger(new SVGTransformList()), "[SVGTransformList]", "SVGTransformList");
    },
    "SVGUnitTypes": function () {
        // function SVGUnitTypes() { [native code] }
        assert.equals(logger(new SVGUnitTypes()), "[SVGUnitTypes]", "SVGUnitTypes");
    },
    "SVGUseElement": function () {
        // function SVGUseElement() { [native code] }
        assert.equals(logger(new SVGUseElement()), "[SVGUseElement]", "SVGUseElement");
    },
    "SVGVKernElement": function () {
        // function SVGVKernElement() { [native code] }
        assert.equals(logger(new SVGVKernElement()), "[SVGVKernElement]", "SVGVKernElement");
    },
    "SVGViewElement": function () {
        // function SVGViewElement() { [native code] }
        assert.equals(logger(new SVGViewElement()), "[SVGViewElement]", "SVGViewElement");
    },
    "SVGViewSpec": function () {
        // function SVGViewSpec() { [native code] }
        assert.equals(logger(new SVGViewSpec()), "[SVGViewSpec]", "SVGViewSpec");
    },
    "SVGZoomAndPan": function () {
        // function SVGZoomAndPan() { [native code] }
        assert.equals(logger(new SVGZoomAndPan()), "[SVGZoomAndPan]", "SVGZoomAndPan");
    },
    "SVGZoomEvent": function () {
        // function SVGZoomEvent() { [native code] }
        assert.equals(logger(new SVGZoomEvent()), "[SVGZoomEvent]", "SVGZoomEvent");
    }
});
