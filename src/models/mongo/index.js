"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.favoriteMovieModel = exports.movieModel = exports.movieNoteModel = exports.userModel = void 0;
var userSchema_1 = require("./schemas/userSchema");
__createBinding(exports, userSchema_1, "userModel");
var movieNoteSchema_1 = require("./schemas/movieNoteSchema");
__createBinding(exports, movieNoteSchema_1, "movieNoteModel");
var movieSchema_1 = require("./schemas/movieSchema");
__createBinding(exports, movieSchema_1, "movieModel");
var favoriteMovieSchema_1 = require("./schemas/favoriteMovieSchema");
__createBinding(exports, favoriteMovieSchema_1, "favoriteMovieModel");
// export default {
//   movieModel,
//   userModel,
//   movieNoteModel,
//   favoriteMovieModel
// }
