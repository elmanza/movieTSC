"use strict";
exports.__esModule = true;
var movies_1 = require("../components/movies");
var users_1 = require("../components/users");
var authenticationTMDB_1 = require("../components/authenticationTMDB");
var favoriteMovies_1 = require("../components/favoriteMovies");
var NotesMovies_1 = require("../components/NotesMovies");
exports["default"] = (function (app) {
    (0, movies_1["default"])(app);
    (0, users_1["default"])(app);
    (0, authenticationTMDB_1["default"])(app);
    (0, favoriteMovies_1["default"])(app);
    (0, NotesMovies_1["default"])(app);
    app.get("/", function (req, res) { return res.send("Todo ok!!!"); });
});
