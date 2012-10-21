/**********************************************************************/
/* Logger DOM */
/**********************************************************************/

if (typeof require !== "undefined") {
    var logger = require("./logger-core.js");
}

logger.dom = function (data) {
    return data;
};

