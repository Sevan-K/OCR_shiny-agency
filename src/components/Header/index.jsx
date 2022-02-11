/* -------------------------------------- */
/*          Secrtion des imports          */
/* -------------------------------------- */

// on importe le module styled components
import styled from "styled-components";

// on importe l'image
import darkLogo from "../../assets/dark-logo.png";

// on importe le styled component global
import { StyledLink } from "../../utils/style/Atoms";

/* ------------------------------------------- */
/*          Styled components section          */
/* ------------------------------------------- */

// composant avec style pour le header
const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

// composant avec style pour l'image
const HeaderLogo = styled.p`
  width: 300px;
`;

/* --------------------------------------------- */
/*          Components creation section          */
/* --------------------------------------------- */

// création du composant
function Header() {
  // on créer des lien non pas avec des balises a
  return (
    <StyledHeader>
      <HeaderLogo>
        <img src={darkLogo} alt="Dark Shini Logo" />
      </HeaderLogo>
      <nav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Freelances</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </nav>
    </StyledHeader>
  );
}

// on exporte le composant
export default Header;
