const express = require("express");
const https =require("https");
const bodyParser =require("body-Parser");



const app = express();
app.use(bodyParser.urlencoded({extended: true}));//code to parse body of post request

app.get("/",function(req, res){
    res.sendFile(__dirname+"/index.html")

});
app.post("/", function(req, res){
    const query =req.body.cityName;
    const apikey="9679d94ef0962f39eb7b6515e656d564";
    const unit ="imperial";
    const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apikey+"&units="+unit;
    https.get(url, function(response){ //performs "get" request across the internet using https protocall and we get back the "response"
        console.log(response.statusCode); //The 3-digit HTTP response status code. E.G. 404.
        response.on("data", function(data){
            const weatherData = JSON.parse(data); //json converts json to javascript object
            const temp = weatherData.main.temp;
            const weatherdescription = weatherData.weather[0].description;
            const icon= weatherData.weather[0].icon;
            const imageURL="http://openweathermap.org/img/wn/"+icon+"@2x.png"
            console.log(temp);
            res.write("<p> The weather is currently "  +weatherdescription+"</p>");
            res.write("<h1>The temperature in "+query+" is "+temp+ "  F.</h1>")
            res.write("<img src ="+imageURL+">");
            res.send();
        });
    });
    //WARNING YOU CAN ONLY HAVE ONE "SEND" in each "get" method use write instead
});
app.get("/secret",function(req,res){
    res.send("this is a secret");
})
app.get("/secret2",function(req,res){
    res.sendFile(__dirname+"/index.html"); //creates a path on the current project directory to index.html dirname grabs the location of app.js file
})
app.listen(3000, function(){
    console.log("server is running port 3000");
})
