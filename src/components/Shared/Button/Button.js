import './Button.scss'

const Button = (props) => {

    return (
        <div className={'d-flex justify-content-center flex-column custom-button'}>
            <span className="text text-decoration-none">
                {props.buttonText}
            </span>
        </div>
    )
}

export default Button;