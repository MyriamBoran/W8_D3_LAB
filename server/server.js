const express = require("express");
const app = express();
const path = require("path");
const parser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/create_router.js");

const publicPath = path.join(__dirname, "../client/public");
app.use(express.static(publicPath));

MongoClient.connect("mongodb://localhost:27017")
  .then(client => {
    const db = client.db("bucketList");
    const activitiesCollection = db.collection("activities");
    const activityRouter = createRouter(activitiesCollection);
    app.use("/api/activities", activityRouter);
  })
  .catch(console.error);

app.use(parser.json());

app.listen(3000, function() {
  console.log(`Listening on port: ${this.address().port}`);
});
