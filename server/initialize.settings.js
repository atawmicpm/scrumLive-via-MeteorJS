Meteor.startup(function () {
  if (Settings.find().count() === 0) {
    console.info('no settings in database!  creating a configuration file.');

    var configurationId = null;

    // crate our administrator
    configurationId = Settings.insert({
      keyword: 'sysadmin',
      name: 'MySite',
      tagline: 'Witty tagline for site...',
      installed: false,
      live: false,
      maintenance: false,
      bootCount: 0
    });
    console.info('Configuration file created: ' + configurationId);
  }
});
