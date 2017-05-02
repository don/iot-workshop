var Particle = require('particle-api-js');
var particle = new Particle();

var config = require('/Users/don/.particle/particle.config.json');
var token = config.access_token;

var deviceId = '310025000b47353235303037';

function on() {
    console.log("on");
    args = {
        deviceId: deviceId,
        name: 'switch',
        argument: 'on',
        auth: token
    };
    particle.callFunction(args)
        .then(data => {
            setTimeout(off, 2000)
        });
}

function off() {
    console.log("off");
    args = {
        deviceId: deviceId,
        name: 'switch',
        argument: 'off',
        auth: token
    };
    particle.callFunction(args)
        .then(data => {
            setTimeout(on, 2000)
        });
}

on();