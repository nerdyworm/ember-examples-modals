App.animateModalClose = function() {
  var promise = new Ember.RSVP.Promise();

  $('.modal.in').removeClass('in');
  $('.modal-backdrop.in').removeClass('in');

  setTimeout(function() {
    promise.resolve();
  }, App.DEFAULT_CSS_TRANSITION_DURATION_MS);

  return promise;
};

App.animateModalOpen = function() {
  var promise = new Ember.RSVP.Promise();

  $('.modal').addClass('in');
  $('.modal-backdrop').addClass('in');

  setTimeout(function() {
    promise.resolve();
  }, App.DEFAULT_CSS_TRANSITION_DURATION_MS);

  return promise;
};
