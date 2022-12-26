"use strict";
exports.__esModule = true;
exports.userModel = void 0;
var mongoose_1 = require("mongoose");
var name = { type: String, required: true };
var username = { type: String, required: true };
var password = { type: String, required: true };
var token = { type: String, required: false };
var currentaccess = { type: String, required: false };
var session_id = { type: String, required: false };
var userCreateSchema = {
    name: name,
    username: username,
    password: password,
    token: token,
    currentaccess: currentaccess,
    session_id: session_id
};
var userSchema = new mongoose_1.Schema(userCreateSchema);
exports.userModel = (0, mongoose_1.model)("user", userSchema);
