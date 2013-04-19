//= require jquery-2.0.0
//= require jquery_ujs
//= require ember-head
//= require ember-data-head
//= require_self
//= require_tree .
App = Ember.Application.create();

App.Store = DS.Store.extend({
  revision: 12
});

