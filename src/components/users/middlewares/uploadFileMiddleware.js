"use strict";
exports.__esModule = true;
var uploadFileFactoryHandler_1 = require("../../../utils/multer/uploadFileFactoryHandler");
exports["default"] = {
    uploadFile: function () {
        return uploadFileFactoryHandler_1["default"].getUploadMiddleware('userFiles', 'userFiles', undefined, undefined, { files: 4 }, false);
    }
};
