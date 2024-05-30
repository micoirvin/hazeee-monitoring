export default function ReadingsInfo({ readings }) {
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

  let mostRecentDate = 0;
  readings.forEach((r) => {
    let date = new Date(r.created_at).getTime();
    if (date > mostRecentDate) mostRecentDate = date;
  });
  let date = new Date(mostRecentDate);
  date = date.toLocaleDateString('en-US', dateOptions);

  const info = [
    { title: 'Last reading', content: String(date) },
    {
      title: 'Location',
      content:
        'Electrical and Electronics Engineering Institute, University of the Philippines Diliman, Quezon City, Philippines',
    },
  ];
  return (
    <div className="max-w-[32rem] mb-8 flex gap-4 max-lg_1:flex-col">
      <div className="py-3 px-4 rounded-lg shadow-border lg_1:min-w-56">
        <p className="text-[0.9rem] text-black-light">Last reading</p>
        <p>{date}</p>
      </div>
      <div className="py-3 px-4 rounded-lg shadow-border lg_1:min-w-[26rem]">
        <p className="text-[0.9rem] text-black-light">Location</p>
        <p>
          Electrical and Electronics Engineering Institute,
          <br />
          University of the Philippines Diliman,
          <br />
          Quezon City, Philippines
        </p>
      </div>
    </div>
  );
}
