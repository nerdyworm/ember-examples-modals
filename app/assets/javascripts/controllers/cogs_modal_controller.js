App.CogsModalController = App.ModalController.extend({
  create: function() {
    var cog = App.Cog.createRecord();

    cog.on('didCreate', this, function() {
      this.close();
    });

    this.set('model', cog);
  }
});
