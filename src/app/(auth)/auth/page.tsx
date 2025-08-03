import { Auth } from "./Auth";
import { redirect } from "next/navigation";
import { PAGE } from "@/config/pages.config";

import { getServerAuth } from "@/utils/supabase/get-server-auth";

export default async function AuthPage() {
  const user = await getServerAuth();
  if (user) {
    redirect(PAGE.BASE);
  }
  return <Auth />;
}
