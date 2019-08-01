import React, { useState, useEffect } from "react";
import "./App.css";

import axios from "axios";

function App() {
	const [state, setState] = useState('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo');

	useEffect( () => { 
		axios.get()
	});
  return (
    <div className="App">
      // <p>
      //   Read through the instructions in the README.md file to build your NASA
      //   app! Have fun 🚀!
      // </p>
    </div>
  );
}

export default App;
