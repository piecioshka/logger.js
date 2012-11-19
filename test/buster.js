// Main configuration for BusterJS
var config = module.exports;

// Sources with a library
var sources = [
    "src/logger-core.js",
    "src/parser/dom-parser.js",
    "src/parser/js-parser.js",
    "src/logger-dom.js",
    "src/logger-js.js"
];

// Test case files
var tests = [
    "test/src/core/core-test.js",

    // DOM Chrome
    "test/src/dom/chrome/dom-core-test.js",
    // "test/src/dom/chrome/dom-css-test.js",
    // "test/src/dom/chrome/dom-dom-test.js",
    // "test/src/dom/chrome/dom-svg-test.js",
    // "test/src/dom/chrome/dom-webgl-test.js",
    // "test/src/dom/chrome/dom-webkit-test.js",

    // DOM Mozilla Firefox
    // "test/src/dom/firefox/dom-core-test.js",

    // DOM Internet Explorer
    // "test/src/dom/ie/dom-core-test.js",

    // W3C
    // "test/src/dom/w3c/*.js"

    // JavaScript Core
    "test/src/js/*.js"
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