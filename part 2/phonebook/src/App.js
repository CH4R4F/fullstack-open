import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", number: "040-1234567" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

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
    };
    setPersons(persons.concat(personName));
    setNewName("");
    setNewNumber("");
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number:{" "}
          <input type="number" value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
