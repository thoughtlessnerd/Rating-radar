const express = require("express");
const app = express();
const { insertData, readData, updateData } = require("./Collection.js");

app.use(express.json());

let data;
let collectionName = "users";
readData(collectionName).then((res) => {
  data = res;
  console.log(res);
});

app.get("/", (req, res) => {
  res.send(data);
});

app.listen(3000);
