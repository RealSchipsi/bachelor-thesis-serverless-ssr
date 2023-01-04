import dbConnect from "./utils/dbConnect";

import Product from "../../models/Product";

export default async function handler(req, res) {
  const { method } = req;

  // connect to database
  await dbConnect();

  switch (method) {
    // get all products
    case "GET":
      try {
        const products = await Product.find({});

        res.status(200).json({ success: true, data: products });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    // get products with of specific category
    case "POST":
      try {
        let categoryId = req.body.categoryId;

        if (categoryId == "all") {
          // get all products
          const products = await Product.find({});
          res.status(200).json({ success: true, data: products });
        } else {
          // get products of specific category
          const products = await Product.find({ categorynumber: categoryId });
          res.status(200).json({ success: true, data: products });
        }
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
