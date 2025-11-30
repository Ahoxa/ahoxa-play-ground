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
	fontSize: "1.875rem", // text-3xl
	fontWeight: 700, // font-bold
	marginBottom: "1.5rem", // mb-6
	color: "#4ade80", // text-green-400
});

export const list = style({
	display: "flex",
	flexDirection: "column",
	gap: "0.75rem", // space-y-3
	padding: 0,
	listStyle: "none",
});

export const listItem = style({
	backgroundColor: "rgba(255, 255, 255, 0.1)", // bg-white/10
	border: "1px solid rgba(255, 255, 255, 0.2)", // border-white/20
	borderRadius: "0.5rem", // rounded-lg
	padding: "1rem", // p-4
	backdropFilter: "blur(4px)", // backdrop-blur-sm
	boxShadow:
		"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // shadow-md
});

export const songName = style({
	fontSize: "1.125rem", // text-lg
	color: "white",
	fontWeight: 500, // font-medium
});

export const artistName = style({
	color: "rgba(255, 255, 255, 0.6)", // text-white/60
});
