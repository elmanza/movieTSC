import { Router, Application } from "express";
const router = Router();
const MovieController = require("./controllers/movieController");
const authenticatedUser = require('../../utils/middlewares/authenticatedUser');

export default (app:Application) =>{
    app.use("/movie", router);
    
    router.use(authenticatedUser);
    router.get('/popular', MovieController.popularList);
    router.get('/search', MovieController.search);
    router.get('/:id([0-9]+)', MovieController.getById);
    
    router.get('/favorites', MovieController.getFavorites);
}