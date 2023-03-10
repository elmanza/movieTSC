import { Router, Application } from "express";
const router = Router();
const authController = require("./controllers/authController");

export default (app:Application)=>{
    app.use("/auth", router);
    
    router.post('/', authController.loginController);
    router.get('/approved', authController.authenticateSessionTMDB);
    router.post('/verifytoken', authController.verifyTokenController);
}