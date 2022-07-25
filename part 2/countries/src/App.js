import { useState, useEffect } from "react";
import axios from "axios";
import { Search } from "./components/Search";
import Counties from "./components/Counties";

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${search}`).then((response) => {
      setCountries(response.data);
    });
  }, [search]);

  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      {search && <Counties countries={countries} />}
      {!search && <p>Search for a country</p>}
    </div>
  );
}

export default App;
