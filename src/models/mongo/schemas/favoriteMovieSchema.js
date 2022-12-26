"use strict";
exports.__esModule = true;
exports.favoriteMovieModel = void 0;
var mongoose_1 = require("mongoose");
var movieId = { type: mongoose_1.Schema.Types.ObjectId, ref: 'movie' };
var userId = { type: mongoose_1.Schema.Types.ObjectId, ref: 'user' };
var createdAt = { type: Date, required: false };
var favoriteMovieCreateSchema = {
    movieId: movieId,
    userId: userId,
    createdAt: createdAt
};
var favoriteMovieSchema = new mongoose_1.Schema(favoriteMovieCreateSchema);
exports.favoriteMovieModel = (0, mongoose_1.model)("favoritemovie", favoriteMovieSchema);
