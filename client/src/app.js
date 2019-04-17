const BucketList = require("./models/bucket_list.js");
const FormView = require("./views/form_view.js");
const GridView = require("./views/grid_view.js");

document.addEventListener("DOMContentLoaded", () => {
  const activityForm = document.querySelector("form#bucketList-form");
  const formView = new FormView(activityForm);
  formView.bindEvents();

  const activityContainer = document.querySelector("div#container");
  const gridView = new GridView(activityContainer);
  gridView.bindEvents();

  const url = "http://localhost:3000/api/activities";
  const activities = new BucketList(url);
  activities.bindEvents();
  activities.getData();
});
