import './Header.scss'

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
        <div className={'d-flex justify-content-center header-container'}>
                {categories.map(headerItem => (
                    <span key={headerItem} className={'nav-item py-3 px-4'}>{headerItem}</span>
                ))}
        </div>
    )
}

export default Header;