/**
 * @fileOverview Simple JavaScript logger with text/plain output.
 * @author Piotr Kowalski <piecioshka@gmail.com>
 * @see https://github.com/piecioshka/logger
 * @license: The MIT License
 * @example:
 * // run
 *   logger([1, {foo: "bar"}]);
 * // output
 *   [1, {
 *      "foo": "bar"
 *   }]"
 */
(function (global) {
    'use strict';

    var logger = global.logger = function (data, indent) {
        indent = indent || 0;

        if (typeof indent !== "number") {
            throw new Error("logger: indent is not number");
        }

        // returned value
        var resource;
        // available special logger types
        var parts = ["DOMLogger", "JSLogger"];
        // iterator
        var i;
        // number of special loggers
        var len = parts.length;

        // reset found status
        logger.found = false;

        // check if some special logger found value
        for (i = 0; i < len; ++i) {
            if ((resource = logger[parts[i]](data, indent)) !== undefined) {
                logger.found = true;
                break;
            }
        }

        if (logger.found) {
            // if logger model has matched also returned parsing value
            return resource;
        }

        // if not found, report w exception
        throw new Error("logger: unexpected data: undefined type of variable: " + logger.JSLogger({
            // value convert to string
            "toString": Object.prototype.toString.call(data),
            "typeof": typeof data,
            "constructor": data.constructor && data.constructor.name
        }));
    };

    // found status
    logger.found = false;

    // parser's
    logger.parser = {};

}(this));