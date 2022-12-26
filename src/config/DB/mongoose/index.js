"use strict";
exports.__esModule = true;
exports.Database = void 0;
var mongoose_1 = require("mongoose");
var __1 = require("../..");
mongoose_1["default"].set("debug", true);
mongoose_1["default"].set("strictQuery", false);
var connection = null;
exports.Database = {
    connect: function () {
        if (connection)
            return connection;
        return mongoose_1["default"].connect(__1.db.mongo).then(function (connectionDB) {
            connection = connectionDB;
            console.log('Mongoose Connected!');
        })["catch"](function (err) { return console.log("[Error Mongoose]", err); });
    }
};
