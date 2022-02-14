// on importe propType
import PropTypes from "prop-types";

// on importe la photo depuis assets
import DefaultPicture from "../../assets/profile.png";

// on importe le module styled components
import styled from "styled-components";

// on importe les variables de couleur
import colors from "../../utils/style/colors";
import { useTheme } from "../../utils/hooks";

// on défini le style via une constante

// composant avec style pour le div qui entoure les cartes
const CardWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
   padding: 50px;
   background-color: ${({ theme }) =>
      theme === "light" ? colors.backgroundLight : colors.backgroundDark};
   border-radius: 30px;
   width: 250px;
   transition: 200ms;
   &:hover {
      cursor: pointer;
      box-shadow: 2px 2px 10px
         ${({ theme }) =>
            theme === "light" ? colors.shadow : colors.backgroundDark};
   }
`;

// composant avec style pour le label
const CardLabel = styled.span`
   color: ${({theme})=> theme==="light" ?colors.primary:"#fff"};
   font-size: 22px;
   font-weight: bold;
   align-self: flex-start;
`;

// composant avec style pour le titre
const CardTitle = styled.span`
   font-size: 22px;
   font-weight: normal;
   align-self: center;
`;

// composant avec style pour l'image
const CardImage = styled.img`
   height: 150px;
   width: 150px;
   align-self: center;
   border-radius: 50%;
`;

// création du composant carte pour freelance
// Card({ label, title='Sevan K', picture }) (valeur par défaut pour le nom : Sevan K)
function Card({ label, title, picture }) {
   // on récupère le thème
   const { theme } = useTheme();
   //  on ajoute du style via l'attribut style
   return (
      <CardWrapper theme={theme}>
         <CardLabel theme={theme}>{label}</CardLabel>
         <CardImage src={picture} alt="Freelance" />
         <CardTitle theme={theme}>{title}</CardTitle>
      </CardWrapper>
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
