import "./Counter.scss"

import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"
import Button from "../Button/Button";

const Counter = ({state, label}) => {

  const [count, setCount] = state;

  const handleInc = () => {
    setCount((prevCount) => prevCount + 1);
  }

  const handleDec = () => {
    setCount((prevCount) => {
      if(prevCount<=1) return 1;
      return prevCount - 1;
    });
  }

  return (  
    <div id="counter">
      <div>{`${label} ${count}`}</div>
      <div id="actionBtnContainer">
        <Button onClick={handleInc} primary={true} label={<AiOutlinePlus/>} />
        <Button onClick={handleDec} label={<AiOutlineMinus/>} />
      </div>
    </div>
  );
}

export default Counter;
