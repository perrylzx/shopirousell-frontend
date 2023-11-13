import styled from "styled-components";
import { useProductsEffect } from "@/effects/useProductsEffect";
import { Button } from "antd";
import FadeIn from "react-fade-in/lib/FadeIn";
import ProductCard from "./components/ProductCard";

const StyledMain = styled.main`
  font-family: sans-serif;
`;

const ProductGrid = styled(FadeIn)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
`;
export default function Home() {
  const { products } = useProductsEffect();

  return (
    <StyledMain>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>Products</h1>
        {products && (
          <ProductGrid transitionDuration={100}>
            {products.map((product) => (
              <ProductCard
                deleteProduct={() => console.log("e")}
                key={product.id}
                product={product}
              />
            ))}
          </ProductGrid>
        )}
      </div>
    </StyledMain>
  );
}
