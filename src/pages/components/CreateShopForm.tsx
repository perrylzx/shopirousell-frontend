import { useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import { createShop } from "@/services/ShopService";

function CreateShop({ userId }: { userId: string }) {
  const onFinish = (values: any) => {
    createShop({ ...values, userId });
  };

  return (
    <>
      <h1>Create Shop</h1>
      <Form name="createShopForm" onFinish={onFinish}>
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input the name of your shop!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input a description for your shop!",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Save</Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default CreateShop;
