const express = require("express");
const path = require('path');
const dotenv = require('dotenv');
const todoRouter = require('./routes/todos.router');
const { errorHandler }  = require("./middleware/errorHandler");
const connectDb = require ("./config/todoDB")

dotenv.config({path: './config/.env'})

const app = express();
connectDb();
app.use(express.static(path.join(__dirname, 'public'))); 

app.use(
    express.urlencoded({
      extended: true,
    })
); 

app.use(express.json());  

 
app.use('/api/todos', todoRouter); 
app.use(errorHandler);



app.listen(process.env.PORT, () => console.log(`Server is running on ${process.env.PORT}`));
