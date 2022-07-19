const express = require('express');
const bodyParser = require('body-parser');
const mailchimp = require('@mailchimp/mailchimp_marketing');
const { post } = require("request");
 
const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));
 
mailchimp.setConfig({
  apiKey: "88da889733d363a9a0515f66e55775f5-us12",
  server: "us12"
});
 
app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
})
 
app.post("/", function(req, res){
 
  const listId = "\62f880e012";
  const subscribingUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
  };
 
  async function run() {
      const response = await mailchimp.lists.addListMember(listId, {
        email_address: subscribingUser.email,
        status: "subscribed",
        merge_fields: {
          FNAME: subscribingUser.firstName,
          LNAME: subscribingUser.lastName
        }
      });
      res.sendFile(__dirname+"/success.html");
      console.log(
        `Successfully added contact as an audience member. The contact's id is ${response.id}.`
      );
  }
 
  run().catch(e => res.sendFile(__dirname+"/failure.html"));

});
app.post("/failure", (req,res) => {
  res.redirect("/")
})
app.listen(3000, function () {
  console.log("Server is running on port 3000")
});
// API KEY ="88da889733d363a9a0515f66e55775f5-us12"

//Audience ID 62f880e012