import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return ['leagueoflegends', 'hearthstone', 'starcraft', 'starwars', 'soccer'];
  }
});
