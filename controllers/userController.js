import mongoose from 'mongoose';
import {UserSchema} from '../models/userModel'
var bcrypt = require('bcryptjs');
const User = mongoose.model('user', UserSchema);

export const getUsers = (req,res)=>{
	 User.find({} ,(err, user)=>{
 	  if(err){
 	  	res.send('error has occured')
 	  }
 	  console.log(user);
 	  res.json(user);
 	})
}



export const getUserById = (req,res)=>{
	User.findById(req.params.userId, (err,user)=>{
		if(err){
			res.send(err);
		}
		res.json(user);
	})
}

export const addNewUser =(req, res)=>{

	console.log(req.body)
	let newUser= new User({
		username: req.body.username,
		email: req.body.email,
		firstname: req.body.firstname,
	  lastname: req.body.lastname,
		passhash:bcrypt.hashSync(req.body.pwd, 10),
	})
	
	newUser.save(
		(newUser,err)=>{
			if(err){
				throw err;
			}
			else{
				res.json({
					user:newUser,
					message:'successful'
				})
			}
	})

}

