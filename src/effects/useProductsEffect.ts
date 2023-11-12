import { Product } from "@/types/Product";
import axios from "axios";
import useSWR from "swr";

export const useProductsEffect = () => {
  const { data: products, mutate } = useSWR<Product[], unknown, string>(
    "/api/products",
    async (key) => {
      const res = await axios.get(key);
      return res.data;
    }
  );
  return { products, mutate };
};
