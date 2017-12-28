import express  from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import headers from './middleware/header'

import plantRoutes from './routes/plantRoutes';
import userRoutes from './routes/userRoutes';

const app = express();
const PORT = 5000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://sleepy:d4rkkn!ght88@ds161210.mlab.com:61210/plantr',{
	useMongoClient:true
});
app.use(headers);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

plantRoutes(app);
userRoutes(app);

app.get('/',(req,res)=>{
	res.send(`node and express server is running on port ${PORT}`)
})


app.listen(PORT,()=>{
	console.log(`Your server is running on port ${PORT}`)
})