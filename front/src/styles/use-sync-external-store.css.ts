import { style } from "@vanilla-extract/css";

export const statusCard = style({
  padding: "1.5rem",
  borderRadius: "0.5rem",
  borderWidth: "2px",
  borderStyle: "solid",
});

export const statusCardOnline = style({
  borderColor: "#22c55e",
  backgroundColor: "#f0fdf4",
});

export const statusCardOffline = style({
  borderColor: "#ef4444",
  backgroundColor: "#fef2f2",
});

export const statusIndicator = style({
  width: "1rem",
  height: "1rem",
  borderRadius: "9999px",
});

export const statusIndicatorOnline = style({
  backgroundColor: "#22c55e",
});

export const statusIndicatorOffline = style({
  backgroundColor: "#ef4444",
});

export const textLg = style({ fontSize: "1.125rem" });
export const textSmGray600 = style({ fontSize: "0.875rem", color: "#4b5563" });

export const windowWidthCard = style({
  padding: "1.5rem",
  borderRadius: "0.5rem",
  border: "1px solid #bfdbfe",
  backgroundColor: "#eff6ff",
});

export const windowWidthText = style({
  fontSize: "2.25rem",
  fontFamily: "monospace",
  color: "#2563eb",
});

export const flexCenterGap2 = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});

export const mt2 = style({ marginTop: "0.5rem" });
