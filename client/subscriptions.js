Deps.autorun(function () {
  Meteor.subscribe("chat");
  Meteor.subscribe("project");
  Meteor.subscribe("tasks");
});
