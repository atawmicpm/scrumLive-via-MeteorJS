function username() {
  if(Meteor.user() === null)  return 'Anonymous';
  if(Meteor.user().profile)   return Meteor.user().profile.name;
  if(Meteor.user().emails)    return Meteor.user().emails[0].address;
}

// Chat helpers available as {{ helpername }} in templates
Template.chat.helpers({
  messages: function() {
    return Chat.find({}, { sort: { time: -1 }, limit: 14});
  }
});

// Chat browser events
Template.chat.events = {
  'keydown input#message': function (event) {
    if(event.which == 13) {

      var message = document.getElementById('message');

      if(message.value != '') {
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
};