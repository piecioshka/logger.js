/******************************************************************************/
/* TEST CASE: logger.bom(): Chrome WebGL */
/******************************************************************************/

if (require !== undefined) {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../../src/logger-core.js");
}

buster.testCase("logger/bom/chrome WegGL", {
    "WebKitAnimationEvent": function () {
        // function WebKitAnimationEvent() { [native code] }
        assert.equals(logger(new WebKitAnimationEvent()), "[WebKitAnimationEvent]", "WebKitAnimationEvent");
    },
    "WebKitBlobBuilder": function () {
        // function WebKitBlobBuilder() { [native code] }
        assert.equals(logger(new WebKitBlobBuilder()), "[WebKitBlobBuilder]", "WebKitBlobBuilder");
    },
    "WebKitCSSFilterValue": function () {
        // function WebKitCSSFilterValue() { [native code] }
        assert.equals(logger(new WebKitCSSFilterValue()), "[WebKitCSSFilterValue]", "WebKitCSSFilterValue");
    },
    "WebKitCSSKeyframeRule": function () {
        // function WebKitCSSKeyframeRule() { [native code] }
        assert.equals(logger(new WebKitCSSKeyframeRule()), "[WebKitCSSKeyframeRule]", "WebKitCSSKeyframeRule");
    },
    "WebKitCSSKeyframesRule": function () {
        // function WebKitCSSKeyframesRule() { [native code] }
        assert.equals(logger(new WebKitCSSKeyframesRule()), "[WebKitCSSKeyframesRule]", "WebKitCSSKeyframesRule");
    },
    "WebKitCSSMatrix": function () {
        // function WebKitCSSMatrix() { [native code] }
        assert.equals(logger(new WebKitCSSMatrix()), "[WebKitCSSMatrix]", "WebKitCSSMatrix");
    },
    "WebKitCSSRegionRule": function () {
        // function WebKitCSSRegionRule() { [native code] }
        assert.equals(logger(new WebKitCSSRegionRule()), "[WebKitCSSRegionRule]", "WebKitCSSRegionRule");
    },
    "WebKitCSSTransformValue": function () {
        // function WebKitCSSTransformValue() { [native code] }
        assert.equals(logger(new WebKitCSSTransformValue()), "[WebKitCSSTransformValue]", "WebKitCSSTransformValue");
    },
    "WebKitIntent": function () {
        // function Intent() { [native code] }
        assert.equals(logger(new Intent()), "[Intent]", "Intent");
    },
    "WebKitMutationObserver": function () {
        // function MutationObserver() { [native code] }
        assert.equals(logger(new MutationObserver()), "[MutationObserver]", "MutationObserver");
    },
    "WebKitPoint": function () {
        // function WebKitPoint() { [native code] }
        assert.equals(logger(new WebKitPoint()), "[WebKitPoint]", "WebKitPoint");
    },
    "WebKitTransitionEvent": function () {
        // function WebKitTransitionEvent() { [native code] }
        assert.equals(logger(new WebKitTransitionEvent()), "[WebKitTransitionEvent]", "WebKitTransitionEvent");
    },
    "webkitAudioContext": function () {
        // function AudioContext() { [native code] }
        assert.equals(logger(new webkitAudioContext()), "[AudioContext]", "webkitAudioContext");
    },
    "webkitAudioPannerNode": function () {
        // function AudioPannerNode() { [native code] }
        assert.equals(logger(new webkitAudioPannerNode()), "[AudioPannerNode]", "webkitAudioPannerNode");
    },
    "webkitCancelAnimationFrame": function () {
        // function webkitCancelAnimationFrame() { [native code] }
        assert.equals(logger(new webkitCancelAnimationFrame()), "[webkitCancelAnimationFrame]", "webkitCancelAnimationFrame");
    },
    "webkitCancelRequestAnimationFrame": function () {
        // function webkitCancelRequestAnimationFrame() { [native code] }
        assert.equals(logger(new webkitCancelRequestAnimationFrame()), "[webkitCancelRequestAnimationFrame]", "webkitCancelRequestAnimationFrame");
    },
    "webkitConvertPointFromNodeToPage": function () {
        // function webkitConvertPointFromNodeToPage() { [native code] }
        assert.equals(logger(new webkitConvertPointFromNodeToPage()), "[webkitConvertPointFromNodeToPage]", "webkitConvertPointFromNodeToPage");
    },
    "webkitConvertPointFromPageToNode": function () {
        // function webkitConvertPointFromPageToNode() { [native code] }
        assert.equals(logger(new webkitConvertPointFromPageToNode()), "[webkitConvertPointFromPageToNode]", "webkitConvertPointFromPageToNode");
    },
    "webkitIDBCursor": function () {
        // function IDBCursor() { [native code] }
        assert.equals(logger(new webkitIDBCursor()), "[webkitIDBCursor]", "webkitIDBCursor");
    },
    "webkitIDBDatabase": function () {
        // function IDBDatabase() { [native code] }
        assert.equals(logger(new webkitIDBDatabase()), "[webkitIDBDatabase]", "webkitIDBDatabase");
    },
    "webkitIDBDatabaseException": function () {
        // function IDBDatabaseException() { [native code] }
        assert.equals(logger(new webkitIDBDatabaseException()), "[webkitIDBDatabaseException]", "webkitIDBDatabaseException");
    },
    "webkitIDBFactory": function () {
        // function IDBFactory() { [native code] }
        assert.equals(logger(new webkitIDBFactory()), "[webkitIDBFactory]", "webkitIDBFactory");
    },
    "webkitIDBIndex": function () {
        // function IDBIndex() { [native code] }
        assert.equals(logger(new webkitIDBIndex()), "[webkitIDBIndex]", "webkitIDBIndex");
    },
    "webkitIDBKeyRange": function () {
        // function IDBKeyRange() { [native code] }
        assert.equals(logger(new webkitIDBKeyRange()), "[webkitIDBKeyRange]", "webkitIDBKeyRange");
    },
    "webkitIDBObjectStore": function () {
        // function IDBObjectStore() { [native code] }
        assert.equals(logger(new webkitIDBObjectStore()), "[webkitIDBObjectStore]", "webkitIDBObjectStore");
    },
    "webkitIDBRequest": function () {
        // function IDBRequest() { [native code] }
        assert.equals(logger(new webkitIDBRequest()), "[webkitIDBRequest]", "webkitIDBRequest");
    },
    "webkitIDBTransaction": function () {
        // function IDBTransaction() { [native code] }
        assert.equals(logger(new webkitIDBTransaction()), "[webkitIDBTransaction]", "webkitIDBTransaction");
    },
    "webkitIndexedDB": function () {
        // IDBFactory
        assert.equals(logger(new webkitIndexedDB()), "[webkitIndexedDB]", "webkitIndexedDB");
    },
    "webkitMediaStream": function () {
        // function MediaStream() { [native code] }
        assert.equals(logger(new webkitMediaStream()), "[webkitMediaStream]", "webkitMediaStream");
    },
    "webkitNotifications": function () {
        // NotificationCenter
        assert.equals(logger(new webkitNotifications()), "[webkitNotifications]", "webkitNotifications");
    },
    "webkitPostMessage": function () {
        // function () { [native code] }
        assert.equals(logger(new webkitPostMessage()), "[webkitPostMessage]", "webkitPostMessage");
    },
    "webkitRequestAnimationFrame": function () {
        // function webkitRequestAnimationFrame() { [native code] }
        assert.equals(logger(new webkitRequestAnimationFrame()), "[webkitRequestAnimationFrame]", "webkitRequestAnimationFrame");
    },
    "webkitRequestFileSystem": function () {
        // function webkitRequestFileSystem() { [native code] }
        assert.equals(logger(new webkitRequestFileSystem()), "[webkitRequestFileSystem]", "webkitRequestFileSystem");
    },
    "webkitResolveLocalFileSystemURL": function () {
        // function webkitResolveLocalFileSystemURL() { [native code] }
        assert.equals(logger(new webkitResolveLocalFileSystemURL()), "[webkitResolveLocalFileSystemURL]", "webkitResolveLocalFileSystemURL");
    },
    "webkitStorageInfo": function () {
        // StorageInfo
        assert.equals(logger(new webkitStorageInfo()), "[webkitStorageInfo]", "webkitStorageInfo");
    },
    "webkitURL": function () {
        // function URL() { [native code] }
        assert.equals(logger(new webkitURL()), "[webkitURL]", "webkitURL");
    }
});
