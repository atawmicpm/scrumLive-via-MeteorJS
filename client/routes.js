Router.map(function() {
  // all routes require user to login
//
//  main route
  this.route('main', { 'path': '/' });
  this.route('dashboard'); //, { 'path': '/dashboard', 'onBeforeAction': function(){ Meteor.loggingdInn() &&  AccountsEntry.signInRequired(this) }});
  this.route('projects'); //,  {path: '/projects', onBeforeAction: function(){ AccountsEntry.signInRequired(this) }});
  this.route('users'); //,  {path: '/users', onBeforeAction: function(){ Meteor.loggingInn() && AccountsEntry.signInRequired(this) }});
  this.route('about'); //,  {path: '/about', onBeforeAction: function(){ AccountsEntry.signInRequired(this) }});
  this.route('admin'); //,  {path: '/admin', onBeforeAction: function(){ AccountsEntry.signInRequired(this) }});
//
//
//  routes = ['about',
//            'users',
//            'projects',
//            'dashboard'
//            ];

  // application routes
//  routes.forEach(function(index, r){
//    this.route(r, {path: '/' + r, before: function(){ AccountsEntry.signInRequired(this) }});
//  });

});