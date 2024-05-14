export default function ExtraInfo({ date }) {
  date = new Date(date);
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
  date = date.toLocaleDateString('en-US', dateOptions);
  return (
    <div className="max-w-[32rem] mb-8">
      <p className="mb-2">Last reading: {date}</p>
      <p className="mb-2">
        Location: Electrical and Electronics Engineering Institute,
        <br />
        University of the Philippines Diliman, Quezon City, Philippines
      </p>

      <p className="mb-2">An undergraduate project for the course EEE 192</p>
    </div>
  );
}
