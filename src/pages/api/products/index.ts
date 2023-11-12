import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

// create validation
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const shops = await axios.get("http://localhost:3006/products");
    res.send(shops.data);
  } else if (req.method === "POST") {
    const shops = await axios.post(`http://localhost:3006/products`, req.body);
    res.send(shops.data);
  }
}
