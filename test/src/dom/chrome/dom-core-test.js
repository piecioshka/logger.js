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
        // assert.equals(logger(new Audio()), "[Audio]", "Audio");
        /// TODO: Audio
        assert(true);
    },
    "AudioProcessingEvent": function () {
        // function AudioProcessingEvent() { [native code] }
        // assert.equals(logger(new AudioProcessingEvent()), "[AudioProcessingEvent]", "xxx");
        // TODO: AudioProcessingEvent
        assert(true);
    },
    "BarInfo": function () {
        // BarInfo
        assert.equals(logger(locationbar), "[BarInfo]", "BarInfo: locationbar");
        assert.equals(logger(menubar), "[BarInfo]", "BarInfo: menubar");
        assert.equals(logger(scrollbars), "[BarInfo]", "BarInfo: scrollbars");
        assert.equals(logger(statusbar), "[BarInfo]", "BarInfo: statusbar");
        assert.equals(logger(personalbar), "[BarInfo]", "BarInfo: personalbar");
        assert.equals(logger(toolbar), "[BarInfo]", "BarInfo: toolbar");
    },
    "BeforeLoadEvent": function () {
        // function BeforeLoadEvent() { [native code] }
        // assert.equals(logger(new BeforeLoadEvent()), "[BeforeLoadEvent]", "xxx");
        // TODO: BeforeLoadEvent
        assert(true);
    },
    "Blob": function () {
        // function Blob() { [native code] }
        // assert.equals(logger(new Blob()), "[Blob]", "xxx");
        // TODO: Blob
        assert(true);
    },
    "CanvasGradient": function () {
        // function CanvasGradient() { [native code] }
        // assert.equals(logger(new CanvasGradient()), "[CanvasGradient]", "CanvasGradient");
        // TODO: CanvasGradient
        assert(true);
    },
    "CanvasPattern": function () {
        // function CanvasPattern() { [native code] }
        // assert.equals(logger(new CanvasPattern()), "[CanvasPattern]", "CanvasPattern");
        // TODO: CanvasPattern
        assert(true);
    },
    "CanvasRenderingContext2D": function () {
        // function CanvasRenderingContext2D() { [native code] }
        // assert.equals(logger(new CanvasRenderingContext2D()), "[CanvasRenderingContext2D]", "CanvasRenderingContext2D");
        // TODO: CanvasRenderingContext2D
        assert(true);
    },
    "CharacterData": function () {
        // function CharacterData() { [native code] }
        // assert.equals(logger(new CharacterData()), "[CharacterData]", "CharacterData");
        // TODO: CharacterData
        assert(true);
    },
    "ClientRect": function () {
        // function ClientRect() { [native code] }
        // assert.equals(logger(new ClientRect()), "[ClientRect]", "ClientRect");
        // TODO: ClientRect
        assert(true);
    },
    "ClientRectList": function () {
        // function ClientRectList() { [native code] }
        // assert.equals(logger(new ClientRectList()), "[ClientRectList]", "ClientRectList");
        // TODO: ClientRectList
        assert(true);
    },
    "Clipboard": function () {
        // function Clipboard() { [native code] }
        // assert.equals(logger(new Clipboard()), "[Clipboard]", "Clipboard");
        // TODO: Clipboard
        assert(true);
    },
    "CloseEvent": function () {
        // function CloseEvent() { [native code] }
        // assert.equals(logger(new CloseEvent()), "[CloseEvent]", "CloseEvent");
        // TODO: CloseEvent
        assert(true);
    },
    "CompositionEvent": function () {
        // function CompositionEvent() { [native code] }
        // assert.equals(logger(new CompositionEvent()), "[CompositionEvent]", "CompositionEvent");
        // TODO: CompositionEvent
        assert(true);
    },
    "Counter": function () {
        // function Counter() { [native code] }
        // assert.equals(logger(new Counter()), "[Counter]", "Counter");
        // TODO: Counter
        assert(true);
    },
    "CustomEvent": function () {
        // function CustomEvent() { [native code] }
        // assert.equals(logger(new CustomEvent()), "[CustomEvent]", "CustomEvent");
        // TODO: CustomEvent
        assert(true);
    },
    "DataView": function () {
        // code in dir "dom"
        // TODO: DataView
        assert(true);
    },
    "DeviceOrientationEvent": function () {
        // function DeviceOrientationEvent() { [native code] }
        // assert.equals(logger(new DeviceOrientationEvent()), "[DeviceOrientationEvent]", "DeviceOrientationEvent");
        // TODO: DeviceOrientationEvent
        assert(true);
    },
    "ErrorEvent": function () {
        // function ErrorEvent() { [native code] }
        // assert.equals(logger(new ErrorEvent()), "[ErrorEvent]", "ErrorEvent");
        // TODO: ErrorEvent
        assert(true);
    },
    "Event": function () {
        // function Event() { [native code] }
        // assert.equals(logger(new Event()), "[Event]", "Event");
        // TODO: Event
        assert(true);
    },
    "EventException": function () {
        // function EventException() { [native code] }
        // assert.equals(logger(new EventException()), "[EventException]", "EventException");
        // TODO: EventException
        assert(true);
    },
    "EventSource": function () {
        // function EventSource() { [native code] }
        // assert.equals(logger(new EventSource()), "[EventSource]", "EventSource");
        // TODO: EventSource
        assert(true);
    },
    "File": function () {
        // function File() { [native code] }
        // assert.equals(logger(new File()), "[File]", "File");
        // TODO: File
        assert(true);
    },
    "FileError": function () {
        // function FileError() { [native code] }
        // assert.equals(logger(new FileError()), "[FileError]", "FileError");
        // TODO: FileError
        assert(true);
    },
    "FileList": function () {
        // function FileList() { [native code] }
        // assert.equals(logger(new FileList()), "[FileList]", "FileList");
        // TODO: FileList
        assert(true);
    },
    "FileReader": function () {
        // function FileReader() { [native code] }
        // assert.equals(logger(new FileReader()), "[FileReader]", "FileReader");
        // TODO: FileReader
        assert(true);
    },
    "FormData": function () {
        // function FormData() { [native code] }
        // assert.equals(logger(new FormData()), "[FormData]", "FormData");
        // TODO: FormData
        assert(true);
    },
    "HashChangeEvent": function () {
        // function HashChangeEvent() { [native code] }
        // assert.equals(logger(new HashChangeEvent()), "[HashChangeEvent]", "HashChangeEvent");
        // TODO: HashChangeEvent
        assert(true);
    },
    "IceCandidate": function () {
        // function IceCandidate() { [native code] }
        // assert.equals(logger(new IceCandidate()), "[IceCandidate]", "IceCandidate");
        // TODO: IceCandidate
        assert(true);
    },
    "Image": function () {
        // [object Function]
        // assert.equals(logger(new Image()), "[Image]", "Image");
        // TODO: Image
        assert(true);
    },
    "ImageData": function () {
        // function ImageData() { [native code] }
        // assert.equals(logger(new ImageData()), "[ImageData]", "ImageData");
        // TODO: ImageData
        assert(true);
    },
    "KeyboardEvent": function () {
        // function KeyboardEvent() { [native code] }
        // assert.equals(logger(new KeyboardEvent()), "[KeyboardEvent]", "KeyboardEvent");
        // TODO: KeyboardEvent
        assert(true);
    },
    "MediaController": function () {
        // function MediaController() { [native code] }
        // assert.equals(logger(new MediaController()), "[MediaController]", "MediaController");
        // TODO: MediaController
        assert(true);
    },
    "MediaError": function () {
        // function MediaError() { [native code] }
        // assert.equals(logger(new MediaError()), "[MediaError]", "MediaError");
        // TODO: MediaError
        assert(true);
    },
    "MediaList": function () {
        // function MediaList() { [native code] }
        // assert.equals(logger(new MediaList()), "[MediaList]", "MediaList");
        // TODO: MediaList
        assert(true);
    },
    "MediaStreamEvent": function () {
        // function MediaStreamEvent() { [native code] }
        // assert.equals(logger(new MediaStreamEvent()), "[MediaStreamEvent]", "MediaStreamEvent");
        // TODO: MediaStreamEvent
        assert(true);
    },
    "MessageChannel": function () {
        // function MessageChannel() { [native code] }
        // assert.equals(logger(new MessageChannel()), "[MessageChannel]", "MessageChannel");
        // TODO: MessageChannel
        assert(true);
    },
    "MessageEvent": function () {
        // function MessageEvent() { [native code] }
        // assert.equals(logger(new MessageEvent()), "[MessageEvent]", "MessageEvent");
        // TODO: MessageEvent
        assert(true);
    },
    "MessagePort": function () {
        // function MessagePort() { [native code] }
        // assert.equals(logger(new MessagePort()), "[MessagePort]", "MessagePort");
        // TODO: MessagePort
        assert(true);
    },
    "MimeType": function () {
        // function MimeType() { [native code] }
        // assert.equals(logger(new MimeType()), "[MimeType]", "MimeType");
        // TODO: MimeType
        assert(true);
    },
    "MimeTypeArray": function () {
        // function MimeTypeArray() { [native code] }
        // assert.equals(logger(new MimeTypeArray()), "[MimeTypeArray]", "MimeTypeArray");
        // TODO: MimeTypeArray
        assert(true);
    },
    "MouseEvent": function () {
        // function MouseEvent() { [native code] }
        // assert.equals(logger(new MouseEvent()), "[MouseEvent]", "MouseEvent");
        // TODO: MouseEvent
        assert(true);
    },
    "MutationEvent": function () {
        // function MutationEvent() { [native code] }
        // assert.equals(logger(new MutationEvent()), "[MutationEvent]", "MutationEvent");
        // TODO: MutationEvent
        assert(true);
    },
    "Notation": function () {
        // function Notation() { [native code] }
        // assert.equals(logger(new Notation()), "[Notation]", "Notation");
        // TODO: Notation
        assert(true);
    },
    "Notification": function () {
        // function Notification() { [native code] }
        // assert.equals(logger(new Notification()), "[Notification]", "Notification");
        // TODO: Notification
        assert(true);
    },
    "OfflineAudioCompletionEvent": function () {
        // function OfflineAudioCompletionEvent() { [native code] }
        // assert.equals(logger(new OfflineAudioCompletionEvent()), "[OfflineAudioCompletionEvent]", "OfflineAudioCompletionEvent");
        // TODO: OfflineAudioCompletionEvent
        assert(true);
    },
    "Option": function () {
        // [object Function]
        // assert.equals(logger(new Option()), "[Option]", "Option");
        // TODO: Option
        assert(true);
    },
    "OverflowEvent": function () {
        // function OverflowEvent() { [native code] }
        // assert.equals(logger(new OverflowEvent()), "[OverflowEvent]", "OverflowEvent");
        // TODO: OverflowEvent
        assert(true);
    },
    "PageTransitionEvent": function () {
        // function PageTransitionEvent() { [native code] }
        // assert.equals(logger(new PageTransitionEvent()), "[PageTransitionEvent]", "PageTransitionEvent");
        // TODO: PageTransitionEvent
        assert(true);
    },
    "Plugin": function () {
        // function Plugin() { [native code] }
        // assert.equals(logger(new Plugin()), "[Plugin]", "Plugin");
        // TODO: Plugin
        assert(true);
    },
    "PluginArray": function () {
        // function PluginArray() { [native code] }
        // assert.equals(logger(new PluginArray()), "[PluginArray]", "PluginArray");
        // TODO: PluginArray
        assert(true);
    },
    "PopStateEvent": function () {
        // function PopStateEvent() { [native code] }
        // assert.equals(logger(new PopStateEvent()), "[PopStateEvent]", "PopStateEvent");
        // TODO: PopStateEvent
        assert(true);
    },
    "ProcessingInstruction": function () {
        // function ProcessingInstruction() { [native code] }
        // assert.equals(logger(new ProcessingInstruction()), "[ProcessingInstruction]", "ProcessingInstruction");
        // TODO: ProcessingInstruction
        assert(true);
    },
    "ProgressEvent": function () {
        // function ProgressEvent() { [native code] }
        // assert.equals(logger(new ProgressEvent()), "[ProgressEvent]", "ProgressEvent");
        // TODO: ProgressEvent
        assert(true);
    },
    "RGBColor": function () {
        // function RGBColor() { [native code] }
        // assert.equals(logger(new RGBColor()), "[RGBColor]", "RGBColor");
        // TODO: RGBColor
        assert(true);
    },
    "Range": function () {
        // function Range() { [native code] }
        // assert.equals(logger(new Range()), "[Range]", "Range");
        // TODO: Range
        assert(true);
    },
    "RangeException": function () {
        // function RangeException() { [native code] }
        // assert.equals(logger(new RangeException()), "[RangeException]", "RangeException");
        // TODO: RangeException
        assert(true);
    },
    "Rect": function () {
        // function Rect() { [native code] }
        // assert.equals(logger(new Rect()), "[Rect]", "Rect");
        // TODO: Rect
        assert(true);
    },
    "SQLException": function () {
        // function SQLException() { [native code] }
        // assert.equals(logger(new SQLException()), "[SQLException]", "SQLException");
        // TODO: SQLException
        assert(true);
    },
    "Selection": function () {
        // function Selection() { [native code] }
        // assert.equals(logger(new Selection()), "[Selection]", "Selection");
        // TODO: Selection
        assert(true);
    },
    "SessionDescription": function () {
        // function SessionDescription() { [native code] }
        // assert.equals(logger(new SessionDescription()), "[SessionDescription]", "SessionDescription");
        // TODO: SessionDescription
        assert(true);
    },
    "SharedWorker": function () {
        // function SharedWorker() { [native code] }
        // assert.equals(logger(new SharedWorker()), "[SharedWorker]", "SharedWorker");
        // TODO: SharedWorker
        assert(true);
    },
    "SpeechInputEvent": function () {
        // function SpeechInputEvent() { [native code] }
        // assert.equals(logger(new SpeechInputEvent()), "[SpeechInputEvent]", "SpeechInputEvent");
        // TODO: SpeechInputEvent
        assert(true);
    },
    "Storage": function () {
        // function Storage() { [native code] }
        assert.equals(logger(Storage), "[Storage]", "Storage");
        assert.equals(logger(localStorage), "[Storage]", "Storage");
        assert.equals(logger(sessionStorage), "[Storage]", "Storage");
    },
    "StorageEvent": function () {
        // function StorageEvent() { [native code] }
        // assert.equals(logger(new StorageEvent()), "[StorageEvent]", "StorageEvent");
        // TODO: StorageEvent
        assert(true);
    },
    "StyleSheet": function () {
        // function StyleSheet() { [native code] }
        // assert.equals(logger(new StyleSheet()), "[StyleSheet]", "StyleSheet");
        // TODO: StyleSheet
        assert(true);
    },
    "StyleSheetList": function () {
        // function StyleSheetList() { [native code] }
        // assert.equals(logger(new StyleSheetList()), "[StyleSheetList]", "StyleSheetList");
        // TODO: StyleSheetList
        assert(true);
    },
    "Text": function () {
        // function Text() { [native code] }
        // assert.equals(logger(new Text()), "[Text]", "Text");
        // TODO: Text
        assert(true);
    },
    "TextEvent": function () {
        // function TextEvent() { [native code] }
        // assert.equals(logger(new TextEvent()), "[TextEvent]", "TextEvent");
        // TODO: TextEvent
        assert(true);
    },
    "TextMetrics": function () {
        // function TextMetrics() { [native code] }
        // assert.equals(logger(new TextMetrics()), "[TextMetrics]", "TextMetrics");
        // TODO: TextMetrics
        assert(true);
    },
    "TimeRanges": function () {
        // function TimeRanges() { [native code] }
        // assert.equals(logger(new TimeRanges()), "[TimeRanges]", "TimeRanges");
        // TODO: TimeRanges
        assert(true);
    },
    "TouchEvent": function () {
        // function TouchEvent() { [native code] }
        // assert.equals(logger(new TouchEvent()), "[TouchEvent]", "TouchEvent");
        // TODO: TouchEvent
        assert(true);
    },
    "UIEvent": function () {
        // function UIEvent() { [native code] }
        // assert.equals(logger(new UIEvent()), "[UIEvent]", "UIEvent");
        // TODO: UIEvent
        assert(true);
    },
    "WebSocket": function () {
        // function WebSocket() { [native code] }
        // assert.equals(logger(new WebSocket()), "[WebSocket]", "WebSocket");
        // TODO: WebSocket
        assert(true);
    },
    "WheelEvent": function () {
        // function WheelEvent() { [native code] }
        // assert.equals(logger(new WheelEvent()), "[WheelEvent]", "WheelEvent");
        // TODO: WheelEvent
        assert(true);
    },
    "Worker": function () {
        // function Worker() { [native code] }
        // assert.equals(logger(new Worker()), "[Worker]", "Worker");
        // TODO: Worker
        assert(true);
    },
    "clientInformation": function () {
        // Navigator
        // assert.equals(logger(new Navigator()), "[Navigator]", "Navigator");
        // TODO: clientInformation
        assert(true);
    },
    "console": function () {
        // Console
        // assert.equals(logger(new Console()), "[Console]", "Console");
        // TODO: console
        assert(true);
    },
    "crypto": function () {
        // Crypto
        // assert.equals(logger(new Crypto()), "[Crypto]", "Crypto");
        // TODO: crypto
        assert(true);
    },
    "document": function () {
        // HTMLDocument
        // assert.equals(logger(new HTMLDocument()), "[HTMLDocument]", "HTMLDocument");
        // TODO: HTMLDocument
        assert(true);
    },
    "history": function () {
        // History
        // assert.equals(logger(new History()), "[History]", "History");
        // TODO: History
        assert(true);
    },
    "location": function () {
        // Location
        // assert.equals(logger(new Location()), "[Location]", "Location");
        // TODO: Location
        assert(true);
    },
    "navigator": function () {
        // Navigator
        // assert.equals(logger(new Navigator()), "[Navigator]", "Navigator");
        // TODO: Navigator
        assert(true);
    },
    "performance": function () {
        // Performance
        // assert.equals(logger(new Performance()), "[Performance]", "Performance");
        // TODO: Performance
        assert(true);
    },
    "screen": function () {
        // Screen
        // assert.equals(logger(new Screen()), "[Screen]", "Screen");
        // TODO: Screen
        assert(true);
    },
    "styleMedia": function () {
        // StyleMedia
        // assert.equals(logger(new StyleMedia()), "[StyleMedia]", "StyleMedia");
        // TODO: StyleMedia
        assert(true);
    },
    "v8Intl": function () {
        // Object
        // assert.equals(logger(new v8Intl()), "[v8Intl]", "v8Intl");
        // TODO: v8Intl
        assert(true);
    }
});
