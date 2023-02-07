import connectFunc from "@/func/connectFunc";
import Customers from "@/models/Customers";

export default async function handler(req, res) {
  await connectFunc();

  if (req.method === "POST") {
    const data = req.body.data;
    console.log(data);

    if (!data.name || !data.lastName || !data.email)
      return res.status(400).json({
        status: "Failed",
        message: "Invalied Data",
      });
    else {
      try {
        const customer = await Customers.create(data);
        res
          .status(201)
          .json({ status: "Success", message: "Data created", data: customer });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          status: "Failed",
          message: "Err! in storing data",
        });
      }
    }
  }
}
