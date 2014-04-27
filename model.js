// data.js or model.js file

Settings =    new Meteor.Collection("settings");

Settings.allow({
  insert: function(){
    return true;
  },
  update: function () {
    return true;
  },
  remove: function(){
    return true;
  }
});

Chat = new Meteor.Collection('chat');
