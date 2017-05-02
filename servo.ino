Servo servo;
int position = 0;

void setup() {
    servo.attach(D0);
    Particle.function("setPosition", setPosition);
    Particle.variable("position", position);
}

void loop() {
}

int setPosition(String positionString) {
    position = positionString.toInt();
    servo.write(position);
    return position;
}