var Particle = require('particle-api-js');
var particle = new Particle();

var config = require('/Users/don/.particle/particle.config.json');
var token = config.access_token;

particle.getEventStream({ deviceId: 'mine', auth: token }).then(function(stream) {
  stream.on('event', function(data) {
    console.log("Event: " + JSON.stringify(data, null, 2));
  });
});
