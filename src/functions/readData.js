export default function readData(readings, setReadings) {
  const qLength = 200;
  readings.forEach(({ thingspeak, thingspeak_rt }, i) => {
    const { channel, fieldi } = thingspeak;
    console.log('read');
    const URL = `https://api.thingspeak.com/channels/${channel}/fields/${fieldi}.json?results=${qLength}`;
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        const last = data?.channel?.last_entry_id ?? null;
        if (typeof last != 'number') return;
        let feeds = data?.feeds;
        if (!feeds) return;
        feeds = feeds.filter((item) => item[`field${fieldi}`] !== null);
        if (feeds.length <= 0) return;
        const item = feeds[feeds.length - 1];
        const value = item[`field${fieldi}`];

        readings[i].value = Number(value);
        readings[i].created_at = item.created_at;
        setReadings(readings);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  });
}
