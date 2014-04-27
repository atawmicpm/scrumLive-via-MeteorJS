if(Meteor.isClient) {

  Meteor.startup(function(){
    Hooks.init();
  });

  Template.chat.messages = function () {
    return Chat.find({}, { sort: { time: -1 }, limit: 14});
  };

  username = function() {
    if(Meteor.user() === null) return 'Anonymous';
    if(Meteor.user().profile) return Meteor.user().profile.name;
    if(Meteor.user().emails) return Meteor.user().emails[0].address;
  };


  Template.input.events = {
    'keydown input#message' : function(event) {
      if (event.which == 13) {

        var message = document.getElementById('message');

        if (message.value != '') {
          Chat.insert({
            name: username(),
            message: message.value,
            time: Date.now(),
          });

          document.getElementById('message').value = '';
          message.value = '';

        }
      }
    }
  }
//  Template.hello.greeting = function () {
//    return "Welcome to meteor_angular.";
//  };
//
//  Template.hello.events({
//    'click input': function () {
//
//      Template.hello.greeting = "You pressed the button!";
//      // template data, if any, is available in 'this'
//      if (typeof console !== 'undefined')
//        console.log("You pressed the button");
//    }
//  });
}

