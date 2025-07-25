"use client";

import client from "@/api/client";
import type { User } from "@supabase/supabase-js";
import { createContext, ReactNode, useEffect, useState } from "react";

export interface IAuthContextProps {
  user: User | null;
  loading: boolean;
}

const AuthContext = createContext<IAuthContextProps>({
  user: {},
  loading: false,
} as IAuthContextProps);
const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.auth.getSession().then(({ data }) => {
      setUser(data?.session?.user || null);
      setLoading(false);
    });
    const { data: listener } = client.auth.onAuthStateChange((e, session) => {
      setUser(session?.user || null);
    });
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
