import mongoose from 'mongoose'
const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  username:{type:String, unique:true,required:true },
  email:{type:String, unique:true,required:true },
  firstname:{type:String, required:true, trim:true},
  lastname:{type:String, required:true, trim:true},
  passhash:{type:String, required:true},
  created: {type:Date, default:Date.now},
  plots:{
  	name:{type:String, default:"My Plot"},
    plotHeight:{type:Number, default:2},
    plotWidth:{type:Number, default:4},
  	plants:{
      name:{type:String, default:""},
      locations:{type:Array}
    }, 
  }
})