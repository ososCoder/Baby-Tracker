import { useEffect, useState } from "react";
import "./FormActions.css";
import "./ActionsList";
import ActionsList from "./ActionsList";

export default function FormActions() {
   const [babyAction, setBabyAction] = useState("Durmir");
   const [actionTime, setActionTime] = useState("");
   const [actionsList, setActionsList] = useState([]);

   const getCurrentTime = () => {
      const now = new Date();
      const hour = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setActionTime(hour + ":" + minutes);
   };

   useEffect(() => {
      getCurrentTime();
   }, []);

   const handleActionChange = (e) => {
      e.preventDefault();

      setBabyAction(e.target.value);
      getCurrentTime();
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      
      confirm(`Vas a engadir a acción ${babyAction} as ${actionTime}`);
      const today = new Date();
      const newAction = {today, time: actionTime, action: babyAction};
      setActionsList([...actionsList, newAction]);

      //conexión coa base de datos
   };

   return (
      <>
         <form>
            <select
               value={babyAction}
               onChange={handleActionChange}
            >
               <option>Durmir</option>
               <option>Despertar</option>
               <option>Pis</option>
               <option>Caca</option>
               <option>Teta Dereita</option>
               <option>Teta Esquerda</option>
               <option>Biberón</option>
               <option>Vitaminas</option>
               <option>Probiótico</option>
               <option>Baño</option>
            </select>
            <input
               type="time"
               value={actionTime}
               onChange={(e) => setActionTime(e.target.value)}
            ></input>
            <button type="submit" onClick={handleSubmit}>Aceptar</button>
         </form>
         <ActionsList listOfActions={actionsList}/>
      </>
   );
}

//o submit debe de gardar na base de datos e débese de ler dende ActionsList cun useEffect para pintar toda a info. Non pasarse dende aquí