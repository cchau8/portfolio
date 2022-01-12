import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import MainProjects from "../components/MainProjects";
import "../style/projects.css";
import projects from "../assets/projects";

const Projects = () => {
	return (
		<main className="project-page">
			<div>
				<h2>My main projects</h2>
				<MainProjects />
			</div>
			<div>
				<h2>Some more projects</h2>
				<div className="project-container">
					{projects
						.filter((el) => !el.main)
						.map((el, i) => {
							return (
								<div key={i} className="project-tile">
									<div className="tile-header">
										<FontAwesomeIcon icon="code" />
										<div className="project-links">
											{el.links.github && (
												<a
													href={el.links.github}
													target="_blank"
													rel="noreferrer"
												>
													<FontAwesomeIcon icon={["fab", "github"]} />
												</a>
											)}
											{el.links.link && (
												<a
													href={el.links.link}
													target="_blank"
													rel="noreferrer"
												>
													<FontAwesomeIcon icon="external-link-alt" />
												</a>
											)}
										</div>
									</div>
									<div className="tile-main">
										<h3>{el.title}</h3>
										<p>{el.description}</p>
									</div>
									<ul>
										{el.tech.map((tech, index) => (
											<li key={index}>{tech}</li>
										))}
									</ul>
								</div>
							);
						})}
				</div>
			</div>
		</main>
	);
};

export default Projects;
