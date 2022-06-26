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
            const icon = weatherdata.weather[0].icon;
            const imgurl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.set("Content-Type", "text/html");
            res.write("<img src=" + imgurl + ">");
            // console.log(weatherdata.weather[0].description);
            res.write("<h1>" + weatherdata.weather[0].description + "</h1>");
            res.write("<h1>the temperature at " + place + " is " + weatherdata.main.temp + " C</h1>");
            res.write("<h1>the max temperature at " + place + " is " + weatherdata.main.temp_max + " C</h1>");
            res.write("<h1>the min temperature at " + place + " is " + weatherdata.main.temp_min + " C</h1>");
            res.write("<h1>the humidity at " + place + " is " + weatherdata.main.humidity + "</h1>");
            res.send();
        });
    });
});



app.listen(3000, function(){
    console.log("server is running on port 3000");
})