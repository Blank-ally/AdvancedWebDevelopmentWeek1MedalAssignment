import { useState } from "react";
import Country from "./components/Country";
import "./App.css";

import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
function App() {



  const [countries, SetCountries ] = useState([
    { id: 1, name: 'United States', gold: 2 },
    { id: 2, name: 'China', gold: 3 },
    { id: 3, name: 'France', gold: 0 },
  ]);

  function handleDelete(CountryID) {
    console.log(`delete Country: ${CountryID}`);
    SetCountries(countries.filter((c) => c.id !== CountryID));
  }

  function handleAddMedal(CountryID) {
    console.log(`Add medal to Country: ${CountryID}`);
    SetCountries(countries.filter((c) => c.id !== CountryID));
  }

  return (
    <div className="row">

      {countries.map((country) => (
        <Country key={country.id} country={country} onDelete={handleDelete}  onAdd={handleAddMedal}/>
      ))}

    </div>
  );
}
export default App;




// import Country from "./components/Country";
// import './App.css'

// function App() {
  

//   return (
//  <Country/>
//   )
// }

// export default App
