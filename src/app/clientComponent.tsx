"use client";
import { useEffect, useState } from "react";

export default function ClientComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      console.log(loading);
    }, 2000);
  }, [loading]);

  return <>{loading != true ? <div className="loader__wrapper"><div className="loader"></div></div> : children}</>;
}
