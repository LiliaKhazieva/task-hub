"use server";
import { USERS } from "./components/tasks/tasks.data";
import { createAdminClient } from "./utils/supabase/server";

export async function seedAuthUsers() {
  const supabase = createAdminClient();
  //   const users = await supabase.auth.admin.listUsers();
  //   for (const user of users.data.users) {
  //     await supabase.auth.admin.deleteUser(user.id);
  //   }
  for (const user of USERS) {
    const { data } = await supabase.auth.admin.createUser({
      id: user.id,
      email: user.email,
      password: "123456",
    });
    console.log("seeded:", data?.user?.id);
  }
}
