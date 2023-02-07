import connectFunc from "@/func/connectFunc";
import Customers from "@/models/Customers";

export default async function handler(req, res) {
  await connectFunc();

  if (req.method === "DELETE") {
    const id = req.query.customerId;

    try {
      await Customers.deleteOne({ _id: id });
      res.status(200).json({ status: "Success", message: "Data Deleted" });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({
        status: "Failed",
        message: "Err! Delete is not Successful",
      });
    }
  }
}
