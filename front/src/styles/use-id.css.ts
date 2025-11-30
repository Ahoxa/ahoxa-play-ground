import { style } from "@vanilla-extract/css";

export const code = style({
  backgroundColor: "#f3f4f6",
  paddingLeft: "0.25rem",
  paddingRight: "0.25rem",
  borderRadius: "0.25rem",
  fontFamily: "monospace",
});

export const hint = style({
  fontSize: "0.75rem",
  color: "#6b7280",
  marginTop: "0.25rem",
});

export const noteBox = style({
  marginTop: "1.5rem",
  padding: "1rem",
  backgroundColor: "#fefce8",
  border: "1px solid #fef08a",
  borderRadius: "0.25rem",
  fontSize: "0.875rem",
});

export const mb4 = style({ marginBottom: "1rem" });
export const shadowSm = style({
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
});

export const label = style({
  display: "block",
  marginBottom: "0.5rem",
  fontWeight: 700,
});
