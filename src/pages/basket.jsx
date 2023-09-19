import { styled } from "styled-components";
import { BasketItem } from "../components/basket-item";

const StyledBasket = styled.div`
  max-width: 1280px;
  padding: 0 1rem;
  margin: 0 auto;
  color: #014770;

  h1 {
    font-size: 1.25rem;

    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  div {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 2rem;

    .items {
      grid-column: span 12;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      @media screen and (min-width: 1024px) {
        grid-column: span 8;
      }
    }

    .totals {
      grid-column: span 12;

      @media screen and (min-width: 1024px) {
        grid-column: span 4;
      }
    }
  }
`;

export const Basket = () => {
  return (
    <StyledBasket>
      <h1>Basket</h1>
      <div>
        <div className="items">
          <BasketItem />
          <BasketItem />
          <BasketItem />
        </div>
        <div className="totals">TOTALS</div>
      </div>
    </StyledBasket>
  );
};
