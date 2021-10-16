import './Experience.scss'
const experienceData = require('../../data/WorkExperience.json');

const Experience = () => {
    return (
        <div>
            {experienceData.WorkExperience.map( experience => (
                <div className={'p-5'}>
                    <h1 className={'fw-bold'}>{experience.CompanyName}</h1>
                    <div className={'d-flex flex-column'}>
                        <span>From : {experience.From}</span>
                        <span>To : {experience.To}</span>
                        <h4 className={'mt-5'}>{experience.AboutCompany}</h4>
                    </div>
                    <div className={'experience-container'}>
                        {experience.ProjectsList.map(project => (
                            <div className={'experience-item'}>
                                <h3>{project.ProjectName}</h3>
                                <ul>
                                    {project.Tasks.map(task => (<li>{task}</li>))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                ))}
        </div>
    )
}

export default Experience;