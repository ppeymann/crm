import { Collection, Schema, model, models } from "mongoose";

const customerSchema = new Schema({
  name: {
    type: String,
    requierd: true,
    minLength: 2,
  },
  lastName: {
    type: String,
    requierd: true,
    minLength: 2,
  },
  email: {
    type: String,
    requierd: true,
    minLength: 2,
  },
  phone: String,
  address: String,
  postalCode: Number,
  date: Date, //* adding to my club
  products: {
    type: Array,
    default: [],
  },
  createdAt: {
    //*create account
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: { type: Date, default: () => Date.now() },
});

const Customers = models.Customer || model("Customer", customerSchema);

export default Customers;
