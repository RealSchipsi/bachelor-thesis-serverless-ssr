import dbConnect from "./utils/dbConnect";

import Category from "../../models/Category";

export default async function handler(req, res) {
  const { method } = req;

  // connect to database
  await dbConnect();

  switch (method) {
    // get categories
    case "GET":
      try {
        const categories = await Category.find({});

        res.status(200).json({ success: true, data: categories });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      res.status(200).json({ success: true });
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
