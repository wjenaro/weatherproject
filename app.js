const express=require("express");
const https = require('node:https');
const bodyParser=require('body-parser');
const send = require("send");
const app= express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");

  
    
});
app.post('/', function(req, res){
    console.log("Selected city is "+req.body.mycity);

    const mycity=req.body.mycity;
    const country =req.body.mycountry;
    const appID="8889ffb5da8a6a5bac0a91ab25d0e368";
    units="metric";
    const url="https://api.openweathermap.org/data/2.5/weather?q="+mycity+","+country+"&APPID="+appID+"&units="+units;
    https.get(url, function(response){
        //console.log(response);
        response.on("data", function(data){
            weatherdata=JSON.parse(data);
           // console.log(weatherdata);
            const temp=weatherdata.main.temp
            const city=weatherdata.name
            res.send("The weather at "+city.toUpperCase()+ " is "+ temp +" &#8451;");


        });
    });



    
   
});




app.listen(3000, function(){

    console.log("Server started on port 3000");
});