import { useRef } from "react";
import { Link } from "react-router-dom";
import ScrollArrow from "../components/ScrollArrow";
import avatar from "../assets/img/profile-pic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/homepage.css";
import MainProjects from "../components/MainProjects";
const Homepage = () => {
	const aboutRef = useRef(null);
	const projectRef = useRef(null);
	const contactRef = useRef(null);

	return (
		<main className="homepage">
			<section className="hero" id="hero">
				<div className="hero-left">
					<span>Hello, my name is </span>
					<h1>Cédric Chau</h1>
					<p>
						I'm a Full Stack JavaScript Developer in training located in Paris. I'll be
						a student at ETNA starting in March 2022 and I'm currently in the market for
						an Apprenticeship.
					</p>
				</div>
				<div className="img-bubble">
					<img src={avatar} className="avatar" />
				</div>
				<ScrollArrow section={aboutRef} />
			</section>
			<section className="about" id="about" ref={aboutRef}>
				<div>
					<h2>About me </h2>
					<div className="about-content">
						<div className="about-text">
							<p>
								Hello! My name is Cedric, and I enjoy{" "}
								<em>creating things and solving problems</em>. My interest for the
								web started in early 2021 when I decided to teach myself the
								foundations of web development.
							</p>
							<p>
								Using Codecademy and every resource I could find, I managed to get a
								foot in. But it's only after dropping my Masters Degree and getting
								into the bootcamp{" "}
								<em>
									<a
										href="https://www.lereacteur.io/"
										target="_blank"
										rel="noreferrer"
									>
										Le Reacteur
									</a>
								</em>{" "}
								that my learning really escalated. In 10 weeks, I learned so much
								starting back from pure JavaScript to creating servers in Node, make
								full on websites from scratch using React and even{" "}
								<em>coding a full mobile app for a small startup</em> with React
								Native.
							</p>
							<p>
								Now my goal is to find a Apprenticeship and graduate from{" "}
								<em>ETNA</em> where I'm starting my Bachelor in March 2022.
							</p>
						</div>
						<div className="about-right">
							<span>
								Here are a few technologies I've been learning and playing with
								recently :
							</span>
							<ul>
								<li>JavaScript</li>
								<li>NodeJS</li>
								<li>React</li>
								<li>React Native</li>
								<li>HTML & CSS</li>
							</ul>
						</div>
					</div>
				</div>
				<ScrollArrow section={projectRef} />
			</section>
			<section className="project-preview" id="project-preview" ref={projectRef}>
				<h2>Some Things I've Built</h2>
				<MainProjects />
				<Link to="/projects" className="see-more-btn">
					See More
				</Link>

				<ScrollArrow section={contactRef} />
			</section>
			<section className="contacts" id="contacts" ref={contactRef}>
				<h2>Get In Touch</h2>
				<p>
					I'm currently looking for an apprenticeship opportunity as a Software Engineer.
					My inbox is open and you can have access to my resume here : resume.
				</p>
				<div className="mail-btn">
					<a href="mailto:cedricchau87@gmail.com">Say hello !</a>
				</div>
			</section>
		</main>
	);
};

export default Homepage;
