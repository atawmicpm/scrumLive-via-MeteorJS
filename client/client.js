if(Meteor.isClient) {

  // Startup
  Meteor.startup(function () {
    Hooks.init();
  });

}