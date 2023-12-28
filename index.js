const cors = require("cors");
const express = require("express");
const mongoDBConnection = require("./config/db");
const userRouter = require("./routes/user.routes");
const tourRouter = require("./routes/tour.routes");
const UserModel = require("./model/user.model");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://ex-w-ah2ir-77hzzt66d-singh-csm.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to explore wonders!");
});

app.use("/travelious_user", userRouter);
app.use("/travelious_tour", tourRouter);

//google auth


app.listen(PORT, async () => {
  try {
    await mongoDBConnection;
    console.log(`server running at ${PORT}`);
  } catch (error) {
    console.log("error while listen", error);
  }
});
