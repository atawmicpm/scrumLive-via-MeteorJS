// Nav templates
Template.nav.rendered = function () {
  $('.ui.dropdown').dropdown();
};


Template.nav.events = {
  'click #logout': function (e) {
    e.preventDefault();
    console.log('clicked logout');
    Meteor.logout(function (err) {
      if(!err) {
        console.log('logged out');
      }
    });
  }
}
