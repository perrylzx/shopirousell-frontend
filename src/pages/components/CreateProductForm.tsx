import { useState } from "react";
import {
  Modal,
  Button,
  Form,
  Input,
  InputNumber,
  Dropdown,
  Select,
} from "antd";
import { createProduct } from "@/services/ProductService";
import { useProductsEffect } from "@/effects/useProductsEffect";
import { Shop } from "@/types/Shop";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";

function CreateProductForm({ shops }: { shops: Shop[] }) {
  const { mutate } = useProductsEffect();
  const { push } = useRouter();

  const onFinish = (values: any) => {
    createProduct(values);
    mutate();
    push("/");
  };

  return (
    <>
      <h1>Create Product</h1>
      <Form name="createProductForm" onFinish={onFinish}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="price" label="Price" rules={[{ required: true }]}>
          <InputNumber />
        </Form.Item>
        <Form.Item name="shopId" label="Shop" rules={[{ required: true }]}>
          <Select
            options={shops.map((shop) => ({
              key: shop.id,
              label: shop.name,
              value: shop.id,
            }))}
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Save</Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default CreateProductForm;
