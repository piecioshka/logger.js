/******************************************************************************/
/* TEST CASE: logger.bom(): Chrome */
/******************************************************************************/

if (typeof require !== "undefined") {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../../src/logger-core.js");
}

buster.testCase("logger/bom Chrome", {
    "Audio": function () {
        // [object Function]
        assert.equals(logger(new Audio()), "[Audio]", "Audio");
    },
    "AudioProcessingEvent": function () {
        // function AudioProcessingEvent() { [native code] }
        assert.equals(logger(new AudioProcessingEvent()), "[AudioProcessingEvent]", "xxx");
    },
    "BeforeLoadEvent": function () {
        // function BeforeLoadEvent() { [native code] }
        assert.equals(logger(new BeforeLoadEvent()), "[BeforeLoadEvent]", "xxx");
    },
    "Blob": function () {
        // function Blob() { [native code] }
        assert.equals(logger(new Blob()), "[Blob]", "xxx");
    },
    "CanvasGradient": function () {
        // function CanvasGradient() { [native code] }
        assert.equals(logger(new CanvasGradient()), "[CanvasGradient]", "CanvasGradient");
    },
    "CanvasPattern": function () {
        // function CanvasPattern() { [native code] }
        assert.equals(logger(new CanvasPattern()), "[CanvasPattern]", "CanvasPattern");
    },
    "CanvasRenderingContext2D": function () {
        // function CanvasRenderingContext2D() { [native code] }
        assert.equals(logger(new CanvasRenderingContext2D()), "[CanvasRenderingContext2D]", "CanvasRenderingContext2D");
    },
    "CharacterData": function () {
        // function CharacterData() { [native code] }
        assert.equals(logger(new CharacterData()), "[CharacterData]", "CharacterData");
    },
    "ClientRect": function () {
        // function ClientRect() { [native code] }
        assert.equals(logger(new ClientRect()), "[ClientRect]", "ClientRect");
    },
    "ClientRectList": function () {
        // function ClientRectList() { [native code] }
        assert.equals(logger(new ClientRectList()), "[ClientRectList]", "ClientRectList");
    },
    "Clipboard": function () {
        // function Clipboard() { [native code] }
        assert.equals(logger(new Clipboard()), "[Clipboard]", "Clipboard");
    },
    "CloseEvent": function () {
        // function CloseEvent() { [native code] }
        assert.equals(logger(new CloseEvent()), "[CloseEvent]", "CloseEvent");
    },
    "CompositionEvent": function () {
        // function CompositionEvent() { [native code] }
        assert.equals(logger(new CompositionEvent()), "[CompositionEvent]", "CompositionEvent");
    },
    "Counter": function () {
        // function Counter() { [native code] }
        assert.equals(logger(new Counter()), "[Counter]", "Counter");
    },
    "CustomEvent": function () {
        // function CustomEvent() { [native code] }
        assert.equals(logger(new CustomEvent()), "[CustomEvent]", "CustomEvent");
    },
    "DataView": function () {
        // function DataView() { [native code] }
        assert.equals(logger(new DataView()), "[DataView]", "DataView");
    },
    "DeviceOrientationEvent": function () {
        // function DeviceOrientationEvent() { [native code] }
        assert.equals(logger(new DeviceOrientationEvent()), "[DeviceOrientationEvent]", "DeviceOrientationEvent");
    },
    "ErrorEvent": function () {
        // function ErrorEvent() { [native code] }
        assert.equals(logger(new ErrorEvent()), "[ErrorEvent]", "ErrorEvent");
    },
    "Event": function () {
        // function Event() { [native code] }
        assert.equals(logger(new Event()), "[Event]", "Event");
    },
    "EventException": function () {
        // function EventException() { [native code] }
        assert.equals(logger(new EventException()), "[EventException]", "EventException");
    },
    "EventSource": function () {
        // function EventSource() { [native code] }
        assert.equals(logger(new EventSource()), "[EventSource]", "EventSource");
    },
    "File": function () {
        // function File() { [native code] }
        assert.equals(logger(new File()), "[File]", "File");
    },
    "FileError": function () {
        // function FileError() { [native code] }
        assert.equals(logger(new FileError()), "[FileError]", "FileError");
    },
    "FileList": function () {
        // function FileList() { [native code] }
        assert.equals(logger(new FileList()), "[FileList]", "FileList");
    },
    "FileReader": function () {
        // function FileReader() { [native code] }
        assert.equals(logger(new FileReader()), "[FileReader]", "FileReader");
    },
    "FormData": function () {
        // function FormData() { [native code] }
        assert.equals(logger(new FormData()), "[FormData]", "FormData");
    },
    "HashChangeEvent": function () {
        // function HashChangeEvent() { [native code] }
        assert.equals(logger(new HashChangeEvent()), "[HashChangeEvent]", "HashChangeEvent");
    },
    "IceCandidate": function () {
        // function IceCandidate() { [native code] }
        assert.equals(logger(new IceCandidate()), "[IceCandidate]", "IceCandidate");
    },
    "Image": function () {
        // [object Function]
        assert.equals(logger(new Image()), "[Image]", "Image");
    },
    "ImageData": function () {
        // function ImageData() { [native code] }
        assert.equals(logger(new ImageData()), "[ImageData]", "ImageData");
    },
    "KeyboardEvent": function () {
        // function KeyboardEvent() { [native code] }
        assert.equals(logger(new KeyboardEvent()), "[KeyboardEvent]", "KeyboardEvent");
    },
    "MediaController": function () {
        // function MediaController() { [native code] }
        assert.equals(logger(new MediaController()), "[MediaController]", "MediaController");
    },
    "MediaError": function () {
        // function MediaError() { [native code] }
        assert.equals(logger(new MediaError()), "[MediaError]", "MediaError");
    },
    "MediaList": function () {
        // function MediaList() { [native code] }
        assert.equals(logger(new MediaList()), "[MediaList]", "MediaList");
    },
    "MediaStreamEvent": function () {
        // function MediaStreamEvent() { [native code] }
        assert.equals(logger(new MediaStreamEvent()), "[MediaStreamEvent]", "MediaStreamEvent");
    },
    "MessageChannel": function () {
        // function MessageChannel() { [native code] }
        assert.equals(logger(new MessageChannel()), "[MessageChannel]", "MessageChannel");
    },
    "MessageEvent": function () {
        // function MessageEvent() { [native code] }
        assert.equals(logger(new MessageEvent()), "[MessageEvent]", "MessageEvent");
    },
    "MessagePort": function () {
        // function MessagePort() { [native code] }
        assert.equals(logger(new MessagePort()), "[MessagePort]", "MessagePort");
    },
    "MimeType": function () {
        // function MimeType() { [native code] }
        assert.equals(logger(new MimeType()), "[MimeType]", "MimeType");
    },
    "MimeTypeArray": function () {
        // function MimeTypeArray() { [native code] }
        assert.equals(logger(new MimeTypeArray()), "[MimeTypeArray]", "MimeTypeArray");
    },
    "MouseEvent": function () {
        // function MouseEvent() { [native code] }
        assert.equals(logger(new MouseEvent()), "[MouseEvent]", "MouseEvent");
    },
    "MutationEvent": function () {
        // function MutationEvent() { [native code] }
        assert.equals(logger(new MutationEvent()), "[MutationEvent]", "MutationEvent");
    },
    "Notation": function () {
        // function Notation() { [native code] }
        assert.equals(logger(new Notation()), "[Notation]", "Notation");
    },
    "Notification": function () {
        // function Notification() { [native code] }
        assert.equals(logger(new Notification()), "[Notification]", "Notification");
    },
    "OfflineAudioCompletionEvent": function () {
        // function OfflineAudioCompletionEvent() { [native code] }
        assert.equals(logger(new OfflineAudioCompletionEvent()), "[OfflineAudioCompletionEvent]", "OfflineAudioCompletionEvent");
    },
    "Option": function () {
        // [object Function]
        assert.equals(logger(new Option()), "[Option]", "Option");
    },
    "OverflowEvent": function () {
        // function OverflowEvent() { [native code] }
        assert.equals(logger(new OverflowEvent()), "[OverflowEvent]", "OverflowEvent");
    },
    "PageTransitionEvent": function () {
        // function PageTransitionEvent() { [native code] }
        assert.equals(logger(new PageTransitionEvent()), "[PageTransitionEvent]", "PageTransitionEvent");
    },
    "Plugin": function () {
        // function Plugin() { [native code] }
        assert.equals(logger(new Plugin()), "[Plugin]", "Plugin");
    },
    "PluginArray": function () {
        // function PluginArray() { [native code] }
        assert.equals(logger(new PluginArray()), "[PluginArray]", "PluginArray");
    },
    "PopStateEvent": function () {
        // function PopStateEvent() { [native code] }
        assert.equals(logger(new PopStateEvent()), "[PopStateEvent]", "PopStateEvent");
    },
    "ProcessingInstruction": function () {
        // function ProcessingInstruction() { [native code] }
        assert.equals(logger(new ProcessingInstruction()), "[ProcessingInstruction]", "ProcessingInstruction");
    },
    "ProgressEvent": function () {
        // function ProgressEvent() { [native code] }
        assert.equals(logger(new ProgressEvent()), "[ProgressEvent]", "ProgressEvent");
    },
    "RGBColor": function () {
        // function RGBColor() { [native code] }
        assert.equals(logger(new RGBColor()), "[RGBColor]", "RGBColor");
    },
    "Range": function () {
        // function Range() { [native code] }
        assert.equals(logger(new Range()), "[Range]", "Range");
    },
    "RangeException": function () {
        // function RangeException() { [native code] }
        assert.equals(logger(new RangeException()), "[RangeException]", "RangeException");
    },
    "Rect": function () {
        // function Rect() { [native code] }
        assert.equals(logger(new Rect()), "[Rect]", "Rect");
    },
    "SQLException": function () {
        // function SQLException() { [native code] }
        assert.equals(logger(new SQLException()), "[SQLException]", "SQLException");
    },
    "Selection": function () {
        // function Selection() { [native code] }
        assert.equals(logger(new Selection()), "[Selection]", "Selection");
    },
    "SessionDescription": function () {
        // function SessionDescription() { [native code] }
        assert.equals(logger(new SessionDescription()), "[SessionDescription]", "SessionDescription");
    },
    "SharedWorker": function () {
        // function SharedWorker() { [native code] }
        assert.equals(logger(new SharedWorker()), "[SharedWorker]", "SharedWorker");
    },
    "SpeechInputEvent": function () {
        // function SpeechInputEvent() { [native code] }
        assert.equals(logger(new SpeechInputEvent()), "[SpeechInputEvent]", "SpeechInputEvent");
    },
    "Storage": function () {
        // function Storage() { [native code] }
        assert.equals(logger(new Storage()), "[Storage]", "Storage");
        assert.equals(logger(localStorage), "[Storage]", "Storage");
        assert.equals(logger(sessionStorage), "[Storage]", "Storage");
    },
    "StorageEvent": function () {
        // function StorageEvent() { [native code] }
        assert.equals(logger(new StorageEvent()), "[StorageEvent]", "StorageEvent");
    },
    "StyleSheet": function () {
        // function StyleSheet() { [native code] }
        assert.equals(logger(new StyleSheet()), "[StyleSheet]", "StyleSheet");
    },
    "StyleSheetList": function () {
        // function StyleSheetList() { [native code] }
        assert.equals(logger(new StyleSheetList()), "[StyleSheetList]", "StyleSheetList");
    },
    "Text": function () {
        // function Text() { [native code] }
        assert.equals(logger(new Text()), "[Text]", "Text");
    },
    "TextEvent": function () {
        // function TextEvent() { [native code] }
        assert.equals(logger(new TextEvent()), "[TextEvent]", "TextEvent");
    },
    "TextMetrics": function () {
        // function TextMetrics() { [native code] }
        assert.equals(logger(new TextMetrics()), "[TextMetrics]", "TextMetrics");
    },
    "TimeRanges": function () {
        // function TimeRanges() { [native code] }
        assert.equals(logger(new TimeRanges()), "[TimeRanges]", "TimeRanges");
    },
    "TouchEvent": function () {
        // function TouchEvent() { [native code] }
        assert.equals(logger(new TouchEvent()), "[TouchEvent]", "TouchEvent");
    },
    "UIEvent": function () {
        // function UIEvent() { [native code] }
        assert.equals(logger(new UIEvent()), "[UIEvent]", "UIEvent");
    },
    "WebSocket": function () {
        // function WebSocket() { [native code] }
        assert.equals(logger(new WebSocket()), "[WebSocket]", "WebSocket");
    },
    "WheelEvent": function () {
        // function WheelEvent() { [native code] }
        assert.equals(logger(new WheelEvent()), "[WheelEvent]", "WheelEvent");
    },
    "Worker": function () {
        // function Worker() { [native code] }
        assert.equals(logger(new Worker()), "[Worker]", "Worker");
    },
    "clientInformation": function () {
        // Navigator
        assert.equals(logger(new Navigator()), "[Navigator]", "Navigator");
    },
    "console": function () {
        // Console
        assert.equals(logger(new Console()), "[Console]", "Console");
    },
    "crypto": function () {
        // Crypto
        assert.equals(logger(new Crypto()), "[Crypto]", "Crypto");
    },
    "document": function () {
        // HTMLDocument
        assert.equals(logger(new HTMLDocument()), "[HTMLDocument]", "HTMLDocument");
    },
    "history": function () {
        // History
        assert.equals(logger(new History()), "[History]", "History");
    },
    "location": function () {
        // Location
        assert.equals(logger(new Location()), "[Location]", "Location");
    },
    "BarInfo": function () {
        // BarInfo
        assert.equals(logger(locationbar), "[BarInfo]", "BarInfo");
        assert.equals(logger(menubar), "[BarInfo]", "BarInfo");
        assert.equals(logger(scrollbars), "[BarInfo]", "BarInfo");
        assert.equals(logger(statusbar), "[BarInfo]", "BarInfo");
        assert.equals(logger(personalbar), "[BarInfo]", "BarInfo");
        assert.equals(logger(personalbar), "[BarInfo]", "BarInfo");
        assert.equals(logger(toolbar), "[BarInfo]", "BarInfo");
    },
    "navigator": function () {
        // Navigator
        assert.equals(logger(new Navigator()), "[Navigator]", "Navigator");
    },
    "performance": function () {
        // Performance
        assert.equals(logger(new Performance()), "[Performance]", "Performance");
    },
    "screen": function () {
        // Screen
        assert.equals(logger(new Screen()), "[Screen]", "Screen");
    },
    "styleMedia": function () {
        // StyleMedia
        assert.equals(logger(new StyleMedia()), "[StyleMedia]", "StyleMedia");
    },
    "v8Intl": function () { // Object
        assert.equals(logger(new v8Intl()), "[v8Intl]", "v8Intl");
    }
});
