import React, { useState } from "react";




//create your first component

import "../../styles/index.css"
const Home = () => {

	const [selectedColor, setSelectedColor] = useState("");

	return (

		

		<div className="container d-flex justify-content-center">

			<div className="d-flex flex-column align-items-center justify-content-between py-4 TrafficLight">

				<div 
				onClick={() => setSelectedColor("red")}
				className= {
					"light red " + (selectedColor === "red" ? "glow" : "")
					}></div>
				
				<div 
				onClick={() => setSelectedColor("yellow")}	
				className={
					"light yellow " + (selectedColor === "yellow" ? "glow" : "")
					}></div>

				<div 
				onClick={() => setSelectedColor("green")}	
				className= {"light green " + (selectedColor === "green" ? "glow" : "")
				}></div>
			</div>
		</div>
	);

}
export default Home