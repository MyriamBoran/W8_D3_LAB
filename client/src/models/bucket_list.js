const RequestHelper = require("../helpers/request_helper.js");
const PubSub = require("../helpers/pub_sub.js");

const BucketList = function(url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
};

BucketList.prototype.bindEvents = function() {
  PubSub.subscribe("BucketListView:activity-delete-clicked", evt => {
    this.deleteActivity(evt.detail);
  });

  PubSub.subscribe("BucketList:activity-submitted", evt => {
    this.postActivity(evt.detail);
  });
};

BucketList.prototype.getData = function() {
  this.request
    .get()
    .then(activities => {
      PubSub.publish("BucketList:data-loaded", activities);
    })
    .catch(console.error);
};

BucketList.prototype.deleteActivity = function(id) {
  this.request
    .delete(id)
    .then(activities => {
      PubSub.publish("BucketList:data-loaded", activities);
    })
    .catch(console.error);
};

BucketList.prototype.postActivity = function(data) {
  const request = new RequestHelper(this.url);
  const activity = this.prepareData(data);
  this.request
    .post(activity)
    .then(activities => {
      PubSub.publish("BucketList:data-loaded", activities);
    })
    .catch(console.error);
};

BucketList.prototype.prepareData = function(formData) {
  const data = {};
  data.activity = formData.activity.value;
  data.location = formData.location.value;
  return data;
};

module.exports = BucketList;
