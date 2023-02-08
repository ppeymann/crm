import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const CustomerDetailsPage = ({ item }) => {
  const router = useRouter();

  const deleteHandler = async () => {
    const res = await fetch(`/api/delete/${item._id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    data.status === "Success" && router.push("/");
  };

  return (
    <div className="customer-detail">
      <h4>Customer's Details</h4>
      <div className="customer-detail__main">
        <div className="customer-detail__item">
          <span>Name:</span>
          <p>{item.name}</p>
        </div>
        <div className="customer-detail__item">
          <span>Last Name:</span>
          <p>{item.lastName}</p>
        </div>
        <div className="customer-detail__item">
          <span>Phone:</span>
          <p>{item.phone}</p>
        </div>
        <div className="customer-detail__item">
          <span>Address:</span>
          <p>{item.address}</p>
        </div>
        <div className="customer-detail__item">
          <span>Postal Code:</span>
          <p>{item.postalCode}</p>
        </div>
        <div className="customer-detail__item">
          <span>Date:</span>
          <p>{moment(item.date).utc().format("DD-MM-YYYY")}</p>
        </div>
      </div>
      <div className="customer-detail__products">
        <span>Name</span>
        <span>Price</span>
        <span>Qty</span>
        {item.products.map((item, index) => (
          <React.Fragment key={index}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.qty}</p>
          </React.Fragment>
        ))}
      </div>
      <div className="customer-detail__buttons">
        <p>Edit or Delete</p>
        <button onClick={deleteHandler}>Delete</button>
        <Link href={`/edit/${item._id}`}>Edit</Link>
      </div>
    </div>
  );
};

export default CustomerDetailsPage;
