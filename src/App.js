import "./App.css";

import Navigation from "./components/Navigation";
import Content from "./components/Content";

import objectData from "./data/objectData.json";

function App() {
  return (
    <div className="App">
      <div className="navi-main">
        <Navigation />
      </div>
      <div className="main">
        {objectData.map((data) => (
          <Content
            title={data.title}
            line={data.line}
            button={data.button}
            img={data.img}
            direction={data.direction}
            bgcolor={data.bgcolor}
          />
        ))}
        <div className="additionalExp">
          <p>
            *At participating stores. Some restrictions apply. See&nbsp;
            <a href="starbucks.ca/rewards">starbucks.ca/rewards</a>.
          </p>
          <p>
            **Menu limited. Restricted delivery area. Available in participating
            locations only. Fees subject to change. Prices for Starbucks® items
            purchased through Uber Eats may be higher than posted in stores or
            as marked. See the Uber Eats app for details.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
