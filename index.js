import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { addNewContact } from './src/controllers/crmController';
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/CRMdb',{
    useNewUrlParser: true
}).then('connection created succeessfully');
//BodyParser Set up
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
routes(app)
app.get('/', (req, res) => {
    res.send('node and express server is running')
});


app.listen(80, ()=> {
    console.log('server is running on port 80')
});