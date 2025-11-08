import { Dashboard } from "@/components/dashboard/Dashboard";
import { MainHeader } from "@/components/main-header/MainHeader";
import { PAGE } from "@/config/pages.config";

import { Providers } from "@/providers/Providers";
import { getServerAuth } from "@/utils/supabase/get-server-auth";

import { redirect } from "next/navigation";

export default async function HomePage() {
  const user = await getServerAuth();
  if (user) {
    redirect(PAGE.BASE);
  }
  return (
    <Providers>
      <MainHeader />
    </Providers>
  );
}
