describe("logger/js Typed array constructors", function () {

/******************************************************************************/
/* Typed array constructors */
/******************************************************************************/

    it("ArrayBuffer", function () {
        expect(logger(new ArrayBuffer(Infinity))).toEqual("[].byteLength: 0");
        expect(logger(new ArrayBuffer(0))).toEqual("[].byteLength: 0");
        expect(logger(new ArrayBuffer(2))).toEqual("[].byteLength: 2");
        expect(logger(new ArrayBuffer(Math.E))).toEqual("[].byteLength: 2");
        expect(logger(new ArrayBuffer(5))).toEqual("[].byteLength: 5");
        expect(logger(new ArrayBuffer(123456789))).toEqual("[].byteLength: 123456789");
        expect(logger(new ArrayBuffer(Number.MAX_VALUE))).toEqual("[].byteLength: 0");
    });

    it("DataView", function () {
        expect(logger(new DataView(new ArrayBuffer(1), 0))).toEqual("[].buffer.byteLength: 1");
        expect(logger(new DataView(new ArrayBuffer(123456789)))).toEqual("[].buffer.byteLength: 123456789");

        expect(logger(new DataView(new ArrayBuffer(12), 0, 0))).toEqual("[].buffer.byteLength: 12");
    });

    it("Float32Array", function () {
        expect(logger(new Float32Array(0))).toEqual("[].buffer.byteLength: 0");
        expect(logger(new Float32Array(1))).toEqual("[].buffer.byteLength: 4");
        expect(logger(new Float32Array(Number.MAX_VALUE))).toEqual("[].buffer.byteLength: 0");
    });

    it("Float64Array", function () {
        expect(logger(new Float64Array(0))).toEqual("[].buffer.byteLength: 0");
        expect(logger(new Float64Array(1))).toEqual("[].buffer.byteLength: 8");
        expect(logger(new Float64Array(Number.MAX_VALUE))).toEqual("[].buffer.byteLength: 0");
    });

    it("Int16Array", function () {
        expect(logger(new Int16Array(0))).toEqual("[].buffer.byteLength: 0");
        expect(logger(new Int16Array(1))).toEqual("[].buffer.byteLength: 2");
        expect(logger(new Int16Array(Number.MAX_VALUE))).toEqual("[].buffer.byteLength: 0");
    });

    it("Int32Array", function () {
        expect(logger(new Int32Array(0))).toEqual("[].buffer.byteLength: 0");
        expect(logger(new Int32Array(1))).toEqual("[].buffer.byteLength: 4");
        expect(logger(new Int32Array(Number.MAX_VALUE))).toEqual("[].buffer.byteLength: 0");
    });

    it("Int8Array", function () {
        expect(logger(new Int8Array(0))).toEqual("[].buffer.byteLength: 0");
        expect(logger(new Int8Array(1))).toEqual("[].buffer.byteLength: 1");
        expect(logger(new Int8Array(Number.MAX_VALUE))).toEqual("[].buffer.byteLength: 0");
    });

    it("Uint16Array", function () {
        expect(logger(new Uint16Array(0))).toEqual("[].buffer.byteLength: 0");
        expect(logger(new Uint16Array(1))).toEqual("[].buffer.byteLength: 2");
        expect(logger(new Uint16Array(Number.MAX_VALUE))).toEqual("[].buffer.byteLength: 0");
    });

    it("Uint32Array", function () {
        expect(logger(new Uint32Array(0))).toEqual("[].buffer.byteLength: 0");
        expect(logger(new Uint32Array(1))).toEqual("[].buffer.byteLength: 4");
        expect(logger(new Uint32Array(Number.MAX_VALUE))).toEqual("[].buffer.byteLength: 0");
    });

    it("Uint8Array", function () {
        expect(logger(new Uint8Array(0))).toEqual("[].buffer.byteLength: 0");
        expect(logger(new Uint8Array(1))).toEqual("[].buffer.byteLength: 1");
        expect(logger(new Uint8Array(Number.MAX_VALUE))).toEqual("[].buffer.byteLength: 0");
    });

    // Harmony JS
    // "Uint8ClampedArray", function () { assert(false); },

});
