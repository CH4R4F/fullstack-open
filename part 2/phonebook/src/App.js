import "./App.css";
import { useEffect, useState } from "react";
import { AddForm } from "./components/AddForm";
import { Contacts } from "./components/Contacts";
import { Filter } from "./components/Filter";
import contactCrud from "./services/contactCrud";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filtered, setFiltred] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    contactCrud.getAll().then((res) => setPersons(res));
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
    if (persons.some((person) => person.number == newNumber)) {
      let p = persons.find((person) => person.number == newNumber);
      p.name = newName;
      contactCrud.update(p).then((res) => {
        setPersons(persons.map((person) => (person.id === p.id ? res : person)));
        setAlert(`${newName} has been updated`);
        setTimeout(() => {
          setAlert(null);
        }, 5000);
      });
    } else {
      contactCrud.create(personName).then((res) => {
        setPersons(persons.concat(res));
        setAlert(`${newName} has been added`);
        setTimeout(() => {
          setAlert(null);
        }, 5000);
      });
    }
    setNewName("");
    setNewNumber("");
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} type="error" />
      <Notification message={alert} type="success" />
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
      <Contacts setErrorMessage={setErrorMessage} setPersons={setPersons} persons={persons} filtered={filtered} />
    </div>
  );
};

export default App;
