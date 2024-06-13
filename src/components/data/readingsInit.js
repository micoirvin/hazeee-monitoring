export default function readingsInit({ actuationTesting }) {
  if (actuationTesting)
    return [
      {
        name: 'pm_2_5',
        title: 'PM 2.5',
        units: 'μg/m³',
        value: null,
        created_at: null,
        safe_thresh: {
          value: 420,
          max: true,
        },
        thingspeak: {
          channel: 2567343,
          fieldi: 1,
        },
        thingspeak_rt: {
          channel: 2567343,
          fieldi: 1,
        },
      },

      {
        name: 'carbon_monoxide',
        title: 'Carbon monoxide',
        units: 'ppm',
        value: null,
        created_at: null,
        safe_thresh: {
          value: 38,
          max: true,
        },
        thingspeak: {
          channel: 2550123,
          fieldi: 1,
        },
        thingspeak_rt: {
          channel: 2550123,
          fieldi: 1,
        },
      },

      {
        name: 'humidity',
        title: 'Humidity',
        units: '%',
        value: null,
        created_at: null,
        safe_thresh: {
          value: 75,
          max: false,
        },
        thingspeak: {
          channel: 2516468,
          fieldi: 4,
        },
        thingspeak_rt: {
          channel: 2516468,
          fieldi: 4,
        },
      },
    ];
  else
    return [
      {
        name: 'pm_2_5',
        title: 'PM 2.5',
        units: 'μg/m³',
        value: null,
        created_at: null,
        safe_thresh: {
          value: 420,
          max: true,
        },
        thingspeak: {
          channel: 2569932,
          fieldi: 2,
        },
        thingspeak_rt: {
          channel: 2567343,
          fieldi: 1,
        },
      },

      {
        name: 'carbon_monoxide',
        title: 'Carbon monoxide',
        units: 'ppm',
        value: null,
        created_at: null,
        safe_thresh: {
          value: 38,
          max: true,
        },
        thingspeak: {
          channel: 2569932,
          fieldi: 1,
        },
        thingspeak_rt: {
          channel: 2550123,
          fieldi: 1,
        },
      },

      {
        name: 'humidity',
        title: 'Humidity',
        units: '%',
        value: null,
        created_at: null,
        safe_thresh: {
          value: 75,
          max: false,
        },
        thingspeak: {
          channel: 2569932,
          fieldi: 3,
        },
        thingspeak_rt: {
          channel: 2516468,
          fieldi: 4,
        },
      },

      // {
      //   name: 'temperature',
      //   title: 'Temperature',
      //   units: '°C',
      //   value: null,
      //   created_at: null,
      //   safe_thresh: {
      //     value: 30,
      //     max: true,
      //   },
      //   thingspeak: {
      //     channel: 2516468,
      //     fieldi: 3,
      //   },
      // },
    ];
}
