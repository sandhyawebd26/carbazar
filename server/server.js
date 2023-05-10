const dotenv=require("dotenv");
const mongoose=require('mongoose');
const express = require('express');

// const cors = require('cors');
const app = express();

dotenv.config({path:'./config.env'})

const DB= process.env.DATABASE;

mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
}).then(()=>{
    console.log("connection successsful")
}).catch((err)=> console.log(`no connection`));


app.use(express.json());
// app.use(cors()); // Enable CORS for all routes


// app.post('/api/register', (req, res) => {
//   const { name, email, contact, password } = req.body;
//   // You can perform validation and save the user data to a database here
//   // For now, we'll simply log the received data
//   console.log(name, email, contact, password);

//   res.json({ message: 'User registered successfully' });
// });

app.use(require('./routes/auth'))
//middleware

// Middleware
const middleware = (req, res, next) => {
    console.log("im middleware");
    next();
  };
  
  // Routes
  app.get('/', middleware, (req, res) => {
    res.send(`hello world`)
  });
  
  app.get('/about', middleware, (req, res) => {
    res.send(`about`)
  });
  
  app.get('/signup', (req, res) => {
    res.send(`signup`)
  });
  
  app.get('/signin', (req, res) => {
    res.send(`signin`)
  });
  


app.listen(5000, () => {
  console.log(`Server is running on http://localhost:5000`);
});
