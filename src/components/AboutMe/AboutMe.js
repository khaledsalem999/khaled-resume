import './AboutMe.scss'
const aboutMeData = require('../../data/GeneralInfo.json')

const AboutMe = () => {

    return(
        <div className={'section started'}>
            <div className={'centrize full-width'}>
                <div className={'vertical-center'}>
                    <h1 className={'h-title'}>{aboutMeData.Name}</h1>
                    <div className={'started-content'}>
                        <div className={'h-subtitles'}>
                            <span>{aboutMeData.JobDescription}</span>
                        </div>
                        <div>
                            <span>{aboutMeData.Summary}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;