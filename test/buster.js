var config = module.exports;

config["node-logger test"] = {
    rootPath: "../",
    environment: "node", // "browser" or "node"
    sources: [
        "lib/logger-core.js"
        // "lib/parser.js",
        // "lib/bom-core.js",
        // "lib/dom-core.js",
        // "lib/js-core.js"
    ],
    tests: [
        "test/lib/core/core-test.js"
        // "test/lib/**/*-test.js"
    ]
};
