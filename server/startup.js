// server/startup.js
Meteor.startup(function () {
  configurationSettings = Settings.find().fetch()[0];
  newBootCount = configurationSettings.bootCount + 1;
  Settings.update(configurationSettings._id, {$set: { bootCount: newBootCount }});

  if(configurationSettings.live){
    console.log('Success!  Youre running a live site!');
  }else{
    console.log('Success!  Youre running the site for the first time!  Its not live yet, however.');
    console.log('Please go to admin panel, and configure the site.');
  }
});
Meteor.methods({
  setSiteLive: function(){
    configurationSettings = Settings.find().fetch()[0];
    Settings.update(configurationSettings._id, {$set: { live: true }});
  }
});

