"use strict";
exports.__esModule = true;
var Path = require("path");
var config_1 = require("../../config");
var fileManager_1 = require("./fileManager");
var mkdirp = require("mkdirp");
var UploadFileFactory = /** @class */ (function () {
    function UploadFileFactory() {
    }
    UploadFileFactory.getTmpFolder = function (folderName) {
        return Path.resolve(config_1.config.uploadedFileFolder + '/tmp/' + folderName);
    };
    UploadFileFactory.getFileNameFunction = function (nameParams) {
        var fileName = function (req, file, callback) {
            if (typeof req.body[nameParams] == 'undefined') {
                req.body[nameParams] = {
                    files: []
                };
            }
            var originalname = file.originalname;
            var fileName = new Date().getTime() + '_' + originalname;
            req.body[nameParams].files.push({
                fileName: fileName,
                originalname: originalname
            });
            callback(null, fileName);
        };
        return fileName;
    };
    UploadFileFactory.getDestinationFunction = function (nameParams, path) {
        var destination = function (req, file, callback) {
            if (typeof req.body[nameParams] == 'undefined') {
                req.body[nameParams] = {
                    path: null,
                    files: []
                };
            }
            req.body[nameParams].path = path;
            mkdirp.sync(req.body[nameParams].path);
            callback(null, path);
        };
        return destination;
    };
    UploadFileFactory.prototype.getUploadMiddleware = function (nameParams, folderName, compressImage, rules, limits, tmp) {
        if (compressImage === void 0) { compressImage = false; }
        if (rules === void 0) { rules = null; }
        if (limits === void 0) { limits = {}; }
        if (tmp === void 0) { tmp = false; }
        var path = UploadFileFactory.getTmpFolder(folderName);
        var destination = UploadFileFactory.getDestinationFunction(nameParams, path);
        var fileName = UploadFileFactory.getFileNameFunction(nameParams);
        var fileManager = new fileManager_1["default"](destination, fileName);
        return fileManager.uploadFile(nameParams, 'array', rules, compressImage, limits, tmp);
    };
    return UploadFileFactory;
}());
exports["default"] = new UploadFileFactory();
