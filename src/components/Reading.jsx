export default function Reading({ title, value, i }) {
  const chartLink = `https://thingspeak.com/channels/2516468/charts/${
    i + 1
  }?title=${title.replace(' ', '+')}`;
  return (
    <>
      <div className="mb-6 p-4 shadow-[0_0_1px_0] shadow-blue-gray rounded-xl bg-white w-fit">
        <h3>{title}</h3>
        <div className="text-[1.25rem] font-medium">
          {value ?? 'no reading'}
        </div>
        <iframe width="450" height="260" src={chartLink}></iframe>
      </div>
    </>
  );
}
