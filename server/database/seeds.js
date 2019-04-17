use bucketList;
db.dropDatabase();

db.activities.insertMany([
  {
    activity: "Bungee-Jumping",
    location: "Edinburgh"
  },
  {
    activity: "Climb Machu Pichu",
    location: "Peru"
  },
  {
    activity: "Swimming with sharks",
    location: "Iona, Scotland"
  }
]);
