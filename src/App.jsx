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
  const [readings, setReadings] = useState(
    readingsInit({ actuationTesting: false })
  );
  const [hazeStatus, setHazeStatus] = useState(null);
  const rangeState = useState(100);
  const [rtMode, setRtMode] = useState(false);

  useEffect(() => {
    readData([...readings], setReadings);
    setInterval(() => readData([...readings], setReadings), 5000);
  }, []);

  useEffect(() => {
    const q = isThereHaze(readings);
    setHazeStatus(q.alert);
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
          <Charts readings={readings} rtModer={[rtMode, setRtMode]} />
        </div>

        <div className="">
          <MoreInfo />
        </div>
      </Layout>
    </>
  );
}

export default App;
