import { useState } from "react";
import { Modal, Button, Form, Input, InputNumber } from "antd";
import { createProduct } from "@/services/ProductService";
import { useProductsEffect } from "@/effects/useProductsEffect";

function CreateProductModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { mutate } = useProductsEffect();

  const showModal = () => {
    setIsOpen(true);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const onFinish = (values: any) => {
    createProduct(values);
    setIsOpen(false);
    mutate();
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Create Product
      </Button>
      <Modal
        title="Create Product"
        open={isOpen}
        onCancel={handleCancel}
        okButtonProps={{ htmlType: "submit", form: "createProductForm" }}
      >
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
          <Form.Item name="shopId" label="Shop ID" rules={[{ required: true }]}>
            <InputNumber />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default CreateProductModal;
