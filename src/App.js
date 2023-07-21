import './App.scss';
import Header from "components/Header/Header";
import AboutMe from "components/AboutMe/AboutMe";
import Experience from "components/Experience/Experience";
import PersonalPhoto from 'components/PersonalPhoto/PersonalPhoto';
import Technologies from "./components/Technologies/Technologies";
import Achievements from "./components/Achievements/Achievements";
import Certificates from 'components/Certificates/Certificates';

function App() {
  return (
      <div>
          <Header/>
          <div className={'wrapper'}>
            <PersonalPhoto/>
            <div className={'d-flex flex-column'}>
                <AboutMe/>
                <Experience/>
                <Achievements/>
                <Technologies/>
                <Certificates/>
            </div>
          </div>
      </div>
  );
}

export default App;
