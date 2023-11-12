import React from "react";
import { Card } from "antd";
import { Product } from "@/types/Product";
import styled from "styled-components";

function ProductCard({ product }: { product: Product }) {
  const { name, description, price, shopId } = product;
  return (
    <Card title={name}>
      <p>shopId {shopId}</p>
      <p>{description}</p>
      <p>Price: ${price.toFixed(2)}</p>
    </Card>
  );
}

export default ProductCard;
