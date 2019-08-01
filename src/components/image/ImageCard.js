import React from "react";



function ImageCard(props) {
console.log(props)
	return (
	    <div>
	      <img src={props.src} />
	    </div>
	);    

}

export default ImageCard;