import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
  message,
} from "antd";
import { createProduct } from "@/services/ProductService";
import { useRouter } from "next/router";
import { useUsersEffect } from "@/effects/useUsersEffect";
import firebase from "@/firebase";
import { UploadOutlined } from "@ant-design/icons";
import { UploadChangeParam } from "antd/es/upload";
import { useForm } from "antd/lib/form/Form";
import CreateShopModal from "./CreateShopModal";

function CreateProductForm() {
  const { push } = useRouter();
  const { dbUser, firebaseUser } = useUsersEffect();
  const [form] = useForm();
  const onFinish = async (values: any) => {
    if (!dbUser) {
      firebase.signIn();
      return;
    }
    await createProduct(values);
    push("/profile");
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
      <h1>Create Product</h1>
      <Form form={form} name="createProductForm" onFinish={onFinish}>
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
          {dbUser && <CreateShopModal />}
        </div>
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
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default CreateProductForm;
