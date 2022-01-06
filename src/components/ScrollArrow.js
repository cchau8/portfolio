import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScrollArrow = ({ section }) => {
	const scrollToSection = (section) => {
		section.current?.scrollIntoView({ behavior: "smooth" });
		console.log(section);
	};
	return (
		<div className="scroll" onClick={() => scrollToSection(section)}>
			<FontAwesomeIcon icon="chevron-down" />
		</div>
	);
};

export default ScrollArrow;
