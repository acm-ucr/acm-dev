import React from "react";
import {
	FaDiscord,
	FaInstagram,
	FaSlack,
	FaMedium,
	FaYoutube,
	FaFacebook,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import ProjectTile from "./ProjectTile.js";
import Link from "./Link.js";
import styles from "./Home.module.css";

const workshops = [
	{
		title: "All about JavaScript",
		lead: "Divyank",
		description:
			"I love javascript so much. I would love to help others realize how astounding of a language it is",
		date: "2020-01-01",
		time: "12:00",
		location: "ACM Room",
	},
	{
		title: "Why Rust > All",
		lead: "Adil",
		description: "????",
		date: "2020-01-01",
		time: "12:00",
		location: "ACM Room",
	},
];

const data = [
	[
		"Discord",
		<FaDiscord key={1} className={styles.homeHomeIconImg} />,
		"https://docs.google.com/forms/d/e/1FAIpQLSfImoSRQ7d5lQASl5OPxxEK_2iiZT0UKxVsMsn3BMVCkqC-WQ/viewform",
	],
	[
		"Instagram",
		<FaInstagram key={2} className={styles.homeHomeIconImg} />,
		"https://www.instagram.com/acm_ucr/",
	],
	[
		"Slack",
		<FaSlack key={3} className={styles.homeHomeIconImg} />,
		"https://csatucr.slack.com/join/shared_invite/zt-pcaakxnq-pT7js04C52GpGHRoggHNIw#/shared-invite/email",
	],
	[
		"Medium",
		<FaMedium key={4} className={styles.homeHomeIconImg} />,
		"https://medium.com/acm-at-ucr",
	],
	[
		"Mail",
		<SiGmail key={5} className={styles.homeHomeIconImg} />,
		"mailto:contact@acmucr.org",
	],
	[
		"Youtube",
		<FaYoutube key={6} className={styles.homeHomeIconImg} />,
		"https://www.youtube.com/channel/UCSLoGcSzNfpHIzdT6QzsmnQ",
	],
	[
		"Facebook",
		<FaFacebook key={7} className={styles.homeHomeIconImg} />,
		"/social-error",
	],
];

const projects = [
	{
		name: "Westin Montana",
		img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAVFBMVEUycBT///+PqIciYwDe5dwxbRDr8OiNsHwgaQA2cxk8dx9BeyV1nmDq7umMpYP8/fvm7eSHrHSYuIlvnFkIYQBTiTh7o2dEfCoeaAAAWQAQXQC8ybeZEcYQAAABW0lEQVR4nO3Px00DUBQAQYNNBpNz/33SAIcvJOR91mwFO5uTY29z6IF/j3B+hPMjnB/h/AjnRzg/wvkRzu8X4f352HZ3S8KHx6eLmT2/7JeEu9e3t9uRvW9P14SX7zfXE7s6WxbeXG1GRkjYj5CwHyFhP0LCfoSE/QgJ+xES9iMk7EdI2I+QsB8hYT9Cwn6EhP0ICfsREvYjJOxHSNiPkLAfIWE/QsJ+hIT9CAn7ERL2IyTsR0jYj5CwHyFhP0LCfoSE/QgJ+xES9iMk7EdI2I+QsB8hYT9Cwn6EhP0ICfsREvYjJOxHSNiPkLAfIWE/QsJ+hIT9CAn7ERL2IyTsR0jYj5CwHyFhP0LCfoSE/QgJ+xES9iMk7EdI2I+QsB8hYT9Cwn7Lwo/rQ6/+sWXhy9nUVoWf26l97ZeEd/vTqe2/l4RHFuH8COdHOD/C+RHOj3B+hPMjnN/xC38AOHN6HP38BCYAAAAASUVORK5CYII=",
		projectLink: "https://store.steampowered.com/app/1943220/Sketch/",
	},
	{
		name: "Prathmesh Jain",
		img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAVFBMVEUycBT///+PqIciYwDe5dwxbRDr8OiNsHwgaQA2cxk8dx9BeyV1nmDq7umMpYP8/fvm7eSHrHSYuIlvnFkIYQBTiTh7o2dEfCoeaAAAWQAQXQC8ybeZEcYQAAABW0lEQVR4nO3Px00DUBQAQYNNBpNz/33SAIcvJOR91mwFO5uTY29z6IF/j3B+hPMjnB/h/AjnRzg/wvkRzu8X4f352HZ3S8KHx6eLmT2/7JeEu9e3t9uRvW9P14SX7zfXE7s6WxbeXG1GRkjYj5CwHyFhP0LCfoSE/QgJ+xES9iMk7EdI2I+QsB8hYT9Cwn6EhP0ICfsREvYjJOxHSNiPkLAfIWE/QsJ+hIT9CAn7ERL2IyTsR0jYj5CwHyFhP0LCfoSE/QgJ+xES9iMk7EdI2I+QsB8hYT9Cwn6EhP0ICfsREvYjJOxHSNiPkLAfIWE/QsJ+hIT9CAn7ERL2IyTsR0jYj5CwHyFhP0LCfoSE/QgJ+xES9iMk7EdI2I+QsB8hYT9Cwn7Lwo/rQ6/+sWXhy9nUVoWf26l97ZeEd/vTqe2/l4RHFuH8COdHOD/C+RHOj3B+hPMjnN/xC38AOHN6HP38BCYAAAAASUVORK5CYII=",
		projectLink: "http://ucr-campus-map.herokuapp.com/",
	},
	{
		name: "Sample",
		img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAVFBMVEUycBT///+PqIciYwDe5dwxbRDr8OiNsHwgaQA2cxk8dx9BeyV1nmDq7umMpYP8/fvm7eSHrHSYuIlvnFkIYQBTiTh7o2dEfCoeaAAAWQAQXQC8ybeZEcYQAAABW0lEQVR4nO3Px00DUBQAQYNNBpNz/33SAIcvJOR91mwFO5uTY29z6IF/j3B+hPMjnB/h/AjnRzg/wvkRzu8X4f352HZ3S8KHx6eLmT2/7JeEu9e3t9uRvW9P14SX7zfXE7s6WxbeXG1GRkjYj5CwHyFhP0LCfoSE/QgJ+xES9iMk7EdI2I+QsB8hYT9Cwn6EhP0ICfsREvYjJOxHSNiPkLAfIWE/QsJ+hIT9CAn7ERL2IyTsR0jYj5CwHyFhP0LCfoSE/QgJ+xES9iMk7EdI2I+QsB8hYT9Cwn6EhP0ICfsREvYjJOxHSNiPkLAfIWE/QsJ+hIT9CAn7ERL2IyTsR0jYj5CwHyFhP0LCfoSE/QgJ+xES9iMk7EdI2I+QsB8hYT9Cwn7Lwo/rQ6/+sWXhy9nUVoWf26l97ZeEd/vTqe2/l4RHFuH8COdHOD/C+RHOj3B+hPMjnN/xC38AOHN6HP38BCYAAAAASUVORK5CYII=",
		projectLink: "",
	},
	{
		name: "Sample 2",
		img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAVFBMVEUycBT///+PqIciYwDe5dwxbRDr8OiNsHwgaQA2cxk8dx9BeyV1nmDq7umMpYP8/fvm7eSHrHSYuIlvnFkIYQBTiTh7o2dEfCoeaAAAWQAQXQC8ybeZEcYQAAABW0lEQVR4nO3Px00DUBQAQYNNBpNz/33SAIcvJOR91mwFO5uTY29z6IF/j3B+hPMjnB/h/AjnRzg/wvkRzu8X4f352HZ3S8KHx6eLmT2/7JeEu9e3t9uRvW9P14SX7zfXE7s6WxbeXG1GRkjYj5CwHyFhP0LCfoSE/QgJ+xES9iMk7EdI2I+QsB8hYT9Cwn6EhP0ICfsREvYjJOxHSNiPkLAfIWE/QsJ+hIT9CAn7ERL2IyTsR0jYj5CwHyFhP0LCfoSE/QgJ+xES9iMk7EdI2I+QsB8hYT9Cwn6EhP0ICfsREvYjJOxHSNiPkLAfIWE/QsJ+hIT9CAn7ERL2IyTsR0jYj5CwHyFhP0LCfoSE/QgJ+xES9iMk7EdI2I+QsB8hYT9Cwn7Lwo/rQ6/+sWXhy9nUVoWf26l97ZeEd/vTqe2/l4RHFuH8COdHOD/C+RHOj3B+hPMjnN/xC38AOHN6HP38BCYAAAAASUVORK5CYII=",
		projectLink: "",
	},
	// ],
];

const Home = () => {
	return (
		<main>
			<title>ACM@UCR</title>
			<div className={styles.homeHomeContainer}>
				<img
					src='blocks.svg'
					className={styles.homeHomeAcmimg}
					alt=''
				></img>
				<Container style={{ margin: "2em" }}>
					<Row className='row'>
						<Col lg={4} sm={12} className='col'>
							<h1 className={styles.homeHomeHeading}>Learn</h1>
							<Carousel>
								{workshops.map((workshop, ind) => (
									<Carousel.Item key={ind}>
										<div
											className={
												styles.homeHomeWorkshopContainer
											}
										>
											<h2>{workshop.title}</h2>
											<h3>{workshop.lead}</h3>
											<p>{workshop.description}</p>
											<p>
												{workshop.date} {workshop.time}{" "}
												{workshop.location}
											</p>
										</div>
									</Carousel.Item>
								))}
							</Carousel>
						</Col>

						<Col lg={4} sm={12}>
							<h1 className={styles.homeHomeHeading}>Inspire</h1>
							<p>
								The Association for Computing Machinery at the
								University of California, Irvine is a non-profit
								organization that is dedicated to the
								advancement of computing and the development of
								computing-related technologies.
							</p>
							<p>
								<a href='https://www.acm.org/'>ACM@UCR</a> is a
								non-profit organization that is dedicated to the
								advancement of computing and the development of
								computing-related technologies.
							</p>
							<Row className={styles.homeHomeProjects}>
								{projects.map((project, index) => (
									<Col
										key={index}
										className='home-home-projects-col'
										sm={6}
									>
										<ProjectTile
											name={project.name}
											image={project.img}
											link={project.projectLink}
										/>
									</Col>
								))}
							</Row>
						</Col>

						<Col lg={4} sm={12}>
							<h1 className='home-home-heading'>Connect</h1>
							{/* <Links /> */}
							<Container
								fluid
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Row
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										width: "100%",
									}}
								>
									{data.map((profile, index) => (
										<Col
											key={index}
											lg={2}
											sm={1}
											md={2}
											xs={1}
											style={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												width: "15%",
											}}
										>
											<Link
												name={profile[0]}
												img={profile[1]}
												link={profile[2]}
											/>
										</Col>
									))}
								</Row>
							</Container>
						</Col>
					</Row>
				</Container>
			</div>
		</main>
	);
};

export default Home;
