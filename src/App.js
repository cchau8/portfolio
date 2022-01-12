import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
// import Contact from "./pages/Contact";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
	faChevronDown,
	faExternalLinkAlt,
	faCode,
	faBars,
} from "@fortawesome/free-solid-svg-icons";
import ContactBar from "./components/ContactBar";
import ScrollToTop from "./components/ScrollToTop";
library.add(faChevronDown, fab, faExternalLinkAlt, faCode, faBars);

function App() {
	return (
		<Router>
			<Header />
			<ContactBar />
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/resume" element={<Resume />} />
				{/* <Route path="/contact" element={<Contact />} /> */}
			</Routes>
		</Router>
	);
}

export default App;
