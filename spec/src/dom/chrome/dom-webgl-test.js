describe("logger/bom/chrome WegGL", function () {
    it("WebGLActiveInfo", function () {
        // function WebGLActiveInfo() { [native code] }
        expect(logger(new WebGLActiveInfo())).toEqual("[WebGLActiveInfo]");
    });
    it("WebGLBuffer", function () {
        // function WebGLBuffer() { [native code] }
        expect(logger(new WebGLBuffer())).toEqual("[WebGLBuffer]");
    });
    it("WebGLContextEvent", function () {
        // function WebGLContextEvent() { [native code] }
        expect(logger(new WebGLContextEvent())).toEqual("[WebGLContextEvent]");
    });
    it("WebGLFramebuffer", function () {
        // function WebGLFramebuffer() { [native code] }
        expect(logger(new WebGLFramebuffer())).toEqual("[WebGLFramebuffer]");
    });
    it("WebGLProgram", function () {
        // function WebGLProgram() { [native code] }
        expect(logger(new WebGLProgram())).toEqual("[WebGLProgram]");
    });
    it("WebGLRenderbuffer", function () {
        // function WebGLRenderbuffer() { [native code] }
        expect(logger(new WebGLRenderbuffer())).toEqual("[WebGLRenderbuffer]");
    });
    it("WebGLRenderingContext", function () {
        // function WebGLRenderingContext() { [native code] }
        expect(logger(new WebGLRenderingContext())).toEqual("[WebGLRenderingContext]");
    });
    it("WebGLShader", function () {
        // function WebGLShader() { [native code] }
        expect(logger(new WebGLShader())).toEqual("[WebGLShader]");
    });
    it("WebGLShaderPrecisionFormat", function () {
        // function WebGLShaderPrecisionFormat() { [native code] }
        expect(logger(new WebGLShaderPrecisionFormat())).toEqual("[WebGLShaderPrecisionFormat]");
    });
    it("WebGLTexture", function () {
        // function WebGLTexture() { [native code] }
        expect(logger(new WebGLTexture())).toEqual("[WebGLTexture]");
    });
    it("WebGLUniformLocation", function () {
        // function WebGLUniformLocation() { [native code] }
        expect(logger(new WebGLUniformLocation())).toEqual("[WebGLUniformLocation]");
    });
});
