import { styled } from "@/styles";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay, {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
});

export const Content = styled(Dialog.Content, {
  position: "fixed",
  top: 0,
  right: 0,
  height: "100vh",
  width: 500,
  backgroundColor: "$gray800",
  padding: "2rem",
  boxShadow: "-4px 0 30px rgba(0,0,0,0.5)",
  display: "flex",
  flexDirection: "column",
  zIndex: 1000,

  "@media(max-width: 420px)": {
    width: "100vw",
  },
});

export const Title = styled(Dialog.Title, {
  fontWeight: "bold",
  fontSize: "$xl",
  marginTop: "1.5rem",
  marginBottom: "1.5rem",
  color: "$gray100",
});

export const CartItem = styled("li", {
  display: "flex",
  gap: "1rem",
  marginBottom: "1rem",
  alignItems: "center",
  color: "$gray100",

  span: {
    fontSize: "$md",
    color: "$gray300",
  },

  p: {
    marginTop: 4,
  },
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 100,
  height: 93,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const RemoveButton = styled("button", {
  backgroundColor: "transparent",
  border: "none",
  color: "$green500",
  cursor: "pointer",
  marginTop: 10,

  fontSize: "$sm",
  fontWeight: "bold",

  "&:hover": {
    color: "$green300",
  },
});

export const CloseButton = styled(Dialog.Close, {
  position: "absolute",
  background: "transparent",
  border: "none",
  top: 16,
  right: 16,
  cursor: "pointer",
  color: "$gray300",

  "&:hover": {
    color: "$gray100",
  },
});

export const Footer = styled("footer", {
  marginTop: "auto",
  paddingTop: "2rem",
  borderTop: "1px solid $gray300",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const DetailsRow = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  fontSize: "$md",

  strong: {
    fontSize: "$lg",
  },
});

export const CheckoutButton = styled("button", {
  marginTop: "2rem",
  width: "100%",
  padding: "1rem",
  backgroundColor: "$green500",
  color: "white",
  fontWeight: "bold",
  border: "none",
  borderRadius: 8,
  cursor: "pointer",
  fontSize: "$md",
  transition: "background 0.2s",

  "&:hover": {
    backgroundColor: "$green300",
  },

  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },
});
