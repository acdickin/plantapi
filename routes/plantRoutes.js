'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _plantController = require('../controllers/plantController');

var plantRoutes = function plantRoutes(app) {
    app.route('/plants').get(function (req, res, next) {
        // middleware
        console.log('Request from: ' + req.originalUrl);
        console.log('Request type: ' + req.method);
        next();
    }, _plantController.getPlants);
};

exports.default = plantRoutes;