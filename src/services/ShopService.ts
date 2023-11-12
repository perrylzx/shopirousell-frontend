import axios from "axios";

export const getShopById = async (id: number) => {
  const res = await axios.get(`/api/shops/${id}`);
  return res.data;
};

export const createShop = async (shopData: {
  name: string;
  description: string;
}) => {
  const res = await axios.post("/api/shops", shopData);
  return res.data;
};
