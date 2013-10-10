/******************************************************************************/
/* TEST CASE: logger.bom(): Chrome */
/******************************************************************************/

describe("logger/bom Chrome", function () {
    it("Audio", function () {
        // [object Function]
        // expect(logger(new Audio()), "[Audio]", "Audio");
        /// TODO: Audio
        // expect(true);
    });
    it("AudioProcessingEvent", function () {
        // function AudioProcessingEvent() { [native code] }
        // expect(logger(new AudioProcessingEvent()), "[AudioProcessingEvent]", "xxx");
        // TODO: AudioProcessingEvent
        // expect(true);
    });
    it("BarInfo", function () {
        // BarInfo
        expect(logger(locationbar), "[BarInfo]", "BarInfo: locationbar");
        expect(logger(menubar), "[BarInfo]", "BarInfo: menubar");
        expect(logger(scrollbars), "[BarInfo]", "BarInfo: scrollbars");
        expect(logger(statusbar), "[BarInfo]", "BarInfo: statusbar");
        expect(logger(personalbar), "[BarInfo]", "BarInfo: personalbar");
        expect(logger(toolbar), "[BarInfo]", "BarInfo: toolbar");
    });
    it("BeforeLoadEvent", function () {
        // function BeforeLoadEvent() { [native code] }
        // expect(logger(new BeforeLoadEvent()), "[BeforeLoadEvent]", "xxx");
        // TODO: BeforeLoadEvent
        // expect(true);
    });
    it("Blob", function () {
        // function Blob() { [native code] }
        // expect(logger(new Blob()), "[Blob]", "xxx");
        // TODO: Blob
        // expect(true);
    });
    it("CanvasGradient", function () {
        // function CanvasGradient() { [native code] }
        // expect(logger(new CanvasGradient()), "[CanvasGradient]", "CanvasGradient");
        // TODO: CanvasGradient
        // expect(true);
    });
    it("CanvasPattern", function () {
        // function CanvasPattern() { [native code] }
        // expect(logger(new CanvasPattern()), "[CanvasPattern]", "CanvasPattern");
        // TODO: CanvasPattern
        // expect(true);
    });
    it("CanvasRenderingContext2D", function () {
        // function CanvasRenderingContext2D() { [native code] }
        // expect(logger(new CanvasRenderingContext2D()), "[CanvasRenderingContext2D]", "CanvasRenderingContext2D");
        // TODO: CanvasRenderingContext2D
        // expect(true);
    });
    it("CharacterData", function () {
        // function CharacterData() { [native code] }
        // expect(logger(new CharacterData()), "[CharacterData]", "CharacterData");
        // TODO: CharacterData
        // expect(true);
    });
    it("ClientRect", function () {
        // function ClientRect() { [native code] }
        // expect(logger(new ClientRect()), "[ClientRect]", "ClientRect");
        // TODO: ClientRect
        // expect(true);
    });
    it("ClientRectList", function () {
        // function ClientRectList() { [native code] }
        // expect(logger(new ClientRectList()), "[ClientRectList]", "ClientRectList");
        // TODO: ClientRectList
        // expect(true);
    });
    it("Clipboard", function () {
        // function Clipboard() { [native code] }
        // expect(logger(new Clipboard()), "[Clipboard]", "Clipboard");
        // TODO: Clipboard
        // expect(true);
    });
    it("CloseEvent", function () {
        // function CloseEvent() { [native code] }
        // expect(logger(new CloseEvent()), "[CloseEvent]", "CloseEvent");
        // TODO: CloseEvent
        // expect(true);
    });
    it("CompositionEvent", function () {
        // function CompositionEvent() { [native code] }
        // expect(logger(new CompositionEvent()), "[CompositionEvent]", "CompositionEvent");
        // TODO: CompositionEvent
        // expect(true);
    });
    it("Counter", function () {
        // function Counter() { [native code] }
        // expect(logger(new Counter()), "[Counter]", "Counter");
        // TODO: Counter
        // expect(true);
    });
    it("CustomEvent", function () {
        // function CustomEvent() { [native code] }
        // expect(logger(new CustomEvent()), "[CustomEvent]", "CustomEvent");
        // TODO: CustomEvent
        // expect(true);
    });
    it("DataView", function () {
        // code in dir "dom"
        // TODO: DataView
        // expect(true);
    });
    it("DeviceOrientationEvent", function () {
        // function DeviceOrientationEvent() { [native code] }
        // expect(logger(new DeviceOrientationEvent()), "[DeviceOrientationEvent]", "DeviceOrientationEvent");
        // TODO: DeviceOrientationEvent
        // expect(true);
    });
    it("ErrorEvent", function () {
        // function ErrorEvent() { [native code] }
        // expect(logger(new ErrorEvent()), "[ErrorEvent]", "ErrorEvent");
        // TODO: ErrorEvent
        // expect(true);
    });
    it("Event", function () {
        // function Event() { [native code] }
        // expect(logger(new Event()), "[Event]", "Event");
        // TODO: Event
        // expect(true);
    });
    it("EventException", function () {
        // function EventException() { [native code] }
        // expect(logger(new EventException()), "[EventException]", "EventException");
        // TODO: EventException
        // expect(true);
    });
    it("EventSource", function () {
        // function EventSource() { [native code] }
        // expect(logger(new EventSource()), "[EventSource]", "EventSource");
        // TODO: EventSource
        // expect(true);
    });
    it("File", function () {
        // function File() { [native code] }
        // expect(logger(new File()), "[File]", "File");
        // TODO: File
        // expect(true);
    });
    it("FileError", function () {
        // function FileError() { [native code] }
        // expect(logger(new FileError()), "[FileError]", "FileError");
        // TODO: FileError
        // expect(true);
    });
    it("FileList", function () {
        // function FileList() { [native code] }
        // expect(logger(new FileList()), "[FileList]", "FileList");
        // TODO: FileList
        // expect(true);
    });
    it("FileReader", function () {
        // function FileReader() { [native code] }
        // expect(logger(new FileReader()), "[FileReader]", "FileReader");
        // TODO: FileReader
        // expect(true);
    });
    it("FormData", function () {
        // function FormData() { [native code] }
        // expect(logger(new FormData()), "[FormData]", "FormData");
        // TODO: FormData
        // expect(true);
    });
    it("HashChangeEvent", function () {
        // function HashChangeEvent() { [native code] }
        // expect(logger(new HashChangeEvent()), "[HashChangeEvent]", "HashChangeEvent");
        // TODO: HashChangeEvent
        // expect(true);
    });
    it("IceCandidate", function () {
        // function IceCandidate() { [native code] }
        // expect(logger(new IceCandidate()), "[IceCandidate]", "IceCandidate");
        // TODO: IceCandidate
        // expect(true);
    });
    it("Image", function () {
        // [object Function]
        // expect(logger(new Image()), "[Image]", "Image");
        // TODO: Image
        // expect(true);
    });
    it("ImageData", function () {
        // function ImageData() { [native code] }
        // expect(logger(new ImageData()), "[ImageData]", "ImageData");
        // TODO: ImageData
        // expect(true);
    });
    it("KeyboardEvent", function () {
        // function KeyboardEvent() { [native code] }
        // expect(logger(new KeyboardEvent()), "[KeyboardEvent]", "KeyboardEvent");
        // TODO: KeyboardEvent
        // expect(true);
    });
    it("MediaController", function () {
        // function MediaController() { [native code] }
        // expect(logger(new MediaController()), "[MediaController]", "MediaController");
        // TODO: MediaController
        // expect(true);
    });
    it("MediaError", function () {
        // function MediaError() { [native code] }
        // expect(logger(new MediaError()), "[MediaError]", "MediaError");
        // TODO: MediaError
        // expect(true);
    });
    it("MediaList", function () {
        // function MediaList() { [native code] }
        // expect(logger(new MediaList()), "[MediaList]", "MediaList");
        // TODO: MediaList
        // expect(true);
    });
    it("MediaStreamEvent", function () {
        // function MediaStreamEvent() { [native code] }
        // expect(logger(new MediaStreamEvent()), "[MediaStreamEvent]", "MediaStreamEvent");
        // TODO: MediaStreamEvent
        // expect(true);
    });
    it("MessageChannel", function () {
        // function MessageChannel() { [native code] }
        // expect(logger(new MessageChannel()), "[MessageChannel]", "MessageChannel");
        // TODO: MessageChannel
        // expect(true);
    });
    it("MessageEvent", function () {
        // function MessageEvent() { [native code] }
        // expect(logger(new MessageEvent()), "[MessageEvent]", "MessageEvent");
        // TODO: MessageEvent
        // expect(true);
    });
    it("MessagePort", function () {
        // function MessagePort() { [native code] }
        // expect(logger(new MessagePort()), "[MessagePort]", "MessagePort");
        // TODO: MessagePort
        // expect(true);
    });
    it("MimeType", function () {
        // function MimeType() { [native code] }
        // expect(logger(new MimeType()), "[MimeType]", "MimeType");
        // TODO: MimeType
        // expect(true);
    });
    it("MimeTypeArray", function () {
        // function MimeTypeArray() { [native code] }
        // expect(logger(new MimeTypeArray()), "[MimeTypeArray]", "MimeTypeArray");
        // TODO: MimeTypeArray
        // expect(true);
    });
    it("MouseEvent", function () {
        // function MouseEvent() { [native code] }
        // expect(logger(new MouseEvent()), "[MouseEvent]", "MouseEvent");
        // TODO: MouseEvent
        // expect(true);
    });
    it("MutationEvent", function () {
        // function MutationEvent() { [native code] }
        // expect(logger(new MutationEvent()), "[MutationEvent]", "MutationEvent");
        // TODO: MutationEvent
        // expect(true);
    });
    it("Notation", function () {
        // function Notation() { [native code] }
        // expect(logger(new Notation()), "[Notation]", "Notation");
        // TODO: Notation
        // expect(true);
    });
    it("Notification", function () {
        // function Notification() { [native code] }
        // expect(logger(new Notification()), "[Notification]", "Notification");
        // TODO: Notification
        // expect(true);
    });
    it("OfflineAudioCompletionEvent", function () {
        // function OfflineAudioCompletionEvent() { [native code] }
        // expect(logger(new OfflineAudioCompletionEvent()), "[OfflineAudioCompletionEvent]", "OfflineAudioCompletionEvent");
        // TODO: OfflineAudioCompletionEvent
        // expect(true);
    });
    it("Option", function () {
        // [object Function]
        // expect(logger(new Option()), "[Option]", "Option");
        // TODO: Option
        // expect(true);
    });
    it("OverflowEvent", function () {
        // function OverflowEvent() { [native code] }
        // expect(logger(new OverflowEvent()), "[OverflowEvent]", "OverflowEvent");
        // TODO: OverflowEvent
        // expect(true);
    });
    it("PageTransitionEvent", function () {
        // function PageTransitionEvent() { [native code] }
        // expect(logger(new PageTransitionEvent()), "[PageTransitionEvent]", "PageTransitionEvent");
        // TODO: PageTransitionEvent
        // expect(true);
    });
    it("Plugin", function () {
        // function Plugin() { [native code] }
        // expect(logger(new Plugin()), "[Plugin]", "Plugin");
        // TODO: Plugin
        // expect(true);
    });
    it("PluginArray", function () {
        // function PluginArray() { [native code] }
        // expect(logger(new PluginArray()), "[PluginArray]", "PluginArray");
        // TODO: PluginArray
        // expect(true);
    });
    it("PopStateEvent", function () {
        // function PopStateEvent() { [native code] }
        // expect(logger(new PopStateEvent()), "[PopStateEvent]", "PopStateEvent");
        // TODO: PopStateEvent
        // expect(true);
    });
    it("ProcessingInstruction", function () {
        // function ProcessingInstruction() { [native code] }
        // expect(logger(new ProcessingInstruction()), "[ProcessingInstruction]", "ProcessingInstruction");
        // TODO: ProcessingInstruction
        // expect(true);
    });
    it("ProgressEvent", function () {
        // function ProgressEvent() { [native code] }
        // expect(logger(new ProgressEvent()), "[ProgressEvent]", "ProgressEvent");
        // TODO: ProgressEvent
        // expect(true);
    });
    it("RGBColor", function () {
        // function RGBColor() { [native code] }
        // expect(logger(new RGBColor()), "[RGBColor]", "RGBColor");
        // TODO: RGBColor
        // expect(true);
    });
    it("Range", function () {
        // function Range() { [native code] }
        // expect(logger(new Range()), "[Range]", "Range");
        // TODO: Range
        // expect(true);
    });
    it("RangeException", function () {
        // function RangeException() { [native code] }
        // expect(logger(new RangeException()), "[RangeException]", "RangeException");
        // TODO: RangeException
        // expect(true);
    });
    it("Rect", function () {
        // function Rect() { [native code] }
        // expect(logger(new Rect()), "[Rect]", "Rect");
        // TODO: Rect
        // expect(true);
    });
    it("SQLException", function () {
        // function SQLException() { [native code] }
        // expect(logger(new SQLException()), "[SQLException]", "SQLException");
        // TODO: SQLException
        // expect(true);
    });
    it("Selection", function () {
        // function Selection() { [native code] }
        // expect(logger(new Selection()), "[Selection]", "Selection");
        // TODO: Selection
        // expect(true);
    });
    it("SessionDescription", function () {
        // function SessionDescription() { [native code] }
        // expect(logger(new SessionDescription()), "[SessionDescription]", "SessionDescription");
        // TODO: SessionDescription
        // expect(true);
    });
    it("SharedWorker", function () {
        // function SharedWorker() { [native code] }
        // expect(logger(new SharedWorker()), "[SharedWorker]", "SharedWorker");
        // TODO: SharedWorker
        // expect(true);
    });
    it("SpeechInputEvent", function () {
        // function SpeechInputEvent() { [native code] }
        // expect(logger(new SpeechInputEvent()), "[SpeechInputEvent]", "SpeechInputEvent");
        // TODO: SpeechInputEvent
        // expect(true);
    });
    it("Storage", function () {
        // function Storage() { [native code] }
        expect(logger(localStorage), "[Storage]", "Storage");
        expect(logger(sessionStorage), "[Storage]", "Storage");
    });
    it("StorageEvent", function () {
        // function StorageEvent() { [native code] }
        // expect(logger(new StorageEvent()), "[StorageEvent]", "StorageEvent");
        // TODO: StorageEvent
        // expect(true);
    });
    it("StyleSheet", function () {
        // function StyleSheet() { [native code] }
        // expect(logger(new StyleSheet()), "[StyleSheet]", "StyleSheet");
        // TODO: StyleSheet
        // expect(true);
    });
    it("StyleSheetList", function () {
        // function StyleSheetList() { [native code] }
        // expect(logger(new StyleSheetList()), "[StyleSheetList]", "StyleSheetList");
        // TODO: StyleSheetList
        // expect(true);
    });
    it("Text", function () {
        // function Text() { [native code] }
        // expect(logger(new Text()), "[Text]", "Text");
        // TODO: Text
        // expect(true);
    });
    it("TextEvent", function () {
        // function TextEvent() { [native code] }
        // expect(logger(new TextEvent()), "[TextEvent]", "TextEvent");
        // TODO: TextEvent
        // expect(true);
    });
    it("TextMetrics", function () {
        // function TextMetrics() { [native code] }
        // expect(logger(new TextMetrics()), "[TextMetrics]", "TextMetrics");
        // TODO: TextMetrics
        // expect(true);
    });
    it("TimeRanges", function () {
        // function TimeRanges() { [native code] }
        // expect(logger(new TimeRanges()), "[TimeRanges]", "TimeRanges");
        // TODO: TimeRanges
        // expect(true);
    });
    it("TouchEvent", function () {
        // function TouchEvent() { [native code] }
        // expect(logger(new TouchEvent()), "[TouchEvent]", "TouchEvent");
        // TODO: TouchEvent
        // expect(true);
    });
    it("UIEvent", function () {
        // function UIEvent() { [native code] }
        // expect(logger(new UIEvent()), "[UIEvent]", "UIEvent");
        // TODO: UIEvent
        // expect(true);
    });
    it("WebSocket", function () {
        // function WebSocket() { [native code] }
        // expect(logger(new WebSocket()), "[WebSocket]", "WebSocket");
        // TODO: WebSocket
        // expect(true);
    });
    it("WheelEvent", function () {
        // function WheelEvent() { [native code] }
        // expect(logger(new WheelEvent()), "[WheelEvent]", "WheelEvent");
        // TODO: WheelEvent
        // expect(true);
    });
    it("Worker", function () {
        // function Worker() { [native code] }
        // expect(logger(new Worker()), "[Worker]", "Worker");
        // TODO: Worker
        // expect(true);
    });
    it("clientInformation", function () {
        // Navigator
        // expect(logger(new Navigator()), "[Navigator]", "Navigator");
        // TODO: clientInformation
        // expect(true);
    });
    it("console", function () {
        // Console
        // expect(logger(new Console()), "[Console]", "Console");
        // TODO: console
        // expect(true);
    });
    it("crypto", function () {
        // Crypto
        // expect(logger(new Crypto()), "[Crypto]", "Crypto");
        // TODO: crypto
        // expect(true);
    });
    it("document", function () {
        // HTMLDocument
        // expect(logger(new HTMLDocument()), "[HTMLDocument]", "HTMLDocument");
        // TODO: HTMLDocument
        // expect(true);
    });
    it("history", function () {
        // History
        // expect(logger(new History()), "[History]", "History");
        // TODO: History
        // expect(true);
    });
    it("location", function () {
        // Location
        // expect(logger(new Location()), "[Location]", "Location");
        // TODO: Location
        // expect(true);
    });
    it("navigator", function () {
        // Navigator
        // expect(logger(new Navigator()), "[Navigator]", "Navigator");
        // TODO: Navigator
        // expect(true);
    });
    it("performance", function () {
        // Performance
        // expect(logger(new Performance()), "[Performance]", "Performance");
        // TODO: Performance
        // expect(true);
    });
    it("screen", function () {
        // Screen
        // expect(logger(new Screen()), "[Screen]", "Screen");
        // TODO: Screen
        // expect(true);
    });
    it("styleMedia", function () {
        // StyleMedia
        // expect(logger(new StyleMedia()), "[StyleMedia]", "StyleMedia");
        // TODO: StyleMedia
        // expect(true);
    });
    it("v8Intl", function () {
        // Object
        // expect(logger(new v8Intl()), "[v8Intl]", "v8Intl");
        // TODO: v8Intl
        // expect(true);
    });
});
