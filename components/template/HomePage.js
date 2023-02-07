import React from "react";
import Card from "../module/Card";

const HomePage = ({ customer }) => {
  console.log(customer);
  return (
    <div>
      {customer.map((item) => (
        <Card key={item._id} {...item} />
      ))}
    </div>
  );
};

export default HomePage;
