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
    "test/src/core/core-test.js",
    // "test/src/dom/*-test.js",
    // "test/src/bom/chrome/bom-core-test.js",
    // "test/src/bom/chrome/bom-css-test.js",
    "test/src/bom/chrome/bom-dom-test.js",
    // "test/src/bom/chrome/bom-svg-test.js",
    // "test/src/bom/chrome/bom-webgl-test.js",
    // "test/src/bom/chrome/bom-webkit-test.js",
    // "test/src/bom/firefox/bom-core-test.js",
    // "test/src/bom/ie/bom-core-test.js",
    "test/src/js/js-error-constructors-test.js",
    "test/src/js/js-falsy-values-test.js",
    "test/src/js/js-general-purpose-constructors-test.js",
    "test/src/js/js-other-test.js",
    "test/src/js/js-typed-array-constructors-test.js"
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