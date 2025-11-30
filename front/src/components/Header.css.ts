import { style } from "@vanilla-extract/css";

export const header = style({
  position: "sticky",
  top: 0,
  zIndex: 40,
  width: "100%",
  padding: "0.75rem 1.5rem",
  display: "flex",
  alignItems: "center",
  backgroundColor: "rgba(255, 255, 255, 0.8)", // white/80
  backdropFilter: "blur(8px)",
  borderBottom: "1px solid #e5e7eb", // border-gray-200
  color: "#111827", // text-gray-900
});

export const menuButton = style({
  padding: "0.5rem",
  borderRadius: "0.375rem", // rounded-md
  transition: "background-color 0.2s",
  cursor: "pointer",
  border: "none",
  background: "transparent",
  color: "#4b5563", // text-gray-600
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ":hover": {
    backgroundColor: "#f3f4f6", // bg-gray-100
    color: "#111827", // text-gray-900
  },
});

export const title = style({
  marginLeft: "1rem",
  fontSize: "1.125rem", // text-lg
  fontWeight: 700, // font-bold
  margin: 0,
  display: "flex",
  alignItems: "center",
});

export const titleLink = style({
  textDecoration: "none",
  color: "inherit",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});

export const overlay = style({
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)", // bg-black/50
  zIndex: 45,
  opacity: 0,
  pointerEvents: "none",
  transition: "opacity 0.3s ease-in-out",
});

export const overlayOpen = style({
  opacity: 1,
  pointerEvents: "auto",
});

export const aside = style({
  position: "fixed",
  top: 0,
  left: 0,
  height: "100%",
  width: "18rem", // w-72
  backgroundColor: "white",
  color: "#111827", // text-gray-900
  boxShadow:
    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)", // shadow-xl
  zIndex: 50,
  transform: "translateX(-100%)",
  transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
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
  padding: "1rem 1.5rem",
  borderBottom: "1px solid #f3f4f6", // border-gray-100
});

export const asideTitle = style({
  fontSize: "1.125rem", // text-lg
  fontWeight: 600, // font-semibold
  margin: 0,
});

export const closeButton = style({
  padding: "0.5rem",
  borderRadius: "0.375rem",
  transition: "background-color 0.2s",
  cursor: "pointer",
  border: "none",
  background: "transparent",
  color: "#6b7280", // text-gray-500
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ":hover": {
    backgroundColor: "#f3f4f6", // bg-gray-100
    color: "#111827", // text-gray-900
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
  gap: "0.75rem",
  padding: "0.75rem 1rem",
  borderRadius: "0.5rem",
  marginBottom: "0.25rem",
  transition: "all 0.2s",
  textDecoration: "none",
  color: "#4b5563", // text-gray-600
  fontSize: "0.9375rem", // text-[15px]
  fontWeight: 500,
  ":hover": {
    backgroundColor: "#f9fafb", // bg-gray-50
    color: "#111827", // text-gray-900
  },
});

export const activeLink = style({
  backgroundColor: "#eff6ff", // bg-blue-50
  color: "#2563eb", // text-blue-600
  ":hover": {
    backgroundColor: "#dbeafe", // bg-blue-100
    color: "#1d4ed8", // text-blue-700
  },
});

export const linkText = style({
  fontWeight: 500,
});
