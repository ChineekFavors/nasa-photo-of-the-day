import React, { useState, useEffect } from "react";
import axios from "axios";
import ParagraphCard from "./ParagraphCard";
import './paragraph.css';

function Paragraph() {
	const [para, setPara] = useState();

	useEffect( () => {
		axios.get('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo')
		.then( res => {
			setPara(res.data.explanation);
			
		})
		
	}, [para]);

	return (
	    <div className="paragraph">
	    
	    	<ParagraphCard description={para} />
	      
	    </div>
	);    


}


export default Paragraph;