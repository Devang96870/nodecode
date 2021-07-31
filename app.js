const express = require("express");
const app = express();
const morgan = require("morgan");
const PORT = 3000 || process.env.PORT;
app.use(morgan("dev"));
app.get("/", (req, res) => {
  res.status(200).json({ Message: "It Work" });
});
app.listen(PORT, () => {
  console.log(`Your Application Running on port ${PORT}`);
});
