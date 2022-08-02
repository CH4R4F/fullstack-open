import contactCrud from "../services/contactCrud";

export const Contacts = ({ persons, setPersons, filtered }) => {
  const deleteContact = (e, name) => {
    const conf = window.confirm(`Delete ${name}?`);

    if (conf) {
      contactCrud.deleteContact(e.target.id).then(() => {
        setPersons(persons.filter((person) => person.id != e.target.id));
      });
    }
  };

  return (
    <>
      {persons
        .filter((person) => person.name.toLowerCase().includes(filtered))
        .map((person) => (
          <div key={person.id}>
            <span>
              {person.name} {person.number}
            </span>
            <button onClick={(e) => deleteContact(e, person.name)} id={person.id}>
              Delete
            </button>
          </div>
        ))}
    </>
  );
};
