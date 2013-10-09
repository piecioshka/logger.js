/******************************************************************************/
/* DOM Core Level 1 */
/******************************************************************************/

// http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core.html
describe("logger/dom DOM Core Level 1", function () {
    // 1.2. Fundamental Interfaces

    // exceptions
    it("[exception DOMException]", function () {
        // simple DOMException example
        // document.body.appendChild(null);
        expect(false);
    });

    // interfaces
    it("[interface DOMImplementation]", function () {
        expect(false);
    });
    it("[interface DocumentFragment : Node]", function () {
        expect(false);
    });
    it("[interface Document : Node]", function () {
        expect(false);
    });
    it("[interface Node]", function () {
        expect(false);
    });
    it("[interface NodeList]", function () {
        expect(false);
    });
    it("[interface NamedNodeMap]", function () {
        expect(false);
    });
    it("[interface CharacterData : Node]", function () {
        expect(false);
    });
    it("[interface Attr : Node]", function () {
        expect(false);
    });
    it("[interface Element : Node]", function () {
        expect(false);
    });
    it("[interface Text : CharacterData]", function () {
        expect(false);
    });
    it("[interface Comment : CharacterData]", function () {
        expect(false);
    });

    // 1.3. Extended Interfaces

    // interfaces
    it("[interface CDATASection : Text]", function () {
        expect(false);
    });
    it("[interface DocumentType : Node]", function () {
        expect(false);
    });
    it("[interface Notation : Node]", function () {
        expect(false);
    });
    it("[interface Entity : Node]", function () {
        expect(false);
    });
    it("[interface EntityReference : Node]", function () {
        expect(false);
    });
    it("[interface ProcessingInstruction : Node]", function () {
        expect(false);
    });
});
