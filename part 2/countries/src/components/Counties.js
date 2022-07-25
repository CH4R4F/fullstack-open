import Country from "./Country";

const Counties = ({ countries }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (countries.length === 1) {
    return <Country country={countries[0]} />;
  } else {
    return (
      <ul>
        {countries.map((country, i) => (
          <li key={i}>{country.name.common}</li>
        ))}
      </ul>
    );
  }
};

export default Counties;
