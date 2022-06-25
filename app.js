const express = require("express");
const app = express();
const https = require("https");
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    console.log("post received");
    const place = req.body.fname;
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + place + "&appid=09b78a2117cd91872406ad6a8723d983&units=metric";
    https.get(url, function(response){
        console.log(response.statusCode);
        response.on("data", function(data){
            const weatherdata = JSON.parse(data);
            console.log(weatherdata.main.temp);
            res.send("<h1>the temperature at " + place + " is " + weatherdata.main.temp + " C</h1>");
        });
    });
});



app.listen(3000, function(){
    console.log("server is running on port 3000");
})