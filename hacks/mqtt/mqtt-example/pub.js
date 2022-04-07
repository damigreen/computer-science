const mqtt = require("mqtt");

var options = {
  // host: "x5f2dc2d.us-east-1.emqx.cloud",
  // port: 15086,
  // username: "landwey-iot",
  // password: "KnA8nm6eTDJPZTX",

  host: "4g.bridge.iotrouter.com",
  port: 1883,
  username: "test-user4",
  password: "12345678",

  // host: "5535608506a44d8dbecdbc5eaed7bd52.s1.eu.hivemq.cloud",
  // port: 8883,
  // protocol: "mqtts",
  // username: "landwey-iot",
  // password: "bU3d@Y@apGzNEtu",
};

// var client = mqtt.connect(options);
var client = mqtt.connect("mqtt://broker.hivemq.com");

client.on("connect", function () {
  console.log("connected");
  setInterval(() => {
    console.log(Math.random());
    client.publish("damigreen", "God is good! do not break fasting", {
      qos: 2,
    });
  }, 3000);
});
