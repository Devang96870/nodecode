const express = require("express");
const app = express();
const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Your Application Running on port${PORT}`);
});
