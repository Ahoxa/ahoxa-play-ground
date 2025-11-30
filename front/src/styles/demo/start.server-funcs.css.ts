import { style } from "@vanilla-extract/css";

export const container = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	minHeight: "100vh",
	background:
		"radial-gradient(50% 50% at 20% 60%, #23272a 0%, #18181b 50%, #000000 100%)",
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
	fontSize: "1.5rem", // text-2xl
	marginBottom: "1rem", // mb-4
	fontWeight: 600,
});

export const content = style({
	display: "flex",
	flexDirection: "column",
	gap: "0.5rem", // gap-2
});

export const timeText = style({
	fontSize: "1.25rem", // text-xl
});

export const button = style({
	backgroundColor: "#3b82f6", // bg-blue-500
	color: "white",
	fontWeight: 700, // font-bold
	paddingTop: "0.75rem", // py-3
	paddingBottom: "0.75rem",
	paddingLeft: "1rem", // px-4
	paddingRight: "1rem",
	borderRadius: "0.5rem", // rounded-lg
	transitionProperty:
		"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
	transitionDuration: "150ms",
	border: "none",
	cursor: "pointer",
	":hover": {
		backgroundColor: "#2563eb", // hover:bg-blue-600
	},
	":disabled": {
		backgroundColor: "rgba(59, 130, 246, 0.5)", // disabled:bg-blue-500/50
		cursor: "not-allowed",
	},
});
