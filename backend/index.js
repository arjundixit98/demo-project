require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  return res.json({ status: "success", name: "Arjun" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
