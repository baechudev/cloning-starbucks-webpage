import "./App.css";

import Navigation from "./components/Navigation";
import Content from "./components/Content";
import BottomNavigation from "./components/BottomNavigation";
import BottomInfo from "./components/BottomInfo";
import TopNavigation from "./components/TopNavigation";

import objectData from "./data/objectData.json";

function App() {
  return (
    <div className="App">
      <div className="navi-main">
        <TopNavigation />
      </div>
      <hr className="border-contents-top-navi" />
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
        </div>
      </div>
      <hr className="border-contents" />
      <div className="bottom-navi">
        <BottomNavigation />
        <hr className="border-contents" />
      </div>
      <div className="last-info">
        <BottomInfo />
      </div>
    </div>
  );
}

export default App;
