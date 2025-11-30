import { keyframes, style } from "@vanilla-extract/css";

export const container = style({
	padding: "2rem",
	maxWidth: "42rem", // max-w-2xl
	marginLeft: "auto",
	marginRight: "auto",
});

export const title = style({
	fontSize: "1.5rem", // text-2xl
	fontWeight: 700, // font-bold
	marginBottom: "1rem",
});

export const description = style({
	marginBottom: "1.5rem",
});

export const button = style({
	padding: "0.5rem 1rem",
	borderRadius: "0.25rem",
	color: "white",
	backgroundColor: "#3b82f6", // bg-blue-500
	border: "none",
	cursor: "pointer",
	transition: "background-color 0.2s",
	":hover": {
		backgroundColor: "#2563eb", // hover:bg-blue-600
	},
});

export const buttonDisabled = style({
	backgroundColor: "#93c5fd", // bg-blue-300
	cursor: "not-allowed",
});

export const card = style({
	border: "1px solid #e5e7eb", // border-gray-200
	padding: "1rem",
	borderRadius: "0.25rem",
	marginBottom: "1rem",
});

export const cardTitle = style({
	fontWeight: 700,
	marginBottom: "0.5rem",
});

export const grid = style({
	display: "grid",
	gap: "1rem",
});

export const twoColumnGrid = style({
	display: "grid",
	gridTemplateColumns: "1fr 1fr",
	gap: "1.5rem",
});

// Utility classes for specific colors/states
export const bgGreen50 = style({ backgroundColor: "#f0fdf4" });
export const textGreen800 = style({ color: "#166534" });
export const bgGray100 = style({ backgroundColor: "#f3f4f6" });

const pulse = keyframes({
	"0%, 100%": { opacity: 1 },
	"50%": { opacity: 0.5 },
});

export const animatePulse = style({
	animation: `${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
});

export const input = style({
	width: "100%",
	padding: "0.5rem",
	border: "1px solid #d1d5db", // border-gray-300
	borderRadius: "0.25rem",
});

export const label = style({
	display: "block",
	marginBottom: "0.5rem",
	fontWeight: 700,
});

export const flexGap4 = style({
	display: "flex",
	gap: "1rem",
});

export const mb4 = style({ marginBottom: "1rem" });
export const mb6 = style({ marginBottom: "1.5rem" });

export const dataComponent = style({
	padding: "1rem",
	border: "1px solid #e5e7eb",
	borderRadius: "0.25rem",
	backgroundColor: "#f0fdf4", // bg-green-50
	color: "#166534", // text-green-800
});

export const fallback = style({
	padding: "1rem",
	backgroundColor: "#f3f4f6", // bg-gray-100
	animation: `${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
});

export const stack = style({
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
});

export const heavyList = style({
	marginTop: "1rem",
	height: "16rem", // h-64
	overflow: "auto",
	border: "1px solid #e5e7eb",
	padding: "0.5rem",
});

export const listItem = style({
	paddingTop: "0.25rem",
	paddingBottom: "0.25rem",
	borderBottom: "1px solid #e5e7eb",
});

export const textBlue600 = style({ color: "#2563eb" });
export const textGreen600 = style({ color: "#166534" }); // Using darker green for contrast
export const textSmGray500 = style({ fontSize: "0.875rem", color: "#6b7280" });
export const bgBlue50 = style({ backgroundColor: "#eff6ff" });
export const mt2 = style({ marginTop: "0.5rem" });
export const mt8 = style({ marginTop: "2rem" });

export const code = style({
	backgroundColor: "#f3f4f6", // bg-gray-100
	paddingLeft: "0.25rem",
	paddingRight: "0.25rem",
	borderRadius: "0.25rem",
	fontFamily: "monospace",
});

export const hint = style({
	fontSize: "0.75rem", // text-xs
	color: "#6b7280", // text-gray-500
	marginTop: "0.25rem",
});

export const noteBox = style({
	marginTop: "1.5rem",
	padding: "1rem",
	backgroundColor: "#fefce8", // bg-yellow-50
	border: "1px solid #fef08a", // border-yellow-200
	borderRadius: "0.25rem",
	fontSize: "0.875rem", // text-sm
});

export const errorBox = style({
	marginTop: "1rem",
	padding: "0.75rem",
	backgroundColor: "#fef2f2", // bg-red-50
	color: "#b91c1c", // text-red-700
	borderRadius: "0.25rem",
	border: "1px solid #fecaca", // border-red-200
});

export const successBox = style({
	marginTop: "1rem",
	padding: "0.75rem",
	backgroundColor: "#f0fdf4", // bg-green-50
	color: "#15803d", // text-green-700
	borderRadius: "0.25rem",
	border: "1px solid #bbf7d0", // border-green-200
});

export const shadowSm = style({
	boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
});

export const statusCard = style({
	padding: "1.5rem",
	borderRadius: "0.5rem",
	borderWidth: "2px",
	borderStyle: "solid",
});

export const statusCardOnline = style({
	borderColor: "#22c55e", // border-green-500
	backgroundColor: "#f0fdf4", // bg-green-50
});

export const statusCardOffline = style({
	borderColor: "#ef4444", // border-red-500
	backgroundColor: "#fef2f2", // bg-red-50
});

export const statusIndicator = style({
	width: "1rem",
	height: "1rem",
	borderRadius: "9999px",
});

export const statusIndicatorOnline = style({
	backgroundColor: "#22c55e", // bg-green-500
});

export const statusIndicatorOffline = style({
	backgroundColor: "#ef4444", // bg-red-500
});

export const textLg = style({ fontSize: "1.125rem" });
export const textSmGray600 = style({ fontSize: "0.875rem", color: "#4b5563" });

export const windowWidthCard = style({
	padding: "1.5rem",
	borderRadius: "0.5rem",
	border: "1px solid #bfdbfe", // border-blue-200
	backgroundColor: "#eff6ff", // bg-blue-50
});

export const windowWidthText = style({
	fontSize: "2.25rem", // text-4xl
	fontFamily: "monospace",
	color: "#2563eb", // text-blue-600
});

export const flexCenterGap2 = style({
	display: "flex",
	alignItems: "center",
	gap: "0.5rem",
});

const bounce = keyframes({
	"0%, 100%": {
		transform: "translateY(-25%)",
		animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
	},
	"50%": {
		transform: "translateY(0)",
		animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
	},
});

export const animateBounce = style({
	animation: `${bounce} 1s infinite`,
});

export const inputFocus = style({
	outline: "none",
	":focus": {
		borderColor: "#3b82f6", // border-blue-500
		boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)", // ring-2 ring-blue-500
	},
});

export const buttonGray = style({
	backgroundColor: "#6b7280", // bg-gray-500
	":hover": {
		backgroundColor: "#4b5563", // hover:bg-gray-600
	},
});

export const buttonRed = style({
	backgroundColor: "#ef4444", // bg-red-500
	":hover": {
		backgroundColor: "#dc2626", // hover:bg-red-600
	},
});

export const transitionTransform = style({
	transitionProperty: "transform",
	transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
	transitionDuration: "150ms",
});
