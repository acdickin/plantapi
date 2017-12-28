import {addNewUser, getUserById,  getUsers} from '../controllers/userController';

const userRoutes = (app) => {
 app.route('/user')
	.post(addNewUser);


// app.route('/user/:userId')
// 	.get((req,res)=>{
// 		  console.log(`Request from: ${req.originalUrl}`)
//       console.log(`Request type: ${req.method}`)
//       next();
//   }, getUserById);
// }

	app.route('/users')
	  .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getUsers);
}
export default userRoutes;
