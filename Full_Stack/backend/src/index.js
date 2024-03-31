const express = require("express");
const connect = require("./config/db");
const userRoute = require("./routes/user.route");
const noteRoute = require("./routes/note.route");
const middleware = require("./middlewares/authentication");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/user", userRoute);
app.use(middleware);
app.use("/create", noteRoute);

app.listen("3001", async () => {
  try {
    await connect();
    console.log("connected");
  } catch (e) {
    console.log(e.message);
  }
});
