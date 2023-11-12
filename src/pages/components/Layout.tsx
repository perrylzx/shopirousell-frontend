import React from "react";
import styled from "styled-components";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import Image from "next/image";
import { HomeOutlined } from "@ant-design/icons";
import Link from "next/link";

const ContentContainer = styled.div`
  padding: 24px 24px;
  @media (min-width: 768px) {
    padding: 48px 96px;
  }
  @media (min-width: 1024px) {
    padding: 96px 192px;
  }
  @media (min-width: 1440px) {
    padding: 96px 384px;
  }
`;

const Navbar = styled.div`
  display: flex;
  padding: 8px 32px;
  background: white;
  position: sticky;
  justify-content: space-between;
`;

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar>
        <Link style={{ display: "flex" }} href="/">
          <HomeOutlined />
        </Link>
        <Button type="primary" href="/sell">
          Sell
        </Button>
      </Navbar>
      <ContentContainer>{children}</ContentContainer>
    </>
  );
}

export default Layout;
