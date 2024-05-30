import Chart from './Chart';

export default function Charts({ readings }) {
  return (
    <div className="mt-12">
      <h3 className="text-[1.5rem] md:text-[2rem] mb-4 font-bold lg:hidden">
        Charts
      </h3>
      <div className="lg:mt-16 text-blue">
        {readings.map((r, i) => {
          return <Chart reading={r} i={i} key={i} />;
        })}
      </div>
    </div>
  );
}
