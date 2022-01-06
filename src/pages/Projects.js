import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import MainProjects from "../components/MainProjects";
import "../style/projects.css";

const Projects = () => {
	const projects = [
		{
			title: "Marvel Clone",
			links: {
				github: "https://github.com/cchau8/marvel-front",
				link: "https://marvel-cchau.netlify.app/",
			},
			description:
				"Full Stack Marvel Website Clone to search, browse and set comics or characters in favorites using Le Reacteur API.",
			tech: ["React", "Express", "HTML&CSS"],
		},
		{
			title: "AirBnb Mobile Clone",
			links: {
				github: "https://github.com/cchau8/airbnb-app",
			},
			description:
				"A React Native mobile replica of the AirBnb mobile application to create and signin an account in order to browse offers, look for locations on a map.",
			tech: ["React Native", "Expo"],
		},
		{
			title: "Emoji Search",
			links: {
				github: "https://github.com/cchau8/emoji-search",
				link: "https://emoji-search-cchau.netlify.app/",
			},
			description: "Basic React App to search for emojis using keywords and copy them.",
			tech: ["React", "HTML&CSS"],
		},
	];

	return (
		<main className="project-page">
			<div>
				<h2>My main projects</h2>
				<MainProjects />
			</div>
			<div>
				<h2>Some more projects</h2>
				<div className="project-container">
					{projects.map((el, i) => {
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
