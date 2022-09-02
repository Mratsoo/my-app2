import { useState } from "react";

const Click = ({addClick}) => {

    const[counter, setCounter]= useState(0);
  
    const handleAddToClick = () => {
      const newCounter = counter + 1;
      setCounter(newCounter);
    }

    const handleRemoveToClick = () => {
        const newCounter = counter - 1;
        if(counter >0 )
        setCounter(newCounter);
      }
  
  
    return (
      <>
    <button type="button" class="btn btn-secondary" onClick={handleAddToClick}>Ajouter</button>
    <button type="button" class="btn btn-secondary" onClick={handleRemoveToClick}>Delete</button>
    <span className="ms-3">{counter}</span>
      </>
    );
  };
  
  export default Click;
