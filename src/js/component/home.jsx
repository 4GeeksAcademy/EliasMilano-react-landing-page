import React from "react";

import Navbar from "./navbar.jsx"
import Hero from "./hero.jsx"
import Card from "./card.jsx"
import Footer from "./footer.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<Hero/>
			<div className="col-11 mx-lg-auto mx-sm-3 p-0 container-fluid d-flex justify-content-between flex-wrap">
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</div>
			<Footer/>
		</div>


	);
};

export default Home;
