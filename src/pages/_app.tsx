import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import { HandbagIcon } from "@phosphor-icons/react";

import logoImg from "../assets/logo.svg";
import {
  CartCount,
  CartIconWrapper,
  Container,
  Header,
} from "@/styles/pages/app";

import Link from "next/link";
import { CartProvider, useCart } from "@/contexts/CartContext";
import { useState } from "react";
import { CartDialog } from "./cartDialog";

globalStyles();

export function CartHeaderIcon() {
  const { cartCount } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      <CartIconWrapper onClick={() => setOpen(true)}>
        <HandbagIcon size={28} />
        {cartCount > 0 && <CartCount>{cartCount}</CartCount>}
      </CartIconWrapper>

      <CartDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Container>
        <Header>
          <Link href="/">
            <img src={logoImg.src} width={118} />
          </Link>
          <CartHeaderIcon />
        </Header>

        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}
