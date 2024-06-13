import isThereHaze from '../functions/isThereHaze';
import statusMap from './data/statusMap';
import CheckIcon from './icons/CheckIcon';
import QuestionIcon from './icons/QuestionIcon';
import XIcon from './icons/XIcon';

export default function Thresholds({ readings }) {
  const status = isThereHaze(readings);
  const aStatusMap = statusMap();
  return (
    <div className="p-4 bg-white rounded-xl shadow relative z-[1]">
      <h3 className="font-bold mb-6">Haze thresholds (safety limits)</h3>
      <div className="grid grid-cols-3 mb-4 max-md:grid-cols-1 max-md:gap-y-6">
        {readings.map((r, i) => {
          let cssBorder = 'border-l';
          if (i === 0) cssBorder = '';
          if (i > 0) cssBorder = 'md:border-l';
          return (
            <div
              key={i}
              className={`h-full grid justify-center items-center gap-2 py-4 px-8 text-center ${cssBorder}`}
            >
              <div className="leading-none font-bold text-blue">{r.title}</div>
              <p className="leading-none ">
                {r.safe_thresh.max ? '<' : '>'} {r.safe_thresh.value} {r.units}
              </p>
              <div className="w-fit pt-2 justify-center self-end mx-auto">
                {status.threshCases[i].value === 1 ? (
                  <CheckIcon />
                ) : status.threshCases[i].value === 0 ? (
                  <QuestionIcon />
                ) : (
                  <XIcon />
                )}
              </div>
            </div>
          );
        })}
      </div>

      <p className="tracking-widest text-center">{aStatusMap[status.alert]}</p>
    </div>
  );
}
