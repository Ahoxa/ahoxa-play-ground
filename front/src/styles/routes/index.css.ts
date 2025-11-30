import { style } from "@vanilla-extract/css";

export const icon = style({
	width: "3rem", // w-12
	height: "3rem", // h-12
	color: "#22d3ee", // text-cyan-400
});

export const container = style({
	minHeight: "100vh",
	background: "linear-gradient(to bottom, #0f172a, #1e293b, #0f172a)", // from-slate-900 via-slate-800 to-slate-900
});

export const heroSection = style({
	position: "relative",
	paddingTop: "5rem", // py-20
	paddingBottom: "5rem",
	paddingLeft: "1.5rem", // px-6
	paddingRight: "1.5rem",
	textAlign: "center",
	overflow: "hidden",
});

export const heroBackground = style({
	position: "absolute",
	inset: 0,
	background:
		"linear-gradient(to right, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))", // from-cyan-500/10 via-blue-500/10 to-purple-500/10
});

export const heroContent = style({
	position: "relative",
	maxWidth: "64rem", // max-w-5xl
	marginLeft: "auto",
	marginRight: "auto",
});

export const logoContainer = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	gap: "1.5rem", // gap-6
	marginBottom: "1.5rem", // mb-6
});

export const logo = style({
	width: "6rem", // w-24
	height: "6rem", // h-24
	"@media": {
		"screen and (min-width: 768px)": {
			width: "8rem", // md:w-32
			height: "8rem", // md:h-32
		},
	},
});

export const title = style({
	fontSize: "3.75rem", // text-6xl
	lineHeight: 1,
	fontWeight: 900, // font-black
	color: "white",
	letterSpacing: "-0.08em",
	margin: 0,
	"@media": {
		"screen and (min-width: 768px)": {
			fontSize: "4.5rem", // md:text-7xl
		},
	},
});

export const titleGray = style({
	color: "#d1d5db", // text-gray-300
});

export const titleGradient = style({
	backgroundImage: "linear-gradient(to right, #22d3ee, #60a5fa)", // from-cyan-400 to-blue-400
	WebkitBackgroundClip: "text",
	backgroundClip: "text",
	color: "transparent",
});

export const subtitle = style({
	fontSize: "1.5rem", // text-2xl
	lineHeight: "2rem",
	color: "#d1d5db", // text-gray-300
	marginBottom: "1rem", // mb-4
	fontWeight: 300, // font-light
	"@media": {
		"screen and (min-width: 768px)": {
			fontSize: "1.875rem", // md:text-3xl
			lineHeight: "2.25rem",
		},
	},
});

export const description = style({
	fontSize: "1.125rem", // text-lg
	lineHeight: "1.75rem",
	color: "#9ca3af", // text-gray-400
	maxWidth: "48rem", // max-w-3xl
	marginLeft: "auto",
	marginRight: "auto",
	marginBottom: "2rem", // mb-8
});

export const ctaContainer = style({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "1rem", // gap-4
});

export const ctaButton = style({
	paddingLeft: "2rem", // px-8
	paddingRight: "2rem",
	paddingTop: "0.75rem", // py-3
	paddingBottom: "0.75rem",
	backgroundColor: "#06b6d4", // bg-cyan-500
	color: "white",
	fontWeight: 600, // font-semibold
	borderRadius: "0.5rem", // rounded-lg
	transitionProperty:
		"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
	transitionDuration: "150ms",
	boxShadow:
		"0 10px 15px -3px rgba(6, 182, 212, 0.5), 0 4px 6px -2px rgba(6, 182, 212, 0.25)", // shadow-lg shadow-cyan-500/50
	textDecoration: "none",
	":hover": {
		backgroundColor: "#0891b2", // hover:bg-cyan-600
	},
});

export const ctaNote = style({
	color: "#9ca3af", // text-gray-400
	fontSize: "0.875rem", // text-sm
	marginTop: "0.5rem", // mt-2
});

export const code = style({
	paddingLeft: "0.5rem", // px-2
	paddingRight: "0.5rem",
	paddingTop: "0.25rem", // py-1
	paddingBottom: "0.25rem",
	backgroundColor: "#334155", // bg-slate-700
	borderRadius: "0.25rem", // rounded
	color: "#22d3ee", // text-cyan-400
	fontFamily: "monospace",
});

export const featuresSection = style({
	paddingTop: "4rem", // py-16
	paddingBottom: "4rem",
	paddingLeft: "1.5rem", // px-6
	paddingRight: "1.5rem",
	maxWidth: "80rem", // max-w-7xl
	marginLeft: "auto",
	marginRight: "auto",
});

export const featuresGrid = style({
	display: "grid",
	gridTemplateColumns: "repeat(1, minmax(0, 1fr))", // grid-cols-1
	gap: "1.5rem", // gap-6
	"@media": {
		"screen and (min-width: 768px)": {
			gridTemplateColumns: "repeat(2, minmax(0, 1fr))", // md:grid-cols-2
		},
		"screen and (min-width: 1024px)": {
			gridTemplateColumns: "repeat(3, minmax(0, 1fr))", // lg:grid-cols-3
		},
	},
});

export const featureCard = style({
	backgroundColor: "rgba(30, 41, 59, 0.5)", // bg-slate-800/50
	backdropFilter: "blur(4px)", // backdrop-blur-sm
	border: "1px solid #334155", // border-slate-700
	borderRadius: "0.75rem", // rounded-xl
	padding: "1.5rem", // p-6
	transitionProperty: "all",
	transitionDuration: "300ms",
	":hover": {
		borderColor: "rgba(6, 182, 212, 0.5)", // hover:border-cyan-500/50
		boxShadow:
			"0 10px 15px -3px rgba(6, 182, 212, 0.1), 0 4px 6px -2px rgba(6, 182, 212, 0.05)", // hover:shadow-lg hover:shadow-cyan-500/10
	},
});

export const featureIconContainer = style({
	marginBottom: "1rem", // mb-4
});

export const featureTitle = style({
	fontSize: "1.25rem", // text-xl
	fontWeight: 600, // font-semibold
	color: "white",
	marginBottom: "0.75rem", // mb-3
	margin: 0,
});

export const featureDescription = style({
	color: "#9ca3af", // text-gray-400
	lineHeight: 1.625, // leading-relaxed
	margin: 0,
});
