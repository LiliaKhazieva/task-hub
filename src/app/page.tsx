import { StartPage } from "@/components/start-page/StartPage";
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
      <StartPage />
    </Providers>
  );
}
