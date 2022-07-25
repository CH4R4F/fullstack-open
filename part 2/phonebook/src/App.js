import { useEffect, useState } from "react";
import { AddForm } from "./components/AddForm";
import { Contacts } from "./components/Contacts";
import { Filter } from "./components/Filter";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filtered, setFiltred] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((res) => setPersons(res.data));
  }, []);

  function addPerson(e) {
    e.preventDefault();
    if (persons.some((person) => person.name.toUpperCase() === newName.toUpperCase())) {
      alert(`${newName} is already added to phonebook`);
      return;
    } else if (!newName || !newNumber) {
      alert("You most fill all fields");
      return;
    }

    const personName = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    setPersons(persons.concat(personName));
    setNewName("");
    setNewNumber("");
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setFiltred={setFiltred} />
      <h1>Add New</h1>
      <AddForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <Contacts persons={persons} filtered={filtered} />
    </div>
  );
};

export default App;
