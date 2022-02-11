import { useContext, useEffect } from "react";
import { SurveyContext } from "../../utils/context";

// on créer le composant Results
function Results() {
   // on récupère les réponses
   const { answers } = useContext(SurveyContext);
   // on affiche les réponses avec un useEffect
   console.log("Object with answers", answers);
   // on utilise la méthode keys() de la classe Objet
   // et ensuite la méthode map pour retourner un objet pour chaque clée
   const arrayAnswers = Object.keys(answers).map((key) => ({
      questionNumber: key,
      response: answers[key],
   }));

   console.log("Object with answers", [arrayAnswers]);

   return (
      <div>
         <h1>Résultats 👏🥳</h1>
         {arrayAnswers.map((answer) => (
            <p key={`answer-${answer.questionNumber}`}>
               {`Réponse à la question ${answer.questionNumber} : ${answer.response}`}
            </p>
         ))}
      </div>
   );
}
// on l'exporte
export default Results;
