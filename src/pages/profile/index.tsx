import { useUsersEffect } from "@/effects/useUsersEffect";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";

const ProductsContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  padding: 8px 0;
  margin-bottom: 16px;
  gap: 16px;
  & > div {
    flex-shrink: 0;
  }
`;

const ListingsContainer = styled.div`
  box-shadow: 0 3px 10px 0 rgba(44, 44, 45, 0.07),
    inset 0 0 0 1px rgba(44, 44, 45, 0.07);
  padding: 16px;
  border-radius: 16px;
`;

function Profile() {
  // change /users backend api to only return user related info, not all child shops and products
  const { dbUser } = useUsersEffect();
  return (
    <div>
      <ListingsContainer>
        {dbUser?.shops.map((shop) => (
          <div key={shop.id}>
            <h1
              style={{
                marginBottom: "8px",
                fontSize: "18px",
              }}
            >
              {shop.name}
            </h1>
            <ProductsContainer>
              {shop.products.map((product) => (
                <ProductCard
                  deleteProduct={() => console.log("fdsa")}
                  product={product}
                  key={product.id}
                />
              ))}
            </ProductsContainer>
          </div>
        ))}
      </ListingsContainer>
    </div>
  );
}

export default Profile;
