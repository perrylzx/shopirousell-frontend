/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Card, Row, Space } from "antd";
import { Product } from "@/types/Product";
import styled from "styled-components";
import { DeleteOutlined } from "@ant-design/icons";
import { colors } from "@/styles/globals";
import Image from "next/image";

const StyledCard = styled(Card)`
  min-width: 185px;
  border-radius: 8px;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: 600;
`;
const Name = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

function ProductCard({
  product,
  deleteProduct,
}: {
  product: Product;
  deleteProduct: () => void;
}) {
  const { name, description, price } = product;
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <StyledCard
      headStyle={{ padding: "8px" }}
      title={
        <div style={{ position: "relative", height: "150px" }}>
          <Image fill alt="productImage" src={product.imageUrl} />
        </div>
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Space>
        <Name>{name}</Name>
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
      </Space>
      <Price>${price.toFixed(2)}</Price>
      <p>{description}</p>
    </StyledCard>
  );
}

export default ProductCard;
