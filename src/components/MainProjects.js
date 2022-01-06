import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import homieScreen from "../assets/img/homie-screen.png";
import vintedScreen from "../assets/img/vinted-screen.png";
const MainProjects = () => {
	const projects = [
		{
			title: "Homie",
			description:
				"A React Native Mobile Application MVP for the Homie startup made @ Le Réacteur, Frontend Developer in a team of 5 students. The application allows homecooked dishes to be delivered right to your doorstep.",
			links: {},
			tech: ["React Native", "NodeJS", "Stripe", "GoogleMap API", "GitHub"],
			thumbnail: homieScreen,
		},
		{
			title: "Vinted Clone",
			description:
				"A Full Stack Clone of the Vinted Website made @ Le Réacteur. The websites main features include: sign up & login, browse & search products, publish and edit offers, order & pay for a product.",
			tech: ["React", "NodeJS", "Stripe", "HTML&CSS", "Netlify", "Heroku"],
			links: {
				github: "https://github.com/cchau8/vinted-frontend",
				link: "https://vinted-cchau.netlify.app/",
			},

			thumbnail: vintedScreen,
		},
	];
	return (
		<div className="project-list">
			{projects.map((el, i) => {
				return (
					<div className={`project-elem${i % 2 === 0 ? "" : " reverse"}`} key={i}>
						{el.links.link ? (
							<a href={el.links.link} target="_blank" rel="noreferrer">
								<img src={el.thumbnail} className="project-thumbnail" />
							</a>
						) : (
							<img src={el.thumbnail} className="project-thumbnail" />
						)}

						<div className="project-desc">
							<span className="featured">Featured Project</span>
							<h3>{el.title}</h3>
							<p>{el.description}</p>
							<ul>
								{el.tech.map((tech, index) => (
									<li key={index}>{tech}</li>
								))}
							</ul>
							<div className="project-links">
								{el.links.github && (
									<a href={el.links.github} target="_blank" rel="noreferrer">
										<FontAwesomeIcon icon={["fab", "github"]} />
									</a>
								)}
								{el.links.link && (
									<a href={el.links.link} target="_blank" rel="noreferrer">
										<FontAwesomeIcon icon="external-link-alt" />
									</a>
								)}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);

	// 	<div className="project-elem">
	// 		<img src={homieScreen} className="project-thumbnail" />
	// 		<div className="project-desc">
	// 			<span className="featured">Featured Project</span>
	// 			<h3>Homie</h3>
	// 			<p>
	// 				<em>A React Native Mobile Application MVP for the Homie startup</em> made @ Le
	// 				Réacteur, Frontend Developer in a team of 5 students. Homecooked dishes
	// 				delivered right to your doorstep, the app features 3 different interfaces for
	// 				homie (the cook), the customer and the delivery partner.
	// 			</p>
	// 			<ul>
	// 				<li>React Native</li>
	// 				<li>NodeJS</li>
	// 				<li>Stripe</li>
	// 				<li>Google Map API</li>
	// 				<li>GitHub</li>
	// 			</ul>
	// 			<span>Unfortunately, the code or the app cannot be publicly shown yet</span>
	// 		</div>
	// 	</div>
	// );
};

export default MainProjects;
