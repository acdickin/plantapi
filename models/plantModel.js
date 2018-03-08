'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.PlantSchema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var PlantSchema = exports.PlantSchema = new Schema({
	name: { type: String, required: true },
	type: { type: String, required: true },
	companion: { type: Array, required: true },
	adversary: { type: Array, required: true },
	notes: { type: String }
});