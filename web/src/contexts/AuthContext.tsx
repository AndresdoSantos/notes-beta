import { createContext, useCallback, useState } from 'react';

export type User = {
  user: {
    email: string;
    email_verified: boolean;
    family_name: string;
    given_name: string;
    locale: string;
    name: string;
    nickname: string;
    picture: string;
    sub: string;
    updated_at: string;
  };
};

type AuthContextData = {
  session?: User;
  getSession(value?: User): void;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: { children: JSX.Element }) {
  const [session, setSession] = useState<User | undefined>(undefined);

  const getSession = useCallback((value?: User) => {
    setSession(value);
  }, []);

  return (
    <AuthContext.Provider value={{ getSession, session }}>
      {children}
    </AuthContext.Provider>
  );
}
