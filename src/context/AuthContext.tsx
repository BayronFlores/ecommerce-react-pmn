import React, { createContext, useState, useEffect } from 'react';
import { UserData } from '../data/userData';

interface AuthContextType {
  user: UserData | null;
  setUser: React.Dispatch<React.SetStateAction<UserData | null>>; 
  login: (userData: UserData) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null); // Estado inicial del usuario de forma local

  useEffect(() => {
    // Cargar sesión desde localStorage (opcional)
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Si hay un usuario guardado, lo cargamos en el estado
    }
  }, []); // Solo se ejecuta una vez al montar el componente

  const login = (userData: UserData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Guardar el usuario en localStorage del navegador
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
