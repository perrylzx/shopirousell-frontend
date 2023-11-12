import { Product } from "./Product";

export type Shop = {
  id: number;
  name: string;
  description: string;
  products: Product[];
};
