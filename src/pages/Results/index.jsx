/* -------------------------------------- */
/*          Secrtion des imports          */
/* -------------------------------------- */
import { useContext } from "react";
import styled from "styled-components";
import { SurveyContext } from "../../utils/context";
import { useFetch, useTheme } from "../../utils/hooks";
import { Loader, StyledLink } from "../../utils/style/Atoms";
// on importe les couleurs
import colors from "../../utils/style/colors";

/* ------------------------------------------- */
/*          Styled components section          */
/* ------------------------------------------- */

const ResultsContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 60px 90px;
   padding: 30px;
   background-color: ${({ theme }) =>
      theme === "light" ? colors.backgroundLight : colors.backgroundDark};
`;

const ResultsTitle = styled.h2`
   font-weight: bold;
   font-size: 28px;
   max-width: 60%;
   text-align: center;
   & > span {
      padding-left: 10px;
   }
`;

const DescriptionWrapper = styled.div`
   padding: 60px;
`;

const JobTitle = styled.span`
   color: ${({ theme }) =>
      theme === "light" ? colors.primary : colors.backgroundLight};
   text-transform: capitalize;
`;

const JobDescription = styled.div`
   font-size: 18px;
   & > p {
      color: ${({ theme }) =>
         theme === "light" ? colors.secondary : "#ffffff"};
      margin-block-start: 5px;
   }
   & > span {
      font-size: 20px;
   }
`;

const LoaderWrapper = styled.div`
   display: flex;
   justify-content: center;
`;

/* --------------------------------------------- */
/*          Components creation section          */
/* --------------------------------------------- */

// création de la fonction pour formater les paramètres de la requetes
function formatQueryParams(answers) {
   // on créer un tableau avec les numéros de questions
   const answerNumbers = Object.keys(answers);
   return answerNumbers.reduce((previousParams, answerNumber, index) => {
      const isFirstAnswer = index === 0;
      const separator = isFirstAnswer ? "" : "&";
      return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`;
   }, "");
}

// on créer le composant Results
function Results() {
   const { theme } = useTheme();
   // on récupère les réponses
   const { answers } = useContext(SurveyContext);
   // on affiche les réponses avec un useEffect
   // console.log("Object with answers", answers);
   // on utilise la méthode keys() de la classe Objet
   // et ensuite la méthode map pour retourner un objet pour chaque clée
   // const arrayAnswers = Object.keys(answers).map((key) => ({
   //    questionNumber: key,
   //    response: answers[key],
   // }));
   // console.log("Object with answers", [arrayAnswers]);

   // on déclare la constante avec les paramètres
   const queryParams = formatQueryParams(answers);
   // utilisation du useFetch pour faire la requette
   const { isLoading, data, error } = useFetch(
      `http://localhost:8000/results?${queryParams}`
   );

   console.log("======== data ====>", data);
   const { resultsData } = data;

   // retour en cas d'erreur
   if (error) {
      return <span>Oups il y a eu un problème</span>;
   }

   return isLoading ? (
      <LoaderWrapper>
         <Loader />
      </LoaderWrapper>
   ) : (
      <ResultsContainer theme={theme}>
         <ResultsTitle >
            Les compétences dont vous avez besoin :
            {resultsData &&
               resultsData.map((result, index) => (
                  <JobTitle
                     key={`result-title-${index}-${result.title}`}
                     theme={theme}
                  >
                     {result.title}
                     {index === resultsData.length - 1 ? "" : ","}
                  </JobTitle>
               ))}
         </ResultsTitle>
         <StyledLink $isFullLink to="/freelances">
            Découvrez nos profils
         </StyledLink>
         <DescriptionWrapper>
            {resultsData &&
               resultsData.map((result, index) => (
                  <JobDescription
                     theme={theme}
                     key={`result-detail-${index}-${result.title}`}
                  >
                     <JobTitle theme={theme}>{result.title}</JobTitle>
                     <p>{result.description}</p>
                  </JobDescription>
               ))}
         </DescriptionWrapper>
      </ResultsContainer>
   );
}
// on l'exporte
export default Results;
