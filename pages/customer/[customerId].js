import CustomerDetailsPage from "@/components/template/customerDetailsPage";
import { useRouter } from "next/router";
import React, { useState } from "react";
import useSWR from "swr";

const Index = () => {
  const [item, setItem] = useState(null);

  const router = useRouter();
  const {
    query: { customerId },
  } = router;

  const { isLoading } = useSWR(`/api/customer/${customerId}`, (url) =>
    fetch(url)
      .then((res) => res.json())
      .then((item) => setItem(item.data))
  );
  if (!isLoading) console.log(item);
  if (item) return <CustomerDetailsPage item={item} />;
};

export default Index;
