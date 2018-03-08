'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.addNewUser = exports.getUserById = exports.getUsers = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _userModel = require('../models/userModel');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bcrypt = require('bcryptjs');
var User = _mongoose2.default.model('user', _userModel.UserSchema);

var getUsers = exports.getUsers = function getUsers(req, res) {
	User.find({}, function (err, user) {
		if (err) {
			res.send('error has occured');
		}
		console.log(user);
		res.json(user);
	});
};

var getUserById = exports.getUserById = function getUserById(req, res) {
	User.findById(req.params.userId, function (err, user) {
		if (err) {
			res.send(err);
		}
		res.json(user);
	});
};

var addNewUser = exports.addNewUser = function addNewUser(req, res) {

	console.log(req.body);
	var newUser = new User({
		username: req.body.username,
		email: req.body.email,
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		passhash: bcrypt.hashSync(req.body.pwd, 10)
	});

	newUser.save(function (newUser, err) {
		if (err) {
			throw err;
		} else {
			res.json({
				user: newUser,
				message: 'successful'
			});
		}
	});
};