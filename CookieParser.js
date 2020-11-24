const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

//use of cookie-parser
app.use(cookieParser());

app.get("/",(req,res)=>{
    res.send("Welcome to cookie-parser module");
});

//how to make cookie
//cookies Data save in client side in our system.
app.get('/cookie_test',(req,res)=>{
    res.cookie('username','shivamkosta')
    res.send('Cookie Set...');
});
//you want to access cookie data on server then code.
app.get('/cookie_check',(req,res)=>{
    
    res.send('Value:'+JSON.stringify(req.cookies));//cookies data access on server.
});
app.listen(3500,()=>console.log("Server is running on port 3500"));