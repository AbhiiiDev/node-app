const express=require('express');
require('dotenv').config();
const connectDB=require('./config/db');
const itemRoutes=require('./routes/itemRoutes');


const app=express();


connectDB();
app.use(express.json());

app.use('/api/v1/',itemRoutes);



app.listen(3000,()=>{
    console.log('server listening on the port: 3000');
})