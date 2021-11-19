import './Button.scss'

const Button = ({buttonText, isImageButton = false, imageObject, registerClick}) => {

    const textButton = () => {
        return (
            <button className={'d-flex justify-content-center flex-column custom-button'} onClick={registerClick}>
                <span className="text text-decoration-none">
                    {buttonText}
                </span>
            </button>
        )
    }

    const imageButton = () => {
        return (
            <button className={'d-flex justify-content-center flex-column custom-button'} onClick={registerClick}>
                <img src={imageObject} alt={"button image"}/>
            </button>
        )
    }

    if(isImageButton){
        return imageButton()
    }else{
        return textButton()
    }
}

export default Button;