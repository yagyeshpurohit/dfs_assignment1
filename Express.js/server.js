 //incorporating express to our file
const express = require("express");
//creating a new constant app which is basically a funciton that represents the express module
//we bind that to the 'app'
const app = express();
//the word app is usually used to refer the express module (just a best practice, can be called anything though)
app.get("/",function(request,response){
  response.send("<h1>Hello,World!</h1>");
});
//using the constant app
//to listen on a specific port using the method 'listen()'
//for any http requests that is being sent to our server
 app.listen(3000, function(){
   console.log("Server started on port 3000")
 });
 //to see where our server is running adding a callback funciton
 //to the listen method. So created an anonymous function and console loggin in it
