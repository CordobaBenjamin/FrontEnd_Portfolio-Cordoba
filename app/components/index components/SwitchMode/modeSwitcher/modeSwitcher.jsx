import React, { createContext, useState, useContext } from "react";

let changeColor = '';

// Crear el contexto de idioma
const ModeContext = createContext();

// Hook personalizado para usar el contexto de idioma
const UseMode = () => {
  return useContext(ModeContext);
};

// Crear el LanguageProvider
const ModeProvider = ({ children }) => {
    const [mode, setMode] = useState("light"); // Estado inicial: light

    // Función para cambiar el modo
    const changeMode = (newMode) => {
      setMode(newMode);
    };

    return (
      <ModeContext.Provider value={{ mode, changeMode }}>
        {children}
      </ModeContext.Provider>
    );
};

const ModeSwitcher = () => {

    const { mode, changeMode } = UseMode();

    const toggleMode = () => {
      const newMode = mode === "light" ? "dark" : "light";
      changeMode(newMode);
    };

    return (
      <button onClick={toggleMode} className={`font-bold text-base lg:text-xl`}>
        {mode === "light" ? "Dark" : "Light"}
      </button>
    );
  };

export { ModeSwitcher, UseMode as useMode, ModeProvider };

