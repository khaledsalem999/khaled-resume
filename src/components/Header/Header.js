import './Header.scss'
import logo from 'assets/images/placeholder-logo.png'
import Button from 'components/Shared/Button/Button'

const Header = () => {
    const categories = [
        "About Me",
        "Work Experience",
        "Achievements",
        "Technologies Used",
        "Certificates",
        "Education",
        "Languages Spoken"
    ];

    const downloadButtonText = "DOWNLOAD CV";

    return (
        <div className={'d-flex header-container'}>
            <div className={'my-auto logo-container'}>
                <img src={logo} height='36'/>
            </div>
            <div className={'m-auto'}>
                {categories.map(headerItem => (
                    <span key={headerItem} className={'nav-item px-4'}>{headerItem}</span>
                ))}
            </div>
            <Button buttonText={downloadButtonText}/>
        </div>
    )
}

export default Header;