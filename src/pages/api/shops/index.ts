import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

// create validation
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const shops = await axios.post(`http://localhost:3006/shops`, req.body);
    res.send(shops.data);
  }
}
