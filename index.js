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
const URI = process.env.URI;
console.log("port is : "+PORT);
console.log("uri is : ",URI);

// mongodb connection
const connection = async()=>{

    try {
        await mongoose.connect(URI);
            console.log("database connected");
        console.log("all is well");
    } catch (error) {
        console.log("database conenction error");
    }
}
connection();

const schema = new mongoose.Schema({
    name:{type:String}
});
mongoose.model('schema',schema);

app.get('/', async (req, res) => {
    try {
      const response = await fetch('https://api.wazirx.com/api/v2/tickers');
      const data = await response.json();
      const firstTenData = Object.values(data).slice(0, 10); // Get the first 10 data entries
      console.log(firstTenData);
      res.render('component/home', { data: firstTenData });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  

app.post("/",async(req,res)=>{

    const p = new schema({
        name:"suraj"
    });
try {
    await p.save();
    console.log("data saved");
} catch (error) {
   res.sendStatus(404).json({messege:"error found"}); 
}
});


app.get("/hey",(req,res)=>{
    res.render("layers/new");
})


app.listen(PORT,()=>{
    console.log("server is running at https://localhost"+PORT);
})