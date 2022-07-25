import Country from "./Country";

const Counties = ({ countries, show, setShow }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (countries.length === 1) {
    return <Country country={countries[0]} />;
  } else if (show) {
    return <Country country={show} />;
  }
  return (
    <ul>
      {countries.map((country, i) => (
        <li key={i}>
          {country.name.common}
          <button onClick={(e) => setShow(country)}>show</button>
        </li>
      ))}
    </ul>
  );
};

export default Counties;
