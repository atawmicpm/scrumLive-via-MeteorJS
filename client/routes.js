Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  yieldTemplates: {
    'nav': {to: 'nav'},
    'chat': {to: 'chat'}
  }
});

Router.map(function() {

  this.route('dashboard', {
    path: '/',
  });

  this.route('project');
  this.route('users');
  this.route('about');
  this.route('settings');
});