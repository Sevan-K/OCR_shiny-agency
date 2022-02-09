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

// on créer le composant Results
function Frelances() {
  return (
    <div>
      <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
      {freelanceProfiles.map((profile, index) => (
        <Card
          key={`${index}-${profile.name}`}
          label={profile.jobTitle}
          title={profile.name}
        />
      ))}
    </div>
  );
}
// on l'exporte
export default Frelances;
