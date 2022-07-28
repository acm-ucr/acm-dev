import React from "react";
import Profile from "./Profile";

const arr = [
	{
		name: "Vinz Angelo Madrigal",
		pronoun: "He/Him",
		position: "President",
		image: "./vinz.jpeg",
		email: "vmadr010@ucr.edu",
		linkedin: "https://www.linkedin.com/in/vinzmadrigal/",
		github: "https://github.com/mvinzangelo",
		bio: `Heyo I'm Vinz. I was born in the Philippines but swam to SoCal when I
     was a little boy. I like reading books that are way out of my comprehension
     level and singing songs that are way out of my range. Join ACM to help shape
     the future of CS at UCR, thank you :)`,
	},
	{
		name: "Justin Mazon",
		pronoun: "He/Him",
		position: "Vice President",
		image: "./justin.jpg",
		email: "jmazo002@ucr.edu",
		linkedin: "https://www.linkedin.com/in/justin-mazon-b312661a9/",
		github: "https://github.com/JustintheBox",
		bio: `Hello! My name is Justin Mazon and I am studying Computer Engineering.
    Some of my interests are computer building, keyboard building, playing guitar, and chess.`,
	},
	{
		name: "David Ryan",
		pronoun: "He/Him",
		position: "Event Chair",
		image: "",
		email: "dryan011@ucr.edu",
		linkedin: "https://www.linkedin.com/in/david-michael-ryan/",
		github: "https://github.com/davidry777",
		bio: `I'm from San Diego, CA and I am also a Data Science major at BCOE. I
    do swim workouts on alternative days and I enjoy talking about football,
    tech, and college advice.`,
	},
	{
		name: "Johnnie Dinh",
		pronoun: "He/Him",
		position: "Secretary",
		image: "./johnnie.png",
		email: "kdinh032@ucr.edu",
		linkedin: "https://www.linkedin.com/in/johnniedinh/",
		github: "https://github.com/johnniedinhCS",
		bio: `Friendliest secretary around (and maybe the coolest); Resident keyboard
		warrior of ACM. Always happy to help, so feel free to shoot me a message,
		even at 3 AM.`,
	},
	{
		name: "Cindy Lee",
		pronoun: "She/Her",
		position: "Treasurer",
		image: "",
		email: "Clee541@ucr.edu",
		linkedin: "https://www.linkedin.com/in/cindy-lee-7a0306183",
		bio: "Make a short bio for me :)",
	},
	{
		name: "Alex Hsieh",
		pronoun: "He/Him",
		position: "Membership Chair",
		image: "./alex.jpg",
		email: "ahsie014@ucr.edu",
		linkedin: "https://www.linkedin.com/in/alex-c-hsieh",
		github: "https://github.com/alexchsieh",
		bio: `Hey, I’m Alex Hsieh, an incoming 3rd year and your Membership Co-Chair
    for the coming 2022-2023 academic year. I hope to build a mentor-mentee program
    that will help students connect with upperclassman and receive the necessary guidance
    and support to thrive in CS@UCR. Thank you for your support and please reach out if
    you need anything!`,
	},
	{
		name: "Joshua Candelaria",
		pronoun: "He/Him",
		position: "Membership Chair",
		image: "./joshua.png",
		email: "jcand014@ucr.edu",
		linkedin: "https://www.linkedin.com/in/jecndlria/",
		github: "https://github.com/jecndlria",
		bio: `I'm Josh, one of your Membership Co-Chairs this year! A few of my
    favorite things are basketball, music, and video games. I hope to create
    better connections between you and your peers and give everyone a safe space
    here at ACM@UCR.`,
	},
	{
		name: "Ashley Kim",
		pronoun: "She/Her",
		position: "Co-Marketing Chair",
		image: "./ashley.jpg",
		email: "akim291@ucr.edu",
		linkedin: "www.linkedin.com/in/ashley-kim-838893196",
		bio: `Hi everyone! I'm Ashley and I'm a 3rd year CS major. My hobbies
    outside of class include digital illustration, making fashion pinterest boards,
    and baking cookies for my friends.`,
	},
	{
		name: "Ashwin Jagadish",
		pronoun: "He/Him",
		position: "Co-Marketing Chair",
		image: "./ashwin.jpg",
		email: "ajaga008@ucr.edu",
		linkedin: "www.linkedin.com/in/ashwin-jagadish",
		bio: `Hi, my name is Ashwin, and I'm a 3rd year Computer Science with Business
		 Applications major. I'm looking forward to being ACM's Marketing Chair this
		 year and creating more engagement within the club. `,
	},
	{
		name: "Samarth Srinivasa",
		pronoun: "He/Him",
		position: "Industry Outreach Chair",
		image: "./samarth.png",
		email: "ssrin027@ucr.edu",
		linkedin: "www.linkedin.com/in/samarth-srinivasa",
		github: "https://github.com/SamarthSrinivasa",
		bio: `I am a third year data science major at UCR! Contact me if you have
    any questions about talking to industry leaders and companies in the field
    of computer science, or any other questions you might have about ACM! Other
    than School and ACM, I enjoy playing music, chess, and cooking.`,
	},
	{
		name: "Sachin Chopra ",
		pronoun: "He/Him",
		position: "Alumni Outreach Chair",
		image: "./sachin.png",
		email: "schop021@ucr.edu",
		linkedin: "https://www.linkedin.com/in/sachinkchopra",
		github: "https://github.com/SafeDuck",
		bio: `Hey ACM folks, I'm Sachin! I study CS and love to discuss the theories
		of the subject. You can catch me doing some origami, playing guitar, or asking
		professors way too many questions. I hope you find your community and enjoy
		your time here.`,
	},
	{
		name: "Divyank Shah",
		pronoun: "He/him",
		position: "Professional Development Chair",
		image: "./divyank.jpg",
		email: "dshah048@ucr.edu",
		linkedin: "https://www.linkedin.com/in/divyank-shah/",
		github: "https://github.com/shahdivyank",
		bio: `Hey! I'm Divyank and I am a 1st year CS major! I am your professional
    development chair this year and am excited to create new opporuntites for
    everyone! Outside of school I love to talk tech, go on hikes, or take a bike ride!`,
	},
];

const Profiles = () => {
	return (
		<section className='py-6 dark:dark:bg-gray-800 dark:dark:text-gray-100'>
			<div className='container flex flex-col items-center justify-center p-4 mx-auto sm:p-10'>
				<h1 className='text-4xl font-bold leading-none text-center sm:text-5xl'>
					ACM Board 2022-2023
				</h1>

				<div className='profileGrid grid grid-cols-4 grid-rows-3'>
					{arr.map((arrP, index) => (
						<Profile key={index} person={arrP} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Profiles;
