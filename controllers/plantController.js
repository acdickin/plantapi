import mongoose from 'mongoose'
import {PlantSchema} from '../models/plantModel';

const Plant = mongoose.model('plant', PlantSchema);

export const getPlants = (req,res)=>{
  Plant.find({} ,(err, plant)=>{

 	  if(err){
 	  	console.log(err)
 	  	res.send('error has occured')
 	  }
 	  console.log(plant);
 	  res.json(plant);
 	})
}

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

