import { useState, useRef } from "react";
import Country from "./components/Country";
import NewCountry from "./components/NewCountry";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {



  // const [countries, SetCountries ] = useState([
  //   { id: 1, name: 'United States', gold: 2 },
  //   { id: 2, name: 'China', gold: 3 },
  //   { id: 3, name: 'France', gold: 0 },
  // ]);

  const medals = useRef([
    { id: 1, name: "gold" },
    { id: 2, name: "silver" },
    { id: 3, name: "bronze" },
  ]);
  
  // const [countries, SetCountries ] = useState([
  //   { id: 1, name: 'United States', medals },
  //   { id: 2, name: 'China', medals },
  //   { id: 3, name: 'France', medals },
  // ]);

  
  const [countries, SetCountries] = useState([
    { id: 1, name: "United States", gold: 2, silver: 2, bronze: 3 },
    { id: 2, name: "China", gold: 3, silver: 1, bronze: 0 },
    { id: 3, name: "France", gold: 0, silver: 2, bronze: 2 },
  ]);
  function incrementMedal(countryId,name) {
    // // use spread operator to clone array
    const countriesMutable = [...countries];
    // // use array.findIndex to return the index of the array element with matching id
    const idx = countriesMutable.findIndex((c) => c.id === countryId);
    // // increase gold attribute using the returned index
    countriesMutable[idx][name] += 1;
    SetCountries(countriesMutable)
    //console.log(countriesMutable);
    console.log(name)
    // countries

  }
function decrementMedal (countryId, name){
  const countriesMutable = [...countries];
  // // use array.findIndex to return the index of the array element with matching id
  const idx = countriesMutable.findIndex((c) => c.id === countryId);
  // // increase gold attribute using the returned index
  countriesMutable[idx][name] -= 1;
 
  SetCountries(countriesMutable)
}
function getTotalMedalCount() {
  let sum = 0
 medals.current.forEach(m => {
  sum += countries.reduce((a, b) => a + b[m.name] , 0);
 });
return sum;
  // return countries.reduce((a, b) => a + b["gold"] + b["silver"] + b["bronze"], 0);
}
  function handleDelete(CountryID) {
    console.log(`delete Country: ${CountryID}`);
    SetCountries(countries.filter((c) => c.id !== CountryID));
  }
  function handleAdd(text) {
    console.log(`add ${text}`);
    const id =
    countries.length === 0 ? 1 : Math.max(...countries.map((country) => country.id)) + 1;
    SetCountries(countries.concat({ id: id, name: text ,gold:0 ,silver:0 ,bronze:0 }));
  }


  return (
    <div className="row">
      <h2>Olympic Medals {getTotalMedalCount()}</h2>

      {countries.map((country) => (
        <Country key={country.id} country={country} medals={medals} onDelete={handleDelete}  onAdd={incrementMedal} onDecrement={decrementMedal}/>
       
      ))}
       <NewCountry onAdd={handleAdd} /> 
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
