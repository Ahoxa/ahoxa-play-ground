import { keyframes, style } from "@vanilla-extract/css";

const pulse = keyframes({
  "0%, 100%": { opacity: 1 },
  "50%": { opacity: 0.5 },
});

export const dataComponent = style({
  padding: "1rem",
  border: "1px solid #e5e7eb",
  borderRadius: "0.25rem",
  backgroundColor: "#f0fdf4",
  color: "#166534",
});

export const fallback = style({
  padding: "1rem",
  backgroundColor: "#f3f4f6",
  animation: `${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
});

export const stack = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const mb6 = style({ marginBottom: "1.5rem" });
