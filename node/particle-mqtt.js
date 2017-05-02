var Particle = require('particle-api-js');
var particle = new Particle();

var config = require('/Users/don/.particle/particle.config.json');
var token = config.access_token;

var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://107.170.40.89');

particle.getEventStream({ deviceId: 'mine', name: 'tempF', auth: token }).then(function(stream) {
  stream.on('event', function(event) {
      console.log(JSON.stringify(event));
      client.publish('/devices/don/temperature', event.data);
  });
});

client.on('connect', function () {
    console.log('Connected to', client.options.href);
    client.publish('presence', 'Hello!');
});
