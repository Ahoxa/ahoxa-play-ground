import { style, styleVariants } from "@vanilla-extract/css";

export const container = style({
  minHeight: "100vh",
  backgroundColor: "#f9fafb",
  padding: "2rem",
});

export const wrapper = style({
  maxWidth: "56rem",
  marginLeft: "auto",
  marginRight: "auto",
});

export const header = style({
  marginBottom: "3rem",
  textAlign: "center",
});

export const title = style({
  fontSize: "2.25rem",
  fontWeight: 700,
  color: "#111827",
  marginBottom: "1rem",
});

export const subtitle = style({
  fontSize: "1.25rem",
  color: "#4b5563",
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
  gap: "1.5rem",
  "@media": {
    "screen and (min-width: 768px)": {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    },
  },
});

export const card = style({
  display: "block",
  padding: "1.5rem",
  backgroundColor: "white",
  borderRadius: "0.75rem",
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  border: "1px solid #f3f4f6",
  textDecoration: "none",
  transition: "box-shadow 0.2s",
  ":hover": {
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  },
});

export const cardContent = style({
  display: "flex",
  alignItems: "flex-start",
  gap: "1rem",
});

export const iconWrapper = style({
  padding: "0.75rem",
  borderRadius: "0.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const iconColors = styleVariants({
  blue: { backgroundColor: "#dbeafe", color: "#2563eb" },
  green: { backgroundColor: "#dcfce7", color: "#166534" },
  purple: { backgroundColor: "#f3e8ff", color: "#9333ea" },
  orange: { backgroundColor: "#ffedd5", color: "#ea580c" },
  red: { backgroundColor: "#fee2e2", color: "#dc2626" },
  indigo: { backgroundColor: "#e0e7ff", color: "#4f46e5" },
  teal: { backgroundColor: "#ccfbf1", color: "#0d9488" },
  pink: { backgroundColor: "#fce7f3", color: "#db2777" },
});

export const cardTitle = style({
  fontSize: "1.25rem",
  fontWeight: 600,
  color: "#111827",
  marginBottom: "0.5rem",
});

export const cardDescription = style({
  color: "#4b5563",
});
