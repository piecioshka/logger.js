describe("logger/bom/chrome WegGL", function () {
    it("WebKitAnimationEvent", function () {
        // function WebKitAnimationEvent() { [native code] }
        expect(logger(new WebKitAnimationEvent())).toEqual("[WebKitAnimationEvent]");
    });
    it("WebKitBlobBuilder", function () {
        // function WebKitBlobBuilder() { [native code] }
        expect(logger(new WebKitBlobBuilder())).toEqual("[WebKitBlobBuilder]");
    });
    it("WebKitCSSFilterValue", function () {
        // function WebKitCSSFilterValue() { [native code] }
        expect(logger(new WebKitCSSFilterValue())).toEqual("[WebKitCSSFilterValue]");
    });
    it("WebKitCSSKeyframeRule", function () {
        // function WebKitCSSKeyframeRule() { [native code] }
        expect(logger(new WebKitCSSKeyframeRule())).toEqual("[WebKitCSSKeyframeRule]");
    });
    it("WebKitCSSKeyframesRule", function () {
        // function WebKitCSSKeyframesRule() { [native code] }
        expect(logger(new WebKitCSSKeyframesRule())).toEqual("[WebKitCSSKeyframesRule]");
    });
    it("WebKitCSSMatrix", function () {
        // function WebKitCSSMatrix() { [native code] }
        expect(logger(new WebKitCSSMatrix())).toEqual("[WebKitCSSMatrix]");
    });
    it("WebKitCSSRegionRule", function () {
        // function WebKitCSSRegionRule() { [native code] }
        expect(logger(new WebKitCSSRegionRule())).toEqual("[WebKitCSSRegionRule]");
    });
    it("WebKitCSSTransformValue", function () {
        // function WebKitCSSTransformValue() { [native code] }
        expect(logger(new WebKitCSSTransformValue())).toEqual("[WebKitCSSTransformValue]");
    });
    it("WebKitIntent", function () {
        // function Intent() { [native code] }
        expect(logger(new Intent())).toEqual("[Intent]");
    });
    it("WebKitMutationObserver", function () {
        // function MutationObserver() { [native code] }
        expect(logger(new MutationObserver())).toEqual("[MutationObserver]");
    });
    it("WebKitPoint", function () {
        // function WebKitPoint() { [native code] }
        expect(logger(new WebKitPoint())).toEqual("[WebKitPoint]");
    });
    it("WebKitTransitionEvent", function () {
        // function WebKitTransitionEvent() { [native code] }
        expect(logger(new WebKitTransitionEvent())).toEqual("[WebKitTransitionEvent]");
    });
    it("webkitAudioContext", function () {
        // function AudioContext() { [native code] }
        expect(logger(new webkitAudioContext())).toEqual("[AudioContext]");
    });
    it("webkitAudioPannerNode", function () {
        // function AudioPannerNode() { [native code] }
        expect(logger(new webkitAudioPannerNode())).toEqual("[AudioPannerNode]");
    });
    it("webkitCancelAnimationFrame", function () {
        // function webkitCancelAnimationFrame() { [native code] }
        expect(logger(new webkitCancelAnimationFrame())).toEqual("[webkitCancelAnimationFrame]");
    });
    it("webkitCancelRequestAnimationFrame", function () {
        // function webkitCancelRequestAnimationFrame() { [native code] }
        expect(logger(new webkitCancelRequestAnimationFrame())).toEqual("[webkitCancelRequestAnimationFrame]");
    });
    it("webkitConvertPointFromNodeToPage", function () {
        // function webkitConvertPointFromNodeToPage() { [native code] }
        expect(logger(new webkitConvertPointFromNodeToPage())).toEqual("[webkitConvertPointFromNodeToPage]");
    });
    it("webkitConvertPointFromPageToNode", function () {
        // function webkitConvertPointFromPageToNode() { [native code] }
        expect(logger(new webkitConvertPointFromPageToNode())).toEqual("[webkitConvertPointFromPageToNode]");
    });
    it("webkitIDBCursor", function () {
        // function IDBCursor() { [native code] }
        expect(logger(new webkitIDBCursor())).toEqual("[webkitIDBCursor]");
    });
    it("webkitIDBDatabase", function () {
        // function IDBDatabase() { [native code] }
        expect(logger(new webkitIDBDatabase())).toEqual("[webkitIDBDatabase]");
    });
    it("webkitIDBDatabaseException", function () {
        // function IDBDatabaseException() { [native code] }
        expect(logger(new webkitIDBDatabaseException())).toEqual("[webkitIDBDatabaseException]");
    });
    it("webkitIDBFactory", function () {
        // function IDBFactory() { [native code] }
        expect(logger(new webkitIDBFactory())).toEqual("[webkitIDBFactory]");
    });
    it("webkitIDBIndex", function () {
        // function IDBIndex() { [native code] }
        expect(logger(new webkitIDBIndex())).toEqual("[webkitIDBIndex]");
    });
    it("webkitIDBKeyRange", function () {
        // function IDBKeyRange() { [native code] }
        expect(logger(new webkitIDBKeyRange())).toEqual("[webkitIDBKeyRange]");
    });
    it("webkitIDBObjectStore", function () {
        // function IDBObjectStore() { [native code] }
        expect(logger(new webkitIDBObjectStore())).toEqual("[webkitIDBObjectStore]");
    });
    it("webkitIDBRequest", function () {
        // function IDBRequest() { [native code] }
        expect(logger(new webkitIDBRequest())).toEqual("[webkitIDBRequest]");
    });
    it("webkitIDBTransaction", function () {
        // function IDBTransaction() { [native code] }
        expect(logger(new webkitIDBTransaction())).toEqual("[webkitIDBTransaction]");
    });
    it("webkitIndexedDB", function () {
        // IDBFactory
        expect(logger(new webkitIndexedDB())).toEqual("[webkitIndexedDB]");
    });
    it("webkitMediaStream", function () {
        // function MediaStream() { [native code] }
        expect(logger(new webkitMediaStream())).toEqual("[webkitMediaStream]");
    });
    it("webkitNotifications", function () {
        // NotificationCenter
        expect(logger(new webkitNotifications())).toEqual("[webkitNotifications]");
    });
    it("webkitPostMessage", function () {
        // function () { [native code] }
        expect(logger(new webkitPostMessage())).toEqual("[webkitPostMessage]");
    });
    it("webkitRequestAnimationFrame", function () {
        // function webkitRequestAnimationFrame() { [native code] }
        expect(logger(new webkitRequestAnimationFrame())).toEqual("[webkitRequestAnimationFrame]");
    });
    it("webkitRequestFileSystem", function () {
        // function webkitRequestFileSystem() { [native code] }
        expect(logger(new webkitRequestFileSystem())).toEqual("[webkitRequestFileSystem]");
    });
    it("webkitResolveLocalFileSystemURL", function () {
        // function webkitResolveLocalFileSystemURL() { [native code] }
        expect(logger(new webkitResolveLocalFileSystemURL())).toEqual("[webkitResolveLocalFileSystemURL]");
    });
    it("webkitStorageInfo", function () {
        // StorageInfo
        expect(logger(new webkitStorageInfo())).toEqual("[webkitStorageInfo]");
    });
    it("webkitURL", function () {
        // function URL() { [native code] }
        expect(logger(new webkitURL())).toEqual("[webkitURL]");
    });
});
