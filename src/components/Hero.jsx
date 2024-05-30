export default function Hero({ hazeStatus, ...props }) {
  return (
    <section className="py-8">
      <div className="flex flex-col">
        <h1 className="font-bold text-gray text-[1.1rem] sm:text-[1.25rem] md:text-[1.5rem] max-xs:text-center">
          HazEEE Monitoring
        </h1>
        <h2 className="font-bold text-[2rem] sm:text-[2.5rem] leading-tight md:text-[3rem] max-xs:text-center">
          Is there haze today?
        </h2>

        <p className="font-bold text-[2rem] sm:text-[2.5rem] md:text-[3rem] mb-6 text-blue leading-tight max-xs:text-center">
          {hazeStatus
            ? 'Yes. Be safe from haze today.'
            : 'No haze at the moment.'}
        </p>

        <p className="mb-10 max-xs:text-center">
          {hazeStatus
            ? 'Based on sensor readings, there is haze in the vicinity.'
            : 'Based on sensor readings, there is no haze in the vicinity.'}
        </p>
        {props.children}
      </div>
    </section>
  );
}
