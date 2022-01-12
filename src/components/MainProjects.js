import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import projects from "../assets/projects";
const MainProjects = () => {
	return (
		<div className="project-list">
			{projects
				.filter((el) => el.main)
				.map((el, i) => {
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
