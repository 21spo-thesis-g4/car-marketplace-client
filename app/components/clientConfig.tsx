"use client";

import { useEffect } from "react";

export default function ClientConfig() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

  useEffect(() => {
    console.log("✅ API URL:", apiUrl);
  }, []);

  return null;
}
