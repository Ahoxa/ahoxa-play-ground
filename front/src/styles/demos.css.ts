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

export const button = style({
  padding: "0.5rem 1rem",
  borderRadius: "0.25rem",
  color: "white",
  backgroundColor: "#3b82f6",
  border: "none",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#2563eb",
  },
});

export const buttonDisabled = style({
  backgroundColor: "#93c5fd",
  cursor: "not-allowed",
});

export const card = style({
  border: "1px solid #e5e7eb",
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

export const input = style({
  width: "100%",
  padding: "0.5rem",
  border: "1px solid #d1d5db",
  borderRadius: "0.25rem",
});

export const label = style({
  display: "block",
  marginBottom: "0.5rem",
  fontWeight: 700,
});

export const code = style({
  backgroundColor: "#f3f4f6",
  paddingLeft: "0.25rem",
  paddingRight: "0.25rem",
  borderRadius: "0.25rem",
  fontFamily: "monospace",
});

export const noteBox = style({
  marginTop: "1.5rem",
  padding: "1rem",
  backgroundColor: "#fefce8",
  border: "1px solid #fef08a",
  borderRadius: "0.25rem",
  fontSize: "0.875rem",
});
