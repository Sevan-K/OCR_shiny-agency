/* -------------------------------------- */
/*          Secrtion des imports          */
/* -------------------------------------- */
// on importe les hook
import { useEffect, useState } from "react";

// on importe le module styled components
import styled from "styled-components";
// on importe le composant tu Card
import Card from "../../components/Card";
import { Loader } from "../../utils/style/Atoms";

// on importe les couleurs
import colors from "../../utils/style/colors";

const freelanceProfiles = [
  {
    name: "Jane Doe",
    jobTitle: "Devops",
  },
  {
    name: "John Doe",
    jobTitle: "Developpeur frontend",
  },
  {
    name: "Jeanne Biche",
    jobTitle: "Développeuse Fullstack",
  },
];

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

// coposant avec style pour le cards container
const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`;

// coposant avec style pour le titres
const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`;

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`;

/* --------------------------------------------- */
/*          Components creation section          */
/* --------------------------------------------- */
// on créer le composant Results
function Frelances() {
  // on déclare le useState dans lequel seront stockées les données
  const [freelancersList, setFreelancersList] = useState([]);
  // on déclare le useState pour la gestion du loader
  const [isDataLoading, setDataLoading] = useState(false);
  // on déclare le useState pour afficher un message d'erreur
  const [isThereAnError, setError] = useState(null);

  // on utilise le useEffect pour récupérer les données
  useEffect(() => {
    async function fetchFrelances() {
      try {
        setDataLoading(true);
        // on récupère la réponse
        const response = await fetch(`http://localhost:8000/freelances`);
        // on la stocke dans la propriété profileData
        const { freelancersList } = await response.json();
        setFreelancersList(freelancersList);
        console.log(freelancersList);
      } catch (error) {
        console.log("erreur===> ", error);
        setError(true);
      } finally {
        setDataLoading(false);
      }
    }
    fetchFrelances();
  }, []);

  // on affiche un message s'il y a une erreur
  if(isThereAnError){
    <p>Oups... il y a un problème !</p>
  }

  return (
    <MainWrapper>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      <CardsContainer>
        {isDataLoading ? (
          <Loader></Loader>
        ) : (
          freelancersList.map((profile, index) => (
            <Card
              key={profile.id}
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
            />
          ))
        )}
      </CardsContainer>
    </MainWrapper>
  );
}
// on l'exporte
export default Frelances;
