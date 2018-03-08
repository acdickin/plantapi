'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _userController = require('../controllers/userController');

var userRoutes = function userRoutes(app) {
  app.route('/user').post(_userController.addNewUser);

  // app.route('/user/:userId')
  // 	.get((req,res)=>{
  // 		  console.log(`Request from: ${req.originalUrl}`)
  //       console.log(`Request type: ${req.method}`)
  //       next();
  //   }, getUserById);
  // }

  app.route('/users').get(function (req, res, next) {
    // middleware
    console.log('Request from: ' + req.originalUrl);
    console.log('Request type: ' + req.method);
    next();
  }, _userController.getUsers);
};
exports.default = userRoutes;