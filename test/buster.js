// Main configuration for BusterJS
var config = module.exports;

// Sources with a library
var sources = [
    "src/logger-core.js",
    "src/logger-parser.js",
    "src/logger-dom.js",
    "src/logger-bom.js",
    "src/logger-js.js"
];

// Test case files
var tests = [
    // "test/src/core/*-test.js",
    // "test/src/dom/*-test.js",
    "test/src/bom/*-test.js"
    // "test/src/js/*-test.js"
];

/******************************************************************************/
/* Hybrid Test: Browser + NodeJS */
/******************************************************************************/

config["node-text-plain-logger @ browser"] = {
    rootPath: "../",
    environment: "browser",
    sources: sources,
    tests: tests
};

/*
config["node-text-plain-logger @ node"] = {
    rootPath: "../",
    environment: "node",
    sources: sources,
    tests: tests
};
*/