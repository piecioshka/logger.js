/******************************************************************************/
/* TEST CASE: logger.bom(): Chrome WebGL */
/******************************************************************************/

xdescribe("logger/bom/chrome WegGL", function () {
    it("WebKitAnimationEvent", function () {
        // function WebKitAnimationEvent() { [native code] }
        expect(logger(new WebKitAnimationEvent()), "[WebKitAnimationEvent]", "WebKitAnimationEvent");
    });
    it("WebKitBlobBuilder", function () {
        // function WebKitBlobBuilder() { [native code] }
        expect(logger(new WebKitBlobBuilder()), "[WebKitBlobBuilder]", "WebKitBlobBuilder");
    });
    it("WebKitCSSFilterValue", function () {
        // function WebKitCSSFilterValue() { [native code] }
        expect(logger(new WebKitCSSFilterValue()), "[WebKitCSSFilterValue]", "WebKitCSSFilterValue");
    });
    it("WebKitCSSKeyframeRule", function () {
        // function WebKitCSSKeyframeRule() { [native code] }
        expect(logger(new WebKitCSSKeyframeRule()), "[WebKitCSSKeyframeRule]", "WebKitCSSKeyframeRule");
    });
    it("WebKitCSSKeyframesRule", function () {
        // function WebKitCSSKeyframesRule() { [native code] }
        expect(logger(new WebKitCSSKeyframesRule()), "[WebKitCSSKeyframesRule]", "WebKitCSSKeyframesRule");
    });
    it("WebKitCSSMatrix", function () {
        // function WebKitCSSMatrix() { [native code] }
        expect(logger(new WebKitCSSMatrix()), "[WebKitCSSMatrix]", "WebKitCSSMatrix");
    });
    it("WebKitCSSRegionRule", function () {
        // function WebKitCSSRegionRule() { [native code] }
        expect(logger(new WebKitCSSRegionRule()), "[WebKitCSSRegionRule]", "WebKitCSSRegionRule");
    });
    it("WebKitCSSTransformValue", function () {
        // function WebKitCSSTransformValue() { [native code] }
        expect(logger(new WebKitCSSTransformValue()), "[WebKitCSSTransformValue]", "WebKitCSSTransformValue");
    });
    it("WebKitIntent", function () {
        // function Intent() { [native code] }
        expect(logger(new Intent()), "[Intent]", "Intent");
    });
    it("WebKitMutationObserver", function () {
        // function MutationObserver() { [native code] }
        expect(logger(new MutationObserver()), "[MutationObserver]", "MutationObserver");
    });
    it("WebKitPoint", function () {
        // function WebKitPoint() { [native code] }
        expect(logger(new WebKitPoint()), "[WebKitPoint]", "WebKitPoint");
    });
    it("WebKitTransitionEvent", function () {
        // function WebKitTransitionEvent() { [native code] }
        expect(logger(new WebKitTransitionEvent()), "[WebKitTransitionEvent]", "WebKitTransitionEvent");
    });
    it("webkitAudioContext", function () {
        // function AudioContext() { [native code] }
        expect(logger(new webkitAudioContext()), "[AudioContext]", "webkitAudioContext");
    });
    it("webkitAudioPannerNode", function () {
        // function AudioPannerNode() { [native code] }
        expect(logger(new webkitAudioPannerNode()), "[AudioPannerNode]", "webkitAudioPannerNode");
    });
    it("webkitCancelAnimationFrame", function () {
        // function webkitCancelAnimationFrame() { [native code] }
        expect(logger(new webkitCancelAnimationFrame()), "[webkitCancelAnimationFrame]", "webkitCancelAnimationFrame");
    });
    it("webkitCancelRequestAnimationFrame", function () {
        // function webkitCancelRequestAnimationFrame() { [native code] }
        expect(logger(new webkitCancelRequestAnimationFrame()), "[webkitCancelRequestAnimationFrame]", "webkitCancelRequestAnimationFrame");
    });
    it("webkitConvertPointFromNodeToPage", function () {
        // function webkitConvertPointFromNodeToPage() { [native code] }
        expect(logger(new webkitConvertPointFromNodeToPage()), "[webkitConvertPointFromNodeToPage]", "webkitConvertPointFromNodeToPage");
    });
    it("webkitConvertPointFromPageToNode", function () {
        // function webkitConvertPointFromPageToNode() { [native code] }
        expect(logger(new webkitConvertPointFromPageToNode()), "[webkitConvertPointFromPageToNode]", "webkitConvertPointFromPageToNode");
    });
    it("webkitIDBCursor", function () {
        // function IDBCursor() { [native code] }
        expect(logger(new webkitIDBCursor()), "[webkitIDBCursor]", "webkitIDBCursor");
    });
    it("webkitIDBDatabase", function () {
        // function IDBDatabase() { [native code] }
        expect(logger(new webkitIDBDatabase()), "[webkitIDBDatabase]", "webkitIDBDatabase");
    });
    it("webkitIDBDatabaseException", function () {
        // function IDBDatabaseException() { [native code] }
        expect(logger(new webkitIDBDatabaseException()), "[webkitIDBDatabaseException]", "webkitIDBDatabaseException");
    });
    it("webkitIDBFactory", function () {
        // function IDBFactory() { [native code] }
        expect(logger(new webkitIDBFactory()), "[webkitIDBFactory]", "webkitIDBFactory");
    });
    it("webkitIDBIndex", function () {
        // function IDBIndex() { [native code] }
        expect(logger(new webkitIDBIndex()), "[webkitIDBIndex]", "webkitIDBIndex");
    });
    it("webkitIDBKeyRange", function () {
        // function IDBKeyRange() { [native code] }
        expect(logger(new webkitIDBKeyRange()), "[webkitIDBKeyRange]", "webkitIDBKeyRange");
    });
    it("webkitIDBObjectStore", function () {
        // function IDBObjectStore() { [native code] }
        expect(logger(new webkitIDBObjectStore()), "[webkitIDBObjectStore]", "webkitIDBObjectStore");
    });
    it("webkitIDBRequest", function () {
        // function IDBRequest() { [native code] }
        expect(logger(new webkitIDBRequest()), "[webkitIDBRequest]", "webkitIDBRequest");
    });
    it("webkitIDBTransaction", function () {
        // function IDBTransaction() { [native code] }
        expect(logger(new webkitIDBTransaction()), "[webkitIDBTransaction]", "webkitIDBTransaction");
    });
    it("webkitIndexedDB", function () {
        // IDBFactory
        expect(logger(new webkitIndexedDB()), "[webkitIndexedDB]", "webkitIndexedDB");
    });
    it("webkitMediaStream", function () {
        // function MediaStream() { [native code] }
        expect(logger(new webkitMediaStream()), "[webkitMediaStream]", "webkitMediaStream");
    });
    it("webkitNotifications", function () {
        // NotificationCenter
        expect(logger(new webkitNotifications()), "[webkitNotifications]", "webkitNotifications");
    });
    it("webkitPostMessage", function () {
        // function () { [native code] }
        expect(logger(new webkitPostMessage()), "[webkitPostMessage]", "webkitPostMessage");
    });
    it("webkitRequestAnimationFrame", function () {
        // function webkitRequestAnimationFrame() { [native code] }
        expect(logger(new webkitRequestAnimationFrame()), "[webkitRequestAnimationFrame]", "webkitRequestAnimationFrame");
    });
    it("webkitRequestFileSystem", function () {
        // function webkitRequestFileSystem() { [native code] }
        expect(logger(new webkitRequestFileSystem()), "[webkitRequestFileSystem]", "webkitRequestFileSystem");
    });
    it("webkitResolveLocalFileSystemURL", function () {
        // function webkitResolveLocalFileSystemURL() { [native code] }
        expect(logger(new webkitResolveLocalFileSystemURL()), "[webkitResolveLocalFileSystemURL]", "webkitResolveLocalFileSystemURL");
    });
    it("webkitStorageInfo", function () {
        // StorageInfo
        expect(logger(new webkitStorageInfo()), "[webkitStorageInfo]", "webkitStorageInfo");
    });
    it("webkitURL", function () {
        // function URL() { [native code] }
        expect(logger(new webkitURL()), "[webkitURL]", "webkitURL");
    });
});
