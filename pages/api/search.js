import dbConnect from "./utils/dbConnect";

import Product from "../../models/Product";

export default async function handler(req, res) {
  const { method } = req;

  // connect to database
  await dbConnect();

  switch (method) {
    case "GET":
      res.status(200).json({ success: true });
      break;
    case "POST":
      // search and get product
      try {
        let title = req.body.title;

        const product = await Product.findOne({ title: title });

        res.status(200).json({ success: true, data: product });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
