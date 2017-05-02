const int led = D7;

void setup() {
  pinMode(led, OUTPUT);
}

void loop() {
  digitalWrite(led, HIGH);   // turn the LED on
  delay(1000);               // wait one second
  digitalWrite(led, LOW);    // turn the LED off
  delay(1000);               // wait one second
}