/******************************************************************************/
/* TEST CASE: logger.bom(): Chrome WebGL */
/******************************************************************************/

if (typeof require !== "undefined") {
    // Node.js tests
    var buster = require("buster");
    var logger = require("../../../src/logger-core.js");
}

buster.testCase("logger/bom/chrome WegGL", {
    "WebGLActiveInfo": function () {
        // function WebGLActiveInfo() { [native code] }
        assert.equals(logger(new WebGLActiveInfo()), "[WebGLActiveInfo]", "WebGLActiveInfo");
    },
    "WebGLBuffer": function () {
        // function WebGLBuffer() { [native code] }
        assert.equals(logger(new WebGLBuffer()), "[WebGLBuffer]", "WebGLBuffer");
    },
    "WebGLContextEvent": function () {
        // function WebGLContextEvent() { [native code] }
        assert.equals(logger(new WebGLContextEvent()), "[WebGLContextEvent]", "WebGLContextEvent");
    },
    "WebGLFramebuffer": function () {
        // function WebGLFramebuffer() { [native code] }
        assert.equals(logger(new WebGLFramebuffer()), "[WebGLFramebuffer]", "WebGLFramebuffer");
    },
    "WebGLProgram": function () {
        // function WebGLProgram() { [native code] }
        assert.equals(logger(new WebGLProgram()), "[WebGLProgram]", "WebGLProgram");
    },
    "WebGLRenderbuffer": function () {
        // function WebGLRenderbuffer() { [native code] }
        assert.equals(logger(new WebGLRenderbuffer()), "[WebGLRenderbuffer]", "WebGLRenderbuffer");
    },
    "WebGLRenderingContext": function () {
        // function WebGLRenderingContext() { [native code] }
        assert.equals(logger(new WebGLRenderingContext()), "[WebGLRenderingContext]", "WebGLRenderingContext");
    },
    "WebGLShader": function () {
        // function WebGLShader() { [native code] }
        assert.equals(logger(new WebGLShader()), "[WebGLShader]", "WebGLShader");
    },
    "WebGLShaderPrecisionFormat": function () {
        // function WebGLShaderPrecisionFormat() { [native code] }
        assert.equals(logger(new WebGLShaderPrecisionFormat()), "[WebGLShaderPrecisionFormat]", "WebGLShaderPrecisionFormat");
    },
    "WebGLTexture": function () {
        // function WebGLTexture() { [native code] }
        assert.equals(logger(new WebGLTexture()), "[WebGLTexture]", "WebGLTexture");
    },
    "WebGLUniformLocation": function () {
        // function WebGLUniformLocation() { [native code] }
        assert.equals(logger(new WebGLUniformLocation()), "[WebGLUniformLocation]", "WebGLUniformLocation");
    }
});
