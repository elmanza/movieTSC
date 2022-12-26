"use strict";
exports.__esModule = true;
var multer = require("multer");
var config_1 = require("../../config");
var mkdirp = require("mkdirp");
var FILE_NAME = 'singleFile';
var TYPE_FILE = 'single';
var RULES = /jpeg|jpg|png|gif|tiff|psd|jfif/;
var FileManager = /** @class */ (function () {
    function FileManager(destinationFunction, fileNameFunction) {
        var destination = function (req, file, callback) {
            mkdirp.sync(config_1.config.uploadedFileFolder);
            callback(null, config_1.config.uploadedFileFolder);
        };
        var fileName = function (req, file, callback) {
            callback(null, file.originalname);
        };
        this.destination = destinationFunction || destination;
        this.fileName = fileNameFunction || fileName;
    }
    FileManager.prototype.uploadFile = function (fileName, type, rules, compressImage, limits, tmp) {
        if (fileName === void 0) { fileName = FILE_NAME; }
        if (type === void 0) { type = TYPE_FILE; }
        if (rules === void 0) { rules = RULES; }
        if (compressImage === void 0) { compressImage = false; }
        if (limits === void 0) { limits = {}; }
        if (tmp === void 0) { tmp = false; }
        var multerOptions = {
            storage: tmp ? multer.memoryStorage() : multer.diskStorage({
                filename: this.fileName,
                destination: this.destination
            }),
            limits: limits,
            fileFilter: function (req, file, callback) {
                if (!rules) {
                    return callback(null, true);
                }
            }
        };
        return multer(multerOptions).single(fileName);
    };
    return FileManager;
}());
exports["default"] = FileManager;
