/******************************************************************************/
/* Logger DOM */
/******************************************************************************/

if (typeof require !== "undefined") {
    var logger = require("./logger-core.js");
}

(function () {
    "use strict";

    var toString = Object.prototype.toString;

    // Types of all available node
    var nodeTypes = {
        "ELEMENT_NODE": 1,
        "ATTRIBUTE_NODE": 2,
        "TEXT_NODE": 3,
        "CDATA_SECTION_NODE": 4,
        "ENTITY_REFERENCE_NODE": 5,
        "ENTITY_NODE": 6,
        "PROCESSING_INSTRUCTION_NODE": 7,
        "COMMENT_NODE": 8,
        "DOCUMENT_NODE": 9,
        "DOCUMENT_TYPE_NODE": 10,
        "DOCUMENT_FRAGMENT_NODE": 11,
        "NOTATION_NODE": 12
    };

    function trim(source) {
        return source.replace(/^\s+|\s+$/g, "");
    }

    var checker = {
        "NamedNodeMap": function (o) { return o && o instanceof NamedNodeMap &&
            toString.call(o) === "[object NamedNodeMap]";
        },
        "Attr": function (o) { return o && o instanceof Attr &&
            toString.call(o) === "[object Attr]";
        },
        "HTMLDivElement": function (o) { return o && o instanceof HTMLDivElement &&
            toString.call(o) === "[object HTMLDivElement]";
        }
    };

    logger.dom = function (data) {
        var res,
            type;

        for (type in checker) {
            if (checker.hasOwnProperty(type)) {
                if (checker[type].call(null, data)) {
                    res = logger.parser.dom[type].call(this, data);
                }
            }
        }

        return res;
    };
}).call(this);

