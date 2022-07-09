const express = require('express')  //instantiates Express
const app = express(); 

app.get("/", function(request, response){ //when routing to the homepage at localhost 
    response.send("hello");
});

app.get("/contact", function(req, res){ //when routing to /contact the server sends back contact card 
    res.send("contact me at 'gmail.com'.");
});


app.get("/mypage", function(req, res){
   res.send("test"); 
});
app.get("/hobby", function(req,res){
res.send("hope");
});
app.listen(3000, function(){
    console.log("Server has started on port 3000");
});
