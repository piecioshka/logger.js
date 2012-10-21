/**********************************************************************/
/* Logger Parser */
/**********************************************************************/

if (typeof require !== "undefined") {
    var logger = require("./logger-core.js");
}

logger.parser = function (data) {

    return {
        parse_type: "bom", // dom | bom | js
        parse_data: data // TODO: for what?
    }
};

