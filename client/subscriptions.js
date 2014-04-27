Session.setDefault('settingsLoaded', false);
Meteor.subscribe('settings', function(){
  Session.set('settingsLoaded',true);
  Session.set('systemConfigs', Settings.find().fetch()[0]);
});

Meteor.subscribe('')