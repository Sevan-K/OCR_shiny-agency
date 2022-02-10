/* -------------------------------------- */
/*          Secrtion des imports          */
/* -------------------------------------- */

// on importe le module styled components
import styled from "styled-components";

// on importe les couleurs
import colors from "../../utils/style/colors";

// on importe l'illustration
import errorIllustration from "../../assets/404.svg";

/* ------------------------------------------- */
/*          Styled components section          */
/* ------------------------------------------- */
// composant avec style pour le wraper
const MainWrapper = styled.main`
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  align-items: center;
`;

// composant avec style pour l'image
const ErrorImage = styled.img`
  max-width: 800px;
`;

// composant avec style pour les textes
const ErrorTitle = styled.h1`
  font-weight: 300;
`;
const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: ${colors.secondary};
`;

/* --------------------------------------------- */
/*          Components creation section          */
/* --------------------------------------------- */
// création du composant pour la page d'érreur 404
function Error() {
  return (
    <MainWrapper>
      <ErrorTitle>Oups...</ErrorTitle>
      <ErrorImage src={errorIllustration} alt="Illustration d'erreur 404" />
      <ErrorSubtitle>Il semblerait qu'il y ait un problème</ErrorSubtitle>
    </MainWrapper>
  );
}
// on exporte le composant
export default Error;
