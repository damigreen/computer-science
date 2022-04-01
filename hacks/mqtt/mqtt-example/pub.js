const mqtt = require("mqtt");
// var client = mqtt.connect("mqtt://broker.hivemq.com");

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

var client = mqtt.connect(options);

client.on("connect", function () {
  console.log("connected");

  // setInterval(function () {
    var random = Math.random() * 50;
    console.log(random);
    client.publish('Energy Lendway', '15')
    client.publish('Fuel Monitoring Lendway', '45')
    // if (random < 30) {
      // client.publish("Damigreen", "God is good always!!" + random.toString());
      // client.publish("Energy Reading", "{ Energy: '100MW', time: 9 }", { qos: 1 });
      // client.publish(
      //   "Generator Metrics",
      //   "{ Energy: '130MW', time: 7 }"
      // , { qos: 1 });
      // client.publish("Fuel Reading", "{ Energy: '290MW', time: 9 }", { qos: 1 });
      // client.publish(
      //   "Water Flow - Phase One",
      //   "{ Energy: '2000MW', time: 3 }"
      // , { qos: 1 });
      // client.publish(
      //   "Water Flow - Phase Two",
      //   "{ Energy: '900MW', time: 42 }"
      // , { qos: 1 });
      // console.log("published!!")
    // }
  // }, 3000);
});
