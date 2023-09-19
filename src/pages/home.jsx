import { styled } from "styled-components";
import products from "../data/products.json";
import { ProductCard } from "../components/product-card";
const StyledHome = styled.div`
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

  .products {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    row-gap: 2rem;

    @media screen and (min-width: 768px) {
      gap: 2rem;
    }

    div {
      grid-column: span 12;

      @media screen and (min-width: 768px) {
        grid-column: span 6;
      }

      @media screen and (min-width: 1024px) {
        grid-column: span 3;
      }
    }
  }
`;

export const Home = () => {
  return (
    <StyledHome>
      <h1>Products</h1>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </StyledHome>
  );
};
