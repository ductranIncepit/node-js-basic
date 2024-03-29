import express  from "express";
import homeController from '../controller/homeController';

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);
    router.get('/detail/user/:id',homeController.getDetailPage);
    router.post('/create-new-user',homeController.createNewUser);
    router.get('/about',(req,res) => {
        res.send(`I'm Duc`)
    }) 

      return   app.use('/', router);
}

export default initWebRoute;