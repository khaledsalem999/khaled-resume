import './AboutMe.scss'
const aboutMeData = require('../../data/GeneralInfo.json')

const AboutMe = () => {

    const contactInfo = [
        {
            href: `mailto:${aboutMeData.Email}`,
            text: 'Email'
        },
        {
            href: aboutMeData.Github,
            text: 'Github'
        },
        {
            href: aboutMeData.LinkedIn,
            text: 'LinkedIn'
        },
        {
            href: `tel:${aboutMeData.Mobile}`,
            text: 'Mobile'
        }
    ]

    return(
        <div>
            <div className={'about-me-container'}>
                <div className={'summary-container mx-auto my-5'}>
                    <h1 className={'fw-bold name-container'}>{aboutMeData.Name}</h1>
                    <h3>{aboutMeData.Summary}</h3>
                </div>
                <div className={'d-flex justify-content-center'}>
                    {contactInfo.map(contactItem => (
                        <a key={contactItem.text} className={'py-3 px-4 contact-items'} href={contactItem.href}>{contactItem.text}</a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutMe;