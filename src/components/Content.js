import "bootstrap/dist/css/bootstrap.min.css";
import "./Content.css";

function Content(props) {
  return (
    <div>
      <div
        className="content-main"
        style={{
          flexDirection: props.direction,
          backgroundColor: props.bgcolor,
        }}
      >
        <div className="textbox">
          <h1>{props.title}</h1>
          <p>{props.line}</p>
          <button
            id="contentClick"
            style={{
              backgroundColor: props.bgcolor,
            }}
          >
            {props.button}
          </button>
        </div>
        <div className="imgbox">
          <img src={props.img} alt="image1" />
        </div>
      </div>
      <br />
    </div>
  );
}

export default Content;
