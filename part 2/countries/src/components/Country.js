const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital: {country.capital[0]}</p>
      <p>population: {country.population}</p>
      <p>area: {country.area}</p>

      <h2>languages</h2>
      <ul>
        {Object.entries(country.languages).map(([abbr, lang]) => (
          <li key={abbr}>{lang}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.flag} />
    </div>
  );
};
export default Country;
