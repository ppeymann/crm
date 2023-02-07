import CustomerEditPage from "@/components/template/customerEditPage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Index = () => {
  const [item, setItem] = useState(null);

  const router = useRouter();
  const {
    query: { customerId },
    isReady,
  } = router;

  useEffect(() => {
    if (isReady) {
      fetch(`/api/customer/${customerId}`)
        .then((res) => res.json())
        .then((data) => setItem(data.data));
    }
  }, [isReady]);

  if (item) return <CustomerEditPage item={item} id={customerId} />;
};

export default Index;
