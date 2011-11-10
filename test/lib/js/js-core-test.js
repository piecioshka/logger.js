/********************************************************************************/
/* FALSY VALUES */
/********************************************************************************/

buster.testCase("JS Core", {
    "Falsy Values": function () {
        assert.equals(Logger.dump.call("#", false), false, "false");
        assert.equals(Logger.dump.call("#", 0), 0, "0");
        assert.equals(Logger.dump.call("#", null), null, "null");
        assert.equals(Logger.dump.call("#", ''), '""', "''");
        assert.equals(Logger.dump.call("#", NaN), "NaN", "NaN");
        assert.equals(Logger.dump.call("#", undefined), undefined, "undefined");
    },
    
    /********************************************************************************/
    /* PRIMITIVE */
    /********************************************************************************/
    
    "Boolean": function () {
        assert.equals(Logger.dump.call("#", false), false, "Boolean false");
        assert.equals(Logger.dump.call("#", 1 === 0), false, "Boolean true");
        assert.equals(Logger.dump.call("#", true), true, "Boolean true");
        assert.equals(Logger.dump.call("#", 1 === 1), true, "Boolean true");
    },
    "Number": function () {
        assert.equals(Logger.dump.call("#", 1), 1, "Number 1");
        assert.equals(Logger.dump.call("#", 0), 0, "Number 0");
        assert.equals(Logger.dump.call("#", NaN), "NaN", "Number NaN");
        assert.equals(Logger.dump.call("#", Infinity), "Infinity", "Number Infinity");
        assert.equals(Logger.dump.call("#", -Infinity), "-Infinity", "Number -Infinity");
        (function () {
            assert.equals(Logger.dump.call("#", arguments.length), 0, "Number Arguments 0");
        }());
        (function (a) {
            assert.equals(Logger.dump.call("#", arguments.length), 1, "Number Arguments 1");
        }(1));
    },
    "String": function () {
        assert.equals(Logger.dump.call("#", "xyz"), "\"xyz\"", "String xyz");
        var array = [];
        array.push("abc");
        assert.equals(Logger.dump.call("#", array.join("")), "\"abc\"", "String abc");
        assert.equals(Logger.dump.call("#", "NaN"), "\"NaN\"", "String NaN");
        assert.equals(Logger.dump.call("#", "Infinity"), "\"Infinity\"", "String Infinity");
        assert.equals(Logger.dump.call("#", "-Infinity"), "\"-Infinity\"", "String -Infinity");
    },
    "Undefined": function () {
        var a;
        assert.equals(Logger.dump.call("#", a), undefined, "Undefined");
    },
    "Function": function () {
        assert.equals(Logger.dump.call("#", function () {
            return 1;
        }), "function () { [ignore code] }", "Function");
        assert.equals(Logger.dump.call("#", function (a, b) {
            return 1;
        }), "function (a, b) { [ignore code] }", "Function with params");
    },
    
    /********************************************************************************/
    /* OBJECT */
    /********************************************************************************/
    
    "Array": function () {
        assert.equals(Logger.dump.call("#", []), "[]", "Array");
        assert.equals(Logger.dump.call("#", [1, 2, 3, "A"]), "[1, 2, 3, \"A\"]", "Array with params");
        (function () {
            assert.equals(Logger.dump.call("#", arguments), "[]", "Arguments");
        }());
    },
    "Null": function () {
        var a = null;
        assert.equals(Logger.dump.call("#", a), null, "Null");
    },
    "JSON": function () {
        assert.equals(Logger.dump.call("#", {
            a: 1
        }), "{\n\t\"a\": 1,\n}", "JSON");
    },
    "prototype": function () {
        var result = ["function () { [ignore code] }", "function Empty() { [ignore code] }"],
            testing = Logger.dump.call("#", Function.prototype),
            in_side = false;
        for (var i = 0; i < result.length; ++i) {
            if (result[i] === testing) {
                in_side = true;
            }
        }
        assert(in_side, "Function.prototype");
        assert.equals(Logger.dump.call("#", function () {}.prototype), "{\n}", "function () {}.prototype");
    },
    "RegExp": function () {
        assert.equals(Logger.dump.call("#", /^(.*)$/), "/^(.*)$/", "RegExp");
    },
    "Date": function () {
        var d = new Date().toString();
        assert.equals(Logger.dump.call("#", new Date()), "Date(" + d + ")", "Date");
    }
});
