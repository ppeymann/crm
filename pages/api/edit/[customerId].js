import connectFunc from "@/func/connectFunc";
import Customers from "@/models/Customers";

export default async function handler(req, res) {
  await connectFunc();

  if (req.method === "PATCH") {
    const id = req.query.customerId;
    const data = req.body.data;

    try {
      const customer = await Customers.findOne({ _id: id });
      customer.name = data.name;
      customer.lastName = data.lastName;
      customer.email = data.email;
      customer.phone = data.phone;
      customer.address = data.address;
      customer.postalCode = data.postalCode;
      customer.date = data.date;
      customer.products = data.products;
      customer.upadtedAt = Date.now();
      customer.save();
      res.status(200).json({ status: "Success", data: customer });
    } catch (err) {
      console.log(err);
      res.status(500).json({ status: "Failed", message: "Err!" });
    }
  }
}
