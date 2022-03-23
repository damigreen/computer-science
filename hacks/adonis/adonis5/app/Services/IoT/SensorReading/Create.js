"use strict";

const Measurement = use("App/Models/Utility/Measurement");
const Model = use("App/Models/IoT/SensorReading");

class SensorReading {
  async handle({
    measurement,
    recorded_at,
    sensor_id,
    value,
    organization,
    user = {}
  }) {
    const measurement_id = (await Measurement.findByOrFail("code", measurement))
      .id;
    const organization_id = organization.id;
    const created_by = user.id;
    recorded_at = Date.parse(recorded_at) / 1000;

    const sensorReading = await Model.create({
      value,
      measurement_id,
      recorded_at,
      sensor_id,
      organization_id,
      created_by
    });

    return sensorReading;
  }
}

module.exports = SensorReading;
