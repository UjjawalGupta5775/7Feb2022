const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended : true}));

app.listen("3001", function(){
  console.log("Server started at port 3001");
})

app.get("/", function(req, res){
  console.log(req);
  res.sendFile(__dirname + "/home.html");
})


app.get("/calculator", function(req, res){
  res.sendFile(__dirname + "/calculator.html");
})

app.post("/calculator", function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The sum of numbers is: " + result);
})


app.get("/bmi", function(req, res){
  res.sendFile(__dirname + "/bmi.html");
})

app.post("/bmi", function(req, res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height / 100);
  var bmi = weight / (height ** 2);
  res.send("Your BMI is: " + bmi.toFixed(2));
})
