import HomePage from "@/components/template/HomePage";
import connectFunc from "@/func/connectFunc";
import Customers from "@/models/Customers";
import React from "react";

const Home = ({ customer }) => {
  return <HomePage customer={customer} />;
};

export default Home;

export async function getServerSideProps() {
  try {
    await connectFunc();
    const customer = await Customers.find();
    return {
      props: {
        customer: JSON.parse(JSON.stringify(customer)),
      },
    };
  } catch (err) {
    console.log(err);
    return {
      notFound: true,
    };
  }
}
