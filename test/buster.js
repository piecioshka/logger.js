var config;
config = module.exports;

config["node-logger node"] = {
    rootPath: "../",
    environment: "node",
    sources: [
        "lib/logger-bom.js",
        "lib/logger-core.js",
        "lib/logger-dom.js",
        "lib/logger-js.js",
        "lib/logger-parser.js"
    ],
    tests: [
        "test/lib/core/*-test.js",
        "test/lib/parser/*-test.js",
        "test/lib/js/*-test.js"
    ]
};

/*
config["node-logger browser"] = {
    rootPath: "../",
    environment: "browser",
    sources: [
        "lib/logger-core.js",
        "lib/logger-parser.js",
        "lib/logger-dom.js",
        "lib/logger-bom.js",
        "lib/logger-js.js"
    ],
    tests: [
        "test/lib/core/*-test.js",
        "test/lib/parser/*-test.js",
        "test/lib/dom/*-test.js",
        "test/lib/bom/*-test.js",
        "test/lib/js/*-test.js"
    ]
};
*/

