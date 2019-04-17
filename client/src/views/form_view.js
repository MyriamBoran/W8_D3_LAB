const PubSub = require("../helpers/pub_sub.js");

const FormView = function(form) {
  this.form = form;
};

FormView.prototype.bindEvents = function() {
  this.form.addEventListener("submit", evt => {
    this.handleSubmit(evt);
  });
};

FormView.prototype.handleSubmit = function(evt) {
  evt.preventDefault();
  PubSub.publish("BucketList:activity-submitted", evt.target);
};

module.exports = FormView;
