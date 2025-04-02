import { useState, useEffect } from "react";
import CountryCard from "./CountryCard";

function App() {
  const ApiEndpoint = "https://xcountries-backend.azurewebsites.net/all";
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async() => {
      try {
        const response = await fetch(ApiEndpoint);
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchCountries();
  }, []);

  const renderedFlags = countries.map(({ flag, name, abbr }) => {
    return <CountryCard key={abbr} name={name} flag={flag} ></CountryCard>
  });

  return (
    <div style={{ display: "flex" ,flexWrap : "wrap", justifyContent:"center"}}>
      {renderedFlags}
    </div>
  )
}

export default App;
