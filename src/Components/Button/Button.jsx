import "./Button.scss";

const Button = ({ label, primary, onClick }) => {
  const cName = primary ? "primary-button" : "";

  return (
    <button className={cName} onClick={onClick ?? null}>
      {label}
    </button>
  );
};

export default Button;
