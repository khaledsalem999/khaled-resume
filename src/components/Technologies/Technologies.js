import './Technologies.scss';
import Button from "../Shared/Button/Button";
import leftArrow from "../../assets/images/left.svg";
import rightArrow from "../../assets/images/right.svg";
import { useRef } from 'react';
const technologiesData = require('data/Technologies.json');

const Technologies = (props) => {

    const techRef = useRef();
    props.sendTechRef(techRef);

    return (
        <div ref={techRef} className={'started-content'}>
            <div className={'d-flex flex-column mb-4'}>
                <span className={'h-title mb-4'}>Technologies</span>
            </div>
            <div className={'grid-container'}>
                <div className={'d-flex flex-column mb-4'}>
                    <span className={'entity-text mb-4'}>Programming Languages</span>
                    <div>
                        <ul>
                            {technologiesData.Technologies.ProgrammingLanguages.map((tech) =>
                                <li>{tech}</li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className={'d-flex flex-column mb-4'}>
                    <span className={'entity-text mb-4'}>Framework And Libraries</span>
                    <div>
                        <ul>
                            {technologiesData.Technologies.FrameworksAndLibraries.map((tech) =>
                                <li>{tech}</li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className={'d-flex flex-column mb-4'}>
                    <span className={'entity-text mb-4'}>Interface Design Languages</span>
                    <div>
                        <ul>
                            {technologiesData.Technologies.InterfaceDesignLanguages.map((tech) =>
                                <li>{tech}</li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className={'d-flex flex-column mb-4'}>
                    <span className={'entity-text mb-4'}>DevOps and virtualization</span>
                    <div>
                        <ul>
                            {technologiesData.Technologies.DevopsAndVirtualization.map((tech) =>
                                <li>{tech}</li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className={'d-flex flex-column mb-4'}>
                    <span className={'entity-text mb-4'}>Scripting Languages</span>
                    <div>
                        <ul>
                            {technologiesData.Technologies.ScriptingLanguages.map((tech) =>
                                <li>{tech}</li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className={'d-flex flex-column mb-4'}>
                    <span className={'entity-text mb-4'}>Databases</span>
                    <div>
                        <ul>
                            {technologiesData.Technologies.DatabasesAndQueryLanguages.map((tech) =>
                                <li>{tech}</li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className={'d-flex flex-column mb-4'}>
                    <span className={'entity-text mb-4'}>Support tools</span>
                    <div>
                        <ul>
                            {technologiesData.Technologies.SupportToolsAndIdes.map((tech) =>
                                <li>{tech}</li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className={'d-flex flex-column mb-4'}>
                    <span className={'entity-text mb-4'}>Operating Systems</span>
                    <div>
                        <ul>
                            {technologiesData.Technologies.OperatingSystems.map((tech) =>
                                <li>{tech}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technologies;