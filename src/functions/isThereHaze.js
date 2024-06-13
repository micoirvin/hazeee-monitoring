export default function isThereHaze(readings) {
  const threshCases = readings.map((r) =>
    isNaN(r.value) || typeof r.value !== 'number'
      ? { name: r.name, value: 0 }
      : (r.safe_thresh.max && r.value < r.safe_thresh.value) ||
        (!r.safe_thresh.max && r.value > r.safe_thresh.value)
      ? { name: r.name, value: 1 }
      : { name: r.name, value: -1 }
  );
  let alert = 0;
  if (threshCases.filter((r) => r.name === 'pm_2_5')[0].value === -1) {
    console.log('fss');
    alert++;
    if (
      threshCases.filter((r) => r.name === 'carbon_monoxide')[0].value === -1
    ) {
      alert++;
      if (threshCases.filter((r) => r.name === 'humidity')[0].value === -1) {
        alert++;
      }
    }
  }

  return {
    alert: alert,
    threshCases: threshCases,
  };
}
