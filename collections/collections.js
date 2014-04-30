Chat     = new Meteor.Collection('chat');
Project = new Meteor.Collection('project');
Tasks    = new Meteor.Collection('tasks');

// Chat allow/deny rules from client
Chat.allow({
  insert: function (userId) {
    return (userId === Meteor.userId());
  },
  fetch: ['owner']
});


// Project allow/deny rules from client
Project.allow({
  insert: function (userId) {
    // the user must be logged in
    return (userId === Meteor.userId());
  },
  update: function (userId, doc, fields, modifier) {
    // can only change your own documents
    return doc.owner === userId;
  },
  remove: function (userId, doc) {
    // can only remove your own documents
    return doc.owner === userId;
  },
  fetch: ['owner']
});

// Project allow/deny rules from client
Tasks.allow({
  insert: function() {
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    return doc.owner === userId;
  },
  remove: function (userId, doc) {
    return true;
//    return doc.owner === userId;
  },
  fetch: ['owner']
});