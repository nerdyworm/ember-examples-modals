App.CogsRoute = Em.Route.extend({
  events: {
    create: function() {
      this.controllerFor('cogs.modal').create();
      this.send('openModal', 'cogs.modal');
    },

    edit: function(cog) {
      this.controllerFor('cogs.modal').edit(cog);
      this.send('openModal', 'cogs.modal');
    },

    confirmDelete: function(cog) {
      this.controllerFor('confirm.delete').confirmDelete(cog, 'cogs.index');
      this.send('openModal', 'confirm.delete');
    }
  }
});

App.CogsIndexRoute = Em.Route.extend({
  model: function() {
    return App.Cog.find();
  }
});
