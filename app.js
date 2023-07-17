const express=require("express");
const https = require('node:https');
const send = require("send");
const app= express();

app.get("/", function(req, res){
    const url="https://api.openweathermap.org/data/2.5/weather?q=Nairobi,kenya&APPID=8889ffb5da8a6a5bac0a91ab25d0e368";
    https.get(url, function(response){
        console.log(response);
        response.on("data", function(data){
            weatherdata=JSON.parse(data);
            console.log(weatherdata);
            const temp=weatherdata.weather[0].description
            const city=weatherdata.name
            res.send("The weather at "+city+ " is "+ temp);


        });
    });
  
    
});




app.listen(3000, function(){
    console.log("Server started on port 3000");
});