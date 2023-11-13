/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Card } from "antd";
import { Product } from "@/types/Product";
import styled from "styled-components";
import { DeleteOutlined } from "@ant-design/icons";
import { colors } from "@/styles/globals";

const StyledCard = styled(Card)`
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

function ProductCard({
  product,
  deleteProduct,
}: {
  product: Product;
  deleteProduct: () => void;
}) {
  const { name, description, price, shopId } = product;
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <StyledCard
      title={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>{name}</span>
          {isHovered && (
            <a>
              {/* todo: make this a button */}
              <DeleteOutlined
                style={{ color: colors.accentRed[4] }}
                onClick={deleteProduct}
              >
                Delete
              </DeleteOutlined>
            </a>
          )}
        </div>
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p>shopId {shopId}</p>
      <p>{description}</p>
      <p>Price: ${price.toFixed(2)}</p>
    </StyledCard>
  );
}

export default ProductCard;
