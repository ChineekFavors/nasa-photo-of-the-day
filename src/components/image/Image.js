import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "./ImageCard";


function Image() {
	const [image, setImage] = useState();

	useEffect( () => {
		axios.get('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo')
		.then( res => {
			setImage(res.data.url);
			
		})
		
	}, [image]);

	return (
	    <div className="image">
	    	<ImageCard src={image}/>
	      
	    </div>
	);    


}


export default Image;