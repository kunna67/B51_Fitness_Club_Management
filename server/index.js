import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import userRoutes from './routes/auth.js'
import classRoutes from './routes/class.js';
import coachRoutes from './routes/coach.js';


const app = express()

app.use(express.json({limit : '30mb' , extended : true}))
app.use(express.urlencoded({limit : "30mb" , extended : true}))
app.use(cors());


app.use("/user" , userRoutes);
app.use('/api' , classRoutes);
app.use('/api' ,coachRoutes)

const Connection_Url = "mongodb+srv://admin:admin@fitnessclub.1htfrak.mongodb.net/testDB";
const PORT =  5000 ; 


mongoose.connect(Connection_Url , {useNewUrlParser : true , useUnifiedTopology : true})
   .then(()=> app.listen(PORT , ()=> {console.log(`Server started on ${PORT}`);}))
   .catch((err) => {console.log(err);})

