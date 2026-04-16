const express=require('express');
const dotenv=require('dotenv');
const connectDb=require('./src/config/db');
const logger=require('./src/middleware/logger');
const errorHandler=require('./src/middleware/errorHandler');
const productRoutes=require('./src/routes/productRoutes');

dotenv.config();    //Read .env file secrets

connectDb();   //Connect to MongoDB

const app=express();   //Express instance

// ---Built in Middleware---
app.use(express.json());

app.use(express.urlencoded({extended:true}));
app.use(logger);   //Custom logger middleware

//---Healthh Check -up
app.get('/',(req,res)=>{
    res.json({message:"Product API is running !!"});
});
app.use('/api/products',productRoutes);   //Product routes

//--Error Handler 
app.use(errorHandler);

//Start server
const PORT=process.env.PORT || 3000;
app.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

