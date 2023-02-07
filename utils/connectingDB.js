const { default: mongoose } = require("mongoose");

async function connectingDB() {
  if (mongoose.connections[0].readyState) return;
  mongoose.set("strictQuery", false);
  await mongoose.connect(process.env.CONNECTION_STRING);
  console.log("Connected to DB");
}

export default connectingDB;
