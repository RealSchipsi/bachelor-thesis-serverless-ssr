import dbConnect from "./utils/dbConnect";

import Customer from "../../models/Customer";

import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

export default async function handler(req, res) {
  const { method } = req;

  // connect to database
  await dbConnect();

  switch (method) {
    case "GET":
      res.status(200).json({ success: true });
      break;
    case "POST":
      // signin customer
      try {
        let email = req.body.email;
        let password = req.body.password;

        const customer = await Customer.findOne({ email: email });

        // check if customer exists
        if (!customer) {
          res.status(400).json({ email: false, password: false });
        } else {
          // check password
          compare(password, customer.password, async function (err, isMatch) {
            if (isMatch == true) {
              // create jsonwebtoken
              const token = sign(
                { customerId: customer._id },
                process.env.JWT_KEY
              );

              // send token to frontend
              res.status(200).json({ email: true, password: true, token });
            } else {
              res.status(400).json({ email: true, password: false });
            }
          });
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
