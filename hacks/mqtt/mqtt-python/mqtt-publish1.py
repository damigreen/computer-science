from random import randrange, uniform
import paho.mqtt.client as mqtt
import time

mqttBroker = "mqtt.eclipseprojects.io"
client = mqtt.Client("Temperature_Inside")
client.connect(mqttBroker)

while True:
    randNum = uniform(20.0, 21.0)
    client.publish("TEMPERATURE", randNum)
    print("Just published " + str(randNum) + " to Topic TEMPERATURE")
    time.sleep(1)
