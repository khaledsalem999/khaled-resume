import './AboutMe.scss'
const aboutMeData = require('../../data/GeneralInfo.json')

const AboutMe = () => {

    return(
        <div className={'section started'}>
            <div className={'centrize full-width'}>
                <div className={'vertical-center'}>
                    <h1 className={'h-title'}>{aboutMeData.Name}</h1>
                    <div className={'started-content py-0'}>
                        <div className={'mb-4 entity-text'}>
                            <span>{aboutMeData.JobDescription}</span>
                        </div>
                        <div className={'h-text mb-5'}>
                            <span>{aboutMeData.Summary}</span>
                        </div>
                        <div className={'d-flex justify-content-between table-sizing'}>
                            <table>
                                <tr>
                                    <th className={'entity-text'}>Age:</th>
                                    <td>{aboutMeData.Age}</td>
                                </tr>
                                <tr>
                                    <th className={'entity-text'}>RESIDENCE:</th>
                                    <td>{aboutMeData.Address}</td>
                                </tr>
                                <tr>
                                    <th className={'entity-text'}>Phone:</th>
                                    <td>{aboutMeData.Mobile}</td>
                                </tr>
                                <tr>
                                    <th className={'entity-text'}>Email:</th>
                                    <td>{aboutMeData.Email}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;