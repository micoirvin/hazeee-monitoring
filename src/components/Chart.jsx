export default function Chart({ reading, i }) {
  const { value, title, units, created_at, thingspeak } = reading;
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
  };
  const date = new Date(created_at).toLocaleDateString('en-US', dateOptions);
  const chartLink = encodeURI(
    `https://thingspeak.com/channels/${thingspeak.channel}/charts/${thingspeak.fieldi}?dynamic=true&title=${title}&yaxis=${title} (${units})`
  );
  return (
    <div className="mb-6 py-4 shadow rounded-xl bg-white flex flex-col">
      <h3 className="mx-4">{title}</h3>
      <div className="mx-4 xs:text-[1.25rem] font-medium">
        {value ? String(value) + ` ${units}` : 'no reading'}
      </div>
      <div className="mx-4 text-[0.75rem]">{date ?? ''}</div>
      <div className="mt-4 overflow-hidden self-center max-w-full">
        <div className="relative overflow-hidden h-auto max-lg_2:max-w-[calc(450rem*0.9/16)] max-lg_2:max-h-[calc(260rem*0.9/16)] max-lg:max-w-full max-lg:max-h-full max-xs_2:max-w-[calc(450rem*0.9/16)] max-xs_2:max-h-[calc(260rem*0.9/16)] max-xs:max-w-[calc(450rem*0.8/16)] max-xs:max-h-[calc(260rem*0.8/16)] max-2xs:max-w-[calc(450rem*0.7/16)] max-2xs:max-h-[calc(260rem*0.7/16)] max-3xs:max-w-[calc(450rem*0.6/16)] max-3xs:max-h-[calc(260rem*0.6/16)]">
          <iframe
            width="450"
            height="260"
            className="relative max-lg_2:left-1/2 max-lg_2:translate-x-[-50%] max-lg_2:scale-[0.9] max-lg:scale-100 max-xs_2:scale-[0.9] max-xs:scale-[0.8] max-2xs:scale-[0.7] max-3xs:scale-[0.6] max-4xs:hidden origin-top"
            src={chartLink}
          ></iframe>
          <p className="text-black mx-4 4xs:hidden">
            Screen too small. See the chart <a href={chartLink}>here</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
