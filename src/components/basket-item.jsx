import { styled } from "styled-components";
import { AiFillDelete } from "react-icons/ai";
import { useShoppingBasket } from "../context/shopping-basket-context";
import products from "../data/products.json";

const StyledBasketItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 0 #0147700d;
  padding: 1rem;

  img {
    max-width: 6rem;
    border-radius: 4px;
  }

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    gap: 1rem;

    @media screen and (min-width: 768px) {
      flex-direction: row;
    }

    .productInBasket {
      display: flex;
      gap: 0.5rem;
      align-items: center;

      .controls {
        display: flex;
        width: max-content;
        padding: 0.5rem;
        background: #f5f5f5;
        border-radius: 8px;
        font-weight: 600;

        > div {
          display: flex;
          width: max-content;
          align-items: center;
          justify-content: center;
          width: 1.5rem;
          height: 1.5rem;
        }

        .removeQuantity,
        .addQuantity {
          cursor: pointer;
        }
      }

      .removeButton {
        cursor: pointer;
        width: 1.25rem;
        height: 1.25rem;

        svg {
          width: 1.25rem;
          height: 1.25rem;
        }
      }
    }
  }
`;

export const BasketItem = ({ id, quantity }) => {
  const { decreaseBasketQuantity, increaseBasketQuantity, removeFromBasket } =
    useShoppingBasket();

  const item = products.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <StyledBasketItem>
      <img src={item.image} alt="" />
      <div className="container">
        <div className="productDetails">
          <p>
            {item.brand} {item.description}
          </p>
          <p className="price">£{item.price}</p>
        </div>

        <div className="productInBasket">
          <div className="controls">
            <div
              className="removeQuantity"
              onClick={() => decreaseBasketQuantity(id)}
            >
              -
            </div>
            <div className="quantity">{quantity}</div>
            <div
              className="addQuantity"
              onClick={() => increaseBasketQuantity(id)}
            >
              +
            </div>
          </div>
          <div className="removeButton" onClick={() => removeFromBasket(id)}>
            <AiFillDelete />
          </div>
        </div>
      </div>
    </StyledBasketItem>
  );
};
