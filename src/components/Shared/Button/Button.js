import './Button.scss'

const Button = (props) => {

    return (
        <div className={'d-flex justify-content-center flex-column custom-button'}>
            <span className="text text-decoration-none">
                {props.buttonText}
                <object type="image/svg+xml" data={props.buttonImage}
                        className="icon icon-bike">
                    Bike
                </object>
            </span>
        </div>
    )
}

export default Button;