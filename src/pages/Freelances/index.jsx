// on importe le module styled components
import styled from "styled-components";
// on importe le composant tu Card
import Card from "../../components/Card";

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

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 350px);
  gap: 24px;
`;

// on créer le composant Results
function Frelances() {
  return (
    <div>
      <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${index}-${profile.name}`}
            label={profile.jobTitle}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </div>
  );
}
// on l'exporte
export default Frelances;
