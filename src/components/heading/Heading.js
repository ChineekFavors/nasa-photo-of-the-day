import React, { useState, useEffect } from "react";
import axios from "axios";
import HeadingCard from "./HeadingCard";

function Heading() {
	const [title, setTitle] = useState();

	useEffect( () => {
		axios.get('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo')
		.then( res => {
			setTitle(res.data.title);
			
		})
		
	}, [title]);

	return (
	    <div className="Heading">
	      <HeadingCard title={title}/>
	    </div>
	);    


}


export default Heading;