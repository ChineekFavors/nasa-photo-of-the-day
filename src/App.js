import React from "react";
import "./App.css";

import Heading from "./components/heading/Heading";
import Image from "./components/image/Image";
import Paragraph from "./components/paragraph/Paragraph";


function App() {
	

  return (
    <div className="App">
      <h1>
        <span role="img">🚀</span> Welcome to NASA photo of the day! <span role="img">🚀</span>
      </h1>
      <Heading />
      <Image />
      <Paragraph />
    </div>
  );
}

export default App;
