"use strict";
exports.__esModule = true;
exports.movieModel = void 0;
var mongoose_1 = require("mongoose");
var movieApiId = { type: Number, required: true };
var movieIMDBId = { type: String, required: true };
var genres = { type: [mongoose_1.Schema.Types.Mixed], required: false };
var originalLanguages = { type: String };
var title = { type: String, required: true };
var overview = { type: Boolean };
var popularity = { type: Number };
var posterPath = { type: String };
var releaseDate = { type: Date };
var video = { type: Boolean };
var voteAverage = { type: Number };
var voteCount = { type: Number };
var notes = [{ type: mongoose_1.Types.ObjectId, ref: 'movienote' }];
var movieCreateSchema = {
    movieApiId: movieApiId,
    movieIMDBId: movieIMDBId,
    genres: genres,
    originalLanguages: originalLanguages,
    title: title,
    overview: overview,
    popularity: popularity,
    posterPath: posterPath,
    releaseDate: releaseDate,
    video: video,
    voteAverage: voteAverage,
    voteCount: voteCount,
    notes: notes
};
var movieSchema = new mongoose_1.Schema(movieCreateSchema);
exports.movieModel = (0, mongoose_1.model)("movie", movieSchema);
