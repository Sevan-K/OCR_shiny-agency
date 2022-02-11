/* -------------------------------------- */
/*          Secrtion des imports          */
/* -------------------------------------- */
import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../utils/context";
import colors from "../../utils/style/colors";

/* ------------------------------------------- */
/*          Styled components section          */
/* ------------------------------------------- */

// styled component for the footer
const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`;

// styled components for the night mode button
const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.secondary};
`;

/* --------------------------------------------- */
/*          Components creation section          */
/* --------------------------------------------- */
// création du composant footer
function Footer() {
  const { theme, themeToggle } = useContext(ThemeContext);
  return (
    <FooterContainer>
      <NightModeButton onClick={() => themeToggle()}>
        Changer de mode : {theme === "light" ? "☀️" : "🌙"}
      </NightModeButton>
    </FooterContainer>
  );
}

// export du composant footer
export default Footer;
