const express = require("express")
const app = express();
const bodyParser = require("body-parser");

//JSON parsing data
app.use(bodyParser.json());
//UrlEncoded Data parsing
app.use(bodyParser.urlencoded({extended : true}));

app.get("/",(req,res)=>{
    res.send("Welcome to Nodejs");
});
app.listen(3500,()=>console.log(`Server running on port 3500`));
