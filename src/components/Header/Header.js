import './Header.scss'
import logo from 'assets/placeholder-logo.png'

const Header = () => {
    const categories = [
        "About Me",
        "Work Experience",
        "Achievements",
        "Technologies Used",
        "Certificates",
        "Education",
        "Languages Spoken"
    ]

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
            <div className={'d-block border border-1 download-button'}>
                <span className="download-text text-decoration-none">DOWNLOAD</span>
            </div>
        </div>
    )
}

export default Header;