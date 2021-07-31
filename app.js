const app = require("./server.js");

const PORT = process.env.PORT || 8081;

const server = app.module;

server.listen(PORT, () => {
  console.log(`Your Application Running on port ${PORT}`);
});
