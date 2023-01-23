import { addNewContact } from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact').get((req, res, next) => {
        //middleware
        console.log(`Request from : ${req.originalUrl}`);
        console.log(`Request type : ${req.method}`);
        next();

    },(req, res, next) => {
        res.send("Get request successfull after next")

    }
    )
    .post(addNewContact);
    app.route('/contact/:contactId').put((req, res) => {
        res.send("put request successfull")
    })
    .delete((req, res) => {
        res.send('Delete request successfull');         
    })
    
}

export default routes;