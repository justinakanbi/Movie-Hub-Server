//Import dotenv package and config it 
require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors")


//Import routes to app.js from authRouter in route folder.
const authRouter = require("./routes/authRouter");

const movieRouter = require("./routes/movieRouter");

const bookmarkRouter = require("./routes/bookmarkRouter")

//Imported the error found from middleware folder
const error = require("./middlewares/error");

//spins up a new express application 
const app = express();

const port = 4000;

app.use(cors())

// A Middleware that allows access to the req.body on all request(without this you cant test on postman)
app.use(express.json());

//Middleware for login and register authentication router
app.use("/api/auth", authRouter);

//Middleware for movie router
app.use("/api/movie", movieRouter)

app.use("/api/bookmark", bookmarkRouter);

//import  middlewares for errors 
app.use(error)


//Start listening on a given port 
const start = async ()=>{
    try {
       await mongoose.connect(process.env.MONGO_URL);
        console.log("Database Connected");
        
       await app.listen(port, ()=>{
            console.log(`Server is running on port ${port}`);
            
        });
        
    } catch (error) {
        console.log(error);
        console.log("Unable to connect");
        
    }
};
start();



//justinakanbi22

//54Myss6RwS2EZZ0D


//mongodb+srv://justinakanbi22:54Myss6RwS2EZZ0D@cluster0.ebc0d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0