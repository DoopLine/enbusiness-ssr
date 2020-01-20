import defaultData from "./courses/default";
import photoshopData from "./courses/photoshop";
import cssData from "./courses/css";
import htmlData from "./courses/html";
import javascriptData from "./courses/javascript";
import nodejsData from "./courses/nodejs";
import phpData from "./courses/php";
import animationData from "./courses/animation";
import aftereffectsData from "./courses/aftereffects";
import premiereData from "./courses/premiere";
import indesignData from "./courses/indesign";
import lightroomData from "./courses/lightroom";
import incopyData from "./courses/incopy";
import preludeData from "./courses/prelude";
import illustratorData from "./courses/illustrator";
import excelData from "./courses/excel";
import marketingdigitalData from "./courses/marketingdigital";

export const courses = [
	"photoshop",
	"illustrator",
	"after effects",
	"excel",
	"html",
	"css",
	"javascript",
	"node js",
	"php",
	"marketing digital",
	"animation",
	"incopy",
	"indesign",
	"lightroom",
	"prelude",
	"premiere"
];

export const getModules = course => {
	switch (course) {
		case "photoshop":
			return photoshopData;
		case "javascript":
			return javascriptData;
		case "css":
			return cssData;
		case "html":
			return htmlData;
		case "node js":
			return nodejsData;
		case "php":
			return phpData;
		case "animation":
			return animationData;
		case "after effects":
			return aftereffectsData;
		case "premiere":
			return premiereData;
		case "indesign":
			return indesignData;
		case "lightroom":
			return lightroomData;
		case "incopy":
			return incopyData;
		case "prelude":
			return preludeData;
		case "illustrator":
			return illustratorData;
		case "excel":
			return excelData;
		case "marketing digital":
			return marketingdigitalData;
		default:
			return defaultData;
	}
};
