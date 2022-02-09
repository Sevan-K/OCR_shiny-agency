// on importe propType
import PropTypes from "prop-types";

// on importe la photo depuis assets
import DefaultPicture from "../../assets/profile.png";

// création du composant carte pour freelance
// Card({ label, title='Sevan K', picture }) (valeur par défaut pour le nom : Sevan K)
function Card({ label, title, picture }) {
  //  on ajoute du style via l'attribut style
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: 15 }}>
      <span>{label}</span>
      <img src={picture} alt="Freelance" height={80} width={80} />
      <span>{title}</span>
    </div>
  );
}

// on précise les types de chacunes des prop
Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

// on déclare un opbjet defaultProps
Card.defaultProps = {
  label: "",
  title: "",
  picture: DefaultPicture,
};

// on exporte le composant
export default Card;
