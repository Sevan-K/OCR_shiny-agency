/* -------------------------------------- */
/*          Secrtion des imports          */
/* -------------------------------------- */
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import colors from "./colors";

/* ------------------------------------ */
/*          Section des styles          */
/* ------------------------------------ */

// style général pour les liens
export const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: ${({theme})=> theme==="light" ? colors.secondary:"#fff"};
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  ${(props) =>
    props.$isFullLink &&
    `color: white; 
    border-radius: 30px; 
    background-color: ${colors.primary};`}
`;


// style pour le loader
const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform : rotate(360deg);
}
`;

export const Loader = styled.div`
  padding: 10px;
  border: 6px solid ${colors.primary};
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`;
