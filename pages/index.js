import React from "react";
import Connect from "../components/Home/Connect";
import Landing from "../components/Home/Landing";
import Projects from "../components/Home/Projects";
import Stats from "../components/Home/Stats";
import Workshops from "../components/Home/Workshops";
import Board from "./board";
// import "bootstrap/dist/css/bootstrap.min.css";

const IndexPage = () => {
	return (
		<div className=''>
			<Landing />
			<Stats />
			<Workshops />
			<Projects />
			<Connect />
			<Board />
		</div>
	);
};

export default IndexPage;
