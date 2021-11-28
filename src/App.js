import './App.scss';
import Header from "components/Header/Header";
import AboutMe from "components/AboutMe/AboutMe";
import Experience from "components/Experience/Experience";
import PersonalPhoto from 'components/PersonalPhoto/PersonalPhoto';
import Technologies from "./components/Technologies/Technologies";
import Achievements from "./components/Achievements/Achievements";

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
            </div>
          </div>
      </div>
  );
}

export default App;
