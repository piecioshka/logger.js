/********************************************************************************/
/* BOM Core */
/********************************************************************************/

buster.testCase("BOM Core", {
    "Document": function () {
        assert.equals(Logger.dump.call("#", document), "Document '" + location.href + "'", "Document");
    },
    "Window": function () {
        assert.equals(Logger.dump.call("#", window), "Window '" + location.href + "'", "Window");
    }
});
