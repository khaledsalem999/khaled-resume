import './Experience.scss'
import {useState} from "react";
import Button from 'components/Shared/Button/Button';
import leftArrow from 'assets/images/left.svg';
import rightArrow from 'assets/images/right.svg';
const experienceData = require('../../data/WorkExperience.json');

const Experience = () => {

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

    return (
        <div className={'started-content mb-4'}>
            <div className={'d-flex flex-column mb-4'}>
                <span className={'h-title mb-2'}>Experience</span>
            </div>
            <div className={'d-flex justify-content-center mb-4'}>
                <Button isImageButton={true} imageObject={leftArrow} registerClick={jobNumIncrease}/>
                <Button isImageButton={true} imageObject={rightArrow} registerClick={jobNumDecrease}/>
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