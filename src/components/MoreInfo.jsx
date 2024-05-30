export default function MoreInfo() {
  const info = [
    {
      title: 'What is haze?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    },
    {
      title: 'What are the health impacts of haze?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    },
    {
      title: 'What is this project?',
      content:
        'This is an undergraduate project for the course EEE 192 at the University of the Philippines Diliman, Electrical and Electronics Engineering Institute. Sensors were installed at a location in the Institute building. The said sensors record carbon monoxide concentration, particulate matter (PM) 2.5 concentration, temperature, and humidity, in order to determine if haze is present in the location.',
    },
  ];
  return (
    <div className="mt-8">
      <h2 className="font-bold text-[1.5rem] md:text-[2rem] mb-4">More info</h2>
      {info.map(({ title, content }, i) => (
        <div key={i}>
          <h4 className="font-bold text-blue mb-2">{title}</h4>{' '}
          <p className="mb-4">{content}</p>
        </div>
      ))}
    </div>
  );
}
