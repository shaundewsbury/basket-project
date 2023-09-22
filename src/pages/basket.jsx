import { styled } from "styled-components";
import { BasketItem } from "../components/basket-item";
import { useShoppingBasket } from "../context/shopping-basket-context";

import products from "../data/products.json";

const StyledBasket = styled.div`
  h1 {
    font-size: 1.25rem;

    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    .items {
      grid-column: span 2;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      @media screen and (min-width: 1024px) {
        grid-column: span 1;
      }
    }

    .totals {
      grid-column: span 2;
      display: flex;
      flex-direction: column;
      align-self: start;
      align-items: start;
      gap: 1rem;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 0 #0147700d;
      padding: 1rem;

      @media screen and (min-width: 1024px) {
        grid-column: span 1;
      }

      h3 {
        width: 100%;
        font-size: 1.25rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid #f5f5f5;
      }

      .subTotalItem,
      .totalItem {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }

      .totalItem {
        p {
          font-size: 1.25rem;
          font-weight: 600;
        }
      }

      .button {
        align-self: stretch;
        text-align: center;
        padding: 0.5rem 1rem;
        background: #014770;
        color: #fff;
        border-radius: 4px;
        cursor: pointer;
      }
    }

    .emptyBasket {
      grid-column: span 2;

      p {
        font-size: 1rem;
      }
    }
  }
`;

export const Basket = () => {
  const { basketItems } = useShoppingBasket();

  const itemDeliveryCharge = 5;

  const productTotal = basketItems.reduce((total, basketItem) => {
    const item = products.find((i) => i.id === basketItem.id);
    return total + item.price * basketItem.quantity;
  }, 0);

  const deliveryTotal = basketItems.reduce((total, basketItem) => {
    products.find((i) => i.id === basketItem.id);
    return total + itemDeliveryCharge * basketItem.quantity;
  }, 0);

  return (
    <StyledBasket>
      <h1>Basket</h1>
      <div>
        {basketItems.length > 0 ? (
          <>
            <div className="items">
              {basketItems.map((item) => (
                <BasketItem key={item.id} {...item} />
              ))}
            </div>
            <div className="totals">
              <h3>Order Summary</h3>
              <div className="subTotalItem">
                <p>Order</p>
                <p>£{productTotal}</p>
              </div>
              <div className="subTotalItem">
                <p>Delivery</p>
                <p>£{deliveryTotal}</p>
              </div>
              <div className="totalItem">
                <p>Total</p>
                <p>£{productTotal + deliveryTotal}</p>
              </div>
              <div className="button">Proceed to Checkout</div>
            </div>
          </>
        ) : (
          <div className="emptyBasket">
            <p>No items currently in your basket.</p>
          </div>
        )}
      </div>
    </StyledBasket>
  );
};
