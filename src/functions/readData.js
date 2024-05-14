export default function readData(fieldNum, reading, setReading) {
  function read() {
    const URL = `https://api.thingspeak.com/channels/2516468/fields/${fieldNum}.json?api_key=MJ9YULSQTETXAUMQ&results=2`;

    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        // Handle the data here (e.g., log it to the console)
        // console.log(data);

        reading[fieldNum - 1] = data.feeds[0];
        setReading(reading);
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error fetching data:', error);
      });
  }
  read();
  const timeout = setInterval(read, 15000);
  return () => clearInterval(timeout);
}
