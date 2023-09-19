import { createContext, useContext, useState } from "react";

const ShoppingBasketContext = createContext({});

export const useShoppingBasket = () => {
  return useContext(ShoppingBasketContext);
};

export const ShoppingBasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([]);

  console.log(basketItems);

  const getItemQuantity = (id) => {
    return basketItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseBasketQuantity = (id) => {
    setBasketItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseBasketQuantity = (id) => {
    setBasketItems((currItems) => {
      if (currItems.find((item) => item.id === id).quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromBasket = (id) => {
    setBasketItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };

  return (
    <ShoppingBasketContext.Provider
      value={{
        getItemQuantity,
        increaseBasketQuantity,
        decreaseBasketQuantity,
        removeFromBasket,
      }}
    >
      {children}
    </ShoppingBasketContext.Provider>
  );
};
