const int pin = D2;

int lastValue = -1;
int buttonPressed = 0;
String command;

void setup() {
   pinMode(pin, INPUT_PULLDOWN);
}

void loop() {
    lastValue = buttonPressed;
    buttonPressed = digitalRead(pin);
    if (buttonPressed != lastValue) {
        
        if (buttonPressed) {
            command = "on";
        } else {
            command = "off";
        }
        Serial.println(command);
        // TODO students should generate a unique event name
        Particle.publish("iot-workshop-button", command);
    }
    delay(200);
}
