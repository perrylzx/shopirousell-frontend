import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const shops = await axios.get(
      `http://localhost:3006/users/${req.query.id}`
    );
    res.send(shops.data);
  } else if (req.method === "POST") {
    const shops = await axios.post(
      `http://localhost:3006/users/${req.query.id}`
    );
    res.send(shops.data);
  }
}
