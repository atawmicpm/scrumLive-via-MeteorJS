//
// Templates
//

Template.layout.events({

  'submit #login-form': function (e, t) {
    e.preventDefault();
    var email = t.find('#login-email').value
      , password = t.find('#login-password').value;

    Meteor.loginWithPassword(email, password, function (err) {
      if(err) {
        console.log(err);
      }
      else {
        Router.go('dashboard');
        console.log('logged in!');
      }
    });
    return false;
  }
});

