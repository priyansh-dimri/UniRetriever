require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoutes");
const itemRoutes = require("./routes/itemRoutes");

const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connection established successfully"))
  .catch((err) => console.log(err));

app.use("/api/users", userRoutes);
app.use("/api/items", itemRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
