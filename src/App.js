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
      <div className="contents-main">
        {objectData.map((data) => (
          <Content
            title={data.title}
            line={data.line}
            button={data.button}
            img={data.img}
            direction={data.direction}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
