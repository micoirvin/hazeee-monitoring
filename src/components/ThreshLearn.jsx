import { useState } from 'react';
import DropdownIcon from './icons/DropdownIcon';

export default function ThreshLearn(props) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="relative">
      {props.children}
      <div className="pt-6 px-6 -mt-6 rounded-xl shadow bg-blue-light">
        <div className="overflow-hidden">
          <Content showDetails={showDetails} />
        </div>
        <div
          className="flex text-blue justify-center items-center cursor-pointer px-6 py-2 gap-2"
          onClick={() => setShowDetails(!showDetails)}
        >
          <div>Learn more</div>
          <div
            className={`scale-75 transition-transform duration-500 delay-300 ease-in-out ${
              showDetails ? 'rotate-180' : 'rotate-0'
            }`}
          >
            <DropdownIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content({ showDetails }) {
  return (
    <div
      className={`pt-6 transition-[margin-top] duration-1000 ease-in-out ${
        showDetails ? 'mt-500' : 'mt-[-100%]'
      }`}
    >
      <h3 className="uppercase text-blue font-bold text-center mb-4">
        What is considered haze?
      </h3>
      <p className="mb-4">
        The biggest contributor of haze is the amount of dust (particularly PM
        2.5) in the atmosphere. When the safety threshold for PM 2.5 has been
        exceeded, there is a signal for moderate chance of haze.
      </p>
      <p className="mb-4">
        When the unsafe conditions for PM 2.5 and carbon monoxide both happen at
        the same time, there is a signal for high chance of haze.
      </p>
      <p className="mb-4">
        When the unsafe conditions for PM 2.5, carbon monoxide, and humidity all
        happen at the same time, there is a signal for very high chance of haze.
      </p>
    </div>
  );
}
