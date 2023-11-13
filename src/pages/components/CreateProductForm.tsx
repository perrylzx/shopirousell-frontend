import { Button, Form, Input, InputNumber, Select } from "antd";
import { createProduct } from "@/services/ProductService";
import { useProductsEffect } from "@/effects/useProductsEffect";
import { useRouter } from "next/router";
import { useUsersEffect } from "@/effects/useUsersEffect";
import firebase from "@/firebase";

function CreateProductForm() {
  const { mutate } = useProductsEffect();
  const { push } = useRouter();
  const { dbUser } = useUsersEffect();

  const onFinish = (values: any) => {
    if (!dbUser) {
      firebase.signIn();
      return;
    }
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
          <Select>
            {dbUser?.shops ? (
              dbUser.shops.map((shop) => <span key={shop.id}>{shop.name}</span>)
            ) : (
              <Button>Create shop</Button>
            )}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Save</Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default CreateProductForm;
