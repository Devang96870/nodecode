const app = require("./server.js");
const { MongoClient } = require("mongodb");
const client = new MongoClient(
  "mongodb+srv://tesedevang:Devang@8688@cluster0.lujno.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const PORT = process.env.PORT || 8081;

const server = app.module;
client.connect((data, err) => {
  if (data) {
    console.log("Connected Sucessfully");
  } else {
    console.log(`You Have Error ${err}`);
  }
});
server.listen(PORT, () => {
  console.log(`Your Application Running on port ${PORT}`);
});
