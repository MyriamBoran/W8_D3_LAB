const PubSub = require("../helpers/pub_sub.js");

const ItemView = function(container) {
  this.container = container;
};

ItemView.prototype.render = function(activity) {
  const activityContainer = document.createElement("div");
  activityContainer.id = "activity";

  const activityHeading = document.createElement("h2");
  activityHeading.textContent = activity.activity;
  activityContainer.appendChild(activityHeading);

  const location = document.createElement("p");
  location.textContent = activity.location;
  activityContainer.appendChild(location);

  const deleteButton = this.createDelete(activity._id);
  activityContainer.appendChild(deleteButton);

  this.container.appendChild(activityContainer);
};

ItemView.prototype.createDelete = function(activityId) {
  const button = document.createElement("button");
  button.classList.add("delete-btn");
  button.value = activityId;

  button.addEventListener("click", evt => {
    PubSub.publish("BucketListView:activity-delete-clicked", evt.target.value);
  });

  return button;
};

module.exports = ItemView;
