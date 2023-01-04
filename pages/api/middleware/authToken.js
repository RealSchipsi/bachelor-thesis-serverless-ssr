import dbConnect from "../utils/dbConnect";

import Customer from "../../../models/Customer";

import { verify } from "jsonwebtoken";

// authorization
const authToken = async (req, res) => {
  // connect to database
  await dbConnect();

  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).send({ error: "Bad request" });
  }
  const token = authorization.replace("Bearer ", "");
  const customer = await verify(
    token,
    process.env.JWT_KEY,
    async (err, payload) => {
      if (err) {
        return res.status(401).send({ error: "Bad request" });
      }
      const customerId = payload;
      const customerObj = await Customer.findById(customerId.customerId);

      return customerObj;
    }
  );

  return customer;
};

export default authToken;
