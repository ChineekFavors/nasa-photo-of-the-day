import React from "react";
import "./App.css";

import Heading from "./components/heading/Heading";

function App() {
	

  return (
    <div className="App">
      <h1>
        <span role="img">🚀</span> Welcome to Nasa photo of the day! <span role="img">🚀</span>
      </h1>
      <Heading />
    </div>
  );
}

export default App;
