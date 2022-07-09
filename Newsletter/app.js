const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public")); //in order for the server to use static files (css and images)you need to use the static function
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req, res){
   res.sendFile(__dirname+"/signup.html");
});

app.post("/", function(req, res){
    var fname=req.body.FirstName;
    var lname=req.body.LastName;
    var email=req.body.email;
    console.log(fname+" "+lname+" "+email);
});
app.listen(3000, function(){
    console.log("Server is running on port 3000");
})

// API KEY ="88da889733d363a9a0515f66e55775f5-us12"

//Audience ID 62f880e012