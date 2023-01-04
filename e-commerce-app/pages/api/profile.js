import dbConnect from "./utils/dbConnect";
import authToken from "./middleware/authToken";

import Customer from "../../models/Customer";

export default async function handler(req, res) {
  // connect to database
  await dbConnect();

  // middleware for authentication
  const customer = await authToken(req, res);

  const { method } = req;

  switch (method) {
    // GET profile data
    case "GET":
      try {
        res.status(200).json({ success: true, data: customer });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    // Update profile data
    case "POST":
      let email = req.body.email;

      await Customer.findOneAndUpdate(
        { _id: customer._id },
        {
          email: email,
        }
      );

      res.status(200).json({ success: true });
    default:
      res.status(400).json({ success: false });
      break;
  }
}
