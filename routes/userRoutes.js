import {addNewUser, getUserById} from '../controllers/userController';
const routes = (app) => {
  app.route('/user')
 	.post(addNewUser);


	app.route('/user/:userId')
	.get((req,res)=>{
		  console.log(`Request from: ${req.originalUrl}`)
      console.log(`Request type: ${req.method}`)
      next();
  }, getUserById);
}

export default routes;
