const mqtt = require("mqtt");
var client = mqtt.connect("mqtt://broker.hivemq.com");

client.on('connect', function() {
    client.subscribe("Damigreen");
    console.log("Client has subscribed successfully!")
})
client.on('message', function(topic,message) {
    console.log("topic " + topic);
    console.log("message " + message.toString());
})
