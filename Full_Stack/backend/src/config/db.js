const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const connection = async () => {
  return mongoose.connect("mongodb://localhost:27017/fullStack");
};
module.exports = connection;
