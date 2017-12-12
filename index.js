import express  from 'express';
import routes from './routes/plantRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
const app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://sleepy:d4rkkn!ght88@ds161210.mlab.com:61210/plantr',{
	useMongoClient:true
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.get('/',(req,res)=>{
	res.send(`node and express server is running on port ${PORT}`)
})


app.listen(PORT,()=>{
	console.log(`Your server is running on port ${PORT}`)
})