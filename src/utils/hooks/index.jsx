/* -------------------------------------- */
/*          Secrtion des imports          */
/* -------------------------------------- */

import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context";

/* --------------------------------------------------- */
/*          Section pour le hook lié au fecth          */
/* --------------------------------------------------- */
// on créer une fonction useFetch (un hook doit commencer par use)
export function useFetch(url) {
   // on déclare un state local pour récupérer les données
   const [data, setData] = useState({});
   // on utilise un autre state local pour préciser si un chargement est en cours
   const [isLoading, setLoading] = useState(true);
   //    on créer un state pour la gestion des erreurs
   const [error, setError] = useState(false);
   // on utiliser un useEffect qui s'active à chaque fois que l'url change
   useEffect(() => {
      // si l'url est vide on fait un return pour ne rien retourner
      if (!url) return;
      // on passe le chargement à true
      setLoading(true);
      // sinon on fait appel à une fonction asynchrone
      async function fetchData() {
         try {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
         } catch (err) {
            console.log(err);
            setError(true);
         } finally {
            setLoading(false);
         }
      }
      // appel de la fonction
      fetchData();
   }, [url]);
   // on retourne les constantes
   return { isLoading, data, error };
}

/* --------------------------------------------------- */
/*          Section pour le hook lié au theme          */
/* --------------------------------------------------- */

export function useTheme() {
   // on récupère les données du theme context
   const { theme, themeToggle } = useContext(ThemeContext);
   return { theme, themeToggle };
}
