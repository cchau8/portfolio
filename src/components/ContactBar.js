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
			<a href="mailto:cedricchau87@gmail.com" className="mail">
				cedricchau87@gmail.com
			</a>
		</div>
	);
};

export default ContactBar;
