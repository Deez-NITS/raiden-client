import './Button.scss';

const Button = ({label, primary, onclickFunction })=>{
    const cName = primary? "primary-button" : "";

    return (
        <button onClick={onclickFunction ?? null} className={cName}>{label}</button>
    )
}

export default Button;