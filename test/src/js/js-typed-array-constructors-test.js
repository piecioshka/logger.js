/******************************************************************************/
/* TEST CASE: logger.js(): Typed array constructors */
/******************************************************************************/

if (require !== undefined) {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../src/logger-core.js");
}

buster.testCase("logger/js Typed array constructors", {

/******************************************************************************/
/* Typed array constructors */
/******************************************************************************/

    "ArrayBuffer": function () {
        assert.equals(logger(new ArrayBuffer(Infinity)), "[].byteLength: 0", "Typed array constructors: ArrayBuffer: Infinity");
        assert.equals(logger(new ArrayBuffer(0)), "[].byteLength: 0", "Typed array constructors: ArrayBuffer: 0");
        assert.equals(logger(new ArrayBuffer(2)), "[].byteLength: 2", "Typed array constructors: ArrayBuffer: 2");
        assert.equals(logger(new ArrayBuffer(Math.E)), "[].byteLength: 2", "Typed array constructors: ArrayBuffer: Math.E");
        assert.equals(logger(new ArrayBuffer(5)), "[].byteLength: 5", "Typed array constructors: ArrayBuffer: 5");
        assert.equals(logger(new ArrayBuffer(123456789)), "[].byteLength: 123456789", "Typed array constructors: ArrayBuffer: 123456789");
        assert.equals(logger(new ArrayBuffer(Number.MAX_VALUE)), "[].byteLength: 0", "Typed array constructors: ArrayBuffer: Number.MAX_VALUE");
    },

    "DataView": function () {
        assert.equals(logger(new DataView(new ArrayBuffer(1), 0)), "[].buffer.byteLength: 1", "Typed array constructors: DataView: 1");
        assert.equals(logger(new DataView(new ArrayBuffer(123456789))), "[].buffer.byteLength: 123456789", "Typed array constructors: DataView: 123456789");

        assert.equals(logger(new DataView(new ArrayBuffer(12), 0, 0)), "[].buffer.byteLength: 12", "Typed array constructors: DataView: 12");
    },

    "Float32Array": function () {
        assert.equals(logger(new Float32Array(0)), "[].buffer.byteLength: 0", "Typed array constructors: Float32Array: 0");
        assert.equals(logger(new Float32Array(1)), "[].buffer.byteLength: 4", "Typed array constructors: Float32Array: 1");
        assert.equals(logger(new Float32Array(Number.MAX_VALUE)), "[].buffer.byteLength: 0", "Typed array constructors: Float32Array: Number.MAX_VALUE");
    },

    "Float64Array": function () {
        assert.equals(logger(new Float64Array(0)), "[].buffer.byteLength: 0", "Typed array constructors: Float64Array: 0");
        assert.equals(logger(new Float64Array(1)), "[].buffer.byteLength: 8", "Typed array constructors: Float64Array: 1");
        assert.equals(logger(new Float64Array(Number.MAX_VALUE)), "[].buffer.byteLength: 0", "Typed array constructors: Float64Array: Number.MAX_VALUE");
    },

    "Int16Array": function () {
        assert.equals(logger(new Int16Array(0)), "[].buffer.byteLength: 0", "Typed array constructors: Int16Array: 0");
        assert.equals(logger(new Int16Array(1)), "[].buffer.byteLength: 2", "Typed array constructors: Int16Array: 1");
        assert.equals(logger(new Int16Array(Number.MAX_VALUE)), "[].buffer.byteLength: 0", "Typed array constructors: Int16Array: Number.MAX_VALUE");
    },

    "Int32Array": function () {
        assert.equals(logger(new Int32Array(0)), "[].buffer.byteLength: 0", "Typed array constructors: Int32Array: 0");
        assert.equals(logger(new Int32Array(1)), "[].buffer.byteLength: 4", "Typed array constructors: Int32Array: 1");
        assert.equals(logger(new Int32Array(Number.MAX_VALUE)), "[].buffer.byteLength: 0", "Typed array constructors: Int32Array: Number.MAX_VALUE");
    },

    "Int8Array": function () {
        assert.equals(logger(new Int8Array(0)), "[].buffer.byteLength: 0", "Typed array constructors: Int8Array: 0");
        assert.equals(logger(new Int8Array(1)), "[].buffer.byteLength: 1", "Typed array constructors: Int8Array: 1");
        assert.equals(logger(new Int8Array(Number.MAX_VALUE)), "[].buffer.byteLength: 0", "Typed array constructors: Int8Array: Number.MAX_VALUE");
    },

    "Uint16Array": function () {
        assert.equals(logger(new Uint16Array(0)), "[].buffer.byteLength: 0", "Typed array constructors: Uint16Array: 0");
        assert.equals(logger(new Uint16Array(1)), "[].buffer.byteLength: 2", "Typed array constructors: Uint16Array: 1");
        assert.equals(logger(new Uint16Array(Number.MAX_VALUE)), "[].buffer.byteLength: 0", "Typed array constructors: Uint16Array: Number.MAX_VALUE");
    },

    "Uint32Array": function () {
        assert.equals(logger(new Uint32Array(0)), "[].buffer.byteLength: 0", "Typed array constructors: Uint32Array: 0");
        assert.equals(logger(new Uint32Array(1)), "[].buffer.byteLength: 4", "Typed array constructors: Uint32Array: 1");
        assert.equals(logger(new Uint32Array(Number.MAX_VALUE)), "[].buffer.byteLength: 0", "Typed array constructors: Uint32Array: Number.MAX_VALUE");
    },

    "Uint8Array": function () {
        assert.equals(logger(new Uint8Array(0)), "[].buffer.byteLength: 0", "Typed array constructors: Uint8Array: 0");
        assert.equals(logger(new Uint8Array(1)), "[].buffer.byteLength: 1", "Typed array constructors: Uint8Array: 1");
        assert.equals(logger(new Uint8Array(Number.MAX_VALUE)), "[].buffer.byteLength: 0", "Typed array constructors: Uint8Array: Number.MAX_VALUE");
    }

    // Harmony JS
    // "Uint8ClampedArray": function () { assert(false); },

});
