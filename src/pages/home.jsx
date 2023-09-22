import { styled } from "styled-components";
import products from "../data/products.json";
import { ProductCard } from "../components/product-card";

const StyledHome = styled.div`
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 2rem;

    @media screen and (min-width: 768px) {
      gap: 2rem;
    }

    > div {
      grid-column: span 4;

      @media screen and (min-width: 768px) {
        grid-column: span 2;
      }

      @media screen and (min-width: 1024px) {
        grid-column: span 1;
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
