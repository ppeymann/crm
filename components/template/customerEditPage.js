import React, { useState } from "react";
import Form from "../module/Form";
import { useRouter } from "next/router";
import axios from "axios";
import moment from "moment/moment";

const CustomerEditPage = ({ item, id }) => {
  const date = item.date ? moment(item.date).utc().format("YYYY-MM-DD") : "";

  const [form, setForm] = useState({
    name: item.name,
    lastName: item.lastName,
    email: item.email,
    phone: item.phone || "",
    address: item.address || "",
    postalCode: item.postalCode || "",
    products: item.products || "",
    date: date,
  });

  const router = useRouter();

  const cancelHandler = () => {
    router.push("/");
  };

  const editHandler = async () => {
    const res = await axios.patch(`/api/edit/${id}`, { data: form });
    const data = await res.data;
    console.log(data);
    router.push("/");
  };

  return (
    <div className="customer-page">
      <h4>Edit Customer</h4>
      <Form form={form} setForm={setForm} />
      <div className="customer-page__buttons">
        <button className="first" onClick={cancelHandler}>
          Cancel
        </button>
        <button className="second" onClick={editHandler}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default CustomerEditPage;
