import { Button, Form, Input, Modal, message } from "antd";
import { createShop } from "@/services/ShopService";
import { useState } from "react";
import { useUsersEffect } from "@/effects/useUsersEffect";
import Upload, { UploadChangeParam } from "antd/lib/upload";
import firebase from "@/firebase";
import { useForm } from "antd/lib/form/Form";
import { UploadOutlined } from "@ant-design/icons";

function CreateShop() {
  const [visible, setVisible] = useState(false);
  const { dbUser, mutate } = useUsersEffect();
  const [form] = useForm();

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

  const onUploadChange = async (info: UploadChangeParam) => {
    // if (info.file.status !== "uploading") {
    // }
    if (info.file.status === "done") {
      const imageUrl = await firebase.uploadProductImage(
        info.file.originFileObj
      );
      form.setFieldsValue({ imageUrl });
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <>
      <Button type="link" onClick={() => showModal()}>
        Create Shop
      </Button>
      <Modal
        title="Create Shop"
        open={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form} name="createShopForm" onFinish={onFinish}>
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
          <Form.Item
            name="imageUrl"
            label="Upload Image"
            rules={[{ required: true }]}
          >
            <Upload onChange={onUploadChange}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
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
