/* -------------------------------------- */
/*          Secrtion des imports          */
/* -------------------------------------- */
// on importe la méthode createGlobalStyle du module
import { useContext } from "react";
import { createGlobalStyle } from "styled-components";
import { ThemeContext } from "../context/ThemeProvider";

/* ------------------------------------ */
/*          Section des styles          */
/* ------------------------------------ */

// on créer un style global
const StyledGlobalStyle = createGlobalStyle` 
    *{
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
    p > img {height: 100%;  width: 100%;
    }
    body {
        background-color:${({ $isDarkMode }) =>
          $isDarkMode ? "black" : "white"};
      margin: 0;
    }`;

// On créer une fonction qui retourne le style global
function GlobalStyle() {
  const { theme } = useContext(ThemeContext);
  return <StyledGlobalStyle $isDarkMode={theme === "dark"} />;
}

// on export
export default GlobalStyle;
