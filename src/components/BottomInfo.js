import { Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./BottomInfo.css";

function BottomInfo() {
  return (
    <div className="bottom-info">
      <div className="icons-info">
        <ul className="icons-info-navi">
          <li>facebook</li>
          <li>instagram</li>
          <li>twitter</li>
        </ul>
      </div>
      <div className="policy-info">
        <ul className="policy-info-navi">
          <li>Privacy Statement</li>
          <li>
            <span>|</span>Terms of Use
          </li>
          <li>
            <span>|</span>Submit Your Idea
          </li>
          <li>
            <span>|</span>Partners
          </li>
        </ul>
      </div>
      <div className="copy-right">
        <p>Passer au site français</p>
        <p>© 2021 Starbucks Coffee Company. All rights reserved.</p>
      </div>
    </div>
  );
}

export default BottomInfo;
