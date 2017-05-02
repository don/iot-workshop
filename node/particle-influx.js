var http = require('http');

var Particle = require('particle-api-js');
var particle = new Particle();

var config = require('/Users/don/.particle/particle.config.json');
var token = config.access_token;

// Subscribe to just Fahrenheit temperature events
particle.getEventStream({ deviceId: 'mine', name: 'tempF', auth: token }).then(function(stream) {
  stream.on('event', function(data) {
    console.log("Event: " + JSON.stringify(data, null, 2));
    sendToInflux(data);
  });
});

function sendToInflux(data) {

    var line = buildLine(data);
    console.log(line);

    var options = {
        hostname: '107.170.40.89',
        port: 8086,
        path: '/write?db=workshop',
        method: 'POST'
    };

    var req = http.request(options, (res) => {
        res.on('end', () => console.log(line));
        res.on('error', (err) => console.log('ERROR ' + err));
    });
    req.write(line);
    req.end();
}

// InfluxDB line protocol
function buildLine(event) {
    var measurement = 'temperature';
    var timestamp = Date.parse(event.published_at);

    var line = measurement + ',device=' +
        event.coreid + ' value=' + event.data + ' ' +
        timestamp * 1000000; // nanoseconds
    return line;
}