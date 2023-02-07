import connectFunc from "@/func/connectFunc";
import Customers from "@/models/Customers";

export default async function handler(req, res) {
  await connectFunc();

  if (req.method === "GET") {
    const id = req.query.customerId;
    try {
      const customer = await Customers.findById(id);
      res.status(500).json({
        status: "Success",
        data: customer,
      });
    } catch (err) {
      console.log(err);
    }
  }
}
