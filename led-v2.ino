const int led = D7;
String state = "off";

void setup() {
  pinMode(led, OUTPUT);
  Particle.function("switch", lightSwitch);
  Particle.variable("state", state);
}

void loop() {
}

// Cloud functions must return an int and take a String
int lightSwitch(String command) {
  if (command =="on") {
      state = "on";
      digitalWrite(led, HIGH);
  } else {
      state = "off";
      digitalWrite(led, LOW);
  }
  return 0;
}
