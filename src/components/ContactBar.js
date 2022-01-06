import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/contact-bar.css";

const ContactBar = () => {
	return (
		<div className="contact-bar">
			<div className="contact-links">
				<a href="https://www.linkedin.com/in/cedric-chau/" target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={["fab", "linkedin-in"]} />
				</a>
				<a href="https://github.com/cchau8" target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={["fab", "github"]} />
				</a>
			</div>
			<a href="mailto:chau_c@etna-alternance.net" className="mail">
				chau_c@etna-alternance.net
			</a>
		</div>
	);
};

export default ContactBar;
