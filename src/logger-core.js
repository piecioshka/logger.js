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

function logger(data, indent) {
    indent = indent || 0;

    if (typeof indent !== "number") {
        throw new Error("logger: indent is not number");
    }

    var i,
        // returned value
        res,

        // available special logger types
        parts = ["DOMLogger", "JSLogger"],

        // number of special loggers
        len = parts.length;

    // reset found status
    logger.found = false;

    // check if some special logger found value
    for (i = 0; i < len; ++i) {
        if ( (res = logger[parts[i]](data, indent)) !== undefined ) {
            logger.found = true;
            break;
        }
    }

    if ( logger.found ) {
        // if logger model has matched also returned parsing value
        return res;
    }

    // if not found, report w exception
    throw new Error("logger: unexpected data: undefined type of variable: " + logger.JSLogger({
        // value convert to string
        "toString": Object.prototype.toString.call( data ),
        "typeof": typeof data,
        "contructor": data.constructor && data.constructor.name
    }));
}

// found status
logger.found = false;

// parser's
logger.parser = {};

// public API
if (typeof module !== "undefined") {
    // only for NodeJS
    module.exports = logger;
}

