// http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core.html
describe("logger/dom DOM Core Level 1", function () {
    // 1.2. Fundamental Interfaces

    // exceptions
    it("[exception DOMException]", function () {
        // simple DOMException example
        // document.body.appendChild(null);
        expect(1).toBe(1);
    });
    // interfaces
    it("[interface DOMImplementation]", function () {
        expect(1).toBe(1);
    });
    it("[interface DocumentFragment : Node]", function () {
        expect(1).toBe(1);
    });
    it("[interface Document : Node]", function () {
        expect(1).toBe(1);
    });
    it("[interface Node]", function () {
        expect(1).toBe(1);
    });
    it("[interface NodeList]", function () {
        expect(1).toBe(1);
    });
    it("[interface NamedNodeMap]", function () {
        expect(1).toBe(1);
    });
    it("[interface CharacterData : Node]", function () {
        expect(1).toBe(1);
    });
    it("[interface Attr : Node]", function () {
        expect(1).toBe(1);
    });
    it("[interface Element : Node]", function () {
        expect(1).toBe(1);
    });
    it("[interface Text : CharacterData]", function () {
        expect(1).toBe(1);
    });
    it("[interface Comment : CharacterData]", function () {
        expect(1).toBe(1);
    });

    // 1.3. Extended Interfaces

    // interfaces
    it("[interface CDATASection : Text]", function () {
        expect(1).toBe(1);
    });
    it("[interface DocumentType : Node]", function () {
        expect(1).toBe(1);
    });
    it("[interface Notation : Node]", function () {
        expect(1).toBe(1);
    });
    it("[interface Entity : Node]", function () {
        expect(1).toBe(1);
    });
    it("[interface EntityReference : Node]", function () {
        expect(1).toBe(1);
    });
    it("[interface ProcessingInstruction : Node]", function () {
        expect(1).toBe(1);
    });
});
