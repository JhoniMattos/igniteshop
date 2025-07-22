import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",
});

export const Header = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const CartIconWrapper = styled("div", {
  position: "relative",
  backgroundColor: "$gray800",
  padding: "0.5rem",
  borderRadius: 6,
  cursor: "pointer",
});

export const CartCount = styled("span", {
  position: "absolute",
  top: -8,
  right: -8,
  background: "#00b37e",
  color: "#fff",
  borderRadius: "999px",
  padding: "2px 6px",
  fontSize: "0.75rem",
  fontWeight: "bold",
});
