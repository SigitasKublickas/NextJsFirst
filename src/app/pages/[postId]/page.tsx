import { useRouter } from "next/router";
import React from "react";

const Page = () => {
  const router = useRouter();
  return <div>post: {router.query.slug}</div>;
};
export default Page();
