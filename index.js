const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  return res.send("<h1>Hello world</h1");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
