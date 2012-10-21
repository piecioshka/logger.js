/**********************************************************************/
/* Logger BOM */
/**********************************************************************/

if (typeof require !== "undefined") {
    var logger = require("./logger-core.js");
}

logger.bom = function (data) {
    return data;
};

