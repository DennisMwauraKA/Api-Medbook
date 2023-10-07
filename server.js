require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.port || 3000;
const errorMiddleware = require("./middleware/errorMiddleware.js");
const productRoute = require("./routes/productRoute.js");
const categoryRoute = require("./routes/categoryRoute.js");
const userRoute = require("./routes/userRoute.js");

//Middle Wares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(errorMiddleware);
app.use("/api/product", productRoute);
app.use("/api/category", categoryRoute);
app.use("/api/register", userRoute);


//MongoDB connection
mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App ready at Port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });


