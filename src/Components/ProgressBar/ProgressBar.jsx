import "./ProgressBar.scss"
import {GiAirplaneDeparture} from "react-icons/gi"
import {GiKnifeFork} from "react-icons/gi"
import {FaChessBishop, FaClipboardList} from "react-icons/fa"

const ProgressBar = ({stage = 1}) => {
  return (
    <div id="progressBar">
      <div className={`progressStage ${stage===1 ? "active":""}`}>
        <GiAirplaneDeparture />
      </div>
      <div className={`progressStage ${stage===2 ? "active":""}`}>
        <GiKnifeFork />
      </div>
      <div className={`progressStage ${stage===3 ? "active":""}`}>
        <FaClipboardList />
      </div>
    </div>
  );
}

export default ProgressBar;