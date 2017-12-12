import mongoose from 'mongoose'
const Schema = mongoose.Schema;

export const PlantSchema = new Schema({
	name:{type:String,required:true},
	type:{type:String,required:true},
	companion:{type:Array, required:true},
	adversary:{type:Array, required:true},
	notes:{type:Array, required:true},
})