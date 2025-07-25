import Chat from "@/components/chat/Chat";
import { Sidebar } from "@/components/layout/sidebar/Sidebar";
import { PAGE } from "@/config/pages.config";
import { getServerAuth } from "@/utils/supabase/get-server-auth";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

export default async function DashboardLayout({ children }: PropsWithChildren) {
  const user = await getServerAuth();
  if (!user) {
    redirect(PAGE.AUTH);
  }
  return (
    <>
      <Sidebar />
      <main>{children}</main>
      <Chat />
    </>
  );
}
