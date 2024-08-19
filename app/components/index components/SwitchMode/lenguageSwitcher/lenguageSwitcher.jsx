import React, { createContext, useState, useContext } from "react";


// Crear el contexto de idioma
const LanguageContext = createContext();

// Hook personalizado para usar el contexto de idioma
const UseLanguage = () => {
  return useContext(LanguageContext);
};

// Crear el LanguageProvider
const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("en"); // Estado inicial: inglés

    // Función para cambiar el idioma
    const changeLanguage = (newLanguage) => {
      setLanguage(newLanguage);
    };

    return (
      <LanguageContext.Provider value={{ language, changeLanguage }}>
        {children}
      </LanguageContext.Provider>
    );
};

const LanguageSwitcher = () => {

    const { language, changeLanguage } = UseLanguage();

    const toggleLanguage = () => {
      const newLanguage = language === "es" ? "en" : "es";
      changeLanguage(newLanguage);
    };

    return (
      <button onClick={toggleLanguage} className={`font-bold text-base lg:text-xl`}>
        {language === "es" ? "English" : "Español"}
      </button>
    );
  };

export { LanguageSwitcher, UseLanguage as useLanguage, LanguageProvider };

