const PubSub = require("../helpers/pub_sub.js");
const ItemView = require("./item_view.js");

const GridView = function(container) {
  this.container = container;
};

GridView.prototype.bindEvents = function() {
  PubSub.subscribe("BucketList:data-loaded", evt => {
    this.render(evt.detail);
  });
};

GridView.prototype.render = function(activities) {
  this.container.innerHTML = "";
  const itemView = new ItemView(this.container);
  activities.forEach(activity => itemView.render(activity));
};

module.exports = GridView;
