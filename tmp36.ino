const int TEMPERATURE_PIN = A0;

void setup() {
    pinMode(TEMPERATURE_PIN, INPUT);
}

void loop() {
    float temperature = calculateTemperature();
    Particle.publish("tempC", String(temperature, 1));
    Particle.publish("tempF", String(to_fahrenheit(temperature), 1));
    delay(5000);
}

float to_fahrenheit(float celsius) {
    return celsius * 1.8 + 32;
}

// calculate the temperature from the sensor reading
// https://learn.adafruit.com/tmp36-temperature-sensor/using-a-temp-sensor
float calculateTemperature()
{
    // read the sensor value
    int sensorValue = analogRead(TEMPERATURE_PIN);
    
    // 3.3v logic, 12-bit ADC
    float voltage = sensorValue * 3.3 / 4096.0;
    // 100 degrees per volt with 0.5 volt offset  
    float temperature = (voltage - 0.5) * 100;  
    
    return temperature;
}
