import React, { createContext, useState, useEffect } from 'react';
import { UserData } from '@/data/userData';

interface AuthContextType {
  user: UserData | null;
  isAdmin: boolean;
  setUser: (user: UserData | null) => void; // Asegúrate de que setUser está en el contexto
  login: (userData: UserData) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null);

  // Asegúrate de que isAdmin depende del rol del usuario
  const isAdmin = user ? user.role === 'admin' : false;

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedAdmin = localStorage.getItem('admin');

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else if (storedAdmin) {
      setUser(JSON.parse(storedAdmin));
    }
  }, []);

  const login = (userData: UserData) => {
    setUser(userData);

    if (userData.role === 'admin') {
      localStorage.setItem('admin', JSON.stringify(userData));
    } else {
      localStorage.setItem('user', JSON.stringify(userData));
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('admin');
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
