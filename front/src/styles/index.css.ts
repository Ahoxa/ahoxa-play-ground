import { style, styleVariants } from "@vanilla-extract/css";

export const container = style({
	minHeight: "100vh",
	backgroundColor: "#f9fafb", // bg-gray-50
	padding: "2rem", // p-8
});

export const wrapper = style({
	maxWidth: "56rem", // max-w-4xl
	marginLeft: "auto",
	marginRight: "auto",
});

export const header = style({
	marginBottom: "3rem", // mb-12
	textAlign: "center",
});

export const title = style({
	fontSize: "2.25rem", // text-4xl
	fontWeight: 700, // font-bold
	color: "#111827", // text-gray-900
	marginBottom: "1rem", // mb-4
});

export const subtitle = style({
	fontSize: "1.25rem", // text-xl
	color: "#4b5563", // text-gray-600
});

export const grid = style({
	display: "grid",
	gridTemplateColumns: "repeat(1, minmax(0, 1fr))", // grid-cols-1
	gap: "1.5rem", // gap-6
	"@media": {
		"screen and (min-width: 768px)": {
			gridTemplateColumns: "repeat(2, minmax(0, 1fr))", // md:grid-cols-2
		},
	},
});

export const card = style({
	display: "block",
	padding: "1.5rem", // p-6
	backgroundColor: "white",
	borderRadius: "0.75rem", // rounded-xl
	boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", // shadow-sm
	border: "1px solid #f3f4f6", // border-gray-100
	textDecoration: "none",
	transition: "box-shadow 0.2s",
	":hover": {
		boxShadow:
			"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // hover:shadow-md
	},
});

export const cardContent = style({
	display: "flex",
	alignItems: "flex-start",
	gap: "1rem", // gap-4
});

export const iconWrapper = style({
	padding: "0.75rem", // p-3
	borderRadius: "0.5rem", // rounded-lg
});

export const iconColors = styleVariants({
	blue: { backgroundColor: "#dbeafe", color: "#2563eb" }, // bg-blue-100 text-blue-600
	green: { backgroundColor: "#dcfce7", color: "#166534" }, // bg-green-100 text-green-600
	purple: { backgroundColor: "#f3e8ff", color: "#9333ea" }, // bg-purple-100 text-purple-600
	orange: { backgroundColor: "#ffedd5", color: "#ea580c" }, // bg-orange-100 text-orange-600
	red: { backgroundColor: "#fee2e2", color: "#dc2626" }, // bg-red-100 text-red-600
	indigo: { backgroundColor: "#e0e7ff", color: "#4f46e5" }, // bg-indigo-100 text-indigo-600
	teal: { backgroundColor: "#ccfbf1", color: "#0d9488" }, // bg-teal-100 text-teal-600
	pink: { backgroundColor: "#fce7f3", color: "#db2777" }, // bg-pink-100 text-pink-600
});

export const cardTitle = style({
	fontSize: "1.25rem", // text-xl
	fontWeight: 600, // font-semibold
	color: "#111827", // text-gray-900
	marginBottom: "0.5rem", // mb-2
});

export const cardDescription = style({
	color: "#4b5563", // text-gray-600
});
