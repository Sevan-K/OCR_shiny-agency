// on importe Link depuis react router
import { Link } from "react-router-dom";

// création du composant
function Header() {
    // on créer des lien non pas avec des balises a
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/survey">Questionnaire</Link>
    </nav>
  );
}

// on exporte le composant
export default Header;
