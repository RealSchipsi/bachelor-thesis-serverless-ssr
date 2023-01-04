import dbConnect from "./utils/dbConnect";

import Customer from "../../models/Customer";

import { genSalt, hash } from "bcryptjs";

export default async function handler(req, res) {
  const { method } = req;

  // connect to database
  await dbConnect();

  switch (method) {
    case "GET":
      try {
        res.status(400).json({ success: false });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    // create new customer
    case "POST":
      try {
        let email = req.body.email;
        let password = req.body.password;

        const existingCustomer = await Customer.findOne({ email: email });

        if (existingCustomer) {
          return res
            .status(400)
            .json({ existingCustomer: true, success: false });
        }

        if (email == "" || password == "") {
          return res.status(400).json({ success: false });
        }

        const newCustomer = new Customer({
          email: email,
          password: password,
        });

        // hash password
        genSalt(14, (err, salt) =>
          hash(newCustomer.password, salt, (err, hash) => {
            if (err) throw err;
            newCustomer.password = hash;
            // save customer
            try {
              newCustomer.save().then(async (cus) => {
                return res
                  .status(200)
                  .json({ success: true, existingCustomer: false });
              });
            } catch (error) {
              console.log(error);
              return res.status(400).json({ success: false });
            }
          })
        );
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
