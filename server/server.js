require('dotenv').config();
const express = require('express');
const app =express();
const cors=require('cors');
const connection= require("cors");
const userRoutes=require("./routes/users");
const authRoutes=require("./routes/auth");


//db connnection
connection();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("./api/users",userRoutes);
app.use("./api/auth",userRoutes);


const port=process.env.PORT || 8080;
app.listen(port, console.log(`port is running at 5000`));

