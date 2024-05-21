import { supabase } from "@/lib/supabase";
import { PropsWithChildren, createContext, useEffect } from "react";

type AuthData = {};

const AuthContext = createContext<AuthData>({});

export default function AuthProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    const fetchSession = async () => {
      const result = await supabase.auth.getSession();
      console.log(result);
    };

    fetchSession();
  }, []);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
