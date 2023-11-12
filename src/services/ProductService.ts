import axios from "axios";

export async function getAllProducts() {
  const res = await axios.get("/api/products");
  return res.data;
}

export function createProduct(productData: {
  shopId: number;
  name: string;
  description: string;
  price: number;
}) {
  return axios.post("/api/products", productData);
}
