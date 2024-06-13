import { useState } from 'react';
import Chart from './Chart';

export default function Charts({ readings, rtModer }) {
  const [rtMode, setRtMode] = rtModer;
  const [range, setRange] = useState(100);
  return (
    <div className="mt-12">
      <h3 className="text-[1.5rem] md:text-[2rem] mb-6 font-bold lg:hidden">
        Charts
      </h3>
      <div className="flex gap-4 mb-6">
        <div
          className={`cursor-pointer rounded-full py-2 px-4 ${
            rtMode ? 'bg-blue-light' : 'bg-blue-gray'
          }`}
          onClick={() => {
            setRtMode(false);
            setRange(100);
          }}
        >
          2-hour averages
        </div>
        <div
          className={`cursor-pointer rounded-full py-2 px-4 ${
            !rtMode ? 'bg-blue-light' : 'bg-blue-gray'
          }`}
          onClick={() => {
            setRtMode(true);
            setRange(100);
          }}
        >
          Real-time data
        </div>
      </div>
      <div className="lg:mt-16 text-blue">
        {readings.map((r, i) => {
          return (
            <Chart
              reading={r}
              i={i}
              key={i}
              rtMode={rtMode}
              ranger={[range, setRange]}
            />
          );
        })}
      </div>
    </div>
  );
}
