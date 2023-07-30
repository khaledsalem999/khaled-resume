import './Experience.scss'
import {useState} from "react";
import Button from 'components/Shared/Button/Button';
import leftArrow from 'assets/images/left.svg';
import rightArrow from 'assets/images/right.svg';
import { useRef } from 'react';
const experienceData = require('data/WorkExperience.json');

const Experience = (props) => { 

    const [currentJobNum, setCurrentJobNum ] = useState(0);

    const jobs = experienceData.WorkExperience;
    const jobNum = experienceData.WorkExperience.length;

    const jobNumIncrease = () => {
        if(currentJobNum < jobNum-1){
            setCurrentJobNum(currentJobNum+1);
        }
    }

    const jobNumDecrease = () => {
        if(currentJobNum > 0){
            setCurrentJobNum(currentJobNum-1);
        }
    }

    const expRef = useRef();
    props.sendExpRefs(expRef);

    return (
        <div ref={expRef} className={'started-content mb-4'}>
            <div className={'d-flex flex-column mb-4'}>
                <span className={'h-title mb-2'}>Experience</span>
            </div>
            <div className={'d-flex justify-content-center mb-4'}>
                <span className={'entity-text my-auto d-block recent-text'}>Recent Experience</span>
                    <Button isImageButton={true} imageObject={leftArrow} registerClick={jobNumDecrease}/>
                    <Button isImageButton={true} imageObject={rightArrow} registerClick={jobNumIncrease}/>
                <span className={'entity-text my-auto d-block past-text'}>Past Experience</span>
            </div>
            <div className={'d-flex flex-column mb-4 jobs-transition'}>
                <span className={'s-title'}>{jobs[currentJobNum].CompanyName}</span>
                <span className={'entity-text mt-2'}>{jobs[currentJobNum].From} - {jobs[currentJobNum].To}</span>
            </div>
            <div className={'h-text mb-5'}>
                <span>{jobs[currentJobNum].AboutCompany}</span>
            </div>
            <div className={'grid-container'}>
                {jobs[currentJobNum].ProjectsList.map((project) =>
                    <div className={'d-flex flex-row grid-item'}>
                        <div>
                            <span className={'entity-text'}>{project.ProjectName}</span>
                            <div>
                                <ul>
                                    {project.Tasks.map((task) =>
                                        <li>{task}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default Experience;