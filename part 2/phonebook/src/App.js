import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  function addPerson(e) {
    e.preventDefault();
    if (persons.some((person) => person.name.toUpperCase() === newName.toUpperCase())) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const personName = {
        name: newName,
      };
      setPersons(persons.concat(personName));
      setNewName("");
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person}>{person.name}</p>
      ))}
    </div>
  );
};

export default App;
