import './Button.scss';

const Button = ({label, primary })=>{
    const cName = primary? "primary-button" : "";

    return (
        <button className={cName}>{label}</button>
    )
}

export default Button;