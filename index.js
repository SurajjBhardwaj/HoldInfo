//express js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");


//setup
const app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');

const PORT = process.env.PORT || 5000;
console.log("port is : "+PORT);


app.get("/",(req,res)=>{
   res.render("component/home");
});

app.get("/hey",(req,res)=>{
    res.render("layers/new");
})


app.listen(PORT,()=>{
    console.log("server is running at https://localhost"+PORT);
})