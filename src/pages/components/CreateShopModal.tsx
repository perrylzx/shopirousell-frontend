import { useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import { createShop } from "@/services/ShopService";

function CreateShopModal() {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    createShop(values);
    setIsOpen(false);
  };

  return (
    <div>
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
      </Form>
    </div>
  );
}

export default CreateShopModal;
