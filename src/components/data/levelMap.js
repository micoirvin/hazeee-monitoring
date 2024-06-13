export default function levelMap() {
  return {
    carbon_monoxide: {
      good: -1,
      fair: 18,
      'unhealthy for some groups': 38,
      'very unhealthy': 50,
      'acute unhealthy': 62,
      emergency: 122,
    },
    pm_2_5: {
      good: -1,
      fair: 300,
      'unhealthy for some groups': 420,
      'very unhealthy': 540,
      'acute unhealthy': 660,
      emergency: 1080,
    },
    temperature: {
      'very cold': -40,
      cold: 15,
      comfortable: 22,
      warm: 27,
      'moderate heat': 31,
      'dangerous heat': 35,
    },
    humidity: {
      'very dry': -1,
      'moderately dry': 50,
      humid: 70,
    },
  };
}
