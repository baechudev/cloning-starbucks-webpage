import { Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Content.css";

function Content(props) {
  return (
    <div className="content-main" style={{ flexDirection: props.direction }}>
      <div className="textbox">
        <h1>{props.title}</h1>
        <p>{props.line}</p>
        <Button>{props.button}</Button>
      </div>
      <div className="imgbox">
        <img src={props.img} alt="image1" />
      </div>
    </div>
  );
}

Content.defaultProps = {
  direction: "row",
};

export default Content;
