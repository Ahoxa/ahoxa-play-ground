import { style } from "@vanilla-extract/css";

export const container = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	minHeight: "100vh",
	background:
		"radial-gradient(50% 50% at 20% 60%, #1a1a1a 0%, #0a0a0a 50%, #000000 100%)",
	padding: "1rem", // p-4
	color: "white",
});

export const card = style({
	width: "100%",
	maxWidth: "42rem", // max-w-2xl
	padding: "2rem", // p-8
	borderRadius: "0.75rem", // rounded-xl
	backdropFilter: "blur(12px)", // backdrop-blur-md
	backgroundColor: "rgba(0, 0, 0, 0.5)", // bg-black/50
	boxShadow:
		"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)", // shadow-xl
	border: "8px solid rgba(0, 0, 0, 0.1)", // border-8 border-black/10
});

export const title = style({
	fontSize: "2.25rem", // text-4xl
	fontWeight: 700, // font-bold
	marginBottom: "2rem", // mb-8
	textAlign: "center",
	backgroundImage: "linear-gradient(to right, #ec4899, #a855f7, #4ade80)", // from-pink-500 via-purple-500 to-green-400
	WebkitBackgroundClip: "text",
	backgroundClip: "text",
	color: "transparent",
});

export const linkContainer = style({
	display: "flex",
	flexDirection: "column",
	gap: "1rem", // gap-4
});

const linkBase = style({
	fontSize: "1.5rem", // text-2xl
	fontWeight: 700, // font-bold
	paddingTop: "1.5rem", // py-6
	paddingBottom: "1.5rem",
	paddingLeft: "2rem", // px-8
	paddingRight: "2rem",
	borderRadius: "0.5rem", // rounded-lg
	color: "white",
	textAlign: "center",
	boxShadow:
		"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", // shadow-lg
	transform: "none",
	transitionProperty: "all",
	transitionDuration: "150ms",
	borderWidth: "2px",
	borderStyle: "solid",
	textDecoration: "none",
	display: "block",
	":hover": {
		transform: "scale(1.05)",
	},
});

export const linkSpa = style([
	linkBase,
	{
		backgroundImage: "linear-gradient(to right, #db2777, #ec4899)", // from-pink-600 to-pink-500
		borderColor: "#f472b6", // border-pink-400
		":hover": {
			backgroundImage: "linear-gradient(to right, #be185d, #db2777)", // hover:from-pink-700 hover:to-pink-600
			boxShadow:
				"0 10px 15px -3px rgba(236, 72, 153, 0.5), 0 4px 6px -2px rgba(236, 72, 153, 0.25)", // hover:shadow-pink-500/50
		},
	},
]);

export const linkFullSsr = style([
	linkBase,
	{
		backgroundImage: "linear-gradient(to right, #9333ea, #a855f7)", // from-purple-600 to-purple-500
		borderColor: "#c084fc", // border-purple-400
		":hover": {
			backgroundImage: "linear-gradient(to right, #7e22ce, #9333ea)", // hover:from-purple-700 hover:to-purple-600
			boxShadow:
				"0 10px 15px -3px rgba(168, 85, 247, 0.5), 0 4px 6px -2px rgba(168, 85, 247, 0.25)", // hover:shadow-purple-500/50
		},
	},
]);

export const linkDataOnly = style([
	linkBase,
	{
		backgroundImage: "linear-gradient(to right, #22c55e, #10b981)", // from-green-500 to-emerald-500
		borderColor: "#4ade80", // border-green-400
		":hover": {
			backgroundImage: "linear-gradient(to right, #16a34a, #059669)", // hover:from-green-600 hover:to-emerald-600
			boxShadow:
				"0 10px 15px -3px rgba(34, 197, 94, 0.5), 0 4px 6px -2px rgba(34, 197, 94, 0.25)", // hover:shadow-green-500/50
		},
	},
]);
