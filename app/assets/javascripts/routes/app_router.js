App.Router.map(function() {
  this.resource('cogs', { path: 'cogs' }, function() {
    this.route('show', { path: ':cog_id' });
  });

  this.resource('widgets', { path: 'widgets' }, function() {
    this.route('show', { path: ':widget_id' });
  });
});

App.IndexRoute = Em.Route.extend({
  redirect: function() {
    this.transitionTo('widgets');
  }
});
