import axios from "axios";

export const createUser = async (id: string) => {
  const res = await axios.post(`/api/users/${id}`);
  return res.data;
};

export const getUser = async (id: string) => {
  const res = await axios.get(`/api/users/${id}`);
  return res.data;
};
