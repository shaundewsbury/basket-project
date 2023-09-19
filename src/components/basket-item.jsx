import { styled } from "styled-components";

const StyledBasketItem = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 0 #0147700d;
  padding: 1rem;
`;

export const BasketItem = () => {
  return (
    <StyledBasketItem>
      <p>Product</p>
      <p>Descripton</p>
      <p>Price</p>
    </StyledBasketItem>
  );
};
