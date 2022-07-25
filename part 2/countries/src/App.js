import { useState, useEffect } from "react";
import axios from "axios";
import { Search } from "./components/Search";
import Counties from "./components/Counties";

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${search}`).then((response) => {
      setCountries(response.data);
    });
  }, [search]);

  return (
    <div>
      <Search search={search} setSearch={setSearch} setShow={setShow} />
      {search && <Counties countries={countries} show={show} setShow={setShow} />}
      {!search && <p>Search for a country</p>}
    </div>
  );
}

export default App;
