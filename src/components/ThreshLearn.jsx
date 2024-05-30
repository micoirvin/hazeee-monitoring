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
      <h3 className="uppercase text-blue font-bold text-center">
        What is considered haze?
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident.
      </p>
    </div>
  );
}
