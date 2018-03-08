"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserSchema = undefined;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var UserSchema = exports.UserSchema = new Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  firstname: { type: String, required: true, trim: true },
  lastname: { type: String, required: true, trim: true },
  passhash: { type: String, required: true },
  created: { type: Date, default: Date.now },
  plots: {
    name: { type: String, default: "My Plot" },
    plotHeight: { type: Number, default: 2 },
    plotWidth: { type: Number, default: 4 },
    plants: {
      name: { type: String, default: "" },
      locations: { type: Array }
    }
  }
});