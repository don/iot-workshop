const int led = D7;

void setup() {
  pinMode(led, OUTPUT);
  Particle.function("switch", lightSwitch);
}

void loop() {
}

// Cloud functions must return an int and take a String
int lightSwitch(String command) {
  if (command =="on") {
      digitalWrite(led, HIGH);
  } else {
      digitalWrite(led, LOW);
  }
  return 0;
}
