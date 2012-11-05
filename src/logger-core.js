// Copyright Piotr Kowalski and other contributors.
//
// MIT License
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function logger(data) {
    var i = 0,
        // returned value
        res,

        // available special logger types
        parts = ["bom", "dom", "js"],

        // number of special loggers
        len = parts.length;

    // reset found status
    logger.found = false;

    // if run that "new logger()" conv to "logger()"
    if (this instanceof logger) {
        return logger;
    }

    // check if some special logger found value
    for (; i < len; ++i) {
        if ((res = logger[parts[i]](data)) !== undefined) {
            logger.found = true;
            break;
        }
    }

    if (logger.found) {
        // if found parse value return that
        return res;
    }

    // if not found, report w exception
    throw {
        name: "LoggerUnexpectedTypeError",
        message: "Undefined type of variable: " + data
    };
}

// found status
logger.found = false;

// public API
if (typeof module !== "undefined") {
    // only for NodeJS
    module.exports = logger;
}

