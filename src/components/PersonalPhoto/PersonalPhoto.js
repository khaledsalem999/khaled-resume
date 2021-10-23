import './PersonalPhoto.scss';
import personalPhoto from 'assets/personal_photo.jpg'

const PersonalPhoto = () => {
    return (
        <div className={'background-bg'}>
            <div className={'background-filter'}>
                <div className={'background-img'} style={{backgroundImage: `url(${personalPhoto})`}}>
                </div>
            </div>
        </div>
    )
}

export default PersonalPhoto;