import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filtered, setFiltred] = useState(persons)

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
      id: persons.length + 1
    };
    setPersons(persons.concat(personName));
    setNewName("");
    setNewNumber("");
  }

  function filterPhones(e) {
    let keyword = e.target.value
    setFiltred(persons.filter(person => person.name.toLowerCase().includes(keyword.toLowerCase())))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input onChange={filterPhones} />
      </div>
      <form onSubmit={addPerson}>
        <h1>Add New</h1>
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
      {filtered.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
