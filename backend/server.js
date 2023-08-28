const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("root path");
});

const PORT = 3030;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
