import { useEffect, useState } from 'react';
import './App.css';
import isThereHaze from './functions/isThereHaze';
import Header from './components/Header';
import Hero from './components/Hero';
import readData from './functions/readData';
import Layout from './components/Layout';
import Levels from './components/Levels';
import Charts from './components/Charts';
import Thresholds from './components/Thresholds';
import ThreshLearn from './components/ThreshLearn';
import ReadingsInfo from './components/ReadingsInfo';
import MoreInfo from './components/MoreInfo';
import readingsInit from './components/data/readingsInit';

function App() {
  const [readings, setReadings] = useState(readingsInit());
  const [hazeStatus, setHazeStatus] = useState(null);
  useEffect(() => {
    readData(4, [...readings], setReadings);
    setInterval(() => readData(4, [...readings], setReadings), 7000);
  }, []);

  useEffect(() => {
    // console.log(readings);
    const q = isThereHaze(readings);
    setHazeStatus(q.isThereHaze);
  }, [readings]);

  return (
    <>
      <Header />
      <Layout>
        <div>
          <Hero hazeStatus={hazeStatus}>
            <ReadingsInfo readings={readings} />
          </Hero>
          <Levels readings={readings} />
          <ThreshLearn>
            <Thresholds readings={readings} />
          </ThreshLearn>
        </div>

        <div className="lg:col-start-2 lg:row-start-1 lg:row-end-3">
          <Charts readings={readings} />
        </div>

        <div className="">
          <MoreInfo />
        </div>
      </Layout>
    </>
  );
}

export default App;
