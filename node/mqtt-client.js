var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://107.170.40.89');

client.on('connect', function () {
    client.subscribe('#');  // wildcard subscribes to all events
});

client.on('message', function (topic, message) {
    console.log(topic, message.toString());
});

client.on('connect', function () {
    console.log('Connected to', client.options.href);
});
