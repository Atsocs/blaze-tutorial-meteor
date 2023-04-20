import { Template } from "meteor/templating";

import "./Task.html";

Template.task.events({
  "click .toggle-checked"() {
    Meteor.call("task.setIsChecked", this._id, !this.isChecked);
  },
  "click .delete"() {
    Meteor.call("task.remove", this._id);
  },
});
