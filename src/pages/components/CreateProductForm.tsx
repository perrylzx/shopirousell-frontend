import { Button, Form, Input, InputNumber, Row, Select } from "antd";
import { createProduct } from "@/services/ProductService";
import { useProductsEffect } from "@/effects/useProductsEffect";
import { useRouter } from "next/router";
import { useUsersEffect } from "@/effects/useUsersEffect";
import firebase from "@/firebase";
import CreateShopModal from "./CreateShopModal";

function CreateProductForm() {
  const { push } = useRouter();
  const { dbUser, firebaseUser, mutate } = useUsersEffect();

  const onFinish = (values: any) => {
    if (!dbUser) {
      firebase.signIn();
      return;
    }
    createProduct(values);
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
        <div style={{ display: "flex", width: "100%" }}>
          {firebaseUser && dbUser?.shops && (
            <Form.Item
              style={{ flexGrow: "1" }}
              name="shopId"
              label="Shop"
              rules={[{ required: true }]}
            >
              <Select>
                {dbUser.shops.map((shop) => (
                  <span key={shop.id}>{shop.name}</span>
                ))}
              </Select>
            </Form.Item>
          )}
          {dbUser && <CreateShopModal mutate={mutate} dbUser={dbUser} />}
        </div>
        <Form.Item>
          <Button htmlType="submit">Save</Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default CreateProductForm;
