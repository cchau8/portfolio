import homieScreen from "./img/homie-screen.png";
import vintedScreen from "./img/vinted-screen.png";

const projects = [
	{
		title: "Homie",
		description:
			"A React Native Mobile Application MVP for the Homie startup made @ Le Réacteur, Frontend Developer in a team of 5 students. The application allows homecooked dishes to be delivered right to your doorstep.",
		links: {},
		tech: ["React Native", "NodeJS", "Stripe", "GoogleMap API", "GitHub"],
		thumbnail: homieScreen,
		main: true,
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
		main: true,
	},
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

export default projects;
