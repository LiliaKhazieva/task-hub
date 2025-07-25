import { PAGE } from "@/config/pages.config";
import { createClient } from "@/utils/supabase/client";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

export default async function ConfirmPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth");
  }
  return <p>Hello {data.user.email}</p>;
}
