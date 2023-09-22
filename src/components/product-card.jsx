import { styled } from "styled-components";
import { useShoppingBasket } from "../context/shopping-basket-context";
import { AiFillDelete } from "react-icons/ai";

const StyledProductCard = styled.div`
  align-self: start;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 0 #0147700d;
  padding: 1rem 1rem 1.5rem 1rem;

  img {
    border-radius: 4px;
    width: 100%;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    margin: 0;
    margin-bottom: 0.5rem;

    &.price {
      font-weight: 600;
      margin-bottom: 1rem;
    }
  }

  .addToBasketButton {
    width: max-content;
    padding: 0.5rem 1rem;
    background: #014770;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
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
`;

export const ProductCard = ({ id, brand, description, price, image }) => {
  const {
    getItemQuantity,
    increaseBasketQuantity,
    decreaseBasketQuantity,
    removeFromBasket,
  } = useShoppingBasket();
  const quantity = getItemQuantity(id);

  return (
    <StyledProductCard>
      <img src={image} alt="" />
      <p>
        {brand} {description}
      </p>
      <p className="price">£{price}</p>
      {quantity === 0 ? (
        <div
          className="addToBasketButton"
          onClick={() => increaseBasketQuantity(id)}
        >
          Add to Basket
        </div>
      ) : (
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
      )}
    </StyledProductCard>
  );
};
