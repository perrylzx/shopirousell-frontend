import { Button, Form, Input, Modal } from "antd";
import { createShop } from "@/services/ShopService";
import { useState } from "react";
import { User } from "@/types/User";

function CreateShop({ dbUser, mutate }: { dbUser: User; mutate: any }) {
  const [visible, setVisible] = useState(false);

  const onFinish = async (values: any) => {
    await createShop({ ...values, userId: dbUser?.id });
    mutate();
    setVisible(false);
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={() => showModal()}>
        Create Shop
      </Button>
      <Modal
        title="Create Shop"
        open={visible}
        onCancel={handleCancel}
        footer={null}
      >
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
      </Modal>
    </>
  );
}

export default CreateShop;
