// on importe Link depuis react router
import { Link } from "react-router-dom";

// on importe le module styled components
import styled from "styled-components";

// on importe les couleurs
import colors from "../../utils/style/colors";

// on importe l'image
import darkLogo from "../../assets/dark-logo.png";

import "../../style/dev.css";

// composant avec style pour le header
const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

// composant avec style pour le lien
const StyledLink = styled(Link)`
  padding: 15px;
  color: ${colors.secondary};
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`;

// composant avec style pour l'image
const HeaderLogo = styled.p`
  width: 25%;
`;

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
        <StyledLink to="/survey/1">Questionnaire</StyledLink>
        <StyledLink to="/freelances" $isFullLink>
          Freelances
        </StyledLink>
      </nav>
    </StyledHeader>
  );
}

// on exporte le composant
export default Header;
