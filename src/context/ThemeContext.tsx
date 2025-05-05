import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Definimos el contexto para el tema
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Definimos el proveedor del tema
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Estado para el tema, se inicia con 'light' o el valor guardado en localStorage
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    // Aplicar la clase correspondiente en el <html> al cambiar el tema
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    
    // Guardar el tema en localStorage
    localStorage.setItem('theme', theme);
  }, [theme]); // Este efecto se ejecuta cada vez que cambia el tema

  // Función para alternar entre el tema claro y oscuro
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      console.log(newTheme); // Asegúrate de que el nuevo tema se está actualizando
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook para acceder al contexto
export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
