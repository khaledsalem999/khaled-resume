import './Experience.scss'
const experienceData = require('../../data/WorkExperience.json');

const Experience = () => {
    return (
        <div className={'started-content mb-4'}>
            <div className={'d-flex flex-column'}>
                <span className={'h-title mb-2'}>Experience</span>
                <span className={'entity-text'}>What I worked on</span>
            </div>
        </div>
    )
}

export default Experience;