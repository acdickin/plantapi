'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPlants = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _plantModel = require('../models/plantModel');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Plant = _mongoose2.default.model('plant', _plantModel.PlantSchema);

var getPlants = exports.getPlants = function getPlants(req, res) {
  Plant.find({}, function (err, plant) {

    if (err) {
      console.log(err);
      res.send('error has occured');
    }
    console.log(plant);
    res.json(plant);
  });
};

// export const GetPlantsByType =(req, res)=>{
// 	 Plant.find(type:req.params.type.plantId)(err, plants)=>{
//  	  if(err){
//  	  	res.send('error has occured')
//  	  }
//  	  console.log(plants);
//  	  res.json(plants);
//  	})
// }

// export const GetPlantsById =(req, res)=>{
// 	 Plant.find(type:req.params.type).exec( (err, plants)=>{
//  	  if(err){
//  	  	res.send('error has occured')
//  	  }
//  	  console.log(plants);
//  	  res.json(plants);
//  	})
// }