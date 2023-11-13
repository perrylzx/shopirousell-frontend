import { Product } from "@/types/Product";
import { Shop } from "@/types/Shop";
import axios from "axios";
import useSWR from "swr";

export const useShopsEffect = () => {
  const { data: shops, mutate } = useSWR<Shop[], unknown, string>(
    "/api/shops",
    async (key) => {
      const res = await axios.get(key);
      return res.data;
    }
  );
  return { shops, mutate };
};
