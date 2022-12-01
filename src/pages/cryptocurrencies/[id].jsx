import { useRouter } from "next/router";
import React from "react";

const Crypto = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>Crypto: {id}</div>;
};

export default Crypto;
