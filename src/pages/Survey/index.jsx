/* -------------------------------------- */
/*          Secrtion des imports          */
/* -------------------------------------- */
// on importe le hook useEffect
import { useEffect, useState } from "react";
// on importe le hook useParams pour utiliser les paramètres d'url
import { useParams } from "react-router-dom";

// on importe Link depuis react router
import { Link } from "react-router-dom";

// on importe le module styled components
import styled from "styled-components";
import { Loader } from "../../utils/style/Atoms";

// on importe les couleurs
import colors from "../../utils/style/colors";

// composant avec style pour le lien
const StyledLink = styled(Link)`
  padding: 15px;
  color: black;
  font-size: 18px;
`;

/* ------------------------------------------- */
/*          Styled components section          */
/* ------------------------------------------- */
// coposant avec style pour le wraper
const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 30px;
  width: 90%;
  margin: auto;
`;

// coposant avec style pour le titre
const SurveyTitle = styled.h2`
  border-bottom: 1px solid ${colors.primary};
`;

// coposant avec style pour le container des boutons
const ButtonContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  padding: 30px;
`;

// coposant avec style pour les boutons
const StyledButton = styled.button`
  padding: 15px 50px;
  border: 1px solid ${colors.backgroundLight};
  background-color: ${colors.backgroundLight};
  border-radius: 15px;
  transition: 200ms ease-in-out;
  &:hover {
    border: 1px solid ${colors.primary};
    font-weight: bold;
  }
`;

const QuestionContent = styled.span`
  margin: 30px;
`;

/* --------------------------------------------- */
/*          Components creation section          */
/* --------------------------------------------- */
// on créer le composant Survey
function Survey() {
  // on déclare la paramètre pour récupérer le paramètre
  const { questionNumber } = useParams();
  const questionNumberAsInt = parseInt(questionNumber);
  const prevQuestionNumber = questionNumberAsInt - 1;
  const nextQuestionNumber = questionNumberAsInt + 1;

  // on défini le useStates avec les questions
  const [surveyData, setSurveyData] = useState({});
  // on défini le useState pour le loader
  const [isDataLoading, setDataLoading] = useState(false);
  // on defini le useState pour la gestion des erreurs
  const [error, setError] = useState(null);

  // useEffect pour lancer l'appel à l'API
  useEffect(() => {
    // setDataLoading(true);
    // fetch(`http://localhost:8000/survey`).then((response) =>
    //   response
    //     .json()
    //     .then(({ surveyData }) => setSurveyData(surveyData))
    //     .catch((error) => console.log(error))
    // );
    async function fethSurvey() {
      setDataLoading(true);
      try {
        const response = await fetch(`http://localhost:8000/survey`);
        const { surveyData } = await response.json();
        setSurveyData(surveyData);
        // console.log(surveyData);
      } catch (err) {
        console.log("erreur ========> ", err);
        setError(true);
      } finally {
        setDataLoading(false);
      }
    }
    fethSurvey();
  }, []);

  // en cas d'erreur on affiche le message d'erreur
  if (error) {
    return <span>Oups il y a eu un problème</span>;
  }
  
  return (
    <MainWrapper>
      <SurveyTitle>Question {questionNumber} </SurveyTitle>
      {isDataLoading ? (
        <Loader></Loader>
      ) : (
        <QuestionContent>{surveyData[questionNumberAsInt]}</QuestionContent>
      )}
      <ButtonContainer>
        <StyledButton>Oui</StyledButton>
        <StyledButton>Non</StyledButton>
      </ButtonContainer>
      <nav>
        {questionNumberAsInt !== 1 && (
          <StyledLink to={`/survey/${prevQuestionNumber}`}>
            Question Précdédente
          </StyledLink>
        )}
        {surveyData[questionNumberAsInt + 1] ? (
          <StyledLink to={"/survey/" + nextQuestionNumber}>
            Question Suivante
          </StyledLink>
        ) : (
          <StyledLink to="/results">Résultats</StyledLink>
        )}
      </nav>
    </MainWrapper>
  );
}
// on l'exporte
export default Survey;
