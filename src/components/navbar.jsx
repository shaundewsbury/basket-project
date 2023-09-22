import { styled } from "styled-components";
import { BsFillBasket3Fill } from "react-icons/bs";
import { useShoppingBasket } from "../context/shopping-basket-context";

const StyledNavBar = styled.nav`
  width: 100%;
  background: #014770;
  color: #fff;
  position: sticky;
  top: 0;

  .navBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    max-width: 1280px;
    margin: 0 auto;

    .logo {
      font-size: 1.5rem;
      font-weight: 600;

      @media screen and (min-width: 768px) {
        font-size: 1.75rem;
      }

      @media screen and (min-width: 1024px) {
        font-size: 2rem;
      }
    }

    a {
      position: relative;
      color: #fff;
      text-decoration: none;

      svg {
        width: 1.5rem;
        height: 1.5rem;

        @media screen and (min-width: 768px) {
          width: 1.75rem;
          height: 1.75rem;
        }

        @media screen and (min-width: 1024px) {
          width: 2rem;
          height: 2rem;
        }
      }

      .basketTotalIcon {
        display: flex;
        position: absolute;
        align-items: center;
        justify-content: center;
        bottom: -0.25rem;
        right: -0.25rem;
        width: 1.25rem;
        height: 1.25rem;
        background: red;
        color: #fff;
        border-radius: 50%;
        font-size: 0.75rem;
      }
    }
  }
`;

export const NavBar = () => {
  const { basketQuantity } = useShoppingBasket();
  return (
    <StyledNavBar>
      <div className="navBar">
        <span className="logo">
          <a href="/">The Trainer Store</a>
        </span>
        <a className="basket" href="/basket">
          <BsFillBasket3Fill />
          {basketQuantity > 0 && (
            <div className="basketTotalIcon">{basketQuantity}</div>
          )}
        </a>
      </div>
    </StyledNavBar>
  );
};
