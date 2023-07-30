import './App.scss';
import Header from "components/Header/Header";
import AboutMe from "components/AboutMe/AboutMe";
import Experience from "components/Experience/Experience";
import PersonalPhoto from 'components/PersonalPhoto/PersonalPhoto';
import Technologies from "./components/Technologies/Technologies";
import Achievements from "./components/Achievements/Achievements";
import Certificates from 'components/Certificates/Certificates';
import Education from 'components/Education/Education';

function App() {

  const refsCollectection = [];

  const receiveExpData = (data) => {
    refsCollectection.push(data);
  }

  const receiveAchieveData = (data) => {
    refsCollectection.push(data);
  }

  const receiveAboutData = (data) => {
    refsCollectection.push(data);
  }

  const receiveCertData = (data) => {
    refsCollectection.push(data);
  }

  const receiveTechData = (data) => {
    refsCollectection.push(data);
  }

  const receiveEduData = (data) => {
    refsCollectection.push(data);
  }

  return (
      <div>
          <Header refsList={refsCollectection}/>
          <div className={'wrapper'}>
            <PersonalPhoto/>
            <div className={'d-flex flex-column'}>
                <AboutMe sendAboutRef={receiveAboutData}/>
                <Experience sendExpRefs={receiveExpData}/>
                <Achievements sendAchieveRef={receiveAchieveData}/>
                <Technologies sendTechRef={receiveTechData}/>
                <Certificates sendCertsRef={receiveCertData}/>
                <Education sendEduRef={receiveEduData}/>
            </div>
          </div>
      </div>
  );
}

export default App;
