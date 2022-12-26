"use strict";
exports.__esModule = true;
exports.movieNoteModel = void 0;
var mongoose_1 = require("mongoose");
var movieId = { type: mongoose_1.Schema.Types.ObjectId, ref: 'movie' };
var userId = { type: mongoose_1.Schema.Types.ObjectId, ref: 'user' };
var noteTitle = { type: String, required: true };
var description = { type: String, required: true };
var createdAt = { type: Date, required: false };
var movieNoteCreateSchema = {
    movieId: movieId,
    userId: userId,
    noteTitle: noteTitle,
    description: description,
    createdAt: createdAt
};
var movieNoteSchema = new mongoose_1.Schema(movieNoteCreateSchema);
exports.movieNoteModel = (0, mongoose_1.model)("movienote", movieNoteSchema);
