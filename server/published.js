Meteor.publish("chat", function () {
  return Chat.find({}, { sort: { time: -1 }, limit: 14});
});

Meteor.publish("project", function () {
  return Project.find({}, { sort: { time: -1 }, limit: 14});
});

Meteor.publish("tasks", function () {
  return Tasks.find({}, { sort: { time: -1 }});
});

