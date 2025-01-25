import { useState } from "react";
function Country() {
    const [name, setName] = useState("United States");
    const [gold, setGold] = useState(0);
  
    function handleClick() {
      // when a component's state is altered, it is re-rendered asynchronously by react
      setGold(gold + 1);
    }
  
    return (
      <div>
       Country Name: {name} 
        <br></br>
        Gold : {gold}
        <br></br>
        <button  onClick={handleClick}>Add Gold </button>

      </div>
    );
  }
  
  export default Country;