// on importe le hook useParams pour utiliser les paramètres d'url
import { useParams } from "react-router-dom";

// on importe Link depuis react router
import { Link } from "react-router-dom";

// on créer le composant Survey
function Survey() {
  // on déclare la paramètre pour récupérer le paramètre
  const { questionNumber } = useParams();
  const questionNumberAsInt = parseInt(questionNumber);
  const prevQuestionNumber = questionNumberAsInt - 1;
  const nextQuestionNumber = questionNumberAsInt + 1;
  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question numéro : {questionNumber} </h2>
      <nav>
        {questionNumberAsInt !== 1 && (
          <Link to={`/survey/${prevQuestionNumber}`}>Question Précdédente</Link>
        )}
        {questionNumberAsInt < 10 ? (
          <Link to={"/survey/" + nextQuestionNumber}>Question Suivante</Link>
        ) : (
          <Link to="/results">Résultats</Link>
        )}
      </nav>
    </div>
  );
}
// on l'exporte
export default Survey;
