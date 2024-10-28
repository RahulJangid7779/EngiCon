const express = require("express"); // this line is use to require the express folder
const app = express(); // this mean that we create the application
app.use(
  /*we can also pass route here the server ex like test our server only repose when it has localhost:3000/test*/ (
    req,
    res
  ) => {
    res.send("Hello froffmssss the servsssser");
  }
);
app.listen(3000, () => {
  console.log("server is succesfully listen on the port number 3000");
}); // this mean that we listen the server on port number 3000 and also take the callback
// npm i -g nodemon this insall nodemon by the help of this we do not have to close the server again an again manually it will automatically close this
