import { keyframes, style } from "@vanilla-extract/css";

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
    borderColor: "#3b82f6",
    boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)",
  },
});

export const buttonGray = style({
  backgroundColor: "#6b7280",
  ":hover": {
    backgroundColor: "#4b5563",
  },
});

export const buttonRed = style({
  backgroundColor: "#ef4444",
  ":hover": {
    backgroundColor: "#dc2626",
  },
});

export const transitionTransform = style({
  transitionProperty: "transform",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "150ms",
});

export const flexGap4 = style({
  display: "flex",
  gap: "1rem",
});

export const mb6 = style({ marginBottom: "1.5rem" });
export const shadowSm = style({
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
});
