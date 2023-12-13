import { useEffect } from "react";
import "./ActionList.css";

export default function ActionsList({ listOfActions }) {
   // useEffect(() => {
   //     //descarga de datos dende a base de datos
   // }, [])

   return (
          <ul>
         {listOfActions.map((action, index) => {
            return (
               <li key={index}>
                  <span>{action.time}</span>
                  <span>{action.action}</span>
               </li>
            );
         })}
      </ul>
   );
}
