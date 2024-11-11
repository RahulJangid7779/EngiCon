const mongoose = require("mongoose");
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://rahul6898sharma:7lcUjYPmexXHc6Tq@rahul1data.89iyr.mongodb.net"
  );
};
connectDB()
  .then(() => {
    console.log("DataBase connection establish");
  })
  .catch((err) => {
    console.error("Database connot connected");
  });
//  this is a way you can connect the cluster
// this is not a good way using asyn await its is a good way to connect. basically its give you promise throught this it will give weather the connectiing is make succes or not
