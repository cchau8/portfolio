import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import resume from "../assets/pdf/CVCedricChau-alt.pdf";
import "../style/header.css";
import ContactBar from "./ContactBar";

const Header = () => {
	const menuRef = useRef(null);
	const [showMenu, setShowMenu] = useState(false);

	const closeMenu = () => {
		setShowMenu(false);
		const body = document.querySelector("body");
		body.style.overflow = "auto";
	};

	useEffect(() => {
		const handler = (e) => {
			if (showMenu && !menuRef.current?.contains(e.target)) {
				closeMenu();
			}
		};
		window.addEventListener("click", handler);
		return () => {
			window.removeEventListener("click", handler);
		};
	}, [showMenu]);
	return (
		<header>
			<nav className="navbar">
				<Link to="/">
					<span className="navbar-logo">cchau</span>
				</Link>
				<ul className={`navbar-links ${showMenu ? "visible" : ""}`} ref={menuRef}>
					<li className="navbar-item" onClick={closeMenu}>
						<Link to="/" className="navbar-link">
							About
						</Link>
					</li>
					<li className="navbar-item" onClick={closeMenu}>
						<Link to="/projects" className="navbar-link">
							Projets
						</Link>
					</li>
					<li className="navbar-item" onClick={closeMenu}>
						<a href="/" className="navbar-link">
							Contacts
						</a>
					</li>
					<li className="navbar-item" onClick={closeMenu}>
						<a href={resume} target="_blank" rel="noreferrer" className="navbar-link">
							Resume
						</a>
					</li>
					<li className="navbar-item">{showMenu && <ContactBar />}</li>
				</ul>
				<div
					onClick={() => {
						setShowMenu(!showMenu);
						const body = document.querySelector("body");
						body.style.overflow = "hidden";
					}}
					className="mobile-menu-btn"
				>
					<FontAwesomeIcon icon="bars" />
				</div>
			</nav>
		</header>
	);
};

export default Header;
