export default function Hero({ hazeStatus, ...props }) {
  return (
    <section className="py-8 md:py-12 lg:py-24">
      <div className="flex flex-col">
        <h1 className="font-medium leading-none mb-6">HazEEE Monitoring</h1>

        <h2 className="text-[1.5rem] font-medium leading-none mb-6 shadow-[0_0.5px_3px_0_rgba(0,0,0,0.1)] rounded-[100px] bg-white py-4 px-8 -ml-4 -mr-4">
          Is there haze today?
        </h2>

        <div className="p-8 -ml-4 mb-8 -mr-4 shadow-[0_0_1px_0] shadow-blue-gray rounded-xl bg-white">
          <p className="font-medium leading-tight text-[3rem] mb-12">
            {hazeStatus
              ? 'Yes. Be safe from haze today.'
              : 'No haze at the moment.'}
          </p>
          <div className="flex gap-3 flex-wrap">
            <div className="shadow-[0_0_0_1px] shadow-blue-gray rounded-[100px] py-2 px-3">
              What is haze?
            </div>
            <div className="shadow-[0_0_0_1px] shadow-blue-gray rounded-[100px] py-2 px-3">
              What are the health impacts of haze?
            </div>
            <div className="shadow-[0_0_0_1px] shadow-blue-gray rounded-[100px] py-2 px-3">
              What is this project?
            </div>
          </div>
        </div>

        {props.children}
      </div>
    </section>
  );
}
