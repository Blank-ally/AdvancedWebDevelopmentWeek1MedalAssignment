import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Medal from './Medal';

export default function Country(props) {
  function getTotalMedalCount(){
    let sum = 0;
    props.medals.current.forEach((medal) => {
      sum += props.country[medal.name]
    })
    return sum;
  }
  return (

<div className="card m-2 col"  >
  <div className="card-body">
    <h5 className="card-title">{props.country.name} : {getTotalMedalCount()}</h5>
  <div className="card-text">
  {props.medals.current.map((medal) => (
      <Medal key={medal.id} name={ medal.name} count={props.country[medal.name]} countryId={props.country.id} onAdd={props.onAdd} onDecrement={props.onDecrement}  />
    ))}
  </div>
    <button onClick={() => props.onDelete(props.country.id)} className="btn btn-danger m-2">Delete </button>
  </div>
</div>


  );

  
  
}


{/* <p className="card-text">
{props.country.medals.current.map((medal) => (
    <Medal key={medal.id} medal={medal} />
  ))}
</p> */}
//  <button  onClick={() => props.onAdd(props.country.gold += 1)} className="btn btn-primary m-2">Add Medal </button>
  //   <div
  //     onClick={() => props.onDelete(props.country.id)}
  //     >
  //     {/* {props.country.name}
  //     Gold : {gold}
  //    */}

     
  // </div>

// import { useState } from "react";
// function Country() {
//     const [name, setName] = useState("United States");
//     const [gold, setGold] = useState(0);
  
//     function handleClick() {
//       // when a component's state is altered, it is re-rendered asynchronously by react
//       setGold(gold + 1);
//     }
  
//     return (
//       <div>
//        Country Name: {name} 
//         <br></br>
//         Gold : {gold}
//         <br></br>
//         <button  onClick={handleClick}>Add Gold </button>

//       </div>
//     );
//   }
  
//   export default Country;