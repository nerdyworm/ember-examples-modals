App.WidgetsModalController = App.ModalController.extend({
  create: function() {
    var widget = App.Widget.createRecord();

    widget.on('didCreate', this, function() {
      this.send('close');
    });

    this.set('model', widget);
  }
});
