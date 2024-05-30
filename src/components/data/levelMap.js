export default function levelMap() {
  return {
    carbon_monoxide: {
      //   safe: {
      //     value: 0,
      //     color: 'blue',
      //   },
      //   moderate: {
      //     value: 150,
      //     color: 'blue',
      //   },
      //   unhealthy: {
      //     value: 300,
      //     color: 'red',
      //   },
      //   'very unhealthy': {
      //     value: 400,
      //     color: 'red',
      //   },
      // },
      safe: 0,
      moderate: 150,
      unhealthy: 300,
      'very unhealthy': 400,
    },
    pm_2_5: {
      safe: 0,
      moderate: 90,
      unhealthy: 390,
      'very unhealthy': 600,
    },
    temperature: {
      'very cold': 0,
      cold: 15,
      comfortable: 22,
      warm: 27,
      'moderate heat': 31,
      'dangerous heat': 35,
    },
    humidity: {
      dry: 0,
      normal: 40,
      humid: 70,
    },
  };
}
