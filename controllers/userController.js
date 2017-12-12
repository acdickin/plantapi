import mongoose from 'mongoose';
import {UserSchema} from '../models/userModel'
var bcrypt = require('bcryptjs');
const User = mongoose.model('user', UserSchema);


export const addNewUser =(req, res)=>{
	let user= new User({
		username: req.body.user.username,
		email: req.body.user.email,
		firstname: req.body.user.firstname,
	  lastname: req.body.user.lastname,
		passhash:bcrypt.hashSync(req.body.user.pwd, 10),
		plotHeight:2,
		plotWidth:4
	})
	user.save().then(
		(newUser)=>{
			res.json({
			user:newUser,
			message:'successful'
			})
		})
	})
}

export const getUserById = (req,res)=>{
	(User.findById(req.params.userId, (err,user))=>{
		if(err){
			res.send(err);
		}
		res.json(user);
	})

}

