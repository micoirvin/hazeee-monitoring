import { useEffect, useState } from 'react';
import './App.css';
import Reading from './components/Reading';
import isThereHaze from './functions/isThereHaze';
import Header from './components/Header';
import Hero from './components/Hero';
import ExtraInfo from './components/ExtraInfo';
import readData from './functions/readData';
import ReadingsWrapper from './components/ReadingsWrapper';
import Layout from './components/Layout';

function App() {
  const [reading, setReading] = useState(Array(4));
  const [hazeStatus, setHazeStatus] = useState(null);
  useEffect(() => {
    readData(1, [...reading], setReading);
  }, []);

  useEffect(() => {
    console.log(reading);
    const q = isThereHaze(reading);
    setHazeStatus(q.isThereHaze);
  }, [reading]);

  return (
    <>
      <Header />
      <Layout>
        <Hero hazeStatus={hazeStatus}>
          <ExtraInfo date={reading[0]?.created_at} />
        </Hero>
        <ReadingsWrapper>
          <Reading title="Air quality" value={reading[0]?.field1} i={0} />

          <Reading title="PM 2.5" value={reading[1]?.field1} i={1} />

          <Reading title="Temperature" value={reading[2]?.field1} i={2} />

          <Reading title="Humidity" value={reading[3]?.field1} i={3} />
        </ReadingsWrapper>
      </Layout>
    </>
  );
}

export default App;
