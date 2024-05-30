export default function readData(N, readings, setReadings) {
  console.log('read');
  const qLength = 100;
  const URL = `https://api.thingspeak.com/channels/2516468/feeds.json?results=${qLength}`;
  const keys = Array(N).fill(false);
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const last = data?.channel?.last_entry_id ?? null;
      if (!last) read();

      const feeds = data?.feeds;
      for (let i = last; i > last - qLength; i--) {
        const item = feeds.filter((item) => item.entry_id === i)[0];

        keys.forEach((e, i) => {
          const fieldi = item[`field${i + 1}`];
          if (e === false && fieldi !== null) {
            readings[i].value = Number(fieldi);
            readings[i].created_at = item.created_at;
            keys[i] = true;
          }
        });
      }

      setReadings(readings);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}
