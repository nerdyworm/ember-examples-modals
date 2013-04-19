App.WidgetsRoute = Em.Route.extend({
  events: {
    create: function() {
      this.controllerFor('widgets.modal').create();
      this.send('openModal', 'widgets.modal');
    },

    edit: function(widget) {
      this.controllerFor('widgets.modal').edit(widget);
      this.send('openModal', 'widgets.modal');
    },

    confirmDelete: function(widget) {
      this.controllerFor('confirm.delete').confirmDelete(widget, 'widgets.index');
      this.send('openModal', 'confirm.delete');
    }
  }
});

App.WidgetsIndexRoute = Em.Route.extend({
  model: function() {
    return App.Widget.find();
  }
});
