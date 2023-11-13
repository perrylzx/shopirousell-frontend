/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import styled from "styled-components";
import { Avatar, Button, Dropdown, Space } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import firebase from "@/firebase";
import { useUsersEffect } from "@/effects/useUsersEffect";

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
  const { firebaseUser, mutate } = useUsersEffect();
  return (
    <>
      <Navbar>
        <Link style={{ display: "flex" }} href="/">
          <HomeOutlined />
        </Link>
        <Space>
          <Button type="primary" href="/sell">
            Sell
          </Button>
          {firebaseUser ? (
            <Dropdown
              trigger={["click"]}
              menu={{
                items: [
                  {
                    key: "logout",
                    label: (
                      <div
                        onClick={() => {
                          firebase.signOut();
                          mutate();
                        }}
                      >
                        Sign out
                      </div>
                    ),
                  },
                ],
              }}
            >
              <Avatar style={{ cursor: "pointer" }} icon={<UserOutlined />} />
            </Dropdown>
          ) : (
            <a onClick={() => firebase.signIn()}>Sign in</a>
          )}
        </Space>
      </Navbar>
      <ContentContainer>{children}</ContentContainer>
    </>
  );
}

export default Layout;
