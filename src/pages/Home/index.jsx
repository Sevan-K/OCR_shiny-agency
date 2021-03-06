// on iporte l'image de fond
import homeIllustration from "../../assets/home-illustration.svg";

// on importe le module styled components
import styled from "styled-components";

// on importe les couleurs
import colors from "../../utils/style/colors";

// on importe le styled component global
import { StyledLink } from "../../utils/style/Atoms";

import { useTheme } from "../../utils/hooks";

// coposant avec style pour le wraper
const MainWrapper = styled.main`
   background-color: ${({ theme }) =>
      theme === "light" ? colors.backgroundLight : colors.backgroundDark};
   display: flex;
   flex-direction: row;
   padding: 50px 30px;
   width: 90%;
   margin: auto;
   & > p {
      flex: 1;
   }
`;

const LeftCol = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   flex: 1;
   ${StyledLink} {
      max-width: 250px;
   }
`;

// composant avec style pour le titre
const HomeTitle = styled.h2`
   padding-bottom: 30px;
   max-width: 280px;
   line-height: 50px;
`;

// création du composant Home
function Home() {
   // on récupère le thème
   const { theme } = useTheme();

   return (
      <MainWrapper theme={theme}>
         <LeftCol>
            <HomeTitle theme={theme}>
               Repérez vos besoins, on s'occupe du reste, avec les meilleurs
               talents
            </HomeTitle>
            <StyledLink to="/survey/1" $isFullLink>
               Faire le test
            </StyledLink>
         </LeftCol>
         <p>
            <img
               src={homeIllustration}
               alt="Illustration de la page d'accueil"
            />
         </p>
      </MainWrapper>
   );
}

// on exporte le composant Home
export default Home;
