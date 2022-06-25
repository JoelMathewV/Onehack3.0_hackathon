const express = require("express");
const app = express();
const https = require("https");

app.get("/", function(req, res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=kerala&appid=09b78a2117cd91872406ad6a8723d983&units=metric";

    https.get(url, function(response){
        console.log(response.statusCode);
        response.on("data", function(data))
    });
    res.send("server is up and running");
})

app.listen(3000, function(){
    console.log("server is running on port 3000");
})