App.ConfirmDeleteController = Em.ObjectController.extend({
  confirmDelete: function(model, afterDeleteRoute) {
    this.set('model', model);
    this.set('afterDeleteRoute', afterDeleteRoute);
  },

  confirm: function() {
    var model = this.get('model'),
        after = this.get('afterDeleteRoute');

    model.on('didDelete', this, function() {
      this.close();

      if (after) this.transitionToRoute(after);
    });

    model.deleteRecord();
    model.get('transaction').commit();
  },

  close: function() {
    this.send('closeModal');
  }
});
