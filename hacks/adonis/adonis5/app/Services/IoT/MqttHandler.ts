const mqtt = require("mqtt");
// const Config = use("Config");
// const Logger = use("Logger");
// import Env from "@ioc:Adonis/Core/Env";


const hoxReadingsMap = {
  recorded_at: "TotalStartTime",
  kwh: "ApparentPower",
  volts: "Voltage",
  amperes: "Current"
};

import CreateReading from "App/Services/IoT/SensorReading/Create";

import  Sensor from "App/Models/IoT/Sensor";

class MqttHandler {
  public mqttClient
  async connect() {
    // Connect mqtt with credentials (in case of needed, otherwise we can omit 2nd param)
    // this.mqttClient = mqtt.connect(Config.get("mqtt.host"), {
      // port: Config.get("mqtt.port"),
      // username: Config.get("mqtt.username"),
      // password: Config.get("mqtt.port")
    // });
    // this.mqttClient = mqtt.connect("mqtt://broker.hivemq.com", {
    //   // port: Config.get("mqtt.port"),
    //   // username: Config.get("mqtt.username"),
    //   // password: Config.get("mqtt.port")
    //   port: 8080,
    //   username: "damigreen",
    //   password: "password"
    // });
    this.mqttClient = mqtt.connect("mqtt://broker.hivemq.com");

    // Mqtt error calback
    this.mqttClient.on("error", err => {
      // Logger.error(err);
      console.log(err)
      this.mqttClient.end();
    });

    // Connection callback
    this.mqttClient.on("connect", () => {
      // Logger.debug(`mqtt client connected`);
      console.log(`mqtt client connected`);
    });

    const sensors = await Sensor.query()
      .where("active", true)
      .paginate(1,100)
      // .fetch();

    // mqtt subscriptions
    for (const sensor of sensors.rows)
      this.mqttClient.subscribe(sensor.code, { qos: 0 });

    // When a message arrives, console.log it
    this.mqttClient.on("message", async (topic, data) => {
      const sensor = await Sensor.query()
        .where("code", topic)
        // .with("organization")
        .first();

      if (!sensor) return;

      // const organization = sensor.$relations.organization;

      for (const measurement in hoxReadingsMap) {
        const parameter = hoxReadingsMap[measurement];
        const value = data[parameter];
        if (!value) continue;

        await new CreateReading().handle({
          measurement,
          // recorded_at,
          sensor_id: sensor.id,
          value,
          // organization
        });
      }
    });

    this.mqttClient.on("close", () => {
      // Logger.info(`mqtt client disconnected`);
      console.log(`mqtt client disconnected`);
    });
  }

  // Sends a mqtt message to topic: mytopic
  sendMessage(message) {
    this.mqttClient.publish("mytopic", message);
  }
}

module.exports = MqttHandler;
