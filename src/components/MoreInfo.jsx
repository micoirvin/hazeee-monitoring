import PM_AQI from '../assets/PM_AQI.png';
import CO_AQI from '../assets/CO_AQI.png';
import AQI_caution from '../assets/AQI_caution.png';
export default function MoreInfo() {
  return (
    <div>
      <div className="mt-8">
        <h2 className="font-bold text-[1.5rem] md:text-[2rem] mb-4">
          Air quality index scale
        </h2>
        <div>
          <p className="mb-4">
            The Air Quality Index (AQI) used to monitor air pollution level is
            based on measurements of carbon monoxide and PM 2.5 concentration.
            An 8-hour monitoring cycle for carbon monoxide concentration and
            24-hour monitoring cycle for PM 2.5 concentration are defined by
            standards set by the Department of Environment and Natural
            Resources.
          </p>
          <p className="mb-4">
            In this project, real-time data from sensors tracking PM 2.5, CO,
            and humidity are monitored through graphs, with the AQI observed on
            a 2-hour monitoring cycle.
          </p>
          <div className="mb-4">
            <img src={PM_AQI} className="max-w-[32rem] block w-full" alt="" />
            <img src={CO_AQI} className="max-w-[32rem] block w-full" alt="" />
          </div>
          <p className="mb-4">
            Here are cautionary statements and health implications associated
            with the occurrence of haze based on AQI.
          </p>
          <div className="mb-4">
            <img
              src={AQI_caution}
              className="max-w-[40rem] block w-full"
              alt=""
            />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="font-bold text-[1.5rem] md:text-[2rem] mb-4">
            More info
          </h2>
          <div>
            <h4 className="font-bold text-blue mb-2">What is haze?</h4>
            <p className="mb-4">
              Haze is an atmospheric phenomenon where fine particles and
              pollutants in the air obscure the sky’s clarity. These particles
              can include various substances such as dust, smoke, and pollutants
              like carbon monoxide, sulfur dioxide, nitrogen oxide, and
              particulate matter 2.5 & 10 (PM 2.5 & PM 10). Moderate humidity
              levels cause particles and pollutants to remain suspended in the
              air for longer periods.
            </p>
            <p className="mb-4">
              Carbon monoxide and PM 2.5 concentrations, along with humidity
              levels are significant indicators used to detect the presence of
              haze. Haze occurs when safety thresholds are reached.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-blue mb-2">
              What is carbon monoxide, PM 2.5, and humidity?
            </h4>
            <p className="mb-4">
              Carbon monoxide is an odorless, tasteless, poisonous gas that
              forms when carbons from fuels burn incompletely.
            </p>
            <p className="mb-4">
              PM 2.5 consists of airborne particles measuring less than 2.5
              micrometers in diameter. It can easily enter the human lungs and
              penetrate the alveoli, then diffuses into the capillaries and
              directly affects the blood circulation system.
            </p>
            <p className="mb-4">
              Humidity is the measure of the amount of water vapor or moisture
              present in the atmosphere.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-blue mb-2">What is this project?</h4>
            <p className="mb-4">
              This is an undergraduate project for the course EEE 192 at the
              University of the Philippines Diliman, Electrical and Electronics
              Engineering Institute. The HazEEE Monitoring System measures
              metrics – carbon monoxide concentration, PM 2.5 concentration, and
              humidity levels – to determine the presence of haze. These metrics
              are measured using MQ135, DSM501a, and SHT30 sensors connected to
              STM32 NUCLEO-F411RE. These sensors were deployed and tested at the
              4th floor of the institute building.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
