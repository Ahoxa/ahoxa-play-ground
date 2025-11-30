import { style } from "@vanilla-extract/css";

export const header = style({
	padding: "1rem",
	display: "flex",
	alignItems: "center",
	backgroundColor: "#1f2937", // gray-800
	color: "white",
	boxShadow:
		"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", // shadow-lg
});

export const menuButton = style({
	padding: "0.5rem",
	borderRadius: "0.5rem",
	transitionProperty: "background-color, border-color, color, fill, stroke",
	transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
	transitionDuration: "150ms",
	cursor: "pointer",
	border: "none",
	background: "transparent",
	color: "inherit",
	":hover": {
		backgroundColor: "#374151", // gray-700
	},
});

export const title = style({
	marginLeft: "1rem",
	fontSize: "1.25rem", // text-xl
	fontWeight: 600, // font-semibold
	margin: 0,
});

export const logo = style({
	height: "2.5rem", // h-10
});

export const aside = style({
	position: "fixed",
	top: 0,
	left: 0,
	height: "100%",
	width: "20rem", // w-80
	backgroundColor: "#111827", // gray-900
	color: "white",
	boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", // shadow-2xl
	zIndex: 50,
	transform: "translateX(-100%)", // default hidden
	transitionProperty: "transform",
	transitionDuration: "300ms",
	transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)", // ease-in-out
	display: "flex",
	flexDirection: "column",
});

export const asideOpen = style({
	transform: "translateX(0)",
});

export const asideHeader = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	padding: "1rem",
	borderBottom: "1px solid #374151", // border-gray-700
});

export const asideTitle = style({
	fontSize: "1.25rem", // text-xl
	fontWeight: 700, // font-bold
	margin: 0,
});

export const closeButton = style({
	padding: "0.5rem",
	borderRadius: "0.5rem",
	transitionProperty: "background-color, border-color, color, fill, stroke",
	transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
	transitionDuration: "150ms",
	cursor: "pointer",
	border: "none",
	background: "transparent",
	color: "inherit",
	":hover": {
		backgroundColor: "#1f2937", // gray-800
	},
});

export const nav = style({
	flex: 1,
	padding: "1rem",
	overflowY: "auto",
});

export const link = style({
	display: "flex",
	alignItems: "center",
	gap: "0.75rem", // gap-3
	padding: "0.75rem", // p-3
	borderRadius: "0.5rem",
	marginBottom: "0.5rem", // mb-2
	transitionProperty: "background-color, border-color, color, fill, stroke",
	transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
	transitionDuration: "150ms",
	textDecoration: "none",
	color: "inherit",
	":hover": {
		backgroundColor: "#1f2937", // gray-800
	},
});

export const activeLink = style({
	backgroundColor: "#0891b2", // cyan-600
	":hover": {
		backgroundColor: "#0e7490", // cyan-700
	},
});

export const linkText = style({
	fontWeight: 500, // font-medium
});

export const groupedLinkContainer = style({
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
});

export const groupedLink = style({
	flex: 1,
});

export const expandButton = style({
	padding: "0.5rem",
	borderRadius: "0.5rem",
	transitionProperty: "background-color, border-color, color, fill, stroke",
	transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
	transitionDuration: "150ms",
	cursor: "pointer",
	border: "none",
	background: "transparent",
	color: "inherit",
	":hover": {
		backgroundColor: "#1f2937", // gray-800
	},
});

export const nestedLinks = style({
	display: "flex",
	flexDirection: "column",
	marginLeft: "1rem",
});
