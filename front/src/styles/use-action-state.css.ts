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

export const form = style({
  border: "1px solid #e5e7eb",
  padding: "1.5rem",
  borderRadius: "0.5rem",
  backgroundColor: "white",
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
});

export const formGroup = style({
  marginBottom: "1rem",
});

export const label = style({
  display: "block",
  fontSize: "0.875rem",
  fontWeight: 500,
  color: "#374151",
  marginBottom: "0.25rem",
});

export const input = style({
  width: "100%",
  padding: "0.5rem",
  border: "1px solid #d1d5db",
  borderRadius: "0.25rem",
});

export const submitButton = style({
  padding: "0.5rem 1rem",
  borderRadius: "0.25rem",
  color: "white",
  border: "none",
  cursor: "pointer",
});

export const submitButtonDisabled = style({
  backgroundColor: "#93c5fd",
  cursor: "not-allowed",
});

export const submitButtonActive = style({
  backgroundColor: "#3b82f6",
  ":hover": {
    backgroundColor: "#2563eb",
  },
});

export const errorMessage = style({
  marginTop: "1rem",
  padding: "0.75rem",
  backgroundColor: "#fef2f2",
  color: "#b91c1c",
  borderRadius: "0.25rem",
  border: "1px solid #fecaca",
});

export const successMessage = style({
  marginTop: "1rem",
  padding: "0.75rem",
  backgroundColor: "#f0fdf4",
  color: "#15803d",
  borderRadius: "0.25rem",
  border: "1px solid #bbf7d0",
});
