// Modules
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv/config");

// App
const app = express();

// MiddleWare
app.use(express.json());
app.use(cors());
// Import Routes
const productRoute = require("./routes/products");

// Main Route
app.get("/", (req, res) => {
  res.send("root path");
});

// Routes MiddleWare
app.use("/api/inventory/products", productRoute);

// Database Connection
mongoose.connect(process.env.DB_CONNECTION);

// Server
const PORT = 3030;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
