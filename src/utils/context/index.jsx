/* ------------------------------------- */
/*          Section des imports          */
/* ------------------------------------- */
// on importe le hook createContext depuis
import { createContext, useState } from "react";

/* ------------------------------------------------------- */
/*          Section pour le contexte lié au theme          */
/* ------------------------------------------------------- */

// on créer le theme contexte qui sera utilisé dans
export const ThemeContext = createContext();

// on créer le composant provider pour le theme
// les enfants de ce composants ne sont pas connus à l'avance
export const ThemeProvider = ({ children }) => {
  // on déclare les useStates généraux nécessaires pour le changement de thème
  const [theme, setTheme] = useState("light");
  // on créer la fonction pour changer le thème en fonction de celui qui est actif
  const themeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  // on
  return (
    <ThemeContext.Provider value={{ theme, themeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};


/* ---------------------------------------------------------- */
/*          Section pour le contexte lié au réponses          */
/* ---------------------------------------------------------- */

export const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {
  const [answers, setAnswers] = useState({});
  const saveAnswers = (newAnswers) => {
    setAnswers({ ...answers, ...newAnswers });
  };

  return (
    <SurveyContext.Provider value={{ answers, saveAnswers }}>
      {children}
    </SurveyContext.Provider>
  );
};
