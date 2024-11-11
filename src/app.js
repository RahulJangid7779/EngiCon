const express = require("express"); // this line is use to require the express folder
const connecrDB = require("./config/database");
const app = express();

connectDB()
  .then(() => {
    console.log("DataBase connection establish");
    app.listen(3000, () => {
      // log your error
      console.log("server is succesfully listen on the port number 3000");
    });
  })
  .catch((err) => {
    console.error("Database connot connected");
  });
