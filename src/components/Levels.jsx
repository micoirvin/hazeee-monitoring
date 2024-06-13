import levelMap from './data/levelMap';

export default function Levels({ readings }) {
  return (
    <div className="grid gap-3 mb-8">
      {readings.map((r, i) => {
        return (
          <div
            className="leading-none px-5 py-3 sm:px-6 sm:py-4 rounded-full grid grid-cols-3 gap-2 justify-between bg-gradient-to-r from-[rgba(255,255,255,0.7)] to-blue-light"
            key={i}
          >
            <div className="font-bold text-ellipsis truncate ">{r.title}</div>
            <div>
              {r.value !== null ? r.value + ' ' + r.units : 'no reading'}
            </div>
            <div>{computeLevel(r)}</div>
          </div>
        );
      })}
    </div>
  );
}

function computeLevel({ name, value }) {
  let level = 'unknown';
  if (value === null) return level;
  const L = levelMap();
  const levels = L[name];
  for (const k in levels) {
    if (value > levels[k]) level = k;
    else break;
  }
  return level;
}
