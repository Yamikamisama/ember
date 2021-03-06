import Ember from 'ember';
import Song from '../models/song';
import Band from '../models/band';

var blackDog = Song.create({
  title: 'BlackDog',
  band: 'Led Zeppelin',
  rating: 3
});

var yellowLedbetter = Song.create({
  title: 'Yellow Ledbetter',
  band: 'Pearl Jam',
  rating: 4
});

var daughter = Song.create({
  title: 'Daughter',
  band: 'Pearl Jam',
  rating: 5
});

var pretender = Song.create({
  title: 'The Pretender',
  band: 'Foo Fighters',
  rating: 2
});

var BandsCollection = Ember.Object.extend({
  content: [],
  sortProperties: ['name:desc'],
  sortedContent: Ember.computed.sort('content', 'sortProperties'),
});

var bands = BandsCollection.create();

var ledZepplin  = Band.create({ name: 'Led Zeppelin', songs: [blackDog] });
var pearlJam    = Band.create({ name: 'Pearl Jam', songs: [daughter, yellowLedbetter] });
var fooFighters = Band.create({ name: 'Foo Fighters', songs: [pretender] });

bands.get('content').pushObjects([ledZepplin, pearlJam, fooFighters]);

export default Ember.Route.extend({
  model: function() {
    return bands.get('sortedContent');
  }
});
