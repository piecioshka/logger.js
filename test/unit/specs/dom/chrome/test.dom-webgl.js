/******************************************************************************/
/* TEST CASE: logger.bom(): Chrome WebGL */
/******************************************************************************/

xdescribe("logger/bom/chrome WegGL", function () {
    it("WebGLActiveInfo", function () {
        // function WebGLActiveInfo() { [native code] }
        expect(logger(new WebGLActiveInfo()), "[WebGLActiveInfo]", "WebGLActiveInfo");
    });
    it("WebGLBuffer", function () {
        // function WebGLBuffer() { [native code] }
        expect(logger(new WebGLBuffer()), "[WebGLBuffer]", "WebGLBuffer");
    });
    it("WebGLContextEvent", function () {
        // function WebGLContextEvent() { [native code] }
        expect(logger(new WebGLContextEvent()), "[WebGLContextEvent]", "WebGLContextEvent");
    });
    it("WebGLFramebuffer", function () {
        // function WebGLFramebuffer() { [native code] }
        expect(logger(new WebGLFramebuffer()), "[WebGLFramebuffer]", "WebGLFramebuffer");
    });
    it("WebGLProgram", function () {
        // function WebGLProgram() { [native code] }
        expect(logger(new WebGLProgram()), "[WebGLProgram]", "WebGLProgram");
    });
    it("WebGLRenderbuffer", function () {
        // function WebGLRenderbuffer() { [native code] }
        expect(logger(new WebGLRenderbuffer()), "[WebGLRenderbuffer]", "WebGLRenderbuffer");
    });
    it("WebGLRenderingContext", function () {
        // function WebGLRenderingContext() { [native code] }
        expect(logger(new WebGLRenderingContext()), "[WebGLRenderingContext]", "WebGLRenderingContext");
    });
    it("WebGLShader", function () {
        // function WebGLShader() { [native code] }
        expect(logger(new WebGLShader()), "[WebGLShader]", "WebGLShader");
    });
    it("WebGLShaderPrecisionFormat", function () {
        // function WebGLShaderPrecisionFormat() { [native code] }
        expect(logger(new WebGLShaderPrecisionFormat()), "[WebGLShaderPrecisionFormat]", "WebGLShaderPrecisionFormat");
    });
    it("WebGLTexture", function () {
        // function WebGLTexture() { [native code] }
        expect(logger(new WebGLTexture()), "[WebGLTexture]", "WebGLTexture");
    });
    it("WebGLUniformLocation", function () {
        // function WebGLUniformLocation() { [native code] }
        expect(logger(new WebGLUniformLocation()), "[WebGLUniformLocation]", "WebGLUniformLocation");
    });
});
