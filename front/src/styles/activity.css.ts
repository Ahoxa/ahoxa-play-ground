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

export const card = style({
  padding: "1rem",
  border: "1px solid #e5e7eb",
  borderRadius: "0.25rem",
  backgroundColor: "white",
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
});

export const cardTitle = style({
  fontWeight: 700,
  marginBottom: "0.5rem",
});

export const countText = style({
  fontSize: "1.5rem",
  marginBottom: "0.5rem",
});

export const incrementButton = style({
  padding: "0.25rem 0.75rem",
  backgroundColor: "#e5e7eb",
  borderRadius: "0.25rem",
  cursor: "pointer",
  border: "none",
  ":hover": {
    backgroundColor: "#d1d5db",
  },
});

export const controlPanel = style({
  marginBottom: "1.5rem",
  padding: "1rem",
  backgroundColor: "#f9fafb",
  borderRadius: "0.25rem",
});

export const checkboxLabel = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  cursor: "pointer",
});

export const checkbox = style({
  width: "1.25rem",
  height: "1.25rem",
});

export const boldText = style({
  fontWeight: 700,
});

export const noteText = style({
  fontSize: "0.875rem",
  color: "#4b5563",
  marginTop: "0.25rem",
  marginLeft: "1.75rem",
});

export const tabContainer = style({
  display: "flex",
  borderBottom: "1px solid #e5e7eb",
  marginBottom: "1rem",
});

export const tabButton = style({
  padding: "0.5rem 1rem",
  border: "none",
  background: "transparent",
  cursor: "pointer",
  borderBottom: "2px solid transparent",
});

export const activeTab = style({
  borderBottomColor: "#3b82f6",
  fontWeight: 700,
});

export const contentArea = style({
  minHeight: "200px",
});
