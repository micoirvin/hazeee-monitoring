export default function readingsInit() {
  return [
    {
      name: 'carbon_monoxide',
      title: 'Carbon monoxide',
      units: 'ppm',
      value: null,
      created_at: null,
      safe_thresh: {
        value: 150,
        max: true,
      },
      thingspeak: {
        channel: 2550123,
        fieldi: 1,
      },
    },
    {
      name: 'pm_2_5',
      title: 'PM 2.5',
      units: 'ppm',
      value: null,
      created_at: null,
      safe_thresh: {
        value: 150,
        max: true,
      },
      thingspeak: {
        channel: 2516468,
        fieldi: 2,
      },
    },
    {
      name: 'temperature',
      title: 'Temperature',
      units: '°C',
      value: null,
      created_at: null,
      safe_thresh: {
        value: 30,
        max: true,
      },
      thingspeak: {
        channel: 2516468,
        fieldi: 3,
      },
    },
    {
      name: 'humidity',
      title: 'Humidity',
      units: '%',
      value: null,
      created_at: null,
      safe_thresh: {
        value: 60,
        max: false,
      },
      thingspeak: {
        channel: 2516468,
        fieldi: 4,
      },
    },
  ];
}
