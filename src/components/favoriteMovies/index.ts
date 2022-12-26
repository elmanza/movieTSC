import { Router, Application } from "express";
const router = Router();
const MovieController = require("./controllers/favoriteMovieController");
const authenticatedUser = require('../../utils/middlewares/authenticatedUser');

export default (app:Application) =>{
    app.use("/favoritemovie", router);
    
    router.use(authenticatedUser);
    router.post('/', MovieController.toggle);
}