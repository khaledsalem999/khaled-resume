import './Experience.scss'
const experienceData = require('../../data/WorkExperience.json');

const Experience = () => {

    const jobs = experienceData.WorkExperience;

    return (
        <div className={'started-content mb-4'}>
            <div className={'d-flex flex-column mb-4'}>
                <span className={'h-title mb-2'}>Experience</span>
            </div>
            <div>
                <div className={'d-flex flex-column mb-4'}>
                    <span className={'s-title'}>{jobs[0].CompanyName}</span>
                    <span className={'entity-text mt-2'}>{jobs[0].From} - {jobs[0].To}</span>
                </div>
                <div className={'h-text mb-5'}>
                    <span>{jobs[0].AboutCompany}</span>
                </div>
                <div className={'grid-container'}>
                    {jobs[0].ProjectsList.map((project) =>
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
        </div>
    )
}

export default Experience;