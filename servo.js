var authToken = '8ffba43495233f9e43fc362910f7f84c76c4ee77';
var deviceId = '310025000b47353235303037';
var functionName = 'setPosition';
var url = 'https://api.particle.io/v1/devices/' + deviceId + '/' 
            + functionName + '?access_token=' + authToken;

var input = document.querySelector('input[name="angle"]');

var onAngleChanged = function(event) {
    var angle = event.target.value;
    console.log('Setting angle to', angle);
    fetch(url, {
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }),
        method: 'POST',
        body: 'command=' + angle
    })
    .then(function(response) { 
        return response.json() 
    })
    .then(function(json) {
        console.log(json);
        if (json.error) {
            alert(json.error + "\n" + json.info);
        } else {
            positionDiv.innerText = json.return_value;
        }
    });
}

input.addEventListener('change', onAngleChanged, false);
