import { style } from "@vanilla-extract/css";

export const container = style({
  padding: "2rem",
  maxWidth: "42rem",
  marginLeft: "auto",
  marginRight: "auto",
});

export const title = style({
  fontSize: "1.5rem",
  fontWeight: 700,
  marginBottom: "1rem",
});

export const description = style({
  marginBottom: "1.5rem",
});

export const valueBox = style({
  padding: "0.5rem",
  border: "1px solid #e5e7eb",
  borderRadius: "0.25rem",
  marginBottom: "0.5rem",
});

export const boldText = style({
  fontWeight: 700,
});

export const warningBox = style({
  padding: "1rem",
  backgroundColor: "#fefce8",
  border: "1px solid #fef08a",
  borderRadius: "0.25rem",
  marginBottom: "1.5rem",
});

export const smallText = style({
  fontSize: "0.875rem",
});

export const button = style({
  padding: "0.5rem 1rem",
  backgroundColor: "#3b82f6",
  color: "white",
  borderRadius: "0.25rem",
  border: "none",
  cursor: "pointer",
  marginBottom: "1.5rem",
  ":hover": {
    backgroundColor: "#2563eb",
  },
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "1.5rem",
});

export const card = style({
  border: "1px solid #e5e7eb",
  padding: "1rem",
  borderRadius: "0.25rem",
});

export const cardTitle = style({
  fontWeight: 700,
  marginBottom: "1rem",
});

export const cardDescription = style({
  fontSize: "0.875rem",
  color: "#6b7280",
  marginBottom: "0.5rem",
});
