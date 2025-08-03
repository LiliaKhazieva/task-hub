// import { createClient } from "@/utils/supabase/server";
// import { redirect } from "next/navigation";

// export async function ConfirmPage() {
//   const supabase = await createClient();
//   const { data, error } = await supabase.auth.getUser();
//   if (error || !data?.user) {
//     redirect("/auth");
//   }
//   return data.user;
// }
