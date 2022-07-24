export const Contacts = ({persons, filtered}) => {
  return (
    <>
      {persons
        .filter((person) => person.name.toLowerCase().includes(filtered))
        .map((person) => (
          <p key={person.id}>
            {person.name} {person.number}
          </p>
        ))}
    </>
  )
}