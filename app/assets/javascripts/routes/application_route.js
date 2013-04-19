App.ApplicationRoute = Em.Route.extend({
  events: {
    openModal: function(modal) {
      this.render(modal, {
        into: 'application',
        outlet: 'modal'
      });
    },

    closeModal: function() {
      App.animateModalClose().then(function() {
        this.render('empty', {
          into: 'application',
          outlet: 'modal'
        });
      }.bind(this));
    }
  }
});

