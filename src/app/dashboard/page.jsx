"use client";

import { isAuthenticated } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const router = useRouter();
  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace("/login");
    }
  }, [router]);
  if (!isAuthenticated) {
    return null;
  }

  return <h1 className="text-3xl font-bold">Dashboard</h1>;
}
