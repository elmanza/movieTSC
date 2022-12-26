import { Router, Application } from "express";
const router = Router();
const notesMovieController = require("./controllers/notesMovieController");
const authenticatedUser = require('../../utils/middlewares/authenticatedUser');

export default (app:Application) =>{
    app.use("/notesmovie", router);
    
    router.use(authenticatedUser);
    router.post('/', notesMovieController.create);
    router.get('/all/:id', notesMovieController.getAll);
    router.put('/:idnote', notesMovieController.update);

}