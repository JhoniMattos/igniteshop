import { useCart } from "@/contexts/CartContext";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { X } from "@phosphor-icons/react";

import axios from "axios";
import { useState } from "react";

import {
  Overlay,
  Content,
  Title,
  CartItem,
  ImageContainer,
  RemoveButton,
  CloseButton,
  Footer,
  DetailsRow,
  CheckoutButton,
} from "../styles/pages/cartDialog";

export function CartDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post("/api/checkout", {
        items: cartItems.map((item) => ({
          priceId: item.defaultPriceId,
          quantity: 1,
        })),
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);
      alert("Falha ao redirecionar ao checkout.");
    }
  }

  const { cartItems, removeFromCart } = useCart();

  const totalQuantity = cartItems.length;
  const totalPrice = cartItems.reduce((acc, item) => acc + item.priceNumber, 0);

  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <CloseButton asChild>
            <button aria-label="Fechar">
              <X size={24} />
            </button>
          </CloseButton>

          <Title>Sacola de Compras</Title>

          {cartItems.length === 0 ? (
            <p>Sua sacola está vazia.</p>
          ) : (
            <>
              <ul>
                {cartItems.map((item) => (
                  <CartItem key={item.id}>
                    <ImageContainer>
                      <Image
                        src={item.imageUrl}
                        width={80}
                        height={80}
                        alt={item.name}
                      />
                    </ImageContainer>
                    <div>
                      <span>{item.name}</span>
                      <p>{item.price}</p>
                      <RemoveButton onClick={() => removeFromCart(item.id)}>
                        Remover
                      </RemoveButton>
                    </div>
                  </CartItem>
                ))}
              </ul>

              <Footer>
                <DetailsRow>
                  <span>Quantidade</span>
                  <span>
                    {totalQuantity} {totalQuantity === 1 ? "item" : "itens"}
                  </span>
                </DetailsRow>

                <DetailsRow>
                  <strong>Valor total</strong>
                  <strong>
                    {totalPrice.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </strong>
                </DetailsRow>
                <CheckoutButton
                  disabled={isCreatingCheckoutSession}
                  onClick={handleBuyProduct}
                >
                  Finalizar Compra
                </CheckoutButton>
              </Footer>
            </>
          )}
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
