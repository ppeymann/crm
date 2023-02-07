import connectingDB from "@/utils/connectingDB";

export default async function connectFunc() {
  try {
    await connectingDB();
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ status: "Failed", message: "Err! in connecting to DB" });
    return;
  }
}
