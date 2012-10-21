var config;
config = module.exports;

config["node-logger node"] = {
    rootPath: "../",
    environment: "node",
    sources: [
        "src/logger-bom.js",
        "src/logger-core.js",
        "src/logger-dom.js",
        "src/logger-js.js",
        "src/logger-parser.js"
    ],
    tests: [
        "test/src/core/*-test.js",
        "test/src/parser/*-test.js",
        "test/src/js/*-test.js"
    ]
};

/*
config["node-logger browser"] = {
    rootPath: "../",
    environment: "browser",
    sources: [
        "src/logger-core.js",
        "src/logger-parser.js",
        "src/logger-dom.js",
        "src/logger-bom.js",
        "src/logger-js.js"
    ],
    tests: [
        "test/src/core/*-test.js",
        "test/src/parser/*-test.js",
        "test/src/dom/*-test.js",
        "test/src/bom/*-test.js",
        "test/src/js/*-test.js"
    ]
};
*/

