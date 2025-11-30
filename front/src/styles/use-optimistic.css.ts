import { style } from "@vanilla-extract/css";

export const form = style({
  display: "flex",
  gap: "0.5rem",
  marginBottom: "2rem",
});

export const input = style({
  flex: 1,
  padding: "0.5rem",
  border: "1px solid #d1d5db",
  borderRadius: "0.25rem",
});

export const messageList = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const messageItem = style({
  padding: "1rem",
  backgroundColor: "white",
  border: "1px solid #e5e7eb",
  borderRadius: "0.5rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const optimisticMessage = style({
  opacity: 0.5,
});

export const messageText = style({
  fontSize: "1rem",
  color: "#1f2937",
});

export const messageStatus = style({
  fontSize: "0.75rem",
  color: "#6b7280",
});
