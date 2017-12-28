import {getPlants} from '../controllers/plantController';

const plantRoutes = (app) => {
    app.route('/plants')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getPlants);
}



export default plantRoutes;
