App.ModalView = Em.View.extend({
  layout: Em.Handlebars.compile("{{yield}}<div class=modal-backdrop></div>"),

  didInsertElement: function() {
    App.animateModalOpen();

    $('body').on('keyup.modal', function(event) {
      if (event.keyCode === 27) this.get('controller').send('close');
    }.bind(this));

    this.$('input[type=text]').first().focus();
  },

  willDestroyElement: function() {
    $('body').off('keyup.modal');
  }
});

App.CogsModalView = App.ModalView.extend({});
App.ConfirmDeleteView = App.ModalView.extend();
App.WidgetsModalView = App.ModalView.extend({});
