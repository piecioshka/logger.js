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
        // expect(true);
    });

    // interfaces
    it("[interface DOMImplementation]", function () {
        // expect(true);
    });
    it("[interface DocumentFragment : Node]", function () {
        // expect(true);
    });
    it("[interface Document : Node]", function () {
        // expect(true);
    });
    it("[interface Node]", function () {
        // expect(true);
    });
    it("[interface NodeList]", function () {
        // expect(true);
    });
    it("[interface NamedNodeMap]", function () {
        // expect(true);
    });
    it("[interface CharacterData : Node]", function () {
        // expect(true);
    });
    it("[interface Attr : Node]", function () {
        // expect(true);
    });
    it("[interface Element : Node]", function () {
        // expect(true);
    });
    it("[interface Text : CharacterData]", function () {
        // expect(true);
    });
    it("[interface Comment : CharacterData]", function () {
        // expect(true);
    });

    // 1.3. Extended Interfaces

    // interfaces
    it("[interface CDATASection : Text]", function () {
        // expect(true);
    });
    it("[interface DocumentType : Node]", function () {
        // expect(true);
    });
    it("[interface Notation : Node]", function () {
        // expect(true);
    });
    it("[interface Entity : Node]", function () {
        // expect(true);
    });
    it("[interface EntityReference : Node]", function () {
        // expect(true);
    });
    it("[interface ProcessingInstruction : Node]", function () {
        // expect(true);
    });
});
