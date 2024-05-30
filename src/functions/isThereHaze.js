export default function isThereHaze(readings) {
  const threshCases = readings.map((r) =>
    isNaN(r.value) || typeof r.value !== 'number'
      ? 0
      : (r.safe_thresh.max && r.value < r.safe_thresh.value) ||
        (!r.safe_thresh.max && r.value > r.safe_thresh.value)
      ? 1
      : -1
  );
  let safe = true;
  threshCases.forEach((t) => {
    if (t === -1) safe = safe && false;
  });
  return {
    isThereHaze: !safe,
    threshCases: threshCases,
  };
}
