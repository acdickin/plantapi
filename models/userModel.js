import mongoose from 'mongoose'
const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  username:{type:String, unique:true, required:true, trim:true},
  email:{type:String, unique :true},
  firstname:{type:String, required:true, trim:true},
  lastname:{type:String, required:true, trim:true},
  passhash:{type:String, required:true},
  created: {type:Date, default:Date.now},
  plotHeight:{type:Number, default:2},
  plotWidth:{type:Number, default:4},
  plots:{
  	name:{type:String, required:true},
  	location:{type: Array}, default:[], 
  }
})