import { style } from "@vanilla-extract/css";

export const heavyList = style({
  marginTop: "1rem",
  height: "16rem",
  overflow: "auto",
  border: "1px solid #e5e7eb",
  padding: "0.5rem",
});

export const listItem = style({
  paddingTop: "0.25rem",
  paddingBottom: "0.25rem",
  borderBottom: "1px solid #e5e7eb",
});

export const twoColumnGrid = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1.5rem",
});

export const textBlue600 = style({ color: "#2563eb" });
export const textGreen600 = style({ color: "#166534" });
export const textSmGray500 = style({ fontSize: "0.875rem", color: "#6b7280" });
export const bgBlue50 = style({ backgroundColor: "#eff6ff" });
export const bgGreen50 = style({ backgroundColor: "#f0fdf4" });
export const mt2 = style({ marginTop: "0.5rem" });
export const mt8 = style({ marginTop: "2rem" });
export const mb6 = style({ marginBottom: "1.5rem" });
