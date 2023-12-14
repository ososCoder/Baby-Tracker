import { useEffect } from "react";
import "./ActionList.css";

export default function ActionsList({ listOfActions, today }) {
   // useEffect(() => {
   //     //descarga de datos dende a base de datos
   // }, [])

   return (
      <>
         <p>{today}</p>
         <ul>
            {listOfActions.map((el, index) => {
               return (
                  <li key={index}>
                     <span>{el.time}</span>
                     <span>----</span>
                     <span>{el.action}</span>
                  </li>
               );
            })}
         </ul>
      </>
   );
}
